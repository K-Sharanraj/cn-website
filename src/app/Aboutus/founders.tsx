'use client';
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import FounderCard from '@/app/Aboutus/Mobile-UI/FounderCard'
import AnimatedTooltip from '@/components/ui/animated-tooltip'
import { NumberTicker } from "@/components/magicui/number-ticker";
import { StaticImageData } from 'next/image';
import Commonbtn from '@/components/ui/Commonbtn';
// import { ArrowRight } from 'lucide-react';
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
    name: "MohanKumar ",
    designation: "AI Expert",
    image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717640/f22c68a7-a4c1-4903-970c-6bf72d5f1498.png'
  }

];


const images = ["https://res.cloudinary.com/dn60aovto/image/upload/v1742450995/JS_hkszd9.png", "https://res.cloudinary.com/dn60aovto/image/upload/v1742451262/Manish_q6qmq6.png"]; // Array of images

const Founders = () => {

  const [, setCurrentImageIndex] = useState(0);
  const isHovered = false; // Or simply remove this line if not needed

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };



  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextImage();
      }
      console.log(images);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovered]);

  return (
    <>
      <div className='hidden'>
        <h1 className='lg:text-2xl text-lg flex items-center font-professional font-bold text-center my-2 '>MEET OUR <span className='text-blue-500'>FOUNDERS</span></h1>

        <p className='lg:text-lg mx-auto my-8 lg:px-[130px] lg:w-11/12 w-10/12 lg:text-center text-start xl:container '>Unlock your potential with our advanced educational tools and top-tier training. Join 10,000+ successful learners and enhance your skills with Tech Trio, Full Stack, UI & UX, and more. Find the perfect program for your career goals today.</p>
        <div>
          <section className=''>
            <Card className="relative mx-auto w-[70rem]  h-[35rem] z-40 rounded-[3rem] lg:block hidden bg-[#00A3FF]/10 lg:border-b-blue-500 border-b-0 border-r-2  border-t-2 border-l-2 overflow-hidden border-blue-500 p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start  lg:justify-between">
                <div className="space-y-6 lg:max-w-[60%] hidden lg:block p-5">
                  <h2 className="text-xl text-gray-600 font-medium">Founder & CEO</h2>
                  <h1 className="text-3xl font-professional font-bold tracking-tight lg:text-4xl">
                    Jayasurya Gnanavel
                  </h1>
                  <p className="text-lg text-justify  leading-relaxed text-gray-800">
                    Jaya Surya is a passionate philomath from India, dedicated to teaching, inspiring, and shaping future leaders.
                    Specializing in career and business strategy, he guides youth in discovering their purpose and pursuing it confidently.
                    With a mission to empower the next generation, he encourages bold thinking, decisive action, and impactful leadership.
                  </p>
                </div>
                <div className="lg:flex hidden justify-center items-center space-y-8 ">
                  <div className="relative w-[300px] h-[354px] transition-all duration-400 hover:scale-110 rounded-lg overflow-hidden">
                    <div className="first-content h-full w-full flex justify-center items-center transition-all duration-400">
                      <Image
                        width={300}
                        height={354}
                        src='https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504465/IMG_1931_tvasqn.jpg'
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex hidden justify-start items-center relative -left-[2.3rem] top-[3.7rem] pb-4  w-[30rem] h-28  rounded-br-[3rem] rounded-bl-[3rem]  shadow-[0.1rem_0.1rem_0_0] shadow-blue-500 z-30">
                <Button className='bg-blue-500  p-8 px-10  rounded-full text-lg mx-10'>Let&apos;s Contect</Button>
                <div className=' lg:flex hidden justify-center  items-center flex-col relative -left-5 w-full '>
                  <div className="flex flex-row items-start relative justify-start w-[14rem]">
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className="flex">
                    <p className="text-lg w-[15rem] text-gray-800">
                      Students Trained <span className="text-lg font-professional font-semibold">30K+</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute hidden lg:block bottom-0 left-[29.8rem] top-[22rem] right-0 w-[60rem] h-28  rounded-t-[3rem] mx-auto shadow-[-0.1rem_-0.1rem_0_0] rounded-tr-none rounded-bl-none shadow-blue-500">
              </div>

            </Card>
            <div className='lg:flex hidden justify-around gap-0 mx-auto relative  -top-[12.9rem] left-[15.5rem] bg-white w-[41rem] h-52 rounded-tl-[3rem]  z-40'>
              <div className='w-[20rem] m-5 h-44 rounded-[2rem] border-2 border-blue-500 p-5 '>
                <h1 className='text-sm font-bold '>Young Entrepreneurship Award</h1>
                <h1 className='text-sm py-3'>Recognized for visionary leadership and innovation in education.</h1>
                <h1 className='text-3xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />

                  %</h1>
              </div>
              <div className='w-[20rem] m-5 h-44 rounded-[2rem]  border-2 border-blue-500 p-5'>
                <h1 className='text-md font-bold '>Training 50,000+ Students</h1>
                <h1 className='text-sm py-3'>Empowered thousands with skills for career success.</h1>
                <h1 className='text-3xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />
                  %
                </h1>
              </div>
            </div>
          </section>
          <section className='relative hidden lg:block -top-20'>
            <Card className="relative mx-auto w-[70rem]  h-[37rem] z-40 rounded-[3rem] border-b-white border-b-0 border-r-2  border-t-2 border-l-2 overflow-hidden bg-transparent border-blue-500 p-8">
              <div className="flex flex-col gap-8  lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-[400px]">
                  <div className="flex justify-center items-center space-y-8">
                    <div className="relative w-[300px] h-[354px] transition-all duration-400 hover:scale-110 rounded-lg overflow-hidden">
                      <div className="first-content h-full w-full flex justify-center items-center transition-all duration-400">
                        <Image
                          width={300}
                          height={354}
                          src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717974/5a33f30a-75c3-440b-9e6e-8112c76886f4.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 lg:max-w-[60%] ">
                  <h2 className="text-2xl font-medium">Co-Founder & President</h2>
                  <h1 className="text-4xl py-3 font-bold tracking-tight lg:text-5xl">
                    Manish Kumar
                  </h1>
                  <p className="text-lg text-justify leading-relaxed text-gray-800">
                    B. Manish Kumar, President and UI/UX Designer at Cybernaut, combines design expertise with strategic vision. His commitment to quality drives innovation and supports the company&apos;s growth, shaping Cybernaut&apos;s journey toward long-term success and excellence in education and technology.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-center pb-20 items-center bottom-[0.1rem] -right-1  w-[30rem] h-24 rounded-br-[3rem]  rounded-bl-[3rem] shadow-[-0.1rem_0.1rem_0_0] shadow-blue-500">
                <div className=' flex justify-center items-center flex-col w-1/3 h-20'>
                  <div className="flex flex-row items-start  relative   justify-start  w-[14rem]">
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className="flex">
                    <p className="text-lg w-[13rem] text-gray-800">
                      Students Trained <span className="text-2xl font-bold">30K+</span>
                    </p>
                  </div>
                </div>
                <Button className='p-8 px-8 bg-blue-500 rounded-full text-lg mx-10 '>Let&apos;s Contect</Button>
              </div>
              <div className="absolute bottom-0 top-[25rem] -left-[0.1rem] w-[40rem] h-28  rounded-t-[3rem] mx-auto shadow-[0.1rem_-0.1rem_0_0] rounded-tl-none rounded-tr-[2rem]  rounded-bl-none shadow-blue-500">
              </div>
            </Card>
            <div className='flex justify-center mx-auto relative -top-[11.8rem] -left-[15.3rem] z-40 bg-white w-[40.5rem] h-52 rounded-tr-[2rem]'>
              <div className='w-[18rem] m-5 h-44 rounded-[2rem] p-5 border-2 border-blue-500  absolute left-0 top-0 right-0 bottom-0'>
                <h1 className='text-sm font-bold '>Young Entrepreneurship Award</h1>
                <h1 className='text-sm py-3'>Recognized for visionary leadership and innovation in education.</h1>
                <h1 className='text-2xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />
                  %</h1>
              </div>
              <div className='w-[18rem] m-5 h-44 rounded-[2rem] p-5 border-2 border-blue-500 absolute right-0'>
                <h1 className='text-md font-bold '>Training 50,000+ Students</h1>
                <h1 className='text-sm py-3'>Empowered thousands with skills for career success.</h1>
                <h1 className='text-2xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />
                  %</h1>
              </div>
            </div>
          </section>
        </div>
        <div className='flex lg:hidden justify-center mx-auto  bg-sky-100 w-12/12 min-h-96'>
          <div className='flex justify-center w-full mx-auto bg-gray-100/0'>
            <FounderCard />
          </div>
        </div>
      </div>


      {/* ================================================================================================================ */}
      <section className='space-y-10 lg:py-10'>
        <div className='flex flex-col justify-center space-y-5 mx-auto lg:py-10'>
          <h1 style={{ fontFamily: 'Loubag' }} className='lg:text-3xl text-2xl   text-center  font-bold my-2 gap-2 tracking-wider '>MEET OUR FOUNDERS </h1>

          <p className='text-center lg:max-w-3xl w-11/12  text-sm lg:text-lg mx-auto'>
            Unlock your potential with our advanced educational tools and top-tier training. Join 10,000+ successful learners and enhance your skills with Tech Trio, Full Stack, UI & UX, and more. Find the perfect program for your career goals today.
          </p>
        </div>
        <div className="container px-10   flex flex-col-reverse md:flex-row items-center justify-center gap-5  mx-auto">
          {/* Left Content */}
          <div className="w-full  min-h-96 flex items-center justify-center lg:py-0  ">
            <div className='lg:w-[33rem] w-full  min-h-80  space-y-2'>
              <h1 className="text-lg  md:text-2xl lg:text-2xl font-bold text-[#1F1F3D]">
                Hello, I&apos;m Jayasurya Gnanavel
              </h1>


              <h2 className="text-xl md:text-xl text-[#00A3FF] font-semibold">
                Founder & CEO
              </h2>
              <p className="text-gray-600 lg:text-md text-sm lg:text-start text-justify leading-relaxed ">
                Jaya Surya is a passionate philomath from India, dedicated to teaching, inspiring, and shaping future leaders. Specializing in career and business strategy, he guides youth in discovering their purpose and pursuing it confidently. With a mission to empower the next generation, he encourages bold thinking, decisive action, and impactful leadership.
              </p>

              <div className="flex flex-row items-start relative justify-start w-[14rem]">
                <AnimatedTooltip items={people} />
              </div>
              <div className='flex justify-between items-center'>
                <p className="text-lg w-[15rem] py-2 text-gray-800">
                  Students Trained <span className="text-2xl font-bold">30K+</span>
                </p>
                <div className=' flex gap-2 justify-center'>
                  <a href="https://www.instagram.com/jsgnanaveloff?igsh=cjhzdWpjNHRrcTRx">
                    <span className='Instagram bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" /></svg>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/jayasurya-gnanavel-b96300197">
                    <span className='Linked In bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#2A254D"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g></svg>
                    </span>
                  </a>
                </div>
              </div>
              {/* <a href="https://www.linkedin.com/in/jayasurya-gnanavel-b96300197">
                <Commonbtn className="text-white flex items-center justify-center ">
                  Get in Touch
                  <ArrowRight className="ml-2" />
                </Commonbtn>
              </a> */}
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-full lg:h-[30rem] space-y-6 flex items-center justify-center ">
            <div className='relative w-full  bg-white  lg:w-[29rem] lg:min-h-96'>
              <div className='w-80 h-80 bg-blue-200 hidden lg:block rounded-[2rem] absolute -right-5 -bottom-5'>
              </div>
              <Image
                width={350}
                height={354}
                src="https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto,c_fill,g_auto,h_1000,w_1000/f_auto/v1753504461/IMG_1964_bzhdlq.jpg" //inga
                alt="Profile"
                className="lg:rounded-[2rem] place-self-start  lg:w-[30rem] w-[35rem] relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
        {/* ----------------------------Manish---------------------------------------- */}
        <div className="container px-10 lg:pt-10  flex flex-col md:flex-row items-center justify-center gap-5  mx-auto">

          <div className="w-full md:w-1/2 lg:w-full lg:h-[30rem] space-y-6 flex items-center justify-center ">
            <div className='relative  w-[29rem] lg:min-h-96'>
              <div className='w-80 h-80 bg-blue-200 hidden lg:block rounded-[2rem] absolute -left-5 -bottom-5'>
              </div>
              <Image
                width={300}
                height={354}
                src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717974/5a33f30a-75c3-440b-9e6e-8112c76886f4.png"
                alt="Profile"
                className="rounded-[2rem] w-[30rem] h-[30rem] relative z-10 object-cover hidden lg:block"
              />
              <Image
                width={300}
                height={354}
                src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717974/5a33f30a-75c3-440b-9e6e-8112c76886f4.png"
                alt="Profile"
                className="rounded-[2rem] w-[30rem] h-96 relative z-10 object-cover lg:hidden"
              />
            </div>
          </div>

          <div className="w-full  min-h-96 flex items-center justify-center ">
            <div className='w-[33rem] min-h-80  space-y-3'>
              <h1 className="text-lg md:text-2xl lg:text-2xl font-bold    text-[#1F1F3D]">
                Hello, I&apos;m Manish Kumar
              </h1>
              <h2 className="text-xl md:text-xl text-[#00A3FF] font-semibold">
                Co-Founder & President
              </h2>
              <p className="text-gray-600 text-md leading-relaxed ">
                B. Manish Kumar, President and UI/UX Designer at Cybernaut, combines design expertise with strategic vision. His commitment to quality drives innovation and supports the company&apos;s growth, shaping Cybernaut&apos;s journey toward long-term success and excellence in education and technology.
              </p>
              <div className="flex flex-row items-start relative justify-start w-[14rem]">
                <AnimatedTooltip items={people} />
              </div>
              <div className='flex justify-between items-center space--'>
                <p className="text-lg w-[15rem] py-2 text-gray-800">
                  Students Trained <span className="text-2xl font-bold">10K+</span>
                </p>
                <div className=' flex gap-2 justify-center'>
                  <a href="https://www.instagram.com/i.n.t.e.r.n.e.t.m.o.n.s.t.e.r?igsh=anV2OTdhM2hyaDBp">
                    <span className='Facebook bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" /></svg>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-b-175a701b0">
                    <span className='Linked In bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#2A254D"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g></svg>
                    </span>
                  </a>
                </div>
              </div>
              {/* <a href="https://www.linkedin.com/in/manish-kumar-b-175a701b0">
                <Commonbtn className="text-white flex items-center justify-center ">
                  Get in Touch
                  <ArrowRight className="ml-2" />
                </Commonbtn>
              </a> */}
            </div>
          </div>
        </div>
      </section>


      <section className="hidden py-20 bg-white">
        {/* Header */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F1F3D]">
              MEET OUR FOUNDERS
            </h1>
            <p className="text-gray-600 text-lg">
              Unlock your potential with our advanced educational tools and top-tier training.
              Join 10,000+ successful learners and enhance your skills with Tech Trio, Full Stack,
              UI & UX, and more. Find the perfect program for your career goals today.
            </p>
          </div>
        </div>

        {/* Founders Grid */}
        <div className="container mx-auto px-4">
          {/* Jayasurya Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2 space-y-6">
              <div className=" bg-red-500 w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F3D] mb-2">
                  Hello, I&apos;m Jayasurya Gnanavel
                </h2>
                <h3 className="text-xl text-[#00A3FF] font-semibold mb-4">
                  Founder & CEO
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Jaya Surya is a passionate philomath from India, dedicated to teaching,
                  inspiring, and shaping future leaders. Specializing in career and business
                  strategy, he guides youth in discovering their purpose and pursuing it confidently.
                  With a mission to empower the next generation, he encourages bold thinking,
                  decisive action, and impactful leadership.
                </p>

                <div className="flex justify-between items-center mb-6">
                  <p className="text-lg text-gray-800">
                    Students Trained <span className="text-2xl font-bold">30K+</span>
                  </p>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com/jsgnanaveloff"
                      className="hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                          <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" />
                        </svg>
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/jayasurya-gnanavel-b96300197"
                      className="hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <g fill="#2A254D">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" />
                            <path d="M7.2 8.809H4V19.5h3.2z" />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/jayasurya-gnanavel-b96300197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="">
                  <Commonbtn>Get in Touch</Commonbtn>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 bg-blue-200 rounded-[2rem] absolute -right-5 -bottom-5 hidden lg:block" />
                <Image
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504465/IMG_1931_tvasqn.jpg" //inga
                  alt="Jayasurya Gnanavel"
                  className="rounded-[2rem] relative z-10 object-cover w-full max-w-xl mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Manish Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 bg-blue-200 rounded-[2rem] absolute -left-5 -bottom-5 hidden lg:block" />
                <Image
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717974/5a33f30a-75c3-440b-9e6e-8112c76886f4.png"
                  alt="Manish Kumar"
                  className="rounded-[2rem] relative z-10 object-cover w-full max-w-xl mx-auto hidden lg:block"
                />
                <Image
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1753717974/5a33f30a-75c3-440b-9e6e-8112c76886f4.png"
                  alt="Manish Kumar"
                  className="rounded-[2rem] relative z-10 object-cover w-full max-w-xl mx-auto lg:hidden"
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F3D] mb-2">
                  Hello, I&apos;m Manish Kumar
                </h2>
                <h3 className="text-xl text-[#00A3FF] font-semibold mb-4">
                  Co-Founder & President
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  B. Manish Kumar, President and UI/UX Designer at Cybernaut, combines design
                  expertise with strategic vision. His commitment to quality drives innovation
                  and supports the company&apos;s growth, shaping Cybernaut&apos;s journey toward
                  long-term success and excellence in education and technology.
                </p>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-lg text-gray-800">
                    Students Trained <span className="text-2xl font-bold">10K+</span>
                  </p>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com/i.n.t.e.r.n.e.t.m.o.n.s.t.e.r"
                      className="hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                          <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" />
                        </svg>
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/manish-kumar-b-175a701b0"
                      className="hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <g fill="#2A254D">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" />
                            <path d="M7.2 8.809H4V19.5h3.2z" />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/manish-kumar-b-175a701b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-6 bg-blue-500 hover:bg-blue-600 rounded-full text-lg text-white transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Founders;