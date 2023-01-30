import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, InputNumber, message } from "antd";
import { radiusClip } from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "./index.module.scss";

interface RadiusClipProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData, exportImageType?: string) => void;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";
const defaultBorderRadius = 4;

const RadiusClip = (props: RadiusClipProps) => {
  const {
    imgInfo,
    exportImage,
    imgDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  } = props;
  const [imgSizeQualified, setImgSizeQualified] = useState<boolean>(false);
  const doing = useRef<boolean>(false);
  const [jpgToPNG, setJpgToPNG] = useState<boolean>(false);
  const [borderRadius, setBorderRadius] = useState<number | null>(
    defaultBorderRadius
  );

  useEffect(() => {
    const { width, height } = imgInfo;
    if (width < 20 || height < 20) {
      message.error("请选20x20以上尺寸的图片");
      setImgSizeQualified(false);
      return;
    } else if (width > 1350 || height > 1350) {
      message.error("请选择1350x1350以下尺寸的图片");
      setImgSizeQualified(false);
      return;
    }
    setImgSizeQualified(true);
    setJpgToPNG(false);
    setBorderRadius(defaultBorderRadius);
  }, [imgInfo]);

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning("正在努力工作,请稍后");
      return;
    }
    if (!borderRadius) {
      message.warning("请输入要裁剪的圆角半径");
      return;
    }
    doing.current = true;
    const newImageData = radiusClip(
      imgInfo.imageData as ImageData,
      borderRadius,
      imgInfo.fileType,
      jpgToPNG
    );
    if (newImageData) {
      exportImage(newImageData, jpgToPNG ? "PNG" : imgInfo.fileType);
    } else {
      message.error("裁剪失败");
    }
    doing.current = false;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imgBox}
        style={{
          borderColor: imgDragOver ? primaryColor : primaryShallowColor,
        }}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {imgSizeQualified && (
          <div
            className={styles.content}
            style={{
              width: `${imgInfo.width}px`,
              height: `${imgInfo.height}px`,
              borderRadius: `${borderRadius}px`,
            }}
          >
            <img src={imgInfo.imgUrl} className={styles.img} />
          </div>
        )}
      </div>
      {imgSizeQualified && (
        <div className={styles.operationBtns}>
          <div className={styles.left}>
            {imgInfo.fileType !== "PNG" && (
              <Checkbox
                className={styles.operationBtn}
                checked={jpgToPNG}
                onChange={(e) => {
                  setJpgToPNG(e.target.checked);
                }}
              >
                裁剪后转成PNG格式
              </Checkbox>
            )}
            <InputNumber
              className={styles.operationBtn}
              style={{ width: "180px" }}
              min={0}
              max={Math.min(
                Math.floor(imgInfo.width / 2),
                Math.floor(imgInfo.height / 2)
              )}
              precision={0}
              value={borderRadius}
              addonBefore="圆角半径"
              onChange={(value: number | null) => {
                setBorderRadius(value);
              }}
            />
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onOk}
              disabled={!imgSizeQualified}
            >
              确定
            </Button>
          </div>
          <Button
            className={styles.right}
            ghost
            type="primary"
            onClick={onClear}
          >
            清空
          </Button>
        </div>
      )}
    </div>
  );
};

export default RadiusClip;
