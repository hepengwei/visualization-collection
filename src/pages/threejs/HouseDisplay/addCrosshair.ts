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
import styles from "./index.module.scss";

const labelRenderer = new CSS2DRenderer();
const reticleDiv = document.createElement("div");
reticleDiv.className = styles.crosshair;
const reticle = new CSS2DObject(reticleDiv);
reticle.scale.set(0.2, 0.2, 0.2); // 控制大小

export const addCrosshair = (
  scene: Scene,
  container: HTMLDivElement,
  RaycasterRef: MutableRefObject<Raycaster | null>,
) => {
  const { clientWidth, clientHeight } = container;
  labelRenderer.setSize(clientWidth, clientHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0";
  labelRenderer.domElement.style.left = "0";
  labelRenderer.domElement.style.pointerEvents = "none";
  labelRenderer.domElement.style.zIndex = "10";
  container.appendChild(labelRenderer.domElement);
  scene.add(reticle);

  const raycaster = new Raycaster();
  RaycasterRef.current = raycaster;
  raycaster.far = 50; // 超过 50 个单位不检测
};

export const crosshairRender = (
  scene: Scene,
  camera: PerspectiveCamera,
  raycaster: Raycaster | null,
  viewModeRef: MutableRefObject<"overview" | "roaming">,
  mousePositionRef: RefObject<Vector2>,
  intersectObjectsRef: MutableRefObject<Object3D[]>,
  outlinePass: OutlinePass | null,
  currentIntersectedRef: MutableRefObject<Object3D | null>,
) => {
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
    const hits = raycaster.intersectObjects(intersectObjectsRef.current, true);
    if (hits.length > 0) {
      // 准星贴在命中点
      if (showCrosshair) {
        reticle.position.copy(hits[0].point);
      }

      if (outlinePass) {
        const firstHit = hits[0].object;
        // 处理高亮切换
        if (currentIntersectedRef.current !== firstHit) {
          // 设置新的高亮
          outlinePass.selectedObjects = [firstHit];
          currentIntersectedRef.current = firstHit;
        }
      }
    } else {
      // 没打到物体：沿鼠标射线飞到远处
      if (showCrosshair) {
        const t = camera.far * 0.95; // 接近远裁面
        const farPoint = new Vector3();
        raycaster.ray.at(t, farPoint);
        reticle.position.copy(farPoint);
      }
      if (outlinePass) {
        // 没有瞄准任何东西，清除高亮
        if (currentIntersectedRef.current) {
          outlinePass.selectedObjects = [];
        }
      }
      currentIntersectedRef.current = null;
    }
  }
  labelRenderer.render(scene, camera);
};

export const createOutlinePass = (
  scene: Scene,
  camera: PerspectiveCamera,
  container: HTMLDivElement,
) => {
  const { clientWidth, clientHeight } = container;
  const outlinePass = new OutlinePass(
    new Vector2(clientWidth, clientHeight),
    scene,
    camera,
  );
  outlinePass.visibleEdgeColor.set("#1758ee"); // 高亮颜色
  outlinePass.hiddenEdgeColor.set("#1758ee");
  outlinePass.edgeThickness = 1.6; // 边缘厚度
  outlinePass.edgeStrength = 10; // 边缘强度
  outlinePass.edgeGlow = 1; // 发光
  outlinePass.downSampleRatio = 1; // 抗锯齿
  return outlinePass;
};
