import React, { useRef, useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ModuleTitle from "@/components/ModuleTitle";
import paper1 from "images/html/paper1.png";
import paper2 from "images/html/paper2.png";
import paper3 from "images/html/paper3.png";
import paper4 from "images/html/paper4.png";
import paper5 from "images/html/paper5.png";
import styles from "./index.module.scss";

const speed = 0.006; // 擦除速度
const dasharrayList = [8, 8, 8, 7, 30];
const scaleCoefficientList = [0.72, 0.7, 1, 1, 0.32];
const addHeightCoefficient = 0.1;
const imageWidth = 240;
const imageHeight = 340;

const WipeSwitchover = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const defsRef = useRef<SVGDefsElement>(null);
  const [pageIndex, setPageIndex] = useState<number>(dasharrayList.length - 1);
  const pageIndexRef = useRef<number>(dasharrayList.length - 1);
  const disabled = useRef<boolean>(false);
  const frameId = useRef<number>(0);

  const animation = (ele: SVGPathElement, newPageIndex: number) => {
    if (ele) {
      disabled.current = true;
      const { strokeDashoffset } = ele.style;
      let newStrokeDashoffset = 0;
      if (strokeDashoffset) {
        if (strokeDashoffset === "0") {
          newStrokeDashoffset = Number(
            (dasharrayList[pageIndexRef.current] * speed).toFixed(2)
          );
        } else if (strokeDashoffset.includes("px")) {
          const now = Number(
            strokeDashoffset.substring(0, strokeDashoffset.length - 2)
          );
          if (newPageIndex < pageIndexRef.current) {
            if (now >= dasharrayList[pageIndexRef.current]) {
              disabled.current = false;
              pageIndexRef.current = newPageIndex;
              setPageIndex(newPageIndex);
              return;
            } else {
              newStrokeDashoffset = Number(
                (dasharrayList[pageIndexRef.current] * speed + now).toFixed(2)
              );
            }
          } else if (newPageIndex > pageIndexRef.current) {
            if (now >= dasharrayList[newPageIndex] * 2) {
              ele.style.strokeDashoffset = "0px";
              disabled.current = false;
              pageIndexRef.current = newPageIndex;
              setPageIndex(newPageIndex);
              return;
            } else {
              newStrokeDashoffset = Number(
                (dasharrayList[newPageIndex] * speed + now).toFixed(2)
              );
            }
          }
        } else {
          const now = Number(strokeDashoffset);
          if (newPageIndex < pageIndexRef.current) {
            if (now >= dasharrayList[pageIndexRef.current]) {
              disabled.current = false;
              pageIndexRef.current = newPageIndex;
              setPageIndex(newPageIndex);
              return;
            } else {
              newStrokeDashoffset = Number(
                (dasharrayList[pageIndexRef.current] * speed + now).toFixed(2)
              );
            }
          } else if (newPageIndex > pageIndexRef.current) {
            if (now >= dasharrayList[newPageIndex] * 2) {
              ele.style.strokeDashoffset = "0px";
              disabled.current = false;
              pageIndexRef.current = newPageIndex;
              setPageIndex(newPageIndex);
              return;
            } else {
              newStrokeDashoffset = Number(
                (dasharrayList[newPageIndex] * speed + now).toFixed(2)
              );
            }
          }
        }
      } else {
        newStrokeDashoffset = Number(
          (dasharrayList[pageIndexRef.current] * speed).toFixed(2)
        );
      }
      ele.style.strokeDashoffset = `${newStrokeDashoffset}px`;
      frameId.current = window.requestAnimationFrame(() =>
        animation(ele, newPageIndex)
      );
    }
  };

  const goPreviousPage = () => {
    if (disabled.current) return;
    if (defsRef.current) {
      const newPageIndex = pageIndex + 1;
      const ele = defsRef.current.children[newPageIndex]
        .children[0] as SVGPathElement;
      animation(ele, newPageIndex);
    }
  };

  const goNextPage = () => {
    if (disabled.current) return;
    if (defsRef.current) {
      const newPageIndex = pageIndex - 1;
      const ele = defsRef.current.children[pageIndex]
        .children[0] as SVGPathElement;
      animation(ele, newPageIndex);
    }
  };

  const init = () => {
    if (containerRef.current && defsRef.current) {
      const { clientWidth } = containerRef.current;
      const newHeight = Math.ceil(
        600 + (clientWidth - 1140) * addHeightCoefficient
      );
      Array.prototype.forEach.call(
        defsRef.current.children,
        (mask: SVGMaskElement, index: number) => {
          let transform = window
            .getComputedStyle(mask.children[0], null)
            .getPropertyValue("transform");
          if (transform && transform.startsWith("matrix")) {
            const arr = transform.split(", ");
            arr[0] = `${arr[0].substring(0, 7)}${Math.ceil(
              scaleCoefficientList[index] * clientWidth
            )}`;
            transform = arr.join(", ");
          }
          (mask.children[0] as SVGPathElement).style.transform = transform;
        }
      );
      if (svgRef.current) {
        containerRef.current.style.height = `${newHeight}px`;
        Array.prototype.forEach.call(svgRef.current.children, (e: any) => {
          if (e.tagName === "g") {
            e.style.height = `${newHeight}px`;
            e.children[0].style.height = `${newHeight}px`;
            e.children[0].style.transform = `${newHeight}px`;
            const translateX = Math.floor(clientWidth / 2 - imageWidth - 40);
            const translateY = Math.floor((newHeight - imageHeight) / 2);
            (
              e.children[1] as SVGImageElement
            ).style.transform = `translate(${translateX}px, ${translateY}px)`;
          }
        });
      }
    }
  };

  useEffect(() => {
    init();
    return () => {
      frameId.current && cancelAnimationFrame(frameId.current);
    };
  }, []);

  useEffect(() => {
    // 监听屏幕变化事件
    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <ModuleTitle intlTitle="page.htmlVision.interactiveDesign.wipeTheEffect" />
      <svg ref={svgRef}>
        <defs ref={defsRef}>
          <mask id="mask1" className={styles.mask1}>
            <path
              d="M0.712-0.263
            c0,0-0.009,0.466-0.001,0.593c0.002,0.033,0.013,0.098-0.149,0.098c-0.157,0-0.16-0.049-0.161-0.08
            C0.398,0.245,0.395,0.04,0.399-0.063c0.001-0.035,0.009-0.105-0.162-0.102C0.088-0.163,0.091-0.093,0.09-0.059
            C0.09,0.04,0.08,0.238,0.09,0.337C0.093,0.368,0.107,0.42-0.058,0.42c-0.162,0-0.136-0.05-0.139-0.079
            C-0.21,0.234-0.207,0.033-0.2-0.069c0.002-0.035,0.015-0.103-0.16-0.102C-0.521-0.171-0.511-0.1-0.509-0.066
            C-0.502,0.046-0.51,0.379-0.51,0.379"
            />
          </mask>
          <mask id="mask2" className={styles.mask2}>
            <path
              d="M-0.305,0.045
            c0,0,1.262-0.007,1.36-0.007c0.231,0,0.229,0.224-0.001,0.224c-0.14,0.001-0.929-0.002-1.042,0c-0.174,0.003-0.17,0.224-0.021,0.23
            c0.288,0.011,0.87-0.005,1.055-0.011C1.223,0.475,1.228,0.71,1.071,0.71C0.779,0.723,0.09,0.705-0.038,0.712
            s-0.148,0.223,0.031,0.234s0.233,0.011,0.233,0.011"
            />
          </mask>
          <mask id="mask3" className={styles.mask3}>
            <path d="M1.15844,0.36167L1.08063,0.40111C0.95906,0.528330.94358,0.771430.87938,0.95278C0.81605,1.131660.65918,1.069850.71313,0.88778C0.75751,0.737960.89903,0.356360.93094,0.16944C0.95119,0.050820.84113,-0.056650.77563,0.12056C0.70882,0.301290.46792,1.203240.32092,0.97256C0.23658,0.840220.60869,0.261270.58134,0.05953C0.56686,-0.047280.49508,-0.06670.43749,0.0378C0.32377,0.244160.27639,0.451050.17792,0.71504C0.07944,0.979030.00295,0.842150.01094,0.75333C0.03758,0.457110.31406,0.1150.23375,-0.01111C0.15331,-0.137420.09392,0.21887-0.0325,0.23722" />
          </mask>
          <mask id="mask4" className={styles.mask4}>
            <path
              d="M0.559-0.226L0.535-0.16
            c-0.196,0.171,0.09,0.27-0.022,0.436C0.49,0.31,0.384,0.312,0.344,0.202c-0.035-0.097-0.033-0.195,0.014-0.26
            c0.105-0.143,0.209-0.079,0.264,0.003c0.061,0.09,0.066,0.192,0.047,0.265c-0.093,0.35-0.537,0.162-0.49-0.159
            c0.019-0.129,0.095-0.202,0.196-0.228c0.13-0.034,0.289-0.028,0.373,0.063c0.083,0.09,0.094,0.349-0.014,0.466
            C0.64,0.452,0.178,0.502,0.077,0.256C-0.05-0.055,0.18-0.217,0.373-0.227c0.224-0.012,0.463-0.017,0.535,0.128
            C0.993,0.072,0.978,0.29,0.813,0.427"
            />
          </mask>
          <mask id="mask5" className={styles.mask5}>
            <path
              d="M1.854-1.746L1.537-1.042
            c0.01,0.123-1.79,0.327-2.269,0.467C-1.433-0.37-1.427,0.309-0.835,0.209c0.464-0.078,3.077-0.572,3.921-0.742
            C3.714-0.66,3.81-0.043,3.364,0.102C2.423,0.406-0.153,0.795-1.188,1.026c-0.494,0.11-0.409,0.646,0.107,0.629
            c0.76-0.025,3.983-0.752,4.594-0.793c0.399-0.045,0.967,0.403-0.091,0.66C3.028,1.685,1,2.067,0.612,2.239
            C0.225,2.411,0.27,2.982,1.007,2.833l2.979-0.615"
            />
          </mask>
        </defs>
        <g className={styles.page1} mask="url(#mask1)">
          <rect fill="#e3e4e5"></rect>
          <image xlinkHref={paper1} />
          <text fill="#757576">Book5</text>
        </g>
        <g className={styles.page2} mask="url(#mask2)">
          <rect fill="#7e7f83"></rect>
          <image xlinkHref={paper2} />
          <text fill="#dedede">Book4</text>
        </g>
        <g className={styles.page3} mask="url(#mask3)">
          <rect fill="#f8d3cc"></rect>
          <image xlinkHref={paper3} />
          <text fill="#b0304e">Book3</text>
        </g>
        <g className={styles.page4} mask="url(#mask4)">
          <rect fill="#d2e4ce"></rect>
          <image xlinkHref={paper4} />
          <text fill="#04756e">Book2</text>
        </g>
        <g className={styles.page5} mask="url(#mask5)">
          <rect fill="#cad9e5"></rect>
          <image xlinkHref={paper5} />
          <text fill="#142864">Book1</text>
        </g>
      </svg>
      <div
        className={styles.prevBtn}
        style={
          pageIndex >= dasharrayList.length - 1 ? { pointerEvents: "none" } : {}
        }
        onClick={goPreviousPage}
      >
        <div className={styles.icon}>
          <LeftOutlined />
        </div>
      </div>
      <div
        className={styles.nextBtn}
        style={pageIndex <= 0 ? { pointerEvents: "none" } : {}}
        onClick={goNextPage}
      >
        <div className={styles.icon}>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default WipeSwitchover;
