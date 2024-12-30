import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Address() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='box border-2 border-gray-200 cursor-pointer hover:border-[#02b290] rounded-md p-4 min-h-[110px]'>
                    <h6 className='text-base font-bold'>Home</h6>
                    <p className='text-gray-500'>Wolfson Institute of Preventive Medicine, London EC1M 7BA, UK</p>
                </div>
                <div className='box border-2 border-gray-200 cursor-pointer hover:border-[#02b290] rounded-md p-4 min-h-[110px]'>
                    <h6 className='text-base font-bold'>Office</h6>
                    <p className='text-gray-500'>80 Windsor Park Rd, Singapore 574175
                    </p>
                </div>
                <div className='box border-2 border-theme cursor-pointer rounded-md p-4 min-h-[110px] flex items-center justify-center gap-2'>
                    <Icon icon="ic:round-plus" className='text-theme text-2xl' />
                    <span className='text-theme font-bold'>
                        Add Address
                    </span>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm' onClick={() => handleOpen(2)}>
                    Save Change
                </button>
            </div>
        </div>
    )
}

export default Address