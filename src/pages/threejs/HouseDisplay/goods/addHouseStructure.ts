/**
 * 添加房屋结构，包括地板、所有墙体、踢脚线和玻璃窗
 * showWallLabel 是否显示每个墙体的编号标签，默认不显示
 */
import { RefObject } from "react";
import {
  Scene,
  MeshStandardMaterial,
  Mesh,
  DoubleSide,
  CanvasTexture,
  SpriteMaterial,
  Sprite,
  TextureLoader,
  RepeatWrapping,
  MeshPhysicalMaterial,
  SRGBColorSpace,
  InstancedMesh,
  Object3D,
  DynamicDrawUsage,
  Group,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
// 导入大理石贴图
import marbleBaseColorImg from "images/threejs/marbleFloor/marble_basecolor.png";
import marbleNormalImg from "images/threejs/marbleFloor/marble_normal.png";
import marbleRoughnessImg from "images/threejs/marbleFloor/marble_roughness.png";
import marbleHeightImg from "images/threejs/marbleFloor/marble_height.png";

type SkirtingLineType = "front" | "back" | "double" | "all"; // 如果是竖墙，则"front"为左， "back"为右

export const WALL_HEIGHT = 4; // 墙体高度
export const WALL_THICKNESS = 0.3; // 墙体厚度
export const BEAM_HEIGHT = 1; // 门框上方横梁的墙体高度
export const BEAM_POSITION_Y = WALL_HEIGHT - BEAM_HEIGHT / 2; // 门框上方横梁的墙体y位置
const TALL_GRADE_BEAM_HEIGHT = 1.5; // 高地梁的墙体高度
const TALL_GRADE_BEAM_POSITION_Y = TALL_GRADE_BEAM_HEIGHT / 2; // 高地梁的墙体y位置
const SHORT_GRADE_BEAM_HEIGHT = 0.3; // 矮地梁的墙体高度
const SHORT_GRADE_BEAM_POSITION_Y = SHORT_GRADE_BEAM_HEIGHT / 2; // 矮地梁的墙体y位置
const WALL_COLOR = 0xf4f3ef; // 珍珠白乳胶漆颜色
const WALL_LABEL_SIZE = 1.5; // 墙体标签的大小
const WALL_LABEL_COLOR = "#FFFF00"; // 墙体标签的颜色
const SKIRTING_LINE_HEIGHT = 0.1; // 墙体踢脚线高度
const SKIRTING_LINE_THICKNESS = 0.02; // 墙体踢脚线厚度
const SKIRTING_LINE_COLOR = 0xbfc3c7; // 墙体踢脚线的颜色
const GLASS_THICKNESS = 0.1; // 玻璃厚度
const FLOOR_TO_CEILING_GLASS_HEIGHT =
  WALL_HEIGHT - SHORT_GRADE_BEAM_HEIGHT - BEAM_HEIGHT; // 落地玻璃的高度
const FLOOR_TO_CEILING_GLASS_POSITION_Y =
  SHORT_GRADE_BEAM_HEIGHT + FLOOR_TO_CEILING_GLASS_HEIGHT / 2; // 落地玻璃的y位置
const NON_FLOOR_TO_CEILING_GLASS_HEIGHT =
  WALL_HEIGHT - TALL_GRADE_BEAM_HEIGHT - BEAM_HEIGHT; // 非落地玻璃的高度
const NON_FLOOR_TO_CEILING_GLASS_POSITION_Y =
  TALL_GRADE_BEAM_HEIGHT + NON_FLOOR_TO_CEILING_GLASS_HEIGHT / 2; // 非落地玻璃的y位置
const ALUMINIUM_ALLOY_FRAME_HEIGHT = 0.1; // 玻璃铝合金包边高度
const ALUMINIUM_ALLOY_FRAME_THICKNESS = 0.12; // 玻璃铝合金包边厚度
const PASS_EDGE_BINDING_HEIGHT = 0.1; // 垭口包边高度
const PASS_EDGE_BINDING_THICKNESS = 0.02; // 垭口包边厚度
// 地板参数
const TILE_SIZE = 1.5; // 1.5m的地砖
const GAP_SIZE = 0.005; // 5mm的缝隙
const FLOOR_WIDTH = 36; // 地板总宽度
const FLOOR_DEPTH = 26.2; // 地板总深度

const WALL_1_WIDTH = 11;
const WALL_1_POSITION_Y = WALL_HEIGHT / 2;
export const WALL_1_POSITION_Z = -12.9;
export const WALL_2_WIDTH = 0.6;
export const WALL_2_POSITION_X = -13.5;
const WALL_2_POSITION_Z =
  WALL_1_POSITION_Z + WALL_THICKNESS / 2 + WALL_2_WIDTH / 2;
export const WALL_1_POSITION_X =
  WALL_2_POSITION_X - WALL_THICKNESS / 2 + WALL_1_WIDTH / 2;
const WALL_3_WIDTH = 3.6;
export const WALL_3_POSITION_Z =
  WALL_2_POSITION_Z + WALL_2_WIDTH / 2 + WALL_3_WIDTH / 2;
const WALL_5_POSITION_Z =
  WALL_3_POSITION_Z + WALL_3_WIDTH / 2 + WALL_2_WIDTH / 2;
const WALL_6_WIDTH = 3.2;
const WALL_6_POSITION_Z =
  WALL_5_POSITION_Z + WALL_2_WIDTH / 2 + WALL_6_WIDTH / 2;
export const WALL_7_WIDTH = 1.4;
const WALL_7_POSITION_X =
  WALL_2_POSITION_X + WALL_THICKNESS / 2 + WALL_7_WIDTH / 2;
const WALL_7_POSITION_Z =
  WALL_5_POSITION_Z + WALL_2_WIDTH / 2 + WALL_THICKNESS / 2;
const WALL_8_POSITION_X =
  WALL_7_POSITION_X + WALL_7_WIDTH / 2 + WALL_THICKNESS / 2;
export const WALL_9_POSITION_Z =
  WALL_6_POSITION_Z + WALL_6_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_10_WIDTH = 10.5;
export const WALL_10_POSITION_X =
  WALL_8_POSITION_X + WALL_THICKNESS / 2 + WALL_10_WIDTH / 2;
export const WALL_10_POSITION_Z =
  WALL_7_POSITION_Z - WALL_THICKNESS / 2 + WALL_6_WIDTH / 2 + 0.2;
const WALL_11_WIDTH = 0.2;
export const WALL_11_POSITION_X =
  WALL_10_POSITION_X + WALL_10_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_11_POSITION_Z =
  WALL_10_POSITION_Z - WALL_THICKNESS / 2 - WALL_11_WIDTH / 2;
const WALL_12_WIDTH = 1.2;
const WALL_12_POSITION_X =
  WALL_1_POSITION_X + WALL_1_WIDTH / 2 + WALL_12_WIDTH / 2;
const WALL_13_WIDTH = 2.6;
export const WALL_13_POSITION_X =
  WALL_1_POSITION_X + WALL_1_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_13_POSITION_Z =
  WALL_1_POSITION_Z + WALL_THICKNESS / 2 + WALL_13_WIDTH / 2;
export const WALL_14_WIDTH = 1.6;
export const WALL_14_POSITION_Z =
  WALL_13_POSITION_Z + WALL_13_WIDTH / 2 + WALL_14_WIDTH / 2;
export const WALL_15_WIDTH = 1;
export const WALL_15_POSITION_X =
  WALL_12_POSITION_X + WALL_12_WIDTH / 2 + WALL_15_WIDTH / 2;
const WALL_17_WIDTH = 1.3;
const WALL_17_POSITION_X =
  WALL_15_POSITION_X + WALL_15_WIDTH / 2 + WALL_17_WIDTH / 2;
const WALL_18_POSITION_X =
  WALL_17_POSITION_X + WALL_17_WIDTH / 2 + WALL_12_WIDTH / 2;
const WALL_19_WIDTH = WALL_13_WIDTH + WALL_14_WIDTH;
const WALL_19_POSITION_X =
  WALL_17_POSITION_X + WALL_17_WIDTH / 2 - WALL_THICKNESS / 2;
export const WALL_19_POSITION_Z =
  WALL_1_POSITION_Z + WALL_THICKNESS / 2 + WALL_19_WIDTH / 2;
export const WALL_20_WIDTH = WALL_12_WIDTH + WALL_15_WIDTH + WALL_17_WIDTH;
export const WALL_20_POSITION_X =
  WALL_13_POSITION_X + WALL_20_WIDTH / 2 - WALL_THICKNESS / 2;
export const WALL_20_POSITION_Z =
  WALL_19_POSITION_Z + WALL_THICKNESS / 2 + WALL_19_WIDTH / 2;
const WALL_21_WIDTH = 0.2;
const WALL_21_POSITION_Z =
  WALL_20_POSITION_Z + WALL_THICKNESS / 2 + WALL_21_WIDTH / 2;
export const WALL_22_WIDTH =
  WALL_10_POSITION_Z -
  WALL_1_POSITION_Z -
  WALL_19_WIDTH -
  WALL_THICKNESS * 2 -
  WALL_21_WIDTH -
  WALL_11_WIDTH;
export const WALL_22_POSITION_Z =
  WALL_21_POSITION_Z + WALL_21_WIDTH / 2 + WALL_22_WIDTH / 2;
export const WALL_23_WIDTH = 1.9;
export const WALL_23_POSITION_X =
  WALL_20_POSITION_X + WALL_20_WIDTH / 2 + WALL_23_WIDTH / 2;
export const WALL_24_POSITION_X =
  WALL_23_POSITION_X + WALL_23_WIDTH / 2 + WALL_14_WIDTH / 2;
export const WALL_25_POSITION_X =
  WALL_18_POSITION_X + WALL_12_WIDTH / 2 + WALL_15_WIDTH / 2;
const WALL_27_POSITION_X =
  WALL_25_POSITION_X + WALL_15_WIDTH / 2 + WALL_17_WIDTH / 2;
export const WALL_28_POSITION_X =
  WALL_27_POSITION_X + WALL_17_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_29_WIDTH =
  WALL_20_WIDTH + WALL_THICKNESS - WALL_23_WIDTH - WALL_14_WIDTH;
const WALL_29_POSITION_X =
  WALL_24_POSITION_X + WALL_14_WIDTH / 2 + WALL_29_WIDTH / 2;
const WALL_33_WIDTH = 8.8;
export const WALL_33_POSITION_X =
  WALL_27_POSITION_X + WALL_17_WIDTH / 2 + WALL_33_WIDTH / 2;
export const WALL_34_POSITION_X = WALL_33_POSITION_X - WALL_THICKNESS;
export const WALL_35_POSITION_X =
  WALL_33_POSITION_X + WALL_33_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_36_WIDTH =
  WALL_10_POSITION_Z - WALL_1_POSITION_Z - WALL_2_WIDTH * 2 - WALL_6_WIDTH;
export const WALL_36_POSITION_Z =
  WALL_2_POSITION_Z + WALL_2_WIDTH / 2 + WALL_36_WIDTH / 2;
const WALL_38_WIDTH = WALL_2_WIDTH + WALL_6_WIDTH;
const WALL_38_POSITION_Z =
  WALL_36_POSITION_Z + WALL_36_WIDTH / 2 + WALL_38_WIDTH / 2;
const WALL_39_WIDTH = WALL_6_WIDTH - WALL_THICKNESS;
const WALL_39_POSITION_X = WALL_35_POSITION_X - WALL_THICKNESS - WALL_7_WIDTH;
export const WALL_40_POSITION_Z = WALL_10_POSITION_Z - WALL_39_WIDTH;
const WALL_40_POSITION_X =
  WALL_35_POSITION_X - WALL_THICKNESS / 2 - WALL_7_WIDTH / 2;
const WALL_39_POSITION_Z =
  WALL_40_POSITION_Z - WALL_THICKNESS / 2 + WALL_39_WIDTH / 2;
const WALL_41_POSITION_Z =
  WALL_10_POSITION_Z + WALL_THICKNESS / 2 + WALL_2_WIDTH / 2;
export const WALL_42_WIDTH = 5;
export const WALL_42_POSITION_Z =
  WALL_41_POSITION_Z + WALL_2_WIDTH / 2 + WALL_42_WIDTH / 2;
const WALL_44_POSITION_Z =
  WALL_42_POSITION_Z + WALL_42_WIDTH / 2 + WALL_2_WIDTH / 2;
const WALL_45_WIDTH = 1.6;
const WALL_45_POSITION_Z =
  WALL_6_POSITION_Z + WALL_39_WIDTH / 2 + WALL_45_WIDTH / 2;
const WALL_46_WIDTH = 8.2;
export const WALL_46_POSITION_Z =
  WALL_45_POSITION_Z + WALL_45_WIDTH / 2 + WALL_46_WIDTH / 2;
const WALL_48_POSITION_Z =
  WALL_46_POSITION_Z + WALL_46_WIDTH / 2 + WALL_45_WIDTH / 2;
const WALL_49_POSITION_X =
  WALL_2_POSITION_X - WALL_THICKNESS / 2 + WALL_7_WIDTH / 2;
export const WALL_49_POSITION_Z =
  WALL_48_POSITION_Z + WALL_45_WIDTH / 2 + WALL_THICKNESS / 2;
const WALL_50_POSITION_X =
  WALL_49_POSITION_X + WALL_7_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_50_POSITION_Z =
  WALL_49_POSITION_Z + WALL_THICKNESS / 2 + WALL_7_WIDTH / 2;
export const WALL_51_WIDTH = 6.9;
const WALL_51_POSITION_X =
  WALL_50_POSITION_X + WALL_THICKNESS / 2 + WALL_51_WIDTH / 2;
export const WALL_51_POSITION_Z =
  WALL_50_POSITION_Z + WALL_7_WIDTH / 2 - WALL_THICKNESS / 2;
export const WALL_52_POSITION_X =
  WALL_50_POSITION_X + WALL_THICKNESS / 2 + WALL_7_WIDTH;
const WALL_52_POSITION_Z =
  WALL_51_POSITION_Z - WALL_THICKNESS / 2 - WALL_7_WIDTH / 2;
export const WALL_53_WIDTH = 3.5;
export const WALL_53_POSITION_Z =
  WALL_52_POSITION_Z - WALL_7_WIDTH / 2 - WALL_53_WIDTH / 2;
const WALL_54_POSITION_Z =
  WALL_53_POSITION_Z - WALL_53_WIDTH / 2 - WALL_2_WIDTH / 2;
export const WALL_55_POSITION_X =
  WALL_52_POSITION_X - WALL_THICKNESS / 2 + WALL_51_WIDTH / 2;
export const WALL_55_POSITION_Z =
  WALL_54_POSITION_Z - WALL_2_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_56_POSITION_X = WALL_52_POSITION_X + WALL_7_WIDTH - WALL_THICKNESS;
const WALL_56_POSITION_Z =
  WALL_55_POSITION_Z - WALL_THICKNESS / 2 - WALL_2_WIDTH / 2;
const WALL_57_POSITION_Z =
  WALL_10_POSITION_Z + WALL_THICKNESS / 2 + WALL_7_WIDTH / 2;
const WALL_58_WIDTH =
  WALL_56_POSITION_Z - WALL_2_WIDTH / 2 - WALL_57_POSITION_Z - WALL_7_WIDTH / 2;
export const WALL_58_POSITION_Z =
  WALL_57_POSITION_Z + WALL_7_WIDTH / 2 + WALL_58_WIDTH / 2;
const WALL_59_WIDTH =
  WALL_51_POSITION_Z - WALL_55_POSITION_Z - WALL_THICKNESS * 2;
const WALL_59_POSITION_X =
  WALL_51_POSITION_X + WALL_51_WIDTH / 2 + WALL_THICKNESS / 2;
const WALL_60_WIDTH = WALL_59_WIDTH + WALL_THICKNESS;
const WALL_60_POSITION_X =
  WALL_59_POSITION_X - WALL_THICKNESS / 2 + WALL_60_WIDTH / 2;
const WALL_60_POSITION_Z =
  WALL_51_POSITION_Z + WALL_59_WIDTH / 2 + WALL_THICKNESS / 2;
const WALL_61_POSITION_Z =
  WALL_51_POSITION_Z - WALL_59_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_62_POSITION_X =
  WALL_60_POSITION_X + WALL_60_WIDTH / 2 - WALL_THICKNESS / 2;
export const WALL_63_POSITION_X =
  WALL_55_POSITION_X + WALL_51_WIDTH / 2 + WALL_22_WIDTH / 2;
const WALL_64_WIDTH = WALL_60_WIDTH / 2;
const WALL_64_POSITION_X =
  WALL_63_POSITION_X + WALL_22_WIDTH / 2 + WALL_64_WIDTH / 2;
const WALL_65_WIDTH = WALL_61_POSITION_Z - WALL_55_POSITION_Z - WALL_THICKNESS;
const WALL_65_POSITION_X =
  WALL_64_POSITION_X - WALL_64_WIDTH / 2 + WALL_2_WIDTH;
const WALL_65_POSITION_Z =
  WALL_61_POSITION_Z - WALL_THICKNESS / 2 - WALL_65_WIDTH / 2;
const WALL_66_POSITION_X =
  WALL_64_POSITION_X + WALL_64_WIDTH / 2 + WALL_THICKNESS / 2;
const WALL_66_POSITION_Z =
  WALL_55_POSITION_Z - WALL_THICKNESS / 2 + WALL_7_WIDTH / 2;
const WALL_67_WIDTH = 0.2;
const WALL_67_POSITION_X =
  WALL_66_POSITION_X + WALL_THICKNESS / 2 + WALL_67_WIDTH / 2;
export const WALL_67_POSITION_Z =
  WALL_66_POSITION_Z + WALL_7_WIDTH / 2 - WALL_THICKNESS - 0.2;
const WALL_68_WIDTH = WALL_7_WIDTH - WALL_THICKNESS;
const WALL_68_POSITION_X =
  WALL_28_POSITION_X - (WALL_THICKNESS * 3) / 2 - WALL_68_WIDTH / 2;
const WALL_69_WIDTH =
  WALL_68_POSITION_X -
  WALL_68_WIDTH / 2 -
  WALL_67_POSITION_X -
  WALL_67_WIDTH / 2;
const WALL_69_POSITION_X =
  WALL_67_POSITION_X + WALL_67_WIDTH / 2 + WALL_69_WIDTH / 2;
export const WALL_70_WIDTH = WALL_7_WIDTH + WALL_THICKNESS;
const WALL_70_POSITION_X =
  WALL_68_POSITION_X + WALL_68_WIDTH / 2 + WALL_70_WIDTH / 2;
const WALL_71_WIDTH = WALL_61_POSITION_Z - WALL_67_POSITION_Z - WALL_THICKNESS;
const WALL_71_POSITION_X =
  WALL_70_POSITION_X + WALL_70_WIDTH / 2 - WALL_THICKNESS / 2;
const WALL_71_POSITION_Z =
  WALL_67_POSITION_Z + WALL_THICKNESS / 2 + WALL_71_WIDTH / 2;
const WALL_72_WIDTH =
  WALL_67_POSITION_Z -
  WALL_44_POSITION_Z -
  WALL_2_WIDTH / 2 -
  WALL_THICKNESS / 2;
export const WALL_72_POSITION_X =
  WALL_68_POSITION_X + WALL_68_WIDTH / 2 + WALL_THICKNESS / 2;
export const WALL_72_POSITION_Z =
  WALL_67_POSITION_Z - WALL_THICKNESS / 2 - WALL_72_WIDTH / 2;
export const WALL_73_POSITION_X =
  WALL_72_POSITION_X + WALL_THICKNESS / 2 + WALL_70_WIDTH / 2;
export const WALL_73_POSITION_Z =
  WALL_72_POSITION_Z - WALL_72_WIDTH / 2 + WALL_THICKNESS / 2;
const WALL_74_POSITION_X =
  WALL_35_POSITION_X + WALL_THICKNESS / 2 - WALL_70_WIDTH / 2;
const WALL_75_WIDTH =
  WALL_74_POSITION_X -
  WALL_70_WIDTH / 2 -
  WALL_73_POSITION_X -
  WALL_70_WIDTH / 2;
export const WALL_75_POSITION_X =
  WALL_73_POSITION_X + WALL_70_WIDTH / 2 + WALL_75_WIDTH / 2;
const WALL_76_WIDTH = 1.4;
const WALL_76_POSITION_Z =
  WALL_73_POSITION_Z + WALL_THICKNESS / 2 + WALL_76_WIDTH / 2;
const WALL_77_POSITION_Z =
  WALL_76_POSITION_Z + WALL_76_WIDTH / 2 + WALL_15_WIDTH / 2;
const WALL_79_WIDTH =
  WALL_71_POSITION_Z +
  WALL_71_WIDTH / 2 -
  WALL_77_POSITION_Z -
  WALL_15_WIDTH / 2;
const WALL_79_POSITION_Z =
  WALL_77_POSITION_Z + WALL_15_WIDTH / 2 + WALL_79_WIDTH / 2;
const WALL_80_WIDTH = WALL_35_POSITION_X - WALL_71_POSITION_X + WALL_THICKNESS;
const WALL_80_POSITION_X =
  WALL_71_POSITION_X - WALL_THICKNESS / 2 + WALL_80_WIDTH / 2;
const WALL_80_POSITION_Z =
  WALL_71_POSITION_Z + WALL_71_WIDTH / 2 + WALL_THICKNESS / 2;
console.log(444444444, WALL_35_POSITION_X, WALL_60_POSITION_Z);

// 所有墙体的尺寸和位置
const wallList: (
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      SkirtingLineType | undefined,
    ]
  | number[]
)[] = [
  [
    WALL_1_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_1_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_1_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_2_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_2_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    TALL_GRADE_BEAM_HEIGHT,
    WALL_3_WIDTH,
    WALL_2_POSITION_X,
    TALL_GRADE_BEAM_POSITION_Y,
    WALL_3_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_3_WIDTH,
    WALL_2_POSITION_X,
    BEAM_POSITION_Y,
    WALL_3_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_2_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_5_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_6_WIDTH,
    WALL_2_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_6_POSITION_Z,
    "front",
  ],
  [
    WALL_7_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_7_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_7_POSITION_Z,
    "front",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_6_WIDTH,
    WALL_8_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_6_POSITION_Z,
    "all",
  ],
  [
    WALL_7_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_7_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_9_POSITION_Z,
    "back",
  ],
  [
    WALL_10_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_10_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_10_POSITION_Z,
    "all",
  ],
  // #11
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_11_WIDTH,
    WALL_11_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_11_POSITION_Z,
    "all",
  ],
  [
    WALL_12_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_12_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_1_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_13_WIDTH,
    WALL_13_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_13_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_14_WIDTH,
    WALL_13_POSITION_X,
    BEAM_POSITION_Y,
    WALL_14_POSITION_Z,
  ],
  [
    WALL_15_WIDTH,
    TALL_GRADE_BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_15_POSITION_X,
    TALL_GRADE_BEAM_POSITION_Y,
    WALL_1_POSITION_Z,
    "double",
  ],
  [
    WALL_15_WIDTH,
    BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_15_POSITION_X,
    BEAM_POSITION_Y,
    WALL_1_POSITION_Z,
  ],
  [
    WALL_17_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_17_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_1_POSITION_Z,
    "double",
  ],
  [
    WALL_12_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_18_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_1_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_19_WIDTH,
    WALL_19_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_19_POSITION_Z,
    "double",
  ],
  [
    WALL_20_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_20_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_20_POSITION_Z,
    "all",
  ],
  // #21
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_21_WIDTH,
    WALL_11_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_21_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_22_WIDTH,
    WALL_11_POSITION_X,
    BEAM_POSITION_Y,
    WALL_22_POSITION_Z,
  ],
  [
    WALL_23_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_23_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_20_POSITION_Z,
    "all",
  ],
  [
    WALL_14_WIDTH,
    BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_24_POSITION_X,
    BEAM_POSITION_Y,
    WALL_20_POSITION_Z,
  ],
  [
    WALL_15_WIDTH,
    TALL_GRADE_BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_25_POSITION_X,
    TALL_GRADE_BEAM_POSITION_Y,
    WALL_1_POSITION_Z,
    "double",
  ],
  [
    WALL_15_WIDTH,
    BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_25_POSITION_X,
    BEAM_POSITION_Y,
    WALL_1_POSITION_Z,
  ],
  [
    WALL_17_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_27_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_1_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_19_WIDTH,
    WALL_28_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_19_POSITION_Z,
    "double",
  ],
  [
    WALL_29_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_29_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_20_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_21_WIDTH,
    WALL_28_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_21_POSITION_Z,
    "all",
  ],
  // #31
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_22_WIDTH,
    WALL_28_POSITION_X,
    BEAM_POSITION_Y,
    WALL_22_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_11_WIDTH,
    WALL_28_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_11_POSITION_Z,
    "all",
  ],
  [
    WALL_33_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_33_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_1_POSITION_Z,
    "all",
  ],
  [
    WALL_33_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_34_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_10_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_35_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_2_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    TALL_GRADE_BEAM_HEIGHT,
    WALL_36_WIDTH,
    WALL_35_POSITION_X,
    TALL_GRADE_BEAM_POSITION_Y,
    WALL_36_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_36_WIDTH,
    WALL_35_POSITION_X,
    BEAM_POSITION_Y,
    WALL_36_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_38_WIDTH,
    WALL_35_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_38_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_39_WIDTH,
    WALL_39_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_39_POSITION_Z,
    "all",
  ],
  [
    WALL_7_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_40_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_40_POSITION_Z,
    "front",
  ],
  // #41
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_35_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_41_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    SHORT_GRADE_BEAM_HEIGHT,
    WALL_42_WIDTH,
    WALL_35_POSITION_X,
    SHORT_GRADE_BEAM_POSITION_Y,
    WALL_42_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_42_WIDTH,
    WALL_35_POSITION_X,
    BEAM_POSITION_Y,
    WALL_42_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_35_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_44_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_45_WIDTH,
    WALL_2_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_45_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    SHORT_GRADE_BEAM_HEIGHT,
    WALL_46_WIDTH,
    WALL_2_POSITION_X,
    SHORT_GRADE_BEAM_POSITION_Y,
    WALL_46_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_46_WIDTH,
    WALL_2_POSITION_X,
    BEAM_POSITION_Y,
    WALL_46_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_45_WIDTH,
    WALL_2_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_48_POSITION_Z,
    "double",
  ],
  [
    WALL_7_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_49_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_49_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_7_WIDTH,
    WALL_50_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_50_POSITION_Z,
    "all",
  ],
  // #51
  [
    WALL_51_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_51_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_51_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_7_WIDTH,
    WALL_52_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_52_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_53_WIDTH,
    WALL_52_POSITION_X,
    BEAM_POSITION_Y,
    WALL_53_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_52_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_54_POSITION_Z,
    "all",
  ],
  [
    WALL_51_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_55_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_55_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_2_WIDTH,
    WALL_56_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_56_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_7_WIDTH,
    WALL_56_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_57_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_58_WIDTH,
    WALL_56_POSITION_X,
    BEAM_POSITION_Y,
    WALL_58_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_59_WIDTH,
    WALL_59_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_51_POSITION_Z,
    "front",
  ],
  [
    WALL_60_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_60_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_60_POSITION_Z,
    "all",
  ],
  // #61
  [
    WALL_60_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_60_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_61_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_59_WIDTH,
    WALL_62_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_51_POSITION_Z,
    "back",
  ],
  [
    WALL_22_WIDTH,
    BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_63_POSITION_X,
    BEAM_POSITION_Y,
    WALL_55_POSITION_Z,
  ],
  [
    WALL_64_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_64_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_55_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_65_WIDTH,
    WALL_65_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_65_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_7_WIDTH,
    WALL_66_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_66_POSITION_Z,
    "all",
  ],
  [
    WALL_67_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_67_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_67_POSITION_Z,
    "all",
  ],
  [
    WALL_68_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_68_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_67_POSITION_Z,
    "all",
  ],
  [
    WALL_69_WIDTH,
    BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_69_POSITION_X,
    BEAM_POSITION_Y,
    WALL_67_POSITION_Z,
  ],
  [
    WALL_70_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_70_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_67_POSITION_Z,
    "all",
  ],
  // #71
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_71_WIDTH,
    WALL_71_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_71_POSITION_Z,
    "all",
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_72_WIDTH,
    WALL_72_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_72_POSITION_Z,
    "all",
  ],
  [
    WALL_70_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_73_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_73_POSITION_Z,
    "all",
  ],
  [
    WALL_70_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_74_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_73_POSITION_Z,
    "all",
  ],
  [
    WALL_75_WIDTH,
    BEAM_HEIGHT,
    WALL_THICKNESS,
    WALL_75_POSITION_X,
    BEAM_POSITION_Y,
    WALL_73_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_76_WIDTH,
    WALL_35_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_76_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    TALL_GRADE_BEAM_HEIGHT,
    WALL_15_WIDTH,
    WALL_35_POSITION_X,
    TALL_GRADE_BEAM_POSITION_Y,
    WALL_77_POSITION_Z,
    "double",
  ],
  [
    WALL_THICKNESS,
    BEAM_HEIGHT,
    WALL_15_WIDTH,
    WALL_35_POSITION_X,
    BEAM_POSITION_Y,
    WALL_77_POSITION_Z,
  ],
  [
    WALL_THICKNESS,
    WALL_HEIGHT,
    WALL_79_WIDTH,
    WALL_35_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_79_POSITION_Z,
    "double",
  ],
  [
    WALL_80_WIDTH,
    WALL_HEIGHT,
    WALL_THICKNESS,
    WALL_80_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_80_POSITION_Z,
    "all",
  ],
];
// 所有玻璃窗的尺寸和位置
const glassList = [
  // 主卧厕所玻璃窗
  [
    WALL_15_WIDTH,
    NON_FLOOR_TO_CEILING_GLASS_HEIGHT,
    GLASS_THICKNESS,
    WALL_15_POSITION_X,
    NON_FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_1_POSITION_Z,
  ],
  // 外厕所玻璃窗
  [
    WALL_15_WIDTH,
    NON_FLOOR_TO_CEILING_GLASS_HEIGHT,
    GLASS_THICKNESS,
    WALL_25_POSITION_X,
    NON_FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_1_POSITION_Z,
  ],
  // 儿童房玻璃窗
  [
    GLASS_THICKNESS,
    NON_FLOOR_TO_CEILING_GLASS_HEIGHT,
    WALL_36_WIDTH,
    WALL_35_POSITION_X,
    NON_FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_36_POSITION_Z,
  ],
  // 餐厅玻璃窗
  [
    GLASS_THICKNESS,
    FLOOR_TO_CEILING_GLASS_HEIGHT,
    WALL_42_WIDTH,
    WALL_35_POSITION_X,
    FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_42_POSITION_Z,
  ],
  // 厨房玻璃窗
  [
    GLASS_THICKNESS,
    NON_FLOOR_TO_CEILING_GLASS_HEIGHT,
    WALL_15_WIDTH,
    WALL_35_POSITION_X,
    NON_FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_77_POSITION_Z,
  ],
  // 主卧玻璃窗
  [
    GLASS_THICKNESS,
    NON_FLOOR_TO_CEILING_GLASS_HEIGHT,
    WALL_3_WIDTH,
    WALL_2_POSITION_X,
    NON_FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_3_POSITION_Z,
  ],
  // 客厅玻璃窗
  [
    GLASS_THICKNESS,
    FLOOR_TO_CEILING_GLASS_HEIGHT,
    WALL_46_WIDTH,
    WALL_2_POSITION_X,
    FLOOR_TO_CEILING_GLASS_POSITION_Y,
    WALL_46_POSITION_Z,
  ],
];
// 所有垭口包边的尺寸和位置
const passEdgeBindingList = [
  [
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    PASS_EDGE_BINDING_HEIGHT,
    WALL_58_WIDTH,
    WALL_56_POSITION_X,
    WALL_HEIGHT - BEAM_HEIGHT - PASS_EDGE_BINDING_HEIGHT / 2,
    WALL_58_POSITION_Z,
  ],
  [
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_HEIGHT - BEAM_HEIGHT,
    PASS_EDGE_BINDING_HEIGHT,
    WALL_56_POSITION_X,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    WALL_58_POSITION_Z - WALL_58_WIDTH / 2 + PASS_EDGE_BINDING_HEIGHT / 2,
  ],
  [
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_HEIGHT - BEAM_HEIGHT,
    PASS_EDGE_BINDING_HEIGHT,
    WALL_56_POSITION_X,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    WALL_58_POSITION_Z + WALL_58_WIDTH / 2 - PASS_EDGE_BINDING_HEIGHT / 2,
  ],
  [
    WALL_75_WIDTH,
    PASS_EDGE_BINDING_HEIGHT,
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_75_POSITION_X,
    WALL_HEIGHT - BEAM_HEIGHT - PASS_EDGE_BINDING_HEIGHT / 2,
    WALL_73_POSITION_Z,
  ],
  [
    PASS_EDGE_BINDING_HEIGHT,
    WALL_HEIGHT - BEAM_HEIGHT,
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_75_POSITION_X - WALL_75_WIDTH / 2 + PASS_EDGE_BINDING_HEIGHT / 2,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    WALL_73_POSITION_Z,
  ],
  [
    PASS_EDGE_BINDING_HEIGHT,
    WALL_HEIGHT - BEAM_HEIGHT,
    WALL_THICKNESS + PASS_EDGE_BINDING_THICKNESS * 2,
    WALL_75_POSITION_X + WALL_75_WIDTH / 2 - PASS_EDGE_BINDING_HEIGHT / 2,
    (WALL_HEIGHT - BEAM_HEIGHT) / 2,
    WALL_73_POSITION_Z,
  ],
];

