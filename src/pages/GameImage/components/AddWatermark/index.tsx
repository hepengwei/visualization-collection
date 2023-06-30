/**
 * 图片处理工具-添加水印Tab页
 */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Button, InputNumber, message } from "antd";
import { useIntl } from "react-intl";
import { FolderAddOutlined } from "@ant-design/icons";
import { fileOrBlobToDataURL, getCanvasImgData } from "utils/fileUtil";
import { addWatermark } from "utils/imageUtil";
import { TabPageProps } from "../../index";
import styles from "./index.module.scss";

export interface WatermarkInfo {
  name: string;
  imgUrl: string;
  width: number;
  height: number;
  imageData: ImageData;
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";
const watermarkMinWidthHeight = 20; // 水印的最小宽高

const AddWatermark = (props: TabPageProps) => {
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
  const [watermarkInfo, setWatermarkInfo] = useState<WatermarkInfo | null>(
    null
  );
  const doing = useRef<boolean>(false);
  const clipBoxRef = useRef<HTMLDivElement>(null);

  const defaultWidth = Math.max(
    Math.floor(imgInfo.width / 2),
    watermarkMinWidthHeight
  );
  const defaultHeight = Math.max(
    Math.floor(imgInfo.height / 2),
    watermarkMinWidthHeight
  );
  const [clipBoxWidth, setClipBoxWidth] = useState<number>(defaultWidth);
  const [clipBoxHeight, setClipBoxHeight] = useState<number>(defaultHeight);
  const [clipBoxTop, setClipBoxTop] = useState<number>(0);
  const [clipBoxLeft, setClipBoxLeft] = useState<number>(0);

  const isGetar = useRef<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const leftBoxWidth = useRef<number>(0);
  const leftBoxHeight = useRef<number>(0);
  const beforeMouseX = useRef<number>(0);
  const beforeMouseY = useRef<number>(0);
  const clipBoxBeforeLeft = useRef<number>(0);
  const clipBoxBeforeTop = useRef<number>(0);

  const init = () => {
    const defaultWidth = Math.max(
      Math.floor(imgInfo.width / 2),
      watermarkMinWidthHeight
    );
    const defaultHeight = Math.max(
      Math.floor(imgInfo.height / 2),
      watermarkMinWidthHeight
    );
    setClipBoxWidth(defaultWidth);
    setClipBoxHeight(defaultHeight);
    setClipBoxLeft(0);
    setClipBoxTop(0);
  };

  const getImgInfo = (files: FileList) => {
    if (!files) return;
    for (let i = 0, l = files.length; i < l; i++) {
      const file = files[i];
      const { type } = file;
      const typeArr = type.split("/");
      if (typeArr[0] !== "image") return;
      var reader = new FileReader();
      reader.onload = function (e: any) {
        const buffer = e.target.result;
        const blob = new Blob([buffer]);
        fileOrBlobToDataURL(blob, function (dataUrl: string | null) {
          if (dataUrl) {
            const image = new Image();
            image.onload = function () {
              const width = image.width;
              const height = image.height;
              if (width <= 20 || height <= 20) {
                setWatermarkInfo(null);
                init();
                message.error(
                  intl.formatMessage({
                    id: "page.imageProcessingTool.watermarkSizeLimit",
                  })
                );
                return;
              } else if (width > imgInfo.width || height > imgInfo.height) {
                setWatermarkInfo(null);
                init();
                message.error(
                  intl.formatMessage({
                    id: "page.imageProcessingTool.watermarkSizeTooLarge",
                  })
                );
                return;
              }
              const imageData = getCanvasImgData(dataUrl, width, height);
              if (imageData) {
                const watermarkInfo: WatermarkInfo = {
                  name: file.name,
                  width,
                  height,
                  imgUrl: dataUrl,
                  imageData,
                };
                setWatermarkInfo(watermarkInfo);
                setClipBoxWidth(watermarkInfo.width);
                setClipBoxHeight(watermarkInfo.height);
                setClipBoxLeft(0);
                setClipBoxTop(0);
              } else {
                setWatermarkInfo(null);
                init();
                message.error(
                  intl.formatMessage({
                    id: "page.imageProcessingTool.parsingDataFailure",
                  })
                );
              }
            };
            image.onerror = function () {
              setWatermarkInfo(null);
              init();
              message.error(
                intl.formatMessage({
                  id: "page.imageProcessingTool.parsingDataFailure",
                })
              );
            };
            image.src = dataUrl;
          } else {
            setWatermarkInfo(null);
            init();
            message.error(
              intl.formatMessage({
                id: "page.imageProcessingTool.parsingDataFailure",
              })
            );
          }
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const onUploadWatermarkChange = (e: any) => {
    const { files } = e.target;
    getImgInfo(files);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isGetar.current && clipBoxRef.current) {
      const clipBoxNode = ReactDOM.findDOMNode(
        clipBoxRef.current
      ) as HTMLDivElement;
      const { offsetWidth, offsetHeight } = clipBoxNode;
      const xChange = e.clientX - beforeMouseX.current;
      const yChange = e.clientY - beforeMouseY.current;
      const top = Math.floor(clipBoxBeforeTop.current + yChange);
      const left = Math.floor(clipBoxBeforeLeft.current + xChange);
      if (top < 0) {
        setClipBoxTop(0);
      } else if (top > leftBoxHeight.current - offsetHeight - 2) {
        setClipBoxTop(Math.max(leftBoxHeight.current - offsetHeight - 2, 0));
      } else {
        setClipBoxTop(top);
      }
      if (left < 0) {
        setClipBoxLeft(0);
      } else if (left > leftBoxWidth.current - offsetWidth - 2) {
        setClipBoxLeft(Math.max(leftBoxWidth.current - offsetWidth - 2, 0));
      } else {
        setClipBoxLeft(left);
      }
    }
  };

  const onMouseDownClipBox = (e: React.MouseEvent) => {
    beforeMouseX.current = e.clientX;
    beforeMouseY.current = e.clientY;
    const clipBoxNode = ReactDOM.findDOMNode(
      clipBoxRef.current
    ) as HTMLDivElement;
    clipBoxBeforeTop.current = clipBoxNode.offsetTop;
    clipBoxBeforeLeft.current = clipBoxNode.offsetLeft;
    isGetar.current = true;
  };

  const onMouseUp = () => {
    isGetar.current = false;
  };

  useEffect(() => {
    const { width, height } = imgInfo;
    if (width < watermarkMinWidthHeight || height < watermarkMinWidthHeight) {
      message.error(
        intl.formatMessage({ id: "page.imageProcessingTool.imageTooSmall" })
      );
      setImgSizeQualified(false);
      return;
    } else if (width >= 1350 || height >= 1350) {
      message.error(
        intl.formatMessage({ id: "page.imageProcessingTool.imageTooLarge" })
      );
      setImgSizeQualified(false);
      return;
    }
    setImgSizeQualified(true);
    setWatermarkInfo(null);
  }, [imgInfo]);

  useEffect(() => {
    if (imgSizeQualified && watermarkInfo && leftBoxRef.current) {
      const leftBoxNode = ReactDOM.findDOMNode(
        leftBoxRef.current
      ) as HTMLDivElement;
      const { offsetWidth, offsetHeight } = leftBoxNode;
      leftBoxWidth.current = offsetWidth;
      leftBoxHeight.current = offsetHeight;
    }
  }, [imgSizeQualified, watermarkInfo]);

  // 点击确定
  const onOk = () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    if (watermarkInfo) {
      doing.current = true;
      const newImageData = addWatermark(
        imgInfo.imageData,
        watermarkInfo.imageData,
        clipBoxTop,
        clipBoxLeft
      );
      if (newImageData) {
        exportImage(newImageData);
      } else {
        message.error(intl.formatMessage({ id: "common.operationFailure" }));
      }
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
        onDragOver={(e: React.DragEvent) => {
          if (!watermarkInfo) {
            onDragOver(e);
          } else {
            e.stopPropagation();
            e.preventDefault();
          }
        }}
        onDragLeave={(e: React.DragEvent) => {
          if (!watermarkInfo) {
            onDragLeave(e);
          } else {
            e.stopPropagation();
            e.preventDefault();
          }
        }}
        onDrop={(e: React.DragEvent) => {
          if (!watermarkInfo) {
            onDrop(e);
          } else {
            e.stopPropagation();
            e.preventDefault();
          }
        }}
      >
        {imgSizeQualified && (
          <div
            className={styles.content}
            style={{
              width: `${imgInfo.width}px`,
              height: `${imgInfo.height}px`,
            }}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            ref={contentRef}
          >
            <div className={styles.leftBox} ref={leftBoxRef}>
              <img src={imgInfo.imgUrl} className={styles.img1} />
              {watermarkInfo && (
                <div
                  className={styles.clipBox}
                  style={{
                    position: "absolute",
                    width: `${clipBoxWidth}px`,
                    height: `${clipBoxHeight}px`,
                    top: `${clipBoxTop}px`,
                    left: `${clipBoxLeft}px`,
                  }}
                  onMouseDown={onMouseDownClipBox}
                  ref={clipBoxRef}
                >
                  <img src={watermarkInfo.imgUrl} alt="" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {imgSizeQualified && (
        <div className={styles.operationBtns}>
          <div className={styles.left}>
            <div className={styles.box}>
              <div className={styles.top}>
                <Button type="primary" className={styles.uploadBtn}>
                  <FolderAddOutlined />
                  {intl.formatMessage({
                    id: "page.imageProcessingTool.uploadWatermark",
                  })}
                  <input
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={onUploadWatermarkChange}
                  />
                </Button>
                {watermarkInfo
                  ? watermarkInfo.name
                  : intl.formatMessage({ id: "common.noData" })}
              </div>
              {watermarkInfo && (
                <div className={styles.bottom}>
                  <InputNumber
                    className={styles.operationBtn}
                    style={{ width: "160px" }}
                    min={0}
                    max={imgInfo.width - watermarkMinWidthHeight}
                    precision={0}
                    value={clipBoxLeft}
                    addonBefore={intl.formatMessage({
                      id: "page.imageProcessingTool.distanceLeft",
                    })}
                    onChange={(value: number | null) => {
                      setClipBoxLeft(value || 0);
                      const { width } = imgInfo;
                      if (value && value + clipBoxWidth > width) {
                        setClipBoxWidth(width - value);
                      }
                    }}
                  />
                  <InputNumber
                    className={styles.operationBtn}
                    style={{ width: "160px" }}
                    min={0}
                    max={imgInfo.height - watermarkMinWidthHeight}
                    precision={0}
                    value={clipBoxTop}
                    addonBefore={intl.formatMessage({
                      id: "page.imageProcessingTool.distanceTop",
                    })}
                    onChange={(value: number | null) => {
                      setClipBoxTop(value || 0);
                      const { height } = imgInfo;
                      if (value && value + clipBoxHeight > height) {
                        setClipBoxHeight(height - value);
                      }
                    }}
                  />
                  <Button
                    type="primary"
                    className={styles.operationBtn}
                    onClick={onOk}
                    disabled={!imgSizeQualified}
                  >
                    {intl.formatMessage({ id: "common.confirm" })}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <Button
            className={styles.right}
            ghost
            type="primary"
            onClick={onClear}
          >
            {intl.formatMessage({ id: "common.clear" })}
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddWatermark;
