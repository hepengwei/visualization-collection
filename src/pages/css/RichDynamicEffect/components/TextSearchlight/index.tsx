import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const TextSearchlight = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.cssDynamicEffect.richDynamicEffect.searchlightText" />
      <p data-text="♠ CSS Animation ♣">♠ CSS Animation ♣</p>
    </div>
  );
};

export default TextSearchlight;
