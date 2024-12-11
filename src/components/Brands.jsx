import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Brands() {
    // Create references for the navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='container mb-10 relative'>
            {/* Custom Navigation Buttons */}
            <div
                ref={prevRef}
                className='w-10 h-10 rounded-full bg-white hover:bg-[#02b290] hover:text-white shadow-lg flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer'>
                <Icon icon="meteor-icons:angle-left" className='text-xl' />
            </div>
            <div
                ref={nextRef}
                className=' w-10 h-10 rounded-full bg-white hover:bg-[#02b290] hover:text-white shadow-lg flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer'>
                <Icon icon="meteor-icons:angle-right" className='text-xl' />
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1536: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // Assign navigation button refs to Swiper
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="bg-yellow-100 py-4 flex items-center gap-4 group overflow-hidden">
                        <div class="w-[30%] overflow-hidden">
                            <img
                                src="./assets/images/brands/b1.png"
                                alt="Spring Cleaning"
                                class="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div class="w-[70%] pe-3">
                            <h3 class="font-bold text-lg">Spring cleaning for home appliance</h3>
                            <p class="text-gray-500 text-sm">Get your clean on supplies.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-green-100 py-4 flex items-center gap-4 group overflow-hidden">
                        <div class="w-[30%] overflow-hidden">
                            <img
                                src="./assets/images/brands/b2.png"
                                alt="Pet Food"
                                class="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div class="w-[70%] pe-3">
                            <h3 class="font-bold text-lg">Your pet choice for fresh healthy food</h3>
                            <p class="text-gray-500 text-sm">Get your clean on supplies.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-blue-100 py-4 flex items-center gap-4 group overflow-hidden">
                        <div class="w-[30%] overflow-hidden">
                            <img
                                src="./assets/images/brands/b3.png"
                                alt="Washing Item"
                                class="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div class="w-[70%] pe-3">
                            <h3 class="font-bold text-lg">Washing item with discount product</h3>
                            <p class="text-gray-500 text-sm">Get your clean on supplies.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-red-100 py-4 flex items-center gap-4 group overflow-hidden">
                        <div class="w-[30%] overflow-hidden">
                            <img
                                src="./assets/images/brands/b4.png"
                                alt="Fresh Meat"
                                class="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div class="w-[70%] pe-3">
                            <h3 class="font-bold text-lg">Fresh quality meat item with discount</h3>
                            <p class="text-gray-500 text-sm">Get your clean on supplies.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Brands;
