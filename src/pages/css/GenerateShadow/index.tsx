/**
 * 生成阴影
 */
import React, { useEffect, useRef, useState } from "react";
import { Slider, InputNumber, message } from "antd";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

const minSideNum = -50;
const maxSideNum = 50;
const defaultHorizontalValue = 20;
const defaultVerticalValue = 20;
const defaultBlurLength = 10;
const defaultSpreadSize = 0;
const defaultBorderRadius = 20;

const GenerateShadow = () => {
  const intl = useIntl();
  const graphRef = useRef<HTMLDivElement>(null);
  const [horizontalValue, setHorizontalValue] = useState<number>(
    defaultHorizontalValue
  ); // 水平阴影位置
  const [verticalValue, setVerticalValue] =
    useState<number>(defaultVerticalValue); // 垂直阴影位置
  const [blurLength, setBlurLength] = useState<number>(defaultBlurLength); // 模糊程度
  const [shadowSize, setShadowSize] = useState<number>(defaultSpreadSize); // 阴影大小
  const [borderRadius, setBorderRadius] = useState<number>(defaultBorderRadius); // 边框半价

  const [boxShadowStr, setBoxShadowStr] = useState<string>("");

  const onHorizontalValueChange = (value: number | null) => {
    setHorizontalValue(value || value === 0 ? value : defaultHorizontalValue);
  };

  const onVerticalValueChange = (value: number | null) => {
    setVerticalValue(value || value === 0 ? value : defaultVerticalValue);
  };

  const onBlurLengthChange = (value: number | null) => {
    setBlurLength(value || value === 0 ? value : defaultBlurLength);
  };

  const onShadowSizeChange = (value: number | null) => {
    setShadowSize(value || value === 0 ? value : defaultSpreadSize);
  };

  const onBorderRadiusChange = (value: number | null) => {
    setBorderRadius(value || value === 0 ? value : defaultBorderRadius);
  };

  useEffect(() => {
    if (graphRef.current) {
      const boxShadowStr = `${horizontalValue}px ${verticalValue}px ${blurLength}px ${shadowSize}px #224141`;
      graphRef.current.style.setProperty("--boxShadow", boxShadowStr);
      setBoxShadowStr(boxShadowStr);
    }
  }, [horizontalValue, verticalValue, blurLength, shadowSize]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div
            className={styles.graph}
            style={{ borderRadius: `${borderRadius}px` }}
            ref={graphRef}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateShadow.horizontalOffset",
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
                value={horizontalValue}
                onChange={onHorizontalValueChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={minSideNum}
                max={maxSideNum}
                precision={0}
                value={horizontalValue}
                onChange={onHorizontalValueChange}
              />
            </div>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateShadow.verticalOffset",
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
                value={verticalValue}
                onChange={onVerticalValueChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={minSideNum}
                max={maxSideNum}
                precision={0}
                value={verticalValue}
                onChange={onVerticalValueChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateShadow.blurLength",
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
                max={maxSideNum}
                step={1}
                value={blurLength}
                onChange={onBlurLengthChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={0}
                max={maxSideNum}
                precision={0}
                value={blurLength}
                onChange={onBlurLengthChange}
              />
            </div>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateShadow.shadowSize",
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
                value={shadowSize}
                onChange={onShadowSizeChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={minSideNum}
                max={maxSideNum}
                precision={0}
                value={shadowSize}
                onChange={onShadowSizeChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateShadow.borderRadius",
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
                max={maxSideNum}
                step={1}
                value={borderRadius}
                onChange={onBorderRadiusChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={0}
                max={maxSideNum}
                precision={0}
                value={borderRadius}
                onChange={onBorderRadiusChange}
              />
            </div>
          </div>
          <div className={styles.codeBox}>
            <span>{".box {"}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(135deg,
              #112437, #1d3450, #29588a, #116d6e, #5c8984, #47a992) fixed;
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: {boxShadowStr};</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;border-radius: {borderRadius}px;
            </span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateShadow;
