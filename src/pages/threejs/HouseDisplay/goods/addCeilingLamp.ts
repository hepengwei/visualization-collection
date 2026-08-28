/**
 * 添加各房间的所有吊灯
 */
import { MutableRefObject } from "react";
import {
  Scene,
  PerspectiveCamera,
  RingGeometry,
  TorusGeometry,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Mesh,
  PointLight,
  DoubleSide,
  CanvasTexture,
  SRGBColorSpace,
  Group,
  Color,
  Vector3,
  Object3D,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { WALL_HEIGHT } from "./addHouseStructure";
import type { ViewMode } from "../function/modeToggle";
import {
  addCeilingLampSwitch,
  ceilingLampSwitchToggle,
} from "./addCeilingLampSwitch";

const LAMP_RADIUS = 0.9; // 灯的半径
const LAMP_THICKNESS = 0.12; // 灯的厚度
const DYNAMIC_OPTIMIZATION_LAMP_COUNT = 2; // 动态优化吊灯时亮灯的个数
const ceilingLampY = WALL_HEIGHT - LAMP_THICKNESS / 2 - 0.05;
const lampConfigList = [
  {
    name: "客厅吊灯",
    position: new Vector3(-8.5, ceilingLampY, -1),
    noNeedDynamicOptimization: true,
  },
  {
    name: "餐厅吊灯",
    position: new Vector3(11, ceilingLampY, -1.4),
    noNeedDynamicOptimization: true,
  },
  {
    name: "主卧吊灯",
    position: new Vector3(-9, ceilingLampY, -11),
  },
  {
    name: "儿童房吊灯",
    position: new Vector3(11, ceilingLampY, -11),
  },
  {
    name: "次卧吊灯",
    position: new Vector3(-9, ceilingLampY, 8),
  },
  {
    name: "厨房吊灯",
    position: new Vector3(11, ceilingLampY, 5.4),
  },
  {
    name: "外厕所吊灯",
    position: new Vector3(3.6, WALL_HEIGHT - LAMP_THICKNESS / 2 - 0.05, -12.5),
    scale: new Vector3(0.6, 0.6, 0.6),
  },
  {
    name: "主卧厕所吊灯",
    position: new Vector3(-0.4, WALL_HEIGHT - LAMP_THICKNESS / 2 - 0.05, -12.5),
    scale: new Vector3(0.6, 0.6, 0.6),
  },
];
let dynamicOptimizationlampList: Group[] = []; // 动态优化吊灯的列表（动态显示隐藏光源，提高性能）

export const addCeilingLamp = (
  scene: Scene,
  assetManager: AssetManager,
  lampListRef: MutableRefObject<Group[]>,
  lampSwitchListRef: MutableRefObject<Group[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  dynamicOptimizationlampList = [];

  // 吊灯底部圆环平面
  const ceilingLampRingGeometry = new RingGeometry(
    LAMP_RADIUS * 0.96,
    LAMP_RADIUS * 1.02,
    64,
  );
  assetManager.geometries.set(
    "ceilingLampRingGeometry",
    ceilingLampRingGeometry,
  );
  // 吊灯上下的金属圆环(甜甜圈形状)
  const ceilingLampTorusGeometry = new TorusGeometry(
    LAMP_RADIUS * 0.99,
    0.008,
    16,
    64,
  );
  assetManager.geometries.set(
    "ceilingLampTorusGeometry",
    ceilingLampTorusGeometry,
  );
  // 吊灯圆柱体材质
  const ceilingLampCylinderMaterial = new MeshPhysicalMaterial({
    color: 0xe8e8ec,
    metalness: 0.95,
    roughness: 0.15,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
  });
  assetManager.materials.set(
    "ceilingLampCylinderMaterial",
    ceilingLampCylinderMaterial,
  );
  // 吊灯底部发光贴图
  const ceilingLampBottomPanelTexture = createUniformLightTexture();
  assetManager.textures.set(
    "ceilingLampBottomPanelTexture",
    ceilingLampBottomPanelTexture,
  );
  // 吊灯底部发光时的面板材质
  const ceilingLampBottomLightPanelMaterial = new MeshBasicMaterial({
    map: ceilingLampBottomPanelTexture,
    color: 0xffffff,
    toneMapped: false, // 关键：不受色调映射压暗，保持纯亮白
    side: DoubleSide,
  });
  assetManager.materials.set(
    "ceilingLampBottomLightPanelMaterial",
    ceilingLampBottomLightPanelMaterial,
  );
  // 吊灯底部不发光时面板材质
  const ceilingLampBottomDarkPanelMaterial = new MeshBasicMaterial({
    color: 0xdddddd,
    side: DoubleSide,
  });
  assetManager.materials.set(
    "ceilingLampBottomDarkPanelMaterial",
    ceilingLampBottomDarkPanelMaterial,
  );
  // 吊灯底部环形面板材质
  const ceilingLampBottomRingMaterial = new MeshPhysicalMaterial({
    color: 0xc8c8cc,
    metalness: 0.92,
    roughness: 0.18,
  });
  assetManager.materials.set(
    "ceilingLampBottomRingMaterial",
    ceilingLampBottomRingMaterial,
  );
  // 吊灯上下圆环金属材质
  const ceilingLampTorusMaterial = new MeshPhysicalMaterial({
    color: 0xf5f5f5,
    metalness: 1,
    roughness: 0.05,
  });
  assetManager.materials.set(
    "ceilingLampTorusMaterial",
    ceilingLampTorusMaterial,
  );

  // 添加所有吊灯
  lampConfigList.forEach((item: Record<string, any>) => {
    const { name, position, noNeedDynamicOptimization, scale } = item;
    const lamp = createLamp(assetManager);
    lamp.name = name;
    lamp.position.copy(position);
    if (scale) {
      lamp.scale.copy(scale as Vector3);
    }
    lampListRef.current.push(lamp);
    if (!noNeedDynamicOptimization) {
      dynamicOptimizationlampList.push(lamp);
    }
    scene.add(lamp);
  });

  // 添加所有的吊灯开关
  addCeilingLampSwitch(
    scene,
    assetManager,
    lampSwitchListRef,
    mouseRaycasterIntersectObjectsRef,
    lampListRef.current,
  );
};

// 创建吊灯
const createLamp = (assetManager: AssetManager, intensity?: number) => {
  const lampGroup = new Group();
  // 默认隐藏
  lampGroup.visible = false;
  const circleGeometry = assetManager.geometries.get("circleGeometry");
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  const ceilingLampRingGeometry = assetManager.geometries.get(
    "ceilingLampRingGeometry",
  );
  const ceilingLampTorusGeometry = assetManager.geometries.get(
    "ceilingLampTorusGeometry",
  );
  const ceilingLampCylinderMaterial = assetManager.materials.get(
    "ceilingLampCylinderMaterial",
  );
  const ceilingLampBottomLightPanelMaterial = assetManager.materials.get(
    "ceilingLampBottomLightPanelMaterial",
  );
  const ceilingLampBottomDarkPanelMaterial = assetManager.materials.get(
    "ceilingLampBottomDarkPanelMaterial",
  );
  const ceilingLampBottomRingMaterial = assetManager.materials.get(
    "ceilingLampBottomRingMaterial",
  );
  const ceilingLampTorusMaterial = assetManager.materials.get(
    "ceilingLampTorusMaterial",
  );

  // 创建并添加吊灯的主体（金属圆柱体）
  const shell = new Mesh(cylinderGeometry, ceilingLampCylinderMaterial);
  shell.scale.set(LAMP_RADIUS, LAMP_THICKNESS, LAMP_RADIUS);
  lampGroup.add(shell);

  // 创建并添加金属下盖板（环形，中间留给发光面板）
  const bottomRing = new Mesh(
    ceilingLampRingGeometry,
    ceilingLampBottomRingMaterial,
  );
  bottomRing.rotation.x = -Math.PI / 2;
  bottomRing.position.y = -LAMP_THICKNESS / 2 - 0.0005;
  lampGroup.add(bottomRing);

  // 创建并添加底部面板(开关灯时发光材质和不发光材质会进行切换)
  const glowPanel = new Mesh(
    circleGeometry,
    lampGroup.visible
      ? ceilingLampBottomLightPanelMaterial
      : ceilingLampBottomDarkPanelMaterial,
  );
  glowPanel.name = "吊灯底面";
  // 将两种材质存储到 mesh 上，供点击开关时直接切换
  // @ts-ignore
  glowPanel.lightMaterial = ceilingLampBottomLightPanelMaterial;
  // @ts-ignore
  glowPanel.darkMaterial = ceilingLampBottomDarkPanelMaterial;
  glowPanel.scale.set(LAMP_RADIUS * 0.96, LAMP_RADIUS * 0.96);
  glowPanel.rotation.x = -Math.PI / 2; // 面向地板
  glowPanel.position.y = -LAMP_THICKNESS / 2 - 0.001; // 贴在圆饼灯底面
  lampGroup.add(glowPanel);

  // 创建并添加上边缘装饰性金属细环
  const topTorus = new Mesh(ceilingLampTorusGeometry, ceilingLampTorusMaterial);
  topTorus.rotation.x = Math.PI / 2;
  topTorus.position.y = LAMP_THICKNESS / 2;
  lampGroup.add(topTorus);

  // 创建并添加下边缘装饰性金属细环
  const bottomTorus = new Mesh(
    ceilingLampTorusGeometry,
    ceilingLampTorusMaterial,
  );
  bottomTorus.rotation.x = Math.PI / 2;
  bottomTorus.position.y = -LAMP_THICKNESS / 2;
  lampGroup.add(bottomTorus);

  // 添加吊灯光源
  addLampLight(lampGroup, intensity);

  // 添加自定义属性值
  // @ts-ignore
  lampGroup.switchStatus = lampGroup.visible ? "ON" : "OFF";

  return lampGroup;
};

// 创建均匀白色的发光贴图
const createUniformLightTexture = () => {
  const c = document.createElement("canvas") as HTMLCanvasElement;
  c.width = c.height = 512;
  const ctx = c.getContext("2d") as CanvasRenderingContext2D;
  // 纯白色均匀填充
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 512, 512);
  // 极轻微的边缘柔化，避免硬边
  const grad = ctx.createRadialGradient(256, 256, 200, 256, 256, 256);
  grad.addColorStop(0, "rgba(255,255,255,0)");
  grad.addColorStop(0.85, "rgba(255,255,255,0)");
  grad.addColorStop(1, "rgba(240,240,255,0.15)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
};

// 创建并添加吊灯的光源
const addLampLight = (lampGroup: Group, intensity = 2.2 * Math.PI) => {
  const lightColor = kelvinToColor(4000); // 色温，值越大颜色越冷
  const light = new PointLight(lightColor, intensity, 30, 1.2);
  light.position.set(0, 0, 0);
  light.castShadow = true;
  light.shadow.mapSize.set(512, 512);
  light.shadow.bias = -0.0005;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 10;

  // 默认隐藏
  light.visible = false;

  lampGroup.add(light);
};

const kelvinToColor = (k: number) => {
  const t = k / 100;
  let r, g, b;
  if (t <= 66) {
    r = 255;
    g = Math.max(0, Math.min(255, 99.4708 * Math.log(t) - 161.1196));
    b =
      t <= 19
        ? 0
        : Math.max(0, Math.min(255, 138.5177 * Math.log(t - 10) - 305.0448));
  } else {
    r = Math.max(0, Math.min(255, 329.6987 * Math.pow(t - 60, -0.1332)));
    g = Math.max(0, Math.min(255, 288.1222 * Math.pow(t - 60, -0.0755)));
    b = Math.max(0, Math.min(255, 255));
  }
  return new Color(r / 255, g / 255, b / 255);
};

// 切换所有吊灯的显示/隐藏
export const allCeilingLampsVisibleToggle = (
  lampList: Group[],
  lampSwitchList: Group[],
  visible: boolean,
) => {
  lampList.forEach((lamp: Group) => {
    ceilingLampVisibleToggle(lamp, visible);
  });
  lampSwitchList.forEach((lampSwitch: Group) => {
    ceilingLampSwitchToggle(lampSwitch, visible ? "ON" : "OFF");
  });
};

// 切换单个吊灯的显示/隐藏
export const ceilingLampVisibleToggle = (lamp: Group, visible: boolean) => {
  if (lamp.visible === visible) return;
  lamp.visible = visible;
  const nextStatus = visible ? "ON" : "OFF";
  ceilingLampSwitchStatusToggle(lamp, nextStatus);
};

// 切换单个吊灯的开关状态
export const ceilingLampSwitchStatusToggle = (
  lamp: Group,
  nextStatus: "ON" | "OFF",
) => {
  // @ts-ignore
  lamp.switchStatus = nextStatus;
  lamp.traverse((child) => {
    if (child instanceof PointLight) {
      // @ts-ignore
      child.visible = nextStatus === "ON";
    } else if (child.name === "吊灯底面") {
      const panel = child as any;
      const newMaterial =
        nextStatus === "ON" ? panel.lightMaterial : panel.darkMaterial;
      if (newMaterial) {
        (child as Mesh).material = newMaterial;
      }
    }
  });
};

// 漫游模式下，实时计算距离摄像机最近的n个吊灯，打开吊灯光源，其他则关闭（客厅和餐厅吊灯除外）
// 为了解决如果当前场景中参与阴影计算的光源太多，则模型会不显示的问题，提高性能
export const dynamicOptimizationLampLightRender = (
  camera: PerspectiveCamera,
  animatingRef: MutableRefObject<boolean>,
  viewModeRef: MutableRefObject<ViewMode>,
) => {
  if (viewModeRef.current === "roaming" && !animatingRef.current) {
    const cameraPos = camera.position;
    const distanceInfoList: { lamp: Group; dist: number }[] = [];
    dynamicOptimizationlampList.forEach((lamp: Group) => {
      const lampPos = lamp.position;
      const dist = cameraPos.distanceTo(lampPos);
      if (distanceInfoList.length === 0) {
        distanceInfoList.push({ lamp, dist });
      } else {
        for (let i = 0, l = distanceInfoList.length; i < l; i++) {
          const item = distanceInfoList[i];
          if (dist < item.dist) {
            distanceInfoList.splice(i, 0, { lamp, dist });
            break;
          } else if (i === l - 1) {
            distanceInfoList.push({ lamp, dist });
          }
        }
      }
      distanceInfoList.forEach(
        (item: { lamp: Group; dist: number }, index: number) => {
          if (index < DYNAMIC_OPTIMIZATION_LAMP_COUNT) {
            // @ts-ignore
            if (item.lamp.switchStatus === "ON") {
              item.lamp.traverse((child) => {
                if (child instanceof PointLight) {
                  child.visible = true;
                }
              });
            }
          } else {
            item.lamp.traverse((child) => {
              if (child instanceof PointLight) {
                child.visible = false;
              }
            });
          }
        },
      );
    });
  }
};
