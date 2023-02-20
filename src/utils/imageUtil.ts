import UPNG from "./UPNG";

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

// 红灰色滤镜
export const toRedAndGrey = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        const greyColor = (data[startIndex + 1] + data[startIndex + 2]) / 2;
        newImgData[startIndex] = data[startIndex];
        newImgData[startIndex + 1] = greyColor;
        newImgData[startIndex + 2] = greyColor;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 绿灰色滤镜
export const toGreenAndGrey = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        const greyColor = (data[startIndex] + data[startIndex + 2]) / 2;
        newImgData[startIndex] = greyColor;
        newImgData[startIndex + 1] = data[startIndex + 1];
        newImgData[startIndex + 2] = greyColor;
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 蓝灰色滤镜
export const toBlueAndGrey = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        const greyColor = (data[startIndex] + data[startIndex + 1]) / 2;
        newImgData[startIndex] = greyColor;
        newImgData[startIndex + 1] = greyColor;
        newImgData[startIndex + 2] = data[startIndex + 2];
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
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

// 边缘锐化
export const marginSharpen = (imageData: ImageData) => {
  if (imageData) {
    const kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1]; // 边缘化卷积核
    const newImageData = convolutionMatrix(imageData, kernel);
    return newImageData;
  }
  return null;
};

// JPG转PNG
export const jpgToPng = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = data[startIndex];
        newImgData[startIndex + 1] = data[startIndex + 1];
        newImgData[startIndex + 2] = data[startIndex + 2];
        newImgData[startIndex + 3] = 255;
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// PNG转JPG
export const pngToJpg = (imageData: ImageData) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        if (data[startIndex + 3] === 0) {
          newImgData[startIndex] = 255;
          newImgData[startIndex + 1] = 255;
          newImgData[startIndex + 2] = 255;
          newImgData[startIndex + 3] = 255;
        } else {
          const newColor = colorStacks(
            [
              data[startIndex],
              data[startIndex + 1],
              data[startIndex + 2],
              data[startIndex + 3],
            ],
            [255, 255, 255, 255]
          );
          newImgData[startIndex] = newColor[0];
          newImgData[startIndex + 1] = newColor[1];
          newImgData[startIndex + 2] = newColor[2];
          newImgData[startIndex + 3] = newColor[3];
        }
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

/**
 * 矩形裁剪
 * @param imageData ImageData源数据
 * @param newWidth 新图的宽度（retainOriginalSize为true时，宽度为imageData.width）
 * @param newHeight 新图的高度（retainOriginalSize为true时，高度为imageData.height）
 * @param top 新图相对于原图顶部的起始位置
 * @param left 新图相对于原图左侧的起始位置
 * @param retainOriginalSize 是否保留为原图的宽高 (宽高继承原图，多余部分用白色或透明色填充)
 * @param imageType 图片类型 (retainOriginalSize为true时必须传该值)
 * @returns ImageData | null
 */
