import React, { useRef, useEffect } from "react";
import styles from "./index.module.scss";

const list = new Array(800).fill(0);

const HexagonalMesh3 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // const onMouseMove = (e: React.MouseEvent) => {
  //   if (e.target && (e.target as HTMLDivElement).className === styles.item) {
  //     const { animation } = (e.target as HTMLDivElement).style;
  //     if (!animation) {
  //       (e.target as HTMLDivElement).style.animation =
  //         "changeBackground 0.6s linear";
  //       setTimeout(() => {
  //         if (e.target) {
  //           (e.target as HTMLDivElement).style.animation = "";
  //         }
  //       }, 600);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const styleSheet = document.styleSheets[0];
  //     styleSheet.insertRule(`@keyframes changeBackground {
  //       from {
  //         background: rgba(255, 255, 255, 255);
  //       }
  //       to {
  //         background: rgba(0, 0, 0, 255);
  //       }
  //     }`);
  //   }
  // }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      // onMouseMove={onMouseMove}
    >
      {list.map((item: number, index: number) => (
        <div key={index} className={styles.item} />
      ))}
    </div>
  );
};

export default HexagonalMesh3;
