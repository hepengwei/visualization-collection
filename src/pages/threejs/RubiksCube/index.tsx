import React, { useRef } from "react";
import { useIntl } from "react-intl";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useInitialize from "hooks/threejs/useInitialize";
import { gsap } from "gsap";
import { initPositionList, planePositionList } from "./rubiksCubeInfo";
import styles from "./index.module.scss";

const cubeSize = 10; // 每个小块的长宽高
const cubeBevelThickness = 1; // 每个小块的棱的倒角的宽度
const cubeMargin = 1; // 每个小块的间距
const rotateInterval = 2000; // 魔方其中一面旋转的时间间隔
const cameraInitPosition = { x: 20, y: 50, z: 50 };
const lightInitPositionList = [
  { x: 100, y: 100, z: -100 },
  { x: -100, y: 100, z: -100 },
  { x: 100, y: -50, z: -100 },
  { x: -100, y: -50, z: -100 },
  { x: 100, y: 100, z: 100 },
  { x: -100, y: 100, z: 100 },
  { x: 100, y: -50, z: 100 },
  { x: -100, y: -50, z: 100 },
  { x: 0, y: 50, z: 20 },
  { x: 0, y: -50, z: 20 },
];

const RubiksCube = () => {
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const lightList = useRef<THREE.DirectionalLight[]>([]); // 存放所有平行光源
  const cubeList = useRef<THREE.Mesh[]>([]); // 存放魔方的27个小块对象
  const cubeIds = useRef<number[]>([]); // 存放魔方的27个小块对象的ID值;

  // 随机旋转魔方的一个小块
  const rotateNubble = (cube: THREE.Mesh) => {};

  // 随机旋转魔方的一面
  const rotatePlane = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    const whichPlane = Object.keys(planePositionList)[
      randomIndex
    ] as keyof typeof planePositionList;
    const planePosition = planePositionList[whichPlane];
    // 找到这一个面中所有的小块对象
    const planeCubeList = [];
    for (let i = 0, l = planePosition.length; i < l; i++) {
      const { x, y, z } = planePosition[i];
      for (let j = 0, len = cubeList.current.length; j < len; j++) {
        const cube = cubeList.current[j];
        if (
          cube.position.x === x &&
          cube.position.y === y &&
          cube.position.z === z
        ) {
          planeCubeList.push(cube);
        }
      }
    }
    // 确定旋转的方向
    switch (whichPlane) {
      case "front":
        break;
      case "back":
        break;
      case "top":
        break;
      case "bottom":
        break;
      case "left":
        break;
      case "right":
        break;
      default:
        break;
    }
    // 将这一面的所有小块进行旋转
    // for (let i = 0, l = planeNubbleList.length; i < l; i++) {
    //   rotateNubble(planeNubbleList[i]);
    // }
  };

  const initializeHandle = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => {
    if (containerRef.current) {
      scene.background = new THREE.Color("#111");
      camera.position.set(
        cameraInitPosition.x,
        cameraInitPosition.y,
        cameraInitPosition.z
      );
      camera.lookAt(0, 0, 0);
      renderer.setClearColor("#111");

      // 添加所有灯光
      lightInitPositionList.forEach((item) => {
        const { x, y, z } = item;
        const light = new THREE.DirectionalLight(0xffffff, 5);
        light.position.set(x, y, z);
        light.lookAt(0, 0, 0);
        light.shadow.camera.near = 10;
        light.shadow.camera.far = 500;
        light.castShadow = true;
        lightList.current.push(light);
        scene.add(light);
      });

      const controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;
      controls.autoRotate = true;
    }

    // 创建魔方
    // 创建一个group放魔方的27个小块
    const group = new THREE.Group();
    group.position.set(0, 0, 0);

    // 循环创建出27个小块，并添加到group中
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x000000,
      metalness: 1, // 金属度
      roughness: 0.4, // 粗糙度
      clearcoat: 1, // 轻漆
      clearcoatRoughness: 0.1, // 轻漆粗糙度
    });
    for (let i = 0, l = initPositionList.length; i < l; i++) {
      const { x, y, z } = initPositionList[i];
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        x * (cubeSize + cubeMargin),
        y * (cubeSize + cubeMargin),
        z * (cubeSize + cubeMargin)
      );
      cube.castShadow = true;
      // 将每个小块ID保存起来
      cubeIds.current.push(cube.id);
      group.add(cube);
    }
    // 添加到场景中
    scene.add(group);

    // 定时旋转魔方随机的一个面
    setInterval(() => {
      rotatePlane();
    }, rotateInterval);
  };

  const renderHandle = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
  ) => {
    if (controlsRef.current) {
      controlsRef.current?.update();
      // 让光源跟随相机转动
      // const vector = camera.position.clone();
      // const { x, y, z } = vector;
      // const cameraMove = {
      //   x: x - cameraInitPosition.x,
      //   y: y - cameraInitPosition.y,
      //   z: z - cameraInitPosition.z,
      // };
      // lightList.current.forEach(
      //   (light: THREE.DirectionalLight, index: number) => {
      //     const initPosition = lightInitPositionList[index];
      //     light.position.set(
      //       initPosition.x + cameraMove.x,
      //       initPosition.y + cameraMove.y,
      //       initPosition.z + cameraMove.z
      //     );
      //     light.lookAt(0, 0, 0);
      //   }
      // );
    }
  };

  useInitialize(containerRef, initializeHandle, null, renderHandle);

  return <div className={styles.container} ref={containerRef}></div>;
};

export default RubiksCube;
