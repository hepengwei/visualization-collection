import React, { useRef } from "react";
import { useIntl } from "react-intl";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useInitialize from "hooks/threejs/useInitialize";
import { loadGlb } from "utils/threejsUtil";
import styles from "./index.module.scss";

interface CarComponent {
  carWheels: THREE.Mesh[];
  carFront?: THREE.Mesh;
  carBody?: THREE.Mesh;
  carHood?: THREE.Mesh;
  carGlass?: THREE.Mesh;
}

const colorList = ["red", "blue", "green", "gray", "orange", "purple"];

// 创建车子各零件的材质
// 轮毂材质
const wheelMeterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1, // 金属度
  roughness: 0.1, // 粗糙度
});
// 前脸材质
const frontMeterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1, // 金属度
  roughness: 0.5, // 粗糙度
  clearcoat: 1, // 轻漆
  clearcoatRoughness: 0.1, // 轻漆粗糙度
});
// 车身材质
const bodyMeterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1, // 金属度
  roughness: 0.5, // 粗糙度
  clearcoat: 1, // 轻漆
  clearcoatRoughness: 0.1, // 轻漆粗糙度
});
// 引擎盖材质
const hoodMeterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1, // 金属度
  roughness: 0.5, // 粗糙度
  clearcoat: 1, // 轻漆
  clearcoatRoughness: 0.1, // 轻漆粗糙度
});
// 挡风玻璃材质
const glassMeterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0, // 金属度
  roughness: 0, // 粗糙度
  transparent: true, // 是否有透明
  transmission: 1, // 透明度
});

