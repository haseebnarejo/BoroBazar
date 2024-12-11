import React from 'react'

function banner2() {
  return (
    <div className='bg-[#f2f2f2] relative h-[388px] 2xl:h-[450px]  my-16'>
      <div className="container 2xl:px-16 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-between 2xl:gap-16">
        <div className='flex flex-col items-center justify-center md:items-start text-center md:text-left md:block 2xl:w-1/2'>
          <h3 className='text-2xl sm:text-2xl 2xl:text-[42px] font-bold mb-3 2xl:leading-[3rem]'>
            Make your online shop easier with our mobile app
          </h3>
          <p className='text-[14px] 2xl:text-[17px] text-gray-500 mb-8 md:w-10/12 xl:leading-8'>BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food.

          </p>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <img src="assets/images/other/app-store.png" alt="appstore"  className='w-[40%] lg:w-auto'/>
            <img src="assets/images/other/play-store.png" alt="googleplay"  className='w-[40%] lg:w-auto'/>
          </div>
        </div>
        <img src="assets/images/banner/banner-img.png" alt="banner" className='h-[388px] 2xl:h-[450px] hidden md:block' />
      </div>
    </div>
  )
}

export default banner2