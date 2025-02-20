import React from "react";
import Card from "./Card";
import card1 from "images/card1.png";
import card2 from "images/card2.png";
import card3 from "images/card3.png";
import styles from "./index.module.scss";

const cardList = [card1, card2, card3];

const MouseHover4 = () => {
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

export default MouseHover4;
