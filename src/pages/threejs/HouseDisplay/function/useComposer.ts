/**
 * 单后处理器架构：手动渲染场景 + Bloom + Outline + SMAA + Output
 * 相比双后处理器架构，每帧减少 1 次场景渲染
 */
import { MutableRefObject, RefObject } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  WebGLRenderTarget,
  HalfFloatType,
  RGBAFormat,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
// import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const useComposer = (
  scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  mainComposerRef: MutableRefObject<EffectComposer | null>,
  containerRef: RefObject<HTMLDivElement>,
  outlinePassRef: MutableRefObject<OutlinePass | null>,
) => {
  if (!containerRef.current) return;
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const { clientWidth, clientHeight } = containerRef.current;
  const rtWidth = clientWidth * pixelRatio;
  const rtHeight = clientHeight * pixelRatio;
  const rtOptions = {
    samples: 4, // 关键：4x MSAA, 解决出现锯齿问题
    type: HalfFloatType, // 后处理常用 HalfFloat，防色阶
    format: RGBAFormat,
  };
  const mainRT = new WebGLRenderTarget(rtWidth, rtHeight, rtOptions);

  // 创建单个 composer，不含 RenderPass（手动渲染替代）
  const mainComposer = new EffectComposer(renderer, mainRT);

  // Bloom Pass
  // const bloomPass = new UnrealBloomPass(
  //   new Vector2(rtWidth, rtHeight),
  //   1.2,
  //   0.4,
  //   0.96,
  // );
  // mainComposer.addPass(bloomPass);

  // Outline Pass
  const outlinePass = new OutlinePass(
    new Vector2(rtWidth, rtHeight),
    scene,
    camera,
  );
  outlinePass.visibleEdgeColor.set("#1758ee");
  outlinePass.hiddenEdgeColor.set("#1758ee");
  outlinePass.edgeThickness = 2;
  outlinePass.edgeStrength = 14;
  outlinePass.edgeGlow = 1;
  outlinePass.downSampleRatio = 1;
  outlinePassRef.current = outlinePass;
  mainComposer.addPass(outlinePass);

  // SMAA Pass
  const smaaPass = new SMAAPass();
  mainComposer.addPass(smaaPass);

  // Output Pass（最后一个 pass 自动渲染到屏幕）
  mainComposer.addPass(new OutputPass());

  mainComposerRef.current = mainComposer;

  // 手动渲染场景到 composer 的 readBuffer，替代 RenderPass
  // 这样整个 pass 链只需渲染 1 次场景（而非 2 次）
  const renderScene = () => {
    const readBuffer = (mainComposer as any).readBuffer;
    if (readBuffer) {
      renderer.setRenderTarget(readBuffer);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
    }
  };

  // 遍历 passes 手动调用 render（替代 composer.render()，避免内部再次渲染场景）
  const renderComposer = () => {
    for (const pass of mainComposer.passes) {
      if (!pass.enabled) continue;
      pass.renderToScreen =
        pass === mainComposer.passes[mainComposer.passes.length - 1];
      pass.render(
        renderer,
        mainComposer.writeBuffer,
        mainComposer.readBuffer,
        0,
        false,
      );
      if (pass.needsSwap) {
        mainComposer.swapBuffers();
      }
    }
    renderer.setRenderTarget(null);
  };

  // 暴露渲染方法到 composer 对象上，供 index.tsx 调用
  (mainComposer as any).__customRender = () => {
    renderScene();
    renderComposer();
  };
};

export default useComposer;
