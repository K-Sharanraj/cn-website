
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageSliderProps {
    galleryImages: string[];
    outreachImages: string[];
    imageNames: string[];
    imageDescriptions: string[];
    outreachImageNames: string[];
    outreachImageDescriptions: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    galleryImages,
    outreachImages,
    imageNames,
    imageDescriptions,
    outreachImageNames,
    outreachImageDescriptions
}) => {
    const [activeTab, setActiveTab] = useState('gallery');
    const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
    const [currentOutreachImage, setCurrentOutreachImage] = useState(0);
    const [autoplayPaused, setAutoplayPaused] = useState(false);
    const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);

    const images = activeTab === 'gallery' ? galleryImages : outreachImages;
    const currentImage = activeTab === 'gallery' ? currentGalleryImage : currentOutreachImage;
    const setCurrentImage = activeTab === 'gallery'
        ? setCurrentGalleryImage
        : setCurrentOutreachImage;

    const nextImage = useCallback(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, [images.length, setCurrentImage]);

    const prevImage = useCallback(() => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length, setCurrentImage]);

    // Setup autoplay
    // Add this useEffect in your ImageSlider component
    const handleArrowNavigation = useCallback((direction: 'prev' | 'next') => {
        // Pause autoplay temporarily when user manually navigates
        setAutoplayPaused(true);

        if (direction === 'prev') {
            prevImage();
        } else {
            nextImage();
        }

        // Resume autoplay after 5 seconds of inactivity
        setTimeout(() => {
            setAutoplayPaused(false);
        }, 5000);
    }, [prevImage, nextImage, setAutoplayPaused]);
    

    // Setup autoplay
    useEffect(() => {
        // Clear any existing interval
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }

        // Only start autoplay if not paused
        if (!autoplayPaused) {
            const interval = setInterval(() => {
                handleArrowNavigation('next');
            }, 3000);

            setAutoplayInterval(interval);
        }

        // Cleanup function
        return () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        };
    }, [autoplayPaused, handleArrowNavigation]);

    // Pause autoplay when tab changes
    useEffect(() => {
        if (autoplayInterval) clearInterval(autoplayInterval);
        setAutoplayPaused(false);
    }, [activeTab, autoplayInterval]);

    return (
        <div className="container mx-auto lg:py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-around my-6'>
                    <div className="flex items-center flex-row lg:justify-center justify-around gap-1 lg:gap-0 md:space-y-0 md:space-x-20 w-full">
                        <button
                            className={`lg:px-4 lg:py-2 flex gap-2 text-md md:text-xl font-medium ${activeTab === 'gallery'
                                ? 'text-black'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => {
                                setActiveTab('gallery');
                            }}
                        >
                            Mou Gallery
                        </button>
                        <button
                            className={`lg:px-4 lg:py-2 md:px-6 md:py-3 flex gap-2 relative left-2 text-md md:text-xl font-medium ${activeTab === 'outreach'
                                ? 'text-black'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => {
                                setActiveTab('outreach');
                            }}
                        >
                            Outreach Programs
                        </button>
                    </div>
                </div>
                <div className='lg:flex hidden mb-5 relative mx-auto w-full md:w-[32rem] h-[0.1rem] overflow-hidden -mt-7 bg-gray-300'>
                    <div className={`w-[50%] md:w-[15.5rem] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach'
                        ? 'translate-x-[100%] md:translate-x-[15rem] w-[50%] md:w-[21rem]'
                        : 'translate-x-0'
                        }`}>
                    </div>
                </div>
                <div className='lg:hidden flex mb-5 relative mx-auto w-12/12 h-[0.1rem] overflow-hidden -mt-5 bg-gray-300'>
                    <div className={`w-[40%] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach'
                        ? 'translate-x-[100%] md:translate-x-[15rem] w-[50%] md:w-[21rem]'
                        : 'translate-x-0'
                        }`}>
                    </div>
                </div>

                {/* Heading and Description */}
                <div className="text-center min-h-32 mt-10">
                    <h2 className="lg:text-xl text-xl font-normal text-gray-600">
                        {activeTab === 'gallery'
                            ? <span className="font-bold">Their Vision, Our Success!</span>
                            : <span className="font-bold">Action Over Theory – Cybernaut Makes It Happen!</span>}
                    </h2>
                    <p className="text-gray-600 lg:text-lg min-h-10 text-sm max-w-6xl mx-auto">
                        {activeTab === 'gallery'
                            ? <>At Cybernaut Edu-Tech, we&apos;re shaping futures with long-term programs in top institutions. <br /><span className="font-bold ">It&apos;s not a moment, it&apos;s a movement!</span></>
                            : <>Cybernaut Edu-Tech brings the power of hands-on learning and outreach events <br /> <span className="font-bold "> Real skills, real impact, real change! </span></>}
                    </p>
                </div>

                {/* Three Image Layout */}
                <div className="relative flex justify-center items-center gap-4">
                    {/* Left Image */}
                    <div className="w-1/4 lg:block hidden left-3 aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative">
                        <Image
							width={500}
							height={500}
                            src={images[(currentImage - 1 + images.length) % images.length]}
                            alt="Previous"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full p-2">
                            <h3 className="text-sm font-semibold">
                                {activeTab === 'outreach'
                                    ? outreachImageNames[(currentImage - 1 + images.length) % images.length]
                                    : imageNames[(currentImage - 1 + images.length) % images.length]}
                            </h3>
                            <p className="text-[0.7rem]">
                                {activeTab === 'outreach'
                                    ? outreachImageDescriptions[(currentImage - 1 + images.length) % images.length]
                                    : imageDescriptions[(currentImage - 1 + images.length) % images.length]}
                            </p>
                        </div>
                    </div>

                    {/* Center Image (Larger) */}
                    <div className="lg:w-1/2 w-10/12 aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative">
                        <Image
							width={500}
							height={500}
                            src={images[currentImage]}
                            alt="Current"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full lg:h-auto p-2">
                            <h3 className="lg:text-lg text-sm font-semibold">
                                {activeTab === 'outreach'
                                    ? outreachImageNames[currentImage]
                                    : imageNames[currentImage]}
                            </h3>
                            <p className="lg:text-sm text-[0.7rem]">
                                {activeTab === 'outreach'
                                    ? outreachImageDescriptions[currentImage]
                                    : imageDescriptions[currentImage]}
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-1/4 lg:block right-3 hidden aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative">
                        <Image
							width={500}
							height={500}
                            src={images[(currentImage + 1) % images.length]}
                            alt="Next"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full p-2">
                            <h3 className="text-sm font-semibold">
                                {activeTab === 'outreach'
                                    ? outreachImageNames[(currentImage + 1) % images.length]
                                    : imageNames[(currentImage + 1) % images.length]}
                            </h3>
                            <p className="text-[0.7rem]">
                                {activeTab === 'outreach'
                                    ? outreachImageDescriptions[(currentImage + 1) % images.length]
                                    : imageDescriptions[(currentImage + 1) % images.length]}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => handleArrowNavigation('prev')}
                        className="absolute lg:-left-6 -left-3 top-1/2 -translate-y-1/2 lg:bg-blue-300/80 rounded-full p-2 lg:shadow-lg lg:hover:bg-white transition-colors"
                    >
                        <ChevronLeft className="lg:w-6 lg:h-6 w-4 h-4 text-blue-500" />
                    </button>
                    <button
                        onClick={() => handleArrowNavigation('next')}
                        className="absolute lg:-right-6 -right-3 top-1/2 -translate-y-1/2 lg:bg-blue-300/80 rounded-full p-2 lg:shadow-lg lg:hover:bg-white transition-colors"
                    >
                        <ChevronRight className="lg:w-6 lg:h-6 w-4 h-4 text-blue-500" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-12">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleArrowNavigation('next')}
                            className={`w-2 h-2 rounded-full transition-all ${currentImage === index
                                ? 'bg-blue-600 w-4'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
