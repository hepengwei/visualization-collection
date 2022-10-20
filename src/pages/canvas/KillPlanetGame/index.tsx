import React, { useRef, useEffect, useState } from "react";
import SphereCollision from "sphere-collision";
import type { SphereCollisionC, GlobuleC } from "sphere-collision/types";
import styles from "./index.module.less";

const canvasBgColor = "rgba(0, 0, 0, .2)"; // 动画时背景颜色
const playerRadius = 20; // 玩家小球半径
const bulletRadius = 5; // 子弹半径
const bulletV = 5; // 子弹速度
const planetInitV = 2.5; // 行星的初始速度
let planetV = planetInitV; // 行星的速度
let canvasWidth = 0; // 画布宽度
let canvasHeight = 0; // 画布高度
let boxOffetLeft = 0; // 该组件离窗口左边的距离
let boxOffetTop = 0; // 该组件离窗口上边的距离

enum GameStaus {
  "toPlay",
  "playing",
  "pause",
  "gameover",
}
enum Role {
  "player",
  "bullet",
  "planet",
  "particle",
}

const KillPlanetGame = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const sphereCollisionRef = useRef<SphereCollisionC | null>(null);
  const timerRef = useRef<number | null>(null);
  const incrementVTimerRef = useRef<number | null>(null);

  const [gameStatus, setGameStatus] = useState<GameStaus>(GameStaus.toPlay); // 当前游戏状态
  const gameStatusRef = useRef<GameStaus>(GameStaus.toPlay); // 当前游戏状态, 定时器的回调函数中使用
  const [score, setScore] = useState<number>(0); // 当前得分

  // 绘制整个画布的背景色
  const drawBg = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = canvasBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  // 每一帧绘制所有球体之前执行的函数
  const beforeDrawGlobules = (sphereCollision: SphereCollisionC) => {
    const { ctx } = sphereCollision;
    drawBg(ctx);
  };

  // 每一帧绘制所有球体之后执行的函数
  const afterDrawGlobules = (sphereCollision: SphereCollisionC) => {
    const { globuleList } = sphereCollision;

    // 做清除工作
    const newGlobuleList = globuleList.filter((global: GlobuleC) => {
      const { id, alpha, x, y, radius } = global;

      // 清除透明度为0的粒子
      if (id.role === Role.particle && alpha === 0) {
        return false;
      }

      // 清除已出界的子弹
      if (id.role === Role.bullet) {
        if (
          x < -radius ||
          y < -radius ||
          x > canvasWidth + radius ||
          y > canvasHeight + radius
        ) {
          return false;
        }
      }
      return true;
    });

    sphereCollision.updateGlobuleList(newGlobuleList);
  };

  // 检查玩家的小球是否与行星发生碰撞
  const checkoutPlayerCollision = (nextFrameGlobule: GlobuleC) => {
    const { inCollisionGlobule, inCollisionGlobuleList } = nextFrameGlobule;
    if (inCollisionGlobule) {
      for (let i = 0, l = inCollisionGlobuleList.length; i < l; i++) {
        const otherGlobule = inCollisionGlobuleList[i];
        if (otherGlobule.id.role === Role.planet) {
          sphereCollisionRef.current?.stop();
          setGameStatus(GameStaus.gameover);
          gameStatusRef.current = GameStaus.gameover;
          return;
        }
      }
    }
  };

  // 检查子弹是否与行星发生碰撞
  const checkoutBulletCollision = (nextFrameGlobule: GlobuleC) => {
    const { inCollisionGlobule, inCollisionGlobuleList } = nextFrameGlobule;
    if (sphereCollisionRef.current && inCollisionGlobule) {
      for (let i = 0, l = inCollisionGlobuleList.length; i < l; i++) {
        const otherGlobule = inCollisionGlobuleList[i];
        const { id, x, y, vx, vy, radius, color } = otherGlobule;
        if (id.role === Role.planet) {
          // 计算分数
          let shouldAddPlanet = false;
          if (radius - 16 > 10) {
            shouldAddPlanet = true;
            setScore(score + 100);
          } else {
            setScore(score + 250);
          }

          // 将子弹和行星清掉
          const newGlobuleList = sphereCollisionRef.current.globuleList.filter(
            (global: GlobuleC) => {
              if (global === nextFrameGlobule || global === otherGlobule) {
                return false;
              }
              return true;
            }
          );

          // 添加个新的更小的行星
          if (shouldAddPlanet) {
            const newPlanet = sphereCollisionRef.current.createGlobule({
              id: { role: Role.planet },
              initX: x,
              initY: y,
              radius: radius - 16,
              color,
              vx,
              vy,
              receiveOutForce: false,
              receiveWallForce: false,
            });
            newGlobuleList.unshift(newPlanet);
          }

          // 添加粒子实例
          for (let i = 0; i < radius * 8; i++) {
            const vx = (Math.random() - 0.5) * (Math.random() * 8);
            const vy = (Math.random() - 0.5) * (Math.random() * 8);
            const particle = sphereCollisionRef.current.createGlobule({
              id: { role: Role.particle },
              initX: x,
              initY: y,
              radius: Math.random() * 4,
              color,
              alphaChangeV: -0.02,
              vx,
              vy,
              moveLossV: 0.03,
              receiveOutForce: false,
              receiveWallForce: false,
            });
            newGlobuleList.unshift(particle);
          }

          sphereCollisionRef.current.updateGlobuleList(newGlobuleList);
          return;
        }
      }
    }
  };

  // 初始化游戏
  const initGame = () => {
    canvasWidth = 0;
    canvasHeight = 0;
    boxOffetLeft = 0;
    boxOffetTop = 0;
    const canvas = document.getElementById("myCanvas2") as HTMLCanvasElement;
    if (canvas) {
      if (score !== 0) {
        setScore(0);
      }
      planetV = planetInitV;
      if (boxRef.current) {
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
          boxRef.current;
        canvasWidth = offsetWidth;
        canvasHeight = offsetHeight;
        boxOffetLeft = offsetLeft;
        boxOffetTop = offsetTop;
      } else {
        return;
      }
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      drawBg(ctx);

      // 实例化SphereCollision对象，先添加一个玩家的球体
      const sphereCollision: SphereCollisionC = new SphereCollision(
        ctx,
        canvas,
        [
          {
            id: { role: Role.player },
            initX: canvasWidth / 2,
            initY: canvasHeight / 2,
            radius: playerRadius,
            color: "#ffffff",
            fixedPos: true,
            receiveOutForce: false,
            onlyCheckCollision: true,
            afterCalculateNextFrameGlobule: checkoutPlayerCollision,
          },
        ],
        false,
        beforeDrawGlobules,
        afterDrawGlobules
      );

      sphereCollisionRef.current = sphereCollision;
    }
  };

  useEffect(() => {
    initGame();
    return () => {
      sphereCollisionRef.current?.stop();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (incrementVTimerRef.current) {
        clearInterval(incrementVTimerRef.current);
      }
    };
  }, []);

  // 监听鼠标按下
  const onMouseDown = (e: React.MouseEvent) => {
    if (gameStatus !== GameStaus.playing || !sphereCollisionRef.current) return;
    const angle = Math.atan2(
      e.clientY - boxOffetTop - canvasHeight / 2,
      e.clientX - boxOffetLeft - canvasWidth / 2
    );
    const vx = Math.cos(angle) * bulletV;
    const vy = Math.sin(angle) * bulletV;

    // 产生子弹实例并添加到列表中
    const bullet: GlobuleC = sphereCollisionRef.current.createGlobule({
      id: { role: Role.bullet },
      initX: canvasWidth / 2,
      initY: canvasHeight / 2,
      radius: bulletRadius,
      color: "#ffffff",
      vx,
      vy,
      receiveWallForce: false,
      receiveOutForce: false,
      onlyCheckCollision: true,
      afterCalculateNextFrameGlobule: checkoutBulletCollision,
    });
    sphereCollisionRef.current.globuleList.unshift(bullet);
  };

  // 点击开始游戏
  const startGame = () => {
    setGameStatus(GameStaus.playing);
    gameStatusRef.current = GameStaus.playing;
    if (sphereCollisionRef.current) {
      sphereCollisionRef.current.start();

      // 产生行星
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = 0;
      }
      timerRef.current = window.setInterval(() => {
        if (
          gameStatusRef.current !== GameStaus.playing ||
          !sphereCollisionRef.current
        )
          return;
        // 随机大小
        const radius = Math.random() * (35 - 15) + 15;
        // 随机颜色
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
        let initX, initY;
        // 随机位置
        if (Math.random() < 0.5) {
          initX = Math.random() < 0.5 ? 0 - radius : canvasWidth + radius;
          initY = Math.random() * canvasHeight + radius;
        } else {
          initX = Math.random() * canvasWidth + radius;
          initY = Math.random() < 0.5 ? 0 - radius : canvasHeight + radius;
        }
        const angle = Math.atan2(
          canvasHeight / 2 - initY,
          canvasWidth / 2 - initX
        );
        const vx = Math.cos(angle) * planetV;
        const vy = Math.sin(angle) * planetV;
        const planet = sphereCollisionRef.current.createGlobule({
          id: { role: Role.planet },
          initX,
          initY,
          radius,
          color,
          vx,
          vy,
          receiveOutForce: false,
          receiveWallForce: false,
        });
        sphereCollisionRef.current.globuleList.unshift(planet);
      }, 1500);

      // 每过20秒行星的速度增加1
      if (incrementVTimerRef.current) {
        clearInterval(incrementVTimerRef.current);
        incrementVTimerRef.current = 0;
      }
      incrementVTimerRef.current = window.setInterval(function () {
        planetV += 1;
      }, 1000 * 20);
    }
  };

  // 点击暂停
  const pauseGame = () => {
    if (gameStatus !== GameStaus.playing) return;
    setGameStatus(GameStaus.pause);
    gameStatusRef.current = GameStaus.pause;
    sphereCollisionRef.current?.stop();
  };

  // 点击继续游戏
  const continueGame = () => {
    setGameStatus(GameStaus.playing);
    gameStatusRef.current = GameStaus.playing;
    sphereCollisionRef.current?.start();
  };

  // 点击重新开始
  const restartGame = () => {
    setGameStatus(GameStaus.toPlay);
    gameStatusRef.current = GameStaus.toPlay;
    initGame();
  };

  return (
    <div
      className={styles.container}
      ref={boxRef}
      onMouseDown={onMouseDown}
      style={{
        backgroundColor: [GameStaus.toPlay].includes(gameStatus)
          ? "#000"
          : "transparent",
      }}
    >
      <canvas id="myCanvas2">您的浏览器版本过低，请更新浏览器</canvas>
      {gameStatus === GameStaus.toPlay && (
        <button className={styles.startBtn} onClick={startGame}>
          开 始 游 戏
        </button>
      )}
      {gameStatus !== GameStaus.toPlay && (
        <div className={styles.scoreBox}>
          <span>分数：</span>
          <span className={styles.score}>{score}</span>
        </div>
      )}
      {[GameStaus.playing, GameStaus.pause].includes(gameStatus) && (
        <div className={styles.pauseBtn} onClick={pauseGame}>
          暂停
        </div>
      )}
      {gameStatus === GameStaus.pause && (
        <div className={styles.gamepause}>
          <h1>游戏已暂停</h1>
          <button className={styles.continueBtn} onClick={continueGame}>
            继 续 游 戏
          </button>
        </div>
      )}
      {gameStatus === GameStaus.gameover && (
        <div className={styles.gameover}>
          <h1>
            分数：<span className={styles.finallyScore}>{score}</span>
          </h1>
          <button className={styles.restartBtn} onClick={restartGame}>
            重 新 开 始
          </button>
        </div>
      )}
    </div>
  );
};

export default KillPlanetGame;
