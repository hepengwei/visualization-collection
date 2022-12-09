/**
 * 水波荡漾效果
 */
import React, { useEffect, useRef } from "react";
import WaterRipple from "./waterRipple";
import waterBg from "images/canvas/water.png";

let canvasWidth = 600;
let canvasHeight = 600;

const RippleFloatOnTheWater = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waterRippleRef = useRef<WaterRipple | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (boxRef.current && canvasRef.current) {
      const { offsetWidth, offsetHeight } = boxRef.current;
      canvasWidth = offsetWidth;
      canvasHeight = offsetHeight;
      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = canvasHeight;

      const waterImg = new Image();
      waterImg.src = waterBg;
      const waterRipple = new WaterRipple({
        canvas: canvasRef.current,
        background: waterImg,
        boxRef,
      });
      waterRippleRef.current = waterRipple;

      waterRipple.animate();

      timerRef.current = window.setInterval(() => {
        const x = Math.floor(canvasWidth * Math.random());
        const y = Math.floor(canvasHeight * Math.random());
        waterRipple.ripple(x, y);
      }, 1000);

      waterRipple.addMousemove();
    }

    return () => {
      timerRef.current && clearInterval(timerRef.current);
      waterRippleRef.current?.stop();
    };
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
      ref={boxRef}
    >
      <canvas ref={canvasRef}>您的浏览器版本过低，请更新浏览器</canvas>
    </div>
  );
};

export default RippleFloatOnTheWater;
