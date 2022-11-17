import React, { useRef, useMemo, useEffect, useCallback } from "react";
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  DatasetComponentOption,
  DataZoomComponent,
  DataZoomComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GraphicComponent,
} from "echarts/components";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import { ECHART_COMMON_COLOR } from "constants/common";
import { format } from "date-fns";
import numberFormat from "../../../utils";

echarts.use([
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  BarChart,
  UniversalTransition,
  SVGRenderer,
  GraphicComponent,
]);

export type MyChartOption = echarts.ComposeOption<
  | DatasetComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | BarSeriesOption
>;

interface Bar1Propos {
  data: Record<string, any>;
  style?: Record<string, any>;
}

// 获取整个图表的基础配置
const getBaseOptions = () => {
  const baseOptions: MyChartOption = {
    color: ECHART_COMMON_COLOR,
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

const ColumnBar = (props: Bar1Propos) => {
  const {
    data, // 数据
    style = { width: "100%", height: "100%" }, // 样式
  } = props;

  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.EChartsType | null>(null);

  // 图表最终的配置数据
  const chartOptions = useMemo(() => {
    const options = getBaseOptions();
    const { dataSource } = data;
    if (!dataSource || JSON.stringify(dataSource) === "{}") return options;
    // 添加水印
    // options.graphic = getGraphic();
    options.dataset = { source: dataSource };
    return options;
  }, [data]);

  //初始化图表，设置配置项
  const renderChart = useCallback(() => {
    if (chartRef.current) {
      const render = echarts.getInstanceByDom(chartRef.current);
      if (render) {
        chartInstance.current = render;
      } else {
        chartInstance.current = echarts?.init(chartRef.current, undefined, {
          renderer: "canvas",
        });
      }
      //设置配置项
      chartInstance.current.setOption(chartOptions);
    }
  }, [chartOptions]);

  useEffect(() => {
    renderChart();

    return () => {
      const { current } = chartInstance;
      if (current) {
        current.dispose();
      }
    };
  }, [chartOptions]);

  // 监听屏幕变化，重绘图表
  useEffect(() => {
    const handleResize = () => {
      const chart = chartInstance?.current;
      if (chart) {
        chart.resize();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={chartRef} style={style} />;
};

export default ColumnBar;
