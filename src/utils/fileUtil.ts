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
