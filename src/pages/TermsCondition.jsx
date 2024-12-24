import React from 'react'
import Header from '../components/Header'
import Banner2 from '../components/Banner2'
import Footer from '../components/Footer'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function TermsCondition() {

    return (
        <div>
            <Header />
            <div className="h-64 relative">
                {/* Background Image with opacity */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(./assets/images/faq/page-faq.png)',
                    }}
                ></div>

                {/* Logo on top of background */}
                <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                    <h1 className='font-bold text-[24px] sm:text-[34px] md:text-[40px]'>Terms & Condition</h1>


                    <nav class="flex mt-6" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <Link to={"/"} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Terms Condition</a>
                                </div>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
            <div className="container mt-16">
                <div className="w-full lg:w-[80%] mx-auto">
                    <div>
                        <h3 className='text-lg font-semibold mb-6'>Last updated: February 18, 2021</h3>
                        <p className='text-[15px] text-gray-700'>“BoroBazar” is a trademark of BoroBazar Private Limited (“Company”), a company incorporated under the Companies Act, 2013 with its registered and corporate office at Plot 64H, Sector 18, Gudgeon 122001 in the course of its business. The domain name grocers.com is owned by the Company.
                            <br />
                            <br />

                            If you are a California resident, the information below also applies to you. Certain terms used in this section have the meanings given to them in the California Consumer Privacy Act of 2018 (“CCPA”).
                            <br />
                            <br />

                            Customer are advised to read and understand our Privacy Policy carefully, as by accessing the website/app you agree to be bound by the terms and conditions of the Privacy Policy and consent to the collection, storage and use of information relating to you as provided herein.
                            <br />
                            <br />

                            If you do not agree with the terms and conditions of our Privacy Policy, including in relation to the manner of collection or use of your information, please do not use or access the website/app.
                            <br />
                            <br />

                            Our Privacy Policy is incorporated into the Terms and Conditions of Use of the website/app, and is subject to change from time to time without notice. It is strongly recommended that you periodically review our Privacy Policy as posted on the App/Web.

                            Should you have any clarifications regarding this Privacy Policy, please do not hesitate to contact us at  info@borobazar.com .</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold my-10'>The collection, Storage and Use of Information Related to You</h3>
                        <p className='text-[15px] text-gray-700'>We may automatically track certain information about you based upon your behavior on the website. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website. We may also share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge, be-life and representations given to us by these third party(ies) this information is not stored.
                            <br />
                            <br />
                            <p className='leading-8'>
                                1. Identifiers (e.g. name, mailing address, email address, phone number, credit/debit card number)
                                <br />
                                2. Characteristics of protected classifications (e.g. gender, age)
                                <br />
                                3. Commercial information (e.g. products or services purchased, purchase history)
                                <br />
                                4. Internet or other electronic network activity (e.g. browse or search history)
                                <br />
                                5. Geo location data (e.g. latitude or longitude)
                                <br />
                                6. Audio, electronic, visual, or similar information (e.g. recording of Guest service calls)
                                <br />
                                7. Inferences drawn from any of the above (e.g. preferences or characteristics)
                            </p>
                        </p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mt-10'>The collection, Storage and Use of Information Related to You</h3>
                        <p className='text-[15px] text-gray-700'>To protect against the loss, misuse and alteration of the information under its control, the Company has in place appropriate physical, electronic and managerial procedures. For example, the Company servers are accessible only to authorized personnel and your information is shared with employees and authorized personnel on a need to know basis to complete the transaction and to provide the services requested by you. Although the Company endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using the website, you agree that the Company will have no liability for disclosure of your information due to errors in transmission and/or unauthorized acts of third parties.

                            Please note that the Company will not ask you to share any sensitive data or information via email or telephone. If you receive any such request by email or telephone, please do not respond/divulge any sensitive data or information and forward the information relating to the same to  info@borobazar.com  for necessary action.
                        </p>
                        <br />
                        <br />
                        <p className='leading-8'>
                            1. Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services;
                            <br />
                            2. Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance;
                            <br />
                            3. Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction;
                            <br />
                            4. Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity;
                            <br />
                            5. Debugging to identify and repair errors that impair existing intended functionality;
                            <br />
                            6. Undertaking internal research for technological development and demonstration; and
                            <br />
                            7. Undertaking activities to verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us, and to improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us.
                            <br />
                        </p>
                    </div>

                </div>

            </div>
            <Banner2 />
            <Footer />
        </div>
    )
}

export default TermsCondition