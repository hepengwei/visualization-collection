/**
 * 图片处理工具-矩形裁剪Tab页
 */
import React from "react";
import RectSelect from "../RectSelect";
import { TabPageProps } from "../../index";

const RectClip = (props: TabPageProps) => {
  return <RectSelect {...props} type="clip" />;
};

export default RectClip;
