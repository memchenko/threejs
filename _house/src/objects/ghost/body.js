import * as THREE from "three";
import { mapRange } from "canvas-sketch-util/math";

import { ghostMat } from "./materials";
import { animate } from "../../helpers";

const tubeHeight = 2;
const radiusTop = 0.5;
const bonesCount = 8;
const segmentBoneCount = 3;
const boneHeight = tubeHeight / bonesCount;
const tubeHalfHeight = tubeHeight * 0.5;
const heightSegmentCount = bonesCount * segmentBoneCount;

const tubeGeo = new THREE.CylinderGeometry(
  0,
  radiusTop,
  tubeHeight,
  20,
  heightSegmentCount,
  true
);

const position = tubeGeo.attributes.position;

const vertex = new THREE.Vector3();
const skinIndices = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i);

  const y = vertex.y + tubeHalfHeight;

  const skinIndex = Math.floor(y / boneHeight);
  const skinWeight = (y % boneHeight) / boneHeight;

  skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

tubeGeo.setAttribute(
  "skinIndex",
  new THREE.Uint16BufferAttribute(skinIndices, 4)
);
tubeGeo.setAttribute(
  "skinWeight",
  new THREE.Float32BufferAttribute(skinWeights, 4)
);

const animateSkeleton = (skeleton) => (now) => {
  const adjustedNow = now * 5;

  for (let i = 9; i > 2; i--) {
    const y = mapRange(i, 2, 9, 0 + adjustedNow, Math.PI + adjustedNow);

    skeleton.bones[i].position.x =
      Math.sin(y) * 0.15 * mapRange(i, 2, 9, 0.1, 1);
  }
};

export const createBody = () => {
  const mesh = new THREE.SkinnedMesh(tubeGeo, ghostMat);
  const bones = [new THREE.Bone()];
  bones[0].position.set(0, -tubeHeight, 0);

  for (let i = 1; i < 10; i++) {
    const bone = new THREE.Bone();
    bones[bones.length - 1].add(bone);
    bone.position.y = boneHeight;
    bones.push(bone);
  }

  const skeleton = new THREE.Skeleton(bones);

  mesh.add(skeleton.bones[0]);
  mesh.bind(skeleton);
  mesh.rotateX(Math.PI);

  animate(animateSkeleton(skeleton));

  return mesh;
};
