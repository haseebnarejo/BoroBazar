import React from 'react'
import DynamicSwitch from '../../components/DynamicSwitch'

function Notification() {
    return (
        <div>
            <div className='mb-10'>
                <h3 className='font-bold text-2xl xxl:text-4xl'>
                    Personal Information
                </h3>
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div>
                    <h6 className='font-bold'>Text messages</h6>
                    <p className='text-[15px] text-gray-500'>Share your profile information to collect the product search result</p>
                </div>

                <DynamicSwitch />
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div>
                    <h6 className='font-bold'>Call before checkout</h6>
                    <p className='text-[15px] text-gray-500'>Share your profile information to collect the product search result</p>
                </div>

                <DynamicSwitch />
            </div>
            <div className='my-12'>
                <h3 className='font-bold text-2xl xxl:text-4xl'>
                Account Information
                </h3>
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div>
                    <h6 className='font-bold'>Latest update about product</h6>
                    <p className='text-[15px] text-gray-500'>Share your profile information to collect the product search result</p>
                </div>

                <DynamicSwitch />
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div>
                    <h6 className='font-bold'>Website Maintenance</h6>
                    <p className='text-[15px] text-gray-500'>Share your profile information to collect the product search result</p>
                </div>

                <DynamicSwitch />
            </div>
        </div>
    )
}

export default Notification