// 'use client';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const galleryImages = [
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742447942/SRM_etmb9m.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742447962/Mou_2_bozcfe.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742447983/Mou_4_yuw2uy.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448013/Mou_3_f9v75n.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448032/Mou_5_l7nhrm.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448052/Mou_6_w3rlc1.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448073/Mou_7_vm79ij.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448101/Mou_8_epcyae.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448100/Mou_9_igsnht.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448098/Mou_10_wno0g9.jpg'
// ];  

// const outreachImages  = [
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448505/Outreach_1_lc97mp.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448530/Outreach2_xngh8z.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448566/Outreach3_eqskjk.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448562/Outreach4_msdqmw.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448558/Outreach_5_wgpguu.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448568/Outreach6_pgny4g.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448566/Outreach7_jjwakb.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448559/Outreach8_eh8fys.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448565/outreach11_bdmmvw.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448565/Outreach10_njuoau.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448563/outreach13_det5iq.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448560/outreach12_u2u8ui.jpg',
//   'https://res.cloudinary.com/dn60aovto/image/upload/v1742448563/outreach13_det5iq.jpg',
// ];
  
// const imageNames = [
//   "SRM Institute Of Science And Technology",
//   "Sri Sivasubramaniya Nadar College of Engineering",
//   "Vivekanandha College of Engineering for Women ",
//   "VLB Janakiammal College Of Arts & Science ",
//   "Gnanamani College of Technology",
//   "PGP College Of Arts & Science",
//   "SRM Institute Of Science And Technology ",
//   "Meenakshi College Of Engineering",
//   "Sri Muthukumaran Institute of Technology (SMIT) ",
//   "Kings Engineering College ",
// ];

// const imageDescriptions = [
//   " Ramapuram, Chennai",
//   " Kalavakkam, Chennai",
//   " Tiruchengode",
//   "Kovaipudur",
//   "Namakkal",
//   " Namakkal",
//   " Chennai",
//   "Ramapuram, Chennai",
//   " Chennai",
//   "Chennai",
//   "Chennai",
// ];

// const OutreachimageNames = [
//   `Mastering Full Stack Development: Zero to Hero `,
//   `Crack MAANG Interviews: DSA & System Design Secrets `,
//   `Build a MAANG-Worthy Resume in 60 Minutes`,
//   `FAANG Behavioral Interview: Talk Like a Pro `,
//   `Web Dev Masterclass: React, Next.js & Beyond  `,
//   `Ace Coding Rounds: DSA Patterns You Must Know `,
//   `Landing Your Dream Job: Placement Hacks & Strategies`,
//   `Power Up with Data Analytics: Insights That Matter `,
//   `The Future of AI: How Gen AI is Changing the Game`,
//   `AI & Gen AI: Your Shortcut to a High-Paying Career `,
//   `From College to Corporate: Tech Career Roadmap`,
//   `Gen AI in Action: Automate & Innovate with AI `,
//   `Hack Your Way into MAANG: Resume & Interview Secrets`,
// ];

// const OutreachimageDescriptions = [
//   "SRM Institute Of Science And Technology(Ramapuram, Chennai)",
//   `Vivekanandha College of Arts and Science for Women ( Tiruchengode )`,
//   `Sacred Heart College ( Tiruppattur )`,
//   `Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College ( Avadi )`,
//   `Sri Sivasubramaniya Nadar College of Engineering ( Kalavakkam, Chennai )`,
//   `Guru Nanak College ( Chennai )`,
//   `Vivekanandha College of Engineering for Women ( Tiruchengode )`,
//   `KPR College of Arts Science and Research ( Uthupalayam )`,
//   `SIMATS ENGINEERING ( Chennai )`,
//   `Rajalakshmi Engineering College ( Thandalam, Chennai )`,
//   `Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College ( Avadi )`,
//   `Erode Sengunthar Engineering College ( Erode )`,
//   `Knowledge Institute of Technology ( Kakapalayam, Salem )`,
// ];

// const Gallery = () => {
//   const [activeTab, setActiveTab] = useState('gallery');
//   const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
//   const [currentOutreachImage, setCurrentOutreachImage] = useState(0);

