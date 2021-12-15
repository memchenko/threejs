import * as THREE from "three";

import { createColumn } from "./column";
import { LATTICE_LENGTH, COLUMN_W } from "./constants";
import { createLattice } from "./lattice";

export const createFence = (width) => {
  // f(x) = 0     | x >= 0 & x <= width
  // f(y) = 0     | y >= 0 & y <= width
  // f(x) = width | x >= 0 & x <= width
  // f(y) = width | y >= 0 & y <= width
  const fence = new THREE.Group();

  const DIST = LATTICE_LENGTH;
  const SIDE_COLUMNS_AMOUNT = Math.floor(width / DIST);
  const MAX_COORD = DIST * (SIDE_COLUMNS_AMOUNT - 1);
  const ITERABLE_COLUMNS = SIDE_COLUMNS_AMOUNT - 1;

  // top side
  for (let i = 0; i < ITERABLE_COLUMNS; i++) {
    const x = (i + 1) * DIST;
    const column = createColumn();
    const lattice = createLattice();

    column.position.set(x, 0, 0);
    lattice.position.set(x - LATTICE_LENGTH / 2, 0.15, 0);
    fence.add(column, lattice);
  }

  // right side
  for (let i = 0; i < ITERABLE_COLUMNS; i++) {
    const z = (i + 1) * DIST;
    const column = createColumn();
    const lattice = createLattice();

    column.position.set(MAX_COORD, 0, z);
    lattice.rotateY(Math.PI * 0.5);
    lattice.position.set(MAX_COORD, 0.15, z - LATTICE_LENGTH / 2);
    fence.add(column, lattice);
  }

  // bottom side
  for (let i = 0; i < ITERABLE_COLUMNS; i++) {
    const x = i * DIST;
    const column = createColumn(i === 2 || i === 3);

    column.position.set(x, 0, MAX_COORD);
    fence.add(column);

    if (i === 2 || i === 3) {
      column.scale.set(1.5, 1.5, 1.5);
    }

    if (i === 2) {
      continue;
    }

    const lattice = createLattice();

    lattice.position.set(x + LATTICE_LENGTH / 2, 0.15, MAX_COORD);
    fence.add(lattice);
  }

  // left side
  for (let i = 0; i < ITERABLE_COLUMNS; i++) {
    const z = i * DIST;
    const column = createColumn();
    const lattice = createLattice();

    column.position.set(0, 0, z);
    lattice.rotateY(Math.PI * 0.5);
    lattice.position.set(0, 0.15, z + LATTICE_LENGTH / 2);
    fence.add(column, lattice);
  }

  return fence;
};
