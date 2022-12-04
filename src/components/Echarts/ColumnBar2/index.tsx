import React, { useRef, useMemo } from "react";
import echarts from "@/utils/echarts.config";
import type { ChartOptions } from "@/utils/echarts.config";
import BasicEchart from "../BasicEchart";

interface ColumnBar2Props {
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
    //init 初始化echart option
    grid: {
      left: "30px",
      top: "20px",
      right: "0px",
      bottom: "20px",
    },
    xAxis: {
      axisTick: {
        show: false, //不显示Y轴刻度尺
      },
      axisLabel: {
        // 不用写入textStyle对象里面，会echart报黄色提示
        color: "rgb(0,0,0)",
        fontSize: "12px",
      },
    },
    tooltip: {
      show: true,
      trigger: "axis",
      enterable: true, // 鼠标可进入提示框浮层中
      showDelay: 5, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
      hideDelay: 150, // 浮层隐藏的延迟，单位ms
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "line",
        lineStyle: {
          //鼠标移入时候的样式
          color: {
            colorStops: [
              {
                offset: 0,
                color: "rgba(187, 187, 187, 0.2)", // 100% 处的颜色
              },
            ],
          },
          type: "solid",
          width: 96, //阴影宽度
        },
      },
      formatter: (params: any) => {
        //自定义tooltip
        //自定义tooltip
        if (!params) return "";
        const item = params[0];
        const projects = item.data.details ?? [];
        let htmlStr = `
          <div class='echart-tooltip-style-${
            projects.length > 15 ? "moreThan" : "lessThan"
          }'>
            <div class='title'>
              <div>${item.name}：</div>
              <div>${item.value === 0 ? 0 : item.value}
                ${item.value === 0 ? "Project" : "Projects"}
              </div>
            </div>
            <div class='project-items-box'>`;
        projects.forEach((project: string) => {
          htmlStr += `
                <div class='item-name'>${project}</div>`;
        });
        return (htmlStr += "</div></div>");
      },
      position: (point: any, params: any, dom: any, rect: any, size: any) => {
        let x = 0; // x坐标位置
        let y = 0; // y坐标位置
        // 当前鼠标位置
        let pointX = point[0];
        let pointY = point[1];
        // 提示框大小
        let boxWidth = size.contentSize[0];
        let boxHeight = size.contentSize[1];
        // boxWidth > pointX 说明鼠标左边放不下提示框
        if (boxWidth > pointX) {
          x = pointX + 10;
        } else {
          // 左边放的下
          x = pointX - boxWidth - 10;
        }

        // boxHeight > pointY 说明鼠标上边放不下提示框
        if (boxHeight > pointY) {
          y = 5;
        } else {
          // 上边放得下
          y = pointY - boxHeight;
        }
        return [x, y];
      },
    },
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "bar",
        barWidth: 46,
        backgroundStyle: {
          color: "rgba(0,0,0)",
        },
        itemStyle: {
          color: "#588CF3",
          opacity: 0.95,
        },
        label: {
          show: true,
          position: "top",
          color: "#000",
          fontFamily: "PingFang SC",
          opacity: 0.45,
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    ],
    dataset: {
      source: [],
    },
  };
  return baseOptions;
};

const ColumnBar2 = ({
  data, // 数据
  style, // 样式
  onHoverChange, // 鼠标hover事件
  onClickChange, // 点击事件
}: ColumnBar2Props) => {
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

export default ColumnBar2;
