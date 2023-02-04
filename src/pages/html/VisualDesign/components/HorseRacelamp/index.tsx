import React from "react";
import styles from "./index.module.scss";

const list = new Array(4).fill(0);

const HouseRaceLamp = () => {
  return (
    <div className={styles.container}>
      {list.map((item: number, index: number) => (
        <div className={styles.scroll} key={index}>
          <span>
            Police line do not cross - Police line do not cross - Police line do
            not cross - Police line do not cross - Police line do not cross -
            Police line do not cross
          </span>
          <span>
            Police line do not cross - Police line do not cross - Police line do
            not cross - Police line do not cross - Police line do not cross -
            Police line do not cross
          </span>
        </div>
      ))}
    </div>
  );
};

export default HouseRaceLamp;
