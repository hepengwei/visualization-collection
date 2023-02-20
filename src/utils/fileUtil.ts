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
  files: FileList,
  callback: (imgInfo: ImgInfo | null) => void
) => {
  if (!files) {
    callback(null);
  }
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
  }
};

// 根据buffer中的文件头信息判断图片类型
export const getImageType = (buffer: Buffer) => {
  let fileType = "";
  if (buffer) {
    const view = new DataView(buffer);
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

// ImageData对象转Blob
export const imageDataToBlob = (
  imageData: ImageData,
  exportImageType = "PNG",
  callback: (blob: Blob | null) => void
) => {
  if (!imageData) {
    callback(null);
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
      callback(blob);
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
  console.log(333, imageBitmap);
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

// 导出图片
export const exportToImage = (blob: Blob, imgName: string) => {
  if (!blob) return;
  var a = document.createElement("a");
  a.style.visibility = "hidden";
  document.body.appendChild(a);
  a.download = imgName;
  const objUrl = window.URL.createObjectURL(blob);
  a.href = objUrl;
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(objUrl);
};
