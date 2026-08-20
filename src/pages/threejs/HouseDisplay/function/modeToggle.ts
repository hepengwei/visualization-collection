/**
 * 整体/漫游模式切换相关
 */
import {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  MutableRefObject,
  RefObject,
} from "react";
import {
  PerspectiveCamera,
  Vector3,
  Vector2,
  Raycaster,
  Object3D,
  Group,
  Mesh,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

export type ViewMode = "overview" | "roaming";

// 漫游模式配置参数
const ROAMING_CONFIG = {
  cameraHeight: 2.6, // 相机离地板的高度（米）
  moveSpeed: 40, // WASD移动速度
  gravity: 9.8 * 3, // 重力加速度
  friction: 0.8, // 摩擦系数（0-1，越小摩擦越大，惯性越小）
  collisionDistance: 0.5, // 碰撞检测距离（米）
};

// 开始漫游模式时相机的位置
const startRoamingCameraPosition = new Vector3(
  2.5,
  ROAMING_CONFIG.cameraHeight,
  5,
);

// 第一人称控制器移动速度
const velocity = new Vector3();
// 第一人称控制器移动方向
let moveState = {
  forward: false,
  backward: false,
  left: false,
  right: false,
};
// 第一人称控制器在各方向上的移动值
const direction = new Vector3();

export const useModeToggle = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  menuWidth: number,
  headHeight: number,
  mouseRaycasterIntersectedRef: MutableRefObject<Object3D | null>,
  orbitControlsRef: MutableRefObject<OrbitControls | null>,
  onClickDoor?: (door: Mesh) => void,
  onClickGroundGlassDoor?: (groundGlassDoor: Group) => void,
  tvVideoRef?: MutableRefObject<HTMLVideoElement | null>,
  onClickTVScreen?: (video?: HTMLVideoElement | null) => void,
  phoneVideoRef?: MutableRefObject<HTMLVideoElement | null>,
  onClickPhoneScreen?: (video?: HTMLVideoElement | null) => void,
  lampListRef?: MutableRefObject<Group[]>,
  onClickCeilingLampSwitch?: (
    ceilingLampSwitch: Group,
    lampList?: Group[],
  ) => void,
) => {
  // 模式状态: 'overview' 整体模式, 'roaming' 漫游模式
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  const viewModeRef = useRef<ViewMode>("overview");
  const pointerControlsRef = useRef<PointerLockControls | null>(null); // 第一人称控制器
  const [isPointerLocked, setIsPointerLocked] = useState(false); // 第一人称控制器指针是否锁定
  const mousePositionRef = useRef<Vector2>(new Vector2()); // 鼠标位置

  // 动画相关
  const animatingRef = useRef(false);
  const animationStartTimeRef = useRef(0);
  const animationDurationRef = useRef(2000); // 2秒动画时间

  const prevTimeRef = useRef(performance.now());

  const onMouseMove = useCallback(
    (e: any) => {
      // 只在整体模式下更新鼠标位置
      if (viewModeRef.current === "overview" && containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        mousePositionRef.current.x =
          ((e.clientX - menuWidth + 12) / clientWidth) * 2 - 1;
        mousePositionRef.current.y =
          -((e.clientY - headHeight + 12) / clientHeight) * 2 + 1;
      }
    },
    [menuWidth, headHeight],
  );

  const onMouseClick = useCallback(() => {
    // 优先处理可交互物体的点击
    if (mouseRaycasterIntersectedRef.current) {
      if (mouseRaycasterIntersectedRef.current.name === "门板") {
        onClickDoor?.(mouseRaycasterIntersectedRef.current as Mesh);
        return; // 点击了房门就不处理其他逻辑
      }
      if (mouseRaycasterIntersectedRef.current.name === "磨砂玻璃门") {
        onClickGroundGlassDoor?.(mouseRaycasterIntersectedRef.current as Group);
        return;
      }
      if (mouseRaycasterIntersectedRef.current.name.endsWith("吊灯开关")) {
        if (viewModeRef.current === "roaming") {
          onClickCeilingLampSwitch?.(
            mouseRaycasterIntersectedRef.current as Group,
            lampListRef?.current,
          );
          return;
        }
      }
      if (mouseRaycasterIntersectedRef.current.name === "电视屏幕") {
        onClickTVScreen?.(tvVideoRef?.current);
        return;
      }
      if (mouseRaycasterIntersectedRef.current.name === "手机屏幕") {
        onClickPhoneScreen?.(phoneVideoRef?.current);
        return;
      }
    }

    // 处理漫游模式的第一人称控制器锁定（只有在没有点击电视的情况下）
    if (viewModeRef.current === "roaming" && !animatingRef.current) {
      // 检查轨道控制器是否已禁用
      if (orbitControlsRef.current && orbitControlsRef.current.enabled) {
        return;
      }
      if (pointerControlsRef.current && !pointerControlsRef.current.isLocked) {
        requestAnimationFrame(() => {
          try {
            pointerControlsRef.current!.lock();
            console.log("第一人称控制器重新锁定成功");
          } catch (error) {
            console.error("锁定第一人称控制器失败:", error);
          }
        });
      }
    }
  }, []);

  useLayoutEffect(() => {
    containerRef.current?.addEventListener("mousemove", onMouseMove);
    containerRef.current?.addEventListener("click", onMouseClick);

    return () => {
      containerRef.current?.removeEventListener("mousemove", onMouseMove);
      containerRef.current?.removeEventListener("click", onMouseClick);
    };
  }, [menuWidth, headHeight, onMouseClick, onMouseMove]);

  return {
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
  };
};

