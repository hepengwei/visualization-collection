/**
 * 创建燃气灶
 */
import {
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  Mesh,
  Group,
  Vector3,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  addBox,
  addPlane,
  generateRoundedBoxGeometry,
  generateHalfCircularRingCylinderGeometry,
} from "../utils";

const GAS_STOVE_WIDTH = 1.1;
export const GAS_STOVE_HEIGHT = 0.6;
const GAS_STOVE_GLASS_THICKNESS = 0.012;
const SINGLE_HEARTH_SIZE = 0.28; // 单个灶台的宽高
const SINGLE_HEARTH_MARGIN = 0.08; // 单个灶台的距离左右边间距
const SINGLE_HEARTH_BOTTOM_THICKNESS = 0.006; // 单个灶台的底部厚度
const SINGLE_HEARTH_BOTTOM_PADDING = 0.03; // 单个灶台的底部的内边距
const SINGLE_HOLDER_WIDTH = 0.03; // 单个支架的宽度
const SINGLE_HOLDER_HEIGHT = 0.05; // 单个支架的高度
const SINGLE_HOLDER_TOP_WIDTH = 0.07; // 单个支架上方的宽度
const SINGLE_HEARTH_CIRCLE_OUTER_RADIUS = 0.07; // 单个灶台的中间圆圈的外半径
const SINGLE_HEARTH_CIRCLE_INNER_RADIUS = 0.045; // 单个灶台的中间圆圈的内半径
const SINGLE_HEARTH_CENTER_RADIUS = 0.016; // 单个灶台的中间圆柱半径
const SINGLE_SWITCH_BOTTOM_RADIUS = 0.015; // 单个打火开关底下圆柱半径
const SINGLE_SWITCH_BOTTOM_HEIGHT = 0.02; // 单个打火开关底下圆柱高度
const SINGLE_SWITCH_TOP_RADIUS = 0.032; // 单个打火开关上面圆柱半径
const SINGLE_SWITCH_TOP_HEIGHT = 0.03; // 单个打火开关上面圆柱高度

const createGasStove = (assetManager: AssetManager) => {
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );
  // 黑色玻璃材质
  const blackGlassMaterial = assetManager.materials.get("blackGlassMaterial");

  const gasStoveGroup = new Group();

  addPlane(
    gasStoveGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    GAS_STOVE_WIDTH,
    GAS_STOVE_HEIGHT,
    0,
    0,
    0,
    new Vector3(Math.PI / 2, 0, 0),
  );
  addBox(
    gasStoveGroup,
    assetManager,
    blackGlassMaterial as MeshPhysicalMaterial,
    GAS_STOVE_WIDTH,
    GAS_STOVE_GLASS_THICKNESS,
    GAS_STOVE_HEIGHT,
    0,
    GAS_STOVE_GLASS_THICKNESS / 2 + 0.002,
    0,
  );

  for (let i = 0; i < 2; i++) {
    // 添加灶台
    const hearth = createSingleHearth(assetManager);
    hearth.position.set(
      i === 0
        ? -GAS_STOVE_WIDTH / 2 + SINGLE_HEARTH_MARGIN + SINGLE_HEARTH_SIZE / 2
        : GAS_STOVE_WIDTH / 2 - SINGLE_HEARTH_MARGIN - SINGLE_HEARTH_SIZE / 2,
      GAS_STOVE_GLASS_THICKNESS + 0.002,
      -0.04,
    );
    gasStoveGroup.add(hearth);

    // 添加打火开关
    const singleSwitch = createSingleSwitch(assetManager);
    singleSwitch.position.set(
      i === 0 ? -SINGLE_HEARTH_MARGIN : SINGLE_HEARTH_MARGIN,
      GAS_STOVE_GLASS_THICKNESS,
      GAS_STOVE_HEIGHT / 2 - 0.06,
    );
    gasStoveGroup.add(singleSwitch);
  }

  return gasStoveGroup;
};

