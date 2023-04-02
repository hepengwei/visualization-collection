import React from "react";
import { useIntl } from "react-intl";
import styles from "../Page1/index.module.scss";

interface Page5Props {
  showPageIndex: number;
}

const Page5 = (props: Page5Props) => {
  const intl = useIntl();
  const { showPageIndex } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.articleContent}>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.pageB",
            })}`}</div>
            <div>{`<script>`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`var aData = localStorage.getItem(“aPageData”);`}</div>
            <div style={{ paddingLeft: "20px" }}>{`if(aData){`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`doSomething(aData); // ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.codeBox3.text",
            })}`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`localStorage.removeItem(“aPageData”);`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}else{`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`window.addEventListener(“message”, receiveMessage, false);`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`function receiveMessage(event){`}</div>
            <div
              style={{ paddingLeft: "40px" }}
            >{`if (event.origin !== “http://a.com”) return;`}</div>
            <div style={{ paddingLeft: "40px" }}>{`if(event.data){`}</div>
            <div
              style={{ paddingLeft: "60px" }}
            >{`localStorage.setItem(“aPageData”, event.data);`}</div>
            <div style={{ paddingLeft: "40px" }}>{`}`}</div>
            <div style={{ paddingLeft: "20px" }}>{`}`}</div>
            <div>{`<script>`}</div>
          </div>
          <div className={styles.strong}>{`${intl.formatMessage({
            id: "page.htmlVision.applicationPageFrame.des10",
          })}: `}</div>
          <div className={styles.strong}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des11",
            })}
          </div>
          <div className={styles.strong}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des12",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
