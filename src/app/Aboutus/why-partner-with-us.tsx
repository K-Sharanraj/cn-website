'use client';

import React from 'react';
import { 
  Users, 
  Lightbulb, 
  Target, 
  Rocket, 
  Heart, 
  Globe 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border border-blue-100 bg-white p-6 rounded-2xl shadow-sm transition-all duration-75 ease-linear hover:bg-gradient-to-r hover:from-[#2E77EF] hover:to-[#55B4FF] hover:text-white focus-visible:bg-gradient-to-r focus-visible:from-[#2E77EF] focus-visible:to-[#55B4FF] focus-visible:text-white group">
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-500 group-hover:text-white group-focus-visible:text-white transition-colors duration-75 ease-linear">
        {icon}
      </div>
      <h3 className="text-xl font-professional font-bold mb-3 text-gray-800 group-hover:text-white group-focus-visible:text-white transition-colors duration-75 ease-linear">{title}</h3>
      <p className="text-gray-700 leading-relaxed group-hover:text-white group-focus-visible:text-white transition-colors duration-75 ease-linear">{description}</p>
    </div>
  );
}

export default function WhyPartnerWithUs() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Outreach Events and Hands-On Workshops",
      description: "Organize engaging events, including talks and hackathons, designed to inspire developers and foster growth."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation-Driven Learning",
      description: "Access cutting-edge curriculum and resources that keep pace with industry trends and emerging technologies."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Skill Development",
      description: "Focused training programs designed to bridge the gap between academic learning and industry requirements."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Career Acceleration",
      description: "Fast-track your career with mentorship, networking opportunities, and direct connections to top tech companies."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Support",
      description: "Join a vibrant community of learners, mentors, and industry professionals committed to mutual growth."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network Access",
      description: "Connect with a worldwide network of developers, entrepreneurs, and tech leaders across various industries."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-professional font-bold text-gray-900 mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're looking to partner with communities, student groups, and developer circles to organize events and amplify the impact of Fins.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}