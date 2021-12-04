import * as THREE from "three";

import { WALL_SIZE } from "./constants";
import { createDoor } from "./door";
import { createWalls } from "./walls";
import { createRoof } from "./roof";
import { createWindow } from "./window";

export const createBuilding = () => {
  const building = new THREE.Group();

  const walls = createWalls();
  const roof = createRoof();
  const leftWindow = createWindow();
  const door = createDoor();

  leftWindow.scale.set(0.7, 0.7, 0.7);
  leftWindow.rotateY(Math.PI * 0.5);
  leftWindow.position.set(WALL_SIZE / 2 + 0.01, 0.2, 0);

  const rightWindow = leftWindow.clone();

  rightWindow.rotateY(Math.PI);
  rightWindow.position.x = -WALL_SIZE / 2;

  door.position.set(0, -0.02);
  door.position.z = WALL_SIZE / 2 + 0.01;

  building.add(walls, roof, leftWindow, rightWindow, door);

  return building;
};
