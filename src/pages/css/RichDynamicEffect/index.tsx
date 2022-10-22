/**
 * 丰富动效
 */
import React from "react";
import DynamicTime from "./components/DynamicTime";
import styles from "./index.module.less";

const RichDynamicEffect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <DynamicTime />
      </div>
    </div>
  );
};

export default RichDynamicEffect;
