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
  sharpen,
  toOpposite,
  toRed,
  toGreen,
  toBlue,
  toRedAndGreen,
  toRedAndBlue,
  toBlueAndGreen,
  toRedAndGrey,
  toGreenAndGrey,
  toBlueAndGrey,
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

interface Status {
  doing: boolean;
  imageData: ImageData | null;
}

interface ImgStatusInfo {
  flipSideToSideStatus: Status;
  flipUpsideDownStatus: Status;
  leftRotateStatus: Status;
  rightRotateStatus: Status;
  toGreyStatus: Status;
  toBlackAndWhiteStatus: Status;
  sharpenStatus: Status;
  toOppositeStatus: Status;
  toRedStatus: Status;
  toGreenStatus: Status;
  toBlueStatus: Status;
  toRedAndGreenStatus: Status;
  toRedAndBlueStatus: Status;
  toBlueAndGreenStatus: Status;
  toRedAndGreyStatus: Status;
  toGreenAndGreyStatus: Status;
  toBlueAndGreyStatus: Status;
}

const defaultImgStatus = {
  flipSideToSideStatus: { doing: false, imageData: null },
  flipUpsideDownStatus: { doing: false, imageData: null },
  leftRotateStatus: { doing: false, imageData: null },
  rightRotateStatus: { doing: false, imageData: null },
  toGreyStatus: { doing: false, imageData: null },
  toBlackAndWhiteStatus: { doing: false, imageData: null },
  sharpenStatus: { doing: false, imageData: null },
  toOppositeStatus: { doing: false, imageData: null },
  toRedStatus: { doing: false, imageData: null },
  toGreenStatus: { doing: false, imageData: null },
  toBlueStatus: { doing: false, imageData: null },
  toRedAndGreenStatus: { doing: false, imageData: null },
  toRedAndBlueStatus: { doing: false, imageData: null },
  toBlueAndGreenStatus: { doing: false, imageData: null },
  toRedAndGreyStatus: { doing: false, imageData: null },
  toGreenAndGreyStatus: { doing: false, imageData: null },
  toBlueAndGreyStatus: { doing: false, imageData: null },
};

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";

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

  const doTask = (
    status: Status,
    method: (imageData: ImageData) => ImageData | null
  ) => {
    if (status && status.imageData) {
      exportImage(status.imageData);
    } else if (status.doing) {
      message.warning("正在努力工作,请稍后");
      return;
    } else if (imgInfo?.imageData) {
      status.doing = true;
      const newImageData = method(imgInfo.imageData);
      if (newImageData) {
        status.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      status.doing = false;
    }
  };

  useEffect(() => {
    imgStatusInfo.current = cloneDeep(defaultImgStatus);
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
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.flipSideToSideStatus, flipSideToSide)
            }
          >
            左右翻转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.flipUpsideDownStatus, flipUpsideDown)
            }
          >
            上下翻转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.leftRotateStatus, leftRotate)
            }
          >
            左旋转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.rightRotateStatus, rightRotate)
            }
          >
            右旋转
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toGreyStatus, toGrey)}
          >
            灰化
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(
                imgStatusInfo.current.toBlackAndWhiteStatus,
                toBlackAndWhite
              )
            }
          >
            黑白化
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            // onClick={() => doTask(imgStatusInfo.current.sharpenStatus, sharpen)}
          >
            锐化
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toOppositeStatus, toOpposite)
            }
          >
            反色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toRedStatus, toRed)}
          >
            红色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toGreenStatus, toGreen)}
          >
            绿色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toBlueStatus, toBlue)}
          >
            蓝色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toRedAndGreenStatus, toRedAndGreen)
            }
          >
            红绿色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toRedAndBlueStatus, toRedAndBlue)
            }
          >
            红蓝色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toBlueAndGreenStatus, toBlueAndGreen)
            }
          >
            蓝绿色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toRedAndGreyStatus, toRedAndGrey)
            }
          >
            红灰色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toGreenAndGreyStatus, toGreenAndGrey)
            }
          >
            绿灰色滤镜
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toBlueAndGreyStatus, toBlueAndGrey)
            }
          >
            蓝灰色滤镜
          </Button>
        </div>
        <Button className={styles.right} ghost type="primary" onClick={onClear}>
          清空
        </Button>
      </div>
    </div>
  );
};

export default BasicOperation;
