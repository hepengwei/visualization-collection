import React, { useEffect, useState, useRef } from "react";
import { Button, Select, message } from "antd";
import { useIntl } from "react-intl";
import * as bodySegmentation from "@tensorflow-models/body-segmentation";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import { getCanvasImgDataByVideo } from "utils/fileUtil";
import { getImageDataByAIData } from "utils/imageUtil";
import styles from "./index.module.scss";

enum VideoStatus {
  "noInit",
  "loading",
  "ready",
  "inRecording",
}

const photoSizeInfo = {
  1: { width: 295, height: 413 },
  2: { width: 413, height: 579 },
};

const bgColorList = {
  transparency: { r: 0, g: 0, b: 0, a: 0 },
  red: { r: 255, g: 0, b: 0, a: 255 },
  blue: { r: 67, g: 142, b: 219, a: 255 },
  white: { r: 255, g: 255, b: 255, a: 255 },
};

const drawContour = false; // 是否在每个人的分割蒙版周围绘制轮廓
const foregroundThresholdProbability = 0.3; // 将像素着色为前景而不是背景的最小概率

type BgColor = keyof typeof bgColorList;

const TakeIDPhotos = () => {
  const intl = useIntl();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [photoSize, setPhotoSize] = useState<"1" | "2">("1");
  const photoSizeRef = useRef<"1" | "2">("1");
  const streamRef = useRef<MediaStream | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [videoStatus, setVideoStatus] = useState<VideoStatus>(
    VideoStatus.noInit
  );
  const videoStatusRef = useRef<VideoStatus>(VideoStatus.noInit);
  const [bgColor, setBgColor] = useState<BgColor>("transparency");
  const bgColorRef = useRef<BgColor>("transparency");
  const segmentaterRef = useRef<any>(null);
  const frameId = useRef<number>(0);

  // 将video每帧数据处理后绘制到canvas上
  const draw = async () => {
    if (videoStatusRef.current !== VideoStatus.inRecording) return;
    if (videoRef.current && ctxRef.current) {
      const { width, height } = photoSizeInfo[photoSizeRef.current];
      const imageData = getCanvasImgDataByVideo(
        videoRef.current,
        width,
        height
      );
      if (imageData) {
        if (bgColorRef.current !== "transparency") {
          const segmentationConfig = {
            flipHorizontal: false,
            multiSegmentaion: false,
            segmentBodyParts: false, // 如果设置为true，则24个身体部位被分割输出，否则只有前景/背景二进制分割。
            segmentationThreshold: 1,
          };
          const people = await segmentaterRef.current.segmentPeople(
            imageData,
            segmentationConfig
          );
          const foregroundColor = { r: 255, g: 255, b: 255, a: 255 };
          const backgroundColor = { r: 0, g: 0, b: 0, a: 255 };
          const backgroundDarkeningMask = await bodySegmentation.toBinaryMask(
            people,
            foregroundColor,
            backgroundColor,
            drawContour,
            foregroundThresholdProbability
          );
          const newImageData = getImageDataByAIData(
            imageData,
            backgroundDarkeningMask,
            {
              backgroundColor,
              changeIntoColor: bgColorList[bgColorRef.current],
            }
          );
          if (newImageData) {
            ctxRef.current.putImageData(newImageData, 0, 0);
          } else {
            ctxRef.current.putImageData(imageData, 0, 0);
          }
        } else {
          ctxRef.current.putImageData(imageData, 0, 0);
        }
        frameId.current = window.requestAnimationFrame(draw);
      }
    }
  };

  const loadAssets = async () => {
    setVideoStatus(VideoStatus.loading);
    // 创建ctx对象
    const { width, height } = photoSizeInfo[photoSize];
    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      ctxRef.current = ctx;
    }

    // 加载模型
    const model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;
    const segmenterConfig = {
      runtime: "mediapipe",
      modelType: "landscape",
      solutionPath:
        "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation",
    };
    message.warning("努力加载中，请稍等");

    const segmentater = await bodySegmentation.createSegmenter(
      model,
      // @ts-ignore
      segmenterConfig
    );
    segmentaterRef.current = segmentater;

    // 打开摄像头
    const constraints = {
      video: {
        width: photoSizeInfo[photoSize].width,
        height: photoSizeInfo[photoSize].height,
        facingMode: "user", // 强制使用前置摄像头
        frameRate: 60, // 每秒60帧
      },
    };
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream: MediaStream) => {
          if (videoRef.current && stream) {
            streamRef.current = stream;
          }
          if (videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
          }
          videoStatusRef.current = VideoStatus.inRecording;
          setVideoStatus(VideoStatus.inRecording);
          draw();
        })
        .catch((e) => {
          if (e.message && e.message.includes("not found")) {
            message.error(intl.formatMessage({ id: "common.deviceNotFound" }));
          } else {
            message.error(
              intl.formatMessage({ id: "common.impowerOpenCamera" })
            );
          }
        });
    } else {
      message.error(
        intl.formatMessage({ id: "common.notSupportGetUserMedia" })
      );
    }
  };

  const onStartOrEnd = async () => {
    if (videoStatus === VideoStatus.noInit) {
      loadAssets();
    } else if (videoStatus === VideoStatus.loading) {
      message.warning(intl.formatMessage({ id: "common.tryingToLoad" }));
    } else if (videoStatus === VideoStatus.inRecording) {
      if (videoRef.current && canvasRef.current) {
        videoRef.current.srcObject = null;
        if (frameId.current) {
          window.cancelAnimationFrame(frameId.current);
        }
        const imageUrl = canvasRef.current.toDataURL("image/jpeg");
        setFileName(`${new Date().getTime()}.jpeg`);
        setImageUrl(imageUrl);
      }
      videoStatusRef.current = VideoStatus.ready;
      setVideoStatus(VideoStatus.ready);
    } else {
      if (imageUrl) {
        window.URL.revokeObjectURL(imageUrl);
        setFileName("");
        setImageUrl("");
      }
      if (videoRef.current && streamRef.current) {
        videoRef.current.srcObject = streamRef.current;
        videoStatusRef.current = VideoStatus.inRecording;
        setVideoStatus(VideoStatus.inRecording);
        draw();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl) {
        window.URL.revokeObjectURL(imageUrl);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: "page.htmlVision.utilitarianFunction.takeIDPhotos",
        })}
      </div>
      <div className={styles.content}>
        <div
          className={styles.videoBox}
          style={{
            width: `${photoSizeInfo[photoSize].width}px`,
            height: `${photoSizeInfo[photoSize].height}px`,
          }}
        >
          <video
            className={styles.recordVideo}
            style={{
              width: `${photoSizeInfo[photoSize].width}px`,
              height: `${photoSizeInfo[photoSize].height}px`,
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
          <canvas ref={canvasRef}>
            {intl.formatMessage({ id: "common.browserTooLow" })}
          </canvas>
        </div>
        <div className={styles.btns}>
          <div className={styles.label}>
            {intl.formatMessage({ id: "common.dimension" })}：
          </div>
          <Select
            value={photoSize}
            style={{ width: "90px", marginRight: "16px" }}
            onChange={(value: "1" | "2") => {
              if (canvasRef.current) {
                const { width, height } = photoSizeInfo[value];
                canvasRef.current.width = width;
                canvasRef.current.height = height;
              }
              photoSizeRef.current = value;
              setPhotoSize(value);
            }}
            options={[
              {
                value: "1",
                label: intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.oneInch",
                }),
              },
              {
                value: "2",
                label: intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.twoInch",
                }),
              },
            ]}
          />
          <div className={styles.label}>
            {intl.formatMessage({ id: "common.backgroundColor" })}：
          </div>
          <Select
            value={bgColor}
            style={{ width: "130px", marginRight: "16px" }}
            onChange={(value: BgColor) => {
              bgColorRef.current = value;
              setBgColor(value);
            }}
            options={[
              {
                value: "transparency",
                label: intl.formatMessage({ id: "common.transparency" }),
              },
              {
                value: "red",
                label: intl.formatMessage({ id: "common.red" }),
              },
              {
                value: "blue",
                label: intl.formatMessage({ id: "common.blue" }),
              },
              {
                value: "white",
                label: intl.formatMessage({ id: "common.white" }),
              },
            ]}
          />
          <Button type="primary" onClick={onStartOrEnd}>
            {videoStatus === VideoStatus.inRecording
              ? intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.clickToTakeAPhoto",
                })
              : imageUrl
              ? intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.backPhoto",
                })
              : intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.readyToTakeAPhoto",
                })}
          </Button>
          {imageUrl && (
            <a download={fileName} href={imageUrl}>
              {intl.formatMessage({ id: "common.download" })}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TakeIDPhotos;
