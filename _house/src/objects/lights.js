import * as THREE from "three";

import { gui } from "../helpers";

export function createLights() {
  const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.2);

  const moonLight = new THREE.DirectionalLight("#b9d5ff", 0.3);
  moonLight.position.set(4, 5, 6);

  return {
    ambientLight,
    moonLight,
  };
}

export function debugLights(lights) {
  const { ambientLight, moonLight } = lights;
  const lightsFolder = gui.addFolder("Lights");

  lightsFolder
    .add(ambientLight, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name("Intensity ambient");

  lightsFolder
    .add(moonLight, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name("Intensity moon");
  lightsFolder
    .add(moonLight.position, "x")
    .min(-5)
    .max(5)
    .step(0.001)
    .name("x moon");
  lightsFolder
    .add(moonLight.position, "y")
    .min(-5)
    .max(5)
    .step(0.001)
    .name("y moon");
  lightsFolder
    .add(moonLight.position, "z")
    .min(-5)
    .max(5)
    .step(0.001)
    .name("z moon");
}
