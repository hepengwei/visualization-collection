import React, { useRef, useEffect } from "react";
import { Button, message } from "antd";
import { cloneDeep } from "lodash-es";
import {
  sizeTostr,
  flipSideToSide,
  flipUpsideDown,
  leftRotate,
  rightRotate,
  toGrey,
  toBlackAndWhite,
} from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface BasicOperationProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData) => void;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

interface ImgStatusInfo {
  flipSideToSideStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  flipUpsideDownStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  leftRotateStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  rightRotateStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  toGreyStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  toBlackAndWhiteStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
}

const defaultImgStatus = {
  flipSideToSideStatus: { doing: false, imageData: null },
  flipUpsideDownStatus: { doing: false, imageData: null },
  leftRotateStatus: { doing: false, imageData: null },
  rightRotateStatus: { doing: false, imageData: null },
  toGreyStatus: { doing: false, imageData: null },
  toBlackAndWhiteStatus: { doing: false, imageData: null },
};

const BasicOperation = (props: BasicOperationProps) => {
  const {
    imgInfo,
    exportImage,
    imgDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  } = props;
  const imgStatusInfo = useRef<ImgStatusInfo>(cloneDeep(defaultImgStatus));

  // 点击左右翻转
  const onFlipSideToSide = () => {
    const { flipSideToSideStatus } = imgStatusInfo.current;
    if (flipSideToSideStatus && flipSideToSideStatus.imageData) {
      exportImage(flipSideToSideStatus.imageData);
    } else if (flipSideToSideStatus.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      imgStatusInfo.current.flipSideToSideStatus.doing = true;
      const newImageData = flipSideToSide(imgInfo.imageData);
      if (newImageData) {
        imgStatusInfo.current.flipSideToSideStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      imgStatusInfo.current.flipSideToSideStatus.doing = false;
    }
  };

  // 点击上下翻转
  const onFlipUpsideDown = () => {
    const { flipUpsideDownStatus } = imgStatusInfo.current;
    if (flipUpsideDownStatus && flipUpsideDownStatus.imageData) {
      exportImage(flipUpsideDownStatus.imageData);
    } else if (flipUpsideDownStatus.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      flipUpsideDownStatus.doing = true;
      const newImageData = flipUpsideDown(imgInfo.imageData);
      if (newImageData) {
        flipUpsideDownStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      flipUpsideDownStatus.doing = false;
    }
  };

  // 点击左旋转
  const onLeftRotate = () => {
    const { leftRotateStatus } = imgStatusInfo.current;
    if (leftRotateStatus && leftRotateStatus.imageData) {
      exportImage(leftRotateStatus.imageData);
    } else if (leftRotateStatus.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      leftRotateStatus.doing = true;
      const newImageData = leftRotate(imgInfo.imageData);
      if (newImageData) {
        leftRotateStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      leftRotateStatus.doing = false;
    }
  };

  // 点击右旋转
  const onRightRotate = () => {
    const { rightRotateStatus } = imgStatusInfo.current;
    if (rightRotateStatus && rightRotateStatus.imageData) {
      exportImage(rightRotateStatus.imageData);
    } else if (rightRotateStatus.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      rightRotateStatus.doing = true;
      const newImageData = rightRotate(imgInfo.imageData);
      if (newImageData) {
        rightRotateStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      rightRotateStatus.doing = false;
    }
  };

  // 点击灰化
  const onToGrey = () => {
    const { toGreyStatus } = imgStatusInfo.current;
    if (toGreyStatus && toGreyStatus.imageData) {
      exportImage(toGreyStatus.imageData);
    } else if (toGreyStatus.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      toGreyStatus.doing = true;
      const newImageData = toGrey(imgInfo.imageData);
      if (newImageData) {
        toGreyStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      toGreyStatus.doing = false;
    }
  };

  // 点击黑白化
  const onToBlackAndWhite = () => {
    const { toBlackAndWhiteStatus } = imgStatusInfo.current;
    if (toBlackAndWhiteStatus && toBlackAndWhiteStatus.imageData) {
      exportImage(toBlackAndWhiteStatus.imageData);
    } else if (toBlackAndWhiteStatus.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      toBlackAndWhiteStatus.doing = true;
      const newImageData = toBlackAndWhite(imgInfo.imageData);
      if (newImageData) {
        toBlackAndWhiteStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      toBlackAndWhiteStatus.doing = false;
    }
  };

  useEffect(() => {
    imgStatusInfo.current = cloneDeep(defaultImgStatus);
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
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={onFlipSideToSide}
          >
            左右翻转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={onFlipUpsideDown}
          >
            上下翻转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={onLeftRotate}
          >
            左旋转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={onRightRotate}
          >
            右旋转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={onToGrey}
          >
            灰化
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={onToBlackAndWhite}
          >
            黑白化
          </Button>
        </div>
        <Button ghost type="primary" onClick={onClear}>
          清空
        </Button>
      </div>
    </div>
  );
};

export default BasicOperation;
