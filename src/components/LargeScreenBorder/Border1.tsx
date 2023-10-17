import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { useIntl } from "react-intl";
import { getTextWidth } from "utils/util";
import { useGlobalContext } from "hooks/useGlobalContext";
import styles from "./index.module.scss";

interface BorderPorps {
  title?: string;
  lineWidth?: number; // 边框线宽度
  lineColor?: string; // 边框线颜色
  highlightColor?: string; // 高亮时颜色
  style?: Record<string, any>;
  children?: ReactNode;
}

const leftTopHeight = 8; // 左上角突起的高度
const leftToplineWidth = 8; // 左上角三个横线各自的宽度
const leftToplineMargin = 4; // 左上角三个横线中间的间距
const titleMarginTop = 6; // 标题距离上边边框的距离
const titleMarginBottom = 20; // 标题距离上边边框的距离
const bgItemWidth = 10; // 背景图案每个小格的宽度
const bgColor1 = "#3D5454"; // 背景图案的小格的颜色1
const bgColor2 = "#445A5A"; // 背景图案的小格的颜色2
const arrowWidth = 10; // 标题左右各箭头的宽度
const arrowLineWidth = 4; // 标题左右各箭头线的粗细
const arrowMargin = 6; // 标题左右各箭头的间距
const arrowMarginTitle = 16; // 标题左右箭头与标题的间距

