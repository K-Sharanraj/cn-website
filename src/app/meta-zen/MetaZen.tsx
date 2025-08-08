'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Fqas from './FQA';
import gsap from 'gsap';
import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { User, Star, StarHalf, BarChart3 } from 'lucide-react';
import { Package } from 'lucide-react';
import Image from 'next/image';
import { Code2, Network } from 'lucide-react';
import { MonitorPlay, LineChart } from 'lucide-react';


const content = {
    courseTitle: 'METAZEN',
    courseDescription: 'Master Full Stack Development with Meta Zen! Learn front-end, back-end, real-world projects, and soft skills. Gain hands-on experience, job-ready skills, and launch a successful web development career.',
    detailedDescription1: `The Meta Zen Full Stack Development Course is designed for students, professionals, and tech enthusiasts looking to build websites and apps like a pro. This program covers everything from basic coding to advanced full-stack development, ensuring a step-by-step learning process. You'll master front-end and back-end technologies, work on real-world projects, and develop problem-solving skills. The course also includes soft skills training and job-specific preparation, making it ideal for those aiming to start or advance their careers in web development. `,
    detailedDescription2: ` With placement support, industry-focused curriculum, and interactive learning, this course provides hands-on experience with HTML, CSS, JavaScript, React.js, and backend development, equipping learners with placement-ready skills for in-demand tech jobs.`,
    certificate: {
        benefits: [
            'Earn course and internship certificates to validate expertise.',
            'Gain hands-on experience with real-world projects.',
            'Complete multiple projects to enhance coding skills.',
            'Build a portfolio showcasing full-stack expertise.'
        ]
    }
};

