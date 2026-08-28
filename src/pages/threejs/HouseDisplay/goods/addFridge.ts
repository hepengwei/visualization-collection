/**
 * 添加十字门冰箱
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshStandardMaterial,
  Mesh,
  Group,
  Vector3,
  Object3D,
  DoubleSide,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { getEaseProgress } from "../utils";

const FRIDGE_POSITON = new Vector3(16.1, 0, -6.3); // 冰箱的位置
const OPEN_OR_CLOSE_DURATION = 800; // 开/关门动画总时长
const FRIDGE_COLOR = 0xabb1b7; // 冰箱的颜色,星迹灰
const FRIDGE_WIDTH = 0.892; // 冰箱的总宽
const FRIDGE_HEIGHT = 1.91; // 冰箱的总高
const FRIDGE_THICKNESS = 0.6; // 冰箱的总厚度
const FRIDGE_DOOR_THICKNESS = 0.04; // 冰箱门的厚度
const OUTER_SHELL_THICKNESS = 0.03; // 冰箱外壳的厚度
const INNER_WALL_THICKNESS = 0.02; // 冰箱白色内壁的厚度
const DOOR_INNER_WALL_THICKNESS = 0.01; // 冰箱门白色内壁的厚度
const GLASS_THICKNESS = 0.014; // 玻璃隔板的厚度
const DOUBLE_DOOR_GAP = 0.014; // 双开门的中间缝隙的宽度
const TOP_DOOR_HEIGHT = 1.04; // 上半部分冰箱门的高度
const BOTTOM_DOOR_HEIGHT = 0.83; // 下半部分冰箱门的高度
const ALUMINIUM_ALLOY_BULKHEAD_HEIGHT = 0.08; // 中间和下面铝合金厚隔板的高度
const OPEN_DOOR_MAX_ANGLE = (Math.PI * 3) / 4;

export const addFridge = (
  scene: Scene,
  assetManager: AssetManager,
  fridgeDoorListRef: MutableRefObject<Group[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  // 冰箱外壳材质
  const fridgeOuterShellMaterial = new MeshStandardMaterial({
    color: FRIDGE_COLOR,
    metalness: 0.85, // 钢板基材，0.8~1.0
    roughness: 0.42, // 拉丝面不是镜面，0.35~0.5
  });
  assetManager.materials.set(
    "fridgeOuterShellMaterial",
    fridgeOuterShellMaterial,
  );
  // 冰箱内壁材质
  const fridgeInnerWallMaterial = new MeshStandardMaterial({
    color: 0xeef0f2, // 别用 0xffffff，ABS 白偏冷灰白
    metalness: 0.0, // 非金属，必须 0
    roughness: 0.55, // 0.5~0.65，半哑光；想更雾面调到 0.7
    envMapIntensity: 0.35, // 内壁环境反射压很低，0.25~0.45 之间
  });
  assetManager.materials.set(
    "fridgeInnerWallMaterial",
    fridgeInnerWallMaterial,
  );
  // 冰箱内部抽屉材质
  const fridgeDrawerMaterial = new MeshStandardMaterial({
    color: 0xdde0e2,
    metalness: 0.0, // 非金属，必须 0
    roughness: 0.55, // 0.5~0.65，半哑光；想更雾面调到 0.7
    envMapIntensity: 0.35, // 内壁环境反射压很低，0.25~0.45 之间
  });
  assetManager.materials.set("fridgeDrawerMaterial", fridgeDrawerMaterial);
  // 冰箱内部玻璃材质
  const fridgeGlassMaterial = new MeshStandardMaterial({
    color: 0x88b8e0,
    transparent: true,
    opacity: 0.3,
    side: DoubleSide,
  });
  assetManager.materials.set("fridgeGlassMaterial", fridgeGlassMaterial);

  const fridge = createFridge(
    assetManager,
    fridgeDoorListRef,
    mouseRaycasterIntersectObjectsRef,
  );
  pointerControlsIntersetObjectsRef.current.push(fridge);
  fridge.scale.set(1.6, 1.6, 1.6);
  fridge.position.copy(FRIDGE_POSITON);
  scene.add(fridge);
};

// 创建冰箱
const createFridge = (
  assetManager: AssetManager,
  fridgeDoorListRef: MutableRefObject<Group[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const fridgeOuterShellMaterial = assetManager.materials.get(
    "fridgeOuterShellMaterial",
  );
  const whiteAluminumMaterial = assetManager.materials.get(
    "whiteAluminumMaterial",
  );
  const fridgeInnerWallMaterial = assetManager.materials.get(
    "fridgeInnerWallMaterial",
  );
  const fridgeDrawerMaterial = assetManager.materials.get(
    "fridgeDrawerMaterial",
  );
  const fridgeGlassMaterial = assetManager.materials.get("fridgeGlassMaterial");

  const fridgeGroup = new Group();

  /** 外壳部分*/
  // 左外壳
  const leftOuterShell = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  leftOuterShell.scale.set(
    OUTER_SHELL_THICKNESS,
    FRIDGE_HEIGHT,
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS,
  );
  leftOuterShell.position.set(
    (OUTER_SHELL_THICKNESS - FRIDGE_WIDTH) / 2,
    FRIDGE_HEIGHT / 2,
    (FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS) / 2,
  );
  fridgeGroup.add(leftOuterShell);

  // 右外壳
  const rightOuterShell = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  rightOuterShell.scale.set(
    OUTER_SHELL_THICKNESS,
    FRIDGE_HEIGHT,
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS,
  );
  rightOuterShell.position.set(
    (FRIDGE_WIDTH - OUTER_SHELL_THICKNESS) / 2,
    FRIDGE_HEIGHT / 2,
    (FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS) / 2,
  );
  fridgeGroup.add(rightOuterShell);

  // 上外壳
  const topOuterShell = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  topOuterShell.scale.set(
    FRIDGE_WIDTH,
    OUTER_SHELL_THICKNESS,
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS,
  );
  topOuterShell.position.set(
    0,
    FRIDGE_HEIGHT - OUTER_SHELL_THICKNESS / 2,
    (FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS) / 2,
  );
  fridgeGroup.add(topOuterShell);

  // 下外壳
  const bottomOuterShell = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  bottomOuterShell.scale.set(
    FRIDGE_WIDTH,
    OUTER_SHELL_THICKNESS,
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS,
  );
  bottomOuterShell.position.set(
    0,
    OUTER_SHELL_THICKNESS / 2,
    (FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS) / 2,
  );
  fridgeGroup.add(bottomOuterShell);

  // 后外壳
  const backOuterShell = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  backOuterShell.scale.set(FRIDGE_WIDTH, FRIDGE_HEIGHT, OUTER_SHELL_THICKNESS);
  backOuterShell.position.set(0, FRIDGE_HEIGHT / 2, OUTER_SHELL_THICKNESS / 2);
  fridgeGroup.add(backOuterShell);

  /** 冰箱门部分*/
  // 上半部分的双开门
  const topDoubleDoor = createDoubleDoor(assetManager, TOP_DOOR_HEIGHT);
  topDoubleDoor.name = "冰箱上门";
  topDoubleDoor.position.set(
    0,
    FRIDGE_HEIGHT - TOP_DOOR_HEIGHT / 2,
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS / 2,
  );
  fridgeDoorListRef.current.push(topDoubleDoor);
  mouseRaycasterIntersectObjectsRef.current.push(topDoubleDoor);
  fridgeGroup.add(topDoubleDoor);
  // 下半部分的双开门
  const bottomDoubleDoor = createDoubleDoor(assetManager, BOTTOM_DOOR_HEIGHT);
  bottomDoubleDoor.name = "冰箱下门";
  bottomDoubleDoor.position.set(
    0,
    BOTTOM_DOOR_HEIGHT / 2,
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS / 2,
  );
  fridgeDoorListRef.current.push(bottomDoubleDoor);
  mouseRaycasterIntersectObjectsRef.current.push(bottomDoubleDoor);
  fridgeGroup.add(bottomDoubleDoor);

  /**中间和下方的铝合金厚隔板*/
  const middleAluminiumAlloy = new Mesh(boxGeometry, whiteAluminumMaterial);
  const aluminiumAlloyThickness =
    FRIDGE_THICKNESS - OUTER_SHELL_THICKNESS - FRIDGE_DOOR_THICKNESS;
  const aluminiumAlloyScale = new Vector3(
    FRIDGE_WIDTH - OUTER_SHELL_THICKNESS * 2,
    ALUMINIUM_ALLOY_BULKHEAD_HEIGHT,
    aluminiumAlloyThickness,
  );
  middleAluminiumAlloy.scale.copy(aluminiumAlloyScale);
  middleAluminiumAlloy.position.set(
    0,
    FRIDGE_HEIGHT -
      TOP_DOOR_HEIGHT +
      OUTER_SHELL_THICKNESS -
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT / 2,
    OUTER_SHELL_THICKNESS + aluminiumAlloyThickness / 2,
  );
  fridgeGroup.add(middleAluminiumAlloy);

  const bottomAluminiumAlloy = new Mesh(boxGeometry, whiteAluminumMaterial);
  bottomAluminiumAlloy.scale.copy(aluminiumAlloyScale);
  bottomAluminiumAlloy.position.set(
    0,
    OUTER_SHELL_THICKNESS + ALUMINIUM_ALLOY_BULKHEAD_HEIGHT / 2,
    OUTER_SHELL_THICKNESS + aluminiumAlloyThickness / 2,
  );
  fridgeGroup.add(bottomAluminiumAlloy);

  /**内壁部分*/
  const innerWallThickness =
    FRIDGE_THICKNESS - FRIDGE_DOOR_THICKNESS - OUTER_SHELL_THICKNESS; //内壁的厚度
  const topInnerWallHeight = TOP_DOOR_HEIGHT - OUTER_SHELL_THICKNESS * 2; //上内壁的高度
  const bottomInnerWallHeight =
    BOTTOM_DOOR_HEIGHT -
    OUTER_SHELL_THICKNESS * 2 -
    ALUMINIUM_ALLOY_BULKHEAD_HEIGHT; //下内壁的高度
  // 左上内壁
  const leftTopInnerWall = new Mesh(boxGeometry, fridgeInnerWallMaterial);
  leftTopInnerWall.scale.set(
    INNER_WALL_THICKNESS,
    topInnerWallHeight,
    innerWallThickness,
  );
  leftTopInnerWall.position.set(
    (INNER_WALL_THICKNESS - FRIDGE_WIDTH) / 2 + OUTER_SHELL_THICKNESS,
    FRIDGE_HEIGHT - OUTER_SHELL_THICKNESS - topInnerWallHeight / 2,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(leftTopInnerWall);
  // 右上内壁
  const rightTopInnerWall = new Mesh(boxGeometry, fridgeInnerWallMaterial);
  rightTopInnerWall.scale.set(
    INNER_WALL_THICKNESS,
    topInnerWallHeight,
    innerWallThickness,
  );
  rightTopInnerWall.position.set(
    (FRIDGE_WIDTH - INNER_WALL_THICKNESS) / 2 - OUTER_SHELL_THICKNESS,
    FRIDGE_HEIGHT - OUTER_SHELL_THICKNESS - topInnerWallHeight / 2,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(rightTopInnerWall);
  // 上顶内壁
  const topTopInnerWall = new Mesh(boxGeometry, fridgeInnerWallMaterial);
  topTopInnerWall.scale.set(
    FRIDGE_WIDTH - OUTER_SHELL_THICKNESS * 2,
    INNER_WALL_THICKNESS,
    innerWallThickness,
  );
  topTopInnerWall.position.set(
    0,
    FRIDGE_HEIGHT - OUTER_SHELL_THICKNESS - INNER_WALL_THICKNESS / 2,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(topTopInnerWall);
  // 上底内壁
  const topBottomInnerWall = new Mesh(boxGeometry, fridgeInnerWallMaterial);
  topBottomInnerWall.scale.set(
    FRIDGE_WIDTH - OUTER_SHELL_THICKNESS * 2,
    INNER_WALL_THICKNESS,
    innerWallThickness,
  );
  topBottomInnerWall.position.set(
    0,
    FRIDGE_HEIGHT -
      TOP_DOOR_HEIGHT +
      OUTER_SHELL_THICKNESS +
      INNER_WALL_THICKNESS / 2,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(topBottomInnerWall);
  // 上后内壁
  const topBackInnerWall = new Mesh(boxGeometry, fridgeInnerWallMaterial);
  topBackInnerWall.scale.set(
    FRIDGE_WIDTH - OUTER_SHELL_THICKNESS * 2,
    TOP_DOOR_HEIGHT - OUTER_SHELL_THICKNESS * 2,
    INNER_WALL_THICKNESS,
  );
  topBackInnerWall.position.set(
    0,
    FRIDGE_HEIGHT - OUTER_SHELL_THICKNESS - topInnerWallHeight / 2,
    OUTER_SHELL_THICKNESS + INNER_WALL_THICKNESS / 2,
  );
  fridgeGroup.add(topBackInnerWall);
  // 下方白色立方体
  const bottomBoxWidth = FRIDGE_WIDTH - OUTER_SHELL_THICKNESS * 2;
  const bottomBox = new Mesh(boxGeometry, fridgeInnerWallMaterial);
  bottomBox.scale.set(
    bottomBoxWidth,
    bottomInnerWallHeight,
    innerWallThickness - INNER_WALL_THICKNESS,
  );
  bottomBox.position.set(
    0,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      bottomInnerWallHeight / 2,
    OUTER_SHELL_THICKNESS + (innerWallThickness - INNER_WALL_THICKNESS) / 2,
  );
  fridgeGroup.add(bottomBox);
  // 下方六个抽屉门板
  const bottomDrawerBoxScale = new Vector3(
    (bottomBoxWidth - INNER_WALL_THICKNESS * 6) / 2,
    (bottomInnerWallHeight - INNER_WALL_THICKNESS * 6) / 3,
    INNER_WALL_THICKNESS,
  );
  const bottomDrawerBoxPositionZ =
    OUTER_SHELL_THICKNESS +
    innerWallThickness -
    INNER_WALL_THICKNESS +
    INNER_WALL_THICKNESS / 2;
  const bottomDrawerBox1 = new Mesh(boxGeometry, fridgeDrawerMaterial);
  bottomDrawerBox1.scale.copy(bottomDrawerBoxScale);
  bottomDrawerBox1.position.set(
    -INNER_WALL_THICKNESS * 2 - bottomDrawerBoxScale.x / 2,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      INNER_WALL_THICKNESS * 5 +
      bottomDrawerBoxScale.y * 2.5,
    bottomDrawerBoxPositionZ,
  );
  fridgeGroup.add(bottomDrawerBox1);
  const bottomDrawerBox2 = new Mesh(boxGeometry, fridgeDrawerMaterial);
  bottomDrawerBox2.scale.copy(bottomDrawerBoxScale);
  bottomDrawerBox2.position.set(
    INNER_WALL_THICKNESS * 2 + bottomDrawerBoxScale.x / 2,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      INNER_WALL_THICKNESS * 5 +
      bottomDrawerBoxScale.y * 2.5,
    bottomDrawerBoxPositionZ,
  );
  fridgeGroup.add(bottomDrawerBox2);

  const bottomDrawerBox3 = new Mesh(boxGeometry, fridgeDrawerMaterial);
  bottomDrawerBox3.scale.copy(bottomDrawerBoxScale);
  bottomDrawerBox3.position.set(
    -INNER_WALL_THICKNESS * 2 - bottomDrawerBoxScale.x / 2,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      INNER_WALL_THICKNESS * 3 +
      bottomDrawerBoxScale.y * 1.5,
    bottomDrawerBoxPositionZ,
  );
  fridgeGroup.add(bottomDrawerBox3);
  const bottomDrawerBox4 = new Mesh(boxGeometry, fridgeDrawerMaterial);
  bottomDrawerBox4.scale.copy(bottomDrawerBoxScale);
  bottomDrawerBox4.position.set(
    INNER_WALL_THICKNESS * 2 + bottomDrawerBoxScale.x / 2,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      INNER_WALL_THICKNESS * 3 +
      bottomDrawerBoxScale.y * 1.5,
    bottomDrawerBoxPositionZ,
  );
  fridgeGroup.add(bottomDrawerBox4);

  const bottomDrawerBox5 = new Mesh(boxGeometry, fridgeDrawerMaterial);
  bottomDrawerBox5.scale.copy(bottomDrawerBoxScale);
  bottomDrawerBox5.position.set(
    -INNER_WALL_THICKNESS * 2 - bottomDrawerBoxScale.x / 2,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      INNER_WALL_THICKNESS +
      bottomDrawerBoxScale.y * 0.5,
    bottomDrawerBoxPositionZ,
  );
  fridgeGroup.add(bottomDrawerBox5);
  const bottomDrawerBox6 = new Mesh(boxGeometry, fridgeDrawerMaterial);
  bottomDrawerBox6.scale.copy(bottomDrawerBoxScale);
  bottomDrawerBox6.position.set(
    INNER_WALL_THICKNESS * 2 + bottomDrawerBoxScale.x / 2,
    OUTER_SHELL_THICKNESS +
      ALUMINIUM_ALLOY_BULKHEAD_HEIGHT +
      INNER_WALL_THICKNESS +
      bottomDrawerBoxScale.y * 0.5,
    bottomDrawerBoxPositionZ,
  );
  fridgeGroup.add(bottomDrawerBox6);

  /**上半部分的玻璃隔板*/
  const glassScale = new Vector3(
    FRIDGE_WIDTH - OUTER_SHELL_THICKNESS * 2,
    GLASS_THICKNESS,
    innerWallThickness,
  );
  const glass1 = new Mesh(boxGeometry, fridgeGlassMaterial);
  glass1.scale.copy(glassScale);
  glass1.position.set(
    0,
    FRIDGE_HEIGHT -
      OUTER_SHELL_THICKNESS -
      ((TOP_DOOR_HEIGHT - OUTER_SHELL_THICKNESS * 2) / 5) * 1,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(glass1);
  const glass2 = new Mesh(boxGeometry, fridgeGlassMaterial);
  glass2.scale.copy(glassScale);
  glass2.position.set(
    0,
    FRIDGE_HEIGHT -
      OUTER_SHELL_THICKNESS -
      ((TOP_DOOR_HEIGHT - OUTER_SHELL_THICKNESS * 2) / 5) * 2,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(glass2);

  const glass3 = new Mesh(boxGeometry, fridgeGlassMaterial);
  glass3.scale.copy(glassScale);
  glass3.position.set(
    0,
    FRIDGE_HEIGHT -
      OUTER_SHELL_THICKNESS -
      ((TOP_DOOR_HEIGHT - OUTER_SHELL_THICKNESS * 2) / 5) * 3,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(glass3);
  const glass4 = new Mesh(boxGeometry, fridgeGlassMaterial);
  glass4.scale.copy(glassScale);
  glass4.position.set(
    0,
    FRIDGE_HEIGHT -
      OUTER_SHELL_THICKNESS -
      ((TOP_DOOR_HEIGHT - OUTER_SHELL_THICKNESS * 2) / 5) * 4,
    innerWallThickness / 2 + OUTER_SHELL_THICKNESS,
  );
  fridgeGroup.add(glass4);

  return fridgeGroup;
};

// 创建双开门
export const createDoubleDoor = (
  assetManager: AssetManager,
  height: number,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const fridgeOuterShellMaterial = assetManager.materials.get(
    "fridgeOuterShellMaterial",
  );
  const fridgeInnerWallMaterial = assetManager.materials.get(
    "fridgeInnerWallMaterial",
  );
  const doubleDoor = new Group();
  // @ts-ignore
  doubleDoor.customParams = {
    switchStatus: "OFF",
    isAnimating: false,
  };
  const halfDoubleDoorScale = new Vector3(
    (FRIDGE_WIDTH - DOUBLE_DOOR_GAP) / 2,
    height,
    FRIDGE_DOOR_THICKNESS,
  );
  const leftDoubleDoor = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  leftDoubleDoor.scale.copy(halfDoubleDoorScale);
  leftDoubleDoor.position.set(
    halfDoubleDoorScale.x / 2,
    0,
    FRIDGE_DOOR_THICKNESS / 2,
  );
  const leftDoubleDoorInnerWall = new Mesh(
    boxGeometry,
    fridgeInnerWallMaterial,
  );
  leftDoubleDoorInnerWall.scale.set(
    halfDoubleDoorScale.x - INNER_WALL_THICKNESS * 2,
    halfDoubleDoorScale.y - INNER_WALL_THICKNESS * 2,
    DOOR_INNER_WALL_THICKNESS,
  );
  leftDoubleDoorInnerWall.position.set(
    halfDoubleDoorScale.x / 2,
    0,
    -DOOR_INNER_WALL_THICKNESS / 2,
  );
  const leftDoubleDoorGroup = new Group();
  leftDoubleDoorGroup.name = "冰箱门左半边";
  leftDoubleDoorGroup.add(leftDoubleDoor);
  leftDoubleDoorGroup.add(leftDoubleDoorInnerWall);
  leftDoubleDoorGroup.position.set(
    -FRIDGE_WIDTH / 2,
    0,
    -FRIDGE_DOOR_THICKNESS / 2,
  );
  doubleDoor.add(leftDoubleDoorGroup);

  const rightDoubleDoor = new Mesh(boxGeometry, fridgeOuterShellMaterial);
  rightDoubleDoor.scale.copy(halfDoubleDoorScale);
  rightDoubleDoor.position.set(
    -halfDoubleDoorScale.x / 2,
    0,
    FRIDGE_DOOR_THICKNESS / 2,
  );
  const rightDoubleDoorInnerWall = new Mesh(
    boxGeometry,
    fridgeInnerWallMaterial,
  );
  rightDoubleDoorInnerWall.scale.set(
    halfDoubleDoorScale.x - INNER_WALL_THICKNESS * 2,
    halfDoubleDoorScale.y - INNER_WALL_THICKNESS * 2,
    DOOR_INNER_WALL_THICKNESS,
  );
  rightDoubleDoorInnerWall.position.set(
    -halfDoubleDoorScale.x / 2,
    0,
    -DOOR_INNER_WALL_THICKNESS / 2,
  );
  const rightDoubleDoorGroup = new Group();
  rightDoubleDoorGroup.name = "冰箱门右半边";
  rightDoubleDoorGroup.add(rightDoubleDoor);
  rightDoubleDoorGroup.add(rightDoubleDoorInnerWall);
  rightDoubleDoorGroup.position.set(
    FRIDGE_WIDTH / 2,
    0,
    -FRIDGE_DOOR_THICKNESS / 2,
  );
  doubleDoor.add(rightDoubleDoorGroup);

  return doubleDoor;
};

// 冰箱门点击后的回调
export const onClickFridgeDoor = (fridgeDoor: Group) => {
  // @ts-ignore
  if (fridgeDoor && !fridgeDoor.customParams.isAnimating) {
    // @ts-ignore
    fridgeDoor.customParams.startTime = performance.now();
    // @ts-ignore
    fridgeDoor.customParams.isAnimating = true;
  }
};

// 冰箱门开/关动画过程渲染
export const fridgeDoorAnimationRender = (fridgeDoorList: Group[]) => {
  if (fridgeDoorList?.length > 0) {
    fridgeDoorList.forEach((fridgeDoor: Group) => {
      const { isAnimating, switchStatus, startTime } =
        // @ts-ignore
        fridgeDoor.customParams || {};
      if (isAnimating) {
        const now = performance.now();
        const progress = Math.min(
          (now - startTime) / OPEN_OR_CLOSE_DURATION,
          1,
        );
        if (progress < 1) {
          // 使用缓动函数,先慢后快
          const easeProgress = getEaseProgress(progress);

          fridgeDoor.traverse((child) => {
            if (child.name === "冰箱门左半边") {
              if (switchStatus === "OFF") {
                child.rotation.y = -OPEN_DOOR_MAX_ANGLE * easeProgress;
              } else {
                child.rotation.y = -OPEN_DOOR_MAX_ANGLE * (1 - easeProgress);
              }
            } else if (child.name === "冰箱门右半边") {
              if (switchStatus === "OFF") {
                child.rotation.y = OPEN_DOOR_MAX_ANGLE * easeProgress;
              } else {
                child.rotation.y = OPEN_DOOR_MAX_ANGLE * (1 - easeProgress);
              }
            }
          });
        } else {
          // @ts-ignore
          fridgeDoor.customParams.isAnimating = false;
          // @ts-ignore
          fridgeDoor.customParams.startTime = undefined;
          // @ts-ignore
          fridgeDoor.customParams.switchStatus =
            switchStatus === "OFF" ? "ON" : "OFF";
        }
      }
    });
  }
};
