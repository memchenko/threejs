import * as THREE from "three";

import { createHead } from "./head";
import { createBody } from "./body";

export const createGhost = () => {
  const ghost = new THREE.Group();
  const head = createHead();
  const body = createBody();

  body.position.y = -1;

  ghost.add(head, body);

  return ghost;
};
