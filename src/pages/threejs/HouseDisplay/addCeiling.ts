/**
 * 添加可移动的天花板
 */
import { MutableRefObject } from "react";
import {
  Scene,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Group,
  DoubleSide,
} from "three";

/**
 * 创建天花板组
 */
const addCeiling = (
  scene: Scene,
  ceilingGroupRef: MutableRefObject<Group | null>,
) => {
  const ceilingGroup = new Group();
  ceilingGroupRef.current = ceilingGroup;
  ceilingGroup.name = "天花板组";

  const ceilingHeight = 0.2; // 天花板厚度
  const ceilingColor = 0xf4f3ef; // 珍珠白
  const ceilingY = 4.1; // 天花板相对于组的位置

  // 主天花板（覆盖整个房屋）
  const mainCeiling = new Mesh(
    new BoxGeometry(35.2, ceilingHeight, 32),
    new MeshStandardMaterial({
      color: ceilingColor,
      roughness: 0.85,
      metalness: 0,
      side: DoubleSide,
    }),
  );
  mainCeiling.name = "天花板";
  mainCeiling.position.set(0, ceilingY, 0);
  mainCeiling.castShadow = true;
  mainCeiling.receiveShadow = true;
  ceilingGroup.add(mainCeiling);

  // 初始位置设置到天空中（隐藏状态）
  ceilingGroup.position.y = 50;

  scene.add(ceilingGroup);
};

export default addCeiling;
