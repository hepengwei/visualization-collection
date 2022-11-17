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
  AxisPointerComponent,
} from "echarts/components";
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import { ECHART_COMMON_COLOR } from "constants/common";
import numberFormat from "@/utils";

echarts.use([
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  BarChart,
  LineChart,
  UniversalTransition,
  SVGRenderer,
  GraphicComponent,
  AxisPointerComponent,
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
  | LineSeriesOption
>;

interface Bar1Propos {
  data: Record<string, any>;
  style?: Record<string, any>;
}

// 获取整个图表的基础配置
const getBaseOptions = () => {
  const baseOptions: MyChartOption = {
    // graphic: getGraphic(),
    color: ECHART_COMMON_COLOR,
    legend: {
      show: true,
      textStyle: {
        overflow: "truncate",
        fontSize: 12,
        color: "#808191",
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
        splitLine: {
          show: true,
          lineStyle: {
            color: ["rgba(159,173,242,0.20)"],
            width: 1,
            type: "dashed",
          },
        },
        axisLabel: {
          color: "#808191",
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

const TwoColumnBar = (props: Bar1Propos) => {
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

export default TwoColumnBar;
