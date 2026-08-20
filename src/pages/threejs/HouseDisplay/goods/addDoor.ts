/**
 * 添加房门
 */
import { MutableRefObject } from "react";
import {
  Scene,
  BoxGeometry,
  CylinderGeometry,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  Color,
  Group,
  Vector3,
  Vector2,
  Object3D,
  DoubleSide,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  generateColorMap,
  generateNormalMap,
  generateRoughnessMap,
} from "../utils";

type HandlePosition = "left" | "right";

const OPEN_OR_CLOSE_DOOR_DURATION = 800; // 开/关门动画总时长
const DOOR_COLOR = new Color(235, 235, 245); // 门扇的颜色
const FRAME_COLOR = new Color(197, 193, 189); // 门框的颜色
const DOOR_W = 1.6; // 门扇的宽
const DOOR_H = 3.4; // 门扇的高
const DOOR_T = 0.04; // 门扇的厚度
const TOP_GAP = 0.004; // 门和门框上方的缝隙
const FRAME_TRIM_W = 0.1; // 门框左右竖框的宽
const FRAME_D = 0.1; // 门框的厚度
const DOORKNOB_CYLINDER_RADIUS = 0.012; // 门把手圆柱半径
const DOORKNOB_CYLINDER_LONG = 0.2; // 门把手圆柱长度
const DOORKNOB_SPHERE_RADIUS = 0.026; // 门把手圆球半径
const HANDLE_POSITION_Y = 1.8; // 门把手高度
const HINGE_W = 0.01; // 合页总厚度（两叶之和）
const HINGE_H = 0.14; // 合页高度（Y方向）
const HINGE_D = DOOR_T * 0.7; // 合页深度（Z方向）= 门扇厚度的70%，不突出前后表面
const HALF_DOOR_W = DOOR_W / 2;
const OPENING_H = DOOR_H + TOP_GAP; // 2.275
const doorConfigs = [
  // 主卧门
  {
    positon: new Vector3(-1.34, 0, -7.83),
    rotationY: Math.PI / 2,
    customParams: {
      openDoorMaxAngle: (Math.PI * 21) / 36,
      switchStatus: "ON",
      isAnimating: false,
      handlePosition: "right",
    },
  },
  // 儿童房门
  {
    positon: new Vector3(6.02, 0, -7.83),
    rotationY: -Math.PI / 2,
    customParams: {
      openDoorMaxAngle: -(Math.PI * 21) / 36,
      switchStatus: "OFF",
      isAnimating: false,
      handlePosition: "left",
    },
  },
  // 次卧门
  {
    positon: new Vector3(-4.05, 0, 4.45),
    rotationY: Math.PI,
    customParams: {
      openDoorMaxAngle: (Math.PI * 21) / 36,
      switchStatus: "OFF",
      isAnimating: false,
      handlePosition: "right",
    },
  },
];

export const addDoor = (
  scene: Scene,
  assetManager: AssetManager,
  doorListRef: MutableRefObject<Mesh[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  // 创建立方体
  let boxGeometry = assetManager.geometries.get("boxGeometry");
  if (!boxGeometry) {
    boxGeometry = new BoxGeometry(1, 1, 1);
    assetManager.geometries.set("boxGeometry", boxGeometry);
  }

  // 实木门材质
  const colorMap = generateColorMap(DOOR_COLOR, 512);
  const normalMap = generateNormalMap(512);
  const roughMap = generateRoughnessMap(512);
  colorMap.repeat.set(1, 2.2);
  normalMap.repeat.set(1, 2.2);
  roughMap.repeat.set(1, 2.2);
  const woodDoorMaterial = new MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    normalScale: new Vector2(0.7, 0.7),
    roughnessMap: roughMap,
    roughness: 0.5,
    metalness: 0.08,
    envMapIntensity: 1.3,
    side: DoubleSide,
  });
  assetManager.materials.set("woodDoorMaterial", woodDoorMaterial);

  // 门框材质
  const frameColorMap = generateColorMap(FRAME_COLOR, 512);
  const frameNormalMap = generateNormalMap(512);
  const frameRoughMap = generateRoughnessMap(512);
  frameColorMap.repeat.set(1, 4.2);
  frameNormalMap.repeat.set(1, 4.2);
  frameRoughMap.repeat.set(1, 4.2);
  const doorFrameMaterial = new MeshStandardMaterial({
    map: frameColorMap,
    normalMap: frameNormalMap,
    normalScale: new Vector2(1, 1),
    roughnessMap: frameRoughMap,
    roughness: 0.6,
    metalness: 0.02,
    envMapIntensity: 1.3,
    side: DoubleSide,
  });
  assetManager.materials.set("doorFrameMaterial", doorFrameMaterial);

  // 合页材质 — 深色青铜/铸铁（欧式复古感）
  const hingeMaterial = new MeshStandardMaterial({
    color: 0x3a2e24,
    roughness: 0.55,
    metalness: 0.75,
  });
  assetManager.materials.set("hingeMaterial", hingeMaterial);

  doorConfigs.forEach((item) => {
    const { positon, rotationY, customParams } = item;
    const door = createDoor(
      assetManager,
      doorListRef,
      customParams,
      mouseRaycasterIntersectObjectsRef,
    );
    pointerControlsIntersetObjectsRef.current.push(door);
    door.position.copy(positon);
    if (rotationY) {
      door.rotation.y = rotationY;
    }
    scene.add(door);
  });
};

