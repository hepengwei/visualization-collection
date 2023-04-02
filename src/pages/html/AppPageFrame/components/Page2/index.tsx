import React from "react";
import { useIntl } from "react-intl";
import styles from "../Page1/index.module.scss";

interface Page2Props {
  showPageIndex: number;
}

const Page2 = (props: Page2Props) => {
  const intl = useIntl();
  const { showPageIndex } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.articleContent}>
          <div className={styles.subTitle}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.subTitle2",
            })}
          </div>
          <div>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des4",
            })}
          </div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.pageA",
            })}`}</div>
            <div>{`<script>`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`var popup = window.open("http://b.com", "_blank");`}</div>
            <div style={{ paddingLeft: "20px" }}>{`if(popup){`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`setTimeout(function(){`}</div>
            <div style={{ paddingLeft: "60px" }}>{`var data = {data: 1};`}</div>
            <div
              style={{ paddingLeft: "60px" }}
            >{`popup.postMessage(JSON.stringify(data), "http://b.com");`}</div>
            <div style={{ paddingLeft: "40px" }}>{`},500);`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}`}</div>
            <div>{`<script>`}</div>
          </div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.pageB",
            })}`}</div>
            <div>{`<script>`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`function receiveMessage(event){`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`if (event.origin !== "http://a.com") return;`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`console.log(JSON.parse(event.data)); // {data: 1}`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`window.addEventListener("message", receiveMessage, false);`}</div>
            <div>{`<script>`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
