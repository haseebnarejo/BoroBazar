import { useRef, useEffect } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Swiper = ({
  children,
  breakpoints,
  className,
  showNavigation = true,
  showPagination = false,
  autoplay = false,
  loop = false,
  spaceBetween = 10,
  customButtons,
  containerClassName = "relative",
  slideClassName,
  navigationClassName,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Dynamically update swiper navigation refs
    if (customButtons?.prev) prevRef.current = document.querySelector('.custom-prev');
    if (customButtons?.next) nextRef.current = document.querySelector('.custom-next');
  }, [customButtons]);

  const defaultBreakpoints = {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  };

  const swiperProps = {
    slidesPerView: 1,
    spaceBetween,
    loop,
    modules: [SwiperNavigation, Pagination, Autoplay],
    className: `swiper-container ${className || ''}`,
    breakpoints: breakpoints || defaultBreakpoints,
    ...(showNavigation && {
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
    }),
    ...(showPagination && {
      pagination: { clickable: true },
    }),
    ...(autoplay && {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    }),
  };

  return (
    <div className={containerClassName}>
      {showNavigation && customButtons && (
        <>
          <div
            className="custom-prev"
            ref={prevRef}
          >
            {customButtons.prev}
          </div>
          <div
            className="custom-next"
            ref={nextRef}
          >
            {customButtons.next}
          </div>
        </>
      )}

      <SwiperComponent {...swiperProps}>
        {children.map((child, index) => (
          <SwiperSlide key={index} className={slideClassName}>
            {child}
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};
