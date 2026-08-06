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
  Mesh,
  Raycaster,
  Object3D,
  Group,
} from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import { useModeToggle, initModeToggle, modeToggleAnimationRender, pointerControlsMoveRender, handleModeToggle } from './modeToggle';
import addLighting from "./addLighting";
import addHouseStructure from './addHouseStructure';
import add3dModel from "./add3dModel";
import addCeiling from "./addCeiling";
import { addCeilingLamp, allCeilingLampsVisibleToggle, dynamicOptimizationLampLightRender } from './addCeilingLamp';
import { addCrosshair, crosshairRender, createOutlinePass } from './addCrosshair';
import { onClickTVScreen } from './addTVScreen';
import { onClickPhoneScreen } from './addPhoneScreen';
import styles from "./index.module.scss";

// 初始相机位置
const initialCameraPosition = new Vector3(0, 30, 0);
const initialCameraTarget = new Vector3(0, 0, 0);

const HouseDisplay = () => {
  const { menuWidth, headHeight } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const orbitControlsRef = useRef<OrbitControls | null>(null); // 轨道控制器
  const mainComposerRef = useRef<EffectComposer | null>(null);
  const bloomComposerRef = useRef<EffectComposer | null>(null);
  const tvVideoRef = useRef<HTMLVideoElement>(null); // 电视屏幕播放的视频
  const tvScreenRef = useRef<Mesh | null>(null); // 电视屏幕
  const phoneVideoRef = useRef<HTMLVideoElement>(null); // 手机屏幕播放的视频
  const phoneScreenRef = useRef<Mesh | null>(null); // 手机屏幕
  const raycasterRef = useRef<Raycaster | null>(null); // 鼠标准星射线
  const outlinePassRef = useRef<OutlinePass | null>(null);
  const currentIntersectedRef = useRef<Object3D | null>(null); // 当前鼠标射线命中的物体
  const ceilingGroupRef = useRef<Group | null>(null); // 房屋天花板
  const intersectObjectsRef = useRef<Object3D[]>([]); // 鼠标射线可接受的检测对象列表

  const {
    viewMode,
    setViewMode,
    viewModeRef,
    pointerControlsRef,
    isPointerLocked,
    setIsPointerLocked,
    mousePositionRef,
    animatingRef,
    animationStartTimeRef,
    animationDurationRef,
    prevTimeRef,
  } = useModeToggle(containerRef, menuWidth, headHeight, currentIntersectedRef, orbitControlsRef, tvVideoRef, onClickTVScreen, phoneVideoRef, onClickPhoneScreen);

  const initializeHandle = (
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) => {
    if (containerRef.current) {
      sceneRef.current = scene;
      cameraRef.current = camera;

      // 设置场景背景颜色为天空蓝
      scene.background = new Color(0x87CEEB);

      // 设置相机初始位置为俯视角度(从天花板上方向下看)
      camera.position.copy(initialCameraPosition);
      camera.lookAt(initialCameraTarget);

      RectAreaLightUniformsLib.init();
      renderer.toneMappingExposure = 1.0;

      // ===== 轨道控制器设置(用于整体观察) =====
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControlsRef.current = orbitControls;
      orbitControls.enableDamping = true;
      orbitControls.dampingFactor = 0.05;
      orbitControls.minDistance = 1;
      orbitControls.maxDistance = 40;
      orbitControls.maxPolarAngle = Math.PI / 2;
      orbitControls.enabled = true; // 初始启用

      // 添加环境光和太阳光
      addLighting(scene);

      // 创建并显示地板、墙体和玻璃窗
      addHouseStructure(scene, false);

      // 加载并显示电视墙、沙发、床等模型
      add3dModel(scene, tvVideoRef.current, tvScreenRef, phoneVideoRef.current, phoneScreenRef, intersectObjectsRef);

      // 添加天花板（初始隐藏在天空中）
      addCeiling(scene, ceilingGroupRef);

      // 添加所有房间吊灯
      addCeilingLamp(scene);

      // 添加鼠标准星
      addCrosshair(scene, containerRef.current, raycasterRef);

      // 初始化整体/漫游模式切换相关
      initModeToggle(
        scene,
        camera,
        containerRef.current,
        pointerControlsRef,
        setIsPointerLocked,
        animatingRef,
        setViewMode,
        viewModeRef,
        orbitControlsRef,
        animationStartTimeRef,
        allCeilingLampsVisibleToggle,
      );

      // 启用后期处理器
      const bloomComposer = new EffectComposer(renderer);
      bloomComposer.renderToScreen = false;
      const bloomPass = new UnrealBloomPass(
        new Vector2(containerRef.current.clientWidth, containerRef.current.clientHeight),
        1.2,
        0.4,
        0.96,
      );
      bloomComposer.addPass(new RenderPass(scene, camera));
      bloomComposer.addPass(bloomPass);
      bloomComposerRef.current = bloomComposer;

      const mainComposer = new EffectComposer(renderer);
      mainComposer.addPass(new RenderPass(scene, camera));
      const outlinePass = createOutlinePass(scene, camera, containerRef.current);
      outlinePassRef.current = outlinePass;
      mainComposer.addPass(outlinePass);
      mainComposer.addPass(new OutputPass());
      mainComposerRef.current = mainComposer;
    }
  };

  /**
   * 渲染循环
   */
  const renderHandle = (scene: Scene, camera: PerspectiveCamera) => {
    // 模式切换动画过程渲染
    modeToggleAnimationRender(camera, animatingRef, viewModeRef, orbitControlsRef, pointerControlsRef, initialCameraPosition, initialCameraTarget, ceilingGroupRef, animationStartTimeRef, animationDurationRef, allCeilingLampsVisibleToggle)

    // 整体模式下更新轨道控制器
    if (viewModeRef.current === 'overview' && orbitControlsRef.current && !animatingRef.current) {
      orbitControlsRef.current.update();
    }

    // 漫游模式下第一人称控制器和摄像机移动过程渲染
    pointerControlsMoveRender(camera, animatingRef, viewModeRef, pointerControlsRef, prevTimeRef)

    // 漫游模式下，实时计算距离摄像机最近的n个吊灯，打开吊灯光源，其他则关闭（客厅和餐厅吊灯除外）
    dynamicOptimizationLampLightRender(camera, animatingRef, viewModeRef);

    // 鼠标准星渲染
    crosshairRender(scene, camera, raycasterRef.current, viewModeRef, mousePositionRef, intersectObjectsRef, outlinePassRef.current, currentIntersectedRef);

    // Bloom效果渲染
    camera.layers.set(1);
    bloomComposerRef.current?.render();
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
      {/* 模式切换按钮 */}
      <button
        className={styles.modeToggle}
        onClick={
          (e) => handleModeToggle(e, animatingRef, setViewMode, viewModeRef, orbitControlsRef, animationStartTimeRef, allCeilingLampsVisibleToggle)
        }
        tabIndex={-1}
      >
        {viewMode === 'overview' ? '🚶 进入漫游模式' : '🏠 返回整体模式'}
      </button>

      {/* 操作说明 */}
      {viewMode === 'overview' && (
        <div className={styles.instructions}>
          <div>🏠 房屋整体视角</div>
          <div>鼠标左键拖动 旋转视角</div>
          <div>鼠标右键拖动 平移视角</div>
          <div>鼠标滚轮 缩放视角</div>
        </div>
      )}
      {<div className={styles.roamingHint}>
        {viewMode === 'overview'
          ? '空格切换模式'
          : isPointerLocked ? 'WASD移动 | 鼠标转动视角 | ESC解锁鼠标 | 空格切换模式' : '点击屏幕解锁鼠标 | 空格切换模式'}
      </div>}

      {/* 准星 - 在漫游模式下固定在屏幕中心，否则跟随鼠标 */}
      <div className={`${styles.crosshair} ${viewMode === 'roaming' ? styles.centered : ''}`} />
      <video
        ref={tvVideoRef}
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
      <video
        ref={phoneVideoRef}
        id="phoneVideo"
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
        <source src="public/dance.mp4"></source>
      </video>
    </div>
  );
};

export default HouseDisplay;
