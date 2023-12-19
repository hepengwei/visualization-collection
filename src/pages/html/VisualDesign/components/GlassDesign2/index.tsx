import React from "react";
import financialTechnology from "images/financialTechnology.png";
import glass2 from "images/html/glass2.jpg";
import styles from "./index.module.scss";

const GlassDesign2 = () => {
  return (
    <div className={styles.container}>
      <img src={financialTechnology} alt="" />
      <div className={styles.glass} />
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="glassFilter2">
            <feImage
              result="pict1"
              xlinkHref={glass2}
              x="0"
              y="0"
              width="523"
              height="330"
            ></feImage>
            <feDisplacementMap
              scale="30"
              xChannelSelector="R"
              yChannelSelector="R"
              in2="pict1"
              in="SourceGraphic"
            ></feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GlassDesign2;