// 创建单个灶台
const createSingleHearth = (assetManager: AssetManager) => {
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );
  // 哑光工业铝材质
  const whiteAluminumMaterial = assetManager.materials.get(
    "whiteAluminumMaterial",
  );
  const singleHearthGroup = new Group();

  addPlane(
    singleHearthGroup,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    SINGLE_HEARTH_SIZE,
    SINGLE_HEARTH_SIZE,
    0,
    0,
    0,
    new Vector3(-Math.PI / 2, 0, 0),
  );

  const roundedBoxGeometry = generateRoundedBoxGeometry(
    SINGLE_HEARTH_SIZE,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    SINGLE_HEARTH_BOTTOM_PADDING,
    0.01,
  );
  const roundedBox = new Mesh(roundedBoxGeometry, aluminiumAlloyMaterial);
  const roundedBox2 = roundedBox.clone();
  const roundedBox3 = roundedBox.clone();
  const roundedBox4 = roundedBox.clone();
  roundedBox.position.set(
    0,
    SINGLE_HEARTH_BOTTOM_THICKNESS / 2,
    -SINGLE_HEARTH_SIZE / 2 + SINGLE_HEARTH_BOTTOM_PADDING / 2,
  );
  singleHearthGroup.add(roundedBox);
  roundedBox2.position.set(
    -SINGLE_HEARTH_SIZE / 2 + SINGLE_HEARTH_BOTTOM_PADDING / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS / 2,
    0,
  );
  roundedBox2.rotation.y = Math.PI / 2;
  singleHearthGroup.add(roundedBox2);
  roundedBox3.position.set(
    SINGLE_HEARTH_SIZE / 2 - SINGLE_HEARTH_BOTTOM_PADDING / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS / 2,
    0,
  );
  roundedBox3.rotation.y = Math.PI / 2;
  singleHearthGroup.add(roundedBox3);
  roundedBox4.position.set(
    0,
    SINGLE_HEARTH_BOTTOM_THICKNESS / 2,
    SINGLE_HEARTH_SIZE / 2 - SINGLE_HEARTH_BOTTOM_PADDING / 2,
  );
  singleHearthGroup.add(roundedBox4);

  // 添加四个支架
  const holder1 = createSingleHolder(assetManager);
  holder1.position.set(
    -SINGLE_HEARTH_SIZE / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    -SINGLE_HEARTH_SIZE / 2,
  );
  holder1.rotation.y = -Math.PI / 4;
  singleHearthGroup.add(holder1);
  const holder2 = createSingleHolder(assetManager);
  holder2.position.set(
    SINGLE_HEARTH_SIZE / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    -SINGLE_HEARTH_SIZE / 2,
  );
  holder2.rotation.y = -(Math.PI * 3) / 4;
  singleHearthGroup.add(holder2);
  const holder3 = createSingleHolder(assetManager);
  holder3.position.set(
    -SINGLE_HEARTH_SIZE / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    SINGLE_HEARTH_SIZE / 2,
  );
  holder3.rotation.y = Math.PI / 4;
  singleHearthGroup.add(holder3);
  const holder4 = createSingleHolder(assetManager);
  holder4.position.set(
    SINGLE_HEARTH_SIZE / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    SINGLE_HEARTH_SIZE / 2,
  );
  holder4.rotation.y = (Math.PI * 3) / 4;
  singleHearthGroup.add(holder4);

  // 添加中间的圆圈
  const thickness = SINGLE_HEARTH_BOTTOM_THICKNESS + SINGLE_HOLDER_WIDTH;
  const halfCircularRingCylinderGeometry =
    generateHalfCircularRingCylinderGeometry(
      SINGLE_HEARTH_CIRCLE_OUTER_RADIUS,
      SINGLE_HEARTH_CIRCLE_INNER_RADIUS,
      thickness,
    );
  const halfCircularRingCylinder = new Mesh(
    halfCircularRingCylinderGeometry,
    aluminiumAlloyMaterial,
  );
  const halfCircularRingCylinder2 = halfCircularRingCylinder.clone();
  halfCircularRingCylinder.rotation.x = Math.PI / 2;
  halfCircularRingCylinder.position.y = thickness;
  singleHearthGroup.add(halfCircularRingCylinder);
  halfCircularRingCylinder2.rotation.x = -Math.PI / 2;
  singleHearthGroup.add(halfCircularRingCylinder2);

  //  添加正中心圆柱
  const centerCylinder = new Mesh(cylinderGeometry, aluminiumAlloyMaterial);
  centerCylinder.scale.set(
    SINGLE_HEARTH_CENTER_RADIUS,
    thickness,
    SINGLE_HEARTH_CENTER_RADIUS,
  );
  centerCylinder.position.set(0, thickness / 2, 0);
  singleHearthGroup.add(centerCylinder);

  return singleHearthGroup;
};

// 创建单个支架
const createSingleHolder = (assetManager: AssetManager) => {
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );
  const singleHolderGroup = new Group();
  addBox(
    singleHolderGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    SINGLE_HOLDER_WIDTH,
    SINGLE_HOLDER_HEIGHT,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    SINGLE_HOLDER_WIDTH / 2,
    SINGLE_HOLDER_HEIGHT / 2,
    0,
  );
  addBox(
    singleHolderGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    SINGLE_HOLDER_TOP_WIDTH,
    SINGLE_HOLDER_WIDTH / 2,
    SINGLE_HEARTH_BOTTOM_THICKNESS,
    SINGLE_HOLDER_TOP_WIDTH / 2,
    SINGLE_HOLDER_HEIGHT - SINGLE_HOLDER_WIDTH / 4,
    0,
  );

  return singleHolderGroup;
};

// 创建单个打火开关
const createSingleSwitch = (assetManager: AssetManager) => {
  const cylinderGeometry = assetManager.geometries.get("cylinderGeometry");
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );
  // 哑光工业铝材质
  const whiteAluminumMaterial = assetManager.materials.get(
    "whiteAluminumMaterial",
  );
  const singleSwitchGroup = new Group();

  const bottomCylinder = new Mesh(cylinderGeometry, aluminiumAlloyMaterial);
  bottomCylinder.scale.set(
    SINGLE_SWITCH_BOTTOM_RADIUS,
    SINGLE_SWITCH_BOTTOM_HEIGHT,
    SINGLE_SWITCH_BOTTOM_RADIUS,
  );
  bottomCylinder.position.set(0, SINGLE_SWITCH_BOTTOM_HEIGHT / 2, 0);
  singleSwitchGroup.add(bottomCylinder);
  const topCylinder = new Mesh(cylinderGeometry, whiteAluminumMaterial);
  topCylinder.scale.set(
    SINGLE_SWITCH_TOP_RADIUS,
    SINGLE_SWITCH_TOP_HEIGHT,
    SINGLE_SWITCH_TOP_RADIUS,
  );
  topCylinder.position.set(
    0,
    SINGLE_SWITCH_BOTTOM_HEIGHT + SINGLE_SWITCH_TOP_HEIGHT / 2,
    0,
  );
  singleSwitchGroup.add(topCylinder);

  return singleSwitchGroup;
};

export default createGasStove;
