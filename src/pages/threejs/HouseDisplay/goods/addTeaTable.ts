/**
 * 添加茶几
 */
import {
  Scene,
  CylinderGeometry,
  TorusGeometry,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  Mesh,
  Group,
  Vector3,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import addVase from "./addVase";
import { generateEllipticalTorusGeometry } from "../utils";

const PANEL_LONG_RIDIUS = 1.8; // 茶几桌面的长半径
const PANEL_SHORT_RIDIUS = 1.2; // 茶几桌面的短半径
const PANEL_THICKNESS = 0.055; // 茶几桌面厚度
const TEA_TABLE_LEG_LENGTH = 0.6; // 茶几桌腿长度
const PANEL_TORUS_TUBE_RIDIUS = 0.012; // 茶几桌面金属圆环截面半径
const GLASS_RADIUS = 0.85; // 下层玻璃隔板的半径
const GLASS_PANEL_DISTANCE = 0.36; // 下层玻璃隔板与桌面的距离
const PILLAR_HEIGHT = 0.48; // 中心支撑柱的高度
const TEA_TABLE_LEG_CONTACT_RADIUS = 0.035; // 茶几桌腿的球形接头的半径
const TEA_TABLE_POSITION = new Vector3(-7.8, 0.025, -1.8); // 茶几位置
// 花瓶位置
const VASE_POSITION = new Vector3(
  0,
  TEA_TABLE_LEG_LENGTH + TEA_TABLE_LEG_CONTACT_RADIUS / 2 + PANEL_THICKNESS,
  0,
);

const addTeaTable = (scene: Scene, assetManager: AssetManager) => {
  const teaTableGroup = new Group();
  teaTableGroup.name = "茶几";
  teaTableGroup.castShadow = true;
  teaTableGroup.receiveShadow = true;

  // 圆柱体
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  // 球体
  const sphereGeometry = assetManager.geometries.get("sphereGeometry");
  // 茶几中心金属支撑柱
  const teaTableCylinderGeometry = new CylinderGeometry(
    0.06,
    0.1,
    PILLAR_HEIGHT,
  );
  // 茶几桌面金属圆环(甜甜圈形状)
  const teaTablePanelTorusGeometry = generateEllipticalTorusGeometry(
    PANEL_LONG_RIDIUS + PANEL_TORUS_TUBE_RIDIUS,
    PANEL_SHORT_RIDIUS + PANEL_TORUS_TUBE_RIDIUS,
    PANEL_TORUS_TUBE_RIDIUS,
  );
  // 下面玻璃隔板金属圆环(甜甜圈形状)
  const teaTableGlassTorusGeometry = new TorusGeometry(0.85, 0.008);
  // 茶几中心金属支撑柱装饰圆环(甜甜圈形状)
  const teaTableOrnamentTorusGeometry = new TorusGeometry(0.12, 0.015);
  // 茶几腿的脚垫
  const teaTableFootPadCylinderGeometry = new CylinderGeometry(
    0.045,
    0.055,
    0.025,
    16,
  );
  // 茶几桌面材质
  const teaTablePanelMaterial = new MeshStandardMaterial({
    color: 0x6e7b71,
    roughness: 0.2,
    metalness: 0.05,
  });
  assetManager.materials.set("teaTablePanelMaterial", teaTablePanelMaterial);
  // 茶几金边材质
  const teaTablePanelEdgeMaterial = new MeshStandardMaterial({
    color: 0xc9a96e,
    roughness: 0.25,
    metalness: 0.9,
  });
  assetManager.materials.set(
    "teaTablePanelEdgeMaterial",
    teaTablePanelEdgeMaterial,
  );
  // 下层玻璃材质
  const teaTableGlassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.03,
    metalness: 0,
    transmission: 0.92,
    thickness: 0.8,
    ior: 1.5,
    transparent: true,
    opacity: 0.25,
  });
  assetManager.materials.set("teaTableGlassMaterial", teaTableGlassMaterial);
  // 玻璃金属圆环材质
  const teaTableGlassEdgeMaterial = new MeshStandardMaterial({
    color: 0xd0d0d0,
    roughness: 0.12,
    metalness: 1.0,
  });
  assetManager.materials.set(
    "teaTableGlassEdgeMaterial",
    teaTableGlassEdgeMaterial,
  );
  // 茶几腿的脚垫材质
  const teaTableFootPadMaterial = new MeshStandardMaterial({
    color: 0x5a3a1a,
    roughness: 0.45,
    metalness: 0.15,
  });
  assetManager.materials.set(
    "teaTableFootPadMaterial",
    teaTableFootPadMaterial,
  );

  // 主桌面（圆形大理石）
  const tablePanelPositionY =
    TEA_TABLE_LEG_LENGTH + TEA_TABLE_LEG_CONTACT_RADIUS + PANEL_THICKNESS / 2;
  const tablePanel = new Mesh(cylinderGeometry, teaTablePanelMaterial);
  tablePanel.scale.set(PANEL_LONG_RIDIUS, PANEL_THICKNESS, PANEL_SHORT_RIDIUS);
  tablePanel.position.y = tablePanelPositionY;
  tablePanel.castShadow = true;
  tablePanel.receiveShadow = true;
  teaTableGroup.add(tablePanel);

  // 主桌面金边
  const topEdge = new Mesh(
    teaTablePanelTorusGeometry,
    teaTablePanelEdgeMaterial,
  );
  topEdge.position.y =
    TEA_TABLE_LEG_LENGTH + TEA_TABLE_LEG_CONTACT_RADIUS + PANEL_THICKNESS;
  teaTableGroup.add(topEdge);

  // 下层玻璃隔板
  const glassShelf = new Mesh(cylinderGeometry, teaTableGlassMaterial);
  glassShelf.scale.set(GLASS_RADIUS, 0.025, GLASS_RADIUS);
  glassShelf.position.y = tablePanelPositionY - GLASS_PANEL_DISTANCE;
  teaTableGroup.add(glassShelf);

  // 玻璃隔板金属边框
  const glassEdge = new Mesh(
    teaTableGlassTorusGeometry,
    teaTableGlassEdgeMaterial,
  );
  glassEdge.position.y = tablePanelPositionY - GLASS_PANEL_DISTANCE;
  glassEdge.rotation.x = Math.PI / 2;
  teaTableGroup.add(glassEdge);

  // 中心金属支撑柱
  const pillar = new Mesh(teaTableCylinderGeometry, teaTableGlassEdgeMaterial);
  pillar.position.y =
    tablePanelPositionY - PANEL_THICKNESS / 2 - PILLAR_HEIGHT / 2;
  pillar.castShadow = true;
  teaTableGroup.add(pillar);

  // 中心金属支撑柱装饰环 ×2
  [0.15, 0.25].forEach((y) => {
    const ring = new Mesh(
      teaTableOrnamentTorusGeometry,
      teaTablePanelEdgeMaterial,
    );
    ring.position.y = tablePanelPositionY - y;
    ring.rotation.x = Math.PI / 2;
    teaTableGroup.add(ring);
  });

  // 三条金属支撑腿（120°分布）
  const legR = 0.88;
  const legStartAngle = Math.PI / 2;
  for (let i = 0; i < 3; i++) {
    const a = legStartAngle + (i * Math.PI * 2) / 3;
    const x = Math.cos(a) * legR;
    const z = Math.sin(a) * legR;

    // 腿管
    const leg = new Mesh(cylinderGeometry, teaTableGlassEdgeMaterial);
    leg.scale.set(0.028, TEA_TABLE_LEG_LENGTH, 0.028);
    leg.position.set(x, TEA_TABLE_LEG_LENGTH / 2, z);
    leg.castShadow = true;
    teaTableGroup.add(leg);

    // 上端黄铜球形接头
    const joint = new Mesh(sphereGeometry, teaTablePanelEdgeMaterial);
    joint.scale.set(
      TEA_TABLE_LEG_CONTACT_RADIUS,
      TEA_TABLE_LEG_CONTACT_RADIUS,
      TEA_TABLE_LEG_CONTACT_RADIUS,
    );
    joint.position.set(x, TEA_TABLE_LEG_LENGTH, z);
    teaTableGroup.add(joint);

    // 底部橡胶脚垫
    const foot = new Mesh(
      teaTableFootPadCylinderGeometry,
      teaTableFootPadMaterial,
    );
    foot.position.set(x, 0.012, z);
    teaTableGroup.add(foot);
  }

  teaTableGroup.position.copy(TEA_TABLE_POSITION);
  scene.add(teaTableGroup);

  // 添加花瓶
  addVase(teaTableGroup, assetManager, VASE_POSITION);
};

export default addTeaTable;
