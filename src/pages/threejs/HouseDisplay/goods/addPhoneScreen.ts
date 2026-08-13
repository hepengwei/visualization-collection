/**
 * 添加手机屏幕，播放视频
 */
import {
  VideoTexture,
  SRGBColorSpace,
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh,
  FrontSide,
  SpotLight,
  RectAreaLight,
  Vector2,
  Vector3,
  Group,
  Object3DEventMap,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { safePlay } from "../utils";

let phoneIsPlay = false;

export const addPhoneScreen = (
  phone: Group<Object3DEventMap>,
  assetManager: AssetManager,
  video: HTMLVideoElement | null,
) => {
  if (video) {
    safePlay(video);
    phoneIsPlay = true;

    const phoneSize = new Vector2(0.4, 0.8); // 手机屏幕的宽高
    const phonePos = new Vector3(0, 0, 0.04); // 手机屏幕相对手机的位置
    const videoTexture: any = new VideoTexture(video);
    videoTexture.colorSpace = SRGBColorSpace; // 关键：颜色不灰
    const phoneScreen: Mesh = createPhoneScreen(
      assetManager,
      phoneSize,
      phonePos,
      videoTexture,
    );
    phone.add(phoneScreen);
    const phoneLight = createPhoneLight(phoneSize, phonePos);
    phone.add(phoneLight);
    // const phoneProjection = createPhoneProjection(phonePos, videoTexture);
    // phone.add(phoneProjection);
    // phone.add(phoneProjection.target);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        if (phoneIsPlay) {
          safePlay(video);
        }
      } else {
        video.pause();
      }
    });

    return phoneScreen;
  }
  return null;
};

// 创建手机屏幕
const createPhoneScreen = (
  assetManager: AssetManager,
  size: Vector2,
  pos: Vector3,
  videoTexture: VideoTexture,
) => {
  let planeGeometry = assetManager.geometries.get("planeGeometry");
  if (!planeGeometry) {
    planeGeometry = new PlaneGeometry(1, 1);
    assetManager.geometries.set("planeGeometry", planeGeometry);
  }
  const phoneScreenMaterial = new MeshStandardMaterial({
    map: videoTexture,
    emissive: 0xffffff,
    emissiveMap: videoTexture,
    emissiveIntensity: 0.5 * Math.PI,
    side: FrontSide,
  });
  assetManager.materials.set("phoneScreenMaterial", phoneScreenMaterial);
  const screen = new Mesh(planeGeometry, phoneScreenMaterial);
  screen.name = "手机屏幕";
  screen.scale.set(size.x, size.y);
  screen.position.copy(pos);
  screen.layers.enable(1); // 为了让手机的光能够单独增强
  return screen;
};

// 创建手机屏幕光
const createPhoneLight = (size: Vector2, pos: Vector3) => {
  const light = new RectAreaLight(
    0xffffff, // 颜色（可以随视频平均色动态改）
    0.1 * Math.PI, //  第二个参数intensity在v0.155版本后必须要乘以Math.PI
    size.x - 0.02,
    size.y - 0.02,
  );
  light.position.set(pos.x, pos.y, pos.z + 0.02);
  light.rotation.x = Math.PI;
  return light;
};

// 创建手机屏幕投影
const createPhoneProjection = (pos: Vector3, videoTexture: VideoTexture) => {
  const projection = new SpotLight(
    0xffffff,
    0.5 * Math.PI, // 第二个参数intensity在v0.155版本后必须要乘以Math.PI
    5, // distance
    Math.PI / 18, // angle
    0.5, // penumbra（边缘柔化）
    1, // decay
  );

  // 关键：把视频贴到聚光灯上
  projection.map = videoTexture;
  projection.position.set(pos.x, pos.y, pos.z + 0.02);
  projection.target.position.set(pos.x, pos.y, 10); // 打向天花板
  return projection;
};

// 电视屏幕点击后的回调
export const onClickPhoneScreen = (video?: HTMLVideoElement | null) => {
  if (video) {
    if (video.paused) {
      video.play();
      phoneIsPlay = true;
    } else {
      video.pause();
      phoneIsPlay = false;
    }
  }
};
