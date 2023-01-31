/**
 * 图片处理工具-图片压缩Tab页
 */
import React, { useRef, useEffect, useState } from "react";
import { InputNumber, Button, message } from "antd";
import { exportToImage } from "utils/fileUtil";
import { sizeTostr, compression } from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface CompressionProps {
  imgInfo: ImgInfo;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";
const defaultCompressionDegree = 70;

const Compression = (props: CompressionProps) => {
  const { imgInfo, imgDragOver, onDragOver, onDragLeave, onDrop, onClear } =
    props;
  const [compressionDegree, setCompressionDegree] = useState<number>(
    defaultCompressionDegree
  );
  const doing = useRef<boolean>(false);

  // 导出图片
  const exportImage = (blob: Blob) => {
    if (!blob) return;
    let imgName = "image";
    if (imgInfo && imgInfo.name) {
      const arr = imgInfo.name.split(".");
      if (arr.length > 1) {
        arr.splice(arr.length - 1, 1, imgInfo.fileType.toLowerCase());
        imgName = arr.join(".");
      } else {
        arr.push(imgInfo.fileType.toLowerCase());
        imgName = arr.join(".");
      }
    }
    exportToImage(blob, imgName);
  };

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning("正在努力工作,请稍后");
      return;
    }
    const { imgUrl, width, height, fileType } = imgInfo;
    doing.current = true;
    compression(
      imgUrl,
      width,
      height,
      fileType,
      compressionDegree,
      (blob: Blob | null) => {
        if (blob) {
          exportImage(blob);
        } else {
          message.error("压缩失败");
        }
        doing.current = false;
      }
    );
  };

  useEffect(() => {
    setCompressionDegree(defaultCompressionDegree);
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
      <div className={styles.operationBtns}>
        <div className={styles.left}>
          <InputNumber
            className={styles.operationBtn}
            style={{ width: "200px" }}
            min={10}
            max={90}
            precision={0}
            value={compressionDegree}
            addonBefore="压缩率"
            addonAfter="%"
            onChange={(value: number | null) => {
              setCompressionDegree(value || 10);
            }}
          />
          <Button type="primary" className={styles.operationBtn} onClick={onOk}>
            确定
          </Button>
        </div>
        <Button className={styles.right} ghost type="primary" onClick={onClear}>
          清空
        </Button>
      </div>
    </div>
  );
};

export default Compression;
