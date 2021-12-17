import * as THREE from "three";
import * as dat from "lil-gui";

export const gui = new dat.GUI({ width: 340 });
export const debugObject = {};

export const scene = new THREE.Scene();

const clock = new THREE.Clock();

export const animation = {
  animated: [],
  add(fn) {
    this.animated.push(fn);
  },
  run() {
    const elapsedTime = clock.getElapsedTime();

    this.animated.forEach((fn) => fn(elapsedTime));

    window.requestAnimationFrame(this.run);
  },
};

animation.add = animation.add.bind(animation);
animation.run = animation.run.bind(animation);
