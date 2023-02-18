import React, { useRef, useMemo, RefObject } from "react";
import echarts, { getGraphic } from "@/utils/echarts.config";
import type { ChartOptions } from "@/utils/echarts.config";
import { ECHART_COMMON_COLOR } from "constants/common";
import numberFormat from "utils/numberFormat";
import BasicEchart from "../BasicEchart";
import styles from "./index.module.scss";

interface Pie2Props {
  data: {
    dataSource: (string | number)[][];
  };
  style?: Record<string, any>;
  onHoverChange?: (params: any) => void;
  onClickChange?: (params: any) => void;
}

// 获取整个图表的基础配置
const getBaseOptions = () => {
  const baseOptions: ChartOptions = {
    color: ECHART_COMMON_COLOR,
    // @ts-ignore
    graphic: getGraphic(),
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        const { value } = params;
        let str = `${value[0]} : $${numberFormat(value[1], true)}`;
        return str;
      },
    },
    series: [
      {
        name: "Price",
        type: "pie",
        radius: ["55%", "72%"],
        left: "-10%",
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            color: "#ffffff",
            width: 150,
            lineHeight: 20,
            overflow: "truncate",
            formatter: function (params: any) {
              const { value } = params;
              return `${value[0]} \n $${numberFormat(value[1], true)}`;
            },
          },
        },
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
      },
    ],
    dataset: {
      source: [],
    },
  };
  return baseOptions;
};

const Pie2 = ({
  data, // 数据
  style, // 样式
  onHoverChange, // 鼠标hover事件
  onClickChange, // 点击事件
}: Pie2Props) => {
  const chartInstance = useRef<RefObject<echarts.ECharts | null>>(null);
  const currentPieIndex = useRef<number>(0);

  // 图表最终的配置数据
  const chartOptions = useMemo(() => {
    const options = getBaseOptions();
    const { dataSource } = data;
    if (!dataSource) return options;
    options.dataset = { source: dataSource };
    return options;
  }, [data]);

  const onChartMouseMove = (params: any) => {
    const index = params.dataIndex;
    if (
      chartInstance.current?.current &&
      params.componentType === "series" &&
      index !== currentPieIndex.current
    ) {
      chartInstance.current.current.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: currentPieIndex.current,
      });
      chartInstance.current.current.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: index,
      });

      currentPieIndex.current = index;
    }
  };

  const onMouseMoveRight = (index: number) => {
    if (chartInstance.current?.current && index !== currentPieIndex.current) {
      chartInstance.current.current.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: currentPieIndex.current,
      });
      chartInstance.current.current.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: index,
      });

      currentPieIndex.current = index;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chartBox}>
        <BasicEchart
          options={chartOptions}
          style={style}
          onClickChange={onClickChange}
          onHoverChange={(params) => {
            onChartMouseMove(params);
            onHoverChange && onHoverChange(params);
          }}
          ref={chartInstance}
        />
      </div>

      <div className={styles.rightBox}>
        {data?.dataSource?.map((item: any[], index: number) => (
          <div
            className={styles.item}
            key={index}
            onMouseMove={() => onMouseMoveRight(index)}
          >
            <div
              className={styles.rect}
              style={{ backgroundColor: ECHART_COMMON_COLOR[index] }}
            />
            <div className={styles.name}>{item[0]}</div>
            <div className={styles.value}>{`$${item[1]}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pie2;
