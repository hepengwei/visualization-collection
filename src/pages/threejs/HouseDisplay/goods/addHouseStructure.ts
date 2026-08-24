/**
 * 添加房屋结构，包括地板、所有墙体和玻璃窗
 * showWallLabel 是否显示每个墙体的编号标签，默认不显示
 */
import { RefObject } from "react";
import {
  Scene,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  PlaneGeometry,
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

// 墙体参数
export const wallHeight = 4; // 墙体高度
const beamHeight = 0.5; // 门框上方横梁的墙体高度
const wallDepth = 0.3; // 墙体厚度
const wallColor = 0xf4f3ef; // 珍珠白乳胶漆颜色
const wallLabelSize = 1.5; // 墙体标签的大小
const wallLabelColor = "#FFFF00"; // 墙体标签的颜色
const glassDepth = 0.1; // 玻璃厚度
const aluminiumAlloyFrameHeight = 0.1; // 玻璃铝合金包边高度
const aluminiumAlloyFrameDepth = 0.12; // 玻璃铝合金包边厚度

// 所有墙体的尺寸和位置
const wallList = [
  [14.4, wallHeight, wallDepth, -10.4, wallHeight / 2, -16],
  [1.4, 0.5, wallDepth, -0.8, 3.75, -16],
  [4.8, 1.5, wallDepth, -0.8, 0.75, -16],
  [2.31, wallHeight, wallDepth, -2.65, wallHeight / 2, -16],
  [1.64, wallHeight, wallDepth, 0.72, wallHeight / 2, -16],
  [1.4, 0.5, wallDepth, 3.8, 3.75, -16],
  [2.9, 1.5, wallDepth, 3.05, 0.75, -16],
  [1.71, wallHeight, wallDepth, 2.25, wallHeight / 2, -16],
  [wallDepth, wallHeight, 0.8, 17.6, wallHeight / 2, -10.8],
  [13.2, wallHeight, wallDepth, 11.1, wallHeight / 2, -16],
  // #11
  [wallDepth, 0.5, 4, 17.6, 3.75, -13.2],
  [wallDepth, 1.5, 4, 17.6, 0.75, -13.2],
  [wallDepth, wallHeight, 0.8, 17.6, wallHeight / 2, -15.6],
  [wallDepth, wallHeight, 0.8, 17.6, wallHeight / 2, -10.8],
  [wallDepth, wallHeight, 4, 17.6, wallHeight / 2, -8.4],
  [wallDepth, 0.5, 7.12, 17.6, 3.75, -1.92],
  [wallDepth, 0.5, 7.12, 17.6, 0.25, -1.92],
  [wallDepth, wallHeight, 0.92, 17.6, wallHeight / 2, -5.94],
  [wallDepth, wallHeight, 0.92, 17.6, wallHeight / 2, 1.8],
  [wallDepth, 0.5, 1.4, 17.6, 3.75, 5.09],
  // #21
  [wallDepth, 1.5, 1.4, 17.6, 0.75, 5.09],
  [wallDepth, wallHeight, 2.2, 17.6, wallHeight / 2, 3.3],
  [wallDepth, wallHeight, 2.94, 17.6, wallHeight / 2, 7.25],
  [wallDepth, wallHeight, 6.4, -6.4, wallHeight / 2, 12.8],
  [6.7, wallHeight, wallDepth, -3.2, wallHeight / 2, 15.92],
  [wallDepth, wallHeight, 5.2, -2.56, wallHeight / 2, 7],
  [11.4, wallHeight, wallDepth, 12.05, wallHeight / 2, 8.8],
  [wallDepth, 0.5, 5.6, -17.6, 3.75, -12.4],
  [wallDepth, 1.5, 5.6, -17.6, 0.75, -12.4],
  [wallDepth, wallHeight, 0.8, -17.6, wallHeight / 2, -15.6],
  // #31
  [wallDepth, wallHeight, 0.8, -17.6, wallHeight / 2, -9.2],
  [wallDepth, wallHeight, 4, -17.6, wallHeight / 2, -6.8],
  [wallDepth, 0.5, 12.8, -17.6, 3.75, 3.2],
  [wallDepth, 0.5, 12.8, -17.6, 0.25, 3.2],
  [wallDepth, wallHeight, 1.6, -17.6, wallHeight / 2, -4],
  [wallDepth, wallHeight, 1.6, -17.6, wallHeight / 2, 10.4],
  [14.4, wallHeight, wallDepth, -8.4, wallHeight / 2, -6.4],
  [wallDepth, wallHeight, 4.2, -3.25, wallHeight / 2, -13.7],
  [wallDepth, wallHeight, 6.4, 1.6, wallHeight / 2, -12.8],
  [wallDepth, wallHeight, 7.34, 6, wallHeight / 2, -12.39],
  // #41
  [8.9, wallHeight, wallDepth, -9.4, wallHeight / 2, 4.4],
  [wallDepth, wallHeight, 2.1, -15.6, wallHeight / 2, 12.3],
  [2.3, wallHeight, wallDepth, -16.6, wallHeight / 2, 11.3],
  [6.7, wallHeight, wallDepth, -3.2, wallHeight / 2, 9.6],
  [wallDepth, wallHeight, 6.4, 0, wallHeight / 2, 12.8],
  [2.6, wallHeight, wallDepth, 16.4, wallHeight / 2, 2.3],
  [wallDepth, wallHeight, 3, 4.8, wallHeight / 2, 3.9],
  [wallDepth, wallHeight, 3.4, 6.4, wallHeight / 2, 7.3],
  [3, wallHeight, wallDepth, 5.05, wallHeight / 2, 5.5],
  [7.4, wallHeight, wallDepth, 0.3, wallHeight / 2, -9.6],
  // #51
  [11.6, wallHeight, wallDepth, 11.65, wallHeight / 2, -6.4],
  [2, wallHeight, wallDepth, -16.6, wallHeight / 2, -8.8],
  [2, wallHeight, wallDepth, -16.6, wallHeight / 2, -4.8],
  [wallDepth, wallHeight, 4.3, -15.6, wallHeight / 2, -6.8],
  [wallDepth, wallHeight, 4, 15.6, wallHeight / 2, -8.4],
  [2.1, wallHeight, wallDepth, 16.5, wallHeight / 2, -10.4],
  [wallDepth, wallHeight, 2, -13.2, wallHeight / 2, -5.4],
  [wallDepth, wallHeight, 1.5, -13.2, wallHeight / 2, 3.65],
  [2.4, wallHeight, wallDepth, 5.85, wallHeight / 2, 2.3],
  [4.1, wallHeight, wallDepth, -1.1, wallHeight / 2, 4.4],
  // #61
  [wallDepth, wallHeight, 1.8, -14, wallHeight / 2, 12.3],
  [wallDepth, wallHeight, 1.5, 1, wallHeight / 2, 5],
  [9.2, wallHeight, wallDepth, -11, wallHeight / 2, 13.2],
  [wallDepth, wallHeight, 1.5, -14, wallHeight / 2, 5],
  [wallDepth, beamHeight, 8, -13.2, wallHeight - beamHeight / 2, -0.7],
  [8.2, beamHeight, wallDepth, 11, wallHeight - beamHeight / 2, 2.3],
  [2.4, beamHeight, wallDepth, 2.35, wallHeight - beamHeight / 2, 5.5],
  [wallDepth, beamHeight, 2, -1.35, wallHeight - beamHeight / 2, -7.8],
  [wallDepth, beamHeight, 2, 6, wallHeight - beamHeight / 2, -7.8],
  [wallDepth, beamHeight, 1.9, -3.25, wallHeight - beamHeight / 2, -10.68],
  // #71
  [2.1, beamHeight, wallDepth, 4.85, wallHeight - beamHeight / 2, -9.6],
  [wallDepth, beamHeight, 6, -14, wallHeight - beamHeight / 2, 8.5],
  [1.8, beamHeight, wallDepth, -4.05, wallHeight - beamHeight / 2, 4.4],
  [wallDepth, wallHeight, 0.45, -1.35, wallHeight / 2, -6.72],
  [wallDepth, wallHeight, 0.75, -1.35, wallHeight / 2, -9.07],
  [wallDepth, wallHeight, 0.42, 6, wallHeight / 2, -6.73],
];
// 所有玻璃窗的尺寸和位置
const glassList = [
  [1.4, 2, glassDepth, -0.8, 2.5, -16],
  [1.4, 2, glassDepth, 3.8, 2.5, -16],
  [glassDepth, 2, 4, 17.6, 2.5, -13.2],
  [glassDepth, 3, 6.84, 17.6, 2, -2.07],
  [glassDepth, 2, 1.4, 17.6, 2.5, 5.09],
  [glassDepth, 2, 5.6, -17.6, 2.5, -12.4],
  [glassDepth, 3, 12.8, -17.6, 2, 3.2],
];

// 地板参数
const tileSize = 1.5; // 1.5m的地砖
const gapSize = 0.005; // 5mm的缝隙
const floorWidth = 41.6; // 地板总宽度
const floorDepth = 32; // 地板总深度

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
};

