import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import card3 from "images/card3.png";
import styles from "./index.module.scss";

const LongRainbowGlass = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle='page.cssDynamicEffect.richDynamicEffect.longRainbowGlass' />
      <div className={styles.content}>
        <div
          className={styles.box}
          style={{ backgroundImage: `url('public/gradationBar.svg')` }}
        />
        <svg
          version='1.1'
          width='280'
          height='396'
          xmlns='http://www.w3.org/2000/svg'
          color-interpolation-filters='sRGB'
        >
          <filter
            id='gradationBarFilter'
            primitiveUnits='objectBoundingBox'
            x='0'
            y='0'
            width='100%'
            height='100%'
          >
            <feImage
              x='0'
              y='0'
              result='image_0'
              crossOrigin='anonymous'
              href={card3}
              preserveAspectRatio='none'
              width='1'
              height='1'
            />
            <feDisplacementMap
              scale='0.1'
              xChannelSelector='R'
              yChannelSelector='G'
              in='image_0'
              in2='SourceGraphic'
              result='displacement_0'
            />
          </filter>
        </svg>
      </div>
    </div>
  );
};

export default LongRainbowGlass;
