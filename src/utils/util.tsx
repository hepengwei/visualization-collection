import React, { Suspense } from "react";
import SuspenseLoading from "components/SuspenseLoading";

/**
 * 获取字符串的宽度
 * @text   将要被提取的原字符串
 * @fontSize  字符串显示时的字符大小，支持>=12
 * @fontWeight  字符串显示时的字符粗细
 */
export const getTextWidth = (
  text: string,
  fontSize: number,
  fontWeight = 400
) => {
  const span = document.createElement("span") as HTMLSpanElement;
  span.style.visibility = "hidden";
  span.style.padding = "0";
  span.style.whiteSpace = "nowrap";
  span.style.overflow = "visible";
  span.style.fontSize = fontSize > 12 ? fontSize + "px" : "12px";
  span.style.fontWeight = fontWeight.toString();
  span.innerText = text;
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
};

/**
 * 获取固定宽度的字符串，如果传入的text的宽度不够width,则返回原字符串
 * @text   将要被提取的原字符串
 * @width  想要提取的字符串长度
 * @fontSize  字符串显示时的字符大小，支持>=12
 * @fontWeight  字符串显示时的字符粗细
 * @isNeedEllipsis   当text的宽度大于width时是否需要省略号，会在传入的width基础上加，最后返回字符串宽度会>width
 */
export const getFixedWidthText = (
  text: string,
  width: number,
  fontSize = 12,
  fontWeight = 400,
  isNeedEllipsis = true
) => {
  let returnText = "";
  let oldText = "";
  let newText = "";
  if (!text || width < fontSize || typeof text !== "string") return returnText;
  const arr = text.split("");
  const span = document.createElement("span") as HTMLSpanElement;
  span.style.visibility = "hidden";
  span.style.padding = "0";
  span.style.whiteSpace = "nowrap";
  span.style.overflow = "visible";
  span.style.fontSize = fontSize > 12 ? fontSize + "px" : "12px";
  span.style.fontWeight = fontWeight.toString();
  document.body.appendChild(span);

  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i];
    oldText = newText;
    newText += item;
    returnText = newText;
    span.innerText = newText;
    const nowWidth = span.offsetWidth;
    if (nowWidth > width) {
      if (isNeedEllipsis) {
        returnText = oldText + "...";
      } else {
        returnText = oldText;
      }
      break;
    }
  }

  document.body.removeChild(span);
  return returnText;
};

/**
 * 为一个字符串每rowStrLength个字后添加换行符（最后的换行符不要，兼容由多个Unicode码组合成的汉字）
 * @text   原字符串
 * @rowStrLength 每多少个字后加换行符
 */
export const textAddLineBreak = (text: string, rowStrLength: number) => {
  let num = 0;
  let result = "";
  if (!text || rowStrLength <= 0) return text;
  for (const char of text) {
    if (num >= rowStrLength) {
      result += `${char}\n`;
      num = 0;
    } else {
      result += char;
      num++;
    }
  }
  if (result.endsWith("\n")) {
    result = result.substring(0, result.length - 1);
  }
  return result;
};

const LazyElement = (props: {
  importFunc: () => Promise<{
    default: React.ComponentType<any>;
  }>;
  path: string;
}) => {
  const { importFunc, path } = props;
  const LazyComponent = React.lazy(importFunc);
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <LazyComponent />
    </Suspense>
  );
};

export const supportLazyElement = (routes: Record<string, any>[]) => {
  if (!routes || routes.length === 0) return;
  routes.forEach((route) => {
    if (typeof route.element === "function") {
      route.element = (
        <LazyElement importFunc={route.element as any} path={route.path} />
      );
    }
    if (route.children) {
      supportLazyElement(route.children);
    }
  });
};

/**
 * 保存文本到剪切板
 * @param {string} text 文本
 */
export const saveTextToClip = (text: string) => {
  if (!text) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
};