/**
 * 不挡人像的弹幕
 */
import React, { useState, useEffect, useRef } from "react";
import { Input, Button, message } from "antd";
import { useIntl } from "react-intl";
import * as bodySegmentation from "@tensorflow-models/body-segmentation";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import { getCanvasImgDataByVideo, imageDataToDataURL } from "utils/fileUtil";
import styles from "./index.module.scss";

enum VideoStatus {
  "ready",
  "playing",
  "pause",
}

const videoWidth = 324;
const videoHeight = 576;
const barrageMoveSpeed = 2; // 弹幕移动速度
const barrageRowNum = 10; // 弹幕行数
const barrageTextFontSize = 20; // 弹幕文字大小
const barrageMarginTop = 4; // 每行弹幕上下间距
const drawContour = false; // 是否在每个人的分割蒙版周围绘制轮廓
const foregroundThresholdProbability = 0.3; // 将像素着色为前景而不是背景的最小概率

const NotBlockPeopleBarrage = () => {
  const intl = useIntl();
  const videoRef = useRef<HTMLVideoElement>(null);
  const barrageBoxRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState<string>("");
  const [videoStatus, setVideoStatus] = useState<VideoStatus>(
    VideoStatus.ready
  );
  const segmentaterRef = useRef<any>(null);
  const frameId = useRef<number | null>(null);

  const setBarrageBgImage = async () => {
    if (videoRef.current && barrageBoxRef.current) {
      const imageData = getCanvasImgDataByVideo(
        videoRef.current,
        videoWidth,
        videoHeight
      );
      if (imageData) {
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
        const foregroundColor = { r: 0, g: 0, b: 0, a: 0 };
        const backgroundColor = { r: 0, g: 0, b: 0, a: 255 };
        const backgroundDarkeningMask = await bodySegmentation.toBinaryMask(
          people,
          foregroundColor,
          backgroundColor,
          drawContour,
          foregroundThresholdProbability
        );
        const dataUrl = imageDataToDataURL(backgroundDarkeningMask);
        // @ts-ignore
        barrageBoxRef.current.style["-webkit-mask-image"] = `url(${dataUrl})`;
        barrageBoxRef.current.style[
          // @ts-ignore
          "-webkit-mask-size"
        ] = `${videoWidth}px ${videoHeight}px`;

        // 处理弹幕
        const { children } = barrageBoxRef.current;
        if (children && children.length > 0) {
          Array.prototype.forEach.call(children, (child) => {
            const { left } = child.style;
            if (left < -videoWidth) {
              barrageBoxRef.current?.removeChild(child);
            } else {
              const { left } = child.style;
              child.style.left = `${
                Number(left.substring(0, left.length - 2)) - barrageMoveSpeed
              }px`;
            }
          });
        }

        frameId.current = window.requestAnimationFrame(setBarrageBgImage);
      }
    }
  };

  const onTogglePlay = () => {
    if (videoRef.current) {
      if (videoStatus === VideoStatus.playing) {
        setVideoStatus(VideoStatus.pause);
        videoRef.current.pause();
      } else {
        setVideoStatus(VideoStatus.playing);
        videoRef.current.play();
      }
    }
  };

  const onSend = () => {
    if (inputText) {
      if (barrageBoxRef.current) {
        const span = document.createElement("span");
        span.innerText = inputText;
        span.style.fontSize = `${barrageTextFontSize}px`;
        span.style.fontWeight = "500";
        span.style.color = "#fff";
        span.style.whiteSpace = "nowrap";
        span.style.position = "absolute";
        const rowIndex = Math.floor(Math.random() * barrageRowNum);
        const top = rowIndex * (barrageTextFontSize + barrageMarginTop) + 20;
        span.style.top = `${top}px`;
        span.style.left = `${videoWidth}px`;
        barrageBoxRef.current.appendChild(span);
      } else {
        message.warning(intl.formatMessage({ id: "common.tryingToLoad" }));
      }
      setInputText("");
    }
  };

  const init = async () => {
    if (videoRef.current) {
      videoRef.current.oncanplay = () => {
        if (
          videoRef.current &&
          videoRef.current?.readyState === videoRef.current.HAVE_ENOUGH_DATA
        ) {
          if (segmentaterRef.current) {
            setVideoStatus(VideoStatus.playing);
            videoRef.current.play();
            setBarrageBgImage();
          }
        }
      };

      // 加载模型
      const model =
        bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;
      const segmenterConfig = {
        runtime: "mediapipe",
        modelType: "landscape",
        solutionPath:
          "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation",
      };

      const segmentater = await bodySegmentation.createSegmenter(
        model,
        // @ts-ignore
        segmenterConfig
      );
      segmentaterRef.current = segmentater;
      if (videoStatus === VideoStatus.ready) {
        setVideoStatus(VideoStatus.playing);
        videoRef.current.play();
        setBarrageBgImage();
      }
    }
  };

  useEffect(() => {
    init();

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
      >
        <video
          style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
          muted={false}
          preload="true"
          loop
          x5-video-player-fullscreen="true"
          x5-playsinline="true"
          playsInline
          webkit-playsinline="true"
          crossOrigin="anonymous"
          ref={videoRef}
        >
          <source src="public/dance.mp4"></source>
        </video>
        <div className={styles.barrageBox} ref={barrageBoxRef}></div>
        {videoStatus !== VideoStatus.ready && (
          <Button type="primary" ghost onClick={onTogglePlay}>
            {videoStatus === VideoStatus.playing
              ? intl.formatMessage({ id: "common.pause" })
              : intl.formatMessage({ id: "common.play" })}
          </Button>
        )}
      </div>
      <div className={styles.bottomBox}>
        <Input
          placeholder={intl.formatMessage({
            id: "page.AIApplication.sendBarrage",
          })}
          value={inputText}
          maxLength={20}
          onChange={(e: any) => setInputText(e.target.value || "")}
          onKeyDown={(e) => {
            if (e?.key === "Enter") {
              onSend();
            }
          }}
        />
        <Button type="primary" onClick={onSend}>
          {intl.formatMessage({
            id: "page.AIApplication.send",
          })}
        </Button>
      </div>
    </div>
  );
};

export default NotBlockPeopleBarrage;
