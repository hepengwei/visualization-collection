/**
 * 投骰子
 */
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { InputNumber, message } from "antd";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  PlaneGeometry,
  MeshStandardMaterial,
  ShadowMaterial,
  Mesh,
  CanvasTexture,
  Color,
  AmbientLight,
  PointLight,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as CANNON from "cannon-es";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import styles from "./index.module.scss";

const diceSize = 10; // 骰子的长宽高
const diceBevelRadius = 1.4; // 骰子的棱的曲面半径
const maxDiceNum = 10; // 最多骰子数量
const g = 300; // 重力加速度
const restitution = 0.36; // 物理世界的反弹系数
const cameraInitPosition = { x: 0, y: 40, z: 120 }; // 相机位置
const floorY = -60; // 地板的y位置

const ThrowDice = () => {
  const intl = useIntl();
  const { menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const diceList = useRef<{ mesh: Mesh; body: CANNON.Body }[]>([]); // 存放所有骰子对象
  const physicsWorld = useRef<CANNON.World | null>(null);
  const [diceNum, setDiceNum] = useState<number | null>(1); // 投骰子的个数
  const diceNumRef = useRef<number | null>(1);
  const isStillMoving = useRef<boolean>(false); // 所有骰子是否还在动

  // 创建并添加地板
  const createFloor = (scene: Scene) => {
    const floor: Mesh = new Mesh(
      new PlaneGeometry(300, 300),
      new ShadowMaterial({
        opacity: 0.1,
      })
    );
    floor.receiveShadow = true;
    floor.position.y = floorY;
    floor.quaternion.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * 0.5);
    scene.add(floor);

    const floorBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
    });
    // @ts-ignore
    floorBody.position.copy(floor.position);
    // @ts-ignore
    floorBody.quaternion.copy(floor.quaternion);
    physicsWorld.current?.addBody(floorBody);
  };

  // 创建骰子各点数对应的Canvas
  const getDiceDotNumCanvas = (dotNum: number) => {
    const canvas = document.createElement("canvas");
    const size = 500;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "#eeeeee";
    ctx.fillRect(0, 0, size, size);
    switch (dotNum) {
      case 1:
        ctx.fillStyle = "#d30704";
        ctx.arc(size / 2, size / 2, size * 0.2, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 2:
        ctx.fillStyle = "#153f87";
        ctx.arc(size / 2, (size * 3) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.arc(size / 2, (size * 8) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 3:
        ctx.fillStyle = "#153f87";
        ctx.arc((size * 8) / 11, (size * 3) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.arc(size / 2, size / 2, size * 0.12, 0, 2 * Math.PI);
        ctx.arc((size * 3) / 11, (size * 8) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 4:
        ctx.fillStyle = "#d30704";
        ctx.beginPath();
        ctx.arc((size * 3) / 11, (size * 3) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.arc((size * 8) / 11, (size * 3) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((size * 3) / 11, (size * 8) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.arc((size * 8) / 11, (size * 8) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 5:
        ctx.fillStyle = "#153f87";
        ctx.beginPath();
        ctx.arc((size * 3) / 11, (size * 3) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.arc((size * 8) / 11, (size * 3) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((size * 3) / 11, (size * 8) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.arc((size * 8) / 11, (size * 8) / 11, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size * 0.12, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 6:
        ctx.fillStyle = "#153f87";
        ctx.beginPath();
        ctx.arc((size * 3) / 10, (size * 3) / 11, size * 0.1, 0, 2 * Math.PI);
        ctx.arc((size * 7) / 10, (size * 3) / 11, size * 0.1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((size * 3) / 10, size / 2, size * 0.1, 0, 2 * Math.PI);
        ctx.arc((size * 7) / 10, size / 2, size * 0.1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((size * 3) / 10, (size * 8) / 11, size * 0.1, 0, 2 * Math.PI);
        ctx.arc((size * 7) / 10, (size * 8) / 11, size * 0.1, 0, 2 * Math.PI);
        ctx.fill();
        break;
    }
    return canvas;
  };

  // 骰子几何体
  const diceGeometry = useRef<RoundedBoxGeometry>(
    new RoundedBoxGeometry(diceSize, diceSize, diceSize, 1, diceBevelRadius)
  );

  // 骰子材质
  const materialList = useRef<MeshStandardMaterial[]>([
    new MeshStandardMaterial({
      map: new CanvasTexture(getDiceDotNumCanvas(1)),
      color: "#ffffff",
    }), // 右面
    new MeshStandardMaterial({
      map: new CanvasTexture(getDiceDotNumCanvas(6)),
      color: "#ffffff",
    }), // 左面
    new MeshStandardMaterial({
      map: new CanvasTexture(getDiceDotNumCanvas(3)),
      color: "#ffffff",
    }), // 上面
    new MeshStandardMaterial({
      map: new CanvasTexture(getDiceDotNumCanvas(4)),
      color: "#ffffff",
    }), // 下面
    new MeshStandardMaterial({
      map: new CanvasTexture(getDiceDotNumCanvas(5)),
      color: "#ffffff",
    }), // 后面
    new MeshStandardMaterial({
      map: new CanvasTexture(getDiceDotNumCanvas(2)),
      color: "#ffffff",
    }), // 前面
  ]);

  // 创建并添加所有骰子
  const createDice = (scene: Scene) => {
    for (let i = 0; i < maxDiceNum; i++) {
      // 创建骰子
      const dice = new Mesh(diceGeometry.current, materialList.current);
      dice.castShadow = true;
      // 添加到场景中
      scene.add(dice);
      const body = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Box(
          new CANNON.Vec3(diceSize / 2, diceSize / 2, diceSize / 2)
        ),
        sleepTimeLimit: 0.1,
      });
      physicsWorld.current?.addBody(body);
      diceList.current.push({ mesh: dice, body });
    }
  };

  // 投骰子
  const throwDice = () => {
    if (isStillMoving.current) return;
    if (!diceNumRef.current) {
      message.warning(
        intl.formatMessage({ id: "page.threeJs3D.enterDiceNum" })
      );
      return;
    }
    isStillMoving.current = true;
    diceList.current.forEach(
      (item: { mesh: Mesh; body: CANNON.Body }, index: number) => {
        if (index <= (diceNumRef.current as number) - 1) {
          let x = 10;
          let y = 24;
          let z = -Math.floor(index / 2) * diceSize * 1.5;
          if ((index + 1) % 2 === 0) {
            x += diceSize * 1.5;
          }
          item.body.position = new CANNON.Vec3(x, y, z);
          // @ts-ignore
          item.mesh.position.copy(item.body.position);
          item.mesh.rotation.set(
            1 * Math.PI * Math.random(),
            0,
            2 * Math.PI * Math.random()
          );
          // @ts-ignore
          item.body.quaternion.copy(item.mesh.quaternion);
          const force = 1 + 5 * Math.random();
          item.body.applyImpulse(new CANNON.Vec3(-16, force, -5));
        } else {
          // 隐藏其他不需要的骰子
          item.body.position = new CANNON.Vec3(1000, floorY + diceSize / 2, 0);
          // @ts-ignore
          item.mesh.position.copy(item.body.position);
          item.mesh.rotation.set(0, 0, 0);
          // @ts-ignore
          item.body.quaternion.copy(item.mesh.quaternion);
        }
      }
    );
    setTimeout(() => {
      isStillMoving.current = false;
    }, 2000);
  };

  // 创建物理世界
  const createPhysicsWorld = () => {
    physicsWorld.current = new CANNON.World({
      allowSleep: true,
      gravity: new CANNON.Vec3(0, -g, 0),
    });
    physicsWorld.current.defaultContactMaterial.restitution = restitution; // 反弹系数
  };

  const initializeHandle = (
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) => {
    if (containerRef.current) {
      scene.background = new Color("#224141");
      camera.position.set(
        cameraInitPosition.x,
        cameraInitPosition.y,
        cameraInitPosition.z
      );
      camera.lookAt(0, 0, 0);
      renderer.setClearColor("#224141");

      // 添加环境光
      const light = new AmbientLight(0xffffff, 0.5);
      scene.add(light);

      // 添加右上角灯光
      const rightTopLight = new PointLight(0xffffff, 1);
      rightTopLight.position.set(100, 200, -10);
      rightTopLight.castShadow = true;
      rightTopLight.shadow.camera.near = 5;
      rightTopLight.shadow.camera.far = 400;
      scene.add(rightTopLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableRotate = false; // 禁止旋转，只能缩放
      controlsRef.current = controls;

      // 创建物理世界
      createPhysicsWorld();

      // 创建并添加地板
      createFloor(scene);

      // 创建并添加骰子
      createDice(scene);

      // 投骰子
      throwDice();
    }
  };

  const renderHandle = () => {
    physicsWorld.current?.fixedStep();
    for (let item of diceList.current) {
      // @ts-ignore
      item.mesh.position.copy(item.body.position);
      // @ts-ignore
      item.mesh.quaternion.copy(item.body.quaternion);
    }
    if (controlsRef.current) {
      controlsRef.current?.update();
    }
  };

  const { resize } = useInitialize(
    containerRef,
    initializeHandle,
    null,
    renderHandle
  );

  useLayoutEffect(() => {
    resize();
  }, [menuWidth]);

  useEffect(() => {
    return () => {
      diceGeometry.current?.dispose();
      materialList.current?.forEach((material) => {
        material.dispose();
      });
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.btn}>
        <div className={styles.btn_inner} onClick={throwDice}>
          Start
        </div>
      </div>
      <div className={styles.numBox}>
        <span>{intl.formatMessage({ id: "page.threeJs3D.diceNum" })}：</span>
        <InputNumber
          min={1}
          max={maxDiceNum}
          precision={0}
          size="large"
          value={diceNum}
          onChange={(value: number | null) => {
            diceNumRef.current = value;
            setDiceNum(value);
          }}
        />
      </div>
    </div>
  );
};

export default ThrowDice;
