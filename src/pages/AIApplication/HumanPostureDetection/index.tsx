/**
 * 人体姿态检测
 */
import React, { useState, useEffect, useRef } from "react";
import { Button, message } from "antd";
import { useIntl } from "react-intl";
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

enum VideoStatus {
  "ready",
  "inRecording",
}
const width = Math.floor(window.screen.width * 0.55);
const height = Math.floor(window.screen.height * 0.55);
const videoWidth = width % 2 === 0 ? width : width + 1;
const videoHeight = height % 2 === 0 ? height : height + 1;

const HumanPostureDetection = () => {
  const intl = useIntl();
  const videoRef = useRef<HTMLVideoElement>(null);
  const detectorRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [videoStatus, setVideoStatus] = useState<VideoStatus>(
    VideoStatus.ready
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const timerRef = useRef<number | null>(null);

  // 画点
  const drawPoint = (
    x: number,
    y: number,
    r: number,
    color: string,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };

  // 画线段
  const drawSegment = (
    [ax, ay]: number[],
    [bx, by]: number[],
    color: string,
    scale: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.beginPath();
    ctx.moveTo(ax * scale, ay * scale);
    ctx.lineTo(bx * scale, by * scale);
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.stroke();
  };

  const detectPose = async () => {
    if (detectorRef.current && videoRef.current && ctxRef.current) {
      if (!videoRef.current.srcObject) return;
      // 将视频每一帧绘制到画布上
      ctxRef.current.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
      const imageData = ctxRef.current.getImageData(
        0,
        0,
        videoWidth,
        videoHeight
      );

      // 获取检测结果
      const poses = await detectorRef.current.estimatePoses(imageData, {
        flipHorizontal: false, // 是否水平翻转
        maxPoses: 1, // 最大检测人数
        scoreThreshold: 0.5, // 置信度
        nmsRadius: 20, // 非极大值抑制
      });

      // 将 pose 上的 17 个关键点的坐标信息存入 pointList
      const pointList = poses[0]?.keypoints || [];

      // 将这 17 个关键点的坐标信息 画到 canvas 上
      pointList.forEach(({ x, y, score }: any) => {
        if (score > 0.5) {
          // 画点
          drawPoint(
            x,
            y,
            6,
            "#f00000",
            ctxRef.current as CanvasRenderingContext2D
          );
        }
      });

      // 获取相邻的关键点信息
      const adjacentPairs = poseDetection.util.getAdjacentPairs(
        poseDetection.SupportedModels.PoseNet
      );

      // 画出所有连线
      adjacentPairs.forEach(([i, j]: any) => {
        if (pointList && pointList.length >= 2) {
          const kp1 = pointList[i];
          const kp2 = pointList[j];
          // score 不为空就画线
          const score1 = kp1.score != null ? kp1.score : 0;
          const score2 = kp2.score != null ? kp2.score : 0;
          if (score1 >= 0.5 && score2 >= 0.5) {
            // 画出所有连线
            drawSegment(
              [kp1.x, kp1.y],
              [kp2.x, kp2.y],
              "aqua",
              1,
              ctxRef.current as CanvasRenderingContext2D
            );
          }
        }
      });

      timerRef.current = window.setTimeout(() => {
        detectPose();
      }, 50);
    }
  };

  const onStartOrEnd = async () => {
    if (streamRef.current && detectorRef.current) {
      if (videoStatus === VideoStatus.inRecording) {
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setVideoStatus(VideoStatus.ready);
        setTimeout(() => {
          if (ctxRef.current) {
            ctxRef.current?.clearRect(0, 0, videoWidth, videoHeight);
          }
        }, 50);
      } else {
        if (videoRef.current) {
          videoRef.current.srcObject = streamRef.current;
          // 开始检测
          detectPose();
        }
        setVideoStatus(VideoStatus.inRecording);
      }
    } else if (videoRef.current) {
      const constraints = {
        audio: false,
        video: {
          width: videoWidth,
          height: videoHeight,
          facingMode: "user", // 强制使用前置摄像头
          frameRate: 60, // 每秒60帧
        },
      };
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(async (stream: MediaStream) => {
            if (videoRef.current && stream) {
              streamRef.current = stream;
            }
            if (videoRef.current && streamRef.current) {
              videoRef.current.srcObject = streamRef.current;
              // 定义模型
              const model = poseDetection.SupportedModels.PoseNet;
              // 加载模型
              const detector = await poseDetection.createDetector(model, {
                modelType: "full",
              });
              detectorRef.current = detector;
              // 开始检测
              detectPose();
            }
            setVideoStatus(VideoStatus.inRecording);
          })
          .catch((e) => {
            if (e.message && e.message.includes("not found")) {
              message.error(
                intl.formatMessage({ id: "common.deviceNotFound" })
              );
            } else if (
              e.message &&
              e.message.includes("Invalid architecture full")
            ) {
              message.error(e.message);
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
    }
  };

  const init = () => {
    if (canvasRef.current) {
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const ctx = canvasRef.current.getContext("2d");
      ctxRef.current = ctx;
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.AIApplication.humanPostureDetection" />
      <div
        className={styles.content}
        style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
      >
        <video
          style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
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
      <Button type="primary" onClick={onStartOrEnd}>
        {videoStatus === VideoStatus.inRecording
          ? intl.formatMessage({ id: "common.end" })
          : intl.formatMessage({ id: "common.start" })}
      </Button>
    </div>
  );
};

export default HumanPostureDetection;
