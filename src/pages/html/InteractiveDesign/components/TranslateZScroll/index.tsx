import React from "react";
import styles from "./index.module.scss";

const TranslateZScroll = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll} id="g-scroll" />
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
        </div>
      </div>
    </div>
  );
};

export default TranslateZScroll;
