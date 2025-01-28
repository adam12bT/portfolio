import { useEffect, useState } from "react";
import { Vector3 } from "three";

export const useControls = (vehicleApi, chassisApi, sphereCenter, sphereRadius) => {
  let [controls, setControls] = useState({});

  useEffect(() => {
    const keyDownPressHandler = (e) => {
      setControls((controls) => ({ ...controls, [e.key.toLowerCase()]: true }));
    };

    const keyUpPressHandler = (e) => {
      setControls((controls) => ({ ...controls, [e.key.toLowerCase()]: false }));
    };

    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);
    return () => {
      window.removeEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    };
  }, []);

  useEffect(() => {
    if (!vehicleApi || !chassisApi || !sphereCenter || sphereRadius === undefined) return;

    const carPosition = new Vector3();
    chassisApi.position.subscribe((pos) => {
      carPosition.set(pos[0], pos[1], pos[2]);
    });

    // Only proceed if carPosition is defined and sphereCenter is valid
    if (carPosition && sphereCenter) {
      const distanceToCenter = carPosition.distanceTo(sphereCenter);

      // Only allow controls if car is within the sphere radius
      if (distanceToCenter <= sphereRadius) {
        if (controls.z) {
          vehicleApi.applyEngineForce(150, 2);
          vehicleApi.applyEngineForce(150, 3);
        } else if (controls.s) {
          vehicleApi.applyEngineForce(-150, 2);
          vehicleApi.applyEngineForce(-150, 3);
        } else {
          vehicleApi.applyEngineForce(0, 2);
          vehicleApi.applyEngineForce(0, 3);
        }

        if (controls.q) {
          vehicleApi.setSteeringValue(0.35, 2);
          vehicleApi.setSteeringValue(0.35, 3);
          vehicleApi.setSteeringValue(-0.1, 0);
          vehicleApi.setSteeringValue(-0.1, 1);
        } else if (controls.d) {
          vehicleApi.setSteeringValue(-0.35, 2);
          vehicleApi.setSteeringValue(-0.35, 3);
          vehicleApi.setSteeringValue(0.1, 0);
          vehicleApi.setSteeringValue(0.1, 1);
        } else {
          for (let i = 0; i < 4; i++) {
            vehicleApi.setSteeringValue(0, i);
          }
        }

 
      }
    }

    if (controls.r) {
      chassisApi.position.set(-1.5, 2, 3);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
    }
  }, [controls, vehicleApi, chassisApi, sphereCenter, sphereRadius]);

  return controls;
};
