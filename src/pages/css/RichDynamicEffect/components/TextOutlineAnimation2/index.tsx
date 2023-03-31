import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const TextOutlineAnimation2 = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.cssDynamicEffect.richDynamicEffect.textLineLoop" />
      <div className={styles.content}>
        <svg>
          <symbol id="text">
            <text textAnchor="middle" x="50%" y="80%">
              SVG
            </text>
          </symbol>
          <use xlinkHref="#text" className={styles.text}></use>
          <use xlinkHref="#text" className={styles.text}></use>
          <use xlinkHref="#text" className={styles.text}></use>
          <use xlinkHref="#text" className={styles.text}></use>
          <use xlinkHref="#text" className={styles.text}></use>
        </svg>
      </div>
    </div>
  );
};

export default TextOutlineAnimation2;
