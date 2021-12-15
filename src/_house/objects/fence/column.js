import * as THREE from "three";

import {
  SCALE,
  BASE_W,
  BASE_H,
  BASE_D,
  COLUMN_W,
  COLUMN_H,
  COLUMN_D,
  SUPPORT_W,
  SPHERE_RADIUS,
} from "./constants";
import { stoneMat, brickMat } from "./materials";

const basementGeo = new THREE.BoxGeometry(BASE_W, BASE_H, BASE_D);
const columnGeo = new THREE.BoxGeometry(COLUMN_W, COLUMN_H, COLUMN_D);
const sphereGeo = new THREE.SphereGeometry(SPHERE_RADIUS, 50, 50);
const supportGeo = new THREE.PlaneGeometry(SUPPORT_W, SUPPORT_W);
const coneGeo = new THREE.ConeGeometry(
  Math.sqrt(2 * (SUPPORT_W / 2) ** 2),
  0.05,
  4,
  10
);

export function createColumn(isEntrance) {
  const columnGroup = new THREE.Group();

  const basement = new THREE.Mesh(basementGeo, stoneMat);
  const column = new THREE.Mesh(columnGeo, brickMat);
  const top = isEntrance
    ? new THREE.Mesh(coneGeo, stoneMat)
    : new THREE.Mesh(sphereGeo, stoneMat);
  const support = new THREE.Mesh(supportGeo, stoneMat);

  basement.castShadow = true;
  column.castShadow = true;
  top.castShadow = true;
  support.castShadow = true;

  column.position.y = BASE_H / 2 + COLUMN_H / 2;
  support.position.y = BASE_H / 2 + COLUMN_H + 0.0001;
  support.rotateX(Math.PI * 1.5);
  top.rotateY(Math.PI * 0.25);

  if (isEntrance) {
    top.position.y = BASE_H / 2 + COLUMN_H + 0.05 / 2;
  } else {
    top.position.y = BASE_H / 2 + COLUMN_H + SPHERE_RADIUS - 0.05 * SCALE;
  }

  columnGroup.add(basement, column, support, top);

  return columnGroup;
}
