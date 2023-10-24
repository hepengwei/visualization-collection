import { Vector3 } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./public/draco/gltf/");
dracoLoader.setDecoderConfig({ type: "js" });

export const loadGlb: (url: string) => Promise<GLTF> = (url) => {
  return new Promise((resolve, reject) => {
    var loader = new GLTFLoader();
    loader.setCrossOrigin("anonymous");
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      url,
      (gltf: GLTF) => {
        resolve(gltf);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};

/**
 * 经纬度坐标转球面坐标
 * @param  R 地球半径
 * @param longitude 经度(角度值)
 * @param latitude 纬度(角度值)
 */
export const lon2xyz = (
  R: number,
  longitude: number,
  latitude: number
): Vector3 => {
  let lon = (longitude * Math.PI) / 180; // 转弧度值
  const lat = (latitude * Math.PI) / 180; // 转弧度值
  lon = -lon; // js坐标系z坐标轴对应经度-90度，而不是90度

  // 经纬度坐标转球面坐标计算公式
  const x = R * Math.cos(lat) * Math.cos(lon);
  const y = R * Math.sin(lat);
  const z = R * Math.cos(lat) * Math.sin(lon);
  
  // 返回球面坐标
  return new Vector3(x, y, z);
};
