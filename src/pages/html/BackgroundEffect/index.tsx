/**
 * 背景效果
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import GridContent from "components/GridContent";
import styles from "./index.module.scss";

const { GridBox } = GridContent;
const gridboxList = new Array(17).fill("1");

const BackgroundEffect = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[4, 3, 3, 2, 2]}
        rowSpace={8}
        colSpace={8}
      >
        {gridboxList.map(
          (item: { element: React.ReactNode }, index: number) => (
            <GridBox key={index}>
              <div className={styles.box}>
                <div className={styles[`bg${index + 1}`]} />
              </div>
            </GridBox>
          )
        )}
      </GridContent>
    </div>
  );
};

export default BackgroundEffect;
