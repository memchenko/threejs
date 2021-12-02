import * as THREE from "three";

import { stoneTextures, brickTextures } from "../../textures";

const SCALE = 0.5;

const scaleDims = (dims) => dims.map((dim) => dim * SCALE);

const [BASE_W, BASE_H, BASE_D] = scaleDims([0.4, 0.4, 0.4]);
const [COLUMN_W, COLUMN_H, COLUMN_D] = scaleDims([0.3, 1, 0.3]);
const [SUPPORT_W, SUPPORT_H, SUPPORT_D] = scaleDims([0.3, 0.05, 0.3]);
const SPHERE_RADIUS = 0.17 * SCALE;

const basementGeo = new THREE.BoxGeometry(
  BASE_W,
  BASE_H,
  BASE_D,
  100,
  100,
  100
);
const columnGeo = new THREE.BoxGeometry(
  COLUMN_W,
  COLUMN_H,
  COLUMN_D,
  100,
  500,
  100
);
const supportGeo = new THREE.BoxGeometry(
  SUPPORT_W,
  SUPPORT_H,
  SUPPORT_D,
  100,
  10,
  100
);
const sphereGeo = new THREE.SphereGeometry(SPHERE_RADIUS, 50, 50);

const stoneMat = new THREE.MeshStandardMaterial({
  map: stoneTextures.color,
  displacementMap: stoneTextures.displacement,
  displacementScale: 0.0001,
  aoMap: stoneTextures.ambientOcclusion,
  roughnessMap: stoneTextures.roughness,
  normalMap: stoneTextures.normal,
});

[
  brickTextures.color,
  brickTextures.displacement,
  brickTextures.ambientOcclusion,
  brickTextures.roughness,
  brickTextures.normal,
].forEach((texture) => {
  texture.repeat.set(0.5, 1);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

const brickMat = new THREE.MeshStandardMaterial({
  map: brickTextures.color,
  bumpMap: brickTextures.displacement,
  //   displacementScale: -0.005,
  aoMap: brickTextures.ambientOcclusion,
  roughnessMap: brickTextures.roughness,
  normalMap: brickTextures.normal,
});

export function createColumn() {
  const columnGroup = new THREE.Group();

  const basement = new THREE.Mesh(basementGeo, stoneMat);
  const column = new THREE.Mesh(columnGeo, brickMat);
  const support = new THREE.Mesh(supportGeo, stoneMat);
  const sphere = new THREE.Mesh(sphereGeo, stoneMat);

  sphere.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(sphere.geometry.attributes.uv.array, 2)
  );
  basement.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(basement.geometry.attributes.uv.array, 2)
  );
  support.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(support.geometry.attributes.uv.array, 2)
  );
  column.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(column.geometry.attributes.uv.array, 2)
  );

  column.position.y = BASE_H / 2 + COLUMN_H / 2;
  support.position.y = BASE_H / 2 + COLUMN_H + SUPPORT_H / 2;
  sphere.position.y =
    BASE_H / 2 + COLUMN_H + SUPPORT_H + SPHERE_RADIUS - 0.05 * SCALE;

  columnGroup.add(basement, column, support, sphere);

  return columnGroup;
}
