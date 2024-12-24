import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function ChangePassword() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div>
      <div className="mb-10">
        <h3 className="font-bold text-2xl xxl:text-4xl">Help Center</h3>
      </div>
      <form>
        {/* Old Password */}
        <div className="flex flex-col relative w-full lg:w-[70%] mb-6">
          <label className="text-sm font-semibold text-gray-500">Old Password</label>
          <div className="relative">
            <input
              type={showOldPassword ? 'text' : 'password'}
              className="w-full mt-2 text-sm p-3 border border-gray-300 rounded-md h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290] pr-10"
            />
            <Icon
              icon={showOldPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'}
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              fontSize={20}
            />
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col relative w-full lg:w-[70%]">
          <label className="text-sm font-semibold text-gray-500">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              className="w-full mt-2 text-sm p-3 border border-gray-300 rounded-md h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290] pr-10"
            />
            <Icon
              icon={showNewPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'}
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              fontSize={20}
            />
          </div>
        </div>
        <div className='flex justify-start mt-6'>
          <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm' onClick={() => handleOpen(2)}>
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
