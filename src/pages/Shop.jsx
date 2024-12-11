import React from 'react'
import Header from '../components/Header'
import Banner2 from '../components/Banner2'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Shop() {
    return (
        <div>
            <Header />
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
                    <h1 className='font-bold text-[24px] sm:text-[34px] md:text-[40px] text-white'>Shop Page
                    </h1>


                    <nav class="flex mt-6" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Cart</a>
                                </div>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
            <div className="container">
                <h3 className='font-bold text-xl mb-3'>All Shops</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link to={""}>
                        <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                            <img src="assets/images/shop/sp1.webp" alt="shop product" className='w-[80px] h-[80px] rounded-full' />
                            <div>
                                <h6 className='font-bold mb-2'>Popcorn Shop</h6>
                                <p className='text-sm'>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                            <img src="assets/images/shop/sp2.webp" alt="shop product" className='w-[80px] h-[80px] rounded-full' />
                            <div>
                                <h6 className='font-bold mb-2'>Popcorn Shop</h6>
                                <p className='text-sm'>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                            <img src="assets/images/shop/sp3.webp" alt="shop product" className='w-[80px] h-[80px] rounded-full' />
                            <div>
                                <h6 className='font-bold mb-2'>Popcorn Shop</h6>
                                <p className='text-sm'>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                            <img src="assets/images/shop/sp4.webp" alt="shop product" className='w-[80px] h-[80px] rounded-full' />
                            <div>
                                <h6 className='font-bold mb-2'>Popcorn Shop</h6>
                                <p className='text-sm'>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                            <img src="assets/images/shop/sp5.webp" alt="shop product" className='w-[80px] h-[80px] rounded-full' />
                            <div>
                                <h6 className='font-bold mb-2'>Popcorn Shop</h6>
                                <p className='text-sm'>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex items-center gap-4 p-6 rounded-md shadow-sm border">
                            <img src="assets/images/shop/sp6.webp" alt="shop product" className='w-[80px] h-[80px] rounded-full' />
                            <div>
                                <h6 className='font-bold mb-2'>Popcorn Shop</h6>
                                <p className='text-sm'>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Banner2 />
            <Footer />
        </div>
    )
}

export default Shop