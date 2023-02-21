import React, { useLayoutEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { Button } from "antd";
import paper1 from "images/html/paper1.png";
import paper2 from "images/html/paper2.png";
import paper3 from "images/html/paper3.png";
import paper4 from "images/html/paper4.png";
import paper5 from "images/html/paper5.png";
import paper6 from "images/html/paper6.png";
import paper7 from "images/html/paper7.png";
import paper8 from "images/html/paper8.png";
import styles from "./index.module.scss";

const pagesList = [
  [paper1, paper2],
  [paper3, paper4],
  [paper5, paper6],
  [paper7, paper8],
];

const classNameArr = [
  styles["left-show-front-page"],
  styles["left-show-back-page"],
  styles["right-show-front-page"],
  styles["right-show-back-page"],
  styles["left-hide-front-page"],
  styles["left-hide-back-page"],
  styles["right-hide-front-page"],
  styles["right-hide-back-page"],
];

const FlipBook = () => {
  const intl = useIntl();
  const pagesRef = useRef<HTMLDivElement>(null);
  const leftPageIndex = useRef<number>(0);
  const isFlipping = useRef<boolean>(false);

  const goPreviousPage = () => {
    if (leftPageIndex.current <= -1 || isFlipping.current) return;
    isFlipping.current = true;
    if (pagesRef.current) {
      const { children } = pagesRef.current;
      const leftPage = children[leftPageIndex.current] as HTMLDivElement;
      leftPage.style.animation = "flip-to-right 2s ease-in-out forwards";
      setTimeout(() => {
        leftPage.style.zIndex = "5";
      }, 1000);
    }
    setTimeout(() => {
      leftPageIndex.current = leftPageIndex.current - 1;
      updatePaperClass();
    }, 2000);
  };

  const goNextPage = () => {
    if (leftPageIndex.current >= pagesList.length - 1 || isFlipping.current)
      return;
    isFlipping.current = true;
    if (pagesRef.current) {
      const { children } = pagesRef.current;
      const leftNextPage = children[
        leftPageIndex.current + 1
      ] as HTMLDivElement;
      leftNextPage.style.animation = "flip-to-left 2s ease-in-out forwards";
      setTimeout(() => {
        leftNextPage.style.zIndex = "5";
      }, 1000);
    }
    setTimeout(() => {
      leftPageIndex.current = leftPageIndex.current + 1;
      updatePaperClass();
    }, 2000);
  };

  const updatePaperClass = () => {
    if (pagesRef.current) {
      const { children } = pagesRef.current;
      Array.prototype.forEach.call(
        children,
        (paper: HTMLDivElement, index: number) => {
          if (paper.attributes && paper.attributes.length) {
            if (paper.attributes.getNamedItem("data-left")) {
              paper.attributes?.removeNamedItem("data-left");
            }
            if (paper.attributes.getNamedItem("data-right")) {
              paper.attributes?.removeNamedItem("data-right");
            }
          }
          const { children } = paper;
          if (index === leftPageIndex.current) {
            const dataLeft = document.createAttribute("data-left");
            dataLeft.nodeValue = "true";
            paper.attributes.setNamedItem(dataLeft);
            paper.style.transform = "perspective(1000px) rotateY(-180deg)";
            paper.style.zIndex = "4";
            children[0].classList?.remove(...classNameArr);
            children[0].classList?.add(styles["left-show-back-page"]);
            children[1].classList?.remove(...classNameArr);
            children[1].classList?.add(styles["left-show-front-page"]);
          } else if (index === leftPageIndex.current + 1) {
            const dataLeft = document.createAttribute("data-right");
            dataLeft.nodeValue = "true";
            paper.attributes.setNamedItem(dataLeft);
            paper.style.transform = "perspective(1000px) rotateY(0deg)";
            paper.style.zIndex = "4";
            children[0].classList?.remove(...classNameArr);
            children[0].classList?.add(styles["right-show-front-page"]);
            children[1].classList?.remove(...classNameArr);
            children[1].classList?.add(styles["right-show-back-page"]);
          } else if (index < leftPageIndex.current) {
            paper.style.transform = "perspective(1000px) rotateY(-180deg)";
            if (index === leftPageIndex.current - 1) {
              paper.style.zIndex = "3";
            } else {
              paper.style.zIndex = "2";
            }
            children[0].classList?.remove(...classNameArr);
            children[0].classList?.add(styles["left-hide-back-page"]);
            children[1].classList?.remove(...classNameArr);
            children[1].classList?.add(styles["left-hide-front-page"]);
          } else {
            paper.style.transform = "perspective(1000px) rotateY(0deg)";
            if (index === leftPageIndex.current + 2) {
              paper.style.zIndex = "3";
            } else {
              paper.style.zIndex = "2";
            }
            children[0].classList?.remove(...classNameArr);
            children[0].classList?.add(styles["right-hide-front-page"]);
            children[1].classList?.remove(...classNameArr);
            children[1].classList?.add(styles["left-hide-back-page"]);
          }
        }
      );
    }
    isFlipping.current = false;
  };

  useLayoutEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`@keyframes flip-to-left {
        from {
          transform: perspective(1000px) rotateY(0);
        }
        to {
          transform: perspective(1000px) rotateY(-180deg);
        }
      }`);
    styleSheet.insertRule(`@keyframes flip-to-right {
        from {
          transform: perspective(1000px) rotateY(-180deg);
        }
        to {
          transform: perspective(1000px) rotateY(0);
        }
      }`);

    isFlipping.current = true;
    updatePaperClass();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pages} ref={pagesRef}>
        {pagesList.map((item: string[], index: number) => {
          return (
            <div className={styles.paper} key={index}>
              <div className={styles.page}>
                <img src={item[0]} alt="" />
              </div>
              <div className={styles.page}>
                <img src={item[1]} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.btns}>
        <Button type="primary" className={styles.btn} onClick={goPreviousPage}>
          {intl.formatMessage({
            id: "page.htmlVision.interactiveDesign.previousPage",
          })}
        </Button>
        <Button type="primary" className={styles.btn} onClick={goNextPage}>
          {intl.formatMessage({
            id: "page.htmlVision.interactiveDesign.nextPage",
          })}
        </Button>
      </div>
    </div>
  );
};

export default FlipBook;
