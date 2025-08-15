'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScrollAnimation } from '@/hooks/useSmoothScrollAnimation';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/Aboutus' },
    { name: 'Programs', link: '/Program' },
    { name: 'Blogs', link: '/Blogs' },
    { name: 'Events', link: '/Events' },
    { name: 'Contact', link: '/contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const isHomePage = path === '/';
    
    // Define course pages where navbar should be fixed
    const coursePages = [
        '/tech-trio',
        '/meta-zen',
        '/full-stack-development',
        '/ui-ux-design',
        '/data-analytics'
    ];
    const isCoursePage = coursePages.includes(path);

    // Use the new smooth scroll animation hook - disable for course pages
    const {
        scrollProgress,
        opacity,
        scale,
        blur,
        height,
        translateY
    } = useSmoothScrollAnimation({
        maxScroll: 300, // Animation range after the start threshold
        minOpacity: 0.85,
        maxOpacity: 1,
        minScale: 0.98,
        maxScale: 1,
        minBlur: 8,
        maxBlur: 20,
        minHeight: 60,
        maxHeight: 80,
        scrollThreshold: 10,
        hideThreshold: 150,
        hideDirection: 'down',
        animationStartThreshold: isHomePage ? 1800 : 0, // Start animations after first scroll section (around 1800px)
        disableHiding: true, // Don't hide the navbar, keep it visible
        disabled: isCoursePage // Disable all scroll animations for course pages
    });

    // Dynamic styles based on scroll animation
    const backgroundOpacity = 0.2 + (scrollProgress * 0.3); // Increase background opacity on scroll
    const navbarStyle = {
        height: `${height}px`,
        opacity: opacity,
        transform: `scale(${scale}) translateY(${translateY}px)`,
        backdropFilter: `blur(${blur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    // Calculate logo size based on scroll progress
    const logoScale = 1 - (scrollProgress * 0.15); // Shrink logo by up to 15%
    const logoSize = {
        transform: `scale(${logoScale})`,
        transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    return (
        <motion.header
            style={navbarStyle}
            className={cn(
                'fixed z-50 flex items-center justify-center',
                'w-full',
                // Mobile: top-2 with smaller margins, Desktop: top-5
                'top-2 left-0 right-0 sm:top-3 sm:left-3 sm:right-3 lg:top-5 lg:left-0 lg:right-0 lg:mx-auto',
                // Responsive max-width and border radius
                'rounded-2xl sm:rounded-3xl lg:rounded-full',
                scrollProgress > 0.5 ? 'lg:max-w-5xl' : 'lg:max-w-7xl',
                'border border-white/20',
                'shadow-lg shadow-black/10'
            )}
        >
            <nav className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                <div className="flex items-center justify-between h-full min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center py-2 flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={logoSize}
                        >
                            <Image
                                src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970365/9cbdf72c-7336-48df-8cab-7f6c3be6a73d.png"
                                width={500}
                                height={100}
                                className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto"
                                alt="Logo"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-2 xl:space-x-4 items-center justify-center flex-1 max-w-2xl mx-4">
                        {navItems.map(({ link, name }, index) => (
                            <motion.div
                                key={link}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { delay: index * 0.1 }
                                }}
                            >
                                <Link
                                    href={link}
                                    className={cn(
                                        'text-xs xl:text-sm font-semibold transition-all duration-300 px-2 xl:px-3 py-2 rounded-full whitespace-nowrap',
                                        'hover:bg-white/20 hover:backdrop-blur-sm',
                                        path === link 
                                            ? 'text-blue-600 bg-white/30' 
                                            : 'text-gray-800'
                                    )}
                                >
                                    {name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:block flex-shrink-0"
                    >
                        <Link href="/contact">
                            <button className='bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 xl:py-2.5 px-4 xl:px-6 flex justify-center items-center rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-xs xl:text-sm whitespace-nowrap'>
                                Get in Touch
                            </button>
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-full text-gray-800 hover:bg-white/20 hover:text-blue-600 focus:outline-none transition-all duration-300 flex-shrink-0"
                    >
                        <span className="sr-only">Open menu</span>
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed top-20 left-2 right-2 sm:left-3 sm:right-3 z-[60]"
                    >
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <ul className="py-1 sm:py-2">
                                {navItems.map(({ link, name }, index) => (
                                    <motion.li
                                        key={link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link}
                                            className={cn(
                                                'block px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300',
                                                path === link 
                                                    ? 'bg-blue-500/20 text-blue-600 border-l-4 border-blue-500' 
                                                    : 'text-gray-700 hover:bg-gray-100/50 hover:text-blue-600'
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {name}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    className="px-3 sm:px-4 py-2 sm:py-3"
                                >
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        <button className='w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 sm:py-2.5 px-4 sm:px-6 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base'>
                                            Get in Touch
                                        </button>
                                    </Link>
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}