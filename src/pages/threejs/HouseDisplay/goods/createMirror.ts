/**
 * 创建镜子
 */
import { PlaneGeometry } from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { Reflector } from "three/examples/jsm/objects/Reflector";

const createMirror = (
  assetManager: AssetManager,
  width: number,
  height: number,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const mirror = new Reflector(planeGeometry as PlaneGeometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0xcccccc, // 镜子色调，偏灰白
  });
  mirror.scale.set(width, height);

  return mirror;
};

export default createMirror;
