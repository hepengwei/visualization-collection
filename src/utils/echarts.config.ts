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
} from "echarts/charts";
import { LabelLayout, UniversalTransition} from "echarts/features";
import { CanvasRenderer, } from "echarts/renderers";

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

export default echarts;
