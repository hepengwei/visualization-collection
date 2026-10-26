/**
 * 装修厨房
 */
import {
  Scene,
  Group,
  Mesh,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  Vector3,
  TorusGeometry,
  CylinderGeometry,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  TILE_SIZE,
  GAP_SIZE,
  WALL_HEIGHT,
  TALL_GRADE_BEAM_HEIGHT,
  TALL_GRADE_BEAM_POSITION_Y,
  BEAM_HEIGHT,
  BEAM_POSITION_Y,
  SUSPENDED_CEILING_HEIGHT,
  WALL_THICKNESS,
  WALL_15_WIDTH,
  WALL_70_WIDTH,
  WALL_71_WIDTH,
  WALL_74_WIDTH,
  WALL_75_WIDTH,
  WALL_76_WIDTH,
  WALL_79_WIDTH,
  WALL_80_WIDTH,
  WALL_35_POSITION_X,
  WALL_71_POSITION_X,
  WALL_72_POSITION_X,
  WALL_73_POSITION_X,
  WALL_74_POSITION_X,
  WALL_75_POSITION_X,
  WALL_80_POSITION_X,
  WALL_1_POSITION_Y,
  WALL_67_POSITION_Z,
  WALL_71_POSITION_Z,
  WALL_73_POSITION_Z,
  WALL_76_POSITION_Z,
  WALL_77_POSITION_Z,
  WALL_79_POSITION_Z,
  WALL_80_POSITION_Z,
} from "./addHouseStructure";
import {
  SIZE_ENLARGEMENT_RITO,
  addBox,
  addPlane,
  generateCurvedSurfaceRightAngledTriangularPrismGeometry,
} from "../utils";
import createGasStove, { GAS_STOVE_HEIGHT } from "../goods/createGasStove";
import createKitchenHood from "../goods/createKitchenHood";

const TOP_KITCHEN_CABINET_DEPTH = 0.36 * SIZE_ENLARGEMENT_RITO; // 上方橱柜的总深度
const TOP_KITCHEN_CABINET_HEIGHT = 1.1; // 上方橱柜的总高度（包括柜门下方漏出的高度）
const QUARTZ_COUNTERTOP_MAX_HEIGHT = 0.92 * SIZE_ENLARGEMENT_RITO; // 石英石高台面的高度
const QUARTZ_COUNTERTOP_DEPTH = 0.6 * SIZE_ENLARGEMENT_RITO; // 石英石台面深度
const QUARTZ_COUNTERTOP_THICKNESS = 0.06; // 石英石台面厚度
const QUARTZ_COUNTERTOP_OVERSTEP_DEPTH = 0.02; // 石英石台面超出柜体的深度
const QUARTZ_COUNTERTOP_RADIUS = 0.01; // 石英石台面边缘圆角半径
const CHEST_DOOR_THICKNESS = 0.02; // 柜门和抽屉门的厚度
const CHEST_DOOR_OPEN_WOUND_HEIGHT = 0.04; // 柜门拉口空间的高度
const CHEST_GAP = 0.01; // 柜子之间的缝隙
const BOTTOM_CHEST_DOOR_MARGING = 0.11; // 下柜门与地面的距离
const WATER_CHANNEL_WIDTH = 0.88; // 水槽的开口宽度
const WATER_CHANNEL_HEIGHT = 0.53; // 水槽的开口高度(往墙体方向)
const WATER_CHANNEL_DEPTH = 0.28; // 水槽的开口深度(往地面方向)
const WATER_CHANNEL_RADIUS = 0.03; // 水槽的开口圆角半径
const WATER_PIPE_MARGIN = 0.06; // 水龙头离水槽开口边的距离
const SMALL_WATER_PIPE_RADIUS = 0.014; // 水龙头的小水管半径
const BIG_WATER_PIPE_RADIUS = 0.022; // 水龙头的大水管半径
const WATER_FAUCET_RADIUS = 0.1; // 水龙头的弧度半径
const LEFT_CHEST_COUNT = 3; // 左边柜门数量
const FRONT_CHEST_COUNT = 7; // 前边柜门数量
const AUTOMATIC_DISHWASHER_WIDTH = 0.9; // 自动洗碗机的宽度
const CORNER_CABINET_STORAGE_AREA_DEPTH = 0.15 * SIZE_ENLARGEMENT_RITO; // 左上角转角柜下方开放格的深度（包含背板）
const CORNER_CABINET_STORAGE_AREA_BOARD_COUNT = 4; // 左上角转角柜下方开放格横板数量(包括顶板和底板)
const RIGHR_CABINET_RIGHT_COL_WIDTH = 0.56 * SIZE_ENLARGEMENT_RITO; // 右边柜子右边列的宽度(包含两边的木板)
const OVEN_HEIGHT = 0.39 * SIZE_ENLARGEMENT_RITO; // 烤箱开放格的高度
const ELECTRIC_COOKER_HEIGHT = 0.4 * SIZE_ENLARGEMENT_RITO; // 电饭煲开放格的高度
const PRESSURE_COOKER_HEIGHT = 0.33 * SIZE_ENLARGEMENT_RITO; // 高压锅开放格的高度
const RIGHR_CABINET_RIGHT_COL_BOTTOM_DRAWER_HEIGHT =
  0.366 * SIZE_ENLARGEMENT_RITO; // 右边柜子右边列底部抽屉门的高度 
const RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT = 0.1; // 右边柜子右边列开放格外挡板高度

// 左边柜的总宽
const LEFT_CHEST_DOOR_WIDTH_SUM =
  WALL_80_POSITION_Z -
  WALL_73_POSITION_Z -
  WALL_THICKNESS -
  QUARTZ_COUNTERTOP_DEPTH;
// 左边柜门的宽度
const LEFT_CHEST_DOOR_WIDTH =
  (LEFT_CHEST_DOOR_WIDTH_SUM - CHEST_GAP * (LEFT_CHEST_COUNT + 1)) /
  LEFT_CHEST_COUNT;
// 前边柜门宽度
const FRONT_CHEST_DOOR_WIDTH =
  (WALL_35_POSITION_X -
    WALL_71_POSITION_X -
    WALL_THICKNESS -
    QUARTZ_COUNTERTOP_DEPTH -
    CHEST_GAP * (FRONT_CHEST_COUNT + 1)) /
  FRONT_CHEST_COUNT;
