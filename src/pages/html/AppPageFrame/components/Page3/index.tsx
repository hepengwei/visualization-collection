import React from "react";
import { useIntl } from "react-intl";
import styles from "../Page1/index.module.scss";

interface Page3Props {
  showPageIndex: number;
}

const Page3 = (props: Page3Props) => {
  const intl = useIntl();
  const { showPageIndex } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.articleContent}>
          <div>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des5",
            })}
          </div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.pageA",
            })}`}</div>
            <div>{`<iframe id="myIframe" src="http://b.com" />`}</div>
            <br />
            <div>{`<script>`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`var myIframe = document.getElementById("myIframe");`}</div>
            <div style={{ paddingLeft: "20px" }}>{`if (myIframe) {`}</div>
            <div style={{ paddingLeft: "40px" }}>{`var data = {data: 1};`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`myIframe.contentWindow.postMessage(JSON.stringify(data), "http://b.com");`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}`}</div>
            <div>{`<script>`}</div>
          </div>
          <br />
          <div className={styles.strong}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des6",
            })}
          </div>
          <div className={styles.strong}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des7",
            })}
          </div>
          <br />
          <div className={styles.strong}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des8",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
