/**
 * 复杂布局
 */
import React from "react";
import LineCombination from "./components/LineCombination";
import styles from "./index.module.less";

const ComplexLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <LineCombination />
      </div>
    </div>
  );
};

export default ComplexLayout;
