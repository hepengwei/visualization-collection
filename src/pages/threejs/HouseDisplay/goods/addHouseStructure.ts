/**
 * 添加房屋结构，包括地板、所有墙体、踢脚线和玻璃窗
 * showWallLabel 是否显示每个墙体的编号标签，默认不显示
 */
import { RefObject } from "react";
import {
  Scene,
  MeshStandardMaterial,
  Mesh,
  DoubleSide,
  CanvasTexture,
  SpriteMaterial,
  Sprite,
  TextureLoader,
  RepeatWrapping,
  MeshPhysicalMaterial,
  SRGBColorSpace,
  InstancedMesh,
  Object3D,
  DynamicDrawUsage,
  Group,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
// 导入大理石贴图
import marbleBaseColorImg from "images/threejs/marbleFloor/marble_basecolor.png";
import marbleNormalImg from "images/threejs/marbleFloor/marble_normal.png";
import marbleRoughnessImg from "images/threejs/marbleFloor/marble_roughness.png";
import marbleHeightImg from "images/threejs/marbleFloor/marble_height.png";

type SkirtingLineType = "front" | "back" | "double" | "all"; // 如果是竖墙，则"front"为左， "back"为右

export const WALL_HEIGHT = 4; // 墙体高度
const BEAM_HEIGHT = 0.5; // 门框上方横梁的墙体高度
const WALL_THICKNESS = 0.3; // 墙体厚度
const WALL_COLOR = 0xf4f3ef; // 珍珠白乳胶漆颜色
const WALL_LABEL_SIZE = 1.5; // 墙体标签的大小
const WALL_LABEL_COLOR = "#FFFF00"; // 墙体标签的颜色
const SKIRTING_LINE_HEIGHT = 0.1; // 墙体踢脚线高度
const SKIRTING_LINE_THICKNESS = 0.02; // 墙体踢脚线厚度
const SKIRTING_LINE_COLOR = 0xbfc3c7; // 墙体踢脚线的颜色
const GLASS_THICKNESS = 0.1; // 玻璃厚度
const ALUMINIUM_ALLOY_FRAME_HEIGHT = 0.1; // 玻璃铝合金包边高度
const ALUMINIUM_ALLOY_FRAME_THICKNESS = 0.12; // 玻璃铝合金包边厚度
const PASS_EDGE_BINDING_HEIGHT = 0.1; // 垭口包边高度
const PASS_EDGE_BINDING_THICKNESS = 0.02; // 垭口包边厚度
// 地板参数
const TILE_SIZE = 1.5; // 1.5m的地砖
const GAP_SIZE = 0.005; // 5mm的缝隙
const FLOOR_WIDTH = 41.6; // 地板总宽度
const FLOOR_DEPTH = 32; // 地板总深度

// 所有墙体的尺寸和位置
const wallList: (
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      SkirtingLineType | undefined,
    ]
  | number[]
)[] = [
  [14.55, WALL_HEIGHT, WALL_THICKNESS, -10.475, WALL_HEIGHT / 2, -16, "all"],
  [1.4, 0.5, WALL_THICKNESS, -0.8, 3.75, -16],
  [4.8, 1.5, WALL_THICKNESS, -0.8, 0.75, -16, "double"],
  [2.31, WALL_HEIGHT, WALL_THICKNESS, -2.65, WALL_HEIGHT / 2, -16, "double"],
  [1.64, WALL_HEIGHT, WALL_THICKNESS, 0.72, WALL_HEIGHT / 2, -16, "double"],
  [1.4, 0.5, WALL_THICKNESS, 3.8, 3.75, -16],
  [2.9, 1.5, WALL_THICKNESS, 3.05, 0.75, -16, "double"],
  [1.71, WALL_HEIGHT, WALL_THICKNESS, 2.25, WALL_HEIGHT / 2, -16, "double"],
  [13.25, WALL_HEIGHT, WALL_THICKNESS, 11.125, WALL_HEIGHT / 2, -16, "all"],
  [WALL_THICKNESS, 0.5, 4, 17.6, 3.75, -13.2],
  // #11
  [WALL_THICKNESS, 1.5, 4, 17.6, 0.75, -13.2, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.8, 17.6, WALL_HEIGHT / 2, -15.6, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.8, 17.6, WALL_HEIGHT / 2, -10.8, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 4, 17.6, WALL_HEIGHT / 2, -8.4, "back"],
  [WALL_THICKNESS, 0.5, 7.12, 17.6, 3.75, -1.92],
  [WALL_THICKNESS, 0.5, 7.12, 17.6, 0.25, -1.92, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.92, 17.6, WALL_HEIGHT / 2, -5.94, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.92, 17.6, WALL_HEIGHT / 2, 1.8, "double"],
  [WALL_THICKNESS, 0.5, 1.4, 17.6, 3.75, 5.09],
  [WALL_THICKNESS, 1.5, 1.4, 17.6, 0.75, 5.09, "double"],
  // #21
  [WALL_THICKNESS, WALL_HEIGHT, 2.2, 17.6, WALL_HEIGHT / 2, 3.3, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 2.94, 17.6, WALL_HEIGHT / 2, 7.25, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 6.1, -6.4, WALL_HEIGHT / 2, 12.76, "front"],
  [6.7, WALL_HEIGHT, WALL_THICKNESS, -3.2, WALL_HEIGHT / 2, 15.92, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 5.2, -2.56, WALL_HEIGHT / 2, 7, "double"],
  [11.4, WALL_HEIGHT, WALL_THICKNESS, 12.05, WALL_HEIGHT / 2, 8.8, "all"],
  [WALL_THICKNESS, 0.5, 5.6, -17.6, 3.75, -12.4],
  [WALL_THICKNESS, 1.5, 5.6, -17.6, 0.75, -12.4, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.8, -17.6, WALL_HEIGHT / 2, -15.6, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.8, -17.6, WALL_HEIGHT / 2, -9.2, "double"],
  // #31
  [WALL_THICKNESS, WALL_HEIGHT, 4, -17.6, WALL_HEIGHT / 2, -6.8, "front"],
  [WALL_THICKNESS, 0.5, 12.8, -17.6, 3.75, 3.2],
  [WALL_THICKNESS, 0.5, 12.8, -17.6, 0.25, 3.2, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 1.6, -17.6, WALL_HEIGHT / 2, -4, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 1.6, -17.6, WALL_HEIGHT / 2, 10.4, "double"],
  [14.4, WALL_HEIGHT, WALL_THICKNESS, -8.4, WALL_HEIGHT / 2, -6.4, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 4.35, -3.25, WALL_HEIGHT / 2, -13.7, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 6.4, 1.6, WALL_HEIGHT / 2, -12.8, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 7.34, 6, WALL_HEIGHT / 2, -12.39, "all"],
  [8.9, WALL_HEIGHT, WALL_THICKNESS, -9.4, WALL_HEIGHT / 2, 4.4, "all"],
  // #41
  [WALL_THICKNESS, WALL_HEIGHT, 2.1, -15.6, WALL_HEIGHT / 2, 12.3, "all"],
  [2.3, WALL_HEIGHT, WALL_THICKNESS, -16.6, WALL_HEIGHT / 2, 11.3, "all"],
  [6.7, WALL_HEIGHT, WALL_THICKNESS, -3.2, WALL_HEIGHT / 2, 9.6, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 6.1, 0, WALL_HEIGHT / 2, 12.76, "back"],
  [2.6, WALL_HEIGHT, WALL_THICKNESS, 16.4, WALL_HEIGHT / 2, 2.3, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 3, 4.8, WALL_HEIGHT / 2, 3.9, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 3.4, 6.4, WALL_HEIGHT / 2, 7.3, "all"],
  [3, WALL_HEIGHT, WALL_THICKNESS, 5.05, WALL_HEIGHT / 2, 5.5, "all"],
  [7.4, WALL_HEIGHT, WALL_THICKNESS, 0.3, WALL_HEIGHT / 2, -9.6, "all"],
  [11.6, WALL_HEIGHT, WALL_THICKNESS, 11.65, WALL_HEIGHT / 2, -6.4, "all"],
  // #51
  [1.86, WALL_HEIGHT, WALL_THICKNESS, -16.67, WALL_HEIGHT / 2, -8.8, "front"],
  [1.86, WALL_HEIGHT, WALL_THICKNESS, -16.67, WALL_HEIGHT / 2, -4.8, "back"],
  [WALL_THICKNESS, WALL_HEIGHT, 4.3, -15.6, WALL_HEIGHT / 2, -6.8, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 4, 15.6, WALL_HEIGHT / 2, -8.4, "front"],
  [2.1, WALL_HEIGHT, WALL_THICKNESS, 16.5, WALL_HEIGHT / 2, -10.4, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 2, -13.2, WALL_HEIGHT / 2, -5.4, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 1.5, -13.2, WALL_HEIGHT / 2, 3.65, "double"],
  [2.4, WALL_HEIGHT, WALL_THICKNESS, 5.85, WALL_HEIGHT / 2, 2.3, "all"],
  [4.1, WALL_HEIGHT, WALL_THICKNESS, -1.1, WALL_HEIGHT / 2, 4.4, "double"],
  [WALL_THICKNESS, WALL_HEIGHT, 1.8, -14, WALL_HEIGHT / 2, 12.3, "all"],
  // #61
  [WALL_THICKNESS, WALL_HEIGHT, 1.5, 1, WALL_HEIGHT / 2, 5, "all"],
  [9.2, WALL_HEIGHT, WALL_THICKNESS, -11, WALL_HEIGHT / 2, 13.2, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 1.5, -14, WALL_HEIGHT / 2, 5, "all"],
  [WALL_THICKNESS, BEAM_HEIGHT, 7.3, -13.2, WALL_HEIGHT - BEAM_HEIGHT / 2, -0.75],
  [8.05, BEAM_HEIGHT, WALL_THICKNESS, 11.075, WALL_HEIGHT - BEAM_HEIGHT / 2, 2.3],
  [2.4, BEAM_HEIGHT, WALL_THICKNESS, 2.35, WALL_HEIGHT - BEAM_HEIGHT / 2, 5.5],
  [WALL_THICKNESS, BEAM_HEIGHT, 2, -1.35, WALL_HEIGHT - BEAM_HEIGHT / 2, -7.8],
  [WALL_THICKNESS, BEAM_HEIGHT, 2, 6, WALL_HEIGHT - BEAM_HEIGHT / 2, -7.8],
  [WALL_THICKNESS, BEAM_HEIGHT, 1.9, -3.25, WALL_HEIGHT - BEAM_HEIGHT / 2, -10.68],
  [2.1, BEAM_HEIGHT, WALL_THICKNESS, 4.85, WALL_HEIGHT - BEAM_HEIGHT / 2, -9.6],
  // #71
  [WALL_THICKNESS, BEAM_HEIGHT, 6, -14, WALL_HEIGHT - BEAM_HEIGHT / 2, 8.5],
  [1.8, BEAM_HEIGHT, WALL_THICKNESS, -4.05, WALL_HEIGHT - BEAM_HEIGHT / 2, 4.4],
  [WALL_THICKNESS, WALL_HEIGHT, 0.45, -1.35, WALL_HEIGHT / 2, -6.72, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.75, -1.35, WALL_HEIGHT / 2, -9.07, "all"],
  [WALL_THICKNESS, WALL_HEIGHT, 0.42, 6, WALL_HEIGHT / 2, -6.73, "all"],
];
// 所有玻璃窗的尺寸和位置
const glassList = [
  [1.4, 2, GLASS_THICKNESS, -0.8, 2.5, -16],
  [1.4, 2, GLASS_THICKNESS, 3.8, 2.5, -16],
  [GLASS_THICKNESS, 2, 4, 17.6, 2.5, -13.2],
  [GLASS_THICKNESS, 3, 6.84, 17.6, 2, -2.07],
  [GLASS_THICKNESS, 2, 1.4, 17.6, 2.5, 5.09],
  [GLASS_THICKNESS, 2, 5.6, -17.6, 2.5, -12.4],
  [GLASS_THICKNESS, 3, 12.8, -17.6, 2, 3.2],
];
// 所有垭口包边的尺寸和位置
const passEdgeBindingList = [
  [
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    PASS_EDGE_BINDING_HEIGHT,
    7.3,
    -13.2,
    WALL_HEIGHT - BEAM_HEIGHT - PASS_EDGE_BINDING_HEIGHT / 2,
    -0.75,
  ],
  [
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_HEIGHT - BEAM_HEIGHT,
    PASS_EDGE_BINDING_HEIGHT,
    -13.2,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    3.65 - (1.5 + PASS_EDGE_BINDING_HEIGHT) / 2,
  ],
  [
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_HEIGHT - BEAM_HEIGHT,
    PASS_EDGE_BINDING_HEIGHT,
    -13.2,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    -5.4 + (2 + PASS_EDGE_BINDING_HEIGHT) / 2,
  ],
  [
    8.05,
    PASS_EDGE_BINDING_HEIGHT,
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    11.075,
    WALL_HEIGHT - BEAM_HEIGHT - PASS_EDGE_BINDING_HEIGHT / 2,
    2.3,
  ],
  [
    PASS_EDGE_BINDING_HEIGHT,
    WALL_HEIGHT - BEAM_HEIGHT,
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    5.85 + (2.4 + PASS_EDGE_BINDING_HEIGHT) / 2,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    2.3,
  ],
  [
    PASS_EDGE_BINDING_HEIGHT,
    WALL_HEIGHT - BEAM_HEIGHT,
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    16.4 - (2.6 + PASS_EDGE_BINDING_HEIGHT) / 2,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    2.3,
  ],
];

