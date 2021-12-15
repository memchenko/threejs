import * as THREE from "three";

import { WALL_SIZE } from "./constants";
import { oldStoneMat } from "./materials";

const wallsGeo = new THREE.BoxGeometry(
  WALL_SIZE,
  WALL_SIZE,
  WALL_SIZE,
  100,
  100,
  100
);

export const createWalls = () => {
  return new THREE.Mesh(wallsGeo, oldStoneMat);
};
