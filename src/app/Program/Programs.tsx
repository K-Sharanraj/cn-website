'use client';
import { useState} from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCards from './Components/Coursecards';


const sliderImages = [
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753971430/a730f563-a5c6-4b59-b849-d4bcc3211e09.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753971446/2052f652-9c7d-403a-9d45-22c48682e8f1.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753971466/c4b4818a-58fd-4448-9230-228b938b92e0.png",
]
const mobileSliderImages = [
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753972741/Ad_Banner_tsj1ry.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753972744/Ad_Banner2_iwueyg.png",
    "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760409/978dd857-95f0-4d01-bca2-0ace606959c0.png",
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