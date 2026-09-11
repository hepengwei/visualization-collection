/**
 * 添加哑光钢化玻璃白板
 */
import { MutableRefObject } from "react";
import {
  Scene,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Mesh,
  Group,
  Color,
  Object3D,
  DoubleSide,
  Vector3,
  WebGLRenderer,
  CanvasTexture,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { generateRoundedBoxGeometry } from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  BEAM_HEIGHT,
  WALL_70_WIDTH,
  WALL_72_POSITION_X,
  WALL_73_POSITION_Z,
  SKIRTING_LINE_HEIGHT,
} from "../hardDecoration/addHouseStructure";
import { SHOE_CABINET_DEPTH } from "../hardDecoration/addShoeCabinet";

const GLASS_WHITEBOARD_GAP = 0.16; // 边距
const GLASS_WHITEBOARD_WIDTH =
  WALL_70_WIDTH +
  WALL_THICKNESS +
  SHOE_CABINET_DEPTH -
  GLASS_WHITEBOARD_GAP * 2; // 玻璃白板的宽
const GLASS_WHITEBOARD_HEIGHT =
  WALL_HEIGHT - SKIRTING_LINE_HEIGHT - BEAM_HEIGHT - GLASS_WHITEBOARD_GAP * 2; // 玻璃白板的高
const GLASS_WHITEBOARD_THICKNESS = 0.01; // 玻璃白板的总厚度
const GLASS_WHITEBOARD_BG_THICKNESS = 0.002; // 玻璃白板的背景白板的厚度
const GLASS_THICKNESS =
  GLASS_WHITEBOARD_THICKNESS - GLASS_WHITEBOARD_BG_THICKNESS;
const GLASS_WHITEBOARD_RADIUS = 0.1; // 圆角半径
const GLASS_WHITEBOARD_POSITION = new Vector3(
  WALL_72_POSITION_X -
    WALL_THICKNESS / 2 -
    SHOE_CABINET_DEPTH +
    GLASS_WHITEBOARD_GAP +
    GLASS_WHITEBOARD_WIDTH / 2,
  SKIRTING_LINE_HEIGHT + GLASS_WHITEBOARD_GAP + GLASS_WHITEBOARD_HEIGHT / 2,
  WALL_73_POSITION_Z - WALL_THICKNESS / 2,
);

const addGlassWhiteboard = (
  scene: Scene,
  renderer: WebGLRenderer,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const whitePanelMaterial2 = assetManager.materials.get("whitePanelMaterial2");
  // 哑光钢化玻璃白板材质
  const glassWhiteboardMaterial = new MeshPhysicalMaterial({
    color: 0xfafaf7,
    metalness: 0.0,
    roughness: 0.4, // 哑光磨砂
    transmission: 0.6, // 玻璃透射
    thickness: 0.012,
    ior: 1.52,
    clearcoat: 0.6, // 钢化表面清漆层
    clearcoatRoughness: 0.2,
    attenuationColor: new Color(0xe8f0ff),
    attenuationDistance: 0.1,
    side: DoubleSide,
  });
  assetManager.materials.set(
    "glassWhiteboardMaterial",
    glassWhiteboardMaterial,
  );

  const glassWhiteboardGroup = new Group();
  glassWhiteboardGroup.name = "哑光钢化玻璃白板";
  glassWhiteboardGroup.position.copy(GLASS_WHITEBOARD_POSITION);
  glassWhiteboardGroup.rotation.y = Math.PI;
  pointerControlsIntersetObjectsRef.current.push(glassWhiteboardGroup);
  scene.add(glassWhiteboardGroup);

  const roundedBoxGeometry1 = generateRoundedBoxGeometry(
    GLASS_WHITEBOARD_WIDTH,
    GLASS_WHITEBOARD_HEIGHT,
    GLASS_WHITEBOARD_BG_THICKNESS,
    GLASS_WHITEBOARD_RADIUS,
  );
  const whiteBg = new Mesh(roundedBoxGeometry1, whitePanelMaterial2);
  whiteBg.position.set(0, 0, GLASS_WHITEBOARD_BG_THICKNESS / 2);
  glassWhiteboardGroup.add(whiteBg);

  const roundedBoxGeometry2 = generateRoundedBoxGeometry(
    GLASS_WHITEBOARD_WIDTH,
    GLASS_WHITEBOARD_HEIGHT,
    GLASS_THICKNESS,
    GLASS_WHITEBOARD_RADIUS,
  );
  const glassWhiteboard = new Mesh(
    roundedBoxGeometry2,
    glassWhiteboardMaterial,
  );
  glassWhiteboard.position.set(
    0,
    0,
    GLASS_WHITEBOARD_BG_THICKNESS + GLASS_THICKNESS / 2 + 0.01,
  );
  glassWhiteboardGroup.add(glassWhiteboard);

  // 添加白板上的涂鸦
  const writingTex = createWritingTexture(renderer);
  const writingMat = new MeshBasicMaterial({
    map: writingTex,
    transparent: true,
    opacity: 1.0,
    depthWrite: true, // 关键：让笔迹写入深度，不被玻璃透射 pass 遮挡
  });
  const writingMesh = new Mesh(planeGeometry, writingMat);
  writingMesh.scale.set(
    GLASS_WHITEBOARD_WIDTH * 0.96,
    GLASS_WHITEBOARD_HEIGHT * 0.96,
  );
  writingMesh.position.z = GLASS_WHITEBOARD_THICKNESS + 0.02;
  glassWhiteboardGroup.add(writingMesh);
};

