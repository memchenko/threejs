import * as THREE from "three";

import {
  oldStoneTextures,
  roofTextures,
  windowTextures,
  doorTextures,
} from "../../textures";

export const oldStoneMat = new THREE.MeshStandardMaterial({
  map: oldStoneTextures.color,
  aoMap: oldStoneTextures.ambientOcclusion,
  normalMap: oldStoneTextures.normal,
  roughnessMap: oldStoneTextures.roughness,
  displacementMap: oldStoneTextures.displacement,
  displacementScale: 0.0005,
});

oldStoneTextures.color.generateMipmaps = false;
oldStoneTextures.color.minFilter = THREE.NearestFilter;
oldStoneTextures.color.magFilter = THREE.NearestFilter;

[
  oldStoneTextures.color,
  oldStoneTextures.ambientOcclusion,
  oldStoneTextures.normal,
  oldStoneTextures.roughness,
  oldStoneTextures.displacement,
].forEach((texture) => {
  texture.repeat.set(2, 2);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

export const roofMat = new THREE.MeshStandardMaterial({
  map: roofTextures.color,
  aoMap: roofTextures.ambientOcclusion,
  normalMap: roofTextures.normal,
  roughnessMap: roofTextures.roughness,
});

export const windowMat = new THREE.MeshStandardMaterial({
  map: windowTextures.color,
  aoMap: windowTextures.ambientOcclusion,
  normalMap: windowTextures.normal,
  roughnessMap: windowTextures.roughness,
  displacementMap: windowTextures.displacement,
  displacementScale: 0.01,
  metalnessMap: windowTextures.metallic,
  alphaMap: windowTextures.opacity,
  transparent: true,
});

[
  windowTextures.color,
  windowTextures.ambientOcclusion,
  windowTextures.normal,
  windowTextures.roughness,
  windowTextures.displacement,
  windowTextures.metallic,
  windowTextures.opacity,
].forEach((texture) => {
  texture.repeat.set(0.5, 0.5);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

export const glassMat = new THREE.MeshStandardMaterial({
  color: "black",
});

export const frameMat = new THREE.MeshStandardMaterial({
  color: 0x754d4d,
  roughness: 0.5,
  metalness: 0.3,
});

export const doorMat = new THREE.MeshStandardMaterial({
  map: doorTextures.color,
  aoMap: doorTextures.ambientOcclusion,
  normalMap: doorTextures.normal,
  roughnessMap: doorTextures.roughness,
  displacementMap: doorTextures.displacement,
  displacementScale: 0.02,
});

export const handleMat = new THREE.MeshStandardMaterial({
  color: 0x888888,
  metalness: 0.7,
  roughness: 0.2,
});

export const bladeMat = new THREE.MeshStandardMaterial({
  side: THREE.DoubleSide,
  color: 0xffffff,
  roughness: 0.3,
  metalness: 0.5,
});

export const coneMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.3,
  metalness: 0.5,
});

export const haftMat = new THREE.MeshStandardMaterial({
  color: 0x6a3e25,
  roughness: 0.5,
  metalness: 0,
});
