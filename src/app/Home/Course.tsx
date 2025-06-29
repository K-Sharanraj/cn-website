'use client'
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { color: 'bg-blue-500', content: 'Slide 1 Content' },
    { color: 'bg-red-500', content: 'Slide 2 Content' },
    { color: 'bg-violet-500', content: 'Slide 3 Content' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto xl:container lg:container ">
      <h1 className="text-4xl font-bold mb-8">Learn. Practice. Earn. Have Fun!</h1>
      <div className="flex mb-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Online</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Offline</button>
      </div>
      <div className='flex'>
      <div className="w-full max-w-4xl p-4">
        <h2 className="text-2xl font-semibold mb-4">Online Course</h2>
        <p className="mb-4">
          Unlock your potential with our advanced educational tools and top-tier training. Join 10,000+ successful learners and enhance your skills with Tech Trio, Full Stack, UI & UX, and more. Find the perfect program for your career goals today.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded">View More</button>
      </div>
      <div className="relative w-full h-64 mt-8">
        <div className={`w-full h-full ${slides[currentIndex].color} flex items-center justify-center transition-colors duration-500`}>
          {slides[currentIndex].content}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 px-4 py-2 rounded cursor-pointer">Previous</button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 px-4 py-2 rounded cursor-pointer">Next</button>
      </div>
      </div>
    </div>
  );
}
