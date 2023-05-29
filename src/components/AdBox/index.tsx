import React from "react";
import { Button } from "antd";
import { useIntl } from "react-intl";
// import amazonAdsLogo from "images/amazon_ads_logo.png";
// import styles from "./index.module.scss";

interface AdBoxProps {
  data: { textId: string; url: string };
}

const AdBox = (props: AdBoxProps) => {
  const { data } = props;
  const intl = useIntl();
  return null;

  // return (
  //   <div
  //     className={styles.container}
  //     onClick={() => {
  //       window.open(data.url);
  //     }}
  //   >
  //     <p>{intl.formatMessage({ id: data.textId })}</p>
  //     <Button>{intl.formatMessage({ id: "common.ad.btnText" })}</Button>
  //     <img src={amazonAdsLogo} alt="" className={styles.adLogo} />
  //   </div>
  // );
};

export default AdBox;
