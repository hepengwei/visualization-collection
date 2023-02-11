import React, { useState, useRef } from "react";
import { Input, Button, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import { getImgInfo, fileOrBlobToDataURL } from "utils/fileUtil";
import type { ImgInfo } from "utils/fileUtil";
import styles from "./index.module.scss";

const { TextArea } = Input;

const ShearPlate = () => {
  const [inputText, setInputText] = useState<string>("");
  const [clipText, setClipText] = useState<string>("");
  const [imgDragOver, setImgDragOver] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfo | null>(null);
  const [clipImgUrl, setClipImgUrl] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSaveTextToClip = () => {
    if (!inputText) {
      message.warning("请先输入文本");
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(inputText);
    } else {
      const input = document.createElement("input");
      input.setAttribute("value", inputText);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    message.success("保存成功");
  };

  const onGetTextFromClip = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then((clipText) => {
        setClipText(clipText);
      });
    } else {
      message.error("获取失败，浏览器不支持");
    }
  };

  const getImageInfo = (files: FileList) => {
    getImgInfo(files, (imgInfo) => {
      if (!imgInfo) {
        message.error("解析数据失败,请更换其他图片");
      }
      setImgInfo(imgInfo);
    });
  };

  const onUploadChange = (e: any) => {
    const { files } = e.target;
    getImageInfo(files);
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
    getImageInfo(files);
  };

  const onSaveImageToClip = async () => {
    if (!imgInfo) {
      message.warning("请先上传图片");
      return;
    }
    if (navigator.clipboard) {
      const { blob } = imgInfo;
      const newBlob = new Blob([blob], { type: "image/png" });
      await navigator.clipboard.write([
        new window.ClipboardItem({
          [`image/png`]: newBlob,
        }),
      ]);
      message.success("保存成功");
    } else {
      console.error("保存失败，浏览器不支持");
    }
  };

  const onPaste = (e: any) => {
    var items = e.clipboardData && e.clipboardData.items;
    var file = null;
    if (items && items.length) {
      // 检索剪切板items
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          file = items[i].getAsFile();
          break;
        }
      }
    }
    if (file) {
      fileOrBlobToDataURL(file, (imgUrl: string | null) => {
        if (imgUrl) {
          setClipImgUrl(imgUrl);
        } else {
          setClipImgUrl("");
          message.error("获取失败");
        }
      });
    } else {
      message.error("获取失败");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>剪切板操作</div>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.inputBox}>
            <div className={styles.text}>保存文本到剪切板</div>
            <TextArea
              rows={8}
              placeholder="请输入文本"
              maxLength={300}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <div className={styles.btns}>
              <Button
                type="primary"
                onClick={onSaveTextToClip}
                style={{ marginTop: 10 }}
              >
                保存
              </Button>
              <Button
                ghost
                onClick={() => {
                  setInputText("");
                  setClipText("");
                }}
                style={{ marginTop: 10 }}
              >
                清空
              </Button>
            </div>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.text}>从剪切板获取文本</div>
            <TextArea
              rows={8}
              placeholder="获取文本"
              maxLength={300}
              disabled
              value={clipText}
            />
            <div className={styles.btns}>
              <Button
                type="primary"
                onClick={onGetTextFromClip}
                style={{ marginTop: 10 }}
              >
                获取
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.inputBox}>
            <div className={styles.text}>保存图片到剪切板</div>
            <div
              className={styles.imageBox}
              style={{
                borderColor: imgDragOver ? "green" : "#ccc",
              }}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              {imgInfo ? (
                <div className={styles.imgBox}>
                  <img src={imgInfo.imgUrl} alt="" />
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
            <div className={styles.btns}>
              <Button
                type="primary"
                onClick={onSaveImageToClip}
                style={{ marginTop: 10 }}
              >
                保存
              </Button>
              <Button
                ghost
                onClick={() => {
                  setImgInfo(null);
                  setClipImgUrl("");
                }}
                style={{ marginTop: 10 }}
              >
                清空
              </Button>
            </div>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.text}>从剪切板获取图片</div>
            <div className={styles.imageBox}>
              <TextArea
                className={styles.textArea}
                placeholder="Ctrl+V粘贴图片"
                rows={8}
                maxLength={300}
                readOnly
                ref={textAreaRef}
                onPaste={onPaste}
              />
              {clipImgUrl && (
                <div className={styles.imgBox}>
                  <img src={clipImgUrl} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShearPlate;
