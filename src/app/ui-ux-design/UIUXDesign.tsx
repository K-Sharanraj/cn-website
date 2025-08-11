
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OurProject from './OurProject';
import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { User, Star, StarHalf, BarChart3 } from 'lucide-react';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);


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
        <section ref={sectionRef} className=''>
            <section className='mt-[20px]'>
                <div
                    className='flex flex-col lg:flex-row justify-between w-full min-h-[450px]'
                    style={{ backgroundImage: `url('https://res.cloudinary.com/ddpbtvesl/image/upload/v1754666950/2202758_1_vd4div.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                    <div ref={formjoinRef} className='w-full lg:w-1/2 flex justify-center lg:justify-end p-5 items-center'>
                        <div className="w-full sm:w-[25rem] lg:h-auto rounded-2xl shadow-lg p-4 bg-white relative overflow-hidden mx-auto lg:mr-20 mb-10 lg:mb-0">
                            <div className="flex flex-row items-center justify-start mb-3 gap-2">
                                <h2 className="text-lg font-bold text-gray-800">To Learn this course</h2>
                                <span className='inline-flex items-center py-1 px-2 rounded-md text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600'>
                                    Online
                                </span>
                            </div>

                            <form
                                onSubmit={onSubmit}
                                className='w-full space-y-2'
                            >
                                {/* Hidden Access Key */}
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="701509da-ad7d-43d7-9c9e-6f849ee8ff6d"
                                />
                                <div>
                                    <input
                                        ref={nameInputRef}
                                        className="outline-none border border-gray-300 h-9 rounded-lg px-3 w-full text-sm text-gray-700 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                                        placeholder="Name"
                                        id="Name"
                                        name="Name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none border border-gray-300 h-9 rounded-lg px-3 w-full text-sm text-gray-700 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none border border-gray-300 h-9 rounded-lg px-3 w-full text-sm text-gray-700 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                                        placeholder="Phone number"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none border border-gray-300 h-9 rounded-lg px-3 w-full text-sm text-gray-700 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                                        placeholder="Education Qualification"
                                        id="education"
                                        name="education"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none border border-gray-300 h-9 rounded-lg px-3 w-full text-sm text-gray-700 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                                        placeholder="Current Profile"
                                        id="currentprofile"
                                        name="currentprofile"
                                        type="text"
                                        required
                                    />
                                </div>

                                <button
                                    className="w-full justify-center py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 rounded-lg text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    id="login"
                                    name="login"
                                    type="submit"
                                >
                                    Enroll Now
                                </button>

                                <div className="flex items-center justify-center pt-3">
                                    <User className="w-4 h-4 text-gray-500 mr-1" />
                                    <p className="text-xs text-gray-600">
                                        <NumberTicker
                                            value={1450}
                                            className="font-bold text-gray-800 text-sm"
                                        />
                                        {' '}
                                        enrolled in this course
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>  
            <div className="lg:w-11/12 mx-auto">
                <div className='flex items-center h-16 bg-white shadow-md top-28 z-10 rounded-lg my-2.5'>
                    <ul className='tabs-container flex w-full justify-start px-4 overflow-x-auto scroll-smooth space-x-8 font-semibold'>
                        <style jsx>{`
                            .tabs-container::-webkit-scrollbar {
                                height: 2px;
                            }
                            .tabs-container::-webkit-scrollbar-thumb {
                                background-color: #cbd5e1;
                                border-radius: 2px;
                            }
                            .tabs-container {
                                scrollbar-width: thin;
                                scrollbar-color: #cbd5e1 transparent;
                            }
                        `}</style>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showDescription ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleDescriptionClick}>Description</button>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showCourses ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleModulesClick}>Modules</button>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showBenefits ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleBenefitsClick}>Benefits</button>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showCertification ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleCertificationClick}>Certification</button>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showRequirements ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleRequirementsClick}>Requirements</button>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showTestimonials ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleTestimonialsClick}>Testimonials</button>
                        <button className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${showFAQs ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={handleFAQsClick}>FAQs</button>
                    </ul>
                </div>

                <section className='w-full min-h-[40rem] relative mt-[-1px]'>
                    <div className='bg-white shadow-xl overflow-hidden rounded-lg'>
                    <div className="bg-white flex items-center justify-center lg:p-4">
                        <div ref={descriptionRef} className="w-full flex flex-col md:flex-row justify-around lg:gap-6 p-4">
                            <div className="w-full md:w-1/2 place-content-center p-4 md:p-8">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">Course Description</h1>
                                <p className="text-sm md:text-base pt-3 md:pt-5 text-gray-600 text-justify">
                                    Explore the world of UI/UX Design with our 6-month hands-on training program, combining Figma and Adobe XD. This course covers essential design principles, user research, wireframing, prototyping, and UI/UX testing, preparing you to create intuitive, visually appealing user interfaces. Master the tools of the trade, from designing responsive layouts to crafting brand-aligned visuals.
                                    <br className="hidden md:block" />
                                    By the end of the program, you&apos;ll have a diverse portfolio of real-world projects and a certificate showcasing your skills. Whether you&apos;re an aspiring designer or a professional looking to upgrade your skills, this course will equip you with everything you need to succeed in UI/UX design.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                                <div className="w-full lg:h-72 rounded-lg flex items-center justify-center">
                                    <Image
                                        width={500}
                                        height={500}
                                        src='https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760341/98647341-97d9-47a2-8b3f-ed544fa5ba91.png'
                                        alt="course image"
                                        className="lg:w-8/12 w-full h-full rounded-lg object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={coursesRef} className="w-full min-h-[20rem]">
                        <ThreeCourses />
                    </div>

                    <div ref={benefitsRef} className="w-full min-h-[20rem]">
                        <Keybenifits />
                    </div>

                    <div ref={certificationRef} className="w-full place-content-center">
                        <Samplecertificate />
                    </div>

                    <div ref={requirementsRef} className="w-full pt-10 place-content-center">
                        <StartCourse />
                    </div>

                    <div className="w-full flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col md:flex-row justify-between items-center w-full p-4 md:p-5 gap-6 rounded-lg bg-transparent">
                            <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12">
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

                    <div ref={requirementsRef} className="w-full pt-10 place-content-center">
                        <OurProject />
                    </div>

                    <div ref={testimonialsRef} className="w-full pt-10 place-content-center">
                        <Testimonials />
                    </div>

                    <div ref={faqsRef} className="w-full pt-10 place-content-center">
                        <Fqas />
                    </div>
                </div>
                </section>
            </div>
{/* 
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
                                        src='https://res.cloudinary.com/ddpbtvesl/image/upload/v1754667262/Web_Dev_atficd.png'
                                        alt="certification"
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
            </section> */}

        </section>
    )
}

export default UIUXDesign;
