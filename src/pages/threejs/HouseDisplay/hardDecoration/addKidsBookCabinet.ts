/**
 * 添加儿童书柜
 */
import { Scene, MeshPhysicalMaterial, Group, Vector3, Mesh } from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  SIZE_ENLARGEMENT_RITO,
  BOARD_THICKNESS,
  ARC_BOARD_THICKNESS,
  CHEST_DOOR_THICKNESS,
  addBox,
  generateQuarterCylinderGeometry,
} from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  WALL_10_POSITION_Z,
  WALL_34_POSITION_X,
} from "./addHouseStructure";
import { SUSPENDED_CEILING_HEIGHT, CABINET_DEPTH } from "./addHouseStructure";

// 儿童书柜的位置
const KIDS_BOOK_CABINET_POSITON = new Vector3(
  WALL_34_POSITION_X + 0.81,
  0,
  WALL_10_POSITION_Z - WALL_THICKNESS / 2,
);
const CHEST_COL_COUNT = 4; // 柜子的列数,保证为偶数
const KIDS_BOOK_CABINET_WIDTH = 1.5 * SIZE_ENLARGEMENT_RITO; // 儿童书柜体的总宽（不包含左右两边多出的部分）
const CHEST_GAP = 0.008; // 柜子之间的缝隙
const KIDS_BOOK_CABINET_HEIGHT = WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT; // 儿童书柜的总高
const BOARD_COATING_THICKNESS = 0.002; // 木板深灰色涂层的厚度
const LEFT_STORAGE_AREA_WIDTH = 0.5 * SIZE_ENLARGEMENT_RITO; // 左边的开放格的宽度(不包含左右两边板子宽)
const LEFT_STORAGE_AREA_COUNT = 4; // 左边的开放格的格数
const TOP_CHEST_HEIGHT = 1.16; // 第一层柜子的高度
const TOP_STORAGE_AREA_HEIGHT = 0.25; // 第二层暗格置物区的高度（空白，深灰）
const TOP_STORAGE_AREA_DEPTH = CABINET_DEPTH - 0.1 * SIZE_ENLARGEMENT_RITO; // 第二层暗格置物区的深度
const STORAGE_AREA_HEIGHT = 0.7; // 第三层置物区的高度（空白，深灰）
// 第四层抽屉的宽度
const DRAWER_WIDTH =
  (KIDS_BOOK_CABINET_WIDTH -
    BOARD_THICKNESS -
    ARC_BOARD_THICKNESS -
    CHEST_GAP * (CHEST_COL_COUNT / 2 + 1)) /
  (CHEST_COL_COUNT / 2);
const DRAWER_HEIGHT = 0.25; // 第四层抽屉的高度
// 第五层最下面柜子的高度
const BOTTOM_CHEST_HEIGHT =
  KIDS_BOOK_CABINET_HEIGHT -
  BOARD_THICKNESS -
  CHEST_GAP -
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
// 下方柜门宽度
const CHEST_DOOR_WIDTH =
  (KIDS_BOOK_CABINET_WIDTH -
    BOARD_THICKNESS -
    ARC_BOARD_THICKNESS -
    CHEST_GAP * (CHEST_COL_COUNT + 1)) /
  CHEST_COL_COUNT;

const addKidsBookCabinet = (scene: Scene, assetManager: AssetManager) => {
  const kidsBookCabinet = createKidsBookCabinet(assetManager);
  kidsBookCabinet.name = "儿童书柜";
  kidsBookCabinet.rotation.y = Math.PI;
  kidsBookCabinet.position.copy(KIDS_BOOK_CABINET_POSITON);
  scene.add(kidsBookCabinet);
};

