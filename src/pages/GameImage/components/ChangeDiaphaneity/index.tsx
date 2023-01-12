import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Slider, InputNumber, Button, message } from "antd";
import { sizeTostr, changeBrightness } from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface ChangeDiaphaneityProps {
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

const ChangeDiaphaneity = (props: ChangeDiaphaneityProps) => {
  const {
    imgInfo,
    exportImage,
    imgDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  } = props;
  const [imgTypeQualified, setImgTypeQualified] = useState<boolean>(false);
  const [diaphaneity, setDiaphaneity] = useState<number | null>(0);
  const [fixedDiaphaneity, setFixedDiaphaneity] = useState<number | null>(1);
  const doing = useRef<boolean>(false);

  // 修改透明度值
  const onChange = (value: number | null) => {
    setDiaphaneity(value);
  };

  // 固定透明度值
  const onFixed = (value: number | null) => {
    setFixedDiaphaneity(value);
  };

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning("正在努力工作,请稍后");
      return;
    }
    const { imageData } = imgInfo;
    if (!diaphaneity) {
      message.warning("请输入要修改的透明值");
      return;
    }
    doing.current = true;
    // const newImageData = changeBrightness(imageData, diaphaneity);
    // if (newImageData) {
    //   exportImage(newImageData);
    // } else {
    //   message.error("修改失败");
    // }
    doing.current = false;
  };

  useEffect(() => {
    if (imgInfo.fileType !== "PNG") {
      message.warning("请上传PNG格式的图片");
      setImgTypeQualified(false);
    } else {
      setImgTypeQualified(true);
    }
    setDiaphaneity(0);
    setFixedDiaphaneity(1);
  }, [imgInfo]);

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
      {imgTypeQualified && (
        <div className={styles.operationBtns}>
          <div className={styles.left}>
            <div className={styles.operationBtn}>
              <span style={{ color: "#444", marginRight: "6px" }}>变透明</span>
              <Slider
                min={-1}
                max={1}
                marks={{
                  0: "0",
                }}
                value={typeof diaphaneity === "number" ? diaphaneity : 0}
                onChange={onChange}
              />
              <span style={{ color: "#444", marginLeft: "6px" }}>变不透</span>
              <InputNumber
                style={{ margin: "0 16px" }}
                min={-1}
                max={1}
                precision={0}
                value={diaphaneity}
                onChange={onChange}
              />
            </div>
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onOk}
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

export default ChangeDiaphaneity;
