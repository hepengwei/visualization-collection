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

const addTVScreen = (scene: Scene) => {
  const video: HTMLVideoElement | null = document.getElementById(
    "tvVideo",
  ) as HTMLVideoElement;

  if (video) {
    safePlay(video);

    const tvSize = new Vector2(3.75, 2.1); // 电视屏幕的宽高
    const tvPos = new Vector3(-9.8, 2.2, 3.75); // 电视屏幕位置
    const videoTexture: any = new VideoTexture(video);
    videoTexture.colorSpace = SRGBColorSpace; // 关键：颜色不灰
    const tvScreen = createTVScreen(video, tvSize, tvPos, videoTexture);
    scene.add(tvScreen);
    const tvLight = createTVLight(tvSize, tvPos);
    scene.add(tvLight);
    const tvProjection = createTVProjection(tvPos, videoTexture);
    scene.add(tvProjection);
    scene.add(tvProjection.target);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") safePlay(video);
      else video.pause();
    });
  }
};

// 创建电视屏幕
const createTVScreen = (
  video: HTMLVideoElement,
  tvSize: Vector2,
  tvPos: Vector3,
  videoTexture: VideoTexture,
) => {
  const screenGeo = new PlaneGeometry(tvSize.x, tvSize.y);
  const screenMat = new MeshStandardMaterial({
    map: videoTexture,
    emissive: 0xffffff,
    emissiveMap: videoTexture,
    emissiveIntensity: 2 * Math.PI,
    side: FrontSide,
  });
  const tvScreen = new Mesh(screenGeo, screenMat);
  tvScreen.name = "电视屏幕";
  tvScreen.position.copy(tvPos);
  tvScreen.rotation.y = Math.PI; // 面向沙发
  tvScreen.layers.enable(1); // 为了让电视的光能够单独增强
  return tvScreen;
};

// 创建屏幕灯光（模拟电视光，照亮沙发和墙）
const createTVLight = (tvSize: Vector2, tvPos: Vector3) => {
  const tvLight = new RectAreaLight(
    0xffffff, // 颜色（可以随视频平均色动态改）
    1 * Math.PI, //  第二个参数intensity在v0.155版本后必须要乘以Math.PI
    tvSize.x,
    tvSize.y,
  );
  tvLight.position.set(tvPos.x, tvPos.y, tvPos.z + 0.05);
  return tvLight;
};

// 创建屏幕投影
const createTVProjection = (tvPos: Vector3, videoTexture: VideoTexture) => {
  const tvProjection = new SpotLight(
    0xffffff,
    4 * Math.PI, // 第二个参数intensity在v0.155版本后必须要乘以Math.PI
    15, // distance
    Math.PI / 3, // angle
    0.5, // penumbra（边缘柔化）
    1, // decay
  );

  // 关键：把视频贴到聚光灯上
  tvProjection.map = videoTexture;
  tvProjection.position.set(tvPos.x, tvPos.y, tvPos.z + 0.05);
  tvProjection.target.position.set(tvPos.x, 3, 3); // 打向地板
  return tvProjection;
};

const safePlay = (video: HTMLVideoElement | null) => {
  if (document.visibilityState !== "visible") return;
  const p = video?.play();
  if (p && p.catch) {
    p.catch(() => {
      /* 省电中断，忽略 */
    });
  }
};

export default addTVScreen;
