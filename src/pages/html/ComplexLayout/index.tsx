/**
 * 复杂布局
 */
import React from "react";
import LineCombination from "./components/LineCombination";
import styles from "./index.module.less";

const boxList = [{ element: <LineCombination /> }];

const ComplexLayout = () => {
  return (
    <div className={styles.container}>
      {boxList.map((item: { element: React.ReactNode }, index: number) => (
        <div className={styles.box} key={index}>
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default ComplexLayout;
