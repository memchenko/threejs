import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { createLights, debugLights } from "./objects/lights";
import { createCamera, debugCamera } from "./objects/camera";
import { createFloor } from "./objects/floor";
import { createColumn } from "./objects/fence";

// Config
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Basic dependencies
const canvas = document.querySelector("canvas.webgl");
const gui = new dat.GUI();
const scene = new THREE.Scene();

const lights = createLights();
const { ambientLight, moonLight } = lights;
debugLights(gui, lights);

const camera = createCamera(sizes.width / sizes.height);
debugCamera(gui, camera);

const floor = createFloor();

const column = createColumn();

column.position.y = 0.25;

scene.add(ambientLight, moonLight, camera, floor, column);

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

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