const addHouseStructure = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  showWallLabel = false,
) => {
  // 创建并添加大理石地板
  addMarbleFloor(scene, assetManager);

  // 创建并添加所有墙体和玻璃窗
  addAllWall(
    scene,
    assetManager,
    mouseRaycasterIntersectObjectsRef,
    pointerControlsIntersetObjectsRef,
    showWallLabel,
  );

  // 创建并添加所有垭口包边
  addPassEdgeBinding(
    scene,
    assetManager,
    mouseRaycasterIntersectObjectsRef,
    pointerControlsIntersetObjectsRef,
  );
};

// 创建并添加所有的墙体和玻璃窗
const addAllWall = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  showWallLabel: boolean,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  // 墙体材质
  const wallMaterial = new MeshStandardMaterial({
    color: WALL_COLOR,
    roughness: 0.85, // 乳胶漆的粗糙度，有轻微漫反射
    metalness: 0, // 完全不反射金属光泽
    envMapIntensity: 0.3,
  });
  assetManager.materials.set("wallMaterial", wallMaterial);
  //  踢脚线材质
  const skirtingLineMaterial = new MeshStandardMaterial({
    color: SKIRTING_LINE_COLOR,
    metalness: 0.8, // 金属感
    roughness: 0.3, // 拉丝阳极氧化，别给到 0 否则变镜子
    envMapIntensity: 1.0, // 需要场景里有 envMap 才出反射
  });
  assetManager.materials.set("skirtingLineMaterial", skirtingLineMaterial);
  // 玻璃材质
  const glassMaterial = new MeshStandardMaterial({
    color: 0x87ceeb,
    transparent: true,
    opacity: 0.25,
    roughness: 0.1,
    metalness: 0.1,
    depthWrite: false, // 透明物体不写深度，避免遮挡后面的透明物体
  });
  assetManager.materials.set("glassMaterial", glassMaterial);

  // 使用InstancedMesh实例化渲染，提高性能
  const instancedMesh = new InstancedMesh(
    boxGeometry,
    wallMaterial,
    wallList.length,
  );
  instancedMesh.name = "墙体";
  // 将墙体加入鼠标射线检测是为了防止隔墙高亮了可交互的物体
  mouseRaycasterIntersectObjectsRef.current?.push(instancedMesh);
  pointerControlsIntersetObjectsRef.current?.push(instancedMesh);
  instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  instancedMesh.receiveShadow = true;
  instancedMesh.castShadow = true;

  // 添加所有的墙体
  const dummy = new Object3D();
  wallList.forEach(
    (
      item:
        | [
            number,
            number,
            number,
            number,
            number,
            number,
            SkirtingLineType | undefined,
          ]
        | number[],
      index: number,
    ) => {
      addWall(
        scene,
        assetManager,
        instancedMesh,
        dummy,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        item[5],
        index + 1,
        showWallLabel,
        item[6] as SkirtingLineType | undefined,
      );
    },
  );
  scene.add(instancedMesh);

  // 添加所有的玻璃窗
  glassList.forEach((item: number[]) => {
    addGlassWindow(
      scene,
      assetManager,
      mouseRaycasterIntersectObjectsRef,
      pointerControlsIntersetObjectsRef,
      item[0],
      item[1],
      item[2],
      item[3],
      item[4],
      item[5],
    );
  });
};

