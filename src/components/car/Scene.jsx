/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Car } from "./Car";
import { Ground } from "./Ground";
import { Debug } from "@react-three/cannon";

import { Track } from "./Track";
import Loader from '../Loader'; 
import { Physics } from "@react-three/cannon";

export function Scene({ cameraPosition = [40, 130, -140] }) {
  return (
    <Physics broadphase="SAP" gravity={[0, -5, 0]} substeps={3}>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />

        <group >
          <PerspectiveCamera makeDefault position={cameraPosition} fov={20} />
          <OrbitControls  maxPolarAngle={Math.PI / 2} />

          <Ground />
          
          <Track />

          <Car />

        </group>
      </Suspense>

    </Physics>
  );
}
