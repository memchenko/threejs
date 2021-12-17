import * as THREE from "three";

import vertexShader from "../../shaders/snow/vertex.glsl";
import fragmentShader from "../../shaders/snow/fragment.glsl";
import { animation, debugObject, gui, scene } from "../../helpers";

const parameters = {
  size: 3,
  count: 300,
  radius: 2,
};

const uniforms = {
  uSize: { value: parameters.size },
  uTime: { value: 0 },
};

function generateSnowfall() {
  const positions = new Float32Array(parameters.count * 3);
  const scales = new Float32Array(parameters.count);
  const geometry = new THREE.BufferGeometry();

  for (let i = 0; i < parameters.count; i++) {
    const x = i * 3;
    const y = x + 1;
    const z = y + 1;

    positions[x] = (Math.random() * 2 - 1) * parameters.radius;
    positions[y] = (Math.random() * 2 - 1) * parameters.radius;
    positions[z] = (Math.random() * 2 - 1) * parameters.radius;

    scales[x] = Math.random() * parameters.size;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

  const material = new THREE.ShaderMaterial({
    depthWrite: false,
    blending: THREE.NormalBlending,
    transparent: true,
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const snowflakes = new THREE.Points(geometry, material);

  scene.add(snowflakes);
}

generateSnowfall();

animation.add((elapsedTime) => {
  uniforms.uTime.value = elapsedTime;
});
