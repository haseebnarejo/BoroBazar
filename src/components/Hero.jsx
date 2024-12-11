import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Hero() {
  return (
    <div className='relative mb-8'>
      <img src={"./assets/images/hero/banner.webp"} className='w-full h-[650px] object-cover' />
      <div className="container flex justify-center md:justify-start absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className='sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-center'>
          <h1 className='text-2xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-extrabold text-[#0b4635] leading-[45px] xl:leading-[50px] 2xl:leading-[70px] mb-3 '>Healthy vegetable that you deserve to eat fresh</h1>
          <div className='md:w-8/12 mx-auto mb-5'>
            <p className='text-lg leading-9'>We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.</p>
          </div>
          <div class="relative hidden lg:flex h-[65px] rounded-md w-[90%] mx-auto focus-within:outline-2 focus-within:outline focus-within:outline-[#02b290]">
            <input
              type="text"
              id="search-input"
              class="block p-2 rounded-md h-full pl-10 w-full border border-black focus:outline-none"
              placeholder="What are you looking for?">
            </input>
            <button
              type="submit"
              class="absolute inset-y-0 right-0 flex items-center h-full rounded-md px-4">
              <Icon icon="material-symbols-light:search" class="text-2xl text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero