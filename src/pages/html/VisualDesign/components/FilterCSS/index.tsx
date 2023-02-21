import React from "react";
import { useIntl } from "react-intl";
import flower from "images/flower.jpg";
import styles from "./index.module.scss";

const FilterCSS = () => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span>
          {intl.formatMessage({ id: "page.htmlVision.visualDesign.brighten" })}
        </span>
        <img src={flower} alt="" />
      </div>
      <div className={styles.right}>
        <span>
          {intl.formatMessage({ id: "page.htmlVision.visualDesign.grayed" })}
        </span>
        <img src={flower} alt="" />
      </div>
    </div>
  );
};

export default FilterCSS;
