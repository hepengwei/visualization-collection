/**
 * 背景图案
 */
import React, { useEffect } from "react";
import { Tooltip, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import GridContent from "components/GridContent";
import { saveTextToClip } from "utils/util";
import textCodeList from "./code";
import styles from "./index.module.scss";

const { GridBox } = GridContent;
const gridboxList = new Array(34).fill("1");

const BackgroundEffect = () => {
  const intl = useIntl();
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
                <div className={styles.hoverBg}>
                  <Tooltip
                    title={intl.formatMessage({ id: "common.copyCode" })}
                  >
                    <div
                      className={styles.copyBtn}
                      onClick={() => {
                        if (textCodeList[index]) {
                          saveTextToClip(textCodeList[index]);
                          message.success(
                            intl.formatMessage({ id: "common.copySuccess" })
                          );
                        }
                      }}
                    >
                      <CopyOutlined />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </GridBox>
          )
        )}
      </GridContent>
    </div>
  );
};

export default BackgroundEffect;
