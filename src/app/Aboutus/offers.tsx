'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import What from '@/app/Home/assets/wwd.png'
import { gsap } from 'gsap';
import MobileOffers from './Mobile-UI/OfferscolCompany';
import { JSX } from 'react';


type TabValue = 'colleges' | 'companies';



const handleClickOne = () => {
    gsap.to(".moving-bar ", {
        duration: 0.3,
        repeat: 0,
        x: 1,
    });
};

const handleClickTwo = () => {
    gsap.to(".moving-bar", {
        x: 310,
        duration: 0.3,
        repeat: 0,
    });
};

const handleClickMobile1 = () => {
    gsap.to(".moving-mobile-bar", {
        duration: 0.3,
        repeat: 0,
        x: 1,
    });
};
const handleClickMobile2 = () => {
    gsap.to(".moving-mobile-bar", {
        duration: 0.3,
        repeat: 0,
        x: 160,
    });
};


export const Techsupport = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48"><circle cx="24" cy="32.64" r="2.057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.966 16.731c0-1.666.675-3.175 1.767-4.267a6.034 6.034 0 0 1 10.301 4.267c0 1.667-.563 3.3-1.767 4.267c-1.249 1.002-4.289 2.643-4.289 5.196" strokeWidth="2.5" />
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M41.121 21.621C41.121 12.166 33.456 4.5 24 4.5S6.879 12.166 6.879 21.621c0 7.425 4.734 13.728 11.343 16.1L24 43.5l5.778-5.778c6.609-2.373 11.343-8.676 11.343-16.1" strokeWidth="2.5" />
    </svg>
);
export const Vacplacement = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 16 16" strokeWidth="1.2">
        <path fill="currentColor" d="M10.386 9.836a2.5 2.5 0 1 1 3.611.667C15.212 11.173 16 12.46 16 14v1.5a.5.5 0 1 1-1 0V14c0-1.724-1.276-3-3-3c-.91 0-1.298-.02-1.805-.122c-1.25-.254-2.333-1-3.585-2.566a.5.5 0 1 1 .78-.624c.9 1.124 1.653 1.74 2.434 2.043c.155.052.345.083.562.105m1.785.128q.125.015.251.034L12.5 10a1.5 1.5 0 1 0-.33-.036M9.78 11.97a.5.5 0 0 1 .5.5a1 1 0 0 1-.05.231c-.179.38-.23.774-.23 1.302v1.5a.5.5 0 1 1-1 0v-1.5c0-.657.072-1.186.307-1.696a.5.5 0 0 1 .473-.337M5.958 5.772a.5.5 0 0 1-.78.625L3.11 3.812a.5.5 0 1 1 .78-.624zM1 11h5.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h12a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V1H1z" />
    </svg>
);

export const TrainingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32" strokeWidth="1.2">
        <path fill="currentColor" d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z" />
    </svg>
);

export const HiredImage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V6c0-1.886 0-2.828-.586-3.414S9.886 2 8 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v12c0 1.886 0 2.828.586 3.414S4.114 22 6 22zm0 0h6c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8h-6m6.5 8h-3m3-4h-3m-7 2h-3m3-4h-3m3-4h-3" color="currentColor" />
    </svg>
);
export const HSRsolution = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 1024 1024"><path fill="currentColor" d="M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8M480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m356.8-74.4c29-26.3 47.2-64.3 47.2-106.6c0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6c-57 32.5-96.2 92.7-99.2 162.1c-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3c-2.9-69.5-42.2-129.6-99.2-162.1M692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80" /></svg>
);
export const Corporate = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48" strokeWidth="1.2">
        <path fill="currentColor" fillRule="evenodd" d="M6 6h31v5h-2V8H8v23h21.387v2H6zm30 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2.031 2.01c1.299 0 2.327.584 3 1.486c.629.845.895 1.89.955 2.855a7.6 7.6 0 0 1-.397 2.92c-.3.87-.807 1.77-1.589 2.387V40.5a1.5 1.5 0 0 1-2.98.247L35.73 33h-.298l-1.458 7.776A1.5 1.5 0 0 1 31 40.5V26.233a63 63 0 0 0-.592.919l-.078.123l-.02.032l-.005.009a1.5 1.5 0 0 1-1.274.707h-5a1.5 1.5 0 1 1 0-3h4.177c.243-.376.563-.864.899-1.354c.35-.511.736-1.052 1.08-1.476c.167-.207.354-.423.542-.6c.092-.087.22-.2.376-.3a1.7 1.7 0 0 1 .926-.282z" clipRule="evenodd" />
    </svg>
);





