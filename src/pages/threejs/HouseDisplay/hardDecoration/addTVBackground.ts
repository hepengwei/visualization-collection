/**
 * 添加电视背景
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshPhysicalMaterial,
  Mesh,
  Group,
  Vector3,
  Object3D,
  FrontSide,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { addBox, addPlane, addLightingStrip } from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  SUSPENDED_CEILING_HEIGHT,
  WALL_55_WIDTH,
  WALL_56_WIDTH,
  WALL_55_POSITION_X,
  WALL_55_POSITION_Z,
} from "./addHouseStructure";

const TV_BACKGROUND_WIDTH = WALL_55_WIDTH - WALL_THICKNESS * 3; // 电视背景的总宽度
const TV_BACKGROUND_DEPTH = WALL_56_WIDTH; // 电视背景的总深度(不包括黑色玻璃门)
const TV_BACKGROUND_HEIGHT = WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT; // 电视背景的总高度
const TV_BACKGROUND_POSITON = new Vector3(
  WALL_55_POSITION_X -
    WALL_55_WIDTH / 2 +
    WALL_THICKNESS * 3 +
    TV_BACKGROUND_WIDTH / 2,
  0,
  WALL_55_POSITION_Z - WALL_THICKNESS / 2,
); // 电视背景的位置
const BOARD_THICKNESS = 0.04; // 木板的厚度
// 木格栅
const WOODEN_GRATING_BACK_DEPTH = 0.01; // 深色背板的深度
const PROTUBERANT_WOODEN_STRIP_WIDTH = 0.02; // 凸起木条的宽度
const PROTUBERANT_WOODEN_STRIP_DEPTH = 0.02; // 凸起木条的深度
const PROTUBERANT_WOODEN_STRIP_GAP = 0.01; // 凸起木条的间距
const PROTUBERANT_WOODEN_STRIP_COUNT = 30; // 凸起木条的列数
const WOODEN_GRATING_WIDTH =
  PROTUBERANT_WOODEN_STRIP_WIDTH * PROTUBERANT_WOODEN_STRIP_COUNT +
  PROTUBERANT_WOODEN_STRIP_GAP * (PROTUBERANT_WOODEN_STRIP_COUNT - 1);
const LIGHTING_STRIP_HEIGHT = 0.04; // 发光灯带的高
// 右边柜
const RIGHT_CABINET_WIDTH = 0.8; // 右边柜的宽度
const CHEST_COUNT = 5; // 右边柜子格数
const GLASS_THICKNESS = 0.02; // 黑色玻璃厚度
// 落地柜
const BASE_CABINET_WIDTH = TV_BACKGROUND_WIDTH - RIGHT_CABINET_WIDTH - 0.1; // 落地柜的宽度
const BASE_CABINET_HEIGHT = 0.4; // 落地柜的总高度
const BASE_CABINET_TOP_THICKNESS = 0.07; // 落地柜上面板子的厚度
const CHEST_GAP = 0.02; // 柜子之间的缝隙
const DRAWER_COUNT = 4; // 抽屉数量

const addTVBackground = (
  scene: Scene,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const TVBackground = createTVBackground(assetManager);
  TVBackground.name = "电视背景";
  pointerControlsIntersetObjectsRef.current.push(TVBackground);
  TVBackground.rotation.y = Math.PI;
  TVBackground.position.copy(TV_BACKGROUND_POSITON);
  scene.add(TVBackground);
};

// 创建电视背景
const createTVBackground = (assetManager: AssetManager) => {
  const TVBackgroundGroup = new Group();
  // 木格栅
  const woodenGrating = createWoodenGrating(assetManager);
  woodenGrating.position.set(
    -TV_BACKGROUND_WIDTH / 2 + WOODEN_GRATING_WIDTH / 2,
    TV_BACKGROUND_HEIGHT / 2,
    PROTUBERANT_WOODEN_STRIP_DEPTH / 2,
  );
  TVBackgroundGroup.add(woodenGrating);
  // 右边柜
  const rightCabinet = createRightCabinet(assetManager);
  rightCabinet.position.set(
    TV_BACKGROUND_WIDTH / 2 - RIGHT_CABINET_WIDTH / 2,
    TV_BACKGROUND_HEIGHT / 2,
    TV_BACKGROUND_DEPTH / 2,
  );
  TVBackgroundGroup.add(rightCabinet);
  // 落地柜
  const baseCabinet = createBaseCabinet(assetManager);
  baseCabinet.position.set(
    TV_BACKGROUND_WIDTH / 2 - RIGHT_CABINET_WIDTH - BASE_CABINET_WIDTH / 2,
    BASE_CABINET_HEIGHT / 2,
    TV_BACKGROUND_DEPTH / 2,
  );
  TVBackgroundGroup.add(baseCabinet);

  return TVBackgroundGroup;
};

// 创建木格栅
const createWoodenGrating = (assetManager: AssetManager) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;

  const woodenGratingGroup = new Group();

  // 背板
  addBox(
    woodenGratingGroup,
    assetManager,
    woodBoardDarkMaterial,
    WOODEN_GRATING_WIDTH,
    TV_BACKGROUND_HEIGHT,
    WOODEN_GRATING_BACK_DEPTH,
    0,
    0,
    -(WOODEN_GRATING_BACK_DEPTH + PROTUBERANT_WOODEN_STRIP_DEPTH) / 2 +
      WOODEN_GRATING_BACK_DEPTH / 2,
  );
  // 所有竖木条
  for (let i = 0; i < PROTUBERANT_WOODEN_STRIP_COUNT; i++) {
    const x =
      -WOODEN_GRATING_WIDTH / 2 +
      PROTUBERANT_WOODEN_STRIP_WIDTH / 2 +
      (PROTUBERANT_WOODEN_STRIP_WIDTH + PROTUBERANT_WOODEN_STRIP_GAP) * i;
    addBox(
      woodenGratingGroup,
      assetManager,
      woodBoardLightMaterial,
      PROTUBERANT_WOODEN_STRIP_WIDTH,
      TV_BACKGROUND_HEIGHT,
      PROTUBERANT_WOODEN_STRIP_DEPTH,
      x,
      0,
      -(WOODEN_GRATING_BACK_DEPTH + PROTUBERANT_WOODEN_STRIP_DEPTH) / 2 +
        WOODEN_GRATING_BACK_DEPTH +
        PROTUBERANT_WOODEN_STRIP_DEPTH / 2,
    );
  }

  return woodenGratingGroup;
};

// 创建右边柜
const createRightCabinet = (assetManager: AssetManager) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  const blackGlassMaterial = assetManager.materials.get(
    "blackGlassMaterial",
  ) as MeshPhysicalMaterial;

  const rightCabinetGroup = new Group();

  // 左板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    TV_BACKGROUND_HEIGHT,
    TV_BACKGROUND_DEPTH,
    -RIGHT_CABINET_WIDTH / 2 + BOARD_THICKNESS / 2,
    0,
    0,
  );
  // 右板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    TV_BACKGROUND_HEIGHT,
    TV_BACKGROUND_DEPTH,
    RIGHT_CABINET_WIDTH / 2 - BOARD_THICKNESS / 2,
    0,
    0,
  );
  // 背板
  addBox(
    rightCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    RIGHT_CABINET_WIDTH - BOARD_THICKNESS * 2,
    TV_BACKGROUND_HEIGHT,
    BOARD_THICKNESS,
    0,
    0,
    -TV_BACKGROUND_DEPTH / 2 + BOARD_THICKNESS / 2,
  );

  // 所有横板(包括顶板和底板)
  for (let i = 0; i < CHEST_COUNT + 1; i++) {
    const y =
      TV_BACKGROUND_HEIGHT / 2 -
      BOARD_THICKNESS / 2 -
      ((TV_BACKGROUND_HEIGHT - BOARD_THICKNESS) / CHEST_COUNT) * i;
    addBox(
      rightCabinetGroup,
      assetManager,
      woodBoardLightMaterial,
      RIGHT_CABINET_WIDTH - BOARD_THICKNESS * 2,
      BOARD_THICKNESS,
      TV_BACKGROUND_DEPTH - BOARD_THICKNESS,
      0,
      y,
      BOARD_THICKNESS / 2,
    );
    if (i < CHEST_COUNT) {
      // 添加灯带
      addLightingStrip(
        rightCabinetGroup,
        assetManager,
        RIGHT_CABINET_WIDTH - BOARD_THICKNESS * 2,
        LIGHTING_STRIP_HEIGHT,
        0,
        y - BOARD_THICKNESS / 2 - 0.001,
        -TV_BACKGROUND_DEPTH / 2 +
          BOARD_THICKNESS +
          LIGHTING_STRIP_HEIGHT / 2 +
          0.1,
        undefined,
        5 * Math.PI,
      );
    }
  }

  // 黑色玻璃门
  addBox(
    rightCabinetGroup,
    assetManager,
    blackGlassMaterial,
    RIGHT_CABINET_WIDTH,
    TV_BACKGROUND_HEIGHT,
    GLASS_THICKNESS,
    0,
    0,
    TV_BACKGROUND_DEPTH / 2 + GLASS_THICKNESS / 2,
  );

  return rightCabinetGroup;
};

// 创建落地柜
const createBaseCabinet = (assetManager: AssetManager) => {
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  // 创建深黑色面板材质（不受光影响）
  const blackPanelMaterial = new MeshPhysicalMaterial({
    color: 0x323c44,
    emissive: 0x323c44, // 自发光颜色
    emissiveIntensity: 1.0, // 自发光强度，使其不受环境光影响变灰
    roughness: 0.5,
    metalness: 0.0,
    side: FrontSide,
    polygonOffset: true, // 启用深度偏移，防止与地砖产生Z-fighting闪烁
    polygonOffsetFactor: 0.4,
    polygonOffsetUnits: 0.4,
  });
  assetManager.materials.set("blackPanelMaterial", blackPanelMaterial);

  const baseCabinetGroup = new Group();

  addBox(
    baseCabinetGroup,
    assetManager,
    woodBoardDarkMaterial,
    BASE_CABINET_WIDTH,
    BASE_CABINET_HEIGHT - BASE_CABINET_TOP_THICKNESS / 2,
    TV_BACKGROUND_DEPTH,
    0,
    -BASE_CABINET_TOP_THICKNESS / 4,
    0,
  );

  const roundedBoxGeometry = new RoundedBoxGeometry(
    BASE_CABINET_WIDTH,
    BASE_CABINET_TOP_THICKNESS,
    TV_BACKGROUND_DEPTH,
    32,
    BASE_CABINET_TOP_THICKNESS / 2,
  );
  const topBoard = new Mesh(roundedBoxGeometry, woodBoardDarkMaterial);
  topBoard.position.set(
    0,
    BASE_CABINET_HEIGHT / 2 - BASE_CABINET_TOP_THICKNESS / 2,
    0,
  );
  baseCabinetGroup.add(topBoard);

  addPlane(
    baseCabinetGroup,
    assetManager,
    blackPanelMaterial,
    BASE_CABINET_WIDTH,
    CHEST_GAP,
    0,
    BASE_CABINET_HEIGHT / 2 - BASE_CABINET_TOP_THICKNESS / 2 - CHEST_GAP / 2,
    TV_BACKGROUND_DEPTH / 2 + 0.01,
  );

  // 所有抽屉竖线
  for (let i = 1; i < DRAWER_COUNT; i++) {
    const x = -BASE_CABINET_WIDTH / 2 + (BASE_CABINET_WIDTH / DRAWER_COUNT) * i;
    addPlane(
      baseCabinetGroup,
      assetManager,
      blackPanelMaterial,
      CHEST_GAP,
      BASE_CABINET_HEIGHT - BASE_CABINET_TOP_THICKNESS / 2,
      x,
      -BASE_CABINET_TOP_THICKNESS / 4,
      TV_BACKGROUND_DEPTH / 2 + 0.01,
    );
  }

  return baseCabinetGroup;
};

export default addTVBackground;