// 燃气灶位置
const GAS_STOVE_POSITION = new Vector3(
  WALL_35_POSITION_X -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_OVERSTEP_DEPTH -
    CHEST_GAP -
    FRONT_CHEST_DOOR_WIDTH -
    3 * (FRONT_CHEST_DOOR_WIDTH + CHEST_GAP),
  TALL_GRADE_BEAM_HEIGHT,
  WALL_80_POSITION_Z -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_THICKNESS * 2 +
    GAS_STOVE_HEIGHT / 2,
);
// 油烟机位置
const KITCHEN_HOOD_POSITION = new Vector3(
  WALL_35_POSITION_X -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH -
    4 * (FRONT_CHEST_DOOR_WIDTH + CHEST_GAP),
  WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT - TOP_KITCHEN_CABINET_HEIGHT,
  WALL_80_POSITION_Z - WALL_THICKNESS / 2 - 0.01,
);

const renovateKitchen = (scene: Scene, assetManager: AssetManager) => {
  // 添加瓷砖
  addTile(scene, assetManager);
  // 添加石英石台面
  addQuartzCountertop(scene, assetManager);
  // 添加下厨柜
  addBottomCabinet(scene, assetManager);
  // 添加水槽
  addWaterChannel(scene, assetManager);
  // 添加上厨柜
  addTopCabinet(scene, assetManager);
  // 添加左上角转角柜
  addCornerCabinet(scene, assetManager);
  // 添加右边柜子
  addRightCabinet(scene, assetManager);
};

// 添加右边柜子
const addRightCabinet = (scene: Scene, assetManager: AssetManager) => {
  // 灰白木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  // 石英石材质
  const quartzMaterial = assetManager.materials.get("quartzMaterial");
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );

  const rightCabinetGroup = new Group();

  const width1 = WALL_67_POSITION_Z - WALL_73_POSITION_Z - WALL_THICKNESS;
  const height1 = WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT;
  // 两个竖版
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    CHEST_DOOR_THICKNESS,
    height1 - CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH + CHEST_DOOR_THICKNESS / 2,
    (height1 - CHEST_DOOR_THICKNESS) / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    CHEST_DOOR_THICKNESS,
    height1 - CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    width1 - CHEST_DOOR_THICKNESS / 2,
    (height1 - CHEST_DOOR_THICKNESS) / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 顶板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1,
    CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    width1 / 2,
    height1 - CHEST_DOOR_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 左上柜底板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH,
    CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    height1 -
      TOP_KITCHEN_CABINET_HEIGHT +
      QUARTZ_COUNTERTOP_OVERSTEP_DEPTH +
      CHEST_DOOR_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 左上柜背板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH,
    TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    height1 -
      (TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH) / 2,
    0.001,
  );
  // 左上柜上板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH,
    WALL_70_WIDTH - WALL_THICKNESS,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    height1 - CHEST_DOOR_THICKNESS - 0.001,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
    new Vector3(Math.PI / 2, 0, 0),
  );
  // 左上柜左板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    WALL_70_WIDTH - WALL_THICKNESS,
    TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH,
    0.001,
    height1 -
      (TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH) / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
    new Vector3(0, Math.PI / 2, 0),
  );
  // 左上柜右板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    WALL_70_WIDTH - WALL_THICKNESS,
    TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH - 0.001,
    height1 -
      (TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH) / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
    new Vector3(0, -Math.PI / 2, 0),
  );
  // 左上柜门
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH - CHEST_GAP * 2,
    TOP_KITCHEN_CABINET_HEIGHT,
    CHEST_DOOR_THICKNESS,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    height1 - TOP_KITCHEN_CABINET_HEIGHT / 2,
    WALL_70_WIDTH - WALL_THICKNESS - CHEST_DOOR_THICKNESS / 2,
  );

  // 左下石英石台面
  addBox(
    rightCabinetGroup,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH,
    QUARTZ_COUNTERTOP_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    TALL_GRADE_BEAM_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 左下柜体面
  const height2 =
    TALL_GRADE_BEAM_HEIGHT -
    QUARTZ_COUNTERTOP_THICKNESS -
    BOTTOM_CHEST_DOOR_MARGING;
  addPlane(
    rightCabinetGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH,
    height2,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    TALL_GRADE_BEAM_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS - height2 / 2,
    WALL_70_WIDTH - WALL_THICKNESS - CHEST_DOOR_THICKNESS,
  );
  // 左下柜门
  const height3 =
    TALL_GRADE_BEAM_HEIGHT -
    QUARTZ_COUNTERTOP_THICKNESS -
    CHEST_DOOR_OPEN_WOUND_HEIGHT -
    BOTTOM_CHEST_DOOR_MARGING;
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH - CHEST_GAP * 2,
    height3,
    CHEST_DOOR_THICKNESS,
    (width1 - RIGHR_CABINET_RIGHT_COL_WIDTH) / 2,
    BOTTOM_CHEST_DOOR_MARGING + height3 / 2,
    WALL_70_WIDTH - WALL_THICKNESS - CHEST_DOOR_THICKNESS / 2,
  );

  const width2 = RIGHR_CABINET_RIGHT_COL_WIDTH - CHEST_DOOR_THICKNESS * 2;
  const width3 = width2 - CHEST_GAP * 2;
  const height4 =
    height1 -
    BOTTOM_CHEST_DOOR_MARGING -
    RIGHR_CABINET_RIGHT_COL_BOTTOM_DRAWER_HEIGHT -
    CHEST_DOOR_OPEN_WOUND_HEIGHT -
    CHEST_DOOR_THICKNESS * 3 -
    PRESSURE_COOKER_HEIGHT -
    ELECTRIC_COOKER_HEIGHT -
    OVEN_HEIGHT;
  const x = width1 - CHEST_DOOR_THICKNESS - width2 / 2;
  // 右上柜底板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width2,
    CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    x,
    height1 - height4 + CHEST_DOOR_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 右上柜背板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    height4,
    x,
    height1 - height4 / 2,
    0.001,
  );
  // 右上柜上板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    WALL_70_WIDTH - WALL_THICKNESS,
    x,
    height1 - CHEST_DOOR_THICKNESS - 0.001,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
    new Vector3(Math.PI / 2, 0, 0),
  );
  // 右上柜左板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    WALL_70_WIDTH - WALL_THICKNESS,
    height4,
    width1 - RIGHR_CABINET_RIGHT_COL_WIDTH + CHEST_DOOR_THICKNESS + 0.001,
    height1 - height4 / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
    new Vector3(0, Math.PI / 2, 0),
  );
  // 右上柜右板面
  addPlane(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    WALL_70_WIDTH - WALL_THICKNESS,
    height4,
    width1 - CHEST_DOOR_THICKNESS - 0.001,
    height1 - height4 / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
    new Vector3(0, -Math.PI / 2, 0),
  );
  // 右上柜门
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    height4 + CHEST_DOOR_OPEN_WOUND_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    height1 - (height4 + CHEST_DOOR_OPEN_WOUND_HEIGHT) / 2,
    WALL_70_WIDTH - WALL_THICKNESS - CHEST_DOOR_THICKNESS / 2,
  );

  const z = WALL_70_WIDTH - WALL_THICKNESS - CHEST_DOOR_THICKNESS / 2;
  // 烤箱开放格底板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    x,
    height1 - height4 - OVEN_HEIGHT - CHEST_DOOR_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 烤箱开放格外挡板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    height1 -
      height4 -
      OVEN_HEIGHT -
      CHEST_DOOR_THICKNESS +
      RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT / 2,
    z,
  );

  // 电饭煲开放格底板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    x,
    height1 -
      height4 -
      OVEN_HEIGHT -
      -CHEST_DOOR_THICKNESS -
      ELECTRIC_COOKER_HEIGHT -
      CHEST_DOOR_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 电饭煲开放格外挡板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    height1 -
      height4 -
      OVEN_HEIGHT -
      CHEST_DOOR_THICKNESS -
      ELECTRIC_COOKER_HEIGHT -
      CHEST_DOOR_THICKNESS +
      RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT / 2,
    z,
  );

  // 高压锅开放格底板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    CHEST_DOOR_THICKNESS,
    WALL_70_WIDTH - WALL_THICKNESS,
    x,
    height1 -
      height4 -
      OVEN_HEIGHT -
      CHEST_DOOR_THICKNESS -
      ELECTRIC_COOKER_HEIGHT -
      CHEST_DOOR_THICKNESS -
      PRESSURE_COOKER_HEIGHT -
      CHEST_DOOR_THICKNESS / 2,
    (WALL_70_WIDTH - WALL_THICKNESS) / 2,
  );
  // 高压锅开放格外挡板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    height1 -
      height4 -
      OVEN_HEIGHT -
      CHEST_DOOR_THICKNESS -
      ELECTRIC_COOKER_HEIGHT -
      CHEST_DOOR_THICKNESS -
      PRESSURE_COOKER_HEIGHT -
      CHEST_DOOR_THICKNESS +
      RIGHR_CABINET_RIGHT_COL_STORAGE_AREA_HEIGHT / 2,
    z,
  );

  // 右底部柜体面
  const height5 =
    BOTTOM_CHEST_DOOR_MARGING +
    RIGHR_CABINET_RIGHT_COL_BOTTOM_DRAWER_HEIGHT +
    CHEST_DOOR_OPEN_WOUND_HEIGHT;
  addPlane(
    rightCabinetGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    width2,
    height5,
    x,
    height5 / 2,
    WALL_70_WIDTH - WALL_THICKNESS - CHEST_DOOR_THICKNESS,
  );

  // 右底部柜门
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width3,
    RIGHR_CABINET_RIGHT_COL_BOTTOM_DRAWER_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    BOTTOM_CHEST_DOOR_MARGING +
      RIGHR_CABINET_RIGHT_COL_BOTTOM_DRAWER_HEIGHT / 2,
    z,
  );

  rightCabinetGroup.position.set(
    WALL_72_POSITION_X + WALL_THICKNESS / 2,
    0,
    WALL_67_POSITION_Z - WALL_THICKNESS / 2,
  );
  rightCabinetGroup.rotation.y = Math.PI / 2;
  scene.add(rightCabinetGroup);
};

