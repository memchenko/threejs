import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export const grassTextures = {
  color: textureLoader.load("/textures/mudgrass/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/textures/mudgrass/ambientOcclusion.jpeg"
  ),
  roughness: textureLoader.load("/textures/mudgrass/roughness.jpeg"),
  normal: textureLoader.load("/textures/mudgrass/normal.jpeg"),
  displacement: textureLoader.load("/textures/mudgrass/displacement.jpeg"),
};

export const stoneTextures = {
  color: textureLoader.load("/textures/stone/color.jpg"),
  ambientOcclusion: textureLoader.load("/textures/stone/ambientOcclusion.jpeg"),
  displacement: textureLoader.load("/textures/stone/displacement.jpeg"),
  normal: textureLoader.load("/textures/stone/normal.jpeg"),
  roughness: textureLoader.load("/textures/stone/roughness.jpg"),
};

export const brickTextures = {
  color: textureLoader.load("/textures/bricks/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/textures/bricks/ambientOcclusion.jpeg"
  ),
  displacement: textureLoader.load("/textures/bricks/displacement.jpg"),
  normal: textureLoader.load("/textures/bricks/normal.jpeg"),
  roughness: textureLoader.load("/textures/bricks/roughness.jpg"),
};

export const oldStoneTextures = {
  color: textureLoader.load("/textures/old-stone/color.jpg"),
  ambientOcclusion: textureLoader.load(
    "/textures/old-stone/ambientOcclusion.jpg"
  ),
  displacement: textureLoader.load("/textures/old-stone/displacement.jpg"),
  normal: textureLoader.load("/textures/old-stone/normal.jpg"),
  roughness: textureLoader.load("/textures/old-stone/roughness.jpg"),
};

export const roofTextures = {
  color: textureLoader.load("/textures/roof/color.jpg"),
  ambientOcclusion: textureLoader.load("/textures/roof/ambientOcclusion.jpg"),
  displacement: textureLoader.load("/textures/roof/displacement.jpg"),
  normal: textureLoader.load("/textures/roof/normal.jpg"),
  roughness: textureLoader.load("/textures/roof/roughness.jpg"),
};

export const doorTextures = {
  color: textureLoader.load("/textures/door/color.jpg"),
  ambientOcclusion: textureLoader.load("/textures/door/ambientOcclusion.jpg"),
  displacement: textureLoader.load("/textures/door/height.jpg"),
  normal: textureLoader.load("/textures/door/normal.jpg"),
  roughness: textureLoader.load("/textures/door/roughness.jpg"),
};

export const windowTextures = {
  color: textureLoader.load("/textures/window/color.jpg"),
  ambientOcclusion: textureLoader.load("/textures/window/ambientOcclusion.jpg"),
  displacement: textureLoader.load("/textures/window/height.png"),
  normal: textureLoader.load("/textures/window/normal.jpg"),
  roughness: textureLoader.load("/textures/window/roughness.jpg"),
  opacity: textureLoader.load("/textures/window/opacity.jpg"),
  metallic: textureLoader.load("/textures/window/metallic.jpg"),
};
