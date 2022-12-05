import React, { useCallback, useRef, useMemo, memo } from "react";
import echarts, { getGraphic } from "@/utils/echarts.config";
import type { ChartOptions } from "@/utils/echarts.config";
import {
  DatasetComponentOption,
  TooltipComponentOption,
} from "echarts/components";
import { BarSeriesOption } from "echarts/charts";
import { ECHART_COMMON_COLOR } from "constants/common";
import { cloneDeep } from "lodash-es";
import BasicEchart from "../BasicEchart";

interface StackedRowBarProps {
  data: {
    dataSource: Record<string, any>;
    yAxisTransform?: Record<string, any>;
  };
  style?: Record<string, string>;
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
      // trigger: 'axis', // 坐标轴触发
      trigger: "item", // 数据项图形触发
      borderColor: "transparent",
      enterable: true, // 鼠标可进入提示框浮层中
      showDelay: 10, // 浮层显示的延迟，单位ms
      hideDelay: 150, // 浮层隐藏的延迟，单位ms
    },
    legend: {
      top: 10,
      type: "scroll",
      icon: "circle", // 修改icon形状
      itemWidth: 12, // 修改icon图形大小
      itemGap: 22, // 修改每个图例的间距
      textStyle: {
        overflow: "truncate",
        fontSize: 13,
        color: "#808191",
        fontFamily: "SourceHanSansCN-Medium",
        fontWeight: 500,
      },
    },
    grid: {
      top: 50,
      left: 30,
      right: 26,
      bottom: 20,
      containLabel: true,
    },
    xAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(159,173,242,0.2)"],
          width: 1,
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      axisPointer: {
        show: true, // hoverY轴时显示默认的tooltip和指示器
        type: "shadow", // 阴影指示器
        label: {
          show: false, // 不显示指示器的文字
        },
      },
      axisLabel: {
        color: "#808191",
        fontSize: 13,
      },
    },
    series: [
      {
        type: "bar",
        stack: "total",
        barWidth: 36,
        label: {
          show: false, // 每个图形块上不显示数值
        },
        emphasis: {
          focus: "series",
          blurScope: "global",
        },
        selectedMode: "single",
        select: {
          disabled: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#1D212A",
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

const StackedRowBar = ({
  data, // 数据
  style, // 样式
  onHoverChange, // 鼠标hover事件
  onClickChange, // 点击事件
}: StackedRowBarProps) => {
  const chartInstance = useRef<echarts.ECharts | null>(null); // 用于保存上一次chartRef被赋值的实例对象

  // 图表最终的配置数据
  const chartOptions = useMemo(() => {
    const options = getBaseOptions();
    const { yAxisTransform, dataSource } = data;
    if (!dataSource || JSON.stringify(dataSource) === "{}") return options;
    const keys = Object.keys(dataSource);
    const datasetSource = [];
    let firstArr = ["product"];
    let legendLength = 0;
    // 为了数据在y轴上能从上往下排列，所以遍历生成图表数据时要倒序遍历
    for (let i = keys.length - 1; i >= 0; i--) {
      const key = keys[i];
      const item = dataSource[key];
      const legend = Object.keys(item);
      if (i === keys.length - 1) {
        firstArr = firstArr.concat(legend);
        datasetSource.push(firstArr);
        legendLength = legend.length;
      }
      const arr = [];
      // 如果有传yAxisTransform配置，则要根据配置修改y轴的值
      if (yAxisTransform && yAxisTransform[key]) {
        arr.push(yAxisTransform[key]);
      } else {
        arr.push(key);
      }
      // 把每个系列的数据循环出来
      legend.forEach((legendKey) => {
        const item2 = item[legendKey];
        arr.push(item2.length);
      });
      datasetSource.push(arr);
    }
    (options.dataset as DatasetComponentOption).source = datasetSource;
    if (legendLength > 1) {
      const seriesItem = (options.series as BarSeriesOption[]).shift();
      for (let i = legendLength - 1; i >= 0; i--) {
        const newSeriesItem = cloneDeep(seriesItem) as BarSeriesOption;
        (options.series as BarSeriesOption[]).push(newSeriesItem);
      }
    }
    // 自定义tooltip的展示的元素
    (options.tooltip as TooltipComponentOption).formatter = (
      params: any,
      ticket: string
    ) => {
      // 如果ticket以'item'开头，说明是hover的图形元素，否则是hover的Y轴
      if (ticket.startsWith("item")) {
        const { name, seriesName, color } = params;
        let newName = name;
        if (yAxisTransform) {
          const keys = Object.keys(yAxisTransform);
          for (let i = keys.length - 1; i >= 0; i--) {
            const key = keys[i];
            if (yAxisTransform[key] === name) {
              newName = key;
              break;
            }
          }
        }
        const seriesData = dataSource[newName];
        const projects = seriesData[seriesName] ?? [];
        let htmlStr = `<div style='max-height:540px;overflow-y:auto;user-select:text;font-size:12px;' class='echart-scrollbar-style'>
        <div style='margin-bottom:4px;color:#999999'>${newName}</div>
        <div style='margin-bottom:3px;display:flex;justify-content:space-between;align-items:center'><div style='display:flex;align-items:center'>
        <div style='width:10px;line-height:10px;heigth:10px;min-height:10px;max-height:10px;border-radius:5px;background-color:${color}'></div>
        <div style='width:180px;overflow:hidden;text-overflow:ellipsis;margin-left:8px'>${seriesName}</div></div>
        <div style='color:#222222'>${projects.length}</div></div>`;
        projects.forEach((project: string[]) => {
          htmlStr += `<div style='width:180px;height:20px;line-height:20px;overflow:hidden;text-overflow:ellipsis;margin:4px 0'>${project}</div>`;
        });
        htmlStr += "</div>";
        return htmlStr;
      } else {
        let htmlStr = "";
        params.forEach((item: Record<string, any>, index: number) => {
          const { name, seriesName, color, seriesIndex, data } = item;
          if (index === 0) {
            let newName = name;
            if (yAxisTransform) {
              const keys = Object.keys(yAxisTransform);
              for (let i = keys.length - 1; i >= 0; i--) {
                const key = keys[i];
                if (yAxisTransform[key] === name) {
                  newName = key;
                  break;
                }
              }
            }
            htmlStr += `<div style='max-height:510px;overflow-y:auto;user-select:text;font-size:12px;' class='echart-scrollbar-style'><div style='margin-bottom:4px;color:#999999'>${newName}</div>`;
          }
          htmlStr += `<div style='margin:3px;display:flex;justify-content:space-between;align-items:center;font-size:12px;'><div style='display:flex;align-items:center;'>
          <div style='width:10px;line-height:10px;heigth:10px;min-height:10px;max-height:10px;border-radius:5px;background-color:${color}'></div>
          <div style='width:180px;overflow:hidden;text-overflow:ellipsis;margin-left:8px'>${seriesName}</div></div>
          <div style='color:#222222;margin-left:4px'>${
            data[seriesIndex + 1]
          }</div></div>`;
        });
        htmlStr += "</div>";
        return htmlStr;
      }
    };
    return options;
  }, [data]);

  // 鼠标离开整个图表的事件
  const globaloutCallback = useCallback(() => {
    const chartInstanceCurrent = chartInstance.current;
    if (chartInstanceCurrent) {
      const seriesIndex = [];
      const { length } = chartOptions.series as BarSeriesOption[];
      if (length) {
        for (let i = 0; i < length; i++) {
          seriesIndex.push(i);
        }
      }
      // 鼠标离开整个图表后取消所有选中的图形元素
      chartInstanceCurrent.dispatchAction({
        type: "unselect",
        dataIndex: seriesIndex,
      });
    }
  }, [chartOptions]);

  return (
    <BasicEchart
      options={chartOptions}
      style={style}
      onClickChange={onClickChange}
      onHoverChange={onHoverChange}
      onGlobalout={globaloutCallback}
      ref={chartInstance}
    />
  );
};

export default StackedRowBar;
