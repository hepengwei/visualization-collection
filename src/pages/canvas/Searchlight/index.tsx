/**
 * 探照灯效果
 */
import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import SphereCollision from "sphere-collision";
import type { SphereCollisionC, GlobuleC } from "sphere-collision/types";
import ModuleTitle from "@/components/ModuleTitle";

const canvasWidth = 504; // 画布宽度
const canvasHeight = 540; // 画布高度
const canvasBgColor = "black"; // 画布背景颜色
const globuleRadius = 80; // 球半径
const marginTop = 30;

const Searchlight = () => {
  const intl = useIntl();
  const sphereCollisionRef = useRef<SphereCollisionC | null>(null);
  const sphereCollisionRef2 = useRef<SphereCollisionC | null>(null);

  // 每一帧绘制所有球体之前执行的函数
  const beforeDrawGlobules = (sphereCollision: SphereCollisionC) => {
    const { ctx } = sphereCollision;
    // 绘制整个画布的背景色
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.fillStyle = canvasBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  // 每一帧绘制一个球体之后执行的函数
  const afterDrawGlobule = (globule: GlobuleC) => {
    const { ctx, x, y, radius } = globule;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    ctx.clip();
    ctx.font = "bold 150px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#058";
    ctx.fillText("CANVAS", canvasWidth / 2, canvasHeight / 4);
    ctx.fillText("CANVAS", canvasWidth / 2, canvasHeight / 2);
    ctx.fillText("CANVAS", canvasWidth / 2, (canvasHeight * 3) / 4);
    ctx.restore();
  };

  useEffect(() => {
    const canvas = document.getElementById(
      "searchlightCanvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      const sphereCollision = new SphereCollision(
        ctx,
        canvas,
        [
          {
            initX: 400,
            initY: 400,
            vx: 6,
            vy: 3,
            radius: globuleRadius,
            afterDrawGlobule,
          },
        ],
        { beforeDrawGlobules }
      );

      sphereCollisionRef.current = sphereCollision;
      sphereCollision.start();
    }

    const canvas2 = document.getElementById(
      "searchlightCanvas2"
    ) as HTMLCanvasElement;
    if (canvas2) {
      canvas2.width = canvasWidth;
      canvas2.height = canvasHeight;
      const ctx2 = canvas2.getContext("2d") as CanvasRenderingContext2D;

      const sphereCollision2 = new SphereCollision(
        ctx2,
        canvas2,
        [
          {
            initX: 180,
            initY: 450,
            vx: -4,
            vy: -2,
            radius: globuleRadius,
            // receiveOutForce: false,
            // receiveWallForce: false,
            afterDrawGlobule,
          },
          {
            initX: 420,
            initY: 150,
            vx: 2,
            vy: 4,
            radius: globuleRadius,
            // receiveOutForce: false,
            afterDrawGlobule,
          },
        ],
        { beforeDrawGlobules }
      );

      sphereCollisionRef2.current = sphereCollision2;
      sphereCollision2.start();
    }

    return () => {
      sphereCollisionRef.current?.stop();
      sphereCollisionRef2.current?.stop();
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
        minWidth: "1200px",
        backgroundImage: "linear-gradient(135deg, #224141, #162a2a)",
        position: "relative",
      }}
    >
      <ModuleTitle intlTitle="page.canvasDynamicEffect.searchlight" />
      <canvas id="searchlightCanvas" style={{ marginTop: `${marginTop}px` }}>
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
      <canvas
        id="searchlightCanvas2"
        style={{ marginLeft: "50px", marginTop: `${marginTop}px` }}
      >
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
    </div>
  );
};

export default Searchlight;
