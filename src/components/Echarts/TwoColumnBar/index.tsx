import React, { useMemo } from "react";
import { getGraphic } from "@/utils/echarts.config";
import type { ChartOptions } from "@/utils/echarts.config";
import { ECHART_COMMON_COLOR } from "constants/common";
import numberFormat from "utils/numberFormat";
import BasicEchart from "../BasicEchart";

interface TwoColumnBarProps {
  data: {
    dataSource: any[];
  };
  style?: Record<string, any>;
  onHoverChange?: (params: any) => void;
  onClickChange?: (params: any) => void;
}

// 获取整个图表的基础配置
const getBaseOptions = () => {
  const baseOptions: ChartOptions = {
    // @ts-ignore
    graphic: getGraphic(),
    color: ECHART_COMMON_COLOR,
    legend: {
      show: true,
      textStyle: {
        overflow: "truncate",
        fontSize: 13,
        color: "#808191",
        fontFamily: "SourceHanSansCN-Medium",
        fontWeight: 500,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
      textStyle: {
        fontWeight: 400,
      },
    },
    grid: {
      left: 60,
      right: 20,
      top: 40,
      bottom: 60,
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          color: "#808191",
          fontFamily: "SourceHanSansCN-Medium",
          fontWeight: 500,
          fontSize: 12,
          rotate: 45,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: ["rgba(159,173,242,0.2)"],
            width: 1,
            type: "dashed",
          },
        },
        axisLabel: {
          show: true,
          color: "#808191",
          fontSize: 12,
          formatter: function (value: any) {
            return numberFormat(value, true) as string;
          },
        },
      },
      //   {
      //     type: "value",
      //     name: "",
      //     splitLine: {
      //       show: false,
      //       lineStyle: {
      //         color: ["rgba(159,173,242,0.20)"],
      //         width: 1,
      //         type: "dashed",
      //       },
      //     },
      //     axisLabel: {
      //       formatter: function (value: any) {
      //         return `$${numberFormat(value, true)}`;
      //       },
      //     },
      //   },
    ],
    series: [
      {
        type: "bar",
        barWidth: 18,
        stack: "one",
        tooltip: {
          valueFormatter: function (value: any) {
            return `$${numberFormat(value, true)}`;
          },
        },
      },
      {
        type: "bar",
        barWidth: 18,
        stack: "one",
        tooltip: {
          valueFormatter: function (value) {
            return `$${numberFormat(+value, true)}`;
          },
        },
      },
      {
        type: "line",
        yAxisIndex: 0,
        // yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: any) {
            return `$${numberFormat(value, true)}`;
          },
        },
      },
    ],
    dataset: {
      source: [],
    },
  };
  return baseOptions;
};

const TwoColumnBar = ({
  data, // 数据
  style, // 样式
  onHoverChange, // 鼠标hover事件
  onClickChange, // 点击事件
}: TwoColumnBarProps) => {
  // 图表最终的配置数据
  const chartOptions = useMemo(() => {
    const options = getBaseOptions();
    const { dataSource } = data;
    if (!dataSource) return options;
    options.dataset = { source: dataSource };
    return options;
  }, [data]);

  return (
    <BasicEchart
      options={chartOptions}
      style={style}
      onClickChange={onClickChange}
      onHoverChange={onHoverChange}
    />
  );
};

export default TwoColumnBar;
