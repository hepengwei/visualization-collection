/**
 * 玻璃拟态
 */
import React from "react";
import GridContent from "components/GridContent";
import GlassMimicry1 from "./components/GlassMimicry1";
import GlassMimicry2 from "./components/GlassMimicry2";
import styles from "./index.module.less";

const { GridBox } = GridContent;

const GlassMimicry = () => {
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
      </GridContent>
    </div>
  );
};

export default GlassMimicry;
