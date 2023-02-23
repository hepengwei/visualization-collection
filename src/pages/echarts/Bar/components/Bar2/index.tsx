import React, { useEffect, useState } from "react";
import TwoColumnBar from "components/Echarts/TwoColumnBar";
import styles from "../../index.module.scss";

const Bar2 = () => {
  const [echartData, setEchartData] = useState<any[]>([]);

  const getData = () => {
    const data: [
      string | number,
      string | number,
      string | number,
      string | number
    ][] = [["project", "increase", "decrease", "sum"]];
    const num = 20;
    for (let i = 0; i < num; i++) {
      const name = `name${i + 1}`;
      const increase = Math.random() * 8000;
      const decrease = -Math.random() * 8000;
      const sum = increase + decrease;
      data.push([name, increase, decrease, sum]);
    }
    setEchartData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.echart}>
      <TwoColumnBar
        data={{
          dataSource: echartData,
          legendData: [
            { name: "increase", icon: "rect" },
            { name: "decrease", icon: "rect" },
            { name: "sum" },
          ],
        }}
      />
    </div>
  );
};

export default Bar2;
