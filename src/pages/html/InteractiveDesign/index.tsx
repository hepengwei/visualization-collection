/**
 * 交互设计
 */
import React from "react";
import MagnifyingGlass from "./components/MagnifyingGlass";
import CropImage from "./components/CropImage";
import DragShopping from "./components/DragShopping";
import styles from "./index.module.less";

const InteractiveDesign = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <MagnifyingGlass />
      </div>
      <div className={styles.box}>
        <CropImage />
      </div>
      <div className={styles.box}>
        <DragShopping />
      </div>
    </div>
  );
};

export default InteractiveDesign;
