import React from "react";
import { useIntl } from "react-intl";
import { sizeTostr, ImgInfo } from "utils/fileUtil";
import styles from "../../index.module.scss";

interface FileBoxProps {
  imgInfo: ImgInfo;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";

const FileBox = (props: FileBoxProps) => {
  const { imgInfo, imgDragOver, onDragOver, onDragLeave, onDrop } = props;
  const intl = useIntl();

  return (
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
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.filename" })}：
            {imgInfo.name}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.format" })}：
            {imgInfo.fileType}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.dimension" })}：
            {imgInfo.width && imgInfo.height
              ? `${imgInfo.width}x${imgInfo.height}`
              : intl.formatMessage({ id: "common.unknown" })}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: "common.size" })}：
            {sizeTostr(imgInfo.size)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileBox;