// 添加左上角转角柜
const addCornerCabinet = (scene: Scene, assetManager: AssetManager) => {
  // 灰白木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  const cornerCabinetGroup = new Group();

  const height1 =
    WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT - QUARTZ_COUNTERTOP_MAX_HEIGHT;
  // 左边背板面
  addPlane(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    QUARTZ_COUNTERTOP_DEPTH,
    height1,
    0.001,
    -height1 / 2,
    QUARTZ_COUNTERTOP_DEPTH / 2,
    new Vector3(0, Math.PI / 2, 0),
  );
  // 背板面
  addPlane(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS - CHEST_GAP,
    height1,
    (CHEST_DOOR_THICKNESS + QUARTZ_COUNTERTOP_DEPTH + CHEST_GAP) / 2,
    -height1 / 2,
    0.001,
  );
  // 上顶板
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardLightMaterial as MeshStandardMaterial,
    QUARTZ_COUNTERTOP_DEPTH,
    CHEST_DOOR_THICKNESS,
    QUARTZ_COUNTERTOP_DEPTH,
    QUARTZ_COUNTERTOP_DEPTH / 2,
    -CHEST_DOOR_THICKNESS / 2,
    QUARTZ_COUNTERTOP_DEPTH / 2,
  );
  //上底面
  addPlane(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial as MeshStandardMaterial,
    QUARTZ_COUNTERTOP_DEPTH,
    QUARTZ_COUNTERTOP_DEPTH,
    QUARTZ_COUNTERTOP_DEPTH / 2,
    -CHEST_DOOR_THICKNESS - 0.01,
    QUARTZ_COUNTERTOP_DEPTH / 2,
    new Vector3(Math.PI / 2, 0, 0),
  );
  // 下底面
  addPlane(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial as MeshStandardMaterial,
    QUARTZ_COUNTERTOP_DEPTH,
    QUARTZ_COUNTERTOP_DEPTH,
    QUARTZ_COUNTERTOP_DEPTH / 2,
    -height1 + 0.01,
    QUARTZ_COUNTERTOP_DEPTH / 2,
    new Vector3(-Math.PI / 2, 0, 0),
  );
  // 前左板
  const width1 =
    QUARTZ_COUNTERTOP_DEPTH -
    CHEST_DOOR_THICKNESS -
    CORNER_CABINET_STORAGE_AREA_DEPTH -
    CHEST_GAP * 2;
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width1,
    height1,
    CHEST_DOOR_THICKNESS,
    CHEST_DOOR_THICKNESS + CHEST_GAP + width1 / 2,
    -height1 / 2,
    QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  // 前右上板
  const width2 =
    CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS - CHEST_GAP;
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    width2,
    TOP_KITCHEN_CABINET_HEIGHT,
    CHEST_DOOR_THICKNESS,
    QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS - CHEST_GAP - width2 / 2,
    -TOP_KITCHEN_CABINET_HEIGHT / 2,
    QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  // 前右下板
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    CORNER_CABINET_STORAGE_AREA_DEPTH,
    height1 - TOP_KITCHEN_CABINET_HEIGHT,
    CHEST_DOOR_THICKNESS,
    QUARTZ_COUNTERTOP_DEPTH - CORNER_CABINET_STORAGE_AREA_DEPTH / 2,
    (-TOP_KITCHEN_CABINET_HEIGHT - height1) / 2,
    QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  // 右上板
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    CHEST_DOOR_THICKNESS,
    TOP_KITCHEN_CABINET_HEIGHT,
    QUARTZ_COUNTERTOP_DEPTH - TOP_KITCHEN_CABINET_DEPTH,
    QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS / 2,
    -TOP_KITCHEN_CABINET_HEIGHT / 2,
    QUARTZ_COUNTERTOP_DEPTH -
      (QUARTZ_COUNTERTOP_DEPTH - TOP_KITCHEN_CABINET_DEPTH) / 2,
  );

  // 开放格背板
  const depth = QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS * 2;
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    CHEST_DOOR_THICKNESS,
    height1 - TOP_KITCHEN_CABINET_HEIGHT,
    depth,
    QUARTZ_COUNTERTOP_DEPTH -
      CORNER_CABINET_STORAGE_AREA_DEPTH +
      CHEST_DOOR_THICKNESS / 2,
    (-TOP_KITCHEN_CABINET_HEIGHT - height1) / 2,
    CHEST_DOOR_THICKNESS + depth / 2,
  );

  // 开放格左板
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS,
    height1 - TOP_KITCHEN_CABINET_HEIGHT,
    CHEST_DOOR_THICKNESS,
    QUARTZ_COUNTERTOP_DEPTH -
      (CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS) / 2,
    (-TOP_KITCHEN_CABINET_HEIGHT - height1) / 2,
    QUARTZ_COUNTERTOP_DEPTH - (CHEST_DOOR_THICKNESS * 3) / 2,
  );

  // 开放格右板
  addBox(
    cornerCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS,
    height1 - TOP_KITCHEN_CABINET_HEIGHT,
    CHEST_DOOR_THICKNESS,
    QUARTZ_COUNTERTOP_DEPTH -
      (CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS) / 2,
    (-TOP_KITCHEN_CABINET_HEIGHT - height1) / 2,
    (CHEST_DOOR_THICKNESS * 3) / 2,
  );

  // 开放格横板(包括上下板)
  for (let i = 0; i < CORNER_CABINET_STORAGE_AREA_BOARD_COUNT; i++) {
    addBox(
      cornerCabinetGroup,
      assetManager,
      woodBoardDarkMaterial,
      CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS,
      CHEST_DOOR_THICKNESS,
      QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS * 2,
      QUARTZ_COUNTERTOP_DEPTH -
        (CORNER_CABINET_STORAGE_AREA_DEPTH - CHEST_DOOR_THICKNESS) / 2,
      -TOP_KITCHEN_CABINET_HEIGHT -
        CHEST_DOOR_THICKNESS / 2 -
        ((height1 - TOP_KITCHEN_CABINET_HEIGHT - CHEST_DOOR_THICKNESS) /
          (CORNER_CABINET_STORAGE_AREA_BOARD_COUNT - 1)) *
          i,
      CHEST_DOOR_THICKNESS +
        (QUARTZ_COUNTERTOP_DEPTH - CHEST_DOOR_THICKNESS * 2) / 2,
    );
  }

  cornerCabinetGroup.position.set(
    WALL_35_POSITION_X - WALL_THICKNESS / 2,
    WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT,
    WALL_80_POSITION_Z - WALL_THICKNESS / 2,
  );
  cornerCabinetGroup.rotation.y = Math.PI;
  scene.add(cornerCabinetGroup);
};

