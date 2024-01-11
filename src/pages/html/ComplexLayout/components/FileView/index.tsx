import React, { useState, useRef, useEffect } from "react";
import {
  Progress,
  Row,
  Col,
  Button,
  Select,
  Popover,
  Upload,
  Modal,
  message,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownOutlined,
  UpOutlined,
  InfoCircleOutlined,
  MergeCellsOutlined,
  SplitCellsOutlined,
  RotateLeftOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  MoreOutlined,
  CloudUploadOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import { cloneDeep } from "lodash-es";
import { sizeTostr } from "utils/fileUtil";
import imgPreview from "./imagePreview";
import styles from "./index.module.scss";

const { Option } = Select;
const { Dragger } = Upload;

interface FileViewProps {
  id?: string;
  disabled?: boolean; // 是否不可修改（包括新增、删除）
  style?: Record<string, any>;
}

interface FileInfo {
  fileId: string;
  fileName: string;
  fileType: string;
  value: string;
  userName: string;
  upTime: string;
  size: string;
}

interface UploadControlType {
  isProgress: boolean; // 是否显示进度条
  percent: number; // 上传进度
  progressTimer: number | null; // 上传时的timer
}

interface ImgObjType {
  imgSrc: string;
  imgScale: number;
  userName: string;
  fileName: string;
  updateTime: string;
  imgOrigin: { width: number; height: number };
  imgRotate: number;
}

const initUploadControl = {
  isProgress: false,
  percent: 0,
  progressTimer: null,
};
const initImgObj = {
  imgSrc: "",
  imgScale: 0,
  userName: "",
  fileName: "",
  updateTime: "",
  imgOrigin: {
    width: 0,
    height: 0,
  },
  imgRotate: 0,
};

const FileView = (props: FileViewProps) => {
  const { id, disabled = false, style = {} } = props;
  const [uploadControl, setUploadControl] =
    useState<UploadControlType>(initUploadControl); // 上传文件时的状态
  const uploadControlRef = useRef<UploadControlType>(initUploadControl);
  const [showInfo, setShowInfo] = useState<boolean>(false); // 是否显示文件信息
  const [imgObj, setImgObj] = useState<ImgObjType>(cloneDeep(initImgObj));
  const imgObjRef = useRef<ImgObjType>(cloneDeep(initImgObj));
  const [filesLoading, setFilesLoading] = useState<boolean>(false); // 是否正在请求文件数据
  const [fileList, setFileList] = useState<FileInfo[]>([]);
  const fileListRef = useRef<FileInfo[]>([]);
  const [curFileInfo, setCurFileInfo] = useState<FileInfo | null>(null);
  const curFileInfoRef = useRef<FileInfo | null>(null);
  const oldFileInfoRef = useRef<FileInfo | null>(null);

  const changeFile = (file: FileInfo | null) => {
    oldFileInfoRef.current = curFileInfoRef.current;
    curFileInfoRef.current = file;
    setCurFileInfo(file);
    let newImgObj = cloneDeep(initImgObj);
    if (file) {
      const img = document.getElementById(
        "attach_image"
      ) as HTMLImageElement | null;
      if (img) {
        img.style.webkitTransform = "rotate(0deg)";
        img.style.top = "0px";
        img.style.left = "0px";
        img.style.width = "unset";
        img.style.height = "unset";
        img.removeAttribute("width");
        img.removeAttribute("height");
      }
      const list = file.value.split("?fileId");
      if (list.length > 1) {
        newImgObj = {
          ...newImgObj,
          imgSrc: `data:image/jpg;base64,${list[1]}`,
        };
      } else {
        newImgObj = {
          ...newImgObj,
          imgSrc: `data:image/jpg;base64,${file.value}`,
        };
      }
    }
    imgObjRef.current = newImgObj;
    setImgObj(newImgObj);
  };

  const getFileType = (fileName: string) => {
    if (fileName) {
      const str = fileName.substring(fileName.lastIndexOf(".") + 1);
      if (str) {
        return str.toLowerCase();
      }
    }
    return "";
  };

  // 获取文件列表数据
  const getFilesData = async (id: string) => {
    // setFilesLoading(true);
    // const res = await request({ url: "", data: { id } });
    // setFilesLoading(false);
    // const newFileList: FileInfo[] = [];
    // if (res && res.code === 200) {
    //   if (res.data.length > 0) {
    //     res.data.forEach((item: Record<string, any>) => {
    //       const file = { ...item };
    //       file.fileId = item.fileId;
    //       file.fileName = item.fileName;
    //       file.fileType = getFileType(item.fileName);
    //       file.value = `${item.fileId}?fileId${item.data}`;
    //       file.upTime = format(item.createTime, "yyyy-MM-dd HH:mm:ss");
    //       file.userNmae = `${item.uploadUserName}/${item.uploadUser}`;
    //       file.size = sizeTostr(item.attachSize);
    //       newFileList.push(file as FileInfo);
    //     });
    //   }
    // } else {
    //   message.error(res.msg);
    // }
    // fileListRef.current = newFileList;
    // setFileList(newFileList);
    // if (newFileList.length > 0) {
    //   changeFile(newFileList[0]);
    // }
  };

  // 将页面重置为初始没有文件时的状态
  const reset = () => {
    uploadControlRef.current = initUploadControl;
    setUploadControl(initUploadControl);
    setFilesLoading(false);
    setShowInfo(false);
    fileListRef.current = [];
    setFileList([]);
    changeFile(null);
  };

  useEffect(() => {
    reset();
    if (id) {
      getFilesData(id);
    }
  }, [id]);

  useEffect(() => {
    if (!oldFileInfoRef.current && curFileInfo) {
      imgPreview();
    }
  }, [curFileInfo]);

  const onDragOver = (e: React.DragEvent) => {
    const dragBoxList = document.getElementsByClassName("ant-upload-drag");
    if (dragBoxList && dragBoxList.length > 0) {
      dragBoxList[0].classList.add(styles.draggerTextBoxHover);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    const dragBoxList = document.getElementsByClassName("ant-upload-drag");
    if (dragBoxList && dragBoxList.length > 0) {
      dragBoxList[0].classList.remove(styles.draggerTextBoxHover);
    }
  };

  const arrowColor = (direction: "left" | "right") => {
    let fileId = "";
    if (direction === "left") {
      fileId = fileListRef.current[0].fileId;
    } else {
      fileId = fileListRef.current[fileListRef.current.length - 1].fileId;
    }
    if (curFileInfoRef.current && fileId === curFileInfoRef.current.fileId) {
      return "#d8d8d8";
    }
    return "#666666";
  };

  // 上传文件前
  const beforeUpload = (file: File) => {
    if (disabled) {
      message.warning("目前状态不允许修改");
      return false;
    }
    const types = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "pdf",
      "doc",
      "cocx",
      "xls",
      "xlsx",
      "rar",
      "zip",
      "7z",
      "wim",
      "tar",
    ];
    const fileType = getFileType(file.name);
    if (!types.includes(fileType)) {
      message.warning("请上传符合格式要求的文件");
      return false;
    }
    if (file.size > 30 * 1024 * 1024) {
      message.warning("单个文件大小不能超过30M");
      return false;
    }
  };

  const updFileInfo = (data: any, file: File) => {
    if (!data) {
      return;
    }
    const fileType = getFileType(data.fileName);
    if (["jpg", "jpeg", "png", "gif"].includes(fileType)) {
      if (file) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (event: any) => {
          const base64Str = window.btoa(
            new Uint8Array(event.target?.result).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          const obj = { ...data };
          obj.fileId = data.fileId;
          obj.fileName = data.fileName;
          obj.fileType = fileType;
          obj.value = base64Str;
          obj.size = sizeTostr(file.size);
          obj.upTime = format(data.createTime, "yyyy-MM-dd HH:mm:ss");
          obj.userNmae = `${data.uploadUserName}/${data.uploadUser}`;
          const newFileList = [...fileListRef.current, obj];
          fileListRef.current = newFileList;
          setFileList(newFileList);
          changeFile(obj);
        };
      }
    } else {
      const obj = { ...data };
      obj.fileId = data.fileId;
      obj.fileName = data.fileName;
      obj.fileType = fileType;
      obj.value = "";
      obj.size = sizeTostr(file.size);
      obj.upTime = format(data.createTime, "yyyy-MM-dd HH:mm:ss");
      obj.userNmae = `${data.uploadUserName}/${data.uploadUser}`;
      const newFileList = [...fileListRef.current, obj];
      fileListRef.current = newFileList;
      setFileList(newFileList);
      changeFile(obj);
    }
  };

  // 上传文件
  const uploadFile = async (options: any) => {
    if (options.event) {
      options.event.preventDefault();
    }
    if (disabled) return;
    if (uploadControlRef.current.isProgress) {
      message.warning("有文件正在上传，请稍侯");
      return;
    }
    const newUploadControl: UploadControlType = {
      ...initUploadControl,
      isProgress: true,
    };
    newUploadControl.progressTimer = window.setInterval(() => {
      if (uploadControlRef.current.percent < 90) {
        const newUpdControl = {
          ...uploadControlRef.current,
          percent:
            uploadControlRef.current.percent + Math.floor(Math.random() * 20),
        };
        uploadControlRef.current = newUpdControl;
        setUploadControl(newUpdControl);
      }
    }, 800);
    uploadControlRef.current = newUploadControl;
    setUploadControl(newUploadControl);
    try {
      // 模拟接口上传
      // const data = new FormData();
      // data.append('multipartFile', options.file.originFileObj);
      setTimeout(() => {
        if (uploadControlRef.current.progressTimer) {
          window.clearInterval(uploadControlRef.current.progressTimer);
        }
        const newUploadControl = { ...initUploadControl };
        uploadControlRef.current = newUploadControl;
        setUploadControl(newUploadControl);
        const res = {
          code: 200,
          data: {
            fileId: Number(
              Math.random().toString().substring(3, 8) + Date.now()
            ).toString(36),
            fileName: options.file.name,
            createTime: new Date().getTime(),
            uploadUserName: "userName",
            uploadUser: "000001",
          },
          msg: "",
        };
        if (res && res.code === 200) {
          updFileInfo(res.data, options.file.originFileObj);
        } else {
          message.error(`上传${options.file.name}失败`);
        }
      }, 2000);
    } catch (e: any) {
      if (uploadControlRef.current.progressTimer) {
        window.clearInterval(uploadControlRef.current.progressTimer);
      }
      const newUploadControl = { ...initUploadControl };
      uploadControlRef.current = newUploadControl;
      setUploadControl(newUploadControl);
      message.error(`上传${options.file.name}失败`);
    }
  };

  // 删除文件
  const deleteFile = async (rowData?: any) => {
    let fileInfo = rowData || curFileInfo;
    if (!fileInfo) {
      message.warning("无文件可进行删除");
      return;
    }
    if (disabled) {
      message.warning("目前状态不允许删除");
      return;
    }
    Modal.confirm({
      title: "删除文件提示",
      content: `确认删除【${fileInfo.fileName}】文件？`,
      icon: <ExclamationCircleOutlined />,
      centered: true,
      onOk: async () => {
        // 模拟接口删除
        message.warning("删除中...");
        setTimeout(() => {
          const res = { code: 200, data: {}, msg: "" };
          if (res && res.code === 200) {
            message.success("删除文件成功");
            const newFileList = fileListRef.current.filter(
              (item: FileInfo) => item.fileId !== fileInfo.fileId
            );
            fileListRef.current = newFileList;
            setFileList(newFileList);
            oldFileInfoRef.current = curFileInfoRef.current;
            if (newFileList.length > 0) {
              changeFile(newFileList[0]);
            } else {
              changeFile(null);
            }
          } else {
            message.error(res.msg);
          }
        }, 2000);
      },
    });
  };

  // 下载文件
  const downloadFile = async () => {
    if (!curFileInfo) return;
    // 模拟接口下载
    message.warning("下载中...");
    setTimeout(() => {
      message.success("下载成功");
    }, 2000);
  };

  // 设置显示图片
  const drawImage = () => {
    const img = document.getElementById(
      "attach_image"
    ) as HTMLImageElement | null;
    if (img) {
      const newImgObj = {
        ...imgObjRef.current,
        imgScale: img.clientHeight / img.clientWidth,
        imgOrigin: { width: img.clientWidth, height: img.clientHeight },
      };
      imgObjRef.current = newImgObj;
      setImgObj(newImgObj);
      img.style.width = "700px";
      img.style.height = `${newImgObj.imgScale * 700}px`;
    }
  };

  // 操作图片
  const changeImg = (type: number) => {
    const img = document.getElementById(
      "attach_image"
    ) as HTMLImageElement | null;
    switch (type) {
      case 0:
        if (img && imgObjRef.current) {
          img.style.width = "700px";
          img.style.height = `${imgObjRef.current.imgScale * 700}px`;
          img.style.top = "0px";
          img.style.left = "0px";
        }
        break;
      case 1:
        if (img && imgObjRef.current) {
          img.style.width = `${img.clientWidth + 50}px`;
          img.style.height = `${
            img.clientHeight + imgObjRef.current.imgScale * 50
          }px`;
        }
        break;
      case 2:
        if (img && imgObjRef.current) {
          img.style.width = `${img.clientWidth - 50}px`;
          img.style.height = `${
            img.clientHeight - imgObjRef.current.imgScale * 50
          }px`;
        }
        break;
      case 3:
        if (img && imgObjRef.current) {
          img.style.width = `${imgObjRef.current.imgOrigin.width}px`;
          img.style.height = `${imgObjRef.current.imgOrigin.height}px`;
          img.style.top = "0px";
          img.style.left = "0px";
        }
        break;
      case 4:
        if (img && imgObjRef.current) {
          const newImgObj = {
            ...imgObjRef.current,
            imgRotate: imgObjRef.current.imgRotate + 1,
          };
          imgObjRef.current = newImgObj;
          setImgObj(newImgObj);
          img.style.webkitTransform = `rotate(${
            -90 * imgObjRef.current.imgRotate
          }deg)`;
        }
        break;
      case 5:
        deleteFile();
        break;
      case 6:
        downloadFile();
        break;
      case 7:
        for (let i = 0, l = fileListRef.current.length; i < l; i++) {
          const item = fileListRef.current[i];
          if (
            item.fileId === curFileInfoRef.current?.fileId &&
            i < fileListRef.current.length - 1
          ) {
            changeFile(fileListRef.current[i + 1]);
            break;
          }
        }
        break;
      case 8:
        for (let i = 0, l = fileListRef.current.length; i < l; i++) {
          const item = fileListRef.current[i];
          if (item.fileId === curFileInfoRef.current?.fileId && i > 0) {
            changeFile(fileListRef.current[i - 1]);
            break;
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container} style={style}>
      <div className={styles.tableLy}>
        <div
          style={{
            width: "860px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "87vh",
              minHeight: "700px",
              backgroundImage: "linear-gradient(135deg, #224141, #162a2a)",
            }}
          >
            <div className={styles.viewContainer}>
              {uploadControl.isProgress && (
                <div className={styles.progress}>
                  <Progress
                    style={{ width: "400px" }}
                    percent={uploadControl.percent}
                    showInfo={false}
                  />
                  <span style={{ marginTop: "16px" }}>
                    上传中，请稍候...
                    {uploadControl.percent > 100 ? 100 : uploadControl.percent}%
                  </span>
                </div>
              )}

              <div id="attach_imgDiv" className={styles.imgDiv}>
                {curFileInfo && (
                  <div>
                    {["jpg", "jpeg", "png", "gif"].includes(
                      curFileInfo?.fileType || ""
                    ) && (
                      <img
                        id="attach_image"
                        src={imgObj?.imgSrc}
                        style={{ position: "absolute", top: 0, left: 0 }}
                        onLoad={drawImage}
                        alt=""
                      />
                    )}
                    {[
                      "pdf",
                      "doc",
                      "cocx",
                      "xls",
                      "xlsx",
                      "rar",
                      "zip",
                      "7z",
                      "wim",
                      "tar",
                    ].includes(curFileInfo?.fileType || "") && (
                      <div className={styles.downLoadTip}>
                        如果想要浏览该文件，您可以
                        <Button type="link" onClick={() => changeImg(6)}>
                          点击下载
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                {!curFileInfo && !uploadControl.isProgress && (
                  <div className={styles.emptyTip}>
                    <div style={{ width: "100%", color: "#333333" }}>
                      请上传文件
                    </div>
                    <div
                      style={{
                        width: "100%",
                        color: "#ababab",
                        marginTop: "10px",
                        lineHeight: "20px",
                      }}
                    >
                      不超过30M,
                      <br />
                      支持jpg,jpeg,png,gif格式的文件
                    </div>
                  </div>
                )}
                {curFileInfo && (
                  <>
                    <span
                      className={`${styles.arrowIcon} ${styles.leftArrow}`}
                      style={{ backgroundColor: arrowColor("left") }}
                      onClick={() => changeImg(8)}
                    >
                      <LeftOutlined />
                    </span>
                    <span
                      className={`${styles.arrowIcon} ${styles.rightArrow}`}
                      style={{ backgroundColor: arrowColor("right") }}
                      onClick={() => changeImg(7)}
                    >
                      <RightOutlined />
                    </span>
                  </>
                )}
              </div>
              {showInfo && (
                <div className={styles.imgInfo}>
                  <Row>
                    <Col span={24}>
                      <span style={{ fontSize: "14px" }}>
                        文件名：{curFileInfo?.fileName}
                      </span>
                    </Col>
                    <Col span={16}>
                      <span style={{ fontSize: "14px" }}>
                        上传者：{curFileInfo?.userName}
                      </span>
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "14px" }}>
                        上传时间：{curFileInfo?.upTime}
                      </span>
                    </Col>
                  </Row>
                </div>
              )}
              {curFileInfo && (
                <div className={styles.imgOperate}>
                  <div className={styles.left}>
                    <Select
                      placeholder="请选择"
                      style={{ width: "300px" }}
                      size="small"
                      value={curFileInfo.fileId}
                      loading={filesLoading}
                      onChange={(value) => {
                        let file = null;
                        for (
                          let i = 0, l = fileListRef.current.length;
                          i < l;
                          i++
                        ) {
                          const item = fileListRef.current[i];
                          if (item.fileId === value) {
                            file = item;
                            break;
                          }
                        }
                        changeFile(file);
                      }}
                    >
                      {fileList.map((item: any, index: number) => (
                        <Option value={item.fileId} key={item.fileId}>{`${
                          index + 1
                        }/${fileList.length}：${item.fileName}`}</Option>
                      ))}
                    </Select>
                    <span
                      onClick={() => changeImg(7)}
                      className={`${styles.iconDiv} ${styles.xiangXia}`}
                    >
                      <DownOutlined />
                    </span>
                    <span
                      onClick={() => changeImg(8)}
                      className={`${styles.iconDiv} ${styles.xiangShang}`}
                    >
                      <UpOutlined />
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span
                      className={styles.iconDiv}
                      onClick={() => setShowInfo(!showInfo)}
                    >
                      <InfoCircleOutlined />
                    </span>
                    <span
                      className={styles.iconDiv}
                      onClick={() => changeImg(0)}
                    >
                      <MergeCellsOutlined />
                    </span>
                    <span
                      className={styles.iconDiv}
                      onClick={() => changeImg(3)}
                    >
                      <SplitCellsOutlined />
                    </span>
                    <span
                      className={styles.iconDiv}
                      onClick={() => changeImg(4)}
                    >
                      <RotateLeftOutlined />
                    </span>
                    <span
                      className={styles.iconDiv}
                      onClick={() => changeImg(1)}
                    >
                      <ZoomInOutlined />
                    </span>
                    <span
                      className={styles.iconDiv}
                      onClick={() => changeImg(2)}
                    >
                      <ZoomOutOutlined />
                    </span>
                    <Popover
                      style={{ width: "80px" }}
                      content={
                        <div className={styles.moreOperate}>
                          <span
                            className={styles.poperSpan}
                            onClick={() => changeImg(6)}
                          >
                            下载文件
                          </span>
                          <span
                            className={styles.poperSpan}
                            onClick={() => changeImg(5)}
                          >
                            删除文件
                          </span>
                        </div>
                      }
                    >
                      <span className={styles.iconDiv}>
                        <MoreOutlined />
                      </span>
                    </Popover>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.fileContainer}>
            <Dragger
              className={styles.draggerBox}
              multiple
              showUploadList={false}
              disabled={disabled}
              beforeUpload={beforeUpload}
              customRequest={() => {}}
              onDrop={(e) => e.preventDefault()}
              onChange={uploadFile}
            >
              <div
                className={styles.draggerTextBox}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDragLeave}
              >
                <div className={styles.firstLine}>
                  <CloudUploadOutlined />
                  <span>将文件拖拽到此处，或</span>
                  <span className={disabled ? "" : styles.linkBtn}>
                    点击上传
                  </span>
                </div>
                <div className={styles.secondLine}>
                  系统支持的格式为jpg,jpeg,png,gif,pdf,doc,docx,xls,xlsx,rar,zip,7z,wim,tar的文件
                </div>
              </div>
            </Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileView;
