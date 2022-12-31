/**
 * 文字跳舞
 */
import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";

const canvasWidth = 324;
const canvasHeight = 570;

const CodeBgWall = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameId = useRef<number>(0);

  const init = () => {
    if (boxRef.current && videoRef.current && canvasRef.current) {
      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = canvasHeight;
      const ctx = canvasRef.current.getContext("2d", {
        willReadFrequently: true,
      }) as CanvasRenderingContext2D;

      ctxRef.current = ctx;
      videoRef.current.crossOrigin = "anonymous";
    }
  };

  const play = () => {
    if (videoRef.current && ctxRef.current) {
      ctxRef.current.drawImage(
        videoRef.current,
        0,
        0,
        canvasWidth,
        canvasHeight
      );
      const imageData = ctxRef.current.getImageData(
        0,
        0,
        canvasWidth,
        canvasHeight
      );
      ctxRef.current.clearRect(0, 0, canvasWidth, canvasHeight);
      const { data, width, height } = imageData;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const startIndex = (y * width + x) * 4;
          if (x % 6 === 0 && y % 6 === 0) {
            const avgColor =
              (data[startIndex] + data[startIndex + 1] + data[startIndex + 2]) /
              3;
            ctxRef.current.fillStyle = `rgb(${avgColor}, ${avgColor}, ${avgColor})`;
            ctxRef.current.font = "10px Arial";
            ctxRef.current.fillText("8", x, y);
          }
        }
      }
      frameId.current = window.requestAnimationFrame(play);
    }
  };

  useEffect(() => {
    init();
    play();

    return () => {
      frameId.current && cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div className={styles.container} ref={boxRef}>
      <video
        muted={false}
        autoPlay
        preload="true"
        loop
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
        crossOrigin="anonymous"
        ref={videoRef}
      >
        <source src="public/dance.mp4"></source>
      </video>
      <canvas ref={canvasRef}>您的浏览器版本过低，请更新浏览器</canvas>
      <div className={styles.tip}>
        由于CORS策略，只有本地运行项目才能正常播放
      </div>
    </div>
  );
};

export default CodeBgWall;
