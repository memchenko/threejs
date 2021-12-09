import * as THREE from "three";

import {
  LATTICE_LENGTH,
  COLUMN_H,
  TWIG_DIAMETER,
  SPIKES_NUMBER,
  SPIKE_LENGTH,
  SPIKES_DIST,
  COLUMN_W,
  SPIKES_PAD,
} from "./constants";
import { metalMat } from "./materials";

const crossbarGeo = new THREE.CylinderGeometry(
  TWIG_DIAMETER,
  TWIG_DIAMETER,
  LATTICE_LENGTH,
  20
);
const spikesGeos = Array.from(
  { length: Math.ceil(SPIKES_NUMBER / 2) },
  (_, i) =>
    new THREE.CylinderGeometry(
      TWIG_DIAMETER,
      TWIG_DIAMETER,
      SPIKE_LENGTH - i * 0.03,
      20
    )
);

export const createLattice = () => {
  const lattice = new THREE.Group();

  const crossbarBottom = new THREE.Mesh(crossbarGeo, metalMat);
  const crossbarTop = new THREE.Mesh(crossbarGeo, metalMat);
  crossbarTop.position.y = COLUMN_H * 0.6;

  crossbarTop.castShadow = true;
  crossbarBottom.castShadow = true;
  crossbarTop.rotateZ(Math.PI * 0.5);
  crossbarBottom.rotateZ(Math.PI * 0.5);

  for (let i = 0; i < SPIKES_NUMBER; i++) {
    const index = Math.abs(i - Math.floor(SPIKES_NUMBER / 2));
    const spike = new THREE.Mesh(spikesGeos[index], metalMat);

    spike.castShadow = true;
    spike.position.x = i * SPIKES_DIST - 0.5;
    spike.position.y = 0.15;

    lattice.add(spike);
  }

  lattice.add(crossbarTop, crossbarBottom);

  return lattice;
};
