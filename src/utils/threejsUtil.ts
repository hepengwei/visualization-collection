import {
  Scene,
  WebGLRenderer,
  Object3D,
  Vector3,
  Mesh,
  BufferGeometry,
} from "three";
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
      },
    );
  });
};

/**
 * 经纬度坐标转球面坐标
 * @param {radius} 地球半径
 * @param {longitude} 经度(角度值)
 * @param {latitude} 纬度(角度值)
 */
export const lon2xyz = (
  radius: number,
  longitude: number,
  latitude: number,
): Vector3 => {
  let lon = (longitude * Math.PI) / 180; // 转弧度值
  const lat = (latitude * Math.PI) / 180; // 转弧度值
  lon = -lon; // js坐标系z坐标轴对应经度-90度，而不是90度

  // 经纬度坐标转球面坐标计算公式
  const x = radius * Math.cos(lat) * Math.cos(lon);
  const y = radius * Math.sin(lat);
  const z = radius * Math.cos(lat) * Math.sin(lon);

  // 返回球面坐标
  return new Vector3(x, y, z);
};

/**
 * @description: 销毁three.js场景中的所有GPU资源对象
 * @param {scene} Scene 销毁的物体
 * @param {renderer} WebGLRenderer 销毁的物体
 * @return {void}
 */
export const disposeThreeJsScene = (
  scene: Scene | null,
  renderer: WebGLRenderer | null,
) => {
  if (scene) {
    // 先收集所有对象，避免在遍历过程中修改树结构
    const objects: Object3D[] = [];
    scene.traverse((obj) => {
      objects.push(obj);
    });

    // 逐个销毁对象
    objects.forEach((obj) => {
      if ((obj as Mesh).isMesh) {
        const mesh = obj as Mesh;
        // Geometry
        (mesh.geometry as BufferGeometry)?.dispose();

        // Material(s)
        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];

        mats.forEach((mat) => {
          // Texture
          Object.values(mat).forEach((value) => {
            if (value && value.isTexture) {
              value.dispose();
            }
          });
          mat.dispose();
        });
      }
    });

    scene.clear();
  }

  renderer?.dispose();
  renderer?.forceContextLoss?.();
  renderer?.domElement?.remove();

  renderer = null;
  scene = null;
};