const addHouseStructure = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  showWallLabel = false,
) => {
  // 创建并添加大理石地板
  addMarbleFloor(scene, assetManager);

  // 创建并添加所有墙体和玻璃窗
  addAllWall(
    scene,
    assetManager,
    mouseRaycasterIntersectObjectsRef,
    pointerControlsIntersetObjectsRef,
    showWallLabel,
  );

  // 创建并添加所有垭口包边
  addPassEdgeBinding(
    scene,
    assetManager,
    mouseRaycasterIntersectObjectsRef,
    pointerControlsIntersetObjectsRef,
  );
};

// 创建并添加所有的墙体和玻璃窗
const addAllWall = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  showWallLabel: boolean,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  // 墙体材质
  const wallMaterial = new MeshStandardMaterial({
    color: WALL_COLOR,
    roughness: 0.85, // 乳胶漆的粗糙度，有轻微漫反射
    metalness: 0, // 完全不反射金属光泽
    envMapIntensity: 0.3,
  });
  assetManager.materials.set("wallMaterial", wallMaterial);
  //  踢脚线材质
  const skirtingLineMaterial = new MeshStandardMaterial({
    color: SKIRTING_LINE_COLOR,
    metalness: 0.8, // 金属感
    roughness: 0.3, // 拉丝阳极氧化，别给到 0 否则变镜子
    envMapIntensity: 1.0, // 需要场景里有 envMap 才出反射
  });
  assetManager.materials.set("skirtingLineMaterial", skirtingLineMaterial);
  // 玻璃材质
  const glassMaterial = new MeshStandardMaterial({
    color: 0x87ceeb,
    transparent: true,
    opacity: 0.25,
    roughness: 0.1,
    metalness: 0.1,
    depthWrite: false, // 透明物体不写深度，避免遮挡后面的透明物体
  });
  assetManager.materials.set("glassMaterial", glassMaterial);

  // 使用InstancedMesh实例化渲染，提高性能
  const instancedMesh = new InstancedMesh(
    boxGeometry,
    wallMaterial,
    wallList.length,
  );
  instancedMesh.name = "墙体";
  // 将墙体加入鼠标射线检测是为了防止隔墙高亮了可交互的物体
  mouseRaycasterIntersectObjectsRef.current?.push(instancedMesh);
  pointerControlsIntersetObjectsRef.current?.push(instancedMesh);
  instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  instancedMesh.receiveShadow = true;
  instancedMesh.castShadow = true;

  // 添加所有的墙体
  const dummy = new Object3D();
  wallList.forEach(
    (
      item:
        | [
            number,
            number,
            number,
            number,
            number,
            number,
            SkirtingLineType | undefined,
          ]
        | number[],
      index: number,
    ) => {
      addWall(
        scene,
        assetManager,
        instancedMesh,
        dummy,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        item[5],
        index + 1,
        showWallLabel,
        item[6] as SkirtingLineType | undefined,
      );
    },
  );
  scene.add(instancedMesh);

  // 添加所有的玻璃窗
  glassList.forEach((item: number[]) => {
    addGlassWindow(
      scene,
      assetManager,
      mouseRaycasterIntersectObjectsRef,
      pointerControlsIntersetObjectsRef,
      item[0],
      item[1],
      item[2],
      item[3],
      item[4],
      item[5],
    );
  });
};

/**
 * 创建并添加墙体
 */
const addWall = (
  scene: Scene,
  assetManager: AssetManager,
  instancedMesh: InstancedMesh,
  dummy: Object3D,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  number: number,
  showWallLabel = false,
  skirtingLineType?: SkirtingLineType,
) => {
  dummy.scale.set(width, height, depth);
  dummy.position.set(x, y, z);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(number - 1, dummy.matrix);

  // 添加踢脚线
  if (skirtingLineType) {
    addSkirtingLine(scene, assetManager, dummy, skirtingLineType);
  }

  // 添加序号标签
  if (showWallLabel) {
    addWallLabel(scene, width, height, depth, x, y, z, number);
  }
};

// 创建并添加踢脚线
const addSkirtingLine = (
  scene: Scene,
  assetManager: AssetManager,
  dummy: Object3D,
  skirtingLineType: SkirtingLineType,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const skirtingLineMaterial = assetManager.materials.get(
    "skirtingLineMaterial",
  );
  const { x: width, y: height, z: depth } = dummy.scale;
  const { x, y, z } = dummy.position;
  if (width > depth) {
    // 横墙
    if (skirtingLineType === "front") {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(
        width,
        SKIRTING_LINE_HEIGHT,
        SKIRTING_LINE_THICKNESS,
      );
      frontSkirtingLine.position.set(
        x,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z - (depth + SKIRTING_LINE_THICKNESS) / 2,
      );
      scene.add(frontSkirtingLine);
    } else {
      const backSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      backSkirtingLine.scale.set(
        width,
        SKIRTING_LINE_HEIGHT,
        SKIRTING_LINE_THICKNESS,
      );
      backSkirtingLine.position.set(
        x,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z + (depth + SKIRTING_LINE_THICKNESS) / 2,
      );
      scene.add(backSkirtingLine);
    }
    if (["double", "all"].includes(skirtingLineType)) {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(
        width,
        SKIRTING_LINE_HEIGHT,
        SKIRTING_LINE_THICKNESS,
      );
      frontSkirtingLine.position.set(
        x,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z - (depth + SKIRTING_LINE_THICKNESS) / 2,
      );
      scene.add(frontSkirtingLine);
      if (skirtingLineType === "all") {
        const leftSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        leftSkirtingLine.scale.set(
          SKIRTING_LINE_THICKNESS,
          SKIRTING_LINE_HEIGHT,
          depth + SKIRTING_LINE_THICKNESS * 2,
        );
        leftSkirtingLine.position.set(
          x - (width + SKIRTING_LINE_THICKNESS) / 2,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z,
        );
        scene.add(leftSkirtingLine);
        const rightSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        rightSkirtingLine.scale.set(
          SKIRTING_LINE_THICKNESS,
          SKIRTING_LINE_HEIGHT,
          depth + SKIRTING_LINE_THICKNESS * 2,
        );
        rightSkirtingLine.position.set(
          x + (width + SKIRTING_LINE_THICKNESS) / 2,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z,
        );
        scene.add(rightSkirtingLine);
      }
    }
  } else {
    // 竖墙
    if (skirtingLineType === "front") {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(
        SKIRTING_LINE_THICKNESS,
        SKIRTING_LINE_HEIGHT,
        depth,
      );
      frontSkirtingLine.position.set(
        x - (width + SKIRTING_LINE_THICKNESS) / 2,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z,
      );
      scene.add(frontSkirtingLine);
    } else {
      const backSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      backSkirtingLine.scale.set(
        SKIRTING_LINE_THICKNESS,
        SKIRTING_LINE_HEIGHT,
        depth,
      );
      backSkirtingLine.position.set(
        x + (width + SKIRTING_LINE_THICKNESS) / 2,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z,
      );
      scene.add(backSkirtingLine);
    }
    if (["double", "all"].includes(skirtingLineType)) {
      const frontSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
      frontSkirtingLine.scale.set(
        SKIRTING_LINE_THICKNESS,
        SKIRTING_LINE_HEIGHT,
        depth,
      );
      frontSkirtingLine.position.set(
        x - (width + SKIRTING_LINE_THICKNESS) / 2,
        y - (height - SKIRTING_LINE_HEIGHT) / 2,
        z,
      );
      scene.add(frontSkirtingLine);
      if (skirtingLineType === "all") {
        const leftSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        leftSkirtingLine.scale.set(
          width + SKIRTING_LINE_THICKNESS * 2,
          SKIRTING_LINE_HEIGHT,
          SKIRTING_LINE_THICKNESS,
        );
        leftSkirtingLine.position.set(
          x,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z - (depth + SKIRTING_LINE_THICKNESS) / 2,
        );
        scene.add(leftSkirtingLine);
        const rightSkirtingLine = new Mesh(boxGeometry, skirtingLineMaterial);
        rightSkirtingLine.scale.set(
          width + SKIRTING_LINE_THICKNESS * 2,
          SKIRTING_LINE_HEIGHT,
          SKIRTING_LINE_THICKNESS,
        );
        rightSkirtingLine.position.set(
          x,
          y - (height - SKIRTING_LINE_HEIGHT) / 2,
          z + (depth + SKIRTING_LINE_THICKNESS) / 2,
        );
        scene.add(rightSkirtingLine);
      }
    }
  }
};

