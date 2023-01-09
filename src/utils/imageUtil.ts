// 将文件字节大小转成带单位的文件大小
export const sizeTostr = (size: number, decimals = 2) => {
  if (size === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
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

// 左右翻转
export const flipSideToSide = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = data[(y * width + width - x - 1) * 4];
        newImgData[startIndex + 1] = data[(y * width + width - x - 1) * 4 + 1];
        newImgData[startIndex + 2] = data[(y * width + width - x - 1) * 4 + 2];
        newImgData[startIndex + 3] = data[(y * width + width - x - 1) * 4 + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 上下翻转
export const flipUpsideDown = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = data[((height - y - 1) * width + x) * 4];
        newImgData[startIndex + 1] =
          data[((height - y - 1) * width + x) * 4 + 1];
        newImgData[startIndex + 2] =
          data[((height - y - 1) * width + x) * 4 + 2];
        newImgData[startIndex + 3] =
          data[((height - y - 1) * width + x) * 4 + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 左旋转
export const leftRotate = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const startIndex = (x * height + y) * 4;
        newImgData[startIndex] = data[(y * width + width - x - 1) * 4];
        newImgData[startIndex + 1] = data[(y * width + width - x - 1) * 4 + 1];
        newImgData[startIndex + 2] = data[(y * width + width - x - 1) * 4 + 2];
        newImgData[startIndex + 3] = data[(y * width + width - x - 1) * 4 + 3];
      }
    }
    const newImageData = new ImageData(newImgData, height, width);
    return newImageData;
  }
  return null;
};

// 右旋转
export const rightRotate = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const startIndex = (x * height + y) * 4;
        newImgData[startIndex] = data[((height - y - 1) * width + x) * 4];
        newImgData[startIndex + 1] =
          data[((height - y - 1) * width + x) * 4 + 1];
        newImgData[startIndex + 2] =
          data[((height - y - 1) * width + x) * 4 + 2];
        newImgData[startIndex + 3] =
          data[((height - y - 1) * width + x) * 4 + 3];
      }
    }
    const newImageData = new ImageData(newImgData, height, width);
    return newImageData;
  }
  return null;
};

// 灰化
export const toGrey = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        const avgColor =
          (data[startIndex] + data[startIndex + 1] + data[startIndex + 2]) / 3;
        newImgData[startIndex] = avgColor;
        newImgData[startIndex + 1] = avgColor;
        newImgData[startIndex + 2] = avgColor;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 黑白化
export const toBlackAndWhite = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        const avgColor =
          (data[startIndex] + data[startIndex + 1] + data[startIndex + 2]) / 3;
        const newColor = avgColor > 127 ? 255 : 0;
        newImgData[startIndex] = newColor;
        newImgData[startIndex + 1] = newColor;
        newImgData[startIndex + 2] = newColor;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 反相色滤镜
export const toOpposite = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = 255 - data[startIndex];
        newImgData[startIndex + 1] = 255 - data[startIndex + 1];
        newImgData[startIndex + 2] = 255 - data[startIndex + 2];
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 红色滤镜
export const toRed = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = data[startIndex];
        newImgData[startIndex + 1] = 0;
        newImgData[startIndex + 2] = 0;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 绿色滤镜
export const toGreen = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = 0;
        newImgData[startIndex + 1] = data[startIndex + 1];
        newImgData[startIndex + 2] = 0;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 蓝色滤镜
export const toBlue = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = 0;
        newImgData[startIndex + 1] = 0;
        newImgData[startIndex + 2] = data[startIndex + 2];
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 红绿色滤镜
export const toRedAndGreen = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = data[startIndex];
        newImgData[startIndex + 1] = data[startIndex + 1];
        newImgData[startIndex + 2] = 0;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 红蓝色滤镜
export const toRedAndBlue = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = data[startIndex];
        newImgData[startIndex + 1] = 0;
        newImgData[startIndex + 2] = data[startIndex + 1];
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 蓝绿色滤镜
export const toBlueAndGreen = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = 0;
        newImgData[startIndex + 1] = data[startIndex + 1];
        newImgData[startIndex + 2] = data[startIndex + 1];
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 卷积计算
const convolutionMatrix = (imageData: ImageData, kernel: number[]) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        for (let i = 0; i < 3; i++) {
          const startIndex = (y * width + x) * i;
          newImgData[startIndex] =
            kernel[0] * data[startIndex - width * 4 - 4] +
            kernel[1] * data[startIndex - width * 4] +
            kernel[2] * data[startIndex - width * 4 + 4] +
            kernel[3] * data[startIndex - 4] +
            kernel[4] * data[startIndex] +
            kernel[5] * data[startIndex + 4] +
            kernel[6] * data[startIndex + width * 4 - 4] +
            kernel[7] * data[startIndex + width * 4] +
            kernel[8] * data[startIndex + width * 4 + 4];
        }
        newImgData[(y * width + x) * 4 + 3] = 255;
      }
    }
    const newImageData = new ImageData(newImgData, width - 1, height - 1);
    return newImageData;
  }
  return null;
};

