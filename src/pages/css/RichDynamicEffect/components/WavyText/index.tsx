import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const WavyText = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.cssDynamicEffect.richDynamicEffect.wavyText" />
      <h2 className={styles.firstText}>River</h2>
      <h2 className={styles.lastText}>River</h2>
    </div>
  );
};

export default WavyText;
