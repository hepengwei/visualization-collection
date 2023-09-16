/**
 * 视频处理工具-旋转Tab页
 */
import React from "react";
import { TabPageProps } from "../../index";
import FileBox from "../FileBox";

const Rotate = (props: TabPageProps) => {
  const { videoInfo, videoDragOver, onDragOver, onDragLeave, onDrop, onClear } =
    props;

  return (
    <div>
      <FileBox
        videoInfo={videoInfo}
        videoDragOver={videoDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
    </div>
  );
};

export default Rotate;
