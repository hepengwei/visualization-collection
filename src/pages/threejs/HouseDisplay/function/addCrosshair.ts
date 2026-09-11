/**
 * 添加鼠标准星
 */
import { MutableRefObject, RefObject } from "react";
import { PerspectiveCamera, Vector2, Raycaster, Object3D } from "three";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import styles from "../index.module.scss";

let frameCount = 0;
const RAY_INTERVAL = 5; // 每 N 帧检测一次
const CROSSHAIR_RADIUS = 6; // 鼠标准星半径

export const addCrosshair = (
  container: HTMLDivElement,
  raycasterRef: MutableRefObject<Raycaster | null>,
) => {
  frameCount = 0;
  if (container) {
    // 创建2D准星
    const crosshair2D = document.createElement("div");
    crosshair2D.className = styles.crosshair;
    crosshair2D.style.width = `${CROSSHAIR_RADIUS * 2}px`;
    crosshair2D.style.height = `${CROSSHAIR_RADIUS * 2}px`;
    crosshair2D.id = "crosshair-2d";
    container.appendChild(crosshair2D);
  }

  // 创建射线
  const raycaster = new Raycaster();
  raycasterRef.current = raycaster;
  raycaster.far = 50; // 超过 50 个单位不检测
};

export const crosshairRender = (
  camera: PerspectiveCamera,
  container: HTMLDivElement | null,
  raycaster: Raycaster | null,
  viewModeRef: MutableRefObject<"overview" | "roaming">,
  mousePositionRef: RefObject<Vector2>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  outlinePass: OutlinePass | null,
  mouseRaycasterIntersectedRef: MutableRefObject<Object3D | null>,
) => {
  if (!container || !raycaster || !mousePositionRef.current) return;
  const { clientWidth, clientHeight } = container;
  const crosshair2D = document.getElementById("crosshair-2d");
  const isOverviewMode = viewModeRef.current === "overview";

  // 整体模式：使用 2D 准星（直接跟随鼠标）；漫游模式：使用 3D 准星（屏幕中心）
  if (crosshair2D) {
    if (isOverviewMode) {
      // 使用 transform 居中，CSS 已设置 transform: translate(-50%, -50%)
      crosshair2D.style.left = `${mousePositionRef.current.x || 0}px`;
      crosshair2D.style.top = `${mousePositionRef.current.y || 0}px`;
    } else {
      crosshair2D.style.left = `${clientWidth / 2}px`;
      crosshair2D.style.top = `${clientHeight / 2}px`;
    }
  }

  // 射线检测节流（用于高亮物体检测，与准星位置无关）
  frameCount++;
  if (frameCount % RAY_INTERVAL === 0) {
    const crosshairPosition =
      viewModeRef.current === "roaming"
        ? new Vector2(0, 0) // 屏幕中心
        : new Vector2(
            ((mousePositionRef.current?.x || 0) / clientWidth) * 2 - 1,
            -((mousePositionRef.current?.y || 0) / clientHeight) * 2 + 1,
          ); // 鼠标位置（归一化坐标）
    raycaster.setFromCamera(crosshairPosition, camera);

    const hits = raycaster.intersectObjects(
      mouseRaycasterIntersectObjectsRef.current,
      true,
    );
    if (hits.length > 0) {
      // 检测到物体
      if (outlinePass) {
        let namedObj: Object3D = hits[0].object;
        // 沿父链向上找到有 name 的节点
        while (!namedObj.name && namedObj.parent) {
          namedObj = namedObj.parent;
        }
        // 将墙体、玻璃窗等加入鼠标射线检测是为了防止隔着这些物体高亮了可交互的物体
        if (
          namedObj.name &&
          !["墙体", "玻璃窗", "垭口包边", "餐边柜", "冰箱"].includes(
            namedObj.name,
          )
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
          // 没有瞄准任何可交互物体，清除高亮
          if (outlinePass && mouseRaycasterIntersectedRef.current) {
            outlinePass.selectedObjects = [];
          }
          mouseRaycasterIntersectedRef.current = null;
        }
      }
    } else {
      // 没打到物体，清除高亮
      if (outlinePass && mouseRaycasterIntersectedRef.current) {
        outlinePass.selectedObjects = [];
      }
      mouseRaycasterIntersectedRef.current = null;
    }
  }
};
