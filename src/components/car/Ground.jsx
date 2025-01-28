/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { usePlane, useBox } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, TextureLoader, Vector3 } from "three";

export function Ground() {
  const [ref] = usePlane(() => ({ type: 'Static', rotation: [-Math.PI / 2, 0, 0] }), useRef(null));

  const gridMap = useLoader(TextureLoader, "/car/grid.png");

  const meshRef = useRef(null);
  const halfSphereRef = useRef(null);

  useEffect(() => {
    if (gridMap) gridMap.anisotropy = 16;
  }, [gridMap]);

  useEffect(() => {
    if (meshRef.current) {
      const uvs = meshRef.current.geometry.attributes.uv.array;
      meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
    }
  }, [meshRef]);

  const sphereCenter = new Vector3(-2.285, -0.015, -1.325);
  const sphereRadius = 19;

  const [boxRef] = useBox(() => ({
    type: "Static",
    position: [0.19, 1.05, -2.2],
    args: [8.9, 0, 1.8], 
  }));

  return (
    <>
      <mesh ref={meshRef} position={[-2.285, -0.015, -1.325]} rotation-x={-Math.PI * 0.5}>
        <circleGeometry args={[20, 50]} />
        <MeshReflectorMaterial
          color={"#56ab2f"}
          envMapIntensity={1}
          metalness={0.05}
          roughness={0.4}
          dithering={true}
          blur={[1024, 512]}
          mixBlur={3}
          mixStrength={30}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.02}
        />
      </mesh>

      {/* Half sphere encompassing the map */}
      <mesh ref={halfSphereRef} position={sphereCenter} rotation-y={Math.PI / 2}>
        <sphereGeometry args={[sphereRadius, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial
          map={gridMap}
          side={2} // Double side for inside visibility
          transparent={true}
          opacity={0.25}
          color="white"
        />
      </mesh>

      {/* Static Box with proper collision */}
   
    </>
  );
}
