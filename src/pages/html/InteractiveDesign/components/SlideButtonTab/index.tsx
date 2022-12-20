import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const btnList = new Array(4).fill(0);
const contentPaddingLeft = 16;
const btnMarginLeftRight = 8;

const SlideButtonTab = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activedBtnIndex, setActivedBtnIndex] = useState<number>(0);
  const btnWidthRef = useRef<number>(0);

  const onBtnClick = (index: number) => {
    if (contentRef.current && activedBtnIndex !== index) {
      const left = `${
        contentPaddingLeft +
        btnWidthRef.current * index +
        index * btnMarginLeftRight * 2
      }px`;
      contentRef.current.style.setProperty("--groove-left", left);

      let rotate = "0deg";
      if (index < activedBtnIndex) {
        rotate = "-8deg";
      } else {
        rotate = "8deg";
      }
      contentRef.current.style.setProperty("--wraper-rotate", rotate);
      window.setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.setProperty("--wraper-rotate", "0deg");
        }
      }, 600);

      setActivedBtnIndex(index);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      const { width } = contentRef.current.getBoundingClientRect();
      const btnWidth =
        (width -
          contentPaddingLeft * 2 -
          (btnList.length * 2 - 2) * btnMarginLeftRight) /
        btnList.length;
      contentRef.current.style.setProperty("--btnWidth", `${btnWidth}px`);
      btnWidthRef.current = btnWidth;
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content} ref={contentRef}>
        {btnList.map((item: number, index: number) => {
          return (
            <div
              key={index}
              className={`${styles.btn} ${
                activedBtnIndex === index ? styles.actived : ""
              }`}
              onClick={() => onBtnClick(index)}
            >
              Button{index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideButtonTab;