// 创建儿童书柜
const createKidsBookCabinet = (assetManager: AssetManager) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial2 = assetManager.materials.get(
    "woodBoardDarkMaterial2",
  ) as MeshPhysicalMaterial;

  const kidsBookCabinetGroup = new Group();

  /** 外壳部分*/
  // 左板
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    KIDS_BOOK_CABINET_HEIGHT,
    CABINET_DEPTH,
    (BOARD_THICKNESS - KIDS_BOOK_CABINET_WIDTH) / 2,
    KIDS_BOOK_CABINET_HEIGHT / 2,
    CABINET_DEPTH / 2,
  );

  // 左板右面的深灰色涂层
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    BOARD_COATING_THICKNESS,
    KIDS_BOOK_CABINET_HEIGHT,
    CABINET_DEPTH,
    BOARD_THICKNESS + (BOARD_COATING_THICKNESS - KIDS_BOOK_CABINET_WIDTH) / 2,
    KIDS_BOOK_CABINET_HEIGHT / 2,
    CABINET_DEPTH / 2,
  );
  // 右板
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    KIDS_BOOK_CABINET_HEIGHT,
    CABINET_DEPTH - ARC_BOARD_THICKNESS,
    (KIDS_BOOK_CABINET_WIDTH - ARC_BOARD_THICKNESS) / 2,
    KIDS_BOOK_CABINET_HEIGHT / 2,
    (CABINET_DEPTH - ARC_BOARD_THICKNESS) / 2,
  );
  // 右边四分之一圆柱
  const quarterCylinderGeometry = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    KIDS_BOOK_CABINET_HEIGHT,
  );
  const generateQuarterCylinder = new Mesh(
    quarterCylinderGeometry,
    woodBoardLightMaterial,
  );
  generateQuarterCylinder.rotation.x = -Math.PI / 2;
  generateQuarterCylinder.rotation.z = -Math.PI / 2;
  generateQuarterCylinder.position.set(
    KIDS_BOOK_CABINET_WIDTH / 2 - ARC_BOARD_THICKNESS,
    0,
    CABINET_DEPTH - ARC_BOARD_THICKNESS,
  );
  kidsBookCabinetGroup.add(generateQuarterCylinder);
  // 右上板左面的深灰色涂层
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    BOARD_COATING_THICKNESS,
    KIDS_BOOK_CABINET_HEIGHT,
    CABINET_DEPTH,
    (KIDS_BOOK_CABINET_WIDTH - BOARD_COATING_THICKNESS) / 2 -
      ARC_BOARD_THICKNESS,
    KIDS_BOOK_CABINET_HEIGHT / 2,
    CABINET_DEPTH / 2,
  );
  const width1 =
    KIDS_BOOK_CABINET_WIDTH - BOARD_THICKNESS - ARC_BOARD_THICKNESS;
  const x1 = -KIDS_BOOK_CABINET_WIDTH / 2 + BOARD_THICKNESS + width1 / 2;
  // 顶板
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH,
    x1,
    KIDS_BOOK_CABINET_HEIGHT - BOARD_THICKNESS / 2,
    CABINET_DEPTH / 2,
  );
  // 底板
  addBox(
    kidsBookCabinetGroup,
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
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    KIDS_BOOK_CABINET_WIDTH - BOARD_THICKNESS * 2,
    KIDS_BOOK_CABINET_HEIGHT - BOARD_THICKNESS,
    BOARD_THICKNESS,
    0,
    (KIDS_BOOK_CABINET_HEIGHT - BOARD_THICKNESS) / 2,
    BOARD_THICKNESS / 2,
  );

  /**儿童书柜里面每层横向隔板（不包括左边的开放格）*/
  const width2 =
    KIDS_BOOK_CABINET_WIDTH -
    BOARD_THICKNESS * 2 -
    ARC_BOARD_THICKNESS -
    LEFT_STORAGE_AREA_WIDTH;
  const x2 = KIDS_BOOK_CABINET_WIDTH / 2 - ARC_BOARD_THICKNESS - width2 / 2;
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    x2,
    KIDS_BOOK_CABINET_HEIGHT - TOP_CHEST_HEIGHT - BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    x2,
    KIDS_BOOK_CABINET_HEIGHT -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    KIDS_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1,
    BOARD_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    KIDS_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
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
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    BOARD_COATING_THICKNESS,
    CABINET_DEPTH - BOARD_THICKNESS,
    x1,
    KIDS_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_COATING_THICKNESS / 2 +
      0.001,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );

  // 左边开放格右竖版
  const height2 =
    TOP_CHEST_HEIGHT +
    BOARD_THICKNESS * 2 +
    TOP_STORAGE_AREA_HEIGHT +
    STORAGE_AREA_HEIGHT;
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardDarkMaterial2,
    BOARD_THICKNESS,
    height2,
    CABINET_DEPTH - BOARD_THICKNESS,
    -KIDS_BOOK_CABINET_WIDTH / 2 +
      BOARD_THICKNESS +
      LEFT_STORAGE_AREA_WIDTH +
      BOARD_THICKNESS / 2,
    KIDS_BOOK_CABINET_HEIGHT - BOARD_THICKNESS - CHEST_GAP - height2 / 2,
    (CABINET_DEPTH + BOARD_THICKNESS) / 2,
  );

  // 左边开放格所有横板
  const height3 =
    (height2 - BOARD_THICKNESS * (LEFT_STORAGE_AREA_COUNT - 1)) /
    LEFT_STORAGE_AREA_COUNT;
  const x3 =
    -KIDS_BOOK_CABINET_WIDTH / 2 +
    BOARD_THICKNESS +
    LEFT_STORAGE_AREA_WIDTH / 2;
  for (let i = 0; i < LEFT_STORAGE_AREA_COUNT - 1; i++) {
    let y =
      KIDS_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      height3 -
      BOARD_THICKNESS / 2;
    if (i > 0) {
      y -= i * (BOARD_THICKNESS + height3);
    }
    addBox(
      kidsBookCabinetGroup,
      assetManager,
      woodBoardDarkMaterial2,
      LEFT_STORAGE_AREA_WIDTH,
      BOARD_THICKNESS,
      CABINET_DEPTH - BOARD_THICKNESS,
      x3,
      y,
      (CABINET_DEPTH + BOARD_THICKNESS) / 2,
    );
  }

  /**第一层柜子柜门*/
  const width3 = (width2 - CHEST_GAP * 3) / 2;
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    TOP_CHEST_HEIGHT,
    CHEST_DOOR_THICKNESS,
    KIDS_BOOK_CABINET_WIDTH / 2 -
      ARC_BOARD_THICKNESS -
      CHEST_GAP * 2 -
      (width3 * 3) / 2,
    KIDS_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT / 2,
    CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addBox(
    kidsBookCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    TOP_CHEST_HEIGHT,
    CHEST_DOOR_THICKNESS,
    KIDS_BOOK_CABINET_WIDTH / 2 - ARC_BOARD_THICKNESS - CHEST_GAP - width3 / 2,
    KIDS_BOOK_CABINET_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT / 2,
    CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );

  /**第四层抽屉门*/
  for (let i = 0; i < CHEST_COL_COUNT / 2; i++) {
    let x =
      BOARD_THICKNESS +
      CHEST_GAP +
      DRAWER_WIDTH / 2 -
      KIDS_BOOK_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + DRAWER_WIDTH);
    }
    addBox(
      kidsBookCabinetGroup,
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
      BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2 -
      KIDS_BOOK_CABINET_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_DOOR_WIDTH);
    }
    addBox(
      kidsBookCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_DOOR_WIDTH,
      BOTTOM_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOTTOM_CHEST_HEIGHT / 2,
      CABINET_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }

  return kidsBookCabinetGroup;
};

export default addKidsBookCabinet;
