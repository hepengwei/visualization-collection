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
  Color,
  DoubleSide,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import addVase from "./addVase";
import {
  addBoard,
  addLightingStrip,
  addRectAreaLight,
  addLightingRoundLight,
} from "../utils";

const SIDEBOARD_POSITON = new Vector3(10.1, 0, -6.25); // 餐边柜的位置
const CHEST_COL_COUNT = 10; // 柜子的列数,保证为偶数
const SIDEBOARD_WIDTH = 8.8; // 餐边柜柜体的总宽（不包含左右两边多出的部分）
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
// 第四层抽屉的宽度
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
const DECORATIVE_BAFFLE_PLATE_THICKNESS = 0.2; // 装饰挡板的厚度
const DECORATIVE_BAFFLE_BACK_PLATE_WIDTH = SIDEBOARD_DEPTH - BOARD_THICKNESS; // 装饰挡板的背板宽度
const DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT = 1; // 装饰挡板上方高度
const DECORATIVE_BAFFLE_PLATE_MIDDLE_HEIGHT = 1.6; // 装饰挡板中间高度
// 装饰挡板下方高度
const DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT =
  SIDEBOARD_HEIGHT -
  DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT -
  DECORATIVE_BAFFLE_PLATE_MIDDLE_HEIGHT;
const GLASS_WIDTH = 0.4; // 装饰挡板中间玻璃宽度
const GLASS_HEIGHT = 2.8; // 装饰挡板中间玻璃高度
const GLASS_THICKNESS = 0.06; // 装饰挡板中间玻璃厚度

const addSideboard = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  // 艺术玻璃材质
  const frostedArtGlassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.0,
    roughness: 0.35,
    // —— 半透明核心 ——
    transmission: 0.85,
    thickness: 0.9,
    ior: 1.52,
    attenuationColor: new Color(0x4f9bd9),
    attenuationDistance: 0.55,
    dispersion: 0.12,
    // —— 表面质感 ——
    clearcoat: 0.65,
    clearcoatRoughness: 0.22,
    specularIntensity: 1.0,
    iridescence: 0.1,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [140, 460],
    envMapIntensity: 1.25,
    transparent: true,
    opacity: 1.0, // transmission>0 时必须为 1
    side: DoubleSide,
  });
  assetManager.materials.set(
    "frostedArtGlassMaterial",
    frostedArtGlassMaterial,
  );

  const sideboard = createSideboard(assetManager);
  sideboard.name = "餐边柜";
  mouseRaycasterIntersectObjectsRef.current.push(sideboard);
  pointerControlsIntersetObjectsRef.current.push(sideboard);
  sideboard.position.copy(SIDEBOARD_POSITON);
  scene.add(sideboard);
};

