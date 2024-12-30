import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../components/shared/Banner';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="h-64 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(./assets/images/faq/page-faq.png)',
                    }}
                ></div>

                <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                    <h1 className='font-bold text-[24px] sm:text-[34px] md:text-[40px]'>Privacy Policy</h1>

                    <nav className="flex mt-6" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Privacy Policy</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container mt-16">
                <div className="w-full lg:w-[80%] mx-auto grid grid-cols-12 gap-6">
                    <div className="hidden lg:block col-span-3">
                        <ul className="sticky top-20 space-y-4">
                            <li className={`${activeSection === 'snap' ? 'border-l-[3px] border-[#02b290] pl-2' : ''}`}><a className='font-semibold' href="#snap">Snap</a></li>
                            <li className={`${activeSection === 'personal' ? 'border-l-[3px] border-[#02b290] pl-2' : ''}`}><a className='font-semibold' href="#personal">Personal Information</a></li>
                            <li className={`${activeSection === 'other' ? 'border-l-[3px] border-[#02b290] pl-2' : ''}`}><a className='font-semibold' href="#other">Other Information</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 lg:col-span-9 space-y-10">
                        <section id="snap">
                            <h3 className="text-lg font-semibold mb-6">Snap</h3>
                            <p className="text-[15px] text-gray-700">
                                “BoroBazar” is a trademark of BoroBazar Private Limited (“Company”), a company incorporated under the Companies Act, 2013 with its registered and corporate office at Plot 64H, Sector 18, Gudgeon 122001 in the course of its business. The domain name grocers.com is owned by the Company.
                                <br /><br />
                                If you are a California resident, the information below also applies to you. Certain terms used in this section have the meanings given to them in the California Consumer Privacy Act of 2018 (“CCPA”).
                                <br /><br />
                                Customer are advised to read and understand our Privacy Policy carefully, as by accessing the website/app you agree to be bound by the terms and conditions of the Privacy Policy and consent to the collection, storage and use of information relating to you as provided herein.
                            </p>
                        </section>

                        <section id="personal">
                            <h3 className="text-lg font-semibold my-10">Personal Information</h3>
                            <p className="text-[15px] text-gray-700">
                                We may automatically track certain information about you based upon your behavior on the website. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis.
                                <br /><br />
                                This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website.
                            </p>
                        </section>

                        <section id="other">
                            <h3 className="text-lg font-semibold mt-10">Other Information</h3>
                            <p className="text-[15px] text-gray-700">
                                To protect against the loss, misuse and alteration of the information under its control, the Company has in place appropriate physical, electronic and managerial procedures. For example, the Company servers are accessible only to authorized personnel and your information is shared with employees and authorized personnel on a need-to-know basis to complete the transaction and to provide the services requested by you.
                                <br /><br />
                                Although the Company endeavours to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using the website, you agree that the Company will have no liability for disclosure of your information due to errors in transmission and/or unauthorized acts of third parties.
                            </p>
                        </section>
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

    );
};

export default PrivacyPolicy;