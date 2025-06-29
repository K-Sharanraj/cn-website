'use client';
import React, { useState } from 'react';

interface Language {
  name: string;
  subItems?: string[];
}

function AccordionItem({
  language,
  isOpen,
  onClick
}: {
  language: Language;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-lg my-2 lg:w-11/12 mx-auto rounded-b-none border-b-[0.2rem]  border-b-blue-600">
      <button
        className={`w-full px-6 py-4 rounded-lg flex items-center justify-between transition-colors duration-200 ${isOpen ? 'bg-white' : 'bg-white hover:bg-gray-50'
          }`}
        onClick={onClick}
      >
        <div className="flex justify-between w-full items-start gap-3">
          <span className="text-md font-medium  text-gray-900">{language.name}</span>
          <svg
            className={`w-5 h-5 rotate-90 text-blue-500 transform transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : ''
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
      <hr />
      <div
        className={`transition-all duration-200 ease-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white">
          {language.subItems?.map((item, index) => (
            <li
              key={index}
              className="lg:px-12 px-2 py-2 text-black lg:text-lg md:text-md text-[0.8rem] rounded-lg"
            >
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThreeCourses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const languages: Language[] = [
    {
      name: 'UI Design Fundamentals',
      subItems: [
        "Introduction to User Interface Design",
        "Visual Design Principles",
        "Color Theory & Typography",
        "Layout & Composition",
        "Responsive Design",
        "UI Component Design",
        "Design Systems & Style Guides"
      ],
    },
    {
      name: 'UX Design Principles',
      subItems: [
        "User Research Methods",
        "Information Architecture",
        "Wireframing & Prototyping",
        "User Testing & Feedback",
        "Accessibility Design",
        "Interaction Design",
        "User Flow & Navigation"
      ],
    },
    {
      name: 'Digital Design Tools',
      subItems: [
        "Introduction to Figma",
        "Adobe XD Basics",
        "Design Collaboration",
        "Interactive Prototyping",
        "Design Handoff",
        "Version Control",
        "Design System Implementation"
      ],
    }
  ];

  return (
    <div className="min-h-[30rem]  items-center justify-center p-8">
      <div className='py-4'>
        <h1 className="text-xl font-semibold">What you Learn</h1>
      </div>
      <div className="mx-auto rounded-xl overflow-hidden">
        {languages.map((language, index) => (
          <AccordionItem
            key={index}
            language={language}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreeCourses;