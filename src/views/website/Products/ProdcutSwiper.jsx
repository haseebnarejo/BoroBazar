import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='flex flex-col xl:flex-row justify-center gap-5 w-full lg:w-[60%]'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2000 }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full xl:w-[70%] 2xl:w-[80%]"
      >
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p1.webp" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p2.webp" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p1.webp" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p2.webp" alt="Nature 3" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        autoplay={{ delay: 2000 }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper productSwiper w-full xl:w-[30%] 2xl:w-[20%]"
      >
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p1.webp" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p2.webp" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p1.webp" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide className='border'>
          <img src="assets/images/product-detail/p2.webp" alt="Nature 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
