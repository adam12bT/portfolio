import { BRIDGE_MATERIAL } from "./vehicleConfig.js";
import { Matrix4, Quaternion, Vector3, Euler, Box3, Mesh, MeshBasicMaterial, DoubleSide, Raycaster } from "three";

// Bake the complete model hierarchy and placement into the same vertices used
// for rendering and collision. This also supports non-indexed GLTF primitives.
export function buildMapMeshes(scene, position, rotation, scale) {
  scene.updateMatrixWorld(true);
  const placement = new Matrix4().compose(
    new Vector3(...position),
    new Quaternion().setFromEuler(new Euler(...rotation)),
    new Vector3(...scale),
  );
  const meshes = [];
  scene.traverse((object) => {
    if (!object.isMesh || !object.geometry.attributes.position) return;
    const geometry = object.geometry.clone();
    geometry.applyMatrix4(new Matrix4().multiplyMatrices(placement, object.matrixWorld));
    const attribute = geometry.attributes.position;
    const vertices = Array.from(attribute.array);
    const indices = geometry.index
      ? Array.from(geometry.index.array)
      : Array.from({ length: attribute.count }, (_, i) => i);
    // Some exported deck triangles point down. Orient horizontal collision
    // faces upward so wheel rays see the road, without duplicate contacts.
    const collisionIndices = [];
    for (let i = 0; i < indices.length; i += 3) {
      const [a, b, c] = indices.slice(i, i + 3);
      const normalY = (vertices[b * 3 + 2] - vertices[a * 3 + 2]) *
        (vertices[c * 3] - vertices[a * 3]) -
        (vertices[b * 3] - vertices[a * 3]) *
        (vertices[c * 3 + 2] - vertices[a * 3 + 2]);
      collisionIndices.push(...(normalY < 0 ? [a, c, b] : [a, b, c]));
    }
    if (!vertices.every(Number.isFinite)) throw new Error(`Invalid map mesh: ${object.name}`);
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    meshes.push({ name: object.name, geometry, material: object.material, vertices, indices: collisionIndices });
  });
  return meshes;
}
// The ordinary track is visual only. The ground supports the car; only
// the elevated bridge contributes collision from the assembled track model.
export function buildTrackColliders(meshes) {
  const bridge = meshes.filter(mesh => mesh.geometry.boundingBox.max.y >= 0.1);
  return bridge.length ? [buildBridgeCollider(bridge)] : [];
}

// Retain the original bridge model and use its upper road for collision.
function buildBridgeCollider(meshes) {
  const bounds = new Box3();
  meshes.forEach(mesh => bounds.union(mesh.geometry.boundingBox));
  const material = new MeshBasicMaterial({ side: DoubleSide });
  const objects = meshes.map(mesh => new Mesh(mesh.geometry, material));
  objects.forEach(object => object.updateMatrixWorld(true));
  const ray = new Raycaster();
  const centerZ = (bounds.min.z + bounds.max.z) / 2;
  const vertices = []; const indices = [];
  const start = bounds.min.x - 0.1; const end = bounds.max.x + 0.1;
  for (let i = 0; i <= 192; i++) {
    const x = start + (end - start) * i / 192;
    const sampleX = Math.max(bounds.min.x + 0.0001, Math.min(bounds.max.x - 0.0001, x));
    ray.set(new Vector3(sampleX, bounds.max.y + 1, centerZ), new Vector3(0, -1, 0));
    const hit = ray.intersectObjects(objects, false)[0];
    const y = hit ? hit.point.y : 0.008024;
    vertices.push(x, y, bounds.min.z, x, y, bounds.max.z);
    if (i) {
      const a = (i - 1) * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  material.dispose();
  return { vertices, indices, physicsMaterial: BRIDGE_MATERIAL };
}
