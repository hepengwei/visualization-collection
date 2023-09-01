/**
 * 炫酷倒计时动画
 */
import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import SphereCollision from "sphere-collision";
import type {
  SphereCollisionC,
  GlobuleOptions,
  GlobuleC,
} from "sphere-collision/types";
import digit from "./digit";

const canvasBgColor = "#111111"; // 画布背景颜色
const collisionLossV = 5; // 碰撞时的速度损失
const moveLossV = 0.08; // 碰撞时的速度损失
let canvasWidth = 0; // 画布宽度
let canvasHeight = 0; // 画布高度
let radius = 8; // 小球半径
let marginTop = 60; // 时间对应的第一个小球距离画布上边的距离
let marginLeft = 30; // 时间对应的第一个小球距离画布左边的距离
let curShowTimeSeconds = 0; //当前显示的倒计时时间
let digitGlobulesLength = 0; // 绘制单个数字所需要的小球总数量
let colonGlobulesLength = 0; // 绘制单个冒号所需要的小球总数量
let timeGlobulesLength = 0; // 绘制时间所需要的小球总数量

const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF8800",
  "#FF4444",
  "#CC0000",
];

const CountDown = () => {
  const intl = useIntl();
  const boxRef = useRef<HTMLDivElement>(null);
  const sphereCollisionRef = useRef<SphereCollisionC | null>(null);
  const end = new Date();
  end.setTime(end.getTime() + 3600 * 1000);
  const endTime = useRef<Date>(end);

  //返回当前时间距结束时间的时长,即应显示的时间
  const getCurrentShowTimeSeconds = () => {
    const curTime = new Date();
    const ret = Math.round(
      (endTime.current?.getTime() - curTime.getTime()) / 1000
    );
    return ret >= 0 ? ret : 0;
  };

  //  创建绘制单个数字或冒号所需要的所有球体的配置列表
  const createDigitGlobulesOptions = (x: number, y: number, num: number) => {
    const digitGlobulesOptionsList = [];

    for (let i = 0, rows = digit[num].length; i < rows; i++) {
      for (let j = 0, column = digit[num][i].length; j < column; j++) {
        const globuleOptions: GlobuleOptions = {
          initX: x + j * 2 * (radius + 1) + (radius + 1),
          initY: y + i * 2 * (radius + 1) + (radius + 1),
          radius,
          color: "rgb(0,102,153)",
          isPureColor: true,
          alpha: digit[num][i][j],
          fixedPos: true,
          receiveOutForce: false,
        };
        digitGlobulesOptionsList.push(globuleOptions);
      }
    }

    return digitGlobulesOptionsList;
  };

  // 创建绘制时间所需要的所有球体的配置列表
  const createTimeGlobuleOpitons = () => {
    let timeGlobuleOptionList: GlobuleOptions[] = [];

    const hours = Math.floor(curShowTimeSeconds / 3600);
    const minutes = Math.floor((curShowTimeSeconds - hours * 3600) / 60);
    const seconds = curShowTimeSeconds % 60;

    const digit1GlobulesOptions = createDigitGlobulesOptions(
      marginLeft,
      marginTop,
      Math.floor(hours / 10)
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit1GlobulesOptions);
    digitGlobulesLength = digit1GlobulesOptions.length;

    const digit2GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 15 * (radius + 1),
      marginTop,
      Math.floor(hours % 10)
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit2GlobulesOptions);

    const digit3GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 30 * (radius + 1),
      marginTop,
      10
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit3GlobulesOptions);
    colonGlobulesLength = digit3GlobulesOptions.length;

    const digit4GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 39 * (radius + 1),
      marginTop,
      Math.floor(minutes / 10)
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit4GlobulesOptions);

    const digit5GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 54 * (radius + 1),
      marginTop,
      Math.floor(minutes % 10)
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit5GlobulesOptions);

    const digit6GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 69 * (radius + 1),
      marginTop,
      10
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit6GlobulesOptions);

    const digit7GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 78 * (radius + 1),
      marginTop,
      Math.floor(seconds / 10)
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit7GlobulesOptions);

    const digit8GlobulesOptions = createDigitGlobulesOptions(
      marginLeft + 93 * (radius + 1),
      marginTop,
      Math.floor(seconds % 10)
    );
    timeGlobuleOptionList = timeGlobuleOptionList.concat(digit8GlobulesOptions);

    timeGlobulesLength = timeGlobuleOptionList.length;
    return timeGlobuleOptionList;
  };

  // 修改单个数字所对应的所有小球实例的alpha值
  const updateDigitGlobules = (startIndex: number, num: number) => {
    if (sphereCollisionRef.current) {
      const { globuleList } = sphereCollisionRef.current;
      let globuleIndex = startIndex;
      for (let i = 0, rows = digit[num].length; i < rows; i++) {
        for (let j = 0, column = digit[num][i].length; j < column; j++) {
          globuleList[globuleIndex].alpha = digit[num][i][j];
          globuleIndex++;
        }
      }
    }
  };

  // 添加彩色小球
  const addBalls = (x: number, y: number, num: number) => {
    if (sphereCollisionRef.current) {
      const { globuleList } = sphereCollisionRef.current;
      for (let i = 0, rows = digit[num].length; i < rows; i++) {
        for (let j = 0, column = digit[num][i].length; j < column; j++) {
          if (digit[num][i][j] === 1) {
            const globuleOptions: GlobuleOptions = {
              id: { hadCollisionWall: false, vx: 0 },
              initX: x + j * 2 * (radius + 1) + (radius + 1),
              initY: y + i * 2 * (radius + 1) + (radius + 1),
              vx: 0,
              vy: -2,
              radius,
              color: colors[Math.floor(Math.random() * colors.length)],
              receiveOutForce: false,
              resistanceWallDirection: ["bottom", "top"],
              gDirection: "toBottom",
              gCoefficient: 0.3 + Math.random() * 0.02,
              collisionLossV,
              moveLossV,
            };
            const globule =
              sphereCollisionRef.current.createGlobule(globuleOptions);
            globuleList.push(globule);
          }
        }
      }
    }
  };

  // 修改时间所对应的所有小球实例的alpha值
  const update = () => {
    const nextShowTimeSeconds = getCurrentShowTimeSeconds(); //获得要显示的时间

    const nextHours = Math.floor(nextShowTimeSeconds / 3600);
    const nextMinutes = Math.floor(
      (nextShowTimeSeconds - nextHours * 3600) / 60
    );
    const nextSeconds = nextShowTimeSeconds % 60;

    const curHours = Math.floor(curShowTimeSeconds / 3600);
    const curMinutes = Math.floor((curShowTimeSeconds - curHours * 3600) / 60);
    const curSeconds = curShowTimeSeconds % 60;

    if (nextSeconds != curSeconds) {
      let startIndex = 0;
      //如果小时十位数变化添加彩球
      const hoursTensDigit = Math.floor(nextHours / 10);
      if (Math.floor(curHours / 10) != Math.floor(nextHours / 10)) {
        updateDigitGlobules(startIndex, hoursTensDigit);
        addBalls(marginLeft, marginTop, hoursTensDigit);
      }
      //如果小时个位数变化添加彩球
      startIndex += digitGlobulesLength;
      const hoursUnitsDigit = Math.floor(nextHours % 10);
      if (Math.floor(curHours % 10) != hoursUnitsDigit) {
        updateDigitGlobules(startIndex, hoursUnitsDigit);
        addBalls(marginLeft + 15 * (radius + 1), marginTop, hoursUnitsDigit);
      }
      //如果分钟十位数变化添加彩球
      startIndex += digitGlobulesLength + colonGlobulesLength;
      const minutesTensDigit = Math.floor(nextMinutes / 10);
      if (Math.floor(curMinutes / 10) != minutesTensDigit) {
        updateDigitGlobules(startIndex, minutesTensDigit);
        addBalls(marginLeft + 39 * (radius + 1), marginTop, minutesTensDigit);
      }
      //如果分钟个位数变化添加彩球
      startIndex += digitGlobulesLength;
      const minutesUnitsDigit = Math.floor(nextMinutes % 10);
      if (Math.floor(curMinutes % 10) != minutesUnitsDigit) {
        updateDigitGlobules(startIndex, minutesUnitsDigit);
        addBalls(marginLeft + 54 * (radius + 1), marginTop, minutesUnitsDigit);
      }
      //如果秒钟十位数变化添加彩球
      startIndex += digitGlobulesLength + colonGlobulesLength;
      const secondsTensDigit = Math.floor(nextSeconds / 10);
      if (Math.floor(curSeconds / 10) != secondsTensDigit) {
        updateDigitGlobules(startIndex, secondsTensDigit);
        addBalls(marginLeft + 78 * (radius + 1), marginTop, secondsTensDigit);
      }
      //如果秒钟个位数变化添加彩球
      startIndex += digitGlobulesLength;
      const secondsUnitsDigit = Math.floor(nextSeconds % 10);
      if (Math.floor(curSeconds % 10) != secondsUnitsDigit) {
        updateDigitGlobules(startIndex, secondsUnitsDigit);
        addBalls(marginLeft + 93 * (radius + 1), marginTop, secondsUnitsDigit);
      }

      curShowTimeSeconds = nextShowTimeSeconds;
    }
  };

  // 每一帧绘制所有球体之前执行的函数
  const beforeDrawGlobules = (sphereCollision: SphereCollisionC) => {
    const { ctx } = sphereCollision;
    // 绘制整个画布的背景色
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.fillStyle = canvasBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    update();
  };

  // 每一帧绘制所有球体之后执行的函数
  const afterDrawGlobules = (sphereCollision: SphereCollisionC) => {
    const { globuleList } = sphereCollision;

    // 清除已出界的小球
    const newGlobuleList = globuleList.filter(
      (global: GlobuleC, index: number) => {
        const { id, x, radius, inCollisionWall } = global;
        if (index >= timeGlobulesLength) {
          // 当彩色小球第一次碰撞地面时，给小球水平方向的一个速度
          if (inCollisionWall && !id?.hadCollisionWall) {
            const vx = Math.pow(-1, Math.ceil(Math.random() * 10)) * 1.5;
            global.vx = vx;
            global.id = { hadCollisionWall: true, vx };
          } else if (id?.vx) {
            global.vx = id.vx;
          }
          if (x <= -radius || x >= canvasWidth + radius) {
            return false;
          }
        }

        return true;
      }
    );

    sphereCollision.updateGlobuleList(newGlobuleList);
  };

  const startAnimation = () => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      curShowTimeSeconds = getCurrentShowTimeSeconds() as number;
      const globuleOptionList = createTimeGlobuleOpitons();

      // 实例化SphereCollision对象
      const sphereCollision = new SphereCollision(
        ctx,
        canvas,
        globuleOptionList,
        {
          beforeDrawGlobules,
          afterDrawGlobules,
        }
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

    marginLeft = Math.round(canvasWidth / 5);
    radius = Math.round((canvasWidth * 3) / 5 / 108) - 1;
    marginTop = Math.round(canvasHeight / 8);

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
        overflow: "hidden",
      }}
      ref={boxRef}
    >
      <canvas id="myCanvas">
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
    </div>
  );
};

export default CountDown;
