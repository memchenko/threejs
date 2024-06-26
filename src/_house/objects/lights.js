import * as THREE from "three";

import { gui } from "../helpers";

export const createEnvironmentLights = () => {
  const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.15);

  const moonLight = new THREE.DirectionalLight("#b9d5ff", 0.25);
  moonLight.position.set(-0.9, 5, 2.5);

  return {
    ambientLight,
    moonLight,
  };
};

export const createGhostLight = () => {
  return new THREE.PointLight("lightgreen", 0.8, 2, 2);
};

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
