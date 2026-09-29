import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

export interface LineChartSeries<T> {
  name: string;
  key: keyof T;
  color?: string;
}

interface BridgeLineChartProps<T extends object> {
  data: T[];
  series: LineChartSeries<T>[];
  xAxisKey: keyof T;
  height?: number | string;
  showLegend?: boolean;
}

const BridgeLineChart = <T extends object>({
  data,
  series,
  xAxisKey,
  height = 400,
  showLegend = true,
}: BridgeLineChartProps<T>) => {
  const option = useMemo<EChartsOption>(() => {
    return {
      tooltip: {
        trigger: "axis",
      },

      legend: showLegend
        ? {
            top: 0,
            left: "center",
          }
        : undefined,

      grid: {
        left: 40,
        right: 20,
        top: showLegend ? 40 : 20,
        bottom: 30,
        containLabel: true,
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: data.map((item) => String(item[xAxisKey])),
      },

      yAxis: {
        type: "value",
      },

      series: series.map((item) => ({
        name: item.name,
        type: "line",

        data: data.map((dataItem) => {
          return item.key in dataItem ? Number(dataItem[item.key]) : 0;
        }),

        ...(item.color && {
          itemStyle: {
            color: item.color,
          },

          lineStyle: {
            color: item.color,
          },
        }),
      })),
    };
  }, [data, series, xAxisKey, showLegend]);

  return (
    <ReactECharts
      option={option}
      style={{
        width: "100%",
        height,
      }}
      opts={{
        renderer: "canvas",
      }}
    />
  );
};

export default BridgeLineChart;
