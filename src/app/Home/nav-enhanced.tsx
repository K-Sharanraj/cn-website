'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';


const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/Aboutus' },
    { name: 'Programs', link: '/Program' },
    { name: 'Blogs', link: '/Blogs' },
    { name: 'Events', link: '/Events' },
    { name: 'Contact', link: '/contact' }
];

export default function NavbarEnhanced() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const { theme } = useTheme();
    
    // Animation variants for the navbar
    const navVariants = {
        visible: {
            height: 80,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        hidden: {
            height: 56,
            scale: 0.98,
            y: -10,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <motion.header
            initial="visible"
            variants={navVariants}
            className={cn(
                'fixed top-5 left-0 right-0 mx-auto z-50 flex items-center justify-center transition-all duration-300',
                'w-full max-w-6xl rounded-2xl',
                theme === 'dark' 
                    ? 'bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-white/5'
                    : 'bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/10',
                'overflow-hidden'
            )}
        >
            <nav className="w-full px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center py-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970365/9cbdf72c-7336-48df-8cab-7f6c3be6a73d.png"
                                width={500}
                                height={100}
                                className="w-32 lg:w-40"
                                alt="Logo"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4 lg:space-x-6 items-center justify-center">
                        {navItems.map(({ link, name }) => (
                            <motion.div
                                key={link}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={link}
                                    className={cn(
                                        'text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-full',
                                        'hover:bg-white/20 dark:hover:bg-white/10 hover:backdrop-blur-sm',
                                        path === link 
                                            ? 'text-blue-600 dark:text-blue-400 bg-white/30 dark:bg-white/10' 
                                            : 'text-gray-800 dark:text-gray-200'
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
                        className="hidden md:block"
                    >
                        <Link href="/contact">
                            <button className='bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer text-white py-2.5 px-6 flex justify-center items-center rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg'>
                                Get in Touch
                            </button>
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-all duration-300"
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
                                    <X className="h-6 w-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-6 w-6" />
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
                        className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
                    >
                        <div className={cn(
                            "rounded-2xl shadow-lg border overflow-hidden",
                            theme === 'dark'
                                ? "bg-gray-900 border-gray-700"
                                : "bg-white border-gray-200"
                        )}>
                            <ul className="py-2">
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
                                                'block px-6 py-3 text-base font-medium transition-all duration-300',
                                                path === link 
                                                    ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500' 
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400'
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
                                    className="px-4 py-3"
                                >
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        <button className='w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer text-white py-2.5 px-6 rounded-full font-semibold transition-all duration-300'>
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
