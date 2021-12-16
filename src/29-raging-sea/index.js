import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

import waterVertexShader from "./shaders/water/vertex.glsl";
import waterFragmentShader from "./shaders/water/fragment.glsl";

/**
 * Base
 */
// Debug
const gui = new dat.GUI({ width: 340 });
const debugObject = {};

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Water
 */
// Geometry
const waterGeometry = new THREE.PlaneGeometry(2, 2, 512, 512);
// const waterGeometry = new THREE.PlaneGeometry(20, 20, 1024, 1024);

// Color
debugObject.depthColor = "#0d1330";
debugObject.surfaceColor = "#4b6571";

// Material
const waterMaterial = new THREE.ShaderMaterial({
  vertexShader: waterVertexShader,
  fragmentShader: waterFragmentShader,
  uniforms: {
    uTime: { value: 0 },

    uBigWavesElevation: { value: 0.105 },
    uBigWavesFrequency: { value: new THREE.Vector2(2.367, 3.295) },
    uBigWavesSpeed: { value: 0.885 },

    uSmallWavesElevation: { value: 0.074 },
    uSmallWavesFrequency: { value: 5.013 },
    uSmallWavesSpeed: { value: 0.452 },
    uSmallWavesIterations: { value: 6 },

    uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
    uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
    uColorOffset: { value: 0.26 },
    uColorMultiplier: { value: 4.996 },
  },
  // Big ocean
  // {
  //   uTime: { value: 0 },

  //   uBigWavesElevation: { value: 0.105 },
  //   uBigWavesFrequency: { value: new THREE.Vector2(0.975, 0.666) },
  //   uBigWavesSpeed: { value: 0.885 },

  //   uSmallWavesElevation: { value: 0.074 },
  //   uSmallWavesFrequency: { value: 2.693 },
  //   uSmallWavesSpeed: { value: 0.204 },
  //   uSmallWavesIterations: { value: 5 },

  //   uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
  //   uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
  //   uColorOffset: { value: 0.26 },
  //   uColorMultiplier: { value: 4.996 },
  // }
});

// Debug
gui
  .add(waterMaterial.uniforms.uBigWavesElevation, "value", 0, 1, 0.001)
  .name("uBigWavesElevation");
gui
  .add(waterMaterial.uniforms.uBigWavesFrequency.value, "x", 0, 10, 0.001)
  .name("uBigWavesFrequency.x");
gui
  .add(waterMaterial.uniforms.uBigWavesFrequency.value, "y", 0, 10, 0.001)
  .name("uBigWavesFrequency.y");
gui
  .add(waterMaterial.uniforms.uBigWavesSpeed, "value", 0, 4, 0.001)
  .name("uBigWavesSpeed");
gui
  .addColor(debugObject, "depthColor")
  .name("depthColor")
  .onChange(() => {
    waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor);
  });
gui
  .addColor(debugObject, "surfaceColor")
  .name("surfaceColor")
  .onChange(() => {
    waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor);
  });
gui
  .add(waterMaterial.uniforms.uColorOffset, "value", 0, 1, 0.001)
  .name("uColorOffset");
gui
  .add(waterMaterial.uniforms.uColorMultiplier, "value", 0, 10, 0.001)
  .name("uColorMultiplier");
gui
  .add(waterMaterial.uniforms.uSmallWavesElevation, "value", 0, 1, 0.001)
  .name("uSmallWavesElevation");
gui
  .add(waterMaterial.uniforms.uSmallWavesFrequency, "value", 0, 30, 0.001)
  .name("uSmallWavesFrequency");
gui
  .add(waterMaterial.uniforms.uSmallWavesSpeed, "value", 0, 4, 0.001)
  .name("uSmallWavesSpeed");
gui
  .add(waterMaterial.uniforms.uSmallWavesIterations, "value", 0, 8, 1)
  .name("uSmallWavesIterations");

// Mesh
const water = new THREE.Mesh(waterGeometry, waterMaterial);
water.rotation.x = -Math.PI * 0.5;
scene.add(water);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(1, 1, 1);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update materials
  waterMaterial.uniforms.uTime.value = elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
