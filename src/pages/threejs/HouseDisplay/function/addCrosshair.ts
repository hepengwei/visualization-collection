/**
 * 添加鼠标准星
 */
import { MutableRefObject, RefObject } from "react";
import {
  Scene,
  PerspectiveCamera,
  Vector2,
  Vector3,
  Raycaster,
  Object3D,
} from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import styles from "../index.module.scss";

let frameCount = 0;
const RAY_INTERVAL = 6; // 每 N 帧检测一次

export const addCrosshair = (
  scene: Scene,
  container: HTMLDivElement,
  labelRendererRef: MutableRefObject<CSS2DRenderer | null>,
  raycasterRef: MutableRefObject<Raycaster | null>,
  reticleRef: MutableRefObject<CSS2DObject | null>,
) => {
  frameCount = 0;
  if (container) {
    // 创建 labelRenderer
    const labelRenderer = new CSS2DRenderer();
    labelRendererRef.current = labelRenderer;
    const { clientWidth, clientHeight } = container;
    labelRenderer.setSize(clientWidth, clientHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.left = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    labelRenderer.domElement.style.zIndex = "10";
    container.appendChild(labelRenderer.domElement);
  }

  if (scene) {
    // 创建鼠标准星
    const reticleDiv = document.createElement("div");
    reticleDiv.className = styles.crosshair;
    const reticle = new CSS2DObject(reticleDiv);
    reticle.scale.set(0.2, 0.2, 0.2); // 控制大小
    reticleRef.current = reticle;
    scene.add(reticle);
  }

  // 创建射线
  const raycaster = new Raycaster();
  raycasterRef.current = raycaster;
  raycaster.far = 50; // 超过 50 个单位不检测
};

export const resizeCrosshair = (
  container: HTMLDivElement | null,
  labelRenderer: CSS2DRenderer | null,
) => {
  if (container && labelRenderer) {
    labelRenderer.setSize(container.clientWidth, container.clientHeight);
  }
};

export const crosshairRender = (
  scene: Scene,
  camera: PerspectiveCamera,
  labelRenderer: CSS2DRenderer | null,
  raycaster: Raycaster | null,
  reticle: CSS2DObject | null,
  viewModeRef: MutableRefObject<"overview" | "roaming">,
  mousePositionRef: RefObject<Vector2>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  outlinePass: OutlinePass | null,
  mouseRaycasterIntersectedRef: MutableRefObject<Object3D | null>,
) => {
  if (!reticle) return;
  const showCrosshair = viewModeRef.current === "overview"; // 是否显示3D准星
  // 控制3D准星的显示/隐藏, 在漫游模式下隐藏3D准星
  reticle.visible = showCrosshair;
  if (raycaster) {
    // 在漫游模式下，准星固定在屏幕中心(0, 0)；在整体模式下，跟随鼠标位置
    const crosshairPosition =
      viewModeRef.current === "roaming"
        ? new Vector2(0, 0) // 屏幕中心
        : mousePositionRef.current; // 鼠标位置
    raycaster.setFromCamera(crosshairPosition as Vector2, camera);

    // 每帧都更新准星位置（让视觉跟随流畅），默认沿射线到一个固定距离
    if (showCrosshair) {
      const defaultDistance = 10; // 默认距离
      const defaultPoint = new Vector3();
      raycaster.ray.at(defaultDistance, defaultPoint);
      reticle?.position.copy(defaultPoint);
    }

    // 射线检测节流（只节流物体检测，不节流视觉更新），提高性能
    frameCount++;
    if (frameCount % RAY_INTERVAL === 0) {
      const hits = raycaster.intersectObjects(
        mouseRaycasterIntersectObjectsRef.current,
        true,
      );
      if (hits.length > 0) {
        // 检测到物体：准星精确贴在命中点
        if (showCrosshair) {
          reticle?.position.copy(hits[0].point);
        }
        if (outlinePass) {
          let namedObj: Object3D = hits[0].object;
          // 沿父链向上找到有 name 的节点
          while (!namedObj.name && namedObj.parent) {
            namedObj = namedObj.parent;
          }
          // 将墙体、玻璃窗和垭口包边加入鼠标射线检测是为了防止隔着这些物体高亮了可交互的物体
          if (
            namedObj.name &&
            !["墙体", "玻璃窗", "垭口包边"].includes(namedObj.name)
          ) {
            // 处理高亮切换
            if (mouseRaycasterIntersectedRef.current !== namedObj) {
              // 设置新的高亮
              if (
                ["冰箱门左半边", "冰箱门右半边"].includes(namedObj.name) &&
                namedObj.parent
              ) {
                outlinePass.selectedObjects = [namedObj.parent];
                mouseRaycasterIntersectedRef.current = namedObj.parent;
              } else {
                outlinePass.selectedObjects = [namedObj];
                mouseRaycasterIntersectedRef.current = namedObj;
              }
            }
          } else {
            // 没打到物体：准星飞到远处
            if (showCrosshair) {
              const t = camera.far * 0.95; // 接近远裁面
              const farPoint = new Vector3();
              raycaster.ray.at(t, farPoint);
              reticle?.position.copy(farPoint);
            }
            if (outlinePass) {
              // 没有瞄准任何东西，清除高亮
              if (mouseRaycasterIntersectedRef.current) {
                outlinePass.selectedObjects = [];
              }
            }
            mouseRaycasterIntersectedRef.current = null;
          }
        }
      } else {
        // 没打到物体：准星飞到远处
        if (showCrosshair) {
          const t = camera.far * 0.95; // 接近远裁面
          const farPoint = new Vector3();
          raycaster.ray.at(t, farPoint);
          reticle?.position.copy(farPoint);
        }
        if (outlinePass) {
          // 没有瞄准任何东西，清除高亮
          if (mouseRaycasterIntersectedRef.current) {
            outlinePass.selectedObjects = [];
          }
        }
        mouseRaycasterIntersectedRef.current = null;
      }
    }
  }
  labelRenderer?.render(scene, camera);
};
