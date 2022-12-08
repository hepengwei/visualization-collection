import React, { ReactNode, useState } from "react";
import styles from "./switch.module.less";

interface SwitchProps {
  open?: boolean;
  width?: number;
  height?: number;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  onChange?: (open: boolean) => void;
  style?: React.CSSProperties;
  className?: string;
}

const Switch = (props: SwitchProps) => {
  const {
    open,
    width = 90,
    height = 40,
    openIcon,
    closeIcon,
    onChange,
    style = {},
    className = "",
  } = props;
  const [ownOpen, setOwnOpen] = useState<boolean>(
    open !== undefined ? open : false
  );

  const onSwitchClick = () => {
    if (open !== undefined) {
      onChange && onChange(!open);
    } else {
      setOwnOpen(!ownOpen);
    }
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        backgroundColor:
          (open !== undefined && open) || (open === undefined && ownOpen)
            ? "#e4e4e4"
            : "#1a1c20",
        ...style,
      }}
      onClick={onSwitchClick}
    >
      <div
        className={styles.box}
        style={
          (open !== undefined && open) || (open === undefined && ownOpen)
            ? {
                width: `${height * 0.8}px`,
                height: `${height * 0.8}px`,
                borderRadius: "50%",
                top: `${height * 0.1}px`,
                left: `${height * 0.1}px`,
              }
            : {
                width: `${height * 0.2}px`,
                height: `${height * 0.8}px`,
                borderRadius: `${(height * 0.2) / 2}px`,
                top: `${height * 0.1}px`,
                left: `${width - height / 2}px`,
              }
        }
      />
      {closeIcon && (
        <div
          className={styles.icon}
          style={{
            width: `${height * 0.8}px`,
            height: `${height * 0.8}px`,
            top: `${height * 0.1}px`,
            left: `${height * 0.1}px`,
            opacity:
              (open !== undefined && open) || (open === undefined && ownOpen)
                ? 0
                : 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {closeIcon}
        </div>
      )}
      {openIcon && (
        <div
          className={styles.icon}
          style={{
            width: `${height * 0.8}px`,
            height: `${height * 0.8}px`,
            top: `${height * 0.1}px`,
            left: `${width - height * 0.9}px`,
            opacity:
              (open !== undefined && open) || (open === undefined && ownOpen)
                ? 1
                : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {openIcon}
        </div>
      )}
    </div>
  );
};

export default Switch;
