import React, { useRef, useEffect, useCallback } from "react";
import Card from "./Card";
import car1 from "images/html/car1.png";
import car2 from "images/html/car2.png";
import car3 from "images/html/car3.png";
import styles from "./index.module.scss";

const cardList = [car1, car2, car3];

const MouseHover3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {cardList.map((url: string, index: number) => (
          <Card url={url} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MouseHover3;
