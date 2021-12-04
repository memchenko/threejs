import * as THREE from "three";

import { WALL_SIZE } from "./constants";
import { doorMat, handleMat, frameMat } from "./materials";

const DOOR_HEIGHT = WALL_SIZE * 0.6;
const DOOR_WIDTH = DOOR_HEIGHT * 0.5;

const doorGeo = new THREE.PlaneGeometry(DOOR_WIDTH, DOOR_HEIGHT, 100, 100);
const handleGeo = new THREE.TorusGeometry(0.04, 0.006, 12, 20);
const frameHorizontalGeo = new THREE.BoxGeometry(DOOR_WIDTH, 0.05, 0.01);
const frameVerticalGeo = new THREE.BoxGeometry(0.05, DOOR_HEIGHT, 0.01);

export const createDoor = () => {
  const door = new THREE.Group();
  const main = new THREE.Mesh(doorGeo, doorMat);
  const handle = new THREE.Mesh(handleGeo, handleMat);
  const frameTop = new THREE.Mesh(frameHorizontalGeo, frameMat);
  const frameBottom = frameTop.clone();
  const frameLeft = new THREE.Mesh(frameVerticalGeo, frameMat);
  const frameRight = frameLeft.clone();

  frameTop.position.set(0, DOOR_HEIGHT / 2 - 0.025, 0);
  frameBottom.position.set(0, -(DOOR_HEIGHT / 2 - 0.025), 0);
  frameLeft.position.set(-(DOOR_WIDTH / 2 - 0.025), 0, 0);
  frameRight.position.set(DOOR_WIDTH / 2 - 0.025, 0, 0);
  handle.position.set(DOOR_WIDTH / 2 - 0.12, 0, 0.009);

  door.add(main, handle, frameTop, frameBottom, frameLeft, frameRight);

  return door;
};
