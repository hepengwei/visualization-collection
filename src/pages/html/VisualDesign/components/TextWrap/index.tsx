import React from "react";
import styles from "./index.module.scss";

const text = "这是文字";

const TextWrap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topText}>{text.repeat(40)}</div>
      <div className={`${styles.poly} ${styles.leftFloat}`} />
      <div className={`${styles.poly} ${styles.rightFloat}`} />
      <span>{text.repeat(180)}</span>
    </div>
  );
};

export default TextWrap;
