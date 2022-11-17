import React, { useEffect, useState } from "react";
import { subDays } from "date-fns";
import ColumnBar from "components/Echarts/ColumnBar";
import styles from "./index.module.less";

const Bar1 = () => {
  const [echartData, setEchartData] = useState<Record<string, any>[]>([]);

  const getData = () => {
    const data = [];
    const num = 60;
    for (let i = 0; i < num; i++) {
      const now = new Date();
      const time = subDays(now, num - i).valueOf();
      const value = (Math.random() - 0.5) * 8000;
      data.push([time, value]);
    }
    setEchartData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <ColumnBar data={{ dataSource: echartData }} />
    </div>
  );
};

export default Bar1;
