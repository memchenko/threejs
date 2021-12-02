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
