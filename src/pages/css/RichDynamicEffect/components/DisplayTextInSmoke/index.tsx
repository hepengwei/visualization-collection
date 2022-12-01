import React, { useEffect, useRef, useLayoutEffect } from "react";
import { Button } from "antd";
import styles from "./index.module.less";

const DisplayTextInSmoke = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  const onceAgain = () => {
    if (pRef.current) {
      Array.prototype.forEach.call(
        pRef.current.children,
        (span: HTMLSpanElement, index: number) => {
          let className = styles.span1;
          if (span.className === styles.span1) {
            className = styles.span2;
          }
          span.className = className;
        }
      );
    }
    videoRef.current?.load();
  };

  return (
    <div className={styles.container}>
      <video
        muted
        autoPlay
        preload="true"
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
        ref={videoRef}
      >
        <source src="smoke.mp4"></source>
      </video>
      <p ref={pRef}>
        <span className={styles.span1}>H</span>
        <span className={styles.span1}>E</span>
        <span className={styles.span1}>L</span>
        <span className={styles.span1}>L</span>
        <span className={styles.span1}>O</span>
        <span className={styles.span1}>W</span>
        <span className={styles.span1}>O</span>
        <span className={styles.span1}>R</span>
        <span className={styles.span1}>L</span>
        <span className={styles.span1}>D</span>
      </p>
      <Button type="primary" className={styles.btn} onClick={onceAgain}>
        Once Again
      </Button>
    </div>
  );
};

export default DisplayTextInSmoke;
