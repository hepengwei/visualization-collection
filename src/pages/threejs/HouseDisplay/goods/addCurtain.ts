/**
 * 添加窗帘
 */
import { MutableRefObject } from "react";
import {
  Scene,
  PlaneGeometry,
  MeshPhysicalMaterial,
  MeshLambertMaterial,
  Mesh,
  Group,
  Vector3,
  Object3D,
  DoubleSide,
  Color,
} from "three";
import type { AssetManager } from "hooks/threejs/useInitialize";
import { getEaseProgress } from "../utils";

type CurtainType = "voile" | "cloth";

const whiteVoileDoublicationWidth = 0.06; // 窗帘半边展开后重合多出的宽度
const curtainConfigs = [
  // 客厅窗帘
  {
    positon: new Vector3(-17.3, 0, 3.2),
    rotationY: -Math.PI / 2,
    customParams: {
      switchStatus: "OFF", // 窗帘的打开/关闭状态，窗帘打开时单片半边是完全收起的，窗帘关闭时单片半边是完全展开的
      isAnimating: false, // 窗帘是否在打开/关闭动画中
      curtainHeight: 4, // 窗帘高度
      expandedWidth: 7.7, // 窗帘单片半边完全展开后的宽度
      stackedWidth: 1, // 窗帘单片半边完全收起后的宽度
      animationDuration: 1400, // 开/关窗帘动画总时长
    },
    curtainType: "voile",
  },
  // 餐厅窗帘
  {
    positon: new Vector3(17.2, 0, -2.05),
    rotationY: Math.PI / 2,
    customParams: {
      switchStatus: "ON",
      isAnimating: false,
      curtainHeight: 4,
      expandedWidth: 4.1,
      stackedWidth: 0.6,
      animationDuration: 1000,
    },
    curtainType: "voile",
  },
  // 主卧窗帘
  {
    positon: new Vector3(-17.3, 0, -12.4),
    rotationY: -Math.PI / 2,
    customParams: {
      switchStatus: "ON",
      isAnimating: false,
      curtainHeight: 4,
      expandedWidth: 3.4,
      stackedWidth: 0.5,
      animationDuration: 900,
    },
    curtainType: "cloth",
  },
  // 儿童房窗帘
  {
    positon: new Vector3(17.2, 0, -13.2),
    rotationY: Math.PI / 2,
    customParams: {
      switchStatus: "ON",
      isAnimating: false,
      curtainHeight: 4,
      expandedWidth: 2.6,
      stackedWidth: 0.4,
      animationDuration: 700,
    },
    curtainType: "cloth",
  },
  // 次卧窗帘
  {
    positon: new Vector3(-13.6, 0, 8.8),
    rotationY: -Math.PI / 2,
    customParams: {
      switchStatus: "ON",
      isAnimating: false,
      curtainHeight: 4,
      expandedWidth: 4.2,
      stackedWidth: 0.8,
      animationDuration: 1000,
    },
    curtainType: "cloth",
  },
];

export const addCurtain = (
  scene: Scene,
  assetManager: AssetManager,
  curtainListRef: MutableRefObject<Group[]>,
  mouseRaycasterIntersectObjectsRef: MutableRefObject<Object3D[]>,
  pointerControlsIntersetObjectsRef: MutableRefObject<Object3D[]>,
) => {
  // 白纱材质
  const whiteVoileMaterial = new MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    depthWrite: false, // 透明物体不写深度，避免遮挡后面的透明物体
    alphaTest: 0.5, // 设置alphaTest阈值，让半透明物体也能投射阴影
    emissive: 0x111111,
    emissiveIntensity: 0.08,
    side: DoubleSide,
  });
  assetManager.materials.set("whiteVoileMaterial", whiteVoileMaterial);

  // 布料材质
  const clothMaterial = new MeshPhysicalMaterial({
    color: 0x6b7280, // 藏青色
    roughness: 0.85, // 布料不是镜子，给高粗糙
    metalness: 0.0, // 织物非金属
    transmission: 0, // 0 = 完全不透明
    transparent: false,
    // —— 布料质感灵魂：sheen 模拟经纬微纤维边缘光 ——
    sheen: 1.0, // 开到 1，绒布/棉布都靠它
    sheenRoughness: 0.9, // 越大越哑光蓬松，越小越像缎面
    sheenColor: new Color(0xf5f5f5),
    envMapIntensity: 0.6, // 有 HDRI 时让 sheen 更自然
    side: DoubleSide,
  });
  assetManager.materials.set("clothMaterial", clothMaterial);

  curtainConfigs.forEach((item: Record<string, any>) => {
    const { positon, rotationY, customParams, curtainType } = item;
    const curtain = createCurtain(
      assetManager,
      { ...customParams, positon },
      curtainType,
    );
    curtainListRef.current.push(curtain);
    pointerControlsIntersetObjectsRef.current.push(curtain);
    mouseRaycasterIntersectObjectsRef.current.push(curtain);
    curtain.position.copy(positon);
    if (rotationY) {
      curtain.rotation.y = rotationY;
    }
    scene.add(curtain);
  });
};

