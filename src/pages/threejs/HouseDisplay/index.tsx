/**
 * 房屋展示 - 3D房屋漫游
 */
import React, { useRef, useLayoutEffect } from "react";
import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Color,
  Group,
  PlaneGeometry,
  DoubleSide,
  AmbientLight,
  DirectionalLight,
  PointLight,
  Vector3,
  CanvasTexture,
  SpriteMaterial,
  Sprite,
  TextureLoader,
  RepeatWrapping,
  MeshPhysicalMaterial,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import styles from "./index.module.scss";
// 导入大理石贴图
import marbleBaseColorImg from "images/threejs/marbleFloor/marble_basecolor.png";
import marbleNormalImg from "images/threejs/marbleFloor/marble_normal.png";
import marbleRoughnessImg from "images/threejs/marbleFloor/marble_roughness.png";
import marbleHeightImg from "images/threejs/marbleFloor/marble_height.png";

const HouseDisplay = () => {
  const { menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null); // 使用轨道控制器以便俯视观察
  const velocityRef = useRef<Vector3>(new Vector3());
  const directionRef = useRef<Vector3>(new Vector3());
  const moveStateRef = useRef({ forward: false, backward: false, left: false, right: false });
  const canJumpRef = useRef(false);
  const prevTimeRef = useRef(performance.now());

  const initializeHandle = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => {
    if (containerRef.current) {
      // 设置场景背景颜色为天空蓝
      scene.background = new Color(0x87CEEB);

      // 设置相机初始位置为俯视角度(从天花板上方向下看)
      camera.position.set(0, 30, 0); // 在房屋正上方30米高处
      camera.lookAt(0, 0, 0); // 看向房屋中心

      // ===== 轨道控制器设置(用于俯视观察) =====
      const controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;
      controls.enableDamping = true; // 启用阻尼效果
      controls.dampingFactor = 0.05;
      controls.minDistance = 1; // 最小缩放距离
      controls.maxDistance = 40; // 最大缩放距离
      controls.maxPolarAngle = Math.PI / 2; // 限制最大俯仰角度

      // 注释掉第一人称控制器的键盘事件监听
      // 如果需要第一人称视角，请取消下面的注释并恢复 PointerLockControls
      /*
      // 点击场景锁定鼠标指针
      const onPointerClick = () => {
        controls.lock();
      };
      containerRef.current.addEventListener("click", onPointerClick);

      // 键盘事件监听 - WASD移动
      const onKeyDown = (event: KeyboardEvent) => {
        switch (event.code) {
          case "KeyW":
          case "ArrowUp":
            moveStateRef.current.forward = true;
            break;
          case "KeyS":
          case "ArrowDown":
            moveStateRef.current.backward = true;
            break;
          case "KeyA":
          case "ArrowLeft":
            moveStateRef.current.left = true;
            break;
          case "KeyD":
          case "ArrowRight":
            moveStateRef.current.right = true;
            break;
          case "Space":
            if (canJumpRef.current) velocityRef.current.y += 5;
            canJumpRef.current = false;
            break;
        }
      };

      const onKeyUp = (event: KeyboardEvent) => {
        switch (event.code) {
          case "KeyW":
          case "ArrowUp":
            moveStateRef.current.forward = false;
            break;
          case "KeyS":
          case "ArrowDown":
            moveStateRef.current.backward = false;
            break;
          case "KeyA":
          case "ArrowLeft":
            moveStateRef.current.left = false;
            break;
          case "KeyD":
          case "ArrowRight":
            moveStateRef.current.right = false;
            break;
        }
      };

      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);
      */

      // ===== 光照设置 =====
      // 环境光 - 提供柔和的基础照明
      const ambientLight = new AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // 主太阳光 - 从左上方（南面）斜照下来，模拟自然阳光
      const sunLight = new DirectionalLight(0xFFFAE3, 0.7); // 暖色调阳光，降低强度
      sunLight.position.set(-24, 25, 12); // 从左上方照射（左边为南面）（0.8倍缩放）
      sunLight.castShadow = true;
      sunLight.shadow.mapSize.width = 2048;
      sunLight.shadow.mapSize.height = 2048;
      sunLight.shadow.camera.left = -24;
      sunLight.shadow.camera.right = 24;
      sunLight.shadow.camera.top = 24;
      sunLight.shadow.camera.bottom = -24;
      sunLight.shadow.camera.near = 0.5;
      sunLight.shadow.camera.far = 100;
      sunLight.shadow.bias = -0.0001;
      scene.add(sunLight);

      // 辅助光 - 从右侧补光，模拟天空散射光
      const skyLight = new DirectionalLight(0xB0D4F1, 0.3); // 天空蓝色调，降低强度
      skyLight.position.set(16, 15, -8); // （0.8倍缩放）
      scene.add(skyLight);

      // ===== 创建房屋结构 =====
      createHouseStructure(scene);

      // 启用阴影
      renderer.shadowMap.enabled = true;
    }
  };

  /**
   * 创建墙体标签
   */
  const createWallLabel = (number: number, x: number, y: number, z: number, scene: THREE.Scene) => {
    // 创建canvas绘制文字
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#FFFF00'; // 黄色
      ctx.font = 'bold 80px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(number.toString(), 64, 64);
    }

    const texture = new CanvasTexture(canvas);
    const spriteMaterial = new SpriteMaterial({ map: texture });
    const sprite = new Sprite(spriteMaterial);
    sprite.position.set(x, y, z);
    sprite.scale.set(1.5, 1.5, 1);
    scene.add(sprite);
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
    scene: THREE.Scene
  ) => {
    const wall = createWall(width, height, depth, x, y, z, color);
    scene.add(wall);

    // 在墙体两侧添加序号标签
    // if (width > depth) {
    //   // 横墙，标签在前后两侧
    //   createWallLabel(number, x, y + 0.5, z + depth / 2 + 0.4, scene);
    //   createWallLabel(number, x, y + 0.5, z - depth / 2 - 0.4, scene);
    // } else {
    //   // 竖墙，标签在左右两侧
    //   createWallLabel(number, x + width / 2 + 0.4, y + 0.5, z, scene);
    //   createWallLabel(number, x - width / 2 - 0.4, y + 0.5, z, scene);
    // }
  };
  const createWall = (width: number, height: number, depth: number, x: number, y: number, z: number, color: number = 0xF4F3EF) => {
    const geometry = new BoxGeometry(width, height, depth);
    const material = new MeshStandardMaterial({
      color,
      roughness: 0.85, // 乳胶漆的粗糙度，有轻微漫反射
      metalness: 0, // 完全不反射金属光泽
      envMapIntensity: 0.3 // 降低环境反射强度
    });
    const wall = new Mesh(geometry, material);
    wall.position.set(x, y, z);
    wall.castShadow = true;
    wall.receiveShadow = true;
    return wall;
  };

  /**
   * 创建门的辅助函数
   */
  const createDoor = (x: number, y: number, z: number, rotation: number = 0) => {
    const doorGroup = new Group();

    // 门框
    const frameGeometry = new BoxGeometry(1.2, 2.2, 0.1);
    const frameMaterial = new MeshStandardMaterial({ color: 0x8B4513 });
    const frame = new Mesh(frameGeometry, frameMaterial);

    // 门板
    const doorGeometry = new BoxGeometry(1.0, 2.0, 0.08);
    const doorMaterial = new MeshStandardMaterial({ color: 0xA0522D });
    const door = new Mesh(doorGeometry, doorMaterial);

    doorGroup.add(frame);
    doorGroup.add(door);
    doorGroup.position.set(x, y, z);
    doorGroup.rotation.y = rotation;

    return doorGroup;
  };

  /**
   * 创建房屋结构 - 所有墙体带序号标记（等比例放大4倍）
   */
  const createHouseStructure = (scene: THREE.Scene) => {
    const wallHeight = 4;
    const w = 0.2; // 墙厚保持不变
    const wallColor = 0xF4F3EF; // 珍珠白乳胶漆颜色

    // 加载大理石地板贴图
    const textureLoader = new TextureLoader();
    const marbleBaseColor = textureLoader.load(marbleBaseColorImg);
    const marbleNormal = textureLoader.load(marbleNormalImg);
    const marbleRoughness = textureLoader.load(marbleRoughnessImg);
    const marbleHeight = textureLoader.load(marbleHeightImg);

    // 设置贴图重复（每块砖一次完整贴图）
    [marbleBaseColor, marbleNormal, marbleRoughness, marbleHeight].forEach(texture => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(1, 1);
    });

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
            envMapIntensity: 1.2, // 环境映射强度
            side: DoubleSide
          })
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
        color: 0xFFFFFF, // 白色缝隙
        roughness: 0.8,
        metalness: 0
      })
    );
    gapFloor.rotation.x = -Math.PI / 2;
    gapFloor.position.y = -0.001; // 略低于地砖，作为缝隙
    gapFloor.receiveShadow = true;
    scene.add(gapFloor);

    // ===== 外墙（所有尺寸和位置乘以0.8，墙厚不变） =====
    // #1 - 顶部外墙左段（14号墙左侧）
    createWallWithLabel(1, 14.4, wallHeight, w, -10.4, wallHeight / 2, -16, wallColor, scene);

    // #40 - 顶部外墙中左段（14号与15号之间，改为四周墙体+中间玻璃窗）
    // 上部墙体
    createWallWithLabel(40, 4.8, 0.5, w, -0.8, 3.75, -16, wallColor, scene);

    // 下部墙体（底部往上移1米，高度增加到1.5米）
    const wall40Lower = createWall(4.8, 1.5, w, -0.8, 0.75, -16, wallColor);
    scene.add(wall40Lower);

    // 左部墙体（宽度增加到1.5米）
    const wall40Left = createWall(1.2, wallHeight, w, -3, wallHeight / 2, -16, wallColor);
    scene.add(wall40Left);

    // 右部墙体（宽度增加到1.5米）
    const wall40Right = createWall(1.2, wallHeight, w, 1.4, wallHeight / 2, -16, wallColor);
    scene.add(wall40Right);

    // 40号墙的玻璃窗（纯玻璃，宽度减少到5米）
    const window40 = new Mesh(
      new BoxGeometry(4, 2.5, 0.1),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window40.position.set(-0.8, 2.5, -16);
    scene.add(window40);

    // 40号窗框边框（白色）
    const frame40_1 = new Mesh(new BoxGeometry(0.08, 2.6, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame40_1.position.set(-2.8, 2.5, -16);
    scene.add(frame40_1);

    const frame40_2 = new Mesh(new BoxGeometry(0.08, 2.6, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame40_2.position.set(1.2, 2.5, -16);
    scene.add(frame40_2);

    const frame40_3 = new Mesh(new BoxGeometry(4, 0.08, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame40_3.position.set(-0.8, 3.8, -16);
    scene.add(frame40_3);

    const frame40_4 = new Mesh(new BoxGeometry(4, 0.08, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame40_4.position.set(-0.8, 1.2, -16);
    scene.add(frame40_4);

    // #41 - 顶部外墙中右段（15号与16号之间，改为四周墙体+中间玻璃窗）
    // 上部墙体
    createWallWithLabel(41, 4.4, 0.5, w, 3.8, 3.75, -16, wallColor, scene);

    // 下部墙体（底部往上移1米，高度增加到1.5米）
    const wall41Lower = createWall(4.4, 1.5, w, 3.8, 0.75, -16, wallColor);
    scene.add(wall41Lower);

    // 左部墙体（宽度增加到1.5米）
    const wall41Left = createWall(1.2, wallHeight, w, 1.8, wallHeight / 2, -16, wallColor);
    scene.add(wall41Left);

    // 右部墙体（宽度增加到1.5米）
    const wall41Right = createWall(1.2, wallHeight, w, 5.8, wallHeight / 2, -16, wallColor);
    scene.add(wall41Right);

    // 41号墙的玻璃窗（纯玻璃，宽度减少到4.5米）
    const window41 = new Mesh(
      new BoxGeometry(3.6, 2.5, 0.1),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window41.position.set(3.8, 2.5, -16);
    scene.add(window41);

    // 41号窗框边框（白色）
    const frame41_1 = new Mesh(new BoxGeometry(0.08, 2.6, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame41_1.position.set(2, 2.5, -16);
    scene.add(frame41_1);

    const frame41_2 = new Mesh(new BoxGeometry(0.08, 2.6, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame41_2.position.set(5.6, 2.5, -16);
    scene.add(frame41_2);

    const frame41_3 = new Mesh(new BoxGeometry(3.6, 0.08, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame41_3.position.set(3.8, 3.8, -16);
    scene.add(frame41_3);

    const frame41_4 = new Mesh(new BoxGeometry(3.6, 0.08, 0.12), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame41_4.position.set(3.8, 1.2, -16);
    scene.add(frame41_4);

    // #42 - 顶部外墙右段（16号墙右侧）
    createWallWithLabel(42, 11.6, wallHeight, w, 11.8, wallHeight / 2, -16, wallColor, scene);

    // #2 - 右侧外墙上段（与33号墙上方，改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(2, w, 0.5, 4, 17.6, 3.75, -13.2, wallColor, scene);

    // 下部墙体（底部往上移1米，高度增加到1.5米）
    const wall2Lower = createWall(w, 1.5, 4, 17.6, 0.75, -13.2, wallColor);
    scene.add(wall2Lower);

    // 左部墙体
    const wall2Left = createWall(w, wallHeight, 0.8, 17.6, wallHeight / 2, -15.6, wallColor);
    scene.add(wall2Left);

    // 右部墙体
    const wall2Right = createWall(w, wallHeight, 0.8, 17.6, wallHeight / 2, -10.8, wallColor);
    scene.add(wall2Right);

    // 2号墙的大落地窗（纯玻璃，底部上移1米，高度减少到2.5米）
    const window2 = new Mesh(
      new BoxGeometry(0.1, 2.5, 4),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window2.position.set(17.6, 2.5, -13.2);
    scene.add(window2);

    // 2号窗框边框（白色）
    const frame2_1 = new Mesh(new BoxGeometry(0.12, 2.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_1.position.set(17.6, 2.5, -15.2);
    scene.add(frame2_1);

    const frame2_2 = new Mesh(new BoxGeometry(0.12, 2.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_2.position.set(17.6, 2.5, -11.2);
    scene.add(frame2_2);

    const frame2_3 = new Mesh(new BoxGeometry(0.12, 0.08, 4), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_3.position.set(17.6, 3.8, -13.2);
    scene.add(frame2_3);

    const frame2_4 = new Mesh(new BoxGeometry(0.12, 0.08, 4), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_4.position.set(17.6, 1.2, -13.2);
    scene.add(frame2_4);

    // #3 - 右侧外墙中上段（33号与28号之间）
    createWallWithLabel(3, w, wallHeight, 4, 17.6, wallHeight / 2, -8.4, wallColor, scene);

    // #4 - 右侧外墙中下段（28号与23号之间，改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(4, w, 0.5, 5.6, 17.6, 3.75, -1.16, wallColor, scene);

    // 下部墙体
    const wall4Lower = createWall(w, 0.5, 5.6, 17.6, 0.25, -1.16, wallColor);
    scene.add(wall4Lower);

    // 左部墙体（加宽到3米）
    const wall4Left = createWall(w, wallHeight, 2.4, 17.6, wallHeight / 2, -5.16, wallColor);
    scene.add(wall4Left);

    // 右部墙体（1.1米）
    const wall4Right = createWall(w, wallHeight, 0.88, 17.6, wallHeight / 2, 2.08, wallColor);
    scene.add(wall4Right);

    // 4号墙的大落地窗（纯玻璃）
    const window4 = new Mesh(
      new BoxGeometry(0.1, 3.5, 5.6),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window4.position.set(17.6, 2, -1.16);
    scene.add(window4);

    // 4号窗框边框（白色）
    const frame4_1 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_1.position.set(17.6, 2, -3.96);
    scene.add(frame4_1);

    const frame4_2 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_2.position.set(17.6, 2, 1.64);
    scene.add(frame4_2);

    const frame4_3 = new Mesh(new BoxGeometry(0.12, 0.08, 5.6), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_3.position.set(17.6, 3.8, -1.16);
    scene.add(frame4_3);

    const frame4_4 = new Mesh(new BoxGeometry(0.12, 0.08, 5.6), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_4.position.set(17.6, 0.2, -1.16);
    scene.add(frame4_4);

    // #5 - 右侧外墙下段（与23号墙下方，改为四周墙体+中间玻璃窗）
    // 上部墙体
    createWallWithLabel(5, w, 0.5, 6.24, 17.6, 3.75, 5.6, wallColor, scene);

    // 下部墙体（底部往上移1米，高度增加到1.5米）
    const wall5Lower = createWall(w, 1.5, 6.24, 17.6, 0.75, 5.6, wallColor);
    scene.add(wall5Lower);

    // 左部墙体（深度3米）
    const wall5Left = createWall(w, wallHeight, 2.4, 17.6, wallHeight / 2, 2.8, wallColor);
    scene.add(wall5Left);

    // 右部墙体（深度调整为2米，不超出9号墙）
    const wall5Right = createWall(w, wallHeight, 1.6, 17.6, wallHeight / 2, 7.92, wallColor);
    scene.add(wall5Right);

    // 5号墙的玻璃窗（纯玻璃，深度3.8米）
    const window5 = new Mesh(
      new BoxGeometry(0.1, 2.5, 3.04),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window5.position.set(17.6, 2.5, 5.6);
    scene.add(window5);

    // 5号窗框边框（白色）
    const frame5_1 = new Mesh(new BoxGeometry(0.12, 2.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame5_1.position.set(17.6, 2.5, 4.08);
    scene.add(frame5_1);

    const frame5_2 = new Mesh(new BoxGeometry(0.12, 2.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame5_2.position.set(17.6, 2.5, 7.12);
    scene.add(frame5_2);

    const frame5_3 = new Mesh(new BoxGeometry(0.12, 0.08, 3.04), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame5_3.position.set(17.6, 3.8, 5.6);
    scene.add(frame5_3);

    const frame5_4 = new Mesh(new BoxGeometry(0.12, 0.08, 3.04), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame5_4.position.set(17.6, 1.2, 5.6);
    scene.add(frame5_4);

    // #6 - 入户凹槽左侧
    createWallWithLabel(6, w, wallHeight, 6.4, -6.4, wallHeight / 2, 12.8, wallColor, scene);

    // #7 - 入户凹槽底部
    createWallWithLabel(7, 6.4, wallHeight, w, -3.2, wallHeight / 2, 15.92, wallColor, scene);

    // #8 - 入户凹槽右侧
    createWallWithLabel(8, w, wallHeight, 5.2, -2.56, wallHeight / 2, 7, wallColor, scene);

    // #9 - 底部外墙右段
    createWallWithLabel(9, 11.2, wallHeight, w, 12, wallHeight / 2, 8.8, wallColor, scene);

    // #10a - 左侧外墙上段（与29号墙上方，改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(10, w, 0.5, 5.6, -17.6, 3.75, -12.4, wallColor, scene);

    // 下部墙体（底部往上移1米，高度增加到1.5米）
    const wall10Lower = createWall(w, 1.5, 5.6, -17.6, 0.75, -12.4, wallColor);
    scene.add(wall10Lower);

    // 左部墙体
    const wall10Left = createWall(w, wallHeight, 0.8, -17.6, wallHeight / 2, -15.6, wallColor);
    scene.add(wall10Left);

    // 右部墙体
    const wall10Right = createWall(w, wallHeight, 0.8, -17.6, wallHeight / 2, -9.2, wallColor);
    scene.add(wall10Right);

    // 10号墙的大落地窗（纯玻璃，底部上移1米，高度减少到2.5米）
    const window10 = new Mesh(
      new BoxGeometry(0.1, 2.5, 5.6),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window10.position.set(-17.6, 2.5, -12.4);
    scene.add(window10);

    // 10号窗框边框（白色）
    const frame10_1 = new Mesh(new BoxGeometry(0.12, 2.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_1.position.set(-17.6, 2.5, -15.2);
    scene.add(frame10_1);

    const frame10_2 = new Mesh(new BoxGeometry(0.12, 2.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_2.position.set(-17.6, 2.5, -9.6);
    scene.add(frame10_2);

    const frame10_3 = new Mesh(new BoxGeometry(0.12, 0.08, 5.6), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_3.position.set(-17.6, 3.8, -12.4);
    scene.add(frame10_3);

    const frame10_4 = new Mesh(new BoxGeometry(0.12, 0.08, 5.6), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_4.position.set(-17.6, 1.2, -12.4);
    scene.add(frame10_4);

    // #10b - 左侧外墙中段（29号与30号之间）
    createWallWithLabel(11, w, wallHeight, 4, -17.6, wallHeight / 2, -6.8, wallColor, scene);

    // #10c - 左侧外墙下段（改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(12, w, 0.5, 12.8, -17.6, 3.75, 3.2, wallColor, scene);

    // 下部墙体
    createWallWithLabel(43, w, 0.5, 12.8, -17.6, 0.25, 3.2, wallColor, scene);

    // 左部墙体
    createWallWithLabel(44, w, wallHeight, 1.6, -17.6, wallHeight / 2, -4, wallColor, scene);

    // 右部墙体
    createWallWithLabel(45, w, wallHeight, 1.6, -17.6, wallHeight / 2, 10.4, wallColor, scene);

    // 中间的大落地窗（纯玻璃）
    const floorWindow = new Mesh(
      new BoxGeometry(0.1, 3.5, 12.8),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    floorWindow.position.set(-17.6, 2, 3.2);
    floorWindow.castShadow = false; // 关闭阴影投射
    floorWindow.receiveShadow = false; // 关闭阴影接收
    scene.add(floorWindow);

    // 窗框边框（白色）
    const windowFrame1 = new Mesh(
      new BoxGeometry(0.12, 3.6, 0.08),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame1.position.set(-17.6, 2, -3.2);
    scene.add(windowFrame1);

    const windowFrame2 = new Mesh(
      new BoxGeometry(0.12, 3.6, 0.08),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame2.position.set(-17.6, 2, 9.6);
    scene.add(windowFrame2);

    const windowFrame3 = new Mesh(
      new BoxGeometry(0.12, 0.08, 12.8),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame3.position.set(-17.6, 3.8, 3.2);
    scene.add(windowFrame3);

    const windowFrame4 = new Mesh(
      new BoxGeometry(0.12, 0.08, 12.8),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame4.position.set(-17.6, 0.2, 3.2);
    scene.add(windowFrame4);

    // ===== 内墙（所有尺寸和位置乘以0.8，墙厚不变） =====
    // #13 - 上区域横墙（主分隔）
    createWallWithLabel(13, 14.4, wallHeight, w, -8.4, wallHeight / 2, -6.4, wallColor, scene);

    // #14 - 上区域左竖墙
    createWallWithLabel(14, w, wallHeight, 3.2, -3.2, wallHeight / 2, -14.4, wallColor, scene);

    // #15 - 上区域中竖墙
    createWallWithLabel(15, w, wallHeight, 6.4, 1.6, wallHeight / 2, -12.8, wallColor, scene);

    // #16 - 上区域右竖墙
    createWallWithLabel(16, w, wallHeight, 6.8, 6, wallHeight / 2, -12.6, wallColor, scene);

    // #18 - 中间主横墙
    createWallWithLabel(18, 8.4, wallHeight, w, -9.8, wallHeight / 2, 4.4, wallColor, scene);

    // #19 - 中左竖墙
    createWallWithLabel(19, w, wallHeight, 2, -15.6, wallHeight / 2, 12.2, wallColor, scene);

    // #20 - 左下横墙
    createWallWithLabel(20, 2, wallHeight, w, -16.6, wallHeight / 2, 11.2, wallColor, scene);

    // #21 - 中下横墙上
    createWallWithLabel(21, 6.4, wallHeight, w, -3.2, wallHeight / 2, 9.6, wallColor, scene);

    // #22 - 中下竖墙
    createWallWithLabel(22, w, wallHeight, 6.4, 0, wallHeight / 2, 12.8, wallColor, scene);

    // #23 - 右下顶部横墙
    createWallWithLabel(23, 4, wallHeight, w, 15.6, wallHeight / 2, 2.48, wallColor, scene);

    // #24 - 右下左竖墙
    createWallWithLabel(24, w, wallHeight, 4, 4.8, wallHeight / 2, 4.4, wallColor, scene);

    // #25 - 右下右竖墙
    createWallWithLabel(25, w, wallHeight, 2.4, 6.4, wallHeight / 2, 7.6, wallColor, scene);

    // #26
    createWallWithLabel(26, 2.8, wallHeight, w, 5, wallHeight / 2, 6.4, wallColor, scene);

    // #27
    createWallWithLabel(27, 7.2, wallHeight, w, 0.2, wallHeight / 2, -9.6, wallColor, scene);

    // #28
    createWallWithLabel(28, 12, wallHeight, w, 11.6, wallHeight / 2, -6.4, wallColor, scene);

    // #29
    createWallWithLabel(29, 2, wallHeight, w, -16.6, wallHeight / 2, -8.8, wallColor, scene);

    // #30
    createWallWithLabel(30, 2, wallHeight, w, -16.6, wallHeight / 2, -4.8, wallColor, scene);

    // #31
    createWallWithLabel(31, w, wallHeight, 4, -15.6, wallHeight / 2, -6.8, wallColor, scene);

    // #32
    createWallWithLabel(32, w, wallHeight, 4, 15.6, wallHeight / 2, -8.4, wallColor, scene);

    // #33
    createWallWithLabel(33, 2, wallHeight, w, 16.6, wallHeight / 2, -10.4, wallColor, scene);

    // #34
    createWallWithLabel(34, w, wallHeight, 2, -13.2, wallHeight / 2, -5.4, wallColor, scene);

    // #36
    createWallWithLabel(36, 2, wallHeight, w, 5.8, wallHeight / 2, 2.48, wallColor, scene);

    // #37
    createWallWithLabel(37, 3.6, wallHeight, w, -0.8, wallHeight / 2, 4.4, wallColor, scene);

    // #38
    createWallWithLabel(38, w, wallHeight, 2, -14, wallHeight / 2, 12.2, wallColor, scene);

    // #39
    createWallWithLabel(39, w, wallHeight, 2.2, 1, wallHeight / 2, 5.4, wallColor, scene);

    // #40
    createWallWithLabel(40, 9.2, wallHeight, w, -11, wallHeight / 2, 13.2, wallColor, scene);

    // #41
    createWallWithLabel(41, w, wallHeight, 1.2, -14, wallHeight / 2, 5, wallColor, scene);

    // 照明（位置乘以0.8）
    const addLight = (x: number, z: number, intensity: number) => {
      const light = new PointLight(0xFFFAE3, intensity, 15);
      light.position.set(x, 2.8, z);
      scene.add(light);
    };

    addLight(0, -11.2, 0.4);
    addLight(0, 6.4, 0.6);
    addLight(-12.8, 11.2, 0.4);
    addLight(9.6, 11.2, 0.4);

    // 加载电视墙模型
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      './public/model/televisionWalls.glb',
      (gltf) => {
        const tvWall = gltf.scene;

        // 设置电视墙位置：靠近18号墙（z=4.8），在墙的中间位置
        // 18号墙: x=-9.8, z=4.8, 宽度8.4米，高度4米
        // 电视墙放在靠近18号墙内侧，正面朝向13号墙（z=-6.4方向，即朝北）
        tvWall.position.set(-9.8, 1.3, 3.9); // x为18号墙中心，z略靠内侧

        // 放大模型，使其接近18号墙的尺寸（统一缩放保持比例）
        tvWall.scale.set(6, 6, 6);

        // 旋转电视墙，使正面朝向13号墙（朝北，即z负方向）
        tvWall.rotation.y = Math.PI;

        // 遍历模型，设置阴影和发光效果
        tvWall.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            console.log('电视墙子对象:', child.name, child.geometry);

            // 检查材质名称或网格名称，为灯带和电视屏幕添加发光效果
            const name = child.name.toLowerCase();
            const materialName = (child.material as MeshStandardMaterial).name?.toLowerCase() || '';

            // 如果是灯带，设置为发光材质
            if (name.includes('light') || name.includes('led') || name.includes('灯') ||
                name.includes('strip') || materialName.includes('light') ||
                materialName.includes('led') || materialName.includes('emissive')) {

              const material = child.material as MeshStandardMaterial;
              // 设置自发光
              material.emissive = new Color(0xFFFFCC); // 暖白色光
              material.emissiveIntensity = 1.5; // 发光强度

              console.log('找到灯带:', child.name, '设置为发光');

              // 在灯带位置添加点光源
              const lightSource = new PointLight(0xFFFFCC, 1, 3);
              lightSource.position.copy(child.position);
              tvWall.add(lightSource);
            }

            // 如果是电视屏幕，设置为发光材质
            if (name.includes('screen') || name.includes('tv') || name.includes('display') ||
                name.includes('电视') || name.includes('屏幕') || name.includes('显示') ||
                materialName.includes('screen') || materialName.includes('tv') ||
                materialName.includes('display')) {

              const material = child.material as MeshStandardMaterial;
              // 设置蓝白色自发光，模拟电视屏幕效果
              material.emissive = new Color(0xCCEEFF); // 冷色调蓝白光
              material.emissiveIntensity = 2; // 屏幕发光强度更高
              material.metalness = 0.1;
              material.roughness = 0.3;

              console.log('找到电视屏幕:', child.name, '设置为发光');

              // 在屏幕位置添加点光源，模拟屏幕光照
              const screenLight = new PointLight(0xCCEEFF, 1.5, 5);
              screenLight.position.copy(child.position);
              tvWall.add(screenLight);
            }
          }
        });

        scene.add(tvWall);
      },
      (progress) => {
        console.log('电视墙加载进度:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
      },
      (error) => {
        console.error('电视墙模型加载失败:', error);
      }
    );

    // 加载沙发模型
    gltfLoader.load(
      './public/model/sofa.glb',
      (gltf) => {
        const sofa = gltf.scene;

        console.log('沙发模型加载成功', sofa);

        // 设置沙发位置：贴着13号墙和34号墙
        // 沙发放在两墙交角处，背靠34号墙，面向电视墙方向
        sofa.position.set(-10, 0.8, -4.2); // 贴近34号墙和13号墙的交角

        // 缩放沙发，调整到合适大小
        sofa.scale.set(6, 6, 6);

        // 旋转沙发，使其面向电视墙（朝向18号墙方向，即z正方向）
        sofa.rotation.y = 0; // 面向南方（z正方向）

        // 遍历模型，调整材质和阴影
        sofa.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            // 设置沙发材质颜色为 #ddd4cb
            const material = child.material as MeshStandardMaterial;
            if (material) {
              // 设置固定颜色
              material.color = new Color(0xddd4cb);

              // 调整材质属性使其更真实
              material.roughness = 0.7; // 沙发布料的粗糙度
              material.metalness = 0; // 布料不反光
              material.envMapIntensity = 0.5;

              console.log('沙发子对象材质已更新:', child.name, '颜色:', material.color);
            }
          }
        });

        scene.add(sofa);
        console.log('沙发已添加到场景，位置:', sofa.position);
      },
      (progress) => {
        console.log('沙发加载进度:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
      },
      (error) => {
        console.error('沙发模型加载失败:', error);
      }
    );

    // 加载床模型
    gltfLoader.load(
      './public/model/bed.glb',
      (gltf) => {
        const bed = gltf.scene;

        console.log('床模型加载成功', bed);

        // 设置床位置：放在左上角房间，床头靠着1号墙
        // 1号墙: x=-10.4, z=-16 (顶部外墙左段，横墙)
        // 左上角房间被1号墙、14号墙(-3.2, -14.4)、13号墙(-8.4, -6.4)和29号墙(-16.6, -8.8)围合
        // 床头靠1号墙，床面向房间中心（朝南，z正方向）
        bed.position.set(-10.4, 1.4, -12); // 床头贴近1号墙，略往房间内侧

        // 缩放床，调整到合适大小
        bed.scale.set(7.5, 7.5, 7.5); // 统一缩放7.5倍

        // 旋转床，向左旋转90度
        bed.rotation.y = -Math.PI / 2; // 向左旋转90度

        // 遍历模型，设置阴影和被子颜色
        bed.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(bed);
        console.log('床已添加到场景，位置:', bed.position);
      },
      (progress) => {
        console.log('床加载进度:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
      },
      (error) => {
        console.error('床模型加载失败:', error);
      }
    );

    // 加载第二张床模型（右上角房间）
    gltfLoader.load(
      './public/model/bed.glb',
      (gltf) => {
        const bed2 = gltf.scene;

        console.log('第二张床模型加载成功', bed2);

        // 设置床位置：放在右上角房间，床头靠着42号墙
        // 42号墙: x=11.8, z=-16 (顶部外墙右段，横墙)
        // 右上角房间被42号墙、16号墙(6, -12.6)、28号墙(11.6, -6.4)和32号墙(15.6, -8.4)围合
        // 床头靠42号墙，床面向房间中心（朝南，z正方向）
        bed2.position.set(11.8, 1.4, -12); // 床头贴近42号墙，略往房间内侧

        // 缩放床，调整到合适大小
        bed2.scale.set(7.5, 7.5, 7.5); // 统一缩放7.5倍

        // 旋转床，旋转-90度
        bed2.rotation.y = -Math.PI / 2; // 旋转-90度

        // 遍历模型，设置阴影和被子颜色
        bed2.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(bed2);
        console.log('第二张床已添加到场景，位置:', bed2.position);
      },
      (progress) => {
        console.log('第二张床加载进度:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
      },
      (error) => {
        console.error('第二张床模型加载失败:', error);
      }
    );

    // 加载第三张床模型（左下角房间）
    gltfLoader.load(
      './public/model/bed.glb',
      (gltf) => {
        const bed3 = gltf.scene;

        console.log('第三张床模型加载成功', bed3);

        // 设置床位置：放在左下角房间
        // 左下角房间被20号墙(-16.6, 11.2)、19号墙(-15.6, 12.2)、40号墙(-11, 13.2)、38号墙(-14, 12.2)围合
        // 床头靠40号墙（底部横墙）
        bed3.position.set(-10.5, 1.4, 9.5); // 床头贴近40号墙，略往房间内侧

        // 缩放床，调整到合适大小
        bed3.scale.set(7.5, 7.5, 7.5); // 统一缩放7.5倍

        // 旋转床，向右旋转90度
        bed3.rotation.y = Math.PI / 2; // 向右旋转90度

        // 遍历模型，设置阴影和被子颜色
        bed3.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(bed3);
        console.log('第三张床已添加到场景，位置:', bed3.position);
      },
      (progress) => {
        console.log('第三张床加载进度:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
      },
      (error) => {
        console.error('第三张床模型加载失败:', error);
      }
    );
  };

  /**
   * 渲染循环 - 更新轨道控制器
   */
  const renderHandle = () => {
    if (controlsRef.current) {
      controlsRef.current.update(); // 更新轨道控制器(阻尼效果需要)
    }

    // 注释掉第一人称移动逻辑
    // 如果需要第一人称视角，请取消下面的注释并恢复 PointerLockControls
    /*
    if (controlsRef.current && controlsRef.current.isLocked) {
      const time = performance.now();
      const delta = (time - prevTimeRef.current) / 1000; // 转换为秒

      // 重力模拟
      velocityRef.current.y -= 9.8 * 3 * delta;

      // 移动方向计算
      directionRef.current.z = Number(moveStateRef.current.forward) - Number(moveStateRef.current.backward);
      directionRef.current.x = Number(moveStateRef.current.right) - Number(moveStateRef.current.left);
      directionRef.current.normalize();

      // 移动速度
      const moveSpeed = 10.0;

      if (moveStateRef.current.forward || moveStateRef.current.backward) {
        velocityRef.current.z -= directionRef.current.z * moveSpeed * delta;
      }
      if (moveStateRef.current.left || moveStateRef.current.right) {
        velocityRef.current.x -= directionRef.current.x * moveSpeed * delta;
      }

      // 应用移动
      controlsRef.current.moveRight(-velocityRef.current.x * delta);
      controlsRef.current.moveForward(-velocityRef.current.z * delta);

      // 获取相机位置
      const cameraPosition = controlsRef.current.getObject().position;

      // 碰撞检测 - 限制在房间内
      // X轴边界(左右墙)
      if (cameraPosition.x < -6.5) cameraPosition.x = -6.5;
      if (cameraPosition.x > 6.5) cameraPosition.x = 6.5;

      // Z轴边界(前后墙)
      if (cameraPosition.z < -4.5) cameraPosition.z = -4.5;
      if (cameraPosition.z > 4.5) cameraPosition.z = 4.5;

      // Y轴限制(地板)
      if (cameraPosition.y < 1.6) {
        velocityRef.current.y = 0;
        cameraPosition.y = 1.6;
        canJumpRef.current = true;
      }

      // 应用摩擦力
      velocityRef.current.x *= 0.9;
      velocityRef.current.z *= 0.9;

      prevTimeRef.current = time;
    }
    */
  };

  const { resize } = useInitialize(
    containerRef,
    initializeHandle,
    null,
    renderHandle
  );

  useLayoutEffect(() => {
    resize();
  }, [menuWidth]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.instructions}>
        <div>🏠 房屋俯视视角</div>
        <div>鼠标左键拖动 旋转视角</div>
        <div>鼠标右键拖动 平移视角</div>
        <div>鼠标滚轮 缩放视角</div>
      </div>
    </div>
  );
};

export default HouseDisplay;
