import React, { useState } from "react";
import { addHours } from "date-fns";
import CountDown from "components/ActivityCountDown";
import { initTime } from "components/ActivityCountDown/util";
import styles from "./index.module.scss";

const ActivityCountDown = () => {
  const timeParams = initTime({
    type: "ms",
    startTime: addHours(new Date(), 2).getTime(),
    serverTime: new Date().getTime(), // 真实项目中应使用后端返回的当前时间
  });
  const [over, setOver] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {over ? "活动正在进行中" : "距离活动开始剩余："}
      </div>
      {!over && (
        <CountDown
          countParams={timeParams}
          overCallback={() => {
            setOver(true);
          }}
          style={{ marginTop: "16px" }}
        />
      )}
    </div>
  );
};

export default ActivityCountDown;
