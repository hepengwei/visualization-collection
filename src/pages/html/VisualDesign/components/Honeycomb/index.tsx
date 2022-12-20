import React from "react";
import scenery1 from "images/html/scenery1.jpg";
import scenery2 from "images/html/scenery2.jpg";
import scenery3 from "images/html/scenery3.jpg";
import scenery4 from "images/html/scenery4.jpg";
import scenery5 from "images/html/scenery5.jpg";
import scenery6 from "images/html/scenery6.jpg";
import scenery7 from "images/html/scenery7.jpg";
import styles from "./index.module.scss";

const Honeycomb = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={scenery1} alt="" />
        <img src={scenery2} alt="" />
        <img src={scenery3} alt="" />
        <img src={scenery4} alt="" />
        <img src={scenery5} alt="" />
        <img src={scenery6} alt="" />
        <img src={scenery7} alt="" />
      </div>
    </div>
  );
};

export default Honeycomb;
