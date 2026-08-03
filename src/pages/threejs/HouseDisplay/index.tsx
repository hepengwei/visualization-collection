/**
 * 房屋展示 - 3D房屋漫游
 */
import React, { useRef, useLayoutEffect, useCallback, useState } from "react";
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
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import addLighting from "./addLighting";
import addHouseStructure from './addHouseStructure';
import add3dModel from "./add3dModel";
import addCeiling from "./addCeiling";
import { addCrosshair, crosshairRender, createOutlinePass } from './addCrosshair';
import { onClickTVScreen } from './addTVScreen';
import styles from "./index.module.scss";

// 漫游模式配置参数
const ROAMING_CONFIG = {
  cameraHeight: 2.5,      // 相机离地板的高度（米）
  moveSpeed: 26.0,        // WASD移动速度
  gravity: 9.8 * 3,       // 重力加速度
  friction: 0.9,          // 摩擦系数（0-1，越小摩擦越大）
  collisionDistance: 0.5, // 碰撞检测距离（米）
};

const HouseDisplay = () => {
  const { menuWidth, headHeight } = useGlobalContext();
  const mainComposerRef = useRef<EffectComposer | null>(null);
  const bloomComposerRef = useRef<EffectComposer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tvScreenRef = useRef<Mesh | null>(null);
  const mousePositionRef = useRef<Vector2>(new Vector2());
  const raycasterRef = useRef<Raycaster | null>(null);
  const outlinePassRef = useRef<OutlinePass | null>(null);
  const currentIntersectedRef = useRef<Object3D | null>(null); // 当前鼠标射线命中的物体
  const orbitControlsRef = useRef<OrbitControls | null>(null); // 轨道控制器
  const pointerControlsRef = useRef<PointerLockControls | null>(null); // 第一人称控制器
  const velocityRef = useRef<Vector3>(new Vector3());
  const directionRef = useRef<Vector3>(new Vector3());
  const moveStateRef = useRef({ forward: false, backward: false, left: false, right: false });
  const canJumpRef = useRef(false);
  const prevTimeRef = useRef(performance.now());
  const ceilingGroupRef = useRef<Group | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const collisionObjectsRef = useRef<Object3D[]>([]); // 所有可碰撞的物体

  // 动画相关
  const animatingRef = useRef(false);
  const animationStartTimeRef = useRef(0);
  const animationDurationRef = useRef(2000); // 2秒动画时间

  // 初始相机位置
  const initialCameraPosition = useRef(new Vector3(0, 30, 0));
  const initialCameraTarget = useRef(new Vector3(0, 0, 0));

  // 漫游模式相机位置
  const roamingCameraPosition = useRef(new Vector3(2.5, ROAMING_CONFIG.cameraHeight, 5));

  // 模式状态: 'overview' 整体模式, 'roaming' 漫游模式
  const [viewMode, setViewMode] = useState<'overview' | 'roaming'>('overview');
  const viewModeRef = useRef<'overview' | 'roaming'>('overview');
  const [isPointerLocked, setIsPointerLocked] = useState(false); // 第一人称控制器指针是否锁定

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
      camera.position.copy(initialCameraPosition.current);
      camera.lookAt(initialCameraTarget.current);

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

      // ===== 第一人称控制器设置(用于漫游模式) =====
      // 使用容器元素而不是renderer.domElement，避免与OrbitControls冲突
      // PointerLockControls内置按ESC键就会锁定/解锁指针
      const pointerControls = new PointerLockControls(camera, containerRef.current);
      pointerControlsRef.current = pointerControls;

      // 限制俯仰角，防止视角过度向下或向上
      // minPolarAngle: 从上方向下看的最小角度（0是正上方）
      // maxPolarAngle: 从上方向下看的最大角度（Math.PI是正下方）
      // 我们限制在 45度向上 到 135度向下（即不能完全看到天空或地面）
      pointerControls.minPolarAngle = Math.PI / 4; // 45度，不能过度向上看
      pointerControls.maxPolarAngle = (Math.PI * 3) / 4; // 135度，不能过度向下看

      // 监听指针锁定/解锁事件
      pointerControls.addEventListener('lock', () => {
        setIsPointerLocked(true);
      });

      pointerControls.addEventListener('unlock', () => {
        setIsPointerLocked(false);
      });

      // 添加环境光和太阳光
      addLighting(scene);

      // 创建并显示地板、墙体和玻璃窗
      addHouseStructure(scene, false);

      // 加载并显示电视墙、沙发、床等模型
      add3dModel(scene, videoRef.current, tvScreenRef);

      // 添加天花板（初始隐藏在天空中）
      const ceilingGroup = addCeiling(scene);
      ceilingGroupRef.current = ceilingGroup;

      // 添加瞄准准星
      const raycaster = addCrosshair(scene, containerRef.current);
      raycasterRef.current = raycaster;

      // 启用后期处理器
      const bloomComposer = new EffectComposer(renderer);
      bloomComposer.renderToScreen = false;
      const bloomPass = new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight),
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

      // 键盘事件监听 - WASD移动，Space空格
      const onKeyDown = (event: KeyboardEvent) => {
        if (animatingRef.current) return;
        console.log('按键按下:', event.code, '当前模式:', viewModeRef.current);

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
            // 按空格键，切换整体/漫游模式
            handleModeToggle();
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
    }
  };


  /**
   * 渲染循环
   */
  const renderHandle = (scene: Scene, camera: PerspectiveCamera) => {
    // 使用ref而不是state，避免闭包问题
    const currentMode = viewModeRef.current;

    // 处理相机动画
    if (animatingRef.current) {
      console.log('检测到动画进行中，当前模式:', currentMode);
      const elapsed = performance.now() - animationStartTimeRef.current;
      const progress = Math.min(elapsed / animationDurationRef.current, 1);

      // console.log('动画进度:', (progress * 100).toFixed(1) + '%', 'elapsed:', elapsed.toFixed(0) + 'ms');

      // 使用缓动函数使动画更平滑
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      if (currentMode === 'roaming') {
        // 切换到漫游模式的动画
        camera.position.lerpVectors(
          initialCameraPosition.current,
          roamingCameraPosition.current,
          easeProgress
        );

        // 同时插值相机的旋转（从俯视逐渐变为平视，朝向房屋内部）
        // 从俯视角度(pitch=-90度)逐渐变为平视(pitch=0度)
        const startRotationX = -Math.PI / 2; // 俯视向下看
        const endRotationX = 0; // 平视
        const startRotationY = 0;
        const endRotationY = 0; // 朝北（z轴负方向，房屋内部）

        camera.rotation.x = startRotationX + (endRotationX - startRotationX) * easeProgress;
        camera.rotation.y = startRotationY + (endRotationY - startRotationY) * easeProgress;
        camera.rotation.z = 0;

        // 每隔一段时间输出日志
        // if (Math.floor(progress * 10) !== Math.floor((progress - 0.05) * 10)) {
        //   console.log('动画进度:', Math.floor(progress * 100) + '%', '相机位置:', camera.position, '相机旋转:', camera.rotation);
        // }

        // 天花板下落动画
        if (ceilingGroupRef.current) {
          const startY = 50;
          const endY = 0;
          ceilingGroupRef.current.position.y = startY + (endY - startY) * easeProgress;
        }
      } else {
        // 切换到整体模式的动画
        camera.position.lerpVectors(
          roamingCameraPosition.current,
          initialCameraPosition.current,
          easeProgress
        );

        // 旋转回俯视角度
        const startRotationX = 0;
        const endRotationX = -Math.PI / 2;
        const startRotationY = 0;
        const endRotationY = 0;

        camera.rotation.x = startRotationX + (endRotationX - startRotationX) * easeProgress;
        camera.rotation.y = startRotationY + (endRotationY - startRotationY) * easeProgress;
        camera.rotation.z = 0;

        // 天花板上升动画
        if (ceilingGroupRef.current) {
          const startY = 0;
          const endY = 50;
          ceilingGroupRef.current.position.y = startY + (endY - startY) * easeProgress;
        }
      }

      if (progress >= 1) {
        animatingRef.current = false;
        console.log('动画完成，当前模式:', currentMode);

        // 动画结束后的控制器状态确认
        if (currentMode === 'roaming') {
          // 确保轨道控制器完全禁用
          if (orbitControlsRef.current) {
            orbitControlsRef.current.enabled = false;
          }
          // 自动锁定指针
          if (pointerControlsRef.current) {
            setTimeout(() => {
              try {
                pointerControlsRef.current!.lock();
                console.log('自动锁定指针成功');
              } catch (error) {
                console.error('自动锁定指针失败:', error);
              }
            }, 100); // 延迟100ms确保DOM稳定
          }
        } else {
          // 重新启用轨道控制器
          if (orbitControlsRef.current) {
            orbitControlsRef.current.enabled = true;
            orbitControlsRef.current.target.copy(initialCameraTarget.current);
            orbitControlsRef.current.update();
          }
          console.log('轨道控制器已启用');
          // 自动解锁指针
          if (pointerControlsRef.current) {
            setTimeout(() => {
              try {
                pointerControlsRef.current!.unlock();
                console.log('自动解锁指针成功');
              } catch (error) {
                console.error('自动解锁指针失败:', error);
              }
            }, 100); // 延迟100ms确保DOM稳定
          }
        }
      }
    }

    // 整体模式下更新轨道控制器
    if (currentMode === 'overview' && orbitControlsRef.current && !animatingRef.current) {
      orbitControlsRef.current.update();
    }

    // 漫游模式下的第一人称移动逻辑
    if (currentMode === 'roaming' && pointerControlsRef.current && !animatingRef.current) {
      const time = performance.now();
      const delta = (time - prevTimeRef.current) / 1000;

      // 重力模拟
      velocityRef.current.y -= ROAMING_CONFIG.gravity * delta;

      // 移动方向计算
      directionRef.current.z = Number(moveStateRef.current.forward) - Number(moveStateRef.current.backward);
      directionRef.current.x = Number(moveStateRef.current.right) - Number(moveStateRef.current.left);
      directionRef.current.normalize();

      // 移动速度
      if (moveStateRef.current.forward || moveStateRef.current.backward) {
        velocityRef.current.z -= directionRef.current.z * ROAMING_CONFIG.moveSpeed * delta;
      }
      if (moveStateRef.current.left || moveStateRef.current.right) {
        velocityRef.current.x -= directionRef.current.x * ROAMING_CONFIG.moveSpeed * delta;
      }

      // 保存当前位置用于碰撞检测
      const oldPosition = camera.position.clone();

      // 应用移动
      pointerControlsRef.current.moveRight(-velocityRef.current.x * delta);
      pointerControlsRef.current.moveForward(-velocityRef.current.z * delta);

      // 碰撞检测
      const cameraPosition = camera.position;

      // 动态收集碰撞对象（如果还没有收集）
      if (collisionObjectsRef.current.length === 0 && sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof Mesh && object.geometry) {
            // 排除地板(y<=0.1的物体)、天花板、准星
            if (object.position.y > 0.1 &&
              object.name !== '天花板组' &&
              !object.name.includes('准星')) {
              collisionObjectsRef.current.push(object);
            }
          }
        });
      }

      // 使用射线检测进行碰撞
      const raycaster = new Raycaster();

      // 检测四个方向
      const directions = [
        new Vector3(1, 0, 0),   // 右
        new Vector3(-1, 0, 0),  // 左
        new Vector3(0, 0, 1),   // 前
        new Vector3(0, 0, -1),  // 后
      ];

      let hasCollision = false;
      for (const dir of directions) {
        raycaster.set(cameraPosition, dir);
        const intersections = raycaster.intersectObjects(collisionObjectsRef.current, false);

        if (intersections.length > 0 && intersections[0].distance < ROAMING_CONFIG.collisionDistance) {
          hasCollision = true;
          break;
        }
      }

      // 如果发生碰撞,恢复到旧位置
      if (hasCollision) {
        cameraPosition.copy(oldPosition);
      }

      // Y轴限制(地板和天花板)
      if (cameraPosition.y < ROAMING_CONFIG.cameraHeight) {
        velocityRef.current.y = 0;
        cameraPosition.y = ROAMING_CONFIG.cameraHeight;
        canJumpRef.current = true;
      }
      if (cameraPosition.y > 3.5) {
        velocityRef.current.y = 0;
        cameraPosition.y = 3.5;
      }

      // 应用摩擦力
      velocityRef.current.x *= ROAMING_CONFIG.friction;
      velocityRef.current.z *= ROAMING_CONFIG.friction;

      prevTimeRef.current = time;
    }

    // 瞄准准星渲染
    const intersectObjects = tvScreenRef.current ? [tvScreenRef.current] : [];
    // 在漫游模式下，准星固定在屏幕中心(0, 0)；在整体模式下，跟随鼠标位置
    const crosshairPosition = currentMode === 'roaming'
      ? new Vector2(0, 0)  // 屏幕中心
      : mousePositionRef.current; // 鼠标位置

    // 在漫游模式下隐藏3D准星，只显示固定的DOM准星
    const showCrosshair = currentMode === 'overview';
    crosshairRender(scene, camera, raycasterRef.current, crosshairPosition, intersectObjects, outlinePassRef.current, currentIntersectedRef, showCrosshair);

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

  /**
   * 模式切换处理函数
   */
  const handleModeToggle = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.currentTarget?.blur(); // 点击后立即失焦，避免按下空格或回车键时触发点击事件（由于HTML标准的可访问性特性的存在）
    e?.stopPropagation(); // 阻止事件冒泡
    if (animatingRef.current) {
      return; // 动画进行中不允许切换
    }

    const newMode = viewModeRef.current === 'overview' ? 'roaming' : 'overview';
    console.log('==== 开始切换模式 ====');
    console.log('从', viewModeRef.current, '切换到', newMode);
    console.log('轨道控制器当前状态:', orbitControlsRef.current?.enabled);

    viewModeRef.current = newMode;
    setViewMode(newMode);

    // 开始动画
    animatingRef.current = true;
    animationStartTimeRef.current = performance.now();
    console.log('动画已启动，animatingRef.current =', animatingRef.current);

    if (newMode === 'roaming') {
      // 切换到漫游模式
      console.log('进入漫游模式，立即禁用轨道控制器');
      // 立即禁用轨道控制器，避免与指针锁定冲突
      if (orbitControlsRef.current) {
        orbitControlsRef.current.enabled = false;
      }
    } else {
      // 切换到整体模式
      console.log('返回整体模式，退出指针锁定并重置状态');
      // 重置移动状态
      moveStateRef.current = { forward: false, backward: false, left: false, right: false };
      velocityRef.current.set(0, 0, 0);
    }
  }, []);

  const onMouseMove = useCallback((e: any) => {
    // 只在整体模式下更新鼠标位置
    if (viewModeRef.current === 'overview' && containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      mousePositionRef.current.x = ((e.clientX - menuWidth + 12) / clientWidth) * 2 - 1;
      mousePositionRef.current.y = -((e.clientY - headHeight + 12) / clientHeight) * 2 + 1;
    }
  }, [menuWidth, headHeight]);

  const onMouseClick = useCallback(() => {
    // 优先处理电视屏幕点击（任何模式下都可以点击电视）
    if (currentIntersectedRef.current && currentIntersectedRef.current.name === '电视屏幕') {
      onClickTVScreen(videoRef.current);
      return; // 点击了电视就不处理其他逻辑
    }

    // 处理漫游模式的指针锁定（只有在没有点击电视的情况下）
    if (viewModeRef.current === 'roaming' && !animatingRef.current) {
      // 检查轨道控制器是否已禁用
      if (orbitControlsRef.current && orbitControlsRef.current.enabled) {
        console.log('轨道控制器还未禁用，等待...');
        return;
      }

      if (pointerControlsRef.current && !pointerControlsRef.current.isLocked) {
        console.log('尝试重新锁定指针...');
        requestAnimationFrame(() => {
          try {
            pointerControlsRef.current!.lock();
            console.log('指针重新锁定成功');
          } catch (error) {
            console.error('锁定指针失败:', error);
          }
        });
      }
    }
  }, []);

  useLayoutEffect(() => {
    containerRef.current?.addEventListener("mousemove", onMouseMove);
    containerRef.current?.addEventListener("click", onMouseClick);

    return () => {
      containerRef.current?.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeEventListener("click", onMouseClick);
    }
  }, [menuWidth, headHeight, onMouseClick, onMouseMove]);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* 模式切换按钮 */}
      <button className={styles.modeToggle} onClick={handleModeToggle} tabIndex={-1}>
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
        ref={videoRef}
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
