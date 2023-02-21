import React from "react";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

const TextShadow = () => {
  const intl = useIntl();
  const text = intl.formatMessage({
    id: "page.htmlVision.visualDesign.textShadow",
  });

  return (
    <div className={styles.container}>
      <div className={styles.content} data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default TextShadow;
