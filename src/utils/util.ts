/**
 * 获取固定宽度的字符串，如果传入的text的宽度不够width,则返回原字符串
 * @text   将要被提取的原字符串
 * @width  想要提取的字符串长度
 * @fontSize  字符串显示时的字符大小，支持>=12
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
  // @ts-ignore
  span.style["white-space"] = "nowrap";
  // @ts-ignore
  span.style["overflow-x"] = "auto";
  span.style.fontSize = fontSize > 12 ? fontSize + "px" : "12px";
  span.style.fontWeight = fontWeight.toString();
  document.body.appendChild(span);

  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i];
    oldText = newText;
    newText += item;
    returnText = newText;
    span.innerHTML = newText;
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

