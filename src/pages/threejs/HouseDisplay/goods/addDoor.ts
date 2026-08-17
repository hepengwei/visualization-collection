/**
 * 添加房门
 */
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
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  generateColorMap,
  generateNormalMap,
  generateRoughnessMap,
} from "../utils";

const DOOR_COLOR = new Color(255, 255, 255); // 门扇的颜色
const FRAME_COLOR = new Color(197, 193, 189); // 门框的颜色
const DOOR_W = 1.6; // 门扇的宽
const DOOR_H = 3.4; // 门扇的高
const DOOR_T = 0.04; // 门扇的厚度
const SIDE_GAP = 0.001; // 门和门框左右之间的缝隙
const TOP_GAP = 0.004; // 门和门框上方的缝隙
const FRAME_TRIM_W = 0.1; // 门框左右竖框的宽
const FRAME_D = 0.1; // 门框的厚度
const HANDLE_POSITION_Y = 1.8; // 门把手高度
const HINGE_W = SIDE_GAP * 0.8; // 合页总厚度（两叶之和），小于缝隙0.015
const HINGE_H = 0.14; // 合页高度（Y方向）
const HINGE_D = DOOR_T * 0.7; // 合页深度（Z方向）= 门扇厚度的70%，不突出前后表面
const HALF_DOOR_W = DOOR_W / 2;
const OPENING_W = DOOR_W + SIDE_GAP * 2; // 0.87
const OPENING_H = DOOR_H + TOP_GAP; // 2.275
const HALF_OPEN = OPENING_W / 2; // 0.435
const doorConfigs = [
  // 主卧门
  {
    positon: new Vector3(-1.34, 0, -7.83),
    rotationY: Math.PI / 2,
  },
  // 儿童房门
  {
    positon: new Vector3(6.02, 0, -7.83),
    rotationY: -Math.PI / 2,
  },
  // 次卧门
  {
    positon: new Vector3(-4.05, 0, 4.45),
    rotationY: Math.PI,
  },
];

export const addDoor = (scene: Scene, assetManager: AssetManager) => {
  // 创建立方体
  let boxGeometry = assetManager.geometries.get("boxGeometry");
  if (!boxGeometry) {
    boxGeometry = new BoxGeometry(1, 1, 1);
    assetManager.geometries.set("boxGeometry", boxGeometry);
  }
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
  });
  assetManager.materials.set("woodDoorMaterial", woodDoorMaterial);

  // 门框材质
  const frameColorMap = generateColorMap(FRAME_COLOR, 512);
  const frameNormalMap = generateNormalMap(512);
  const frameRoughMap = generateRoughnessMap(512);
  colorMap.repeat.set(1, 4.2);
  normalMap.repeat.set(1, 4.2);
  roughMap.repeat.set(1, 4.2);
  const doorFrameMaterial = new MeshStandardMaterial({
    map: frameColorMap,
    normalMap: frameNormalMap,
    normalScale: new Vector2(1, 1),
    roughnessMap: frameRoughMap,
    roughness: 0.6,
    metalness: 0.02,
    envMapIntensity: 1.3,
  });
  assetManager.materials.set("doorFrameMaterial", doorFrameMaterial);

  // 门把手材质
  const doorknobMaterial = new MeshStandardMaterial({
    color: 0xc9a84c,
    roughness: 0.28,
    metalness: 0.85,
  });
  assetManager.materials.set("doorknobMaterial", doorknobMaterial);

  // 暗的门把手材质
  const darkDoorknobMaterial = new MeshStandardMaterial({
    color: 0x443322,
    roughness: 0.45,
    metalness: 0.7,
  });
  assetManager.materials.set("darkDoorknobMaterial", darkDoorknobMaterial);

  // 合页材质 — 深色青铜/铸铁（欧式复古感）
  const hingeMaterial = new MeshStandardMaterial({
    color: 0x3a2e24,
    roughness: 0.55,
    metalness: 0.75,
  });
  assetManager.materials.set("hingeMaterial", hingeMaterial);

  doorConfigs.forEach((item) => {
    const { positon, rotationY } = item;
    const door = createDoor(assetManager);
    door.position.copy(positon);
    if (rotationY) {
      door.rotation.y = rotationY;
    }
    scene.add(door);
  });
};