// 添加上厨柜
const addTopCabinet = (scene: Scene, assetManager: AssetManager) => {
  // 灰白木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;

  // 上柜体
  const width =
    WALL_35_POSITION_X -
    WALL_71_POSITION_X -
    WALL_THICKNESS -
    QUARTZ_COUNTERTOP_DEPTH;
  const x = WALL_71_POSITION_X + WALL_THICKNESS / 2 + width / 2;
  const y =
    WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT - TOP_KITCHEN_CABINET_HEIGHT / 2;
  const z =
    WALL_80_POSITION_Z -
    WALL_THICKNESS / 2 -
    TOP_KITCHEN_CABINET_DEPTH +
    CHEST_DOOR_THICKNESS;
  const z2 =
    WALL_80_POSITION_Z -
    WALL_THICKNESS / 2 -
    (TOP_KITCHEN_CABINET_DEPTH - CHEST_DOOR_THICKNESS) / 2;
  addPlane(
    scene,
    assetManager,
    woodBoardDarkMaterial as MeshStandardMaterial,
    width,
    TOP_KITCHEN_CABINET_HEIGHT - QUARTZ_COUNTERTOP_OVERSTEP_DEPTH,
    x,
    y,
    z,
    new Vector3(0, Math.PI, 0),
  );
  addPlane(
    scene,
    assetManager,
    woodBoardLightMaterial as MeshStandardMaterial,
    width,
    TOP_KITCHEN_CABINET_DEPTH - CHEST_DOOR_THICKNESS,
    x,
    WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT,
    z2,
    new Vector3(-Math.PI / 2, 0, 0),
  );
  addPlane(
    scene,
    assetManager,
    woodBoardLightMaterial as MeshStandardMaterial,
    width,
    TOP_KITCHEN_CABINET_DEPTH - CHEST_DOOR_THICKNESS,
    x,
    WALL_HEIGHT -
      SUSPENDED_CEILING_HEIGHT -
      TOP_KITCHEN_CABINET_HEIGHT +
      QUARTZ_COUNTERTOP_OVERSTEP_DEPTH,
    z2,
    new Vector3(Math.PI / 2, 0, 0),
  );
  // 上柜门
  const z3 =
    WALL_80_POSITION_Z - WALL_THICKNESS / 2 - TOP_KITCHEN_CABINET_DEPTH;
  for (let i = 0; i < FRONT_CHEST_COUNT; i++) {
    addBox(
      scene,
      assetManager,
      woodBoardLightMaterial,
      FRONT_CHEST_DOOR_WIDTH,
      TOP_KITCHEN_CABINET_HEIGHT,
      CHEST_DOOR_THICKNESS,
      WALL_35_POSITION_X -
        WALL_THICKNESS / 2 -
        QUARTZ_COUNTERTOP_DEPTH -
        CHEST_GAP -
        FRONT_CHEST_DOOR_WIDTH / 2 -
        i * (FRONT_CHEST_DOOR_WIDTH + CHEST_GAP),
      y,
      z3,
    );
  }
};

