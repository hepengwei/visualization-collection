import {
  flipSideToSide,
  flipUpsideDown,
  leftRotate,
  rightRotate,
  toGrey,
  toBlackAndWhite,
  changeSize,
} from "./imageUtil";

interface MehtodFn {
  (imgageData: ImageData): ImageData | null;
}
const dealImageDataList = (
  imageDataList: ImageData[],
  methodFn: MehtodFn,
  callback: (newImageDataList: ImageData[]) => void
) => {
  const result: ImageData[] = [];
  if (imageDataList && imageDataList.length > 0) {
    const l = imageDataList.length;
    const todo = (index = 0) => {
      Promise.resolve().then(() => {
        const newImageData = methodFn(imageDataList[index]);
        if (newImageData) {
          result.push(newImageData);
        }
        if (index < l) {
          todo(index + 1);
        } else {
          callback(result);
        }
      });
    };
    todo();
    // for (let i = 0, l = imageDataList.length; i < l; i++) {
    //   const newImageData = methodFn(imageDataList[i]);
    //   if (newImageData) {
    //     result.push(newImageData);
    //   }
    // }
    // callback(result);
  } else {
    callback(result);
  }
};

// 左右翻转
export const flipSideToSideVideo = (
  imageDataList: ImageData[],
  callback: (newImageDataList: ImageData[]) => void
) => {
  dealImageDataList(imageDataList, flipSideToSide, callback);
};

// 上下翻转
export const flipUpsideDownVideo = (
  imageDataList: ImageData[],
  callback: (newImageDataList: ImageData[]) => void
) => {
  dealImageDataList(imageDataList, flipUpsideDown, callback);
};

// 左旋转
export const leftRotateVideo = (
  imageDataList: ImageData[],
  callback: (newImageDataList: ImageData[]) => void
) => {
  dealImageDataList(imageDataList, leftRotate, callback);
};

// 右旋转
export const rightRotateVideo = (
  imageDataList: ImageData[],
  callback: (newImageDataList: ImageData[]) => void
) => {
  dealImageDataList(imageDataList, rightRotate, callback);
};

// 灰化
export const toGreyVideo = (
  imageDataList: ImageData[],
  callback: (newImageDataList: ImageData[]) => void
) => {
  dealImageDataList(imageDataList, toGrey, callback);
};

// 黑白化
export const toBlackAndWhiteVideo = (
  imageDataList: ImageData[],
  callback: (newImageDataList: ImageData[]) => void
) => {
  dealImageDataList(imageDataList, toBlackAndWhite, callback);
};

// 修改尺寸
export const changeSizeVideo = (
  dataList: string[] | ImageData[],
  width: number,
  height: number,
  newWidth: number,
  newHeight: number,
  maxWidthHeight = 10000,
  callback: (newImageDataList: ImageData[]) => void
) => {
  const result: ImageData[] = [];
  if (dataList && dataList.length > 0) {
    const l = dataList.length;
    const todo = (index = 0) => {
      Promise.resolve().then(() => {
        const newImageData = changeSize(
          dataList[index],
          width,
          height,
          newWidth,
          newHeight,
          maxWidthHeight
        );
        if (newImageData) {
          result.push(newImageData);
        }
        if (index < l) {
          todo(index + 1);
        } else {
          callback(result);
        }
      });
    };
    todo();
  } else {
    callback(result);
  }
};
