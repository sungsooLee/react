import React, { useCallback, useEffect, useMemo, useRef } from "react";
import "./DonutChart.scss";

interface DonutChartDataItem {
  name: string;
  percent: number;
  color: string;
  isOther?: boolean;
}

interface ProcessedDataItem extends DonutChartDataItem {
  startAngle: number;
  endAngle: number;
  midAngle: number;
}

interface DonutChartProps {
  data: DonutChartDataItem[];
  showPercent?: boolean;
  size?: number;
  lineWidth?: number;
  duration?: number;
  otherColor?: string;
}

const START_ANGLE = -Math.PI / 2;

const processData = (
  data: DonutChartDataItem[],
  otherColor: string,
): ProcessedDataItem[] => {
  const sorted = [...data].sort((a, b) => b.percent - a.percent);
  const total = sorted.reduce((sum, item) => sum + item.percent, 0);

  if (total < 100) {
    sorted.push({
      name: "기타",
      percent: 100 - total,
      color: otherColor,
      isOther: true,
    });
  }

  let current = 0;

  return sorted.map((item) => {
    const startAngle = START_ANGLE + (current / 100) * Math.PI * 2;

    current += item.percent;

    const endAngle = START_ANGLE + (current / 100) * Math.PI * 2;

    return {
      ...item,
      startAngle,
      endAngle,
      midAngle: (startAngle + endAngle) / 2,
    };
  });
};

const easeOutQuart = (t: number) => {
  const x = 1 - t;
  return 1 - x ** 4;
};

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  showPercent = true,
  size = 180,
  lineWidth = 36,
  duration = 1000,
  otherColor = "#DEE2E6",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataRef = useRef<ProcessedDataItem[]>([]);

  const processedData = useMemo(
    () => processData(data, otherColor),
    [data, otherColor],
  );

  const visibleItems = useMemo(
    () => processedData.filter((item) => !item.isOther),
    [processedData],
  );

  dataRef.current = processedData;

  const center = size / 2;
  const radius = (size - lineWidth) / 2;

  const draw = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      items: ProcessedDataItem[],
      progress = 1,
    ) => {
      ctx.clearRect(0, 0, size, size);

      const currentAngle = START_ANGLE + Math.PI * 2 * progress;

      items.forEach((item) => {
        if (currentAngle <= item.startAngle) return;

        const end = Math.min(currentAngle, item.endAngle);

        ctx.beginPath();
        ctx.arc(center, center, radius, item.startAngle, end);

        ctx.strokeStyle = item.color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        if (showPercent && progress >= 1 && item.percent > 0) {
          const textRadius = radius;

          const x = center + Math.cos(item.midAngle) * textRadius;

          const y = center + Math.sin(item.midAngle) * textRadius;

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "600 16px Pretendard, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          ctx.fillText(`${item.percent}%`, x, y);
        }
      });
    },
    [size, center, radius, lineWidth, showPercent],
  );

  // 최초 렌더링 시 1회만 애니메이션
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    let frame = 0;
    let startTime = 0;

    const animate = (time: number) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / duration, 1);

      draw(ctx, dataRef.current, easeOutQuart(progress));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="chart_wrapper">
      <div
        className="chart_container"
        style={{
          width: size,
          height: size,
        }}
      >
        <canvas
          ref={canvasRef}
          className="donut_canvas"
          role="img"
          aria-label="도넛 차트"
        />
      </div>

      <div className="chart_legend" aria-label="차트 범례">
        {visibleItems.map((item, index) => (
          <div
            key={item.name}
            className="legend_item"
            style={{
              animationDelay: `${0.2 + index * 0.05}s`,
            }}
          >
            <div className="legend_info">
              <span
                className="color_box"
                style={{
                  backgroundColor: item.color,
                }}
                aria-hidden="true"
              />

              <span className="legend_name">{item.name}</span>
            </div>

            {/* {showPercent && (
              <span className="legend_value">
                {item.percent}
                <i className="unit">%</i>
              </span>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export type { DonutChartProps, DonutChartDataItem, ProcessedDataItem };

export default DonutChart;
