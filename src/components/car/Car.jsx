// @refresh reset
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber"; // Import useFrame
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "./useControls";
import { useWheels } from "./useWheels";
import { CHASSIS_COM_OFFSET, CHASSIS_MATERIAL, CHASSIS_ANGULAR_FACTOR } from "./vehicleConfig";
import { CAR_SPAWN, MAP_CENTER, MAP_RADIUS } from "./mapConfig";
import { WheelDebug } from "./WheelDebug";

export function Car({ active = true }) {
  const result = useLoader(GLTFLoader, `${import.meta.env.BASE_URL}car/car.glb`).scene; // Updated line

  const initialPosition = CAR_SPAWN;
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.1;

  const sphereCenter = new Vector3(...MAP_CENTER); 
  const sphereRadius = MAP_RADIUS; 

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useCompoundBody(() => ({
    allowSleep: false,
    angularDamping: 0.8,
    angularFactor: CHASSIS_ANGULAR_FACTOR,
    shapes: [
      { type: "Box", args: chassisBodyArgs, position: [0, CHASSIS_COM_OFFSET, 0] },
      // Cannon supports sphere/trimesh contacts. These corner contacts let
      // the chassis rest on the imported road after a jump or rollover.
      ...[-1, 1].flatMap(x => [-1, 1].map(z => ({
        type: "Sphere", args: [0.035],
        position: [x * (width / 2 - 0.035), CHASSIS_COM_OFFSET, z * (front - 0.035)],
      }))),
    ],
    mass: 150,
    material: CHASSIS_MATERIAL,
    position: initialPosition,
  }));

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);
  const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
    chassisBody,
    wheelInfos,
    wheels,
  }), useRef(null), [CHASSIS_COM_OFFSET, CHASSIS_ANGULAR_FACTOR]);

  useControls(vehicleApi, chassisApi, active);

  useFrame(() => {
    if (!chassisBody.current) return;
    const carPosition = new Vector3();
    carPosition.setFromMatrixPosition(chassisBody.current.matrixWorld);

    const distance = Math.hypot(carPosition.x - sphereCenter.x, carPosition.z - sphereCenter.z);
    if (carPosition.y < -4 || distance > sphereRadius + 3) {
      chassisApi.position.set(...CAR_SPAWN);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
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
        <primitive object={result} rotation-y={Math.PI} position={[0, CHASSIS_COM_OFFSET - 0.045, 0]} />
      </group>
      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
}
