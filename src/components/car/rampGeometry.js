import { BufferGeometry, Float32BufferAttribute, Group, Mesh, MeshStandardMaterial } from "three";
import { RAMP_MATERIAL } from "./vehicleConfig.js";
import { buildMapMeshes } from "./mapGeometry.js";

export const RAMP_ENTRIES = [
  { entry: [7.45035, 0.008024, 8.19970], yaw: Math.PI / 2 },
  { entry: [-2.04510, 0.008024, 8.22502], yaw: -Math.PI / 2 },
];
export const RAMP_WIDTH = 60 * 3.6 / 128;
export const RAMP_APPROACH = 8 * 3.6 / 128;
export const RAMP_LENGTH = 3.6;
const LENGTH = RAMP_LENGTH;
const STEPS = 128;
const HEIGHT = 0.89;

function sampleProfile(t) {
  // A continuous grade avoids the source model's sharp change of slope.
  const u = Math.max(0, Math.min(1, t));
  return HEIGHT * u * u;
}

export function buildRampMeshes(scene, { entry, yaw }) {
  const parts = buildMapMeshes(scene, [0, 0, 0], [0, 0, 0], [1, 1, 1]);
  const vertices = []; const surface = []; const shell = [];
  const distances = [-RAMP_APPROACH, 0, ...Array.from({ length: STEPS }, (_, i) => LENGTH * (i + 1) / STEPS)];
  distances.forEach(distance => {
    const y = sampleProfile(distance / LENGTH);
    vertices.push(-RAMP_WIDTH / 2, y, -distance, RAMP_WIDTH / 2, y, -distance);
  });
  for (let i = 0; i < distances.length - 1; i++) {
    const a = i * 2;
    surface.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  // Keep the wedge sides visible, but only its continuous upper ribbon is solid.
  const bottom = vertices.length / 3;
  distances.forEach(distance => vertices.push(-RAMP_WIDTH / 2, -0.025, -distance, RAMP_WIDTH / 2, -0.025, -distance));
  for (let i = 0; i < distances.length - 1; i++) {
    const a = i * 2; const b = bottom + a;
    shell.push(a, a + 2, b, a + 2, b + 2, b);
    shell.push(a + 1, b + 1, a + 3, a + 3, b + 1, b + 3);
  }
  const end = (distances.length - 1) * 2;
  shell.push(end, end + 1, bottom + end, end + 1, bottom + end + 1, bottom + end);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
  geometry.setIndex([...surface, ...shell]);
  geometry.computeVertexNormals();
  const material = new MeshStandardMaterial({ roughness: 1, metalness: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  material.color.setRGB(0.170645, 0.170645, 0.170645);
  const group = new Group(); group.add(new Mesh(geometry, material));
  const meshes = buildMapMeshes(group, entry, [0, yaw, 0], [1, 1, 1]);
  meshes[0].name = "Smooth ramp";
  meshes[0].physicsMaterial = RAMP_MATERIAL;
  meshes[0].indices = surface;
  // Cannon heightfields support box contacts without internal vertical seams.
  const elementSize = LENGTH / STEPS;
  const columns = Math.ceil(RAMP_WIDTH / elementSize);
  const approachSteps = Math.ceil(RAMP_APPROACH / elementSize);
  const sign = Math.sign(yaw);
  meshes[0].heightfield = {
    heights: Array.from({ length: STEPS + 1 + approachSteps }, (_, i) =>
      Array.from({ length: columns + 1 }, () =>
        sampleProfile((sign > 0 ? STEPS - i : i - approachSteps) / STEPS))),
    elementSize,
    position: [entry[0] - (sign > 0 ? LENGTH : approachSteps * elementSize), entry[1], entry[2] + RAMP_WIDTH / 2],
    rotation: [-Math.PI / 2, 0, 0],
  };
  parts.forEach(part => part.geometry.dispose());
  geometry.dispose();
  return meshes;
}
