/**
 * 图片处理工具-打马赛克Tab页
 */
import React from "react";
import RectSelect from "../RectSelect";
import { TabPageProps } from "../../index";

const CoverWithMosaic = (props: TabPageProps) => {
  return <RectSelect {...props} type="mosaic" />;
};

export default CoverWithMosaic;
