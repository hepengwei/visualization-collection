/**
 * 连接线
 */
import React, { useRef, useEffect, useCallback } from "react";
import { useIntl } from "react-intl";
import { message } from "antd";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

interface Point {
  x: number;
  y: number;
}

// 标准答案
const standardAnwsers = {
  fruit: "🍌",
  animal: "🐒",
  car: "🚗",
  vegetable: "🥕",
};

const MatchLine = () => {
  const intl = useIntl();
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backCanvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const backCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const leftOptionsRef = useRef<HTMLDivElement>(null);
  const rightOptionsRef = useRef<HTMLDivElement>(null);
  const startElement = useRef<HTMLDivElement | null>(null); // 记录每一次连线开始元素
  const endElement = useRef<HTMLDivElement | null>(null); // 记录每一次连线结束元素
  const startPoint = useRef<Point>({ x: 0, y: 0 }); // 记录每一次连线开始点
  const endPoint = useRef<Point>({ x: 0, y: 0 }); // 记录每一次连线结束点
  const trigger = useRef<boolean>(false); // 标识是否触发连线
  const backLines = useRef<any[]>([]); // 记录已经连接好的线的数据结构
  const anwsers = useRef<Partial<typeof standardAnwsers>>({}); // 记录答案
  const question = useRef<string[]>(
    Object.values(standardAnwsers).sort(() => Math.random() - 0.5)
  ); // 当前题目右边的顺序
  const hasCheckout = useRef<boolean>(false); // 当前是否已校验

  // 判断是否已有连接
  const isConnection = (value: string | undefined) => {
    let result = false;
    if (value) {
      const keys = Object.keys(anwsers.current);
      const values = Object.values(anwsers.current);
      if (keys.includes(value) || values.includes(value)) {
        result = true;
      }
    }
    return result;
  };

  // 绘制所有连线
  const drawLines = (
    lines: {
      point: { x1: number; y1: number; x2: number; y2: number };
      isOk?: boolean;
    }[]
  ) => {
    if (backCanvasRef.current && backCtxRef.current) {
      backCtxRef.current.clearRect(
        0,
        0,
        backCanvasRef.current.width,
        backCanvasRef.current.height
      );
      lines.forEach(({ point: { x1, y1, x2, y2 }, isOk }) => {
        if (backCtxRef.current) {
          if (typeof isOk === "boolean") {
            backCtxRef.current.strokeStyle = isOk ? "#3CB371" : "#DC143C";
          } else {
            backCtxRef.current.strokeStyle = "#6495ED";
          }
          backCtxRef.current.beginPath();
          backCtxRef.current.moveTo(x1, y1);
          backCtxRef.current.lineTo(x2, y2);
          backCtxRef.current.closePath();
          backCtxRef.current.stroke();
        }
      });
    }
  };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    // 阻止时间冒泡/默认行为
    e.stopPropagation();
    e.preventDefault();
    if (hasCheckout.current) {
      message.warning(
        intl.formatMessage({ id: "page.canvasDynamicEffect.pleaseReset" })
      );
      return;
    }
    // 高亮显示按下的元素
    (e.target as HTMLDivElement).classList.add(styles.active);
    // 记录每一次连线的开始元素
    startElement.current = e.target as HTMLDivElement;
    startElement.current.dataset.checked = "1";
    endElement.current = null;
    // 更新每一次连线开始点信息
    startPoint.current.x = Number((e.target as HTMLDivElement).dataset.anchorX);
    startPoint.current.y = Number((e.target as HTMLDivElement).dataset.anchorY);
    // 标识触发连线，用于在mousemove中判断是否需要处理后续的逻辑
    trigger.current = true;
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    // 阻止事件冒泡/默认行为
    e.stopPropagation();
    e.preventDefault();
    if (trigger.current && canvasRef.current && ctxRef.current) {
      // 获取鼠标在屏幕上的位置
      const { clientX, clientY } = e;

      // 计算鼠标在画板中的位置
      const { left, top } = canvasRef.current.getBoundingClientRect();
      endPoint.current = {
        x: clientX - left,
        y: clientY - top,
      };

      // 连线：实际画板
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(startPoint.current.x, startPoint.current.y);
      ctxRef.current.lineTo(endPoint.current.x, endPoint.current.y);
      ctxRef.current.closePath();
      ctxRef.current.stroke();

      // 获取鼠标经过的元素
      const overElement = document.elementFromPoint(clientX, clientY);
      if (overElement) {
        if (startElement.current) {
          // 获取开始元素归属：左侧还是右侧
          const ownership = startElement.current.dataset.ownership;
          // 如果鼠标经过的元素等于目标元素，不作任何处理
          if (overElement === endElement.current) return;
          // 判断是否命中目标元素，条件如下（同时满足）
          // ① 鼠标经过的元素必须必须是连线元素（可通过有无data-ownership判断）
          // ② 鼠标经过的元素和开始元素不在同一侧
          // ③ 鼠标经过的元素未被连线
          const condition1 = (overElement as HTMLElement).dataset.ownership;
          const condition2 =
            (overElement as HTMLElement).dataset.ownership !== ownership;
          const condition3 =
            (overElement as HTMLElement).dataset.checked !== "1";
          if (condition1 && condition2 && condition3) {
            // 记录目标元素
            endElement.current = overElement as HTMLDivElement;
            // 更新目标元素状态（高亮显示）
            endElement.current.classList.add(styles.active);
            // 将开始元素和目标元素表示为已连线
            endElement.current.dataset.checked = "1";
          }
          // 如果没有命中目标元素，但是目标元素又存在，则移除相关状态
          else if (endElement.current) {
            endElement.current.classList.remove(styles.active);
            endElement.current.dataset.checked = "0";
            endElement.current = null;
          }
        }
      } else if (endElement.current) {
        endElement.current.classList.remove(styles.active);
        endElement.current.dataset.checked = "0";
        endElement.current = null;
      }
    }
  }, []);

  const onMouseUp = useCallback((e: React.MouseEvent) => {
    // 阻止事件冒泡/默认行为
    e.stopPropagation();
    e.preventDefault();
    if (!trigger.current) return;
    // 完成连线：开始元素和目标元素同时存在，并且被标识选中
    if (
      startElement.current &&
      endElement.current &&
      startElement.current.dataset.checked === "1" &&
      endElement.current.dataset.checked === "1"
    ) {
      // 获取连线始末坐标点
      const {
        anchorX: x1,
        anchorY: y1,
        ownership,
        value: startValue,
      } = startElement.current.dataset;
      const {
        anchorX: x2,
        anchorY: y2,
        value: endValue,
      } = endElement.current.dataset;
      // 判断开始元素是否已经连线
      const keys = Object.keys(anwsers.current);
      const values = Object.values(anwsers.current);
      if (
        startValue &&
        (keys.includes(startValue) || values.includes(startValue))
      ) {
        // 已连线，处理步骤
        // 找到已连线的目标元素的value·注意：可能在Map结构的左侧，也可能在右侧
        let key = "";
        let value = "";
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const v = values[i];
          if ([k, v].includes(startValue)) {
            key = k;
            value = k === startValue ? v : k;
            break;
          }
        }
        // 根据targetValue找到目标元素
        const sel = `[data-value=${value}]`;
        const tarElement = document.querySelector(sel);
        // 恢复目标元素的状态
        if (tarElement) {
          (tarElement as HTMLElement).dataset.checked = "0";
          tarElement.classList.remove(styles.active);
          // 将对应的数据从记录中移除
          delete anwsers.current[key as keyof typeof standardAnwsers];
          const index = backLines.current.findIndex((item) => item.key === key);
          if (index >= 0) {
            backLines.current.splice(index, 1);
          }
        }
      }
      // backLines中添加连线信息
      const k = (ownership === "L" ? startValue : endValue) as string;
      const v = (ownership === "L" ? endValue : startValue) as string;
      anwsers.current[k as keyof typeof standardAnwsers] = v;
      backLines.current.push({
        key: k,
        point: { x1, y1, x2, y2 },
      });
      drawLines(backLines.current);
    } else if (startElement.current) {
      const startValue = startElement.current.dataset.value;
      const connection = isConnection(startValue);
      if (!connection) {
        startElement.current.dataset.checked = "0";
        startElement.current.classList.remove(styles.active);
      }
    }

    // 恢复元素状态
    trigger.current = false;
    startElement.current = null;
    endElement.current = null;
    // 清空实际连线画布
    if (canvasRef.current && ctxRef.current) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }
  }, []);

  const initOption = (options: HTMLDivElement | null) => {
    if (options) {
      Array.prototype.forEach.call(options.children, (item: any) => {
        // 获取元素在屏幕上的信息
        const { width, height } = item.getBoundingClientRect();
        // 获取元素归属：左侧还是右侧·用于计算元素锚点坐标
        const ownership = item.dataset.ownership;
        // 记录元素锚点坐标
        const anchorX =
          ownership === "L" ? item.offsetLeft + width : item.offsetLeft;
        const anchorY = item.offsetTop + height / 2;
        item.dataset.anchorX = anchorX;
        item.dataset.anchorY = anchorY;
        // 标识当前元素是否连线
        item.dataset.checked = "0";
        item.onmousedown = onMouseDown;
      });
    }
  };

  const init = () => {
    if (boxRef.current && canvasRef.current && backCanvasRef.current) {
      const { clientWidth, clientHeight } = boxRef.current;
      canvasRef.current.width = backCanvasRef.current.width = clientWidth;
      canvasRef.current.height = backCanvasRef.current.height = clientHeight;
      ctxRef.current = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      backCtxRef.current = backCanvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      ctxRef.current.strokeStyle = backCtxRef.current.strokeStyle = "#6495ED";
      ctxRef.current.lineWidth = backCtxRef.current.lineWidth = 2;

      initOption(leftOptionsRef.current);
      initOption(rightOptionsRef.current);
    }
  };

  useEffect(() => {
    init();
    // @ts-ignore
    document.addEventListener("mousemove", onMouseMove);
    // @ts-ignore
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      // @ts-ignore
      document.removeEventListener("mousemove", onMouseMove);
      // @ts-ignore
      document.removeEventListener("mousemove", onMouseUp);
    };
  }, []);

  // 点击重置
  const onReset = () => {
    if (leftOptionsRef.current) {
      Array.prototype.forEach.call(leftOptionsRef.current.children, (item) => {
        item.dataset.checked = "0";
        item.classList.remove(styles.active);
      });
    }
    if (rightOptionsRef.current) {
      Array.prototype.forEach.call(rightOptionsRef.current.children, (item) => {
        item.dataset.checked = "0";
        item.classList.remove(styles.active);
      });
    }
    backLines.current = [];
    anwsers.current = {};
    drawLines(backLines.current);
    hasCheckout.current = false;
  };

  // 点击撤销
  const onBackout = () => {
    if (hasCheckout.current) {
      message.warning(
        intl.formatMessage({ id: "page.canvasDynamicEffect.pleaseReset" })
      );
      return;
    }
    const line = backLines.current.pop();
    if (line) {
      const { key } = line;
      const leftSel = `[data-value="${key}"]`;
      const rightSel = `[data-value="${
        anwsers.current[key as keyof typeof standardAnwsers]
      }"]`;
      delete anwsers.current[key as keyof typeof standardAnwsers];
      const leftElement = document.querySelector(leftSel);
      const rightElement = document.querySelector(rightSel);
      if (leftElement && rightElement) {
        (leftElement as HTMLElement).dataset.checked = (
          rightElement as HTMLElement
        ).dataset.checked = "0";
        leftElement.classList.remove(styles.active);
        rightElement.classList.remove(styles.active);
        drawLines(backLines.current);
      }
    }
  };

  // 点击校验
  const onCheckout = () => {
    if (hasCheckout.current) return;
    // 获取答案keys
    const keys = Object.keys(anwsers.current);
    if (keys.length === 0) {
      message.error(
        intl.formatMessage({
          id: "page.canvasDynamicEffect.noVerifiableAnswer",
        })
      );
      return;
    }
    // 定义变量，记录连线信息
    const lines: {
      isOk: boolean;
      point: { x1: number; y1: number; x2: number; y2: number };
    }[] = [];
    // 遍历keys
    keys.forEach((key) => {
      const value = anwsers.current[key as keyof typeof standardAnwsers];
      /****************
       * 找到用户连线的数据
       ****************/
      const leftSel = `[data-value="${key}"]`;
      const rightSel = `[data-value=${value}]`;
      const leftElement = document.querySelector(leftSel);
      const rightElement = document.querySelector(rightSel);
      if (leftElement && rightElement) {
        // 获取坐标
        const { anchorX: x1, anchorY: y1 } = (leftElement as HTMLElement)
          .dataset;
        const { anchorX: x2, anchorY: y2 } = (rightElement as HTMLElement)
          .dataset;
        // 获取答案
        const anwser = standardAnwsers[key as keyof typeof standardAnwsers];
        // 拼装数据
        lines.push({
          isOk: value === anwser,
          point: {
            x1: x1 ? Number(x1) : 0,
            y1: y1 ? Number(y1) : 0,
            x2: x2 ? Number(x2) : 0,
            y2: y2 ? Number(y2) : 0,
          },
        });
      }
    });
    // 绘制模拟连线画板
    drawLines(lines);
    hasCheckout.current = true;
  };

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.canvasDynamicEffect.matchLineQuestion" />
      <div className={styles.content}>
        <div className={styles.tools}>
          <div className={styles.btn} onClick={onReset}>
            {intl.formatMessage({ id: "common.reset" })}
          </div>
          <div className={styles.btn} onClick={onBackout}>
            {intl.formatMessage({ id: "common.backout" })}
          </div>
          <div className={styles.btn} onClick={onCheckout}>
            {intl.formatMessage({ id: "common.checkout" })}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.box} ref={boxRef}>
            <div className={styles.options} ref={leftOptionsRef}>
              {Object.keys(standardAnwsers).map((key: string) => (
                <div
                  className={styles.option}
                  data-value={key}
                  data-ownership="L"
                >
                  {intl.formatMessage({
                    id: `page.canvasDynamicEffect.${key}`,
                  })}
                </div>
              ))}
            </div>
            <div className={styles.options} ref={rightOptionsRef}>
              {question.current.map((value: string) => (
                <div
                  className={styles.option}
                  data-value={value}
                  data-ownership="R"
                >
                  {value}
                </div>
              ))}
            </div>
            {/* 实际连线 */}
            <canvas ref={canvasRef}></canvas>
            {/* 模拟连线 */}
            <canvas ref={backCanvasRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchLine;
