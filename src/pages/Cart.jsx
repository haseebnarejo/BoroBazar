import React from 'react'
import Header from '../components/Header'
import Banner2 from '../components/banner2'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ProductTable from '../components/ProductTable '
import { Icon } from '@iconify/react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Cart() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
            <Header />
            <div className="h-64 relative">
                {/* Background Image with opacity */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(./assets/images/hero/banner.webp)',
                        opacity: 0.35,
                    }}
                ></div>

                {/* Logo on top of background */}
                <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                    <Link to="/">
                        <img src="assets/images/logo/logo.svg" alt="logo" className="z-[9999] w-44" />
                    </Link>


                    <nav class="flex mt-6" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Cart</a>
                                </div>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
            <div className="container mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="col-span-1 lg:col-span-8">
                        <ProductTable />
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className='flex items-center justify-between gap-4'>
                                <div className="flex flex-col justify-between">
                                    <h6 className='text-2xl font-semibold'>Shipment</h6>
                                    <span className='text-lg text-gray-500'>Delivery Address</span>
                                </div>


                                <div className=" flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={openModal}
                                        className="rounded-md bg-theme text-white px-4 py-2"
                                    >
                                        <Icon icon="mingcute:pencil-line" className='text-2xl' />
                                    </button>
                                </div>

                                <Transition appear show={isOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black/25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95"
                                                >
                                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                                                        <div className='flex justify-between items-center gap-4 border-b pb-4 px-6'>
                                                            <Dialog.Title
                                                                as="h3"
                                                                className="text-lg font-medium leading-6 text-gray-900"
                                                            >
                                                                Shipment
                                                            </Dialog.Title>
                                                            <div>
                                                                <button
                                                                    type="button"
                                                                    className="rounded-md bg-theme text-white px-2 py-2"
                                                                    onClick={closeModal}
                                                                >
                                                                    <Icon icon="ic:round-close" className='text-2xl' />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="mt-6">

                                                            <form class="max-w-sm mx-auto">
                                                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                                                <select id="countries" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                    <option selected>Choose a country</option>
                                                                    <option value="US">United States</option>
                                                                    <option value="CA">Canada</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="DE">Germany</option>
                                                                </select>

                                                                <div>
                                                                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                                                </div>
                                                            </form>

                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>
                            <h3 className='text-xl font-semibold mt-6'>Order Summary</h3>
                            <div className="flex justify-between items-center border-b my-4 pb-3">
                                <span className='font-semibold'>Total</span>
                                <span className='font-semibold'>$120</span>
                            </div>
                            <div className="flex justify-between items-center border-b my-4 pb-3">
                                <span className='font-semibold'>Shipment Charges
                                </span>
                                <span className='font-semibold'>$120</span>
                            </div>
                            <div className="flex justify-between items-center border-b my-4 pb-3">
                                <span className='font-semibold'>Sub Total</span>
                                <span className='font-semibold'>$120</span>
                            </div>
                            <button className='w-full bg-theme text-white font-bold py-2 rounded-sm uppercase'>
                                Continue to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Banner2 />
            <Footer />
        </div>

    )
}

export default Cart