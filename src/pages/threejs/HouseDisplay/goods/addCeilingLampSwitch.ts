/**
 * 添加各吊灯对应的开关
 */
import { MutableRefObject } from "react";
import {
  Scene,
  BoxGeometry,
  EdgesGeometry,
  MeshStandardMaterial,
  LineSegments,
  LineBasicMaterial,
  Mesh,
  Group,
  Vector3,
  Object3D,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { ceilingLampSwitchStatusToggle } from "./addCeilingLamp";

const SWITCH_WIDTH = 0.25; // 开关的宽
const SWITCH_HEIGHT = 0.2; // 开关的高
const SWITCH_BACK_BOX_THICKNESS = 0.006; // 开关的底盒厚度
const SWITCH_FACE_BOX_THICKNESS = 0.002; // 开关的面板厚度
const SWITCH_BUTTON_THICKNESS = 0.015; // 开关按钮的厚度
const SWITCH_BUTTON_FACE_THICKNESS = 0.006; // 开关按钮上面的厚度
const SWITCH_POSITION_HEIGHT = 2; // 开关的位置高度
const switchConfigList = [
  {
    name: "客厅吊灯开关",
    position: new Vector3(-3, SWITCH_POSITION_HEIGHT, -6.22),
  },
  {
    name: "餐厅吊灯开关",
    position: new Vector3(7.5, SWITCH_POSITION_HEIGHT, -6.22),
  },
  {
    name: "主卧吊灯开关",
    position: new Vector3(-2.7, SWITCH_POSITION_HEIGHT, -9.41),
  },
  {
    name: "儿童房吊灯开关",
    position: new Vector3(6.19, SWITCH_POSITION_HEIGHT, -9.85),
    rotationY: Math.PI / 2,
  },
  {
    name: "次卧吊灯开关",
    position: new Vector3(-6.5, SWITCH_POSITION_HEIGHT, 4.58),
  },
  {
    name: "厨房吊灯开关",
    position: new Vector3(6.5, SWITCH_POSITION_HEIGHT, 2.46),
  },
  {
    name: "外厕所吊灯开关",
    position: new Vector3(3.2, SWITCH_POSITION_HEIGHT, -9.76),
    rotationY: Math.PI,
  },
  {
    name: "主卧厕所吊灯开关",
    position: new Vector3(-2.4, SWITCH_POSITION_HEIGHT, -9.76),
    rotationY: Math.PI,
  },
];

export const addCeilingLampSwitch = (
  scene: Scene,
  assetManager: AssetManager,
  lampSwitchListRef: MutableRefObject<Group[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  lampList: Group[],
) => {
  // 创建立方体
  let boxGeometry = assetManager.geometries.get("boxGeometry");
  if (!boxGeometry) {
    boxGeometry = new BoxGeometry(1, 1, 1);
    assetManager.geometries.set("boxGeometry", boxGeometry);
  }
  // 创建开关底盒材质
  const switchBackBoxMaterial = new MeshStandardMaterial({
    color: 0xeaeaea,
    roughness: 0.22,
    metalness: 0.25,
  });
  assetManager.materials.set("switchBackBoxMaterial", switchBackBoxMaterial);
  // 创建开关面板材质
  const switchfaceBoxMaterial = new MeshStandardMaterial({
    color: 0xf5f5f5,
    roughness: 0.28,
    metalness: 0.03,
  });
  assetManager.materials.set("switchfaceBoxMaterial", switchfaceBoxMaterial);
  // 创建开关按钮材质
  const switchButtonMaterial = new MeshStandardMaterial({
    color: 0xeeeeee,
    roughness: 0.25,
    metalness: 0.06,
    emissive: 0x000000,
    emissiveIntensity: 0,
  });
  assetManager.materials.set("switchButtonMaterial", switchButtonMaterial);
  // 创建开关按钮边缘高光线材质
  const switchButtonLineMaterial = new LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
  });
  assetManager.materials.set(
    "switchButtonLineMaterial",
    switchButtonLineMaterial,
  );
  // 创建开关按钮上面材质
  const switchButtonFaceMaterial = new MeshStandardMaterial({
    color: 0xf8f8f8,
    roughness: 0.2,
    metalness: 0.03,
  });
  assetManager.materials.set(
    "switchButtonFaceMaterial",
    switchButtonFaceMaterial,
  );

  // 添加所有吊灯的开关
  switchConfigList.forEach((item, index) => {
    const { name, position, rotationY } = item;
    let switchStatus = "OFF";
    if (lampList.length > 0) {
      // @ts-ignore
      switchStatus = lampList[index].switchStatus;
    }
    const ceilingLampSwitch = createSwitch(assetManager, switchStatus);
    ceilingLampSwitch.name = name;
    if (rotationY) {
      ceilingLampSwitch.rotation.y = rotationY;
    }
    ceilingLampSwitch.position.copy(position);

    mouseRaycasterIntersectObjectsRef.current.push(ceilingLampSwitch);
    lampSwitchListRef.current.push(ceilingLampSwitch);
    scene.add(ceilingLampSwitch);
  });
};

