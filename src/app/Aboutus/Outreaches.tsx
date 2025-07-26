"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { StaticImageData } from 'next/image';





// Simplified card component without Card UI component to reduce spacing
const OutreachCard = ({ imageUrl, className }: { imageUrl: string | StaticImageData; className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={imageUrl}
        alt="Outreach"
        width={400}
        height={300}
        unoptimized
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

const Outreaches = () => {
  // Temporary placeholder images from Unsplash
  const placeholderImages = [
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455630/25_zz0bjf.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455620/24_sw2aiy.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455618/26_qerppp.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455434/27_bqtmg7.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455432/23_vmqr9e.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455430/22_t6naya.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455428/21_eikhrs.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455425/20_w8e4wo.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455423/19_yaqzbo.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455421/18_mhxhhj.jpg",




  ];
  const placeholderImagesrow1 = [
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455419/17_czsizo.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455417/16_ujderi.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455415/15_ylloii.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455413/14_dc5wrt.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455410/13_pr8yqn.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455409/12_wysddy.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455407/11_yi3ozj.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455404/10_jkktdm.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455402/9_y17tkp.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455400/8_xjdepz.jpg",

  ]
  const placeholderImagesrow2 = [
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455397/7_l9blpo.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455397/6_a7dwqm.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742455395/5_nu5gyk.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454982/4_ndfs4c.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454980/2_qigetm.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454934/1_jfvjr8.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454933/32_otixbk.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454931/31_yqp6io.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454929/29_vxsi9s.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454929/30_xfylqd.jpg",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742454928/28_aeroxc.jpg",

  ]

  return (
    <>
      <section className="relative h-[42rem] bg-zinc-800  lg:block hidden overflow-hidden">
        {/* Gradient overlays for smooth transitions */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-800 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-800 to-transparent z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Content section */}
            <div className="lg:col-span-4 flex flex-col w-96 mx-auto space-y-4 h-[26rem] justify-center z-20">
              <h2 style={{ fontFamily: 'Loubag' }} className="text-4xl font-bold text-white tracking-wider">Our Outreaches</h2>
              <p className="text-lg text-gray-200  leading-relaxed">Power Up with Our Outreach Workshops</p>
              <div className="h-1 w-24 bg-white"></div>
              <p className="text-gray-200 text-sm leading-relaxed">
                With 150+ outreach programs, we’ve inspired young minds and introduced thousands of students to new skills, ideas, and possibilities, empowering them to shape a brighter future.
              </p>
              <Button className="bg-white text-zinc-800 relative top-3 hover:bg-gray-200 w-fit group flex items-center gap-2 transition-all">
                Contact us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Marquee section */}
            <div className="lg:col-span-8 z-0 ">
              {/* First row - right direction */}
              <div className="mb-0">
                <Marquee
                  gradient={false}
                  pauseOnHover={true}
                  speed={40}
                  direction="right"
                >
                  <div className="flex">
                    {placeholderImages.slice(0, 8).map((imageUrl, index) => (
                      <OutreachCard
                        key={`row1-${index}`}
                        imageUrl={imageUrl}
                        className="w-[320px] h-[220px]"
                      />
                    ))}
                  </div>
                </Marquee>
              </div>

              {/* Second row - left direction */}
              <div className="mt-2">
                <Marquee
                  gradient={false}
                  pauseOnHover={true}
                  speed={30}
                >
                  <div className="flex">
                    {placeholderImagesrow1.slice(7, 15).map((imageUrl, index) => (
                      <OutreachCard
                        key={`row2-${index}`}
                        imageUrl={imageUrl}
                        className="w-[330px] h-[220px]"
                      />
                    ))}
                  </div>
                </Marquee>
              </div>

              {/* Third row - right direction (slightly slower) */}
              <div className='w-[93rem] relative -left-[31rem] mt-2 '>
                <Marquee
                  gradient={false}
                  pauseOnHover={true}
                  speed={35}
                  direction="right"
                >
                  <div className="flex">
                    {[...placeholderImagesrow2.slice(3, 15), ...placeholderImagesrow2.slice(0, 3)].map((imageUrl, index) => (
                      <OutreachCard
                        key={`row3-${index}`}
                        imageUrl={imageUrl}
                        className="w-[320px] h-[220px]"
                      />
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Outreaches;