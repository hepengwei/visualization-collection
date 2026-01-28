/**
 * 图片处理工具-图片压缩Tab页
 */
import React, { useRef, useEffect, useState } from "react";
import { InputNumber, Button, message } from "antd";
import { useIntl } from "react-intl";
import { exportFile } from "utils/fileUtil";
import { compression } from "utils/imageUtil";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

const defaultCompressionDegree = 70;

const Compression = (props: TabPageProps) => {
  const { imgInfo, imgDragOver, onDragOver, onDragLeave, onDrop, onClear } =
    props;
  const intl = useIntl();
  const { locale } = useGlobalContext();
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
    exportFile(blob, imgName);
  };

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    const { imageData, imgUrl, width, height, fileType } = imgInfo;
    doing.current = true;
    if (["JPG", "JPEG"].includes(fileType)) {
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
            message.error(
              intl.formatMessage({ id: "common.operationFailure" })
            );
          }
          doing.current = false;
        }
      );
    } else {
      compression(
        imageData,
        width,
        height,
        fileType,
        compressionDegree,
        (blob: Blob | null) => {
          if (blob) {
            exportImage(blob);
          } else {
            message.error(
              intl.formatMessage({ id: "common.operationFailure" })
            );
          }
          doing.current = false;
        }
      );
    }
  };

  useEffect(() => {
    setCompressionDegree(defaultCompressionDegree);
  }, [imgInfo]);

  return (
    <div>
      <FileBox
        imgInfo={imgInfo}
        imgDragOver={imgDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
      <div className={styles.operationBtns}>
        <div className={styles.left}>
          <InputNumber
            style={{ width: locale === "zh-cn" ? "200px" : "240px" }}
            min={10}
            max={90}
            precision={0}
            value={compressionDegree}
            addonBefore={intl.formatMessage({
              id: "page.imageProcessingTool.compressibility",
            })}
            addonAfter="%"
            onChange={(value: number | null) => {
              setCompressionDegree(value || 10);
            }}
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

export default Compression;
