import React from "react";
import styles from "./index.module.less";

const list = new Array(3).fill(0);

const ShearAngle = () => {
  return (
    <div className={styles.container}>
      {list.map((item: number, index: number) => (
        <div className={styles[`box${index + 1}`]} key={index} />
      ))}
    </div>
  );
};

export default ShearAngle;
