import { useEffect, useState, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { drivingForce } from "./vehicleConfig";
import { CAR_SPAWN } from "./mapConfig";

const GAME_KEYS = new Set([
  "w", "a", "s", "d", "z", "q", "r",
  "arrowup", "arrowdown", "arrowleft", "arrowright",
]);

export const useControls = (vehicleApi, chassisApi, active = true) => {
  const [controls, setControls] = useState({});
  const speed = useRef(0);
  useEffect(() => {
    if (active) return;
    setControls({});
    for (let wheel = 0; wheel < 4; wheel++) vehicleApi.applyEngineForce(0, wheel);
  }, [active, vehicleApi]);
  const forwardSlope = useRef(0);
  useEffect(() => chassisApi.quaternion.subscribe(([x, y, z, w]) => {
    forwardSlope.current = 2 * (w * x - y * z);
  }), [chassisApi]);
  useEffect(() => chassisApi.velocity.subscribe(([x, y, z]) => {
    speed.current = Math.hypot(x, y, z);
  }), [chassisApi]);

  useFrame(() => {
    const forward = controls.w || controls.z || controls.arrowup;
    const reverse = controls.s || controls.arrowdown;
    const input = Number(Boolean(forward)) - Number(Boolean(reverse));
    const force = drivingForce(input, speed.current, forwardSlope.current);
    for (let wheel = 0; wheel < 4; wheel++) vehicleApi.applyEngineForce(force / 2, wheel);
  });

  useEffect(() => {
    const isEditing = (target) =>
      target instanceof HTMLElement &&
      (target.isContentEditable || target.closest("input, textarea, select"));

    const keyDown = (event) => {
      if (!active) return;
      const key = event.key.toLowerCase();
      if (!GAME_KEYS.has(key) || isEditing(event.target)) return;
      event.preventDefault();
      setControls((current) => current[key] ? current : { ...current, [key]: true });
    };
    const keyUp = (event) => {
      const key = event.key.toLowerCase();
      if (!GAME_KEYS.has(key)) return;
      setControls((current) => ({ ...current, [key]: false }));
    };
    const release = () => setControls({});
    const onVisibilityChange = () => {
      if (document.hidden) release();
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    window.addEventListener("blur", release);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
      window.removeEventListener("blur", release);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [active]);

  useEffect(() => {
    if (!vehicleApi || !chassisApi) return;
    const left = controls.a || controls.q || controls.arrowleft;
    const right = controls.d || controls.arrowright;
    const steering = (Number(Boolean(left)) - Number(Boolean(right))) * 0.35;

    vehicleApi.setSteeringValue(steering, 0);
    vehicleApi.setSteeringValue(steering, 1);
    vehicleApi.setSteeringValue(0, 2);
    vehicleApi.setSteeringValue(0, 3);

    if (controls.r) {
      chassisApi.position.set(...CAR_SPAWN);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
    }
  }, [controls, vehicleApi, chassisApi]);

  return controls;
};
