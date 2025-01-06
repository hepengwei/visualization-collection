import React, { useState, useRef } from "react";
import { Input, Button, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import { getImgInfo, fileOrBlobToDataURL } from "utils/fileUtil";
import type { ImgInfo } from "utils/fileUtil";
import { saveTextToClip } from "utils/util";
import styles from "./index.module.scss";

const { TextArea } = Input;

const ShearPlate = () => {
  const intl = useIntl();
  const [inputText, setInputText] = useState<string>("");
  const [clipText, setClipText] = useState<string>("");
  const [imgDragOver, setImgDragOver] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfo | null>(null);
  const [clipImgUrl, setClipImgUrl] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSaveTextToClip = () => {
    if (!inputText) {
      message.warning(
        intl.formatMessage({
          id: "page.htmlVision.utilitarianFunction.pleaseEnterText",
        })
      );
      return;
    }
    saveTextToClip(inputText);
    message.success(intl.formatMessage({ id: "common.saveSuccessfully" }));
  };

  const onGetTextFromClip = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then((clipText) => {
        setClipText(clipText);
      });
    } else {
      message.error(intl.formatMessage({ id: "common.failedToObtain2" }));
    }
  };

  const getImageInfo = (files: FileList) => {
    if (files && files.length > 0) {
      getImgInfo(files[0], (imgInfo) => {
        if (!imgInfo) {
          message.error(
            intl.formatMessage({ id: "common.parsingDataFailure" })
          );
        }
        setImgInfo(imgInfo);
      });
    }
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
      message.warning(intl.formatMessage({ id: "common.pleaseUploadPicture" }));
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
      message.success(intl.formatMessage({ id: "common.saveSuccessfully" }));
    } else {
      message.error(intl.formatMessage({ id: "common.saveFailed" }));
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
          message.error(intl.formatMessage({ id: "common.failedToObtain" }));
        }
      });
    } else {
      message.error(intl.formatMessage({ id: "common.failedToObtain" }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: "page.htmlVision.utilitarianFunction.operatingShears",
        })}
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.inputBox}>
            <div className={styles.text}>
              {intl.formatMessage({
                id: "page.htmlVision.utilitarianFunction.saveTextToClipboard",
              })}
            </div>
            <TextArea
              rows={8}
              placeholder={intl.formatMessage({ id: "common.pleaseEnterText" })}
              maxLength={300}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <div className={styles.btns}>
              <Button
                type='primary'
                onClick={onSaveTextToClip}
                style={{ marginTop: 10 }}
              >
                {intl.formatMessage({ id: "common.save" })}
              </Button>
              <Button
                ghost
                onClick={() => {
                  setInputText("");
                  setClipText("");
                }}
                style={{ marginTop: 10 }}
              >
                {intl.formatMessage({ id: "common.clear" })}
              </Button>
            </div>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.text}>
              {intl.formatMessage({
                id: "page.htmlVision.utilitarianFunction.getsTextFromClipboard",
              })}
            </div>
            <TextArea
              rows={8}
              placeholder={intl.formatMessage({ id: "common.getText" })}
              maxLength={300}
              disabled
              value={clipText}
            />
            <div className={styles.btns}>
              <Button
                type='primary'
                onClick={onGetTextFromClip}
                style={{ marginTop: 10 }}
              >
                {intl.formatMessage({ id: "common.get" })}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.inputBox}>
            <div className={styles.text}>
              {intl.formatMessage({
                id: "page.htmlVision.utilitarianFunction.saveImageToClipboard",
              })}
            </div>
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
                  <img src={imgInfo.imgUrl} alt='' />
                </div>
              ) : (
                <div className={styles.emptyBox}>
                  <Button type='primary' className={styles.uploadBtn}>
                    <FolderAddOutlined />
                    {intl.formatMessage({ id: "common.uploadFile" })}
                    <input
                      type='file'
                      accept='image/jpg, image/jpeg, image/png'
                      onChange={onUploadChange}
                    />
                  </Button>
                  <p className={styles.text}>
                    {intl.formatMessage({
                      id: "common.dragTheFileHere",
                    })}
                  </p>
                  <p className={styles.tips}>
                    {intl.formatMessage({
                      id: "common.supportedImageType",
                    })}
                  </p>
                </div>
              )}
            </div>
            <div className={styles.btns}>
              <Button
                type='primary'
                onClick={onSaveImageToClip}
                style={{ marginTop: 10 }}
              >
                {intl.formatMessage({
                  id: "common.save",
                })}
              </Button>
              <Button
                ghost
                onClick={() => {
                  setImgInfo(null);
                  setClipImgUrl("");
                }}
                style={{ marginTop: 10 }}
              >
                {intl.formatMessage({
                  id: "common.clear",
                })}
              </Button>
            </div>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.text}>
              {intl.formatMessage({
                id: "page.htmlVision.utilitarianFunction.getImageFromClipboard",
              })}
            </div>
            <div className={styles.imageBox}>
              <TextArea
                className={styles.textArea}
                placeholder={intl.formatMessage({
                  id: "page.htmlVision.utilitarianFunction.pasteTheImage",
                })}
                rows={8}
                maxLength={300}
                readOnly
                ref={textAreaRef}
                onPaste={onPaste}
              />
              {clipImgUrl && (
                <div className={styles.imgBox}>
                  <img src={clipImgUrl} alt='' />
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
