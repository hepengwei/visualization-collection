import React from "react";
import styles from "./index.module.scss";

const spanNum = 9;
const list = new Array(spanNum).fill(0);

const SudokuImageAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {list.map((item: number, index: number) => (
          <div className={styles[`item${index}`]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SudokuImageAnimation;
