import React from "react";
import { useIntl } from "react-intl";
import EllipsisText from "components/EllipsisText";
import styles from "./index.module.scss";

const EllipsisText1 = () => {
  const intl = useIntl();
  const text = intl.formatMessage({
    id: "page.htmlVision.visualDesign.displaysCustomRows",
  });

  return (
    <div className={styles.container}>
      <EllipsisText text={text.repeat(4)} style={{ fontSize: "24px" }} />
      <EllipsisText
        text={text.repeat(8)}
        lineNum={2}
        style={{ fontSize: "16px", marginTop: "40px" }}
        buttonText="More"
        buttonTextSize={16}
      />
    </div>
  );
};

export default EllipsisText1;
