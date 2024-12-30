import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'
import CategoriesSimplebar from './CategoriesSimplebar';
import {ProductsData} from '../constant/data'

function CategoriesProducts() {

    const [openDropdown1, setOpenDropdown1] = useState(false);

    const toggleDropdown1 = () => {
        setOpenDropdown1(!openDropdown1);
    };

    return (
        <div className='py-8'>
            <div className='flex items-center justify-between'>
                <span className='font-bold'>2,683 Items Found</span>
                <CategoriesSimplebar />
                <div className='flex items-center gap-2'>
                    <span >Sort by:</span>
                    <div className="relative text-left mx-2 flex items-center gap-2">

                        <button
                            onClick={toggleDropdown1}
                            className="inline-flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 bg-white "
                        >
                            <span className='text-sm font-bold'>Lowest Price

                            </span>
                            <Icon icon="uis:angle-down" className="text-2xl" />
                        </button>

                        <div
                            className={`absolute top-[80%] right-0 z-10 mt-2 w-48 origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out transform ${openDropdown1 ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                                }`}
                            style={{
                                transformOrigin: "top",
                            }}
                        >
                            <ul className=" p-4 space-y-6 text-gray-500">
                                    <li className='text-sm font-bold'>Higest Price</li>
                                    <li className='text-sm font-bold'>New Arrival</li>
                                    <li className='text-sm font-bold'>Most Order</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 gap-4">

                {ProductsData.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col h-full border-2 border-gray-100 rounded-lg p-4 shadow-sm overflow-hidden group"
                    >
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
                            <div className="mt-4 absolute bottom-0 right-0">
                                <button
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${product.action === 'add' ? 'bg-theme' : 'bg-theme'
                                        }`}
                                >
                                    {product.action === 'add' ? (
                                        <Icon icon="ic:round-plus" className="text-2xl" />
                                    ) : (
                                        <Icon icon="solar:eye-linear" className="text-xl" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="mb-2 flex items-center gap-3">
                            <p className="text-base font-bold">{product.price}</p>
                            {product.oldPrice && (
                                <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                            )}
                        </div>

                        <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>

                        <p className="text-sm mt-auto text-gray-500">{product.quantity}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default CategoriesProducts