/**
 * 双后处理器架构：Bloom 提取 + 主渲染合成
 */
import { MutableRefObject, RefObject } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  WebGLRenderTarget,
  HalfFloatType,
  RGBAFormat,
  Vector2,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const useDualComposer = (
  scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  mainComposerRef: MutableRefObject<EffectComposer | null>,
  bloomComposerRef: MutableRefObject<EffectComposer | null>,
  containerRef: RefObject<HTMLDivElement>,
  outlinePassRef: MutableRefObject<OutlinePass | null>,
) => {
  if (!containerRef.current) return;
  const pixelRatio = Math.min(window.devicePixelRatio, 2); // 别超过 2
  const rtOptions = {
    samples: 4, // 关键：4x MSAA, 解决出现锯齿问题
    type: HalfFloatType, // 后处理常用 HalfFloat，防色阶
    format: RGBAFormat,
  };
  const { clientWidth, clientHeight } = containerRef.current;
  const rtWidth = clientWidth * pixelRatio;
  const rtHeight = clientHeight * pixelRatio;

  // Bloom Composer
  const bloomRT = new WebGLRenderTarget(rtWidth, rtHeight, rtOptions);
  const bloomComposer = new EffectComposer(renderer, bloomRT);
  bloomComposer.renderToScreen = false;
  bloomComposer.addPass(new RenderPass(scene, camera));
  const bloomPass = new UnrealBloomPass(
    new Vector2(rtWidth, rtHeight),
    1.2,
    0.4,
    0.96,
  );
  bloomComposer.addPass(bloomPass);
  bloomComposerRef.current = bloomComposer;

  // Main Composer
  const mainRT = new WebGLRenderTarget(rtWidth, rtHeight, rtOptions); // 一定不能和bloomRT共用同一个对象
  const mainComposer = new EffectComposer(renderer, mainRT);
  mainComposer.addPass(new RenderPass(scene, camera));
  const outlinePass = createOutlinePass(scene, camera, rtWidth, rtHeight);
  outlinePassRef.current = outlinePass;
  mainComposer.addPass(outlinePass);
  const smaaPass = new SMAAPass();
  mainComposer.addPass(smaaPass); // 解决后处理产生的新的边缘锯齿问题，必须放在OutputPass之前
  mainComposer.addPass(new OutputPass());
  mainComposerRef.current = mainComposer;
};

const createOutlinePass = (
  scene: Scene,
  camera: PerspectiveCamera,
  width: number,
  height: number,
) => {
  const outlinePass = new OutlinePass(
    new Vector2(width, height),
    scene,
    camera,
  );
  outlinePass.visibleEdgeColor.set("#1758ee"); // 高亮颜色
  outlinePass.hiddenEdgeColor.set("#1758ee");
  outlinePass.edgeThickness = 2; // 边缘厚度
  outlinePass.edgeStrength = 14; // 边缘强度
  outlinePass.edgeGlow = 1; // 发光
  outlinePass.downSampleRatio = 1; // 抗锯齿
  return outlinePass;
};

export default useDualComposer;
