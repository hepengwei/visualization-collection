import {
  CanvasTexture,
  SRGBColorSpace,
  RepeatWrapping,
  EquirectangularReflectionMapping,
  Color,
} from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";

// 生成天空贴图
export const generateSkyTexture = (width = 1024, height = 512) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // 1. 天空渐变
  const skyGradient = ctx.createLinearGradient(0, 0, 0, height);
  skyGradient.addColorStop(0, "#3c82de"); // 天顶蓝
  skyGradient.addColorStop(0.25, "#6fa8f9"); // 蓝
  skyGradient.addColorStop(0.65, "#87CEEB"); // 中景
  skyGradient.addColorStop(1, "#d6eaf8"); // 地平线浅蓝
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, width, height);

  // 2. 画云函数
  function drawCloud(
    x: number,
    y: number,
    w: number,
    h: number,
    alpha: number,
  ) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#ffffff";

    const steps = 30;
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const radius = (Math.sin(t * Math.PI) * w) / 2;
      const cx = x + t * w;
      const cy = y + Math.sin(t * Math.PI) * h * 0.3;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // 3. 随机云朵
  const cloudCount = 30;
  for (let i = 0; i < cloudCount; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height * 0.45;
    const w = 40 + Math.random() * 80;
    const h = 12 + Math.random() * 8;
    const alpha = 0.25 + Math.random() * 0.3;
    drawCloud(x, y, w, h, alpha);
  }

  // 4. 转为 Three.js 贴图
  const texture = new CanvasTexture(canvas);
  texture.mapping = EquirectangularReflectionMapping;
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
};

export const safePlay = (video: HTMLVideoElement | null) => {
  if (document.visibilityState !== "visible") return;
  const p = video?.play();
  if (p && p.catch) {
    p.catch(() => {
      /* 省电中断，忽略 */
    });
  }
};

// 动画的缓动函数,先慢后快
export const getEaseProgress = (progress: number) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

