/**
 * 房屋展示 - 3D房屋漫游
 */
import React, { useRef, useLayoutEffect, useEffect } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  Mesh,
  Object3D,
  Group,
  Raycaster,
} from "three";
import Stats from 'stats.js';
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import type { AssetManager } from 'hooks/threejs/useInitialize';
import useDualComposer from './function/useDualComposer';
import { generateSkyTexture, initAssetManager } from './utils';
import {
  useModeToggle,
  initModeToggle,
  modeToggleAnimationRender,
  pointerControlsMoveRender,
  handleModeToggle
} from './function/modeToggle';
import addLighting from "./function/addLighting";
import addHouseStructure from './goods/addHouseStructure';
import { addDoor, onClickDoor, doorAnimationRender } from "./goods/addDoor";
import { addGroundGlassDoor, onClickGroundGlassDoor, groundGlassDoorAnimationRender } from './goods/addGroundGlassDoor';
import add3dModel from "./goods/add3dModel";
import addCeiling from "./goods/addCeiling";
import { addCeilingLamp, allCeilingLampsVisibleToggle, dynamicOptimizationLampLightRender } from './goods/addCeilingLamp';
import { onClickCeilingLampSwitch } from './goods/addCeilingLampSwitch';
import { onClickTVScreen } from './goods/addTVScreen';
import { onClickPhoneScreen } from './goods/addPhoneScreen';
import { addCrosshair, resizeCrosshair, crosshairRender } from './function/addCrosshair';
import addTeaTable from './goods/addTeaTable';
import { addCurtain, onClickCurtain, curtainAnimationRender } from "./goods/addCurtain";
import styles from "./index.module.scss";

export type SwitchStatus = 'ON' | 'OFF';

