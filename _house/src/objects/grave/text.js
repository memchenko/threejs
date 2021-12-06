import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const fontLoader = new FontLoader();
const font = new Promise((resolve) => {
  fontLoader.load("/fonts/courgette/Courgette_Regular.json", (font) => {
    resolve(font);
  });
});

const fontMat = new THREE.MeshStandardMaterial({
  color: 0x888888,
  metalness: 0.7,
  roughness: 0.2,
});

export const createText = async (text, size) => {
  const fontFace = await font;
  const geometry = new TextGeometry(text, {
    font: fontFace,
    size,
    height: size / 10,
    curveSegments: 5,
    bevelEnabled: false,
  });
  geometry.center();

  const mesh = new THREE.Mesh(geometry, fontMat);

  return mesh;
};