export const rectClip = (
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
            x >= finalLeft &&
            x <= finalLeft + finalWidth &&
            y >= finalTop &&
            y <= finalTop + finalHeight
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
      for (let y = finalTop; y <= finalTop + finalHeight; y++) {
        for (let x = finalLeft; x <= finalLeft + finalWidth; x++) {
          const startIndex = ((y - finalTop) * finalWidth + x - finalLeft) * 4;
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

/**
 * 圆角裁剪
 * @param imageData ImageData源数据
 * @param borderRadius 圆角半径
 * @param imageType 图片类型
 * @param jpgToPNG 是否为JPG转成PNG
 * @returns ImageData | null
 */
export const radiusClip = (
  imageData: ImageData,
  borderRadius: number,
  imageType: string,
  jpgToPNG?: boolean
) => {
  if (imageData) {
    const { data, width, height } = imageData;
    let finalRadius = borderRadius;
    if (finalRadius > Math.floor(width / 2)) {
      finalRadius = Math.floor(width / 2);
    }
    if (finalRadius > Math.floor(height / 2)) {
      finalRadius = Math.floor(height / 2);
    }
    if (finalRadius < 0) {
      finalRadius = 0;
    }
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        let l = -1;
        if (x < finalRadius) {
          if (y < finalRadius) {
            l = Math.sqrt(
              Math.pow(finalRadius - x - 1, 2) +
                Math.pow(finalRadius - y - 1, 2)
            );
          } else if (y > height - finalRadius - 1) {
            l = Math.sqrt(
              Math.pow(finalRadius - x - 1, 2) +
                Math.pow(y - (height - finalRadius), 2)
            );
          }
        } else if (x > width - finalRadius - 1) {
          if (y < finalRadius) {
            l = Math.sqrt(
              Math.pow(x - (width - finalRadius), 2) +
                Math.pow(finalRadius - y - 1, 2)
            );
          } else if (y > height - finalRadius - 1) {
            l = Math.sqrt(
              Math.pow(x - (width - finalRadius), 2) +
                Math.pow(y - (height - finalRadius), 2)
            );
          }
        }
        if (Math.round(l) > finalRadius) {
          newImgData[startIndex] = 255;
          newImgData[startIndex + 1] = 255;
          newImgData[startIndex + 2] = 255;
          newImgData[startIndex + 3] =
            jpgToPNG || imageType.toUpperCase() === "PNG" ? 0 : 255;
        } else {
          newImgData[startIndex] = data[startIndex];
          newImgData[startIndex + 1] = data[startIndex + 1];
          newImgData[startIndex + 2] = data[startIndex + 2];
          newImgData[startIndex + 3] =
            jpgToPNG || imageType.toUpperCase() === "PNG"
              ? data[startIndex + 3]
              : 255;
        }
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
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

// 修改亮度
export const changeBrightness = (imageData: ImageData, changeNum: number) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        newImgData[startIndex] = Math.max(
          Math.min(data[startIndex] + changeNum, 255),
          0
        );
        newImgData[startIndex + 1] = Math.max(
          Math.min(data[startIndex + 1] + changeNum, 255),
          0
        );
        newImgData[startIndex + 2] = Math.max(
          Math.min(data[startIndex + 2] + changeNum, 255),
          0
        );
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 修改透明度
export const changeDiaphaneity = (
  imageData: ImageData,
  value: number,
  fixedDiaphaneity = false
) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        if (data[startIndex + 3] === 0) {
          newImgData[startIndex] = 255;
          newImgData[startIndex + 1] = 255;
          newImgData[startIndex + 2] = 255;
        } else {
          newImgData[startIndex] = data[startIndex];
          newImgData[startIndex + 1] = data[startIndex + 1];
          newImgData[startIndex + 2] = data[startIndex + 2];
        }
        let a = data[startIndex + 3];
        if (fixedDiaphaneity) {
          a = Math.max(Math.min(Math.floor(255 * value), 255), 0);
        } else {
          a = Math.max(Math.min(Math.floor(a + 255 * value), 255), 0);
        }
        newImgData[startIndex + 3] = a;
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 添加水印
export const addWatermark = (
  imageData: ImageData,
  watermarkImageData: ImageData,
  top: number,
  left: number
) => {
  if (imageData && watermarkImageData) {
    const { data, width, height } = imageData;
    const {
      data: watermarkData,
      width: watermarkWidth,
      height: watermarkHeight,
    } = watermarkImageData;
    let finalTop = top;
    let finalLeft = left;
    if (top + watermarkHeight > height) {
      finalTop = height - watermarkHeight;
    }
    if (left + watermarkWidth > width) {
      finalLeft = width - watermarkWidth;
    }
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        if (
          x < finalLeft ||
          x > finalLeft + watermarkWidth ||
          y <= finalTop ||
          y >= finalTop + watermarkHeight
        ) {
          newImgData[startIndex] = data[startIndex];
          newImgData[startIndex + 1] = data[startIndex + 1];
          newImgData[startIndex + 2] = data[startIndex + 2];
          newImgData[startIndex + 3] = data[startIndex + 3];
        } else {
          const watermarkStartIndex =
            (y * width +
              x -
              ((finalTop + 1) * width +
                (y - (finalTop + 1)) * (width - watermarkWidth)) +
              watermarkWidth -
              finalLeft -
              1) *
            4;
          const aboveColor: [number, number, number, number] = [
            watermarkData[watermarkStartIndex],
            watermarkData[watermarkStartIndex + 1],
            watermarkData[watermarkStartIndex + 2],
            watermarkData[watermarkStartIndex + 3],
          ];
          const belowColor: [number, number, number, number] = [
            data[startIndex],
            data[startIndex + 1],
            data[startIndex + 2],
            data[startIndex + 3],
          ];
          const finalColor = colorStacks(aboveColor, belowColor);
          newImgData[startIndex] = finalColor[0];
          newImgData[startIndex + 1] = finalColor[1];
          newImgData[startIndex + 2] = finalColor[2];
          newImgData[startIndex + 3] = finalColor[3];
        }
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

/**
 * 打马赛克
 * @param imageData ImageData源数据
 * @param width 马赛克区域的宽度
 * @param height 马赛克区域的高度
 * @param top 马赛克相对于顶部的起始位置
 * @param left 马塞克相对于左侧的起始位置
 * @param mosaicSize 马塞克颗粒的大小
 * @returns ImageData | null
 */
export const mosaic = (
  imageData: ImageData,
  mosaicWidth: number,
  mosaicHeight: number,
  top: number,
  left: number,
  mosaicSize = 10
) => {
  if (imageData) {
    const { data, width, height } = imageData;
    let finalLeft = left;
    let finalTop = top;
    let finalWidth = mosaicWidth;
    let finalHeight = mosaicHeight;
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

    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        if (
          x >= finalLeft &&
          x <= finalLeft + finalWidth &&
          y >= finalTop &&
          y <= finalTop + finalHeight
        ) {
          const boxXIndex = Math.floor((x - finalLeft) / mosaicSize);
          const boxYIndex = Math.floor((y - finalTop) / mosaicSize);
          let mosaicBoxColorX = Math.floor(
            mosaicSize * (boxXIndex + 1) - mosaicSize / 2 + finalLeft
          );
          let mosaicBoxColorY = Math.floor(
            mosaicSize * (boxYIndex + 1) - mosaicSize / 2 + finalTop
          );
          if (mosaicBoxColorX > width - 1) {
            mosaicBoxColorX = width - 1;
          }
          if (mosaicBoxColorY > height - 1) {
            mosaicBoxColorY = height - 1;
          }
          const mosaicBoxColorIndex =
            (mosaicBoxColorY * width + mosaicBoxColorX) * 4;
          newImgData[startIndex] = data[mosaicBoxColorIndex];
          newImgData[startIndex + 1] = data[mosaicBoxColorIndex + 1];
          newImgData[startIndex + 2] = data[mosaicBoxColorIndex + 2];
          newImgData[startIndex + 3] = data[mosaicBoxColorIndex + 3];
        } else {
          newImgData[startIndex] = data[startIndex];
          newImgData[startIndex + 1] = data[startIndex + 1];
          newImgData[startIndex + 2] = data[startIndex + 2];
          newImgData[startIndex + 3] = data[startIndex + 3];
        }
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 图片压缩
export const compression = async (
  imageUrl: string | ImageData,
  width: number,
  height: number,
  imageType: string,
  compressionDegree: number,
  cb: (blob: Blob | null) => void
) => {
  if (imageUrl && imageType) {
    const degree = compressionDegree / 100;
    if (["JPG", "JPEG"].includes(imageType.toUpperCase())) {
      const img = new Image();
      img.src = imageUrl as string;
      const canvas = document.createElement("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob: Blob | null) => {
          cb && cb(blob);
        },
        `image/${imageType.toLowerCase()}`,
        degree
      );
    } else {
      const bit = Math.floor(degree * 256);
      const png = UPNG.encode(
        [(imageUrl as ImageData).data.buffer],
        width,
        height,
        bit
      );
      const blob = new Blob([png]);
      cb && cb(blob);
    }
  } else {
    cb && cb(null);
  }
};

// 根据AI识别的人像数据算出界面中需要显示的最终数据
export const getImageDataByAIData = (
  originalImageData: ImageData,
  AIImageData: ImageData,
  options: {
    backgroundColor: { r: number; g: number; b: number; a: number };
    changeIntoColor: { r: number; g: number; b: number; a: number };
  } = {
    backgroundColor: { r: 0, g: 0, b: 0, a: 255 },
    changeIntoColor: { r: 0, g: 0, b: 0, a: 0 },
  }
) => {
  if (originalImageData) {
    if (AIImageData && options) {
      const { data, width, height } = originalImageData;
      const { data: AIData } = AIImageData;
      const newImgData = new Uint8ClampedArray(data.length);
      const { backgroundColor, changeIntoColor } = options;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const startIndex = (y * width + x) * 4;
          const r = AIData[startIndex];
          const g = AIData[startIndex + 1];
          const b = AIData[startIndex + 2];
          const a = AIData[startIndex + 3];
          if (
            r === backgroundColor.r &&
            g === backgroundColor.g &&
            b === backgroundColor.b &&
            a === backgroundColor.a &&
            changeIntoColor.a !== 0
          ) {
            newImgData[startIndex] = changeIntoColor.r;
            newImgData[startIndex + 1] = changeIntoColor.g;
            newImgData[startIndex + 2] = changeIntoColor.b;
            newImgData[startIndex + 3] = changeIntoColor.a;
          } else {
            newImgData[startIndex] = data[startIndex];
            newImgData[startIndex + 1] = data[startIndex + 1];
            newImgData[startIndex + 2] = data[startIndex + 2];
            newImgData[startIndex + 3] = data[startIndex + 3];
          }
        }
      }
      const newImageData = new ImageData(newImgData, width, height);
      return newImageData;
    }
    return originalImageData;
  }
  return null;
};

// 卷积算法
const convolutionMatrix = (imageData: ImageData, kernel: number[]) => {
  if (imageData) {
    const { data, width, height } = imageData;
    const newImgData = new Uint8ClampedArray(data.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const startIndex = (y * width + x) * 4;
        for (let i = 0; i < 3; i++) {
          const index = startIndex + i;
          if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
            newImgData[index] = data[index];
          } else {
            newImgData[index] =
              kernel[0] * data[index - width * 4 - 4] +
              kernel[1] * data[index - width * 4] +
              kernel[2] * data[index - width * 4 + 4] +
              kernel[3] * data[index - 4] +
              kernel[4] * data[index] +
              kernel[5] * data[index + 4] +
              kernel[6] * data[index + width * 4 - 4] +
              kernel[7] * data[index + width * 4] +
              kernel[8] * data[index + width * 4 + 4];
          }
        }
        newImgData[startIndex + 3] = data[startIndex + 3];
      }
    }
    const newImageData = new ImageData(newImgData, width, height);
    return newImageData;
  }
  return null;
};

// 颜色叠加算法
const colorStacks = (
  aboveColor: [number, number, number, number],
  belowColor: [number, number, number, number]
) => {
  if (
    aboveColor &&
    aboveColor.length === 4 &&
    belowColor &&
    belowColor.length === 4
  ) {
    const aboveA = aboveColor[3];
    const belowA = belowColor[3];
    if (aboveA === 255 || belowA === 0) {
      return aboveColor;
    } else if (aboveA === 0) {
      return belowColor;
    } else {
      const aboveDiaphaneity = aboveA / 255;
      const belowDiaphaneity = belowA / 255;
      const newColorR = Math.max(
        Math.min(
          Math.floor(
            aboveColor[0] * aboveDiaphaneity +
              belowColor[0] * belowDiaphaneity * (1 - aboveDiaphaneity)
          ),
          255
        ),
        0
      );
      const newColorG = Math.max(
        Math.min(
          Math.floor(
            aboveColor[1] * aboveDiaphaneity +
              belowColor[1] * belowDiaphaneity * (1 - aboveDiaphaneity)
          ),
          255
        ),
        0
      );
      const newColorB = Math.max(
        Math.min(
          Math.floor(
            aboveColor[2] * aboveDiaphaneity +
              belowColor[2] * belowDiaphaneity * (1 - aboveDiaphaneity)
          ),
          255
        ),
        0
      );
      const newColorA = Math.max(
        Math.min(
          Math.floor(
            (aboveDiaphaneity + belowDiaphaneity * (1 - aboveDiaphaneity)) * 255
          ),
          255
        ),
        0
      );
      return [newColorR, newColorG, newColorB, newColorA];
    }
  }
  return [255, 255, 255, 255];
};
