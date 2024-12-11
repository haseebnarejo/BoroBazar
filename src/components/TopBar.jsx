import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

function TopBar() {
  return (
    <div className="bg-theme">
      <div className="container relative text-white flex justify-center gap-5 items-center p-2">
        <div className="flex items-center">
          <span className='text-sm'>Claim your online <span className='font-semibold'>FREE Delivery or Shipping</span> today! Expires in</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="bg-white text-teal-500 rounded p-1 px-2">05</div>
          <span>:</span>
          <div className="bg-white text-teal-500 rounded p-1 px-2">20</div>
          <span>:</span>
          <div className="bg-white text-teal-500 rounded p-1 px-2">02</div>
        </div>
        <Icon icon="ic:round-close" className="text-white text-2xl absolute right-0 top-1/2 -translate-y-1/2"/>
      </div>
    </div>
  );
}

export default TopBar;
