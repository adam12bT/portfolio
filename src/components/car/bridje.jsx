/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Bri({ position =[-4, 1.2, 0.1], rotation = [0, 0, 0], scale = [27.19, 25, 22.6] }){
  // Load the GLTF model
  const result = useLoader(GLTFLoader, "./car/floating.glb");

  const geometry = result.scene.children[0].geometry;

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;
  const scaledVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    scaledVertices[i] = vertices[i] * scale[0];       
    scaledVertices[i + 1] = vertices[i + 1] * scale[1]; 
    scaledVertices[i + 2] = vertices[i + 2] * scale[2]; 
  }
  const [ref] = useTrimesh(() => ({
    args: [scaledVertices, indices],
    mass: 0, // Static body
    position,
    rotation,
    type: "Static", // Ensure correct capitalization
  }), useRef(null));

  useEffect(() => {
   
  }, [ref]);

  return (
    <mesh ref={ref} geometry={geometry} scale={scale} position={position} rotation={rotation} castShadow receiveShadow>
      <meshStandardMaterial attach="material" color="#8B4513" />
    </mesh>
  );
}
