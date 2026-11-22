import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group, Mesh, BoxGeometry, MeshBasicMaterial, DoubleSide, Raycaster, Vector3 } from "three";
import { Body, Heightfield, Trimesh, World, Vec3, RaycastResult, Sphere, Box, Cylinder, RaycastVehicle, SAPBroadphase, Material, ContactMaterial } from "cannon-es";
import { ENGINE_FORCE, WHEEL_SETTINGS, drivingForce, CHASSIS_COM_OFFSET, CHASSIS_ANGULAR_FACTOR, CHASSIS_MATERIAL, RAMP_MATERIAL, BRIDGE_MATERIAL, BRIDGE_CONTACT, RAMP_CONTACT } from "../src/components/car/vehicleConfig.js";
import { GROUND_Y, MAP_RADIUS, MAP_CENTER } from "../src/components/car/mapConfig.js";
import { buildRampMeshes, RAMP_ENTRIES, RAMP_WIDTH, RAMP_LENGTH } from "../src/components/car/rampGeometry.js";
import { buildMapMeshes, buildTrackColliders } from "../src/components/car/mapGeometry.js";

async function load(name) {
  const data = await readFile(new URL(`../public/car/${name}.glb`, import.meta.url));
  return (await new GLTFLoader().parseAsync(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength), "")).scene;
}

const chassisMaterial = new Material(CHASSIS_MATERIAL);
const rampMaterial = new Material(RAMP_MATERIAL);
const bridgeMaterial = new Material(BRIDGE_MATERIAL);

function worldFor(meshes) {
  const world = new World({ gravity: new Vec3(0, -5, 0) });
  world.addContactMaterial(new ContactMaterial(chassisMaterial, rampMaterial, RAMP_CONTACT));
  world.addContactMaterial(new ContactMaterial(chassisMaterial, bridgeMaterial, BRIDGE_CONTACT));
  world.broadphase = new SAPBroadphase(world);
  world.broadphase.useBoundingBoxes = true;
  for (const mesh of meshes) {
    const body = new Body({ mass: 0, material: mesh.physicsMaterial === RAMP_MATERIAL ? rampMaterial : mesh.physicsMaterial === BRIDGE_MATERIAL ? bridgeMaterial : undefined });
    if (mesh.heightfield) {
      body.addShape(new Heightfield(mesh.heightfield.heights, { elementSize: mesh.heightfield.elementSize }));
      body.position.set(...mesh.heightfield.position);
      body.quaternion.setFromEuler(...mesh.heightfield.rotation);
    } else body.addShape(new Trimesh(mesh.vertices, mesh.indices));
    world.addBody(body);
  }
  return world;
}

test("nested transforms and non-indexed meshes are baked without changing the source", () => {
  const scene = new Group();
  const parent = new Group(); parent.position.set(3, 2, 1); parent.rotation.y = Math.PI / 2;
  const mesh = new Mesh(new BoxGeometry().toNonIndexed()); mesh.position.x = 2;
  parent.add(mesh); scene.add(parent);
  const [baked] = buildMapMeshes(scene, [1, 2, 3], [0, 0, 0], [2, 3, 4]);
  assert.equal(baked.indices.length, 36);
  assert.deepEqual(baked.geometry.boundingBox.min.toArray().map(v => Math.round(v * 10) / 10), [6, 6.5, -3]);
  assert.equal(mesh.geometry.boundingBox, null);
  assert(baked.vertices.every(Number.isFinite));
});

test("track and both ramp collider ray hits match their rendered surfaces", async () => {
  const track = await load("xx"); const ramp = await load("ramp");
  const meshes = [
    ...buildMapMeshes(track, [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]),
    ...RAMP_ENTRIES.flatMap(placement => buildRampMeshes(ramp, placement)),
  ];
  const world = worldFor(meshes);
  const visuals = meshes.map(({ geometry }) => new Mesh(geometry, new MeshBasicMaterial({ side: DoubleSide })));
  visuals.forEach(mesh => mesh.updateMatrixWorld(true));
  const ray = new Raycaster(); let hits = 0; let elevated = 0;
  for (let x = -18; x < 16; x += 0.5) for (let z = -15; z < 11; z += 0.5) {
    ray.set(new Vector3(x, 4, z), new Vector3(0, -1, 0));
    const expected = ray.intersectObjects(visuals, false)[0];
    const result = new RaycastResult();
    world.raycastClosest(new Vec3(x, 4, z), new Vec3(x, -2, z), { skipBackfaces: false }, result);
    assert.equal(result.hasHit, Boolean(expected), `surface at ${x},${z}`);
    if (expected) {
      assert(Math.abs(result.hitPointWorld.y - expected.point.y) < 0.0001);
      hits++; if (expected.point.y > 0.3) elevated++;
    }
  }
  assert(hits > 300); assert(elevated > 20);
  console.log(`Verified ${hits} road/ramp ray hits including ${elevated} elevated surfaces.`);
});

