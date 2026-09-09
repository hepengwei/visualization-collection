/**
 * 添加吊顶
 */
import { MutableRefObject } from "react";
import { Scene, MeshStandardMaterial, Mesh, Group, Vector3 } from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  WALL_11_POSITION_X,
  WALL_28_POSITION_X,
  WALL_35_POSITION_X,
  WALL_56_POSITION_X,
  WALL_66_POSITION_X,
  WALL_72_POSITION_X,
  WALL_10_POSITION_Z,
  WALL_20_POSITION_Z,
  WALL_55_POSITION_Z,
  WALL_67_POSITION_Z,
  WALL_73_POSITION_Z,
} from "./addHouseStructure";
import { SUSPENDED_CEILING_HEIGHT, SIDEBOARD_DEPTH } from "./addHouseStructure";
import { CURTAIN_DEPTH } from "../softDecoration/addCurtain";
import { addLightingStrip, addBoard } from "../utils";

type SuspendedCeilingType = "front" | "back" | "left" | "right";

export const SUSPENDED_CEILING_DEPTH = 0.5; // 吊顶总深度
const SINGLE_SKIN_PANEL_THICKNESS = 0.05; // 单层板厚度
const SINGLE_SKIN_PANEL_DEPTH_GAP = 0.06; // 单层板深度的间隔
const LIGHT_STRIP_WIDTH = 0.1; // 灯带的宽度
const HOLE_HEIGHT = SUSPENDED_CEILING_HEIGHT - SINGLE_SKIN_PANEL_THICKNESS * 2; // 吊顶的洞高度
const HOLE_DEPTH =
  SUSPENDED_CEILING_DEPTH - SINGLE_SKIN_PANEL_DEPTH_GAP - LIGHT_STRIP_WIDTH; // 吊顶的洞深度
// 所有吊顶的尺寸和位置
const length1 = WALL_55_POSITION_Z - WALL_10_POSITION_Z - WALL_THICKNESS;
const length2 = WALL_66_POSITION_X - WALL_56_POSITION_X;
const length3 =
  WALL_73_POSITION_Z - WALL_10_POSITION_Z - WALL_THICKNESS - SIDEBOARD_DEPTH;
const length4 = WALL_35_POSITION_X - WALL_72_POSITION_X - CURTAIN_DEPTH;
const x1 = WALL_72_POSITION_X - WALL_THICKNESS / 2 + length4 / 2;
const suspendedCeilingInfoList: [
  number,
  number,
  number,
  number,
  SuspendedCeilingType,
][] = [
  // 客厅
  [
    length1,
    WALL_56_POSITION_X + WALL_THICKNESS / 2,
    WALL_HEIGHT,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + length1 / 2,
    "left",
  ],
  [
    length2,
    WALL_56_POSITION_X + length2 / 2,
    WALL_HEIGHT,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2,
    "back",
  ],
  [
    length2,
    WALL_56_POSITION_X + length2 / 2,
    WALL_HEIGHT,
    WALL_55_POSITION_Z - WALL_THICKNESS / 2,
    "front",
  ],
  [
    length1,
    WALL_66_POSITION_X + WALL_THICKNESS / 2,
    WALL_HEIGHT,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + length1 / 2,
    "right",
  ],
  // 餐厅
  [
    length3,
    WALL_72_POSITION_X - WALL_THICKNESS / 2,
    WALL_HEIGHT,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + SIDEBOARD_DEPTH + length3 / 2,
    "left",
  ],
  [
    length4,
    x1,
    WALL_HEIGHT,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + SIDEBOARD_DEPTH,
    "back",
  ],
  [length4, x1, WALL_HEIGHT, WALL_73_POSITION_Z - WALL_THICKNESS / 2, "front"],
  [
    length3,
    WALL_35_POSITION_X - WALL_THICKNESS / 2 - CURTAIN_DEPTH,
    WALL_HEIGHT,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + SIDEBOARD_DEPTH + length3 / 2,
    "right",
  ],
];
// 所有空余地方吊顶板的尺寸和位置
const suspendedCeilingBoardPositionY =
  WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT / 2;
const width2 = WALL_72_POSITION_X - WALL_66_POSITION_X - WALL_THICKNESS;
const width3 = WALL_28_POSITION_X - WALL_11_POSITION_X - WALL_THICKNESS;
const length5 = WALL_67_POSITION_Z - WALL_10_POSITION_Z - WALL_THICKNESS;
const length6 = WALL_10_POSITION_Z - WALL_20_POSITION_Z;
const suspendedCeilingBoardInfoList: [
  number,
  number,
  number,
  number,
  number,
][] = [
  [
    width2,
    length5,
    WALL_66_POSITION_X + WALL_THICKNESS / 2 + width2 / 2,
    suspendedCeilingBoardPositionY,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + length5 / 2,
  ],
  [
    length4,
    SIDEBOARD_DEPTH,
    x1,
    suspendedCeilingBoardPositionY,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 + SIDEBOARD_DEPTH / 2,
  ],
  [
    width3,
    length6,
    WALL_11_POSITION_X + WALL_THICKNESS / 2 + width3 / 2,
    suspendedCeilingBoardPositionY,
    WALL_10_POSITION_Z + WALL_THICKNESS / 2 - length6 / 2,
  ],
];

const addSuspendedCeiling = (
  scene: Scene,
  assetManager: AssetManager,
  suspendedCeilingListRef: MutableRefObject<(Group | Mesh)[]>,
) => {
  // 创建并添加所有吊顶
  suspendedCeilingInfoList.forEach(
    (item: [number, number, number, number, SuspendedCeilingType]) => {
      addSingleSuspendedCeiling(
        scene,
        assetManager,
        suspendedCeilingListRef,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
      );
    },
  );

  // 创建并添加其他空出位置的吊顶板
  const wallMaterial = assetManager.materials.get("wallMaterial");
  suspendedCeilingBoardInfoList.forEach(
    (item: [number, number, number, number, number]) => {
      const suspendedCeilingBoard = addBoard(
        scene,
        assetManager,
        wallMaterial as MeshStandardMaterial,
        item[0],
        SUSPENDED_CEILING_HEIGHT,
        item[1],
        item[2],
        item[3],
        item[4],
        false, // 默认隐藏
      );
      if (suspendedCeilingBoard) {
        suspendedCeilingListRef.current?.push(suspendedCeilingBoard);
      }
    },
  );

  // 创建并添加所有的筒灯
};

/**
 * 创建并添加单个吊顶
 */
const addSingleSuspendedCeiling = (
  scene: Scene,
  assetManager: AssetManager,
  suspendedCeilingListRef: MutableRefObject<(Group | Mesh)[]>,
  length: number,
  x: number,
  y: number,
  z: number,
  suspendedCeilingType: SuspendedCeilingType,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const wallMaterial = assetManager.materials.get("wallMaterial");

  const suspendedCeilingGroup = new Group();
  suspendedCeilingGroup.position.set(x, y, z);
  // 默认隐藏
  suspendedCeilingGroup.visible = false;
  suspendedCeilingListRef.current?.push(suspendedCeilingGroup);
  scene.add(suspendedCeilingGroup);

  const box1 = new Mesh(boxGeometry, wallMaterial);
  box1.scale.set(length, HOLE_HEIGHT, HOLE_DEPTH);
  box1.position.set(0, -HOLE_HEIGHT / 2, HOLE_DEPTH / 2);
  box1.castShadow = true;
  box1.receiveShadow = true;
  suspendedCeilingGroup.add(box1);

  const box2 = new Mesh(boxGeometry, wallMaterial);
  box2.scale.set(length, SINGLE_SKIN_PANEL_THICKNESS, SUSPENDED_CEILING_DEPTH);
  box2.position.set(
    0,
    -HOLE_HEIGHT - SINGLE_SKIN_PANEL_THICKNESS / 2,
    SUSPENDED_CEILING_DEPTH / 2,
  );
  box2.castShadow = true;
  box2.receiveShadow = true;
  suspendedCeilingGroup.add(box2);

  const box3 = new Mesh(boxGeometry, wallMaterial);
  box3.scale.set(
    length,
    SINGLE_SKIN_PANEL_THICKNESS,
    SUSPENDED_CEILING_DEPTH - SINGLE_SKIN_PANEL_DEPTH_GAP,
  );
  box3.position.set(
    0,
    -HOLE_HEIGHT - (SINGLE_SKIN_PANEL_THICKNESS * 3) / 2,
    (SUSPENDED_CEILING_DEPTH - SINGLE_SKIN_PANEL_DEPTH_GAP) / 2,
  );
  box3.castShadow = true;
  box3.receiveShadow = true;
  suspendedCeilingGroup.add(box3);

  switch (suspendedCeilingType) {
    case "front":
      suspendedCeilingGroup.rotation.y = Math.PI;
      break;
    case "left":
      suspendedCeilingGroup.rotation.y = Math.PI / 2;
      break;
    case "right":
      suspendedCeilingGroup.rotation.y = -Math.PI / 2;
      break;
  }

  // 创建并添加灯带（光朝上，避免穿透吊顶照亮地板）
  addLightingStrip(
    suspendedCeilingGroup,
    assetManager,
    length,
    LIGHT_STRIP_WIDTH,
    0,
    -HOLE_HEIGHT + 0.02,
    HOLE_DEPTH + LIGHT_STRIP_WIDTH / 2,
    new Vector3(-Math.PI / 2, 0, 0), // 面向天花板
    0.3 * Math.PI,
  );
};

// 切换所有吊顶和吊顶板的显示/隐藏
export const allSuspendedCeilingVisibleToggle = (
  suspendedCeilingList: (Group | Mesh)[],
  visible: boolean,
) => {
  suspendedCeilingList.forEach((suspendedCeiling: Group | Mesh) => {
    suspendedCeiling.visible = visible;
  });
};

export default addSuspendedCeiling;
