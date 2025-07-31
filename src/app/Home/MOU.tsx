import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import '@/app/Home/css/MOU.css';
import { StaticImageData } from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const MOU = () => {
  interface OutreachCardProps {
    icon: StaticImageData | string;
    className?: string;
  }

  function OutreachCard({ icon, className }: OutreachCardProps) {
    return (
      <Card className={`border-none flex-1 p-0 ${className}`}>
        <CardContent className="flex items-center justify-center h-full p-0">
          <Image src={icon} alt="Outreach" width={300} height={200} className="object-contain" />
        </CardContent>
      </Card>
    );
  }

  function MobileOutreachCard({ icon, className }: OutreachCardProps) {
    return (
      <Card className={`flex items-center justify-center bg-white border shadow-md rounded-xl w-28 h-28 ${className}`}>
        <CardContent className="flex items-center justify-center p-2 w-full h-full">
          <Image src={icon} alt="Outreach" width={100} height={100} className="w-full h-full object-contain" />
        </CardContent>
      </Card>
    );
  }

  const data = [
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970756/Collage_Logo_04_ypglck_hxbtwh.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970756/Collage_Logo_05_sdzqx2_ukis0j.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970761/Collage_Logo_06_q3d4qf_hby2ke.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970761/Collage_Logo_08_u5rmfx_wcijna.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970761/Collage_Logo_02_ma5lls_l4vcfx.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970760/Collage_Logo_07_iugven_oytky6.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970761/Collage_Logo_01_pyruag_hnp6ww.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970762/Collage_Logo_03_pghsg5_x26ekr.webp' },
    { icon: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970763/Collage_Logo_09_sojdl0_etr0ho.webp' },
  ];

  return (
    <>
      {/* Desktop view */}
      <div className="container hidden lg:block mx-auto min-h-20 p-10 px-6 text-center relative space-y-5">
        <h1 className="text-[#141515] font-heading font-bold mb-4 text-4xl" style={{ fontFamily: 'Loubag' }}>OUR MOU PARTNERS</h1>
        <p className="mb-8 lg:w-8/12 mx-auto">
          At Cybernaut Edu-Tech, we offer premier educational solutions, including products, services, and training programs. Partner with us to enhance your institution&apos;s learning experience.
        </p>
        <Marquee gradient={false} pauseOnHover={true} speed={50}>
          <div className="flex gap-10 ml-10">
            {data.map((item, index) => (
              <div key={`desktop-${index}`} className="w-[300px] h-[90px]">
                <OutreachCard icon={item.icon} className="w-full h-full" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden block mx-auto min-h-80 text-center relative px-4 pb-10">
        <h1 className="text-xl font-bold pt-6 pb-2" style={{ fontFamily: 'Loubag' }}>OUR MOU PARTNERS</h1>
        <p className="w-11/12 mx-auto text-sm pb-4">
          At Cybernaut Edu-Tech, we offer premier educational solutions, including products, services, and training programs. Partner with us to enhance your institution&apos;s learning experience.
        </p>
        <Marquee gradient={false} pauseOnHover={true} speed={40} className="overflow-hidden">
          <div className="flex items-center gap-4 px-2">
            {data.map((item, index) => (
              <MobileOutreachCard
                key={`mobile-${index}`}
                icon={item.icon}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MOU;