// 创建并添加墙体标签
const addWallLabel = (
  scene: Scene,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  number: number,
) => {
  // 创建canvas绘制文字
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = WALL_LABEL_COLOR; // 黄色
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(number.toString(), canvas.width / 2, canvas.height / 2);
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  const spriteMaterial = new SpriteMaterial({ map: texture });

  const labelSprite = new Sprite(spriteMaterial);
  if (width > depth) {
    // 横墙
    labelSprite.position.set(x, y + height / 2 + 0.2, z);
  } else {
    // 竖墙
    labelSprite.position.set(x, y + height / 2 + 0.2, z);
  }
  labelSprite.scale.set(WALL_LABEL_SIZE, WALL_LABEL_SIZE, WALL_LABEL_SIZE);
  scene.add(labelSprite);
};

/**
 * 创建并添加玻璃窗
 */
const addGlassWindow = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const glassMaterial = assetManager.materials.get("glassMaterial");
  const glassWindowGroup = new Group();
  glassWindowGroup.position.set(x, y, z);
  scene.add(glassWindowGroup);
  const glassWindow = new Mesh(boxGeometry, glassMaterial);
  glassWindow.name = "玻璃窗";
  glassWindow.scale.set(width, height, depth);
  // 将玻璃窗加入鼠标射线检测是为了防止隔玻璃高亮了可交互的物体
  mouseRaycasterIntersectObjectsRef.current?.push(glassWindow);
  pointerControlsIntersetObjectsRef.current?.push(glassWindow);
  glassWindowGroup.add(glassWindow);

  // 添加玻璃窗铝合金包边
  const aluminiumAlloyFrameMaterial = assetManager.materials.get(
    "aluminiumAlloyFrameMaterial",
  );
  const topAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  const bottomAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  const leftAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  const rightAluminiumAlloyFrame = new Mesh(
    boxGeometry,
    aluminiumAlloyFrameMaterial,
  );
  if (width > depth) {
    // 横向玻璃
    topAluminiumAlloyFrame.scale.set(
      width,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    bottomAluminiumAlloyFrame.scale.set(
      width,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    leftAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      height,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    leftAluminiumAlloyFrame.position.set(
      (ALUMINIUM_ALLOY_FRAME_HEIGHT - width) / 2,
      0,
      0,
    );
    rightAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      height,
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
    );
    rightAluminiumAlloyFrame.position.set(
      (width - ALUMINIUM_ALLOY_FRAME_HEIGHT) / 2,
      0,
      0,
    );
  } else {
    // 竖向玻璃
    topAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      depth,
    );
    bottomAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
      depth,
    );
    leftAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      height,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
    );
    leftAluminiumAlloyFrame.position.set(
      0,
      0,
      (depth - ALUMINIUM_ALLOY_FRAME_HEIGHT) / 2,
    );
    rightAluminiumAlloyFrame.scale.set(
      ALUMINIUM_ALLOY_FRAME_THICKNESS,
      height,
      ALUMINIUM_ALLOY_FRAME_HEIGHT,
    );
    rightAluminiumAlloyFrame.position.set(
      0,
      0,
      (ALUMINIUM_ALLOY_FRAME_HEIGHT - depth) / 2,
    );
  }
  topAluminiumAlloyFrame.position.set(
    0,
    (height - ALUMINIUM_ALLOY_FRAME_HEIGHT) / 2,
    0,
  );
  bottomAluminiumAlloyFrame.position.set(
    0,
    (ALUMINIUM_ALLOY_FRAME_HEIGHT - height) / 2,
    0,
  );
  glassWindowGroup.add(topAluminiumAlloyFrame);
  glassWindowGroup.add(bottomAluminiumAlloyFrame);
  glassWindowGroup.add(leftAluminiumAlloyFrame);
  glassWindowGroup.add(rightAluminiumAlloyFrame);
};