// 创建窗帘
const createCurtain = (
  assetManager: AssetManager,
  customParams: Record<string, any>,
  curtainType: CurtainType,
) => {
  const planeGeometry = assetManager.geometries.get("planeGeometry");
  const whiteVoileMaterial = assetManager.materials.get("whiteVoileMaterial");
  const clothMaterial = assetManager.materials.get("clothMaterial");
  const completelyInvisibleMaterial = assetManager.materials.get(
    "completelyInvisibleMaterial",
  );
  const curtainGroup = new Group();
  curtainGroup.name = "窗帘";
  // @ts-ignore
  curtainGroup.customParams = customParams;
  const { curtainHeight, expandedWidth, stackedWidth, switchStatus } =
    customParams;

  // 由于窗帘的两个半边在动画过程中要动态修改定点位置，所以不能共用同一个PlaneGeometry
  const leftWhiteVoilePlaneGeometry = new PlaneGeometry(
    expandedWidth,
    curtainHeight,
    100,
    50,
  );
  const rightWhiteVoilePlaneGeometry = new PlaneGeometry(
    expandedWidth,
    curtainHeight,
    100,
    50,
  );
  const whiteVoileCustomParams = {
    curtainHeight,
    expandedWidth,
    stackedWidth,
  };
  const leftWhiteVoile = new Mesh(
    leftWhiteVoilePlaneGeometry,
    curtainType === "voile" ? whiteVoileMaterial : clothMaterial,
  );
  leftWhiteVoile.name = "窗帘左半边";
  leftWhiteVoile.renderOrder = 10; // 设置renderOrder，在玻璃窗之后渲染，这样在外面斜着透过玻璃窗才不会看不到半边
  leftWhiteVoile.frustumCulled = false; // 顶点变形后包围球失效，禁用视锥体剔除
  leftWhiteVoile.castShadow = true; // 启用阴影投射
  leftWhiteVoile.receiveShadow = true; // 启用接收阴影
  // @ts-ignore
  leftWhiteVoile.customParams = whiteVoileCustomParams;
  // @ts-ignore
  leftWhiteVoile.origArray = new Float32Array(
    leftWhiteVoilePlaneGeometry.attributes.position.array,
  );
  const rightWhiteVoile = new Mesh(
    rightWhiteVoilePlaneGeometry,
    curtainType === "voile" ? whiteVoileMaterial : clothMaterial,
  );
  rightWhiteVoile.name = "窗帘右半边";
  rightWhiteVoile.renderOrder = 10; // 设置renderOrder，在玻璃窗之后渲染，这样在外面斜着透过玻璃窗才不会看不到半边
  rightWhiteVoile.frustumCulled = false; // 顶点变形后包围球失效，禁用视锥体剔除
  rightWhiteVoile.castShadow = true; // 启用阴影投射
  rightWhiteVoile.receiveShadow = true; // 启用接收阴影
  // @ts-ignore
  rightWhiteVoile.customParams = whiteVoileCustomParams;
  // @ts-ignore
  rightWhiteVoile.origArray = new Float32Array(
    rightWhiteVoilePlaneGeometry.attributes.position.array,
  );
  curtainGroup.add(leftWhiteVoile);
  curtainGroup.add(rightWhiteVoile);

  // 添加不可见的碰撞检测平面，解决褶皱变形后射线检测不稳定的问题
  // 这个平面始终保持简单的矩形形状，不会像半边一样变形，宽度会随着半边进行改变
  const leftCollisionPlane = new Mesh(
    planeGeometry,
    completelyInvisibleMaterial,
  );
  leftCollisionPlane.name = "窗帘左半边碰撞检测面";
  let leftCollisionPlaneWidth = expandedWidth + whiteVoileDoublicationWidth;
  let leftCollisionPlanePositionX = -expandedWidth / 2;
  if (switchStatus === "ON") {
    leftCollisionPlaneWidth = stackedWidth;
    leftCollisionPlanePositionX = -expandedWidth + stackedWidth / 2;
  }
  leftCollisionPlane.scale.set(leftCollisionPlaneWidth, curtainHeight);
  leftCollisionPlane.position.set(
    leftCollisionPlanePositionX,
    curtainHeight / 2,
    -0.05,
  );
  // @ts-ignore
  leftCollisionPlane.customParams = whiteVoileCustomParams;
  curtainGroup.add(leftCollisionPlane);
  const rightCollisionPlane = new Mesh(
    planeGeometry,
    completelyInvisibleMaterial,
  );
  rightCollisionPlane.name = "窗帘右半边碰撞检测面";
  let rightCollisionPlaneWidth = expandedWidth + whiteVoileDoublicationWidth;
  let rightCollisionPlanePositionX = expandedWidth / 2;
  if (switchStatus === "ON") {
    rightCollisionPlaneWidth = stackedWidth;
    rightCollisionPlanePositionX = expandedWidth - stackedWidth / 2;
  }
  rightCollisionPlane.scale.set(rightCollisionPlaneWidth, curtainHeight);
  rightCollisionPlane.position.set(
    rightCollisionPlanePositionX,
    curtainHeight / 2,
    -0.05,
  );
  // @ts-ignore
  rightCollisionPlane.customParams = whiteVoileCustomParams;
  curtainGroup.add(rightCollisionPlane);

  // 初始化一次窗帘左右两个半边的各顶点位置
  updateWhiteVoile(
    leftWhiteVoile,
    switchStatus === "ON" ? 0 : 1,
    true,
    customParams.positon,
  );
  updateWhiteVoile(
    rightWhiteVoile,
    switchStatus === "ON" ? 0 : 1,
    false,
    customParams.positon,
  );

  return curtainGroup;
};

