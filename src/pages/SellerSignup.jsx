import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SellerSignup() {
    const [activeTab, setActiveTab] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);

    const changeTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const prevTab = () => {
        if (activeTab > 1) {
            setActiveTab(activeTab - 1);
        }
    };

    const nextTab = () => {
        if (activeTab < 3) {
            if (!completedSteps.includes(activeTab)) {
                setCompletedSteps([...completedSteps, activeTab]);
            }
            setActiveTab(activeTab + 1);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className='w-full md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] my-16 mx-auto'>
                    <div className="flex flex-col items-center relative">
                        <div className="flex items-center w-full justify-center">
                            {[1, 2, 3].map((step) => (
                                <React.Fragment key={step}>
                                    <button
                                        className={`w-10 md:w-16 h-10 md:h-16 font-bold text-xl mx-2 rounded-full z-20 relative ${activeTab >= step ? 'bg-[#02b290] text-white' : 'bg-gray-200 text-gray-800'
                                            }`}
                                        onClick={() => changeTab(step)}
                                    >
                                        {step < 10 ? `0${step}` : step}
                                    </button>

                                    {step < 3 && (
                                        <div
                                            className={`w-24 h-1 ${activeTab > step ? 'bg-[#02b290]' : 'bg-gray-300'
                                                }`}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="mt-8 w-full border">
                            {activeTab === 1 && <div className="tab-content">
                                <div className='p-5'>
                                    <h1 className='text-4xl font-bold mb-5'>Seller Signup</h1>
                                    <h3 className='text-xl font-bold'>Personal</h3>
                                </div>
                                <form>
                                    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
                                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="fullName" className="text-lg font-medium text-gray-700">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="lastName" className="text-lg font-medium text-gray-700">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your last name"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="phone" className="text-lg font-medium text-gray-700">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col col-span-2">
                                                <label htmlFor="country" className="text-lg font-medium text-gray-700">Country</label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    className="mt-2 px-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                >
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="GB">United Kingdom</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="state" className="text-lg font-medium text-gray-700">State</label>
                                                <select
                                                    id="state"
                                                    name="state"
                                                    className="mt-2 px-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                >
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="GB">United Kingdom</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="city" className="text-lg font-medium text-gray-700">City</label>
                                                <select
                                                    id="city"
                                                    name="city"
                                                    className="mt-2 px-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                >
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="GB">United Kingdom</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col col-span-2">
                                                <label htmlFor="address" className="text-lg font-medium text-gray-700">Address</label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter Your Address"
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col col-span-2">
                                                <label htmlFor="cnic" className="text-lg font-medium text-gray-700">National Identification Number</label>
                                                <input
                                                    type="text"
                                                    id="cnic"
                                                    name="cnic"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter Your Cnic Number"
                                                    required
                                                />
                                            </div>

                                            <div className="mt-4 flex justify-end gap-6 col-span-2">
                                                <button
                                                    onClick={prevTab}
                                                    className="font-bold px-4 py-2 bg-[#02b290] text-white rounded-md"
                                                    disabled={activeTab === 1}
                                                >
                                                    Prev
                                                </button>
                                                <button
                                                    onClick={nextTab}
                                                    className="font-bold px-4 py-2 bg-[#02b290] text-white rounded-md"
                                                    disabled={activeTab === 3}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </form>

                            </div>}
                            {activeTab === 2 && <div className="tab-content">
                                <div className='p-5'>
                                    <h1 className='text-4xl font-bold mb-5'>Seller Signup</h1>
                                    <h3 className='text-xl font-bold'>Shop</h3>
                                </div>
                                <form>
                                    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
                                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col col-span-2">
                                                <label htmlFor="shopName" className="text-lg font-medium text-gray-700">Shop Name</label>
                                                <input
                                                    type="text"
                                                    id="shopName"
                                                    name="shopName"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your shop name"
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="email" className="text-lg font-medium text-gray-700">Shop Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your bussnise email"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="phone" className="text-lg font-medium text-gray-700">Shop Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col col-span-2">
                                                <label htmlFor="address" className="text-lg font-medium text-gray-700">Bussiness Address</label>
                                                <input
                                                    type='text'
                                                    id="address"
                                                    name="address"
                                                    placeholder='Enter your Bussnises Address'
                                                    className="mt-2 px-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                />
                                            </div>
                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="state" className="text-lg font-medium text-gray-700">NTN / NIC</label>
                                                <input
                                                    type='number'
                                                    id="state"
                                                    name="state"
                                                    className="mt-2 px-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder='Enter Your NTN Number'
                                                />
                                            </div>

                                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                                <label htmlFor="nic" className="text-lg font-medium text-gray-700">Sales Tax Number</label>
                                                <input
                                                    type="number"
                                                    id="nic"
                                                    name="nic"
                                                    className="mt-2 p-3 border border-gray-300 rounded-md h-[40px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                                                    placeholder="Enter Your Address"
                                                    required
                                                />
                                            </div>

                                            <div className="mt-4 flex justify-end gap-6 col-span-2">
                                                <button
                                                    onClick={prevTab}
                                                    className="font-bold px-4 py-2 bg-[#02b290] text-white rounded-md"
                                                    disabled={activeTab === 1}
                                                >
                                                    Prev
                                                </button>
                                                <button
                                                    onClick={nextTab}
                                                    className="font-bold px-4 py-2 bg-[#02b290] text-white rounded-md"
                                                    disabled={activeTab === 3}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </form>
                            </div>}
                            {activeTab === 3 && <div className="tab-content">
                                <div className='p-5'>
                                    <h1 className='text-4xl font-bold mb-5'>Seller Signup</h1>
                                    <h3 className='text-xl font-bold'>Cnic</h3>
                                </div>
                                <form>
                                    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
                                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className='col-span-2 mb-8'>
                                                <label for="file-input" class="sr-only">CNIC Front</label>
                                                <input
                                                    type="file"
                                                    name="file-input"
                                                    id="file-input"
                                                    class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
                                                />
                                            </div>
                                            <div className='col-span-2'>
                                                <label for="file-input" class="sr-only">CNIC Front</label>
                                                <input
                                                    type="file"
                                                    name="file-input"
                                                    id="file-input"
                                                    class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-end gap-6 col-span-2">
                                                <button
                                                    onClick={prevTab}
                                                    className="font-bold px-4 py-2 bg-[#02b290] text-white rounded-md"
                                                    disabled={activeTab === 1}
                                                >
                                                    Prev
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </form>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SellerSignup;