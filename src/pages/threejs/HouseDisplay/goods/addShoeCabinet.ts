/**
 * 添加鞋柜
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshPhysicalMaterial,
  Group,
  Vector3,
  Object3D,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { addBoard, addLightingStrip } from "../utils";

const SHOE_CABINET_POSITON = new Vector3(4.64, 0, 3.74); // 鞋柜的位置
const CHEST_COL_COUNT = 4; // 柜子的列数,保证为偶数
const SHOE_CABINET_WIDTH = 3.2; // 鞋柜柜体的总宽
const CHEST_GAP = 0.012; // 柜子之间的缝隙
const SHOE_CABINET_HEIGHT = 4; // 鞋柜的总高
const SHOE_CABINET_DEPTH = 0.62; // 鞋柜的总深度（不包含左右两边多出的部分）
const BOARD_THICKNESS = 0.03; // 木板的厚度
const BOARD_COATING_THICKNESS = 0.002; // 木板深灰色涂层的厚度
const CHEST_DOOR_THICKNESS = 0.01; // 柜门和抽屉门的厚度
const TOP_CHEST_HEIGHT = 1.2; // 第一层柜子的高度
const STORAGE_AREA_HEIGHT = 0.7; // 第二层置物区的高度（空白，深灰）
const PUT_SHOE_AREA_HEIGHT = 0.3; // 第五和六层的摆鞋区的高度（空白，深灰）
const LIGHTING_STRIP_HEIGHT = 0.04; // 发光灯带的高
// 抽屉的宽度
const DRAWER_WIDTH =
  (SHOE_CABINET_WIDTH -
    BOARD_THICKNESS * 2 -
    CHEST_GAP * (CHEST_COL_COUNT / 2 + 1)) /
  (CHEST_COL_COUNT / 2);
const DRAWER_HEIGHT = 0.3; // 抽屉的高度
// 最下面柜子的高度
const BOTTOM_CHEST_HEIGHT =
  SHOE_CABINET_HEIGHT -
  BOARD_THICKNESS -
  CHEST_GAP -
  TOP_CHEST_HEIGHT -
  CHEST_GAP -
  BOARD_THICKNESS -
  STORAGE_AREA_HEIGHT -
  BOARD_THICKNESS -
  CHEST_GAP -
  DRAWER_HEIGHT -
  CHEST_GAP -
  BOARD_THICKNESS -
  PUT_SHOE_AREA_HEIGHT * 2 -
  BOARD_THICKNESS * 2 -
  CHEST_GAP * 2;
// 柜子宽度
const CHEST_WIDTH =
  (SHOE_CABINET_WIDTH -
    BOARD_THICKNESS * 2 -
    CHEST_GAP * (CHEST_COL_COUNT + 1)) /
  CHEST_COL_COUNT;

const addShoeCabinet = (
  scene: Scene,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const shoeCabinet = createShoeCabinet(assetManager);
  shoeCabinet.name = "鞋柜";
  pointerControlsIntersetObjectsRef.current.push(shoeCabinet);
  shoeCabinet.rotation.y = -Math.PI / 2;
  shoeCabinet.position.copy(SHOE_CABINET_POSITON);
  scene.add(shoeCabinet);
};

// 创建鞋柜
const createShoeCabinet = (assetManager: AssetManager) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;

  const shoeCabinetGroup = new Group();

  /** 外壳部分*/
  // 左板
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    SHOE_CABINET_HEIGHT,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    (BOARD_THICKNESS - SHOE_CABINET_WIDTH) / 2,
    SHOE_CABINET_HEIGHT / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 左板右面的深灰色涂层
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    SHOE_CABINET_HEIGHT,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    BOARD_THICKNESS + (BOARD_COATING_THICKNESS - SHOE_CABINET_WIDTH) / 2,
    SHOE_CABINET_HEIGHT / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 右板
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    SHOE_CABINET_HEIGHT,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    (SHOE_CABINET_WIDTH - BOARD_THICKNESS) / 2,
    SHOE_CABINET_HEIGHT / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 右板左面的深灰色涂层
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    SHOE_CABINET_HEIGHT,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    (SHOE_CABINET_WIDTH - BOARD_COATING_THICKNESS) / 2 - BOARD_THICKNESS,
    SHOE_CABINET_HEIGHT / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 顶板
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    SHOE_CABINET_WIDTH,
    BOARD_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT - BOARD_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 顶板底面的深灰色涂层
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH,
    BOARD_COATING_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT - BOARD_THICKNESS - BOARD_COATING_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 背板
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH,
    SHOE_CABINET_HEIGHT,
    BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT / 2,
    BOARD_THICKNESS / 2,
  );

  /**鞋柜里面每层横向隔板*/
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 第三层横板上面的深灰色涂层
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_COATING_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_COATING_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 第三层横板下面的深灰色涂层
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_COATING_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      BOARD_COATING_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      CHEST_GAP -
      BOTTOM_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    PUT_SHOE_AREA_HEIGHT + BOARD_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 第四层横板上面的深灰色涂层
  addBoard(
    shoeCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    BOARD_COATING_THICKNESS,
    SHOE_CABINET_DEPTH - BOARD_THICKNESS,
    0,
    PUT_SHOE_AREA_HEIGHT * 2 +
      BOARD_THICKNESS * 2 +
      BOARD_COATING_THICKNESS / 2,
    (SHOE_CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );

  /**第一层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x =
      BOARD_THICKNESS + CHEST_GAP + CHEST_WIDTH / 2 - SHOE_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBoard(
      shoeCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      TOP_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      SHOE_CABINET_HEIGHT - BOARD_THICKNESS - CHEST_GAP - TOP_CHEST_HEIGHT / 2,
      SHOE_CABINET_DEPTH - BOARD_THICKNESS / 2,
    );
  }

  /**第二层置物区添加发光灯带*/
  addLightingStrip(
    shoeCabinetGroup,
    assetManager,
    SHOE_CABINET_WIDTH - BOARD_THICKNESS * 2,
    LIGHTING_STRIP_HEIGHT,
    0,
    SHOE_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      0.01,
    BOARD_THICKNESS + LIGHTING_STRIP_HEIGHT / 2 + 0.02,
  );

  /**第三层抽屉门*/
  for (let i = 0; i < CHEST_COL_COUNT / 2; i++) {
    let x =
      BOARD_THICKNESS + CHEST_GAP + DRAWER_WIDTH / 2 - SHOE_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + DRAWER_WIDTH);
    }
    addBoard(
      shoeCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      DRAWER_WIDTH,
      DRAWER_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      SHOE_CABINET_HEIGHT -
        BOARD_THICKNESS -
        CHEST_GAP -
        TOP_CHEST_HEIGHT -
        CHEST_GAP -
        BOARD_THICKNESS -
        STORAGE_AREA_HEIGHT -
        BOARD_THICKNESS -
        CHEST_GAP -
        DRAWER_HEIGHT / 2,
      SHOE_CABINET_DEPTH - BOARD_THICKNESS / 2,
    );
  }

  /**第四层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x =
      BOARD_THICKNESS + CHEST_GAP + CHEST_WIDTH / 2 - SHOE_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBoard(
      shoeCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      BOTTOM_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      PUT_SHOE_AREA_HEIGHT * 2 +
        BOARD_THICKNESS * 2 +
        CHEST_GAP +
        BOTTOM_CHEST_HEIGHT / 2,
      SHOE_CABINET_DEPTH - BOARD_THICKNESS / 2,
    );
  }

  return shoeCabinetGroup;
};

export default addShoeCabinet;
