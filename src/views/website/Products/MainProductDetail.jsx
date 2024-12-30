import React, { useState } from 'react'
import NavigationDetails from '../../../components/ui/NavigationDetails'
import ProdcutSwiper from './ProdcutSwiper'
import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import 'swiper/css';
import 'swiper/css/navigation';
import { ProductsData } from '../../../constant/data';
import { Swiper }from '../../../components/shared/Swiper';
import Button from '../../../components/ui/Button'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function MainProductDetail() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='container'>
            <NavigationDetails />
            {/* <Breadcrumbs/> */}
            <div className='flex flex-col lg:flex-row gap-8 mb-10'>
                <ProdcutSwiper />
                <div>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-3'>Fresh Express Iceberg Garden Salad Blend</h3>
                    <span className='text-2xl font-bold'>$35.00</span>
                    <div className='flex flex-col gap-2 my-6'>
                        <span>Available in:</span>
                        <div className='flex items-center gap-2'>
                            <button className='border p-2 rounded-sm font-semibold'>12oz</button>
                            <button className='border p-2 rounded-sm font-semibold'>24oz</button>
                            <button className='border p-2 rounded-sm font-semibold'>12oz</button>
                        </div>
                    </div>
                    <div className="h-[50px] bg-[#f3f5f9] flex items-center justify-center space-x-10 rounded-md">
                        <Icon
                            icon="line-md:minus"
                            onClick={decrement}
                            className="cursor-pointer"
                            style={{ fontSize: "24px" }}
                        />
                        <span className="text-lg font-semibold">{count}</span>
                        <Icon
                            icon="line-md:plus"
                            onClick={increment}
                            className="cursor-pointer"
                            style={{ fontSize: "24px" }}
                        />
                    </div>
                    <button className='flex items-center justify-center gap-2 text-lg my-5 bg-theme text-white w-full h-[50px] font-bold rounded-sm'>
                        <Icon icon="teenyicons:bag-outline" />
                        <span>Add to Cart</span>
                    </button>
                    <div>
                        <div className="flex items-center gap-2">
                            <button className='flex items-center justify-center gap-2 text-lg my-5 border text-black w-1/2 h-[50px] font-bold rounded-sm'>
                                <Icon icon="mdi:heart-outline" />
                                <span>Add to Cart</span>
                            </button>
                            <button className='flex items-center justify-center gap-2 text-lg my-5 border text-black w-1/2 h-[50px] font-bold rounded-sm'>
                                <Icon icon="mdi:share-outline" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ant-design:tag-outlined" className='text-gray-500 text-lg' />
                            <span className=' text-gray-500 font-semibold'>Tags:</span>
                        </div>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <button className='border p-2 text-gray-500 text-sm rounded-sm font-semibold'>Fresh food</button>
                            <button className='border p-2 text-gray-500 text-sm rounded-sm font-semibold'>Organic</button>
                            <button className='border p-2 text-gray-500 text-sm rounded-sm font-semibold'>Cilantro</button>
                            <button className='border p-2 text-gray-500 text-sm rounded-sm font-semibold'>Dry Food</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nav Tabs */}
            <div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab className='!border-b-[#02b290] !capitalize font-semibold' label="Product Details" {...a11yProps(0)} />
                            <Tab className='!capitalize font-semibold' label="Reviews Rating" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div className='flex flex-col lg:flex-row gap-10]'>
                            <div className='lg:pe-10 mb-10 lg:mb-0'>
                                <p className='text-gray-700 leading-7'>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
                                    <br />
                                    <br />
                                    Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.
                                    <br />
                                    <br />

                                    Hit your next boxing workout with a combination it’s never seen before in the Combat Drop Arm Tank, including a freedom-instilling regular fit and dropped armhole to allow you to throw jabs and hooks at the punching bag with ease. A lightweight material keeps you fighting fit, and fresh.
                                    <br />
                                    <br />
                                    Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!</p>
                            </div>
                            <div class="w-full mx-auto">
                                <h2 class="text-lg font-semibold mb-2">Nutrition Facts</h2>
                                <table class="w-full border-collapse border border-gray-300 text-left">
                                    <thead>
                                        <tr className='border-b border-gray-300'>
                                            <th class="px-3 py-3 font-medium text-sm" colspan="2">
                                                <div className='flex justify-between flex-col'>
                                                    <span className='text-lg font-semibold'>Amount per serving</span>
                                                    <span className='text-2xl font-semibold'>Calories</span>
                                                </div>
                                            </th>
                                            <th class="text-right text-4xl font-bold px-2 py-1" colspan="2">70</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-gray-300">
                                            <td class="p-3 text-sm">Total Fat 5g</td>
                                            <td class="p-3 text-right text-sm">6%</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="p-3 text-sm">Cholesterol 185mg</td>
                                            <td class="p-3 text-right text-sm">62%</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="p-3 text-sm">Sodium 70mg</td>
                                            <td class="p-3 text-right text-sm">49%</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="p-3 text-sm">Total Carbohydrate 0g</td>
                                            <td class="p-3 text-right text-sm">18%</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 text-sm">Protein 6g</td>
                                            <td class="p-3 text-right text-sm">35%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className='flex flex-col lg:flex-row gap-10'>
                            <div>
                                {/* Review Card 1 */}
                                <div className="border-b p-4 bg-white">
                                    <div className="flex items-center space-x-1 mb-2">
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="mdi:star-outline" className="text-gray-300" />
                                    </div>
                                    <h3 className=" font-semibold mb-2">Amazing Service & Packaging</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Go sporty this summer with this vintage navy and white striped v-neck
                                        t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim
                                        and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model
                                        shown.
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">By <span className='font-semibold text-black'>Kavin Dustin</span></p>
                                </div>

                                {/* Review Card 2 */}
                                <div className="border-b p-4 bg-white">
                                    <div className="flex items-center space-x-1 mb-2">
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                    </div>
                                    <h3 className=" font-semibold mb-2">
                                        Promising Quality & Fast Delivery
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Go sporty this summer with this vintage navy and white striped v-neck
                                        t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim
                                        and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model
                                        shown.
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">By <span className='font-semibold text-black'>Milly Jacsion</span></p>
                                </div>

                                {/* Review Card 3 */}
                                <div className="p-4 bg-white">
                                    <div className="flex items-center space-x-1 mb-2">
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="ic:round-star" className="text-yellow-500 text-xl" />
                                        <Icon icon="mdi:star-outline" className="text-gray-300" />
                                        <Icon icon="mdi:star-outline" className="text-gray-300" />
                                        <Icon icon="mdi:star-outline" className="text-gray-300" />
                                    </div>
                                    <h3 className=" font-semibold mb-2">Late Delivery Service</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Go sporty this summer with this vintage navy and white striped v-neck
                                        t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim
                                        and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model
                                        shown.
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">By <span className='font-semibold text-black'>Kavin Dustin</span></p>
                                </div>

                            </div>
                            <div className="mx-auto bg-white w-full lg:w-[40%]">
                                <h2 className="text-lg font-semibold mb-2">Write your review</h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Your email address will not be published. Required fields are marked
                                    <span className="text-red-500"> *</span>
                                </p>

                                {/* Rating Section */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Rating <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex space-x-1">
                                        <Icon icon="mdi:star" className="w-6 h-6 text-yellow-500 cursor-pointer" />
                                        <Icon icon="mdi:star" className="w-6 h-6 text-gray-300 cursor-pointer" />
                                        <Icon icon="mdi:star" className="w-6 h-6 text-gray-300 cursor-pointer" />
                                        <Icon icon="mdi:star" className="w-6 h-6 text-gray-300 cursor-pointer" />
                                        <Icon icon="mdi:star" className="w-6 h-6 text-gray-300 cursor-pointer" />
                                    </div>
                                </div>

                                {/* Name Input */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 text-sm p-2 rounded-sm"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="mt-1 block w-full border border-gray-300 text-sm p-2 rounded-sm"
                                    ></textarea>
                                </div>

                                {/* Name and Email Section */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full border border-gray-300 text-sm p-2 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-full border border-gray-300 text-sm p-2 rounded-sm"
                                        />
                                    </div>
                                </div>


                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-theme text-white py-2 px-4 rounded-sm   focus:outline-none focus:ring-2 focus:ring-green-300 text-sm font-semibold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </CustomTabPanel>
                </Box>
            </div>
            <div className="container mb-10 relative">
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-3'>Related Products</h3>
                <Swiper
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1536: { slidesPerView: 6 },
                    }}
                    showNavigation
                    // showPagination
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
                    {ProductsData.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full border-2 border-gray-100 rounded-lg p-4 shadow-sm overflow-hidden group"
                        >
                            <div className="relative w-full h-48 mb-4 overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="object-cover h-full w-full transition-transform duration-300 transform group-hover:scale-110"
                                />
                                {product.badge && (
                                    <span className="bg-[#02b290] text-white text-xs font-bold px-3 py-1 rounded-full absolute top-2 left-2">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            <div className="mb-2 flex items-center gap-3">
                                <p className="text-base font-bold">{product.price}</p>
                                {product.oldPrice && (
                                    <p className="text-sm text-gray-500 line-through">
                                        {product.oldPrice}
                                    </p>
                                )}
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm mt-auto text-gray-500">{product.quantity}</p>
                        </div>
                    ))}
                </Swiper>
            </div>

            <div className="container mb-10 relative">
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-3'>Popcorn & Snacks</h3>
                <Swiper
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1536: { slidesPerView: 6 },
                    }}
                    showNavigation
                    // showPagination
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
                    {ProductsData.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full border-2 border-gray-100 rounded-lg p-4 shadow-sm overflow-hidden group"
                        >
                            <div className="relative w-full h-48 mb-4 overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="object-cover h-full w-full transition-transform duration-300 transform group-hover:scale-110"
                                />
                                {product.badge && (
                                    <span className="bg-[#02b290] text-white text-xs font-bold px-3 py-1 rounded-full absolute top-2 left-2">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            <div className="mb-2 flex items-center gap-3">
                                <p className="text-base font-bold">{product.price}</p>
                                {product.oldPrice && (
                                    <p className="text-sm text-gray-500 line-through">
                                        {product.oldPrice}
                                    </p>
                                )}
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm mt-auto text-gray-500">{product.quantity}</p>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default MainProductDetail 