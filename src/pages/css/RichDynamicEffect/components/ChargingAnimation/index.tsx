import React, {
  useLayoutEffect,
} from "react";
import styles from "./index.module.scss";

const list = new Array(15).fill("1");

const DynamicTime = () => {
  useLayoutEffect(() => {
    document.styleSheets[0].insertRule(`@keyframes bubbleMoveToTop{ 90% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
      transform: translate(-50%, -260px);
    }}`);
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.number}>30.02%</div>
      <div className={styles.contrast}>
        <div className={styles.circle}></div>
        <ul className={styles.bubbles}>
          {list.map((item: string, index: number) => {
            const width = `${Math.random() * 15 + 15}px`;
            const left = `${Math.random() * 70 + 15}px`;
            const duration = `${Math.random() * 5 + 2}s`;
            const delay = `-${(Math.random() * 5000) / 1000}s`;
            const animation = `bubbleMoveToTop ${duration} ease-in-out ${delay} infinite`;
            return (
              <li
                key={index}
                style={{
                  width,
                  height: width,
                  left,
                  animation,
                }}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DynamicTime;
