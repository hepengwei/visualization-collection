/**
 * 生成滚动条
 */
import React, { useEffect, useRef, useState } from "react";
import { Slider, InputNumber, ColorPicker } from "antd";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

const maxScrollWidth = 30;
const defaultScrollBarWidth = 14;
const defaultScrollBarHeight = 14;
const defaultScrollbarBgColor = "#cccccc";
const defaultSlidingBlockBgColor = "#999999";
const defaultRightBottomBgColor = "#eeeeee";

const GenerateScrollBar = () => {
  const intl = useIntl();
  const graphRef = useRef<HTMLDivElement>(null);
  const [scrollbarWidth, setScrollBarWidth] = useState<number>(
    defaultScrollBarWidth
  ); // 纵向滚动条的宽度
  const [scrollbarHeight, setScrollBarHeight] = useState<number>(
    defaultScrollBarHeight
  ); // 横向滚动条的高度
  const [scrollbarBgColor, setScrollbarBgColor] = useState<string>(
    defaultScrollbarBgColor
  ); // 滚动条背景颜色
  const [slidingBlockBgColor, setSlidingBlockBgColor] = useState<string>(
    defaultSlidingBlockBgColor
  ); // 滚动条滑块背景颜色
  const [slidingBlockRadius, setSlidingBlockRadius] = useState<number>(0); // 滚动条滑块圆角
  const [slidingBlockHoverBgColor, setSlidingBlockHoverBgColor] =
    useState<string>(defaultSlidingBlockBgColor); // 滚动条滑块hover后的背景颜色
  const [rightBottomBgColor, setRightBottomBgColor] = useState<string>(
    defaultRightBottomBgColor
  ); // 当横向和纵向滚动条同时存在时，右下角区域的背景颜色

  const onScrollBarWidthChange = (value?: number | null) => {
    const newScrollBarWidth = value ?? defaultScrollBarWidth;
    setScrollBarWidth(newScrollBarWidth);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--scrollBarWidth",
        `${newScrollBarWidth}px`
      );
    }
  };

  const onScrollBarHeightChange = (value?: number | null) => {
    const newScrollBarHeight = value ?? defaultScrollBarHeight;
    setScrollBarHeight(newScrollBarHeight);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--scrollBarHeight",
        `${newScrollBarHeight}px`
      );
    }
  };

  const onSlidingBlockRadiusChange = (value?: number | null) => {
    const newSlidingBlockRadius = value ?? 0;
    setSlidingBlockRadius(newSlidingBlockRadius);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--slidingBlockRadius",
        `${newSlidingBlockRadius}px`
      );
    }
  };

  const onScrollBarBgColorChange = (_?: any, hex?: string) => {
    const newScrollBarBgColor = hex ?? defaultScrollbarBgColor;
    setScrollbarBgColor(newScrollBarBgColor);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--scrollBarBgColor",
        newScrollBarBgColor
      );
    }
  };

  const onSlidingBlockBgColorChange = (_?: any, hex?: string) => {
    const newSlidingBlockBgColor = hex ?? defaultSlidingBlockBgColor;
    setSlidingBlockBgColor(newSlidingBlockBgColor);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--slidingBlockBgColor",
        newSlidingBlockBgColor
      );
    }
    onSlidingBlockHoverBgColorChange(null, newSlidingBlockBgColor);
  };

  const onSlidingBlockHoverBgColorChange = (_?: any, hex?: string) => {
    const newSlidingBlockHoverBgColor = hex ?? defaultSlidingBlockBgColor;
    setSlidingBlockHoverBgColor(newSlidingBlockHoverBgColor);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--slidingBlockHoverBgColor",
        newSlidingBlockHoverBgColor
      );
    }
  };

  const onRightBottomBgColorChange = (_?: any, hex?: string) => {
    const newRightBottomBgColor = hex ?? defaultRightBottomBgColor;
    setRightBottomBgColor(newRightBottomBgColor);
    if (graphRef.current) {
      graphRef.current.style.setProperty(
        "--rightBottomBgColor",
        newRightBottomBgColor
      );
    }
  };

  useEffect(() => {
    if (graphRef.current) {
      onScrollBarWidthChange();
      onScrollBarHeightChange();
      onSlidingBlockRadiusChange();
      onScrollBarBgColorChange();
      onSlidingBlockBgColorChange();
      onSlidingBlockHoverBgColorChange();
      onRightBottomBgColorChange();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.graph} ref={graphRef}>
            <div className={styles.graphBg} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.scrollBarWidth",
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
                max={maxScrollWidth}
                step={1}
                value={scrollbarWidth}
                onChange={onScrollBarWidthChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={0}
                max={maxScrollWidth}
                precision={0}
                value={scrollbarWidth}
                onChange={onScrollBarWidthChange}
              />
            </div>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.scrollBarHeight",
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
                max={maxScrollWidth}
                step={1}
                value={scrollbarHeight}
                onChange={onScrollBarHeightChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={0}
                max={maxScrollWidth}
                precision={0}
                value={scrollbarHeight}
                onChange={onScrollBarHeightChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.slidingBlockRadius",
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
                max={Math.ceil(
                  Math.max(scrollbarWidth / 2, scrollbarHeight / 2)
                )}
                step={1}
                value={slidingBlockRadius}
                onChange={onSlidingBlockRadiusChange}
              />
              <InputNumber
                style={{ width: "80px" }}
                min={0}
                max={maxScrollWidth}
                precision={0}
                value={slidingBlockRadius}
                onChange={onSlidingBlockRadiusChange}
              />
            </div>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.scrollBarBgColor",
                })}
                :
              </span>
              <ColorPicker
                value={scrollbarBgColor}
                showText
                onChange={onScrollBarBgColorChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.slidingBlockBgColor",
                })}
                :
              </span>
              <ColorPicker
                value={slidingBlockBgColor}
                showText
                onChange={onSlidingBlockBgColorChange}
              />
            </div>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.slidingBlockHoverBgColor",
                })}
                :
              </span>
              <ColorPicker
                value={slidingBlockHoverBgColor}
                showText
                onChange={onSlidingBlockHoverBgColorChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "page.cssDynamicEffect.generateScrollBar.rightBottomBgColor",
                })}
                :
              </span>
              <ColorPicker
                value={rightBottomBgColor}
                showText
                onChange={onRightBottomBgColorChange}
              />
            </div>
          </div>
          <div className={styles.codeBox}>
            <span>{".box {"}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;overflow: auto;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{"::-webkit-scrollbar {"}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`width: ${scrollbarWidth}px;`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`height: ${scrollbarHeight}px;`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`background-color: ${scrollbarBgColor};`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {"}"}
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{"::-webkit-scrollbar-thumb {"}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`background-color: ${slidingBlockBgColor};`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`border-radius: ${slidingBlockRadius}px;`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {"}"}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;{"::-webkit-scrollbar-thumb:hover {"}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`background-color: ${slidingBlockHoverBgColor};`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {"}"}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;{"::-webkit-scrollbar-corner  {"}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`background-color: ${rightBottomBgColor};`}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {"}"}
            </span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateScrollBar;