// 创建开关
const createSwitch = (assetManager: AssetManager, switchStatus = "OFF") => {
  const switchGroup = new Group();
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const switchBackBoxMaterial = assetManager.materials.get(
    "switchBackBoxMaterial",
  );
  const switchfaceBoxMaterial = assetManager.materials.get(
    "switchfaceBoxMaterial",
  );
  const switchButtonMaterial = assetManager.materials.get(
    "switchButtonMaterial",
  );
  const switchButtonLineMaterial = assetManager.materials.get(
    "switchButtonLineMaterial",
  );
  const switchButtonFaceMaterial = assetManager.materials.get(
    "switchButtonFaceMaterial",
  );

  // 创建并添加开关的底盒
  const backBox = new Mesh(boxGeometry, switchBackBoxMaterial);
  backBox.scale.set(SWITCH_WIDTH, SWITCH_HEIGHT, SWITCH_BACK_BOX_THICKNESS);
  switchGroup.add(backBox);

  // 创建并添加开关的面板
  const faceBoxPositionZ =
    SWITCH_BACK_BOX_THICKNESS / 2 + SWITCH_FACE_BOX_THICKNESS / 2;
  const faceBox = new Mesh(boxGeometry, switchfaceBoxMaterial);
  faceBox.scale.set(
    SWITCH_WIDTH * 0.96,
    SWITCH_HEIGHT * 0.96,
    SWITCH_FACE_BOX_THICKNESS,
  );
  faceBox.position.set(0, 0, faceBoxPositionZ);
  switchGroup.add(faceBox);

  // 创建并添加开关的按钮
  const buttonWidth = SWITCH_WIDTH * 0.74;
  const buttonHeight = SWITCH_HEIGHT * 0.74;
  const buttonPositionZ =
    faceBoxPositionZ +
    SWITCH_FACE_BOX_THICKNESS / 2 +
    SWITCH_BUTTON_THICKNESS / 2;
  const buttonBox = new Mesh(boxGeometry, switchButtonMaterial);
  buttonBox.scale.set(buttonWidth, buttonHeight, SWITCH_BUTTON_THICKNESS);
  buttonBox.position.set(0, 0, buttonPositionZ);
  buttonBox.castShadow = true;
  switchGroup.add(buttonBox);

  // 创建并添加开关按钮边缘高光线
  const edges = new EdgesGeometry(boxGeometry);
  const buttonEdges = new LineSegments(edges, switchButtonLineMaterial);
  buttonEdges.scale.copy(buttonBox.scale);
  buttonBox.add(buttonEdges);

  // 创建并添加开关按钮上面（略亮、略凸）
  const buttonFace = new Mesh(boxGeometry, switchButtonFaceMaterial);
  buttonFace.scale.set(
    buttonWidth * 0.92,
    buttonHeight * 0.92,
    SWITCH_BUTTON_FACE_THICKNESS,
  );
  buttonFace.position.set(
    0,
    0,
    buttonPositionZ +
      SWITCH_BUTTON_THICKNESS / 2 +
      SWITCH_BUTTON_FACE_THICKNESS / 2,
  );
  switchGroup.add(buttonFace);

  switchGroup.receiveShadow = true;
  // 添加自定义属性值
  // @ts-ignore
  switchGroup.switchStatus = switchStatus;

  return switchGroup;
};

// 吊灯开关点击后的回调
export const onClickCeilingLampSwitch = (
  ceilingLampSwitch: Group,
  lampList?: Group[],
) => {
  if (ceilingLampSwitch && lampList && lampList?.length > 0) {
    const positionName = ceilingLampSwitch.name.substring(
      0,
      ceilingLampSwitch.name.length - 4,
    );
    const nextStatus =
      // @ts-ignore
      ceilingLampSwitch.switchStatus === "ON" ? "OFF" : "ON";
    for (let i = 0, l = lampList.length; i < l; i++) {
      const lamp = lampList[i];
      if (lamp.name.substring(0, lamp.name.length - 2) === positionName) {
        ceilingLampSwitchStatusToggle(lamp, nextStatus);
        break;
      }
    }
    ceilingLampSwitchToggle(ceilingLampSwitch, nextStatus);
  }
};

// 切换单个吊灯开关的开关状态
export const ceilingLampSwitchToggle = (
  lampSwitch: Group,
  switchStatus: "ON" | "OFF",
) => {
  // 修改自定义属性值
  // @ts-ignore
  lampSwitch.switchStatus = switchStatus;
};
