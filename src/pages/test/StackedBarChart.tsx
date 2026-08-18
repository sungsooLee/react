import React, { useState } from "react";

export interface ChartItem {
  key: string;
  label: string;
  color: string;
}

export interface ChartData {
  date: string;
  values: Record<string, number>;
}

export interface StackedBarChartProps {
  items: ChartItem[];
  data: ChartData[];
  title?: string;
  maxValue?: number;
  yStep?: number;
  showTooltip?: boolean;
}

export const StackedBarChart = ({
  items,
  data,
  title,
  maxValue = 250,
  yStep = 50,
  showTooltip = true,
}: StackedBarChartProps) => {
  const [hoveredData, setHoveredData] = useState<{
    date: string;
    key: string;
    label: string;
    val: number;
  } | null>(null);

  // Y축 눈금 생성
  const yTicks: number[] = [];
  for (let val = maxValue; val >= 0; val -= yStep) {
    yTicks.push(val);
  }

  return (
    <div className="stacked_bar_chart">
      <div className="chart_header">
        {title && <h3 className="chart_title">{title}</h3>}
        <div className="chart_legend">
          {items.map((item) => (
            <div key={item.key} className="legend_item">
              <span className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chart_main">
        <div className="y_axis_container">
          <div className="y_axis_ticks">
            {yTicks.map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
          <div className="y_axis_spacer" />
        </div>

        <div className="chart_content">
          <div className="plot_area">
            <div className="grid_lines">
              {yTicks.map((tick) => (
                <div key={tick} className="grid_line" />
              ))}
            </div>

            <div className="columns_container">
              {data.map((d) => {
                const total = items.reduce(
                  (acc, item) => acc + (d.values[item.key] || 0),
                  0,
                );
                const stackHeightPercent = Math.min(
                  (total / maxValue) * 100,
                  100,
                );

                return (
                  <div key={d.date} className="chart_column">
                    <div
                      className="bar_stack"
                      style={{ height: `${stackHeightPercent}%` }}
                    >
                      {items.map((item) => {
                        const val = d.values[item.key] || 0;
                        if (val <= 0 || total <= 0) return null;

                        const segmentHeightPercent = (val / total) * 100;
                        const isHovered =
                          showTooltip &&
                          hoveredData?.date === d.date &&
                          hoveredData?.key === item.key;

                        return (
                          <div
                            key={item.key}
                            className="bar_segment"
                            style={{
                              height: `${segmentHeightPercent}%`,
                              backgroundColor: item.color,
                            }}
                            onMouseEnter={() =>
                              showTooltip &&
                              setHoveredData({
                                date: d.date,
                                key: item.key,
                                label: item.label,
                                val,
                              })
                            }
                            onMouseLeave={() =>
                              showTooltip && setHoveredData(null)
                            }
                          >
                            {isHovered && (
                              <div className="tooltip">
                                <span>
                                  {hoveredData.label}: {hoveredData.val}
                                </span>
                                <svg
                                  className="tooltip_arrow"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="10"
                                  viewBox="0 0 12 10"
                                  fill="none"
                                >
                                  <path
                                    d="M6.8 8.93333C6.4 9.46667 5.6 9.46667 5.2 8.93333L0 2L12 2L6.8 8.93333Z"
                                    fill="#292B2F"
                                  />
                                  <path
                                    d="M6 8.33081L9.53674e-07 0.330811L12 0.330811L6 8.33081Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="x_axis_container">
            {data.map((d) => (
              <div key={d.date} className="x_label">
                {d.date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