// 创建房门
const createDoor = (
  assetManager: AssetManager,
  doorListRef: MutableRefObject<Mesh[]>,
  customParams: Record<string, any>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const woodDoorMaterial = assetManager.materials.get("woodDoorMaterial");
  const doorFrameMaterial = assetManager.materials.get("doorFrameMaterial");

  const doorGroup = new Group();
  doorGroup.name = "房门";
  doorGroup.castShadow = true;
  doorGroup.receiveShadow = true;

  /** 门框部分*/
  const frameGroup = new Group();

  // 左竖框
  const leftJamb = new Mesh(boxGeometry, doorFrameMaterial);
  leftJamb.scale.set(FRAME_TRIM_W, OPENING_H, FRAME_D);
  leftJamb.position.set(-HALF_DOOR_W - FRAME_TRIM_W / 2, OPENING_H / 2, 0);
  frameGroup.add(leftJamb);

  // 右竖框
  const rightJamb = new Mesh(boxGeometry, doorFrameMaterial);
  rightJamb.scale.set(FRAME_TRIM_W, OPENING_H, FRAME_D);
  rightJamb.position.set(HALF_DOOR_W + FRAME_TRIM_W / 2, OPENING_H / 2, 0);
  frameGroup.add(rightJamb);

  // 上方横框
  const HEADER_H = FRAME_TRIM_W;
  const headerMesh = new Mesh(boxGeometry, doorFrameMaterial);
  headerMesh.scale.set(DOOR_W + FRAME_TRIM_W * 2, HEADER_H, FRAME_D);
  headerMesh.position.set(0, OPENING_H + HEADER_H / 2, 0);
  frameGroup.add(headerMesh);
  doorGroup.add(frameGroup);

  /** 门扇部分*/
  const doorPanelGroup = new Group();
  const { handlePosition, switchStatus, openDoorMaxAngle } = customParams;
  let doorPanelGroupPositionX = -HALF_DOOR_W;
  if (handlePosition === "left") {
    doorPanelGroupPositionX = -doorPanelGroupPositionX;
  }
  if (switchStatus === "ON") {
    doorPanelGroup.rotation.y = openDoorMaxAngle;
  }
  doorPanelGroup.position.set(doorPanelGroupPositionX, 0, 0);
  const doorPanel = new Mesh(boxGeometry, woodDoorMaterial);
  doorPanel.name = "门板";
  // @ts-ignore
  doorPanel.customParams = customParams;
  doorListRef.current.push(doorPanel);
  mouseRaycasterIntersectObjectsRef.current.push(doorPanel);
  doorPanel.scale.set(DOOR_W, DOOR_H, DOOR_T);
  let doorPanelPositionX = HALF_DOOR_W;
  if (handlePosition === "left") {
    doorPanelPositionX = -doorPanelPositionX;
  }
  doorPanel.position.set(doorPanelPositionX, DOOR_H / 2, DOOR_T / 2);
  doorPanelGroup.add(doorPanel);

  /** 门把手部分*/
  const doorknob = createDoorknob(assetManager);
  let handleGroupPositionX = DOOR_W - 0.08;
  if (handlePosition === "left") {
    handleGroupPositionX = -handleGroupPositionX;
  }
  doorknob.position.set(handleGroupPositionX, HANDLE_POSITION_Y, DOOR_T / 2);
  doorPanelGroup.add(doorknob);
  doorGroup.add(doorPanelGroup);

  // 安装三个合页（上、中、下）
  const hingeYs = [DOOR_H * 0.82, DOOR_H * 0.5, DOOR_H * 0.18];
  for (const hy of hingeYs) {
    const hinge = createButtHinge(assetManager, handlePosition);
    hinge.position.y = hy;
    doorGroup.add(hinge);
  }

  return doorGroup;
};

// 创建门把手
export const createDoorknob = (assetManager: AssetManager) => {
  // 圆柱体
  let cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  if (!cylinderGeometry) {
    cylinderGeometry = new CylinderGeometry(1, 1, 1);
    assetManager.geometries.set("cylinderGeometry", cylinderGeometry);
  }
  // 球体
  let sphereGeometry = assetManager.geometries.get("sphereGeometry");
  if (!sphereGeometry) {
    sphereGeometry = new SphereGeometry(1);
    assetManager.geometries.set("sphereGeometry", sphereGeometry);
  }
  // 门把手材质
  let doorknobMaterial = assetManager.materials.get("doorknobMaterial");
  if (!doorknobMaterial) {
    doorknobMaterial = new MeshStandardMaterial({
      color: 0xc9a84c,
      roughness: 0.28,
      metalness: 0.85,
    });
    assetManager.materials.set("doorknobMaterial", doorknobMaterial);
  }

  const doorknobGroup = new Group();

  // 长圆柱
  const handleRod = new Mesh(cylinderGeometry, doorknobMaterial);
  handleRod.scale.set(
    DOORKNOB_CYLINDER_RADIUS,
    DOORKNOB_CYLINDER_LONG,
    DOORKNOB_CYLINDER_RADIUS,
  );
  handleRod.rotation.x = Math.PI / 2;
  doorknobGroup.add(handleRod);

  // 前面的圆球
  const frontHandleKnob = new Mesh(sphereGeometry, doorknobMaterial);
  frontHandleKnob.scale.set(
    DOORKNOB_SPHERE_RADIUS,
    DOORKNOB_SPHERE_RADIUS,
    DOORKNOB_SPHERE_RADIUS,
  );
  frontHandleKnob.position.set(0, 0, DOORKNOB_CYLINDER_LONG / 2);
  doorknobGroup.add(frontHandleKnob);

  // 背面的圆球
  const backHandleKnob = frontHandleKnob.clone();
  backHandleKnob.position.z = -DOORKNOB_CYLINDER_LONG / 2;
  doorknobGroup.add(backHandleKnob);

  return doorknobGroup;
};

