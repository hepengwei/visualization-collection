/**
 * 量子纠缠交互眼
 */
import React, { useRef, useMemo, useEffect } from "react";
import { useGlobalContext } from "hooks/useGlobalContext";
import useQuantumEntanglement from "hooks/useQuantumEntanglement";
import { IFRAME_ID, THAT_PAGE_URL, RECEIVE_SELF_KEY, RECEIVE_THAT_KEY } from "constants/common";
import styles from "./index.module.scss";


const eyeSize = 28;
const eyeballSize = 10;

const InteractionEyes = () => {
  const { locale } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const { interactPageInfo, resendMessage } = useQuantumEntanglement(
    IFRAME_ID,
    THAT_PAGE_URL,
    RECEIVE_SELF_KEY,
    RECEIVE_THAT_KEY,
    containerRef
  );

  // 切换中英文后交互眼位置变了，要通知另一页面
  useEffect(() => {
    resendMessage();
  }, [locale]);

  const eyebalInfo: { eyeballLeft: number; eyeballTop: number } | null =
    useMemo(() => {
      if (containerRef.current && interactPageInfo) {
        const { x, y } = interactPageInfo;
        const { top, left, width, height } =
          containerRef.current.getBoundingClientRect();
        const selfX = left + window.screenLeft + width / 2;
        const selfY = top + window.screenTop + height / 2;
        const dist = Math.hypot(x - selfX, y - selfY);
        if (dist > eyeSize) {
          const newEyeballLeft =
            (((eyeSize - eyeballSize) / 2) * (x - selfX)) / dist;
          const newEyeballTop =
            (((eyeSize - eyeballSize) / 2) * (y - selfY)) / dist;
          return { eyeballLeft: newEyeballLeft, eyeballTop: newEyeballTop };
        }
        return { eyeballLeft: 0, eyeballTop: 0 };
      }
      return null;
    }, [interactPageInfo]);

  return (
    <div className={styles.container} ref={containerRef}>
      {eyebalInfo && (
        <>
          <div className={styles.eye}>
            {eyebalInfo.eyeballLeft === 0 && eyebalInfo.eyeballTop === 0 ? (
              <div className={styles.heart} />
            ) : (
              <div
                className={styles.eyeball}
                style={{
                  transform: `translate(${eyebalInfo.eyeballLeft}px, ${eyebalInfo.eyeballTop}px)`,
                }}
              />
            )}
          </div>
          <div className={styles.eye}>
            {eyebalInfo.eyeballLeft === 0 && eyebalInfo.eyeballTop === 0 ? (
              <div className={styles.heart} />
            ) : (
              <div
                className={styles.eyeball}
                style={{
                  transform: `translate(${eyebalInfo.eyeballLeft}px, ${eyebalInfo.eyeballTop}px)`,
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InteractionEyes;
