import React, { useRef, useMemo, useEffect, useCallback } from "react";
import echarts, {getGraphic} from "@/utils/echarts.config";
import type { ChartOptions } from "@/utils/echarts.config";
import { ECHART_COMMON_COLOR } from "constants/common";
import { format } from "date-fns";
import numberFormat from "utils/numberFormat";
import BasicEchart from "../BasicEchart";

interface ColumnBarProps {
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
    color: ECHART_COMMON_COLOR,
    // @ts-ignore
    graphic: getGraphic(),
    tooltip: {
      show: true,
      trigger: "axis",
      enterable: true, // 鼠标可进入提示框浮层中
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
      formatter: function (params: any) {
        if (params) {
          const { value } = params[0];
          if (value && value.length >= 2) {
            return `<span><span style="margin-right:20px">${format(
              value[0],
              "MM-dd"
            )}</span>$${numberFormat(value[1], true)}</span>`;
          }
        }
        return "";
      },
    },
    // legend: {
    //   type: "scroll",
    //   height: "88%",
    //   right: 0,
    //   top: "middle",
    //   icon: "rect",
    //   align: "left",
    //   orient: "vertical",
    //   itemWidth: 20,
    //   itemHeight: 8,
    //   itemGap: 12,
    //   textStyle: {
    //     width: 60,
    //     overflow: "truncate",
    //     color: "#808191",
    //     fontWeight: 500,
    //   },
    //   tooltip: {
    //     show: true,
    //   },
    //   selectedMode: true,
    //   pageTextStyle: {
    //     color: "#808191",
    //   },
    // },
    grid: {
      left: 14,
      right: 14,
      top: 40,
      bottom: 16,
      containLabel: true,
    },
    xAxis: {
      type: "time",
      axisPointer: {
        show: true, // hoverX轴时显示默认的tooltip和指示器
        type: "shadow", // 阴影指示器
        label: {
          show: false, // 不显示指示器的文字
        },
      },
      axisLabel: {
        color: "#808191",
        fontFamily: "SourceHanSansCN-Medium",
        fontWeight: 500,
        fontSize: 12,
        formatter: "{MM}-{dd}",
        rotate: 45,
      },
      axisLine: {
        show: true,
      },
    },
    yAxis: {
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
        color: "#808191",
        fontFamily: "SourceHanSansCN-Medium",
        fontWeight: 500,
      },
    },
    series: [
      {
        type: "bar",
        barWidth: 6,
        label: {
          show: false, // 每个图形块上不显示数值
          color: "#808191",
          fontFamily: "SourceHanSansCN-Medium",
          fontWeight: 500,
          position: "top",
        },
        itemStyle: {
          // @ts-ignore
          normal: {
            color: (val: Record<string, any>) => {
              if (val.data && val.data[1] < 0) {
                if (val.data[1] < 0) {
                  return "#EB5454";
                }
              }
              return "#47b262";
            },
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

const ColumnBar = ({
  data, // 数据
  style, // 样式
  onHoverChange, // 鼠标hover事件
  onClickChange, // 点击事件
}: ColumnBarProps) => {
  const chartInstance = useRef<echarts.EChartsType | null>(null);

  // 图表最终的配置数据
  const chartOptions = useMemo(() => {
    const options = getBaseOptions();
    const { dataSource } = data;
    if (!dataSource) return options;
    // 添加水印
    // options.graphic = getGraphic();
    options.dataset = { source: dataSource };
    return options;
  }, [data]);

  return (
    <BasicEchart
      options={chartOptions}
      style={style}
      onClickChange={onClickChange}
      onHoverChange={onHoverChange}
      ref={chartInstance}
    />
  );
};

export default ColumnBar;
