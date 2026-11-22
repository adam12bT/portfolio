/* eslint-disable react/no-unknown-property */
import { Ramp } from "./Ramp";
import { StaticModel } from "./StaticModel";
import { RAMP_ENTRIES } from "./rampGeometry.js";

const TRACK_POSITION = [-4, -0.12, -11];
const TRACK_SCALE = [0.059, 0.059, 0.059];

export function Track() {
  return <>
    <hemisphereLight intensity={1.15} groundColor="black" />
    <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1}
      intensity={1} castShadow shadow-mapSize={1024} />
    <pointLight intensity={1} />
    <StaticModel smoothRoad url={`${import.meta.env.BASE_URL}car/xx.glb`}
      position={TRACK_POSITION} scale={TRACK_SCALE} />
    {RAMP_ENTRIES.map((placement, index) => <Ramp key={index} placement={placement} />)}
  </>;
}
