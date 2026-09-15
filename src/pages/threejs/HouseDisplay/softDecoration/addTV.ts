/**
 * 添加电视(播放视频,可交互)
 */
import { MutableRefObject } from "react";
import {
  Scene,
  VideoTexture,
  SRGBColorSpace,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  Mesh,
  FrontSide,
  SpotLight,
  RectAreaLight,
  Vector3,
  Object3D,
  Group,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { safePlay, addBox } from "../utils";
import {
  WALL_THICKNESS,
  WALL_55_POSITION_X,
  WALL_55_POSITION_Z,
} from "../hardDecoration/addHouseStructure";

const TV_POSITION = new Vector3(
  WALL_55_POSITION_X + 0.46,
  1.5,
  WALL_55_POSITION_Z - WALL_THICKNESS / 2,
);
const TV_WIDTH = 2.28; // 电视的宽
const TV_HEIGHT = 1.28; // 电视的高
const TV_DEPTH = 0.2; // 电视的总深
const TV_THICKNESS = 0.04; // 电视的厚度
const TV_SCREEN_PANDDING = 0.04; // 电视屏幕相对电视框的内边距
const TRANSVERSE_PLATE_WIDTH = 0.3; // 电视横板的宽度
const TRANSVERSE_PLATE_HEIGHT = 0.04; // 电视横板的高度

let videoIsPlay = false;

export const addTV = (
  scene: Scene,
  assetManager: AssetManager,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  tvVideo?: HTMLVideoElement | null,
) => {
  const tv = createTV(assetManager, mouseRaycasterIntersectObjectsRef, tvVideo);
  tv.position.copy(TV_POSITION);
  tv.rotation.y = Math.PI;
  pointerControlsIntersetObjectsRef.current?.push(tv);
  scene.add(tv);
  if (tvVideo) {
    safePlay(tvVideo);
    videoIsPlay = true;

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        if (videoIsPlay) {
          safePlay(tvVideo);
        }
      } else {
        tvVideo.pause();
      }
    });
  }
};

// 创建电视
const createTV = (
  assetManager: AssetManager,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  tvVideo?: HTMLVideoElement | null,
) => {
  const boxGeometry = assetManager.geometries.get("boxGeometry");
  const tvBodyMaterial = new MeshPhysicalMaterial({
    color: 0x0a0a0c, // 近黑，不要纯 0x000000，否则没层次
    metalness: 0.0, // 塑料是非金属
    roughness: 0.55, // 0.45~0.7：现代电视背壳/边框常见半哑光
    clearcoat: 0.25, // 表面有一层很薄的清漆感
    clearcoatRoughness: 0.35, // 清漆层不那么镜面，避免像车漆
    envMapIntensity: 0.6, // 黑塑料反射要弱，别让环境太亮
    sheen: 0.0,
  });
  assetManager.materials.set("tvBodyMaterial", tvBodyMaterial);

  const tvGroup = new Group();
  addBox(
    tvGroup,
    assetManager,
    tvBodyMaterial,
    TV_WIDTH,
    TV_HEIGHT,
    TV_THICKNESS,
    0,
    0,
    TV_DEPTH - TV_THICKNESS / 2,
  );
  addBox(
    tvGroup,
    assetManager,
    tvBodyMaterial,
    TRANSVERSE_PLATE_WIDTH,
    TRANSVERSE_PLATE_HEIGHT,
    TV_DEPTH,
    0,
    -TV_HEIGHT / 2 - TRANSVERSE_PLATE_HEIGHT / 2,
    TV_DEPTH / 2,
  );

  if (tvVideo) {
    const videoTexture: any = new VideoTexture(tvVideo);
    videoTexture.colorSpace = SRGBColorSpace; // 关键：颜色不灰
    const tvScreen: Mesh = createTVScreen(assetManager, videoTexture);
    mouseRaycasterIntersectObjectsRef.current.push(tvScreen);
    tvGroup.add(tvScreen);
    const tvLight = createTVLight();
    tvGroup.add(tvLight);
    const tvProjection = createTVProjection(videoTexture);
    tvGroup.add(tvProjection);
    tvGroup.add(tvProjection.target);
  }

  return tvGroup;
};

// 创建电视屏幕
const createTVScreen = (
  assetManager: AssetManager,
  videoTexture: VideoTexture,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const tvScreenMaterial = new MeshStandardMaterial({
    map: videoTexture,
    emissive: 0xffffff,
    emissiveMap: videoTexture,
    emissiveIntensity: 2 * Math.PI,
    side: FrontSide,
  });
  assetManager.materials.set("tvScreenMaterial", tvScreenMaterial);
  const screen = new Mesh(planeGeometry, tvScreenMaterial);
  screen.name = "电视屏幕";
  screen.scale.set(
    TV_WIDTH - TV_SCREEN_PANDDING,
    TV_HEIGHT - TV_SCREEN_PANDDING,
  );
  screen.position.set(0, 0, TV_DEPTH + 0.01);
  screen.layers.enable(1); // 为了让电视的光能够单独增强
  return screen;
};

// 创建电视屏幕光
const createTVLight = () => {
  const light = new RectAreaLight(
    0xffffff, // 颜色（可以随视频平均色动态改）
    1.5 * Math.PI, //  第二个参数intensity在v0.155版本后必须要乘以Math.PI
    TV_WIDTH - TV_SCREEN_PANDDING,
    TV_HEIGHT - TV_SCREEN_PANDDING,
  );
  light.position.set(0, 0, TV_DEPTH + 0.03);
  light.rotation.x = Math.PI;
  return light;
};

// 创建电视屏幕投影
const createTVProjection = (videoTexture: VideoTexture) => {
  const projection = new SpotLight(
    0xffffff,
    3 * Math.PI, // 第二个参数intensity在v0.155版本后必须要乘以Math.PI
    10, // distance
    Math.PI / 8, // angle
    0.5, // penumbra（边缘柔化）
    1, // decay
  );

  // 关键：把视频贴到聚光灯上
  projection.map = videoTexture;
  projection.position.set(0, 0, TV_DEPTH + 0.03);
  projection.target.position.set(0, 0.2, TV_DEPTH + 10); // 打向前方
  return projection;
};

// 电视屏幕点击后的回调
export const onClickTVScreen = (video?: HTMLVideoElement | null) => {
  if (video) {
    if (video.paused) {
      video.play();
      videoIsPlay = true;
    } else {
      video.pause();
      videoIsPlay = false;
    }
  }
};
