'use client'

import React, { useState, useRef } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';
import Commonbtn from '@/components/ui/Commonbtn';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

function Contact() {
    const [email, setEmail] = useState('');
    const [isLoading,] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    //web3 forms 
    const Newsletter = "Subscribe to Our Newsletter";
    const [, setResult] = React.useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "a197629c-d626-4f94-aa93-8f0862d38c39");
        formData.append("Newsletter", Newsletter);
        formData.append("email", email);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setIsSubmitted(true);
            setResult("Form Submitted Successfully");
            if (formRef.current) {
                formRef.current.reset();
            }
            setEmail(''); // Clear the email state
            setTimeout(() => {
                setIsSubmitted(false);
            }, 2000);
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <section className='relative min-h-[20rem] justify-center items-center py-6 md:pt-16 px-4 bg-white overflow-hidden'>
                <div className='relative w-full max-w-6xl mx-auto'>
                    <div className='relative w-full lg:h-96 flex shadow-md rounded-2xl bg-white flex-col lg:flex-row gap-0 md:gap-8 lg:gap-12 overflow-hidden'>
                        {/* Left Section */}
                        <div className='relative w-full lg:w-1/2 px-6 py-2 md:p-8 lg:p-12 rounded-3xl transition-shadow duration-300 '>
                            <div className='max-w-md mx-auto space-y-6 md:space-y-4'>
                                <div className="space-y-6">
                                    <h1 className={`${dancingScript.className} text-3xl md:text-4xl lg:text-5xl text-blue-600 leading-relaxed animate-fade-in`}>
                                        Get your quality
                                    </h1>
                                    <div className="space-y-1  animate-fade-in">
                                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent'>
                                            Skills Certificate
                                        </h2>
                                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800'>
                                            from the Cybernaut
                                        </h2>
                                    </div>
                                </div>
                                <Link href="/Program" className='animate-fade-in'>
                                    <Commonbtn className="flex items-center text-white justify-between gap-3">
                                        Get Started Now
                                        <ArrowRight className="h-4 w-4" />
                                    </Commonbtn>
                                </Link>
                                <div className="flex items-center gap-3 text-gray-500 pt-2  animate-fade-in">
                                    <GraduationCap className="w-5 h-5 text-blue-500" />
                                    <span className="text-sm md:text-base">Join 5000+ certified professionals</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className='relative w-full  px-6 py-2  lg:w-1/2 p-6 md:p-8 lg:p-12 backdrop-blur-sm rounded-3xl transition-shadow duration-300'>
                            <div className='max-w-md mx-auto space-y-4'>
                                <div className="space-y-2 animate-fade-in">
                                    <h3 style={{ fontFamily: 'Loubag' }} className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 tracking-wider">Subscribe to Our Newsletter</h3>
                                    <p className="text-gray-600 md:text-lg">Stay updated with our latest courses and opportunities</p>
                                </div>

                                {isSubmitted ? (
                                    <div className="text-center">
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Thank you for subscribing</h1>
                                        <p className="text-sm md:text-base text-gray-500">Join 5,000+ subscribers who are already learning with us</p>
                                    </div>
                                ) : (
                                    <form onSubmit={onSubmit} className="space-y-4">
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email"
                                                className="w-full  animate-fade-in px-6 py-4 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-base md:text-lg group-hover:border-blue-300"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r  animate-fade-in from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 text-base md:text-lg"
                                        >
                                            {isLoading ? 'Sending...' : 'Subscribe Now'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out;
                }
            `}</style>
        </>
    );
}

export default Contact;