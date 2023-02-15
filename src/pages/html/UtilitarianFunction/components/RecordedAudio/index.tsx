import React, { useEffect, useState, useRef } from "react";
import { Button, message } from "antd";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

enum AudioStatus {
  "ready",
  "inRecording",
}

const RecordedAudio = () => {
  const intl = useIntl();
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
            if (e.message && e.message.includes("not found")) {
              message.error(
                intl.formatMessage({ id: "common.deviceNotFound" })
              );
            } else {
              message.error(
                intl.formatMessage({ id: "common.impowerOpenMicrophone" })
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
      if (audioUrl) {
        window.URL.revokeObjectURL(audioUrl);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: "page.htmlVision.utilitarianFunction.recordAudio",
        })}
      </div>
      <div className={styles.content}>
        <audio controls src={audioUrl}></audio>
        <Button type="primary" onClick={onStartOrEnd}>
          {audioStatus === AudioStatus.inRecording
            ? intl.formatMessage({
                id: "page.htmlVision.utilitarianFunction.whileRecording",
              })
            : intl.formatMessage({
                id: "page.htmlVision.utilitarianFunction.startRecording",
              })}
        </Button>
        {audioUrl && (
          <a download={fileName} href={audioUrl}>
            {intl.formatMessage({ id: "common.download" })}
          </a>
        )}
      </div>
    </div>
  );
};

export default RecordedAudio;
