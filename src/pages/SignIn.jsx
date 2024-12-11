import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import { useState } from 'react';


function SignIn() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };
    return (
        <div>
            <Header />
            <div className="container">
                <div className='w-full grid grid-cols-12 md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] my-16 mx-auto lg:border rounded-lg '>
                    <div class="col-span-7 hidden lg:block">
                        <img src="assets/images/sign-in/login.webp" alt="login img"   className='w-full h-full object-cover'/>
                    </div>

                    <div class="flex lg:block justify-center col-span-12 lg:col-span-5">
                        <div className='p-10 border lg:boe'>
                            <div className='flex justify-center mb-3'>
                                <img src="assets/images/logo/logo.svg" alt="" />
                            </div>
                            <div className='text-center'>
                                <h3 className='font-bold text-2xl mb-3'>
                                    Welcome Back!
                                </h3>
                                <p className='text-[15px] text-gray-500'>Don’t have an account?<Link to={""}><span className='text-theme font-bold'> Create Account</span></Link></p>
                            </div>
                            <form className='my-6'>
                                <div class="mb-5">
                                    <label for="email" class="block text-gray-500 font-semibold mb-2 text-sm dark:text-white">Email Address
                                    </label>
                                    <input type="email" id="email" class=" border h-[45px] w-full px-3 focus:outline-[#02b290] border-gray-300 text-sm rounded-md" required />
                                </div>
                                <div>
                                    <div>
                                        <label className="block text-sm mb-2 text-gray-500 font-semibold">Password</label>
                                        <div className="relative">
                                            <input
                                                id="hs-toggle-password"
                                                type={passwordVisible ? "text" : "password"}
                                                className="h-[48px] ps-4 pe-10 block w-full border border-gray-300 focus:outline-[#02b290] text-sm rounded-md"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none"
                                            >
                                                {passwordVisible ? (
                                                    <Icon
                                                        icon="mdi:eye"
                                                        className="shrink-0"
                                                        width={24}
                                                        height={24}
                                                    />
                                                ) : (
                                                    <Icon
                                                        icon="mdi:eye-off"
                                                        className="shrink-0"
                                                        width={24}
                                                        height={24}
                                                    />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className='flex items-center justify-between mb-4'>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer focus:outline-[#02b290]" />
                                    <div class="relative w-11 h-6 bg-gray-200  peer-focus:ouline-[#02b290] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#02b290]"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me
                                    </span>
                                </label>
                                <span className='text-gray-500 font-semibold text-sm'>Forgot password?</span>

                            </div>
                            <div className='text-center'>
                                <button className='theme-btn w-full h-[48px] rounded-md mb-4'>Sign In</button>
                                <span className='text-gray-500'>or continue with</span>
                                <div className='flex items-center justify-center gap-4 mt-4'>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border'>
                                        <Icon icon="mdi:facebook" width="20" height="20"  className='text-gray-500'/>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border'>
                                        <Icon icon="mingcute:twitter-fill" width="20" height="20"  className='text-gray-500'/>
                                    </div>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center border'>
                                        <Icon icon="ri:linkedin-fill" width="20" height="20"  className='text-gray-500'/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default SignIn