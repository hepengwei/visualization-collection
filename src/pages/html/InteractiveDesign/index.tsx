/**
 * 交互设计
 */
import React from "react";
import MagnifyingGlass from "./components/MagnifyingGlass";
import styles from "./index.module.less";

const InteractiveDesign = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
            <MagnifyingGlass />
          </div>
    </div>
  );
};

export default InteractiveDesign;