// 创建餐边柜
const createSideboard = (assetManager: AssetManager) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  // 艺术玻璃材质
  const frostedArtGlassMaterial = assetManager.materials.get(
    "frostedArtGlassMaterial",
  );

  const sideboardGroup = new Group();

  /** 外壳部分*/
  // 左板
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    (BOARD_THICKNESS - SIDEBOARD_WIDTH) / 2,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 左板右面的深灰色涂层
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    BOARD_THICKNESS + (BOARD_COATING_THICKNESS - SIDEBOARD_WIDTH) / 2,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 右板
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    (SIDEBOARD_WIDTH - BOARD_THICKNESS) / 2,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 右板左面的深灰色涂层
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    (SIDEBOARD_WIDTH - BOARD_COATING_THICKNESS) / 2 - BOARD_THICKNESS,
    SIDEBOARD_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 顶板
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardLightMaterial,
    SIDEBOARD_WIDTH,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT - BOARD_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 顶板底面的深灰色涂层
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
    SIDEBOARD_WIDTH,
    BOARD_COATING_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT - BOARD_THICKNESS - BOARD_COATING_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 底板
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardLightMaterial,
    SIDEBOARD_WIDTH,
    BOARD_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    BOARD_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 底板上面的深灰色涂层
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
    SIDEBOARD_WIDTH,
    BOARD_COATING_THICKNESS,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    0,
    BOARD_THICKNESS + BOARD_COATING_THICKNESS / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 背板
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
    SIDEBOARD_WIDTH,
    SIDEBOARD_HEIGHT,
    BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT / 2,
    BOARD_THICKNESS / 2,
  );

  /**餐边柜里面每层横向隔板*/
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
    SIDEBOARD_WIDTH - BOARD_THICKNESS * 2,
    BOARD_THICKNESS,
    TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS,
    0,
    SIDEBOARD_HEIGHT -
      BOARD_THICKNESS -
      CHEST_GAP -
      TOP_CHEST_HEIGHT -
      CHEST_GAP -
      BOARD_THICKNESS / 2,
    (TOP_STORAGE_AREA_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
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
  );
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
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
  );
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardLightMaterial,
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
  );
  // 第四层横板上面的深灰色涂层
  addBoard(
    sideboardGroup,
    assetManager,
    woodBoardDarkMaterial,
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
  );

  /**第一层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x = BOARD_THICKNESS + CHEST_GAP + CHEST_WIDTH / 2 - SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBoard(
      sideboardGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      TOP_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      SIDEBOARD_HEIGHT - BOARD_THICKNESS - CHEST_GAP - TOP_CHEST_HEIGHT / 2,
      TOP_STORAGE_AREA_DEPTH - BOARD_THICKNESS / 2,
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
      sideboardGroup,
      assetManager,
      woodBoardDarkMaterial,
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
    );
  }

  /**第二层和第三层置物区添加发光灯带*/
  addLightingStrip(
    sideboardGroup,
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
  );
  addLightingStrip(
    sideboardGroup,
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
  );

  /**第四层抽屉门*/
  for (let i = 0; i < CHEST_COL_COUNT / 2; i++) {
    let x =
      BOARD_THICKNESS + CHEST_GAP + DRAWER_WIDTH / 2 - SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + DRAWER_WIDTH);
    }
    addBoard(
      sideboardGroup,
      assetManager,
      woodBoardLightMaterial,
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
    );
  }

  /**第五层柜子柜门*/
  for (let i = 0; i < CHEST_COL_COUNT; i++) {
    let x = BOARD_THICKNESS + CHEST_GAP + CHEST_WIDTH / 2 - SIDEBOARD_WIDTH / 2;
    if (i > 0) {
      x += i * (CHEST_GAP + CHEST_WIDTH);
    }
    addBoard(
      sideboardGroup,
      assetManager,
      woodBoardLightMaterial,
      CHEST_WIDTH,
      BOTTOM_CHEST_HEIGHT,
      CHEST_DOOR_THICKNESS,
      x,
      BOARD_THICKNESS + CHEST_GAP + BOTTOM_CHEST_HEIGHT / 2,
      SIDEBOARD_DEPTH - BOARD_THICKNESS / 2,
    );
  }

  /**添加左边装饰挡板*/
  const halfCylinderGeometry = assetManager.geometries.get(
    "halfCylinderGeometry",
  );
  const decorativeBafflePlate = new Group();
  decorativeBafflePlate.position.set(-SIDEBOARD_WIDTH / 2, 0, 0);
  sideboardGroup.add(decorativeBafflePlate);
  // 装饰挡板背板
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    DECORATIVE_BAFFLE_BACK_PLATE_WIDTH,
    SIDEBOARD_HEIGHT,
    BOARD_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH / 2,
    SIDEBOARD_HEIGHT / 2,
    BOARD_THICKNESS / 2,
  );
  // 装饰挡板右上方竖板
  const width = DECORATIVE_BAFFLE_PLATE_THICKNESS - BOARD_THICKNESS;
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    width,
    DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    -width / 2,
    SIDEBOARD_HEIGHT - DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 装饰挡板右下方竖板
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    width,
    DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT,
    SIDEBOARD_DEPTH - BOARD_THICKNESS,
    -width / 2,
    DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT / 2,
    (SIDEBOARD_DEPTH + BOARD_THICKNESS) / 2,
  );
  // 装饰挡板上方横板
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - width,
    DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT,
    width,
    -(DECORATIVE_BAFFLE_BACK_PLATE_WIDTH + width) / 2,
    SIDEBOARD_HEIGHT - DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT / 2,
    BOARD_THICKNESS + width / 2,
  );
  // 装饰挡板下方横板
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - width,
    DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT,
    width,
    -(DECORATIVE_BAFFLE_BACK_PLATE_WIDTH + width) / 2,
    DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT / 2,
    BOARD_THICKNESS + width / 2,
  );
  // 装饰挡板上方曲面三角棱柱
  addCurvedSurfaceRightAngledTriangularPrism(
    decorativeBafflePlate,
    assetManager,
    SIDEBOARD_DEPTH - DECORATIVE_BAFFLE_PLATE_THICKNESS,
    SIDEBOARD_DEPTH - DECORATIVE_BAFFLE_PLATE_THICKNESS,
    DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT,
    -width,
    SIDEBOARD_HEIGHT,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    new Vector3(Math.PI / 2, 0, Math.PI / 2),
  );
  // 装饰挡板下方曲面三角棱柱
  addCurvedSurfaceRightAngledTriangularPrism(
    decorativeBafflePlate,
    assetManager,
    SIDEBOARD_DEPTH - DECORATIVE_BAFFLE_PLATE_THICKNESS,
    SIDEBOARD_DEPTH - DECORATIVE_BAFFLE_PLATE_THICKNESS,
    DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT,
    -width,
    DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    new Vector3(Math.PI / 2, 0, Math.PI / 2),
  );
  // 装饰挡板玻璃的右边
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    GLASS_WIDTH,
    SIDEBOARD_HEIGHT,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH / 2,
    SIDEBOARD_HEIGHT / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
  );
  // 装饰挡板玻璃的上边
  const height = (SIDEBOARD_HEIGHT - GLASS_HEIGHT) / 2;
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    GLASS_WIDTH,
    height,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH - GLASS_WIDTH / 2,
    SIDEBOARD_HEIGHT - height / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
  );
  // 装饰挡板玻璃的下边
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    GLASS_WIDTH,
    height,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH - GLASS_WIDTH / 2,
    height / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
  );
  // 装饰挡板玻璃的左边
  addBoard(
    decorativeBafflePlate,
    assetManager,
    woodBoardLightMaterial,
    GLASS_WIDTH - DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
    SIDEBOARD_HEIGHT,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH -
      GLASS_WIDTH * 2 -
      (GLASS_WIDTH - DECORATIVE_BAFFLE_PLATE_THICKNESS / 2) / 2,
    SIDEBOARD_HEIGHT / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
  );
  // 装饰挡板左边的半圆柱
  const halfCylinder = new Mesh(halfCylinderGeometry, woodBoardLightMaterial);
  halfCylinder.scale.set(
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
    SIDEBOARD_HEIGHT,
  );
  halfCylinder.rotation.z = Math.PI / 2;
  halfCylinder.rotation.x = Math.PI / 2;
  halfCylinder.castShadow = true;
  halfCylinder.receiveShadow = true;
  halfCylinder.position.set(
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH -
      GLASS_WIDTH * 3 +
      DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
    SIDEBOARD_HEIGHT,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
  );
  decorativeBafflePlate.add(halfCylinder);
  // 装饰挡板玻璃

  const glass = new Mesh(boxGeometry, frostedArtGlassMaterial);
  glass.scale.set(GLASS_WIDTH, GLASS_HEIGHT, GLASS_THICKNESS);
  glass.position.set(
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH - GLASS_WIDTH / 2,
    SIDEBOARD_HEIGHT / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS / 2,
  );
  decorativeBafflePlate.add(glass);

  // 装饰挡板玻璃上左曲面三角棱柱
  addCurvedSurfaceRightAngledTriangularPrism(
    decorativeBafflePlate,
    assetManager,
    GLASS_WIDTH / 2,
    GLASS_WIDTH / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH * 2,
    SIDEBOARD_HEIGHT - height,
    0,
    new Vector3(0, 0, -Math.PI / 2),
  );
  // 装饰挡板玻璃上右曲面三角棱柱
  addCurvedSurfaceRightAngledTriangularPrism(
    decorativeBafflePlate,
    assetManager,
    GLASS_WIDTH / 2,
    GLASS_WIDTH / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH,
    SIDEBOARD_HEIGHT - height,
    0,
    new Vector3(0, 0, Math.PI),
  );
  // 装饰挡板玻璃下左曲面三角棱柱
  addCurvedSurfaceRightAngledTriangularPrism(
    decorativeBafflePlate,
    assetManager,
    GLASS_WIDTH / 2,
    GLASS_WIDTH / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH * 2,
    height / 2 + (GLASS_WIDTH * 3) / 4,
    0,
  );
  // 装饰挡板玻璃下右曲面三角棱柱
  addCurvedSurfaceRightAngledTriangularPrism(
    decorativeBafflePlate,
    assetManager,
    GLASS_WIDTH / 2,
    GLASS_WIDTH / 2,
    DECORATIVE_BAFFLE_PLATE_THICKNESS,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH,
    height / 2 + (GLASS_WIDTH * 3) / 4,
    0,
    new Vector3(0, 0, Math.PI / 2),
  );

  // 添加花瓶
  addVase(
    decorativeBafflePlate,
    assetManager,
    new Vector3(
      -width / 2 - 0.02,
      DECORATIVE_BAFFLE_PLATE_BOTTOM_HEIGHT,
      BOARD_THICKNESS + width / 2 + 0.02,
    ),
  );

  // 添加圆形筒灯
  addLightingRoundLight(
    decorativeBafflePlate,
    assetManager,
    (width - 0.02) / 2,
    -width / 2,
    SIDEBOARD_HEIGHT - DECORATIVE_BAFFLE_PLATE_TOP_HEIGHT - 0.01,
    BOARD_THICKNESS + width / 2,
    SIDEBOARD_HEIGHT,
  );

  // 添加装饰挡板玻璃后面的灯光
  const RectAreaLigthWidth =
    (DECORATIVE_BAFFLE_PLATE_THICKNESS - GLASS_THICKNESS) / 2;
  const leftPositionX =
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH * 2 + 0.01;
  const rightPositionX =
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH - 0.01;
  // 玻璃后面的左边灯光
  addRectAreaLight(
    decorativeBafflePlate,
    RectAreaLigthWidth,
    GLASS_HEIGHT,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH * 2 + 0.01,
    SIDEBOARD_HEIGHT / 2,
    RectAreaLigthWidth / 2,
    new Vector3(0, -Math.PI / 2, 0),
  );
  // // 玻璃后面的右边灯光
  addRectAreaLight(
    decorativeBafflePlate,
    RectAreaLigthWidth,
    GLASS_HEIGHT,
    -DECORATIVE_BAFFLE_BACK_PLATE_WIDTH - GLASS_WIDTH - 0.01,
    SIDEBOARD_HEIGHT / 2,
    RectAreaLigthWidth / 2,
    new Vector3(0, Math.PI / 2, 0),
  );

  return sideboardGroup;
};

// 创建并添加曲面三角棱柱
const addCurvedSurfaceRightAngledTriangularPrism = (
  parent: Group,
  assetManager: AssetManager,
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
  rotation?: Vector3,
) => {
  const curvedSurfaceRightAngledTriangularPrismGeometry =
    assetManager.geometries.get(
      "curvedSurfaceRightAngledTriangularPrismGeometry",
    );
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  );

  const curvedSurfaceRightAngledTriangularPrism = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry,
    woodBoardLightMaterial,
  );
  curvedSurfaceRightAngledTriangularPrism.scale.set(w, h, d);
  if (rotation) {
    curvedSurfaceRightAngledTriangularPrism.rotation.x = rotation.x;
    curvedSurfaceRightAngledTriangularPrism.rotation.y = rotation.y;
    curvedSurfaceRightAngledTriangularPrism.rotation.z = rotation.z;
  }
  curvedSurfaceRightAngledTriangularPrism.position.set(x, y, z);
  curvedSurfaceRightAngledTriangularPrism.castShadow = true;
  curvedSurfaceRightAngledTriangularPrism.receiveShadow = true;
  parent.add(curvedSurfaceRightAngledTriangularPrism);
};

export default addSideboard;
