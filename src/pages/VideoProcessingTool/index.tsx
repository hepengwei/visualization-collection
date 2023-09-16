/**
 * 视频处理工具
 */
import React, { useState } from "react";
import { Button, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import Tabs from "components/Tabs";
import Rotate from "./components/Rotate";
import Clipping from "./components/Clipping";
import Combine from "./components/Combine";
import VaryingVelocity from "./components/VaryingVelocity";
import AddWatermark from "./components/AddWatermark";
import GenerateGIF from "./components/GenerateGIF";
import AIGenerateSubtitles from "./components/AIGenerateSubtitles";
import AddAudio from "./components/AddAudio";
import styles from "./index.module.scss";

export interface VideoInfo {
  name: string;
  fileType: string;
  size: number;
  width: number;
  height: number;
  duration: number;
  videoUrl: string;
  firstImgUrl: string;
}

export interface TabPageProps {
  videoInfo: VideoInfo;
  exportVideo: (imageData: ImageData, exportImageType?: string) => void;
  videoDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

enum TabId {
  "rotate",
  "clipping",
  "combine",
  "varyingVelocity",
  "addWatermark",
  "generateGIF",
  "AIGenerateSubtitles",
  "addAudio",
}

const primaryColor = "#0E5E6F";
const primaryShallowColor = "#3A8891";

const VideoProcessingTool = () => {
  const intl = useIntl();
  const [videoDragOver, setVideoDragOver] = useState<boolean>(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  // 导出视频
  const exportVideo = () => {};

  const onTabsChange = (tabId: TabId) => {
    setSelectedTabId(tabId);
  };

  const getVideoInfo = (files: FileList) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const { type } = file;
    const typeArr = type.split("/");
    if (typeArr[0] !== "video") return;
    let fileType = typeArr[1].toUpperCase();
    const videoElement = document.createElement("video");
    const dataUrl = URL.createObjectURL(file);
    videoElement.onloadeddata = function () {
      const { videoWidth: width, videoHeight: height, duration } = videoElement;
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      ctx.drawImage(videoElement, 0, 0, width, height);
      const firstImgUrl = canvas.toDataURL("image/png");
      const newVideoInfo: VideoInfo = {
        name: file.name,
        fileType,
        size: file.size,
        width,
        height,
        duration,
        videoUrl: dataUrl,
        firstImgUrl,
      };
      setVideoInfo(newVideoInfo);
    };
    videoElement.onerror = function () {
      message.error(
        intl.formatMessage({
          id: "common.parsingDataFailure",
        })
      );
      setVideoInfo(null);
    };
    // 设置auto预加载数据，否则会出现截图为黑色图片的情况
    videoElement.setAttribute("preload", "auto");
    videoElement.src = dataUrl;
  };

  const onUploadChange = (e: any) => {
    const { files } = e.target;
    getVideoInfo(files);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!videoDragOver) {
      setVideoDragOver(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    videoDragOver && setVideoDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    videoDragOver && setVideoDragOver(false);
    const { files } = e.dataTransfer;
    getVideoInfo(files);
  };

  const onClear = () => {
    setVideoInfo(null);
  };

  const tabPageProps = {
    videoInfo: videoInfo as VideoInfo,
    exportVideo,
    videoDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  };

  const tabsList = [
    {
      id: TabId.rotate,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.rotate",
      }),
      element: <Rotate {...tabPageProps} />,
    },
    {
      id: TabId.clipping,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.clipping",
      }),
      element: <Clipping {...tabPageProps} />,
    },
    {
      id: TabId.combine,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.combine",
      }),
      element: <Combine {...tabPageProps} />,
    },
    {
      id: TabId.varyingVelocity,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.varyingVelocity",
      }),
      element: <VaryingVelocity {...tabPageProps} />,
    },
    {
      id: TabId.addWatermark,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.addWatermark",
      }),
      element: <AddWatermark {...tabPageProps} />,
    },
    {
      id: TabId.generateGIF,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.generateGIF",
      }),
      element: <GenerateGIF {...tabPageProps} />,
    },
    {
      id: TabId.AIGenerateSubtitles,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.AIGenerateSubtitles",
      }),
      element: <AIGenerateSubtitles {...tabPageProps} />,
    },
    {
      id: TabId.addAudio,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.addAudio",
      }),
      element: <AddAudio {...tabPageProps} />,
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
        {!videoInfo && (
          <div
            className={styles.videoBox}
            style={{
              borderColor: videoDragOver ? primaryColor : primaryShallowColor,
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
                  id: "common.supportedVideoType",
                })}
              </p>
            </div>
          </div>
        )}
        {videoInfo &&
          tabsList.filter((item) => item.id === selectedTabId)[0].element}
      </div>
    </div>
  );
};

export default VideoProcessingTool;