const CarShow = () => {
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const carComponent = useRef<CarComponent>({ carWheels: [] });

  const filmMaterialList = [
    {
      name: intl.formatMessage({ id: "page.threeJs3D.abrazine" }),
      key: "abrazine",
      clearcoatRoughness: 3,
      roughness: 1,
    },
    {
      name: intl.formatMessage({ id: "page.threeJs3D.cryolite" }),
      key: "cryolite",
      clearcoatRoughness: 0.2,
      roughness: 0.5,
    },
  ];
  const glassMaterialList = [
    {
      name: intl.formatMessage({ id: "page.threeJs3D.ordinary" }),
      key: "ordinary",
      transmission: 0.9,
    },
    {
      name: intl.formatMessage({ id: "page.threeJs3D.transparent" }),
      key: "transparent",
      transmission: 1,
    },
  ];

  const initializeHandle = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => {
    if (containerRef.current) {
      scene.background = new THREE.Color("#ddd");
      camera.position.set(0, 2, 4);
      renderer.setClearColor("#000");

      const controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;
      controls.autoRotate = true;

      // 添加网格地面
      const gridHelper = new THREE.GridHelper(15, 15);
      (gridHelper.material as THREE.Material).opacity = 0.2;
      (gridHelper.material as THREE.Material).transparent = true;
      scene.add(gridHelper);

      loadGlb("./public/model/bmw.glb").then((gltf: GLTF) => {
        const bmw = gltf.scene;
        bmw.traverse((child: any) => {
          if (child.isMesh) {
            // 判断是否是前脸
            if (child.name.includes("前脸")) {
              child.material = frontMeterial;
              carComponent.current.carFront = child;
            }
            // 判断是否是车身
            if (child.name === "Mesh002") {
              child.material = bodyMeterial;
              carComponent.current.carBody = child;
            }
            // 判断是否是引擎盖
            if (child.name.includes("引擎盖_1")) {
              child.material = hoodMeterial;
              carComponent.current.carHood = child;
            }
            // 判断是否是玻璃
            if (child.name.includes("挡风玻璃")) {
              child.material = glassMeterial;
              carComponent.current.carGlass = child;
            }
            // 判断是否是轮毂
            if (child.name.includes("轮毂")) {
              child.material = wheelMeterial;
              carComponent.current.carWheels.push(child);
            }
          }
        });
        scene.add(bmw);
      });

      // 添加灯光
      const light1 = new THREE.DirectionalLight(0xffffff, 1);
      light1.position.set(0, 0, 10);
      scene.add(light1);
      const light2 = new THREE.DirectionalLight(0xffffff, 1);
      light2.position.set(0, 0, -10);
      scene.add(light2);
      const light3 = new THREE.DirectionalLight(0xffffff, 1);
      light3.position.set(10, 0, 0);
      scene.add(light3);
      const light4 = new THREE.DirectionalLight(0xffffff, 1);
      light4.position.set(-10, 0, 0);
      scene.add(light4);
      const light5 = new THREE.DirectionalLight(0xffffff, 1);
      light5.position.set(0, 10, 0);
      scene.add(light5);
      const light6 = new THREE.DirectionalLight(0xffffff, 0.3);
      light6.position.set(5, 10, 0);
      scene.add(light6);
      const light7 = new THREE.DirectionalLight(0xffffff, 0.3);
      light7.position.set(0, 10, 5);
      scene.add(light7);
      const light8 = new THREE.DirectionalLight(0xffffff, 0.3);
      light7.position.set(0, 10, -5);
      scene.add(light8);
      const light9 = new THREE.DirectionalLight(0xffffff, 0.3);
      light9.position.set(-5, 10, 0);
      scene.add(light9);
    }
  };

  const renderHandle = () => {
    if (controlsRef.current) {
      controlsRef.current?.update();
    }
  };

  useInitialize(containerRef, initializeHandle, null, renderHandle);

  const selectBodyColor = (color: any) => {
    bodyMeterial.color.set(color);
  };

  const selectFrontColor = (color: any) => {
    frontMeterial.color.set(color);
  };

  const selectHoodColor = (color: any) => {
    hoodMeterial.color.set(color);
  };

  const selectWheelColor = (color: any) => {
    wheelMeterial.color.set(color);
  };

  const selectFilmMaterial = (
    clearcoatRoughness: number,
    roughness: number
  ) => {
    frontMeterial.clearcoatRoughness = clearcoatRoughness;
    frontMeterial.roughness = roughness;
    bodyMeterial.clearcoatRoughness = clearcoatRoughness;
    bodyMeterial.roughness = roughness;
    hoodMeterial.clearcoatRoughness = clearcoatRoughness;
    hoodMeterial.roughness = roughness;
  };

  const selectGlassMaterial = (transmission: number) => {
    glassMeterial.transmission = transmission;
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <div className={styles.title}>
          {intl.formatMessage({ id: "page.threeJs3D.carDisplayAndMatching" })}
        </div>
        <div className={styles.itemBox}>
          <p>{intl.formatMessage({ id: "page.threeJs3D.bodyColor" })}</p>
          <div className={styles.selectBox}>
            {colorList.map((color: string) => (
              <div
                key={color}
                className={styles.btn}
                style={{ border: "none", backgroundColor: color }}
                onClick={() => selectBodyColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.itemBox}>
          <p>
            {intl.formatMessage({ id: "page.threeJs3D.anteriorFaceColor" })}
          </p>
          <div className={styles.selectBox}>
            {colorList.map((color: string) => (
              <div
                key={color}
                className={styles.btn}
                style={{ border: "none", backgroundColor: color }}
                onClick={() => selectFrontColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.itemBox}>
          <p>{intl.formatMessage({ id: "page.threeJs3D.hoodColor" })}</p>
          <div className={styles.selectBox}>
            {colorList.map((color: string) => (
              <div
                key={color}
                className={styles.btn}
                style={{ border: "none", backgroundColor: color }}
                onClick={() => selectHoodColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.itemBox}>
          <p>{intl.formatMessage({ id: "page.threeJs3D.hubColor" })}</p>
          <div className={styles.selectBox}>
            {colorList.map((color: string) => (
              <div
                key={color}
                className={styles.btn}
                style={{ border: "none", backgroundColor: color }}
                onClick={() => selectWheelColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.itemBox}>
          <p>{intl.formatMessage({ id: "page.threeJs3D.filmMaterial" })}</p>
          <div className={styles.selectBox}>
            {filmMaterialList.map(
              (item: {
                name: string;
                key: string;
                clearcoatRoughness: number;
                roughness: number;
              }) => (
                <div
                  key={item.key}
                  className={styles.textBtn}
                  onClick={() =>
                    selectFilmMaterial(item.clearcoatRoughness, item.roughness)
                  }
                >
                  {item.name}
                </div>
              )
            )}
          </div>
        </div>
        <div className={styles.itemBox}>
          <p>
            {intl.formatMessage({ id: "page.threeJs3D.windshieldMaterial" })}
          </p>
          <div className={styles.selectBox}>
            {glassMaterialList.map(
              (item: { name: string; key: string; transmission: number }) => (
                <div
                  key={item.key}
                  className={styles.textBtn}
                  onClick={() => selectGlassMaterial(item.transmission)}
                >
                  {item.name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShow;