const createDoor = (assetManager: AssetManager) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  const sphereGeometry = assetManager.geometries.get("sphereGeometry");
  const woodDoorMaterial = assetManager.materials.get("woodDoorMaterial");
  const doorFrameMaterial = assetManager.materials.get("doorFrameMaterial");
  const doorknobMaterial = assetManager.materials.get("doorknobMaterial");
  const darkDoorknobMaterial = assetManager.materials.get(
    "darkDoorknobMaterial",
  );

  const doorGroup = new Group();
  doorGroup.name = "房门";
  doorGroup.castShadow = true;
  doorGroup.receiveShadow = true;

  /** 门框部分*/
  const frameGroup = new Group();

  // 左竖框
  const leftJamb = new Mesh(boxGeometry, doorFrameMaterial);
  leftJamb.scale.set(FRAME_TRIM_W, OPENING_H, FRAME_D);
  leftJamb.position.set(-HALF_OPEN - FRAME_TRIM_W / 2, OPENING_H / 2, 0);
  leftJamb.castShadow = leftJamb.receiveShadow = true;
  frameGroup.add(leftJamb);

  // 右竖框
  const rightJamb = new Mesh(boxGeometry, doorFrameMaterial);
  rightJamb.scale.set(FRAME_TRIM_W, OPENING_H, FRAME_D);
  rightJamb.position.set(HALF_OPEN + FRAME_TRIM_W / 2, OPENING_H / 2, 0);
  rightJamb.castShadow = rightJamb.receiveShadow = true;
  frameGroup.add(rightJamb);

  // 上方横框
  const HEADER_H = FRAME_TRIM_W;
  const headerMesh = new Mesh(boxGeometry, doorFrameMaterial);
  headerMesh.scale.set(OPENING_W + FRAME_TRIM_W * 2, HEADER_H, FRAME_D);
  headerMesh.position.set(0, OPENING_H + HEADER_H / 2, 0);
  headerMesh.castShadow = headerMesh.receiveShadow = true;
  frameGroup.add(headerMesh);
  doorGroup.add(frameGroup);

  /** 门扇部分*/
  const doorPanel = new Mesh(boxGeometry, woodDoorMaterial);
  doorPanel.scale.set(DOOR_W, DOOR_H, DOOR_T);
  doorPanel.position.set(0, DOOR_H / 2, 0);
  doorPanel.castShadow = doorPanel.receiveShadow = true;
  doorGroup.add(doorPanel);

  /** 门把手部分*/
  const handleGroup = new Group();
  const handleBase = new Mesh(cylinderGeometry, doorknobMaterial);
  handleBase.scale.set(0.032, 0.01, 0.038);
  handleBase.rotation.x = Math.PI / 2;
  handleGroup.add(handleBase);

  const handleRod = new Mesh(cylinderGeometry, doorknobMaterial);
  handleRod.scale.set(0.012, 0.12, 0.012);
  handleRod.rotation.x = Math.PI / 2;
  handleRod.position.z = 0.06;
  handleGroup.add(handleRod);

  const handleKnob = new Mesh(sphereGeometry, doorknobMaterial);
  handleKnob.scale.set(0.026, 0.026, 0.026);
  handleKnob.position.z = 0.13;
  handleGroup.add(handleKnob);

  const lockMesh = new Mesh(cylinderGeometry, darkDoorknobMaterial);
  lockMesh.scale.set(0.02, 0.008, 0.02);
  lockMesh.rotation.x = Math.PI / 2;
  lockMesh.position.z = 0.004;
  handleGroup.add(lockMesh);

  handleGroup.position.set(
    HALF_DOOR_W - 0.08,
    HANDLE_POSITION_Y,
    DOOR_T / 2 + 0.008,
  );
  doorGroup.add(handleGroup);

  // 安装三个合页（上、中、下）
  const hingeYs = [DOOR_H * 0.82, DOOR_H * 0.5, DOOR_H * 0.18];
  for (const hy of hingeYs) {
    const hinge = createButtHinge(assetManager);
    hinge.position.y = hy;
    doorGroup.add(hinge);
  }

  return doorGroup;
};

// 创建合页
const createButtHinge = (assetManager: AssetManager) => {
  const hingeMaterial = assetManager.materials.get("hingeMaterial");

  const buttHingeGroup = new Group();

  // 门扇侧 leaf（右半，贴在门扇左侧面）
  const leafT = HINGE_W / 2; // 单个叶板厚度（X方向，夹在缝隙中）

  // 门扇侧 leaf — 局部坐标：x = -HALF_DOOR_W（门扇左边缘）
  const leafGeo = new BoxGeometry(leafT, HINGE_H, HINGE_D);
  const leaf1 = new Mesh(leafGeo, hingeMaterial);
  // 叶板中心在门扇左侧面再往左偏移 leafT/2
  leaf1.position.set(-HALF_DOOR_W - leafT / 2, 0, 0);
  leaf1.castShadow = true;
  buttHingeGroup.add(leaf1);

  // 门框侧 leaf（左半，贴在门框左竖框右侧面）
  // 门框左竖框右侧面世界坐标 = -HALF_OPEN = -0.435
  // 门扇左边缘世界坐标 = -HALF_DOOR_W (局部0) + pivotX = -0.420
  // 门框侧 leaf 需要从 pivot 向左延伸到门框面
  // 距离 = -HALF_OPEN - pivotX = -0.435 - (-0.420) = -0.015
  // leaf2 中心在 pivot 左侧 = -HALF_DOOR_W - SIDE_GAP + leafT/2
  const leaf2 = new Mesh(leafGeo, hingeMaterial);
  leaf2.position.set(-HALF_DOOR_W - SIDE_GAP + leafT / 2, 0, 0);
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
  for (const [rx, ry, rz] of rivetPositions) {
    const rivet = new Mesh(rivetGeo, rivetMat);
    rivet.position.set(
      -HALF_DOOR_W - leafT - 0.001, // 稍微突出 leaf 外表面
      ry,
      rz,
    );
    buttHingeGroup.add(rivet);
  }

  return buttHingeGroup;
};
