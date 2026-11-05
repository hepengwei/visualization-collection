/**
 * 添加次卧衣柜
 */
import { Scene, MeshPhysicalMaterial, Group, Vector3, Mesh } from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  SIZE_ENLARGEMENT_RITO,
  BOARD_THICKNESS,
  ARC_BOARD_THICKNESS,
  CHEST_DOOR_THICKNESS,
  addBox,
  addWithARoundedCornerCabinetDoor,
  generateQuarterCylinderGeometry,
} from "../utils";
import {
  WALL_HEIGHT,
  WALL_THICKNESS,
  CABINET_DEPTH,
  WALL_59_POSITION_X,
  WALL_51_POSITION_Z,
  WALL_61_POSITION_Z,
} from "./addHouseStructure";
import { WARDROBE_DEPTH, SUSPENDED_CEILING_HEIGHT } from "./addHouseStructure";

const KIDS_WARDROBE_WIDTH =
  WALL_51_POSITION_Z - WALL_61_POSITION_Z + CABINET_DEPTH; // 次卧衣柜体的总宽
// 次卧衣柜的位置
const KIDS_WARDROBE_POSITON = new Vector3(
  WALL_59_POSITION_X - WALL_THICKNESS / 2,
  0,
  WALL_51_POSITION_Z - WALL_THICKNESS / 2 - KIDS_WARDROBE_WIDTH / 2,
);
const CHEST_GAP = 0.01; // 柜子之间的缝隙
const CHEST_DOOR_WIDTH =
  (KIDS_WARDROBE_WIDTH -
    ARC_BOARD_THICKNESS -
    BOARD_THICKNESS -
    CHEST_GAP * 5) /
  4; // 柜门的宽度
const KIDS_WARDROBE_HEIGHT = WALL_HEIGHT - SUSPENDED_CEILING_HEIGHT; // 次卧衣柜的总高
const BOTTOM_CHEST_HEIGHT = 0.9 * SIZE_ENLARGEMENT_RITO; // 下面柜子的高度
const TOP_CHEST_HEIGHT = KIDS_WARDROBE_HEIGHT - BOTTOM_CHEST_HEIGHT - CHEST_GAP; // 上面柜子的高度(包含镂空的高度)
const MIDDLE_CHEST_DEPTH = WARDROBE_DEPTH - CHEST_DOOR_THICKNESS; // 中间层柜体的深度

const addSecondaryBedroomWardrobe = (
  scene: Scene,
  assetManager: AssetManager,
) => {
  const wardrobe = createWardrobe(assetManager);
  wardrobe.name = "次卧衣柜";
  wardrobe.rotation.y = -Math.PI / 2;
  wardrobe.position.copy(KIDS_WARDROBE_POSITON);
  scene.add(wardrobe);
};

// 创建次卧衣柜
const createWardrobe = (assetManager: AssetManager) => {
  // 灰白色木板材质
  const woodBoardLightMaterial = assetManager.materials.get(
    "woodBoardLightMaterial",
  ) as MeshPhysicalMaterial;
  // 深灰色木板材质
  const woodBoardDarkMaterial2 = assetManager.materials.get(
    "woodBoardDarkMaterial2",
  ) as MeshPhysicalMaterial;

  const wardrobeGroup = new Group();

  const width1 = KIDS_WARDROBE_WIDTH - ARC_BOARD_THICKNESS - BOARD_THICKNESS;
  const x1 = KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS - width1 / 2;

  // 左板
  addBox(
    wardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    ARC_BOARD_THICKNESS,
    KIDS_WARDROBE_HEIGHT,
    WARDROBE_DEPTH - ARC_BOARD_THICKNESS,
    -KIDS_WARDROBE_WIDTH / 2 + ARC_BOARD_THICKNESS / 2,
    KIDS_WARDROBE_HEIGHT / 2,
    (WARDROBE_DEPTH - ARC_BOARD_THICKNESS) / 2,
  );
  // 右边四分之一圆柱
  const quarterCylinderGeometry = generateQuarterCylinderGeometry(
    ARC_BOARD_THICKNESS,
    KIDS_WARDROBE_HEIGHT,
  );
  const generateQuarterCylinder = new Mesh(
    quarterCylinderGeometry,
    woodBoardLightMaterial,
  );
  generateQuarterCylinder.rotation.x = -Math.PI / 2;
  generateQuarterCylinder.rotation.z = Math.PI;
  generateQuarterCylinder.position.set(
    -KIDS_WARDROBE_WIDTH / 2 + ARC_BOARD_THICKNESS,
    0,
    WARDROBE_DEPTH - ARC_BOARD_THICKNESS,
  );
  wardrobeGroup.add(generateQuarterCylinder);

  // 中间柜体
  addBox(
    wardrobeGroup,
    assetManager,
    woodBoardDarkMaterial2,
    width1,
    KIDS_WARDROBE_HEIGHT,
    MIDDLE_CHEST_DEPTH,
    x1,
    KIDS_WARDROBE_HEIGHT / 2,
    MIDDLE_CHEST_DEPTH / 2,
  );

  // 右板
  addBox(
    wardrobeGroup,
    assetManager,
    woodBoardLightMaterial,
    BOARD_THICKNESS,
    KIDS_WARDROBE_HEIGHT,
    WARDROBE_DEPTH,
    KIDS_WARDROBE_WIDTH / 2 - BOARD_THICKNESS / 2,
    KIDS_WARDROBE_HEIGHT / 2,
    WARDROBE_DEPTH / 2,
  );

  // 中间柜体左边两列门板
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    TOP_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - TOP_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    TOP_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_DOOR_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - TOP_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(Math.PI, 0, Math.PI),
  );
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(Math.PI, 0, 0),
  );
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      CHEST_DOOR_WIDTH +
      CHEST_GAP +
      CHEST_DOOR_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(0, 0, Math.PI),
  );

  // 中间柜体右边两列门板
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    TOP_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      (CHEST_DOOR_WIDTH + CHEST_GAP) * 2 +
      CHEST_DOOR_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - TOP_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
  );
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    TOP_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      (CHEST_DOOR_WIDTH + CHEST_GAP) * 3 +
      CHEST_DOOR_WIDTH / 2,
    KIDS_WARDROBE_HEIGHT - TOP_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(Math.PI, 0, Math.PI),
  );
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      (CHEST_DOOR_WIDTH + CHEST_GAP) * 2 +
      CHEST_DOOR_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(Math.PI, 0, 0),
  );
  addWithARoundedCornerCabinetDoor(
    wardrobeGroup,
    assetManager,
    CHEST_DOOR_WIDTH,
    BOTTOM_CHEST_HEIGHT,
    -KIDS_WARDROBE_WIDTH / 2 +
      ARC_BOARD_THICKNESS +
      CHEST_GAP +
      (CHEST_DOOR_WIDTH + CHEST_GAP) * 3 +
      CHEST_DOOR_WIDTH / 2,
    BOTTOM_CHEST_HEIGHT / 2,
    WARDROBE_DEPTH - CHEST_DOOR_THICKNESS / 2,
    new Vector3(0, 0, Math.PI),
  );

  return wardrobeGroup;
};

export default addSecondaryBedroomWardrobe;
