import * as THREE from "three";

import { haftMat } from "./materials";

const horizontalBarGeo = new THREE.BoxGeometry(0.5, 0.08, 0.08);
const verticalBarGeo = new THREE.BoxGeometry(0.08, 0.7, 0.08);

export const createCross = () => {
  const cross = new THREE.Group();

  const horizontalBar = new THREE.Mesh(horizontalBarGeo, haftMat);
  const verticalBar = new THREE.Mesh(verticalBarGeo, haftMat);

  horizontalBar.position.set(0, 0.12, 0);

  cross.add(horizontalBar, verticalBar);

  return cross;
};
