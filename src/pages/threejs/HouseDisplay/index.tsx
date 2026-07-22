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
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import styles from "./index.module.scss";

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
      camera.position.set(0, 34, 0); // 在房屋正上方34米高处
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
      // 环境光 - 提供柔和的基础照明（降低强度）
      const ambientLight = new AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      // 主方向光 - 模拟太阳光（降低强度）
      const directionalLight = new DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(10, 20, 10);
      directionalLight.castShadow = true;
      directionalLight.shadow.camera.left = -20;
      directionalLight.shadow.camera.right = 20;
      directionalLight.shadow.camera.top = 20;
      directionalLight.shadow.camera.bottom = -20;
      scene.add(directionalLight);

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
    if (width > depth) {
      // 横墙，标签在前后两侧
      createWallLabel(number, x, y + 0.5, z + depth / 2 + 0.4, scene);
      createWallLabel(number, x, y + 0.5, z - depth / 2 - 0.4, scene);
    } else {
      // 竖墙，标签在左右两侧
      createWallLabel(number, x + width / 2 + 0.4, y + 0.5, z, scene);
      createWallLabel(number, x - width / 2 - 0.4, y + 0.5, z, scene);
    }
  };
  const createWall = (width: number, height: number, depth: number, x: number, y: number, z: number, color: number = 0xf5f5dc) => {
    const geometry = new BoxGeometry(width, height, depth);
    const material = new MeshStandardMaterial({
      color,
      roughness: 0.95, // 增加粗糙度，减少反光
      metalness: 0 // 完全不反射金属光泽
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
    const wallColor = 0xFFFEF5;

    // 地板（放大4倍）
    const floor = new Mesh(
      new PlaneGeometry(52, 40),
      new MeshStandardMaterial({ color: 0xE5D4C1, side: DoubleSide, roughness: 0.95, metalness: 0 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // ===== 外墙（所有尺寸和位置乘以4，墙厚不变） =====
    // #1 - 顶部外墙左段（14号墙左侧）
    createWallWithLabel(1, 18, wallHeight, w, -13, wallHeight / 2, -20, wallColor, scene);

    // #40 - 顶部外墙中左段（14号与15号之间）
    createWallWithLabel(40, 6, wallHeight, w, -1, wallHeight / 2, -20, wallColor, scene);

    // #41 - 顶部外墙中右段（15号与16号之间）
    createWallWithLabel(41, 5.5, wallHeight, w, 4.75, wallHeight / 2, -20, wallColor, scene);

    // #42 - 顶部外墙右段（16号墙右侧）
    createWallWithLabel(42, 14.5, wallHeight, w, 14.75, wallHeight / 2, -20, wallColor, scene);

    // #2 - 右侧外墙上段（与33号墙上方，改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(2, w, 0.5, 5, 22, 3.75, -16.5, wallColor, scene);

    // 下部墙体
    const wall2Lower = createWall(w, 0.5, 5, 22, 0.25, -16.5, wallColor);
    scene.add(wall2Lower);

    // 左部墙体
    const wall2Left = createWall(w, wallHeight, 1, 22, wallHeight / 2, -19.5, wallColor);
    scene.add(wall2Left);

    // 右部墙体
    const wall2Right = createWall(w, wallHeight, 1, 22, wallHeight / 2, -13.5, wallColor);
    scene.add(wall2Right);

    // 2号墙的大落地窗（纯玻璃）
    const window2 = new Mesh(
      new BoxGeometry(0.1, 3.5, 5),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window2.position.set(22, 2, -16.5);
    scene.add(window2);

    // 2号窗框边框（白色）
    const frame2_1 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_1.position.set(22, 2, -19);
    scene.add(frame2_1);

    const frame2_2 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_2.position.set(22, 2, -14);
    scene.add(frame2_2);

    const frame2_3 = new Mesh(new BoxGeometry(0.12, 0.08, 5), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_3.position.set(22, 3.8, -16.5);
    scene.add(frame2_3);

    const frame2_4 = new Mesh(new BoxGeometry(0.12, 0.08, 5), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame2_4.position.set(22, 0.2, -16.5);
    scene.add(frame2_4);

    // #3 - 右侧外墙中上段（33号与28号之间）
    createWallWithLabel(3, w, wallHeight, 5, 22, wallHeight / 2, -10.5, wallColor, scene);

    // #4 - 右侧外墙中下段（28号与23号之间，改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(4, w, 0.5, 7, 22, 3.75, -1.45, wallColor, scene);

    // 下部墙体
    const wall4Lower = createWall(w, 0.5, 7, 22, 0.25, -1.45, wallColor);
    scene.add(wall4Lower);

    // 左部墙体（加宽到3米）
    const wall4Left = createWall(w, wallHeight, 3, 22, wallHeight / 2, -6.45, wallColor);
    scene.add(wall4Left);

    // 右部墙体（1.1米）
    const wall4Right = createWall(w, wallHeight, 1.1, 22, wallHeight / 2, 2.6, wallColor);
    scene.add(wall4Right);

    // 4号墙的大落地窗（纯玻璃）
    const window4 = new Mesh(
      new BoxGeometry(0.1, 3.5, 7),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window4.position.set(22, 2, -1.45);
    scene.add(window4);

    // 4号窗框边框（白色）
    const frame4_1 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_1.position.set(22, 2, -4.95);
    scene.add(frame4_1);

    const frame4_2 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_2.position.set(22, 2, 2.05);
    scene.add(frame4_2);

    const frame4_3 = new Mesh(new BoxGeometry(0.12, 0.08, 7), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_3.position.set(22, 3.8, -1.45);
    scene.add(frame4_3);

    const frame4_4 = new Mesh(new BoxGeometry(0.12, 0.08, 7), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame4_4.position.set(22, 0.2, -1.45);
    scene.add(frame4_4);

    // #5 - 右侧外墙下段（与23号墙下方，原为底部外墙左段）
    createWallWithLabel(5, w, wallHeight, 7.8, 22, wallHeight / 2, 7, wallColor, scene);

    // #6 - 入户凹槽左侧
    createWallWithLabel(6, w, wallHeight, 8, -8, wallHeight / 2, 16, wallColor, scene);

    // #7 - 入户凹槽底部
    createWallWithLabel(7, 8, wallHeight, w, -4, wallHeight / 2, 19.9, wallColor, scene);

    // #8 - 入户凹槽右侧
    createWallWithLabel(8, w, wallHeight, 6, -3.2, wallHeight / 2, 9, wallColor, scene);

    // #9 - 底部外墙右段
    createWallWithLabel(9, 14, wallHeight, w, 15, wallHeight / 2, 11, wallColor, scene);

    // #10a - 左侧外墙上段（与29号墙上方，改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(10, w, 0.5, 7, -22, 3.75, -15.5, wallColor, scene);

    // 下部墙体
    const wall10Lower = createWall(w, 0.5, 7, -22, 0.25, -15.5, wallColor);
    scene.add(wall10Lower);

    // 左部墙体
    const wall10Left = createWall(w, wallHeight, 1, -22, wallHeight / 2, -19.5, wallColor);
    scene.add(wall10Left);

    // 右部墙体
    const wall10Right = createWall(w, wallHeight, 1, -22, wallHeight / 2, -11.5, wallColor);
    scene.add(wall10Right);

    // 10号墙的大落地窗（纯玻璃）
    const window10 = new Mesh(
      new BoxGeometry(0.1, 3.5, 7),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    window10.position.set(-22, 2, -15.5);
    scene.add(window10);

    // 10号窗框边框（白色）
    const frame10_1 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_1.position.set(-22, 2, -19);
    scene.add(frame10_1);

    const frame10_2 = new Mesh(new BoxGeometry(0.12, 3.6, 0.08), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_2.position.set(-22, 2, -12);
    scene.add(frame10_2);

    const frame10_3 = new Mesh(new BoxGeometry(0.12, 0.08, 7), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_3.position.set(-22, 3.8, -15.5);
    scene.add(frame10_3);

    const frame10_4 = new Mesh(new BoxGeometry(0.12, 0.08, 7), new MeshStandardMaterial({ color: 0xFFFFFF }));
    frame10_4.position.set(-22, 0.2, -15.5);
    scene.add(frame10_4);

    // #10b - 左侧外墙中段（29号与30号之间）
    createWallWithLabel(11, w, wallHeight, 5, -22, wallHeight / 2, -8.5, wallColor, scene);

    // #10c - 左侧外墙下段（改为四周墙体+中间落地窗）
    // 上部墙体
    createWallWithLabel(12, w, 0.5, 16, -22, 3.75, 4, wallColor, scene);

    // 下部墙体
    createWallWithLabel(43, w, 0.5, 16, -22, 0.25, 4, wallColor, scene);

    // 左部墙体
    createWallWithLabel(44, w, wallHeight, 2, -22, wallHeight / 2, -5, wallColor, scene);

    // 右部墙体
    createWallWithLabel(45, w, wallHeight, 2, -22, wallHeight / 2, 13, wallColor, scene);

    // 中间的大落地窗（纯玻璃）
    const floorWindow = new Mesh(
      new BoxGeometry(0.1, 3.5, 16),
      new MeshStandardMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    floorWindow.position.set(-22, 2, 4);
    floorWindow.castShadow = true;
    floorWindow.receiveShadow = true;
    scene.add(floorWindow);

    // 窗框边框（白色）
    const windowFrame1 = new Mesh(
      new BoxGeometry(0.12, 3.6, 0.08),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame1.position.set(-22, 2, -4);
    scene.add(windowFrame1);

    const windowFrame2 = new Mesh(
      new BoxGeometry(0.12, 3.6, 0.08),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame2.position.set(-22, 2, 12);
    scene.add(windowFrame2);

    const windowFrame3 = new Mesh(
      new BoxGeometry(0.12, 0.08, 16),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame3.position.set(-22, 3.8, 4);
    scene.add(windowFrame3);

    const windowFrame4 = new Mesh(
      new BoxGeometry(0.12, 0.08, 16),
      new MeshStandardMaterial({ color: 0xFFFFFF })
    );
    windowFrame4.position.set(-22, 0.2, 4);
    scene.add(windowFrame4);

    // ===== 内墙（所有尺寸和位置乘以4，墙厚不变） =====
    // #13 - 上区域横墙（主分隔）
    createWallWithLabel(13, 18, wallHeight, w, -10.5, wallHeight / 2, -8, wallColor, scene);

    // #14 - 上区域左竖墙
    createWallWithLabel(14, w, wallHeight, 4, -4, wallHeight / 2, -18, wallColor, scene);

    // #15 - 上区域中竖墙
    createWallWithLabel(15, w, wallHeight, 8, 2, wallHeight / 2, -16, wallColor, scene);

    // #16 - 上区域右竖墙
    createWallWithLabel(16, w, wallHeight, 8.5, 7.5, wallHeight / 2, -15.75, wallColor, scene);

    // #18 - 中间主横墙
    createWallWithLabel(18, 11, wallHeight, w, -12.5, wallHeight / 2, 6, wallColor, scene);

    // #19 - 中左竖墙
    createWallWithLabel(19, w, wallHeight, 2.5, -19.5, wallHeight / 2, 15.25, wallColor, scene);

    // #20 - 左下横墙
    createWallWithLabel(20, 2.5, wallHeight, w, -20.75, wallHeight / 2, 14, wallColor, scene);

    // #21 - 中下横墙上
    createWallWithLabel(21, 8, wallHeight, w, -4, wallHeight / 2, 12, wallColor, scene);

    // #22 - 中下竖墙
    createWallWithLabel(22, w, wallHeight, 8, 0, wallHeight / 2, 16, wallColor, scene);

    // #23 - 右下顶部横墙
    createWallWithLabel(23, 5, wallHeight, w, 19.5, wallHeight / 2, 3.1, wallColor, scene);

    // #24 - 右下左竖墙
    createWallWithLabel(24, w, wallHeight, 5, 6, wallHeight / 2, 5.5, wallColor, scene);

    // #25 - 右下右竖墙
    createWallWithLabel(25, w, wallHeight, 3, 8, wallHeight / 2, 9.5, wallColor, scene);

    // #26
    createWallWithLabel(26, 3.5, wallHeight, w, 6.25, wallHeight / 2, 8, wallColor, scene);

    // #27
    createWallWithLabel(27, 9, wallHeight, w, 0.25, wallHeight / 2, -12, wallColor, scene);

    // #28
    createWallWithLabel(28, 15, wallHeight, w, 14.5, wallHeight / 2, -8, wallColor, scene);

    // #29
    createWallWithLabel(29, 2.5, wallHeight, w, -20.75, wallHeight / 2, -11, wallColor, scene);

    // #30
    createWallWithLabel(30, 2.5, wallHeight, w, -20.75, wallHeight / 2, -6, wallColor, scene);

    // #31
    createWallWithLabel(31, w, wallHeight, 5, -19.5, wallHeight / 2, -8.5, wallColor, scene);

    // #32
    createWallWithLabel(32, w, wallHeight, 5, 19.5, wallHeight / 2, -10.5, wallColor, scene);

    // #33
    createWallWithLabel(33, 2.5, wallHeight, w, 20.75, wallHeight / 2, -13, wallColor, scene);

    // #34
    createWallWithLabel(34, w, wallHeight, 2.5, -16.5, wallHeight / 2, -6.75, wallColor, scene);

    // #35
    createWallWithLabel(35, w, wallHeight, 2.5, -16.5, wallHeight / 2, 4.75, wallColor, scene);

    // #36
    createWallWithLabel(36, 2.5, wallHeight, w, 7.25, wallHeight / 2, 3.1, wallColor, scene);

    // #37
    createWallWithLabel(37, 4.5, wallHeight, w, -1, wallHeight / 2, 6, wallColor, scene);

    // #38
    createWallWithLabel(38, w, wallHeight, 2.5, -16.5, wallHeight / 2, 15.25, wallColor, scene);

    // #39
    createWallWithLabel(39, w, wallHeight, 2, 1.25, wallHeight / 2, 7, wallColor, scene);

    // #40
    createWallWithLabel(40, 11.5, wallHeight, w, -13.75, wallHeight / 2, 16.5, wallColor, scene);

    // 照明（位置乘以4）
    const addLight = (x: number, z: number, intensity: number) => {
      const light = new PointLight(0xFFFAE3, intensity, 15);
      light.position.set(x, 2.8, z);
      scene.add(light);
    };

    addLight(0, -14, 0.4);
    addLight(0, 8, 0.6);
    addLight(-16, 14, 0.4);
    addLight(12, 14, 0.4);
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
