import * as THREE from "three";
import { name } from "faker";
import { range } from "canvas-sketch-util/random";

import { createStone } from "./stone";
import { createText } from "./text";

export const createGrave = async () => {
  const grave = new THREE.Group();

  const lifeSpan = Math.floor(range(20, 80));
  const start = Math.floor(range(1512, 1856));
  const stone = createStone();
  const firstName = await createText(name.firstName(), 0.05);
  const lastName = await createText(name.lastName(), 0.05);
  const years = await createText(`${start} - ${start + lifeSpan}`, 0.05);
  const rip = await createText("R.I.P.", 0.1);

  firstName.position.set(0, 0.8, 0.15);
  lastName.position.set(0, 0.7, 0.15);
  years.position.set(0, 0.55, 0.15);
  rip.position.set(0, 0.35, 0.15);

  stone.castShadow = true;

  grave.add(stone, firstName, lastName, years, rip);

  return grave;
};
