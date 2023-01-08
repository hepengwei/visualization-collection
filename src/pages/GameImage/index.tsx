/**
 * 图片处理工具
 */
import React, { useState } from "react";
import { Button, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import Tabs from "./components/Tabs";
import { fileOrBlobToDataURL, getImageType } from "utils/fileUtil";
import BasicOperation from "./components/BasicOperation";
import Clip from "./components/Clip";
import ChangeSize from "./components/ChangeSize";
import styles from "./index.module.scss";

export interface ImgInfo {
  name: string;
  fileType: string;
  size: number;
  imgUrl: string;
  width: number;
  height: number;
  imageData: ImageData;
}

enum TabId {
  "basicOperation",
  "clip",
  "changeSize",
  "addWatermark",
  "coverWithMosaics",
  "photoCompression",
}

const tabsList = [
  { id: TabId.basicOperation, label: "基础操作" },
  { id: TabId.clip, label: "裁剪" },
  { id: TabId.changeSize, label: "修改尺寸" },
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
    canvas.toBlob(
      (blob: Blob | null) => {
        if (blob) {
          var a = document.createElement("a");
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          let imgName = "image";
          if (imgInfo && imgInfo.name) {
            const arr = imgInfo.name.split(".");
            if (arr.length > 1) {
              arr.splice(arr.length - 1, 1, imgInfo.fileType.toLowerCase());
              imgName = arr.join(".");
            } else {
              arr.push(imgInfo.fileType.toLowerCase());
              imgName = arr.join(".");
            }
          }
          a.download = imgName;
          a.href = window.URL.createObjectURL(blob);
          a.click();
          document.body.removeChild(a);
        }
      },
      `image/${imgInfo?.fileType.toLowerCase() || "png"}`,
      1
    );
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
      let fileType = typeArr[1].toUpperCase();
      var reader = new FileReader();
      reader.onload = function (e: any) {
        const buffer = e.target.result;
        const imageType = getImageType(buffer);
        if (imageType) {
          fileType = imageType;
        }
        const blob = new Blob([buffer]);
        fileOrBlobToDataURL(blob, function (dataUrl: string | null) {
          if (dataUrl) {
            const image = new Image();
            image.onload = function () {
              const width = image.width;
              const height = image.height;
              const imageData = getCanvasImgData(dataUrl, width, height);
              if (imageData) {
                const imgInfo: ImgInfo = {
                  name: file.name,
                  fileType,
                  size: file.size,
                  width,
                  height,
                  imgUrl: dataUrl,
                  imageData,
                };
                setImgInfo(imgInfo);
              } else {
                setImgInfo(null);
                message.error("解析数据失败,请更换其他图片");
              }
            };
            image.onerror = function () {
              setImgInfo(null);
              message.error("解析数据失败,请更换其他图片");
            };
            image.src = dataUrl;
          } else {
            setImgInfo(null);
            message.error("解析数据失败,请更换其他图片");
          }
        });
      };
      reader.readAsArrayBuffer(file);
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
        {imgInfo && selectedTabId === TabId.changeSize && (
          <ChangeSize
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
