/**
 * 地图展示
 */
import React, {
  useRef,
  useLayoutEffect,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useIntl } from "react-intl";
import { AppstoreOutlined } from "@ant-design/icons";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Object3D,
  Vector2,
  Vector3,
  Shape,
  BufferGeometry,
  ExtrudeGeometry,
  MeshBasicMaterial,
  LineBasicMaterial,
  Mesh,
  Line,
  TextureLoader,
  FileLoader,
  Raycaster,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { geoMercator } from "d3-geo";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import useMoveTo from "hooks/useMoveTo";
import Border1 from "components/LargeScreenBorder/Border1";
import useDynamicBg1 from "@/hooks/threejs/useDynamicBg1";
import { distoryObject } from "utils/threejsUtil";
import pageBg from "images/threejs/pageBg.png";
import topBg from "images/threejs/topBg.png";
import shine from "images/threejs/shine.png";
import styles from "./index.module.scss";

const cameraInitPosition = { x: 0, y: -20, z: 80 }; // 相机初始位置
const mapInitPosition = { x: 0, y: 6, z: 0 }; // 地图初始位置
const mapDepth = 6; // 地图板块深度
const mapColor = "#008170"; // 地图表面颜色
const mapSideColor = "#1AACAC"; // 地图侧面颜色
const mapHoverColor = "#005B41"; // hover后的地图表面颜色

const MapDisplay = () => {
  const intl = useIntl();
  const { menuWidth, headHeight } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const topBoxRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const mapRef = useRef<Object3D | null>(null);
  const dynamicBgRef = useRef<Object3D | null>(null);
  const raycaster = useRef<Raycaster>(new Raycaster());
  const mouse = useRef<Vector2 | null>(null);
  const lastPick = useRef<any>(null);
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

  const dynamicBg = useDynamicBg1();

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

  // 创建地图对象并添加到场景中
  const createMap = (data: Record<string, any>, scene: Scene) => {
    // 初始化一个地图对象
    const map = new Object3D();
    // 墨卡托投影转换
    const projection = geoMercator()
      .center([104.0, 37.5])
      .scale(80)
      .translate([0, 0]);

    data.features.forEach(
      (elem: {
        type: string;
        properties: Record<string, any>;
        geometry: { type: string; coordinates: any[] };
      }) => {
        // 创建一个省份3D对象
        const province = new Object3D();
        // 每个的 坐标 数组
        const { coordinates } = elem.geometry;
        // 循环坐标数组
        coordinates.forEach((multiPolygon: any[]) => {
          multiPolygon.forEach((polygon) => {
            const shape = new Shape();

            // 给每个省的边界画线
            const lineGeometry = new BufferGeometry();
            const pointsArray = [];
            for (let i = 0; i < polygon.length; i++) {
              const [x, y] = projection(polygon[i]);
              if (i === 0) {
                shape.moveTo(x, -y);
              } else {
                shape.lineTo(x, -y);
              }
              pointsArray.push(new Vector3(x, -y, mapDepth));
            }
            lineGeometry.setFromPoints(pointsArray);

            const extrudeSettings = {
              depth: mapDepth,
              bevelEnabled: false,
              bevelThickness: 1,
              bevelSize: 1,
              bevelOffset: 0,
              bevelSegments: 1,
            };
            const geometry = new ExtrudeGeometry(shape, extrudeSettings);
            const material1 = new MeshBasicMaterial({
              color: mapColor,
              transparent: true,
              opacity: 0.95,
            });
            const material2 = new MeshBasicMaterial({
              color: mapSideColor,
              transparent: true,
              opacity: 0.95,
            });

            const mesh = new Mesh(geometry, [material1, material2]);
            const lineMaterial = new LineBasicMaterial({
              color: "white",
            });
            const line = new Line(lineGeometry, lineMaterial);
            // 将省份的属性 加进来
            // @ts-ignore
            province.properties = elem.properties;
            province.add(mesh);
            province.add(line);
          });
        });
        map.add(province);
      }
    );
    map.position.set(mapInitPosition.x, mapInitPosition.y, mapInitPosition.z);

    scene.add(map);
    mapRef.current = map;
  };

  // 加载地图数据
  const loadMapData = (scene: Scene) => {
    const loader = new FileLoader();
    loader.load("./public/json/ChinaMap.json", (data: string | ArrayBuffer) => {
      const jsondata = JSON.parse(data as string);
      createMap(jsondata, scene);
      dynamicBg.scale.set(0.32, 0.32, 1);
      dynamicBg.position.set(0, 0, -8);
      scene.add(dynamicBg);
      dynamicBgRef.current = dynamicBg;
    });
  };

  const onMouseMove = useCallback(
    (e: any) => {
      if (tooltipRef.current) {
        if (!mouse.current) {
          mouse.current = new Vector2();
        }
        const { clientX, clientY } = e;
        if (new Vector2())
          mouse.current.x =
            ((clientX - menuWidth) / (window.innerWidth - menuWidth)) * 2 - 1;
        mouse.current.y =
          -((clientY - headHeight) / (window.innerHeight - headHeight)) * 2 + 1;

        tooltipRef.current.style.left = `${clientX - menuWidth + 4}px`;
        tooltipRef.current.style.top = `${clientY - headHeight + 4}px`;
      }
    },
    [menuWidth, headHeight]
  );

  const initializeHandle = (
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) => {
    if (containerRef.current) {
      // 添加背景图
      scene.background = new TextureLoader().load(pageBg);
      camera.position.set(
        cameraInitPosition.x,
        cameraInitPosition.y,
        cameraInitPosition.z
      );

      const controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05; // 动态阻尼系数

      loadMapData(scene);
    }
  };

  const showTip = () => {
    if (tooltipRef.current) {
      // 显示省份的信息
      if (lastPick.current) {
        const { properties } = lastPick.current.object.parent;
        tooltipRef.current.textContent = properties.name;
        tooltipRef.current.style.visibility = "visible";
      } else {
        tooltipRef.current.style.visibility = "hidden";
      }
    }
  };

  const renderHandle = (scene: Scene, camera: PerspectiveCamera) => {
    if (mapRef.current && mouse.current) {
      // 恢复上一次清空的
      if (lastPick.current) {
        lastPick.current.object.material[0].color.set(mapColor);
        lastPick.current.object.material[1].color.set(mapSideColor);
        if (tooltipRef.current) {
          tooltipRef.current.style.visibility = "hidden";
        }
      }
      lastPick.current = null;
      // 通过摄像机和鼠标位置更新射线
      raycaster.current.setFromCamera(mouse.current as Vector2, camera);
      // 算出射线 与当场景相交的对象有那些
      const intersects = raycaster.current.intersectObjects(
        scene.children,
        true
      );
      lastPick.current = intersects.find(
        (item: any) => item.object.material && item.object.material.length === 2
      );
      if (
        lastPick.current &&
        lastPick.current.object?.parent?.properties?.name
      ) {
        lastPick.current.object.material[0].color.set(mapHoverColor);
        lastPick.current.object.material[1].color.set(mapHoverColor);
        showTip();
      }
    }
    if (controlsRef.current) {
      controlsRef.current?.update();
    }
  };

  const { scene, resize } = useInitialize(
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
      distoryObject(mapRef.current, scene);
      distoryObject(dynamicBgRef.current, scene);
    };
  }, []);

  return (
    <div
      className={styles.container}
      onMouseMove={onMouseMove}
      ref={containerRef}
    >
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
      <div className={styles.tooltip} ref={tooltipRef}></div>
    </div>
  );
};

export default MapDisplay;