//   const images = activeTab === 'gallery' ? galleryImages : outreachImages;
//   const currentImage = activeTab === 'gallery' ? currentGalleryImage : currentOutreachImage;
//   const setCurrentImage = activeTab === 'gallery' ? setCurrentGalleryImage : setCurrentOutreachImage;

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="container mx-auto lg:py-5 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl  mx-auto">
//         <div className='flex justify-around my-6'>
//           <div className="flex items-center flex-row lg:justify-center justify-around gap-1 lg:gap-0 md:space-y-0 md:space-x-20 w-full">
//             <button
//               className={`lg:px-4 lg:py-2  flex gap-2 text-md md:text-xl font-medium ${activeTab === 'gallery'
//                 ? 'text-black'
//                 : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               onClick={() => {
//                 setActiveTab('gallery');
//               }}
//             >
//               Mou Gallery
//             </button>
//             <button
//               className={`lg:px-4 lg:py-2 md:px-6 md:py-3 flex gap-2 relative left-2 text-md md:text-xl font-medium ${activeTab === 'outreach'
//                 ? 'text-black'
//                 : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               onClick={() => {
//                 setActiveTab('outreach');
//               }}
//             >
//               Outreach Programs
//             </button>
//           </div>
//         </div>
//         <div className='lg:flex hidden mb-5 relative mx-auto w-full md:w-[32rem] h-[0.1rem] overflow-hidden -mt-7 bg-gray-300'>
//           <div className={`w-[50%] md:w-[15.5rem] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach' ? 'translate-x-[100%] md:translate-x-[15rem] w-[50%] md:w-[21rem]' : 'translate-x-0'}`}>
//           </div>
//         </div>
//         <div className='lg:hidden flex mb-5 relative mx-auto w-12/12 h-[0.1rem] overflow-hidden -mt-5 bg-gray-300'>
//           <div className={`w-[40%] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach' ? 'translate-x-[100%] md:translate-x-[15rem] w-[50%] md:w-[21rem]' : 'translate-x-0'}`}>
//           </div>
//         </div>

//         {/* Heading and Description */}
//         <div className="text-center min-h-32 mt-10">
//           <h2 className="lg:text-xl text-xl font-normal text-gray-600">
//             {activeTab === 'gallery' ? <span className="font-bold">Their Vision, Our Success!</span> : <span className="font-bold">Action Over Theory – Cybernaut Makes It Happen!</span>}
//           </h2>
//           <p className="text-gray-600 lg:text-lg min-h-10 text-sm max-w-6xl mx-auto">
//             {activeTab === 'gallery'
//               ? <>At Cybernaut Edu-Tech, we&apos;re shaping futures with long-term programs in top institutions. <br /><span className="font-bold ">It&apos;s not a moment, it&apos;s a movement!</span></>
//               : <>Cybernaut Edu-Tech brings the power of hands-on learning and outreach events <br /> <span className="font-bold "> Real skills, real impact, real change! </span></>}
//           </p>
//         </div>

//         {/* Three Image Layout */}
//         <div className="relative flex justify-center items-center gap-4">
//           {/* Left Image */}
//           <div className="w-1/4 lg:block hidden left-3 aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative">
//             <Image
//               width={300}
//               height={400}
//               src={images[(currentImage - 1 + images.length) % images.length]}
//               alt="Previous"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full p-2">
//               <h3 className="text-sm font-semibold">{activeTab === 'outreach' ? OutreachimageNames[(currentImage - 1 + images.length) % images.length] : imageNames[(currentImage - 1 + images.length) % images.length]}</h3>
//               <p className="text-[0.7rem]">{activeTab === 'outreach' ? OutreachimageDescriptions[(currentImage - 1 + images.length) % images.length] : imageDescriptions[(currentImage - 1 + images.length) % images.length]}</p>
//             </div>
//           </div>

//           {/* Center Image (Larger) */}
//           <div className="lg:w-1/2 w-10/12 aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative">
//             <Image
//               width={300}
//               height={400}
//               src={images[currentImage]}
//               alt="Current"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full lg:h-auto  p-2">
//               <h3 className="lg:text-lg text-sm font-semibold">{activeTab === 'outreach' ? OutreachimageNames[currentImage] : imageNames[currentImage]}</h3>
//               <p className="lg:text-sm text-[0.7rem]">{activeTab === 'outreach' ? OutreachimageDescriptions[currentImage] : imageDescriptions[currentImage]}</p>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="w-1/4 lg:block right-3 hidden aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative">
//             <Image
//               width={300}
//               height={400}
//               src={images[(currentImage + 1) % images.length]}
//               alt="Next"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full p-2">
//               <h3 className="text-sm font-semibold">{activeTab === 'outreach' ? OutreachimageNames[(currentImage + 1) % images.length] : imageNames[(currentImage + 1) % images.length]}</h3>
//               <p className="text-[0.7rem]">{activeTab === 'outreach' ? OutreachimageDescriptions[(currentImage + 1) % images.length] : imageDescriptions[(currentImage + 1) % images.length]}</p>
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevImage}
//             className="absolute lg:-left-6 -left-3 top-1/2 -translate-y-1/2 lg:bg-blue-300/80 rounded-full p-2 lg:shadow-lg lg:hover:bg-white transition-colors"
//           >
//             <ChevronLeft className="lg:w-6 lg:h-6 w-4 h-4   text-blue-500" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="absolute lg:-right-6 -right-3 top-1/2 -translate-y-1/2 lg:bg-blue-300/80 rounded-full p-2 lg:shadow-lg lg:hover:bg-white transition-colors"
//           >
//             <ChevronRight className="lg:w-6 lg:h-6 w-4 h-4   text-blue-500" />
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center gap-2 mt-12">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImage(index)}
//               className={`w-2 h-2 rounded-full transition-all ${currentImage === index
//                 ? 'bg-blue-600 w-4'
//                 : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;




