import React, { useEffect, useState } from "react";
import { subDays } from "date-fns";
import ColumnBar from "components/Echarts/ColumnBar";
import styles from "../../index.module.scss";

const Bar1 = () => {
  const [echartData, setEchartData] = useState<any[]>([]);

  const getData = () => {
    const data: number[][] = [];
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
    <div className={styles.echart}>
      <ColumnBar data={{ dataSource: echartData }} />
    </div>
  );
};

export default Bar1;
