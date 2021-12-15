const scene = new THREE.Scene();

const cube = new THREE.BoxGeometry(1, 1, 1);
const red = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// Mesh consists of a geometry and a material
const redCube = new THREE.Mesh(cube, red);

const sizes = {
  width: 800,
  height: 600,
};

// params:
// 1) field of view (FOV) (degrees)
// 2) aspect ratio of a frame
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(redCube);
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
