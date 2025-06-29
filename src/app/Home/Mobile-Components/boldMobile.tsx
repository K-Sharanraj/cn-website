'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
}

const cardData = [
    {
        title: "Beginning as a club",
        description: "Starting and Growing a Career in Web Design",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BZjyIWjsjxtIqIhJt6nwQFb02opDiB.png"
    },
    {
        title: "Beginning as a club",
        description: "Create a Landing Page That Performs Great",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BZjyIWjsjxtIqIhJt6nwQFb02opDiB.png"
    },
    {
        title: "Beginning as a club",
        description: "Starting and Growing a Career in Web Design",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BZjyIWjsjxtIqIhJt6nwQFb02opDiB.png"
    },
    {
        title: "Beginning as a club",
        description: "Create a Landing Page That Performs Great",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BZjyIWjsjxtIqIhJt6nwQFb02opDiB.png"
    }
];

export default function ImageSlider({ images }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragX, setDragX] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length, goToNext]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX - dragX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const currentX = e.clientX - startX;
        setDragX(currentX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 50;
        if (Math.abs(dragX) > threshold) {
            if (dragX > 0) {
                setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
            } else {
                setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
            }
        }
        setDragX(0);
    };

  
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-[0px_26px_40px_rgba(43,_45,_54,_0.05)] overflow-hidden">
                {/* Main Image Container */}
                <div
                    ref={sliderRef}
                    className="relative h-60 cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {cardData.map((item, index) => (
                        <div
                            key={item.image}
                            className={`absolute w-full h-full transition-transform duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                transform: index === currentIndex ? `translateX(${dragX}px)` : 'none'
                            }}
                        >
                            <Image
                                width={300}
                                height={300}
                                src={item.image}
                                alt={item.description}
                                className="w-full h-full object-cover"
                                draggable="false"
                            />
                        </div>
                    ))}

                </div>

                {/* Content Section */}
                <div className="p-4">
                    <h1 className='text-xl font-bold text-blue-500 mb-2'>{cardData[currentIndex].title}</h1>
                    <h2 className="text-lg pb-2  text-gray-800 mb-2">
                        {cardData[currentIndex].description}
                    </h2>

                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <div className='flex items-center'>
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{new Date().toLocaleDateString()}</span>

                        </div>
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                            Read more
                            <ArrowRight className="w-4 h-4 ml-2 mt-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>


            </div>

            {/* Dot Navigation */}
            <div className="px-4 py-4">
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={goToPrevious}
                        className="text-gray-600 flex rotate-180 items-center justify-center w-7 h-7 rounded-full hover:text-gray-800"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="" height="" viewBox="-3 0 32 32" version="1.1">
                            <g id="icomoon-ignore">
                            </g>
                            <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#000000">

                            </path>
                            <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#000000">

                            </path>
                        </svg>
                    </button>

                    <div className="flex gap-3 bg-blue-50 p-1 border-[0.1rem] border-blue-300 px-4 rounded-full">
                        {cardData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-blue-500'
                                    : 'bg-gray-300 hover:bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        className="text-gray-600 flex items-center justify-center w-7 h-7 rounded-full hover:text-gray-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="" height="" viewBox="-3 0 32 32" version="1.1">
                            <g id="icomoon-ignore">
                            </g>
                            <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#000000">

                            </path>
                            <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#000000">

                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