import React from 'react';
import ImageSlider from '@/app/Home/ImageSlider';

//https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758994/IMG_7885_idhzrk.heic

const outreachImages  = [
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758991/IMG_6403_1_y1zcuu.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758988/IMG_5297_z5iucs.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_2583_ypbta9.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_5656_azq1f2.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1754658962/02_-_SSN_xmtxza.png',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758990/IMG_5942_mylzyn.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_2387_mhlm3g.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_7885_idhzrk.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758992/WhatsApp_Image_2025-07-26_at_12.30.12_AM_fgix6u.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_2149_wybozu.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_2796_ii0d9i.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758993/IMG_3493_r3a8be.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_3367_nkatlv.jpg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758985/7af0a4e9-a534-4940-8ba0-2862c6c891c7_l2wpqv.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758984/0802cb8b-0187-44d9-93fb-3459d6b987b8_iqcgla.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753758987/DSC05921_etypcu.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_1044_plwnor.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_4455_jqmdvm.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758991/IMG_6854_o0rkis.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758993/IMG_2056_xawfmd.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758994/IMG_4567_s6i16y.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754660280/22_-_VCEW_d0mbvk.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758987/IMG_4170_o7s478.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753758989/IMG_2316_scdei7.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753759037/IMG_8394_kkpoki.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1754660476/26_-_VEL_University_ejar8v.jpg',








];
  const galleryImages = [ // MOU signing images
  'https://res.cloudinary.com/ddpbtvesl/image/upload/IMG_6137_vrppyd.jpg', // srm ist
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504296/IMG_0279_hkuqgw.jpg',// ssn
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504297/IMG_1701_qe20ur.jpg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504302/IMG_0452_houk0x.jpg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504298/IMG_5014_w9btdk.jpg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504299/IMG_8981_ioagir.jpg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504296/IMG_6147_jgwbgj.jpg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504298/IMG_7118_c5cdga.jpeg',//
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/v1753504295/IMG_0181_ep1uck.jpeg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504299/IMG_9998_zf9szz.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504298/IMG_8203_zt5ocg.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504298/WhatsApp_Image_2025-07-26_at_12.18.24_AM_2_pvc5vs.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/f_auto/IMG_6635_csgkur.jpg',
  'https://res.cloudinary.com/ddpbtvesl/image/upload/1d721912-70fb-42b5-b1b8-e27e9b134c5e_xsceam.jpg'
];  
// const imageNames = [
//   "SRM Institute Of Science And Technology",
//   "Sri Sivasubramaniya Nadar College of Engineering",
//   "Vivekanandha College of Engineering for Women ",
//   "VLB Janakiammal College Of Arts & Science ",
//   "Gnanamani College of Technology",
//   "PGP College Of Arts & Science",
//   "SRM Institute Of Science And Technology ",
//   "Meenakshi College Of Engineering",
//   "Sri Muthukumaran Institute of Technology (SMIT) ",
//   "Kings Engineering College ",
// ];

// const imageDescriptions = [
//   " Ramapuram, Chennai",
//   " Kalavakkam, Chennai",
//   " Tiruchengode",
//   "Kovaipudur",
//   "Namakkal",
//   " Namakkal",
//   " Chennai",
//   "Ramapuram, Chennai",
//   " Chennai",
//   "Chennai",
//   "Chennai",
// ];

const imageNames = [
  "SRM University",
  "Sri Sivasubramaniya Nadar College of Engineering",
  "Vivekanandha College of Engineering for Women ",
  "VLB Janakiammal College Of Arts & Science ",
  "Gnanamani College of Technology",
  "PGP College Of Arts & Science",
  "SRM Institute Of Science And Technology ",
  "Meenakshi College Of Engineering",
  "Sri Muthukumaran Institute of Technology (SMIT) ",
  "Kings Engineering College ",
  "Indra Ganesan College of Engineering", // from here
  "SKP Engineering College",
  "JKKN College of Engineering and Technology",
  "Mahendra College of Engineering"

];

const imageDescriptions = [
  "Ramapuram, Chennai",
  "Kalavakkam, Chennai",
  "Elaiyampalayam, Tamil Nadu",
  "Kovaipudur, Tamil Nadu",
  "Namakkal, Tamil Nadu",
  "Paramathi, Tamil Nadu",
  "Ramapuram, Chennai",
  "Chennai, Tamil Nadu",
  "Chennai, Tamil Nadu",
  "Sriperumbudur, Irungattukottai, Tamil Nadu",
  "Tiruchirappalli, Tamil Nadu", // from here
  "Tiruvannamalai, Tamil Nadu",
  "Komarapalayam, Tamil Nadu",
  "Minnampalli, Post, Salem, Tamil Nadu"

];

const outreachImageNames = [
  `Mastering Full Stack Development: Zero to Hero `,
  `Crack MAANG Interviews: DSA & System Design Secrets `,
  `Build a MAANG-Worthy Resume in 60 Minutes`,
  `FAANG Behavioral Interview: Talk Like a Pro `,
  `Web Dev Masterclass: React, Next.js & Beyond  `,
  `Ace Coding Rounds: DSA Patterns You Must Know `,
  `Landing Your Dream Job: Placement Hacks & Strategies`,
  `Power Up with Data Analytics: Insights That Matter `,
  `The Future of AI: How Gen AI is Changing the Game`,
  `AI & Gen AI: Your Shortcut to a High-Paying Career `,
  `From College to Corporate: Tech Career Roadmap`,
  `Gen AI in Action: Automate & Innovate with AI `,
  `Hack Your Way into MAANG: Resume & Interview Secrets`,//
  'From Idea to Deployment: Industrial Web Development Using the MERN Stack',
  'Engineering for the Future: Integrating Full Stack, Cloud, AI & Security into Modern Tech Careers',
  'End-to-End Web Engineering with Python: Architecting Full Stack Solutions for Scalable Systems',
  'Enterprise Web Development with MERN Stack: Modern Architectures & Deployment Workflows',
  'Human-Centered Product Design: UI/UX Strategies & Rapid Prototyping with Industry Frameworks',
  'AI-Driven Systems: Engineering Scalable Machine Learning Models for Real-World Applications',
  'Generative AI in Production: Mastering Prompt Engineering & Foundation Model Integration',
  'Data-Driven Decision Making: Leveraging Business Intelligence & Advanced Analytics at Scale',
  'Driving Digital Innovation: The Convergence of Design, Development, and Artificial Intelligence',
  'From Idea to Impact: Product Strategy, Validation & Scaling in the Tech Startup Ecosystem',
  'Big Data at Scale: Building Distributed Pipelines & Cloud-Native Data Warehouses',
  'Building Cross-Platform Mobile Applications: Scalable Architecture with Flutter & Firebase',
  'Tech Career 360°: A Guided Path through Full Stack, Cloud, AI & Security',


];

const outreachImageDescriptions = [
  "SRM Institute Of Science And Technology(Ramapuram, Chennai)",
  `Vivekanandha College of Arts and Science for Women ( Tiruchengode )`,
  `Sacred Heart College ( Tiruppattur )`,
  `Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College ( Avadi )`,
  `Sri Sivasubramaniya Nadar College of Engineering ( Kalavakkam, Chennai )`,
  `Guru Nanak College ( Chennai )`,
  `Vivekanandha College of Engineering for Women ( Tiruchengode )`,
  `KPR College of Arts Science and Research ( Uthupalayam )`,
  `SIMATS ENGINEERING ( Chennai )`,
  `Rajalakshmi Engineering College ( Thandalam, Chennai )`,
  `Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College ( Avadi )`,
  `Erode Sengunthar Engineering College ( Erode )`,
  `Knowledge Institute of Technology ( Kakapalayam, Salem )`,
  'Guru Nanak College ( Chennai )',
  'Mahendra College of Engineering ( Minnampalli )',
  'SRM Institute Of Science And Technology(Ramapuram, Chennai)',
  'Vivekanandha Arts & Science College for Women (Salem )',
  'Vivekanandha College of Engineering for Women ( Tiruchengode )',
  'Gnyanamani Educational Institutions ( Namakkal )',
  'AVS College of Technology ( Salem ) ',
  'Paavai Engineering College ( Namakkal )',
  'Vivekanandha College of Engineering for Women ( Tiruchengode )',
  'DG Vaishnav College ( Chennai )',
  'Rajalakshmi Engineering College ( Thandalam, Chennai )',
  'ARASU COLLEGE OF ARTS & SCIENCE FOR WOMEN ( Karur ) ',
  'Vels Institute of Science, Technology & Advanced Studies (VISTAS)'

];

const Gallery = () => {
  return (
    <ImageSlider
      galleryImages={galleryImages}
      outreachImages={outreachImages}
      imageNames={imageNames}
      imageDescriptions={imageDescriptions}
      outreachImageNames={outreachImageNames}
      outreachImageDescriptions={outreachImageDescriptions}
    />
  );
};

export default Gallery;