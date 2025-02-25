import React, { useEffect } from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const width = 400;
const height = 260;

const RippleText = () => {
  useEffect(() => {
    const svgHtml = document.querySelector("#svg");
    if (!svgHtml) return;
    const svgString = svgHtml.outerHTML;

    // 对 SVG 字符串进行 URL 编码
    const encodedSvg = encodeURIComponent(svgString);

    // 构建 data URI
    const dataUri = `data:image/svg+xml,${encodedSvg}`;
    const feImage = document.querySelectorAll(".feImage");
    for (let image of feImage) image.setAttribute("href", dataUri);
  }, []);

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle='page.cssDynamicEffect.richDynamicEffect.rippleText' />
      <div className={styles.content}>River</div>
      <svg
        id='svg'
        version='1.1'
        width={width}
        height={height}
        xmlns='http://www.w3.org/2000/svg'
        color-interpolation-filters='sRGB'
      >
        <defs>
          <filter id='filter'>
            <feTurbulence
              id='turbulence'
              type='turbulence'
              numOctaves='1'
              seed='1'
              baseFrequency='0.065 0.156'
            ></feTurbulence>
          </filter>
        </defs>
        <rect width={width} height={height} filter='url(#filter)' />
      </svg>

      <svg xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='ripplefilter'>
            <feImage
              id='feImage1'
              className='feImage'
              href=''
              result='feImage1'
            ></feImage>

            <feImage
              id='feImage2'
              className='feImage'
              href=''
              result='feImage2'
              x='-100%'
            ></feImage>

            <feMerge>
              <feMergeNode in='feImage1'></feMergeNode>
              <feMergeNode in='feImage2'></feMergeNode>
            </feMerge>

            <feDisplacementMap
              in='SourceGraphic'
              scale='60'
              xChannelSelector='R'
              yChannelSelector='B'
            ></feDisplacementMap>

            <animate
              className='animate'
              xlinkHref='#feImage1'
              attributeName='x'
              dur='10s' // 修改该值调节速度
              from='0%'
              to='100%'
              fill='freeze'
              repeatCount='indefinite'
            />

            <animate
              className='animate'
              xlinkHref='#feImage2'
              attributeName='x'
              dur='10s' // 修改该值调节速度
              from='-100%'
              to='0%'
              fill='freeze'
              repeatCount='indefinite'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default RippleText;
