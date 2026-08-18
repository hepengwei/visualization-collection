import { CanvasTexture, SRGBColorSpace, RepeatWrapping, Color } from "three";

export const safePlay = (video: HTMLVideoElement | null) => {
  if (document.visibilityState !== "visible") return;
  const p = video?.play();
  if (p && p.catch) {
    p.catch(() => {
      /* 省电中断，忽略 */
    });
  }
};

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

// --- 木门法线贴图（凹痕凹凸感）---
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

// --- 木门粗糙度贴图 ---
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

