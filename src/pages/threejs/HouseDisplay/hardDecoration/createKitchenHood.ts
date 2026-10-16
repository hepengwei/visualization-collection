/**
 * 创建油烟机
 */
import {
  MeshStandardMaterial,
  Mesh,
  Group,
  Vector3,
  ExtrudeGeometry,
  Shape,
} from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  SIZE_ENLARGEMENT_RITO,
  addBox,
  addPlane,
  generateRoundedBoxGeometry,
  addAluminousGussetPlateLight,
} from "../utils";

const KITCHEN_HOOD_WIDTH = 1.26; // 油烟机的总宽
const KITCHEN_HOOD_HEIGHT = 0.68; // 油烟机的总高
const KITCHEN_HOOD_DEPTH = 0.36 * SIZE_ENLARGEMENT_RITO; // 油烟机的总深度
const KITCHEN_HOOD_TOP_HEIGHT = 0.054; // 油烟机上方的高度
const KITCHEN_HOOD_BORDER_WIDTH = 0.036; // 油烟机两边金属条的宽
const GLASS_THICKNESS = 0.008; // 前面黑色玻璃厚度

const createKitchenHood = (assetManager: AssetManager) => {
  // 铝合金材质
  const aluminiumAlloyMaterial = assetManager.materials.get(
    "aluminiumAlloyMaterial",
  );
  // 哑光工业铝材质
  const whiteAluminumMaterial = assetManager.materials.get(
    "whiteAluminumMaterial",
  );
  // 黑色玻璃材质
  const blackGlassMaterial = assetManager.materials.get("blackGlassMaterial");

  const width1 = 0.11;
  const width2 = 0.12;

  const kitchenHoodGroup = new Group();

  addPlane(
    kitchenHoodGroup,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    KITCHEN_HOOD_WIDTH,
    KITCHEN_HOOD_HEIGHT,
    0,
    -KITCHEN_HOOD_HEIGHT / 2,
    0,
  );

  addPlane(
    kitchenHoodGroup,
    assetManager,
    whiteAluminumMaterial as MeshStandardMaterial,
    KITCHEN_HOOD_WIDTH,
    width2,
    0,
    0,
    width2 / 2,
    new Vector3(Math.PI / 2, 0, 0),
  );

  const shape1 = new Shape();
  shape1.moveTo(0, 0);
  shape1.lineTo(0, -KITCHEN_HOOD_TOP_HEIGHT);
  shape1.lineTo(
    -KITCHEN_HOOD_DEPTH + width1,
    (-KITCHEN_HOOD_TOP_HEIGHT * 7) / 4,
  );
  shape1.lineTo(-KITCHEN_HOOD_DEPTH + width2, 0);
  shape1.lineTo(0, 0);

  let geometry1: any = new ExtrudeGeometry(shape1, {
    depth: KITCHEN_HOOD_WIDTH,
    bevelEnabled: false, // 关掉倒角，否则两端会变圆边
  });

  // 合并重复顶点 → 顶点共享 → 法线可跨三角形平均
  geometry1 = mergeVertices(geometry1, 1e-4);
  geometry1.computeVertexNormals();

  const box1 = new Mesh(geometry1, aluminiumAlloyMaterial);
  box1.rotation.y = -Math.PI / 2;
  box1.position.set(KITCHEN_HOOD_WIDTH / 2, 0, KITCHEN_HOOD_DEPTH);
  kitchenHoodGroup.add(box1);

  // 左边金属条
  const z = 0.08;
  addBox(
    kitchenHoodGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    KITCHEN_HOOD_BORDER_WIDTH,
    KITCHEN_HOOD_HEIGHT,
    KITCHEN_HOOD_BORDER_WIDTH,
    -KITCHEN_HOOD_WIDTH / 2 + KITCHEN_HOOD_BORDER_WIDTH / 2,
    -KITCHEN_HOOD_HEIGHT / 2,
    z,
    true,
    new Vector3(Math.PI / 18, 0, 0),
  );

  // 右边金属条
  addBox(
    kitchenHoodGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    KITCHEN_HOOD_BORDER_WIDTH,
    KITCHEN_HOOD_HEIGHT,
    KITCHEN_HOOD_BORDER_WIDTH,
    KITCHEN_HOOD_WIDTH / 2 - KITCHEN_HOOD_BORDER_WIDTH / 2,
    -KITCHEN_HOOD_HEIGHT / 2,
    z,
    true,
    new Vector3(Math.PI / 18, 0, 0),
  );

  // 底边金属条
  addBox(
    kitchenHoodGroup,
    assetManager,
    aluminiumAlloyMaterial as MeshStandardMaterial,
    KITCHEN_HOOD_WIDTH,
    KITCHEN_HOOD_BORDER_WIDTH,
    KITCHEN_HOOD_BORDER_WIDTH,
    0,
    -KITCHEN_HOOD_HEIGHT + KITCHEN_HOOD_BORDER_WIDTH / 2,
    KITCHEN_HOOD_BORDER_WIDTH / 2,
  );

  // 前面黑色玻璃
  const roundedBoxGeometry = generateRoundedBoxGeometry(
    KITCHEN_HOOD_WIDTH,
    (KITCHEN_HOOD_HEIGHT * 5) / 8,
    GLASS_THICKNESS,
    0.02,
  );
  const roundedBox = new Mesh(roundedBoxGeometry, blackGlassMaterial);
  roundedBox.position.set(
    0,
    -KITCHEN_HOOD_HEIGHT / 2 + 0.04,
    z + KITCHEN_HOOD_BORDER_WIDTH / 2 + GLASS_THICKNESS,
  );
  roundedBox.rotation.x = Math.PI / 18;
  kitchenHoodGroup.add(roundedBox);

  // 平面灯
  const height = 0.05;
  addAluminousGussetPlateLight(
    kitchenHoodGroup,
    assetManager,
    KITCHEN_HOOD_WIDTH - KITCHEN_HOOD_BORDER_WIDTH * 2,
    height,
    0,
    -KITCHEN_HOOD_TOP_HEIGHT - 0.01,
    KITCHEN_HOOD_DEPTH - KITCHEN_HOOD_BORDER_WIDTH - height / 2,
    false,
    new Vector3((Math.PI * 17) / 36, 0, 0),
  );

  return kitchenHoodGroup;
};

export default createKitchenHood;
