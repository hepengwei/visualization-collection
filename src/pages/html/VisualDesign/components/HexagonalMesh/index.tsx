import React from "react";
import styles from "./index.module.scss";

const list = new Array(300).fill(0);

const HexagonalMesh = () => {
  return (
    <div className={styles.container}>
      {list.map((item: number, index: number) => (
        <div key={index} className={styles.item} />
      ))}
    </div>
  );
};

export default HexagonalMesh;
