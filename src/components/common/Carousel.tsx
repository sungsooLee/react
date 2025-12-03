import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import cn from "classnames";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Carousel.module.scss";

interface CarouselProps {
  /** 슬라이드에 표시할 아이템 (string, ReactNode, 컴포넌트 등 자유롭게 가능) */
  items: React.ReactNode[];
  autoPlay?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  itemClassName?: string;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  spaceBetween = 20,
  slidesPerView = 1,
  loop = true,
  navigation = false,
  pagination = false,
  itemClassName,
  className,
}) => {
  return (
    <div className={cn(styles.carousel, className)}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        loop={loop}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        autoplay={
          autoPlay ? { delay: 2500, disableOnInteraction: false } : undefined
        }
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className={cn(styles.swiper_slide, itemClassName)}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
