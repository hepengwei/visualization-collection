import React from "react";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

const TextWrap = () => {
  const intl = useIntl();
  const text = intl.formatMessage({
    id: "page.htmlVision.visualDesign.quantumEntanglementTip",
  });
  return (
    <div className={styles.container}>
      <div className={styles.topText}>{text.repeat(40)}</div>
      <div className={`${styles.poly} ${styles.leftFloat}`} />
      <div className={`${styles.poly} ${styles.rightFloat}`} />
      <span>{text.repeat(180)}</span>
    </div>
  );
};

export default TextWrap;
