/**
 * 添加餐边柜
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshPhysicalMaterial,
  Mesh,
  Group,
  Vector3,
  Object3D,
  RectAreaLight,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";

const SIDEBOARD_POSITON = new Vector3(10.2, 0, -6.25); // 餐边柜的位置
const CHEST_COL_COUNT = 10; // 柜子的列数,保证为偶数
const SIDEBOARD_WIDTH = 8.6; // 餐边柜柜体的总宽（不包含左右两边多出的部分）
const CHEST_GAP = 0.012; // 柜子之间的缝隙
const SIDEBOARD_HEIGHT = 4; // 餐边柜的总高
const SIDEBOARD_DEPTH = 0.62; // 餐边柜的总深度（不包含左右两边多出的部分）
const BOARD_THICKNESS = 0.03; // 木板的厚度
const BOARD_COATING_THICKNESS = 0.002; // 木板深灰色涂层的厚度
const CHEST_DOOR_THICKNESS = 0.01; // 柜门和抽屉门的厚度
const TOP_CHEST_HEIGHT = 1.2; // 第一层柜子的高度
const TOP_STORAGE_AREA_HEIGHT = 0.3; // 第二层暗格置物区的高度（空白，深灰）
const TOP_STORAGE_AREA_DEPTH = 0.46; // 第二层暗格置物区的深度
const STORAGE_AREA_HEIGHT = 0.7; // 第三层置物区的高度（空白，深灰）
const LIGHTING_STRIP_HEIGHT = 0.04; // 发光灯带的高
const DRAWER_WIDTH =
  (SIDEBOARD_WIDTH -
    BOARD_THICKNESS * 2 -
    CHEST_GAP * (CHEST_COL_COUNT / 2 + 1)) /
  (CHEST_COL_COUNT / 2);
const DRAWER_HEIGHT = 0.4; // 第四层抽屉的高度
// 第五层最下面柜子的高度
const BOTTOM_CHEST_HEIGHT =
  SIDEBOARD_HEIGHT -
  BOARD_THICKNESS -
  CHEST_GAP -
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
  CHEST_GAP * 2 -
  BOARD_THICKNESS;
// 柜子宽度
const CHEST_WIDTH =
  (SIDEBOARD_WIDTH - BOARD_THICKNESS * 2 - CHEST_GAP * (CHEST_COL_COUNT + 1)) /
  CHEST_COL_COUNT;
// 暗格宽度
const SECRET_COMPARTENT_WIDTH =
  (SIDEBOARD_WIDTH -
    BOARD_THICKNESS * 2 -
    BOARD_THICKNESS * (CHEST_COL_COUNT / 2 - 1)) /
  (CHEST_COL_COUNT / 2);

export const addSideboard = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const sideboard = createSideboard(assetManager);
  sideboard.name = "餐边柜";
  mouseRaycasterIntersectObjectsRef.current.push(sideboard);
  pointerControlsIntersetObjectsRef.current.push(sideboard);
  sideboard.position.copy(SIDEBOARD_POSITON);
  scene.add(sideboard);
};

// 创建餐边柜
const createSideboard = (assetManager: AssetManager) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;

  const sideboardGroup = new Group();

  /** 外壳部分*/
  // 左板
  addBoard(
    assetManager,
    BOARD_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    (BOARD_THICKNESS - SIDEBOARD_WIDTH) / 2,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardLightMaterial,
  );
  // 左板右面的深灰色涂层
  addBoard(
    assetManager,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    BOARD_THICKNESS + (BOARD_COATING_THICKNESS - SIDEBOARD_WIDTH) / 2,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  // 右板
  addBoard(
    assetManager,
    BOARD_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    (SIDEBOARD_WIDTH - BOARD_THICKNESS) / 2,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardLightMaterial,
  );
  // 右板左面的深灰色涂层
  addBoard(
    assetManager,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    (SIDEBOARD_WIDTH - BOARD_COATING_THICKNESS) / 2 - BOARD_THICKNESS,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  // 顶板
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT - BOARD_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardLightMaterial,
  );
  // 顶板底面的深灰色涂层
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT - BOARD_THICKNESS - BOARD_COATING_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  // 底板
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    BOARD_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardLightMaterial,
  );
  // 底板上面的深灰色涂层
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    BOARD_THICKNESS + BOARD_COATING_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  // 背板
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH,
    SIDEBOARD_HEIGHT,
    BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT / 2,
    BOARD_THICKNESS / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );

  /**餐边柜里面每层横向隔板*/
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
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
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardLightMaterial,
  );
  // 第四层横板上面的深灰色涂层
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      DRAWER_HEIGHT -
      CHEST_GAP -
      BOARD_COATING_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );

  /**第二层暗格置物区和第三层置物区的深灰色背板*/
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    TOP_STORAGE_AREA_HEIGHT,
    BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT / 2,
    BOARD_THICKNESS,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  addBoard(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    STORAGE_AREA_HEIGHT,
    BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      STORAGE_AREA_HEIGHT / 2,
    BOARD_THICKNESS,
    sideboardGroup,
    woodBoardDarkMaterial,
  );

  /**第一层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x = BOARD_THICKNESS + CHEST_GAP + CHEST_WIDTH / 2 - SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBoard(
      assetManager,
      CHEST_WIDTH,
      TOP_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      SIDEBOARD_HEIGHT - BOARD_THICKNESS - CHEST_GAP - TOP_CHEST_HEIGHT / 2,
      SIDEBOARD_DEPTH - BOARD_THICKNESS / 2,
      sideboardGroup,
      woodBoardLightMaterial,
    );
  }

  /**第二层暗格置物区的竖向隔板*/
  for (let i = 0; i < CHEST_COL_COUNT / 2 - 1; i++) {
    let x =
      BOARD_THICKNESS +
      SECRET_COMPARTENT_WIDTH +
      BOARD_THICKNESS / 2 -
      SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (SECRET_COMPARTENT_WIDTH + BOARD_THICKNESS);
    }
    addBoard(
      assetManager,
      BOARD_THICKNESS,
      TOP_STORAGE_AREA_HEIGHT,
      TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
      x,
      SIDEBOARD_HEIGHT -
        BOARD_THICKNESS -
        CHEST_GAP -
        TOP_CHEST_HEIGHT -
        CHEST_GAP -
        BOARD_THICKNESS -
        TOP_STORAGE_AREA_HEIGHT / 2,
      (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
      sideboardGroup,
      woodBoardDarkMaterial,
    );
  }

  /**第二层和第三层置物区的两边竖向隔板*/
  const height =
    TOP_STORAGE_AREA_HEIGHT + BOARD_THICKNESS + STORAGE_AREA_HEIGHT;
  const positionY =
    SIDEBOARD_HEIGHT -
    BOARD_THICKNESS -
    CHEST_GAP -
    TOP_CHEST_HEIGHT -
    CHEST_GAP -
    BOARD_THICKNESS -
    height / 2;
  addBoard(
    assetManager,
    BOARD_THICKNESS,
    height,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    BOARD_THICKNESS + BOARD_THICKNESS / 2 - SIDEBOARD_WIDTH / 2,
    positionY,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );
  addBoard(
    assetManager,
    BOARD_THICKNESS,
    height,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    SIDEBOARD_WIDTH / 2 - BOARD_THICKNESS - BOARD_THICKNESS / 2,
    positionY,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
    sideboardGroup,
    woodBoardDarkMaterial,
  );

  /**第二层和第三层置物区添加发光灯带*/
  addLightingStrip(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    LIGHTING_STRIP_HEIGHT,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      0.01,
    BOARD_THICKNESS + LIGHTING_STRIP_HEIGHT / 2 + 0.02,
    sideboardGroup,
  );
  addLightingStrip(
    assetManager,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    LIGHTING_STRIP_HEIGHT,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS -
      TOP_STORAGE_AREA_HEIGHT -
      BOARD_THICKNESS -
      0.01,
    BOARD_THICKNESS + LIGHTING_STRIP_HEIGHT / 2 + 0.02,
    sideboardGroup,
  );

  /**第四层抽屉门*/
  for (let i = 0; i < CHEST_COL_COUNT / 2; i++) {
    let x =
      BOARD_THICKNESS + CHEST_GAP + DRAWER_WIDTH / 2 - SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + DRAWER_WIDTH);
    }
    addBoard(
      assetManager,
      DRAWER_WIDTH,
      DRAWER_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOARD_THICKNESS +
        CHEST_GAP +
        BOTTOM_CHEST_HEIGHT +
        CHEST_GAP +
        BOARD_THICKNESS +
        CHEST_GAP +
        DRAWER_HEIGHT / 2,
      SIDEBOARD_DEPTH - BOARD_THICKNESS / 2,
      sideboardGroup,
      woodBoardLightMaterial,
    );
  }

  /**第五层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x = BOARD_THICKNESS + CHEST_GAP + CHEST_WIDTH / 2 - SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBoard(
      assetManager,
      CHEST_WIDTH,
      BOTTOM_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOARD_THICKNESS + CHEST_GAP + BOTTOM_CHEST_HEIGHT / 2,
      SIDEBOARD_DEPTH - BOARD_THICKNESS / 2,
      sideboardGroup,
      woodBoardLightMaterial,
    );
  }

  return sideboardGroup;
};

// 创建并添加木板
const addBoard = (
  assetManager: AssetManager,
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
  parent: Group,
  mat?: MeshPhysicalMaterial,
) => {
  if (!mat) return;
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const m = new Mesh(boxGeometry, mat);
  m.scale.set(w, h, d);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
};

// 创建并添加发光灯带
const addLightingStrip = (
  assetManager: AssetManager,
  w: number,
  h: number,
  x: number,
  y: number,
  z: number,
  parent: Group,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const whitePanelMaterial = assetManager.materials.get("whitePanelMaterial");
  const lightingStrip = new Mesh(planeGeometry, whitePanelMaterial);
  lightingStrip.scale.set(w, h);
  lightingStrip.position.set(x, y, z);
  lightingStrip.rotation.x = Math.PI / 2; // 面向地面
  lightingStrip.layers.enable(1); // 为了让灯带的光能够单独增强
  parent.add(lightingStrip);
  // 添加发光灯带的光源
  addLightingStripLight(w, h, x, y, z, parent);
};

// 添加发光灯带的光源
const addLightingStripLight = (
  w: number,
  h: number,
  x: number,
  y: number,
  z: number,
  parent: Group,
) => {
  const light = new RectAreaLight(
    0xffffff, // 颜色（可以随视频平均色动态改）
    2 * Math.PI, //  第二个参数intensity在v0.155版本后必须要乘以Math.PI
    w,
    h,
  );
  light.position.set(x, y - 0.01, z);
  light.rotation.x = -Math.PI / 2; // 面向地面
  parent.add(light);
};
