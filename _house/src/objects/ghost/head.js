import * as THREE from "three";

import { ghostMat, eyesMat } from "./materials";

const headGeo = new THREE.SphereGeometry(
  0.5,
  20,
  20,
  undefined,
  undefined,
  0,
  Math.PI * 0.5
);
const eyeGeo = new THREE.SphereGeometry(0.1, 20, 20);

export const createHead = () => {
  const head = new THREE.Group();
  const base = new THREE.Mesh(headGeo, ghostMat);
  const eyeLeft = new THREE.Mesh(eyeGeo, eyesMat);
  const eyeRight = new THREE.Mesh(eyeGeo, eyesMat);

  eyeLeft.position.set(-0.15, 0, 0.4);
  eyeRight.position.set(0.15, 0, 0.4);

  head.add(base, eyeLeft, eyeRight);

  return head;
};
