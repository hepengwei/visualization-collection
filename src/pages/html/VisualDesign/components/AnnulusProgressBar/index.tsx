import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";

const speed = 0.1;

const AnnulusProgressBar = () => {
  const [, setProgress] = useState<number>(0);
  const progress = useRef<number>(0);
  const frameId = useRef<number>(0);

  const play = () => {
    let perimeter = 3.14 * 150; //这是stroke-dashoffset的值
    const circle = document.getElementById("circle");
    if (progress.current >= 100) {
      progress.current = 0;
      setProgress(0);
      const circle = document.getElementById("circle");
      if (circle) {
        circle.style.strokeDashoffset = `${perimeter.toString()}`;
      }
    } else {
      progress.current = Number((progress.current + speed).toFixed(2));
      setProgress(Number((progress.current + speed).toFixed(2)));
      perimeter = Math.floor(perimeter - (perimeter * progress.current) / 100);
      if (circle) {
        circle.style.strokeDashoffset = `${perimeter.toString()}`;
      }
    }
    frameId.current = window.requestAnimationFrame(play);
  };

  useEffect(() => {
    play();

    return () => {
      frameId.current && cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.circleOuter} />
          <svg>
            <defs>
              <radialGradient
                id="gradient"
                cx="50%"
                cy="50%"
                r="60%"
                fx="50%"
                fy="50%"
              >
                <stop offset="30%" stopColor="#3cba92" />
                <stop offset="100%" stopColor="#c1dfc4" />
              </radialGradient>
            </defs>
            <circle stroke="url(#gradient)" id="circle"></circle>
          </svg>
          <div className={styles.num}>{`${Math.floor(progress.current)}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default AnnulusProgressBar;