// 初始化整体/漫游模式切换相关
export const initModeToggle = (
  camera: PerspectiveCamera,
  container: HTMLDivElement,
  pointerControlsRef: MutableRefObject<PointerLockControls | null>,
  setIsPointerLocked: (isPointerLocked: boolean) => void,
  animatingRef: MutableRefObject<boolean>,
  setViewMode: (viewMode: ViewMode) => void,
  viewModeRef: MutableRefObject<ViewMode>,
  orbitControlsRef: RefObject<OrbitControls | null>,
  animationStartTimeRef: MutableRefObject<number>,
  lampList: Group[],
  lampSwitchList: Group[],
  allCeilingLampsVisibleToggle?: (
    lampList: Group[],
    lampSwitchList: Group[],
    visible: boolean,
  ) => void,
) => {
  // ===== 第一人称控制器(用于漫游模式) =====
  // 使用容器元素而不是renderer.domElement，避免与OrbitControls冲突
  // PointerLockControls内置按ESC键就会锁定/解锁指针
  const pointerControls = new PointerLockControls(camera, container);
  pointerControlsRef.current = pointerControls;

  // 限制旋转灵敏度, 0.8倍速
  pointerControls.pointerSpeed = 0.8;

  // 限制俯仰角，防止视角过度向下或向上
  // minPolarAngle: 从上方向下看的最小角度（0是正上方）
  // maxPolarAngle: 从上方向下看的最大角度（Math.PI是正下方）
  // 我们限制在 30度向上 到 150度向下（即不能完全看到天空或地面）
  pointerControls.minPolarAngle = Math.PI / 6; // 30度，不能过度向上看
  pointerControls.maxPolarAngle = (Math.PI * 5) / 6; // 150度，不能过度向下看

  // 监听第一人称控制器锁定/解锁事件
  pointerControls.addEventListener("lock", () => {
    setIsPointerLocked(true);
  });
  pointerControls.addEventListener("unlock", () => {
    setIsPointerLocked(false);
  });

  // 键盘事件监听 - WASD移动，Space空格
  const onKeyDown = (event: KeyboardEvent) => {
    if (animatingRef.current) return;

    switch (event.code) {
      case "KeyW":
      case "ArrowUp":
        moveState.forward = true;
        break;
      case "KeyS":
      case "ArrowDown":
        moveState.backward = true;
        break;
      case "KeyA":
      case "ArrowLeft":
        moveState.left = true;
        break;
      case "KeyD":
      case "ArrowRight":
        moveState.right = true;
        break;
      case "Space":
        // 按空格键，切换整体/漫游模式
        handleModeToggle(
          null,
          animatingRef,
          setViewMode,
          viewModeRef,
          orbitControlsRef,
          animationStartTimeRef,
          lampList,
          lampSwitchList,
          allCeilingLampsVisibleToggle,
        );
        break;
    }
  };
  const onKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyW":
      case "ArrowUp":
        moveState.forward = false;
        break;
      case "KeyS":
      case "ArrowDown":
        moveState.backward = false;
        break;
      case "KeyA":
      case "ArrowLeft":
        moveState.left = false;
        break;
      case "KeyD":
      case "ArrowRight":
        moveState.right = false;
        break;
    }
  };
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
};

