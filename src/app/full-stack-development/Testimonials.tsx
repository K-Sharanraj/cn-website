import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';


function Testimonials() {
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="text-[#00A3FF]">
        {index < rating ? <Star className="w-5 h-5 fill-current" /> : <Star className="w-5 h-5" />}
      </span>
    ));
  };

  return (
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
                  width={100}
                  height={100}
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
  );
}

export default Testimonials;