test("a chassis sphere lands on the raised bridge instead of falling through", async () => {
  const meshes = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const world = worldFor(meshes);
  const ray = new RaycastResult();
  world.raycastClosest(new Vec3(0, 4, -2), new Vec3(0, -2, -2), {}, ray);
  assert(ray.hasHit && ray.hitPointWorld.y > 0.3);
  const body = new Body({ mass: 1, shape: new Sphere(0.035), position: new Vec3(0, ray.hitPointWorld.y + 0.4, -2) });
  world.addBody(body);
  for (let i = 0; i < 240; i++) world.step(1 / 120);
  assert(body.position.y > ray.hitPointWorld.y, `sphere fell through: ${body.position.y}`);
});

test("the car can drive from the grass onto the flat road", async () => {
  const meshes = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const world = worldFor(meshes);
  world.solver.iterations = 10;
  world.addBody(new Body({ mass: 0, shape: new Cylinder(MAP_RADIUS, MAP_RADIUS, 0.2, 64),
    position: new Vec3(MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]) }));
  const { chassis, vehicle } = createDrivingVehicle(world, [-1.5, 0.8, 3]);
  for (let i = 0; i < 240; i++) world.step(1 / 120);
  for (let wheel = 0; wheel < 4; wheel++) vehicle.applyEngineForce(ENGINE_FORCE / 2, wheel);
  let crossed = false;
  for (let i = 0; i < 600; i++) {
    world.step(1 / 120);
    if (chassis.position.z < 1.5) {
      crossed = true;
      assert(chassis.position.y > GROUND_Y, "chassis must stay above the surface");
      assert(vehicle.wheelInfos.some(wheel => wheel.isInContact), "wheels must stay in contact at the entry");
      break;
    }
  }
  assert(crossed, `car stopped at ${chassis.position.toString()}`);
});


test("both ramp lips join the road without a grass gap or height step", async () => {
  const road = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const ramp = await load("ramp");
  for (const placement of RAMP_ENTRIES) {
    const ramps = buildRampMeshes(ramp, placement);
    const world = worldFor([...road, ...ramps]);
    const bounds = ramps[0].geometry.boundingBox;
    assert(Math.abs(bounds.max.z - bounds.min.z - RAMP_WIDTH) < 0.00001);
    assert(Math.abs(ramps[0].material.color.r - 0.170645) < 0.000001);
    for (const lateral of [-0.65, 0, 0.65]) {
      let lastY;
      for (let distance = -0.08; distance <= 0.08; distance += 0.005) {
        const result = new RaycastResult();
        const x = placement.entry[0] - Math.sign(placement.yaw) * distance;
        const z = placement.entry[2] + lateral;
        world.raycastClosest(new Vec3(x, 2, z), new Vec3(x, -1, z), {}, result);
        assert(result.hasHit, `gap at ${x},${z}`);
        assert(result.hitPointWorld.y > GROUND_Y, "ramp lip must stay above grass");
        if (lastY !== undefined) assert(Math.abs(result.hitPointWorld.y - lastY) < 0.002, "abrupt entry step");
        lastY = result.hitPointWorld.y;
      }
    }
  }
});

