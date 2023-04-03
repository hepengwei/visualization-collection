import React from "react";
import styles from "./index.module.scss";

const list = new Array(5).fill(0);

const HexagonalRadar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {list.map((item: number, index: number) => (
          <div key={index} className={styles.item} />
        ))}
      </div>
      <div className={styles.maskBox} />
    </div>
  );
};

export default HexagonalRadar;
