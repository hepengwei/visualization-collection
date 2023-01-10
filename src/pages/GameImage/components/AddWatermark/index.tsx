import React, { useEffect, useRef, useState } from "react";
import { Button, message } from "antd";
import { sizeTostr, getImageWidthHeight } from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface ClipProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData) => void;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";

const Clip = (props: ClipProps) => {
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const { imgUrl, width, height } = imgInfo;
      if (width <= 10 || height <= 10) {
        message.error("请选择10x10以上尺寸的图片");
        return;
      } else if (width >= 1350 || height >= 1350) {
        message.error("请选择1350x1350以下尺寸的图片");
        return;
      }
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      const ctx = canvasRef.current.getContext("2d", {
        willReadFrequently: true,
      }) as CanvasRenderingContext2D;

      ctxRef.current = ctx;
      const img = new Image();
      img.src = imgUrl;
      ctxRef.current.drawImage(img, 0, 0, width, height);
      setImgSizeQualified(true);
    }
  }, []);

  // 点击确定
  const onAddWatermark = () => {
    console.log(6666);
  };

  return (
    <div>
      <div
        className={styles.imgBox}
        style={{
          borderColor: imgDragOver ? primaryColor : primaryShallowColor,
        }}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div
          style={{
            width: `${imgInfo.width}px`,
            height: `${imgInfo.height}px`,
          }}
        >
          <canvas ref={canvasRef}>您的浏览器版本过低，请更新浏览器</canvas>
        </div>
      </div>
      <div className={styles.operationBtns}>
        <Button
          type="primary"
          className={styles.operationBtn}
          onClick={onAddWatermark}
          disabled={!imgSizeQualified}
        >
          确定
        </Button>
      </div>
    </div>
  );
};

export default Clip;
