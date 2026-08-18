import { useState } from "react";
import "./Chart.scss";

export interface ChartItem {
  key: string;
  label: string;
  color: string;
}

export interface ChartData {
  date: string;
  values: Record<string, number>;
}

export interface Test4Props {
  showTooltip?: boolean;
}

const DEFAULT_ITEMS: ChartItem[] = [
  { key: "itemA", label: "RM/기업여신", color: "#1572ED" },
  { key: "itemB", label: "WM", color: "#6AD5D5" },
  { key: "itemC", label: "내부통제", color: "#95BAF6" },
  { key: "itemD", label: "고객상담", color: "#73D1F6" },
  { key: "itemE", label: "업무자동화", color: "#BE69EC" },
  { key: "itemF", label: "기타", color: "#DEE2E6" },
];

const DEFAULT_DATA: ChartData[] = [
  {
    date: "26-12-12",
    values: {
      itemA: 50,
      itemB: 40,
      itemC: 30,
      itemD: 20,
      itemE: 10,
      itemF: 15,
    },
  },
  {
    date: "26-12-13",
    values: {
      itemA: 30,
      itemB: 50,
      itemC: 40,
      itemD: 30,
      itemE: 20,
      itemF: 25,
    },
  },
  {
    date: "26-12-14",
    values: {
      itemA: 70,
      itemB: 40,
      itemC: 50,
      itemD: 20,
      itemE: 30,
      itemF: 10,
    },
  },
  {
    date: "26-12-15",
    values: {
      itemA: 40,
      itemB: 30,
      itemC: 40,
      itemD: 50,
      itemE: 20,
      itemF: 35,
    },
  },
];

export const Test4 = ({ showTooltip = true }: Test4Props) => {
  const [hoveredData, setHoveredData] = useState<{
    date: string;
    key: string;
    label: string;
    val: number;
  } | null>(null);

  const maxValue = 250;
  const yStep = 50;

  const yTicks: number[] = [];
  for (let val = maxValue; val >= 0; val -= yStep) {
    yTicks.push(val);
  }

  return (
    <div className="stacked_bar_chart">
      <div className="chart_header">
        <h3 className="chart_title">카테고리별 Agent 사용 추이</h3>
        <div className="chart_legend">
          {DEFAULT_ITEMS.map((item) => (
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
              {DEFAULT_DATA.map((d) => {
                const total = DEFAULT_ITEMS.reduce(
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
                      {DEFAULT_ITEMS.map((item) => {
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
            {DEFAULT_DATA.map((d) => (
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

export default Test4;
