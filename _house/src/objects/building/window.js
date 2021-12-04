import * as THREE from "three";

import { WALL_SIZE } from "./constants";
import { windowMat, glassMat, frameMat } from "./materials";

const WINDOW_H = WALL_SIZE * 0.6;
const WINDOW_W = WINDOW_H * 0.8;
const FRAME_WIDTH = 0.05;

const windowGeo = new THREE.PlaneGeometry(WINDOW_W, WINDOW_H, 100, 100);
const glassGeo = new THREE.PlaneGeometry(WINDOW_W, WINDOW_H);
const frameVertical = new THREE.BoxGeometry(FRAME_WIDTH, WINDOW_H, FRAME_WIDTH);
const frameHorizontal = new THREE.BoxGeometry(
  WINDOW_W,
  FRAME_WIDTH,
  FRAME_WIDTH
);

export const createWindow = () => {
  const window = new THREE.Group();
  const innerFrame = new THREE.Mesh(windowGeo, windowMat);
  const glass = new THREE.Mesh(glassGeo, glassMat);
  const frameTop = new THREE.Mesh(frameHorizontal, frameMat);
  const frameBottom = frameTop.clone();
  const frameLeft = new THREE.Mesh(frameVertical, frameMat);
  const frameRight = frameLeft.clone();

  glass.position.z = 0.001;
  frameTop.position.y = WINDOW_H / 2 - FRAME_WIDTH / 2;
  frameBottom.position.y = -WINDOW_H / 2 + FRAME_WIDTH / 2;
  frameLeft.position.x = -WINDOW_W / 2 + FRAME_WIDTH / 2;
  frameRight.position.x = WINDOW_W / 2 - FRAME_WIDTH / 2;

  window.add(innerFrame, glass, frameTop, frameBottom, frameLeft, frameRight);

  return window;
};
