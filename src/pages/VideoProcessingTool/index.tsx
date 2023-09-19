/**
 * 视频处理工具
 */
import React, { useState, useRef, useEffect } from "react";
import { Button, Modal, Spin, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import Tabs from "components/Tabs";
import BasicOperation from "./components/BasicOperation";
import ModifyTheSize from "./components/ModifyTheSize";
import Clipping from "./components/Clipping";
import Combine from "./components/Combine";
import VaryingVelocity from "./components/VaryingVelocity";
import AddWatermark from "./components/AddWatermark";
import GenerateGIF from "./components/GenerateGIF";
import AIGenerateSubtitles from "./components/AIGenerateSubtitles";
import AddAudio from "./components/AddAudio";
import styles from "./index.module.scss";
import { RefObject } from "react";

export interface VideoInfo {
  name: string;
  fileType: string;
  size: number;
  width: number;
  height: number;
  duration: number;
  videoUrl: string;
  firstImgUrl: string;
  imageDataList: ImageData[];
}

interface Callback {
  (videoChunks: Blob[]): void;
}

export interface TabPageProps {
  videoInfo: VideoInfo;
  startgeneratingVideo: (callback: () => void) => void;
  imgDataListToChunks: (imageDataList: ImageData[], callback: Callback) => void;
  videoDragOver: boolean;
  generatingVideoRef: RefObject<boolean>;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

enum TabId {
  "basicOperation",
  "modifyTheSize",
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDragOver, setVideoDragOver] = useState<boolean>(false);
  const [parsingData, setParsingData] = useState<boolean>(false);
  const parsingDataRef = useRef<boolean>(false);
  const [generatingVideo, setGeneratingVideo] = useState<boolean>(false);
  const generatingVideoRef = useRef<boolean>(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const videoInfoRef = useRef<VideoInfo | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const frameId = useRef<number>(0);
  const imageDataListRef = useRef<ImageData[]>([]);

  const onTabsChange = (tabId: TabId) => {
    setSelectedTabId(tabId);
  };

  // 开始生成视频，显示loading Modal
  const startgeneratingVideo = (callback: () => void) => {
    generatingVideoRef.current = true;
    setGeneratingVideo(true);
    callback();
  };

  // 根据播放的视频绘制每一帧到Canvas，并得到每一帧的ImageData
  const drawVideoFrame = () => {
    if (parsingDataRef.current && videoRef.current && ctxRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      ctxRef.current.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
      const imageData = ctxRef.current.getImageData(
        0,
        0,
        videoWidth,
        videoHeight
      );
      imageDataListRef.current.push(imageData);
      frameId.current = window.requestAnimationFrame(drawVideoFrame);
    }
  };

  // 根据imageDataList绘制每一帧到Canvas
  const drawImageDataListFrame = (imageDataList: ImageData[], index = 0) => {
    if (!generatingVideoRef.current || index >= imageDataList.length) {
      mediaRecorder.current?.stop();
      if (generatingVideoRef.current) {
        generatingVideoRef.current = false;
        setGeneratingVideo(false);
      }
    } else if (ctxRef.current) {
      ctxRef.current.putImageData(
        imageDataList[index],
        0,
        0,
        0,
        0,
        imageDataList[0].width,
        imageDataList[0].height
      );
      frameId.current = window.requestAnimationFrame(
        drawImageDataListFrame.bind(null, imageDataList, index + 1)
      );
    }
  };

  // 将imgDataList转成videoChunks
  const imgDataListToChunks = (
    imageDataList: ImageData[],
    callback: Callback
  ) => {
    if (
      imageDataList &&
      imageDataList.length > 0 &&
      canvasRef.current &&
      ctxRef.current
    ) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      canvasRef.current.width = imageDataList[0].width;
      canvasRef.current.height = imageDataList[0].height;
      // 将画布内容生成媒体流
      const stream = canvasRef.current.captureStream();
      const mimeType = MediaRecorder.isTypeSupported(`video/webm;codecs=vp9`)
        ? `video/webm;codecs=vp9`
        : `video/webm`;
      const recorder = new MediaRecorder(stream, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 5000000,
        mimeType,
      });
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0 && videoInfoRef.current) {
          const newVideoChunks = [e.data];
          callback(newVideoChunks);
        }
      };
      mediaRecorder.current = recorder;
      recorder.start();
      // 将转化后的imageDataList中的每个ImageData按每一帧绘制到画布上
      drawImageDataListFrame(imageDataList);
    } else {
      callback([]);
    }
  };

  const getVideoInfo = (files: FileList) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const { type } = file;
    const typeArr = type.split("/");
    if (typeArr[0] !== "video") return;
    parsingDataRef.current = true;
    setParsingData(true);
    let fileType = typeArr[1].toUpperCase();
    const videoElement = videoRef.current as HTMLVideoElement;
    const dataUrl = URL.createObjectURL(file);
    // 视频首帧已完成加载
    videoElement.onloadeddata = () => {
      const { videoWidth: width, videoHeight: height, duration } = videoElement;
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvasRef.current = canvas;
      ctxRef.current = ctx;
      ctx.drawImage(videoElement as CanvasImageSource, 0, 0, width, height);
      const firstImgUrl = canvasRef.current.toDataURL("image/png");
      const newVideoInfo: VideoInfo = {
        name: file.name,
        fileType,
        size: file.size,
        width,
        height,
        duration,
        videoUrl: dataUrl,
        firstImgUrl,
        imageDataList: imageDataListRef.current,
      };
      videoInfoRef.current = newVideoInfo;
      setVideoInfo(newVideoInfo);
      // 将视频的每一帧绘制到画布上
      drawVideoFrame();
    };
    // 视频播放到达结束点
    videoElement.onended = () => {
      mediaRecorder.current?.stop();
      parsingDataRef.current = false;
      setParsingData(false);
      if (frameId.current) {
        window.cancelAnimationFrame(frameId.current);
        frameId.current = 0;
      }
    };
    videoElement.onerror = () => {
      message.error(
        intl.formatMessage({
          id: "common.parsingDataFailure",
        })
      );
      videoInfoRef.current = null;
      setVideoInfo(null);
    };
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
    videoInfoRef.current = null;
    setVideoInfo(null);
  };

  // 取消解析上传的视频
  const onCancel = () => {
    videoInfoRef.current = null;
    setVideoInfo(null);
    parsingDataRef.current = false;
    setParsingData(false);
    if (frameId.current) {
      window.cancelAnimationFrame(frameId.current);
      frameId.current = 0;
    }
  };

  // 取消生成视频
  const onCancelGeneratingVideo = () => {
    generatingVideoRef.current = false;
    setGeneratingVideo(false);
    if (frameId.current) {
      window.cancelAnimationFrame(frameId.current);
      frameId.current = 0;
    }
  };

  useEffect(() => {
    return onCancel;
  }, []);

  const tabPageProps = {
    videoInfo: videoInfo as VideoInfo,
    startgeneratingVideo,
    imgDataListToChunks,
    videoDragOver,
    generatingVideoRef,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  };

  const tabsList = [
    {
      id: TabId.basicOperation,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.basicOperation",
      }),
      element: <BasicOperation {...tabPageProps} />,
    },
    {
      id: TabId.modifyTheSize,
      label: intl.formatMessage({
        id: "menu.videoProcessingTool.modifyTheSize",
      }),
      element: <ModifyTheSize {...tabPageProps} />,
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
      <video
        style={{
          width: `${videoInfo?.width}px`,
          height: `${videoInfo?.height}px`,
          visibility: "hidden",
        }}
        muted
        autoPlay
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
        crossOrigin="anonymous"
        ref={videoRef}
      ></video>
      <Modal
        open={parsingData}
        closeIcon={null}
        footer={null}
        centered
        keyboard={false}
        width={400}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Spin size="large" style={{ marginTop: "40px" }} />
          <span style={{ marginTop: "10px", fontSize: "18px" }}>
            {intl.formatMessage({ id: "common.parsingData" })}
          </span>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: "30px", width: "100px" }}
            onClick={onCancel}
          >
            {intl.formatMessage({ id: "common.cancel" })}
          </Button>
        </div>
      </Modal>
      <Modal
        open={generatingVideo}
        closeIcon={null}
        footer={null}
        centered
        keyboard={false}
        width={400}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Spin size="large" style={{ marginTop: "40px" }} />
          <span style={{ marginTop: "10px", fontSize: "18px" }}>
            {intl.formatMessage({
              id: "page.videoProcessingTool.generatingVideo",
            })}
          </span>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: "30px", width: "100px" }}
            onClick={onCancelGeneratingVideo}
          >
            {intl.formatMessage({ id: "common.cancel" })}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default VideoProcessingTool;