// 添加水槽
const addWaterChannel = (scene: Scene, assetManager: AssetManager) => {
  // 哑光工业铝材质
  const whiteAluminumMaterial = assetManager.materials.get(
    "whiteAluminumMaterial",
  );
  const depth1 =
    CHEST_GAP * 2 + LEFT_CHEST_DOOR_WIDTH + QUARTZ_COUNTERTOP_THICKNESS;
  const x1 =
    WALL_35_POSITION_X -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_THICKNESS +
    WATER_CHANNEL_HEIGHT / 2;
  const width1 =
    QUARTZ_COUNTERTOP_DEPTH -
    QUARTZ_COUNTERTOP_THICKNESS -
    WATER_CHANNEL_HEIGHT;
  const x2 = WALL_35_POSITION_X - WALL_THICKNESS / 2 - width1;
  const y =
    QUARTZ_COUNTERTOP_MAX_HEIGHT -
    QUARTZ_COUNTERTOP_THICKNESS / 2 -
    WATER_CHANNEL_DEPTH / 2;
  const z = WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1;
  // 左面
  addPlane(
    scene,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    WATER_CHANNEL_HEIGHT,
    WATER_CHANNEL_DEPTH,
    x1,
    y,
    z,
  );
  // 前面
  addPlane(
    scene,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    WATER_CHANNEL_WIDTH,
    WATER_CHANNEL_DEPTH,
    x2 - WATER_CHANNEL_HEIGHT,
    y,
    z + WATER_CHANNEL_WIDTH / 2,
    new Vector3(0, Math.PI / 2, 0),
  );
  // 后面
  addPlane(
    scene,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    WATER_CHANNEL_WIDTH,
    WATER_CHANNEL_DEPTH,
    x2,
    y,
    z + WATER_CHANNEL_WIDTH / 2,
    new Vector3(0, -Math.PI / 2, 0),
  );
  // 右面
  addPlane(
    scene,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    WATER_CHANNEL_HEIGHT,
    WATER_CHANNEL_DEPTH,
    x1,
    y,
    z + WATER_CHANNEL_WIDTH,
    new Vector3(0, Math.PI, 0),
  );
  // 底面
  addPlane(
    scene,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    WATER_CHANNEL_HEIGHT,
    WATER_CHANNEL_WIDTH,
    x1,
    QUARTZ_COUNTERTOP_MAX_HEIGHT -
      QUARTZ_COUNTERTOP_THICKNESS / 2 -
      WATER_CHANNEL_DEPTH,
    z + WATER_CHANNEL_WIDTH / 2,
    new Vector3(-Math.PI / 2, 0, 0),
  );
  // 水龙头
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  const height1 = 0.08;
  const cylinder1 = new Mesh(cylinderGeometry, whiteAluminumMaterial);
  cylinder1.scale.set(BIG_WATER_PIPE_RADIUS, height1, BIG_WATER_PIPE_RADIUS);
  cylinder1.position.set(
    x2 + WATER_PIPE_MARGIN,
    QUARTZ_COUNTERTOP_MAX_HEIGHT + height1 / 2,
    z + WATER_CHANNEL_WIDTH / 2,
  );
  scene.add(cylinder1);
  const height2 = 0.2;
  const cylinder2 = new Mesh(cylinderGeometry, whiteAluminumMaterial);
  cylinder2.scale.set(
    SMALL_WATER_PIPE_RADIUS,
    height2,
    SMALL_WATER_PIPE_RADIUS,
  );
  cylinder2.position.set(
    x2 + WATER_PIPE_MARGIN,
    QUARTZ_COUNTERTOP_MAX_HEIGHT + height1 + height2 / 2,
    z + WATER_CHANNEL_WIDTH / 2,
  );
  scene.add(cylinder2);

  const torusGeometry = new TorusGeometry(
    WATER_FAUCET_RADIUS,
    SMALL_WATER_PIPE_RADIUS,
    16,
    48,
    Math.PI,
  );
  const harfTorus = new Mesh(torusGeometry, whiteAluminumMaterial);
  harfTorus.position.set(
    x2 + WATER_PIPE_MARGIN - WATER_FAUCET_RADIUS,
    QUARTZ_COUNTERTOP_MAX_HEIGHT + height1 + height2,
    z + WATER_CHANNEL_WIDTH / 2,
  );
  scene.add(harfTorus);

  const height3 = 0.06;
  const cylinderGeometry2 = new CylinderGeometry(
    SMALL_WATER_PIPE_RADIUS,
    BIG_WATER_PIPE_RADIUS,
    height3,
  );
  const cylinder3 = new Mesh(cylinderGeometry2, whiteAluminumMaterial);
  cylinder3.position.set(
    x2 + WATER_PIPE_MARGIN - WATER_FAUCET_RADIUS * 2,
    QUARTZ_COUNTERTOP_MAX_HEIGHT + height1 + height2 - height3 / 2,
    z + WATER_CHANNEL_WIDTH / 2,
  );
  scene.add(cylinder3);
};