/**
 * 创建并添加墙体
 */
const addWall = (
  scene: Scene,
  assetManager: AssetManager,
  instancedMesh: InstancedMesh,
  dummy: Object3D,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  number: number,
  showWallLabel = false,
  skirtingLineType?: SkirtingLineType,
) => {
  dummy.scale.set(width, height, depth);
  dummy.position.set(x, y, z);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(number - 1, dummy.matrix);

  // 添加踢脚线
  if (skirtingLineType) {
    addSkirtingLine(scene, assetManager, dummy, skirtingLineType);
  }

  // 添加序号标签
  if (showWallLabel) {
    addWallLabel(scene, width, height, depth, x, y, z, number);
  }
};

// 创建并添加踢脚线
const addSkirtingLine = (
  scene: Scene,
  assetManager: AssetManager,
  dummy: Object3D,
  skirtingLineType: SkirtingLineType,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const skirtingLineMaterial = assetManager.materials.get(
    "skirtingLineMaterial",
  );
  const { x: width, y: height, z: depth } = dummy.scale;
  const { x, y, z } = dummy.position;
  if (width > depth) {
    // 横墙
    if (skirtingLineType === "front") {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(width, SKIRTING_LINE_HEIGHT, SKIRTING_LINE_THICKNESS);
      frontSkirtingLine.position.set(
        x,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z - (depth + SKIRTING_LINE_THICKNESS) / 2,
      );
      scene.add(frontSkirtingLine);
    } else {
      const backSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      backSkirtingLine.scale.set(width, SKIRTING_LINE_HEIGHT, SKIRTING_LINE_THICKNESS);
      backSkirtingLine.position.set(
        x,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z + (depth + SKIRTING_LINE_THICKNESS) / 2,
      );
      scene.add(backSkirtingLine);
    }
    if (["double", "all"].includes(skirtingLineType)) {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(width, SKIRTING_LINE_HEIGHT, SKIRTING_LINE_THICKNESS);
      frontSkirtingLine.position.set(
        x,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z - (depth + SKIRTING_LINE_THICKNESS) / 2,
      );
      scene.add(frontSkirtingLine);
      if (skirtingLineType === "all") {
        const leftSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        leftSkirtingLine.scale.set(
          SKIRTING_LINE_THICKNESS,
          SKIRTING_LINE_HEIGHT,
          depth + SKIRTING_LINE_THICKNESS * 2,
        );
        leftSkirtingLine.position.set(
          x - (width + SKIRTING_LINE_THICKNESS) / 2,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z,
        );
        scene.add(leftSkirtingLine);
        const rightSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        rightSkirtingLine.scale.set(
          SKIRTING_LINE_THICKNESS,
          SKIRTING_LINE_HEIGHT,
          depth + SKIRTING_LINE_THICKNESS * 2,
        );
        rightSkirtingLine.position.set(
          x + (width + SKIRTING_LINE_THICKNESS) / 2,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z,
        );
        scene.add(rightSkirtingLine);
      }
    }
  } else {
    // 竖墙
    if (skirtingLineType === "front") {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(SKIRTING_LINE_THICKNESS, SKIRTING_LINE_HEIGHT, depth);
      frontSkirtingLine.position.set(
        x - (width + SKIRTING_LINE_THICKNESS) / 2,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z,
      );
      scene.add(frontSkirtingLine);
    } else {
      const backSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      backSkirtingLine.scale.set(SKIRTING_LINE_THICKNESS, SKIRTING_LINE_HEIGHT, depth);
      backSkirtingLine.position.set(
        x + (width + SKIRTING_LINE_THICKNESS) / 2,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z,
      );
      scene.add(backSkirtingLine);
    }
    if (["double", "all"].includes(skirtingLineType)) {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(SKIRTING_LINE_THICKNESS, SKIRTING_LINE_HEIGHT, depth);
      frontSkirtingLine.position.set(
        x - (width + SKIRTING_LINE_THICKNESS) / 2,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z,
      );
      scene.add(frontSkirtingLine);
      if (skirtingLineType === "all") {
        const leftSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        leftSkirtingLine.scale.set(
          width + SKIRTING_LINE_THICKNESS * 2,
          SKIRTING_LINE_HEIGHT,
          SKIRTING_LINE_THICKNESS,
        );
        leftSkirtingLine.position.set(
          x,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z - (depth + SKIRTING_LINE_THICKNESS) / 2,
        );
        scene.add(leftSkirtingLine);
        const rightSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        rightSkirtingLine.scale.set(
          width + SKIRTING_LINE_THICKNESS * 2,
          SKIRTING_LINE_HEIGHT,
          SKIRTING_LINE_THICKNESS,
        );
        rightSkirtingLine.position.set(
          x,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z + (depth + SKIRTING_LINE_THICKNESS) / 2,
        );
        scene.add(rightSkirtingLine);
      }
    }
  }
};

