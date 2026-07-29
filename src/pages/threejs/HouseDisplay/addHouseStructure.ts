/**
 * 添加房屋结构，包括地板、所有墙体和玻璃窗
 * showWallLabel 是否显示每个墙体的编号标签，默认不显示
 */
import {
  Scene,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Group,
  PlaneGeometry,
  DoubleSide,
  CanvasTexture,
  SpriteMaterial,
  Sprite,
  TextureLoader,
  RepeatWrapping,
  MeshPhysicalMaterial,
  SRGBColorSpace,
} from "three";
// 导入大理石贴图
import marbleBaseColorImg from "images/threejs/marbleFloor/marble_basecolor.png";
import marbleNormalImg from "images/threejs/marbleFloor/marble_normal.png";
import marbleRoughnessImg from "images/threejs/marbleFloor/marble_roughness.png";
import marbleHeightImg from "images/threejs/marbleFloor/marble_height.png";

const addHouseStructure = (scene: Scene, showWallLabel = false) => {
  const wallHeight = 4;
  const w = 0.2; // 墙厚保持不变
  const wallColor = 0xf4f3ef; // 珍珠白乳胶漆颜色

  // 创建并添加大理石地板
  addMarbleFloor(scene);

  // ===== 外墙（所有尺寸和位置乘以0.8，墙厚不变） =====
  // #1 - 顶部外墙左段（14号墙左侧）
  createWallWithLabel(
    1,
    14.4,
    wallHeight,
    w,
    -10.4,
    wallHeight / 2,
    -16,
    wallColor,
    scene,
    showWallLabel,
  );

  // #40 - 顶部外墙中左段（14号与15号之间，改为四周墙体+中间玻璃窗）
  // 上部墙体
  createWallWithLabel(
    40,
    4.8,
    0.5,
    w,
    -0.8,
    3.75,
    -16,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体（底部往上移1米，高度增加到1.5米）
  const wall40Lower = createWall(4.8, 1.5, w, -0.8, 0.75, -16, wallColor);
  scene.add(wall40Lower);

  // 左部墙体（宽度增加到1.5米）
  const wall40Left = createWall(
    1.2,
    wallHeight,
    w,
    -3,
    wallHeight / 2,
    -16,
    wallColor,
  );
  scene.add(wall40Left);

  // 右部墙体（宽度增加到1.5米）
  const wall40Right = createWall(
    1.2,
    wallHeight,
    w,
    1.4,
    wallHeight / 2,
    -16,
    wallColor,
  );
  scene.add(wall40Right);

  // 40号墙的玻璃窗（纯玻璃，宽度减少到5米）
  const window40 = new Mesh(
    new BoxGeometry(4, 2.5, 0.1),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  window40.position.set(-0.8, 2.5, -16);
  scene.add(window40);

  // 40号窗框边框（白色）
  const frame40_1 = new Mesh(
    new BoxGeometry(0.08, 2.6, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame40_1.position.set(-2.8, 2.5, -16);
  scene.add(frame40_1);

  const frame40_2 = new Mesh(
    new BoxGeometry(0.08, 2.6, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame40_2.position.set(1.2, 2.5, -16);
  scene.add(frame40_2);

  const frame40_3 = new Mesh(
    new BoxGeometry(4, 0.08, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame40_3.position.set(-0.8, 3.8, -16);
  scene.add(frame40_3);

  const frame40_4 = new Mesh(
    new BoxGeometry(4, 0.08, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame40_4.position.set(-0.8, 1.2, -16);
  scene.add(frame40_4);

  // #41 - 顶部外墙中右段（15号与16号之间，改为四周墙体+中间玻璃窗）
  // 上部墙体
  createWallWithLabel(
    41,
    4.4,
    0.5,
    w,
    3.8,
    3.75,
    -16,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体（底部往上移1米，高度增加到1.5米）
  const wall41Lower = createWall(4.4, 1.5, w, 3.8, 0.75, -16, wallColor);
  scene.add(wall41Lower);

  // 左部墙体（宽度增加到1.5米）
  const wall41Left = createWall(
    1.2,
    wallHeight,
    w,
    1.8,
    wallHeight / 2,
    -16,
    wallColor,
  );
  scene.add(wall41Left);

  // 右部墙体（宽度增加到1.5米）
  const wall41Right = createWall(
    1.2,
    wallHeight,
    w,
    5.8,
    wallHeight / 2,
    -16,
    wallColor,
  );
  scene.add(wall41Right);

  // 41号墙的玻璃窗（纯玻璃，宽度减少到4.5米）
  const window41 = new Mesh(
    new BoxGeometry(3.6, 2.5, 0.1),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  window41.position.set(3.8, 2.5, -16);
  scene.add(window41);

  // 41号窗框边框（白色）
  const frame41_1 = new Mesh(
    new BoxGeometry(0.08, 2.6, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame41_1.position.set(2, 2.5, -16);
  scene.add(frame41_1);

  const frame41_2 = new Mesh(
    new BoxGeometry(0.08, 2.6, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame41_2.position.set(5.6, 2.5, -16);
  scene.add(frame41_2);

  const frame41_3 = new Mesh(
    new BoxGeometry(3.6, 0.08, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame41_3.position.set(3.8, 3.8, -16);
  scene.add(frame41_3);

  const frame41_4 = new Mesh(
    new BoxGeometry(3.6, 0.08, 0.12),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame41_4.position.set(3.8, 1.2, -16);
  scene.add(frame41_4);

  // #42 - 顶部外墙右段（16号墙右侧）
  createWallWithLabel(
    42,
    11.6,
    wallHeight,
    w,
    11.8,
    wallHeight / 2,
    -16,
    wallColor,
    scene,
    showWallLabel,
  );

  // #2 - 右侧外墙上段（与33号墙上方，改为四周墙体+中间落地窗）
  // 上部墙体
  createWallWithLabel(
    2,
    w,
    0.5,
    4,
    17.6,
    3.75,
    -13.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体（底部往上移1米，高度增加到1.5米）
  const wall2Lower = createWall(w, 1.5, 4, 17.6, 0.75, -13.2, wallColor);
  scene.add(wall2Lower);

  // 左部墙体
  const wall2Left = createWall(
    w,
    wallHeight,
    0.8,
    17.6,
    wallHeight / 2,
    -15.6,
    wallColor,
  );
  scene.add(wall2Left);

  // 右部墙体
  const wall2Right = createWall(
    w,
    wallHeight,
    0.8,
    17.6,
    wallHeight / 2,
    -10.8,
    wallColor,
  );
  scene.add(wall2Right);

  // 2号墙的大落地窗（纯玻璃，底部上移1米，高度减少到2.5米）
  const window2 = new Mesh(
    new BoxGeometry(0.1, 2.5, 4),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  window2.position.set(17.6, 2.5, -13.2);
  scene.add(window2);

  // 2号窗框边框（白色）
  const frame2_1 = new Mesh(
    new BoxGeometry(0.12, 2.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame2_1.position.set(17.6, 2.5, -15.2);
  scene.add(frame2_1);

  const frame2_2 = new Mesh(
    new BoxGeometry(0.12, 2.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame2_2.position.set(17.6, 2.5, -11.2);
  scene.add(frame2_2);

  const frame2_3 = new Mesh(
    new BoxGeometry(0.12, 0.08, 4),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame2_3.position.set(17.6, 3.8, -13.2);
  scene.add(frame2_3);

  const frame2_4 = new Mesh(
    new BoxGeometry(0.12, 0.08, 4),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame2_4.position.set(17.6, 1.2, -13.2);
  scene.add(frame2_4);

  // #3 - 右侧外墙中上段（33号与28号之间）
  createWallWithLabel(
    3,
    w,
    wallHeight,
    4,
    17.6,
    wallHeight / 2,
    -8.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #4 - 右侧外墙中下段（28号与23号之间，改为四周墙体+中间落地窗）
  // 上部墙体
  createWallWithLabel(
    4,
    w,
    0.5,
    5.6,
    17.6,
    3.75,
    -1.16,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体
  const wall4Lower = createWall(w, 0.5, 5.6, 17.6, 0.25, -1.16, wallColor);
  scene.add(wall4Lower);

  // 左部墙体（加宽到3米）
  const wall4Left = createWall(
    w,
    wallHeight,
    2.4,
    17.6,
    wallHeight / 2,
    -5.16,
    wallColor,
  );
  scene.add(wall4Left);

  // 右部墙体（1.1米）
  const wall4Right = createWall(
    w,
    wallHeight,
    0.88,
    17.6,
    wallHeight / 2,
    2.08,
    wallColor,
  );
  scene.add(wall4Right);

  // 4号墙的大落地窗（纯玻璃）
  const window4 = new Mesh(
    new BoxGeometry(0.1, 3.5, 5.6),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  window4.position.set(17.6, 2, -1.16);
  scene.add(window4);

  // 4号窗框边框（白色）
  const frame4_1 = new Mesh(
    new BoxGeometry(0.12, 3.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame4_1.position.set(17.6, 2, -3.96);
  scene.add(frame4_1);

  const frame4_2 = new Mesh(
    new BoxGeometry(0.12, 3.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame4_2.position.set(17.6, 2, 1.64);
  scene.add(frame4_2);

  const frame4_3 = new Mesh(
    new BoxGeometry(0.12, 0.08, 5.6),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame4_3.position.set(17.6, 3.8, -1.16);
  scene.add(frame4_3);

  const frame4_4 = new Mesh(
    new BoxGeometry(0.12, 0.08, 5.6),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame4_4.position.set(17.6, 0.2, -1.16);
  scene.add(frame4_4);

  // #5 - 右侧外墙下段（与23号墙下方，改为四周墙体+中间玻璃窗）
  // 上部墙体
  createWallWithLabel(
    5,
    w,
    0.5,
    6.24,
    17.6,
    3.75,
    5.6,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体（底部往上移1米，高度增加到1.5米）
  const wall5Lower = createWall(w, 1.5, 6.24, 17.6, 0.75, 5.6, wallColor);
  scene.add(wall5Lower);

  // 左部墙体（深度3米）
  const wall5Left = createWall(
    w,
    wallHeight,
    2.4,
    17.6,
    wallHeight / 2,
    2.8,
    wallColor,
  );
  scene.add(wall5Left);

  // 右部墙体（深度调整为2米，不超出9号墙）
  const wall5Right = createWall(
    w,
    wallHeight,
    1.6,
    17.6,
    wallHeight / 2,
    7.92,
    wallColor,
  );
  scene.add(wall5Right);

  // 5号墙的玻璃窗（纯玻璃，深度3.8米）
  const window5 = new Mesh(
    new BoxGeometry(0.1, 2.5, 3.04),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  window5.position.set(17.6, 2.5, 5.6);
  scene.add(window5);

  // 5号窗框边框（白色）
  const frame5_1 = new Mesh(
    new BoxGeometry(0.12, 2.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame5_1.position.set(17.6, 2.5, 4.08);
  scene.add(frame5_1);

  const frame5_2 = new Mesh(
    new BoxGeometry(0.12, 2.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame5_2.position.set(17.6, 2.5, 7.12);
  scene.add(frame5_2);

  const frame5_3 = new Mesh(
    new BoxGeometry(0.12, 0.08, 3.04),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame5_3.position.set(17.6, 3.8, 5.6);
  scene.add(frame5_3);

  const frame5_4 = new Mesh(
    new BoxGeometry(0.12, 0.08, 3.04),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame5_4.position.set(17.6, 1.2, 5.6);
  scene.add(frame5_4);

  // #6 - 入户凹槽左侧
  createWallWithLabel(
    6,
    w,
    wallHeight,
    6.4,
    -6.4,
    wallHeight / 2,
    12.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #7 - 入户凹槽底部
  createWallWithLabel(
    7,
    6.4,
    wallHeight,
    w,
    -3.2,
    wallHeight / 2,
    15.92,
    wallColor,
    scene,
    showWallLabel,
  );

  // #8 - 入户凹槽右侧
  createWallWithLabel(
    8,
    w,
    wallHeight,
    5.2,
    -2.56,
    wallHeight / 2,
    7,
    wallColor,
    scene,
    showWallLabel,
  );

  // #9 - 底部外墙右段
  createWallWithLabel(
    9,
    11.2,
    wallHeight,
    w,
    12,
    wallHeight / 2,
    8.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #10a - 左侧外墙上段（与29号墙上方，改为四周墙体+中间落地窗）
  // 上部墙体
  createWallWithLabel(
    10,
    w,
    0.5,
    5.6,
    -17.6,
    3.75,
    -12.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体（底部往上移1米，高度增加到1.5米）
  const wall10Lower = createWall(w, 1.5, 5.6, -17.6, 0.75, -12.4, wallColor);
  scene.add(wall10Lower);

  // 左部墙体
  const wall10Left = createWall(
    w,
    wallHeight,
    0.8,
    -17.6,
    wallHeight / 2,
    -15.6,
    wallColor,
  );
  scene.add(wall10Left);

  // 右部墙体
  const wall10Right = createWall(
    w,
    wallHeight,
    0.8,
    -17.6,
    wallHeight / 2,
    -9.2,
    wallColor,
  );
  scene.add(wall10Right);

  // 10号墙的大落地窗（纯玻璃，底部上移1米，高度减少到2.5米）
  const window10 = new Mesh(
    new BoxGeometry(0.1, 2.5, 5.6),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  window10.position.set(-17.6, 2.5, -12.4);
  scene.add(window10);

  // 10号窗框边框（白色）
  const frame10_1 = new Mesh(
    new BoxGeometry(0.12, 2.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame10_1.position.set(-17.6, 2.5, -15.2);
  scene.add(frame10_1);

  const frame10_2 = new Mesh(
    new BoxGeometry(0.12, 2.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame10_2.position.set(-17.6, 2.5, -9.6);
  scene.add(frame10_2);

  const frame10_3 = new Mesh(
    new BoxGeometry(0.12, 0.08, 5.6),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame10_3.position.set(-17.6, 3.8, -12.4);
  scene.add(frame10_3);

  const frame10_4 = new Mesh(
    new BoxGeometry(0.12, 0.08, 5.6),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  frame10_4.position.set(-17.6, 1.2, -12.4);
  scene.add(frame10_4);

  // #10b - 左侧外墙中段（29号与30号之间）
  createWallWithLabel(
    11,
    w,
    wallHeight,
    4,
    -17.6,
    wallHeight / 2,
    -6.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #10c - 左侧外墙下段（改为四周墙体+中间落地窗）
  // 上部墙体
  createWallWithLabel(
    12,
    w,
    0.5,
    12.8,
    -17.6,
    3.75,
    3.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // 下部墙体
  createWallWithLabel(
    43,
    w,
    0.5,
    12.8,
    -17.6,
    0.25,
    3.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // 左部墙体
  createWallWithLabel(
    44,
    w,
    wallHeight,
    1.6,
    -17.6,
    wallHeight / 2,
    -4,
    wallColor,
    scene,
    showWallLabel,
  );

  // 右部墙体
  createWallWithLabel(
    45,
    w,
    wallHeight,
    1.6,
    -17.6,
    wallHeight / 2,
    10.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // 中间的大落地窗（纯玻璃）
  const floorWindow = new Mesh(
    new BoxGeometry(0.1, 3.5, 12.8),
    new MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
    }),
  );
  floorWindow.position.set(-17.6, 2, 3.2);
  floorWindow.castShadow = false; // 关闭阴影投射
  floorWindow.receiveShadow = false; // 关闭阴影接收
  scene.add(floorWindow);

  // 窗框边框（白色）
  const windowFrame1 = new Mesh(
    new BoxGeometry(0.12, 3.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  windowFrame1.position.set(-17.6, 2, -3.2);
  scene.add(windowFrame1);

  const windowFrame2 = new Mesh(
    new BoxGeometry(0.12, 3.6, 0.08),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  windowFrame2.position.set(-17.6, 2, 9.6);
  scene.add(windowFrame2);

  const windowFrame3 = new Mesh(
    new BoxGeometry(0.12, 0.08, 12.8),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  windowFrame3.position.set(-17.6, 3.8, 3.2);
  scene.add(windowFrame3);

  const windowFrame4 = new Mesh(
    new BoxGeometry(0.12, 0.08, 12.8),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  windowFrame4.position.set(-17.6, 0.2, 3.2);
  scene.add(windowFrame4);

  // ===== 内墙（所有尺寸和位置乘以0.8，墙厚不变） =====
  // #13 - 上区域横墙（主分隔）
  createWallWithLabel(
    13,
    14.4,
    wallHeight,
    w,
    -8.4,
    wallHeight / 2,
    -6.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #14 - 上区域左竖墙
  createWallWithLabel(
    14,
    w,
    wallHeight,
    3.2,
    -3.2,
    wallHeight / 2,
    -14.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #15 - 上区域中竖墙
  createWallWithLabel(
    15,
    w,
    wallHeight,
    6.4,
    1.6,
    wallHeight / 2,
    -12.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #16 - 上区域右竖墙
  createWallWithLabel(
    16,
    w,
    wallHeight,
    6.8,
    6,
    wallHeight / 2,
    -12.6,
    wallColor,
    scene,
    showWallLabel,
  );

  // #18 - 中间主横墙
  createWallWithLabel(
    18,
    8.4,
    wallHeight,
    w,
    -9.8,
    wallHeight / 2,
    4.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #19 - 中左竖墙
  createWallWithLabel(
    19,
    w,
    wallHeight,
    2,
    -15.6,
    wallHeight / 2,
    12.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // #20 - 左下横墙
  createWallWithLabel(
    20,
    2,
    wallHeight,
    w,
    -16.6,
    wallHeight / 2,
    11.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // #21 - 中下横墙上
  createWallWithLabel(
    21,
    6.4,
    wallHeight,
    w,
    -3.2,
    wallHeight / 2,
    9.6,
    wallColor,
    scene,
    showWallLabel,
  );

  // #22 - 中下竖墙
  createWallWithLabel(
    22,
    w,
    wallHeight,
    6.4,
    0,
    wallHeight / 2,
    12.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #23 - 右下顶部横墙
  createWallWithLabel(
    23,
    4,
    wallHeight,
    w,
    15.6,
    wallHeight / 2,
    2.48,
    wallColor,
    scene,
    showWallLabel,
  );

  // #24 - 右下左竖墙
  createWallWithLabel(
    24,
    w,
    wallHeight,
    4,
    4.8,
    wallHeight / 2,
    4.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #25 - 右下右竖墙
  createWallWithLabel(
    25,
    w,
    wallHeight,
    2.4,
    6.4,
    wallHeight / 2,
    7.6,
    wallColor,
    scene,
    showWallLabel,
  );

  // #26
  createWallWithLabel(
    26,
    2.8,
    wallHeight,
    w,
    5,
    wallHeight / 2,
    6.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #27
  createWallWithLabel(
    27,
    7.2,
    wallHeight,
    w,
    0.2,
    wallHeight / 2,
    -9.6,
    wallColor,
    scene,
    showWallLabel,
  );

  // #28
  createWallWithLabel(
    28,
    12,
    wallHeight,
    w,
    11.6,
    wallHeight / 2,
    -6.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #29
  createWallWithLabel(
    29,
    2,
    wallHeight,
    w,
    -16.6,
    wallHeight / 2,
    -8.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #30
  createWallWithLabel(
    30,
    2,
    wallHeight,
    w,
    -16.6,
    wallHeight / 2,
    -4.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #31
  createWallWithLabel(
    31,
    w,
    wallHeight,
    4,
    -15.6,
    wallHeight / 2,
    -6.8,
    wallColor,
    scene,
    showWallLabel,
  );

  // #32
  createWallWithLabel(
    32,
    w,
    wallHeight,
    4,
    15.6,
    wallHeight / 2,
    -8.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #33
  createWallWithLabel(
    33,
    2,
    wallHeight,
    w,
    16.6,
    wallHeight / 2,
    -10.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #34
  createWallWithLabel(
    34,
    w,
    wallHeight,
    2,
    -13.2,
    wallHeight / 2,
    -5.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #36
  createWallWithLabel(
    36,
    2,
    wallHeight,
    w,
    5.8,
    wallHeight / 2,
    2.48,
    wallColor,
    scene,
    showWallLabel,
  );

  // #37
  createWallWithLabel(
    37,
    3.6,
    wallHeight,
    w,
    -0.8,
    wallHeight / 2,
    4.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #38
  createWallWithLabel(
    38,
    w,
    wallHeight,
    2,
    -14,
    wallHeight / 2,
    12.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // #39
  createWallWithLabel(
    39,
    w,
    wallHeight,
    2.2,
    1,
    wallHeight / 2,
    5.4,
    wallColor,
    scene,
    showWallLabel,
  );

  // #40
  createWallWithLabel(
    40,
    9.2,
    wallHeight,
    w,
    -11,
    wallHeight / 2,
    13.2,
    wallColor,
    scene,
    showWallLabel,
  );

  // #41
  createWallWithLabel(
    41,
    w,
    wallHeight,
    1.2,
    -14,
    wallHeight / 2,
    5,
    wallColor,
    scene,
    showWallLabel,
  );
};

/**
 * 创建带序号的墙体
 */
const createWallWithLabel = (
  number: number,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  color: number,
  scene: Scene,
  showWallLabel = false,
) => {
  const wall = createWall(width, height, depth, x, y, z, color);
  scene.add(wall);

  // 在墙体两侧添加序号标签
  if (showWallLabel) {
    if (width > depth) {
      // 横墙，标签在前后两侧
      createWallLabel(number, x, y + 0.5, z + depth / 2 + 0.4, scene);
      createWallLabel(number, x, y + 0.5, z - depth / 2 - 0.4, scene);
    } else {
      // 竖墙，标签在左右两侧
      createWallLabel(number, x + width / 2 + 0.4, y + 0.5, z, scene);
      createWallLabel(number, x - width / 2 - 0.4, y + 0.5, z, scene);
    }
  }
};
const createWall = (
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  color: number = 0xf4f3ef,
) => {
  const geometry = new BoxGeometry(width, height, depth);
  const material = new MeshStandardMaterial({
    color,
    roughness: 0.85, // 乳胶漆的粗糙度，有轻微漫反射
    metalness: 0, // 完全不反射金属光泽
    envMapIntensity: 0.3,
  });
  const wall = new Mesh(geometry, material);
  wall.position.set(x, y, z);
  wall.castShadow = true;
  wall.receiveShadow = true;
  return wall;
};

/**
 * 创建墙体标签
 */
const createWallLabel = (
  number: number,
  x: number,
  y: number,
  z: number,
  scene: Scene,
) => {
  // 创建canvas绘制文字
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#FFFF00"; // 黄色
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(number.toString(), 64, 64);
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  const spriteMaterial = new SpriteMaterial({ map: texture });
  const sprite = new Sprite(spriteMaterial);
  sprite.position.set(x, y, z);
  sprite.scale.set(1.5, 1.5, 1);
  scene.add(sprite);
};

// 创建并添加大理石地板
const addMarbleFloor = (scene: Scene) => {
  // 加载大理石地板贴图
  const textureLoader = new TextureLoader();
  const marbleBaseColor = textureLoader.load(marbleBaseColorImg);
  marbleBaseColor.colorSpace = SRGBColorSpace;
  const marbleNormal = textureLoader.load(marbleNormalImg);
  const marbleRoughness = textureLoader.load(marbleRoughnessImg);
  const marbleHeight = textureLoader.load(marbleHeightImg);

  // 设置贴图重复（每块砖一次完整贴图）
  [marbleBaseColor, marbleNormal, marbleRoughness, marbleHeight].forEach(
    (texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(1, 1);
    },
  );

  // 地板参数
  const tileSize = 1.5; // 1.5m的地砖
  const gapSize = 0.0025; // 2.5mm的缝隙
  const floorWidth = 41.6; // 地板总宽度（0.8倍缩放）
  const floorDepth = 32; // 地板总深度（0.8倍缩放）

  // 计算需要多少块砖
  const tilesX = Math.ceil(floorWidth / (tileSize + gapSize));
  const tilesZ = Math.ceil(floorDepth / (tileSize + gapSize));

  // 创建地砖组
  const floorGroup = new Group();

  // 生成每块地砖
  for (let x = 0; x < tilesX; x++) {
    for (let z = 0; z < tilesZ; z++) {
      // 克隆贴图以便每块砖可以独立设置
      const baseColor = marbleBaseColor.clone();
      const normal = marbleNormal.clone();
      const roughness = marbleRoughness.clone();
      const height = marbleHeight.clone();

      baseColor.needsUpdate = true;
      normal.needsUpdate = true;
      roughness.needsUpdate = true;
      height.needsUpdate = true;

      // 创建单块地砖
      const tile = new Mesh(
        new PlaneGeometry(tileSize, tileSize),
        new MeshPhysicalMaterial({
          map: baseColor,
          normalMap: normal,
          roughnessMap: roughness,
          displacementMap: height,
          displacementScale: 0.05,
          roughness: 0.15, // 亮光砖，低粗糙度
          metalness: 0.1, // 轻微金属感
          clearcoat: 0.5, // 清漆层，增加光泽
          clearcoatRoughness: 0.1, // 清漆层粗糙度
          reflectivity: 0.8, // 反射率
          envMapIntensity: 1.2,
          side: DoubleSide,
        }),
      );

      // 计算地砖位置（从左上角开始）
      const posX = -floorWidth / 2 + x * (tileSize + gapSize) + tileSize / 2;
      const posZ = -floorDepth / 2 + z * (tileSize + gapSize) + tileSize / 2;

      tile.position.set(posX, 0, posZ);
      tile.rotation.x = -Math.PI / 2;
      tile.receiveShadow = true;

      floorGroup.add(tile);
    }
  }
  scene.add(floorGroup);

  // 创建白色缝隙底板
  const gapFloor = new Mesh(
    new PlaneGeometry(floorWidth, floorDepth),
    new MeshStandardMaterial({
      color: 0xffffff, // 白色缝隙
      roughness: 0.8,
      metalness: 0,
    }),
  );
  gapFloor.rotation.x = -Math.PI / 2;
  gapFloor.position.y = -0.001; // 略低于地砖，作为缝隙
  gapFloor.receiveShadow = true;
  scene.add(gapFloor);
};

export default addHouseStructure;
