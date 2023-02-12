import React, { useEffect, useState, useRef } from "react";
import { Button, message } from "antd";
import styles from "./index.module.scss";

enum AudioStatus {
  "ready",
  "inRecording",
}

const RecordedAudio = () => {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<any[]>([]);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [audioStatus, setAudioStatus] = useState<AudioStatus>(
    AudioStatus.ready
  );

  const onStartOrEnd = () => {
    if (mediaRecorder.current) {
      if (audioStatus === AudioStatus.inRecording) {
        mediaRecorder.current.stop();
        setAudioStatus(AudioStatus.ready);
      } else {
        if (audioUrl) {
          window.URL.revokeObjectURL(audioUrl);
          setFileName("");
          setAudioUrl("");
        }
        mediaRecorder.current.start();
        setAudioStatus(AudioStatus.inRecording);
      }
    } else {
      const constraints = { audio: true };
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then((stream: MediaStream) => {
            const recorder = new MediaRecorder(stream);
            recorder.ondataavailable = (e) => {
              chunks.current.push(e.data);
            };
            recorder.onstop = (e) => {
              const blob = new Blob(chunks.current, {
                type: "audio/ogg;codecs=opus",
              });
              setFileName(`${new Date().getTime()}.ogg`);
              const newAudioUrl = window.URL.createObjectURL(blob);
              setAudioUrl(newAudioUrl);
              chunks.current = [];
            };
            mediaRecorder.current = recorder;
            mediaRecorder.current.start();
            setAudioStatus(AudioStatus.inRecording);
          })
          .catch((e) => {
            message.error(
              "录制音频授权失败,请点击设置->隐私设置和安全->网站设置->麦克风，打开允许使用"
            );
          });
      } else {
        message.error("浏览器不支持getUserMedia");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioUrl) {
        window.URL.revokeObjectURL(audioUrl);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>录制音频</div>
      <div className={styles.content}>
        <audio controls src={audioUrl}></audio>
        <Button type="primary" onClick={onStartOrEnd}>
          {audioStatus === AudioStatus.inRecording
            ? "录音中,点击结束"
            : "开始录音"}
        </Button>
        {audioUrl && (
          <a download={fileName} href={audioUrl}>
            下载
          </a>
        )}
      </div>
    </div>
  );
};

export default RecordedAudio;
