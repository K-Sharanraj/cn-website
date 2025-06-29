import React, { useState } from 'react';
import { User, Code2, Network } from 'lucide-react';


function StartCourse() {

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

  return (
    <div className=" bg-white px-4 my-10 sm:p-6 md:p-8 lg:p-16">
      <section className="w-11/12 mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
          All You Need to Start this Course
        </h1>

        <div className="space-y-3 sm:space-y-4 mb-12 md:mb-16">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="text-blue-500">▶</div>
            <p className="text-base sm:text-lg text-gray-700">
              Certificates are globally recognized & they upgrade your programming profile.            </p>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="text-blue-500">▶</div>
            <p className="text-base sm:text-lg text-gray-700">
              Certificates are generated after the completion of course.            </p>
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
              Professionals looking to upskill or advance their careers by gaining UI/UX design skills.
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
              Any individuals wanting to learn and build their own application using Figma and Adobe Illustrator.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartCourse;