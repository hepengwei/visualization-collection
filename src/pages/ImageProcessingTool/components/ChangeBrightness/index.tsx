/**
 * 图片处理工具-修改亮度Tab页
 */
import React, { useRef, useEffect, useState } from "react";
import { Slider, InputNumber, Button, message } from "antd";
import { useIntl } from "react-intl";
import { changeBrightness } from "utils/imageUtil";
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

const ChangeBrightness = (props: TabPageProps) => {
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
  const [brightness, setBrightness] = useState<number | null>(0);
  const doing = useRef<boolean>(false);

  // 修改亮度值
  const onChange = (value: number | null) => {
    setBrightness(value);
  };

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    const { imageData } = imgInfo;
    if (!brightness) {
      message.warning(
        intl.formatMessage({
          id: "page.imageProcessingTool.pleaseEnterBrightness",
        })
      );
      return;
    }
    doing.current = true;
    const newImageData = changeBrightness(imageData, brightness);
    if (newImageData) {
      exportImage(newImageData);
    } else {
      message.error(intl.formatMessage({ id: "common.operationFailure" }));
    }
    doing.current = false;
  };

  useEffect(() => {
    setBrightness(0);
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
          <div className={styles.operationBtn}>
            <span style={{ color: "#444", marginRight: "6px" }}>
              {intl.formatMessage({ id: "page.imageProcessingTool.darken" })}
            </span>
            <Slider
              min={-255}
              max={255}
              marks={{
                0: "0",
              }}
              value={typeof brightness === "number" ? brightness : 0}
              onChange={onChange}
            />
            <span style={{ color: "#444", marginLeft: "6px" }}>
              {intl.formatMessage({ id: "page.imageProcessingTool.lighten" })}
            </span>
            <InputNumber
              style={{ margin: "0 16px" }}
              min={-255}
              max={255}
              precision={0}
              value={brightness}
              onChange={onChange}
            />
          </div>
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

export default ChangeBrightness;
