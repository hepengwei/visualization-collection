/**
 * 添加客厅柜
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshPhysicalMaterial,
  Group,
  Vector3,
  Object3D,
  RectAreaLight,
  Mesh,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  LIGHT_STRIP_HEIGHT,
  addBox,
  addLightStrip,
  generateQuarterCylinderGeometry,
} from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  WALL_55_POSITION_Z,
  WALL_64_POSITION_X,
} from "./addHouseStructure";
import { SUSPENDED_CEILING_HEIGHT } from "./addHouseStructure";
import { LIGHT_GROUP_FIELD } from "../function/dynamicOptimizationLightingStripRender";

export const LIVING_ROOM_CABINET_DEPTH = 0.62; // 客厅柜的总深度
export const BOARD_THICKNESS = 0.03; // 木板的厚度
const ARC_BOARD_THICKNESS = 0.08; // 圆弧边木板的厚度
// 客厅柜的位置
const LIVING_ROOM_CABINET_POSITON = new Vector3(
  WALL_64_POSITION_X + 0.2,
  0,
  WALL_55_POSITION_Z - WALL_THICKNESS / 2,
);
const CHEST_COL_COUNT = 4; // 柜子的列数,保证为偶数
const LIVING_ROOM_CABINET_WIDTH = 2; // 客厅柜体的总宽（不包含左右两边多出的部分）
const CHEST_GAP = 0.008; // 柜子之间的缝隙
const LIVING_ROOM_CABINET_HEIGHT = WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT; // 客厅柜的总高
const BOARD_COATING_THICKNESS = 0.002; // 木板深灰色涂层的厚度
const CHEST_DOOR_THICKNESS = 0.01; // 柜门和抽屉门的厚度
const TOP_CHEST_HEIGHT = 0.96; // 第一层柜子的高度
const TOP_STORAGE_AREA_HEIGHT = 0.2; // 第二层暗格置物区的高度（空白，深灰）
const TOP_STORAGE_AREA_DEPTH = LIVING_ROOM_CABINET_DEPTH - 0.16; // 第二层暗格置物区的深度
const STORAGE_AREA_HEIGHT = 0.55; // 第三层置物区的高度（空白，深灰）
// 第四层抽屉的宽度
const DRAWER_WIDTH =
  (LIVING_ROOM_CABINET_WIDTH -
    ARC_BOARD_THICKNESS * 2 -
    CHEST_GAP * (CHEST_COL_COUNT / 2 + 1)) /
  (CHEST_COL_COUNT / 2);
const DRAWER_HEIGHT = 0.25; // 第四层抽屉的高度
// 第五层最下面柜子的高度
const BOTTOM_CHEST_HEIGHT =
  LIVING_ROOM_CABINET_HEIGHT -
  TOP_CHEST_HEIGHT -
  CHEST_GAP -
  BOARD_THICKNESS -
  TOP_STORAGE_AREA_HEIGHT -
  BOARD_THICKNESS -
  STORAGE_AREA_HEIGHT -
  BOARD_THICKNESS -
  DRAWER_HEIGHT -
  CHEST_GAP -
  BOARD_THICKNESS -
  CHEST_GAP;
// 柜子宽度
const CHEST_WIDTH =
  (LIVING_ROOM_CABINET_WIDTH -
    ARC_BOARD_THICKNESS * 2 -
    CHEST_GAP * (CHEST_COL_COUNT + 1)) /
  CHEST_COL_COUNT;
// 暗格宽度
const SECRET_COMPARTENT_WIDTH =
  (LIVING_ROOM_CABINET_WIDTH -
    ARC_BOARD_THICKNESS * 2 -
    BOARD_THICKNESS * (CHEST_COL_COUNT / 2 - 1)) /
  (CHEST_COL_COUNT / 2);

const addLivingRoomCabinet = (
  scene: Scene,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  lightingStripLightMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  const livingRoomCabinet = createLivingRoomCabinet(
    assetManager,
    lightingStripLightMapRef,
  );
  livingRoomCabinet.name = "客厅柜";
  pointerControlsIntersetObjectsRef.current.push(livingRoomCabinet);
  mouseRaycasterIntersectObjectsRef.current.push(livingRoomCabinet);
  livingRoomCabinet.rotation.y = Math.PI;
  livingRoomCabinet.position.copy(LIVING_ROOM_CABINET_POSITON);
  scene.add(livingRoomCabinet);
};

// 创建客厅柜
const createLivingRoomCabinet = (
  assetManager: AssetManager,
  lightingStripLightMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;

  const livingRoomCabinetGroup = new Group();

  /** 外壳部分*/
  const topHeight =
    TOP_CHEST_HEIGHT +
    CHEST_GAP +
    BOARD_THICKNESS +
    TOP_STORAGE_AREA_HEIGHT +
    BOARD_THICKNESS;
  // 左上板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    topHeight,
    TOP_STORAGE_AREA_DEPTH - ARC_BOARD_THICKNESS,
    (ARC_BOARD_THICKNESS - LIVING_ROOM_CABINET_WIDTH) / 2,
    LIVING_ROOM_CABINET_HEIGHT - topHeight / 2,
    (TOP_STORAGE_AREA_DEPTH - ARC_BOARD_THICKNESS) / 2,
  );
  // 左上四分之一圆柱
  const generateQuarterCylinderGeometry1 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    topHeight,
  );
  const generateQuarterCylinder1 = new Mesh(
    generateQuarterCylinderGeometry1,
    woodBoardLightMaterial,
  );
  generateQuarterCylinder1.rotation.x = -Math.PI / 2;
  generateQuarterCylinder1.rotation.z = Math.PI;
  generateQuarterCylinder1.position.set(
    ARC_BOARD_THICKNESS - LIVING_ROOM_CABINET_WIDTH / 2,
    LIVING_ROOM_CABINET_HEIGHT - topHeight,
    TOP_STORAGE_AREA_DEPTH - ARC_BOARD_THICKNESS,
  );
  generateQuarterCylinder1.castShadow = true;
  generateQuarterCylinder1.receiveShadow = true;
  livingRoomCabinetGroup.add(generateQuarterCylinder1);
  // 左上板右面的深灰色涂层
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    topHeight,
    TOP_STORAGE_AREA_DEPTH,
    ARC_BOARD_THICKNESS +
      (BOARD_COATING_THICKNESS - LIVING_ROOM_CABINET_WIDTH) / 2,
    LIVING_ROOM_CABINET_HEIGHT - topHeight / 2,
    TOP_STORAGE_AREA_DEPTH / 2,
  );
  // 右上板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    topHeight,
    TOP_STORAGE_AREA_DEPTH - ARC_BOARD_THICKNESS,
    (LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS) / 2,
    LIVING_ROOM_CABINET_HEIGHT - topHeight / 2,
    (TOP_STORAGE_AREA_DEPTH - ARC_BOARD_THICKNESS) / 2,
  );
  // 右上四分之一圆柱
  const generateQuarterCylinderGeometry2 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    topHeight,
  );
  const generateQuarterCylinder2 = new Mesh(
    generateQuarterCylinderGeometry2,
    woodBoardLightMaterial,
  );
  generateQuarterCylinder2.rotation.x = -Math.PI / 2;
  generateQuarterCylinder2.rotation.z = -Math.PI / 2;
  generateQuarterCylinder2.position.set(
    LIVING_ROOM_CABINET_WIDTH / 2 - ARC_BOARD_THICKNESS,
    LIVING_ROOM_CABINET_HEIGHT - topHeight,
    TOP_STORAGE_AREA_DEPTH - ARC_BOARD_THICKNESS,
  );
  generateQuarterCylinder2.castShadow = true;
  generateQuarterCylinder2.receiveShadow = true;
  livingRoomCabinetGroup.add(generateQuarterCylinder2);
  // 右上板左面的深灰色涂层
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    topHeight,
    TOP_STORAGE_AREA_DEPTH,
    (LIVING_ROOM_CABINET_WIDTH - BOARD_COATING_THICKNESS) / 2 -
      ARC_BOARD_THICKNESS,
    LIVING_ROOM_CABINET_HEIGHT - topHeight / 2,
    TOP_STORAGE_AREA_DEPTH / 2,
  );
  const bottomHeight =
    BOARD_THICKNESS +
    CHEST_GAP +
    DRAWER_HEIGHT +
    CHEST_GAP +
    BOARD_THICKNESS +
    CHEST_GAP +
    BOTTOM_CHEST_HEIGHT;
  // 左下板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    bottomHeight,
    LIVING_ROOM_CABINET_DEPTH,
    (ARC_BOARD_THICKNESS - LIVING_ROOM_CABINET_WIDTH) / 2,
    bottomHeight / 2,
    LIVING_ROOM_CABINET_DEPTH / 2 - ARC_BOARD_THICKNESS,
  );
  // 左下四分之一圆柱
  const generateQuarterCylinderGeometry3 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    bottomHeight,
  );
  const generateQuarterCylinder3 = new Mesh(
    generateQuarterCylinderGeometry3,
    woodBoardLightMaterial,
  );
  generateQuarterCylinder3.rotation.x = -Math.PI / 2;
  generateQuarterCylinder3.rotation.z = Math.PI;
  generateQuarterCylinder3.position.set(
    ARC_BOARD_THICKNESS - LIVING_ROOM_CABINET_WIDTH / 2,
    0,
    LIVING_ROOM_CABINET_DEPTH - ARC_BOARD_THICKNESS,
  );
  generateQuarterCylinder3.castShadow = true;
  generateQuarterCylinder3.receiveShadow = true;
  livingRoomCabinetGroup.add(generateQuarterCylinder3);
  // 左下板右面的深灰色涂层
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    bottomHeight,
    LIVING_ROOM_CABINET_DEPTH,
    ARC_BOARD_THICKNESS +
      (BOARD_COATING_THICKNESS - LIVING_ROOM_CABINET_WIDTH) / 2,
    bottomHeight / 2,
    LIVING_ROOM_CABINET_DEPTH / 2,
  );
  // 右下板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    bottomHeight,
    LIVING_ROOM_CABINET_DEPTH,
    (LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS) / 2,
    bottomHeight / 2,
    LIVING_ROOM_CABINET_DEPTH / 2 - ARC_BOARD_THICKNESS,
  );
  // 右下四分之一圆柱
  const generateQuarterCylinderGeometry4 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    bottomHeight,
  );
  const generateQuarterCylinder4 = new Mesh(
    generateQuarterCylinderGeometry4,
    woodBoardLightMaterial,
  );
  generateQuarterCylinder4.rotation.x = -Math.PI / 2;
  generateQuarterCylinder4.rotation.z = -Math.PI / 2;
  generateQuarterCylinder4.position.set(
    LIVING_ROOM_CABINET_WIDTH / 2 - ARC_BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_DEPTH - ARC_BOARD_THICKNESS,
  );
  generateQuarterCylinder4.castShadow = true;
  generateQuarterCylinder4.receiveShadow = true;
  livingRoomCabinetGroup.add(generateQuarterCylinder4);
  // 右下板左面的深灰色涂层
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    bottomHeight,
    LIVING_ROOM_CABINET_DEPTH,
    (LIVING_ROOM_CABINET_WIDTH - BOARD_COATING_THICKNESS) / 2 -
      ARC_BOARD_THICKNESS,
    bottomHeight / 2,
    LIVING_ROOM_CABINET_DEPTH / 2,
  );
  // 顶板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT - BOARD_THICKNESS / 2,
    TOP_STORAGE_AREA_DEPTH / 2,
  );
  // 底板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    LIVING_ROOM_CABINET_DEPTH - CHEST_DOOR_THICKNESS,
    0,
    BOARD_THICKNESS / 2,
    LIVING_ROOM_CABINET_DEPTH / 2,
  );
  // 背板
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    LIVING_ROOM_CABINET_HEIGHT - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT / 2,
    BOARD_THICKNESS / 2,
  );

  /**客厅柜里面每层横向隔板*/
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    LIVING_ROOM_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (LIVING_ROOM_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    LIVING_ROOM_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (LIVING_ROOM_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 第四层横板上面的深灰色涂层
  addBox(
    livingRoomCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    BOARD_COATING_THICKNESS,
    LIVING_ROOM_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_COATING_THICKNESS / 2 +
      0.01,
    (LIVING_ROOM_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );

  /**第一层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x =
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_WIDTH / 2 -
      LIVING_ROOM_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBox(
      livingRoomCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      TOP_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      LIVING_ROOM_CABINET_HEIGHT - TOP_CHEST_HEIGHT / 2,
      TOP_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  /**第二层暗格置物区的竖向隔板*/
  for (let i = 0; i < CHEST_COL_COUNT / 2 - 1; i++) {
    let x =
      ARC_BOARD_THICKNESS +
      SECRET_COMPARTENT_WIDTH +
      BOARD_THICKNESS / 2 -
      LIVING_ROOM_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (SECRET_COMPARTENT_WIDTH + BOARD_THICKNESS);
    }
    addBox(
      livingRoomCabinetGroup,
      assetManager,
      woodBoardDarkMaterial,
      BOARD_THICKNESS,
      TOP_STORAGE_AREA_HEIGHT,
      TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
      x,
      LIVING_ROOM_CABINET_HEIGHT -
        TOP_CHEST_HEIGHT -
        CHEST_GAP -
        BOARD_THICKNESS -
        TOP_STORAGE_AREA_HEIGHT / 2,
      (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
    );
  }

  /**第二层和第三层置物区添加发光灯带*/
  const lightList: RectAreaLight[] = [];
  const light1 = addLightStrip(
    livingRoomCabinetGroup,
    assetManager,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    LIGHT_STRIP_HEIGHT,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      0.001,
    BOARD_THICKNESS + LIGHT_STRIP_HEIGHT / 2 + 0.1,
    false,
  );
  light1 && lightList.push(light1);
  const light2 = addLightStrip(
    livingRoomCabinetGroup,
    assetManager,
    LIVING_ROOM_CABINET_WIDTH - ARC_BOARD_THICKNESS * 2,
    LIGHT_STRIP_HEIGHT,
    0,
    LIVING_ROOM_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      0.001,
    BOARD_THICKNESS + LIGHT_STRIP_HEIGHT / 2 + 0.1,
    false,
  );
  light2 && lightList.push(light2);
  lightingStripLightMapRef.current[LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET] =
    lightList;

  /**第四层抽屉门*/
  for (let i = 0; i < CHEST_COL_COUNT / 2; i++) {
    let x =
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      DRAWER_WIDTH / 2 -
      LIVING_ROOM_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + DRAWER_WIDTH);
    }
    addBox(
      livingRoomCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      DRAWER_WIDTH,
      DRAWER_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOTTOM_CHEST_HEIGHT +
        CHEST_GAP +
        BOARD_THICKNESS +
        CHEST_GAP +
        DRAWER_HEIGHT / 2,
      LIVING_ROOM_CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  /**第五层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x =
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_WIDTH / 2 -
      LIVING_ROOM_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBox(
      livingRoomCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      BOTTOM_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOTTOM_CHEST_HEIGHT / 2,
      LIVING_ROOM_CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  return livingRoomCabinetGroup;
};

export default addLivingRoomCabinet;
