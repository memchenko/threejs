import * as THREE from "three";

export const ghostMat = new THREE.MeshStandardMaterial({
  color: "lightgreen",
  emissive: 0x448844,
  emissiveIntensity: 3,
  transparent: true,
  opacity: 0.6,
});

export const eyesMat = new THREE.MeshStandardMaterial({
  color: "black",
  transparent: true,
  opacity: 0.6,
  roughness: 0.2,
  metalness: 0.4,
});
