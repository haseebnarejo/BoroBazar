import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Heading from './Heading';

function Collections() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const items = [
        {
            id: 1,
            img: "./assets/images/collections/c1.png",
            title: "Feel the Thirst in summer anytime",
            description: "Your body's way of telling you that it's time to hydrate.",
        },
        {
            id: 2,
            img: "./assets/images/collections/c2.png",
            title: "Most popular item for Fast food",
            description: "Tasty and spicy fast food with different cuisines to try.",
        },
        {
            id: 3,
            img: "./assets/images/collections/c3.png",
            title: "Authentic japanese food in real taste",
            description: "Your body's way of telling you that it's time to eat to try.",
        },
        {
            id: 4,
            img: "./assets/images/collections/c4.png",
            title: "Explore our family of freshest Food",
            description: "Your pet's way of telling you that it's time to enjoy to try.",
        },
    ];

    return (
        <div className='container relative'>
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
            <Heading
                title="Curated collections"
                subtitle="We have categories the best quality grocery items"
            />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    540: {
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
            

            {items.map((item) => (
                <SwiperSlide>
                    < div
                        key={item.id}
                        className="bg-white h-full border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 truncate line-clamp-1 text-ellipsis">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 truncate line-clamp-1 text-ellipsis">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>

        </div >
    )
}

export default Collections