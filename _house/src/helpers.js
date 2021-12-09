import * as THREE from "three";
import * as dat from "lil-gui";

export const gui = new dat.GUI();
gui.close();

export const clock = new THREE.Clock();

const animated = [];
export const animate = (fn) => {
  animated.push(fn);
};
export const runAnimation = () => {
  const now = clock.getElapsedTime();

  animated.forEach((fn) => fn(now));

  requestAnimationFrame(runAnimation);
};
