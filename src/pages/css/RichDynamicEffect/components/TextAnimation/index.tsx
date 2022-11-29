import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.less";

const TextAnimation = () => {
  return (
    <div className={styles.container}>
      <p data-text="♠ CSS Animation ♣">♠ CSS Animation ♣</p>
    </div>
  );
};

export default TextAnimation;
