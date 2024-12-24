import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState, useEffect } from "react";
import SimpleBar from './SimpleBar'
import BottomBar from './BottomBar';
import CartSidebar from './CartSidebar';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [smallDevices, setSamllDevices] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
      setSamllDevices(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);

  const toggleDropdown1 = () => {
    setOpenDropdown1(!openDropdown1);
    setOpenDropdown2(false);
  };

  return (
    <>
      <div className="h-[72px] flex items-center sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container flex items-center justify-between ">
          <div className='flex gap-4 items-center'>
            {!smallDevices && !isDesktop && <SimpleBar />}
            <Link to={"/"}><img src={"/assets/images/logo/logo.svg"} /></Link>
            {isDesktop && <div className="flex items-center gap-8">
              <div className="relative inline-block text-left group">
                <button
                  className="inline-flex items-center justify-center gap-1 py-6 w-full bg-white text-base font-medium  focus:outline-none group"
                >
                  Demos
                  <Icon
                    icon="flowbite:angle-down-outline"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="absolute top-[80%] mt-2 w-56 py-6 z-50 px-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <ul className="space-y-5  ">
                    <li className="block text-sm text-gray-700">
                      Modern
                    </li>
                    <li className="block text-sm text-gray-700">
                      Classic
                    </li>
                    <li className="block text-sm text-gray-700">
                      Vintage
                    </li>
                    <li className="block text-sm text-gray-700">
                      Standard
                    </li>
                    <li className="block text-sm text-gray-700">
                      Minimal
                    </li>
                    <li className="block text-sm text-gray-700">
                      Trendy
                    </li>
                    <li className="block text-sm text-gray-700">
                      Elegant
                    </li>
                    <li className="block text-sm text-gray-700">
                      Refined
                    </li>
                    <li className="block text-sm text-gray-700">
                      Antique
                    </li>
                    <li className="block text-sm text-gray-700">
                      Ancient
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative inline-block text-left group">
                <Link to={"/categories"}>
                  <button
                    className="inline-flex items-center justify-center gap-1 py-6 w-full bg-white text-base font-medium  focus:outline-none group"
                  >
                    Categories
                    <Icon
                      icon="flowbite:angle-down-outline"
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>
                </Link>

                <div
                  className="absolute top-[80%] mt-2 w-56 py-6 z-50 px-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <ul className="flex flex-col gap-5">
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Fresh Vegetables
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Diet Nutrition
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Healthy Foods
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Grocery Items
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Beaf Steak
                      </li>
                    </Link>
                  </ul>

                </div>
              </div>
              <div className="relative inline-block text-left group">
                <Link to={"/categories"}>
                  <button
                    className="inline-flex items-center justify-center gap-1 py-6 w-full bg-white text-base font-medium  focus:outline-none group"
                  >
                    Dietary
                    <Icon
                      icon="flowbite:angle-down-outline"
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>
                </Link>

                <div
                  className="absolute top-[80%] mt-2 w-56 py-6 z-50 px-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <ul className="flex flex-col gap-5">

                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Vegetarian
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Kakogenic
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Mediterranean
                      </li>
                    </Link>
                    <Link to={"/categories"}>
                      <li className="block text-sm text-gray-700">
                        Organic
                      </li>
                    </Link>
                  </ul>

                </div>
              </div>
              <Link to={"/categories"}><span className='text-base font-medium '>Search</span></Link>
              <Link to={"/shop"}><span className='text-base font-medium '>Shops</span></Link>
              <div className="relative inline-block text-left group">
                <button
                  className="inline-flex items-center justify-center gap-1 py-6 w-full bg-white text-base font-medium focus:outline-none group"
                >
                  Pages
                  <Icon
                    icon="flowbite:angle-down-outline"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="absolute top-[80%] mt-2 w-56 py-6 z-50 px-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <ul className="flex flex-col gap-5">
                    <div className="relative group/nested">
                      {/* Dropdown Trigger */}
                      <li className="flex justify-between items-center text-sm text-gray-700 cursor-pointer group-hover/nested:text-blue-500">
                        Users
                        <Icon icon="uim:angle-right" width="24" height="24"  className='ms-auto'/>
                      </li>

                      {/* Dropdown Content */}
                      <ul className="absolute left-[108%] -top-2 ml-2 py-6 w-56 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                        <Link to={"/account-setting/personal-information"}>
                          <li className="block text-sm text-gray-700 hover:bg-gray-100 px-6 py-3">
                            My Account
                          </li>
                        </Link>
                        <Link to={"/signin"}>
                          <li className="block text-sm text-gray-700 hover:bg-gray-100 px-6 py-3">
                            Sign In
                          </li>
                        </Link>
                        <li className="block text-sm text-gray-700 hover:bg-gray-100 px-6 py-3">
                          Sign Up
                        </li>
                      </ul>
                    </div>
                    <Link to={"/faq"}>
                      <li className="block text-sm text-gray-700">
                        FAQ
                      </li>
                    </Link>
                    <Link to={"/about-us"}>
                      <li className="block text-sm text-gray-700">
                        About Us
                      </li>
                    </Link>
                    <Link to={"/privacy-policy"}>
                      <li className="block text-sm text-gray-700">
                        Privacy Policy
                      </li>
                    </Link>
                    <Link to={"/terms-condition"}>
                      <li className="block text-sm text-gray-700">
                        Terms & Condition
                      </li>
                    </Link>
                    <Link to={"/contact-us"}>
                      <li className="block text-sm text-gray-700">
                        Contact Us
                      </li>
                    </Link>
                    <Link to={"/checkout"}>
                      <li className="block text-sm text-gray-700">
                        Checkout
                      </li>
                    </Link>


                    <li className="block text-sm text-gray-700">
                      404
                    </li>
                  </ul>
                </div>
              </div>
            </div>}
          </div>
          <div className='flex items-center justify-end gap-0 lg:gap-8'>
            <div className="relative inline-block text-left mx-2">
              <button
                onClick={toggleDropdown1}
                className="inline-flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 bg-white "
              >
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  alt="English"
                  className="w-5 h-5 mr-2 rounded-full"
                />
                <span className='text-base'>English - EN

                </span>
                <Icon icon="uis:angle-down" className="text-2xl" />
              </button>

              <div
                className={`absolute top-[80%] right-0 z-10 mt-2 w-full origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out transform ${openDropdown1 ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                style={{
                  transformOrigin: "top",
                }}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="English"
                      className="w-5 h-5 mr-2 rounded-full"
                    />
                    Esp - ES
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/de.png"
                      alt="German"
                      className="w-5 h-5 mr-2 rounded-full"
                    />
                    Esp - ES
                  </a>
                </div>
              </div>
            </div>
            <CartSidebar span={true} hidden={"hidden"} />
            <Link to={"/signin"}>
              <div className='hidden lg:flex items-center gap-2'>
                <Icon icon="arcticons:goodwy-contacts" className='text-2xl text-gray-500' />
                <span className='text-base'>Sign In</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {smallDevices && <BottomBar />}
    </>
  )
};



export default Navbar
