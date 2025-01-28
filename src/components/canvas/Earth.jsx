/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Scene } from "../car/Scene";

// Earth component for mobile
const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Desktop scene component


const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Set initial value
    handleMediaQueryChange(mediaQuery);

    // Add the listener for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 30,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6], // Adjust as needed
      }}
    >

      <Suspense fallback={<CanvasLoader />}>
        {isMobile ? (
          <>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </>
        ) : (
          <Scene />
          
        )}

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
