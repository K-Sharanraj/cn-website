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
  const placeholderImages = [// 10 images
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753759037/IMG_8394_kkpoki.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758993/IMG_2056_xawfmd.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_7885_idhzrk.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_2583_ypbta9.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758992/IMG_8065_yhfrpf.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_7104_pwja2i.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758992/WhatsApp_Image_2025-07-26_at_12.18.23_AM_a9emrb.jpg",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758992/IMG_3525_ahgwe3.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758993/IMG_3493_r3a8be.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758993/IMG_3493_r3a8be.png",




  ];
  const placeholderImagesrow1 = [ // 10 images
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_4567_s6i16y.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758992/WhatsApp_Image_2025-07-26_at_12.30.12_AM_fgix6u.jpg",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758991/IMG_6403_1_y1zcuu.jpg",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_2577_t0ssfk.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_2796_ii0d9i.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_2279_pjssrp.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758990/IMG_5942_mylzyn.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_5868_l5s6fm.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_6854_o0rkis.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_4455_jqmdvm.png",

  ]
  const placeholderImagesrow2 = [// 11 images
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_3367_nkatlv.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_2316_scdei7.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_5656_azq1f2.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758988/IMG_5297_z5iucs.jpg",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_2387_mhlm3g.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_4170_o7s478.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_3612_xau9ti.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_2149_wybozu.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_2037_nk1k7t.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/DSC05921_etypcu.jpg",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_1044_plwnor.png",

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