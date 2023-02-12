/**
 * 实用功能
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import ShearPlate from "./components/ShearPlate";
import RecordedAudio from "./components/RecordedAudio";
import styles from "./index.module.scss";

const UtilitarianFunction = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ShearPlate />
      </div>
      <div className={styles.box}>
        <RecordedAudio />
      </div>
    </div>
  );
};

export default UtilitarianFunction;