// 创建并添加大理石地板
const addMarbleFloor = (scene: Scene, assetManager: AssetManager) => {
  // 加载大理石地板贴图
  const textureLoader = new TextureLoader();
  const marbleBaseColor = textureLoader.load(marbleBaseColorImg);
  assetManager.textures.set("marbleBaseColor", marbleBaseColor);
  marbleBaseColor.colorSpace = SRGBColorSpace;
  const marbleNormal = textureLoader.load(marbleNormalImg);
  assetManager.textures.set("marbleNormal", marbleNormal);
  const marbleRoughness = textureLoader.load(marbleRoughnessImg);
  assetManager.textures.set("marbleRoughness", marbleRoughness);
  const marbleHeight = textureLoader.load(marbleHeightImg);
  assetManager.textures.set("marbleHeight", marbleHeight);

  // 设置贴图重复（每块砖一次完整贴图）
  [marbleBaseColor, marbleNormal, marbleRoughness, marbleHeight].forEach(
    (texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.needsUpdate = true;
      texture.repeat.set(1, 1);
    },
  );

  // 计算需要多少块砖
  const tilesX = Math.ceil(FLOOR_WIDTH / (TILE_SIZE + GAP_SIZE));
  const tilesZ = Math.ceil(FLOOR_DEPTH / (TILE_SIZE + GAP_SIZE));

  const planeGeometry = assetManager.geometries.get("planeGeometry");
  // 创建地砖材质
  const tileMaterial = new MeshPhysicalMaterial({
    map: marbleBaseColor,
    normalMap: marbleNormal,
    roughnessMap: marbleRoughness,
    displacementMap: marbleHeight,
    displacementScale: 0.05,
    roughness: 0.15, // 亮光砖，低粗糙度
    metalness: 0.1, // 轻微金属感
    clearcoat: 0.5, // 清漆层，增加光泽
    clearcoatRoughness: 0.1, // 清漆层粗糙度
    reflectivity: 0.8, // 反射率
    envMapIntensity: 1.2,
    side: DoubleSide,
  });
  assetManager.materials.set("tileMaterial", tileMaterial);

  // 使用InstancedMesh实例化渲染，提高性能
  const instancedMesh = new InstancedMesh(
    planeGeometry,
    tileMaterial,
    tilesX * tilesZ,
  );
  instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  instancedMesh.receiveShadow = true;

  // 生成每块地砖
  const dummy = new Object3D();
  dummy.scale.set(TILE_SIZE, TILE_SIZE);
  dummy.rotation.x = -Math.PI / 2;
  for (let x = 0; x < tilesX; x++) {
    for (let z = 0; z < tilesZ; z++) {
      // 计算地砖位置（从左上角开始）
      const posX =
        -FLOOR_WIDTH / 2 + x * (TILE_SIZE + GAP_SIZE) + TILE_SIZE / 2;
      const posZ =
        -FLOOR_DEPTH / 2 + z * (TILE_SIZE + GAP_SIZE) + TILE_SIZE / 2;
      dummy.position.set(posX, 0, posZ);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(z * tilesX + x, dummy.matrix);
    }
  }
  scene.add(instancedMesh);

  // 创建白色缝隙底板
  const gapFloorMaterial = new MeshStandardMaterial({
    color: 0xffffff, // 白色缝隙
    roughness: 0.8,
    metalness: 0,
  });
  assetManager.materials.set("gapFloorMaterial", gapFloorMaterial);
  const gapFloor = new Mesh(planeGeometry, gapFloorMaterial);
  gapFloor.scale.set(FLOOR_WIDTH, FLOOR_DEPTH);
  gapFloor.rotation.x = -Math.PI / 2;
  gapFloor.position.y = -0.001; // 略低于地砖，作为缝隙
  gapFloor.receiveShadow = true;
  scene.add(gapFloor);
};

// 创建并添加所有的垭口包边
const addPassEdgeBinding = (
  scene: Scene,
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: RefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: RefObject<Object3D[]>,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const skirtingLineMaterial = assetManager.materials.get(
    "skirtingLineMaterial",
  );

  passEdgeBindingList.forEach((item: number[]) => {
    const passEdgeBinding = new Mesh(boxGeometry, skirtingLineMaterial);
    passEdgeBinding.name = "垭口包边";
    passEdgeBinding.scale.set(item[0], item[1], item[2]);
    passEdgeBinding.position.set(item[3], item[4], item[5]);
    mouseRaycasterIntersectObjectsRef.current?.push(passEdgeBinding);
    pointerControlsIntersetObjectsRef.current?.push(passEdgeBinding);
    scene.add(passEdgeBinding);
  });
};

export default addHouseStructure;
