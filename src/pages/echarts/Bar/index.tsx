/**
 * 柱状图
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import GridContent from "components/GridContent";
import Bar1 from "./components/Bar1";
import Bar2 from "./components/Bar2";
import Bar3 from "./components/Bar3";
import styles from "./index.module.less";

const { GridBox } = GridContent;
const gridboxList = [
  { element: <Bar1 /> },
  { element: <Bar2 /> },
  { element: <Bar3 /> },
];

const Bar = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[2, 2, 2, 1, 1]}
        rowSpace={4}
        colSpace={4}
      >
        {gridboxList.map(
          (item: { element: React.ReactNode }, index: number) => (
            <GridBox key={index}>
              <div className={styles.box}>{item.element}</div>
            </GridBox>
          )
        )}
      </GridContent>
    </div>
  );
};

export default Bar;