function createDrivingVehicle(world, position, yaw = 0) {
  const chassis = new Body({ mass: 150, material: chassisMaterial, position: new Vec3(...position), allowSleep: false, angularDamping: 0.8, angularFactor: new Vec3(...CHASSIS_ANGULAR_FACTOR) });
  chassis.addShape(new Box(new Vec3(0.075, 0.035, 0.15)), new Vec3(0, CHASSIS_COM_OFFSET, 0));
  for (const x of [-1, 1]) for (const z of [-1, 1]) {
    chassis.addShape(new Sphere(0.035), new Vec3(x * 0.04, CHASSIS_COM_OFFSET, z * 0.115));
  }
  const vehicle = new RaycastVehicle({ chassisBody: chassis, indexRightAxis: 0, indexUpAxis: 1, indexForwardAxis: 2 });
  for (const z of [-0.15, 0.15]) for (const x of [-0.0975, 0.0975]) vehicle.addWheel({
    ...WHEEL_SETTINGS, radius: 0.05, directionLocal: new Vec3(0, -1, 0), axleLocal: new Vec3(1, 0, 0),
    chassisConnectionPointLocal: new Vec3(x, 0.028 + CHASSIS_COM_OFFSET, z), suspensionStiffness: 60,
    suspensionRestLength: WHEEL_SETTINGS.suspensionRestLength, frictionSlip: 5, dampingRelaxation: 2.3,
    dampingCompression: 4.4, maxSuspensionForce: 100000, rollInfluence: 0.01,
    maxSuspensionTravel: WHEEL_SETTINGS.maxSuspensionTravel, customSlidingRotationalSpeed: -30, useCustomSlidingRotationalSpeed: true,
  });
  chassis.quaternion.setFromEuler(0, yaw, 0);
  vehicle.addToWorld(world);
  return { chassis, vehicle };
}

test("the car drives across the bridge in both directions under engine power", async () => {
  const meshes = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  for (const direction of [-1, 1]) {
    const world = worldFor(buildTrackColliders(meshes)); world.solver.iterations = 10;
    world.addBody(new Body({ mass: 0, shape: new Cylinder(MAP_RADIUS, MAP_RADIUS, 0.2, 64),
      position: new Vec3(MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]) }));
    const { chassis, vehicle } = createDrivingVehicle(world, [-direction * 10, 0.8, -2.2], -direction * Math.PI / 2);
    for (let i = 0; i < 240; i++) world.step(1 / 120);
    vehicle.applyEngineForce(ENGINE_FORCE, 2); vehicle.applyEngineForce(ENGINE_FORCE, 3);
    let reachedDeck = false; let crossed = false; const trace = [];
    for (let i = 0; i < 3000; i++) {
      const force = drivingForce(1, chassis.velocity.length(), 2 * (chassis.quaternion.w * chassis.quaternion.x - chassis.quaternion.y * chassis.quaternion.z));
      for (let wheel = 0; wheel < 4; wheel++) vehicle.applyEngineForce(force / 2, wheel);
      steerAlongBridge(chassis, vehicle, direction);
      world.step(1 / 120);
      if (i % 120 === 0) trace.push(chassis.position.toString());
      if (Math.abs(chassis.position.x) < 3 && chassis.position.y > 1) reachedDeck = true;
      if (direction * chassis.position.x > 10) { crossed = true; break; }
    }
    assert(reachedDeck, `did not climb bridge: ${JSON.stringify({trace,position:chassis.position,velocity:chassis.velocity,q:chassis.quaternion,wheels:vehicle.wheelInfos.map(w=>({contact:w.isInContact,normal:w.raycastResult.hitNormalWorld,length:w.suspensionLength,point:w.raycastResult.hitPointWorld}))})}`);
    assert(crossed, `did not exit bridge: ${JSON.stringify(trace)}`);
  }
});

test("driving across flat road curbs does not snag or abruptly lose speed", async () => {
  const meshes = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const world = worldFor(buildTrackColliders(meshes));
  world.solver.iterations = 10;
  world.addBody(new Body({ mass: 0, shape: new Cylinder(MAP_RADIUS, MAP_RADIUS, 0.2, 64),
    position: new Vec3(MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]) }));
  const { chassis, vehicle } = createDrivingVehicle(world, [1, 0.8, 5]);
  for (let i = 0; i < 240; i++) world.step(1 / 120);
  let minSpeed = Infinity; let reachedEnd = false;
  for (let i = 0; i < 1200; i++) {
    const force = drivingForce(1, chassis.velocity.length(), 2 * (chassis.quaternion.w * chassis.quaternion.x - chassis.quaternion.y * chassis.quaternion.z));
    for (let wheel = 0; wheel < 4; wheel++) vehicle.applyEngineForce(force / 2, wheel);
    world.step(1 / 120);
    if (chassis.position.z < 2.5 && chassis.position.z > -0.5) {
      minSpeed = Math.min(minSpeed, Math.hypot(chassis.velocity.x, chassis.velocity.z));
    }
    if (chassis.position.z < -1) { reachedEnd = true; break; }
  }
  console.log(`Minimum speed through curb section: ${minSpeed.toFixed(3)}`);
  assert(reachedEnd, "car got stuck crossing the road detail");
  assert(minSpeed > 1.8, `unexpected speed loss at curb: ${minSpeed}`);
});

