import * as THREE from "three";

import { roadTextures } from "../../textures";

[
  roadTextures.color,
  roadTextures.ambientOcclusion,
  roadTextures.normal,
  roadTextures.roughness,
  roadTextures.displacement,
].forEach((texture) => {
  texture.repeat.set(1, 4);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

export const createRoad = () => {
  const roadGeo = new THREE.PlaneGeometry(1, 4, 20, 100);
  const roadMat = new THREE.MeshStandardMaterial({
    map: roadTextures.color,
    aoMap: roadTextures.ambientOcclusion,
    normalMap: roadTextures.normal,
    roughnessMap: roadTextures.roughness,
    displacementMap: roadTextures.displacement,
    displacementScale: 0.1,
  });
  const road = new THREE.Mesh(roadGeo, roadMat);

  road.rotateX(Math.PI * -0.5);

  return road;
};
