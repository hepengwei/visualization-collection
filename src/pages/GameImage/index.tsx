/**
 * 图片处理工具
 */
import React, { useState } from "react";
import { Button } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import Tabs from "./components/Tabs";
import { getImageWidthHeight } from "utils/imageUtil";
import BasicOperation from "./components/BasicOperation";
import Clip from "./components/Clip";
import styles from "./index.module.scss";

export interface ImgInfo {
  name: string;
  type: string;
  size: number;
  imgUrl: string;
  width: number;
  height: number;
  imageData?: ImageData;
}

enum TabId {
  "basicOperation",
  "clip",
  "addWatermark",
  "coverWithMosaics",
  "photoCompression",
}

const tabsList = [
  { id: TabId.basicOperation, label: "基础操作" },
  { id: TabId.clip, label: "裁剪" },
  { id: TabId.addWatermark, label: "添加水印" },
  { id: TabId.coverWithMosaics, label: "打马赛克" },
  { id: TabId.photoCompression, label: "图片压缩" },
];

const GameImage = () => {
  const [selectedTabId, setSelectedTabId] = useState<TabId>(tabsList[0].id);
  const [imgDragOver, setImgDragOver] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfo | null>(null);

  // 获取图片二进制数据
  const getCanvasImgData = (
    imgUrl: string,
    width: number = 0,
    height: number = 0
  ) => {
    if (imgUrl && width && height) {
      const img = new Image();
      img.src = imgUrl;
      const canvas = document.createElement("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height) as ImageData;
      return imageData;
    }
    return null;
  };

  // 导出图片
  const exportImage = (imageData: ImageData) => {
    if (!imageData) return;
    const { width, height } = imageData;
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(imageData, 0, 0, 0, 0, width, height);
    canvas.toBlob((blob: Blob | null) => {
      if (blob) {
        var a = document.createElement("a");
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        a.download = imgInfo?.name || "image";
        // a.download = `${imgInfo?.name}.${imgInfo?.type.split("/")[1]}`;
        a.href = window.URL.createObjectURL(blob);

        a.click();
        document.body.removeChild(a);
      }
    });
  };

  const onTabsChange = (tabId: TabId) => {
    setSelectedTabId(tabId);
  };

  const getImgInfo = (files: FileList) => {
    if (!files) return;
    for (let i = 0, l = files.length; i < l; i++) {
      const file = files[i];
      const { type } = file;
      const typeArr = type.split("/");
      if (typeArr[0] !== "image") return;
      var reader = new FileReader();
      reader.onload = function (e: any) {
        const imgUrl = e.target.result;
        getImageWidthHeight(imgUrl)
          .then((res) => {
            const width = res.width;
            const height = res.height;
            const imgInfo: ImgInfo = {
              name: file.name,
              type: file.type,
              size: file.size,
              width,
              height,
              imgUrl,
            };

            const imageData = getCanvasImgData(imgUrl, width, height);
            if (imageData) {
              imgInfo.imageData = imageData;
            }

            setImgInfo(imgInfo);
          })
          .catch(() => {
            setImgInfo(null);
          });
      };
      reader.readAsDataURL(file);
    }
  };

  const onUploadChange = (e: any) => {
    const { files } = e.target;
    getImgInfo(files);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!imgDragOver) {
      setImgDragOver(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    imgDragOver && setImgDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    imgDragOver && setImgDragOver(false);
    const { files } = e.dataTransfer;
    getImgInfo(files);
  };

  const onClear = () => {
    setImgInfo(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tabs
          data={tabsList}
          selectedTabId={selectedTabId}
          onChange={onTabsChange}
        />
        {!imgInfo && (
          <div
            className={styles.imgBox}
            style={{ borderColor: imgDragOver ? "green" : "#2320e5" }}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className={styles.emptyBox}>
              <Button type="primary" className={styles.uploadBtn}>
                <FolderAddOutlined />
                上传文件
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={onUploadChange}
                />
              </Button>
              <p className={styles.text}>或将文件拖到此处</p>
              <p className={styles.tips}>支持jpg、jpeg、png格式</p>
            </div>
          </div>
        )}
        {imgInfo && selectedTabId === TabId.basicOperation && (
          <BasicOperation
            imgInfo={imgInfo}
            exportImage={exportImage}
            imgDragOver={imgDragOver}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClear={onClear}
          />
        )}
        {imgInfo && selectedTabId === TabId.clip && (
          <Clip
            imgInfo={imgInfo}
            exportImage={exportImage}
            imgDragOver={imgDragOver}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClear={onClear}
          />
        )}
      </div>
    </div>
  );
};

export default GameImage;
