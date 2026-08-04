/**
 * 添加十字准星
 */
import { MutableRefObject } from "react";
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

export const addCrosshair = (scene: Scene, container: HTMLDivElement) => {
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
  raycaster.far = 50; // 超过 50 个单位不检测
  return raycaster;
};

export const crosshairRender = (
  scene: Scene,
  camera: PerspectiveCamera,
  raycaster: Raycaster | null,
  mouse: Vector2,
  intersectObjectsRef: MutableRefObject<Object3D[]>,
  outlinePass: OutlinePass | null,
  currentIntersectedRef: MutableRefObject<Object3D | null>,
  showCrosshair: boolean = true, // 新增参数：是否显示3D准星
) => {
  // 控制3D准星的显示/隐藏
  reticle.visible = showCrosshair;

  if (raycaster) {
    raycaster.setFromCamera(mouse, camera);
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
