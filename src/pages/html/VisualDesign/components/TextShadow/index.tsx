import React from "react";
import styles from "./index.module.scss";

const text = "文字阴影";

const TextShadow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default TextShadow;
