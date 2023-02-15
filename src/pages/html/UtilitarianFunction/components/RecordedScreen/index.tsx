import React, { useEffect, useState, useRef } from "react";
import { Button, message } from "antd";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

enum VideoStatus {
  "ready",
  "inRecording",
  "playing",
}

const videoWidth = Math.floor(window.screen.width * 0.36);
const videoHeight = Math.floor(window.screen.height * 0.36);

const RecordedScreen = () => {
  const intl = useIntl();
  const recordVideoRef = useRef<HTMLVideoElement>(null);
  const playVideoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<any[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [videoStatus, setVideoStatus] = useState<VideoStatus>(
    VideoStatus.ready
  );
  const videoStatusRef = useRef<VideoStatus>(VideoStatus.ready);

  const onStartOrEnd = () => {
    if (mediaRecorder.current) {
      if (videoStatus === VideoStatus.inRecording) {
        mediaRecorder.current.stop();
        videoStatusRef.current = VideoStatus.ready;
        setVideoStatus(VideoStatus.ready);
      } else {
        if (videoUrl) {
          window.URL.revokeObjectURL(videoUrl);
          setFileName("");
          setVideoUrl("");
          mediaRecorder.current = null;
          videoStatusRef.current = VideoStatus.ready;
          setVideoStatus(VideoStatus.ready);
        }
      }
    } else if (recordVideoRef.current) {
      if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices
          .getDisplayMedia({
            video: true,
          })
          .then((stream: MediaStream) => {
            if (recordVideoRef.current && stream) {
              streamRef.current = stream;
            }
            const mimeType = MediaRecorder.isTypeSupported(
              "video/webm; codecs=vp9"
            )
              ? "video/webm; codecs=vp9"
              : "video/webm";
            try {
              const options = {
                audioBitsPerSecond: 128000,
                videoBitsPerSecond: 5000000,
                mimeType,
              };
              const recorder = new MediaRecorder(stream, options);
              recorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) {
                  chunks.current.push(e.data);
                }
              };
              recorder.onstop = () => {
                if (videoStatusRef.current === VideoStatus.inRecording) {
                  videoStatusRef.current = VideoStatus.ready;
                  setVideoStatus(VideoStatus.ready);
                }
                const blob = new Blob(chunks.current, {
                  type: "video/webm",
                });
                setFileName(`${new Date().getTime()}.webm`);
                const newAudioUrl = window.URL.createObjectURL(blob);
                setVideoUrl(newAudioUrl);
                chunks.current = [];
              };
              mediaRecorder.current = recorder;
              if (recordVideoRef.current && streamRef.current) {
                recordVideoRef.current.srcObject = streamRef.current;
              }
              mediaRecorder.current.start();
              videoStatusRef.current = VideoStatus.inRecording;
              setVideoStatus(VideoStatus.inRecording);
            } catch (e) {
              message.error(
                `MediaRecorder creation failed: ${e}. mimeType:${mimeType}`
              );
            }
          })
          .catch((e) => {
            message.error(
              intl.formatMessage({ id: "common.impowerOpenCamera" })
            );
          });
      } else {
        message.error(
          intl.formatMessage({ id: "common.notSupportGetDisplayMedia" })
        );
      }
    }
  };

  useEffect(() => {
    return () => {
      if (videoUrl) {
        window.URL.revokeObjectURL(videoUrl);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: "page.htmlVision.utilitarianFunction.recordScreen",
        })}
      </div>
      <div className={styles.content}>
        <div
          className={styles.videoBox}
          style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
        >
          <video
            className={styles.recordVideo}
            style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
            muted
            autoPlay
            x5-video-player-fullscreen="true"
            x5-playsinline="true"
            playsInline
            webkit-playsinline="true"
            crossOrigin="anonymous"
            ref={recordVideoRef}
          ></video>
          {videoStatus === VideoStatus.playing && (
            <video
              className={styles.playVideo}
              style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
              muted
              autoPlay
              x5-video-player-fullscreen="true"
              x5-playsinline="true"
              playsInline
              webkit-playsinline="true"
              crossOrigin="anonymous"
              src={videoUrl}
              ref={playVideoRef}
            ></video>
          )}
        </div>
        <div className={styles.btns}>
          <Button type="primary" onClick={onStartOrEnd}>
            {videoStatus === VideoStatus.inRecording
              ? intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.whileRecording",
                })
              : videoUrl
              ? intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.rerecord",
                })
              : intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.startRecording",
                })}
          </Button>
          {videoUrl && (
            <Button
              type="primary"
              onClick={() => {
                if (playVideoRef.current) {
                  playVideoRef.current.play();
                } else {
                  if (recordVideoRef.current) {
                    recordVideoRef.current.srcObject = null;
                  }
                  videoStatusRef.current = VideoStatus.playing;
                  setVideoStatus(VideoStatus.playing);
                }
              }}
            >
              {intl.formatMessage({ id: "common.play" })}
            </Button>
          )}
          {videoUrl && (
            <a download={fileName} href={videoUrl}>
              {intl.formatMessage({ id: "common.download" })}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordedScreen;
