import React, { useEffect, useState } from "react";
import Pie2 from "components/Echarts/Pie2";
import styles from "../../index.module.scss";
import { random } from "lodash-es";

const Pie1 = () => {
  const [echartData, setEchartData] = useState<(string | number)[][]>([]);

  const getData = () => {
    const data = [];
    const num = 10;
    for (let i = 0; i < num; i++) {
      const repeatNum = Math.ceil(random() * 4 + 1);
      const name = `${"name".repeat(repeatNum)}${i + 1}`;
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
      <Pie2 data={{ dataSource: echartData }} />
    </div>
  );
};

export default Pie1;