// 添加下厨柜
const addBottomCabinet = (scene: Scene, assetManager: AssetManager) => {
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );
  // 黑色玻璃材质
  const blackGlassMaterial = assetManager.materials.get("blackGlassMaterial");

  // 左边下柜体
  const x1 =
    WALL_35_POSITION_X -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_OVERSTEP_DEPTH +
    CHEST_DOOR_THICKNESS;
  const z1 =
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + LEFT_CHEST_DOOR_WIDTH_SUM / 2;
  addPlane(
    scene,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    LEFT_CHEST_DOOR_WIDTH_SUM,
    QUARTZ_COUNTERTOP_MAX_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS,
    x1,
    QUARTZ_COUNTERTOP_MAX_HEIGHT / 2,
    z1,
    new Vector3(0, -Math.PI / 2, 0),
  );
  // 左边下柜门
  const x2 =
    WALL_35_POSITION_X -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_OVERSTEP_DEPTH +
    CHEST_DOOR_THICKNESS / 2;
  const height1 =
    QUARTZ_COUNTERTOP_MAX_HEIGHT -
    QUARTZ_COUNTERTOP_THICKNESS -
    BOTTOM_CHEST_DOOR_MARGING -
    CHEST_DOOR_OPEN_WOUND_HEIGHT;
  for (let i = 0; i < LEFT_CHEST_COUNT; i++) {
    addBox(
      scene,
      assetManager,
      woodBoardDarkMaterial,
      CHEST_DOOR_THICKNESS,
      height1,
      LEFT_CHEST_DOOR_WIDTH,
      x2,
      QUARTZ_COUNTERTOP_MAX_HEIGHT -
        QUARTZ_COUNTERTOP_THICKNESS -
        CHEST_DOOR_OPEN_WOUND_HEIGHT -
        height1 / 2,
      WALL_73_POSITION_Z +
        WALL_THICKNESS / 2 +
        CHEST_GAP +
        LEFT_CHEST_DOOR_WIDTH / 2 +
        i * (LEFT_CHEST_DOOR_WIDTH + CHEST_GAP),
    );
  }

  // 前边下柜体
  const width2 = WALL_35_POSITION_X - WALL_71_POSITION_X - WALL_THICKNESS;
  const width3 =
    FRONT_CHEST_DOOR_WIDTH * 2 + CHEST_GAP - AUTOMATIC_DISHWASHER_WIDTH; // 自动洗碗机右边剩余的宽度
  const x3 = WALL_35_POSITION_X - WALL_THICKNESS / 2 - width2 / 2;
  const z2 =
    WALL_80_POSITION_Z -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_OVERSTEP_DEPTH +
    CHEST_DOOR_THICKNESS;
  addPlane(
    scene,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    width2,
    TALL_GRADE_BEAM_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS,
    x3,
    TALL_GRADE_BEAM_HEIGHT / 2,
    z2,
    new Vector3(0, Math.PI, 0),
  );
  // 前边下柜门
  const height2 =
    TALL_GRADE_BEAM_HEIGHT -
    QUARTZ_COUNTERTOP_THICKNESS -
    BOTTOM_CHEST_DOOR_MARGING -
    CHEST_DOOR_OPEN_WOUND_HEIGHT;
  const z3 =
    WALL_80_POSITION_Z -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_OVERSTEP_DEPTH +
    CHEST_DOOR_THICKNESS / 2;
  const bowlBasketGap = 0.06; // 碗篮抽屉上下间距
  const bowlBasketWidth = FRONT_CHEST_DOOR_WIDTH * 2 + CHEST_GAP;
  const bowlBasketHeight = (height2 - bowlBasketGap) / 2;
  for (let i = 0; i < FRONT_CHEST_COUNT - 2; i++) {
    // 第2和3个门位置做碗篮抽屉
    if (i === 1) {
      addBox(
        scene,
        assetManager,
        woodBoardDarkMaterial,
        bowlBasketWidth,
        bowlBasketHeight,
        CHEST_DOOR_THICKNESS,
        WALL_35_POSITION_X -
          WALL_THICKNESS / 2 -
          QUARTZ_COUNTERTOP_DEPTH +
          QUARTZ_COUNTERTOP_OVERSTEP_DEPTH -
          CHEST_GAP * 2 -
          FRONT_CHEST_DOOR_WIDTH -
          bowlBasketWidth / 2,
        TALL_GRADE_BEAM_HEIGHT -
          QUARTZ_COUNTERTOP_THICKNESS -
          CHEST_DOOR_OPEN_WOUND_HEIGHT -
          bowlBasketHeight / 2,
        z3,
      );
      continue;
    }
    if (i === 2) {
      addBox(
        scene,
        assetManager,
        woodBoardDarkMaterial,
        bowlBasketWidth,
        bowlBasketHeight,
        CHEST_DOOR_THICKNESS,
        WALL_35_POSITION_X -
          WALL_THICKNESS / 2 -
          QUARTZ_COUNTERTOP_DEPTH +
          QUARTZ_COUNTERTOP_OVERSTEP_DEPTH -
          CHEST_GAP * 2 -
          FRONT_CHEST_DOOR_WIDTH -
          bowlBasketWidth / 2,
        TALL_GRADE_BEAM_HEIGHT -
          QUARTZ_COUNTERTOP_THICKNESS -
          CHEST_DOOR_OPEN_WOUND_HEIGHT -
          (bowlBasketHeight * 3) / 2 -
          bowlBasketGap,
        z3,
      );
      continue;
    }
    addBox(
      scene,
      assetManager,
      woodBoardDarkMaterial,
      FRONT_CHEST_DOOR_WIDTH,
      height2,
      CHEST_DOOR_THICKNESS,
      WALL_35_POSITION_X -
        WALL_THICKNESS / 2 -
        QUARTZ_COUNTERTOP_DEPTH +
        QUARTZ_COUNTERTOP_OVERSTEP_DEPTH -
        CHEST_GAP -
        FRONT_CHEST_DOOR_WIDTH / 2 -
        i * (FRONT_CHEST_DOOR_WIDTH + CHEST_GAP),
      TALL_GRADE_BEAM_HEIGHT -
        QUARTZ_COUNTERTOP_THICKNESS -
        CHEST_DOOR_OPEN_WOUND_HEIGHT -
        height2 / 2,
      z3,
    );
  }
  // 最后两个门的位置添加自动洗碗机
  const height3 = 0.1;
  const height4 = 0.04;
  const height5 = height2 - height3 - height4;
  const automaticDishwasherPositionX =
    WALL_35_POSITION_X -
    WALL_THICKNESS / 2 -
    QUARTZ_COUNTERTOP_DEPTH +
    QUARTZ_COUNTERTOP_OVERSTEP_DEPTH -
    CHEST_GAP -
    AUTOMATIC_DISHWASHER_WIDTH / 2 -
    5 * (FRONT_CHEST_DOOR_WIDTH + CHEST_GAP);
  addBox(
    scene,
    assetManager,
    blackGlassMaterial as MeshPhysicalMaterial,
    AUTOMATIC_DISHWASHER_WIDTH,
    height3,
    CHEST_DOOR_THICKNESS,
    automaticDishwasherPositionX,
    TALL_GRADE_BEAM_HEIGHT -
      QUARTZ_COUNTERTOP_THICKNESS -
      CHEST_DOOR_OPEN_WOUND_HEIGHT -
      height3 / 2,
    z3,
  );
  addBox(
    scene,
    assetManager,
    blackGlassMaterial as MeshPhysicalMaterial,
    AUTOMATIC_DISHWASHER_WIDTH,
    height5,
    CHEST_DOOR_THICKNESS,
    automaticDishwasherPositionX,
    TALL_GRADE_BEAM_HEIGHT -
      QUARTZ_COUNTERTOP_THICKNESS -
      CHEST_DOOR_OPEN_WOUND_HEIGHT -
      height3 -
      height4 -
      height5 / 2,
    z3,
  );

  // 剩余的位置装一个柜门
  addBox(
    scene,
    assetManager,
    woodBoardDarkMaterial,
    width3,
    height2,
    CHEST_DOOR_THICKNESS,
    WALL_71_POSITION_X + WALL_THICKNESS / 2 + CHEST_GAP + width3 / 2,
    TALL_GRADE_BEAM_HEIGHT -
      QUARTZ_COUNTERTOP_THICKNESS -
      CHEST_DOOR_OPEN_WOUND_HEIGHT -
      height2 / 2,
    z3,
  );

  // 添加燃气灶
  const gasStove = createGasStove(assetManager);
  gasStove.position.copy(GAS_STOVE_POSITION);
  gasStove.rotation.y = Math.PI;
  scene.add(gasStove);

  // 添加油烟机
  const kitchenHood = createKitchenHood(assetManager);
  // kitchenHood.position.set(8, 3, 5);
  kitchenHood.position.copy(KITCHEN_HOOD_POSITION);
  kitchenHood.rotation.y = Math.PI;
  scene.add(kitchenHood);
};

