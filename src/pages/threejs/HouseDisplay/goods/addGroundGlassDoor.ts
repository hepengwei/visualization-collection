/**
 * 添加磨砂玻璃门
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  Mesh,
  Group,
  Vector3,
  Object3D,
  DoubleSide,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { createDoorknob } from "./addDoor";
import { getEaseProgress } from "../utils";

const OPEN_OR_CLOSE_DOOR_DURATION = 800; // 开/关门动画总时长
const GROUND_GLASS_W = 1.6; // 磨砂玻璃的宽
const GROUND_GLASS_H = 3.4; // 磨砂玻璃的高
const GROUND_GLASS_T = 0.04; // 磨砂玻璃的厚度
const FRAME_D = 0.1; // 包边的厚度
const HANDLE_POSITION_Y = 1.8; // 门把手高度
const HALF_GROUND_GLASS_W = GROUND_GLASS_W / 2;
const MOVE_DISTANCE = FRAME_D + GROUND_GLASS_W - 0.2; // 磨砂玻璃门可移动的距离
const doorConfigs = [
  // 主卧厕所门
  {
    positon: new Vector3(-3.08, 0, -10.65),
    rotationY: -Math.PI / 2,
    customParams: {
      switchStatus: "OFF",
      isAnimating: false,
    },
  },
  // 外厕所门
  {
    positon: new Vector3(4.9, 0, -9.76),
    customParams: {
      switchStatus: "OFF",
      isAnimating: false,
    },
  },
];

export const addGroundGlassDoor = (
  scene: Scene,
  assetManager: AssetManager,
  groundGlassDoorListRef: MutableRefObject<Group[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  // 磨砂玻璃材质
  const groundGlassMaterial = new MeshPhysicalMaterial({
    color: 0xeaf2ff,
    roughness: 0.75, // 高粗糙度 = 磨砂
    metalness: 0.0,
    transmission: 0.75, // 透射/玻璃感
    thickness: 0.05,
    ior: 1.45,
    clearcoat: 0.3,
    clearcoatRoughness: 0.6,
    transparent: true,
    opacity: 0.9,
    depthWrite: false, // 透明物体不写深度，避免遮挡后面的透明物体
    alphaTest: 0.5, // 设置alphaTest阈值，让半透明物体也能投射阴影
    envMapIntensity: 0.6,
    side: DoubleSide,
  });
  assetManager.materials.set("groundGlassMaterial", groundGlassMaterial);

  doorConfigs.forEach((item) => {
    const { positon, rotationY, customParams } = item;
    const groundGlassDoor = createGroundGlassDoor(assetManager, {
      ...customParams,
      rotationY,
      originPosition: positon,
    });
    groundGlassDoor.position.copy(positon);
    if (rotationY) {
      groundGlassDoor.rotation.y = rotationY;
      if (customParams.switchStatus === "ON") {
        groundGlassDoor.position.z = positon.z - MOVE_DISTANCE;
      }
    } else {
      if (customParams.switchStatus === "ON") {
        groundGlassDoor.position.x = positon.x - MOVE_DISTANCE;
      }
    }
    groundGlassDoorListRef.current.push(groundGlassDoor);
    mouseRaycasterIntersectObjectsRef.current.push(groundGlassDoor);
    pointerControlsIntersetObjectsRef.current.push(groundGlassDoor);
    scene.add(groundGlassDoor);
  });
};

// 创建磨砂玻璃门
const createGroundGlassDoor = (
  assetManager: AssetManager,
  customParams: Record<string, any>,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const groundGlassMaterial = assetManager.materials.get("groundGlassMaterial");
  const aluminiumAlloyFrameMaterial = assetManager.materials.get(
    "aluminiumAlloyFrameMaterial",
  );

  const groundGlassDoorGroup = new Group();
  groundGlassDoorGroup.name = "磨砂玻璃门";
  // @ts-ignore
  groundGlassDoorGroup.customParams = customParams;

  /** 磨砂玻璃门包边部分*/
  const frameGroup = new Group();
  frameGroup.castShadow = true;
  frameGroup.receiveShadow = true;

  // 左包边
  const leftJamb = new Mesh(boxGeometry, aluminiumAlloyFrameMaterial);
  leftJamb.scale.set(FRAME_D, GROUND_GLASS_H, GROUND_GLASS_T);
  leftJamb.position.set(
    -HALF_GROUND_GLASS_W - FRAME_D / 2,
    GROUND_GLASS_H / 2,
    0,
  );
  frameGroup.add(leftJamb);

  // 右包边
  const rightJamb = new Mesh(boxGeometry, aluminiumAlloyFrameMaterial);
  rightJamb.scale.set(FRAME_D, GROUND_GLASS_H, GROUND_GLASS_T);
  rightJamb.position.set(
    HALF_GROUND_GLASS_W + FRAME_D / 2,
    GROUND_GLASS_H / 2,
    0,
  );
  frameGroup.add(rightJamb);

  // 上包边
  const headerMesh = new Mesh(boxGeometry, aluminiumAlloyFrameMaterial);
  headerMesh.scale.set(GROUND_GLASS_W + FRAME_D * 2, FRAME_D, GROUND_GLASS_T);
  headerMesh.position.set(0, GROUND_GLASS_H + FRAME_D / 2, 0);
  frameGroup.add(headerMesh);
  groundGlassDoorGroup.add(frameGroup);

  /** 磨砂玻璃部分*/
  const groundGlass = new Mesh(boxGeometry, groundGlassMaterial);
  groundGlass.scale.set(GROUND_GLASS_W, GROUND_GLASS_H, GROUND_GLASS_T);
  groundGlass.position.set(0, GROUND_GLASS_H / 2, 0);
  groundGlass.castShadow = true;
  groundGlass.receiveShadow = true;
  groundGlassDoorGroup.add(groundGlass);

  /** 门把手部分*/
  const doorknob = createDoorknob(assetManager);
  doorknob.position.set(HALF_GROUND_GLASS_W - 0.1, HANDLE_POSITION_Y, 0);
  groundGlassDoorGroup.add(doorknob);

  return groundGlassDoorGroup;
};

