import * as THREE from "three";

export function createCamera(aspectRatio) {
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
  camera.position.x = 4;
  camera.position.y = 2;
  camera.position.z = 5;

  return camera;
}

export function debugCamera(gui, camera) {
  const cameraFolder = gui.addFolder("Camera");

  cameraFolder.add(camera.position, "x", 0, 10, 0.1);
  cameraFolder.add(camera.position, "y", 0, 10, 0.1);
  cameraFolder.add(camera.position, "z", 0, 10, 0.1);
}
