import React from "react";
import flower from "images/flower.jpg";
import styles from "./index.module.scss";

const FilterCSS = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span>变亮</span>
        <img src={flower} alt="" />
      </div>
      <div className={styles.right}>
        <span>变灰</span>
        <img src={flower} alt="" />
      </div>
    </div>
  );
};

export default FilterCSS;
