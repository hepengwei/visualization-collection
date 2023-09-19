/**
 * 视频处理工具-基础操作Tab页
 */
import React, { useRef } from "react";
import { Button } from "antd";
import { cloneDeep } from "lodash-es";
import { useIntl } from "react-intl";
import {
  flipSideToSideVideo,
  flipUpsideDownVideo,
  leftRotateVideo,
  rightRotateVideo,
  toGreyVideo,
  toBlackAndWhiteVideo,
} from "utils/videoUtil";
import { exportVideo } from "utils/fileUtil";
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

interface Status {
  doing: boolean;
  videoChunks: Blob[] | null;
}

interface VideoStatusInfo {
  flipSideToSideStatus: Status;
  flipUpsideDownStatus: Status;
  leftRotateStatus: Status;
  rightRotateStatus: Status;
  toGreyStatus: Status;
  toBlackAndWhiteStatus: Status;
}

const defaultVideoStatus = {
  flipSideToSideStatus: { doing: false, videoChunks: null },
  flipUpsideDownStatus: { doing: false, videoChunks: null },
  leftRotateStatus: { doing: false, videoChunks: null },
  rightRotateStatus: { doing: false, videoChunks: null },
  toGreyStatus: { doing: false, videoChunks: null },
  toBlackAndWhiteStatus: { doing: false, videoChunks: null },
};

const BasicOperation = (props: TabPageProps) => {
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
  const videoStatusInfo = useRef<VideoStatusInfo>(
    cloneDeep(defaultVideoStatus)
  );

  const doTask = (
    status: Status,
    method: (
      imageDataList: ImageData[],
      callback: (newImageDataList: ImageData[]) => void
    ) => void
  ) => {
    if (status && status.videoChunks) {
      exportVideo(status.videoChunks, videoInfo.name);
    } else if (videoInfo.imageDataList && videoInfo.imageDataList.length > 0) {
      startgeneratingVideo(() => {
        setTimeout(() => {
          // console.log(new Date().valueOf());
          method(videoInfo.imageDataList, (newImageDataList: ImageData[]) => {
            // console.log(new Date().valueOf());
            if (generatingVideoRef.current) {
              imgDataListToChunks(newImageDataList, (videoChunks: Blob[]) => {
                // console.log(new Date().valueOf());
                exportVideo(videoChunks, videoInfo.name);
                status.videoChunks = videoChunks;
              });
            }
          });
        }, 100);
      });
    }
  };

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
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(
                videoStatusInfo.current.flipSideToSideStatus,
                flipSideToSideVideo
              )
            }
          >
            {intl.formatMessage({
              id: "common.flipSideToSide",
            })}
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(
                videoStatusInfo.current.flipUpsideDownStatus,
                flipUpsideDownVideo
              )
            }
          >
            {intl.formatMessage({
              id: "common.flipTopToBottom",
            })}
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(videoStatusInfo.current.leftRotateStatus, leftRotateVideo)
            }
          >
            {intl.formatMessage({ id: "common.rotateLeft" })}
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(
                videoStatusInfo.current.rightRotateStatus,
                rightRotateVideo
              )
            }
          >
            {intl.formatMessage({ id: "common.rotateRight" })}
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(videoStatusInfo.current.toGreyStatus, toGreyVideo)
            }
          >
            {intl.formatMessage({ id: "common.graying" })}
          </Button>
          <Button
            type="primary"
            className={styles.operationBtn}
            onClick={() =>
              doTask(
                videoStatusInfo.current.toBlackAndWhiteStatus,
                toBlackAndWhiteVideo
              )
            }
          >
            {intl.formatMessage({ id: "common.vampix" })}
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

export default BasicOperation;
