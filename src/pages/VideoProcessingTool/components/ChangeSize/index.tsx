/**
 * 视频处理工具-修改尺寸Tab页
 */
import React, { useRef, useEffect, useState } from "react";
import { Checkbox, InputNumber, Button, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useIntl } from "react-intl";
import { changeSizeVideo } from "utils/videoUtil";
import { exportVideo } from "utils/fileUtil";
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

const maxWidthHeight = 10000;

const ChangeSize = (props: TabPageProps) => {
  const {
    videoInfo,
    startgeneratingVideo,
    imgDataListToChunks,
    videoDragOver,
    generatingVideoRef,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  } = props;
  const intl = useIntl();
  const [keepOriginalProportion, setKeepOriginalProportion] =
    useState<boolean>(true);
  const [toWidth, setToWidth] = useState<number | null>(videoInfo.width);
  const [toHeight, setToHeight] = useState<number | null>(videoInfo.height);
  const doing = useRef<boolean>(false);

  // 修改是否保持原比例
  const onKeepProportionChange = (e: CheckboxChangeEvent) => {
    setKeepOriginalProportion(e.target.checked);
    const { width, height } = videoInfo;
    if (e.target.checked) {
      if (toWidth && toHeight) {
        setToWidth(null);
        setToHeight(null);
      } else if (toWidth) {
        const newHeight = Math.floor((toWidth * height) / width);
        setToHeight(newHeight);
      } else if (toHeight) {
        const newWidth = Math.floor((toHeight * width) / height);
        setToWidth(newWidth);
      }
    } else if (!toWidth && !toHeight) {
      setToWidth(width);
      setToHeight(height);
    }
  };

  // 修改宽度
  const onWidthChange = (value: number | null) => {
    setToWidth(value);
    if (keepOriginalProportion && value) {
      const { width, height } = videoInfo;
      const newHeight = Math.floor((value * height) / width);
      setToHeight(newHeight);
    }
  };

  // 修改高度
  const onHeightChange = (value: number | null) => {
    setToHeight(value);
    if (keepOriginalProportion && value) {
      const { width, height } = videoInfo;
      const newWidth = Math.floor((value * width) / height);
      setToWidth(newWidth);
    }
  };

  // 点击确定
  const onOk = () => {
    if (!toWidth || !toHeight) {
      message.warning(
        intl.formatMessage({
          id: "common.pleaseEnterWidthOrHeight",
        })
      );
      return;
    }
    startgeneratingVideo(() => {
      setTimeout(() => {
        changeSizeVideo(
          videoInfo.imageDataList,
          videoInfo.width,
          videoInfo.height,
          toWidth,
          toHeight,
          maxWidthHeight,
          (newImageDataList: ImageData[]) => {
            if (generatingVideoRef.current) {
              imgDataListToChunks(newImageDataList, (videoChunks: Blob[]) => {
                exportVideo(videoChunks, videoInfo.name);
              });
            }
          }
        );
      }, 100);
    });
  };

  useEffect(() => {
    setToWidth(videoInfo.width);
    setToHeight(videoInfo.height);
  }, [videoInfo]);

  return (
    <div>
      <FileBox
        videoInfo={videoInfo}
        videoDragOver={videoDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
      <div className={styles.operationBtns}>
        <div className={styles.left}>
          <Checkbox
            className={styles.operationBtn}
            checked={keepOriginalProportion}
            onChange={onKeepProportionChange}
          >
            {intl.formatMessage({
              id: "common.whetherMaintainOriginalProportion",
            })}
          </Checkbox>
          <InputNumber
            className={styles.operationBtn}
            style={{ width: "160px" }}
            min={1}
            max={maxWidthHeight}
            precision={0}
            value={toWidth}
            addonBefore={intl.formatMessage({
              id: "common.width",
            })}
            onChange={onWidthChange}
          />
          <InputNumber
            className={styles.operationBtn}
            style={{ width: "160px" }}
            min={1}
            max={maxWidthHeight}
            precision={0}
            value={toHeight}
            addonBefore={intl.formatMessage({
              id: "common.height",
            })}
            onChange={onHeightChange}
          />
          <Button type="primary" className={styles.operationBtn} onClick={onOk}>
            {intl.formatMessage({
              id: "common.confirm",
            })}
          </Button>
        </div>
        <Button className={styles.right} ghost type="primary" onClick={onClear}>
          {intl.formatMessage({
            id: "common.clear",
          })}
        </Button>
      </div>
    </div>
  );
};

export default ChangeSize;
