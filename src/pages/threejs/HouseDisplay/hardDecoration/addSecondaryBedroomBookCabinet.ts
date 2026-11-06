/**
 * 添加次卧书柜
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshPhysicalMaterial,
  Group,
  Vector3,
  RectAreaLight,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  LIGHT_STRIP_HEIGHT,
  BOARD_THICKNESS,
  CHEST_DOOR_THICKNESS,
  addBox,
  addPlane,
  addLightStrip,
} from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  CABINET_DEPTH,
  SUSPENDED_CEILING_HEIGHT,
  WALL_61_POSITION_Z,
  WALL_59_POSITION_X,
  WALL_65_POSITION_X,
} from "./addHouseStructure";
import { LIGHT_GROUP_FIELD } from "../function/dynamicOptimizationLightingStripRender";
import { SIZE_ENLARGEMENT_RITO } from "../utils";

const SECONDARY_BEDROOM_BOOK_CABINET_WIDTH =
  WALL_65_POSITION_X - WALL_59_POSITION_X; // 次卧书柜总宽
// 次卧书柜的位置
const SECONDARY_BEDROOM_BOOK_CABINET_POSITON = new Vector3(
  WALL_65_POSITION_X -
    WALL_THICKNESS / 2 -
    SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2,
  0,
  WALL_61_POSITION_Z - WALL_THICKNESS / 2,
);
const SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT =
  WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT; // 次卧书柜的总高
const CHEST_COL_COUNT = 4; // 柜子的列数,保证为偶数
const CHEST_GAP = 0.008; // 柜子之间的缝隙
const TOP_CHEST_HEIGHT = 1.16; // 第一层柜子的高度
const TOP_STORAGE_AREA_HEIGHT = 0.2; // 第二层暗格置物区的高度（空白，深灰）
const TOP_STORAGE_AREA_DEPTH = CABINET_DEPTH - 0.1 * SIZE_ENLARGEMENT_RITO; // 第二层暗格置物区的深度
const STORAGE_AREA_HEIGHT = 0.55; // 第三层置物区的高度（空白，深灰）
// 第四层抽屉的宽度
const DRAWER_WIDTH =
  (SECONDARY_BEDROOM_BOOK_CABINET_WIDTH -
    BOARD_THICKNESS -
    CHEST_GAP * (CHEST_COL_COUNT / 2 + 1)) /
  (CHEST_COL_COUNT / 2);
const DRAWER_HEIGHT = 0.25; // 第四层抽屉的高度
// 第五层最下面柜子的高度
const BOTTOM_CHEST_HEIGHT =
  SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
  BOARD_THICKNESS -
  TOP_CHEST_HEIGHT -
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
  (SECONDARY_BEDROOM_BOOK_CABINET_WIDTH -
    BOARD_THICKNESS -
    CHEST_GAP * (CHEST_COL_COUNT + 1)) /
  CHEST_COL_COUNT;
// 暗格宽度
const SECRET_COMPARTENT_WIDTH =
  (SECONDARY_BEDROOM_BOOK_CABINET_WIDTH -
    BOARD_THICKNESS -
    BOARD_THICKNESS * (CHEST_COL_COUNT / 2 - 1)) /
  (CHEST_COL_COUNT / 2);

const addSecondaryBedroomBookCabinet = (
  scene: Scene,
  assetManager: AssetManager,
  lightStripLightingMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  const cabinet = createCabinet(assetManager, lightStripLightingMapRef);
  cabinet.name = "次卧书柜";
  cabinet.rotation.y = Math.PI;
  cabinet.position.copy(SECONDARY_BEDROOM_BOOK_CABINET_POSITON);
  scene.add(cabinet);
};

// 创建次卧书柜
const createCabinet = (
  assetManager: AssetManager,
  lightingStripLightMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial2 = assetManager.materials.get(
    "woodBoardDarkMaterial2",
  ) as MeshPhysicalMaterial;

  const cabinetGroup = new Group();

  /** 外壳部分*/
  const height1 = SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS;
  // 左板
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    height1,
    CABINET_DEPTH,
    -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 + BOARD_THICKNESS / 2,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS - height1 / 2,
    CABINET_DEPTH / 2,
  );
  // 左板右面的深灰色涂层
  addPlane(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    CABINET_DEPTH,
    height1,
    -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 + BOARD_THICKNESS + 0.001,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS - height1 / 2,
    CABINET_DEPTH / 2,
    new Vector3(0, Math.PI / 2, 0),
  );
  // 右板左面的深灰色涂层
  addPlane(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    CABINET_DEPTH,
    height1,
    SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 - 0.001,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS - height1 / 2,
    CABINET_DEPTH / 2,
    new Vector3(0, -Math.PI / 2, 0),
  );
  // 顶板
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    SECONDARY_BEDROOM_BOOK_CABINET_WIDTH,
    BOARD_THICKNESS,
    CABINET_DEPTH,
    0,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS / 2,
    CABINET_DEPTH / 2,
  );
  const width1 = SECONDARY_BEDROOM_BOOK_CABINET_WIDTH - BOARD_THICKNESS;
  const x1 =
    -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 + BOARD_THICKNESS + width1 / 2;
  // 底板
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS - CHEST_DOOR_THICKNESS,
    x1,
    BOARD_THICKNESS / 2,
    BOARD_THICKNESS +
      (CABINET_DEPTH - BOARD_THICKNESS - CHEST_DOOR_THICKNESS) / 2,
  );
  // 背板
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS,
    BOARD_THICKNESS,
    x1,
    (SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT - BOARD_THICKNESS) / 2,
    BOARD_THICKNESS / 2,
  );

  /**次卧书柜里面每层横向隔板*/
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS / 2,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    cabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 第四层横板上面的深灰色涂层
  addPlane(
    cabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      DRAWER_HEIGHT -
      CHEST_GAP +
      0.001,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
    new Vector3(-Math.PI / 2, 0, 0),
  );

  /**第一层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x =
      -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 +
      BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBox(
      cabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      TOP_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
        BOARD_THICKNESS -
        TOP_CHEST_HEIGHT / 2,
      CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  /**第二层暗格置物区的竖向隔板*/
  for (let i = 0; i < CHEST_COL_COUNT / 2 - 1; i++) {
    let x = -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2;
    BOARD_THICKNESS + SECRET_COMPARTENT_WIDTH + BOARD_THICKNESS / 2;
    if (i > 0) {
      x += i * (SECRET_COMPARTENT_WIDTH + BOARD_THICKNESS);
    }
    addBox(
      cabinetGroup,
      assetManager,
      woodBoardDarkMaterial2,
      BOARD_THICKNESS,
      TOP_STORAGE_AREA_HEIGHT,
      TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
      x,
      SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
        BOARD_THICKNESS -
        TOP_CHEST_HEIGHT -
        BOARD_THICKNESS -
        TOP_STORAGE_AREA_HEIGHT / 2,
      (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
    );
  }

  /**第二层和第三层置物区添加发光灯带*/
  const lightList: RectAreaLight[] = [];
  const light1 = addLightStrip(
    cabinetGroup,
    assetManager,
    width1,
    LIGHT_STRIP_HEIGHT,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      0.001,
    BOARD_THICKNESS + LIGHT_STRIP_HEIGHT / 2 + 0.1,
    false,
  );
  light1 && lightList.push(light1);
  const light2 = addLightStrip(
    cabinetGroup,
    assetManager,
    width1,
    LIGHT_STRIP_HEIGHT,
    x1,
    SECONDARY_BEDROOM_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      TOP_CHEST_HEIGHT -
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
      -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 +
      BOARD_THICKNESS +
      CHEST_GAP +
      DRAWER_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + DRAWER_WIDTH);
    }
    addBox(
      cabinetGroup,
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
      CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  /**第五层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x =
      -SECONDARY_BEDROOM_BOOK_CABINET_WIDTH / 2 +
      BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBox(
      cabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      BOTTOM_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOTTOM_CHEST_HEIGHT / 2,
      CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  return cabinetGroup;
};

export default addSecondaryBedroomBookCabinet;
