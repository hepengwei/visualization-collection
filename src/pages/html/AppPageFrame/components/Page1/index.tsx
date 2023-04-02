import React from "react";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

interface Page1Props {
  showPageIndex: number;
}

const Page1 = (props: Page1Props) => {
  const intl = useIntl();
  const { showPageIndex } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.title",
            })}
          </div>
          <div className={styles.author}>{`${intl.formatMessage({
            id: "page.htmlVision.applicationPageFrame.author",
          })}: River`}</div>
        </div>
        <div className={styles.appoint}>
          <div>{`${intl.formatMessage({
            id: "page.htmlVision.applicationPageFrame.appoint",
          })}:`}</div>
          <div>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.appointText1",
            })}
          </div>
          <div>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.appointText2",
            })}
          </div>
        </div>
        <div className={styles.articleContent}>
          <div className={styles.subTitle}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.subTitle1",
            })}
          </div>
          <div>{`${intl.formatMessage({
            id: "page.htmlVision.applicationPageFrame.des1",
          })}:`}</div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.codeBox1.text",
            })}`}</div>
            <div>{`<a href="http://b.com?data=1" target="_blank" />`}</div>
          </div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.codeBox2.text",
            })}`}</div>
            <div>{`<script>`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`var data = window.location.href.split("?")[1].split("=")[1];`}</div>
            <div>{`<script>`}</div>
          </div>
          <div>{`${intl.formatMessage({
            id: "page.htmlVision.applicationPageFrame.des2",
          })}:`}</div>
          <div className={styles.codeBox}>
            <div>{`// ${intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.pageA",
            })}`}</div>
            <div>{`<script>`}</div>
            <div
              style={{ paddingLeft: "20px" }}
            >{`window.open("http://b.com?data=1", "_blank");`}</div>
            <div>{`<script>`}</div>
          </div>
          <div className={styles.strong}>
            {intl.formatMessage({
              id: "page.htmlVision.applicationPageFrame.des3",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
