/**
 * 丰富动效
 */
import React from "react";
import DynamicTime from "./components/DynamicTime";
import ChargingAnimation from "./components/ChargingAnimation";
import styles from "./index.module.less";

const RichDynamicEffect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <DynamicTime />
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <ChargingAnimation />
        </div>
      </div>
    </div>
  );
};

export default RichDynamicEffect;
