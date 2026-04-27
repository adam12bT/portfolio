/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import { useGLTF } from "@react-three/drei"; // Import from @react-three/drei
import { Debug } from "@react-three/cannon";

import { Ramp } from "./Ramp";
import { Bri } from "./bridje";
import { Brii } from "./briddje";

export function Track() {
  const { scene } = useGLTF("./car/xx.glb");

  // Define the properties for the Ramp
  const rampProps = {
    position: [3.8, 0, 4.55],
    rotation: [0, Math.PI / 2, 0],
    scale: [3.7, 4, 4], // Scale values to be passed
  };
  
  const rampProps2 = {
    position : [1.6, 0, 11.9], rotation : [0, -Math.PI / 2, 0], scale : [3.7, 4, 4],
  };
  return (
    <>
      <hemisphereLight intensity={1.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {/* Render the track */}
      <primitive
        object={scene}
        scale={0.059}
        position={[-4, -0.12, -11]}
      />
      {/* Pass the ramp properties as props */}

      <Ramp  {...rampProps}/>
      <Ramp  {...rampProps2}/>

      <Bri/>
      <Brii/>
      </>

  );
}
