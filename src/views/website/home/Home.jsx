import Categories from './Categories';
import Products from './Products';
import Collections from './Collections';
import { Icon } from '@iconify/react';
import { Swiper } from '../../../components/shared/Swiper';
import Button from '../../../components/ui/Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from '../../../components/shared/Banner';
import { Slides1 } from '../../../constant/data';
import Heading from '../../../components/shared/Heading';
import { Link, useNavigate } from 'react-router-dom';
import { ProductsData } from '../../../constant/data';
import Textinput from '../../../components/ui/Textinput';

function Home() {
  return (
    <div>
      {/* Hero Section with Banner */}
      <Banner
        image="./assets/images/hero/banner.webp"
        title="Healthy vegetable that you deserve to eat fresh"
        subtitle="We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmers."
        titleClass="text-2xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-extrabold text-[#0b4635] leading-[45px] xl:leading-[50px] 2xl:leading-[70px] mb-3"
        subtitleClass="text-lg leading-9"
        extraContent={
          <form className="mt-6">
            <Textinput
              type="email"
              placeholder="Enter your email"
              className="block p-2 rounded-md h-full pl-10 w-full border border-black focus:outline-none"
              labelClass="block text-lg font-medium mb-2"
              isRequired
            />
          </form>
        }
      />

      {/* Custom Swiper */}
        <div className="container mb-10 relative">
          <Swiper
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            showNavigation
            showPagination
            spaceBetween={10}
            className="mySwiper"
            customButtons={{
              prev: (
                <Button className="w-10 h-10 rounded-full bg-white hover:bg-[#02b290] hover:text-white shadow-lg flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-10">
                  <Icon icon="meteor-icons:angle-left" className="text-xl" />
                </Button>
              ),
              next: (
                <Button className="w-10 h-10 rounded-full bg-white hover:bg-[#02b290] hover:text-white shadow-lg flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <Icon icon="meteor-icons:angle-right" className="text-xl" />
                </Button>
              ),
            }}
          >
            {Slides1.map((slide, index) => (
              <div
                key={index}
                className={`py-4 flex items-center gap-4 group overflow-hidden ${slide.bgClass}`}
              >
                <div className="w-[30%] overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="w-[70%] pe-3">
                  <h3 className="font-bold text-lg">{slide.title}</h3>
                  <p className="text-gray-500 text-sm">{slide.description}</p>
                </div>
              </div>
            ))}
          </Swiper>
        </div>

      {/* Categories */}
      <Categories />

      {/* Banner Section 1 */}
      <div className="my-10">
        <div className="container">
          <img src="./assets/images/banner/banner1.png" alt="banner" />
        </div>
      </div>

      {/* Promotional Banner with Custom Styling */}
      {/* <Banner
        image="./assets/images/banner/banner2.png"
        title="Exclusive Summer Offer!"
        subtitle="Get the best deals on fresh vegetables and fruits this summer."
        buttonText="Learn More"
        buttonLink="/offers"
        titleClass="text-4xl text-[#ff5733] font-bold"
        subtitleClass="text-lg text-gray-500"
        buttonClass="bg-green-500 hover:bg-green-700 px-10 py-5 rounded-lg"
      /> */}

      {/* Products Section */}
      <Products />

      {/* Popular Products Section */}
      <div className="mb-14">
        <div className="container">
          <Heading
            title="Popular products that we sold"
            subtitle="We provide the best quality & fresh grocery items near your location"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 4xl:grid-cols-7 gap-4">
            {ProductsData.map((product) => (
              <Link
                key={product.id}
                to={`/product-detail/${product.id}`}
                className="group"
              >
                <div className="flex flex-col h-full border-2 border-gray-100 rounded-lg p-4 shadow-sm overflow-hidden">
                  <div className="relative w-full h-48 mb-4 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="object-cover h-full w-full transition-transform duration-300 transform group-hover:scale-110"
                    />
                    {product.badge && (
                      <span className="bg-theme text-white text-xs font-bold px-3 py-1 rounded-full absolute top-0 left-0">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-2 flex items-center gap-3">
                    <p className="text-base font-bold">{product.price}</p>
                    {product.oldPrice && (
                      <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                    )}
                  </div>

                  <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>

                  <p className="text-sm mt-auto text-gray-500">{product.quantity}</p>

                  <Button
                    text={product.action === 'add' ? 'Add to Cart' : 'View Details'}
                    icon={product.action === 'add' ? 'ic:round-plus' : 'solar:eye-linear'}
                    iconPosition="left"
                    className="mt-4 w-full bg-theme text-white"
                    onClick={() => {

                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <Collections />

      {/* Last Banner */}
      <div className='my-20'>
        <Banner
          title="Make your online shop easier with our mobile app"
          subtitle="BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food."
          appStoreLinks={[
            "assets/images/other/app-store.png",
            "assets/images/other/play-store.png",
          ]}
          extraImage="assets/images/banner/banner-img.png"
          heightClass="h-[388px] 2xl:h-[450px] overflow-hidden"
          containerClass="flex flex-col items-center justify-center md:items-start text-center md:text-left md:block 2xl:w-1/2 overflow-hidden"
          titleClass="text-2xl sm:text-2xl 2xl:text-[42px] font-bold mb-3 2xl:leading-[3rem]"
          subtitleClass="text-[14px] 2xl:text-[17px] text-gray-500 mb-8 md:w-10/12 xl:leading-8"
        />
      </div>
    </div>
  );
}

export default Home;