const Offers = () => {
    const [activeTab, setActiveTab] = useState<TabValue>('colleges');

    const Colleges: { title?: string; para: string; icon: JSX.Element }[] = [
        {
            title: "Outreach Programs",
            para: "Connecting colleges with industry experts to foster innovation and career growth.",
            icon: <TrainingIcon />
        },
        {
            title: "VAC & Placement Training",
            para: "Equipping students with essential skills, certifications, and job readiness.",
            icon: <Vacplacement />
        },
        {
            title: "Product & Tech Support",
            para: "Offering software solutions and expert assistance for seamless integration.",
            icon: <Techsupport />
        },
    ];

    const Companies: { title?: string; para: string; icon: JSX.Element }[] = [
        {
            title: "Specialized Corporate Training",
            para: "Tailored programs to upskill teams and boost productivity.",
            icon: <Corporate />
        },
        {
            title: "Corporate Hiring",
            para: "Connecting businesses with top talent to fulfill workforce needs efficiently and effectively.",
            icon: <HiredImage />
        },
        {
            title: "CSR Solutions",
            para: "Helping businesses create meaningful and impactful social responsibility initiatives.",
            icon: <HSRsolution />
        },
    ];


    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#offers') {
            setActiveTab('companies'); // Set to 'companies' if that's your requirement
        }
    }, []);


    return (
        <>
            <div className="py-10 lg:block hidden  bg-sky-50">
                <section className="container p-5 mx-auto px-4 max-w-7xl ">
                    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabValue)} className="w-full">
                        <div className='py-5'>
                            <div className="flex justify-center">
                                <div className="flex gap-5 w-full pb-2 justify-center">
                                    <button className={`text-sm lg:text-lg w-1/2 flex justify-end mx-auto font-medium ${activeTab === 'colleges'
                                        ? 'text-black'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                        onClick={() => {
                                            setActiveTab('colleges');
                                            handleClickOne();
                                            handleClickMobile1();
                                        }}
                                    >
                                        <h1 className='flex'>
                                            <span className="lg:flex hidden relative lg:right-1">What we offer</span>
                                            For Colleges
                                        </h1>

                                    </button>
                                    <button
                                        className={`w-1/2 lg:text-lg ml-12 font-medium ${activeTab === 'companies'
                                            ? 'text-black'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                        onClick={() => {
                                            setActiveTab('companies');
                                            handleClickTwo();
                                            handleClickMobile2();
                                        }}
                                    >
                                        <h1 className='flex'>
                                            <span className="lg:flex hidden relative lg:right-1">What we offer</span>
                                            For Companies
                                        </h1>

                                    </button>
                                </div>
                            </div>

                            <div className='lg:flex hidden mb-10 relative rounded-full mx-auto w-[38rem] h-[0.1rem] overflow-hidden -mt-1 bg-gray-100'>
                                <div className="w-[20rem] h-[0.1rem] moving-bar rounded-full absolute left-0 top-0 bg-blue-500">
                                </div>
                            </div>

                            <div className='flex lg:hidden mb-10 relative  mx-auto rounded-full w-5/12 h-[0.1rem] overflow-hidden -mt-1 bg-gray-100'>
                                <div className="w-1/2 h-[0.1rem] moving-mobile-bar rounded-full absolute left-0 top-0">
                                </div>
                            </div>
                            
                        </div>


                        <div className="container flex lg:hidden flex-col mx-auto px-6 py-10 w-11/12  max-h-[36rem] rounded-lg text-center gap-40 bg-blue-100 items-center">

                            <div className=''>
                                <div className=''>
                                    <h1  className="flex w-full  text-2xl lg:text-5xl ">What we offer for

                                    </h1>
                                    <h1  className="flex w-full text-sky-500 font-bold text-2xl lg:text-5xl tracking-wider">{activeTab === 'colleges' ? 'colleges' : 'companies'}</h1>
                                    <h1 className='my-2 flex w-full text-start text-sm  lg:text-4xl'>Cybernaut Edu-Tech has conducted 100+ outreach programs, partnered with 25+ colleges for VAC and placement training, and supported 25+ institutions with product and tech solutions. We bridge the gap between academics and industry, empowering institutions for digital success.</h1>

                                    <ul className='w-full pb-5'>
                                        <div className='flex gap-2 justify-start '>
                                            <div className='w-2.5 h-2 bg-blue-500 relative top-1.5 rounded-full'>
                                            </div>
                                            <li className='text-start text-[0.8rem]'>Build real-working skills and get ready for top tech jobs</li>
                                        </div>
                                        <div className='flex gap-2 justify-start '>
                                            <div className='w-2.5 h-2 bg-blue-500 relative top-1.5 rounded-full'>
                                            </div>
                                            <li className='text-start text-[0.8rem]'>Build real-working skills and get ready for top tech jobs</li>
                                        </div>
                                        <div className='flex gap-2 justify-start '>
                                            <div className='w-2.5 h-2 bg-blue-500 relative top-1.5 rounded-full'>
                                            </div>
                                            <li className='text-start text-[0.8rem]'>Build real-working skills and get ready for top tech jobs</li>
                                        </div>
                                    </ul>
                                </div>
                                <Button className='lg:flex hidden justify-start rounded-full bg-gradient-to-br from-[#00A3FF] to-[#97d9ff] text-sm lg:text-xl text-center my-10 lg:px-16 lg:py-8 text-white'>Learn more</Button>
                                <div className="flex  lg:hidden justify-around gap-6 ">
                                    <button className='w-1/2 h-10 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
                                        get started
                                    </button>

                                    <div className='w-1/2 flex items-center h-10 text-sm  text-sky-500 rounded-sm py-2'>
                                        learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-5  justify-center relative -top-24 md:-top-[8rem] lg:top-0 w-full '>
                                <Image width={500} height={500} src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504501/IMG_6403_1_vimqzs.jpg" alt='' className='lg:w-[100rem] w-1/2 object-contain' />
                                <Image width={500} height={500} src={What} alt='' className='lg:hidden w-1/2 object-contain' />
                            </div>

                        </div>

                        <div className='lg:block hidden'>
                            <TabsContent value="colleges" className="mt-0 flex">
                                <div>
                                    <div className='space-y-1'>
                                        <div className="flex items-center gap-2 ">
                                            <h3 className="text-blue-500 font-bold text-xl">What we do</h3>
                                            <div className="flex">
                                                {[1, 2, 3, 4].map((_, index) => (
                                                    <span key={index} className="text-blue-500 text-xl">&#62;</span>
                                                ))}
                                            </div>
                                        </div>



                                        <h1 style={{ fontFamily: 'Loubag' }} className="text-3xl font-semibold w-[30rem] flex justify-start tracking-wider">What We Offer for Colleges to Enhance Learning and Growth</h1>

                                    

                                        <p className="text-gray-800 text-justify w-[565px] min-h-10">
                                            Cybernaut Edu-Tech has led 100+ outreach programs, partnered with 25+ colleges for VAC and placements, and helped 25+ institutions with tech solutions, bridging academics and industry.
                                        </p>



                                    </div>
                                    <div className="w-full min-h-96 flex pt-5 flex-col gap-5 ">
                                        {Colleges.map((item, i) => (
                                            <div key={i} className='w-full h-[7.2rem] relative overflow-hidden bg-[#F6F6F6] rounded-md '>
                                                <div className='w-12 h-full absolute left-0 top-0 bg-[#00A3FF]/30 '></div>
                                                <div className='w-full h-full absolute left-0 top-0 flex items-center justify-start'>
                                                    <div className='w-[8rem] h-full flex items-center justify-center '>
                                                        <div className='w-[3.7rem] h-[3.7rem] flex items-center justify-center rounded-full border-2 border-white bg-white overflow-hidden'>
                                                            {item.icon} {/* Render the icon directly */}
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-full flex flex-col py-4'>
                                                        <h1 className='font-semibold text-start text-md '>{item.title}</h1>
                                                        <p className="flex justify-start text-left items-start text-sm">{item.para}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[30rem] h-[35rem] items-center justify-center flex relative left-32 top-8 '>
                                        <Image width={500} height={500} src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504501/IMG_6403_1_vimqzs.jpg" alt='' className='w-full h-full rounded-lg object-cover' />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="companies" className="mt-0 flex">
                                <div>
                                    <div className='space-y-1'>
                                        <div className="flex items-center gap-2 ">
                                            <h3 className="text-blue-500 font-bold text-xl">What we do</h3>
                                            <div className="flex">
                                                {[1, 2, 3, 4].map((_, index) => (
                                                    <span key={index} className="text-blue-500 text-xl">&#62;</span>
                                                ))}
                                            </div>
                                        </div>
                                        <h1 style={{ fontFamily: 'Loubag' }} className="text-3xl font-semibold flex w-[31rem] justify-start tracking-wider">What We Offer for Companies to Enhance Growth and Success</h1>
                                     
                                        <p className="text-gray-800  text-justify w-[565px] min-h-20 ">
                                            Cybernaut Edu-Tech helps companies build strong teams, streamline hiring, and drive impactful initiatives, offering solutions to grow, adapt, and thrive in a dynamic corporate landscape.
                                        </p>
                                    </div>
                                    <div className="w-full h-96 flex mt-5 flex-col gap-5 ">
                                        {Companies.map((item, i) => (
                                            <div key={i} className='w-full h-[6.7rem] relative overflow-hidden bg-[#F6F6F6] rounded-md '>
                                                <div className='w-12 h-full absolute left-0 top-0 bg-[#00A3FF]/30 '></div>
                                                <div className='w-full h-full absolute left-0 top-0 flex items-center justify-start'>
                                                    <div className='w-[8rem] h-full flex items-center justify-center '>
                                                        <div className='w-[3.7rem] h-[3.7rem] flex items-center justify-center rounded-full  border-2 border-white overflow-hidden bg-white'>
                                                            {item.icon} {/* Render the icon directly */}
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-full py-3 flex flex-col '>
                                                        <h1 className='font-semibold text-start text-sm '>{item.title}</h1>
                                                        <p className="flex justify-start text-left items-start text-sm">{item.para}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-[30rem]  items-center justify-center flex relative left-32'>
                                    <div>
                                        <Image width={500} height={500} src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717500/0ecc75ea-28cd-4c67-aacd-376dfc92d8fc.png" alt='' className='w-full h-full rounded-lg object-cover' />
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </section>
            </div>
            <div className='lg:hidden block'>
                <MobileOffers />
            </div>
        </>
    );
};

export default Offers;