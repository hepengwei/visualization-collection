import React, { useState } from "react";
import styles from "./index.module.less";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>视觉效果集合</div>
    </div>
  );
};

export default Header;
