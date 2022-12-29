import React, { useEffect, useState } from "react";
import ColumnLineBar from "components/Echarts/ColumnLineBar";
import styles from "../../index.module.scss";

const xAxisName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Bar4 = () => {
  const [echartData, setEchartData] = useState<any[]>([]);

  const getData = () => {
    const data: [string | number, string | number, string | number][] = [
      ["project", "type1", "type2"],
    ];
    xAxisName.forEach((item) => {
      const type1 = Math.random() * 8000 + 1000;
      const type2 = type1 + Math.random() * 1000 + 1000;
      data.push([item, type1, type2]);
    });
    setEchartData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.echart}>
      <ColumnLineBar data={{ dataSource: echartData }} />
    </div>
  );
};

export default Bar4;