// 创建并添加墙体标签
const addWallLabel = (
  scene: Scene,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  number: number,
) => {
  // 创建canvas绘制文字
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = WALL_LABEL_COLOR; // 黄色
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(number.toString(), canvas.width / 2, canvas.height / 2);
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  const spriteMaterial = new SpriteMaterial({ map: texture });

  const labelSprite = new Sprite(spriteMaterial);
  if (width > depth) {
    // 横墙
    labelSprite.position.set(x, y + height / 2 + 0.2, z);
  } else {
    // 竖墙
    labelSprite.position.set(x, y + height / 2 + 0.2, z);
  }
  labelSprite.scale.set(WALL_LABEL_SIZE, WALL_LABEL_SIZE, WALL_LABEL_SIZE);
  scene.add(labelSprite);
};

/**
 * 创建并添加玻璃窗
 */
const addGlassWindow = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const glassMaterial = assetManager.materials.get("glassMaterial");
  const glassWindowGroup = new Group();
  glassWindowGroup.position.set(x, y, z);
  scene.add(glassWindowGroup);
  const glassWindow = new Mesh(boxGeometry, glassMaterial);
  glassWindow.name = "玻璃窗";
  glassWindow.scale.set(width, height, depth);
  // 将玻璃窗加入鼠标射线检测是为了防止隔玻璃高亮了可交互的物体
  mouseRaycasterIntersectObjectsRef.current?.push(glassWindow);
  pointerControlsIntersetObjectsRef.current?.push(glassWindow);
  glassWindowGroup.add(glassWindow);

  // 添加玻璃窗铝合金包边
  const aluminiumAlloyFrameMaterial = assetManager.materials.get(
    "aluminiumAlloyFrameMaterial",
  );
  const topAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  const bottomAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  const leftAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  const rightAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  if (width > depth) {
    // 横向玻璃
    topAluminiumAlloyFrame.scale.set(
      width,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    bottomAluminiumAlloyFrame.scale.set(
      width,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    leftAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      height,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    leftAluminiumAlloyFrame.position.set(
      (ALUMINIUM_ALLOY_FRAME_THICKNESS - width) / 2,
      0,
      0,
    );
    rightAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      height,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    rightAluminiumAlloyFrame.position.set(
      (width - ALUMINIUM_ALLOY_FRAME_THICKNESS) / 2,
      0,
      0,
    );
  } else {
    // 竖向玻璃
    topAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      depth,
    );
    bottomAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      depth,
    );
    leftAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      height,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
    );
    leftAluminiumAlloyFrame.position.set(
      0,
      0,
      (depth - ALUMINIUM_ALLOY_FRAME_HEIGHT) / 2,
    );
    rightAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      height,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
    );
    rightAluminiumAlloyFrame.position.set(
      0,
      0,
      (ALUMINIUM_ALLOY_FRAME_HEIGHT - depth) / 2,
    );
  }
  topAluminiumAlloyFrame.position.set(
    0,
    (height - ALUMINIUM_ALLOY_FRAME_HEIGHT) / 2,
    0,
  );
  bottomAluminiumAlloyFrame.position.set(
    0,
    (ALUMINIUM_ALLOY_FRAME_HEIGHT - height) / 2,
    0,
  );
  glassWindowGroup.add(topAluminiumAlloyFrame);
  glassWindowGroup.add(bottomAluminiumAlloyFrame);
  glassWindowGroup.add(leftAluminiumAlloyFrame);
  glassWindowGroup.add(rightAluminiumAlloyFrame);
};

