import * as echarts from "echarts/core";
import {
  DatasetComponent,
  DatasetComponentOption,
  DataZoomComponent,
  DataZoomComponentOption,
  GridComponent,
  GridComponentOption,
  TransformComponent,
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
import {
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
  PieChart,
  PieSeriesOption,
  GraphSeriesOption,
} from "echarts/charts";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import riverGrey from "images/river_grey.png";

echarts.use([
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  TransformComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LineChart,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  GraphicComponent,
]);

export type ChartOptions = echarts.ComposeOption<
  | DatasetComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
>;

export const getGraphic = () => {
  return [
    {
      type: "image",
      left: "center",
      top: "middle", // 相对父元素居中
      z: 900,
      style: {
        image: riverGrey,
        width: 450,
        height: 103,
        opacity: 0.1,
      },
      silent: true,
    },
  ];
};

export default echarts;
