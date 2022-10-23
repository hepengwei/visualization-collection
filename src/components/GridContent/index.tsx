import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import styles from "./index.module.less";

export interface GridContentProps {
  differentScreenCols: [number, number, number, number, number, number?]; // 设置窗口在大于2000px、1700-2000px、1400-1700px、1200-1400px、500-1200px、小于500px时每行所显示的列数，列数支持1-10的整数
  rowSpace?: number; // 每行间距
  colSpace?: number; // 每列间距
  className?: string;
  children: ReactElement | ReactElement[];
}

const GridContent = (props: GridContentProps) => {
  const {
    differentScreenCols,
    rowSpace = 0,
    colSpace = 0,
    className = "",
    children,
  } = props;

  const finalCols = differentScreenCols.map(
    (item: number | undefined, index: number) => {
      if (!item) {
        if (index <= 4) {
          return "1";
        }
        return "";
      }
      return parseInt(item.toString()).toString();
    }
  );

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles[`gt2000-${finalCols[0]}`]]: true,
        [styles[`eq1700_2000-${finalCols[1]}`]]: true,
        [styles[`eq1400_1700-${finalCols[2]}`]]: true,
        [styles[`eq1200_1400-${finalCols[3]}`]]: true,
        [styles[`eq500_1200-${finalCols[4]}`]]: true,
        [styles[`lt500-${finalCols[5]}`]]: !!finalCols[5],
      })}
    >
      <div
        className={`${styles.content} ${className}`}
        style={{
          width: `calc(100% + ${colSpace}px)`,
          marginLeft: `${-(colSpace / 2)}px`,
          marginRight: `${colSpace / 2}px`,
        }}
      >
        {Object.prototype.toString.call(children) === "[object Array]"
          ? (children as ReactElement[]).map((Item: ReactElement) => {
              return React.cloneElement(Item, { rowSpace, colSpace });
            })
          : children
          ? children
          : null}
      </div>
    </div>
  );
};

export interface GridBoxProps {
  key: number | string;
  children: ReactNode;
  className?: string;
  rowSpace?: number; // 每行间距
  colSpace?: number; // 每列间距
}

const GridBox = (props: GridBoxProps) => {
  const { key, className, rowSpace = 0, colSpace = 0, children } = props;
  return (
    <div
      key={key}
      style={{
        width: "100%",
        padding: `${rowSpace / 2}px ${colSpace / 2}px`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

GridContent.GridBox = GridBox;

export default GridContent;