test("five flat-road routes keep speed across multiple joins", async () => {
  const meshes = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const ramp = await load("ramp");
  const ramps = RAMP_ENTRIES.flatMap(placement => buildRampMeshes(ramp, placement));
  const colliders = [...buildTrackColliders(meshes), ...ramps];
  for (const lane of [
    { position: [-12, 0.8, 1], yaw: -Math.PI / 2 },
    { position: [-15.6, 0.8, 7], yaw: 0 },
    { position: [-10, 0.8, 7], yaw: 0 },
    { position: [12.7, 0.8, 7], yaw: 0 },
    { position: [-12, 0.8, -12], yaw: -Math.PI / 2 },
  ]) {
    const world = worldFor(colliders); world.solver.iterations = 10;
    world.addBody(new Body({ mass: 0, shape: new Cylinder(MAP_RADIUS, MAP_RADIUS, 0.2, 64),
      position: new Vec3(MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]) }));
    const { chassis, vehicle } = createDrivingVehicle(world, lane.position, lane.yaw);
    for (let i = 0; i < 240; i++) world.step(1 / 120);
    let minimum = Infinity;
    for (let i = 0; i < 900; i++) {
      const force = drivingForce(1, chassis.velocity.length(), 2 * (chassis.quaternion.w * chassis.quaternion.x - chassis.quaternion.y * chassis.quaternion.z));
      for (let wheel = 0; wheel < 4; wheel++) vehicle.applyEngineForce(force / 2, wheel);
      world.step(1 / 120);
      if (i > 150) minimum = Math.min(minimum, Math.hypot(chassis.velocity.x, chassis.velocity.z));
    }
    assert(minimum > 2, `snag on route ${lane.position}: speed ${minimum}, position ${chassis.position}`);
  }
});


test("bridge and both ramps can be climbed from a short approach", async () => {
  const road=buildMapMeshes(await load("xx"),[-4,-.12,-11],[0,0,0],[.059,.059,.059]);
  const ramp=await load("ramp");
  const colliders=[...buildTrackColliders(road),...RAMP_ENTRIES.flatMap(p=>buildRampMeshes(ramp,p))];
  const climbs=[{entry:[6.9,.008024,-2.2],yaw:Math.PI/2,length:3.5,height:.9},
    ...RAMP_ENTRIES.map(p=>({...p,length:RAMP_LENGTH - .15,height:.6}))];
  for(const climb of climbs){
    const direction=new Vector3(-Math.sin(climb.yaw),0,-Math.cos(climb.yaw));
    const world=worldFor(colliders);world.solver.iterations=10;
    world.addBody(new Body({mass:0,shape:new Cylinder(MAP_RADIUS,MAP_RADIUS,.2,64),position:new Vec3(MAP_CENTER[0],GROUND_Y-.1,MAP_CENTER[2])}));
    const start=[climb.entry[0]-direction.x*.4,.8,climb.entry[2]-direction.z*.4];
    const {chassis,vehicle}=createDrivingVehicle(world,start,climb.yaw);
    for(let i=0;i<240;i++)world.step(1/120);
    let reached=false;let minimum=Infinity;
    for(let i=0;i<1000;i++){
      const q=chassis.quaternion;
      const slope=2*(q.w*q.x-q.y*q.z);
      const force=drivingForce(1,chassis.velocity.length(),slope);
      for(let w=0;w<4;w++)vehicle.applyEngineForce(force/2,w);
      world.step(1/120);
      const progress=(chassis.position.x-climb.entry[0])*direction.x+(chassis.position.z-climb.entry[2])*direction.z;
      if(progress>.25&&progress<climb.length)minimum=Math.min(minimum,chassis.velocity.length());
      if(progress>=climb.length&&chassis.position.y>climb.height){reached=true;break;}
    }
    console.log('Climb',climb.entry,'minimum speed',minimum,'end',chassis.position.toString());
    assert(reached,'failed climb at '+climb.entry);
    assert(minimum>.7,'car bogged down at '+climb.entry+': '+minimum);
  }
});