const Border1 = (props: BorderPorps) => {
  const {
    title = "",
    lineWidth = 1,
    lineColor = "#005A5A", // 边框线默认颜色
    highlightColor = "#41B1B4", // 高亮时默认颜色
    style = {},
  } = props;
  const intl = useIntl();
  const { menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isHover = useRef<boolean>(false);

  const finalStyle = useMemo(() => {
    const defaultStyle = {
      fontSize: "18px",
      color: "#74CCD1", // 标题默认颜色
      fontWeight: 600,
    };
    return { ...defaultStyle, ...style };
  }, [style]);

  // 绘制边框路径
  const drawBorderPath = (drawLineWidth: number) => {
    const ctx = ctxRef.current;
    if (canvasRef.current && ctx) {
      const { width, height } = canvasRef.current;
      let x = 1;
      ctx.beginPath();
      ctx.moveTo(x, leftTopHeight);
      x = leftTopHeight;
      ctx.lineTo(x, 1);
      x += 4 * leftToplineMargin + 3 * leftToplineWidth;
      ctx.lineTo(x, 1);
      x += leftTopHeight;
      ctx.lineTo(x, leftTopHeight);
      x = width - 2 * leftTopHeight;
      ctx.lineTo(x, leftTopHeight);
      x = width - drawLineWidth;
      ctx.lineTo(x, 3 * leftTopHeight);
      ctx.lineTo(x, height - drawLineWidth);
      x = 2 * leftTopHeight;
      ctx.lineTo(x, height - drawLineWidth);
      x = 1;
      ctx.lineTo(x, height - 2 * leftTopHeight);
      ctx.lineTo(x, leftTopHeight);
      ctx.closePath();
      ctx.lineWidth = drawLineWidth;
    }
  };

  const draw = () => {
    if (canvasRef.current && ctxRef.current) {
      const { width, height } = canvasRef.current;
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      let drawLineWidth = lineWidth;
      // hover时绘制背景图案
      if (isHover.current) {
        // 线加粗
        drawLineWidth += 1;
        drawBorderPath(drawLineWidth);
        ctx.fillStyle = isHover.current ? highlightColor : lineColor;
        ctx.fill();
        ctx.globalCompositeOperation = "source-atop";
        let x = 0;
        let y = 0;
        while (y <= height && x <= width) {
          const nextX = x + bgItemWidth;
          const indexX = Math.floor(x / bgItemWidth);
          const indexY = Math.floor(y / bgItemWidth);

          if (
            (indexX % 2 === 0 && indexY % 2 === 0) ||
            (indexX % 2 !== 0 && indexY % 2 !== 0)
          ) {
            ctx.fillStyle = bgColor1;
          } else {
            ctx.fillStyle = bgColor2;
          }
          if (nextX > width) {
            ctx.fillRect(x, y, width - x, bgItemWidth);
            y += bgItemWidth;
            x = 0;
          } else {
            ctx.fillRect(x, y, bgItemWidth, bgItemWidth);
            x += bgItemWidth;
          }
        }
      }
      ctx.globalCompositeOperation = "source-over";
      // 画边框
      drawBorderPath(drawLineWidth);
      let x = 1;
      ctx.strokeStyle = isHover.current ? highlightColor : lineColor;
      ctx.stroke();
      // 修改画笔粗细和颜色
      ctx.lineWidth = drawLineWidth + 1;
      ctx.strokeStyle = highlightColor;
      // 画左上角三个横线
      ctx.beginPath();
      x = leftTopHeight + leftToplineMargin;
      ctx.moveTo(x, leftTopHeight);
      x += leftToplineWidth;
      ctx.lineTo(x, leftTopHeight);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      x += leftToplineMargin;
      ctx.moveTo(x, leftTopHeight);
      x += leftToplineWidth;
      ctx.lineTo(x, leftTopHeight);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      x += leftToplineMargin;
      ctx.moveTo(x, leftTopHeight);
      x += leftToplineWidth;
      ctx.lineTo(x, leftTopHeight);
      ctx.closePath();
      ctx.stroke();
      // 画右下角直角
      ctx.beginPath();
      x = width - drawLineWidth;
      ctx.moveTo(x, height - 2 * leftTopHeight);
      ctx.lineTo(x, height);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, height - drawLineWidth);
      x -= 2 * leftTopHeight;
      ctx.lineTo(x, height - drawLineWidth);
      ctx.closePath();
      ctx.stroke();

      if (title) {
        // 绘制标题
        const titleWidth = getTextWidth(
          title,
          Number.parseInt(finalStyle.fontSize),
          finalStyle.fontWeight
        );
        ctx.font = `${finalStyle.fontWeight} ${finalStyle.fontSize} SourceHanSansCN-Bold`;
        ctx.fillStyle = finalStyle.color;
        ctx.fillText(
          title,
          (width - titleWidth) / 2,
          leftTopHeight + titleMarginTop + Number.parseInt(finalStyle.fontSize)
        );
        let x =
          (width - titleWidth) / 2 -
          (arrowMarginTitle + 2 * arrowWidth + arrowMargin);
        const y =
          leftTopHeight +
          titleMarginTop +
          Number.parseInt(finalStyle.fontSize) / 2 +
          2;
        // 绘制标题左边箭头图案
        ctx.lineWidth = arrowLineWidth;
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(x, leftTopHeight + titleMarginTop + 4);
        ctx.lineTo(x + arrowWidth, y);
        ctx.lineTo(
          x,
          leftTopHeight + titleMarginTop + Number.parseInt(finalStyle.fontSize)
        );
        ctx.strokeStyle = isHover.current ? finalStyle.color : lineColor;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(
          x + arrowWidth + arrowMargin,
          leftTopHeight + titleMarginTop + 4
        );
        ctx.lineTo(x + 2 * arrowWidth + arrowMargin, y);
        ctx.lineTo(
          x + arrowWidth + arrowMargin,
          leftTopHeight + titleMarginTop + Number.parseInt(finalStyle.fontSize)
        );
        ctx.strokeStyle = finalStyle.color;
        ctx.stroke();
        // 绘制标题右边箭头图案
        x = (width + titleWidth) / 2 + arrowMarginTitle;
        ctx.beginPath();
        ctx.moveTo(x + arrowWidth, leftTopHeight + titleMarginTop + 4);
        ctx.lineTo(
          x,
          leftTopHeight +
            titleMarginTop +
            Number.parseInt(finalStyle.fontSize) / 2 +
            2
        );
        ctx.lineTo(
          x + arrowWidth,
          leftTopHeight + titleMarginTop + Number.parseInt(finalStyle.fontSize)
        );
        ctx.strokeStyle = finalStyle.color;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(
          x + 2 * arrowWidth + arrowMargin,
          leftTopHeight + titleMarginTop + 4
        );
        ctx.lineTo(
          x + arrowWidth + arrowMargin,
          leftTopHeight +
            titleMarginTop +
            Number.parseInt(finalStyle.fontSize) / 2 +
            2
        );
        ctx.lineTo(
          x + 2 * arrowWidth + arrowMargin,
          leftTopHeight + titleMarginTop + Number.parseInt(finalStyle.fontSize)
        );
        ctx.strokeStyle = isHover.current ? finalStyle.color : lineColor;
        ctx.stroke();
      }
    }
  };

  useEffect(() => {
    if (containerRef.current && canvasRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      canvasRef.current.width = clientWidth;
      canvasRef.current.height = clientHeight;
      ctxRef.current = canvasRef.current.getContext("2d");
      draw();
    }
  }, [title, menuWidth]);

  const onMouseEnter = () => {
    isHover.current = true;
    draw();
  };

  const onMouseLeave = () => {
    isHover.current = false;
    draw();
  };

  return (
    <div
      className={styles.container}
      style={finalStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      <canvas ref={canvasRef}>
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
      <div
        className={styles.content}
        style={{
          left: `${leftTopHeight * 2}px`,
          right: `${leftTopHeight}px`,
          top: title
            ? `${
                leftTopHeight +
                Number.parseInt(finalStyle.fontSize) +
                titleMarginTop +
                titleMarginBottom
              }px`
            : `${leftTopHeight + titleMarginTop}px`,
          bottom: `${leftTopHeight}px`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Border1;