const MetaZen = () => {
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
        { name: 'MetaZen', link: '/MetaZen' },

    ]
    // numberbox

    const [phoneNumber, setPhoneNumber] = useState('');



    // three courses

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const languages: Language[] = [
        {
            name: 'Foundational Computer Science Concepts',
            subItems: [
                "Operating Systems Fundamentals",
                "Networking Basics",
                "Linux Command Line",
                "Database Management",
                "Git & GitHub",
                "SDLC (Agile & Waterfall)",
                "Requirement Analysis",
                "Design & Testing",
                "Software Maintenance"
            ],
        },
        {
            name: 'Programming Language & DSA',
            subItems: [
                "Language Fundamentals",
                "Variables & Data Types",
                "Control Structures",
                "Functions & Recursion",
                "Object-Oriented Concepts",
                "Data Structures",
                "Arrays & Linked Lists",
                "Stacks & Queues",
                "Trees & Graphs",
                "Hash Maps",
                "Sorting Algorithms",
                "Searching Algorithms",
                "Dynamic Programming",
                "Graph Traversal"
            ],
        },
        {
            name: 'Specialization Domains',
            subItems: [
                "Web Development",
                "HTML & CSS",
                "JavaScript & React.js",
                "Node.js & Express",
                "MongoDB",
                "State Management",
                "Authentication",
                "Authorization",
                "AI & Machine Learning",
                "NumPy & Pandas",
                "Scikit-learn",
                "TensorFlow",
                "Supervised Learning",
                "Unsupervised Learning",
                "Regression Models",
                "Decision Trees"
            ],
        },
    ];

    // Keybenifits

    const benefits = [
        {
            title: "Industry Experts as Mentors",
            description: " Learn from professionals with real-world experience."
        },
        {
            title: "Real Projects during Internship",
            description: "Build industry-level projects for your portfolio."
        },
        {
            title: "Hands-on Scripting ",
            description: "Practice coding through real-time execution."
        },
        {
            title: "Community Support",
            description: "Connect, collaborate, and get guidance from peers."
        },
        {
            title: "Interactive Live Classes",
            description: " Engage in Q&A and problem-solving sessions."
        },
        {
            title: "High-Value Materials",
            description: " Access top-quality study resources and challenges"
        },

    ];


    // startcourse companents
    const [selectedCard, setSelectedCard] = useState<number | null>(1);

    const getCardClasses = (index: number) => {
        const isSelected = selectedCard === index;
        return `rounded-lg h-auto text-md  p-5 shadow-lg cursor-pointer transition-all duration-300 ${isSelected
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-900 border border-gray-100'
            }`;
    };

    const getIconClass = (index: number) => {
        return `w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 md:mb-6 ${selectedCard === index ? 'text-white' : 'text-gray-600'}`;
    };

    const getTextClass = (index: number) => {
        return selectedCard === index ? 'text-white' : 'text-gray-600';
    };

    // Projects
    const projects = [
        {
            title: "Dynamic Traffic Management System",
            type: "Master DSA",
            image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754670361/1_ppkt7s.png",
            icon: <MonitorPlay className="w-5 h-5" />
        },
        {
            title: "AI-Powered Resume Builder",
            type: "Advanced MERN Stack",
            image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754670364/4_mvygun.png",
            icon: <MonitorPlay className="w-5 h-5" />
        },
        {
            title: "Fraud Detection in Transactions",
            type: "Machine Learning Advanced",
            image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754670365/3_tilpqs.png",
            icon: <MonitorPlay className="w-5 h-5" />
        },
        {
            title: "AI-Powered Personalized Assistant",
            type: "Gen AI & LLMs",
            image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754670365/2_jkqqm4.png",
            icon: <LineChart className="w-5 h-5" />
        }
    ];
    // testimonials

    const testimonials = [
        {
            text: "I'm so glad I found Impulse Finance! It has helped me streamline my budgeting and investments effortlessly. Highly recommend!",
            author: "Ashwin Babu",
            role: "Tech Lead",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
            rating: 4
        },
        {
            text: "I'm so glad I found Impulse Finance! It has helped me streamline my budgeting and investments effortlessly. Highly recommend!",
            author: "Britney Suthera",
            role: "HR & Content Writer",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
            rating: 4
        },
        {
            text: "I'm so glad I found Impulse Finance! It has helped me streamline my budgeting and investments effortlessly. Highly recommend!",
            author: "Britney Suthera",
            role: "HR & Content Writer",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
            rating: 4
        },
        {
            text: "I'm so glad I found Impulse Finance! It has helped me streamline my budgeting and investments effortlessly. Highly recommend!",
            author: "Britney Suthera",
            role: "HR & Content Writer",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
            rating: 4
        },
        {
            text: "I'm so glad I found Impulse Finance! It has helped me streamline my budgeting and investments effortlessly. Highly recommend!",
            author: "Britney Suthera",
            role: "HR & Content Writer",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
            rating: 4
        },
        {
            text: "I'm so glad I found Impulse Finance! It has helped me streamline my budgeting and investments effortlessly. Highly recommend!",
            author: "Hema K",
            role: "SDE Trainer",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
            rating: 4
        }
    ];

    //web3 forms 
    const courseName = "MetaZen"; // This matches your file name metazen

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

    // join noew btn 
    const formjoinRef = useRef<HTMLDivElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    return (
        <section className=''>
            <section className='mt-[20px]'>
                <div
                    className='flex flex-col lg:flex-row justify-between w-full min-h-[569px]'
                    style={{ backgroundImage: `url('https://res.cloudinary.com/ddpbtvesl/image/upload/v1754668079/2202758_1_wnw7yu.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    {/* Left side content */}
                    <div className='w-full lg:w-1/2 flex items-start justify-center p-5 lg:p-24'>
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
                                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>{content.courseTitle}</h1>
                                <p className='py-5 text-base lg:text-lg'>
                                    {content.courseDescription}
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
                    <div ref={formjoinRef} className='w-full lg:w-1/2 flex justify-center lg:justify-end p-5 '>
                        <div className="w-full sm:w-[25rem] h-[400px] rounded-lg shadow p-4 sm:p-6 bg-white relative overflow-hidden mx-auto lg:mr-20 mb-10 lg:mb-0 lg:mt-[60px]">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-lg sm:text-xl text-center font-semibold text-zinc-500">
                                    To learn this Course <span className='p-1 rounded-md bg-blue-500 text-white'>online</span>
                                </h2>
                            </div>

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
                                        className="outline-none h-[36px] border border-gray-200 rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
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
                                        placeholder="Phone number"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
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
            </section>
            {/* Number box */}
            <div className='flex lg:w-11/12 mx-auto h-12 bg-gray-100 sticky top-[70px] -mt-12 rounded-t-lg  z-10'>
                <ul className='flex w-full justify-start px-2 overflow-auto scroll-smooth lg:space-x-0 space-x-5 font-semibold'>
                    <style jsx>{`ul::-webkit-scrollbar {height:1px;}`}</style>
                    <button className={`w-32 h-10 text-center text-sm ${showDescription ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleDescriptionClick}>Description</button>
                    <button className={`w-32 h-10 text-center text-sm ${showCourses ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleModulesClick}>Modules</button>
                    <button className={`w-32 h-10 text-center text-sm ${showBenefits ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleBenefitsClick}>Benefits</button>
                    <button className={`w-32 h-10 text-center text-sm ${showCertification ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleCertificationClick}>Certification</button>
                    <button className={`w-32 h-10 text-center text-sm ${showRequirements ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleRequirementsClick}>Requirements</button>
                    <button className={`w-32 h-10 text-center text-sm ${showTestimonials ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleTestimonialsClick}>Testimonials</button>
                    <button className={`w-32 h-10 text-center text-sm ${showFAQs ? 'text-blue-600  lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleFAQsClick}>FAQs</button>
                </ul>
            </div>
            <section className='w-full min-h-[40rem]  relative '>
                <div className='lg:w-11/12 mx-auto bg-[#f5f5f5] shadow-xl  mx-start  overflow-hidden rounded-lg'>

                    <div className=" bg-gray-100 flex items-center justify-center p-4">
                        <div ref={descriptionRef} className="w-full  flex flex-col md:flex-row justify-around gap-6  lg:p-4">
                            <div className="w-full md:w-1/2 place-content-center lg:p-4 md:p-8">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">Course Description</h1>
                                <p className="text-xs sm:text-sm md:text-base pt-3 text-justify md:pt-5 text-gray-600">
                                    {content.detailedDescription1}
                                </p>
                                <p className="text-xs sm:text-sm md:text-base pt-3 text-justify md:pt-5 text-gray-600">
                                    {content.detailedDescription2}
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                                <div className="w-full lg:h-72 rounded-lg flex items-center justify-center">
                                    <Image
                                        src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760409/978dd857-95f0-4d01-bca2-0ace606959c0.png"
                                        alt="MetaZen"
                                        width={500}
                                        height={500}
                                        className="lg:w-8/12 h-full rounded-lg text-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={coursesRef} className="w-ful min-h-[20rem]">
                        {/* <ThreeCourses /> */}
                        <div className="min-h-[30rem] items-start lg:p-8">
                            <div className='py-4'>
                                <h1 className="text-xl font-semibold">What you Learn</h1>
                            </div>
                            <div className="mx-auto rounded-xl overflow-hidden">
                                {languages.map((language, index) => (
                                    <AccordionItem
                                        key={index}
                                        language={language}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div ref={benefitsRef} className="w-ful min-h-[20rem]">
                        {/* <Keybenifits /> */}
                        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-7xl mx-auto">
                                <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Benefits</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-x-5 gap-y-10">
                                    {benefits.map((benefit, index) => (
                                        <BenefitCard
                                            key={index}
                                            title={benefit.title}
                                            description={benefit.description}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={certificationRef} className="w-ful place-content-center">
                        {/* <Samplecertificate /> */}
                        <div className=" w-11/12 mx-auto p-8 py-10 ">
                            <h1 className="text-3xl font-bold mb-8">Certificate on Completion</h1>

                            <div className="lg:flex justify-between  gap-8 ">
                                {/* Left side - Certificate */}
                                <div className="w-auto h-full lg:h-[25rem] bg-white border object-contain overflow-hidden border-gray-200  rounded-lg shadow-sm">
                                    <Image
                                        width={500}
                                        height={500}
                                        src="https://res.cloudinary.com/dn60aovto/image/upload/v1742386629/TechTrioC_soqlgo.png"
                                        alt="Certificate"
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                {/* Right side - Benefits */}
                                <div className="lg:w-1/2  flex flex-col   justify-center lg:py-0 py-10 space-y-8">
                                    {content.certificate.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="text-blue-500">▶</div>
                                            <p className=" text-sm lg:text-md">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Shareable section */}
                            <div className="mt-8 flex items-center gap-2">
                                <h1 className="text-gray-700">Shareable on <span className='text-blue-500 font-bold text-lg font-serif'>LinkedIn</span> </h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>
                            </div>
                        </div>

                    </div>

                    <div ref={requirementsRef} className="w-ful pt-10 place-content-center">
                        {/* <StartCourse /> */}

                        <div className=" bg-white px-4 my-10 sm:p-6 md:p-8 lg:p-16">
                            <section className="w-11/12 mx-auto">
                                <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
                                    All You Need to Start this Course
                                </h1>

                                <div className="space-y-3 sm:space-y-4 mb-12 md:mb-16">
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <div className="text-blue-500">▶</div>
                                        <p className="text-base sm:text-lg text-gray-700">
                                            Certificates are globally recognized & they upgrade your programming profile.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <div className="text-blue-500">▶</div>
                                        <p className="text-base sm:text-lg text-gray-700">
                                            Certificates are generated after the completion of course.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-900 mb-8 md:mb-12">
                                    This is the One for You, If You are
                                </h2>

                                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                                    {/* Fresher Card */}
                                    <div
                                        className={getCardClasses(0)}
                                        onClick={() => setSelectedCard(0)}

                                    >
                                        <User className={getIconClass(0)} />
                                        <h3 className="text-lg sm:text-lg font-bold mb-2  sm:mb-4">
                                            Fresher or a student
                                        </h3>
                                        <p className={`${getTextClass(0)} text-sm sm:text-base`}>
                                            Fresher or a student aiming to build your career in software engineering or development and other major tech we roles.
                                        </p>
                                    </div>

                                    {/* Professionals Card */}
                                    <div
                                        className={getCardClasses(1)}
                                        onClick={() => setSelectedCard(1)}
                                    >
                                        <Code2 className={getIconClass(1)} />
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                                            Professionals
                                        </h3>
                                        <p className={`${getTextClass(1)} text-sm sm:text-base`}>
                                            Professionals looking to upskill or advance their careers by gaining C++, Python, Java Programming skills.
                                        </p>
                                    </div>

                                    {/* Individuals Card */}
                                    <div
                                        className={getCardClasses(2)}
                                        onClick={() => setSelectedCard(2)}
                                    >
                                        <Network className={getIconClass(2)} />
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                                            Any individuals
                                        </h3>
                                        <p className={`${getTextClass(2)} text-sm sm:text-base`}>
                                            Any individuals wanting to learn and build their own application using C++, Java, Python.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col md:flex-row justify-between items-center w-full  p-4 md:p-5 gap-6 rounded-lg  bg-transparent ">
                            <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 ">
                                <h1 className="text-3xl md:text-5xl font-bold">Join the Most Popular MetaZen Course now!</h1>
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
                        {/* <OurProject /> */}
                        <div className="min-h-screen bg-white">
                            {/* Header Section */}
                            <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                                <h1 className="text-4xl md:text-5xl tracking-wider font-bold text-center text-gray-900 mb-6">
                                    MetaZen Projects You Will Do!
                                </h1>
                                <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
                                    Our MetaZen Course is a project-based course. Our syllabus is structured in such a way that in every module, you will be assigned a project.
                                </p>
                            </div>

                            {/* Projects Grid */}
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {projects.map((project, index) => (
                                        <div key={index} className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                                            <div className="aspect-[16/9] w-full">
                                                <Image
                                                    width={1000}
                                                    height={1000}
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                                <h3 className="text-2xl font-semibold text-white mb-2">
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center space-x-2">
                                                    {project.icon}
                                                    <span className="text-blue-400 font-medium">
                                                        {project.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={testimonialsRef} className="w-ful pt-10 place-content-center">
                        {/* <Testimonials /> */}
                        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-10 items-center justify-center flex">
                                    {/* <p className="text-[#00A3FF] text-center text-muted font-medium ">TESTIMONIALS</p> */}
                                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 lg:w-4/12 text-center">
                                        What Our Clients Love About Us
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg p-8 shadow-[0_0_20px_rgba(0,0,0,0.08)]"
                                        >
                                            <p className="text-gray-700 mb-6">{testimonial.text}</p>

                                            <div className="flex mb-4">
                                                {renderStars(testimonial.rating)}
                                            </div>

                                            <div className="flex items-center">
                                                <Image
                                                    width={48}
                                                    height={48}
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    className="w-12 h-12 rounded-full mr-4"
                                                />
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={faqsRef} className="w-ful pt-10 place-content-center">
                        <Fqas />

                    </div>
                </div>
            </section>

        </section>
    )
}

export default MetaZen;

interface Language {
    name: string;
    subItems?: string[];
}


function AccordionItem({
    language,
    isOpen,
    onClick
}: {
    language: Language;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="rounded-lg my-2 w-11/12 mx-auto rounded-b-none border-b-[0.2rem]  border-b-blue-600">
            <button
                className={`w-full lg:px-6 py-4  rounded-lg flex items-center justify-between transition-colors duration-200 ${isOpen ? 'bg-white' : 'bg-white hover:bg-gray-50'
                    }`}
                onClick={onClick}
            >
                <div className="flex justify-between w-full items-center gap-3">
                    <span className="text-md font-medium  text-gray-900">{language.name}</span>

                    <svg
                        className={`w-5 h-5 rotate-90 text-blue-500 transform transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : ''
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </button>
            <hr />
            <div
                className={`transition-all duration-200 ease-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white">
                    {language.subItems?.map((item, index) => (
                        <li
                            key={index}
                            className="lg:px-12 px-2 py-2 text-black lg:text-lg md:text-md text-[0.8rem] rounded-lg"
                        >
                            {item}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Keybenifits


function BenefitCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="bg-[#00A3FF] p-3 rounded-lg">
                <Package className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}


// testimonials

const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-[#00A3FF]">
            {index < rating ? <Star className="w-5 h-5 fill-current" /> : <Star className="w-5 h-5" />}
        </span>
    ));
};