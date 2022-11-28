/**
 * 饼图
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import GridContent from "components/GridContent";
import Pie1 from "./components/Pie1";
import styles from "./index.module.less";

const { GridBox } = GridContent;
const gridboxList = [{ element: <Pie1 /> }];

const Pie = () => {
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

export default Pie;