test("ramp entries have a flat tangent and no solid underside to catch wheels", async () => {
  const source = await load("ramp");
  for (const placement of RAMP_ENTRIES) {
    const meshes = buildRampMeshes(source, placement);
    const world = worldFor(meshes);
    const direction = new Vec3(-Math.sin(placement.yaw), 0, -Math.cos(placement.yaw));
    const rayAt = (distance, startY, endY) => {
      const x = placement.entry[0] + direction.x * distance;
      const z = placement.entry[2] + direction.z * distance;
      const result = new RaycastResult();
      world.raycastClosest(new Vec3(x, startY, z), new Vec3(x, endY, z), { skipBackfaces: true }, result);
      return result;
    };
    const lip = rayAt(0.005, 2, -1);
    assert(lip.hasHit);
    assert(Math.hypot(lip.hitNormalWorld.x, lip.hitNormalWorld.z) < 0.01, "ramp must start tangent to the flat road");
    const top = rayAt(1, 2, -1);
    assert(top.hasHit);
    const inside = rayAt(1, top.hitPointWorld.y - 0.02, -1);
    assert(!inside.hasHit, "a wheel inside the wedge must not hit an internal floor");
  }
});

test("both ramps traverse completely without abrupt stops at low and full speed", async () => {
  const road = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const source = await load("ramp");
  const colliders = [...buildTrackColliders(road), ...RAMP_ENTRIES.flatMap(p => buildRampMeshes(source, p))];
  const approaches = [0.5, 2.25, 7].flatMap(initialSpeed =>
    [-0.15, 0, 0.15].map(angle => ({ initialSpeed, angle })));
  for (const initialSpeed of [0.5, 7]) for (const lateral of [-0.62, 0.62]) {
    approaches.push({ initialSpeed, angle: 0, lateral });
  }
  for (const placement of RAMP_ENTRIES) for (const { initialSpeed, angle, lateral } of approaches) {
    const direction = new Vector3(-Math.sin(placement.yaw), 0, -Math.cos(placement.yaw));
    const world = worldFor(colliders); world.solver.iterations = 10;
    world.addBody(new Body({ mass: 0, shape: new Cylinder(MAP_RADIUS, MAP_RADIUS, 0.2, 64),
      position: new Vec3(MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]) }));
    const { chassis, vehicle } = createDrivingVehicle(world,
      [placement.entry[0] - direction.x * 0.6, 0.8, placement.entry[2] + (lateral ?? -Math.sign(placement.yaw) * Math.sign(angle) * 0.3)], placement.yaw + angle);
    for (let i = 0; i < 240; i++) world.step(1 / 120);
    chassis.velocity.set(direction.x * initialSpeed, 0, direction.z * initialSpeed);
    let crossed = false; let previousSpeed;
    for (let i = 0; i < 600; i++) {
      const q = chassis.quaternion;
      const force = drivingForce(1, chassis.velocity.length(), 2 * (q.w * q.x - q.y * q.z));
      for (let wheel = 0; wheel < 4; wheel++) vehicle.applyEngineForce(force / 2, wheel);
      world.step(1 / 120);
      const progress = (chassis.position.x - placement.entry[0]) * direction.x;
      const speed = chassis.velocity.length();
      if (progress > -0.2 && progress < RAMP_LENGTH) {
        assert(speed > 0.5, "car paused at ramp entry");
        if (previousSpeed !== undefined) assert(speed > previousSpeed * 0.7, `sudden stop: entry=${placement.entry}, initialSpeed=${initialSpeed}, angle=${angle}, progress=${progress}, speed=${speed}, previous=${previousSpeed}`);
        previousSpeed = speed;
      }
      if (progress >= RAMP_LENGTH + .25) { crossed = true; break; }
    }
    assert(crossed, "car did not cross the entry seam");
  }
});

