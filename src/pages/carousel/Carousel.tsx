import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";

export const Carousel = ({
  children,
  perPage = 3,
  gap = 16,
}: {
  children: React.ReactNode;
  perPage?: number;
  gap?: number;
}) => {
  const [curr, setCurr] = useState(0);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = React.Children.toArray(children);
  const maxIdx = Math.max(0, items.length - perPage);

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current?.firstElementChild) {
        setWidth(
          trackRef.current.firstElementChild.getBoundingClientRect().width,
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [perPage, items.length]);

  const itemWidth = `calc((100% - ${gap * (perPage - 1)}px) / ${perPage})`;

  return (
    <div className="custom_carousel_wrapper">
      {curr > 0 && (
        <button
          onClick={() => setCurr((c) => c - 1)}
          className="nav_btn prev_btn"
        >
          Prev
        </button>
      )}

      <div
        ref={trackRef}
        className="carousel_track"
        style={{ transform: `translate3d(-${curr * (width + gap)}px, 0, 0)` }}
      >
        {items.map((child, idx) => (
          <div
            key={idx}
            onClick={() => setActive(idx)}
            className={`carousel_item_wrapper ${idx === active ? "active" : ""}`}
            style={{
              flex: `0 0 ${itemWidth}`,
              marginRight: idx === items.length - 1 ? 0 : `${gap}px`,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {curr < maxIdx && (
        <button
          onClick={() => setCurr((c) => c + 1)}
          className="nav_btn next_btn"
        >
          Next
        </button>
      )}
    </div>
  );
};
