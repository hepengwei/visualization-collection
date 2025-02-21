import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const RadarScan = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle='page.cssDynamicEffect.richDynamicEffect.radarScan' />
      <div className={styles.content} />
    </div>
  );
};

export default RadarScan;