// 整体/漫游模式切换时的动画渲染
export const modeToggleAnimationRender = (
  camera: PerspectiveCamera,
  animatingRef: MutableRefObject<boolean>,
  viewModeRef: MutableRefObject<ViewMode>,
  orbitControlsRef: RefObject<OrbitControls | null>,
  pointerControlsRef: RefObject<PointerLockControls | null>,
  initialCameraPosition: Vector3,
  initialCameraTarget: Vector3,
  ceilingGroupRef: MutableRefObject<Group | null>,
  animationStartTimeRef: MutableRefObject<number>,
  animationDurationRef: MutableRefObject<number>,
  lampList: Group[],
  lampSwitchList: Group[],
  allCeilingLampsVisibleToggle: (
    lampList: Group[],
    lampSwitchList: Group[],
    visible: boolean,
  ) => void,
) => {
  // 处理相机动画
  if (animatingRef.current) {
    const currentMode = viewModeRef.current;
    const elapsed = performance.now() - animationStartTimeRef.current;
    const progress = Math.min(elapsed / animationDurationRef.current, 1);

    // 使用缓动函数使动画更平滑
    const easeProgress =
      progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

    if (currentMode === "roaming") {
      // 切换到漫游模式的动画
      camera.position.lerpVectors(
        initialCameraPosition,
        startRoamingCameraPosition,
        easeProgress,
      );

      // 同时插值相机的旋转（从俯视逐渐变为平视，朝向房屋内部）
      // 从俯视角度(pitch=-90度)逐渐变为平视(pitch=0度)
      const startRotationX = -Math.PI / 2; // 俯视向下看
      const endRotationX = 0; // 平视
      const startRotationY = 0;
      const endRotationY = 0; // 朝北（z轴负方向，房屋内部）

      camera.rotation.x =
        startRotationX + (endRotationX - startRotationX) * easeProgress;
      camera.rotation.y =
        startRotationY + (endRotationY - startRotationY) * easeProgress;
      camera.rotation.z = 0;

      // 每隔一段时间输出日志
      // if (Math.floor(progress * 10) !== Math.floor((progress - 0.05) * 10)) {
      //   console.log('动画进度:', Math.floor(progress * 100) + '%', '相机位置:', camera.position, '相机旋转:', camera.rotation);
      // }

      // 天花板下落动画
      if (ceilingGroupRef.current) {
        const startY = 50;
        const endY = 0;
        ceilingGroupRef.current.position.y =
          startY + (endY - startY) * easeProgress;
      }
    } else {
      // 切换到整体模式的动画
      camera.position.lerpVectors(
        startRoamingCameraPosition,
        initialCameraPosition,
        easeProgress,
      );

      // 旋转回俯视角度
      const startRotationX = 0;
      const endRotationX = -Math.PI / 2;
      const startRotationY = 0;
      const endRotationY = 0;

      camera.rotation.x =
        startRotationX + (endRotationX - startRotationX) * easeProgress;
      camera.rotation.y =
        startRotationY + (endRotationY - startRotationY) * easeProgress;
      camera.rotation.z = 0;

      // 天花板上升动画
      if (ceilingGroupRef.current) {
        const startY = 0;
        const endY = 50;
        ceilingGroupRef.current.position.y =
          startY + (endY - startY) * easeProgress;
      }
    }

    if (progress >= 1) {
      animatingRef.current = false;
      console.log("动画完成，当前模式:", currentMode);

      // 动画结束后的控制器状态确认
      if (currentMode === "roaming") {
        // 将所有吊灯显示出来
        allCeilingLampsVisibleToggle?.(lampList, lampSwitchList, true);
        // 确保轨道控制器完全禁用
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = false;
        }
        // 自动锁定指针
        if (pointerControlsRef.current) {
          setTimeout(() => {
            try {
              pointerControlsRef.current!.lock();
              console.log("自动锁定指针成功");
            } catch (error) {
              console.error("自动锁定指针失败:", error);
            }
          }, 100); // 延迟100ms确保DOM稳定
        }
      } else {
        // 重新启用轨道控制器
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = true;
          orbitControlsRef.current.target.copy(initialCameraTarget);
          orbitControlsRef.current.update();
        }
        console.log("轨道控制器已启用");
        // 自动解锁指针
        if (pointerControlsRef.current) {
          setTimeout(() => {
            try {
              pointerControlsRef.current!.unlock();
              console.log("自动解锁指针成功");
            } catch (error) {
              console.error("自动解锁指针失败:", error);
            }
          }, 100); // 延迟100ms确保DOM稳定
        }
      }
    }
  }
};

