import React, { useMemo } from "react";
import { ECHART_COMMON_COLOR } from "constants/common";
import styles from "./index.module.scss";

const data = [
  { name: "label1", num: 23 },
  { name: "label2", num: 12 },
  { name: "label3", num: 48 },
  { name: "label4", num: 37 },
  { name: "label5", num: 18 },
];

const ConicGradientRing = () => {
  const dataInfo = useMemo(() => {
    const sum = data.reduce((num, next) => num + next.num, 0);
    if (data?.length > 0) {
      let currentRotate = 0;
      const result = data.map((item, index) => {
        const rotate = `${currentRotate}deg`;
        const degNum = (item.num / sum) * 360;
        currentRotate += degNum;
        return {
          ...item,
          deg: `${degNum}deg`,
          rotate,
          color: ECHART_COMMON_COLOR[index],
        };
      });
      return result;
    }
    return [];
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {dataInfo.map((itemData) => {
          return (
            <div
              className={styles.item}
              style={{
                background: `conic-gradient(${itemData.color} 0,transparent ${itemData.deg})`,
                transform: `rotate(${itemData.rotate})`,
              }}
              key={itemData.name}
            >
              <div
                className={styles.semicircle}
                style={{ backgroundColor: itemData.color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConicGradientRing;
