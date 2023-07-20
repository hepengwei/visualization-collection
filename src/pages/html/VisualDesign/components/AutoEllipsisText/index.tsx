import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Tooltip } from "antd";
import EllipsisText from "components/EllipsisText";
import styles from "./index.module.scss";

const EllipsisText1 = () => {
  const intl = useIntl();
  const text = intl.formatMessage({
    id: "page.htmlVision.visualDesign.displaysCustomRows",
  });
  const text2 = intl.formatMessage({
    id: "page.htmlVision.visualDesign.displaysCustomRows2",
  });
  const [textOver, setTextOver] = useState<boolean>(false);

  const onTextOverChange = (isOver: boolean) => {
    setTextOver(isOver);
  };

  return (
    <div className={styles.container}>
      {textOver ? (
        <Tooltip placement="top" title={text}>
          <div style={{ width: "100%" }}>
            <EllipsisText
              text={text}
              style={{ fontSize: "24px" }}
              onTextOverChange={onTextOverChange}
            />
          </div>
        </Tooltip>
      ) : (
        <EllipsisText
          text={text}
          style={{ fontSize: "24px" }}
          onTextOverChange={onTextOverChange}
        />
      )}
      <EllipsisText
        text={text2.repeat(4)}
        style={{ fontSize: "24px", marginTop: "40px" }}
      />
      <EllipsisText
        text={text2.repeat(8)}
        lineNum={2}
        style={{ fontSize: "16px", marginTop: "40px" }}
        buttonText="More"
        buttonTextSize={16}
      />
    </div>
  );
};

export default EllipsisText1;