/**
 * 创建并添加所有的墙体和玻璃窗
 */
const addAllWall = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  showWallLabel: boolean,
) => {
  // 创建立方体
  let boxGeometry = assetManager.geometries.get("boxGeometry");
  if (!boxGeometry) {
    boxGeometry = new BoxGeometry(1, 1, 1);
    assetManager.geometries.set("boxGeometry", boxGeometry);
  }
  // 墙体材质
  const wallMaterial = new MeshStandardMaterial({
    color: wallColor,
    roughness: 0.85, // 乳胶漆的粗糙度，有轻微漫反射
    metalness: 0, // 完全不反射金属光泽
    envMapIntensity: 0.3,
  });
  assetManager.materials.set("wallMaterial", wallMaterial);
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
  // 铝合金包边材质
  let aluminiumAlloyFrameMaterial = assetManager.materials.get(
    "aluminiumAlloyFrameMaterial",
  );
  if (!aluminiumAlloyFrameMaterial) {
    aluminiumAlloyFrameMaterial = new MeshStandardMaterial({
      color: 0xc0c0c8,
      roughness: 0.3,
      metalness: 0.9,
    });
    assetManager.materials.set(
      "aluminiumAlloyFrameMaterial",
      aluminiumAlloyFrameMaterial,
    );
  }

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
  wallList.forEach((item: number[], index: number) => {
    addWall(
      scene,
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
    );
  });
  scene.add(instancedMesh);

  // 添加所有的玻璃窗
  glassList.forEach((item: number[]) => {
    addGlassWindow(
      scene,
      assetManager,
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
 * 创建并添加带序号的墙体
 */
const addWall = (
  scene: Scene,
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
) => {
  dummy.scale.set(width, height, depth);
  dummy.position.set(x, y, z);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(number - 1, dummy.matrix);

  // 在墙体两侧添加序号标签
  if (showWallLabel) {
    addWallLabel(scene, width, height, depth, x, y, z, number);
  }
};

/**
 * 创建并添加墙体标签
 */
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
    ctx.fillStyle = wallLabelColor; // 黄色
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
  labelSprite.scale.set(wallLabelSize, wallLabelSize, wallLabelSize);
  scene.add(labelSprite);
};

/**
 * 创建并添加玻璃窗
 */
const addGlassWindow = (
  scene: Scene,
  assetManager: AssetManager,
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
  pointerControlsIntersetObjectsRef.current?.push(glassWindow);
  glassWindow.scale.set(width, height, depth);
  glassWindow.name = "玻璃窗";
  glassWindowGroup.add(glassWindow);

  // 添加玻璃窗合金包边
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
      aluminiumAlloyFrameHeight,
      aluminiumAlloyFrameDepth,
    );
    bottomAluminiumAlloyFrame.scale.set(
      width,
      aluminiumAlloyFrameHeight,
      aluminiumAlloyFrameDepth,
    );
    leftAluminiumAlloyFrame.scale.set(
      aluminiumAlloyFrameHeight,
      height,
      aluminiumAlloyFrameDepth,
    );
    leftAluminiumAlloyFrame.position.set(
      (aluminiumAlloyFrameDepth - width) / 2,
      0,
      0,
    );
    rightAluminiumAlloyFrame.scale.set(
      aluminiumAlloyFrameHeight,
      height,
      aluminiumAlloyFrameDepth,
    );
    rightAluminiumAlloyFrame.position.set(
      (width - aluminiumAlloyFrameDepth) / 2,
      0,
      0,
    );
  } else {
    // 竖向玻璃
    topAluminiumAlloyFrame.scale.set(
      aluminiumAlloyFrameDepth,
      aluminiumAlloyFrameHeight,
      depth,
    );
    bottomAluminiumAlloyFrame.scale.set(
      aluminiumAlloyFrameDepth,
      aluminiumAlloyFrameHeight,
      depth,
    );
    leftAluminiumAlloyFrame.scale.set(
      aluminiumAlloyFrameDepth,
      height,
      aluminiumAlloyFrameHeight,
    );
    leftAluminiumAlloyFrame.position.set(
      0,
      0,
      (depth - aluminiumAlloyFrameHeight) / 2,
    );
    rightAluminiumAlloyFrame.scale.set(
      aluminiumAlloyFrameDepth,
      height,
      aluminiumAlloyFrameHeight,
    );
    rightAluminiumAlloyFrame.position.set(
      0,
      0,
      (aluminiumAlloyFrameHeight - depth) / 2,
    );
  }
  topAluminiumAlloyFrame.position.set(
    0,
    (height - aluminiumAlloyFrameHeight) / 2,
    0,
  );
  bottomAluminiumAlloyFrame.position.set(
    0,
    (aluminiumAlloyFrameHeight - height) / 2,
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
  const tilesX = Math.ceil(floorWidth / (tileSize + gapSize));
  const tilesZ = Math.ceil(floorDepth / (tileSize + gapSize));

  // 创建地砖结构体
  const tileGeometry = new PlaneGeometry(tileSize, tileSize);
  assetManager.geometries.set("tileGeometry", tileGeometry);
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
    tileGeometry,
    tileMaterial,
    tilesX * tilesZ,
  );
  instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  instancedMesh.receiveShadow = true;

  // 生成每块地砖
  const dummy = new Object3D();
  for (let x = 0; x < tilesX; x++) {
    for (let z = 0; z < tilesZ; z++) {
      // 计算地砖位置（从左上角开始）
      const posX = -floorWidth / 2 + x * (tileSize + gapSize) + tileSize / 2;
      const posZ = -floorDepth / 2 + z * (tileSize + gapSize) + tileSize / 2;
      dummy.position.set(posX, 0, posZ);
      dummy.rotation.x = -Math.PI / 2;
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(z * tilesX + x, dummy.matrix);
    }
  }
  scene.add(instancedMesh);

  // 创建白色缝隙底板
  const gapFloorGeometry = new PlaneGeometry(floorWidth, floorDepth);
  assetManager.geometries.set("gapFloorGeometry", gapFloorGeometry);
  const gapFloorMaterial = new MeshStandardMaterial({
    color: 0xffffff, // 白色缝隙
    roughness: 0.8,
    metalness: 0,
  });
  assetManager.materials.set("gapFloorMaterial", gapFloorMaterial);
  const gapFloor = new Mesh(gapFloorGeometry, gapFloorMaterial);
  gapFloor.rotation.x = -Math.PI / 2;
  gapFloor.position.y = -0.001; // 略低于地砖，作为缝隙
  gapFloor.receiveShadow = true;
  scene.add(gapFloor);
};

export default addHouseStructure;
