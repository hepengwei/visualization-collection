import React from "react";
import financialTechnology from "images/financialTechnology.png";
import glass1 from "images/html/glass1.jpg";
import styles from "./index.module.scss";

const GlassDesign1 = () => {
  return (
    <div className={styles.container}>
      <img src={financialTechnology} alt="" />
      <div className={styles.glass} />
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="glassFilter1">
            <feImage
              result="pict1"
              xlinkHref={glass1}
              x="0"
              y="0"
              width="517"
              height="517"
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

export default GlassDesign1;
