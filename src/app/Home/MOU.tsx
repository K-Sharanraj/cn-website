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
      <Card className={`flex items-center justify-center shadow-none border-none transition-shadow flex-1 ${className}`}>
        <CardContent className="flex items-center justify-center h-24 w-24">
          <Image src={icon} alt="Outreach" width={100} height={100} className="w-full h-full object-cover" />
        </CardContent>
      </Card>
    );
  }

  const data = [
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389929/Collage_Logo_08_u5rmfx.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389929/Collage_Logo_01_pyruag.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389928/Collage_Logo_09_sojdl0.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389927/Collage_Logo_07_iugven.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389926/Collage_Logo_04_ypglck.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389925/Collage_Logo_05_sdzqx2.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389924/Collage_Logo_06_q3d4qf.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389924/Collage_Logo_02_ma5lls.png' },
    { icon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742389924/Collage_Logo_03_pghsg5.png' },

  ];

  const Mobiledata = [
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390110/pgp_dedepb.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390109/VLB_plikss.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390108/Meenakshiclgofeng_tzr3jz.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390107/Muthukumaran_tmuvet.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390106/Vivekananda_womens_b5ddbf.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390105/ssn_bwzwce.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390104/Kings_nloyar.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390103/Kingss_rvmni9.png' },
    { Mobileicon: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742390102/Gnanamani_plh5hj.png' },
  ];

  return (
    <>
      <div className="container hidden min-h-20 lg:block overflow-hidden mx-auto  p-10 px-6 text-center relative space-y-5">
        {/* Header Section */}
        <h1 className="text-[#141515] font-heading font-bold mb-4 lg:text-4xl text-xl" style={{ fontFamily: 'Loubag' }}>OUR MOU PARTNERS</h1>
        <p className="mb-8 lg:w-8/12 w-12/12 mx-auto text-center">
          At Cybernaut Edu-Tech, we offer premier educational solutions, including products, services, and training programs. Partner with us to enhance your institution&apos;s learning experience.
        </p>
        <Marquee gradient={false} pauseOnHover={true} speed={50} direction="left" className="">
          <div className="flex lg:mb-20 lg:gap-10 lg:h-auto h-40 lg:ml-10 gap-5 ml-5">
            {data.map((item, index) => (
              <div key={`additional-${index}`} className="lg:w-[300px] lg:h-[90px] border-none">
                <OutreachCard
                  icon={item.icon}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </Marquee>
        <div className='w-full lg:h-[10rem] hidden md:block h-32 py-10 px-20 absolute left-0 top-40 lg:top-[11rem] lg:flex gap-4 justify-center z-20 bg-gradient-to-r from-white via-transparent to-white overflow-x-hidden'>
        </div>
      </div>

      {/* Mobile view */}
      <div className="container  lg:hidden block mx-auto xl:container min-h-80 text-center overflow-hidden relative lg:my-20">
        {/* Header Section */}
        <h1 className="lg:text-4xl text-xl font-bold py-5 lg:py-0" style={{ fontFamily: 'Loubag' }}>OUR MOU PARTNERS</h1>
        <p className="w-11/12 mx-auto text-sm  text-center">
          At Cybernaut Edu-Tech, we offer premier educational solutions, including products, services, and training programs. Partner with us to enhance your institution&apos;s learning experience.
        </p>
        <Marquee gradient={false} pauseOnHover={true} speed={50} direction="left" className="pt-5 w-full overflow-hidden">
          <div className="flex justify-center items-center min-h-32 gap-5 mx-auto">
            {Mobiledata.map((item, index) => (
              <MobileOutreachCard
                key={`additional-${index}`}
                icon={item.Mobileicon}
                className="overflow-hidden"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MOU;
