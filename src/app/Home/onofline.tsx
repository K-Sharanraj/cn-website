'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Commonbtn from '@/components/ui/Commonbtn';
import { ArrowRight } from 'lucide-react';



function OnlineOffline() {
    const [activeTab, setActiveTab] = useState('gallery');
    const [activeDiv, setActiveDiv] = useState<number>(1); // Set to 1 by default

    const onlineCards = [
        {
            title: 'Tech Trio',
            bgImage: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742448913/Tech_trio_avv3ny.png'
        },
        {
            title: 'UX Design',
            bgImage: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742448913/ux_xfzu2m.png'
        },
        {
            title: 'Full Stack',
            bgImage: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742448916/Full_Stack_pwfclb.png'
        },
        {
            title: 'Data Analytics',
            bgImage: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742448915/DataAnalytics_vnount.png'
        }
    ];

    const offlineCards = [
        {
            title: 'Metazen',
            bgImage: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742448914/Metazen_bvsqdi.png'
        },
        {
            title: 'Beyondzen',
            bgImage: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742448914/Beyondzen_l4n76p.png'
        },
    ];

    const handleDivClick = (index: number) => {
        setActiveDiv(activeDiv === index ? index : index); // Modified to keep the card open
    };

    return (
        <div className="container py-2">
            <div className="mx-auto flex-wrap xl:container">
                <h1 className="text-center font-bold my-4 text-xl lg:text-4xl w-60 lg:w-full mx-auto xl:container tracking-wider" style={{ fontFamily: 'Loubag' }}>
                    Learn. Practice. Earn. <br /> Have Fun!
                </h1>



                <section>
                    <div className="flex justify-center my-6">
                        <div className="flex lg:justify-center justify-around lg:gap-0 gap-2 py-5 w-full">
                            <button
                                className={`lg:px-7 lg:py-3 text-xl font-medium ${activeTab === 'gallery'
                                    ? 'text-black'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => {
                                    setActiveTab('gallery');
                                    setActiveDiv(1); // Reset to first card when switching tabs
                                }}
                            >
                                Online
                            </button>
                            <button
                                className={`lg:px-7 lg:py-3 text-xl font-medium ${activeTab === 'outreach'
                                    ? 'text-black'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => {
                                    setActiveTab('outreach');
                                    setActiveDiv(1); // Reset to first card when switching tabs
                                }}
                            >
                                Offline
                            </button>
                        </div>
                    </div>

                    <div className="lg:flex mb-10 hidden  relative mx-auto lg:w-[15rem] w-9/12 lg:h-[0.1rem] h-[0.1rem] overflow-hidden lg:-mt-12 -mt-10 bg-gray-300">
                        <div
                            className={`lg:w-[8rem] w-[9rem] h-[0.3rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach' ? 'lg:translate-x-[130px] translate-x-[140px]' : 'translate-x-0'
                                }`}
                        />
                    </div>
                    <div className='lg:hidden flex mb-5 relative mx-auto w-10/12 h-[0.1rem] overflow-hidden -mt-9 bg-gray-300'>
                        <div className={`w-[40%] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach'
                            ? 'translate-x-[100%] md:translate-x-[15rem] w-[50%] md:w-[21rem]'
                            : 'translate-x-0'
                            }`}>
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col gap-5 justify-center mx-6 lg:py-14">
                        <div className="lg:w-[40rem] w-full space-y-4">
                            <div className="relative overflow-hidden w-[15rem] lg:h-12 h-10 lg:w-full">
                                <div
                                    className={`absolute w-full transition-all duration-700 ease-in-out ${activeTab === 'gallery'
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-full opacity-0'
                                        }`}
                                >
                                    <h1 style={{ fontFamily: 'Loubag' }} className="text-4xl font-bold text-black tracking-wider">
                                        Hi Sagos
                                    </h1>
                                </div>
                                <div
                                    className={`absolute w-full transition-all duration-700 ease-in-out ${activeTab === 'outreach'
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-full opacity-0'
                                        }`}
                                >
                                    <h1 style={{ fontFamily: 'Loubag' }} className="text-4xl font-bold text-black tracking-wider" >
                                        Hello Sagos
                                    </h1>
                                </div>
                            </div>
                            <div className="lg:w-full float-start lg:ml-0 lg:py-0 py-4 mx-auto lg:text-lg text-sm text-gray-500 lg:min-h-[120px]">
                                {activeTab === 'gallery' ? (
                                    <p className="text-left -tracking-tight">
                                        Experience 120 minutes of immersive, hands-on learning everyday. Sharpen your tech skills, solve real-world problems, and challenge your limits—all from the comfort of your home. Stay ahead of the curve and transform your potential into mastery.
                                    </p>
                                ) : (
                                    <p className="text-left -tracking-tight">
                                        Skip the job hunt-become the candidate companies chase! In 9 months, master DSA, Full-Stack Development, and System Design with hands-on training. Work on live projects, crack mock interviews, and build a job-winning portfolio. Get Hired, Not Just Certified!
                                    </p>
                                )}
                            </div>

                            <div className="relative overflow-hidden w-60 min-h-10 py-2">
                                <Link href="/Program">
                                    <Commonbtn className='text-white flex items-center justify-center gap-2 ' >
                                        View More
                                        <ArrowRight className="h-6 w-6 " />
                                    </Commonbtn>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile and tablet view */}
                        <div className="lg:hidden block">
                            <div className="">
                                {/* {(activeTab === 'gallery' ? onlineCards : offlineCards).map((card, index) => (
                                    <div
                                        key={index}
                                        className="relative p-4 rounded-lg overflow-hidden h-32"
                                    >
                                        <Image
                                            src={card.bgImage}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                                        <span className="relative z-10 text-white font-semibold text-sm">
                                            {card.title}
                                        </span>
                                    </div>
                                ))} */}
                                <StyledWrapper className='w-full md:flex items-center justify-center mx-auto '>
                                    <div className="card flex justify-center items-center w-full">
                                        {(activeTab === 'gallery' ? onlineCards : offlineCards).map((card, index) => (
                                            <p style={{ backgroundImage: `url(${card.bgImage})`, backgroundRepeat: 'no-repeat' }} key={index}><span></span></p>
                                        ))}
                                    </div>
                                </StyledWrapper>

                            </div>
                            <Link href="/Program">
                                <button className="w-full h-10 mt-3 text-sm bg-sky-500 text-white rounded-sm hover:bg-sky-600 transition-colors">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                        {/* Desktop view */}
                        <div className="lg:flex hidden space-x-2 w-[20rem] lg:w-[40rem] h-60">
                            {(activeTab === 'gallery' ? onlineCards : offlineCards).map((card, index) => (
                                <div
                                    key={index}
                                    className={`
                                        flex-1 text-white p-2 w-80 flex 
                                        items-center justify-center cursor-pointer 
                                        transition-all duration-500 rounded-md
                                        relative overflow-hidden
                                        ${activeDiv === index + 1 ? 'flex-grow-[5]' : ''}
                                    `}
                                    onClick={() => handleDivClick(index + 1)}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                                    <Image
                                        src={card.bgImage}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* <span className={`
                                        transition-all duration-500 relative z-10 font-semibold
                                        ${activeDiv === index + 1 ? 'text-xl' : 'text-sm'}
                                    `}>
                                        {card.title}
                                    </span> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const StyledWrapper = styled.div`
  .card {
    height: 254px;
    display: flex;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #ff568e;
    letter-spacing: .1em;
  }

  .card p:hover span {
    transform: rotate(0);
  }`;

export default OnlineOffline;