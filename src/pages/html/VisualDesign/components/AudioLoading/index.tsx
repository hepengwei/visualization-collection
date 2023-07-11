import React from "react";
import styles from "./index.module.scss";

const list = new Array(15).fill(0);

const AudioLoading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {list.map((item: number, index: number) => (
          <span className={styles[`span${index}`]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AudioLoading;
