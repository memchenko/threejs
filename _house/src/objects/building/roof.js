import * as THREE from "three";

import { ROOF_HEIGHT, WALL_SIZE } from "./constants";
import { oldStoneMat, roofMat } from "./materials";

const HALF_WALL = WALL_SIZE / 2;
const ROOF_SCALE = 1.01;

const triangleShape = new THREE.Shape();
triangleShape.moveTo(-WALL_SIZE / 2, 0);
triangleShape.lineTo(0, WALL_SIZE / 2);
triangleShape.lineTo(WALL_SIZE / 2, 0);

const triangleGeo = new THREE.ShapeGeometry(triangleShape);
const roofPlane = new THREE.PlaneGeometry(WALL_SIZE, ROOF_HEIGHT, 100, 100);

export const createRoof = () => {
  const roof = new THREE.Group();

  const triangleFront = new THREE.Mesh(triangleGeo, oldStoneMat);
  const triangleBack = new THREE.Mesh(triangleGeo, oldStoneMat);
  const roofLeft = new THREE.Mesh(roofPlane, roofMat);
  const roofRight = new THREE.Mesh(roofPlane, roofMat);

  triangleFront.position.set(0, HALF_WALL, HALF_WALL);
  triangleBack.position.set(0, HALF_WALL, -HALF_WALL);
  triangleBack.rotateY(Math.PI);

  roofLeft.scale.set(ROOF_SCALE, ROOF_SCALE, ROOF_SCALE);
  roofLeft.rotateZ(Math.PI * 0.25);
  roofLeft.rotateY(Math.PI * 0.5);
  roofLeft.position.set(0.455, 1.35, 0);

  roofRight.scale.set(ROOF_SCALE, ROOF_SCALE, ROOF_SCALE);
  roofRight.rotateZ(Math.PI * 0.75);
  roofRight.rotateY(Math.PI * 0.5);
  roofRight.position.set(-0.455, 1.35);

  roof.add(triangleFront, triangleBack, roofLeft, roofRight);

  return roof;
};
