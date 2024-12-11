import React from 'react'
import Header from '../components/Header'
import Banner2 from '../components/Banner2'
import Footer from '../components/Footer'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Faq() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
                    <h1 className='font-bold text-[24px] sm:text-[34px] md:text-[40px]'>Frequently Ask Question</h1>


                    <nav class="flex mt-6" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Cart</a>
                                </div>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
            <div className="container">
                <div className='max-w-2xl 2xl:max-w-4xl mx-auto mt-10'>
                    <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className={`text-base border-b-0 transition-colors ${open === 1 ? "text-theme" : ""
                                }`}
                        >
                            How do I create an account??
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className={`text-base border-b-0 transition-colors ${open === 2 ? "text-theme" : ""
                                }`}
                        >
                            How to contact with Customer Service?
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4 mb-2">
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className={`text-base border-b-0 transition-colors ${open === 3 ? "text-theme" : ""
                                }`}
                        >
                            App installation failed, how to update system information?
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className={`text-base border-b-0 transition-colors ${open === 4 ? "text-theme" : ""
                                }`}
                        >
                            App installation failed, how to update system information?
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
            <Banner2 />
            <Footer />
        </div>
    )
}

export default Faq