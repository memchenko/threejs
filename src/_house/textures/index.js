import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export const grassTextures = {
  color: textureLoader.load("/_house/textures/mudgrass/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/mudgrass/ambientOcclusion.jpeg"
  ),
  roughness: textureLoader.load("/_house/textures/mudgrass/roughness.jpeg"),
  normal: textureLoader.load("/_house/textures/mudgrass/normal.jpeg"),
  displacement: textureLoader.load(
    "/_house/textures/mudgrass/displacement.jpeg"
  ),
};

export const stoneTextures = {
  color: textureLoader.load("/_house/textures/stone/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/stone/ambientOcclusion.jpeg"
  ),
  displacement: textureLoader.load("/_house/textures/stone/displacement.jpeg"),
  normal: textureLoader.load("/_house/textures/stone/normal.jpeg"),
  roughness: textureLoader.load("/_house/textures/stone/roughness.jpg"),
};

export const brickTextures = {
  color: textureLoader.load("/_house/textures/bricks/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/bricks/ambientOcclusion.jpeg"
  ),
  displacement: textureLoader.load("/_house/textures/bricks/displacement.jpg"),
  normal: textureLoader.load("/_house/textures/bricks/normal.jpeg"),
  roughness: textureLoader.load("/_house/textures/bricks/roughness.jpg"),
};

export const oldStoneTextures = {
  color: textureLoader.load("/_house/textures/old-stone/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/old-stone/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load(
    "/_house/textures/old-stone/displacement.jpg"
  ),
  normal: textureLoader.load("/_house/textures/old-stone/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/old-stone/roughness.jpg"),
};

export const roofTextures = {
  color: textureLoader.load("/_house/textures/roof/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/roof/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/_house/textures/roof/displacement.jpg"),
  normal: textureLoader.load("/_house/textures/roof/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/roof/roughness.jpg"),
};

export const doorTextures = {
  color: textureLoader.load("/_house/textures/door/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/door/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/_house/textures/door/height.png"),
  normal: textureLoader.load("/_house/textures/door/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/door/roughness.jpg"),
};

export const windowTextures = {
  color: textureLoader.load("/_house/textures/window/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/window/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/_house/textures/window/height.png"),
  normal: textureLoader.load("/_house/textures/window/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/window/roughness.jpg"),
  opacity: textureLoader.load("/_house/textures/window/opacity.jpg"),
  metallic: textureLoader.load("/_house/textures/window/metallic.jpg"),
};

export const roadTextures = {
  color: textureLoader.load("/_house/textures/road/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/road/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/_house/textures/road/displacement.jpg"),
  normal: textureLoader.load("/_house/textures/road/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/road/roughness.jpg"),
};

export const rockTextures = {
  color: textureLoader.load("/_house/textures/rock/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/rock/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/_house/textures/rock/displacement.jpg"),
  normal: textureLoader.load("/_house/textures/rock/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/rock/roughness.jpg"),
};

export const graveTextures = {
  color: textureLoader.load("/_house/textures/grave/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/_house/textures/grave/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/_house/textures/grave/displacement.jpg"),
  normal: textureLoader.load("/_house/textures/grave/normal.jpg"),
  roughness: textureLoader.load("/_house/textures/grave/roughness.jpg"),
};
