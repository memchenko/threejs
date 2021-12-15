import * as THREE from "three";

import { graveMat } from "./materials";

const stoneShape = new THREE.Shape();
stoneShape.moveTo(-0.3, 0);
stoneShape.lineTo(-0.3, 0.8);
stoneShape.bezierCurveTo(-0.3, 0.8, -0.3, 1, -0.1, 1);
stoneShape.lineTo(0.1, 1);
stoneShape.bezierCurveTo(0.1, 1, 0.3, 1, 0.3, 0.8);
stoneShape.lineTo(0.3, 0);

const stoneGeo = new THREE.ExtrudeGeometry(stoneShape, {
  steps: 3,
  depth: 0.1,
  bevelThickness: 0.05,
  bevelSize: 0.05,
  bevelOffset: 0,
  bevelSegments: 12,
});

export const createStone = () => {
  const stone = new THREE.Mesh(stoneGeo, graveMat);

  return stone;
};
