/**
 * 添加房屋天花板
 */
import { MutableRefObject } from "react";
import { Scene, Mesh, Vector3 } from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  WALL_2_POSITION_X,
  WALL_35_POSITION_X,
  WALL_1_POSITION_Z,
  WALL_60_POSITION_Z,
} from "./addHouseStructure";

const CEILING_HEIGHT = 0.2; // 天花板厚度
const CEILING_SCALE = new Vector3(
  WALL_35_POSITION_X - WALL_2_POSITION_X + WALL_THICKNESS,
  CEILING_HEIGHT,
  WALL_60_POSITION_Z - WALL_1_POSITION_Z + WALL_THICKNESS,
); // 天花板尺寸
export const CEILING_POSITION_Y = WALL_HEIGHT + CEILING_HEIGHT / 2; // 天花板相对于地面的距离
export const CEILING_INIT_POSITION_Y = 50; // 天花板相对于地面的初始距离

const addCeiling = (
  scene: Scene,
  assetManager: AssetManager,
  ceilingRef: MutableRefObject<Mesh | null>,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const wallMaterial = assetManager.materials.get("wallMaterial");

  // 主天花板（覆盖整个房屋）
  const ceiling = new Mesh(boxGeometry, wallMaterial);
  ceiling.name = "天花板";
  ceilingRef.current = ceiling;
  ceiling.scale.copy(CEILING_SCALE);
  ceiling.position.set(
    WALL_2_POSITION_X - WALL_THICKNESS / 2 + CEILING_SCALE.x / 2,
    CEILING_POSITION_Y,
    WALL_1_POSITION_Z - WALL_THICKNESS / 2 + CEILING_SCALE.z / 2,
  );
  ceiling.castShadow = true;
  ceiling.receiveShadow = true;

  // 初始位置设置到天空中（隐藏状态）
  ceiling.position.y = 50;

  scene.add(ceiling);
};

export default addCeiling;
