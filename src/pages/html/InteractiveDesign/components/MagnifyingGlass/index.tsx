import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import watch from "images/watch.png";
import styles from "./index.module.less";

const MagnifyingGlass = () => {
  const smallBoxRef = useRef<HTMLDivElement>(null);
  const floatBoxRef = useRef<HTMLDivElement>(null);
  const bigBoxRef = useRef<HTMLDivElement>(null);
  const [mouseIn, setMouseIn] = useState<boolean>(false);

  const onOverMask = () => {
    setMouseIn(true);
  };

  const onMoveMask = (e: React.MouseEvent) => {
    const smallBoxNode = ReactDOM.findDOMNode(
      smallBoxRef.current
    ) as HTMLDivElement;
    const floatBoxNode = ReactDOM.findDOMNode(
      floatBoxRef.current
    ) as HTMLDivElement;
    const { offsetWidth: smallBoxWidth, offsetHeight: smallBoxHeight } =
      smallBoxNode;
    const { offsetWidth: floatBoxWidth, offsetHeight: floatBoxHeight } =
      floatBoxNode;
    let left = e.clientX - smallBoxNode.offsetLeft - floatBoxWidth / 2;
    let top = e.clientY - smallBoxNode.offsetTop - floatBoxHeight / 2;
    if (left < 0) {
      left = 0;
    } else if (left > smallBoxWidth - floatBoxWidth) {
      left = smallBoxWidth - floatBoxWidth;
    }
    if (top < 0) {
      top = 0;
    } else if (top > smallBoxHeight - floatBoxHeight) {
      top = smallBoxHeight - floatBoxHeight;
    }
    floatBoxNode.style.left = left + "px";
    floatBoxNode.style.top = top + "px";

    const percentX = left / (smallBoxWidth - floatBoxWidth);
    const percentY = top / (smallBoxHeight - floatBoxHeight);
    const bigBoxNode = ReactDOM.findDOMNode(
      bigBoxRef.current
    ) as HTMLDivElement;
    const bigBoxImg = bigBoxNode.children[0] as HTMLImageElement;
    bigBoxImg.style.left =
      -percentX * (bigBoxImg.offsetWidth - bigBoxNode.offsetWidth) + "px";
    bigBoxImg.style.top =
      -percentY * (bigBoxImg.offsetHeight - bigBoxNode.offsetHeight) + "px";
  };

  const onLeaveMask = () => {
    setMouseIn(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.smallBox} ref={smallBoxRef}>
          <div
            className={styles.mask}
            onMouseOver={onOverMask}
            onMouseMove={onMoveMask}
            onMouseLeave={onLeaveMask}
          ></div>
          {
            <div
              className={styles.floatBox}
              style={{ visibility: mouseIn ? "visible" : "hidden" }}
              ref={floatBoxRef}
            ></div>
          }
          <img src={watch} />
        </div>
        <div className={styles.bigBox} ref={bigBoxRef}>
          {
            <img
              src={watch}
              style={{ visibility: mouseIn ? "visible" : "hidden" }}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default MagnifyingGlass;
