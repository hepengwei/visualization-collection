/**
 * 实用功能
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import ShearPlate from "./components/ShearPlate";
import RecordedAudio from "./components/RecordedAudio";
import RecordedVideo from "./components/RecordedVideo";
import RecordedScreen from "./components/RecordedScreen";
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
      <div className={styles.box}>
        <RecordedVideo />
      </div>
      <div className={styles.box}>
        <RecordedScreen />
      </div>
    </div>
  );
};

export default UtilitarianFunction;