// 创建合页
const createButtHinge = (
  assetManager: AssetManager,
  handlePosition: HandlePosition,
) => {
  const hingeMaterial = assetManager.materials.get("hingeMaterial");

  const buttHingeGroup = new Group();

  // 门扇侧 leaf（右半，贴在门扇左侧面）
  const leafT = HINGE_W / 2; // 单个叶板厚度（X方向，夹在缝隙中）

  // 门扇侧 leaf — 局部坐标：x = -HALF_DOOR_W（门扇左边缘）
  let leaf1PositonX = -HALF_DOOR_W - leafT / 2;
  if (handlePosition === "left") {
    leaf1PositonX = -leaf1PositonX;
  }
  const leafGeo = new BoxGeometry(leafT, HINGE_H, HINGE_D);
  const leaf1 = new Mesh(leafGeo, hingeMaterial);
  // 叶板中心在门扇左侧面再往左偏移 leafT/2
  leaf1.position.set(leaf1PositonX, 0, 0);
  leaf1.castShadow = true;
  buttHingeGroup.add(leaf1);

  // 门框侧 leaf
  let leaf2PositonX = -HALF_DOOR_W + leafT / 2;
  if (handlePosition === "left") {
    leaf2PositonX = -leaf2PositonX;
  }
  const leaf2 = new Mesh(leafGeo, hingeMaterial);
  leaf2.position.set(leaf2PositonX, 0, 0);
  leaf2.castShadow = true;
  buttHingeGroup.add(leaf2);

  // 在门扇侧 leaf 上添加装饰铆钉（欧式细节）
  const rivetGeo = new SphereGeometry(0.005, 8, 8);
  const rivetMat = new MeshStandardMaterial({
    color: 0x6a5544,
    roughness: 0.4,
    metalness: 0.8,
  });
  const rivetPositions = [
    [0, HINGE_H * 0.35, HINGE_D * 0.35],
    [0, -HINGE_H * 0.35, HINGE_D * 0.35],
    [0, HINGE_H * 0.35, -HINGE_D * 0.35],
    [0, -HINGE_H * 0.35, -HINGE_D * 0.35],
  ];
  let rivetPositonX = -HALF_DOOR_W - leafT - 0.001;
  if (handlePosition === "left") {
    rivetPositonX = -rivetPositonX;
  }
  for (const [rx, ry, rz] of rivetPositions) {
    const rivet = new Mesh(rivetGeo, rivetMat);
    rivet.position.set(
      rivetPositonX, // 稍微突出 leaf 外表面
      ry,
      rz,
    );
    buttHingeGroup.add(rivet);
  }

  return buttHingeGroup;
};

// 房门点击后的回调
export const onClickDoor = (door: Mesh) => {
  // @ts-ignore
  if (door && !door.customParams.isAnimating) {
    // @ts-ignore
    door.customParams.startTime = performance.now();
    // @ts-ignore
    door.customParams.isAnimating = true;
  }
};

// 房门开/关动画过程渲染
export const doorAnimationRender = (doorList: Mesh[]) => {
  if (doorList?.length > 0) {
    doorList.forEach((door: Mesh) => {
      const { isAnimating, switchStatus, startTime, openDoorMaxAngle } =
        // @ts-ignore
        door.customParams || {};
      if (isAnimating && door.parent) {
        const now = performance.now();
        const progress = Math.min(
          (now - startTime) / OPEN_OR_CLOSE_DOOR_DURATION,
          1,
        );
        if (progress < 1) {
          // 使用缓动函数,先慢后快
          const easeProgress =
            progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          if (switchStatus === "OFF") {
            door.parent.rotation.y = openDoorMaxAngle * easeProgress;
          } else {
            door.parent.rotation.y = openDoorMaxAngle * (1 - easeProgress);
          }
        } else {
          // @ts-ignore
          door.customParams.isAnimating = false;
          // @ts-ignore
          door.customParams.startTime = undefined;
          // @ts-ignore
          door.customParams.switchStatus =
            switchStatus === "OFF" ? "ON" : "OFF";
        }
      }
    });
  }
};
