import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { range } from "canvas-sketch-util/random";
import { createLights, debugLights } from "./objects/lights";
import { createCamera, debugCamera } from "./objects/camera";
import { createFloor } from "./objects/floor";
import { createFence } from "./objects/fence";
import { createBuilding } from "./objects/building";
import { createGrave } from "./objects/grave";
import { createGhost } from "./objects/ghost";

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

const fog = new THREE.Fog(0x889988, 0, 15);
scene.fog = fog;

const floor = createFloor();
const fence = createFence(9);
const building = createBuilding();
const ghost = createGhost();

fence.position.set(-3.8, 0.1, -3.8);
building.position.set(0, 0.6, -1.3);
ghost.position.set(0, 2, 1);

scene.add(ambientLight, moonLight, camera, floor, fence, building, ghost);

(async () => {
  const createGraves = async () => {
    const graves = new THREE.Group();

    for (let i = 0; i < 4; i++) {
      const row = i % 2;
      const col = Math.floor(i / 2);
      const isLying = Math.random() < 0.2;
      const grave = await createGrave();

      grave.scale.set(0.7, 0.7, 0.7);
      grave.position.set(row * 1.2, 0, col * 1.2);

      if (isLying) {
        grave.rotateY(range(-0.08, 0.08) * Math.PI);
        grave.rotateX(Math.PI * -0.5);
        grave.position.y = 0.05;
      } else {
        grave.rotateY(range(-0.08, 0.08) * Math.PI);
        grave.rotateZ(range(-0.05, 0.05) * Math.PI);
      }

      graves.add(grave);
    }

    return graves;
  };

  const graves1 = await createGraves();
  const graves2 = await createGraves();
  const graves3 = await createGraves();

  graves1.position.set(-3, 0, 1.5);
  graves2.position.set(1.5, 0, 1.5);
  graves3.position.set(-3, 0, -2);

  scene.add(graves1, graves2, graves3);
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
renderer.setClearColor(0x889988);

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
