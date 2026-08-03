/**
 * 加载并显示家具家电模型
 */
import { MutableRefObject } from "react";
import { Scene, Color, MeshPhysicalMaterial, DoubleSide, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { addTVScreen } from "./addTVScreen";

const add3dModel = (
  scene: Scene,
  video: HTMLVideoElement | null,
  tvScreenRef: MutableRefObject<Mesh | null>,
) => {
  const gltfLoader = new GLTFLoader();
  gltfLoader.setCrossOrigin("anonymous");

  // 加载电视墙
  loadTelevisionWall(scene, gltfLoader, video, tvScreenRef);

  // 加载沙发
  loadSofa(scene, gltfLoader);

  // 加载三个卧室的三个床
  loadBeds(scene, gltfLoader);
};

// 加载电视墙
const loadTelevisionWall = (
  scene: Scene,
  gltfLoader: GLTFLoader,
  video: HTMLVideoElement | null,
  tvScreenRef: MutableRefObject<Mesh | null>,
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

      // 放大模型，使其接近18号墙的尺寸（统一缩放保持比例）
      tvWall.scale.set(5, 5, 5);

      // 旋转电视墙，使正面朝向13号墙（朝北，即z负方向）
      tvWall.rotation.y = Math.PI;

      scene.add(tvWall);

      // 添加电视屏幕，播放视频
      const tvScreen: Mesh | null = addTVScreen(scene, video);
      if (tvScreen) {
        tvScreenRef.current = tvScreen;
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
      sofa.position.set(-10, 0.8, -4); // 贴近34号墙和13号墙的交角

      // 缩放沙发，调整到合适大小
      sofa.scale.set(6, 6, 6);

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
const loadBeds = (scene: Scene, gltfLoader: GLTFLoader) => {
  // 加载左上角房间的床
  gltfLoader.load(
    "./public/model/bed.glb",
    (gltf: GLTF) => {
      const bed = gltf.scene;

      bed.traverse((child: any) => {
        if (child.isMesh) {
          const clothMat = new MeshPhysicalMaterial({
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
          child.material = clothMat;
        }
      });

      // 设置床位置：放在左上角房间，床头靠着1号墙
      bed.position.set(-10.4, 1.2, -13); // 床头贴近1号墙，略往房间内侧

      // 缩放床，调整到合适大小
      bed.scale.set(6, 6, 6); // 统一缩放6倍

      // 旋转床，向左旋转90度
      bed.rotation.y = -Math.PI / 2; // 向左旋转90度

      // 遍历模型，设置阴影和被子颜色
      bed.traverse((child: Record<string, any>) => {
        if (child.isMesh) {
          child.name = "主卧床";
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(bed);
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

  // 加载右上角房间的床
  gltfLoader.load(
    "./public/model/bed.glb",
    (gltf: GLTF) => {
      const bed2 = gltf.scene;

      bed2.traverse((child: any) => {
        if (child.isMesh) {
          const clothMat = new MeshPhysicalMaterial({
            color: 0xc2c1c8, // 淡蓝色床
            roughness: 0.45, // 布料表面偏粗糙
            metalness: 0.0, // 布料几乎不金属
            side: DoubleSide, // 薄片必须双面
            // —— 布料灵魂参数 ——
            sheen: 1.0, // 边缘柔光强度 0~1
            sheenRoughness: 0.2, // 绒光粗糙度
            sheenColor: new Color(0xffffff),
            // 薄纱可加
            transmission: 0.0, // 0.1~0.3 做纱巾
          });
          child.material = clothMat;
        }
      });

      // 设置床位置：放在右上角房间，床头靠着42号墙
      bed2.position.set(11.8, 1.2, -13); // 床头贴近42号墙，略往房间内侧

      // 缩放床，调整到合适大小
      bed2.scale.set(6, 6, 6); // 统一缩放6倍

      // 旋转床，旋转-90度
      bed2.rotation.y = -Math.PI / 2; // 旋转-90度

      // 遍历模型，设置阴影和被子颜色
      bed2.traverse((child: Record<string, any>) => {
        if (child.isMesh) {
          child.name = "儿童床";
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(bed2);
    },
    (progress) => {
      console.log(
        "第二张床加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error) => {
      console.error("第二张床模型加载失败:", error);
    },
  );

  // 加载左下角房间的床
  gltfLoader.load(
    "./public/model/bed.glb",
    (gltf: GLTF) => {
      const bed3 = gltf.scene;

      // 设置床位置：放在左下角房间
      bed3.position.set(-10.5, 1.2, 10.1); // 床头贴近40号墙，略往房间内侧

      // 缩放床，调整到合适大小
      bed3.scale.set(6, 6, 6); // 统一缩放6倍

      // 旋转床，向右旋转90度
      bed3.rotation.y = Math.PI / 2; // 向右旋转90度

      // 遍历模型，设置阴影和被子颜色
      bed3.traverse((child: Record<string, any>) => {
        if (child.isMesh) {
          child.name = "次卧床";
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(bed3);
    },
    (progress: Record<string, any>) => {
      console.log(
        "第三张床加载进度:",
        ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
      );
    },
    (error: any) => {
      console.error("第三张床模型加载失败:", error);
    },
  );
};

export default add3dModel;
