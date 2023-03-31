import React, { useEffect, useMemo, useRef, useState } from "react";
import ModuleTitle from "components/ModuleTitle";
import styles from "./index.module.scss";

const circleRadius = 75;
const strokeDasharray = 471;

enum AP {
  "AM",
  "PM",
}

const DynamicTime = () => {
  const getCurrentTime = () => {
    const date = new Date();
    const _24h = date.getHours();
    const h = _24h % 12;
    const m = date.getMinutes();
    const s = date.getSeconds();
    const ap = _24h >= 12 ? AP.PM : AP.AM;
    return { h, m, s, ap };
  };

  const currentTime = useMemo(() => {
    return getCurrentTime();
  }, []);

  const hourRef = useRef<number>(currentTime.h);
  const minutesRef = useRef<number>(currentTime.m);
  const apRef = useRef<AP>(currentTime.ap);
  const [seconds, setSeconds] = useState<number>(currentTime.s);

  useEffect(() => {
    const timer = setInterval(() => {
      const { h, m, s, ap } = getCurrentTime();

      hourRef.current = h;
      minutesRef.current = m;
      apRef.current = ap;
      s !== seconds && setSeconds(s);
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.cssDynamicEffect.richDynamicEffect.SVGCircularClock" />
      <div className={`${styles.circle} ${styles.hour}`}>
        <svg>
          <circle
            cx={circleRadius}
            cy={circleRadius}
            r={circleRadius}
            style={{
              strokeDashoffset:
                strokeDasharray - (strokeDasharray * hourRef.current) / 12,
            }}
          ></circle>
        </svg>
        {hourRef.current.toString().padStart(2, "00")}
        <div className={styles.text}>HOURS</div>
      </div>
      <div className={`${styles.circle} ${styles.minutes}`}>
        <svg>
          <circle
            cx={circleRadius}
            cy={circleRadius}
            r={circleRadius}
            style={{
              strokeDashoffset:
                strokeDasharray - (strokeDasharray * minutesRef.current) / 60,
            }}
          ></circle>
        </svg>
        {minutesRef.current.toString().padStart(2, "00")}
        <div className={styles.text}>MINUTES</div>
      </div>
      <div className={`${styles.circle} ${styles.seconds}`}>
        <svg>
          <circle
            cx={circleRadius}
            cy={circleRadius}
            r={circleRadius}
            style={{
              strokeDashoffset:
                strokeDasharray - (strokeDasharray * seconds) / 60,
            }}
          ></circle>
        </svg>
        {seconds.toString().padStart(2, "00")}
        <div className={styles.text}>SECONDS</div>
      </div>
      <div className={styles.ap}>{AP[apRef.current]}</div>
    </div>
  );
};

export default DynamicTime;
