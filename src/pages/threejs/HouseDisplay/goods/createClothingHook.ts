/**
 * 创建挂衣钩
 */
import {
  MeshPhysicalMaterial,
  Mesh,
  Group,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";

const CYLINDER_RADIUS = 0.016; // 圆柱半径
const CYLINDER_HEIGHT = 0.2; // 圆柱的高
const SPHERE_RADIUS = 0.024; // 球半径

const createClothingHook = (assetManager: AssetManager) => {
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  const sphereGeometry = assetManager.geometries.get("sphereGeometry");
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;

  const clothingHookGroup = new Group();

  const cylinder = new Mesh(cylinderGeometry, woodBoardLightMaterial);
  cylinder.scale.set(CYLINDER_RADIUS, CYLINDER_HEIGHT, CYLINDER_RADIUS);
  cylinder.rotation.x = Math.PI / 2;
  cylinder.position.set(0, 0, CYLINDER_HEIGHT / 2);
  clothingHookGroup.add(cylinder);

  const sphere = new Mesh(sphereGeometry, woodBoardLightMaterial);
  sphere.scale.set(SPHERE_RADIUS, SPHERE_RADIUS, SPHERE_RADIUS);
  sphere.position.set(0, 0, CYLINDER_HEIGHT);
  clothingHookGroup.add(sphere);

  return clothingHookGroup;
};

export default createClothingHook;
