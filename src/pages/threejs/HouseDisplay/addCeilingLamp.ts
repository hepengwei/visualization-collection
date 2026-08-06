/**
 * 添加各房间的所有吊灯
 */
import { MutableRefObject } from "react";
import {
  Scene,
  PerspectiveCamera,
  CircleGeometry,
  CylinderGeometry,
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
} from "three";
import { wallHeight } from "./addHouseStructure";
import type { ViewMode } from "./modeToggle";

const LAMP_RADIUS = 0.9; // 灯的半径
const LAMP_THICKNESS = 0.12; // 灯的厚度
const DYNAMIC_OPTIMIZATION_LAMP_COUNT = 3; // 动态优化吊灯时亮灯的个数
const lampList: Group[] = []; // 所有吊灯的列表

const dynamicOptimizationlampList: Group[] = []; // 动态优化吊灯的列表（动态显示隐藏光源，提高性能）

export const addCeilingLamp = (scene: Scene) => {
  const lamp1 = createLamp();
  lamp1.name = "客厅吊灯";
  lamp1.position.set(-8.5, wallHeight - LAMP_THICKNESS / 2 - 0.05, -1);
  lampList.push(lamp1);
  scene.add(lamp1);

  const lamp2 = createLamp();
  lamp2.name = "餐厅吊灯";
  lamp2.position.set(11, wallHeight - LAMP_THICKNESS / 2 - 0.05, -1.4);
  lampList.push(lamp2);
  scene.add(lamp2);

  const lamp3 = createLamp();
  lamp3.name = "主卧吊灯";
  lamp3.position.set(-9, wallHeight - LAMP_THICKNESS / 2 - 0.05, -11);
  lampList.push(lamp3);
  dynamicOptimizationlampList.push(lamp3);
  scene.add(lamp3);

  const lamp4 = createLamp();
  lamp4.name = "儿童房吊灯";
  lamp4.position.set(11, wallHeight - LAMP_THICKNESS / 2 - 0.05, -11);
  lampList.push(lamp4);
  dynamicOptimizationlampList.push(lamp4);
  scene.add(lamp4);

  const lamp5 = createLamp();
  lamp5.name = "次卧吊灯";
  lamp5.position.set(-9, wallHeight - LAMP_THICKNESS / 2 - 0.05, 8);
  lampList.push(lamp5);
  dynamicOptimizationlampList.push(lamp5);
  scene.add(lamp5);

  const lamp6 = createLamp();
  lamp6.name = "厨房吊灯";
  lamp6.position.set(11, wallHeight - LAMP_THICKNESS / 2 - 0.05, 5.4);
  lampList.push(lamp6);
  dynamicOptimizationlampList.push(lamp6);
  scene.add(lamp6);

  const lamp7 = createLamp(2 * Math.PI);
  lamp7.name = "厕所吊灯";
  lamp7.position.set(3.6, wallHeight - LAMP_THICKNESS / 2 - 0.05, -12.5);
  lamp7.scale.set(0.6, 0.6, 0.6);
  lampList.push(lamp7);
  dynamicOptimizationlampList.push(lamp7);
  scene.add(lamp7);

  const lamp8 = createLamp(2 * Math.PI);
  lamp8.name = "主卧厕所吊灯";
  lamp8.position.set(-0.4, wallHeight - LAMP_THICKNESS / 2 - 0.05, -12.5);
  lamp8.scale.set(0.6, 0.6, 0.6);
  lampList.push(lamp8);
  dynamicOptimizationlampList.push(lamp8);
  scene.add(lamp8);
};

// 创建吊灯
const createLamp = (intensity?: number) => {
  const lampGroup = new Group();
  const uniformTex = createUniformLightTexture();

  // 创建并添加吊灯的主体（金属圆柱体）
  const shellMat = new MeshPhysicalMaterial({
    color: 0xe8e8ec,
    metalness: 0.95,
    roughness: 0.15,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
  });
  const shell = new Mesh(
    new CylinderGeometry(
      LAMP_RADIUS,
      LAMP_RADIUS,
      LAMP_THICKNESS,
      64,
      1,
      false,
    ),
    shellMat,
  );
  lampGroup.add(shell);

  // 创建并添加金属下盖板（环形，中间留给发光面板）
  const ringShape = new RingGeometry(
    LAMP_RADIUS * 0.96,
    LAMP_RADIUS * 1.02,
    64,
  );
  const bottomRing = new Mesh(
    ringShape,
    new MeshPhysicalMaterial({
      color: 0xc8c8cc,
      metalness: 0.92,
      roughness: 0.18,
    }),
  );
  bottomRing.rotation.x = -Math.PI / 2;
  bottomRing.position.y = -LAMP_THICKNESS / 2 - 0.0005;
  lampGroup.add(bottomRing);

  // 创建并添加底部发光面板
  const glowPanelMat = new MeshBasicMaterial({
    map: uniformTex,
    color: 0xffffff,
    toneMapped: false, // 关键：不受色调映射压暗，保持纯亮白
    side: DoubleSide,
  });
  const glowPanel = new Mesh(
    new CircleGeometry(LAMP_RADIUS * 0.96, 64),
    glowPanelMat,
  );
  glowPanel.rotation.x = -Math.PI / 2; // 面向地板
  glowPanel.position.y = -LAMP_THICKNESS / 2 - 0.001; // 贴在圆饼灯底面
  lampGroup.add(glowPanel);

  // 创建并添加上边缘装饰性金属细环
  const topTorus = new Mesh(
    new TorusGeometry(LAMP_RADIUS * 0.99, 0.008, 16, 64),
    new MeshPhysicalMaterial({
      color: 0xf5f5f5,
      metalness: 1,
      roughness: 0.05,
    }),
  );
  topTorus.rotation.x = Math.PI / 2;
  topTorus.position.y = LAMP_THICKNESS / 2;
  lampGroup.add(topTorus);

  // 创建并添加下边缘装饰性金属细环
  const bottomTorus = new Mesh(
    new TorusGeometry(LAMP_RADIUS * 0.99, 0.008, 16, 64),
    new MeshPhysicalMaterial({
      color: 0xf5f5f5,
      metalness: 1,
      roughness: 0.05,
    }),
  );
  bottomTorus.rotation.x = Math.PI / 2;
  bottomTorus.position.y = -LAMP_THICKNESS / 2;
  lampGroup.add(bottomTorus);

  // 添加吊灯光源
  addLampLight(lampGroup, intensity);

  // 默认隐藏
  lampGroup.visible = false;
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
const addLampLight = (lampGroup: Group, intensity = 3 * Math.PI) => {
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
export const allCeilingLampsVisibleToggle = (visible: boolean) => {
  lampList.forEach((lamp: Group) => {
    ceilingLampVisibleToggle(lamp, visible);
  });
};

// 切换单个吊灯的显示/隐藏
export const ceilingLampVisibleToggle = (lamp: Group, visible: boolean) => {
  lamp.visible = visible;
  // 修改自定义属性值
  // @ts-ignore
  lamp.switchStatus = visible ? "ON" : "OFF";
  // 同时控制光源的启用/禁用，避免隐藏时仍然计算阴影导致性能问题
  lamp.traverse((child) => {
    if (child instanceof PointLight) {
      child.visible = visible;
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
            item.lamp.traverse((child) => {
              if (child instanceof PointLight) {
                child.visible = true;
              }
            });
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
