import React from "react";
import styles from "./index.module.scss";

const HarmonyLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.line} />
        </div>
        <div className={styles.bottom} />
      </div>
      <svg>
        <filter
          id="fractal"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feTurbulence
            id="turbulence"
            type="fractalNoise"
            baseFrequency="0.005 0.005"
            numOctaves="10"
          >
            <animate
              attributeName="baseFrequency"
              dur="30s"
              values="0.005 0.005;0.05 0.3;0.005 0.005"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default HarmonyLogo;
