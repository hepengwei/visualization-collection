import React from "react";
import styles from "./index.module.scss";

const TankSloshing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottle}>
          <div className={styles.water} />
        </div>
        <div className={styles.bottleBottom} />
      </div>
    </div>
  );
};

export default TankSloshing;
