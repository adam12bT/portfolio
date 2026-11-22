// @refresh reset
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Car } from "./Car";
import { CHASSIS_MATERIAL, RAMP_MATERIAL, BRIDGE_MATERIAL, BRIDGE_CONTACT, RAMP_CONTACT } from "./vehicleConfig";
import { Ground } from "./Ground";


import { Track } from "./Track";
import Loader from '../Loader'; 
import { Physics, useContactMaterial } from "@react-three/cannon";

function DrivingSurfaceContacts() {
  useContactMaterial(CHASSIS_MATERIAL, RAMP_MATERIAL, RAMP_CONTACT);
  useContactMaterial(CHASSIS_MATERIAL, BRIDGE_MATERIAL, BRIDGE_CONTACT);
  return null;
}

export function Scene({ active = true, cameraPosition = [40, 130, -140] }) {
  return (
    <Physics isPaused={!active} broadphase="SAP" gravity={[0, -5, 0]} stepSize={1 / 120} maxSubSteps={10} iterations={10}>
      <DrivingSurfaceContacts />
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />

        <group >
          <PerspectiveCamera makeDefault position={cameraPosition} fov={20} near={1} far={400} />
          <OrbitControls  maxPolarAngle={Math.PI / 2} />

          <Ground />
          
          <Track />

          <Car active={active} />

        </group>
      </Suspense>

    </Physics>
  );
}
