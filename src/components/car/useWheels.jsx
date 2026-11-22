import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";
import { WHEEL_SETTINGS, CHASSIS_COM_OFFSET } from "./vehicleConfig";

export const useWheels = (width, height, front, radius) => {
  const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const wheelInfos = [
    [-1, -1], [1, -1], [-1, 1], [1, 1],
  ].map(([side, end]) => ({
    ...WHEEL_SETTINGS,
    radius,
    chassisConnectionPointLocal: [side * width * 0.65, height * 0.4 + CHASSIS_COM_OFFSET, end * front],
    isFrontWheel: end === -1,
  }));
  const wheelBody = () => ({
    collisionFilterGroup: 0,
    mass: 0,
    type: "Kinematic",
    shapes: [{ type: "Cylinder", args: [radius, radius, 0.1, 16], rotation: [0, 0, -Math.PI / 2] }],
  });
  useCompoundBody(wheelBody, wheels[0]);
  useCompoundBody(wheelBody, wheels[1]);
  useCompoundBody(wheelBody, wheels[2]);
  useCompoundBody(wheelBody, wheels[3]);
  return [wheels, wheelInfos];
};