// 创建并添加大理石地板
const addMarbleFloor = (scene: Scene, assetManager: AssetManager) => {
  // 加载大理石地板贴图
  const textureLoader = new TextureLoader();
  const marbleBaseColor = textureLoader.load(marbleBaseColorImg);
  assetManager.textures.set("marbleBaseColor", marbleBaseColor);
  marbleBaseColor.colorSpace = SRGBColorSpace;
  const marbleNormal = textureLoader.load(marbleNormalImg);
  assetManager.textures.set("marbleNormal", marbleNormal);
  const marbleRoughness = textureLoader.load(marbleRoughnessImg);
  assetManager.textures.set("marbleRoughness", marbleRoughness);
  const marbleHeight = textureLoader.load(marbleHeightImg);
  assetManager.textures.set("marbleHeight", marbleHeight);

  // 设置贴图重复（每块砖一次完整贴图）
  [marbleBaseColor, marbleNormal, marbleRoughness, marbleHeight].forEach(
    (texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.needsUpdate = true;
      texture.repeat.set(1, 1);
    },
  );

  // 计算需要多少块砖
  const tilesX = Math.ceil(FLOOR_WIDTH / (TILE_SIZE + GAP_SIZE));
  const tilesZ = Math.ceil(FLOOR_DEPTH / (TILE_SIZE + GAP_SIZE));

  const planeGeometry = assetManager.geometries.get("planeGeometry");
  // 创建地砖材质
  const tileMaterial = new MeshPhysicalMaterial({
    map: marbleBaseColor,
    normalMap: marbleNormal,
    roughnessMap: marbleRoughness,
    displacementMap: marbleHeight,
    displacementScale: 0.05,
    roughness: 0.15, // 亮光砖，低粗糙度
    metalness: 0.1, // 轻微金属感
    clearcoat: 0.5, // 清漆层，增加光泽
    clearcoatRoughness: 0.1, // 清漆层粗糙度
    reflectivity: 0.8, // 反射率
    envMapIntensity: 1.2,
    side: DoubleSide,
  });
  assetManager.materials.set("tileMaterial", tileMaterial);

  // 使用InstancedMesh实例化渲染，提高性能
  const instancedMesh = new InstancedMesh(
    planeGeometry,
    tileMaterial,
    tilesX * tilesZ,
  );
  instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  instancedMesh.receiveShadow = true;

  // 生成每块地砖
  const dummy = new Object3D();
  dummy.scale.set(TILE_SIZE, TILE_SIZE);
  dummy.rotation.x = -Math.PI / 2;
  for (let x = 0; x < tilesX; x++) {
    for (let z = 0; z < tilesZ; z++) {
      // 计算地砖位置（从左上角开始）
      const posX = -FLOOR_WIDTH / 2 + x * (TILE_SIZE + GAP_SIZE) + TILE_SIZE / 2;
      const posZ = -FLOOR_DEPTH / 2 + z * (TILE_SIZE + GAP_SIZE) + TILE_SIZE / 2;
      dummy.position.set(posX, 0, posZ);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(z * tilesX + x, dummy.matrix);
    }
  }
  scene.add(instancedMesh);

  // 创建白色缝隙底板
  const gapFloorMaterial = new MeshStandardMaterial({
    color: 0xffffff, // 白色缝隙
    roughness: 0.8,
    metalness: 0,
  });
  assetManager.materials.set("gapFloorMaterial", gapFloorMaterial);
  const gapFloor = new Mesh(planeGeometry, gapFloorMaterial);
  gapFloor.scale.set(FLOOR_WIDTH, FLOOR_DEPTH);
  gapFloor.rotation.x = -Math.PI / 2;
  gapFloor.position.y = -0.001; // 略低于地砖，作为缝隙
  gapFloor.receiveShadow = true;
  scene.add(gapFloor);
};

// 创建并添加所有的垭口包边
const addPassEdgeBinding = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const skirtingLineMaterial = assetManager.materials.get(
    "skirtingLineMaterial",
  );

  passEdgeBindingList.forEach((item: number[]) => {
    const passEdgeBinding = new Mesh(boxGeometry, skirtingLineMaterial);
    passEdgeBinding.name = "垭口包边";
    passEdgeBinding.scale.set(item[0], item[1], item[2]);
    passEdgeBinding.position.set(item[3], item[4], item[5]);
    mouseRaycasterIntersectObjectsRef.current?.push(passEdgeBinding);
    pointerControlsIntersetObjectsRef.current?.push(passEdgeBinding);
    scene.add(passEdgeBinding);
  });
};

export default addHouseStructure;
