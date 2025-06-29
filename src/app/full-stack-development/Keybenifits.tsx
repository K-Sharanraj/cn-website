import React from 'react';
import { Package } from 'lucide-react';

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="bg-[#00A3FF] p-3 rounded-lg">
        <Package className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Keybenifits() {
  const benefits = [
    {
      title: "Industry Experts as Mentors",
      description: " Learn from professionals with real-world experience."
    },
    {
      title: "Real Projects during Internship",
      description: "Build industry-level projects for your portfolio."
    },
    {
      title: "Hands-on Scripting ",
      description: "Practice coding through real-time execution."
    },
    {
      title: "Community Support",
      description: "Connect, collaborate, and get guidance from peers."
    },
    {
      title: "Interactive Live Classes",
      description: " Engage in Q&A and problem-solving sessions."
    },
    {
      title: "High-Value Materials",
      description: " Access top-quality study resources and challenges"
    },
    
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-x-5 gap-y-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Keybenifits;