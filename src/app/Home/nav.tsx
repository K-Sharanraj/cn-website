'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/Aboutus' },
    { name: 'Programs', link: '/Program' },
    // { name: 'Events', link: '/Events' },
    { name: 'Blogs', link: '/Blogs' },
    {name:'Events',link:'/Events'},
    { name: 'Contact', link: '/contact' }
    
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            'fixed top-0 z-50 h-[70px] items-center flex justify-center  transition-all duration-300 mx-auto w-screen ',
            isScrolled ? 'bg-white shadow-md' : 'bg-gray-50'
        )}>
            <nav className="xl:container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center justify-between lg:justify-around lg:gap-32 lg:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753970365/9cbdf72c-7336-48df-8cab-7f6c3be6a73d.png"
                            width={500}
                            height={100}
                            className=" w-[8rem] lg:w-40"
                            alt="Logo"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 items-center justify-center ">
                        {navItems.map(({ link, name }) => (
                            <Link
                                key={link}
                                href={link}
                                className={cn(
                                    'text-sm font-bold transition-all hover:text-blue-500',
                                    path === link ? 'text-blue-500' : 'text-gray-700'
                                )}
                            >
                                {name}

                            </Link>

                        ))}
                    </div>
                    <Link href="/contact">
                        <button className='bg-blue-400 cursor-pointer  text-white py-2 px-5   md:flex justify-center items-center hidden  rounded-lg'>Get in Touch</button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
                    >
                        <span className="sr-only">Open menu</span>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
                        <ul className="py-4 space-y-2">
                            {navItems.map(({ link, name }) => (
                                <li key={link}>
                                    <Link
                                        href={link}
                                        className={cn(
                                            'block px-5 py-3 text-base font-medium transition-all',
                                            path === link ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

        </header>
    );
}