// 是否显示Stats性能监控面板
const showStats = false;

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
  const outlinePassRef = useRef<OutlinePass | null>(null);
  const pointerControlsIntersetObjectsRef = useRef<Object3D[]>([]); // 第一人称控制器可接受的碰撞检测对象列表
  const ceilingGroupRef = useRef<Group | null>(null); // 房屋天花板
  const doorListRef = useRef<Mesh[]>([]); // 所有房门的列表
  const groundGlassDoorListRef = useRef<Group[]>([]); // 所有磨砂玻璃门的列表
  const lampListRef = useRef<Group[]>([]); // 所有吊灯的列表
  const lampSwitchListRef = useRef<Group[]>([]); // 所有吊灯开关的列表
  const labelRendererRef = useRef<CSS2DRenderer | null>(null); // 鼠标准星渲染器
  const raycasterRef = useRef<Raycaster | null>(null); // 鼠标准星射线
  const reticleRef = useRef<CSS2DObject | null>(null); // 鼠标准星对象
  const mouseRaycasterIntersectObjectsRef = useRef<Object3D[]>([]); // 鼠标射线可接受的检测对象列表
  const mouseRaycasterIntersectedRef = useRef<Object3D | null>(null); // 当前鼠标射线命中的物体
  const curtainListRef = useRef<Group[]>([]); // 所有窗帘的列表
  const statsRef1 = useRef<Stats | null>(null);
  const statsRef2 = useRef<Stats | null>(null);
  const statsRef3 = useRef<Stats | null>(null);

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
  } = useModeToggle(
    containerRef,
    menuWidth,
    headHeight,
    mouseRaycasterIntersectedRef,
    orbitControlsRef,
    onClickDoor,
    onClickGroundGlassDoor,
    tvVideoRef,
    onClickTVScreen,
    phoneVideoRef,
    onClickPhoneScreen,
    lampListRef,
    onClickCeilingLampSwitch,
    onClickCurtain,
  );

  const initializeHandle = (
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
    assetManager: AssetManager,
  ) => {
    if (containerRef.current && scene) {
      sceneRef.current = scene;
      cameraRef.current = camera;

      // 设置场景背景颜色为天空蓝
      const skyTexture = generateSkyTexture();
      scene.background = skyTexture;

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

      // 初始化资源管理器，将所有公共的刚体和部分公共材质预先创建并存到资源管理器中
      initAssetManager(assetManager);

      // 添加地板、墙体和玻璃窗
      addHouseStructure(
        scene,
        assetManager,
        mouseRaycasterIntersectObjectsRef,
        pointerControlsIntersetObjectsRef,
        false,
      );

      // 添加房门
      addDoor(
        scene,
        assetManager,
        doorListRef,
        mouseRaycasterIntersectObjectsRef,
        pointerControlsIntersetObjectsRef,
      );

      // 添加磨砂玻璃门
      addGroundGlassDoor(
        scene,
        assetManager,
        groundGlassDoorListRef,
        mouseRaycasterIntersectObjectsRef,
        pointerControlsIntersetObjectsRef,
      )

      // 加载并显示电视墙、沙发、床等模型
      add3dModel(
        scene,
        assetManager,
        tvVideoRef.current,
        tvScreenRef,
        phoneVideoRef.current,
        phoneScreenRef,
        mouseRaycasterIntersectObjectsRef,
      );

      // 添加天花板（初始隐藏在天空中）
      addCeiling(scene, assetManager, ceilingGroupRef);

      // 添加所有房间吊灯
      addCeilingLamp(
        scene,
        assetManager,
        lampListRef,
        lampSwitchListRef,
        mouseRaycasterIntersectObjectsRef,
      );

      // 初始化整体/漫游模式切换相关
      initModeToggle(
        camera,
        containerRef.current,
        pointerControlsRef,
        setIsPointerLocked,
        animatingRef,
        setViewMode,
        viewModeRef,
        orbitControlsRef,
        animationStartTimeRef,
        lampListRef.current,
        lampSwitchListRef.current,
        allCeilingLampsVisibleToggle,
      );

      // 添加鼠标准星
      addCrosshair(
        scene,
        containerRef.current,
        labelRendererRef,
        raycasterRef,
        reticleRef,
      );

      // 添加茶几
      addTeaTable(scene, assetManager);

      // 添加窗帘
      addCurtain(
        scene,
        assetManager,
        curtainListRef,
        mouseRaycasterIntersectObjectsRef,
        pointerControlsIntersetObjectsRef,
      );

      // 启用双后处理器架构
      useDualComposer(
        scene,
        camera,
        renderer,
        mainComposerRef,
        bloomComposerRef,
        containerRef,
        outlinePassRef,
      );
    }
  };

  /**
   * 渲染循环
   */
  const renderHandle = (scene: Scene, camera: PerspectiveCamera) => {
    // 模式切换动画过程渲染
    modeToggleAnimationRender(
      camera,
      animatingRef,
      viewModeRef,
      orbitControlsRef,
      pointerControlsRef,
      initialCameraPosition,
      initialCameraTarget,
      ceilingGroupRef,
      animationStartTimeRef,
      animationDurationRef,
      lampListRef.current,
      lampSwitchListRef.current,
      allCeilingLampsVisibleToggle
    );

    // 房门开/关动画过程渲染
    doorAnimationRender(doorListRef.current);

    // 磨砂玻璃门开/关动画过程渲染
    groundGlassDoorAnimationRender(groundGlassDoorListRef.current)

    // 窗帘开/关动画过程渲染
    curtainAnimationRender(curtainListRef.current);

    // 整体模式下更新轨道控制器
    if (viewModeRef.current === 'overview' && orbitControlsRef.current && !animatingRef.current) {
      orbitControlsRef.current.update();
    }

    // 漫游模式下第一人称控制器和摄像机移动过程渲染
    pointerControlsMoveRender(camera, animatingRef, viewModeRef, pointerControlsRef, pointerControlsIntersetObjectsRef.current, prevTimeRef)

    // 漫游模式下，实时计算距离摄像机最近的n个吊灯，打开吊灯光源，其他则关闭（客厅和餐厅吊灯除外）
    dynamicOptimizationLampLightRender(camera, animatingRef, viewModeRef);

    // 鼠标准星渲染
    crosshairRender(
      scene,
      camera,
      labelRendererRef.current,
      raycasterRef.current,
      reticleRef.current,
      viewModeRef,
      mousePositionRef,
      mouseRaycasterIntersectObjectsRef,
      outlinePassRef.current,
      mouseRaycasterIntersectedRef
    );

    // Bloom效果渲染
    camera.layers.set(1);
    bloomComposerRef.current?.render();
    camera.layers.enableAll();
    mainComposerRef.current?.render();

    if (showStats) {
      if (statsRef1.current) {
        statsRef1.current.dom.style.top = 'auto';
        statsRef1.current.dom.style.left = 'auto';
        statsRef1.current.dom.style.bottom = '0px';
        statsRef1.current.dom.style.right = '0px';
        statsRef1.current.update();
      }
      if (statsRef2.current) {
        statsRef2.current.dom.style.top = 'auto';
        statsRef2.current.dom.style.left = 'auto';
        statsRef2.current.dom.style.bottom = '0px';
        statsRef2.current.dom.style.right = '80px';
        statsRef2.current.update();
      }
      if (statsRef3.current) {
        statsRef3.current.dom.style.top = 'auto';
        statsRef3.current.dom.style.left = 'auto';
        statsRef3.current.dom.style.bottom = '0px';
        statsRef3.current.dom.style.right = '160px';
        statsRef3.current.update();
      }
    }

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
    // 同时调整 labelRenderer 的大小
    resizeCrosshair(containerRef.current, labelRendererRef.current);
  }, [menuWidth]);

  useEffect(() => {
    if (showStats) {
      // 添加Stats性能监控面板
      const stats1 = new Stats();
      statsRef1.current = stats1;
      stats1.showPanel(0);
      stats1.dom.style.position = 'absolute';
      stats1.dom.style.bottom = '0px';
      stats1.dom.style.right = '0px';
      stats1.dom.style.zIndex = '10';
      stats1.dom.style.pointerEvents = 'none';
      containerRef.current?.appendChild(stats1.dom);

      const stats2 = new Stats();
      statsRef2.current = stats2;
      stats2.showPanel(1);
      stats2.dom.style.position = 'absolute';
      stats2.dom.style.bottom = '0px';
      stats2.dom.style.right = '80px';
      stats2.dom.style.zIndex = '10';
      stats2.dom.style.pointerEvents = 'none';
      containerRef.current?.appendChild(stats2.dom);

      const stats3 = new Stats();
      statsRef3.current = stats3;
      stats3.showPanel(2);
      stats3.dom.style.position = 'absolute';
      stats3.dom.style.bottom = '0px';
      stats3.dom.style.right = '160px';
      stats3.dom.style.zIndex = '10';
      stats3.dom.style.pointerEvents = 'none';
      containerRef.current?.appendChild(stats3.dom);
    }

    return () => {
      statsRef1.current?.dom.remove();
      statsRef2.current?.dom.remove();
      statsRef3.current?.dom.remove();
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      {/* 模式切换按钮 */}
      <button
        className={styles.modeToggle}
        onClick={
          (e) => handleModeToggle(
            e,
            animatingRef,
            setViewMode,
            viewModeRef,
            orbitControlsRef,
            animationStartTimeRef,
            lampListRef.current,
            lampSwitchListRef.current,
            allCeilingLampsVisibleToggle
          )
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
      <div className={styles.roamingHint}>
        {viewMode === 'overview'
          ? '空格切换模式'
          : isPointerLocked ? 'WASD移动 | 鼠标转动视角 | ESC解锁鼠标 | 空格切换模式' : '点击屏幕解锁鼠标 | 空格切换模式'}
      </div>

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
        <source src="public/vista.mp4" />
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
        <source src="public/dance.mp4" />
      </video>
    </div>
  );
};

export default HouseDisplay;
