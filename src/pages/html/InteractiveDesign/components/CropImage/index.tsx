import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import flower from "images/flower.jpg";
import styles from "./index.module.less";

enum Contact {
  "leftUp",
  "up",
  "rightUp",
  "right",
  "rightDown",
  "down",
  "leftDown",
  "left",
}

const CropImage = () => {
  const { scrollTop } = useGlobalContext();
  const leftBoxWidth = useRef<number>(0);
  const leftBoxHeight = useRef<number>(0);
  const isKeyDown = useRef<boolean>(false);
  const contact = useRef<Contact>();
  const isGetar = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const cropBoxRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLImageElement>(null);
  const beforeMouseX = useRef<number>(0);
  const beforeMouseY = useRef<number>(0);
  const cropBoxBeforeLeft = useRef<number>(0);
  const cropBoxBeforeTop = useRef<number>(0);

  // 获取元素相对于屏幕左边和上边的距离，利用offsetLefe
  const getPosition = (node: HTMLElement) => {
    var left = node.offsetLeft;
    var top = node.offsetTop;
    let parent: HTMLElement = node.offsetParent as HTMLElement; //获取父元素
    while (parent != null) {
      left += parent.offsetLeft;
      top += parent.offsetTop;
      parent = parent.offsetParent as HTMLElement;
    }
    return {
      left: left,
      top: top,
    };
  };

  //right移动
  const rightMove = (e: React.MouseEvent) => {
    let x = e.clientX; //鼠标X坐标
    const leftBoxNode = ReactDOM.findDOMNode(
      leftBoxRef.current
    ) as HTMLDivElement;
    const { left } = getPosition(leftBoxNode);
    const minX = left;
    const maxX = minX + leftBoxWidth.current - 4;
    if (x > maxX) {
      x = maxX;
    } else if (x < minX) {
      x = minX;
    }
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;
    const widthBefore = cropBoxNode.offsetWidth - 2; //选框变化前宽度
    const mainX = getPosition(cropBoxNode).left;
    const addWidth = x - widthBefore - mainX;
    cropBoxNode.style.width = widthBefore + addWidth + "px"; //选框变化后
  };

  //up移动
  const upMove = (e: React.MouseEvent) => {
    // @ts-ignore
    // let y = e.clientY + window.scrollTop; //鼠标纵坐标
    let y = e.clientY + scrollTop; //鼠标纵坐标
    const leftBoxNode = ReactDOM.findDOMNode(
      leftBoxRef.current
    ) as HTMLDivElement;
    const { top } = getPosition(leftBoxNode);
    const minY = top;
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;
    const mainY = getPosition(cropBoxNode).top;
    const maxY = mainY + cropBoxNode.offsetHeight - 4;
    if (y < minY) {
      y = minY;
    } else if (y > maxY) {
      y = maxY;
    }
    const heightBefore = cropBoxNode.offsetHeight;
    cropBoxNode.style.height = heightBefore + mainY - y + "px";
    cropBoxNode.style.top = cropBoxNode.offsetTop + y - mainY + "px";
  };

  //left移动
  const leftMove = (e: React.MouseEvent) => {
    let x = e.clientX; //鼠标横坐标
    const leftBoxNode = ReactDOM.findDOMNode(
      leftBoxRef.current
    ) as HTMLDivElement;
    const { left } = getPosition(leftBoxNode);
    const minX = left;
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;
    const mainX = getPosition(cropBoxNode).left;
    const maxX = mainX + cropBoxNode.offsetWidth - 4;
    if (x < minX) {
      x = minX;
    } else if (x > maxX) {
      x = maxX;
    }
    const widthBefore = cropBoxNode.offsetWidth;
    cropBoxNode.style.width = widthBefore + mainX - x + "px";
    cropBoxNode.style.left = cropBoxNode.offsetLeft + x - mainX + "px";
  };

  //down移动
  const downMove = (e: React.MouseEvent) => {
    // @ts-ignore
    // let y = e.clientY + window.scrollTop;
    let y = e.clientY + scrollTop;
    const leftBoxNode = ReactDOM.findDOMNode(
      leftBoxRef.current
    ) as HTMLDivElement;
    const { top } = getPosition(leftBoxNode);
    const minY = top;
    const maxY = minY + leftBoxHeight.current - 4;
    if (y < minY) {
      y = minY;
    } else if (y > maxY) {
      y = maxY;
    }
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;

    const heightBefore = cropBoxNode.offsetHeight - 2;
    const mainY = getPosition(cropBoxNode).top;
    const addHeight = y - heightBefore - mainY;
    cropBoxNode.style.height = heightBefore + addHeight + "px";
  };

  //设置选取区域高亮可见
  const setChoice = () => {
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = cropBoxNode;
    const right = offsetLeft + offsetWidth;
    const bottom = offsetTop + offsetHeight;
    const img2Node = ReactDOM.findDOMNode(img2Ref.current) as HTMLImageElement;
    img2Node.style.clip = `rect(${offsetTop}px,${right}px,${bottom}px,${offsetLeft}px)`;
  };

  //设置预览图片
  const setPreview = () => {
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = cropBoxNode;
    const right = offsetLeft + offsetWidth;
    const bottom = offsetTop + offsetHeight;
    const rightImgNode = ReactDOM.findDOMNode(
      rightImgRef.current
    ) as HTMLImageElement;
    rightImgNode.style.top = `${-offsetTop}px`;
    rightImgNode.style.left = `${-offsetLeft}px`;
    rightImgNode.style.clip = `rect(${offsetTop}px,${right}px,${bottom}px,${offsetLeft}px)`;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    //移动整个选框
    if (isGetar.current) {
      const cropBoxNode = ReactDOM.findDOMNode(
        cropBoxRef.current
      ) as HTMLDivElement;
      const { offsetWidth, offsetHeight } = cropBoxNode;
      const xChange = e.clientX - beforeMouseX.current;
      const yChange = e.clientY - beforeMouseY.current;
      const top = cropBoxBeforeTop.current + yChange;
      const left = cropBoxBeforeLeft.current + xChange;
      if (top < 0) {
        cropBoxNode.style.top = "0px";
      } else if (top > leftBoxHeight.current - offsetHeight - 2) {
        cropBoxNode.style.top = `${leftBoxHeight.current - offsetHeight - 2}px`;
      } else {
        cropBoxNode.style.top = `${top}px`;
      }
      if (left < 0) {
        cropBoxNode.style.left = "0px";
      } else if (left > leftBoxWidth.current - offsetWidth - 2) {
        cropBoxNode.style.left = `${leftBoxWidth.current - offsetWidth - 2}px`;
      } else {
        cropBoxNode.style.left = `${left}px`;
      }
      setChoice();
      setPreview();
    }
    //移动选框边线
    if (isKeyDown.current) {
      switch (contact.current) {
        case Contact.right:
          rightMove(e);
          break;
        case Contact.up:
          upMove(e);
          break;
        case Contact.left:
          leftMove(e);
          break;
        case Contact.down:
          downMove(e);
          break;
        case Contact.leftUp:
          leftMove(e);
          upMove(e);
          break;
        case Contact.leftDown:
          leftMove(e);
          downMove(e);
          break;
        case Contact.rightUp:
          rightMove(e);
          upMove(e);
          break;
        case Contact.rightDown:
          rightMove(e);
          downMove(e);
          break;
      }
      setChoice();
      setPreview();
    }
  };

  const onMouseDownDot = (e: React.MouseEvent, cont: Contact) => {
    e.stopPropagation();
    isKeyDown.current = true;
    contact.current = cont;
  };

  const onMouseDownCropBox = (e: React.MouseEvent) => {
    beforeMouseX.current = e.clientX;
    beforeMouseY.current = e.clientY;
    const cropBoxNode = ReactDOM.findDOMNode(
      cropBoxRef.current
    ) as HTMLDivElement;
    cropBoxBeforeTop.current = cropBoxNode.offsetTop;
    cropBoxBeforeLeft.current = cropBoxNode.offsetLeft;
    isGetar.current = true;
  };

  const onMouseUp = () => {
    isKeyDown.current = false;
    isGetar.current = false;
  };

  useEffect(() => {
    const leftBoxNode = ReactDOM.findDOMNode(
      leftBoxRef.current
    ) as HTMLDivElement;
    const { offsetWidth, offsetHeight } = leftBoxNode;
    leftBoxWidth.current = offsetWidth;
    leftBoxHeight.current = offsetHeight;
  }, []);

  return (
    <div
      className={styles.container}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      ref={containerRef}
    >
      <div className={styles.leftBox} ref={leftBoxRef}>
        <img src={flower} className={styles.img1} />
        <img src={flower} className={styles.img2} ref={img2Ref} />
        <div
          className={styles.cropBox}
          onMouseDown={onMouseDownCropBox}
          ref={cropBoxRef}
        >
          <div
            className={`${styles.dot} ${styles.leftUp}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.leftUp)}
          ></div>
          <div
            className={`${styles.dot} ${styles.up}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.up)}
          ></div>
          <div
            className={`${styles.dot} ${styles.rightUp}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.rightUp)}
          ></div>
          <div
            className={`${styles.dot} ${styles.right}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.right)}
          ></div>
          <div
            className={`${styles.dot} ${styles.rightDown}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.rightDown)}
          ></div>
          <div
            className={`${styles.dot} ${styles.down}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.down)}
          ></div>
          <div
            className={`${styles.dot} ${styles.leftDown}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.leftDown)}
          ></div>
          <div
            className={`${styles.dot} ${styles.left}`}
            onMouseDown={(e) => onMouseDownDot(e, Contact.left)}
          ></div>
        </div>
      </div>
      <div className={styles.rightBox}>
        <img src={flower} ref={rightImgRef} />
      </div>
    </div>
  );
};

export default CropImage;
