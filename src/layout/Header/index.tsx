import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import styles from "./index.module.less";

const Header: React.FC = () => {
  const { setHeadHeight } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      setHeadHeight(height);
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.title}>视觉效果集合</div>
    </div>
  );
};

export default Header;
