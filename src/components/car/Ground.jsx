/* eslint-disable react/no-unknown-property */
import { useCompoundBody, useCylinder } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import { MAP_CENTER, MAP_RADIUS, GROUND_Y } from "./mapConfig";

function Boundary() {
  const segments = 64;
  const [ref] = useCompoundBody(() => ({
    type: "Static",
    shapes: Array.from({ length: segments }, (_, i) => {
      const angle = i * Math.PI * 2 / segments;
      return {
        type: "Box",
        args: [2 * MAP_RADIUS * Math.tan(Math.PI / segments) + 0.04, 0.8, 0.15],
        position: [MAP_CENTER[0] + Math.sin(angle) * MAP_RADIUS, 0.35,
          MAP_CENTER[2] + Math.cos(angle) * MAP_RADIUS],
        rotation: [0, angle, 0],
      };
    }),
  }));
  return <group ref={ref} />;
}

export function Ground() {
  const gridMap = useLoader(TextureLoader, `${import.meta.env.BASE_URL}car/grid.png`);
  const [ref] = useCylinder(() => ({
    type: "Static",
    args: [MAP_RADIUS, MAP_RADIUS, 0.2, 64],
    position: [MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]],
  }), undefined, [GROUND_Y, MAP_RADIUS]);
  return <>
    <mesh ref={ref} receiveShadow>
      <cylinderGeometry args={[MAP_RADIUS, MAP_RADIUS, 0.2, 64]} />
      <meshStandardMaterial color="#56ab2f" roughness={0.9}
        polygonOffset polygonOffsetFactor={1} polygonOffsetUnits={2} />
    </mesh>
    <Boundary />
    <mesh position={MAP_CENTER} rotation-y={Math.PI / 2}>
      <sphereGeometry args={[MAP_RADIUS, 64, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshBasicMaterial map={gridMap} side={DoubleSide} transparent opacity={0.15}
        depthWrite={false} color="white" />
    </mesh>
  </>;
}
