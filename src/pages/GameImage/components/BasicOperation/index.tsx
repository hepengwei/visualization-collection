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
  marginSharpen,
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
  jpgToPng,
  pngToJpg,
} from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface BasicOperationProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData, exportImageType?: string) => void;
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
  marginSharpenStatus: Status;
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
  jpgToPngStatus: Status;
  pngToJpgStatus: Status;
}

const defaultImgStatus = {
  flipSideToSideStatus: { doing: false, imageData: null },
  flipUpsideDownStatus: { doing: false, imageData: null },
  leftRotateStatus: { doing: false, imageData: null },
  rightRotateStatus: { doing: false, imageData: null },
  toGreyStatus: { doing: false, imageData: null },
  toBlackAndWhiteStatus: { doing: false, imageData: null },
  sharpenStatus: { doing: false, imageData: null },
  marginSharpenStatus: { doing: false, imageData: null },
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
  jpgToPngStatus: { doing: false, imageData: null },
  pngToJpgStatus: { doing: false, imageData: null },
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
    method: (imageData: ImageData) => ImageData | null,
    exportImageType?: string
  ) => {
    if (status && status.imageData) {
      exportImage(status.imageData);
    } else if (status.doing) {
      message.warning("??????????????????,?????????");
      return;
    } else if (imgInfo?.imageData) {
      status.doing = true;
      const newImageData = method(imgInfo.imageData);
      if (newImageData) {
        status.imageData = newImageData;
        exportImage(newImageData, exportImageType);
      } else {
        message.error("????????????");
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
            <div className={styles.item}>????????????{imgInfo.name}</div>
            <div className={styles.item}>?????????{imgInfo.fileType}</div>
            <div className={styles.item}>
              ?????????
              {imgInfo.width && imgInfo.height
                ? `${imgInfo.width}x${imgInfo.height}`
                : "??????"}
            </div>
            <div className={styles.item}>?????????{sizeTostr(imgInfo.size)}</div>
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
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.flipUpsideDownStatus, flipUpsideDown)
            }
          >
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.leftRotateStatus, leftRotate)
            }
          >
            ?????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.rightRotateStatus, rightRotate)
            }
          >
            ?????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toGreyStatus, toGrey)}
          >
            ??????
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
            ?????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.sharpenStatus, sharpen)}
          >
            ??????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.marginSharpenStatus, marginSharpen)
            }
          >
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toOppositeStatus, toOpposite)
            }
          >
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toRedStatus, toRed)}
          >
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toGreenStatus, toGreen)}
          >
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() => doTask(imgStatusInfo.current.toBlueStatus, toBlue)}
          >
            ????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toRedAndGreenStatus, toRedAndGreen)
            }
          >
            ???????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toRedAndBlueStatus, toRedAndBlue)
            }
          >
            ???????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toBlueAndGreenStatus, toBlueAndGreen)
            }
          >
            ???????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toRedAndGreyStatus, toRedAndGrey)
            }
          >
            ???????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toGreenAndGreyStatus, toGreenAndGrey)
            }
          >
            ???????????????
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(imgStatusInfo.current.toBlueAndGreyStatus, toBlueAndGrey)
            }
          >
            ???????????????
          </Button>
          {["JPG", "JPEG"].includes(imgInfo.fileType) && (
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={() =>
                doTask(imgStatusInfo.current.jpgToPngStatus, jpgToPng, "PNG")
              }
            >
              JPG???PNG
            </Button>
          )}
          {imgInfo.fileType === "PNG" && (
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={() =>
                doTask(imgStatusInfo.current.pngToJpgStatus, pngToJpg, "JPEG")
              }
            >
              PNG???JPG
            </Button>
          )}
        </div>
        <Button className={styles.right} ghost type="primary" onClick={onClear}>
          ??????
        </Button>
      </div>
    </div>
  );
};

export default BasicOperation;
