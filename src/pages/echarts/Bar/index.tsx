/**
 * 柱状图
 */
import React from "react";
import GridContent from "components/GridContent";
import Bar1 from "./components/Bar1";
import Bar2 from "./components/Bar2";
import styles from "./index.module.less";

const { GridBox } = GridContent;

const Bar = () => {
  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[2, 2, 2, 1, 1]}
        rowSpace={4}
        colSpace={4}
      >
        <GridBox key="1">
          <div className={styles.box}>
            <Bar1 />
          </div>
        </GridBox>
        <GridBox key="2">
          <div className={styles.box}>
            <Bar2 />
          </div>
        </GridBox>
      </GridContent>
    </div>
  );
};

export default Bar;
