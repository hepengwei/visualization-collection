/**
 * 图片处理工具
 */
import React, { useState } from "react";
import { Button } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import Tabs from "./components/Tabs";
import { sizeTostr, getImageWidthHeight } from "utils/imageUtil";
import styles from "./index.module.scss";

interface ImgInfo {
  name: string;
  type: string;
  size: number;
  imgUrl: string;
  width?: number;
  height?: number;
}

const tabsList = [
  { id: "basicOperation", label: "基础操作" },
  { id: "photoCompression", label: "图片压缩" },
];

const GameImage = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabsList[0].id);
  const [imgDragOver, setImgDragOver] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfo | null>(null);

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
      reader.onload = (e: any) => {
        const imgUrl = e.target.result;
        getImageWidthHeight(imgUrl)
          .then((res) => {
            const imgInfo = {
              name: file.name,
              type: file.type,
              size: file.size,
              width: res.width,
              height: res.height,
              imgUrl,
            };
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
      </div>
    </div>
  );
};

export default GameImage;
