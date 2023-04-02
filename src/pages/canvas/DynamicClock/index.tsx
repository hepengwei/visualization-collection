/**
 * 动态时钟
 */
import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import ModuleTitle from "@/components/ModuleTitle";

const canvasWidth = 400;
const canvasHeight = 400;
const r = canvasWidth / 2;
const rem = canvasWidth / 200;

const DynamicClock = () => {
  const intl = useIntl();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 绘制时钟的盘面、圆点和数字
  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.translate(r, r);
    ctx.lineWidth = 10 * rem;
    ctx.beginPath();
    ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, r - ctx.lineWidth, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    const hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = 18 * rem + "px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    hourNumbers.forEach((num: number, index: number) => {
      const rad = ((2 * Math.PI) / 12) * index;
      const x = Math.cos(rad) * (r - 30 * rem);
      const y = Math.sin(rad) * (r - 30 * rem);
      ctx.fillStyle = "#000000";
      ctx.fillText(num.toString(), x, y);
    });

    for (let i = 0; i < 60; i++) {
      const rad = ((2 * Math.PI) / 60) * i;
      const x = Math.cos(rad) * (r - 18 * rem);
      const y = Math.sin(rad) * (r - 18 * rem);
      ctx.beginPath();
      if (i % 5 === 0) {
        ctx.fillStyle = "#000";
      } else {
        ctx.fillStyle = "#ccc";
      }
      ctx.arc(x, y, 2 * rem, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  // 绘制时钟的时针
  const drawHour = (
    ctx: CanvasRenderingContext2D,
    hour: number,
    minute: number
  ) => {
    ctx.save();
    ctx.beginPath();
    const rad = ((2 * Math.PI) / 12) * hour;
    var minuteRad = ((2 * Math.PI) / 12 / 60) * minute;
    ctx.rotate(rad + minuteRad);
    ctx.lineWidth = 6 * rem;
    ctx.lineCap = "round";
    ctx.moveTo(0, 10 * rem);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
  };

  // 绘制时钟的分针
  const drawMinute = (ctx: CanvasRenderingContext2D, minute: number) => {
    ctx.save();
    const rad = ((2 * Math.PI) / 60) * minute;
    ctx.rotate(rad);
    ctx.lineWidth = 3 * rem;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 10 * rem);
    ctx.lineTo(0, -r + 30 * rem);
    ctx.stroke();
    ctx.restore();
  };

  // 绘制时钟的秒针
  const drawSecond = (ctx: CanvasRenderingContext2D, second: number) => {
    ctx.save();
    var rad = ((2 * Math.PI) / 60) * second;
    ctx.rotate(rad);
    ctx.fillStyle = "#c14543";
    ctx.beginPath();
    ctx.moveTo(-2 * rem, 20 * rem);
    ctx.lineTo(2 * rem, 20 * rem);
    ctx.lineTo(1, -r + 18 * rem);
    ctx.lineTo(-1, -r + 18 * rem);
    ctx.fill();
    ctx.restore();
  };

  // 绘制时钟中心的白点
  const drawDot = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(0, 0, 3 * rem, 0, 2 * Math.PI);
    ctx.fill();
  };

  // 绘制
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasWidth);
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    drawBackground(ctx);
    drawHour(ctx, hour, minute);
    drawMinute(ctx, minute);
    drawSecond(ctx, second);
    drawDot(ctx);
    ctx.restore();
  };

  useEffect(() => {
    let timer = 0;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      draw(ctx);
      timer = window.setInterval(function () {
        draw(ctx);
      }, 1000);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #224141, #162a2a)",
        position: "relative",
      }}
    >
      <ModuleTitle intlTitle="page.canvasDynamicEffect.dynamicClock" />
      <canvas ref={canvasRef}>
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
    </div>
  );
};

export default DynamicClock;
