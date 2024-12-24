import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

function Wishlist() {
  const [fill, setFill] = useState(true);

  function handleClick (){
    setFill(!fill)
  }

  return (
    <div>
      <div className='mb-10'>
        <h3 className='font-bold text-2xl xxl:text-4xl'>
          Favorite List
        </h3>
      </div>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <img src="../assets/images/wishlist/p-1.webp" alt="img" />
          <div className='flex flex-col space-y-1'>
            <p>Ocean Mist Farms Green Leaf Lettuce</p>
            <span className='text-sm'>1 each</span>
            <h6 className='font-bold text-lg'>$1.74</h6>
          </div>
        </div>

        <div className='flex items-center self-end sm:self-center gap-2'>
          <Icon icon={fill ? "mdi:heart" : "mdi-light:heart"} onClick={() => handleClick()} width="24" height="24" className="text-[#02b290]" />
          <span className='font-bold text-theme'>Favourited</span>
        </div>
      </div>
      <hr className='my-6'/>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <img src="../assets/images/wishlist/p-1.webp" alt="img" />
          <div className='flex flex-col space-y-1'>
            <p>Ocean Mist Farms Green Leaf Lettuce</p>
            <span className='text-sm'>1 each</span>
            <h6 className='font-bold text-lg'>$1.74</h6>
          </div>
        </div>

        <div className='flex items-center self-end sm:self-center gap-2'>
          <Icon icon={fill ? "mdi:heart" : "mdi-light:heart"} onClick={() => handleClick()} width="24" height="24" className="text-[#02b290]" />
          <span className='font-bold text-theme'>Favourited</span>
        </div>
      </div>
      <hr className='my-6'/>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <img src="../assets/images/wishlist/p-1.webp" alt="img" />
          <div className='flex flex-col space-y-1'>
            <p>Ocean Mist Farms Green Leaf Lettuce</p>
            <span className='text-sm'>1 each</span>
            <h6 className='font-bold text-lg'>$1.74</h6>
          </div>
        </div>

        <div className='flex items-center self-end sm:self-center gap-2'>
          <Icon icon={fill ? "mdi:heart" : "mdi-light:heart"} onClick={() => handleClick()} width="24" height="24" className="text-[#02b290]" />
          <span className='font-bold text-theme'>Favourited</span>
        </div>
      </div>
      <hr className='my-6'/>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <img src="../assets/images/wishlist/p-1.webp" alt="img" />
          <div className='flex flex-col space-y-1'>
            <p>Ocean Mist Farms Green Leaf Lettuce</p>
            <span className='text-sm'>1 each</span>
            <h6 className='font-bold text-lg'>$1.74</h6>
          </div>
        </div>

        <div className='flex items-center self-end sm:self-center gap-2'>
          <Icon icon={fill ? "mdi:heart" : "mdi-light:heart"} onClick={() => handleClick()} width="24" height="24" className="text-[#02b290]" />
          <span className='font-bold text-theme'>Favourited</span>
        </div>
      </div>
      <hr className='my-6'/>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <img src="../assets/images/wishlist/p-1.webp" alt="img" />
          <div className='flex flex-col space-y-1'>
            <p>Ocean Mist Farms Green Leaf Lettuce</p>
            <span className='text-sm'>1 each</span>
            <h6 className='font-bold text-lg'>$1.74</h6>
          </div>
        </div>

        <div className='flex items-center self-end sm:self-center gap-2'>
          <Icon icon={fill ? "mdi:heart" : "mdi-light:heart"} onClick={() => handleClick()} width="24" height="24" className="text-[#02b290]" />
          <span className='font-bold text-theme'>Favourited</span>
        </div>
      </div>
      <hr className='my-6'/>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <img src="../assets/images/wishlist/p-1.webp" alt="img" />
          <div className='flex flex-col space-y-1'>
            <p>Ocean Mist Farms Green Leaf Lettuce</p>
            <span className='text-sm'>1 each</span>
            <h6 className='font-bold text-lg'>$1.74</h6>
          </div>
        </div>

        <div className='flex items-center self-end sm:self-center gap-2'>
          <Icon icon={fill ? "mdi:heart" : "mdi-light:heart"} onClick={() => handleClick()} width="24" height="24" className="text-[#02b290]" />
          <span className='font-bold text-theme'>Favourited</span>
        </div>
      </div>
    </div>
  )
}

export default Wishlist