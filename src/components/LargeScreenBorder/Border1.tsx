import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { useIntl } from "react-intl";
import { getTextWidth } from "utils/util";
import styles from "./index.module.scss";

interface BorderPorps {
  title?: string;
  lineWidth?: number; // 边框线宽度
  lineColor?: string; // 边框线颜色
  highlightColor?: string; // 个别高亮颜色
  style?: Record<string, any>;
  children?: ReactNode;
}

const leftTopHeight = 8; // 左上角突起的高度
const leftToplineWidth = 8; // 左上角三个横线各自的宽度
const leftToplineMargin = 4; // 左上角三个横线中间的间距
const titleMarginTop = 6; // 标题距离上边边框的距离
const titleMarginBottom = 20; // 标题距离上边边框的距离

const Border1 = (props: BorderPorps) => {
  const {
    title = "",
    lineWidth = 1,
    lineColor = "#005A5A",
    highlightColor = "#41B1B4",
    style = {},
  } = props;
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const finalStyle = useMemo(() => {
    const defaultStyle = {
      fontSize: "18px",
      color: "#74CCD1", // 标题默认颜色
      fontWeight: 600,
    };
    return { ...defaultStyle, ...style };
  }, [style]);

  const draw = () => {
    if (canvasRef.current && ctxRef.current) {
      const { width, height } = canvasRef.current;
      const ctx = ctxRef.current;
      // 画边框
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
      x = width;
      ctx.lineTo(x, 3 * leftTopHeight);
      ctx.lineTo(x, height);
      x = 2 * leftTopHeight;
      ctx.lineTo(x, height);
      x = 1;
      ctx.lineTo(x, height - 2 * leftTopHeight);
      ctx.lineTo(x, leftTopHeight);
      ctx.closePath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.stroke();
      // 修改画笔粗细和颜色
      ctx.lineWidth = lineWidth + 1;
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
      x = width;
      ctx.moveTo(x, height - 2 * leftTopHeight);
      ctx.lineTo(x, height);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, height);
      x -= 2 * leftTopHeight;
      ctx.lineTo(x, height);
      ctx.closePath();
      ctx.stroke();

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
  }, [title]);

  return (
    <div className={styles.container} style={finalStyle} ref={containerRef}>
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
