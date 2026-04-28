import React, { Suspense, useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const API_URL = "https://ai-cv-vr15.onrender.com/ask";

const TEX_W = 1024; // ← halved from 2048; still crisp on screen
const TEX_H = 512;  // ← halved from 1024

// ─── Canvas texture hook ───────────────────────────────────────────────────────
// Key fix: offscreen canvas and CanvasTexture are created once and never recreated.
// Only needsUpdate is set when content actually changes.
function useScreenTexture() {
  const canvasRef = useRef(null);
  const texRef = useRef(null);

  if (!canvasRef.current) {
    const offscreen = document.createElement("canvas");
    offscreen.width = TEX_W;
    offscreen.height = TEX_H;
    canvasRef.current = offscreen;

    const tex = new THREE.CanvasTexture(offscreen);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.flipY = false;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1);
    tex.offset.set(1, 1);
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    texRef.current = tex;
  }

  // Returns a stable `paint` function — call it only when text/cursor actually changes.
  const paint = useCallback((displayedText, cursorVisible) => {
    const offscreen = canvasRef.current;
    const ctx = offscreen.getContext("2d");
    const S = 1.25; // scaled down proportionally with texture size
    const PAD = 60 * S;
    const FONT = "'DM Sans', 'Segoe UI', sans-serif";

    ctx.fillStyle = "#0d0f1a";
    ctx.fillRect(0, 0, TEX_W, TEX_H);

    ctx.fillStyle = "rgba(124,58,237,0.12)";
    const GRID = 48 * S;
    for (let x = GRID / 2; x < TEX_W; x += GRID)
      for (let y = GRID / 2; y < TEX_H; y += GRID) {
        ctx.beginPath();
        ctx.arc(x, y, S * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

    const fontSize = 20 * S;
    const lineH = 36 * S;
    const maxW = TEX_W - PAD * 2;
    let ty = 60 * S;

    ctx.font = `300 ${fontSize}px ${FONT}`;
    const words = displayedText.split(" ");
    let line = "";
    const allLines = [];

    for (let i = 0; i < words.length; i++) {
      const test = line + words[i] + " ";
      if (ctx.measureText(test).width > maxW && line !== "") {
        allLines.push(line.trimEnd());
        line = words[i] + " ";
      } else {
        line = test;
      }
    }
    allLines.push(line.trimEnd());

    for (let i = 0; i < allLines.length - 1; i++) {
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.font = `300 ${fontSize}px ${FONT}`;
      ctx.shadowColor = "rgba(200,180,255,0.6)";
      ctx.shadowBlur = 18;
      ctx.fillText(allLines[i], PAD, ty);
      ctx.shadowBlur = 0;
      ty += lineH;
      if (ty > TEX_H - 120 * S) break;
    }

    const lastWords = allLines[allLines.length - 1].split(" ").filter(Boolean);
    let lx = PAD;
    ctx.font = `300 ${fontSize}px ${FONT}`;
    for (let i = 0; i < lastWords.length; i++) {
      const isLast = i === lastWords.length - 1;
      ctx.fillStyle = isLast ? "#c084fc" : "rgba(255,255,255,0.95)";
      ctx.shadowColor = isLast ? "rgba(168,85,247,0.8)" : "rgba(200,180,255,0.6)";
      ctx.shadowBlur = 18;
      const word = lastWords[i] + (isLast ? "" : " ");
      ctx.fillText(word, lx, ty);
      ctx.shadowBlur = 0;
      lx += ctx.measureText(lastWords[i] + " ").width;
    }

    if (cursorVisible) {
      ctx.fillStyle = "#7c3aed";
      ctx.fillRect(lx + 2 * S, ty - fontSize * 0.88, 3 * S, fontSize * 1.05);
    }

    const ts = new Date().toTimeString().slice(0, 8);
    const fade = ctx.createLinearGradient(0, TEX_H - 100 * S, 0, TEX_H);
    fade.addColorStop(0, "rgba(13,15,26,0)");
    fade.addColorStop(1, "rgba(13,15,26,0.95)");
    ctx.fillStyle = fade;
    ctx.fillRect(0, TEX_H - 100 * S, TEX_W, 100 * S);

    ctx.font = `${14 * S}px ${FONT}`;
    ctx.fillStyle = "rgba(168,85,247,0.5)";
    ctx.textAlign = "left";
    ctx.fillText(`adam.dev  ·  ${displayedText.length} chars`, PAD, TEX_H - 30 * S);
    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.fillText(`Time:  ${ts}`, TEX_W - PAD, TEX_H - 30 * S);
    ctx.textAlign = "left";

    texRef.current.needsUpdate = true;
  }, []); // no deps — stable forever

  return { texture: texRef.current, paint };
}

// ─── Monitor model ─────────────────────────────────────────────────────────────
function Monitor({ isMobile, displayedText, cursorVisible }) {
  const { scene } = useGLTF("/control_room_monitor.glb");
  const { gl } = useThree();
  const matRef = useRef(null);
  const { texture: screenTex, paint } = useScreenTexture();

  // Paint only when text or cursor actually changes — not on every render
  const prevText = useRef(null);
  const prevCursor = useRef(null);
  useEffect(() => {
    if (displayedText !== prevText.current || cursorVisible !== prevCursor.current) {
      paint(displayedText, cursorVisible);
      prevText.current = displayedText;
      prevCursor.current = cursorVisible;
    }
  }, [displayedText, cursorVisible, paint]);

  // Apply material once on mount
  useEffect(() => {
    if (!scene || !screenTex) return;
    screenTex.anisotropy = gl.capabilities.getMaxAnisotropy();

    const mat = new THREE.MeshStandardMaterial({
      map: screenTex,
      emissiveMap: screenTex,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 1.6,
      roughness: 0.08,
      transparent: true,
      opacity: 0.95,
      metalness: 0.05,
    });

    scene.traverse((obj) => {
      if (obj.isMesh && obj.name === "Object_4") {
        obj.material = mat;
      }
    });

    matRef.current = mat;
  }, [scene, gl, screenTex]);

  const { scale, center } = useMemo(() => {
    if (!scene) return { scale: 1, center: new THREE.Vector3() };
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const safeScale = maxDim > 0 ? 1.4 / maxDim : 1;
    return { scale: safeScale, center };
  }, [scene]);

  return (
    <primitive
      object={scene}
      rotation={[0, -Math.PI / 2, 0]}
      scale={isMobile ? scale * 0.5 : scale}
      position={[
        -center.x * scale,
        -center.y * scale,
        -center.z * scale,
      ]}
    />
  );
}

// ─── Invalidate Three.js frame only when texture changes ──────────────────────
// Works together with frameloop="demand" so GPU is idle when nothing moves.
function TextureInvalidator({ displayedText, cursorVisible }) {
  const { invalidate } = useThree();
  useEffect(() => {
    invalidate();
  }, [displayedText, cursorVisible, invalidate]);
  return null;
}

// ─── Main canvas component ─────────────────────────────────────────────────────
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Slow down cursor blink slightly to halve texture repaints (530 → 600ms)
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const streamTimerRef = useRef(null);

  function streamText(text, speed = 26) {
    clearTimeout(streamTimerRef.current);
    setDisplayedText("");
    let i = 0;
    function next() {
      if (i < text.length) {
        const char = text[i++];
        setDisplayedText((prev) => prev + char);
        streamTimerRef.current = setTimeout(next, speed + Math.random() * speed * 0.5);
      }
    }
    next();
  }

  const DEMO_LINES = [
    "Hi, I'm Adam.",
    "I create user experiences, interactive visuals, and robust applications.",
    "This monitor streams AI responses in real time and you can ask it anything about me or my work.",
  ];

  const demoIndexRef = useRef(0);
  const demoTimeoutRef = useRef(null);
  const demoRunningRef = useRef(false);

  function runDemoLine() {
    if (!demoRunningRef.current) return;
    const line = DEMO_LINES[demoIndexRef.current++ % DEMO_LINES.length];
    streamText(line, 26);
    demoTimeoutRef.current = setTimeout(runDemoLine, line.length * 30 + 2600);
  }
  function startDemo() {
    demoRunningRef.current = true;
    runDemoLine();
  }
  function stopDemo() {
    demoRunningRef.current = false;
    clearTimeout(demoTimeoutRef.current);
  }

  useEffect(() => {
    startDemo();
    return () => stopDemo();
  }, []);

  async function handleTransmit() {
    const question = inputVal.trim();
    if (!question || isLoading) return;

    stopDemo();
    setInputVal("");
    setIsLoading(true);
    streamText("Thinking...", 30);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();
      streamText(data.answer, 22);
    } catch (err) {
      streamText("Could not reach the CV server. Please try again.", 22);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Canvas
        frameloop="demand"       // ← was "always"; now only renders when invalidated
        shadows
        dpr={[1, 1.5]}           // ← was [1, 2]; cap at 1.5× to save fill-rate on HiDPI
        camera={{ position: [0, 0.1, 1.8], fov: 30 }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight color={0x1a1030} intensity={6} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} color={0xffffff} />
        <directionalLight position={[-2, 1, -1]} intensity={1.2} color={0x7c3aed} />

        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI}
            maxAzimuthAngle={Math.PI}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <Monitor
            isMobile={isMobile}
            displayedText={displayedText}
            cursorVisible={cursorVisible}
          />
          {/* Triggers a Three.js repaint when texture content changes */}
          <TextureInvalidator
            displayedText={displayedText}
            cursorVisible={cursorVisible}
          />
        </Suspense>
        <Preload all />
      </Canvas>

      <div style={{
        position: "absolute", bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", gap: 10, alignItems: "center", zIndex: 10,
      }}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleTransmit()}
          placeholder="Ask anything about Adam..."
          disabled={isLoading}
          style={{
            background: "rgba(13,15,26,0.9)",
            border: `1px solid ${isLoading ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.35)"}`,
            color: "#ffffff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14, padding: "10px 18px", width: 360,
            outline: "none", borderRadius: 6,
            opacity: isLoading ? 0.6 : 1,
            transition: "opacity 0.2s, border-color 0.2s",
          }}
        />
        <button
          onClick={handleTransmit}
          disabled={isLoading}
          style={{
            background: isLoading ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.2)",
            border: "1px solid rgba(124,58,237,0.5)",
            color: "#a855f7",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 700,
            padding: "10px 20px", cursor: isLoading ? "not-allowed" : "pointer",
            borderRadius: 6, letterSpacing: "0.05em",
            opacity: isLoading ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          {isLoading ? "..." : "ASK"}
        </button>
        <button
          onClick={() => { demoIndexRef.current = 0; startDemo(); }}
          disabled={isLoading}
          style={{
            background: "rgba(124,58,237,0.2)",
            border: "1px solid rgba(124,58,237,0.5)",
            color: "#a855f7",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 700,
            padding: "10px 20px", cursor: isLoading ? "not-allowed" : "pointer",
            borderRadius: 6, letterSpacing: "0.05em",
            opacity: isLoading ? 0.5 : 1,
          }}
        >
          AUTO DEMO
        </button>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
        input::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
};

export default ComputersCanvas;
