import React from "react";
import styles from "./index.module.scss";

const spanList = new Array(3).fill(0);

const TweakCube = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {spanList.map((item: number, index: number) => {
          return (
            <div key={index} className={styles.cube}>
              {spanList.map((item2: number, index2: number) => {
                return (
                  <div key={index2} className={styles[`column${index2}`]}>
                    {spanList.map((item3: number, index3: number) => {
                      return (
                        <span
                          key={index3}
                          className={styles[`span${index3}`]}
                        ></span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TweakCube;
