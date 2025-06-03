/* eslint-disable no-undef */
import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Brii({ position =[-4.49, 0, -2.2], rotation = [0, 0, 0], scale = [0.059, 0.059,0.059] }){
  // Load the GLTF model
  const result = useLoader(GLTFLoader,"./car/new1.glb");

  // Extract the geometry of the first child
  const geometry = result.scene.children[0].geometry;

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;
  const scaledVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    scaledVertices[i] = vertices[i] * scale[0];       // Scale x
    scaledVertices[i + 1] = vertices[i + 1] * scale[1]; // Scale y
    scaledVertices[i + 2] = vertices[i + 2] * scale[2]; // Scale z
  }
  // Create the static physics body
  const [ref] = useTrimesh(() => ({
    args: [scaledVertices, indices],
    mass: 0, // Static body
    position,
    rotation,
    type: "Static", // Ensure correct capitalization
  }), useRef(null));

  // Optionally log ref and position to debug
  useEffect(() => {
  
  }, [ref]);

 
}