const makeSeedableRand = (seedVal: number) => {
  let s = seedVal;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

// 程式化生成横向拉丝凹痕感灰白色烤漆木门贴图
export const generateColorMap = (color: Color, size = 1024) => {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const rand = makeSeedableRand(42);

  // 底色烤漆
  ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`;
  ctx.fillRect(0, 0, size, size);

  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;

  // 第1层：高频横向拉丝（每一条水平线微亮/微暗交替）
  for (let y = 0; y < size; y++) {
    const lineVar = 0.93 + rand() * 0.14;
    const sweep = Math.sin(y * 0.008) * 0.02;
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const grain = Math.sin(x * 0.4 + rand() * 0.5) * 0.015;
      const v = lineVar + sweep + grain;
      d[idx] = Math.min(255, color.r * v);
      d[idx + 1] = Math.min(255, color.g * v);
      d[idx + 2] = Math.min(255, color.b * v);
    }
  }
  ctx.putImageData(img, 0, 0);

  // 第2层：中频宽条拉丝带（刷漆痕迹）
  ctx.globalAlpha = 0.05;
  for (let i = 0; i < 500; i++) {
    const y = rand() * size;
    const h = 1 + rand() * 3;
    ctx.fillStyle =
      rand() > 0.5 ? "rgba(255,255,255,0.7)" : "rgba(140,140,140,0.5)";
    ctx.fillRect(0, y, size, h);
  }

  // 第3层：低频深凹痕（手工打磨感）
  ctx.globalAlpha = 0.035;
  for (let i = 0; i < 60; i++) {
    const y = rand() * size;
    const h = 3 + rand() * 7;
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, "rgba(30,30,30,0.3)");
    g.addColorStop(0.5, "rgba(15,15,15,0.6)");
    g.addColorStop(1, "rgba(30,30,30,0.3)");
    ctx.fillStyle = g;
    ctx.fillRect(0, y, size, h);
  }
  ctx.globalAlpha = 1;

  // 第4层：颗粒噪点（漆面微颗粒质感）
  const img2 = ctx.getImageData(0, 0, size, size);
  const d2 = img2.data;
  for (let i = 0; i < d2.length; i += 4) {
    const n = (rand() - 0.5) * 5;
    d2[i] = Math.max(0, Math.min(255, d2[i] + n));
    d2[i + 1] = Math.max(0, Math.min(255, d2[i + 1] + n));
    d2[i + 2] = Math.max(0, Math.min(255, d2[i + 2] + n));
  }
  ctx.putImageData(img2, 0, 0);

  // 第5层：竖向光泽条纹（烤漆不均匀反光）
  ctx.globalAlpha = 0.025;
  for (let i = 0; i < 25; i++) {
    const x = rand() * size;
    const w = 3 + rand() * 10;
    const g = ctx.createLinearGradient(x, 0, x + w, 0);
    g.addColorStop(0, "rgba(255,255,255,0)");
    g.addColorStop(0.5, "rgba(255,255,255,0.7)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x, 0, w, size);
  }
  ctx.globalAlpha = 1;

  const tex = new CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 16;
  tex.colorSpace = SRGBColorSpace;
  return tex;
};

// 生成木门法线贴图（凹痕凹凸感）
export const generateNormalMap = (size = 1024) => {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const rand = makeSeedableRand(99);

  // 基础平面法线
  ctx.fillStyle = "rgb(128,128,255)";
  ctx.fillRect(0, 0, size, size);

  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;

  // 横向凹痕 → 沿Y方向的法线扰动
  for (let i = 0; i < 180; i++) {
    const y0 = Math.floor(rand() * size);
    const h = Math.floor(2 + rand() * 5);
    const intensity = (rand() - 0.5) * 50;
    for (let dy = 0; dy < h; dy++) {
      const yy = (y0 + dy) % size;
      for (let x = 0; x < size; x++) {
        const idx = (yy * size + x) * 4;
        const falloff = 1 - dy / h;
        d[idx + 1] = Math.max(0, Math.min(255, 128 + intensity * falloff));
      }
    }
  }

  // 高频微噪声
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - 0.5) * 6;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n * 0.5));
  }
  ctx.putImageData(img, 0, 0);

  const tex = new CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 16;
  return tex;
};

// 生成木门粗糙度贴图
export const generateRoughnessMap = (size = 1024) => {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const rand = makeSeedableRand(7);

  // 烤漆整体较光滑
  ctx.fillStyle = "rgb(155,155,155)";
  ctx.fillRect(0, 0, size, size);

  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;

  // 拉丝带略粗糙
  for (let i = 0; i < 350; i++) {
    const y0 = Math.floor(rand() * size);
    const h = Math.floor(1 + rand() * 3);
    const add = Math.floor(rand() * 35);
    for (let dy = 0; dy < h; dy++) {
      const yy = (y0 + dy) % size;
      for (let x = 0; x < size; x++) {
        const idx = (yy * size + x) * 4;
        const v = Math.min(255, 55 + add);
        d[idx] = d[idx + 1] = d[idx + 2] = v;
      }
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  return tex;
};

/**
 * @description: 生成椭圆形的圆环刚体
 * @param {number} longRadius 椭圆长轴半径
 * @param {number} shortRadius 椭圆短轴半径
 * @param {number} tube 圆环截面半径
 * @return {ParametricGeometry}
 */
export const generateEllipticalTorusGeometry = (
  longRadius: number,
  shortRadius: number,
  tube: number,
) => {
  return new ParametricGeometry(
    (u, v, target) => {
      const theta = 2 * Math.PI * u; // 椭圆轨道角
      const phi = 2 * Math.PI * v; // 截面角

      const x =
        longRadius * Math.cos(theta) + tube * Math.cos(phi) * Math.cos(theta);
      const z =
        shortRadius * Math.sin(theta) + tube * Math.cos(phi) * Math.sin(theta);
      const y = tube * Math.sin(phi);

      target.set(x, y, z);
    },
    120, // 轨道分段
    40, // 截面分段
  );
};
