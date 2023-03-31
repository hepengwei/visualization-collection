import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import paper1 from "images/html/paper3.png";
import paper2 from "images/html/paper4.png";
import paper3 from "images/html/paper6.png";
import paper4 from "images/html/paper7.png";
import paper5 from "images/html/paper8.png";
import styles from "./index.module.scss";

const spanList = [paper1, paper2, paper3, paper4, paper5];

const OrientationSenseCard = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.htmlVision.interactiveDesign.automaticIdentificationOfMouseDirection" />
      <div className={styles.content}>
        {spanList.map((item: string, index: number) => {
          return (
            <div className={styles.card} key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrientationSenseCard;
