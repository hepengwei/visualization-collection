/**
 * 丰富动效
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import DynamicTime from "./components/DynamicTime";
import FlopTime from "./components/FlopTime";
import ChargingAnimation from "./components/ChargingAnimation";
import ZongziLoading from "./components/ZongziLoading";
import BoxReflect from "./components/BoxReflect";
import TextAnimation from "./components/TextAnimation";
import DisplayTextInSmoke from "./components/DisplayTextInSmoke";
import PlayVideoInText from "./components/PlayVideoInText";
import styles from "./index.module.scss";

const RichDynamicEffect = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <DynamicTime />
        </div>
        <div className={styles.box}>
          <FlopTime />
        </div>
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <ChargingAnimation />
        </div>
        <div className={styles.box}>
          <ZongziLoading />
        </div>
        <div className={styles.box}>
          <BoxReflect />
        </div>
      </div>
      <div className={styles.box}>
        <TextAnimation />
      </div>
      <div className={styles.box}>
        <DisplayTextInSmoke />
      </div>
      <div className={styles.box}>
        <PlayVideoInText />
      </div>
    </div>
  );
};

export default RichDynamicEffect;
