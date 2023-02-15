import React, { useEffect, useState, useRef } from "react";
import { Button, Select, message } from "antd";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

enum VideoStatus {
  "noInit",
  "ready",
  "inRecording",
}

const photoSizeInfo = {
  1: { width: 295, height: 413 },
  2: { width: 413, height: 579 },
};

const TakeIDPhotos = () => {
  const intl = useIntl();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photoSize, setPhotoSize] = useState<"1" | "2">("1");
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [videoStatus, setVideoStatus] = useState<VideoStatus>(
    VideoStatus.noInit
  );

  const onStartOrEnd = () => {
    if (mediaRecorder.current) {
      if (videoStatus === VideoStatus.inRecording) {
        if (videoRef.current) {
          const canvas = document.createElement("canvas") as HTMLCanvasElement;
          const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
          const { width, height } = photoSizeInfo[photoSize];
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(videoRef.current, 0, 0, width, height);
          const imageUrl = canvas.toDataURL("image/jpeg");
          setFileName(`${new Date().getTime()}.jpeg`);
          setImageUrl(imageUrl);
        }
        mediaRecorder.current.stop();
        setVideoStatus(VideoStatus.ready);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      } else {
        if (imageUrl) {
          window.URL.revokeObjectURL(imageUrl);
          setFileName("");
          setImageUrl("");
        }
        if (videoRef.current && streamRef.current) {
          videoRef.current.srcObject = streamRef.current;
        }
        mediaRecorder.current.start();
        setVideoStatus(VideoStatus.inRecording);
      }
    } else if (videoRef.current) {
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
            const isSafari = !!(
              /Safari/.test(navigator.userAgent) &&
              !/Chrome/.test(navigator.userAgent)
            );
            const mimeType = isSafari ? "video/mp4" : "video/webm";
            try {
              const options = {
                videoBitsPerSecond: 5000000,
                mimeType,
              };
              const recorder = new MediaRecorder(stream, options);
              //   recorder.ondataavailable = (e) => {};
              //   recorder.onstop = (e) => {};
              mediaRecorder.current = recorder;
              if (videoRef.current && streamRef.current) {
                videoRef.current.srcObject = streamRef.current;
              }
              mediaRecorder.current.start();
              setVideoStatus(VideoStatus.inRecording);
            } catch (e) {
              message.error(
                `MediaRecorder creation failed: ${e}. mimeType:${mimeType}`
              );
            }
          })
          .catch((e) => {
            if (e.message && e.message.includes("not found")) {
              message.error(
                intl.formatMessage({ id: "common.deviceNotFound" })
              );
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
          {imageUrl && <img src={imageUrl} alt="" />}
        </div>
        <div className={styles.btns}>
          <Select
            value={photoSize}
            style={{ width: 80 }}
            onChange={(value: "1" | "2") => {
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
