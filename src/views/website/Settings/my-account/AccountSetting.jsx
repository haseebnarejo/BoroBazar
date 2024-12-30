import React from 'react'
import DynamicSwitch from '../../.././../components/ui/DynamicSwitch'

function AccountSetting() {
    return (
        <div>
            <div>
                <h3 className='font-bold text-2xl xxl:text-4xl mb-4'>
                    Personal Information
                </h3>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col col-span-2 sm:col-span-1">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">First Name *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="mt-2 text-sm p-3 border border-gray-300 rounded-sm h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            required
                        />
                    </div>
                    <div className="flex flex-col col-span-2 sm:col-span-1">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-2 text-sm p-3 border border-gray-300 rounded-sm h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            required
                        />
                    </div>

                    <div className="flex flex-col col-span-2 sm:col-span-1">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Phone/Mobile *</label>
                        <input
                            type="number"
                            id="lastName"
                            name="lastName"
                            className="mt-2 text-sm p-3 border border-gray-300 rounded-sm h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            required
                        />
                    </div>
                </form>
            </div>
            <hr className='my-10' />
            <div>
                <h3 className='font-bold text-2xl xxl:text-4xl mb-4'>
                    Account Information
                </h3>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col col-span-2 sm:col-span-1">
                        <label htmlFor="aEmail" className="text-sm font-medium text-gray-700">Email *</label>
                        <input
                            type="email"
                            id="aEmail"
                            name="aEmail"
                            className="mt-2 text-sm p-3 border border-gray-300 rounded-sm h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            required
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">

                    </div>
                    <div className="flex flex-col col-span-2 sm:col-span-1">
                        <label htmlFor="accPassword" className="text-sm font-medium text-gray-700">Password *</label>
                        <input
                            type="password"
                            id="accPassword"
                            name="accPassword"
                            className="mt-2 text-sm p-3 border border-gray-300 rounded-sm h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            required
                        />
                    </div>

                    <div className="flex flex-col col-span-2 sm:col-span-1">
                        <label htmlFor="conPassword" className="text-sm font-medium text-gray-700">Confirm Password *</label>
                        <input
                            type="password"
                            id="conPassword"
                            name="conPassword"
                            className="mt-2 text-sm p-3 border border-gray-300 rounded-sm h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            required
                        />
                    </div>
                </form>
            </div>
            <hr className='my-10' />
            <div className='flex justify-between items-center gap-4 mb-10'>
                <div>
                    <h6 className='font-bold'>Share Profile Data</h6>
                    <p className='text-[15px] text-gray-500'>Share your profile information to collect the product search result</p>
                </div>

                <DynamicSwitch />
            </div>

            <div className='flex justify-between items-center mb-10'>
                <div>
                    <h6 className='font-bold'>Share Profile Data</h6>
                    <p className='text-[15px] text-gray-500'>Share your profile information to collect the product search result</p>
                </div>

                <DynamicSwitch />

            </div>
            <div className='flex justify-end'>
                <button className='theme-btn py-3 px-8 rounded-sm'>Save Changes</button>
            </div>
        </div>
    )
}

export default AccountSetting