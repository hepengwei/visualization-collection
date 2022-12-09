/**
 * 代码背景墙
 */
import React, { useEffect, useRef } from "react";

let canvasWidth = 600;
let canvasHeight = 600;

const text = "abcdefghijklmnopqrstuvwxyz";
const bl = 26;

const CodeBgWall = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameId = useRef<number>(0);
  const startRatesRef = useRef<Record<number, number>>({});
  const ratesRef = useRef<Record<number, number>>({});
  const endRatesRef = useRef<Record<number, number>>({});
  const textObjRef = useRef<Record<string, string>>({});

  const init = () => {
    if (boxRef.current && canvasRef.current) {
      resize();
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      ctx.font = "14px SourceHanSansCN-Regular";
      ctxRef.current = ctx;
    }
  };

  const play = () => {
    if (ctxRef.current) {
      ctxRef.current.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let i = 0; i < canvasWidth; i += bl) {
        ctxRef.current.beginPath();
        const gradient = ctxRef.current.createLinearGradient(
          0,
          0,
          0,
          canvasHeight
        );
        const s1 = 0.2 * Math.random();
        const s2 = 0.8 * Math.random() + 0.2;
        const step = 0.02 * Math.random();
        const startRates = startRatesRef.current;
        const rates = ratesRef.current;
        const endRates = endRatesRef.current;
        const textObj = textObjRef.current;
        rates[i] = rates[i] || -s1;
        endRates[i] = endRates[i] || 0;
        startRates[i] = startRates[i] || -s2;
        gradient.addColorStop(0, "#000000");
        gradient.addColorStop(startRates[i] < 0 ? 0 : startRates[i], "#000000");
        gradient.addColorStop(rates[i] < 0 ? 0 : rates[i], "#0ee30e");
        gradient.addColorStop(endRates[i], "#000000");
        gradient.addColorStop(1, "#000000");
        ctxRef.current.fillStyle = gradient;
        for (let j = 0; j < canvasHeight; j += bl) {
          textObj[i + "-" + j] =
            textObj[i + "-" + j] ||
            text[Math.floor(Math.random() * text.length)];
          ctxRef.current.fillText(textObj[i + "-" + j], i, j);
        }
        rates[i] += step;
        endRates[i] += step;
        startRates[i] += step;
        if (startRates[i] > 1) {
          startRates[i] = -s2;
        }
        if (rates[i] > 1) {
          if (startRates[i] === -s2) {
            rates[i] = -s1;
          } else {
            rates[i] = 1;
          }
        }
        if (endRates[i] > 1) {
          if (rates[i] === -s1 && startRates[i] === -s2) {
            endRates[i] = step;
          } else {
            endRates[i] = 1;
          }
        }
      }

      frameId.current = window.requestAnimationFrame(play);
    }
  };

  const resize = () => {
    if (boxRef.current && canvasRef.current) {
      const { offsetWidth, offsetHeight } = boxRef.current;
      canvasWidth = offsetWidth;
      canvasHeight = offsetHeight;
      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = canvasHeight;
    }
  };

  useEffect(() => {
    init();
    play();

    return () => {
      frameId.current && cancelAnimationFrame(frameId.current);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#000",
      }}
      ref={boxRef}
    >
      <canvas ref={canvasRef}>您的浏览器版本过低，请更新浏览器</canvas>
    </div>
  );
};

export default CodeBgWall;
