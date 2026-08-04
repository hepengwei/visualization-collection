/**
 * 添加电视屏幕，播放视频
 */
import {
  Scene,
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
} from "three";
import { safePlay } from "./utils";

let videoIsPlay = false;

export const addTVScreen = (scene: Scene, video: HTMLVideoElement | null) => {
  if (video) {
    safePlay(video);
    videoIsPlay = true;

    const tvSize = new Vector2(3.1, 1.75); // 电视屏幕的宽高
    const tvPos = new Vector3(-9.8, 1.95, 3.78); // 电视屏幕位置
    const videoTexture: any = new VideoTexture(video);
    videoTexture.colorSpace = SRGBColorSpace; // 关键：颜色不灰
    const tvScreen: Mesh = createTVScreen(tvSize, tvPos, videoTexture);
    scene.add(tvScreen);
    const tvLight = createTVLight(tvSize, tvPos);
    scene.add(tvLight);
    const tvProjection = createTVProjection(tvPos, videoTexture);
    scene.add(tvProjection);
    scene.add(tvProjection.target);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        if (videoIsPlay) {
          safePlay(video);
        }
      } else {
        video.pause();
      }
    });

    return tvScreen;
  }
  return null;
};

// 创建电视屏幕
const createTVScreen = (
  size: Vector2,
  pos: Vector3,
  videoTexture: VideoTexture,
) => {
  const screenGeo = new PlaneGeometry(size.x, size.y);
  const screenMat = new MeshStandardMaterial({
    map: videoTexture,
    emissive: 0xffffff,
    emissiveMap: videoTexture,
    emissiveIntensity: 2 * Math.PI,
    side: FrontSide,
  });
  const screen = new Mesh(screenGeo, screenMat);
  screen.name = "电视屏幕";
  screen.position.copy(pos);
  screen.rotation.y = Math.PI; // 面向沙发
  screen.layers.enable(1); // 为了让电视的光能够单独增强
  return screen;
};

// 创建电视屏幕光
const createTVLight = (size: Vector2, pos: Vector3) => {
  const light = new RectAreaLight(
    0xffffff, // 颜色（可以随视频平均色动态改）
    1.5 * Math.PI, //  第二个参数intensity在v0.155版本后必须要乘以Math.PI
    size.x - 0.2,
    size.y - 0.2,
  );
  light.position.set(pos.x, pos.y, pos.z + 0.05);
  return light;
};

// 创建电视屏幕投影
const createTVProjection = (pos: Vector3, videoTexture: VideoTexture) => {
  const projection = new SpotLight(
    0xffffff,
    3 * Math.PI, // 第二个参数intensity在v0.155版本后必须要乘以Math.PI
    15, // distance
    Math.PI / 8, // angle
    0.5, // penumbra（边缘柔化）
    1, // decay
  );

  // 关键：把视频贴到聚光灯上
  projection.map = videoTexture;
  projection.position.set(pos.x, pos.y, pos.z + 0.05);
  projection.target.position.set(pos.x, 2, 2); // 打向沙发
  return projection;
};

// 电视屏幕点击后的回调
export const onClickTVScreen = (video: HTMLVideoElement | null) => {
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
