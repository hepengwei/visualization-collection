/**
 * 生成正多边形
 */
import React, { useEffect, useRef, useState } from "react";
import { Slider, InputNumber } from "antd";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

const minSideNum = 3;
const maxSideNum = 20;

const GenerateRegularPolygon = () => {
  const intl = useIntl();
  const graphRef = useRef<HTMLDivElement>(null);
  const [n, setN] = useState<number>(minSideNum); // 边数
  const [rotation, setRotation] = useState<number>(0); // 旋转
  const [polygonStr, setPolygonStr] = useState<string>("");

  const onSideChange = (value: number | null) => {
    setN(value || minSideNum);
  };

  const onRotationChange = (value: number | null) => {
    setRotation(value || 0);
  };

  useEffect(() => {
    if (graphRef.current) {
      let points = "";
      for (let i = 0; i < n; i++) {
        const deg = (rotation / 180) * Math.PI;
        let x = (50 + 50 * Math.cos((2 * Math.PI * i) / n + deg)).toFixed(2);
        let y = (50 + 50 * Math.sin((2 * Math.PI * i) / n + deg)).toFixed(2);
        points += `${x}% ${y}%, `;
      }
      points = points.slice(0, -2);
      graphRef.current.style.setProperty("--points", points);
      setPolygonStr(points);
    }
  }, [n, rotation]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.graph} ref={graphRef} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.row}>
            <span className={styles.label}>
              {intl.formatMessage({
                id: "page.cssDynamicEffect.generateRegularPolygon.numberOfSides",
              })}
              :
            </span>
            <Slider
              style={{
                display: "flex",
                flex: 1,
                marginLeft: "10px",
                marginRight: "16px",
              }}
              min={minSideNum}
              max={maxSideNum}
              step={1}
              value={n}
              onChange={onSideChange}
            />
            <InputNumber
              style={{ width: "80px" }}
              min={minSideNum}
              max={maxSideNum}
              precision={0}
              value={n}
              onChange={onSideChange}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>
              {intl.formatMessage({
                id: "page.cssDynamicEffect.generateRegularPolygon.rotation",
              })}
              :
            </span>
            <Slider
              style={{
                display: "flex",
                flex: 1,
                marginLeft: "10px",
                marginRight: "16px",
              }}
              min={0}
              max={360}
              step={1}
              value={rotation}
              onChange={onRotationChange}
            />
            <InputNumber
              style={{ width: "80px" }}
              min={0}
              max={360}
              precision={0}
              value={rotation}
              onChange={onRotationChange}
            />
          </div>
          <div className={styles.codeBox}>
            <span>{".box {"}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(135deg,
              #112437, #1d3450, #29588a, #116d6e, #5c8984, #47a992) fixed;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon({polygonStr});
            </span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateRegularPolygon;
