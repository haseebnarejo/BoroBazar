import { Icon } from '@iconify/react'

function ContactUsMain() {
    return (
        <div>
            <div className="bg-[url('assets/images/contact-us/contact-page-banner.png')] bg-cover bg-center h-[450px] relative">
                <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:px-20">
                    <div className="w-full lg:w-[50%] 2xl:w-[35%]">
                        <h3 className='text-2xl sm:text-2xl lg:text-4xl font-extrabold leading-[50px]'>Do you need support? <br className='sm:block hidden' /> Our team is ready to help</h3>
                        <p className='text-gray-500 leading-[30px]'>We are passionate about building carefully thought out <br className='sm:block hidden' /> products that will improve your design workflow.</p>
                    </div>
                </div>
            </div>
            <div className="2xl:px-20">
                <div className="container h-[750px] md:h-[550px] relative 2xl:px-20">
                    <div className='absolute left-1/2 -translate-x-1/2 -top-[70px] p-8 sm:p-16 shadow-lg w-full z-10 bg-white grid gap-10 grid-cols-1 sm:grid-cols-12'>
                        <div className='sm:col-span-12 lg:col-span-7'>
                            <h3 className='sm:text-lg lg:text-xl font-extrabold leading-[50px] mb-6'>
                                Support is our main priority
                            </h3>
                            <p className='text-gray-500 leading-[32px] truncat line-clamp-3 md:line-clamp-none'>We created reusable react components, and modern mono repo architecture, so you can build multiple apps with common components. You can use these landing for your react app. It’s super easy to deploy, we have provided complete firebase integration it.</p>
                            <div className="images flex items-center  gap-2 mt-6">
                                <img src="assets/images/contact-us/person.webp" alt="person img" className='rounded-full w-[40px] h-[40px] object-cover' />
                                <img src="assets/images/contact-us/person.webp" alt="person img" className='rounded-full w-[40px] h-[40px] object-cover' />
                                <img src="assets/images/contact-us/person.webp" alt="person img" className='rounded-full w-[40px] h-[40px] object-cover' />
                                <img src="assets/images/contact-us/person.webp" al t="person img" className='rounded-full w-[40px] h-[40px] object-cover' />
                            </div>
                        </div>
                        <div className='sm:col-span-12 lg:col-span-5'>
                            <div>
                                <div className="">
                                    <form>
                                        <div className="mb-4">
                                            <label className="text-sm block text-sm font-medium text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                className="text-sm w-full px-4 py-2 mt-2 border rounded-sm"
                                            />
                                        </div>

                                        <div className="text-sm mb-4">
                                            <label className=" block text-sm font-medium text-gray-700">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email"
                                                className="text-sm w-full px-4 py-2 mt-2 border rounded-sm"
                                            />
                                        </div>
                                        <div className="text-sm mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                                            <input
                                                type="number"
                                                required
                                                placeholder="Enter your number"
                                                className="text-sm w-full px-4 py-2 mt-2 border rounded-sm"
                                            />
                                        </div>
                                        <div className="text-sm mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                                            <textarea
                                                type="message"
                                                rows={3}
                                                required
                                                placeholder="Enter your number"
                                                className="text-sm w-full px-4 py-2 mt-2 border rounded-sm"
                                            ></textarea>
                                        </div>

                                        <div className="text-sm flex justify-center">
                                            <button
                                                type="submit"
                                                className="text-sm w-full px-4 py-2 bg-theme rounded-sm text-white font-semibold"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    <div className="flex gap-3">
                        <Icon icon="material-symbols-light:my-location" className=' text-[70px] text-gray-500' />
                        <div>
                            <h6 className='text-lg font-semibold mb-2'>Office Location</h6>
                            <p className='text-gray-500 leading-6'>2756 Quiet Valley Lane, Reseda, <br /> California, United Stats</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Icon icon="ic:round-whatsapp" className=' text-[70px] text-gray-500' />
                        <div>
                            <h6 className='text-lg font-semibold mb-2'>Call us anytime
                            </h6>
                            <p className='text-gray-500 leading-6'>Change the design through a range <br /> +89 5631 564 +88 5321 036

                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Icon icon="mdi:at" className=' text-[70px] text-gray-500' />
                        <div>
                            <h6 className='text-lg font-semibold mb-2'>Send Mail
                            </h6>
                            <p className='text-gray-500 leading-6'>support@demoagency.com  <br /> hire.us@demoteam.io</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map mt-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14420.069916364318!2d68.36633293312985!3d25.370730668665352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1732886459968!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default ContactUsMain