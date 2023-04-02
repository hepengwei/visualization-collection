import React from "react";
import { useIntl } from "react-intl";
import styles from "../Page1/index.module.scss";

interface Page4Props {
  showPageIndex: number;
}

const Page4 = (props: Page4Props) => {
  const intl = useIntl();
  const { showPageIndex } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.articleContent}>
          <div className={styles.subTitle}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.subTitle3",
            })}
          </div>
          <div>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des9",
            })}
          </div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.pageA",
            })}`}</div>
            <div>{`<span onClick="toB();">Jump</span>`}</div>
            <div>{`<iframe id="myIframe" src="http://b.com" style="display: none" />`}</div>
            <br />
            <div>{`<script>`}</div>
            <div style={{ paddingLeft: "20px" }}>{`function toB(){`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`var myIframe = document.getElementById("myIframe");`}</div>
            <div style={{ paddingLeft: "40px" }}>{`if (myIframe) {`}</div>
            <div style={{ paddingLeft: "60px" }}>{`var data = {data: 1};`}</div>
            <div
              style={{ paddingLeft: "60px" }}
            >{`myIframe.contentWindow.postMessage(JSON.stringify(data), "http://b.com");`}</div>
            <div
              style={{ paddingLeft: "60px" }}
            >{`window.open("http://b.com", "_blank");`}</div>
            <div style={{ paddingLeft: "40px" }}>{`}`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}`}</div>
            <div>{`<script>`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
