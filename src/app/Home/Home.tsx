'use client';

import { gsap } from "gsap";
import Image from 'next/image';
import Slider from "react-slick";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import AnimatedTooltip from '@/components/ui/animated-tooltip'
import React, { useEffect, useState, useCallback } from 'react';
import './css/MOU.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from 'lucide-react';



gsap.registerPlugin(ScrollTrigger);
function HeroIllustration() {
    const [micSvgTranslateY, setMicSvgTranslateY] = useState(0);
    const [micSvgTranslateX, setMicSvgTranslateX] = useState(0);
    const [scrollTranslate, setScrollTranslate] = useState(0);
    const [, setCurrentSlide] = useState(0)


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 500) {
                setMicSvgTranslateY(0);
                setMicSvgTranslateX(0);
            } else if (scrollPosition < 1000) {
                setMicSvgTranslateY(250);
                setMicSvgTranslateX(0);
            } else if (scrollPosition < 1800) {
                setMicSvgTranslateY(250);
                setMicSvgTranslateX(400);
            }
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // const translateX = Math.min(scrollY * 0.2, 700);

            if (scrollY < 400) {
                setScrollTranslate(0);
            } else if (scrollY < 500) {
                setScrollTranslate(500);
            } else if (scrollY < 600) {
                setScrollTranslate(600);
            } else if (scrollY < 700) {
                setScrollTranslate(700);
            } else if (scrollY < 800) {
                setScrollTranslate(800);
            } else if (scrollY < 900) {
                setScrollTranslate(900);
            } else if (scrollY < 1000) {
                setScrollTranslate(1000);
            } else {
                setScrollTranslate(1100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const getBorderClass = () => {
        if (scrollTranslate <= 500) return 'border-blue-500 bg-blue-100';
        if (scrollTranslate <= 1000) return 'border-orange-500 bg-orange-100';
        return 'border-green-500 bg-green-100';
    };
    // const sliderImages = [  // old images 
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742388576/teaching2_cbsc8b.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Herosection1_ixcwp8.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Herosection2_pg9smu.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386631/Herosection4_fpza5i.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386632/herosection5_bycxql.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386632/Herosection6_zicjax.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386631/Herosection4_fpza5i.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Mou_2_oxpf57.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386631/Mou_4_jemwd3.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386635/Mou_11_irulgg.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Community4_uropla.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386629/Communit3_pev1so.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/community2_nu8zpz.jpg',
    //     'https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Community1_sbfhwy.jpg'
    // ];

    // 
    const sliderImages = [
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657082/1_d3rq80.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657083/2_lkf8lf.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657084/4_awi3ve.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1754657094/3_msykn9.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657101/6_jqatla.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657127/5_n84jvq.jpg', // b2c
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657607/1_zump3v.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657604/2_s7h8bu.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657604/3_a0bfow.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657610/3_1_qaqgjo.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657600/4_zctk3i.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657608/5_gr6b0h.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657598/6_epkorv.jpg', // b2b
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657813/1_pa9zkf.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657809/2_yfxvfp.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657811/4_axnumq.jpg',
//   'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657809/7_oowzww.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657808/6_jp0jgw.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754657807/5_gscaze.jpg' // student community
]

    

    const getImageSrc = () => {
        if (scrollTranslate <= 500) return [sliderImages[0], sliderImages[1], sliderImages[2], sliderImages[3], sliderImages[4], sliderImages[5]];
        if (scrollTranslate <= 1000) return [sliderImages[6],sliderImages[7], sliderImages[8], sliderImages[9],sliderImages[10], sliderImages[11], sliderImages[12]];
        return [ sliderImages[13],sliderImages[14],sliderImages[15],sliderImages[16],sliderImages[17]];
    };



    return (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16 relative ">
            <div className={` lg:max-w-xs sm:max-w-md  xl:max-w-[30rem] mr-12 aspect-square overflow-hidden shadow-2xl border-2 z-20  rounded-2xl lg:rounded-[50px] relative -top-10 lg:top-0 lg:left-20 ${getBorderClass()}`}>
                <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    arrows={false}
                    afterChange={(index: number) => setCurrentSlide(index)}
                >
                    {getImageSrc().map((image, index) => (
                        <div key={index} className="relative rounded-2xl min-w-[23rem] h-[30rem] overflow-hidden">
                            <Image
                                src={image}
                                alt={`Event Image ${index + 1}`}
                                className="object-cover h-full "
                                width={550}
                                height={300}
                            />
                        </div>
                    ))}
                </Slider>

                <div
                    className='absolute top-4 sm:top-10 text-red-500 right-4 sm:right-20'
                    style={{
                        transform: `translate(${-micSvgTranslateX}px, ${micSvgTranslateY}px)`,
                        transition: 'transform 0.5s ease-out',
                        willChange: 'transform'
                    }}
                >
                </div>
            </div>
            <div className={`absolute rounded-[50px] min-w-[25rem] h-[30rem] -right-5 top-6  sm:max-w-md  ${getBorderClass()}`}>

            </div>
        </div>
    );
}

const getBackgroundColor = (scrollTranslate: number) => {
    if (scrollTranslate === 0) return 'bg-blue-200';
    if (scrollTranslate === 200) return 'bg-orange-200';
    if (scrollTranslate === 300) return 'bg-green-200';
    return 'bg-white';
};

const getBorderColor = (scrollTranslate: number) => {
    if (scrollTranslate === 0) return 'border-blue-400 bg-blue-50/50';
    if (scrollTranslate === 200) return 'border-orange-400 bg-orange-50/50';
    if (scrollTranslate === 300) return 'border-green-400 bg-green-50/50';
    return 'bg-white';
};

const getTextColor = (scrollTranslate: number) => {
    if (scrollTranslate === 0) return 'text-blue-500';
    if (scrollTranslate === 200) return 'text-orange-500';
    if (scrollTranslate === 300) return 'text-green-500';
    return 'text-blue-500';
};

// Function to get content based on scrollTranslate
const getContent = (scrollTranslate: number) => {
    if (scrollTranslate === 0) {
        return "Boost Up and Build Your Tech Career with our Courses ";
    } else if (scrollTranslate === 200) {
        return "Reboot Campus Innovation: Your Hub for Tech World!";
    } else if (scrollTranslate === 300) {
        return " Join CDSC: The Hidden Order of Tech Clans";
    }
    return "Unlock your potential with our advanced educational tools and top-tier training.";
};

export default function Home() {
    const [wordIndex, setWordIndex] = useState(0);
    const [scrollTranslate, setScrollTranslate] = useState(0);
    const [autoContentIndex, setAutoContentIndex] = useState(0);
    const autoContents = [
        "Boost Up and Build Your Tech Career with our Courses ",
        "Reboot Campus Innovation: Your Go-To Hub for Tech World!",
        "Join Cybernaut Developers Student Community: The Hidden Order of Tech Clans"
    ];

    const [bodycontent, setBodyContent] = useState(0); // Initialize with 0   
    const bodycontents = [
        "Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!",
        "At Cybernaut Edu-Tech, we empower students to code, create, and innovate with industry-leading tools. Together, let's shape the future of learning and technology!",
        "Connect with tech minds, access exclusive resources, and level up your skills. At CDSC, innovation isn’t just learned—it’s built. Ready to enter the next era of tech?"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBodyContent((prevIndex) => (prevIndex + 1));
        }, 3000); // Change content every 3 seconds

        return () => clearInterval(interval);
    }, [bodycontents.length]);


    // GSAP ScrollTrigger for pinned scroll sections
    useEffect(() => {
        // Pin the main hero section and change content based on scroll progress
        const heroSection = document.querySelector('.hero-pin-section');
        
        if (heroSection) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top top",
                    end: "+=3000", // 3000px of scroll to go through all 3 content sections
                    pin: true,
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        
                        if (progress < 0.33) {
                            setWordIndex(0);
                            setScrollTranslate(0);
                        } else if (progress < 0.66) {
                            setWordIndex(1);
                            setScrollTranslate(200);
                        } else {
                            setWordIndex(2);
                            setScrollTranslate(300);
                        }
                    }
                }
            });

            return () => {
                tl.kill();
            };
        }
    }, []);

    const [content, setContent] = useState('Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!');
    const [isAnimating, setIsAnimating] = useState(false);


    // Update content based on scroll progress from ScrollTrigger
    useEffect(() => {
        let newContent = content;

        if (scrollTranslate === 0) {
            newContent = 'Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!';
        } else if (scrollTranslate === 200) {
            newContent = `At Cybernaut Edu-Tech, we empower students to code, create, and innovate with industry-leading tools. Together, let's shape the future of learning and technology!`;
        } else if (scrollTranslate === 300) {
            newContent = `Connect with tech minds, access exclusive resources, and level up your skills. At CDSC, innovation isn't just learned—it's built. Ready to enter the next era of tech?`;
        }

        if (newContent !== content) {
            setIsAnimating(true);
            setContent(newContent);
            setTimeout(() => setIsAnimating(false), 100);
        }
    }, [scrollTranslate, content]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAutoContentIndex((prevIndex) => (prevIndex + 1) % autoContents.length);
        }, 3000); // Change content every 3 seconds

        return () => clearInterval(interval);
    }, [autoContents.length]);

    const people: { id: number; name: string; designation: string; image: string | StaticImageData }[] = [
        {
            id: 1,
            name: "Anitha",
            designation: "Grapic Designer",
            image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717566/0b38d4ce-d19e-433d-af59-05e52045b588.png'
        },
        {
            id: 2,
            name: "Rajkumar",
            designation: "Data Analyst",
            image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717597/7a1f412f-cf20-43e2-b3e1-1f417a4c5ef8.png'
        },
        {
            id: 3,
            name: "Kavitha",
            designation: "Web Developer",
            image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717617/a2595015-a6f5-439e-8c47-ca20474c399f.png'
        },
        {
            id: 4,
            name: "MohanKumar",
            designation: "Web Developer",
            image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717640/f22c68a7-a4c1-4903-970c-6bf72d5f1498.png'
        }

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setAutoContentIndex((prevIndex) => (prevIndex + 1) % autoContents.length);
                setBodyContent((prevIndex) => (prevIndex + 1) % bodycontents.length);
                setIsAnimating(false);
            }, 300);
        }, 3000); // Change content every 9 seconds

        return () => clearInterval(interval);
    }, [autoContents.length, bodycontents.length]);
    // slider
    const [, setCurrentSlide] = useState(0)
     const sliderImages = [
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753716405/c2a66f6b-1757-4270-aa37-2e87a2460b6d.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753716430/2d27f8b0-0f8c-46c6-ba81-0eef3a5d8144.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753716373/2e31533e-2f20-4db9-b937-1fab48bd5722.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753716357/9acf9192-d373-4c83-9a3b-94f7d459fc10.png', 
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753716388/b7df062c-5516-4433-916b-16454077b74e.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504481/IMG_8114_h8xeri.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504483/IMG_8448_brmbpu.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504295/IMG_6137_vrppyd.jpg',//
        'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504297/IMG_1701_qe20ur.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504296/IMG_0279_hkuqgw.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753716015/f14ceae9-18f7-4e6e-8dc9-74d11a12ac97.png', //
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753715988/d3a6a190-c4ad-49fd-bc1c-2cec97198808.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753715927/7e381005-e555-46cd-9604-e2f9b6331f91.png',
        'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504500/IMG_4455_vpcx0u.png'
    ];
    

    const getImageSrc = () => {
        if (scrollTranslate <= 500) return [sliderImages[0], sliderImages[1], sliderImages[2], sliderImages[3], sliderImages[4], sliderImages[5], sliderImages[6]];
        if (scrollTranslate <= 1000) return [sliderImages[7], sliderImages[8], sliderImages[9]];
        return [sliderImages[10], sliderImages[11], sliderImages[12], sliderImages[13]];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setAutoContentIndex((prev) => (prev + 1) % autoContents.length);
                setBodyContent((prev) => (prev + 1) % bodycontents.length);
                setIsAnimating(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoContents.length, bodycontents.length]);
    // mic animeation

    const [scrollY, setScrollY] = useState(0);
    const [, setCurrentQuote] = useState(0);

    const quotes = [
        "Connecting Minds, Collaborating on Ideas, and Creating the Future",
        "Sharing Our Knowledge to Inspire Growth and Innovation",
        "Building Tomorrow's Solutions Through Creative Collaboration"
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 2) % quotes.length);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, [quotes.length]);

    // Calculate smooth vertical movement
    const moveDistance = Math.min(scrollY * 0.3, 450); // Stop at 800px

    return (
        <>
            {/* Desktop View */}
            <div className="container mx-auto hidden lg:block w-full max-w-[90vw] min-h-screen px-4 pb-40">
                <section className="hero-pin-section container mx-auto min-h-[140rem] relative top-28 w-full" style={{ marginTop: '10px' }}>
                    <main className="mx-auto h-auto w-12/12 rounded-xl sticky top-28 place-content-center overflow-hidden shadow-[0px_-80px_50px_5px_#F8F8F8]">                        <div className="flex items-center justify-center w-full">
                        <div className="min-h-auto w-1/2 space-y-4">
                            <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl w-[35rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] text-start font-sans font-bold transition-all duration-300 ease-in-out">
                                <span className="text-[clamp(1.25rem,3.5vw,2.25rem)] tracking-wider font-sans font-extrabold">
                                    {getContent(scrollTranslate)}
                                </span>
                            </h1>
                            <div className="w-full">
                                <div className="transform py-5 overflow-hidden">
                                    <h1 className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] w-[35rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] text-gray-500 transition-all duration-300 ease-in-out">
                                        {content}
                                    </h1>
                                </div>
                            </div>
                            <div className='max-w-[25vw] md:max-w-[20vw] lg:max-w-[25vw] xl:max-w-[30vw] overflow-hidden space-y-3'>
                                <div className="flex w-full max-w-[50vw] md:max-w-[45vw] lg:max-w-[50vw] xl:max-w-[60vw] items-center justify-between">
                                    <div className="w-1/2">
                                        <button className="overflow-hidden w-24 md:w-32 lg:w-36 xl:w-40 p-2 px-6 py-2 bg-sky-100 text-black border-none rounded-full text-sm md:text-base lg:text-lg xl:text-xl font-medium cursor-pointer relative z-10 group">
                                            Contact us
                                            <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                                            <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                                            <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                                            <Link href="/contact">
                                                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-2 left-8 z-10 text-lg">Contact us</span>
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="">
                                        <Link href="/Program">
                                            <button className="flex justify-center cursor-pointer min-w-36 md:min-w-40 lg:min-w-44 xl:min-w-48 py-2 rounded-full text-white bg-[#2A2A2A] px-5">
                                                Explore Solutions
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex w-full max-w-[45vw] md:max-w-[40vw] lg:max-w-[45vw] xl:max-w-[50vw] items-center justify-start">
                                    <div className="w-1/2">
                                        <h6 className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-gray-400">Students Trusted on</h6>
                                        <div className="flex flex-row items-start justify-start w-[12rem] md:w-[10rem] lg:w-[12rem] xl:w-[14rem] gap-2">
                                            <AnimatedTooltip items={people} />
                                            <h1 className="pl-5 font-professional font-semibold text-[19px] md:text-[17px] lg:text-[19px] xl:text-[21px]">1L+</h1>
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-16 space-y-3 text-end">
                                        <h6 className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-gray-400">Students Trained</h6>
                                        <h1 className="pl-5 font-professional font-semibold text-[19px] md:text-[17px] lg:text-[19px] xl:text-[21px]">75K+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden relative right-10 md:block">
                            <HeroIllustration />
                        </div>
                    </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                            <div className="absolute top-0 left-60 md:left-40 lg:left-60  z-50 right-0 mx-auto w-full">
                                <div className="relative w-full max-w-md mx-auto" style={{
                                    transform: `translateY(${moveDistance}px)`,
                                    transition: 'transform 0.4s ease-out'
                                }}>
                                    <div className={`relative rounded-2xl p-6 shadow-xl w-52 h-28 ${getBackgroundColor(scrollTranslate)}`}>
                                        <div id="animatedBox" className={`relative w-52 h-28 bg-white mx-auto place-content-center rounded-3xl border-2 ${getBorderColor(scrollTranslate)} z-50 left-0 top-0 transition-all duration-500 ease-in-out`}>
                                            <div className='text-md mx-auto px-1 font-normal text-gray-600 p-2'>
                                                <h1 className='text-[0.8rem] p-4'><span className={`font-semibold ${getTextColor(scrollTranslate)}`}>{['Connecting Minds, Collaborating on Ideas, and Creating the Future', 'Sharing Our Knowledge to Inspire Growth and Innovation', 'Connecting Minds, Collaborating on Ideas, and Creating the Future'][wordIndex]}</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-screen relative -left-15 -bottom-5 h-28 bg-gradient-to-b from-white/10 via-white/90 to-white"></div>
                        <div style={{
                            transform: `translateY(${scrollTranslate * -1.9}px)`,
                            transition: 'transform 0.3s ease-out'
                        }} className={`w-10/12 md:w-9/12 lg:w-10/12 xl:w-11/12 my-5 -z-10 rounded-r-[25rem] border-[0.2rem] border-l-transparent border-b-transparent -left-32 pt-20 h-[135.1rem] absolute top-10 ${getBorderColor(scrollTranslate)}`}>
                        </div>
                    </main>
                </section>
            </div>

            {/*Tablet View */}
            <section className="hidden md:block lg:hidden w-full min-h-screen">
                <div className="relative w-full ">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

                    <div className="relative py-16 mt-12 px-8" style={{ marginTop: 'calc(3rem + 10px)' }}>
                        <div className="container mx-auto">
                            <div className="max-w-4xl mx-auto">
                                <div className="space-y-8">
                                    {/* Main Content */}
                                    <div className="space-y-10">
                                        <h1
                                            style={{ lineHeight: '1.2' }}
                                            className={`text-[clamp(1.5rem, 2vw, 2.5rem)]  min-h-2  tracking-wide py-3 text-start lg:text-4xl font-sans font-extrabold transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                                                }`}
                                        >
                                            {autoContents[autoContentIndex]}
                                        </h1>

                                        <div className="min-h-20">
                                            <p
                                                className={`text-[clamp(1rem, 1.5vw, 1.5rem)] text-gray-600 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                                                    }`}
                                            >
                                                {bodycontents[bodycontent]}
                                            </p>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <button className="group relative overflow-hidden px-8 py-3 bg-sky-50 text-sky-600 rounded-full text-base font-medium cursor-pointer transition-all duration-300 hover:text-white">
                                                <span className="relative z-10">Contact us</span>
                                                <div className="absolute inset-0 h-full w-full transform scale-x-0 origin-left transition-transform duration-500 ease-out bg-gradient-to-r from-sky-400 to-sky-600 group-hover:scale-x-100"></div>
                                            </button>

                                            <button className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
                                                Explore Solutions
                                                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="mt-16 relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-purple-100 transform -skew-y-6 rounded-3xl -z-10"></div>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                            <Slider
                                                dots={false}
                                                infinite={true}
                                                speed={500}
                                                slidesToShow={1}
                                                slidesToScroll={1}
                                                autoplay={true}
                                                autoplaySpeed={3000}
                                                arrows={false}
                                                afterChange={(index: number) => setCurrentSlide(index)}
                                            >
                                                {getImageSrc().map((image, index) => (
                                                    <div key={index} className="relative rounded-2xl min-w-[20rem] h-[30rem] overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={`Event Image ${index + 1}`}
                                                            className="object-cover w-full h-full "
                                                            width={200}
                                                            height={200}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile View */}
            <section className='block md:hidden container  mt-24' style={{ marginTop: 'calc(6rem + 10px)' }}>
                <div className="heading pb-5 p-4">
                    <div className='w-full py-5 min-h-[13rem] '>
                        <p
                            style={{ lineHeight: '1.2' }}
                            className={`text-[19px] min-h-32 tracking-wide py-3 text-start lg:text-4xl font-sans font-extrabold transform transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 ' : 'opacity-100'}`}
                        >
                            {autoContents[autoContentIndex]}
                        </p>
                        <div className="min-h-32 w-full">
                            <div className="transform overflow-hidden">
                                <h1
                                    className={`
                                        text-md text-gray-500
                                        transform transition-all duration-300 ease-in-out
                                        ${isAnimating ? 'opacity-0' : 'opacity-100'}
                                                 `}
                                >
                                    {bodycontents[bodycontent]}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 ">

                        <button className='lg:w-80 w-1/2 h-10 text-xs border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
                            <Link href="/contact">
                                Get started
                            </Link>
                        </button>
                        <button className='lg:w-80 w-1/2 h-10 text-sm border border-sky-500 rounded-sm py-2'>
                            <Link href="/Program">
                                Explore Solutions
                            </Link>
                        </button>
                    </div>

                    <div className="flex w-12/12 items-center justify-start pt-3">
                        <div className='w-1/2 h-16 space-y-3'>
                            <h6 className='text-sm w-60 font-medium text-gray-400'>Students Trusted on</h6>
                            <div className="flex flex-row items-start  relative   justify-start  w-[15rem] gap-2">
                                <AnimatedTooltip items={people} />
                                <h1 className='pl-5 font-professional font-semibold text-[22px]'>1L+</h1>
                            </div>
                        </div>
                        <div className='w-1/2 h-16 space-y-3'>
                            <h6 className='text-sm text-end font-medium text-gray-400'>Students Trained</h6>
                            <h1 className='pl-5 text-end font-professional font-semibold text-[22px]'>75K+</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full min-h-60 relative items-center justify-center flex">
                    <div className="w-10/12 h-72 relative left-5  top-2 mx-auto rounded-xl bg-sky-300"></div>
                    <div className="w-11/12 h-[18rem] absolute border-2 overflow-hidden border-sky-300 mx-auto rounded-xl bg-white">

                        <Slider
                            dots={false}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={3000}
                            arrows={false}
                            afterChange={(index: number) => setCurrentSlide(index)}
                        >
                            {getImageSrc().map((image, index) => (
                                <div key={index} className="relative rounded-2xl min-w-[20rem] h-[20rem] overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`Event Image ${index + 1}`}
                                        className="object-cover w-full h-full "
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}
