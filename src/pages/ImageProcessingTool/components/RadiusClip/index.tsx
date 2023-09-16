/**
 * 图片处理工具-圆角裁剪Tab页
 */
import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, InputNumber, message } from "antd";
import { useIntl } from "react-intl";
import { radiusClip } from "utils/imageUtil";
import { TabPageProps } from "../../index";
import styles from "./index.module.scss";

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";
const defaultBorderRadius = 4;

const RadiusClip = (props: TabPageProps) => {
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
  const [imgSizeQualified, setImgSizeQualified] = useState<boolean>(false);
  const doing = useRef<boolean>(false);
  const [jpgToPNG, setJpgToPNG] = useState<boolean>(false);
  const [borderRadius, setBorderRadius] = useState<number | null>(
    defaultBorderRadius
  );

  useEffect(() => {
    const { width, height } = imgInfo;
    if (width < 20 || height < 20) {
      message.error(
        intl.formatMessage({ id: "page.imageProcessingTool.imageTooSmall" })
      );
      setImgSizeQualified(false);
      return;
    } else if (width > 1350 || height > 1350) {
      message.error(
        intl.formatMessage({ id: "page.imageProcessingTool.imageTooLarge" })
      );
      setImgSizeQualified(false);
      return;
    }
    setImgSizeQualified(true);
    setJpgToPNG(false);
    setBorderRadius(defaultBorderRadius);
  }, [imgInfo]);

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    if (!borderRadius) {
      message.warning(
        intl.formatMessage({
          id: "page.imageProcessingTool.pleaseEnterFilletRadius",
        })
      );
      return;
    }
    doing.current = true;
    const newImageData = radiusClip(
      imgInfo.imageData as ImageData,
      borderRadius,
      imgInfo.fileType,
      jpgToPNG
    );
    if (newImageData) {
      exportImage(newImageData, jpgToPNG ? "PNG" : imgInfo.fileType);
    } else {
      message.error(intl.formatMessage({ id: "common.operationFailure" }));
    }
    doing.current = false;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imgBox}
        style={{
          borderColor: imgDragOver ? primaryColor : primaryShallowColor,
        }}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {imgSizeQualified && (
          <div
            className={styles.content}
            style={{
              width: `${imgInfo.width}px`,
              height: `${imgInfo.height}px`,
              borderRadius: `${borderRadius}px`,
            }}
          >
            <img src={imgInfo.imgUrl} className={styles.img} />
          </div>
        )}
      </div>
      {imgSizeQualified && (
        <div className={styles.operationBtns}>
          <div className={styles.left}>
            {imgInfo.fileType !== "PNG" && (
              <Checkbox
                className={styles.operationBtn}
                checked={jpgToPNG}
                onChange={(e) => {
                  setJpgToPNG(e.target.checked);
                }}
              >
                {intl.formatMessage({
                  id: "page.imageProcessingTool.clippedAndConvertedToPng",
                })}
              </Checkbox>
            )}
            <InputNumber
              className={styles.operationBtn}
              style={{ width: "180px" }}
              min={0}
              max={Math.min(
                Math.floor(imgInfo.width / 2),
                Math.floor(imgInfo.height / 2)
              )}
              precision={0}
              value={borderRadius}
              addonBefore={intl.formatMessage({
                id: "page.imageProcessingTool.filletRadius",
              })}
              onChange={(value: number | null) => {
                setBorderRadius(value);
              }}
            />
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onOk}
              disabled={!imgSizeQualified}
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

export default RadiusClip;
