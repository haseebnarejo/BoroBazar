import { Icon } from '@iconify/react/dist/iconify.js';
import Heading from '../../../components/shared/Heading';
import { items } from '../../../constant/data';
import { Swiper } from '../../../components/shared/Swiper';

function Collections() {
  return (
    <>
      <Heading
        title="Curated collections"
        subtitle="We have categories the best quality grocery items"
      />    

      <div className="container relative">
        <Swiper
          showNavigation
          showPagination
          spaceBetween={10}
          breakpoints={{
            540: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1536: { slidesPerView: 4, spaceBetween: 10 },
          }}
          navigationClassName="absolute z-10 -translate-y-1/2 top-1/2"
          customButtons={{
            prevButton: (
              <div className="w-10 h-10 rounded-full bg-white hover:bg-[#02b290] hover:text-white shadow-lg flex items-center justify-center -left-6 cursor-pointer">
                <Icon icon="meteor-icons:angle-left" className="text-xl" />
              </div>
            ),
            nextButton: (
              <div className="w-10 h-10 rounded-full bg-white hover:bg-[#02b290] hover:text-white shadow-lg flex items-center justify-center -right-6 cursor-pointer">
                <Icon icon="meteor-icons:angle-right" className="text-xl" />
              </div>
            ),
          }}
          className="mySwiper"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white h-full border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-all duration-500 ease-out"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate line-clamp-1 text-ellipsis">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 truncate line-clamp-1 text-ellipsis">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Collections;