// 漫游模式时第一人称控制器和摄像机移动的动画渲染
export const pointerControlsMoveRender = (
  camera: PerspectiveCamera,
  animatingRef: MutableRefObject<boolean>,
  viewModeRef: MutableRefObject<ViewMode>,
  pointerControlsRef: RefObject<PointerLockControls | null>,
  pointerControlsIntersetObjects: Object3D[],
  prevTimeRef: MutableRefObject<number>,
) => {
  if (
    viewModeRef.current === "roaming" &&
    pointerControlsRef.current &&
    !animatingRef.current
  ) {
    const time = performance.now();
    const delta = (time - prevTimeRef.current) / 1000;

    // 重力模拟
    velocity.y -= ROAMING_CONFIG.gravity * delta;

    // 移动方向计算
    direction.z = Number(moveState.forward) - Number(moveState.backward);
    direction.x = Number(moveState.right) - Number(moveState.left);
    direction.normalize();

    // 移动速度
    if (moveState.forward || moveState.backward) {
      velocity.z -= direction.z * ROAMING_CONFIG.moveSpeed * delta;
    }
    if (moveState.left || moveState.right) {
      velocity.x -= direction.x * ROAMING_CONFIG.moveSpeed * delta;
    }

    // 保存当前位置用于碰撞检测
    const oldPosition = camera.position.clone();

    // 应用移动
    pointerControlsRef.current.moveRight(-velocity.x * delta);
    pointerControlsRef.current.moveForward(-velocity.z * delta);

    // 碰撞检测：基于实际移动方向动态检测
    const cameraPosition = camera.position;
    const moveVector = new Vector3().subVectors(cameraPosition, oldPosition);

    let hasCollision = false;

    // 如果有实际移动，沿移动方向检测碰撞
    if (moveVector.lengthSq() > 0.0001) {
      const raycaster = new Raycaster();
      const moveDirection = moveVector.clone().normalize();

      // 从旧位置沿移动方向发射射线
      raycaster.set(oldPosition, moveDirection);
      const intersections = raycaster.intersectObjects(
        pointerControlsIntersetObjects,
        true,
      );

      // 检查是否会在移动过程中碰撞
      if (
        intersections.length > 0 &&
        intersections[0].distance <
          moveVector.length() + ROAMING_CONFIG.collisionDistance
      ) {
        hasCollision = true;
      }
    }

    // 如果发生碰撞,恢复到旧位置
    if (hasCollision) {
      cameraPosition.copy(oldPosition);
    }

    // Y轴限制(地板和天花板)
    if (cameraPosition.y < ROAMING_CONFIG.cameraHeight) {
      velocity.y = 0;
      cameraPosition.y = ROAMING_CONFIG.cameraHeight;
    }
    if (cameraPosition.y > 3.5) {
      velocity.y = 0;
      cameraPosition.y = 3.5;
    }

    // 应用摩擦力
    velocity.x *= ROAMING_CONFIG.friction;
    velocity.z *= ROAMING_CONFIG.friction;

    prevTimeRef.current = time;
  }
};

// 整体/漫游模式切换处理函数
export const handleModeToggle = (
  e: React.MouseEvent<HTMLButtonElement> | null,
  animatingRef: MutableRefObject<boolean>,
  setViewMode: (viewMode: ViewMode) => void,
  viewModeRef: MutableRefObject<ViewMode>,
  orbitControlsRef: RefObject<OrbitControls | null>,
  animationStartTimeRef: MutableRefObject<number>,
  lampList: Group[],
  lampSwitchList: Group[],
  allCeilingLampsVisibleToggle?: (
    lampList: Group[],
    lampSwitchList: Group[],
    visible: boolean,
  ) => void,
) => {
  e?.currentTarget?.blur(); // 点击后立即失焦，避免按下空格或回车键时触发点击事件（由于HTML标准的可访问性特性的存在）
  e?.stopPropagation(); // 阻止事件冒泡
  if (animatingRef.current) {
    return; // 动画进行中不允许切换
  }
  const newMode = viewModeRef.current === "overview" ? "roaming" : "overview";
  console.log("从", viewModeRef.current, "切换到", newMode);
  console.log("轨道控制器当前状态:", orbitControlsRef.current?.enabled);

  viewModeRef.current = newMode;
  setViewMode(newMode);

  // 开始动画
  animatingRef.current = true;
  animationStartTimeRef.current = performance.now();
  console.log("动画已启动，animatingRef.current =", animatingRef.current);

  if (newMode === "roaming") {
    // 切换到漫游模式
    console.log("进入漫游模式，立即禁用轨道控制器");
    // 立即禁用轨道控制器，避免与指针锁定冲突
    if (orbitControlsRef.current) {
      orbitControlsRef.current.enabled = false;
    }
  } else {
    // 切换到整体模式
    console.log("返回整体模式，退出指针锁定并重置状态");
    // 将所有吊灯隐藏
    allCeilingLampsVisibleToggle?.(lampList, lampSwitchList, false);
    // 重置移动状态
    moveState = {
      forward: false,
      backward: false,
      left: false,
      right: false,
    };
    velocity.set(0, 0, 0);
  }
};
