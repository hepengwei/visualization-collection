/**
 * 图片处理工具-打马赛克Tab页
 */
import React from "react";
import RectSelect from "../RectSelect";
import { ImgInfo } from "../../index";

interface CoverWithMosaicProps {
  imgInfo: ImgInfo;
  exportImage: (imageData: ImageData, exportImageType?: string) => void;
  imgDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

const CoverWithMosaic = (props: CoverWithMosaicProps) => {
  return <RectSelect {...props} type="mosaic" />;
};

export default CoverWithMosaic;
