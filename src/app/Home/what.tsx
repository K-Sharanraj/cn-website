import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import Commonbtn from '@/components/ui/Commonbtn';

const WhatWeDo = () => {
  const words = `Cybernaut Edu-Tech empowers learners with hands-on training,
                  future-ready tools, and expert guidance to excel in top tech companies
                  like MAANG.`;

  // Refs for animation
  const contentRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);

  // Initialize feature refs with empty array
  useEffect(() => {
    featureRefs.current = [];
  }, []);

  // Animation effect

  return (
    <div className="container mx-auto">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* About section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <Image
              width={500}
              height={500}
              src='https://res.cloudinary.com/ddpbtvesl/image/upload/v1754141255/99b84a29-b19d-4f4a-ac79-782497aa2c2d.png'
              alt="Students in a classroom"
              className="w-full lg:h-[35rem]  rounded-2xl object-cover shadow-lg transition-transform duration-200"
            />
          </div>

          {/* Right side - Content */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-5">
              {/* About Us heading */}
              <h3 className="text-blue-500 font-bold">About Us</h3>

              {/* Main heading */}
              <h1 className="text-3xl w-full text-[#141515] font-bold mb-4 tracking-wider" style={{ fontFamily: 'Loubag' }}>Edu-Tech Platform for Skill Development</h1>

              {/* Description */}
              <p className="text-gray-600">
                {words}
              </p>

              {/* Feature cards */}
              <div className="space-y-4 pt-1">
                {/* Card 1 */}
                <div
                  ref={(el: HTMLDivElement | null) => {
                    if (el) {
                      featureRefs.current[0] = el;
                    }
                  }}
                  className="bg-gray-50 p-4 rounded-lg border-2 border-t-[#00A3FF] border-b-[#00A3FF] border-l-[#00A3FF] border-r-[#00A3FF]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-md">
                      <BookOpen className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Innovative Learning</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Hands-on training, AI-driven tools, and real-world projects to build future-ready skills and industry expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  ref={(el: HTMLDivElement | null) => {
                    if (el) {
                      featureRefs.current[1] = el;
                    }
                  }}
                  className="bg-gray-50 p-4 rounded-lg border-2 border-t-[#00A3FF] border-b-[#00A3FF] border-l-[#00A3FF] border-r-[#00A3FF]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-md">
                      <Briefcase className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Career Success</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Partnered with 50+ institutions, shaping the next-gen tech leaders with guidance for MAANG and top-tier opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative top-1">
                <div className="">
                  <Link href="/Aboutus">
                    <Commonbtn className="flex items-center text-white justify-between gap-3 ">
                      View More
                      <ArrowRight className="h-4 w-4" />
                    </Commonbtn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;