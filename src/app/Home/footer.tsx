'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const footerData = {
  address: {
    line1: "43/a, Nehru Nagar, Rayanur,",
    line2: "Thoronakkalpatti, Karur,",
    line3: "Tamil Nadu 639003"
  },
  socialLinks: [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/cybernautedu-tech/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/cybernautofficial", label: "Instagram" }
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
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Main content area */}
      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className='max-w-7xl mx-auto'>
          
          {/* Company Info and Links Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16'>
            
            {/* Company Branding Section */}
            <div className='lg:col-span-1 space-y-6 text-left'>
              <div className='space-y-4'>
                <h3 className='text-white text-xl sm:text-2xl font-professional font-bold text-left'>
                  Cybernaut Edu-Tech
                </h3>
                <p className='text-gray-400 text-sm sm:text-base leading-relaxed text-left max-w-sm'>
                  Empowering the next generation of tech innovators through cutting-edge education and hands-on experience.
                </p>
              </div>
              
              {/* Address */}
              <div className='text-gray-400 text-sm sm:text-base leading-relaxed text-left'>
                <p>{footerData.address.line1}</p>
                <p>{footerData.address.line2}</p>
                <p>{footerData.address.line3}</p>
              </div>
              
              {/* Social Links */}
              <div className='flex justify-start gap-4 pt-2'>
                {footerData.socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='group w-12 h-12 flex justify-center items-center rounded-full bg-gray-800 hover:bg-blue-600 active:bg-blue-600 transition-all duration-300 hover:scale-110 active:scale-110 touch-manipulation'
                    aria-label={social.label}
                  >
                    <span className="text-gray-400 group-hover:text-white group-active:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {footerData.sections.map((section, index) => (
              <div key={index} className='space-y-4 text-left'>
                <h4 className='font-professional font-semibold text-white text-base sm:text-lg uppercase tracking-wider text-left'>
                  {section.title}
                </h4>
                <div className='space-y-3'>
                  {section.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => handleNavigation(link.href)}
                      className='group flex items-center justify-start text-gray-400 text-sm sm:text-base hover:text-white active:text-white cursor-pointer transition-all duration-300 w-full text-left touch-manipulation'
                    >
                      <span className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Copyright */}
              <p className='text-gray-400 text-sm sm:text-base text-left'>
                © 2024 Cybernaut Edu-Tech. All rights reserved.
              </p>
              
              {/* Additional Links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base">
                <button className="text-gray-400 hover:text-white active:text-white transition-colors duration-300 text-left touch-manipulation">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-white active:text-white transition-colors duration-300 text-left touch-manipulation">
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-white active:text-white transition-colors duration-300 text-left touch-manipulation">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;