test("full-speed bridge approaches do not snag in either direction", async () => {
  const road = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  for (const direction of [-1, 1]) for (const lateral of [-0.58, 0, 0.58]) {
    const world = worldFor(buildTrackColliders(road)); world.solver.iterations = 10;
    world.addBody(new Body({ mass: 0, shape: new Cylinder(MAP_RADIUS, MAP_RADIUS, 0.2, 64),
      position: new Vec3(MAP_CENTER[0], GROUND_Y - 0.1, MAP_CENTER[2]) }));
    const { chassis, vehicle } = createDrivingVehicle(world, [-direction * 10.2, 0.8, -2.2 + lateral], -direction * Math.PI / 2);
    for (let i = 0; i < 240; i++) world.step(1 / 120);
    chassis.velocity.set(direction * 7, 0, 0);
    let crossed = false; let previousSpeed = 7;
    for (let i = 0; i < 1800; i++) {
      const q = chassis.quaternion;
      const force = drivingForce(1, chassis.velocity.length(), 2 * (q.w * q.x - q.y * q.z));
      for (let wheel = 0; wheel < 4; wheel++) vehicle.applyEngineForce(force / 2, wheel);
      world.step(1 / 120);
      const speed = chassis.velocity.length();
      assert(speed > 0.5 && speed > previousSpeed * 0.7, `bridge snag at ${chassis.position}: ${previousSpeed} to ${speed}`);
      previousSpeed = speed;
      if (direction * chassis.position.x > 8.5) {
        assert(1 - 2 * (q.x * q.x + q.z * q.z) > 0.2, "car flipped on the bridge");
        crossed = true; break;
      }
    }
    assert(crossed, `failed full-speed bridge crossing: ${chassis.position}`);
  }
});

test("ordinary track has no collision while bridge and ramps remain solid", async () => {
  const road = buildMapMeshes(await load("xx"), [-4, -0.12, -11], [0, 0, 0], [0.059, 0.059, 0.059]);
  const source = await load("ramp");
  // Deliberately omit the ground to distinguish track colliders from support.
  const world = worldFor([...buildTrackColliders(road), ...RAMP_ENTRIES.flatMap(p => buildRampMeshes(source, p))]);
  function hitsAt(x, z) {
    const result = new RaycastResult();
    world.raycastClosest(new Vec3(x, 4, z), new Vec3(x, -1, z), {}, result);
    return result.hasHit;
  }
  assert(!hitsAt(-15.6, -3), "flat track must not create a collision body");
  assert(!hitsAt(12.7, 3), "ordinary road must remain visual only");
  assert(hitsAt(0, -2.2), "bridge must remain solid");
  for (const placement of RAMP_ENTRIES) {
    assert(hitsAt(placement.entry[0] - Math.sin(placement.yaw), placement.entry[2]), "ramp must remain solid");
  }
});

function steerAlongBridge(chassis, vehicle, direction) {
  const forward = new Vector3(0, 0, -1).applyQuaternion(chassis.quaternion);
  const yaw = Math.atan2(-forward.x, -forward.z);
  const desired = -direction * Math.PI / 2;
  const error = Math.atan2(Math.sin(desired - yaw), Math.cos(desired - yaw));
  const steering = Math.max(-0.2, Math.min(0.2, error * 0.8 + direction * (chassis.position.z + 2.2) * 0.3));
  vehicle.setSteeringValue(steering, 0);
  vehicle.setSteeringValue(steering, 1);
}


test("solid ramps support a box chassis when landing near either edge", async () => {
  const source = await load("ramp");
  for (const placement of RAMP_ENTRIES) for (const lateral of [-0.65, 0, 0.65]) {
    const world = worldFor(buildRampMeshes(source, placement));
    world.solver.iterations = 10;
    const x = placement.entry[0] - Math.sin(placement.yaw) * 1.2;
    const z = placement.entry[2] + lateral;
    const hit = new RaycastResult();
    world.raycastClosest(new Vec3(x, 3, z), new Vec3(x, -1, z), {}, hit);
    assert(hit.hasHit);
    // A box alone previously had no supported contact with the triangle ramp.
    const body = new Body({ mass: 150, material: chassisMaterial,
      shape: new Box(new Vec3(0.075, 0.035, 0.15)),
      position: new Vec3(x, hit.hitPointWorld.y + 0.3, z),
      velocity: new Vec3(0, -7, 0), angularFactor: new Vec3(0, 0, 0) });
    world.addBody(body);
    let supported = false;
    for (let i = 0; i < 30; i++) {
      world.step(1 / 120);
      assert(body.position.y > hit.hitPointWorld.y - 0.06, "box penetrated the ramp on landing");
      if (body.velocity.y > -1) supported = true;
    }
    assert(supported, "ramp did not catch the falling chassis");
  }
});

