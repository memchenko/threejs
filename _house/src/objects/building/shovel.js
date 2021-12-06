import * as THREE from "three";

import { bladeMat, coneMat, haftMat } from "./materials";

const bladeShape = new THREE.Shape();
bladeShape.moveTo(-0.5, 0);
bladeShape.lineTo(-0.5, 0.5);
bladeShape.bezierCurveTo(-0.5, 0.5, -0.4, 1.2, 0, 1.2);
bladeShape.bezierCurveTo(0, 1.2, 0.4, 1.2, 0.5, 0.5);
bladeShape.lineTo(0.5, 0);

const bladeGeo = new THREE.ShapeGeometry(bladeShape, 12);
const coneGeo = new THREE.ConeGeometry(0.12, 0.4, 12);
const haftGeo = new THREE.CylinderGeometry(0.11, 0.11, 2.5, 12);

export const createShovel = () => {
  const shovel = new THREE.Group();
  const blade = new THREE.Mesh(bladeGeo, bladeMat);
  const cone = new THREE.Mesh(coneGeo, coneMat);
  const haft = new THREE.Mesh(haftGeo, haftMat);

  blade.position.y = -0.1;
  haft.position.y = -1.45;

  shovel.add(blade, cone, haft);
  shovel.rotateZ(Math.PI);

  return shovel;
};