// 窗帘点击后的回调
export const onClickCurtain = (curtain: Group) => {
  // @ts-ignore
  if (curtain && !curtain.customParams.isAnimating) {
    // @ts-ignore
    curtain.customParams.startTime = performance.now();
    // @ts-ignore
    curtain.customParams.isAnimating = true;
  }
};

// 窗帘开/关动画过程渲染
export const curtainAnimationRender = (curtainList: Group[]) => {
  if (curtainList?.length > 0) {
    curtainList.forEach((curtain: Group) => {
      const { isAnimating, switchStatus, startTime, animationDuration } =
        // @ts-ignore
        curtain.customParams || {};
      if (isAnimating) {
        const now = performance.now();
        const progress = Math.min((now - startTime) / animationDuration, 1);
        if (progress < 1) {
          // 使用缓动函数,先慢后快
          const easeProgress = getEaseProgress(progress);

          let openAmt = easeProgress;
          if (switchStatus === "OFF") {
            openAmt = 1 - easeProgress;
          }
          curtain.traverse((child) => {
            if ((child as Mesh).isMesh) {
              if (child.name.startsWith("窗帘左半边")) {
                if (child.name === "窗帘左半边") {
                  updateWhiteVoile(
                    child as Mesh,
                    openAmt,
                    true,
                    curtain.position,
                  );
                } else {
                  // @ts-ignore
                  const { expandedWidth, stackedWidth } = child.customParams;
                  const openWidth = openAmt * (expandedWidth - stackedWidth);
                  const currentWidth = openWidth + stackedWidth;
                  child.scale.x = currentWidth;
                  child.position.x = -expandedWidth + currentWidth / 2;
                }
              } else if (child.name.startsWith("窗帘右半边")) {
                if (child.name === "窗帘右半边") {
                  updateWhiteVoile(
                    child as Mesh,
                    openAmt,
                    false,
                    curtain.position,
                  );
                } else {
                  // @ts-ignore
                  const { expandedWidth, stackedWidth } = child.customParams;
                  const openWidth = openAmt * (expandedWidth - stackedWidth);
                  const currentWidth = openWidth + stackedWidth;
                  child.scale.x = currentWidth;
                  child.position.x = expandedWidth - currentWidth / 2;
                }
              }
            }
          });
        } else {
          // @ts-ignore
          curtain.customParams.isAnimating = false;
          // @ts-ignore
          curtain.customParams.startTime = undefined;
          // @ts-ignore
          curtain.customParams.switchStatus =
            switchStatus === "OFF" ? "ON" : "OFF";
        }
      }
    });
  }
};

