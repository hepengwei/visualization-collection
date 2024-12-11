/**
 * Suspense的fallback组件（延时显示Loading）
 */
import React, { useEffect, useState, useRef } from "react";
import { Spin } from "antd";
import styles from "./index.module.scss";

const SuspenseLoading = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const timer = useRef<number>(0);

  useEffect(() => {
    timer.current = window.setTimeout(() => {
      setShowLoading(true);
    }, 400);

    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showLoading && <Spin size='large' />}
    </div>
  );
};

export default SuspenseLoading;