// 锐化
export const sharpen = (imageData: ImageData) => {
  if (imageData) {
    const kernel = [-1, -1, -1, -1, 9, -1, -1, -1, -1]; // 锐化卷积核
    const newImageData = convolutionMatrix(imageData, kernel);
    return newImageData;
  }
  return null;
};

/**
 * 裁剪矩形图
 * @param imageData ImageData源数据
 * @param newWidth 新图的宽度（retainOriginalSize为true时，宽度为imageData.width）
 * @param newHeight 新图的高度（retainOriginalSize为true时，高度为imageData.height）
 * @param top 新图相对于原图顶部的起始位置
 * @param left 新图相对于原图左侧的起始位置
 * @param retainOriginalSize 是否保留为原图的宽高 (宽高继承原图，多余部分用白色或透明色填充)
 * @param imageType 图片类型 (retainOriginalSize为true时必须传该值)
 * @returns ImageData | null
 */
export const clipRect = (
  imageData: ImageData,
  newWidth: number,
  newHeight: number,
  top: number,
  left: number,
  retainOriginalSize = false,
  imageType?: string
) => {
  if (imageData) {
    const { data, width, height } = imageData;
    let finalLeft = left;
    let finalTop = top;
    let finalWidth = newWidth;
    let finalHeight = newHeight;
    if (finalLeft < 0) {
      finalLeft = 0;
    } else if (finalLeft > width) {
      finalLeft = width;
    }
    if (finalTop < 0) {
      finalTop = 0;
    } else if (finalTop > height) {
      finalTop = height;
    }
    if (finalWidth < 1) {
      finalWidth = 1;
    } else if (finalWidth > width) {
      finalWidth = width;
    }
    if (finalHeight < 1) {
      finalHeight = 1;
    } else if (finalHeight > height) {
      finalHeight = height;
    }
    if (finalLeft + finalWidth > width) {
      finalWidth = width - finalLeft;
    }
    if (finalTop + finalHeight > height) {
      finalHeight = height - finalTop;
    }
    // 保留原尺寸
    if (retainOriginalSize) {
      const newImgData = new Uint8ClampedArray(data.length);
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const startIndex = (y * width + x) * 4;
          if (
            x >= left &&
            x <= left + newWidth &&
            y >= top &&
            y <= top + newHeight
          ) {
            newImgData[startIndex] = data[startIndex];
            newImgData[startIndex + 1] = data[startIndex + 1];
            newImgData[startIndex + 2] = data[startIndex + 2];
            newImgData[startIndex + 3] = data[startIndex + 3];
          } else {
            newImgData[startIndex] = 255;
            newImgData[startIndex + 1] = 255;
            newImgData[startIndex + 2] = 255;
            newImgData[startIndex + 3] =
              imageType && ["JPG", "JPEG"].includes(imageType.toUpperCase())
                ? 255
                : 0;
          }
        }
      }
      const newImageData = new ImageData(newImgData, width, height);
      return newImageData;
    } else {
      const newImgData = new Uint8ClampedArray(finalWidth * finalHeight * 4);
      for (let y = top; y <= top + finalHeight; y++) {
        for (let x = left; x <= left + finalWidth; x++) {
          const startIndex = ((y - top) * finalWidth + x - left) * 4;
          const startIndex2 = (y * width + x) * 4;
          newImgData[startIndex] = data[startIndex2];
          newImgData[startIndex + 1] = data[startIndex2 + 1];
          newImgData[startIndex + 2] = data[startIndex2 + 2];
          newImgData[startIndex + 3] = data[startIndex2 + 3];
        }
      }
      const newImageData = new ImageData(newImgData, finalWidth, finalHeight);
      return newImageData;
    }
  }
  return null;
};

// 修改尺寸
export const changeSize = (
  imgUrl: string,
  width: number,
  height: number,
  newWidth: number,
  newHeight: number,
  maxWidthHeight = 10000
) => {
  if (imgUrl) {
    const img = new Image();
    img.src = imgUrl;
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = maxWidthHeight;
    canvas.height = maxWidthHeight;
    ctx.drawImage(img, 0, 0, width, height, 0, 0, newWidth, newHeight);
    const newImageData = ctx.getImageData(
      0,
      0,
      newWidth,
      newHeight
    ) as ImageData;
    return newImageData;
  }
  return null;
};
