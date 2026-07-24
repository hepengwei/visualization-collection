/**
 * 房屋展示 - 3D房屋漫游
 */
import React, { useRef, useLayoutEffect } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  Vector2,
  Color,
} from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import addLighting from "./addLighting";
import createHouseStructure from './createHouseStructure';
import load3dModel from "./load3dModel";
import styles from "./index.module.scss";

const HouseDisplay = () => {
  const { menuWidth } = useGlobalContext();
  const mainComposerRef = useRef<EffectComposer | null>(null);
  const bloomComposerRef = useRef<EffectComposer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null); // 使用轨道控制器以便俯视观察
  const velocityRef = useRef<Vector3>(new Vector3());
  const directionRef = useRef<Vector3>(new Vector3());
  const moveStateRef = useRef({ forward: false, backward: false, left: false, right: false });
  const canJumpRef = useRef(false);
  const prevTimeRef = useRef(performance.now());

  const initializeHandle = (
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) => {
    if (containerRef.current) {
      // 设置场景背景颜色为天空蓝
      scene.background = new Color(0x87CEEB);

      // 设置相机初始位置为俯视角度(从天花板上方向下看)
      camera.position.set(0, 30, 0); // 在房屋正上方30米高处
      camera.lookAt(0, 0, 0); // 看向房屋中心

      RectAreaLightUniformsLib.init();
      renderer.toneMappingExposure = 1.0; // 使用标准曝光度

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

      // 添加环境光和太阳光
      addLighting(scene);

      // 创建并显示地板、墙体和玻璃窗
      createHouseStructure(scene);

      // 加载并显示电视墙、沙发、床等模型
      load3dModel(scene);

      // 启用后期处理器
      //Bloom专用
      const bloomComposer = new EffectComposer(renderer);
      bloomComposer.renderToScreen = false;
      // 只让电视屏幕的光增强
      const bloomPass = new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight),
        1.2, // strength
        0.4, // radius
        0.96, // threshold
      );
      bloomComposer.addPass(new RenderPass(scene, camera));
      bloomComposer.addPass(bloomPass);
      bloomComposerRef.current = bloomComposer;

      // 主渲染（无Bloom）
      const mainComposer = new EffectComposer(renderer);
      mainComposer.addPass(new RenderPass(scene, camera));
      mainComposer.addPass(new OutputPass()); // 必须有，且放在最后
      mainComposerRef.current = mainComposer;
    }
  };


  /**
   * 渲染循环 - 更新轨道控制器
   */
  const renderHandle = (scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) => {
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

    // 只让电视屏幕参与Bloom
    camera.layers.set(1);
    bloomComposerRef.current?.render();
    // 正常渲染所有物体
    camera.layers.enableAll();
    mainComposerRef.current?.render();
    return true;
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
      <video
        id="tvVideo"
        muted
        autoPlay
        preload="true"
        loop
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      >
        <source src="public/vista.mp4"></source>
      </video>
    </div>
  );
};

export default HouseDisplay;
