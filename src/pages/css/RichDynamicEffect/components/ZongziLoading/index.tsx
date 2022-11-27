import React from "react";
import StickyRice from "images/css/StickyRice.svg";
import RedDates from "images/css/RedDates.svg";
import ReedLeaves from "images/css/ReedLeaves.svg";
import Zongzi from "images/css/Zongzi.svg";
import styles from "./index.module.less";

const ZongziLoading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.loadingItem1}>
          <StickyRice />
        </div>
        <div className={styles.loadingItem2}>
          <RedDates />
        </div>
        <div className={styles.loadingItem3}>
          <ReedLeaves />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="mix">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styles.loadingResult}>
        <Zongzi />
      </div>
    </div>
  );
};

export default ZongziLoading;
