import * as THREE from "three";

import { WALL_SIZE } from "./constants";
import { createDoor } from "./door";
import { createWalls } from "./walls";
import { createRoof } from "./roof";
import { createShovel } from "./shovel";
import { createWindow } from "./window";
import { createCross } from "./cross";

export const createBuilding = () => {
  const building = new THREE.Group();

  const walls = createWalls();
  const roof = createRoof();
  const leftWindow = createWindow();
  const door = createDoor();
  const shovel = createShovel();
  const cross = createCross();

  leftWindow.scale.set(0.7, 0.7, 0.7);
  leftWindow.rotateY(Math.PI * 0.5);
  leftWindow.position.set(WALL_SIZE / 2 + 0.01, 0.2, 0);

  const rightWindow = leftWindow.clone();

  rightWindow.rotateY(Math.PI);
  rightWindow.position.x = -WALL_SIZE / 2;

  door.position.set(0, -0.02);
  door.position.z = WALL_SIZE / 2 + 0.01;

  shovel.scale.set(0.25, 0.25, 0.25);
  shovel.position.set(0.6, -0.35, 1);
  shovel.rotateX(Math.PI * 0.03);
  shovel.rotateZ(Math.PI * 0.03);

  cross.scale.set(0.7, 0.7, 0.7);
  cross.position.set(0, 1.1, 0.9);

  building.add(walls, roof, leftWindow, rightWindow, door, shovel, cross);

  return building;
};