// 添加石英石台面
const addQuartzCountertop = (scene: Scene, assetManager: AssetManager) => {
  // 石英石材质
  const quartzMaterial = assetManager.materials.get("quartzMaterial");
  // 左边台面
  const width1 = QUARTZ_COUNTERTOP_DEPTH - QUARTZ_COUNTERTOP_THICKNESS / 2;
  const depth1 =
    CHEST_GAP * 2 + LEFT_CHEST_DOOR_WIDTH + QUARTZ_COUNTERTOP_THICKNESS;
  const depth2 = WALL_80_POSITION_Z - WALL_73_POSITION_Z - WALL_THICKNESS;
  const x1 = WALL_35_POSITION_X - WALL_THICKNESS / 2 - width1 / 2;
  const y = QUARTZ_COUNTERTOP_MAX_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS / 4;
  addBox(
    scene,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    width1,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    depth1,
    x1,
    y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1 / 2,
  );
  addBox(
    scene,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    WATER_CHANNEL_WIDTH,
    WALL_35_POSITION_X -
      WALL_THICKNESS / 2 -
      width1 +
      QUARTZ_COUNTERTOP_THICKNESS / 4,
    y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1 + WATER_CHANNEL_WIDTH / 2,
  );
  const width2 =
    QUARTZ_COUNTERTOP_DEPTH -
    QUARTZ_COUNTERTOP_THICKNESS -
    WATER_CHANNEL_HEIGHT;
  addBox(
    scene,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    width2,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    WATER_CHANNEL_WIDTH,
    WALL_35_POSITION_X - WALL_THICKNESS / 2 - width2 / 2,
    y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1 + WATER_CHANNEL_WIDTH / 2,
  );
  const depth3 =
    WALL_80_POSITION_Z -
    WALL_73_POSITION_Z -
    WALL_THICKNESS -
    depth1 -
    WATER_CHANNEL_WIDTH;
  addBox(
    scene,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    width1,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    depth3,
    x1,
    y,
    WALL_80_POSITION_Z - WALL_THICKNESS / 2 - depth3 / 2,
  );
  // 左边水槽开口的四个圆角
  const x2 = WALL_35_POSITION_X - WALL_THICKNESS / 2 - width2;
  const curvedSurfaceRightAngledTriangularPrismGeometry =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      WATER_CHANNEL_RADIUS,
      QUARTZ_COUNTERTOP_THICKNESS / 2,
    );
  const curvedSurfaceRightAngledTriangularPrism = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry,
    quartzMaterial,
  );
  const curvedSurfaceRightAngledTriangularPrism2 =
    curvedSurfaceRightAngledTriangularPrism.clone();
  const curvedSurfaceRightAngledTriangularPrism3 =
    curvedSurfaceRightAngledTriangularPrism.clone();
  const curvedSurfaceRightAngledTriangularPrism4 =
    curvedSurfaceRightAngledTriangularPrism.clone();

  curvedSurfaceRightAngledTriangularPrism.rotation.x = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism.rotation.z = Math.PI;
  curvedSurfaceRightAngledTriangularPrism.position.set(
    x2,
    y - QUARTZ_COUNTERTOP_THICKNESS / 4,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1,
  );
  scene.add(curvedSurfaceRightAngledTriangularPrism);

  curvedSurfaceRightAngledTriangularPrism2.rotation.x = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism2.rotation.z = Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism2.position.set(
    x2,
    y - QUARTZ_COUNTERTOP_THICKNESS / 4,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1 + WATER_CHANNEL_WIDTH,
  );
  scene.add(curvedSurfaceRightAngledTriangularPrism2);

  curvedSurfaceRightAngledTriangularPrism3.rotation.x = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism3.rotation.z = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism3.position.set(
    x2 - WATER_CHANNEL_HEIGHT,
    y - QUARTZ_COUNTERTOP_THICKNESS / 4,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1,
  );
  scene.add(curvedSurfaceRightAngledTriangularPrism3);

  curvedSurfaceRightAngledTriangularPrism4.rotation.x = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism4.position.set(
    x2 - WATER_CHANNEL_HEIGHT,
    y - QUARTZ_COUNTERTOP_THICKNESS / 4,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth1 + WATER_CHANNEL_WIDTH,
  );
  scene.add(curvedSurfaceRightAngledTriangularPrism4);

  const width3 = QUARTZ_COUNTERTOP_THICKNESS / 2 + QUARTZ_COUNTERTOP_RADIUS;
  const roundedBoxGeometry1 = new RoundedBoxGeometry(
    width3,
    QUARTZ_COUNTERTOP_THICKNESS,
    depth2,
    8,
    QUARTZ_COUNTERTOP_RADIUS,
  );
  const quartzCountertop1 = new Mesh(roundedBoxGeometry1, quartzMaterial);
  quartzCountertop1.position.set(
    WALL_35_POSITION_X -
      WALL_THICKNESS / 2 -
      QUARTZ_COUNTERTOP_DEPTH +
      width3 / 2,
    QUARTZ_COUNTERTOP_MAX_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS / 2,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + depth2 / 2,
  );
  scene.add(quartzCountertop1);
  // 前边台面
  const width11 = WALL_35_POSITION_X - WALL_71_POSITION_X - WALL_THICKNESS;
  const depth11 = QUARTZ_COUNTERTOP_DEPTH - QUARTZ_COUNTERTOP_THICKNESS / 2;
  const x3 = WALL_35_POSITION_X - WALL_THICKNESS / 2 - width11 / 2;
  const z2 = WALL_80_POSITION_Z - WALL_THICKNESS / 2 - depth11 / 2;
  addBox(
    scene,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    width11,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    depth11,
    x3,
    TALL_GRADE_BEAM_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS / 4,
    z2,
  );
  const roundedBoxGeometry2 = new RoundedBoxGeometry(
    width11,
    QUARTZ_COUNTERTOP_THICKNESS,
    width2,
    8,
    QUARTZ_COUNTERTOP_RADIUS,
  );
  const quartzCountertop2 = new Mesh(roundedBoxGeometry2, quartzMaterial);
  quartzCountertop2.position.set(
    x3,
    TALL_GRADE_BEAM_HEIGHT - QUARTZ_COUNTERTOP_THICKNESS / 2,
    WALL_80_POSITION_Z -
      WALL_THICKNESS / 2 -
      QUARTZ_COUNTERTOP_DEPTH +
      width2 / 2,
  );
  scene.add(quartzCountertop2);
  // 高低台面连接面
  const height =
    QUARTZ_COUNTERTOP_MAX_HEIGHT -
    TALL_GRADE_BEAM_HEIGHT -
    QUARTZ_COUNTERTOP_THICKNESS;
  addBox(
    scene,
    assetManager,
    quartzMaterial as MeshPhysicalMaterial,
    QUARTZ_COUNTERTOP_THICKNESS / 2,
    height,
    QUARTZ_COUNTERTOP_DEPTH,
    WALL_35_POSITION_X -
      WALL_THICKNESS / 2 -
      QUARTZ_COUNTERTOP_DEPTH +
      QUARTZ_COUNTERTOP_OVERSTEP_DEPTH +
      QUARTZ_COUNTERTOP_THICKNESS / 4,
    TALL_GRADE_BEAM_HEIGHT + height / 2,
    WALL_80_POSITION_Z - WALL_THICKNESS / 2 - QUARTZ_COUNTERTOP_DEPTH / 2,
  );
};

