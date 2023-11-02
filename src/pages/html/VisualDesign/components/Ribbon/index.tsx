// @ts-nocheck
import React from "react";
import styles from "./index.module.scss";

const Ribbon = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.ribbon}
        style={{ "--fontSize": "34px", fontWeight: 600 }}
      >
        Visualization Collection
      </div>
      <div
        className={styles.ribbon}
        style={{
          "--fontSize": "28px",
          "--background": "#8A9B0F",
          fontWeight: 500,
        }}
      >
        Visualization Collection <br /> Visualization Collection
      </div>
      <div className={styles.ribbon} style={{ "--background": "#45ADA8" }}>
        Visualization Collection
        <br /> Visualization Collection
        <br /> Visualization Collection
      </div>
    </div>
  );
};

export default Ribbon;
