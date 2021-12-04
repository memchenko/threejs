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
import { stoneMat, brickMat, lampMat } from "./materials";

const basementGeo = new THREE.BoxGeometry(BASE_W, BASE_H, BASE_D);
const columnGeo = new THREE.BoxGeometry(COLUMN_W, COLUMN_H, COLUMN_D);
const sphereGeo = new THREE.SphereGeometry(SPHERE_RADIUS, 50, 50);
const supportGeo = new THREE.PlaneGeometry(SUPPORT_W, SUPPORT_W);

export function createColumn(isEntrance) {
  const columnGroup = new THREE.Group();

  const basement = new THREE.Mesh(basementGeo, stoneMat);
  const column = new THREE.Mesh(columnGeo, brickMat);
  const sphere = new THREE.Mesh(sphereGeo, isEntrance ? lampMat : stoneMat);
  const support = new THREE.Mesh(supportGeo, stoneMat);

  column.position.y = BASE_H / 2 + COLUMN_H / 2;
  support.position.y = BASE_H / 2 + COLUMN_H + 0.0001;
  support.rotateX(Math.PI * 1.5);
  sphere.position.y = BASE_H / 2 + COLUMN_H + SPHERE_RADIUS - 0.05 * SCALE;

  columnGroup.add(basement, column, support, sphere);

  return columnGroup;
}
