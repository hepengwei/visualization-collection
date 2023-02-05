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
import TextSearchlight from "./components/TextSearchlight";
import DisplayTextInSmoke from "./components/DisplayTextInSmoke";
import PlayVideoInText from "./components/PlayVideoInText";
import WaveFont from "./components/WaveFont";
import TextOutlineAnimation1 from "./components/TextOutlineAnimation1";
import TextOutlineAnimation2 from "./components/TextOutlineAnimation2";
import MobiusBand1 from "./components/MobiusBand1";
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
        <TextSearchlight />
      </div>
      <div className={styles.box}>
        <DisplayTextInSmoke />
      </div>
      <div className={styles.box}>
        <PlayVideoInText />
      </div>
      <div className={styles.box}>
        <WaveFont />
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <TextOutlineAnimation1 />
        </div>
        <div className={styles.box}>
          <TextOutlineAnimation2 />
        </div>
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <MobiusBand1 />
        </div>
      </div>
    </div>
  );
};

export default RichDynamicEffect;