// 添加瓷砖
const addTile = (scene: Scene, assetManager: AssetManager) => {
  // 贴74号墙瓷砖
  const wallTile1 = createTileToWall(assetManager, WALL_74_WIDTH, WALL_HEIGHT);
  wallTile1.position.set(
    WALL_74_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + 0.001,
  );
  scene.add(wallTile1);
  // 贴76号墙瓷砖
  const x = WALL_35_POSITION_X - WALL_THICKNESS / 2 - 0.001;
  const wallTile2 = createTileToWall(assetManager, WALL_76_WIDTH, WALL_HEIGHT);
  wallTile2.position.set(x, WALL_1_POSITION_Y, WALL_76_POSITION_Z);
  wallTile2.rotation.y = Math.PI / 2;
  scene.add(wallTile2);
  // 贴77号墙瓷砖
  const wallTile3 = createTileToWall(
    assetManager,
    WALL_15_WIDTH,
    TALL_GRADE_BEAM_HEIGHT,
  );
  wallTile3.position.set(x, TALL_GRADE_BEAM_POSITION_Y, WALL_77_POSITION_Z);
  wallTile3.rotation.y = Math.PI / 2;
  scene.add(wallTile3);
  // 贴78号墙瓷砖
  const wallTile4 = createTileToWall(assetManager, WALL_15_WIDTH, BEAM_HEIGHT);
  wallTile4.position.set(x, BEAM_POSITION_Y, WALL_77_POSITION_Z);
  wallTile4.rotation.y = Math.PI / 2;
  scene.add(wallTile4);
  // 贴79号墙瓷砖
  const wallTile5 = createTileToWall(assetManager, WALL_79_WIDTH, WALL_HEIGHT);
  wallTile5.position.set(x, WALL_1_POSITION_Y, WALL_79_POSITION_Z);
  wallTile5.rotation.y = Math.PI / 2;
  scene.add(wallTile5);
  // 贴80号墙瓷砖
  const wallTile6 = createTileToWall(assetManager, WALL_80_WIDTH, WALL_HEIGHT);
  wallTile6.position.set(
    WALL_80_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_80_POSITION_Z - WALL_THICKNESS / 2 - 0.001,
  );
  wallTile6.rotation.y = Math.PI;
  scene.add(wallTile6);
  // 贴75号墙瓷砖
  const wallTile7 = createTileToWall(assetManager, WALL_75_WIDTH, BEAM_HEIGHT);
  wallTile7.position.set(
    WALL_75_POSITION_X,
    BEAM_POSITION_Y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + 0.001,
  );
  scene.add(wallTile7);
  // 贴73号墙瓷砖
  const wallTile8 = createTileToWall(assetManager, WALL_70_WIDTH, WALL_HEIGHT);
  wallTile8.position.set(
    WALL_73_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + 0.001,
  );
  scene.add(wallTile8);
  // 贴71号墙瓷砖
  const wallTile9 = createTileToWall(
    assetManager,
    WALL_71_WIDTH + WALL_THICKNESS,
    WALL_HEIGHT,
  );
  wallTile9.position.set(
    WALL_71_POSITION_X + WALL_THICKNESS / 2 + 0.001,
    WALL_1_POSITION_Y,
    WALL_71_POSITION_Z - WALL_THICKNESS / 2,
  );
  wallTile9.rotation.y = -Math.PI / 2;
  scene.add(wallTile9);
};

const createTileToWall = (
  assetManager: AssetManager,
  width: number,
  height: number,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const tileMaterial = assetManager.materials.get("tileMaterial");
  const wallTileGroup = new Group();
  const rows = Math.ceil(height / (TILE_SIZE + GAP_SIZE));
  const cols = Math.ceil(width / (TILE_SIZE + GAP_SIZE));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let tileWidth = TILE_SIZE;
      let tileHeight = TILE_SIZE;
      if (col >= cols - 1) {
        tileWidth = width % (TILE_SIZE + GAP_SIZE);
      }
      if (row >= rows - 1) {
        tileHeight = height % (TILE_SIZE + GAP_SIZE);
      }
      const tile = new Mesh(planeGeometry, tileMaterial);
      tile.scale.set(tileWidth, tileHeight);
      tile.position.set(
        -width / 2 + tileWidth / 2 + col * (TILE_SIZE + GAP_SIZE),
        height / 2 - (tileHeight / 2 + row * (TILE_SIZE + GAP_SIZE)),
        0,
      );
      // tile.receiveShadow = true;
      wallTileGroup.add(tile);
    }
  }

  return wallTileGroup;
};

export default renovateKitchen;
