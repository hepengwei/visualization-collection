import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import GridContent from "components/GridContent";
import TiltButton from "./components/TiltButton";
import RotateBgButton from "./components/RotateBgButton";
import IconMoveButton from "./components/IconMoveButton";
import NeonButton from "./components/NeonButton";
import BorderAnimationButton from "./components/BorderAnimationButton";
import BorderAnimationButton2 from "./components/BorderAnimationButton2";
import TranslateBgButton from "./components/TranslateBgButton";
import styles from "./index.module.less";

const { GridBox } = GridContent;
const speedDeg = 0.01;
const r = 0.5;

const DynamicButtons = () => {
  const tiltButton = useRef(null);
  const frameId = useRef(0);

  const rotateBg = () => {
    // @ts-ignore
    if (tiltButton.current && tiltButton.current.current) {
      const nativeNode = ReactDOM.findDOMNode(
        // @ts-ignore
        tiltButton.current.current
      ) as HTMLButtonElement;
      if (nativeNode) {
        const bgPos = nativeNode.style.backgroundPosition;
        if (!bgPos) {
          nativeNode.style.backgroundPosition = "0% 50%";
        } else {
          const arr = bgPos.split(" ");
          let x = Number(arr[0].substring(0, arr[0].length - 1)) / 100 - r;
          const oldX = x;
          let y = Number(arr[1].substring(0, arr[1].length - 1)) / 100 - r;

          x = x * Math.cos(speedDeg) - y * Math.sin(speedDeg);
          y = y * Math.cos(speedDeg) + x * Math.sin(speedDeg);

          nativeNode.style.backgroundPosition = `${(x + r) * 100}% ${
            (y + r) * 100
          }%`;
        }

        frameId.current = requestAnimationFrame(rotateBg);
      }
    }
  };

  useEffect(() => {
    if (tiltButton.current) {
      frameId.current = requestAnimationFrame(rotateBg);
    }
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[10, 8, 6, 5, 4]}
        rowSpace={4}
        colSpace={4}
      >
        <GridBox key="1">
          <div className={`${styles.box} ${styles.box1}`}>
            <TiltButton className={styles.btn} color="#4E90FE">
              <span className={styles.btnText}>Button</span>
            </TiltButton>
          </div>
        </GridBox>
        <GridBox key="2">
          <div className={styles.box}>
            <RotateBgButton />
          </div>
        </GridBox>
        <GridBox key="3">
          <div className={styles.box}>
            <IconMoveButton />
          </div>
        </GridBox>
        <GridBox key="4">
          <div className={styles.box}>
            <NeonButton />
          </div>
        </GridBox>
        <GridBox key="5">
          <div className={styles.box}>
            <BorderAnimationButton />
          </div>
        </GridBox>
        <GridBox key="6">
          <div className={styles.box}>
            <BorderAnimationButton2 />
          </div>
        </GridBox>
        <GridBox key="7">
          <div className={styles.box}>
            <TranslateBgButton />
          </div>
        </GridBox>

      </GridContent>
    </div>
  );
};

export default DynamicButtons;
