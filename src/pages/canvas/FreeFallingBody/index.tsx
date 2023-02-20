/**
 * 球体自由落体交互效果
 */
import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import SphereCollision from "sphere-collision";
import type { SphereCollisionC, GlobuleOptions } from "sphere-collision/types";
import basketball from "images/canvas/basketball.png";
import football from "images/canvas/football.png";
import baseball from "images/canvas/baseball.png";
import pingPong from "images/canvas/pingPong.png";

let canvasWidth = 0; // 画布宽度
let canvasHeight = 0; // 画布高度
const canvasBgColor = "#111111"; // 画布背景颜色

const globuleOptionList: GlobuleOptions[] = [
  {
    radius: 14,
    //  gDirection: "toTop",
    gDirection: "toBottom",
    gCoefficient: 0.2,
    collisionLossV: 1.2,
    moveLossV: 0.006,
    requiredMouseInteraction: true,
    mouseInteractionBehavior: "drag",
    bgImg: pingPong,
  },
  {
    radius: 26,
    gDirection: "toBottom",
    gCoefficient: 0.3,
    collisionLossV: 0.8,
    moveLossV: 0.006,
    requiredMouseInteraction: true,
    mouseInteractionBehavior: "drag",
    bgImg: baseball,
  },
  {
    radius: 60,
    //  gDirection: "toLeft",
    gDirection: "toBottom",
    gCoefficient: 0.25,
    collisionLossV: 0.9,
    moveLossV: 0.006,
    requiredMouseInteraction: true,
    mouseInteractionBehavior: "drag",
    bgImg: basketball,
  },
  {
    radius: 54,
    //  gDirection: "toRight",
    gDirection: "toBottom",
    gCoefficient: 0.25,
    collisionLossV: 1,
    moveLossV: 0.006,
    requiredMouseInteraction: true,
    mouseInteractionBehavior: "drag",
    bgImg: football,
  },
];

const FreeFallingBody = () => {
  const intl = useIntl();
  const boxRef = useRef<HTMLDivElement>(null);
  const sphereCollisionRef = useRef<SphereCollisionC | null>(null);

  // 每一帧绘制所有球体之前执行的函数
  const beforeDrawGlobules = (sphereCollision: SphereCollisionC) => {
    const { ctx } = sphereCollision;
    // 绘制整个画布的背景色
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.fillStyle = canvasBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  // 鼠标按下时的回调
  const onMouseDownCanvas = (
    e: MouseEvent,
    sphereCollision: SphereCollisionC
  ) => {
    const { mouseDownPos, globuleList, mouseInGlobuleList } = sphereCollision;
    if (mouseInGlobuleList.length > 0) return;
    const globuleType = Math.floor(Math.random() * globuleOptionList.length);
    const globuleOptions = Object.assign({}, globuleOptionList[globuleType], {
      initX: mouseDownPos.mouseX,
      initY: mouseDownPos.mouseY,
    });
    const newGlobule = sphereCollision.createGlobule(globuleOptions);
    const newGlobuleList = [...globuleList, newGlobule];
    sphereCollision.updateGlobuleList(newGlobuleList);
  };

  const startAnimation = () => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      // 实例化SphereCollision对象
      const sphereCollision = new SphereCollision(ctx, canvas, [], {
        monitorMousePos: true,
        beforeDrawGlobules,
        onMouseDownCanvas,
      });

      sphereCollisionRef.current = sphereCollision;
      // 开使执行动画
      sphereCollision.start();
    }
  };

  useEffect(() => {
    if (boxRef.current) {
      const { offsetWidth, offsetHeight } = boxRef.current;
      canvasWidth = offsetWidth;
      canvasHeight = offsetHeight;
    } else {
      canvasWidth = 600;
      canvasHeight = 600;
    }
    startAnimation();

    return () => {
      sphereCollisionRef.current?.stop();
    };
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
      }}
      ref={boxRef}
    >
      <canvas id="myCanvas">
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
    </div>
  );
};

export default FreeFallingBody;
