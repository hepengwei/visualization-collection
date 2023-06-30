/**
 * 图片处理工具-修改尺寸Tab页
 */
import React, { useRef, useEffect, useState } from "react";
import { Checkbox, InputNumber, Button, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useIntl } from "react-intl";
import { changeSize } from "utils/imageUtil";
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

const maxWidthHeight = 10000;

const ChangeSize = (props: TabPageProps) => {
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
  const [keepOriginalProportion, setKeepOriginalProportion] =
    useState<boolean>(false);
  const [toWidth, setToWidth] = useState<number | null>(imgInfo.width);
  const [toHeight, setToHeight] = useState<number | null>(imgInfo.height);
  const doing = useRef<boolean>(false);

  // 修改是否保持原比例
  const onKeepProportionChange = (e: CheckboxChangeEvent) => {
    setKeepOriginalProportion(e.target.checked);
    const { width, height } = imgInfo;
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
      const { width, height } = imgInfo;
      const newHeight = Math.floor((value * height) / width);
      setToHeight(newHeight);
    }
  };

  // 修改高度
  const onHeightChange = (value: number | null) => {
    setToHeight(value);
    if (keepOriginalProportion && value) {
      const { width, height } = imgInfo;
      const newWidth = Math.floor((value * width) / height);
      setToWidth(newWidth);
    }
  };

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    const { imgUrl, width, height } = imgInfo;
    if (!toWidth || !toHeight) {
      message.warning(
        intl.formatMessage({
          id: "page.imageProcessingTool.pleaseEnterWidthOrHeight",
        })
      );
      return;
    }
    doing.current = true;
    const newImageData = changeSize(
      imgUrl,
      width,
      height,
      toWidth,
      toHeight,
      maxWidthHeight
    );
    if (newImageData) {
      exportImage(newImageData);
    } else {
      message.error(intl.formatMessage({ id: "common.operationFailure" }));
    }
    doing.current = false;
  };

  useEffect(() => {
    setToWidth(imgInfo.width);
    setToHeight(imgInfo.height);
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
          <Checkbox
            className={styles.operationBtn}
            checked={keepOriginalProportion}
            onChange={onKeepProportionChange}
          >
            {intl.formatMessage({
              id: "page.imageProcessingTool.whetherMaintainOriginalProportion",
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
              id: "page.imageProcessingTool.width",
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
              id: "page.imageProcessingTool.height",
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
