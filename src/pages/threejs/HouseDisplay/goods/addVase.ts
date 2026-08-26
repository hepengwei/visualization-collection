/**
 * 添加花瓶
 */
import {
  LatheGeometry,
  MeshStandardMaterial,
  Object3D,
  Mesh,
  Group,
  Vector3,
  Vector2,
  Quaternion,
  DoubleSide,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";

const flowerConfigs = [
  { color: 0xff8888, angle: 0.6, spread: 0.055, height: 0.24 }, // 粉红
  { color: 0xffdd66, angle: 2.6, spread: 0.055, height: 0.18 }, // 金黄
  { color: 0xffaadd, angle: 4.6, spread: 0.055, height: 0.2 }, // 浅粉
];
const stemBottom = new Vector3(0, 0.02, 0); // 花茎底部

const addVase = (
  parent: Object3D,
  assetManager: AssetManager,
  positon: Vector3,
) => {
  const vaseGroup = new Group();
  vaseGroup.name = "花瓶";

  // 圆柱体
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  // 球体
  const sphereGeometry = assetManager.geometries.get("sphereGeometry");
  // 花瓶材质
  const vaseMaterial = new MeshStandardMaterial({
    color: 0x3a7a9a,
    roughness: 0.2,
    metalness: 0.3,
    side: DoubleSide,
  });
  assetManager.materials.set("vaseMaterial", vaseMaterial);
  // 花茎材质
  const stemMaterial = new MeshStandardMaterial({
    color: 0x3a6a3a,
    roughness: 0.7,
  });
  assetManager.materials.set("stemMaterial", stemMaterial);
  // 花朵材质
  const flowerMaterial = new MeshStandardMaterial({
    color: 0xff8888,
    roughness: 0.5,
    emissive: 0xff8888,
    emissiveIntensity: 0.04,
  });
  assetManager.materials.set("flowerMaterial", flowerMaterial);

  const vaseGeometry = new LatheGeometry(
    [
      [0, 0],
      [0.055, 0],
      [0.075, 0.04],
      [0.095, 0.14],
      [0.075, 0.26],
      [0.055, 0.3],
      [0.065, 0.32],
    ].map(([r, h]) => new Vector2(r, h)),
    32,
  );
  const vase = new Mesh(vaseGeometry, vaseMaterial);
  vase.castShadow = true;
  vaseGroup.add(vase);

  for (let i = 0; i < 3; i++) {
    const flowerConfig = flowerConfigs[i];
    // 花朵在花瓶口上方的目标落点
    const fx = Math.cos(flowerConfig.angle) * flowerConfig.spread;
    const fz = Math.sin(flowerConfig.angle) * flowerConfig.spread;
    const fy = 0.32 + flowerConfig.height;
    const stemTop = new Vector3(fx, fy, fz); // 花茎顶部
    const stemDir = stemTop.clone().sub(stemBottom);
    const stemLength = stemDir.length();

    // 花茎
    const stem = new Mesh(cylinderGeometry, stemMaterial);
    stem.castShadow = true;
    stem.scale.set(0.005, stemLength, 0.005);
    stem.position.copy(stemBottom).add(stemTop).multiplyScalar(0.5);
    // 用 quaternion 让茎从底部指向花朵
    const yAxis = new Vector3(0, 1, 0);
    const quat = new Quaternion().setFromUnitVectors(
      yAxis,
      stemDir.clone().normalize(),
    );
    stem.quaternion.copy(quat);
    vaseGroup.add(stem);

    // 花朵
    const cloneFlowerMaterial = flowerMaterial.clone();
    cloneFlowerMaterial.color.set(flowerConfig.color);
    cloneFlowerMaterial.emissive.set(flowerConfig.color);
    const flower = new Mesh(sphereGeometry, cloneFlowerMaterial);
    flower.castShadow = true;
    flower.scale.set(0.028, 0.028, 0.028);
    flower.position.copy(stemTop);
    vaseGroup.add(flower);
  }

  vaseGroup.position.copy(positon);
  vaseGroup.scale.set(
    1 / parent.scale.x,
    1 / parent.scale.y,
    1 / parent.scale.z,
  );
  parent.add(vaseGroup);
};

export default addVase;
