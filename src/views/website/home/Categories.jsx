import { Swiper } from '../../../components/shared/Swiper';
import Heading from '../../../components/shared/Heading';
import { Link } from 'react-router-dom';
import { Slides2 } from '../../../constant/data'; 

function Categories() {
    return (
        <div className="container py-12">
            <Heading
                title="What food you love to order"
                subtitle="Here order your favorite foods from different categories"
            />
            <Swiper
                breakpoints={{
                    0: { slidesPerView: 2, spaceBetween: 0 },
                    420: { slidesPerView: 3, spaceBetween: 0 },
                    640: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 5, spaceBetween: 20 },
                    1024: { slidesPerView: 6, spaceBetween: 20 },
                    1280: { slidesPerView: 7, spaceBetween: 20 },
                }}
                showNavigation={true}
                showPagination={false}
                autoplay={true}
                loop={true}
                containerClassName="categories-swiper"
                slideClassName="swiper-slide"
            >
                {Slides2.map((category, index) => (
                    <div key={index} className="w-full flex flex-col items-center justify-center group">
                        <Link to="/categories">
                            <div className="w-32 h-32 xl:w-36 xl:h-36 2xl:w-44 2xl:h-44 mb-2 mx-auto rounded-full bg-[#eef1f3] shadow-md overflow-hidden relative flex items-center justify-center">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="object-contain w-full h-full absolute transition-all duration-500 transform group-hover:translate-x-full group-hover:scale-50 group-hover:opacity-0"
                                />
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="object-contain w-full h-full absolute transition-all duration-500 transform translate-x-[-100%] scale-50 opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
                                />
                            </div>
                            <h3 className="mt-2 text-center text-base font-semibold text-gray-700">
                                {category.name}
                            </h3>
                        </Link>
                    </div>
                ))}
            </Swiper>
        </div>
    );
}

export default Categories;
    