import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import scenery1 from "images/html/scenery1.jpg";
import scenery4 from "images/html/scenery4.jpg";
import scenery5 from "images/html/scenery5.jpg";
import scenery6 from "images/html/scenery6.jpg";
import styles from "./index.module.scss";

const imgList = [scenery1, scenery4, scenery5, scenery6];

const StackedImages = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.htmlVision.interactiveDesign.stackedImages" />
      <div className={styles.content}>
        {imgList.map((item: string, index: number) => (
          <img src={item} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};

export default StackedImages;
