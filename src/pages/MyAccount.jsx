import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from './Sidebar'
import { Routes, Route } from 'react-router-dom';
import AccountSetting from './my-account/AccountSetting';
import Orders from './my-account/Orders';
import Wishlist from './my-account/Wishlist';
import Address from './my-account/Address';
import Notification from './my-account/Notification';
import LegalNotice from './my-account/LegalNotice';
import HelpCenter from './my-account/HelpCenter';
import ChangePassword from './my-account/ChangePassword';

function MyAccount() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="w-100 lg:w-[80%] mx-auto my-12  ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-6">
                        <div className="col-span-1 border">
                            <Sidebar />
                        </div>
                        <div className="col-span-2 p-5 mdp-10 border">
                            <Routes>
                                <Route path="personal-information" element={<AccountSetting />} />
                                <Route path="orders" element={<Orders />} />
                                <Route path="wishlist" element={<Wishlist />} />
                                <Route path="address" element={<Address />} />
                                <Route path="notifications" element={<Notification />} />
                                <Route path="legal-notice" element={<LegalNotice />} />
                                <Route path="help-center" element={<HelpCenter />} />
                                <Route path="change-password" element={<ChangePassword />} />
                                {/* <Route path="logout" element={<h1>Logout</h1>} /> */}
                            </Routes>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyAccount