/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Ramp({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) {
  const result = useLoader(GLTFLoader, "/car/ramp.glb");

  const geometry = useMemo(() => {
    if (!result.scene?.children?.length) return null;
    return result.scene.children[0].geometry;
  }, [result]);

  const { vertices, indices } = useMemo(() => {
    if (!geometry) return { vertices: [], indices: [] };

    const vertices = Array.from(geometry.attributes.position.array);
    const indices = Array.from(geometry.index.array);

    // Scale vertices
    const scaledVertices = vertices.map((v, i) => v * scale[i % 3]); // Scale x, y, z dynamically
    return { vertices: scaledVertices, indices };
  }, [geometry, scale]);

  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0, // Static object
      position, // Physics body position
      rotation, // Physics body rotation
    }),
    useRef(null)
  );

  return (
    geometry && (
      <mesh
        ref={ref}
        geometry={geometry}
        scale={scale}
        position={position}
        rotation={rotation}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>
    )
  );
}
