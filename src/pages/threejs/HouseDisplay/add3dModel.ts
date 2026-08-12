/**
 * 加载并显示家具家电模型
 */
import { MutableRefObject } from "react";
import {
  Scene,
  Color,
  MeshPhysicalMaterial,
  DoubleSide,
  Mesh,
  Object3D,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { addTVScreen } from "./addTVScreen";
import { addPhoneScreen } from "./addPhoneScreen";

const add3dModel = (
  scene: Scene,
  assetManager: AssetManager,
  tvVideo: HTMLVideoElement | null,
  tvScreenRef: MutableRefObject<Mesh | null>,
  phoneVideo: HTMLVideoElement | null,
  phoneScreenRef: MutableRefObject<Mesh | null>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  const gltfLoader = new GLTFLoader();
  gltfLoader.setCrossOrigin("anonymous");

  // 加载电视墙
  loadTelevisionWall(
    scene,
    gltfLoader,
    assetManager,
    tvVideo,
    tvScreenRef,
    mouseRaycasterIntersectObjectsRef,
  );

  // 加载沙发
  loadSofa(scene, gltfLoader);

  // 加载三个卧室的三个床
  loadBeds(scene, gltfLoader, assetManager);

  // 加载餐桌
  loadTable(
    scene,
    gltfLoader,
    assetManager,
    phoneVideo,
    phoneScreenRef,
    mouseRaycasterIntersectObjectsRef,
  );
};

// 加载电视墙
const loadTelevisionWall = (
  scene: Scene,
  gltfLoader: GLTFLoader,
  assetManager: AssetManager,
  video: HTMLVideoElement | null,
  tvScreenRef: MutableRefObject<Mesh | null>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  gltfLoader.load(
    "./public/model/televisionWalls.glb",
    (gltf: GLTF) => {
      const tvWall = gltf.scene;

      // 遍历模型
      tvWall.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "电视墙";
        }
      });

      // 设置电视墙位置：靠近18号墙（z=4.8），在墙的中间位置
      // 18号墙: x=-9.8, z=4.8, 宽度8.4米，高度4米
      // 电视墙放在靠近18号墙内侧，正面朝向13号墙（z=-6.4方向，即朝北）
      tvWall.position.set(-9.8, 1.2, 3.9); // x为18号墙中心，z略靠内侧
      // 放大模型
      tvWall.scale.set(5, 5, 5);
      // 旋转电视墙
      tvWall.rotation.y = Math.PI;

      scene.add(tvWall);

      // 添加电视屏幕，播放视频
      const tvScreen: Mesh | null = addTVScreen(scene, assetManager, video);
      if (tvScreen) {
        tvScreenRef.current = tvScreen;
        mouseRaycasterIntersectObjectsRef.current.push(tvScreen);
      }
    },
    (progress) => {
      console.log(
        "电视墙加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error) => {
      console.error("电视墙模型加载失败:", error);
    },
  );
};

// 加载沙发
const loadSofa = (scene: Scene, gltfLoader: GLTFLoader) => {
  gltfLoader.load(
    "./public/model/sofa.glb",
    (gltf: GLTF) => {
      const sofa = gltf.scene;

      // 遍历模型，调整材质和阴影
      sofa.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "沙发";
          child.castShadow = true;
          child.receiveShadow = true;

          const sofaMat = new MeshPhysicalMaterial({
            color: 0xd3dce1, // 浅灰蓝色
            roughness: 0.75, // 布艺略糙，皮革可降到 0.3~0.5
            metalness: 0.0,

            // 移除 envMapIntensity，因为场景中没有环境贴图
            reflectivity: 0.1, // 微弱反射
            // 布艺沙发特有（可选）
            sheen: 0.4, // 边缘绒感
            sheenRoughness: 0.6,
            sheenColor: new Color(0xffffff),
            side: DoubleSide,
          });
          child.material = sofaMat;
        }
      });

      // 设置沙发位置：贴着13号墙和34号墙
      // 沙发放在两墙交角处，背靠34号墙，面向电视墙方向
      sofa.position.set(-10, 0.8, -4.2); // 贴近34号墙和13号墙的交角

      // 缩放沙发，调整到合适大小
      sofa.scale.set(5.6, 5.6, 5.6);

      // 旋转沙发，使其面向电视墙（朝向18号墙方向，即z正方向）
      sofa.rotation.y = 0; // 面向南方（z正方向）

      scene.add(sofa);
    },
    (progress) => {
      console.log(
        "沙发加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error) => {
      console.error("沙发模型加载失败:", error);
    },
  );
};

