import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";

const list = new Array(800).fill(0);

const HexagonalMesh1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.pageX - left;
      const y = e.pageY - top;
      window.requestAnimationFrame(function () {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--xPos", `${x}px`);
          containerRef.current.style.setProperty("--yPos", `${y}px`);
        }
      });
    }
  };

  const onMouseLeave = () => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = width / 2;
      const y = height / 2;
      containerRef.current.style.setProperty("--xPos", `${x}px`);
      containerRef.current.style.setProperty("--yPos", `${y}px`);
    }
  };

  useEffect(() => {
    onMouseLeave();
  }, []);

  return (
    <div
      className={styles.container}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      {list.map((item: number, index: number) => (
        <div key={index} className={styles.item} />
      ))}
    </div>
  );
};

export default HexagonalMesh1;
