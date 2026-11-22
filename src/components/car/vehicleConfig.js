// Raise the body and wheel mounts relative to the mass origin to keep
// the center of mass low without moving the visible car into the road.
export const CHASSIS_COM_OFFSET = 0.06;
export const ENGINE_FORCE = 300;

// Keep suspension travel proportional to this 0.3-unit-long car. The old
// 0.2-unit rest length put its center of mass too high for bridge transitions.
export const WHEEL_SETTINGS = {
  directionLocal: [0, -1, 0],
  axleLocal: [1, 0, 0],
  suspensionStiffness: 60,
  suspensionRestLength: 0.08,
  frictionSlip: 5,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  maxSuspensionTravel: 0.08,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
};

export const MAX_DRIVE_SPEED = 7;
export function drivingForce(input, speed, forwardSlope = 0) {
  if (!input) return 0;
  const throttle = speed < MAX_DRIVE_SPEED ? input * ENGINE_FORCE : 0;
  // Each force value is split over four wheels: total thrust is twice this
  // value. Counter the component of the car's weight acting down the slope.
  const climbing = input * forwardSlope > 0.02;
  const hillAssist = climbing && speed < MAX_DRIVE_SPEED
    ? (150 * 5 * Math.max(-1, Math.min(1, forwardSlope))) / 2
    : 0;
  return throttle + hillAssist;
}


// Tire grip comes from the raycast wheels. Chassis contacts must slide
// along ramps rather than multiply friction across neighboring triangles.
export const CHASSIS_MATERIAL = "car-chassis";
export const RAMP_MATERIAL = "ramp-surface";
export const BRIDGE_MATERIAL = "bridge-surface";
export const RAMP_CONTACT = { friction: 0, restitution: 0 };

export const BRIDGE_CONTACT = { friction: 0, restitution: 0 };

// Let suspension contacts pitch the chassis onto inclines; damping and the low center of mass stabilize it.
export const CHASSIS_ANGULAR_FACTOR = [1, 1, 1];


