import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Who is this program for?",
    answer: "This program is for students, fresh graduates, and professionals looking to master coding and gain real-world experience."
  },
  {
    id: 2,
    question: "Do I need prior coding knowledge?",
    answer: "No, the program starts from the basics and progresses to advanced topics, making it suitable for beginners and experienced learners."
  },
  {
    id: 3,
    question: "What certifications will I receive?",
    answer: "You will earn 3 course completion certificates and 1 internship certificate to enhance your career prospects."
  },
  {
    id: 4,
    question: "Will I work on real-world projects?",
    answer: "It prepares you for HackerRank, LeetCode, and coding challenges, while also providing resume building, LinkedIn optimization, and career mentorship."
  },
  {
    id: 5,
    question: "How will this program help with job placements?",
    answer: "It prepares you for HackerRank, LeetCode, and coding challenges, while also providing resume building, LinkedIn optimization, and career mentorship."
  }
];

function App() {
  const [openId, setOpenId] = useState<number>(1); // First question open by default

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? -1 : id);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg  overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openId === faq.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;