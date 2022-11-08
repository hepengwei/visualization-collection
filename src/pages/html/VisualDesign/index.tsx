/**
 * 视觉设计
 */
import React from "react";
import GridContent from "components/GridContent";
import GlassMimicry1 from "./components/GlassMimicry1";
import GlassMimicry2 from "./components/GlassMimicry2";
import MixBlendMode from "./components/MixBlendMode";
import SwitchingText from "./components/SwitchingText";
import Typed1 from "./components/Typed1";
import Typed2 from "./components/Typed2";
import styles from "./index.module.less";

const { GridBox } = GridContent;

const VisualDesign = () => {
  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[2, 2, 2, 1, 1]}
        rowSpace={4}
        colSpace={4}
      >
        <GridBox key="1">
          <div className={styles.box}>
            <GlassMimicry1 />
          </div>
        </GridBox>
        <GridBox key="2">
          <div className={styles.box}>
            <GlassMimicry2 />
          </div>
        </GridBox>
        <GridBox key="3">
          <div className={styles.box}>
            <MixBlendMode />
          </div>
        </GridBox>
        <GridBox key="4">
          <div className={styles.box}>
            <SwitchingText />
          </div>
        </GridBox>
        <GridBox key="5">
          <div className={styles.box}>
            <Typed1 />
          </div>
        </GridBox>
        <GridBox key="6">
          <div className={styles.box}>
            <Typed2 />
          </div>
        </GridBox>
      </GridContent>
    </div>
  );
};

export default VisualDesign;
