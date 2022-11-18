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
import { PieChart, PieSeriesOption } from "echarts/charts";
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
  PieChart,
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
  | PieSeriesOption
>;

interface Bar1Propos {
  data: Record<string, any>;
  style?: Record<string, any>;
}

// 获取整个图表的基础配置
const getBaseOptions = () => {
  const baseOptions: MyChartOption = {
    color: ECHART_COMMON_COLOR,
    legend: {
      type: "scroll",
      height: "88%",
      right: 12,
      top: "middle",
      icon: "rect",
      align: "left",
      orient: "vertical",
      itemWidth: 20,
      itemHeight: 8,
      itemGap: 12,
      textStyle: {
        width: 120,
        overflow: "truncate",
        color: "#808191",
        fontSize: 14,
        fontWeight: 500,
      },
      selectedMode: true,
      pageTextStyle: {
        color: "#808191",
      },
    },
    tooltip: {
      show: true,
      valueFormatter: (value: any) => numberFormat(value, true) as string,
    },
    series: [
      {
        name: "Price",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
          formatter: (params: any) => {
            if (params && params.value) {
              return `{value|${numberFormat(params.value[1], true)}}\n\n${
                params.name
              }`;
            }
            return "";
          },

          rich: {
            value: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
            },
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            color: "#fff",
            fontWeight: "normal",
          },
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

const Pie = (props: Bar1Propos) => {
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
    if (!dataSource) return options;
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

export default Pie;
