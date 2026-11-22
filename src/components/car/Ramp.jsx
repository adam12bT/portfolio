/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useHeightfield } from "@react-three/cannon";
import { RAMP_MATERIAL } from "./vehicleConfig";
import { buildRampMeshes } from "./rampGeometry.js";

function SolidRamp({ mesh }) {
  const [ref] = useHeightfield(() => ({
    type: "Static",
    material: RAMP_MATERIAL,
    args: [mesh.heightfield.heights, { elementSize: mesh.heightfield.elementSize }],
    position: mesh.heightfield.position,
    rotation: mesh.heightfield.rotation,
  }), undefined, [mesh]);
  return <><group ref={ref} /><mesh geometry={mesh.geometry} material={mesh.material} castShadow receiveShadow /></>;
}

export function Ramp({ placement }) {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}car/ramp.glb`);
  const meshes = useMemo(() => buildRampMeshes(scene, placement), [scene, placement]);
  return <group>{meshes.map((mesh, index) => <SolidRamp key={index} mesh={mesh} />)}</group>;
}