// 加载三个卧室的三个床
const loadBeds = (
  scene: Scene,
  gltfLoader: GLTFLoader,
  assetManager: AssetManager,
) => {
  const blueBedMaterial = new MeshPhysicalMaterial({
    color: 0xc2c1c8, // 淡蓝色床
    roughness: 0.85, // 布料表面偏粗糙
    metalness: 0.0, // 布料几乎不金属
    side: DoubleSide, // 薄片必须双面
    // —— 布料灵魂参数 ——
    sheen: 1.0, // 边缘柔光强度 0~1
    sheenRoughness: 0.6, // 绒光粗糙度
    sheenColor: new Color(0xffffff),
    // 薄纱可加
    transmission: 0.0, // 0.1~0.3 做纱巾
  });
  assetManager.materials.set("blueBedMaterial", blueBedMaterial);

  // 加载左上角房间的床
  gltfLoader.load(
    "./public/model/bed.glb",
    (gltf: GLTF) => {
      const bed1 = gltf.scene.clone();
      // 遍历模型，设置阴影和材质
      bed1.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "主卧床";
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = blueBedMaterial;
        }
      });
      // 设置床位置：放在左上角房间
      bed1.position.set(-10.4, 1.2, -13);
      // 缩放床，调整到合适大小
      bed1.scale.set(6, 6, 6);
      // 旋转床，向左旋转90度
      bed1.rotation.y = -Math.PI / 2;
      scene.add(bed1);

      const bed2 = gltf.scene.clone();
      // 遍历模型，设置阴影和材质
      bed2.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "儿童床";
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = blueBedMaterial;
        }
      });
      // 设置床位置：放在右上角房间
      bed2.position.set(11.8, 1.2, -13);
      // 缩放床，调整到合适大小
      bed2.scale.set(6, 6, 6);
      // 旋转床，旋转-90度
      bed2.rotation.y = -Math.PI / 2;
      scene.add(bed2);

      const bed3 = gltf.scene.clone();
      // 遍历模型，设置阴影和材质
      bed3.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "次卧床";
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      // 设置床位置：放在左下角房间
      bed3.position.set(-10.5, 1.2, 10.1);
      // 缩放床，调整到合适大小
      bed3.scale.set(6, 6, 6);
      // 旋转床，向右旋转90度
      bed3.rotation.y = Math.PI / 2; // 向右旋转90度
      scene.add(bed3);
    },
    (progress) => {
      console.log(
        "床加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error) => {
      console.error("床模型加载失败:", error);
    },
  );
};

// 加载餐桌
const loadTable = (
  scene: Scene,
  gltfLoader: GLTFLoader,
  assetManager: AssetManager,
  video: HTMLVideoElement | null,
  phoneScreenRef: MutableRefObject<Mesh | null>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  gltfLoader.load(
    "./public/model/table.glb",
    (gltf: GLTF) => {
      const table = gltf.scene;

      // 遍历模型，调整材质和阴影
      table.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "餐桌";
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // 设置餐桌位置
      table.position.set(11, 0.86, -1);
      // 缩放餐桌，调整到合适大小
      table.scale.set(5.6, 5.6, 5.6);
      scene.add(table);

      // 加载手机
      loadPhone(
        scene,
        gltfLoader,
        assetManager,
        video,
        phoneScreenRef,
        mouseRaycasterIntersectObjectsRef,
      );
    },
    (progress) => {
      console.log(
        "餐桌加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error) => {
      console.error("餐桌模型加载失败:", error);
    },
  );
};

// 加载手机
const loadPhone = (
  scene: Scene,
  gltfLoader: GLTFLoader,
  assetManager: AssetManager,
  video: HTMLVideoElement | null,
  phoneScreenRef: MutableRefObject<Mesh | null>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
) => {
  gltfLoader.load(
    "./public/model/phone.glb",
    (gltf: GLTF) => {
      const phone = gltf.scene;

      // 遍历模型，调整材质和阴影
      phone.traverse((child: any) => {
        if (child.isMesh) {
          child.name = "手机";
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // 设置手机位置
      phone.position.set(9.7, 1.43, -1.7);
      // 缩放手机，调整到合适大小
      phone.scale.set(0.4, 0.4, 0.4);
      // 旋转手机
      phone.rotation.x = -Math.PI / 2;
      phone.rotation.z = -(Math.PI * 3) / 4;

      scene.add(phone);

      // 添加手机屏幕，播放视频
      const phoneScreen: Mesh | null = addPhoneScreen(
        phone,
        assetManager,
        video,
      );
      if (phoneScreen) {
        phoneScreenRef.current = phoneScreen;
        mouseRaycasterIntersectObjectsRef.current.push(phoneScreen);
      }
    },
    (progress) => {
      console.log(
        "餐桌加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error) => {
      console.error("餐桌模型加载失败:", error);
    },
  );
};

export default add3dModel;
