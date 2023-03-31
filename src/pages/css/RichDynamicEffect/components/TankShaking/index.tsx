import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const TankShaking = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.cssDynamicEffect.richDynamicEffect.tankShaking" />
      <div className={styles.content}>
        <div className={styles.bottle}>
          <div className={styles.water} />
        </div>
        <div className={styles.bottleBottom} />
      </div>
    </div>
  );
};

export default TankShaking;
