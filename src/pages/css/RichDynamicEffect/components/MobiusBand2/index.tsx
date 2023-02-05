import React from "react";
import styles from "./index.module.scss";

const list = new Array(20).fill(0);

const MobiusBand2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.circle}>
          {list.map((item: number, index: number) => {
            return <span key={index} className={styles[`span${index}`]}></span>;
          })}
        </div>
        <div className={styles.circle}>
          {list.map((item: number, index: number) => {
            return <span key={index} className={styles[`span${index}`]}></span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobiusBand2;
