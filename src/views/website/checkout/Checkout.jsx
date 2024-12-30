import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from '@iconify/react/dist/iconify.js';
import Banner from '../../../components/shared/Banner'

function Checkout() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div className='container my-10'>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">

            <Accordion open={open === 1} className='border border-gray-200'>
              <AccordionHeader className={`px-6 ${open === 1 ? 'bg-white border-b-0' : 'bg-gray-100'} transition-all duration-300 ease-in-out`} onClick={() => handleOpen(1)}>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center border border-theme'>
                    <span className='text-theme'>1</span>
                  </div>
                  <h3 className='text-base font-bold'>Delivery Address?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-6 md:pl-16'>
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
                    Next Step
                  </button>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className='border border-gray-200'>
              <AccordionHeader className={`px-6 ${open === 2 ? 'bg-white border-b-0' : 'bg-gray-100'} transition-all duration-300 ease-in-out`} onClick={() => handleOpen(2)}>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center border border-theme'>
                    <span className='text-theme'>2</span>
                  </div>
                  <h3 className='text-base font-bold'>Delivery Schedule</h3>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-6 md:pl-16'>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-6 ">
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-theme w-[70%]'>
                    <span className='font-bold text-white'>Sat</span>
                    <span className='text-white font-semibold'>Jul 03</span>
                  </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold'>Sat</span>
                    <span className='text-gray-500 font-semibold'>Jul 03</span>
                  </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold'>Sat</span>
                    <span className='text-gray-500 font-semibold'>Jul 03</span>
                  </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold'>Sat</span>
                    <span className='text-gray-500 font-semibold'>Jul 03</span>
                  </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold'>Sat</span>
                    <span className='text-gray-500 font-semibold'>Jul 03</span>
                  </div>
                </div>
                <form className="flex items-center gap-10 my-8 flex-wrap">
                  <div className='flex items-center gap-2'>
                    <input type="radio" id="9am-10am" name='time' className='w-5 h-5 ' />
                    <label htmlFor="9am-10am">9am to 10am</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" id="9am-10am" name='time' className='w-5 h-5 ' />
                    <label htmlFor="9am-10am">9am to 10am</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" id="9am-10am" name='time' className='w-5 h-5 ' />
                    <label htmlFor="9am-10am">9am to 10am</label>
                  </div>
                </form>

                <div className='flex justify-end'>
                  <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm' onClick={() => handleOpen(3)}>
                    Next Step
                  </button>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} className='border border-gray-200'>
              <AccordionHeader className={`px-6 ${open === 3 ? 'bg-white border-b-0' : 'bg-gray-100'} transition-all duration-300 ease-in-out`} onClick={() => handleOpen(3)}>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center border border-theme'>
                    <span className='text-theme'>3</span>
                  </div>
                  <h3 className='text-base font-bold'>Contact Number</h3>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-6 md:pl-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  <div className='box border-2 border-gray-200 cursor-pointer hover:border-[#02b290] rounded-md p-4 min-h-[110px]'>
                    <h6 className='text-base font-bold'>Primary Number</h6>
                    <p className='text-gray-500'>(202) 555-0191</p>
                  </div>
                  <div className='box border-2 border-gray-200 cursor-pointer hover:border-[#02b290] rounded-md p-4 min-h-[110px]'>
                    <h6 className='text-base font-bold'>Secondary Number</h6>
                    <p className='text-gray-500'>(202) 555-0191
                    </p>
                  </div>
                  <div className='box border-2 border-theme cursor-pointer rounded-md p-4 min-h-[110px] flex items-center justify-center gap-2'>
                    <Icon icon="ic:round-plus" className='text-theme text-2xl' />
                    <span className='text-theme font-bold'>
                      Add Phone Number
                    </span>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm' onClick={() => handleOpen(4)}>
                    Next Step
                  </button>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} className='border border-gray-200'>
              <AccordionHeader className={`px-6 ${open === 4 ? 'bg-white border-b-0' : 'bg-gray-100'} transition-all duration-300 ease-in-out`} onClick={() => handleOpen(4)}>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center border border-theme'>
                    <span className='text-theme'>4</span>
                  </div>
                  <h3 className='text-base font-bold'>Payment Option</h3>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-6 md:pl-16'>
                <div className='mb-6'>
                  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Card Information</label>
                  <input type="number" id="visitors" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Card Number" required />
                  <button className='bg-theme text-white font-bold py-3 px-8 rounded-sm' onClick={() => handleOpen(5)}>
                    Pay Now
                  </button>
                </div>
                <div className='flex justify-end'>
                  <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm'>
                    Next Step
                  </button>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} className='border border-gray-200'>
              <AccordionHeader className={`px-6 ${open === 5 ? 'bg-white border-b-0' : 'bg-gray-100'} transition-all duration-300 ease-in-out`} onClick={() => handleOpen(5)}>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center border border-theme'>
                    <span className='text-theme'>5</span>
                  </div>
                  <h3 className='text-base font-bold'>Contact Number</h3>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-6 md:pl-16'>

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Instructions Note</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"></textarea>

                <div className='flex items-start gap-2 mt-6'>
                  <input type="checkbox" className='w-6 h-6' />
                  <div>
                    <h6 className='font-bold mb-2'>Leave at my door if I am not around</h6>
                    <p className='text-gray-500 text-sm '>By selecting this option you accept full responsibility for your order after it has been delivered unattended, including any loss due to theft or damage due to temperature sensitivity. </p>
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm' onClick={() => handleOpen(6)}>
                    Next Step
                  </button>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} className='border border-gray-200'>
              <AccordionHeader className={`px-6 ${open === 6 ? 'bg-white border-b-0' : 'bg-gray-100'} transition-all duration-300 ease-in-out`} onClick={() => handleOpen(6)}>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center border border-theme'>
                    <span className='text-theme'>6</span>
                  </div>
                  <h3 className='text-base font-bold'>Contact Number</h3>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-6 md:pl-16'>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-6 mb-6">
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-theme w-[70%]'>
                    <span className='font-bold text-white text-lg'>$5</span>
                  </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold text-lg'>$10</span>                                    </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold text-lg'>$15</span>                                    </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold text-lg'>$25</span>                                    </div>
                  <div className='rounded-md p-4 flex flex-col items-center justify-center bg-gray-100 w-[70%]'>
                    <span className='font-bold text-lg'>$35</span>                                    </div>
                </div>
                <div className='flex justify-end'>
                  <button className='bg-theme text-white font-bold py-4 px-8 rounded-sm' onClick={() => handleOpen(7)}>
                    Next Step
                  </button>
                </div>
              </AccordionBody>
            </Accordion>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="bg-white border border-gray-200 p-8">
              <div className='flex items-center justify-between mb-3'>
                <span className='font-bold'>Product</span>
                <span className='font-bold'>Subtotoal</span>
              </div>

              <span className='text-red-500 text-sm'>Your cart is empty</span>

              <div className="flex justify-between items-center border-b my-4 pb-3">
                <span className='font-semibold'>Total</span>
                <span className='font-semibold'>$120</span>
              </div>
              <div className="flex justify-between items-center border-b my-4 pb-3">
                <span className='font-semibold'>Shipment Charges
                </span>
                <span className='font-semibold'>$120</span>
              </div>
              <div className="flex justify-between items-center border-b my-4 pb-3">
                <span className='font-semibold'>Sub Total</span>
                <span className='font-semibold'>$120</span>
              </div>
              <button className='w-full bg-theme text-white text-sm font-bold py-2 rounded-sm uppercase mb-6'>
                Order Now
              </button>

              <p className='text-sm mb-6'>
                By placing your order, you agree to be bound by the BoroBazar <span className="text-theme">Terms of Service</span> and <span className="tex-theme">Privacy</span>. Your credit/debit card data will not saved.
              </p>
              <p className='text-sm'>
                A bag fee may be added to your final total if required by law or the retailer. The fee will be visible on your receipt after delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-20'>
        <Banner
          title="Make your online shop easier with our mobile app"
          subtitle="BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food."
          appStoreLinks={[
            "assets/images/other/app-store.png",
            "assets/images/other/play-store.png",
          ]}
          extraImage="assets/images/banner/banner-img.png"
          heightClass="h-[388px] 2xl:h-[450px] overflow-hidden"
          containerClass="flex flex-col items-center justify-center md:items-start text-center md:text-left md:block 2xl:w-1/2 overflow-hidden"
          titleClass="text-2xl sm:text-2xl 2xl:text-[42px] font-bold mb-3 2xl:leading-[3rem]"
          subtitleClass="text-[14px] 2xl:text-[17px] text-gray-500 mb-8 md:w-10/12 xl:leading-8"
        />
      </div>
    </div>
  )
}

export default Checkout