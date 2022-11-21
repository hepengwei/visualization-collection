import React, { useEffect, useState } from "react";
import Pie from "components/Echarts/Pie";
import styles from "../../index.module.less";

const Pie1 = () => {
  const [echartData, setEchartData] = useState<Record<string, any>[]>([]);

  const getData = () => {
    const data = [];
    const num = 10;
    for (let i = 0; i < num; i++) {
      const name = `name${i + 1}`;
      const value = Math.random() * 8000;
      data.push([name, value]);
    }
    setEchartData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.echart}>
      <Pie data={{ dataSource: echartData }} />
    </div>
  );
};

export default Pie1;
