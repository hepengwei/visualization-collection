/**
 * 图片处理工具-打马赛克Tab页
 */
import React from "react";
import RectSelect from "../RectSelect";
import { TobPageProps } from "../../index";

const CoverWithMosaic = (props: TobPageProps) => {
  return <RectSelect {...props} type="mosaic" />;
};

export default CoverWithMosaic;
