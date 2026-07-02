import React, { useState, useRef } from "react";
import "./Carousel.scss";

interface CarouselProps {
  children: React.ReactNode;
  slidesPerView?: number | "auto";
  gap?: number;
  itemWidth?: string;
}

export const Carousel = ({
  children,
  slidesPerView = 3,
  gap = 16,
  itemWidth = "250px",
}: CarouselProps) => {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);

  const rafId = useRef<number | null>(null);
  const targetScroll = useRef(0);

  // 💡 좌우 버퍼 패딩값 (SCSS의 .carousel_track padding-left/right와 일치)
  const TRACK_PADDING = 16;

  const getW = () => {
    if (!trackRef.current?.firstElementChild) return 0;
    return (
      trackRef.current.firstElementChild.getBoundingClientRect().width + gap
    );
  };

  const scrollToCenter = (targetIdx: number) => {
    setActive(targetIdx);
    if (!trackRef.current) return;

    const track = trackRef.current;
    const currentItemW = getW() - gap;
    const trackWidth = track.clientWidth;

    const itemLeftPos = targetIdx * getW() + TRACK_PADDING;
    const centerOffset = trackWidth / 2 - currentItemW / 2;

    targetScroll.current = Math.max(0, itemLeftPos - centerOffset);

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(smoothScrollLoop);
  };

  const smoothScrollLoop = () => {
    if (!trackRef.current) return;
    const currentScroll = trackRef.current.scrollLeft;
    const diff = targetScroll.current - currentScroll;
    const step = diff * 0.08;

    trackRef.current.scrollLeft += step;

    if (Math.abs(diff) > 0.08) {
      rafId.current = requestAnimationFrame(smoothScrollLoop);
    } else {
      trackRef.current.scrollLeft = targetScroll.current;
    }
  };

  const handleNav = (dir: "prev" | "next") => {
    const nextActive =
      dir === "next"
        ? Math.min(items.length - 1, active + 1)
        : Math.max(0, active - 1);
    scrollToCenter(nextActive);
  };

  const getItemStyle = () => {
    if (slidesPerView === "auto") {
      return { flex: `0 0 ${itemWidth}`, marginRight: `${gap}px` };
    }
    return {
      flex: `0 0 calc((100% - ${TRACK_PADDING * 2}px - ${gap * (slidesPerView - 1)}px) / ${slidesPerView})`,
      marginRight: `${gap}px`,
    };
  };

  return (
    <div className="custom_carousel_container">
      {active > 0 && (
        <button onClick={() => handleNav("prev")} className="nav_btn prev_btn">
          Prev
        </button>
      )}

      <div className="carousel_view_window">
        <div ref={trackRef} className="carousel_track">
          {items.map((child, idx) => (
            <div
              key={idx}
              onClick={() => scrollToCenter(idx)}
              className={`carousel_item_wrapper ${idx === active ? "active" : ""}`}
              style={getItemStyle()}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {active < items.length - 1 && (
        <button onClick={() => handleNav("next")} className="nav_btn next_btn">
          Next
        </button>
      )}
    </div>
  );
};
