import * as THREE from "three";

import { createFloor as createBaseFloor } from "./floor";
import { createRoad } from "./road";
import { createRock } from "./rock";

export const createFloor = () => {
  const floor = new THREE.Group();
  const baseFloor = createBaseFloor();
  const road = createRoad();
  const rock1 = createRock();
  const rock2 = createRock();
  const rock3 = createRock();
  const rock4 = createRock();

  road.position.set(0, -0.01, 2);

  rock1.scale.set(0.7, 0.7, 0.7);
  rock1.position.set(-1.4, -0.3, 0.3);
  rock1.rotateY(Math.PI * -0.7);

  rock2.scale.set(0.5, 0.5, 0.5);
  rock2.position.set(1.7, 0, -1.4);
  rock2.rotateZ(Math.PI * -0.4);
  rock2.rotateX(Math.PI * -0.3);

  rock3.scale.set(0.2, 0.2, 0.2);
  rock3.position.set(1.5, 0.05, -0.8);

  rock4.scale.set(0.1, 0.1, 0.1);
  rock4.position.set(1.8, 0.05, -0.8);

  floor.add(baseFloor, road, rock1, rock2, rock3, rock4);

  return floor;
};
