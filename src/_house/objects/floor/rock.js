import * as THREE from "three";

import { rockTextures } from "../../textures";

const rockMat = new THREE.MeshStandardMaterial({
  map: rockTextures.color,
  normalMap: rockTextures.normal,
  roughness: rockTextures.roughness,
  aoMap: rockTextures.ambientOcclusion,
  displacementMap: rockTextures.displacement,
  displacementScale: 0.02,
});

const rockGeo = new THREE.IcosahedronGeometry(1, 1);

export const createRock = () => {
  return new THREE.Mesh(rockGeo, rockMat);
};
