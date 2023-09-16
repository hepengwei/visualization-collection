import React from "react";
import { useIntl } from "react-intl";
import { sizeTostr } from "utils/imageUtil";
import type { VideoInfo } from "../../index";
import styles from "../../index.module.scss";

interface FileBoxProps {
  videoInfo: VideoInfo;
  videoDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";

const FileBox = (props: FileBoxProps) => {
  const { videoInfo, videoDragOver, onDragOver, onDragLeave, onDrop } = props;
  const intl = useIntl();

  return (
    <div
      className={styles.videoBox}
      style={{
        borderColor: videoDragOver ? primaryColor : primaryShallowColor,
      }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className={styles.fileBox}>
        <img src={videoInfo.firstImgUrl} alt="" />
        <div className={styles.fileInfo}>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.filename" })}：{videoInfo.name}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.format" })}：{videoInfo.fileType}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.dimension" })}：
            {videoInfo.width && videoInfo.height
              ? `${videoInfo.width}x${videoInfo.height}`
              : intl.formatMessage({ id: "common.unknown" })}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.size" })}：
            {sizeTostr(videoInfo.size)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileBox;
