import * as THREE from "three";

import { createFloor as createBaseFloor } from "./floor";
import { createRoad } from "./road";

export const createFloor = () => {
  const floor = new THREE.Group();
  const baseFloor = createBaseFloor();
  const road = createRoad();

  road.position.z = 2;
  road.position.y = -0.01;

  floor.add(baseFloor, road);

  return floor;
};
