import React, { useEffect, useRef } from "react";
import SphereCollision from "sphere-collision";
import type {
  SphereCollisionC,
  GlobuleC,
  GlobuleOptions,
} from "sphere-collision/types";
import bubble from "images/bubble.png";

let canvasWidth = 0; // 画布宽度
let canvasHeight= 0; // 画布高度
const canvasBgColor = "#111111"; // 画布背景颜色
const globuleNum = 8; // 球的总数量
const oneRowGlobuleNum = 4; // 每行显示球的数量
const globuleHorizontalMargin = 34; // 两球之间水平方向的距离
const globuleVerticalMargin = 50; // 两球之间垂直方向的距离

const globuleRadius = 80; // 球半径
const fontSize = 40; // 文字大小
const textColor = "#E76F5A"; // 文字颜色
const maxMouseOutForce = 25; // 鼠标交互时能提供的最大力限制
const collisionLossV = 0.4; // 碰撞损失的速度
const moveLossV = 0.02; // 运动损失的速度
const maxMoveV = null; // 小球最大移动速度限制
const gDirection = "toInit"; // 引力方向。目前只有“toInit”，朝向原始位置。
const gCoefficient = 0.002; // 引力系数

const GlobuleInteraction = () => {
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

  // 每一帧绘制一个球体之后执行的函数
  const afterDrawGlobule = (globule: GlobuleC) => {
    const { ctx, id, x, y } = globule;
    ctx.font = `bold ${fontSize}px Georgia`;
    ctx.fillStyle = textColor;
    ctx.fillText(id, x - fontSize / 2 + 8, y + fontSize / 2 - 10);
  };

  const startAnimation = () => {
    const canvas = document.getElementById(
      "globuleInteractionCanvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      const globuleOptionsList: GlobuleOptions[] = [];
      // 需要显示小球的行数
      const rowNum = Math.ceil(globuleNum / oneRowGlobuleNum);
      // 计算出第一个小球所在的x位置
      const firstGlobuleX =
        (canvasWidth -
          oneRowGlobuleNum * 2 * globuleRadius -
          (oneRowGlobuleNum - 1) * globuleHorizontalMargin) /
          2 +
        globuleRadius;
      // 计算出第一个小球所在的y位置
      const firstGlobuleY =
        (canvasHeight -
          rowNum * 2 * globuleRadius -
          (rowNum - 1) * globuleVerticalMargin) /
          2 +
        globuleRadius;

      // 实例出所有小球,并保存到数组中
      let xNow = firstGlobuleX;
      let yNow = firstGlobuleY;
      for (let i = 0; i < globuleNum; i++) {
        const globuleOptions: GlobuleOptions = {
          id: (i + 1).toString(),
          initX: xNow,
          initY: yNow,
          radius: globuleRadius,
          bgImg: bubble,
          collisionLossV,
          moveLossV,
          gDirection,
          gCoefficient,
          requiredMouseInteraction: true,
          maxMouseOutForce,
          maxMoveV,
          afterDrawGlobule,
          // fixedPos: i === 2 || i === 4,
          // receiveOutForce: i !== 2,
        };
        globuleOptionsList.push(globuleOptions);
        if ((i + 1) % oneRowGlobuleNum === 0) {
          xNow = firstGlobuleX;
          yNow += 2 * globuleRadius + globuleVerticalMargin;
        } else {
          xNow += 2 * globuleRadius + globuleHorizontalMargin;
        }
      }

      // 实例化SphereCollision对象
      const sphereCollision = new SphereCollision(
        ctx,
        canvas,
        globuleOptionsList,
        true,
        beforeDrawGlobules
      );

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
        width: "100%",
        height: "100%",
      }}
      ref={boxRef}
    >
      <canvas id="globuleInteractionCanvas">
        您的浏览器版本过低，请更新浏览器
      </canvas>
    </div>
  );
};

export default GlobuleInteraction;
