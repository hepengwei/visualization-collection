import { useRef, useEffect, RefObject } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SRGBColorSpace,
  BufferGeometry,
  Texture,
  Material,
} from "three";
import { disposeThreeJsScene } from "utils/threejsUtil";

export type AssetManager = {
  geometries: Map<string, BufferGeometry>;
  textures: Map<string, Texture>;
  materials: Map<string, Material>;
};

type Handle = (
  scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
) => boolean | void;

type InitializeHandle = (
  scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  assetManager: AssetManager,
) => boolean | void;

const useInitialize = (
  conatinerRef: RefObject<HTMLDivElement>,
  initializeHandle?: InitializeHandle | null,
  resizeHandle?: Handle | null,
  renderHandle?: Handle | null,
) => {
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const assetManagerRef = useRef<AssetManager>({
    geometries: new Map(),
    textures: new Map(),
    materials: new Map(),
  });
  const frameId = useRef<number>(0);

  const render = () => {
    if (sceneRef.current && cameraRef.current && rendererRef.current) {
      if (renderHandle) {
        const hasRender: boolean | void = renderHandle(
          sceneRef.current,
          cameraRef.current,
          rendererRef.current,
        );
        if (!hasRender) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      } else {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      frameId.current = window.requestAnimationFrame(render);
    }
  };

  const init = () => {
    if (conatinerRef.current) {
      const { clientWidth, clientHeight } = conatinerRef.current;

      // 创建场景
      const scene = new Scene();
      sceneRef.current = scene;

      // 创建相机
      const camera = new PerspectiveCamera(
        75,
        clientWidth / clientHeight,
        0.01,
        1000,
      );
      camera.position.set(0, 0, 10);
      cameraRef.current = camera;

      // 创建渲染器
      const renderer = new WebGLRenderer({ antialias: true });
      rendererRef.current = renderer;
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.outputColorSpace = SRGBColorSpace;

      // 将Canvas插入到页面
      conatinerRef.current.append(renderer.domElement);

      // 渲染
      render();

      initializeHandle?.(scene, camera, renderer, assetManagerRef.current);
    }
  };

  const onResize = () => {
    if (
      conatinerRef.current &&
      sceneRef.current &&
      cameraRef.current &&
      rendererRef.current
    ) {
      const { clientWidth, clientHeight } = conatinerRef.current;

      // 更新相机
      cameraRef.current.aspect = clientWidth / clientHeight;
      cameraRef.current.updateProjectionMatrix();

      // 更新渲染器
      rendererRef.current.setSize(clientWidth, clientHeight);

      // 设置渲染器的像素比
      rendererRef.current.setPixelRatio(window.devicePixelRatio);

      resizeHandle?.(sceneRef.current, cameraRef.current, rendererRef.current);
    }
  };

  useEffect(() => {
    init();
    window.addEventListener("resize", onResize);

    return () => {
      frameId.current && window.cancelAnimationFrame(frameId.current);
      window.removeEventListener("resize", onResize);
      // 销毁three.js场景中的所有GPU资源对象，防止内存泄漏
      disposeThreeJsScene(sceneRef.current, rendererRef.current);
    };
  }, []);

  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current,
    assetManager: assetManagerRef.current,
    resize: onResize,
  };
};

export default useInitialize;
