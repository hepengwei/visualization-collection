// 将文件字节大小转成带单位的文件大小
export const sizeTostr = (size: number, decimals = 2) => {
  if (size === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

// 将秒数转成时长
export const secondsToDuration = (seconds: number) => {
  if ((!seconds && seconds !== 0) || isNaN(seconds) || !isFinite(seconds))
    return "未知";
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "00"); // 小时
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "00"); // 分钟
  const s = Math.floor((seconds % 3600) % 60)
    .toString()
    .padStart(2, "00"); // 秒
  return `${h}:${m}:${s}`;
};

interface GetImageWidthHeightFn {
  (url: string): Promise<{ width: number; height: number }>;
}
// 获取图片的原始宽高尺寸
export const getImageWidthHeight: GetImageWidthHeightFn = (url: string) => {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = function () {
      resolve({ width: image.width, height: image.height });
    };
    image.onerror = function () {
      reject(new Error("load image error"));
    };
    image.src = url;
  });
};

export interface ImgInfo {
  name: string;
  fileType: string;
  size: number;
  imgUrl: string;
  width: number;
  height: number;
  imageData: ImageData;
  blob: Blob;
}
// 获取解析图片数据
export const getImgInfo = (
  file: File,
  callback: (imgInfo: ImgInfo | null) => void
) => {
  if (!file) {
    callback(null);
    return;
  }
  const { type } = file;
  const typeArr = type.split("/");
  if (typeArr[0] !== "image") {
    callback(null);
    return;
  }
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
              blob,
            };
            callback(imgInfo);
          } else {
            callback(null);
          }
        };
        image.onerror = function () {
          callback(null);
        };
        image.src = dataUrl;
      } else {
        callback(null);
      }
    });
  };
  reader.readAsArrayBuffer(file);
};

// 根据buffer中的文件头信息判断文件类型
export const getImageType = (buffer: Buffer) => {
  let fileType = "";
  if (buffer) {
    const view = new DataView(buffer as any);
    const first4Byte = view.getUint32(0, false);
    const hexValue = Number(first4Byte).toString(16).toUpperCase();
    switch (hexValue) {
      case "FFD8FFDB":
        fileType = "JPG";
        break;
      case "FFD8FFE0":
      case "FFD8FFE1":
      case "FFD8FFE2":
      case "FFD8FFE3":
        fileType = "JPEG";
        break;
      case "89504E47":
        fileType = "PNG";
        break;
      case "47494638":
        fileType = "GIF";
        break;
      case "52494646":
        fileType = "WEBP";
        break;
      default:
        break;
    }
  }
  return fileType;
};

// File或Blob对象转DataURL
export const fileOrBlobToDataURL = (
  obj: File | Blob,
  cb: (result: string | null) => void
) => {
  if (!obj) {
    cb(null);
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(obj);
  reader.onload = function (e) {
    if (e.target) {
      cb(e.target.result as string);
    } else {
      cb(null);
    }
  };
};

// Blob对象转Image
export const blobToImage = (
  blob: Blob,
  cb: (image: HTMLImageElement | null) => void
) => {
  fileOrBlobToDataURL(blob, function (dataUrl: string | null) {
    if (dataUrl) {
      const image = new Image();
      image.src = dataUrl;
    } else {
      cb(null);
    }
  });
};

// ImageData对象转DataURL
export const imageDataToDataURL = (imageData: ImageData) => {
  if (!imageData) {
    return null;
  }
  const { width, height } = imageData;
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = width;
  canvas.height = height;
  ctx.putImageData(imageData, 0, 0, 0, 0, width, height);
  const dataUrl = canvas.toDataURL("image/png");
  return dataUrl;
};

// ImageData对象转Blob
export const imageDataToBlob = (
  imageData: ImageData,
  exportImageType = "png",
  cb: (blob: Blob | null) => void
) => {
  if (!imageData) {
    cb(null);
    return;
  }
  const { width, height } = imageData;
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = width;
  canvas.height = height;
  ctx.putImageData(imageData, 0, 0, 0, 0, width, height);
  const toImageType = `image/${
    exportImageType ? exportImageType.toLowerCase() : "png"
  }`;
  canvas.toBlob(
    (blob: Blob | null) => {
      cb(blob);
    },
    toImageType,
    1
  );
};

// 获取图片二进制数据
export const getCanvasImgData = (
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

// 根据video元素获取图片二进制数据
export const getCanvasImgDataByVideo = (
  video: HTMLVideoElement,
  width: number = 0,
  height: number = 0
) => {
  if (video && width && height) {
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(video, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height) as ImageData;
    return imageData;
  }
  return null;
};

// 根据ImageBitmap获取图片二进制数据
export const getCanvasImgDataByBitmap = (
  imageBitmap: ImageBitmap,
  width: number = 0,
  height: number = 0
) => {
  if (imageBitmap && width && height) {
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(imageBitmap, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height) as ImageData;
    return imageData;
  }
  return null;
};

// 导出文件
export const exportFile = (blob: Blob, fileName: string) => {
  if (!blob) return;
  var a = document.createElement("a");
  a.style.visibility = "hidden";
  document.body.appendChild(a);
  a.download = fileName;
  const objUrl = window.URL.createObjectURL(blob);
  a.href = objUrl;
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(objUrl);
};

// 导出视频
export const exportVideo = (videoChunks: any[], name?: string) => {
  if (!videoChunks || videoChunks.length === 0) return;
  const blob = new Blob(videoChunks, {
    type: `video/webm`,
  });
  let videoName = "video.webm";
  if (name) {
    const arr = name.split(".");
    videoName = `${arr[0]}.webm`;
  }
  exportFile(blob, videoName);
};
