import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-10 2xl:gap-16">
                <div className="col-span-2">
                    <div className="flex items-center mb-4">
                        <Link to={"/"}>
                            <img
                                src="/assets/images/logo/logo.svg"
                                alt="BoroBazar Logo"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>
                    <p className="text-gray-600 leading-7 mb-4">
                        We offer high-quality foods and the best delivery service, and the
                        food market you can blindly trust.
                    </p>
                    <div className="flex space-x-4">
                        <img
                            src="/assets/images/social/facebook.svg"
                            alt="Facebook"
                            className="h-6 w-6"
                        />
                        <img
                            src="/assets/images/social/twitter.svg"
                            alt="Twitter"
                            className="h-6 w-6"
                        />
                        <img
                            src="/assets/images/social/instagram.svg"
                            alt="Instagram"
                            className="h-6 w-6"
                        />
                        <img
                            src="/assets/images/social/youtube.svg"
                            alt="YouTube"
                            className="h-6 w-6"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <ul className="flex flex-col gap-4 text-gray-600">
                        <Link to={"about-us"}>
                            <li>
                                <a href="#" className="hover:underline">
                                    About us
                                </a>
                            </li>
                        </Link>
                        <Link to={"contact-us"}>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact us
                                </a>
                            </li>
                        </Link>
                        <Link to={"about-us"}>
                            <li>
                                <a href="#" className="hover:underline">
                                    About team
                                </a>
                            </li>
                        </Link>
                        <Link to={"contact-us"}>
                            <li>
                                <a href="#" className="hover:underline">
                                    Customer Support
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Our Information</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <a href="#" className="hover:underline">
                                Privacy policy update
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Terms & conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Return Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Site Map
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Community</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <a href="#" className="hover:underline">
                                Announcements
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Answer center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Discussion boards
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Giving works
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-2">
                    <h3 className="text-lg font-bold mb-4">Subscribe Now</h3>
                    <p className="text-gray-600 mb-4 leading-7">
                        Subscribe your email for newsletter and featured news based on your
                        interest.
                    </p>
                    <div className="flex items-center border-2 border-gray-300 rounded-lg px-4 py-2 focus-within:border-[#02b290] transition">
                        <Icon icon="material-symbols-light:mail-outline" className="text-gray-400 w-5 h-5 mr-3" />
                        <input
                            type="email"
                            placeholder="Write your email here"
                            className="flex-grow outline-none text-gray-600 placeholder-gray-400"
                        />
                        <button className="text-theme">
                            <Icon icon="ic:round-send" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="h-[1px] bg-gray-200 mt-12">
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-between mb-20 lg:mb-8 my-8 text-center lg:text-left">
                    <p>© Copyright 2024 All rights reserved Muhammad Haseeb Narejo - Digital Elliptical</p>
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <img src="/assets/images/payment/mastercard.svg" alt="Payment" />
                        <img src="/assets/images/payment/visa.svg" alt="Payment" />
                        <img src="/assets/images/payment/paypal.svg" alt="Payment" />
                        <img src="/assets/images/payment/jcb.svg" alt="Payment" />
                        <img src="/assets/images/payment/skrill.svg" alt="Payment" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
