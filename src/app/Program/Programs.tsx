'use client';
import { useState} from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCards from './Components/Coursecards';


const sliderImages = [
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742456520/Tech_Trio_pyxdnh.png",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742456521/ux_Program_wjhkki.png",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1742456520/Beyond_Program_nc5pcb.png",
]
const mobileSliderImages = [
    "https://res.cloudinary.com/dn60aovto/image/upload/v1743159267/Ad_Banner1_vkobud.png",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1743159267/Ad_Banner3_ulu36c.png",
    "https://res.cloudinary.com/dn60aovto/image/upload/v1743159267/Ad_Banner2_mionuo.png",
]

const Programs = () => {
    const [, setCurrentSlide] = useState(0);
    return (
        <div className=''>
            {/* IMage Slider */}
            <div className='min-h-80 flex items-center justify-center mt-24 rounded-xl my-10 w-full'>
                <div className='container lg:block hidden relative mx-auto  mt-24'>
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                        arrows={false}
                        className='flex items-center justify-center'
                        afterChange={(index: number) => setCurrentSlide(index)}
                    >
                        {sliderImages.map((image, index) => (
                            <div key={index} className="relative flex items-center justify-center rounded-2xl w-full h-80 overflow-hidden">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={image}
                                    alt={`Event Image ${index + 1}`}
                                    className="object-cover w-full h-full "
                                    
                                />
                            </div>
                        ))}
                    </Slider>                    
                </div>
                <div className='container block lg:hidden  relative mx-auto mt-10'>
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                        arrows={false}
                        className='flex items-center justify-center'
                        afterChange={(index: number) => setCurrentSlide(index)}
                    >
                        {mobileSliderImages.map((image, index) => (
                            <div key={index} className="relative flex items-center justify-center rounded-2xl w-full h-80 overflow-hidden">
                                <Image
                                    width={600}
                                    height={500}
                                    src={image}
                                    alt={`Event Image ${index + 1}`}
                                    className="object-cover w-full h-full "
                                    
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            
            <CourseCards />

        </div>
    );
};

export default Programs;