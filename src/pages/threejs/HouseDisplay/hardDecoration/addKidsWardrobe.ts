/**
 * 添加儿童衣柜
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
  addPlane,
  generateQuarterCylinderGeometry,
  generateCurvedSurfaceRightAngledTriangularPrismGeometry,
  addLightStrip,
  addCircleLightingStrip,
} from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  WALL_19_WIDTH,
  WALL_21_WIDTH,
  WALL_28_POSITION_X,
  WALL_19_POSITION_Z,
} from "./addHouseStructure";
import { WARDROBE_DEPTH, SUSPENDED_CEILING_HEIGHT } from "./addHouseStructure";
import { LIGHT_GROUP_FIELD } from "../function/dynamicOptimizationLightingStripRender";

export const BOARD_THICKNESS = 0.03; // 木板的厚度
const ARC_BOARD_THICKNESS = 0.08; // 圆弧边木板的厚度
// 儿童衣柜的位置
const KIDS_WARDROBE_POSITON = new Vector3(
  WALL_28_POSITION_X + WALL_THICKNESS / 2,
  0,
  WALL_19_POSITION_Z + WALL_THICKNESS / 2 + BOARD_THICKNESS * 2,
);
const KIDS_WARDROBE_WIDTH = WALL_19_WIDTH + WALL_THICKNESS + WALL_21_WIDTH; // 儿童衣柜体的总宽
const CHEST_DOOR_WIDTH = 0.64; // 柜门的宽度
const CHEST_GAP = 0.01; // 柜子之间的缝隙
const KIDS_WARDROBE_HEIGHT = WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT; // 儿童衣柜的总高
const CHEST_DOOR_THICKNESS = 0.02; // 柜门和抽屉门的厚度
const BOTTOM_CHEST_HEIGHT = 1.1; // 下面柜子的高度
const TOP_CHEST_HEIGHT = KIDS_WARDROBE_HEIGHT - BOTTOM_CHEST_HEIGHT - CHEST_GAP; // 上面柜子的高度(包含镂空的高度)
const MIDDLE_CHEST_DEPTH =
  WARDROBE_DEPTH - BOARD_THICKNESS - CHEST_DOOR_THICKNESS; // 中间层柜体的深度

const LEFT_CHEST_WIDTH = 0.5; // 最左边柜子的总宽
const LEFT_HOLLOW_OUT_HEIGHT = 1.3; // 最左边镂空的高度
const LEFT_SMALL_RADIUS = 0.1; // 最左边柜子的小圆半径
const LEFT_BIG_RADIUS = 0.24; // 最左边柜子的大圆半径

const RIGHT_CHEST_WIDTH = 0.9; // 右面柜子的总宽
const RIGHT_CHEST_DEPTH = 0.45; // 右面上方柜子的深度
const RIGHT_TABLE_DEPTH = 0.8; // 右面桌子的深度
const RIGHT_BOTTOM_STORAGE_AREA_HEIGHT = 0.36; // 右面上方柜子最下面置物格的高度(包含上下两层木板)
// 最右边剩余的柜门宽度
const RIGHT_CHEST_DOOR_WIDTH =
  KIDS_WARDROBE_WIDTH -
  LEFT_CHEST_WIDTH -
  CHEST_GAP * 5 -
  CHEST_DOOR_WIDTH * 3 -
  BOARD_THICKNESS;

const addKidsWardrobe = (
  scene: Scene,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
  lightingStripLightMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  const lightList: RectAreaLight[] = [];
  const kidsWardrobe = createKidsWardrobe(assetManager, lightList);
  kidsWardrobe.name = "儿童衣柜";
  pointerControlsIntersetObjectsRef.current.push(kidsWardrobe);
  kidsWardrobe.rotation.y = Math.PI / 2;
  kidsWardrobe.position.copy(KIDS_WARDROBE_POSITON);
  scene.add(kidsWardrobe);

  const rightTable = createRightTable(assetManager, lightList);
  rightTable.rotation.y = -Math.PI / 2;
  rightTable.position.set(KIDS_WARDROBE_WIDTH / 2, 0, WARDROBE_DEPTH);
  kidsWardrobe.add(rightTable);

  lightingStripLightMapRef.current[LIGHT_GROUP_FIELD.KIDS_BEDROOM] = lightList;
};

// 创建儿童衣柜
const createKidsWardrobe = (
  assetManager: AssetManager,
  lightList: RectAreaLight[],
) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;
  // 深色木板对应的更深的线条材质
  const woodBoardDarkLineMaterial = assetManager.materials.get(
    "woodBoardDarkLineMaterial",
  ) as MeshPhysicalMaterial;

  const kidsWardrobeGroup = new Group();

  // 背板
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    KIDS_WARDROBE_WIDTH,
    KIDS_WARDROBE_HEIGHT,
    BOARD_THICKNESS,
    0,
    KIDS_WARDROBE_HEIGHT / 2,
    BOARD_THICKNESS / 2,
  );

  // 左上柜体
  const height1 =
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT - BOTTOM_CHEST_HEIGHT;
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    LEFT_CHEST_WIDTH,
    height1,
    MIDDLE_CHEST_DEPTH,
    -KIDS_WARDROBE_WIDTH / 2 + LEFT_CHEST_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - height1 / 2,
    BOARD_THICKNESS + MIDDLE_CHEST_DEPTH / 2,
  );

  const light1 = addLightStrip(
    kidsWardrobeGroup,
    assetManager,
    MIDDLE_CHEST_DEPTH,
    LIGHT_STRIP_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 + LEFT_CHEST_WIDTH - 0.2,
    KIDS_WARDROBE_HEIGHT - height1 - 0.001,
    BOARD_THICKNESS + MIDDLE_CHEST_DEPTH / 2,
    false,
    new Vector3(Math.PI / 2, 0, Math.PI / 2),
  );
  light1 && lightList.push(light1);

  // 左下柜体
  const depth1 = MIDDLE_CHEST_DEPTH - ARC_BOARD_THICKNESS - CHEST_GAP;
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    LEFT_CHEST_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    depth1,
    -KIDS_WARDROBE_WIDTH / 2 + LEFT_CHEST_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    BOARD_THICKNESS + depth1 / 2,
  );

  // 左下圆弧边
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    LEFT_CHEST_WIDTH - ARC_BOARD_THICKNESS,
    BOTTOM_CHEST_HEIGHT,
    ARC_BOARD_THICKNESS,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      (LEFT_CHEST_WIDTH - ARC_BOARD_THICKNESS) / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS - ARC_BOARD_THICKNESS / 2,
  );

  // 左下四分之一圆柱
  const quarterCylinderGeometry1 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    BOTTOM_CHEST_HEIGHT,
  );
  const quarterCylinder1 = new Mesh(
    quarterCylinderGeometry1,
    woodBoardDarkMaterial,
  );
  quarterCylinder1.rotation.x = -Math.PI / 2;
  quarterCylinder1.rotation.z = Math.PI;
  quarterCylinder1.position.set(
    ARC_BOARD_THICKNESS - KIDS_WARDROBE_WIDTH / 2,
    0,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS - ARC_BOARD_THICKNESS,
  );
  quarterCylinder1.castShadow = true;
  quarterCylinder1.receiveShadow = true;
  kidsWardrobeGroup.add(quarterCylinder1);

  // 左下柜体所有抽屉横线
  for (let i = 1; i < 3; i++) {
    const y = (BOTTOM_CHEST_HEIGHT / 3) * i;
    addPlane(
      kidsWardrobeGroup,
      assetManager,
      woodBoardDarkLineMaterial,
      depth1,
      CHEST_GAP * 2,
      -KIDS_WARDROBE_WIDTH / 2,
      y,
      BOARD_THICKNESS + depth1 / 2,
      new Vector3(0, -Math.PI / 2, 0),
    );
  }

  // 最左边柜子的整体门板
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_CHEST_WIDTH - LEFT_SMALL_RADIUS,
    height1,
    CHEST_DOOR_THICKNESS,
    -KIDS_WARDROBE_WIDTH / 2 + (LEFT_CHEST_WIDTH - LEFT_SMALL_RADIUS) / 2,
    KIDS_WARDROBE_HEIGHT - height1 / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_SMALL_RADIUS,
    KIDS_WARDROBE_HEIGHT,
    CHEST_DOOR_THICKNESS,
    -KIDS_WARDROBE_WIDTH / 2 + LEFT_CHEST_WIDTH - LEFT_SMALL_RADIUS / 2,
    KIDS_WARDROBE_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  const quarterCylinderGeometry2 = generateQuarterCylinderGeometry(
    LEFT_SMALL_RADIUS,
    CHEST_DOOR_THICKNESS,
  );
  const quarterCylinder2 = new Mesh(
    quarterCylinderGeometry2,
    woodBoardLightMaterial,
  );
  quarterCylinder2.rotation.z = Math.PI;
  quarterCylinder2.position.set(
    -KIDS_WARDROBE_WIDTH / 2 + LEFT_SMALL_RADIUS,
    KIDS_WARDROBE_HEIGHT - height1,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS,
  );
  quarterCylinder2.castShadow = true;
  quarterCylinder2.receiveShadow = true;
  kidsWardrobeGroup.add(quarterCylinder2);
  const width1 = LEFT_CHEST_WIDTH - LEFT_SMALL_RADIUS * 2;
  if (width1 > 0) {
    addBox(
      kidsWardrobeGroup,
      assetManager,
      woodBoardLightMaterial,
      width1,
      LEFT_SMALL_RADIUS,
      CHEST_DOOR_THICKNESS,
      -KIDS_WARDROBE_WIDTH / 2 + LEFT_SMALL_RADIUS + width1 / 2,
      KIDS_WARDROBE_HEIGHT - height1 - LEFT_SMALL_RADIUS / 2,
      WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    );
  }
  const curvedSurfaceRightAngledTriangularPrismGeometry1 =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      LEFT_BIG_RADIUS,
      CHEST_DOOR_THICKNESS,
    );
  const curvedSurfaceRightAngledTriangularPrism1 = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry1,
    woodBoardLightMaterial,
  );
  curvedSurfaceRightAngledTriangularPrism1.rotation.z = Math.PI;
  curvedSurfaceRightAngledTriangularPrism1.position.set(
    -KIDS_WARDROBE_WIDTH / 2 + LEFT_CHEST_WIDTH - LEFT_SMALL_RADIUS,
    KIDS_WARDROBE_HEIGHT - height1 - LEFT_SMALL_RADIUS,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS,
  );
  curvedSurfaceRightAngledTriangularPrism1.castShadow = true;
  curvedSurfaceRightAngledTriangularPrism1.receiveShadow = true;
  kidsWardrobeGroup.add(curvedSurfaceRightAngledTriangularPrism1);

  // 中间柜体
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    CHEST_DOOR_WIDTH * 2 + CHEST_GAP * 2,
    KIDS_WARDROBE_HEIGHT,
    MIDDLE_CHEST_DEPTH,
    -KIDS_WARDROBE_WIDTH / 2 +
      LEFT_CHEST_WIDTH +
      (CHEST_DOOR_WIDTH * 2 + CHEST_GAP * 2) / 2,
    KIDS_WARDROBE_HEIGHT / 2,
    BOARD_THICKNESS + MIDDLE_CHEST_DEPTH / 2,
  );

  // 中间柜体所有门板
  addChestDoor(
    kidsWardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    TOP_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      LEFT_CHEST_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - TOP_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addChestDoor(
    kidsWardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    TOP_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      LEFT_CHEST_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - TOP_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(Math.PI, 0, Math.PI),
  );
  addChestDoor(
    kidsWardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      LEFT_CHEST_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(Math.PI, 0, 0),
  );
  addChestDoor(
    kidsWardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      LEFT_CHEST_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(0, 0, Math.PI),
  );

  // 右上柜体
  const width2 = CHEST_DOOR_WIDTH + RIGHT_CHEST_DOOR_WIDTH + CHEST_GAP * 3;
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    LEFT_HOLLOW_OUT_HEIGHT,
    MIDDLE_CHEST_DEPTH,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS - width2 / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    BOARD_THICKNESS + MIDDLE_CHEST_DEPTH / 2,
  );
  // 右下柜体
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    BOTTOM_CHEST_HEIGHT + CHEST_GAP + BOARD_THICKNESS,
    MIDDLE_CHEST_DEPTH,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS - width2 / 2,
    (BOTTOM_CHEST_HEIGHT + CHEST_GAP + BOARD_THICKNESS) / 2,
    BOARD_THICKNESS + MIDDLE_CHEST_DEPTH / 2,
  );

  // 右上柜体所有门板
  const x =
    KIDS_WARDROBE_WIDTH / 2 -
    BOARD_THICKNESS -
    CHEST_GAP * 2 -
    RIGHT_CHEST_DOOR_WIDTH -
    CHEST_DOOR_WIDTH / 2;
  const x2 =
    KIDS_WARDROBE_WIDTH / 2 -
    BOARD_THICKNESS -
    CHEST_GAP -
    RIGHT_CHEST_DOOR_WIDTH / 2;
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    CHEST_DOOR_WIDTH,
    LEFT_HOLLOW_OUT_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    RIGHT_CHEST_DOOR_WIDTH,
    LEFT_HOLLOW_OUT_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  // 右下柜体所有门板
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    RIGHT_CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    CHEST_DOOR_THICKNESS,
    x2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );

  // 右板
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_THICKNESS,
    KIDS_WARDROBE_HEIGHT,
    WARDROBE_DEPTH - BOARD_THICKNESS,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS / 2,
    KIDS_WARDROBE_HEIGHT / 2,
    (WARDROBE_DEPTH + BOARD_THICKNESS) / 2,
  );

  // 右边中间置物区横板
  const middleHeight =
    KIDS_WARDROBE_HEIGHT -
    BOTTOM_CHEST_HEIGHT -
    CHEST_GAP -
    BOARD_THICKNESS -
    LEFT_HOLLOW_OUT_HEIGHT;
  addBox(
    kidsWardrobeGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    BOARD_THICKNESS,
    MIDDLE_CHEST_DEPTH,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS - width2 / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT - middleHeight / 2,
    BOARD_THICKNESS + MIDDLE_CHEST_DEPTH / 2,
  );

  const light2 = addLightStrip(
    kidsWardrobeGroup,
    assetManager,
    width2,
    LIGHT_STRIP_HEIGHT,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS - width2 / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT - 0.001,
    BOARD_THICKNESS + 0.4,
    false,
  );
  light2 && lightList.push(light2);

  const light3 = addLightStrip(
    kidsWardrobeGroup,
    assetManager,
    width2,
    LIGHT_STRIP_HEIGHT,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS - width2 / 2,
    KIDS_WARDROBE_HEIGHT -
      LEFT_HOLLOW_OUT_HEIGHT -
      middleHeight / 2 -
      BOARD_THICKNESS / 2 -
      0.001,
    BOARD_THICKNESS + 0.4,
    false,
  );
  light3 && lightList.push(light3);

  return kidsWardrobeGroup;
};

// 创建右面墙部分(书桌和柜子)
const createRightTable = (
  assetManager: AssetManager,
  lightList: RectAreaLight[],
) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial = assetManager.materials.get(
    "woodBoardDarkMaterial",
  ) as MeshPhysicalMaterial;

  // 注意：左下角为坐标原点
  const rightTableGroup = new Group();

  // 下背板
  const height2 =
    BOTTOM_CHEST_HEIGHT +
    CHEST_GAP +
    BOARD_THICKNESS +
    ((TOP_CHEST_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT) * 0.7) / 2;
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    RIGHT_CHEST_WIDTH,
    height2,
    BOARD_THICKNESS,
    RIGHT_CHEST_WIDTH / 2,
    height2 / 2,
    BOARD_THICKNESS / 2,
  );
  // 桌子台面
  const y = BOTTOM_CHEST_HEIGHT + CHEST_GAP + BOARD_THICKNESS / 2;
  const width = RIGHT_CHEST_WIDTH + CHEST_DOOR_THICKNESS - ARC_BOARD_THICKNESS;
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    width,
    BOARD_THICKNESS,
    RIGHT_TABLE_DEPTH - BOARD_THICKNESS,
    -CHEST_DOOR_THICKNESS + width / 2,
    y,
    (RIGHT_TABLE_DEPTH + BOARD_THICKNESS) / 2,
  );
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    ARC_BOARD_THICKNESS,
    BOARD_THICKNESS,
    RIGHT_TABLE_DEPTH - BOARD_THICKNESS - ARC_BOARD_THICKNESS,
    RIGHT_CHEST_WIDTH - ARC_BOARD_THICKNESS / 2,
    y,
    BOARD_THICKNESS +
      (RIGHT_TABLE_DEPTH - BOARD_THICKNESS - ARC_BOARD_THICKNESS) / 2,
  );
  const quarterCylinderGeometry3 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    BOARD_THICKNESS,
  );
  const quarterCylinder1 = new Mesh(
    quarterCylinderGeometry3,
    woodBoardDarkMaterial,
  );
  quarterCylinder1.rotation.x = -Math.PI / 2;
  quarterCylinder1.rotation.z = -Math.PI / 2;
  quarterCylinder1.position.set(
    RIGHT_CHEST_WIDTH - ARC_BOARD_THICKNESS,
    y - BOARD_THICKNESS / 2,
    RIGHT_TABLE_DEPTH - ARC_BOARD_THICKNESS,
  );
  quarterCylinder1.castShadow = true;
  quarterCylinder1.receiveShadow = true;
  rightTableGroup.add(quarterCylinder1);

  const curvedSurfaceRightAngledTriangularPrismGeometry2 =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      CHEST_DOOR_WIDTH / 2,
      BOARD_THICKNESS,
    );
  const curvedSurfaceRightAngledTriangularPrism2 = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry2,
    woodBoardDarkMaterial,
  );
  curvedSurfaceRightAngledTriangularPrism2.rotation.x = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism2.rotation.z = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism2.position.set(
    -CHEST_DOOR_THICKNESS,
    y - BOARD_THICKNESS / 2,
    RIGHT_TABLE_DEPTH,
  );
  curvedSurfaceRightAngledTriangularPrism2.castShadow = true;
  curvedSurfaceRightAngledTriangularPrism2.receiveShadow = true;
  rightTableGroup.add(curvedSurfaceRightAngledTriangularPrism2);

  // 桌子右面的桌腿板
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    BOTTOM_CHEST_HEIGHT + CHEST_GAP,
    RIGHT_TABLE_DEPTH - BOARD_THICKNESS - ARC_BOARD_THICKNESS,
    RIGHT_CHEST_WIDTH - ARC_BOARD_THICKNESS / 2,
    (BOTTOM_CHEST_HEIGHT + CHEST_GAP) / 2,
    BOARD_THICKNESS +
      (RIGHT_TABLE_DEPTH - BOARD_THICKNESS - ARC_BOARD_THICKNESS) / 2,
  );

  const quarterCylinderGeometry4 = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    BOTTOM_CHEST_HEIGHT + CHEST_GAP,
  );
  const quarterCylinder4 = new Mesh(
    quarterCylinderGeometry4,
    woodBoardLightMaterial,
  );
  quarterCylinder4.rotation.x = -Math.PI / 2;
  quarterCylinder4.rotation.z = -Math.PI / 2;
  quarterCylinder4.position.set(
    RIGHT_CHEST_WIDTH - ARC_BOARD_THICKNESS,
    0,
    RIGHT_TABLE_DEPTH - ARC_BOARD_THICKNESS,
  );
  quarterCylinder4.castShadow = true;
  quarterCylinder4.receiveShadow = true;
  rightTableGroup.add(quarterCylinder4);

  const curvedSurfaceRightAngledTriangularPrismGeometry3 =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      LEFT_BIG_RADIUS,
      BOARD_THICKNESS,
    );
  const curvedSurfaceRightAngledTriangularPrism3 = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry3,
    woodBoardDarkMaterial,
  );
  curvedSurfaceRightAngledTriangularPrism3.position.set(0, height2, 0);
  curvedSurfaceRightAngledTriangularPrism3.castShadow = true;
  curvedSurfaceRightAngledTriangularPrism3.receiveShadow = true;
  rightTableGroup.add(curvedSurfaceRightAngledTriangularPrism3);

  const height3 =
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT - height2 - LEFT_BIG_RADIUS;
  const light1 = addLightStrip(
    rightTableGroup,
    assetManager,
    height3,
    BOARD_THICKNESS,
    0.001,
    height2 + LEFT_BIG_RADIUS + height3 / 2,
    BOARD_THICKNESS / 2,
    false,
    new Vector3(Math.PI / 2, Math.PI / 2, 0),
    0.6 * Math.PI,
  );
  light1 && lightList.push(light1);
  const lightList2 = addCircleLightingStrip(
    rightTableGroup,
    assetManager,
    LEFT_BIG_RADIUS,
    BOARD_THICKNESS,
    LEFT_BIG_RADIUS,
    height2 + LEFT_BIG_RADIUS,
    BOARD_THICKNESS / 2,
    6,
    Math.PI / 2,
    1,
    new Vector3(0, 0, Math.PI),
  );
  lightList.push(...lightList2);
  const light3 = addLightStrip(
    rightTableGroup,
    assetManager,
    RIGHT_CHEST_WIDTH - LEFT_BIG_RADIUS,
    BOARD_THICKNESS,
    LEFT_BIG_RADIUS + (RIGHT_CHEST_WIDTH - LEFT_BIG_RADIUS) / 2,
    height2 + 0.001,
    BOARD_THICKNESS / 2,
    false,
    new Vector3(-Math.PI / 2, 0, 0),
    0.6 * Math.PI,
  );
  light3 && lightList.push(light3);

  // 上背板
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    RIGHT_CHEST_WIDTH - BOARD_THICKNESS,
    LEFT_HOLLOW_OUT_HEIGHT,
    BOARD_THICKNESS,
    (RIGHT_CHEST_WIDTH - BOARD_THICKNESS) / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    BOARD_THICKNESS / 2,
  );

  // 上方柜子横板
  const width2 = RIGHT_CHEST_WIDTH - BOARD_THICKNESS * 2;
  const depth = RIGHT_CHEST_DEPTH - BOARD_THICKNESS - CHEST_DOOR_THICKNESS;
  const width3 =
    RIGHT_CHEST_WIDTH - BOARD_THICKNESS * 3 - RIGHT_BOTTOM_STORAGE_AREA_HEIGHT;
  const height =
    LEFT_HOLLOW_OUT_HEIGHT - BOARD_THICKNESS - RIGHT_BOTTOM_STORAGE_AREA_HEIGHT;
  const x = RIGHT_BOTTOM_STORAGE_AREA_HEIGHT + BOARD_THICKNESS + width3 / 2;
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    BOARD_THICKNESS,
    depth,
    width2 / 2,
    KIDS_WARDROBE_HEIGHT - BOARD_THICKNESS / 2,
    BOARD_THICKNESS + depth / 2,
  );
  const light4 = addLightStrip(
    rightTableGroup,
    assetManager,
    width3,
    LIGHT_STRIP_HEIGHT,
    x,
    KIDS_WARDROBE_HEIGHT - BOARD_THICKNESS - 0.001,
    BOARD_THICKNESS + 0.1,
    false,
  );
  light4 && lightList.push(light4);
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    width3,
    BOARD_THICKNESS,
    depth,
    x,
    KIDS_WARDROBE_HEIGHT -
      (LEFT_HOLLOW_OUT_HEIGHT -
        BOARD_THICKNESS * 2 -
        RIGHT_BOTTOM_STORAGE_AREA_HEIGHT) /
        2 -
      (BOARD_THICKNESS * 3) / 2,
    BOARD_THICKNESS + depth / 2,
  );
  const light5 = addLightStrip(
    rightTableGroup,
    assetManager,
    width3,
    LIGHT_STRIP_HEIGHT,
    x,
    KIDS_WARDROBE_HEIGHT -
      (LEFT_HOLLOW_OUT_HEIGHT -
        BOARD_THICKNESS * 2 -
        RIGHT_BOTTOM_STORAGE_AREA_HEIGHT) /
        2 -
      BOARD_THICKNESS * 2 -
      0.001,
    BOARD_THICKNESS + 0.1,
    false,
  );
  light5 && lightList.push(light5);
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    BOARD_THICKNESS,
    depth,
    width2 / 2,
    KIDS_WARDROBE_HEIGHT -
      (LEFT_HOLLOW_OUT_HEIGHT - RIGHT_BOTTOM_STORAGE_AREA_HEIGHT) -
      BOARD_THICKNESS / 2,
    BOARD_THICKNESS + depth / 2,
  );
  const light6 = addLightStrip(
    rightTableGroup,
    assetManager,
    width2,
    LIGHT_STRIP_HEIGHT,
    width2 / 2,
    KIDS_WARDROBE_HEIGHT -
      (LEFT_HOLLOW_OUT_HEIGHT - RIGHT_BOTTOM_STORAGE_AREA_HEIGHT) -
      BOARD_THICKNESS -
      0.001,
    BOARD_THICKNESS + 0.1,
    false,
  );
  light6 && lightList.push(light6);
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    width2,
    BOARD_THICKNESS,
    depth,
    width2 / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT + BOARD_THICKNESS / 2,
    BOARD_THICKNESS + depth / 2,
  );

  // 上方柜子竖板
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_THICKNESS,
    height,
    depth,
    RIGHT_BOTTOM_STORAGE_AREA_HEIGHT + BOARD_THICKNESS / 2,
    KIDS_WARDROBE_HEIGHT - BOARD_THICKNESS - height / 2,
    BOARD_THICKNESS + depth / 2,
  );
  addBox(
    rightTableGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOARD_THICKNESS,
    LEFT_HOLLOW_OUT_HEIGHT,
    depth,
    RIGHT_CHEST_WIDTH - (BOARD_THICKNESS * 3) / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    BOARD_THICKNESS + depth / 2,
  );

  // 外面的门板和右边板
  addChestDoor2(
    rightTableGroup,
    assetManager,
    RIGHT_BOTTOM_STORAGE_AREA_HEIGHT,
    LEFT_HOLLOW_OUT_HEIGHT,
    RIGHT_BOTTOM_STORAGE_AREA_HEIGHT / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    RIGHT_CHEST_DEPTH - BOARD_THICKNESS / 2,
  );
  addChestDoor2(
    rightTableGroup,
    assetManager,
    RIGHT_CHEST_DEPTH,
    LEFT_HOLLOW_OUT_HEIGHT,
    RIGHT_CHEST_WIDTH - BOARD_THICKNESS / 2,
    KIDS_WARDROBE_HEIGHT - LEFT_HOLLOW_OUT_HEIGHT / 2,
    RIGHT_CHEST_DEPTH / 2,
    new Vector3(0, -Math.PI / 2, 0),
  );

  return rightTableGroup;
};

// 创建并添加带一个圆缺角的柜门
const addChestDoor = (
  parent: Group,
  assetManager: AssetManager,
  w: number,
  h: number,
  x: number,
  y: number,
  z: number,
  rotation?: Vector3,
) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;

  const chestDoorGroup = new Group();

  addBox(
    chestDoorGroup,
    assetManager,
    woodBoardLightMaterial,
    w - LEFT_SMALL_RADIUS,
    h - LEFT_SMALL_RADIUS,
    CHEST_DOOR_THICKNESS,
    -LEFT_SMALL_RADIUS / 2,
    LEFT_SMALL_RADIUS / 2,
    0,
  );
  addBox(
    chestDoorGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_SMALL_RADIUS,
    h - LEFT_SMALL_RADIUS,
    CHEST_DOOR_THICKNESS,
    w / 2 - LEFT_SMALL_RADIUS / 2,
    LEFT_SMALL_RADIUS / 2,
    0,
  );
  addBox(
    chestDoorGroup,
    assetManager,
    woodBoardLightMaterial,
    w - LEFT_SMALL_RADIUS,
    LEFT_SMALL_RADIUS,
    CHEST_DOOR_THICKNESS,
    -LEFT_SMALL_RADIUS / 2,
    -h / 2 + LEFT_SMALL_RADIUS / 2,
    0,
  );
  const quarterCylinderGeometry = generateQuarterCylinderGeometry(
    LEFT_SMALL_RADIUS,
    CHEST_DOOR_THICKNESS,
  );
  const quarterCylinder = new Mesh(
    quarterCylinderGeometry,
    woodBoardLightMaterial,
  );
  quarterCylinder.rotation.z = -Math.PI / 2;
  quarterCylinder.position.set(
    w / 2 - LEFT_SMALL_RADIUS,
    -h / 2 + LEFT_SMALL_RADIUS,
    -CHEST_DOOR_THICKNESS / 2,
  );
  quarterCylinder.castShadow = true;
  quarterCylinder.receiveShadow = true;
  chestDoorGroup.add(quarterCylinder);

  if (rotation) {
    chestDoorGroup.rotation.x = rotation.x;
    chestDoorGroup.rotation.z = rotation.z;
  }
  chestDoorGroup.position.set(x, y, z);
  parent.add(chestDoorGroup);
};

// 创建并添加带一个内凹缺角的柜门
const addChestDoor2 = (
  parent: Group,
  assetManager: AssetManager,
  w: number,
  h: number,
  x: number,
  y: number,
  z: number,
  rotation?: Vector3,
) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;

  const chestDoorGroup = new Group();

  const width = w - LEFT_SMALL_RADIUS - 0.08;
  addBox(
    chestDoorGroup,
    assetManager,
    woodBoardLightMaterial,
    w,
    h - RIGHT_BOTTOM_STORAGE_AREA_HEIGHT,
    CHEST_DOOR_THICKNESS,
    0,
    RIGHT_BOTTOM_STORAGE_AREA_HEIGHT / 2,
    0,
  );
  addBox(
    chestDoorGroup,
    assetManager,
    woodBoardLightMaterial,
    width,
    RIGHT_BOTTOM_STORAGE_AREA_HEIGHT,
    CHEST_DOOR_THICKNESS,
    -w / 2 + width / 2,
    -h / 2 + RIGHT_BOTTOM_STORAGE_AREA_HEIGHT / 2,
    0,
  );

  const curvedSurfaceRightAngledTriangularPrismGeometry =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      LEFT_SMALL_RADIUS,
      CHEST_DOOR_THICKNESS,
    );
  const curvedSurfaceRightAngledTriangularPrism = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry,
    woodBoardLightMaterial,
  );
  curvedSurfaceRightAngledTriangularPrism.position.set(
    -w / 2 + width,
    -h / 2 + RIGHT_BOTTOM_STORAGE_AREA_HEIGHT,
    -CHEST_DOOR_THICKNESS / 2,
  );
  curvedSurfaceRightAngledTriangularPrism.rotation.z = -Math.PI / 2;
  curvedSurfaceRightAngledTriangularPrism.castShadow = true;
  curvedSurfaceRightAngledTriangularPrism.receiveShadow = true;
  chestDoorGroup.add(curvedSurfaceRightAngledTriangularPrism);

  if (rotation) {
    chestDoorGroup.rotation.y = rotation.y;
  }
  chestDoorGroup.position.set(x, y, z);
  parent.add(chestDoorGroup);
};

export default addKidsWardrobe;
