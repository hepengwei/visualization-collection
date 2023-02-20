/**
 * 花卉绽放动画
 */
import React, { useCallback, useEffect, useRef } from "react";
import { useIntl } from "react-intl";

let canvasWidth = 600;
let canvasHeight = 600;
let layout = 0;

const defaultPointer = {
  x: 0,
  y: 0,
};

const FlowerBloom = () => {
  const intl = useIntl();
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameId = useRef<number>(0);
  const pointer = useRef<typeof defaultPointer>(defaultPointer);
  const flowerList = useRef<Flower[]>([]);

  const init = () => {
    layout = 0;
    if (boxRef.current && canvasRef.current) {
      boxRef.current.style.backgroundColor = "rgb(11, 11, 11)";
      resize();
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      ctxRef.current = ctx;
      ctxRef.current.fillStyle = "rgba(8,8,8,0.05)";
      ctxRef.current.fillRect(0, 0, canvasWidth, canvasHeight);
    }
  };

  const play = () => {
    if (ctxRef.current) {
      for (let i = 0, l = flowerList.current.length; i < l; i++) {
        const flower = flowerList.current[i];
        flower.draw(ctxRef.current);
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

  const mouseMove = useCallback((e: MouseEvent) => {
    if (canvasRef.current) {
      const oldX = pointer.current.x;
      const oldY = pointer.current.y;
      const { top, left } = canvasRef.current.getBoundingClientRect();
      const newX = e.clientX - left;
      const newY = e.clientY - top;
      pointer.current.x = newX;
      pointer.current.y = newY;

      const flower = new Flower();
      const angle = Math.atan2(newY - oldY, newX - oldX);
      flower.reset(newX, newY, angle);
      flowerList.current.push(flower);
      if (flowerList.current.length > 200) {
        flowerList.current.shift();
      }

      layout += 1;
      if (boxRef.current && layout > 140) {
        const { backgroundColor } = boxRef.current.style || {};
        if (backgroundColor === "rgb(11, 11, 11)") {
          boxRef.current.style.backgroundColor = "transparent";
        }
      }
      if (ctxRef.current && layout % 3 === 0) {
        ctxRef.current.fillStyle = "rgba(8,8,8,0.05)";
        ctxRef.current.fillRect(0, 0, canvasWidth, canvasHeight);
      }
    }
  }, []);

  useEffect(() => {
    init();
    if (canvasRef.current) {
      canvasRef.current.addEventListener("mousemove", mouseMove);
    }
    play();

    return () => {
      frameId.current && cancelAnimationFrame(frameId.current);
      canvasRef.current &&
        canvasRef.current.removeEventListener("mousemove", mouseMove);
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
      }}
      ref={boxRef}
    >
      <canvas ref={canvasRef}>
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
    </div>
  );
};

// 画圆花卉类
class Flower {
  x: number;
  y: number;
  angle: number;
  dAngle: number;
  radius: number;
  color: string;
  stop: boolean;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    const dAngle = Math.random();
    this.dAngle = Math.random() > 0.5 ? dAngle : -dAngle;
    this.radius = Math.random() * 20 + 5;
    this.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    this.stop = false;
  }

  reset(x: number, y: number, angle: number) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.stop) return;
    this.x += Math.cos(this.angle) * this.radius;
    this.y += Math.sin(this.angle) * this.radius;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius * 0.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    this.angle += this.dAngle;
    this.radius -= 0.4;
    if (this.radius <= 0) {
      this.stop = true;
    }
  }
}

export default FlowerBloom;
