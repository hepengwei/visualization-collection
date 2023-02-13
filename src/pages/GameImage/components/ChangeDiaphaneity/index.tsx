/**
 * 图片处理工具-修改透明度Tab页
 */
import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Slider, InputNumber, Button, Checkbox, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useIntl } from "react-intl";
import { sizeTostr, changeDiaphaneity } from "utils/imageUtil";
import { ImgInfo } from "../../index";
import styles from "../../index.module.scss";

interface ChangeDiaphaneityProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData, exportImageType?: string) => void;
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
  const intl = useIntl();
  const [imgTypeQualified, setImgTypeQualified] = useState<boolean>(false);
  const [fixedDiaphaneity, setFixedDiaphaneity] = useState<boolean>(false);
  const [diaphaneity, setDiaphaneity] = useState<number | null>(0);
  const doing = useRef<boolean>(false);

  // 是否固定透明度改变
  const onFixedDiaphaneityChange = (e: CheckboxChangeEvent) => {
    setFixedDiaphaneity(e.target.checked);
    if (e.target.checked) {
      setDiaphaneity(1);
    }
  };

  // 修改透明度值
  const onChange = (value: number | null) => {
    setDiaphaneity(value);
  };

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    if (typeof diaphaneity !== "number") {
      message.warning(
        intl.formatMessage({
          id: "page.imageProcessingTool.pleaseEnterDiaphaneity",
        })
      );
      return;
    }
    doing.current = true;
    const { imageData } = imgInfo;
    const newImageData = changeDiaphaneity(
      imageData,
      diaphaneity,
      fixedDiaphaneity
    );
    if (newImageData) {
      exportImage(newImageData);
    } else {
      message.error(intl.formatMessage({ id: "common.operationFailure" }));
    }
    doing.current = false;
  };

  useEffect(() => {
    if (imgInfo.fileType !== "PNG") {
      message.warning(
        intl.formatMessage({ id: "page.imageProcessingTool.pleaseUploadPng" })
      );
      setImgTypeQualified(false);
    } else {
      setImgTypeQualified(true);
    }
    setDiaphaneity(0);
    setFixedDiaphaneity(false);
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
            <div className={styles.item}>
              {intl.formatMessage({ id: "page.imageProcessingTool.filename" })}
              ：{imgInfo.name}
            </div>
            <div className={styles.item}>
              {intl.formatMessage({ id: "page.imageProcessingTool.format" })}：
              {imgInfo.fileType}
            </div>
            <div className={styles.item}>
              {intl.formatMessage({ id: "page.imageProcessingTool.dimension" })}
              ：
              {imgInfo.width && imgInfo.height
                ? `${imgInfo.width}x${imgInfo.height}`
                : intl.formatMessage({ id: "common.unknown" })}
            </div>
            <div className={styles.item}>
              {intl.formatMessage({ id: "page.imageProcessingTool.size" })}：
              {sizeTostr(imgInfo.size)}
            </div>
          </div>
        </div>
      </div>
      {imgTypeQualified && (
        <div className={styles.operationBtns}>
          <div className={styles.left}>
            <Checkbox
              className={styles.operationBtn}
              checked={fixedDiaphaneity}
              onChange={onFixedDiaphaneityChange}
            >
              {intl.formatMessage({
                id: "page.imageProcessingTool.whetherValueFixed",
              })}
            </Checkbox>
            {!fixedDiaphaneity && (
              <div className={styles.operationBtn}>
                <span style={{ color: "#444", marginRight: "6px" }}>
                  {intl.formatMessage({
                    id: "page.imageProcessingTool.becomeTransparent",
                  })}
                </span>
                <Slider
                  min={-1}
                  max={1}
                  step={0.1}
                  marks={{
                    0: "0",
                  }}
                  value={typeof diaphaneity === "number" ? diaphaneity : 0}
                  onChange={onChange}
                />
                <span style={{ color: "#444", marginLeft: "6px" }}>
                  {intl.formatMessage({
                    id: "page.imageProcessingTool.becomeOpaque",
                  })}
                </span>
              </div>
            )}
            <div className={styles.operationBtn}>
              <InputNumber
                min={fixedDiaphaneity ? 0 : -1}
                max={1}
                step={0.1}
                precision={1}
                value={diaphaneity}
                onChange={onChange}
              />
            </div>
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onOk}
            >
              {intl.formatMessage({
                id: "common.confirm",
              })}
            </Button>
          </div>
          <Button
            className={styles.right}
            ghost
            type="primary"
            onClick={onClear}
          >
            {intl.formatMessage({
              id: "common.clear",
            })}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChangeDiaphaneity;
