/**
 * 添加房屋天花板
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshStandardMaterial,
  Mesh,
  Group,
  DoubleSide,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";

const CEILING_HEIGHT = 0.2; // 天花板厚度
const CEILING_COLOR = 0xf4f3ef; // 珍珠白
const CEILING_POSITION_Y = 4.1; // 天花板相对于组的位置

const addCeiling = (
  scene: Scene,
  assetManager: AssetManager,
  ceilingGroupRef: MutableRefObject<Group | null>,
) => {
  const ceilingGroup = new Group();
  ceilingGroupRef.current = ceilingGroup;
  ceilingGroup.name = "天花板组";

  const boxGeometry = assetManager.geometries.get("boxGeometry");
  // 创建天花板材质
  const ceilingMaterial = new MeshStandardMaterial({
    color: CEILING_COLOR,
    roughness: 0.85,
    metalness: 0,
    side: DoubleSide,
  });
  assetManager.materials.set("ceilingMaterial", ceilingMaterial);

  // 主天花板（覆盖整个房屋）
  const mainCeiling = new Mesh(boxGeometry, ceilingMaterial);
  mainCeiling.name = "天花板";
  mainCeiling.scale.set(35.2, CEILING_HEIGHT, 32);
  mainCeiling.position.set(0, CEILING_POSITION_Y, 0);
  mainCeiling.castShadow = true;
  mainCeiling.receiveShadow = true;
  ceilingGroup.add(mainCeiling);

  // 初始位置设置到天空中（隐藏状态）
  ceilingGroup.position.y = 50;

  scene.add(ceilingGroup);
};

export default addCeiling;
