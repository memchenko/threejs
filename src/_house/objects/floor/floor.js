import * as THREE from "three";
import { mapRange } from "canvas-sketch-util/math";
import { noise3D } from "canvas-sketch-util/random";

import { grassTextures } from "../../textures";

export function createFloor() {
  const { color, ambientOcclusion, roughness, normal, displacement } =
    grassTextures;

  [color, ambientOcclusion, roughness, normal, displacement].forEach(
    (texture) => {
      texture.repeat.set(4, 4);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    }
  );

  const geometry = new THREE.BufferGeometry();
  const cols = 100;
  const rows = 100;
  const min = -5;
  const max = 5;

  const indices = [];
  const vertices = [];
  const normals = [];
  const uvs = [];

  for (let row = 0; row <= rows; row++) {
    const z = mapRange(row, 0, rows, min, max);
    for (let col = 0; col <= cols; col++) {
      const x = mapRange(col, 0, cols, min, max);
      const y = noise3D(x, z, 20, 0.1, 0.04);

      const u = mapRange(row, 0, rows, 0, 1);
      const v = mapRange(col, 0, cols, 0, 1);

      vertices.push(x, y, z);
      normals.push(0, 1, 0);
      uvs.push(u, v);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const a = row * (rows + 1) + (col + 1);
      const b = row * (rows + 1) + col;
      const c = (row + 1) * (rows + 1) + col;
      const d = (row + 1) * (rows + 1) + (col + 1);

      // generate two faces (triangles) per iteration

      indices.push(a, b, d); // face one
      indices.push(b, c, d); // face two
    }
  }

  geometry.setIndex(indices);
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    side: THREE.FrontSide,
    map: color,
    displacementMap: displacement,
    displacementScale: 0.08,
    aoMap: ambientOcclusion,
    normalMap: normal,
    roughnessMap: roughness,
  });

  const floor = new THREE.Mesh(geometry, material);
  floor.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
  );

  return floor;
}
