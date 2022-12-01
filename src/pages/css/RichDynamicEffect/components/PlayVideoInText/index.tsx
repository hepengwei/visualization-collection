import React from "react";
import styles from "./index.module.less";

const PlayVideoInText = () => {
  return (
    <div className={styles.container}>
      <video
        muted
        autoPlay
        preload="true"
        loop
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
      >
        <source src="public/vista.mp4"></source>
      </video>
      <p>River</p>
    </div>
  );
};

export default PlayVideoInText;
