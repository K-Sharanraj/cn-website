
'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThreeCourses from './ThreeCourses';
import Keybenifits from './Keybenifits';
import Samplecertificate from './Samplecertificate';
import StartCourse from './Start-course';
import Testimonials from './Testimonials';
import Fqas from './FQAs';
import gsap from 'gsap';
import OurProject from './OurProject';
import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { User, Star, StarHalf, BarChart3 } from 'lucide-react';
import Image from 'next/image';


const UIUXDesign = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [showDescription, setShowDescription] = useState(true);
    const [showBenefits, setShowBenefits] = useState(false);
    const [showCertification, setShowCertification] = useState(false);
    const [showRequirements, setShowRequirements] = useState(false);
    const [showTestimonials, setShowTestimonials] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);

    const descriptionRef = useRef<HTMLDivElement>(null);
    const coursesRef = useRef<HTMLDivElement>(null);
    const benefitsRef = useRef<HTMLDivElement>(null);
    const certificationRef = useRef<HTMLDivElement>(null);
    const requirementsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const faqsRef = useRef<HTMLDivElement>(null);

    const handleModulesClick = () => {
        setShowCourses(true);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDescriptionClick = () => {
        setShowDescription(true);
        setShowCourses(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleBenefitsClick = () => {
        setShowBenefits(true);
        setShowCourses(false);
        setShowDescription(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCertificationClick = () => {
        setShowCertification(true);
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        certificationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleRequirementsClick = () => {
        setShowRequirements(true);
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        requirementsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTestimonialsClick = () => {
        setShowTestimonials(true); // Show testimonials
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowFAQs(false);
        testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFAQsClick = () => {
        setShowFAQs(true); // Show FAQs
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        faqsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const formjoinRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const pin = gsap.to(sectionRef.current, {
            translateX: "-600vw", // Adjusted for 7 sections (100vw * 6)
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=3500",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        return () => {
            pin.scrollTrigger?.kill();
            pin.kill();
        };
    }, []);

    const path = usePathname()

    const navItems = [
        { name: 'Home >', link: '/' },
        { name: 'Programs >', link: '/Program' },
        { name: 'ui/ux design', link: '/UI&UXDesign' },

    ]

    //web3 forms
    const courseName = "UIUXDesign"; // This matches your file name ui-ux-design

    const [, setResult] = React.useState("");
    const formRef = useRef<HTMLFormElement>(null);
    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "701509da-ad7d-43d7-9c9e-6f849ee8ff6d");
        formData.append("course_name", courseName); // Add course name

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Form Submitted Successfully");
            if (formRef.current) {
                formRef.current.reset();
            }
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section className=''>
            <section className='mt-[20px]'>
                <div
                    className='flex flex-col lg:flex-row justify-between container mx-auto min-h-[569px]'
                    style={{ backgroundImage: `url('https://res.cloudinary.com/dn60aovto/image/upload/v1742460377/HeadBg_jmdshj.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                {/* Left side content */}
                    <div className='w-full lg:w-1/2 flex items-start justify-center p-8 lg:p-24'>
                        <div className='relative lg:-top-10 w-full'>
                            {/* Navigation */}
                            <div className='flex justify-start h-10 overflow-x-auto lg:overflow-visible'>
                                <div className="flex space-x-1 gap-5">
                                    {navItems.map(({ link, name }) => (
                                        <Link
                                            key={link}
                                            href={link}
                                            className={cn(
                                                'text-sm font-medium transition-all hover:text-black whitespace-nowrap',
                                                path === link ? 'text-white' : 'text-white'
                                            )}
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Course info */}
                            <div className='relative lg:top-14 text-white'>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>UI/UX Design</h1>
                                <p className='py-5 text-base lg:text-lg'>
                                    Master graphic design with our hands-on course using Figma and Adobe Illustrator. Gain essential skills to create stunning visual content and elevate your creativity to new heights.
                                </p>
                                {/* Stats */}
                                <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center py-5 text-white gap-3 sm:gap-5'>
                                    <span className='flex items-center justify-center gap-1 text-sm sm:text-base'>
                                        <User className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Enrolled 1000
                                    </span>
                                    <div className="flex flex-wrap items-center gap-1 sm:gap-0">
                                        <div className="flex">
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <StarHalf className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                        </div>
                                        <span className="text-xs sm:text-sm pr-2 sm:pr-5">(4.75)</span>
                                        <span className='flex items-center gap-1 justify-center text-sm sm:text-base'>
                                            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                                            beginner
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div ref={formjoinRef} className='w-full lg:w-1/2 flex justify-center lg:justify-end p-5  '>
                        <div className="w-full sm:w-[25rem] lg:h-[400px] h-auto rounded-lg shadow p-4 sm:p-6 bg-white relative overflow-hidden mx-auto lg:mr-20 mb-10 lg:mb-0 lg:mt-[60px]">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-lg sm:text-xl text-center font-semibold text-zinc-500">
                                    To learn this Course <span className='p-1 rounded-md bg-blue-500 text-white'>online</span>
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <form

                                        onSubmit={onSubmit}
                                        className="w-full mt-4 space-y-4 sm:space-y-2.5 place-content-center">

                                        <div>
                                            <input
                                                ref={nameInputRef}
                                                className="outline-none h-[36px] border border-gray-200 rounded-md px-2 w-full text-slate-500 focus:border-blue-300"
                                                placeholder="Name"
                                                id="Name"
                                                name="Name"
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="outline-none h-[36px] border border-gray-200  rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
                                                placeholder="Email"
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="outline-none h-[36px] border border-gray-200 rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
                                                placeholder="Education Qualification"
                                                id="education"
                                                name="education"
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="outline-none h-[36px] border border-gray-200 rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
                                                placeholder="Current Profile"
                                                id="currentprofile"
                                                name="currentprofile"
                                                type="text"
                                                required
                                            />
                                        </div>

                                        <button
                                            className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white"
                                            id="login"
                                            name="login"
                                            type="submit"
                                        >
                                            Enroll Now
                                        </button>

                                        <p className="flex justify-center gap-2 space-x-1 bg-[#EAF7FF] py-1 rounded-md text-[#00A3FF] text-xs sm:text-sm">
                                            <NumberTicker
                                                value={1450}
                                                className="whitespace-pre-wrap font-semibold text-base sm:text-lg tracking-tighter text-[#00A3FF]"
                                            />
                                            enrolled in this course
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <div className='flex sticky top-[70px] lg:w-11/12 mx-auto rounded-t-lg h-12 -mt-12 bg-gray-100 z-10'>
                <ul className='flex w-full justify-start px-2 overflow-auto scroll-smooth lg:space-x-0 space-x-4 font-semibold'>
                    <style jsx>{`ul::-webkit-scrollbar {height:1px;}`}</style>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showDescription ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleDescriptionClick}>Description</button>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showCourses ? 'text-blue-600      lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleModulesClick}>Modules</button>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showBenefits ? 'text-blue-600     lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleBenefitsClick}>Benefits</button>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showCertification ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleCertificationClick}>Certification</button>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showRequirements ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleRequirementsClick}>Requirements</button>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showTestimonials ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleTestimonialsClick}>Testimonials</button>
                    <button className={`flex items-center justify-center w-32 h-10 text-center text-sm ${showFAQs ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleFAQsClick}>FAQs</button>
                </ul>
            </div>

            <section className='container mx-auto min-h-[40rem]  relative '>
                <div className=' bg-[#f5f5f5] shadow-xl  mx-start mx-auto overflow-hidden rounded-lg'>
                    <div className=" bg-gray-100 flex items-center justify-center lg:p-z4">
                        <div ref={descriptionRef} className="w-full  flex flex-col md:flex-row justify-around lg:gap-6  p-4">
                            <div className="w-full md:w-1/2 place-content-center p-4 md:p-8">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">Course Description</h1>
                                <p className="text-xs sm:text-sm md:text-base pt-3 md:pt-5 text-gray-600 text-justify">
                                    Explore the world of UI/UX Design with our 6-month hands-on training program, combining Figma and Adobe XD. This course covers essential design principles, user research, wireframing, prototyping, and UI/UX testing, preparing you to create intuitive, visually appealing user interfaces. Master the tools of the trade, from designing responsive layouts to crafting brand-aligned visuals.
                                    <br className="hidden md:block" />
                                    By the end of the program, you&apos;ll have a diverse portfolio of real-world projects and a certificate showcasing your skills. Whether you&apos;re an aspiring designer or a professional looking to upgrade your skills, this course will equip you with everything you need to succeed in UI/UX design.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                                <div className="w-full  lg:h-72 rounded-lg  flex items-center justify-center">
                                    <Image
                                        width={500}
                                        height={500}
                                        src='https://res.cloudinary.com/dn60aovto/image/upload/v1742448913/ux_xfzu2m.png'
                                        alt=""
                                        className="lg:w-8/12 w-full h-full rounded-lg object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={coursesRef} className="w-ful min-h-[20rem]">
                        <ThreeCourses />
                    </div>

                    <div ref={benefitsRef} className="w-ful min-h-[20rem]">
                        <Keybenifits />
                    </div>

                    <div ref={certificationRef} className="w-ful place-content-center">
                        <Samplecertificate />
                    </div>

                    <div ref={requirementsRef} className="w-ful pt-10 place-content-center">
                        <StartCourse />
                    </div>

                    <div className="w-full flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col md:flex-row justify-between items-center w-full  p-4 md:p-5 gap-6 rounded-lg  bg-transparent ">
                            <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 ">
                                <h1 className="text-3xl md:text-5xl font-bold">Join the Most Popular UI/UX Design Course now!</h1>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <Button
                                    variant="outline"
                                    className="w-full md:w-60 h-12 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 shadow-[4px_4px_2px_1px_#3DE4EB] transition-all"
                                    onClick={() => {
                                        if (formjoinRef.current) {
                                            formjoinRef.current.scrollIntoView({ behavior: 'smooth' });
                                            if (nameInputRef.current) {
                                                nameInputRef.current.focus();
                                            }
                                        }
                                    }}
                                >
                                    Enroll Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div ref={requirementsRef} className="w-ful pt-10 place-content-center">
                        <OurProject />
                    </div>

                    <div ref={testimonialsRef} className="w-ful pt-10 place-content-center">
                        <Testimonials />
                    </div>

                    <div ref={faqsRef} className="w-ful pt-10 place-content-center">
                        <Fqas />
                    </div>


                </div>
            </section>

        </section>
    )
}

export default UIUXDesign;
