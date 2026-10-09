/**
 * 装修厨房
 */
import { Scene, Group, Mesh } from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import {
  TILE_SIZE,
  GAP_SIZE,
  WALL_HEIGHT,
  TALL_GRADE_BEAM_HEIGHT,
  TALL_GRADE_BEAM_POSITION_Y,
  BEAM_HEIGHT,
  BEAM_POSITION_Y,
  WALL_THICKNESS,
  WALL_15_WIDTH,
  WALL_70_WIDTH,
  WALL_71_WIDTH,
  WALL_74_WIDTH,
  WALL_75_WIDTH,
  WALL_76_WIDTH,
  WALL_79_WIDTH,
  WALL_80_WIDTH,
  WALL_35_POSITION_X,
  WALL_71_POSITION_X,
  WALL_73_POSITION_X,
  WALL_74_POSITION_X,
  WALL_75_POSITION_X,
  WALL_80_POSITION_X,
  WALL_1_POSITION_Y,
  WALL_71_POSITION_Z,
  WALL_73_POSITION_Z,
  WALL_76_POSITION_Z,
  WALL_77_POSITION_Z,
  WALL_79_POSITION_Z,
  WALL_80_POSITION_Z,
} from "./addHouseStructure";

const TOP_KITCHEN_CABINET_DEPTH = 0.47; // 上方橱柜的总深度
const BOTTOM_KITCHEN_CABINET_DEPTH = 0.91; // 下方橱柜的总深度

const renovateKitchen = (scene: Scene, assetManager: AssetManager) => {
  addTile(scene, assetManager);
};

// 添加瓷砖
const addTile = (scene: Scene, assetManager: AssetManager) => {
  // 贴74号墙瓷砖
  const wallTile1 = createTileToWall(assetManager, WALL_74_WIDTH, WALL_HEIGHT);
  wallTile1.position.set(
    WALL_74_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + 0.001,
  );
  scene.add(wallTile1);
  // 贴76号墙瓷砖
  const x = WALL_35_POSITION_X - WALL_THICKNESS / 2 - 0.001;
  const wallTile2 = createTileToWall(assetManager, WALL_76_WIDTH, WALL_HEIGHT);
  wallTile2.position.set(x, WALL_1_POSITION_Y, WALL_76_POSITION_Z);
  wallTile2.rotation.y = Math.PI / 2;
  scene.add(wallTile2);
  // 贴77号墙瓷砖
  const wallTile3 = createTileToWall(
    assetManager,
    WALL_15_WIDTH,
    TALL_GRADE_BEAM_HEIGHT,
  );
  wallTile3.position.set(x, TALL_GRADE_BEAM_POSITION_Y, WALL_77_POSITION_Z);
  wallTile3.rotation.y = Math.PI / 2;
  scene.add(wallTile3);
  // 贴78号墙瓷砖
  const wallTile4 = createTileToWall(assetManager, WALL_15_WIDTH, BEAM_HEIGHT);
  wallTile4.position.set(x, BEAM_POSITION_Y, WALL_77_POSITION_Z);
  wallTile4.rotation.y = Math.PI / 2;
  scene.add(wallTile4);
  // 贴79号墙瓷砖
  const wallTile5 = createTileToWall(assetManager, WALL_79_WIDTH, WALL_HEIGHT);
  wallTile5.position.set(x, WALL_1_POSITION_Y, WALL_79_POSITION_Z);
  wallTile5.rotation.y = Math.PI / 2;
  scene.add(wallTile5);
  // 贴80号墙瓷砖
  const wallTile6 = createTileToWall(assetManager, WALL_80_WIDTH, WALL_HEIGHT);
  wallTile6.position.set(
    WALL_80_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_80_POSITION_Z - WALL_THICKNESS / 2 - 0.001,
  );
  wallTile6.rotation.y = Math.PI;
  scene.add(wallTile6);
  // 贴75号墙瓷砖
  const wallTile7 = createTileToWall(assetManager, WALL_75_WIDTH, BEAM_HEIGHT);
  wallTile7.position.set(
    WALL_75_POSITION_X,
    BEAM_POSITION_Y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + 0.001,
  );
  scene.add(wallTile7);
  // 贴73号墙瓷砖
  const wallTile8 = createTileToWall(assetManager, WALL_70_WIDTH, WALL_HEIGHT);
  wallTile8.position.set(
    WALL_73_POSITION_X,
    WALL_1_POSITION_Y,
    WALL_73_POSITION_Z + WALL_THICKNESS / 2 + 0.001,
  );
  scene.add(wallTile8);
  // 贴71号墙瓷砖
  const wallTile9 = createTileToWall(
    assetManager,
    WALL_71_WIDTH + WALL_THICKNESS,
    WALL_HEIGHT,
  );
  wallTile9.position.set(
    WALL_71_POSITION_X + WALL_THICKNESS / 2 + 0.001,
    WALL_1_POSITION_Y,
    WALL_71_POSITION_Z - WALL_THICKNESS / 2,
  );
  wallTile9.rotation.y = -Math.PI / 2;
  scene.add(wallTile9);
};

const createTileToWall = (
  assetManager: AssetManager,
  width: number,
  height: number,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const tileMaterial = assetManager.materials.get("tileMaterial");
  const wallTileGroup = new Group();
  const cols = Math.ceil(width / (TILE_SIZE + GAP_SIZE));
  const rows = Math.ceil(height / (TILE_SIZE + GAP_SIZE));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let tileWidth = TILE_SIZE;
      let tileHeight = TILE_SIZE;
      if (col >= cols - 1) {
        tileWidth = width % (TILE_SIZE + GAP_SIZE);
      }
      if (row >= rows - 1) {
        tileHeight = height % (TILE_SIZE + GAP_SIZE);
      }
      const tile = new Mesh(planeGeometry, tileMaterial);
      tile.scale.set(tileWidth, tileHeight);
      tile.position.set(
        -width / 2 + tileWidth / 2 + col * (TILE_SIZE + GAP_SIZE),
        height / 2 - (tileHeight / 2 + row * (TILE_SIZE + GAP_SIZE)),
        0,
      );
      tile.receiveShadow = true;
      wallTileGroup.add(tile);
    }
  }

  return wallTileGroup;
};

export default renovateKitchen;
