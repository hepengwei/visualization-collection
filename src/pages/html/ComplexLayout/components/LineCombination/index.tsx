import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";

const pointWidth = 8;
const boxRadius = 8;
let frameId = 0;
let movePointIndex = 0;
let movePointV = 4;

const LineCombination = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 移动光点
  const movePoint = () => {
    if (containerRef.current) {
      const nativeNode = ReactDOM.findDOMNode(
        containerRef.current
      ) as HTMLDivElement;
      if (nativeNode) {
        const { length } = nativeNode.children;
        const box = nativeNode.children[movePointIndex] as HTMLDivElement;
        const point = box?.children[0] as HTMLDivElement;
        const { clientWidth, clientHeight } = box;
        const { style } = point;
        if (movePointIndex % 2 === 0) {
          let left = boxRadius;
          if (style.left) {
            left = parseFloat(style.left);
          }
          let newLeft = left + movePointV;
          if (newLeft >= clientWidth - boxRadius - pointWidth) {
            point.style.visibility = "hidden";
            if (movePointIndex >= length - 1) {
              movePointIndex = 0;
              const nextPoint = (
                nativeNode.children[movePointIndex] as HTMLDivElement
              )?.firstChild as HTMLDivElement;
              nextPoint.style.left = `${boxRadius}px`;
              nextPoint.style.visibility = "visible";
            } else {
              movePointIndex += 1;
              const nextPoint = (
                nativeNode.children[movePointIndex] as HTMLDivElement
              )?.firstChild as HTMLDivElement;
              nextPoint.style.left = "-1px";
              nextPoint.style.visibility = "visible";
            }
          } else {
            point.style.left = `${newLeft}px`;
            if (point.style.visibility !== "visible") {
              point.style.visibility = "visible";
            }
          }
        } else {
          let left = -1;
          let bottom = boxRadius;
          if (style.left) {
            left = parseFloat(style.left);
          }
          if (style.bottom) {
            bottom = parseFloat(style.bottom);
          }
          if (left >= clientWidth) {
            let newBottom = bottom - movePointV;
            if (newBottom <= boxRadius) {
              point.style.visibility = "hidden";
              movePointIndex += 1;
              const nextPoint = (
                nativeNode.children[movePointIndex] as HTMLDivElement
              )?.firstChild as HTMLDivElement;
              nextPoint.style.left = `${boxRadius}px`;
              nextPoint.style.visibility = "visible";
            } else {
              point.style.bottom = `${newBottom}px`;
            }
          } else if (left <= -1) {
            let newBottom = bottom + movePointV;
            if (newBottom > clientHeight - boxRadius - pointWidth) {
              newBottom = clientHeight;
              point.style.width = `${pointWidth}px`;
              point.style.height = "1px";
              point.style.left = `${boxRadius}px`;
            }
            point.style.bottom = `${newBottom}px`;
          } else {
            let newLeft = left + movePointV;
            if (newLeft > clientWidth - boxRadius - pointWidth) {
              newLeft = clientWidth;
              point.style.width = "1px";
              point.style.height = `${pointWidth}px`;
              point.style.bottom = `${clientHeight - boxRadius - pointWidth}`;
            }
            point.style.left = `${newLeft}px`;
          }
        }

        frameId = requestAnimationFrame(movePoint);
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      frameId = requestAnimationFrame(movePoint);
    }
    return () => {
      frameId && cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.blackBox}>
        <div className={styles.blackBoxPoint} />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.whiteBoxPoint} />
        <p className={styles.name}>Price</p>
        <p className={styles.value}>$656</p>
      </div>
      <div className={styles.blackBox}>
        <div className={styles.blackBoxPoint} />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.whiteBoxPoint} />
        <p className={styles.name}>Quantity</p>
        <p className={styles.value}>84351</p>
      </div>
      <div className={styles.blackBox}>
        <div className={styles.blackBoxPoint} />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.whiteBoxPoint} />
        <p className={styles.name}>Number of partners</p>
        <p className={styles.value}>64</p>
      </div>
      <div className={styles.blackBox}>
        <div className={styles.blackBoxPoint} />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.whiteBoxPoint} />
        <p className={styles.name}>Date of establishment</p>
        <p className={styles.value}>2008-10-01</p>
      </div>
      <div className={styles.blackBox}>
        <div className={styles.blackBoxPoint} />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.whiteBoxPoint} />
        <p className={styles.name}>Transaction Analyzed</p>
        <p className={styles.value}>70Bn</p>
      </div>
      <div className={styles.blackBox}>
        <div className={styles.blackBoxPoint} />
      </div>
    </div>
  );
};

export default LineCombination;
