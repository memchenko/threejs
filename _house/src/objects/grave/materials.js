import * as THREE from "three";

import { graveTextures } from "../../textures";

export const graveMat = new THREE.MeshStandardMaterial({
  map: graveTextures.color,
  roughness: graveTextures.roughness,
  normalMap: graveTextures.normal,
  aoMap: graveTextures.ambientOcclusion,
  displacementMap: graveTextures.displacement,
  displacementScale: 0.001,
});

[
  graveTextures.color,
  graveTextures.roughness,
  graveTextures.normal,
  graveTextures.ambientOcclusion,
  graveTextures.displacement,
].forEach((texture) => {
  texture.repeat.set(2, 1);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

graveTextures.color.generateMipmaps = false;
graveTextures.color.minFilter = THREE.LinearFilter;
graveTextures.color.magFilter = THREE.LinearFilter;
