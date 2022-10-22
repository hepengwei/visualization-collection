/**
 * 动效按钮
 */
import React from "react";
import GridContent from "components/GridContent";
import TiltButton from "./components/TiltButton";
import RotateBgButton from "./components/RotateBgButton";
import IconMoveButton from "./components/IconMoveButton";
import NeonButton from "./components/NeonButton";
import BorderAnimationButton from "./components/BorderAnimationButton";
import BorderAnimationButton2 from "./components/BorderAnimationButton2";
import TranslateBgButton from "./components/TranslateBgButton";
import RoundedGradientButton from "./components/RoundedGradientButton";
import MirrorSideButton from "./components/MirrorSideButton";
import styles from "./index.module.less";

const { GridBox } = GridContent;

const DynamicButtons = () => {
  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[10, 8, 6, 5, 4]}
        rowSpace={4}
        colSpace={4}
      >
        <GridBox key="1">
          <div className={`${styles.box} ${styles.box1}`}>
            <TiltButton className={styles.btn} color="#4E90FE">
              <span className={styles.btnText}>Button</span>
            </TiltButton>
          </div>
        </GridBox>
        <GridBox key="2">
          <div className={styles.box}>
            <RotateBgButton />
          </div>
        </GridBox>
        <GridBox key="3">
          <div className={styles.box}>
            <IconMoveButton />
          </div>
        </GridBox>
        <GridBox key="4">
          <div className={styles.box}>
            <NeonButton />
          </div>
        </GridBox>
        <GridBox key="5">
          <div className={styles.box}>
            <BorderAnimationButton />
          </div>
        </GridBox>
        <GridBox key="6">
          <div className={styles.box}>
            <BorderAnimationButton2 />
          </div>
        </GridBox>
        <GridBox key="7">
          <div className={styles.box}>
            <TranslateBgButton />
          </div>
        </GridBox>
        <GridBox key="8">
          <div className={styles.box}>
            <RoundedGradientButton />
          </div>
        </GridBox>
        <GridBox key="9">
          <div className={styles.box}>
            <MirrorSideButton />
          </div>
        </GridBox>
      </GridContent>
    </div>
  );
};

export default DynamicButtons;
