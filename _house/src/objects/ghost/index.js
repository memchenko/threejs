import * as THREE from "three";

import { createHead } from "./head";
import { createBody } from "./body";
import { createGhostLight } from "../lights";

export const createGhost = () => {
  const ghost = new THREE.Group();
  const head = createHead();
  const body = createBody();
  const light = createGhostLight();

  light.castShadow = true;
  light.shadow.mapSize.width = 256;
  light.shadow.mapSize.height = 256;
  light.shadow.camera.far = 7;

  body.position.y = -1;
  light.position.y = 0;

  ghost.add(head, body, light);

  ghost.scale.set(0.4, 0.4, 0.4);
  ghost.position.set(0, 0, 0);

  return ghost;
};
