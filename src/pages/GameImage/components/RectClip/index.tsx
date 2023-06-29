/**
 * 图片处理工具-矩形裁剪Tab页
 */
import React from "react";
import RectSelect from "../RectSelect";
import { TobPageProps } from "../../index";

const RectClip = (props: TobPageProps) => {
  return <RectSelect {...props} type="clip" />;
};

export default RectClip;
