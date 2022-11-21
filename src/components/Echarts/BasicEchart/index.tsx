import React, {
  useCallback,
  useEffect,
  useRef,
  RefObject,
  useImperativeHandle,
} from "react";
import echarts from "utils/echarts.config";
import type { ChartOptions } from "utils/echarts.config";
import { SeriesOption } from "echarts/types/dist/shared";

export interface BasicEchartProps {
  options: ChartOptions;
  renderType?: any;
  style?: Record<string, string>;
  onHoverChange?: (params: any) => void;
  onClickChange?: (params: any) => void;
  legendSelectChanged?: (params: any) => void;
  onGlobalout?: (params: any) => void;
}

const BasicEchart = (
  {
    options = {}, // options
    renderType = "canvas", //默认渲染模式canva 类型
    style = { width: "100%", height: "100%" }, // 样式
    onHoverChange, //点击事件
    onClickChange, //鼠标hover事件
    legendSelectChanged, //legend点击事件
    onGlobalout, // 鼠标离开图表事件
  }: BasicEchartProps,
  ref: RefObject<echarts.ECharts | null>
) => {
  const chartRef = useRef<HTMLDivElement>(null); //当前div实例
  const chartInstance = useRef<echarts.ECharts | null>(null); // 用于保存上一次chartRef被赋值的实例对象

  useImperativeHandle(
    ref,
    () => {
      return chartInstance.current;
    },
    []
  );

  const setPieLabelLayout = (
    params: Record<string, any>,
    myChart: echarts.ECharts | null
  ) => {
    //配置环形图图的折线长度
    const isLeft =
      params.labelRect.x < (myChart as echarts.ECharts).getWidth() / 2;
    const points = params.labelLinePoints;
    if (!points) return {};
    // Update the end point.
    points[2][0] = isLeft
      ? params.labelRect.x
      : params.labelRect.x + params.labelRect.width;
    return { labelLinePoints: points };
  };

  //初始化图表，设置配置项
  const renderChart = useCallback(() => {
    let render;
    if (chartRef.current) {
      render = echarts?.getInstanceByDom(chartRef.current);
      if (render) {
        chartInstance.current = render;
      } else {
        chartInstance.current = echarts?.init(chartRef.current, undefined, {
          renderer: renderType,
        });
      }

      //绑定点击事件
      onClickChange &&
        chartInstance.current?.on("click", (params) => {
          onClickChange(params);
        });

      //鼠标hover事件
      onHoverChange &&
        chartInstance.current?.on("mousemove", (params) => {
          onHoverChange(params);
        });

      //鼠标legend点击事件
      legendSelectChanged &&
        chartInstance.current?.on("legendselectchanged", (params) => {
          legendSelectChanged(params);
        });

      //设置环形图的labelLayout
      if (
        (options.series &&
          ((options.series as SeriesOption[])[0]?.type ?? "")) === "pie"
      ) {
        //当echart为环形图时
        const pieSeriesItem = (options?.series as SeriesOption[])[0];
        pieSeriesItem.labelLayout = (params) =>
          setPieLabelLayout(params, chartInstance.current);
      }

      // 鼠标离开图表的事件
      onGlobalout && chartInstance.current?.on("globalout", onGlobalout);

      //设置配置项
      chartInstance.current.setOption(options);
    }
  }, [options, renderType]);

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

  useEffect(() => {
    renderChart();
    return () => {
      const { current } = chartInstance;
      if (current) {
        //销毁 chartInstance, 实则销毁上一个chartRef 销毁实例释放资源 避免内存泄漏
        current.dispose();
      }
    };
  }, [options]);

  return <div ref={chartRef} style={style} />;
};

// function areEqual(
//   prevProps: Record<string, any>,
//   nextProps: Record<string, any>
// ) {
//   // 判断是否重新渲染，根据后面实际情况再做
//   if(prevProps.options===nextProps.options){
//       return true
//   }else {
//       return false
//   }
// }
// export default memo(BasicEchart, areEqual);
export default React.forwardRef(BasicEchart, {});
