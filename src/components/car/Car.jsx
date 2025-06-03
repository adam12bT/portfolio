/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber"; // Import useFrame
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "./useControls";
import { useWheels } from "./useWheels";
import { WheelDebug } from "./WheelDebug";

export function Car() {
  const result = useLoader(GLTFLoader, "./car/car.glb").scene; // Updated line

  const initialPosition = [-1.5, 2, 3];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const sphereCenter = new Vector3(-2.285, -0.015, -1.325); 
  const sphereRadius = 19; 

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(() => ({
    allowSleep: false,
    args: chassisBodyArgs,
    mass: 150,
    position: initialPosition,
  }));

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);
  const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
    chassisBody,
    wheelInfos,
    wheels,
  }), useRef(null));

  const controls = useControls(vehicleApi, chassisApi, sphereCenter, sphereRadius);

  useFrame(() => {
    const carPosition = new Vector3();
    carPosition.setFromMatrixPosition(chassisBody.current.matrixWorld);

    const distance = carPosition.distanceTo(sphereCenter);
    if (distance > sphereRadius) {

      const directionToCenter = carPosition.clone().sub(sphereCenter).normalize();
      const edgePosition = sphereCenter.clone().add(directionToCenter.multiplyScalar(sphereRadius - 0.1));

      chassisApi.position.set(edgePosition.x, edgePosition.y, edgePosition.z);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
    }
  });

  useEffect(() => {
    if (!result) return;

    const mesh = result;
    mesh.scale.set(0.0019, 0.0019, 0.0019);
    mesh.children[0].position.set(-365, -18, -67);
  }, [result]);

  return (
    <group ref={vehicle} name="vehicle">
      <group ref={chassisBody} name="chassisBody">
        <primitive object={result} rotation-y={Math.PI} position={[0, -0.09, 0]} />
      </group>
      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
}
