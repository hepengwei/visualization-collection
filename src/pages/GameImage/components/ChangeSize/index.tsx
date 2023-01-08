/**
 * 图片处理工具
 */
import React, { useRef, useEffect, useState } from "react";
import { InputNumber, Button, message } from "antd";
import { sizeTostr, changeSize } from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface ChangeSizeProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData) => void;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

const maxWidthHeight = 10000;

const ChangeSize = (props: ChangeSizeProps) => {
  const {
    imgInfo,
    exportImage,
    imgDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  } = props;
  const [toWidth, setToWidth] = useState<number | null>(imgInfo.width);
  const [toHeight, setToHeight] = useState<number | null>(imgInfo.height);
  const doing = useRef<boolean>(false);

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning("正在努力工作,请稍后");
      return;
    }
    doing.current = true;
    const { imgUrl, width, height } = imgInfo;
    if (!toWidth || !toHeight) {
      message.warning("请输入宽度或高度");
      return;
    }
    const newImageData = changeSize(
      imgUrl,
      width,
      height,
      toWidth,
      toHeight,
      maxWidthHeight
    );
    if (newImageData) {
      exportImage(newImageData);
    } else {
      message.error("修改失败");
    }
    doing.current = false;
  };

  useEffect(() => {
    setToWidth(imgInfo.width);
    setToHeight(imgInfo.height);
  }, [imgInfo]);

  return (
    <div>
      <div
        className={styles.imgBox}
        style={{ borderColor: imgDragOver ? "green" : "#2320e5" }}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className={styles.fileBox}>
          <img src={imgInfo.imgUrl} alt="" />
          <div className={styles.fileInfo}>
            <div className={styles.item}>文件名：{imgInfo.name}</div>
            <div className={styles.item}>格式：{imgInfo.fileType}</div>
            <div className={styles.item}>
              尺寸：
              {imgInfo.width && imgInfo.height
                ? `${imgInfo.width}x${imgInfo.height}`
                : "未知"}
            </div>
            <div className={styles.item}>大小：{sizeTostr(imgInfo.size)}</div>
          </div>
        </div>
      </div>
      <div className={styles.operationBtns}>
        <div>
          <InputNumber
            className={styles.operationBtn}
            style={{ width: "160px" }}
            min={1}
            max={maxWidthHeight}
            precision={0}
            value={toWidth}
            addonBefore="宽度"
            onChange={(value: number | null) => {
              setToWidth(value);
            }}
          />
          <InputNumber
            className={styles.operationBtn}
            style={{ width: "160px" }}
            min={1}
            max={maxWidthHeight}
            precision={0}
            value={toHeight}
            addonBefore="高度"
            onChange={(value: number | null) => {
              setToHeight(value);
            }}
          />
          <Button type="primary" className={styles.operationBtn} onClick={onOk}>
            确定
          </Button>
        </div>
        <Button ghost type="primary" onClick={onClear}>
          清空
        </Button>
      </div>
    </div>
  );
};

export default ChangeSize;
