/**
 * 地球展示
 */
import React, { useRef, useLayoutEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppstoreOutlined } from "@ant-design/icons";
import {
  Scene,
  BufferGeometry,
  SphereGeometry,
  PlaneGeometry,
  Material,
  PointsMaterial,
  MeshBasicMaterial,
  SpriteMaterial,
  ShaderMaterial,
  Mesh,
  Points,
  Sprite,
  BufferAttribute,
  Color,
  Object3D,
  TextureLoader,
  Vector3,
  DoubleSide,
  CanvasTexture,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Resources from "./Resources";
import earthVertex from "./earthShaders/vertex.vs";
import earthFragment from "./earthShaders/fragment.fs";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import useMoveTo from "hooks/useMoveTo";
import Border1 from "components/LargeScreenBorder/Border1";
import luminousPointData from "./luminousPointData";
import { getTextWidth } from "utils/util";
import { lon2xyz } from "utils/threejsUtil";
import { flyArc } from "./flyLine";
import pageBg from "images/threejs/pageBg.png";
import topBg from "images/threejs/topBg.png";
import shine from "images/threejs/shine.png";
import styles from "./index.module.scss";

const cameraInitPosition = { x: 0, y: 20, z: 110 }; // 相机初始位置
const earthRadius = 50; // 地球半径
const lightColumnStartColor = 0xe4007f; // 起始地址的光柱颜色
const lightColumnEndColor = 0xffffff; // 结束地址的光柱颜色
const fluctuatingApertureSize = earthRadius * 0.12; // 波动光圈大小
const fluctuatingApertureColor = 0xe99f68; // 波动光圈颜色
const flyLineOptions = {
  color: 0xf3ae76, // 航线的颜色
  arrowColor: 0xff7714, // 航线箭头的颜色
  speed: 0.005, // 飞行速度
};
const timeValue = 100;
const uniforms = {
  glowColor: {
    value: new Color(0x0cd1eb),
  },
  scale: {
    type: "f",
    value: -1.0,
  },
  bias: {
    type: "f",
    value: 1.0,
  },
  power: {
    type: "f",
    value: 3.3,
  },
  time: {
    type: "f",
    value: timeValue,
  },
  isHover: {
    value: false,
  },
  map: {
    value: null,
  },
};

const EarthDisplay = () => {
  const intl = useIntl();
  const { menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const topBoxRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const resourcesRef = useRef<Resources | null>(null);
  const earthObjRef = useRef<THREE.Object3D | null>(null); // 大地球对象(包含大气层)
  const fluctuatingApertureListRef = useRef<Mesh[]>([]); // 所有标注点的波动光圈对象
  const flyLineListRef = useRef<Points[]>([]); // 所有航线对象
  const [showMainPage, setShowMainPage] = useState<boolean>(true);

  // 显示主面板
  const { restart: topRestart, reverse: topReverse } = useMoveTo(
    topBoxRef,
    "toBottom",
    0.6
  );
  const { restart: leftRestart, reverse: leftReverse } = useMoveTo(
    leftBoxRef,
    "toRight",
    0.8,
    0.5
  );
  const { restart: rightRestart, reverse: rightReverse } = useMoveTo(
    rightBoxRef,
    "toLeft",
    0.8,
    0.5
  );

  // 显示或隐藏主面板
  const showOrHideMainPage = () => {
    if (showMainPage) {
      topReverse();
      leftReverse();
      rightReverse();
    } else {
      topRestart();
      leftRestart();
      rightRestart();
    }
    setShowMainPage(!showMainPage);
  };

  // 创建星空并添加到场景中
  const createStarrySky = (scene: Scene) => {
    if (resourcesRef.current) {
      const vertices = [];
      for (let i = 0; i < 500; i++) {
        const x = 800 * Math.random() - 300;
        const y = 800 * Math.random() - 300;
        const z = 800 * Math.random() - 300;
        vertices.push(x, y, z);
      }

      const starrySkyGeometry = new BufferGeometry();
      starrySkyGeometry.setAttribute(
        "position",
        new BufferAttribute(new Float32Array(vertices), 3)
      );

      const starrySkyMaterial = new PointsMaterial({
        size: 2,
        sizeAttenuation: true, // 尺寸衰减
        color: 0x41b1b4,
        transparent: true,
        opacity: 1,
        map: resourcesRef.current.textures.radialGradient,
      });

      const starrySky = new Points(starrySkyGeometry, starrySkyMaterial);
      scene.add(starrySky);
    }
  };

  // 创建大地球对象并添加到场景中
  const createEarthObj = (scene: Scene) => {
    // 初始化一个大地球对象
    const earthObj = new Object3D();
    // 创建地球几何体
    const earthGeometry = new SphereGeometry(earthRadius, 50, 50);
    // 创建地球材质
    if (resourcesRef.current?.textures?.earth) {
      // @ts-ignore
      uniforms.map.value = resourcesRef.current.textures.earth as Texture;
    }
    const earthMaterial = new ShaderMaterial({
      uniforms,
      vertexShader: earthVertex,
      fragmentShader: earthFragment,
      //   wireframe: true, // 显示模型线条
    });
    earthMaterial.needsUpdate = true;
    // 创建地球球体
    const earth = new Mesh(earthGeometry, earthMaterial);
    earth.name = "earth";
    // 将地球球体添加到大地球对象中
    earthObj.add(earth);

    // 创建地球大气层几何体
    const earthBorderGeometry = new SphereGeometry(earthRadius + 10, 60, 60);
    // 创建地球大气层几何体
    const earthBorderMaterial = new PointsMaterial({
      color: 0x81ffff, //设置颜色，默认 0xFFFFFF
      transparent: true,
      sizeAttenuation: true,
      opacity: 0.1,
      vertexColors: false, // 定义材料是否使用顶点颜色，默认false ---如果该选项设置为true，则color属性失效
      size: 0.01, // 定义粒子的大小。默认为1.0
    });
    // 创建地球大气层
    const earthBorder = new Points(earthBorderGeometry, earthBorderMaterial);
    // 将地球大气层添加到大地球对象中
    earthObj.add(earthBorder);

    // 创建地球辉光
    const glowMaterial = new SpriteMaterial({
      map: resourcesRef.current?.textures.glow,
      color: 0xffffff,
    });
    const glow = new Sprite(glowMaterial);
    glow.scale.set(earthRadius * 3, earthRadius * 3, 1);
    earthObj.add(glow);

    scene.add(earthObj);
    earthObjRef.current = earthObj;
  };

  // 创建标注点
  const createMarkupPoint = (lon: number, lat: number, isStartCity = false) => {
    const markupPoint = new Object3D();

    // 创建光柱底座矩形平面
    const baseGeometry = new PlaneGeometry(1, 1);
    const baseMaterial = new MeshBasicMaterial({
      color: 0x41b1b4,
      map: resourcesRef.current?.textures.aperture,
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const baseMesh = new Mesh(baseGeometry, baseMaterial);
    const coord = lon2xyz(earthRadius * 1.001, lon, lat); // 经纬度转球面坐标
    const size = earthRadius * 0.05;
    baseMesh.scale.set(size, size, size);
    baseMesh.position.set(coord.x, coord.y, coord.z);
    const coordVec3 = coord.clone().normalize();
    baseMesh.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), coordVec3);
    markupPoint.add(baseMesh);

    // 创建波动光圈
    const fluctuatingApertureMeterial = baseMaterial.clone();
    fluctuatingApertureMeterial.color = new Color(fluctuatingApertureColor);
    const fluctuatingAperture = new Mesh(
      baseGeometry,
      fluctuatingApertureMeterial
    );
    // 经纬度转球面坐标
    fluctuatingAperture.scale.set(
      fluctuatingApertureSize,
      fluctuatingApertureSize,
      fluctuatingApertureSize
    );
    // 在对象中添加自定义数据
    fluctuatingAperture.userData = {
      size: fluctuatingApertureSize,
      scale: Math.random() * 1.0,
    };
    fluctuatingAperture.position.set(coord.x, coord.y, coord.z);
    fluctuatingAperture.position.copy(baseMesh.position);
    fluctuatingAperture.quaternion.copy(baseMesh.quaternion);
    markupPoint.add(fluctuatingAperture);
    fluctuatingApertureListRef.current.push(fluctuatingAperture);

    // 创建光柱(两各相互垂直交叉平面组成)
    const lightColumn = new Object3D();
    const height = earthRadius * 0.25;
    const geometry = new PlaneGeometry(earthRadius * 0.05, height);
    geometry.rotateX(Math.PI / 2);
    geometry.translate(0, 0, height / 2);
    const material = new MeshBasicMaterial({
      map: resourcesRef.current?.textures.lightColumn,
      color: isStartCity ? lightColumnStartColor : lightColumnEndColor,
      transparent: true,
      side: DoubleSide,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const mesh = new Mesh(geometry, material);
    // 两个光柱交叉叠加
    lightColumn.add(mesh, mesh.clone().rotateZ(Math.PI / 2)); // 几何体绕x轴旋转了，所以mesh旋转轴变为z
    // 经纬度转球面坐标
    const sphereCoord = lon2xyz(earthRadius, lon, lat); // SphereCoord球面坐标
    lightColumn.position.set(sphereCoord.x, sphereCoord.y, sphereCoord.z); //设置mesh位置
    lightColumn.quaternion.setFromUnitVectors(
      new Vector3(0, 0, 1),
      sphereCoord.clone().normalize()
    );
    markupPoint.add(lightColumn);

    return markupPoint;
  };

  // 创建标注点上空的地名标签
  const createSpriteLabel = (lon: number, lat: number, name: string) => {
    const canvas = document.createElement("canvas");
    const fontSize = 20;
    const fontWeight = 500;
    const marginLeftRight = 16;
    const marginTopBottom = 8;
    const textWidth = getTextWidth(name, fontSize, fontWeight);
    canvas.width = textWidth + 2 * marginLeftRight;
    canvas.height = fontSize + 2 * marginTopBottom;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "#41B1B460";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontWeight} ${fontSize}px SourceHanSansCN-Bold`;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(name, marginLeftRight, marginTopBottom + fontSize - 2);

    const material = new SpriteMaterial({
      map: new CanvasTexture(canvas),
      transparent: true,
    });
    const sprite = new Sprite(material);
    sprite.scale.set(canvas.width * 0.1, canvas.height * 0.1, 1);
    const coord = lon2xyz(earthRadius * 1.001, lon, lat); // 经纬度转球面坐标
    sprite.position.set(coord.x * 1.1, coord.y * 1.1, coord.z * 1.1);
    return sprite;
  };

  // 创建所有标注点并添加到大地球对象上
  const addMarkupPoint = () => {
    luminousPointData.forEach((item) => {
      const lightColumn1 = createMarkupPoint(item.start.E, item.start.N, true);
      earthObjRef.current?.add(lightColumn1);
      const label1 = createSpriteLabel(
        item.start.E,
        item.start.N,
        item.start.name
      );
      earthObjRef.current?.add(label1);

      item.endArray.forEach((item2) => {
        const lightColumn2 = createMarkupPoint(item2.E, item2.N);
        earthObjRef.current?.add(lightColumn2);
        const label2 = createSpriteLabel(item2.E, item2.N, item2.name);
        earthObjRef.current?.add(label2);
      });
    });
  };

  // 创建航线并添加到大地球对象上
  const addFlyLine = () => {
    luminousPointData.forEach((item) => {
      item.endArray.forEach((item2) => {
        const arcLine = flyArc(
          earthRadius,
          item.start.E,
          item.start.N,
          item2.E,
          item2.N,
          flyLineOptions
        );
        earthObjRef.current?.add(arcLine);
        flyLineListRef.current.push(arcLine.userData["flyLine"]);
      });
    });
  };

  const initializeHandle = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => {
    if (containerRef.current) {
      // 添加背景图
      scene.background = new TextureLoader().load(pageBg);
      camera.position.set(
        cameraInitPosition.x,
        cameraInitPosition.y,
        cameraInitPosition.z
      );

      // 加载图片资源
      resourcesRef.current = new Resources(async () => {
        createStarrySky(scene);
        createEarthObj(scene);
        addMarkupPoint();
        addFlyLine();
      });

      const controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1; // 动态阻尼系数
    }
  };

  const renderHandle = () => {
    // 给所有标注点的波动光圈添加动画
    fluctuatingApertureListRef.current.forEach((mesh: Mesh) => {
      mesh.userData.scale = mesh.userData.scale + 0.01;
      const newScale = mesh.userData.size * mesh.userData.scale;
      mesh.scale.set(newScale, newScale, newScale);
      if (newScale <= fluctuatingApertureSize * 1.5) {
        (mesh.material as Material).opacity = Math.max(
          ((newScale - fluctuatingApertureSize) / fluctuatingApertureSize) *
            0.5,
          1
        ); // 透明度在0~1之间逐渐增加
      } else if (
        newScale > fluctuatingApertureSize * 1.5 &&
        newScale <= fluctuatingApertureSize * 2
      ) {
        (mesh.material as Material).opacity = Math.min(
          1 -
            ((newScale - fluctuatingApertureSize) / fluctuatingApertureSize) *
              0.3,
          0
        ); // 透明度在0~1之间逐渐减小
      } else {
        mesh.userData.scale = 1;
      }
    });

    // 给航线添加飞行动画
    flyLineListRef.current.forEach((fly) => {
      fly.rotation.z += flyLineOptions.speed;
      // @ts-ignore
      if (fly.rotation.z >= fly.flyEndAngle) fly.rotation.z = 0;
    });

    // 动态修改着色器参数
    uniforms.time.value =
      uniforms.time.value < -timeValue ? timeValue : uniforms.time.value - 1;

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

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.switch} onClick={showOrHideMainPage}>
        <AppstoreOutlined />
      </div>

      <div className={styles.topBox} ref={topBoxRef}>
        <img src={topBg} alt="" className={styles.topBg} />
        <img src={shine} alt="" className={styles.shine} />
        <div className={styles.leftLine} />
        <div className={styles.rightLine} />
        <div className={styles.title}>
          <span>
            {intl.formatMessage({
              id: "page.threeJs3D.visualizationPlatform",
            })}
          </span>
        </div>
      </div>
      <div className={styles.leftBox} ref={leftBoxRef}>
        <div className={styles.item}>
          <Border1 title={intl.formatMessage({ id: "common.moduleTitle" })}>
            {intl.formatMessage({ id: "common.customizeContent" })}
          </Border1>
        </div>
        <div className={styles.item}>
          <Border1>
            {intl.formatMessage({ id: "common.customizeContent" })}
          </Border1>
        </div>
      </div>
      <div className={styles.rightBox} ref={rightBoxRef}>
        <div className={styles.item}>
          <Border1 title={intl.formatMessage({ id: "common.moduleTitle" })}>
            {intl.formatMessage({ id: "common.customizeContent" })}
          </Border1>
        </div>
        <div className={styles.item}>
          <Border1>
            {intl.formatMessage({ id: "common.customizeContent" })}
          </Border1>
        </div>
      </div>
    </div>
  );
};

export default EarthDisplay;
