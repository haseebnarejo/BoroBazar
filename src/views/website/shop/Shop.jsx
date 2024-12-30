import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react'; // Import Iconify
import Banner from '../../../components/shared/Banner';
import { shops } from '../../../constant/data';
import NavigationPages from '../../../components/ui/NagivationPages'; // Import NavigationPages component


function Shop() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    // { label: 'Cart', link: '/cart' },
  ];
  return (
    <div>
      <div className="h-64 relative mb-10">
        {/* Background Image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(./assets/images/shop/shop-page.jpg)',
          }}
        ></div>

        {/* Logo on top of background */}
        <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <h1 className="font-bold text-[24px] sm:text-[34px] md:text-[40px] text-white">
            Shop Page
          </h1>

          <NavigationPages breadcrumbs={breadcrumbs}/>
        </div>
      </div>
      <div className="container">
        <h3 className="font-bold text-xl mb-3">All Shops</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shops.map((shop) => (
            <Link to={`/shop/${shop.id}`} key={shop.id}>
              <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-[80px] h-[80px] rounded-full"
                />
                <div>
                  <h6 className="font-bold mb-2">{shop.name}</h6>
                  <p className="text-sm">{shop.address}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="my-20">
        <Banner
          title="Make your online shop easier with our mobile app"
          subtitle="BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food."
          appStoreLinks={[
            'assets/images/other/app-store.png',
            'assets/images/other/play-store.png',
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

export default Shop;
