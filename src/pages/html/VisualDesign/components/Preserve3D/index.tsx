import React from "react";
import styles from "./index.module.scss";

const Preserve3D = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cubeInner}>
          <div className={styles.top} />
          <div className={styles.bottom} />
          <div className={styles.front} />
          <div className={styles.back} />
          <div className={styles.left} />
          <div className={styles.right} />
        </div>
        <div className={styles.cubeOuter}>
          <div className={styles.top} />
          <div className={styles.bottom} />
          <div className={styles.front} />
          <div className={styles.back} />
          <div className={styles.left} />
          <div className={styles.right} />
        </div>
      </div>
    </div>
  );
};

export default Preserve3D;
