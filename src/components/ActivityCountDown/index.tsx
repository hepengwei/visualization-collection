/**
 * 活动倒计时组件
 */
import React, { useState, useEffect, useRef } from "react";
import { padTime } from "./util";
import styles from "./index.module.scss";

interface ActivityCountDownProps {
  countParams: {
    day: number;
    hour: number;
    minute: number;
    seconds: number;
    timeRemaining?: number;
  };
  overCallback?: () => void;
  style?: Record<string, any>;
}

const ActivityCountDown = (props: ActivityCountDownProps) => {
  const { countParams, overCallback, style = {} } = props;
  const { day = 59, hour = 59, minute = 59, seconds = 59 } = countParams;
  // 初始的值
  const [timeObj, setTimeObj] = useState({
    d: day,
    h: hour,
    m: minute,
    s: seconds,
  });
  const timeObjRef = useRef(timeObj);
  const overRef = useRef<boolean>(true);
  const timer = useRef<number>(0);

  // 倒计时
  const countDownTime = () => {
    if (overRef.current) return;
    const latestTimeObj = timeObjRef.current;
    const { d, h, m, s } = latestTimeObj;
    const isDhms = d === 0 && h === 0 && m === 0 && s === 0;
    const isHms = h === 0 && m === 0 && s === 0;
    const isMs = m === 0 && s === 0;
    const isS = s === 0;
    if (isDhms) {
      overRef.current = true;
      overCallback && overCallback();
    } else if (isHms) {
      const newTimeObj = { d: d - 1, h: 23, m: 59, s: 59 };
      timeObjRef.current = newTimeObj;
      setTimeObj(newTimeObj);
    } else if (isMs) {
      const newTimeObj = { d, h: h - 1, m: 59, s: 59 };
      timeObjRef.current = newTimeObj;
      setTimeObj(newTimeObj);
    } else if (isS) {
      const newTimeObj = { d, h, m: m - 1, s: 59 };
      timeObjRef.current = newTimeObj;
      setTimeObj(newTimeObj);
    } else {
      const newTimeObj = { d, h, m, s: s - 1 };
      timeObjRef.current = newTimeObj;
      setTimeObj(newTimeObj);
    }
  };

  useEffect(() => {
    const { day = 59, hour = 59, minute = 59, seconds = 59 } = countParams;
    const newTimeObj = {
      d: day,
      h: hour,
      m: minute,
      s: seconds,
    };
    timeObjRef.current = newTimeObj;
    setTimeObj(newTimeObj);
    const isDhms =
      newTimeObj.d === 0 &&
      newTimeObj.h === 0 &&
      newTimeObj.m === 0 &&
      newTimeObj.s === 0;
    if (isDhms) {
      if (!overRef.current) {
        overRef.current = true;
        overCallback && overCallback();
        if (timer.current) {
          clearInterval(timer.current);
          timer.current = 0;
        }
      }
    } else if (overRef.current) {
      overRef.current = false;
      timer.current = window.setInterval(countDownTime, 1000);
    }
  }, [countParams]);

  useEffect(() => {
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  return (
    <>
      <div className={styles.container} style={style}>
        <div className={styles.num}>{padTime(timeObj.d)}</div>
        <div className={styles.unit}>天</div>
        <div className={styles.num}>{padTime(timeObj.h)}</div>
        <div className={styles.unit}>时</div>
        <div className={styles.num}>{padTime(timeObj.m)}</div>
        <div className={styles.unit}>分</div>
        <div className={styles.num}>{padTime(timeObj.s)}</div>
        <div className={styles.unit}>秒</div>
      </div>
    </>
  );
};

export default ActivityCountDown;
