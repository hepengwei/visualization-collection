import React from "react";
import flower from "images/flower.jpg";
import styles from "./index.module.less";

const ImageFadeOut = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.box1}
        style={{ backgroundImage: `url(${flower})` }}
      />
      <div
        className={styles.box2}
        style={{ backgroundImage: `url(${flower})` }}
      />
    </div>
  );
};

export default ImageFadeOut;
