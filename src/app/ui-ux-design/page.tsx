'use client'
import React from 'react'
import UIUXDesign from './UIUXDesign'
import Nav from '@/app/Home/nav'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react';
import Footer from '../Home/footer'
import Contact from '../Home/contact'


const Page = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <Nav />
      <div className='w-auto h-auto float-end sticky top-[40rem] z-50 p-5'>

        <button
          onClick={scrollToTop}
          className={`
                    fixed bottom-8 right-8
                    w-[45px] h-[45px]
                    bg-gradient-to-r from-[#61bdfa] to-[#4cd6f8]
                    flex items-center justify-center
                    rounded-full cursor-pointer border-none
                    group
                     ${showButton ? 'opacity-100' : 'opacity-0'}
                    transition-opacity duration-300
                  `}
        >
          <ArrowUp
            className="w-5 h-5 text-white group-hover:animate-[slide-in-bottom_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
          />
          <span className="absolute -bottom-[18px] w-[100px] text-[0.7rem] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Back to Top
          </span>
        </button>

      </div>
      <UIUXDesign />

      <Contact />
      <Footer/>
    </div>
  )
}

export default Page