/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useTrimesh } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { buildMapMeshes, buildTrackColliders } from "./mapGeometry";

const ZERO = [0, 0, 0];
const UNIT = [1, 1, 1];

export function MapMesh({ mesh, collidable = true }) {
  const [ref] = useTrimesh(() => ({
    type: "Static",
    material: mesh.physicsMaterial,
    args: [mesh.vertices, mesh.indices],
    collisionFilterMask: collidable ? -1 : 0,
  }), undefined, [mesh.vertices, mesh.indices, mesh.physicsMaterial, collidable]);
  return <mesh ref={ref} name={mesh.name} geometry={mesh.geometry}
    material={mesh.material} castShadow receiveShadow />;
}

function TrackCollision({ collider }) {
  const [ref] = useTrimesh(() => ({ type: "Static", material: collider.physicsMaterial,
    args: [collider.vertices, collider.indices] }), undefined,
    [collider.vertices, collider.indices, collider.physicsMaterial]);
  return <group ref={ref} />;
}

export function StaticModel({ smoothRoad = false, url, position = ZERO, rotation = ZERO, scale = UNIT, collidable = true }) {
  const { scene } = useGLTF(url);
  const meshes = useMemo(() => buildMapMeshes(scene, position, rotation, scale),
    [scene, position, rotation, scale]);
  const colliders = useMemo(() => smoothRoad ? buildTrackColliders(meshes) : null, [meshes, smoothRoad]);
  return <group>
    {colliders ? <>
      {meshes.map((mesh, index) => <mesh key={index} name={mesh.name}
        geometry={mesh.geometry} material={mesh.material} castShadow receiveShadow />)}
      {collidable && colliders.map((collider, index) => <TrackCollision key={index} collider={collider} />)}
    </> : meshes.map((mesh, index) => <MapMesh key={index} mesh={mesh} collidable={collidable} />)}
  </group>;
}