/**
 * 窗帘半边顶点变形函数
 * 褶皱：三角波，收起时密集深褶，展开时稀疏浅褶
 * @param mesh 窗帘的单片半边
 * @param origArray  半边的所有顶点
 * @param openAmt  半边当前的的展开程度，0为完全未展开，1为完全展开
 * @param isLeft  是否是窗帘的左边半边
 * @param position 整个窗帘的位置
 */
const updateWhiteVoile = (
  mesh: Mesh,
  openAmt: number,
  isLeft: boolean,
  position: Vector3,
) => {
  // @ts-ignore
  const { curtainHeight, expandedWidth, stackedWidth } = mesh.customParams;
  const pos = mesh.geometry.attributes.position;
  const arr = pos.array;

  const outerX = isLeft ? -expandedWidth : expandedWidth;

  // 内端位置
  const innerX_closed = isLeft ? outerX + stackedWidth : outerX - stackedWidth;
  const innerX_open = isLeft
    ? whiteVoileDoublicationWidth // 左片展开到中间偏右
    : -whiteVoileDoublicationWidth; // 右片展开到中间偏左
  const innerX = innerX_closed + (innerX_open - innerX_closed) * openAmt;
  const curW = Math.abs(innerX - outerX);

  // 褶皱参数随开合变化
  const foldCount = Math.max(2, Math.floor(3 + 9 * (1 - openAmt))); // 12→3
  const foldAmp = 0.13 * (1 - openAmt * 0.45); // 收起深 → 展开浅
  const stackThick = 0.16 * (1 - openAmt * 0.93); // 收起厚 → 展开薄

  const time = performance.now() * 0.001;

  for (let i = 0; i < arr.length; i += 3) {
    // @ts-ignore
    const ox = mesh.origArray[i]; // -W/2 ~ +W/2
    // @ts-ignore
    const oy = mesh.origArray[i + 1]; // -H/2 ~ +H/2

    // normX: 0=外端(墙边固定), 1=内端(活动端)
    // 左片: ox从-W/2→+W/2, normX从0→1
    // 右片: ox从+W/2→-W/2, normX从0→1 (镜像！)
    const normX = isLeft
      ? (ox + expandedWidth / 2) / expandedWidth
      : (expandedWidth / 2 - ox) / expandedWidth;

    const nx = isLeft
      ? outerX + normX * curW // 左片: -1.9 → +0.06
      : outerX - normX * curW; // 右片: +1.9 → -0.06 ← 向左走！

    // ---- 褶皱 (Z) ----
    let phase = normX * foldCount * Math.PI * 2;
    if (!isLeft) phase = -phase; // 右片翻转相位，对称美观
    let fold = (2 / Math.PI) * Math.asin(Math.sin(phase)) * foldAmp;
    // 顶部褶皱弱（挂在轨道上），底部强
    const vertF = 0.3 + 0.7 * ((oy + curtainHeight / 2) / curtainHeight);
    fold *= vertF;

    // ---- 堆叠厚度 (Z) ----
    // 收起时内端堆叠更多，二次曲线更自然
    // 两片都朝 +Z 方向（向房间内）
    const stackZ = stackThick * normX * normX;

    // 总Z
    let nz = fold + stackZ;

    // ---- 微风 ----
    const windAmt = 0.006 * (0.3 + 0.7 * normX);
    let wind = Math.sin(time * 0.7 + oy * 2.0 + normX * 3.0) * windAmt;
    wind *= vertF;
    nz += wind;

    // ---- Y：顶部贴轨道底部 ----
    const ny = oy + position.y + curtainHeight / 2;

    arr[i] = nx;
    arr[i + 1] = ny;
    arr[i + 2] = nz;
  }

  pos.needsUpdate = true;
  mesh.geometry.computeVertexNormals();
};
