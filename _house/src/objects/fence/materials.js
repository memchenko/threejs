import * as THREE from "three";

import { stoneTextures, brickTextures } from "../../textures";
import { gui } from "../../helpers";

export const stoneMat = new THREE.MeshStandardMaterial({
  map: stoneTextures.color,
  aoMap: stoneTextures.ambientOcclusion,
  roughnessMap: stoneTextures.roughness,
  normalMap: stoneTextures.normal,
});

stoneMat.color.generateMipmaps = false;
stoneMat.color.minFilter = THREE.NearestFilter;
stoneMat.color.magFilter = THREE.NearestFilter;

[
  brickTextures.color,
  brickTextures.displacement,
  brickTextures.ambientOcclusion,
  brickTextures.roughness,
  brickTextures.normal,
].forEach((texture) => {
  texture.repeat.set(0.5, 1);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

export const brickMat = new THREE.MeshStandardMaterial({
  map: brickTextures.color,
  aoMap: brickTextures.ambientOcclusion,
  roughnessMap: brickTextures.roughness,
  normalMap: brickTextures.normal,
});

brickMat.color.generateMipmaps = false;
brickMat.color.minFilter = THREE.NearestFilter;
brickMat.color.magFilter = THREE.NearestFilter;

export const metalMat = new THREE.MeshStandardMaterial({
  color: 0x666666,
  metalness: 0.7,
  roughness: 0.5,
});

metalMat.color.generateMipmaps = false;
metalMat.color.minFilter = THREE.NearestFilter;
metalMat.color.magFilter = THREE.NearestFilter;

const lampParams = {
  color: 0x36bc34,
  emissive: 0xd6f594,
};

export const debugMaterials = () => {
  const materials = gui.addFolder("Materials");
  const handleChangeColor = (prop) => (color) => {
    lampMat[prop] = new THREE.Color(color);
  };

  materials
    .addColor(lampParams, "color")
    .name("Lamp color")
    .onChange(handleChangeColor("color"));
  materials
    .addColor(lampParams, "emissive")
    .name("Lamp emissive")
    .onChange(handleChangeColor("emissive"));
  materials
    .add(lampMat, "emissiveIntensity", 0, 1, 0.05)
    .name("Lamp intensity");
  materials.add(lampMat, "roughness", 0, 1, 0.05).name("Lamp roughness");
  materials.add(lampMat, "metalness", 0, 1, 0.05).name("Lamp metalness");

  materials.close();

  return [lampMat];
};
