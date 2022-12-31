/**
 * 图片处理工具
 */
import React, { useRef, useState } from "react";
import { Button, message } from "antd";
import { cloneDeep } from "lodash-es";
import { FolderAddOutlined } from "@ant-design/icons";
import Tabs from "./components/Tabs";
import {
  sizeTostr,
  getImageWidthHeight,
  flipSideToSide,
  flipUpsideDown,
  toGrey,
  toBlackAndWhite,
} from "utils/imageUtil";
import styles from "./index.module.scss";

interface ImgInfo {
  name: string;
  type: string;
  size: number;
  imgUrl: string;
  width?: number;
  height?: number;
  imageData?: ImageData;
}

interface ImgStatusInfo {
  flipSideToSideStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  flipUpsideDownStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  toGreyStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
  toBlackAndWhiteStatus: {
    doing: boolean;
    imageData: ImageData | null;
  };
}

const tabsList = [
  { id: "basicOperation", label: "基础操作" },
  { id: "photoCompression", label: "图片压缩" },
];

const defaultImgStatus = {
  flipSideToSideStatus: { doing: false, imageData: null },
  flipUpsideDownStatus: { doing: false, imageData: null },
  toGreyStatus: { doing: false, imageData: null },
  toBlackAndWhiteStatus: { doing: false, imageData: null },
};

const GameImage = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabsList[0].id);
  const [imgDragOver, setImgDragOver] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfo | null>(null);
  const imgStatusInfo = useRef<ImgStatusInfo>(cloneDeep(defaultImgStatus));

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

  const onTabsChange = (tabId: string | number) => {
    setSelectedTabId(tabId as string);
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
            const imgInfo = {
              name: file.name,
              type: file.type,
              size: file.size,
              imgUrl,
            };
            setImgInfo(imgInfo);
          });
      };
      reader.readAsDataURL(file);
    }
    imgStatusInfo.current = cloneDeep(defaultImgStatus);
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

  // 点击左右翻转
  const onFlipSideToSide = () => {
    const { flipSideToSideStatus } = imgStatusInfo.current;
    if (flipSideToSideStatus && flipSideToSideStatus.imageData) {
      exportImage(flipSideToSideStatus.imageData);
    } else if (flipSideToSideStatus.doing) {
      return;
    } else if (imgInfo?.imageData) {
      imgStatusInfo.current.flipSideToSideStatus.doing = true;
      const newImageData = flipSideToSide(imgInfo.imageData);
      if (newImageData) {
        imgStatusInfo.current.flipSideToSideStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      imgStatusInfo.current.flipSideToSideStatus.doing = false;
    }
  };

  // 点击上下翻转
  const onFlipUpsideDown = () => {
    const { flipUpsideDownStatus } = imgStatusInfo.current;
    if (flipUpsideDownStatus && flipUpsideDownStatus.imageData) {
      exportImage(flipUpsideDownStatus.imageData);
    } else if (flipUpsideDownStatus.doing) {
      return;
    } else if (imgInfo?.imageData) {
      flipUpsideDownStatus.doing = true;
      const newImageData = flipUpsideDown(imgInfo.imageData);
      if (newImageData) {
        flipUpsideDownStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      flipUpsideDownStatus.doing = false;
    }
  };

  // 点击灰化
  const onToGrey = () => {
    const { toGreyStatus } = imgStatusInfo.current;
    if (toGreyStatus && toGreyStatus.imageData) {
      exportImage(toGreyStatus.imageData);
    } else if (toGreyStatus.doing) {
      return;
    } else if (imgInfo?.imageData) {
      toGreyStatus.doing = true;
      const newImageData = toGrey(imgInfo.imageData);
      if (newImageData) {
        toGreyStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      toGreyStatus.doing = false;
    }
  };

  // 点击黑白化
  const onToBlackAndWhite = () => {
    const { toBlackAndWhiteStatus } = imgStatusInfo.current;
    if (toBlackAndWhiteStatus && toBlackAndWhiteStatus.imageData) {
      exportImage(toBlackAndWhiteStatus.imageData);
    } else if (toBlackAndWhiteStatus.doing) {
      return;
    } else if (imgInfo?.imageData) {
      toBlackAndWhiteStatus.doing = true;
      const newImageData = toBlackAndWhite(imgInfo.imageData);
      if (newImageData) {
        toBlackAndWhiteStatus.imageData = newImageData;
        exportImage(newImageData);
      } else {
        message.error("转换失败");
      }
      toBlackAndWhiteStatus.doing = false;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tabs
          data={tabsList}
          selectedTabId={selectedTabId}
          onChange={onTabsChange}
        />
        <div
          className={styles.imgBox}
          style={{ borderColor: imgDragOver ? "green" : "#2320e5" }}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {imgInfo ? (
            <div className={styles.fileBox}>
              <img src={imgInfo.imgUrl} alt="" />
              <div className={styles.fileInfo}>
                <div className={styles.item}>文件名：{imgInfo.name}</div>
                <div className={styles.item}>
                  格式：{imgInfo.type.split("/")[1].toUpperCase()}
                </div>
                <div className={styles.item}>
                  尺寸：
                  {imgInfo.width && imgInfo.height
                    ? `${imgInfo.width}x${imgInfo.height}`
                    : "未知"}
                </div>
                <div className={styles.item}>
                  大小：{sizeTostr(imgInfo.size)}
                </div>
              </div>
            </div>
          ) : (
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
          )}
        </div>
        {imgInfo && (
          <div className={styles.operationBtns}>
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onFlipSideToSide}
            >
              左右翻转
            </Button>
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onFlipUpsideDown}
            >
              上下翻转
            </Button>
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onToGrey}
            >
              灰化
            </Button>
            <Button
              type="primary"
              className={styles.operationBtn}
              onClick={onToBlackAndWhite}
            >
              黑白化
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameImage;
