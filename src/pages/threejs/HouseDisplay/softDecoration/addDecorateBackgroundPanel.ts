/**
 * 添加装饰背景板
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
import {
  addBox,
  addCylinder,
  addRoundLight,
  generateHalfCylinderGeometry,
  generateQuarterCylinderGeometry,
  generateCurvedSurfaceRightAngledTriangularPrismGeometry,
  generateHalfCircularRingCylinderGeometry,
  generateRoundedBoxGeometry,
  addLightingStrip,
  addCircleLightingStrip,
} from "../utils";
import {
  WALL_HEIGHT,
  SUSPENDED_CEILING_HEIGHT,
  WALL_THICKNESS,
  WALL_19_POSITION_X,
  WALL_20_POSITION_Z,
} from "../hardDecoration/addHouseStructure";
import addVase from "../softDecoration/addVase";

// 装饰背景板的位置
const TV_BACKGROUND_POSITON = new Vector3(
  WALL_19_POSITION_X - 0.2,
  (WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT) / 2,
  WALL_20_POSITION_Z + WALL_THICKNESS / 2,
);
const PANEL_WIDTH = 1.1; // 装饰背景板的总宽度
const PANEL_HEIGHT = 2.1; // 装饰背景板的总高度
const BACK_PANEL_THICKNESS = 0.01; // 底板的厚度
const MIDDLE_PANEL_THICKNESS = 0.024; // 中间层板的厚度
const FRONT_PANEL_THICKNESS = 0.01; // 前板的厚度
const BOTTOM_RADIUS = 0.34; // 底下开放圆的半径
const LEFT_TOP_RADIUS = 0.2; // 左上开放圆的半径
const RIGHT_TOP_RADIUS = 0.26; // 右上开放圆的半径
const LIGHTING_STRIP_GAP = 0.03; // 灯带位置内缩的间距
const WOOD_PANEL_MARGIN_BOTTOM = 0.16; // 置物木板到下面半圆上方的距离
const LEFT_OR_RIGHT_WIDTH = (PANEL_WIDTH - BOTTOM_RADIUS * 2) / 2; // 左或右边的板子宽度
const BOTTOM_CYLINDER_RATIO = 0.75; // 底下深色圆面与底下开放圆的比例
const DIAPHRAGM_DEPTH = MIDDLE_PANEL_THICKNESS * 5;

const addDecorateBackgroundPanel = (
  scene: Scene,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
  lightingStripLightMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  const decorateBackgroundPanel = createDecorateBackgroundPanel(
    assetManager,
    lightingStripLightMapRef,
  );
  pointerControlsIntersetObjectsRef.current.push(decorateBackgroundPanel);
  decorateBackgroundPanel.position.copy(TV_BACKGROUND_POSITON);
  scene.add(decorateBackgroundPanel);

  // 添加花瓶
  addVase(
    decorateBackgroundPanel,
    assetManager,
    new Vector3(
      0,
      -PANEL_HEIGHT / 2 +
        PANEL_WIDTH / 2 +
        WOOD_PANEL_MARGIN_BOTTOM +
        MIDDLE_PANEL_THICKNESS,
      BACK_PANEL_THICKNESS + DIAPHRAGM_DEPTH / 2,
    ),
    new Vector3(0.8, 0.8, 0.8),
  );
};

// 创建装饰背景板
const createDecorateBackgroundPanel = (
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

  const decorateBackgroundPanelGroup = new Group();
  // 底层板
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    PANEL_WIDTH,
    PANEL_HEIGHT - PANEL_WIDTH / 2,
    BACK_PANEL_THICKNESS,
    0,
    PANEL_WIDTH / 4,
    BACK_PANEL_THICKNESS / 2,
  );
  const halfCylinderGeometry = generateHalfCylinderGeometry(
    PANEL_WIDTH / 2,
    BACK_PANEL_THICKNESS,
  );
  const box1 = new Mesh(halfCylinderGeometry, woodBoardLightMaterial);
  box1.rotation.z = Math.PI;
  box1.position.set(0, -PANEL_HEIGHT / 2 + PANEL_WIDTH / 2, 0);
  box1.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box1);
  // 中间层板
  const quarterCylinderGeometry1 = generateQuarterCylinderGeometry(
    LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP,
    MIDDLE_PANEL_THICKNESS,
  );
  const box2 = new Mesh(quarterCylinderGeometry1, woodBoardLightMaterial);
  box2.rotation.z = Math.PI;
  box2.position.set(
    -PANEL_WIDTH / 2 + LEFT_TOP_RADIUS,
    PANEL_HEIGHT / 2,
    BACK_PANEL_THICKNESS,
  );
  box2.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box2);
  const width1 =
    PANEL_WIDTH - LEFT_TOP_RADIUS - (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP);
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    width1,
    LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP,
    MIDDLE_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + LEFT_TOP_RADIUS + width1 / 2,
    PANEL_HEIGHT / 2 - (LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP) / 2,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS / 2,
  );
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP,
    PANEL_HEIGHT - PANEL_WIDTH / 2,
    MIDDLE_PANEL_THICKNESS,
    PANEL_WIDTH / 2 - (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP) / 2,
    PANEL_HEIGHT / 2 - (PANEL_HEIGHT - PANEL_WIDTH / 2) / 2,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS / 2,
  );
  const curvedSurfaceRightAngledTriangularPrismGeometry1 =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      RIGHT_TOP_RADIUS - LIGHTING_STRIP_GAP,
      MIDDLE_PANEL_THICKNESS,
    );
  const box3 = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry1,
    woodBoardLightMaterial,
  );
  box3.rotation.z = Math.PI;
  box3.position.set(
    PANEL_WIDTH / 2 - (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP),
    PANEL_HEIGHT / 2 - (LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP),
    BACK_PANEL_THICKNESS,
  );
  box3.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box3);
  const generateHalfCircularRingCylinderGeometry1 =
    generateHalfCircularRingCylinderGeometry(
      PANEL_WIDTH / 2,
      BOTTOM_RADIUS + LIGHTING_STRIP_GAP,
      MIDDLE_PANEL_THICKNESS,
    );
  const box4 = new Mesh(
    generateHalfCircularRingCylinderGeometry1,
    woodBoardLightMaterial,
  );
  box4.rotation.z = Math.PI;
  box4.position.set(
    0,
    -PANEL_HEIGHT / 2 + PANEL_WIDTH / 2,
    BACK_PANEL_THICKNESS,
  );
  box4.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box4);
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP,
    WOOD_PANEL_MARGIN_BOTTOM,
    MIDDLE_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP) / 2,
    -PANEL_HEIGHT / 2 + PANEL_WIDTH / 2 + WOOD_PANEL_MARGIN_BOTTOM / 2,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS / 2,
  );

  // 上层板
  const z =
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS + FRONT_PANEL_THICKNESS / 2;
  const quarterCylinderGeometry2 = generateQuarterCylinderGeometry(
    LEFT_TOP_RADIUS,
    FRONT_PANEL_THICKNESS,
  );
  const box5 = new Mesh(quarterCylinderGeometry2, woodBoardLightMaterial);
  box5.rotation.z = Math.PI;
  box5.position.set(
    -PANEL_WIDTH / 2 + LEFT_TOP_RADIUS,
    PANEL_HEIGHT / 2,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS,
  );
  box5.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box5);
  const width2 = PANEL_WIDTH - LEFT_TOP_RADIUS - LEFT_OR_RIGHT_WIDTH;
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    width2,
    LEFT_TOP_RADIUS,
    FRONT_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + LEFT_TOP_RADIUS + width2 / 2,
    PANEL_HEIGHT / 2 - LEFT_TOP_RADIUS / 2,
    z,
  );
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_OR_RIGHT_WIDTH,
    PANEL_HEIGHT - PANEL_WIDTH / 2,
    FRONT_PANEL_THICKNESS,
    PANEL_WIDTH / 2 - LEFT_OR_RIGHT_WIDTH / 2,
    PANEL_HEIGHT / 2 - (PANEL_HEIGHT - PANEL_WIDTH / 2) / 2,
    z,
  );
  const curvedSurfaceRightAngledTriangularPrismGeometry2 =
    generateCurvedSurfaceRightAngledTriangularPrismGeometry(
      RIGHT_TOP_RADIUS,
      FRONT_PANEL_THICKNESS,
    );
  const box6 = new Mesh(
    curvedSurfaceRightAngledTriangularPrismGeometry2,
    woodBoardLightMaterial,
  );
  box6.rotation.z = Math.PI;
  box6.position.set(
    PANEL_WIDTH / 2 - LEFT_OR_RIGHT_WIDTH,
    PANEL_HEIGHT / 2 - LEFT_TOP_RADIUS,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS,
  );
  box6.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box6);
  const generateHalfCircularRingCylinderGeometry2 =
    generateHalfCircularRingCylinderGeometry(
      PANEL_WIDTH / 2,
      BOTTOM_RADIUS,
      FRONT_PANEL_THICKNESS,
    );
  const box7 = new Mesh(
    generateHalfCircularRingCylinderGeometry2,
    woodBoardLightMaterial,
  );
  box7.rotation.z = Math.PI;
  box7.position.set(
    0,
    -PANEL_HEIGHT / 2 + PANEL_WIDTH / 2,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS,
  );
  box7.receiveShadow = true;
  decorateBackgroundPanelGroup.add(box7);
  addBox(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardLightMaterial,
    LEFT_OR_RIGHT_WIDTH,
    WOOD_PANEL_MARGIN_BOTTOM,
    FRONT_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + LEFT_OR_RIGHT_WIDTH / 2,
    -PANEL_HEIGHT / 2 + PANEL_WIDTH / 2 + WOOD_PANEL_MARGIN_BOTTOM / 2,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS + FRONT_PANEL_THICKNESS / 2,
  );

  // 圆面
  addCylinder(
    decorateBackgroundPanelGroup,
    assetManager,
    woodBoardDarkMaterial,
    BOTTOM_RADIUS * BOTTOM_CYLINDER_RATIO,
    FRONT_PANEL_THICKNESS,
    0,
    -PANEL_HEIGHT / 2 +
      LEFT_OR_RIGHT_WIDTH +
      BOTTOM_RADIUS * (1 - BOTTOM_CYLINDER_RATIO) +
      BOTTOM_RADIUS * BOTTOM_CYLINDER_RATIO,
    BACK_PANEL_THICKNESS + FRONT_PANEL_THICKNESS / 2,
    new Vector3(Math.PI / 2, 0, 0),
  );

  // 置物横板
  const width3 =
    PANEL_WIDTH -
    LEFT_OR_RIGHT_WIDTH -
    BOTTOM_RADIUS * (1 - BOTTOM_CYLINDER_RATIO);
  const roundedBoxGeometry = generateRoundedBoxGeometry(
    width3,
    DIAPHRAGM_DEPTH,
    MIDDLE_PANEL_THICKNESS,
    0.02,
  );
  const diaphragm = new Mesh(roundedBoxGeometry, woodBoardDarkMaterial);
  diaphragm.position.set(
    -PANEL_WIDTH / 2 + width3 / 2,
    -PANEL_HEIGHT / 2 +
      PANEL_WIDTH / 2 +
      WOOD_PANEL_MARGIN_BOTTOM +
      MIDDLE_PANEL_THICKNESS / 2,
    BACK_PANEL_THICKNESS + DIAPHRAGM_DEPTH / 2,
  );
  diaphragm.rotation.x = Math.PI / 2;
  diaphragm.receiveShadow = true;
  decorateBackgroundPanelGroup.add(diaphragm);

  // 添加圆形射灯光源(对着下方的深色圆面照射)
  addRoundLight(
    decorateBackgroundPanelGroup,
    0,
    PANEL_HEIGHT / 2 + 0.3,
    BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS + FRONT_PANEL_THICKNESS + 0.4,
    0,
    -PANEL_HEIGHT / 2 +
      LEFT_OR_RIGHT_WIDTH +
      BOTTOM_RADIUS * (1 - BOTTOM_CYLINDER_RATIO) +
      BOTTOM_RADIUS * BOTTOM_CYLINDER_RATIO,
    BACK_PANEL_THICKNESS + (MIDDLE_PANEL_THICKNESS + FRONT_PANEL_THICKNESS) / 2,
    5,
  );

  // 添加发光灯带
  addAllLightingStrip(
    decorateBackgroundPanelGroup,
    assetManager,
    lightingStripLightMapRef,
  );

  return decorateBackgroundPanelGroup;
};

// 添加发光灯带
const addAllLightingStrip = (
  parent: Group,
  assetManager: AssetManager,
  lightingStripLightMapRef: MutableRefObject<Record<string, RectAreaLight[]>>,
) => {
  let lightList: RectAreaLight[] = [];
  const z = BACK_PANEL_THICKNESS + MIDDLE_PANEL_THICKNESS / 2;
  const lightList1 = addCircleLightingStrip(
    parent,
    assetManager,
    LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP + 0.01,
    MIDDLE_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + LEFT_TOP_RADIUS,
    PANEL_HEIGHT / 2,
    z,
    3,
    Math.PI / 2,
    -1,
    new Vector3(0, 0, Math.PI),
  );
  lightList = lightList.concat(lightList1);
  const width1 =
    PANEL_WIDTH - LEFT_TOP_RADIUS - (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP);
  const light1 = addLightingStrip(
    parent,
    assetManager,
    width1,
    MIDDLE_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + LEFT_TOP_RADIUS + width1 / 2,
    PANEL_HEIGHT / 2 - (LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP) - 0.01,
    z,
    true,
    new Vector3(Math.PI / 2, 0, 0),
    0.6 * Math.PI,
  );
  light1 && lightList.push(light1);
  const radius = RIGHT_TOP_RADIUS + LIGHTING_STRIP_GAP - 0.01;
  const lightList2 = addCircleLightingStrip(
    parent,
    assetManager,
    radius,
    MIDDLE_PANEL_THICKNESS,
    PANEL_WIDTH / 2 -
      (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP) -
      (radius + 0.01),
    PANEL_HEIGHT / 2 - (LEFT_TOP_RADIUS - LIGHTING_STRIP_GAP) - (radius + 0.01),
    z,
    3,
    Math.PI / 2,
  );
  lightList = lightList.concat(lightList2);
  const height =
    PANEL_HEIGHT -
    LEFT_TOP_RADIUS -
    RIGHT_TOP_RADIUS -
    LEFT_OR_RIGHT_WIDTH -
    BOTTOM_RADIUS;
  const light2 = addLightingStrip(
    parent,
    assetManager,
    height,
    MIDDLE_PANEL_THICKNESS,
    PANEL_WIDTH / 2 - LEFT_OR_RIGHT_WIDTH + LIGHTING_STRIP_GAP - 0.01,
    PANEL_HEIGHT / 2 - LEFT_TOP_RADIUS - RIGHT_TOP_RADIUS - height / 2,
    z,
    true,
    new Vector3(Math.PI / 2, Math.PI / 2, 0),
    0.6 * Math.PI,
  );
  light2 && lightList.push(light2);
  const radius2 = BOTTOM_RADIUS + LIGHTING_STRIP_GAP - 0.01;
  const lightList3 = addCircleLightingStrip(
    parent,
    assetManager,
    radius2,
    MIDDLE_PANEL_THICKNESS,
    0,
    -PANEL_HEIGHT / 2 +
      (LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP) +
      radius2 +
      0.01,
    z,
    6,
    Math.PI,
    1,
    new Vector3(0, 0, Math.PI),
  );
  lightList = lightList.concat(lightList3);
  const light3 = addLightingStrip(
    parent,
    assetManager,
    WOOD_PANEL_MARGIN_BOTTOM,
    MIDDLE_PANEL_THICKNESS,
    -PANEL_WIDTH / 2 + LEFT_OR_RIGHT_WIDTH - LIGHTING_STRIP_GAP + 0.01,
    -PANEL_HEIGHT / 2 + PANEL_WIDTH / 2 + WOOD_PANEL_MARGIN_BOTTOM / 2,
    z,
    true,
    new Vector3(Math.PI / 2, -Math.PI / 2, 0),
    0.6 * Math.PI,
  );
  light3 && lightList.push(light3);
  lightingStripLightMapRef.current.decorateBackgroundPanel = lightList;
};

export default addDecorateBackgroundPanel;
