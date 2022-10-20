import React, {
  useRef,
  useCallback,
  useImperativeHandle,
  ReactNode,
  Ref,
} from "react";
import Tilt from "react-tilt";
import styles from "./index.module.less";

interface TiltButtonProps {
  children: ReactNode;
  color?: string;
  buttonstyle?: Record<string, any>;
  [key: string]: any;
}

const TiltButton = (props: TiltButtonProps, ref: Ref<unknown>) => {
  const { children, color = "#355DFF", buttonstyle = {} } = props;

  const buttonRef = useRef(null);
  useImperativeHandle(ref, () => buttonRef);

  const buttonWrapper = useRef<HTMLDivElement | null>(null);

  const rand = useCallback((min: number, max: number) => {
    return Math.floor(Math.random() * (max + 1)) + min;
  }, []);

  const finallyButtonStyle = Object.assign(
    { backgroundColor: color, boxShadow: `0 10px 20px -10px ${color}` },
    buttonstyle
  );

  /*
   * tag：所要创建的标签名称
   * attrs: 所需要添加的属性，｛key:val｝
   */
  const createSVG = useCallback((tag: string, attrs: Record<string, any>) => {
    const ns = "http://www.w3.org/2000/svg";
    const xlinkns = "http://www.w3.org/1999/xlink";

    let el = document.createElementNS(ns, tag);
    if (tag === "svg") {
      el.setAttribute("xmlns:xlink", xlinkns);
    }
    for (let k in attrs) {
      if (k === "xlink:href") {
        el.setAttributeNS(xlinkns, k, attrs[k]);
      } else {
        el.setAttribute(k, attrs[k]);
      }
    }
    return el;
  }, []);

  const explode = () => {
    if (!buttonWrapper.current) return;
    const symbolArray = [
      "#donut",
      "#circle",
      "#tri_hollow",
      "#triangle",
      "#square",
      "#squ_hollow",
    ];

    // 删除上次添加的svg
    const { length } = buttonWrapper.current.children;
    if (length > 1) {
      for (let i = length - 1; i >= 0; i--) {
        const item = buttonWrapper.current.children[i];
        if (item.nodeName !== "BUTTON") {
          (buttonWrapper.current as HTMLDivElement).removeChild(item);
        }
      }
    }

    const particles = 10;
    const { width, height } = buttonWrapper.current.getBoundingClientRect();
    for (let i = 0; i < particles; i++) {
      const randomSymbol = Math.floor(Math.random() * symbolArray.length);
      const x =
          width / 2 +
          rand(50, 100) *
            Math.cos((2 * Math.PI * i) / rand(particles - 10, particles + 10)),
        y =
          height / 2 +
          rand(50, 100) *
            Math.sin((2 * Math.PI * i) / rand(particles - 10, particles + 10)),
        deg = rand(0, 360) + "deg",
        scale = rand(0.5, 1);

      const elm = createSVG("svg", {
        class: styles.symbol,
        style: `top: ${y}px;left: ${x}px;transform: scale(${scale}) rotate(${deg})`,
        fill: color,
      });
      const use = createSVG("use", { "xlink:href": symbolArray[randomSymbol] });
      elm.appendChild(use);
      buttonWrapper.current.prepend(elm);
    }
  };

  return (
    <div {...props} className={`${styles.container} ${props.className || ""}`}>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={styles.buttonWrapper} ref={buttonWrapper}>
          <button style={finallyButtonStyle} onClick={explode} ref={buttonRef}>
            {children}
          </button>
        </div>
      </Tilt>

      <svg xmlns="http://www.w3.org/2000/svg" className={styles.baseSvg}>
        <symbol id="donut" viewBox="0 0 14 14">
          <path
            fillRule="nonzero"
            d="M7 12c2.76 0 5-2.24 5-5S9.76 2 7 2 2 4.24 2 7s2.24 5 5 5zm0 2c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
          />
        </symbol>
        <symbol id="circle" viewBox="0 0 10 10">
          <circle cx="5" cy="5" r="5" fillRule="evenodd" />
        </symbol>
        <symbol id="tri_hollow" viewBox="0 0 12 11">
          <path
            fillRule="nonzero"
            d="M3.4 8.96h5.2L6 4.2 3.4 8.95zM6 0l6 11H0L6 0z"
          />
        </symbol>
        <symbol id="triangle" viewBox="0 0 10 9">
          <path fillRule="evenodd" d="M5 0l5 9H0" />
        </symbol>
        <symbol id="square" viewBox="0 0 8 8">
          <path fillRule="evenodd" d="M0 0h8v8H0z" />
        </symbol>
        <symbol id="squ_hollow" viewBox="0 0 8 8">
          <path fillRule="nonzero" d="M1.5 1.5v5h5v-5h-5zM0 0h8v8H0V0z" />
        </symbol>
      </svg>
    </div>
  );
};

export default React.forwardRef(TiltButton);