// 磨砂玻璃门点击后的回调
export const onClickGroundGlassDoor = (groundGlassDoor: Group) => {
  // @ts-ignore
  if (groundGlassDoor && !groundGlassDoor.customParams.isAnimating) {
    // @ts-ignore
    groundGlassDoor.customParams.startTime = performance.now();
    // @ts-ignore
    groundGlassDoor.customParams.isAnimating = true;
  }
};

// 磨砂玻璃门开/关动画过程渲染
export const groundGlassDoorAnimationRender = (
  groundGlassDoorList: Group[],
) => {
  if (groundGlassDoorList?.length > 0) {
    groundGlassDoorList.forEach((groundGlassDoor: Group) => {
      const {
        isAnimating,
        switchStatus,
        startTime,
        rotationY,
        originPosition,
      } =
        // @ts-ignore
        groundGlassDoor.customParams || {};
      if (isAnimating) {
        const now = performance.now();
        const progress = Math.min(
          (now - startTime) / OPEN_OR_CLOSE_DOOR_DURATION,
          1,
        );
        if (progress < 1) {
          // 使用缓动函数,先慢后快
          const easeProgress = getEaseProgress(progress);

          if (switchStatus === "OFF") {
            if (rotationY === -Math.PI / 2) {
              groundGlassDoor.position.z =
                originPosition.z - MOVE_DISTANCE * easeProgress;
            } else {
              groundGlassDoor.position.x =
                originPosition.x - MOVE_DISTANCE * easeProgress;
            }
          } else {
            if (rotationY === -Math.PI / 2) {
              groundGlassDoor.position.z =
                originPosition.z + MOVE_DISTANCE * (easeProgress - 1);
            } else {
              groundGlassDoor.position.x =
                originPosition.x + MOVE_DISTANCE * (easeProgress - 1);
            }
          }
        } else {
          // @ts-ignore
          groundGlassDoor.customParams.isAnimating = false;
          // @ts-ignore
          groundGlassDoor.customParams.startTime = undefined;
          // @ts-ignore
          groundGlassDoor.customParams.switchStatus =
            switchStatus === "OFF" ? "ON" : "OFF";
        }
      }
    });
  }
};