const createWritingTexture = (renderer: WebGLRenderer) => {
  const canvas = document.createElement("canvas");
  canvas.width = GLASS_WHITEBOARD_WIDTH * 1000;
  canvas.height = GLASS_WHITEBOARD_HEIGHT * 1000;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // 透明底色（重要：让笔迹仅显示在有墨处）
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const fontHeight1 = 90;
  const fontHeight2 = 70;
  const initX1 = 360;

  writeText(ctx, "好好学习，天天向上", initX1, 600, 160, "#c0392b");

  let currentY1 = 900;
  ctx.strokeStyle = "#1a1a2e";
  ctx.beginPath();
  writeText(ctx, "To-Do List", initX1, currentY1, 80);
  ctx.beginPath();
  currentY1 += 20;
  ctx.moveTo(initX1, currentY1);
  ctx.lineTo(initX1 + 340, currentY1);
  ctx.stroke();

  currentY1 += 90;
  writeText(ctx, "☐ 买菜 — 鸡蛋 / 牛奶 / 面包", initX1, currentY1, 60);
  currentY1 += fontHeight1;
  writeText(ctx, "☐ 接孩子放学 17:30", initX1, currentY1, 60);
  currentY1 += fontHeight1;
  writeText(ctx, "☐ 交水电费", initX1, currentY1, 60);
  currentY1 += fontHeight1;
  writeText(ctx, "☐ 预约周末看电影", initX1, currentY1, 60);

  currentY1 += 230;
  writeText(ctx, "Shopping", initX1, currentY1, 70);
  ctx.beginPath();
  currentY1 += 20;
  ctx.moveTo(initX1, currentY1);
  ctx.lineTo(initX1 + 260, currentY1);
  ctx.stroke();
  currentY1 += fontHeight1;
  writeText(ctx, "• 咖啡豆", initX1, currentY1, 56);
  currentY1 += fontHeight2;
  writeText(ctx, "• 猫粮", initX1, currentY1, 56);
  currentY1 += fontHeight2;
  writeText(ctx, "• 打印纸", initX1, currentY1, 56);

  const initX2 = 1500;
  const initY2 = 1100;
  let currentY2 = initY2;
  // 右侧随手涂鸦（用黑+深蓝粗线，确保在磨砂玻璃上清晰可见）
  ctx.lineWidth = 10;
  // 一朵小花的涂鸦（描边）
  ctx.strokeStyle = "#1a1a2e";
  ctx.beginPath();
  ctx.arc(initX2, currentY2, 45, 0, Math.PI * 2); // 花心
  ctx.stroke();
  ctx.strokeStyle = "#2e6fb0";
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const px = initX2 + Math.cos(a) * 70;
    const py = currentY2 + Math.sin(a) * 70;
    ctx.beginPath();
    ctx.arc(px, py, 28, 0, Math.PI * 2);
    ctx.stroke();
  }
  // 花瓣填充一点淡色，让涂鸦更明显
  ctx.fillStyle = "rgba(78, 143, 210, 0.5)";
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const px = initX2 + Math.cos(a) * 70;
    const py = currentY2 + Math.sin(a) * 70;
    ctx.beginPath();
    ctx.arc(px, py, 26, 0, Math.PI * 2);
    ctx.fill();
  }
  // 花茎
  ctx.strokeStyle = "#1a1a2e";
  ctx.lineWidth = 8;
  ctx.beginPath();
  currentY2 += 45;
  ctx.moveTo(initX2, currentY2);
  currentY2 += 75;
  ctx.quadraticCurveTo(initX2 + 20, currentY2, initX2 - 20, currentY2 + 60);
  ctx.stroke();
  // 叶子
  ctx.fillStyle = "#2e8b57";
  ctx.beginPath();
  currentY2 += 10;
  ctx.moveTo(initX2 - 10, currentY2);
  ctx.quadraticCurveTo(
    initX2 + 40,
    currentY2 - 10,
    initX2 + 50,
    currentY2 + 30,
  );
  ctx.quadraticCurveTo(initX2 + 10, currentY2 + 35, initX2 - 10, currentY2);
  ctx.fill();

  // 再加一条随意的波浪线涂鸦
  ctx.strokeStyle = "#c0392b";
  ctx.lineWidth = 6;
  ctx.beginPath();
  for (let x = initX2 + 150; x < 1950; x += 8) {
    const y = initY2 - 100 + Math.sin((x - 1750) * 0.05) * 40;
    if (x === initX2 + 150) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  const tex = new CanvasTexture(canvas);
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  tex.needsUpdate = true;

  return tex;
};

const writeText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
  color = "#1a1a2e",
) => {
  ctx.fillStyle = color;
  ctx.font = `${size}px "Microsoft YaHei", "PingFang SC", sans-serif`;
  ctx.fillText(text, x, y);
};

export default addGlassWhiteboard;
