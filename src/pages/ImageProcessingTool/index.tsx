/**
 * 图片处理工具
 */
import React, { useState } from "react";
import { Button, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import Tabs from "components/Tabs";
import {
  getImgInfo,
  imageDataToBlob,
  exportToImage,
  ImgInfo,
} from "utils/fileUtil";
import BasicOperation from "./components/BasicOperation";
import RectClip from "./components/RectClip";
import RadiusClip from "./components/RadiusClip";
import ChangeSize from "./components/ChangeSize";
import ChangeBrightness from "./components/ChangeBrightness";
import ChangeDiaphaneity from "./components/ChangeDiaphaneity";
import AddWatermark from "./components/AddWatermark";
import CoverWithMosaic from "./components/CoverWithMosaic";
import Compression from "./components/Compression";
import styles from "./index.module.scss";

export interface TabPageProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData, exportImageType?: string) => void;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

enum TabId {
  "basicOperation",
  "rectClip",
  "radiusClip",
  "changeSize",
  "changeBrightness",
  "changeDiaphaneity",
  "addWatermark",
  "coverWithMosaic",
  "photoCompression",
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";

const GameImage = () => {
  const intl = useIntl();
  const [imgDragOver, setImgDragOver] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfo | null>(null);

  // 导出图片
  const exportImage = (imageData: ImageData, exportImageType?: string) => {
    if (!imageData || !imgInfo) return;
    imageDataToBlob(
      imageData,
      exportImageType || imgInfo.fileType,
      (blob: Blob | null) => {
        if (blob) {
          let imgName = "image";
          if (imgInfo && imgInfo.name) {
            const arr = imgInfo.name.split(".");
            if (arr.length > 1) {
              arr.splice(
                arr.length - 1,
                1,
                exportImageType
                  ? exportImageType.toLowerCase()
                  : imgInfo.fileType.toLowerCase()
              );
              imgName = arr.join(".");
            } else {
              arr.push(
                exportImageType
                  ? exportImageType.toLowerCase()
                  : imgInfo.fileType.toLowerCase()
              );
              imgName = arr.join(".");
            }
          }
          exportToImage(blob, imgName);
        }
      }
    );
  };

  const onTabsChange = (tabId: TabId) => {
    setSelectedTabId(tabId);
  };

  const getImageInfo = (files: FileList) => {
    if (!files || files.length === 0) return;
    getImgInfo(files[0], (newImgInfo: ImgInfo | null) => {
      setImgInfo(newImgInfo);
      if (!newImgInfo) {
        message.error(
          intl.formatMessage({
            id: "common.parsingDataFailure",
          })
        );
      }
    });
  };

  const onUploadChange = (e: any) => {
    const { files } = e.target;
    getImageInfo(files);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!imgDragOver) {
      setImgDragOver(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    imgDragOver && setImgDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    imgDragOver && setImgDragOver(false);
    const { files } = e.dataTransfer;
    getImageInfo(files);
  };

  const onClear = () => {
    setImgInfo(null);
  };

  const tabPageProps = {
    imgInfo: imgInfo as ImgInfo,
    exportImage,
    imgDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  };

  const tabsList = [
    {
      id: TabId.basicOperation,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.basicOperation",
      }),
      element: <BasicOperation {...tabPageProps} />,
    },
    {
      id: TabId.rectClip,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.rectangularClipping",
      }),
      element: <RectClip {...tabPageProps} />,
    },
    {
      id: TabId.radiusClip,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.roundedCornerClipping",
      }),
      element: <RadiusClip {...tabPageProps} />,
    },
    {
      id: TabId.changeSize,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.modifyTheSize",
      }),
      element: <ChangeSize {...tabPageProps} />,
    },
    {
      id: TabId.changeBrightness,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.modifyBrightness",
      }),
      element: <ChangeBrightness {...tabPageProps} />,
    },
    {
      id: TabId.changeDiaphaneity,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.modifyTransparency",
      }),
      element: <ChangeDiaphaneity {...tabPageProps} />,
    },
    {
      id: TabId.addWatermark,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.addWatermark",
      }),
      element: <AddWatermark {...tabPageProps} />,
    },
    {
      id: TabId.coverWithMosaic,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.coverWithMosaics",
      }),
      element: <CoverWithMosaic {...tabPageProps} />,
    },
    {
      id: TabId.photoCompression,
      label: intl.formatMessage({
        id: "menu.imageProcessingTool.imageCompression",
      }),
      element: <Compression {...tabPageProps} />,
    },
  ];
  const [selectedTabId, setSelectedTabId] = useState<TabId>(tabsList[0].id);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tabs
          className={styles.tabs}
          data={tabsList}
          selectedTabId={selectedTabId}
          onChange={onTabsChange}
        />
        {!imgInfo && (
          <div
            className={styles.imgBox}
            style={{
              borderColor: imgDragOver ? primaryColor : primaryShallowColor,
            }}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className={styles.emptyBox}>
              <Button type="primary" className={styles.uploadBtn}>
                <FolderAddOutlined />
                {intl.formatMessage({
                  id: "common.uploadFile",
                })}
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={onUploadChange}
                />
              </Button>
              <p className={styles.text}>
                {intl.formatMessage({
                  id: "common.dragTheFileHere",
                })}
              </p>
              <p className={styles.tips}>
                {intl.formatMessage({
                  id: "common.supportedImageType",
                })}
              </p>
            </div>
          </div>
        )}
        {!imgInfo && (
          <div className={styles.extensionTip}>
            {intl.formatMessage({
              id: "page.imageProcessingTool.extensionTipFront",
            })}
            <span
              onClick={() => {
                window.open(
                  "https://github.com/hepengwei/processing-image-tool"
                );
              }}
            >
              &nbsp;processing-image-tool&nbsp;
            </span>
            {intl.formatMessage({
              id: "page.imageProcessingTool.extensionTipBehind",
            })}
          </div>
        )}
        {imgInfo &&
          tabsList.filter((item) => item.id === selectedTabId)[0].element}
      </div>
    </div>
  );
};

export default GameImage;
