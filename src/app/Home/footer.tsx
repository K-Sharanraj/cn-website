'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Linkedin, Instagram } from 'lucide-react';

const footerData = {
  address: {
    line1: "43/a, Nehru Nagar, Rayanur,",
    line2: "Thoronakkalpatti, Karur,",
    line3: "Tamil Nadu 639003"
  },
  socialLinks: [
    { icon: <Linkedin size={20} className='text-blue-500' />, href: "https://www.linkedin.com/company/cybernautedu-tech/" },
    { icon: <Instagram size={20} className='text-blue-500' />, href: "https://www.instagram.com/cybernautofficial" }
  ],
  sections: [
    {
      title: "About Us",
      links: [
        { label: "Programs we offer", href: "/Aboutus#offers" },
        { label: "For Colleges", href: "/Aboutus#offers" },
        { label: "For companies", href: "/Aboutus#offers" },
        { label: "Why partner with us", href: "/Aboutus#partner" }
      ]
    },
    {
      title: "Programs",
      links: [
        { label: "Tech Trio", href: "/tech-trio" },
        { label: "UI/UX Design", href: "/ui-ux-design" },
        { label: "Full Stack", href: "/full-stack-development" },
        { label: "Data Analysis", href: "/data-analytics" },
        { label: "MetaZen", href: "/meta-zen" }
      ]
    },
    {
      title: "Events",
      links: [
        { label: "Workshops", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "Bootcamps", href: "#" },
        { label: "Contests", href: "#" },
        { label: "Competitions", href: "#" }
      ]
    }
  ]
};

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <>
      {/* Top separator line */}
      <div className="w-full border-t border-neutral-200" />
      
      <section className="relative w-full bg-white overflow-hidden">
        {/* Main content area */}
        <div className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 relative z-10'>
        {/* Company Branding Section */}
        <div className='sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4 text-center sm:text-left'>
          <Image 
            width={240}
            height={64}
            src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753971319/da23e160-fd84-45ce-98fe-4bc09c3742bb.png"
            alt="Cybernaut Logo"
            className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[150px] mx-auto sm:mx-0 h-auto' 
          />
          <div className='text-neutral-900 text-sm sm:text-base font-bold'>Cybernaut Edu-Tech</div>
          <div className='text-neutral-500 text-xs sm:text-sm'>Innovation for the Future</div>
          <h3 className='text-neutral-500 text-xs sm:text-sm leading-relaxed'>
            {footerData.address.line1}<br />
            {footerData.address.line2}<br />
            {footerData.address.line3}
          </h3>
          <div className='flex justify-center sm:justify-start gap-3 sm:gap-4'>
            {footerData.socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full hover:bg-neutral-100 transition-colors'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column Links */}
        {footerData.sections.map((section, index) => (
          <div key={index} className='lg:col-span-2 space-y-3 sm:space-y-4'>
            <h2 className='font-semibold text-neutral-900 uppercase tracking-wide text-sm sm:text-base text-center sm:text-left'>
              {section.title}
            </h2>
            <div className='space-y-1 sm:space-y-2'>
              {section.links.map((link, linkIndex) => (
                <button
                  key={linkIndex}
                  onClick={() => handleNavigation(link.href)}
                  className='block text-neutral-500 text-xs sm:text-sm hover:text-neutral-900 cursor-pointer transition-all text-center sm:text-left w-full'
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Block (WhatsApp) */}
        <div className='sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-4'>
          <div className='text-neutral-900 font-semibold uppercase text-sm sm:text-base text-center sm:text-left'>Contact Us</div>
          <div className='space-y-2 sm:space-y-3'>
            <div className='text-neutral-500 text-xs sm:text-sm text-center sm:text-left'>
              <div>+91 99621 88422</div>
              <div className='break-all'>contact@cybernaut.co.in</div>
            </div>
            <a target="_blank"
              href="https://wa.me/916382055035"
              className="inline-block bg-green-500 hover:bg-green-600 text-white rounded-full px-4 sm:px-6 py-2 shadow transition-all text-xs sm:text-sm w-full sm:w-auto text-center"
            >
              Chat with us on WhatsApp
            </a>
          </div>
          </div>
        </div>
        
        {/* Background gradient text and copyright section */}
        <div className="relative">
          {/* Large gradient background text */}
          <div className='flex justify-center items-center py-8 sm:py-10 lg:py-12 overflow-hidden'>
            <div className='text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] select-none'>
              <span className='bg-gradient-to-r from-[#0091ff] to-[#5ce1ff] text-transparent bg-clip-text'>
                CYBERNAUT
              </span>
            </div>
          </div>
          
          {/* Separator line and copyright - positioned over the gradient text */}
          <div className='absolute bottom-0 left-0 right-0 pb-4 sm:pb-6 lg:pb-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <div className='border-t border-neutral-200' />
              <p className='text-neutral-400 text-xs sm:text-sm text-center mt-4 sm:mt-6'>
                © 2024 Cybernaut edutech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Footer;