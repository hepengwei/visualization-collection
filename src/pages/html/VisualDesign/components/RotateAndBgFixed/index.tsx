import React from "react";
import scenery1 from "images/html/scenery1.jpg";
import scenery2 from "images/html/scenery2.jpg";
import scenery3 from "images/html/scenery3.jpg";
import scenery4 from "images/html/scenery4.jpg";
import scenery5 from "images/html/scenery5.jpg";
import styles from "./index.module.scss";

const RotateAndBgFixed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.a}>
          <img src={scenery1} alt="" />
        </div>
        <div className={styles.b}>
          <img src={scenery2} alt="" />
        </div>
        <div className={styles.c}>
          <img src={scenery3} alt="" />
        </div>
        <div className={styles.d}>
          <img src={scenery4} alt="" />
        </div>
        <div className={styles.e}>
          <img src={scenery5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RotateAndBgFixed;
