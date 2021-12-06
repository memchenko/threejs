import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createLights, debugLights } from "./objects/lights";
import { createCamera, debugCamera } from "./objects/camera";
import { createFloor } from "./objects/floor";
import { createFence } from "./objects/fence";
import { createBuilding } from "./objects/building";
import { createGrave } from "./objects/grave";

// Config
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Basic dependencies
const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const lights = createLights();
const { ambientLight, moonLight } = lights;
debugLights(lights);

const camera = createCamera(sizes.width / sizes.height);
debugCamera(camera);

const floor = createFloor();
const fence = createFence(9);
const building = createBuilding();

fence.position.set(-3.8, 0.1, -3.8);
building.position.set(0, 0.6, -1.3);

scene.add(ambientLight, moonLight, camera, floor, fence, building);

(async () => {
  const grave = await createGrave();

  grave.position.set(0, 1, 2);
  scene.add(grave);
})();

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
