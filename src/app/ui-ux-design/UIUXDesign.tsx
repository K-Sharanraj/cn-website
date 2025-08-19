'use client'

import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThreeCourses from './ThreeCourses';
import Keybenifits from './Keybenifits';
import Samplecertificate from './Samplecertificate';
import StartCourse from './Start-course';
import Testimonials from './Testimonials';
import Fqas from './FQAs';
import OurProject from './OurProject';
import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { User, Star, StarHalf, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import { useStickyTabs } from '@/hooks/useStickyTabs';

const content = {
    title: 'UI/UX Design',
    description: 'Master graphic design with our hands-on course using Figma and Adobe Illustrator. Gain essential skills to create stunning visual content and elevate your creativity to new heights.',
    enrolled: 1000,
    rating: 4.75,
    level: 'beginner',
    enrollmentMessage: 'To learn this Course online',
    courseDescription: "Explore the world of UI/UX Design with our 6-month hands-on training program, combining Figma and Adobe XD. This course covers essential design principles, user research, wireframing, prototyping, and UI/UX testing, preparing you to create intuitive, visually appealing user interfaces. Master the tools of the trade, from designing responsive layouts to crafting brand-aligned visuals. By the end of the program, you'll have a diverse portfolio of real-world projects and a certificate showcasing your skills. Whether you're an aspiring designer or a professional looking to upgrade your skills, this course will equip you with everything you need to succeed in UI/UX design.",
    buttons: {
        enrollNow: 'Enroll Now',
    },
    navItems: [
        { name: 'Home >', link: '/' },
        { name: 'Programs >', link: '/Program' },
        { name: 'ui/ux design', link: '/UI&UXDesign' },
    ],
    stats: {
        enrolled: 'Enrolled ' + 1000,
        rating: '(4.75)',
    },
    joinMessage: 'Join the Most Popular UI/UX Design Course now!',
};

const UIUXDesign = () => {
    const descriptionRef = useRef<HTMLDivElement>(null);
    const coursesRef = useRef<HTMLDivElement>(null);
    const benefitsRef = useRef<HTMLDivElement>(null);
    const certificationRef = useRef<HTMLDivElement>(null);
    const requirementsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const faqsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);

    const tabRefs = {
        description: useRef<HTMLButtonElement>(null),
        modules: useRef<HTMLButtonElement>(null),
        benefits: useRef<HTMLButtonElement>(null),
        certification: useRef<HTMLButtonElement>(null),
        requirements: useRef<HTMLButtonElement>(null),
        testimonials: useRef<HTMLButtonElement>(null),
        faqs: useRef<HTMLButtonElement>(null),
        projects: useRef<HTMLButtonElement>(null),
    };

    const sectionRefs = [descriptionRef, coursesRef, benefitsRef, certificationRef, requirementsRef, projectsRef, testimonialsRef, faqsRef];
    const { activeTab, isFixed, tabContainerRef } = useStickyTabs({ sectionRefs, sentinelRef });

    useEffect(() => {
        if (activeTab && tabRefs[activeTab]?.current) {
            tabRefs[activeTab].current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [activeTab, tabRefs]);

    const handleTabClick = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const path = usePathname()

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

    // join now btn
    const formjoinRef = useRef<HTMLDivElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);

    return (
        <section className=''>
            <section className='mt-[20px]'>
                <div
                    className='flex flex-col lg:flex-row justify-between  w-full min-h-[450px] relative'
                    style={{ backgroundImage: `url('https://res.cloudinary.com/ddpbtvesl/image/upload/v1754666950/2202758_1_vd4div.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                    {/* Left side content */}
                    <div className='w-full lg:w-1/2 flex items-start justify-center p-8 lg:p-24 z-10'>
                        <div className='relative lg:-top-10 w-full'>
                            {/* Navigation */}
                            <div className='flex justify-start h-10 overflow-x-auto lg:overflow-visible'>
                                <div className="flex space-x-1 gap-5">
                                    {content.navItems.map(({ link, name }) => (
                                        <Link
                                            key={link}
                                            href={link}
                                            className={cn(
                                                'text-sm font-bold transition-all hover:text-black whitespace-nowrap',
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
                                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>{content.title}</h1>
                                <p className='py-5 text-base lg:text-lg font-bold'>
                                    {content.description}
                                </p>
                                {/* Stats */}
                                <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center py-5 text-white gap-3 sm:gap-5'>
                                    <span className='flex items-center justify-center gap-1 text-sm sm:text-base font-bold'>
                                        <User className="w-4 h-4 sm:w-5 sm:h-5" />
                                        {content.stats.enrolled}
                                    </span>
                                    <div className="flex flex-wrap items-center gap-1 sm:gap-0">
                                        <div className="flex">
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <StarHalf className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                        </div>
                                        <span className="text-xs sm:text-sm pr-2 sm:pr-5 font-bold">{content.stats.rating}</span>
                                        <span className='flex items-center gap-1 justify-center text-sm sm:text-base font-bold'>
                                            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                                            {content.level}
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
                                <h2 className="text-lg font-bold text-gray-800">{content.enrollmentMessage}</h2>
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
                <div ref={sentinelRef} style={{ height: '1px' }} />
                <div style={{ height: '4rem' }}> {/* Placeholder */}
                    <div ref={tabContainerRef} className={`flex items-center h-16 bg-white shadow-md z-10 rounded-lg my-2.5 ${isFixed ? 'fixed top-0 w-full' : ''}`}>
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
                            <button ref={tabRefs.description} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'description' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(descriptionRef)}>Description</button>
                            <button ref={tabRefs.modules} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'modules' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(coursesRef)}>Modules</button>
                            <button ref={tabRefs.benefits} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'benefits' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(benefitsRef)}>Benefits</button>
                            <button ref={tabRefs.certification} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'certification' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(certificationRef)}>Certification</button>
                            <button ref={tabRefs.requirements} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'requirements' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(requirementsRef)}>Requirements</button>
                            <button ref={tabRefs.projects} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'projects' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(projectsRef)}>Projects</button>
                            <button ref={tabRefs.testimonials} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'testimonials' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(testimonialsRef)}>Testimonials</button>
                            <button ref={tabRefs.faqs} className={`py-2 px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap ${activeTab === 'faqs' ? 'text-blue-600 bg-blue-100 font-bold' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabClick(faqsRef)}>FAQs</button>
                        </ul>
                    </div>
                </div>

                <section className='w-full min-h-[40rem] relative mt-[-1px]'>
                    <div className='bg-white shadow-xl overflow-hidden rounded-lg'>
                        <div id="description" ref={descriptionRef} className="bg-white flex items-center justify-center lg:p-4">
                            <div className="w-full flex flex-col md:flex-row justify-around lg:gap-6 p-4">
                                <div className="w-full md:w-1/2 place-content-center p-4 md:p-8">
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">Course Description</h1>
                                    <p className="text-sm md:text-base pt-3 md:pt-5 text-gray-600 text-justify">
                                        {content.courseDescription}
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

                        <div id="modules" ref={coursesRef} className="w-full min-h-[20rem]">
                            <ThreeCourses />
                        </div>

                        <div id="benefits" ref={benefitsRef} className="w-full min-h-[20rem]">
                            <Keybenifits />
                        </div>

                        <div id="certification" ref={certificationRef} className="w-full place-content-center">
                            <Samplecertificate />
                        </div>

                        <div id="requirements" ref={requirementsRef} className="w-full pt-10 place-content-center">
                            <StartCourse />
                        </div>

                        <div className="w-full flex flex-col items-center justify-center p-4">
                            <div className="flex flex-col md:flex-row justify-between items-center w-full p-4 md:p-5 gap-6 rounded-lg bg-transparent">
                                <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12">
                                    <h1 className="text-3xl md:text-5xl font-bold">{content.joinMessage}</h1>
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

                        <div id="projects" ref={projectsRef} className="w-full pt-10 place-content-center">
                            <OurProject />
                        </div>

                        <div id="testimonials" ref={testimonialsRef} className="w-full pt-10 place-content-center">
                            <Testimonials />
                        </div>

                        <div id="faqs" ref={faqsRef} className="w-full pt-10 place-content-center">
                            <Fqas />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default UIUXDesign;