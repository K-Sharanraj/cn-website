import React, { useState, useEffect } from 'react';
import { Rocket, ArrowRight, Play, Sparkles, Brain } from 'lucide-react';

const features = [
  { 
    title: 'Master',
    subtitle: 'Expert-Led Learning',
    color: 'text-indigo-500',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    borderGlow: 'group-hover:shadow-indigo-500/50',
    icon: Brain,
    stats: '50+ Courses'
  },
  { 
    title: 'Create',
    subtitle: 'Build Real Projects',
    color: 'text-fuchsia-500',
    gradient: 'from-fuchsia-500/20 to-pink-500/20',
    borderGlow: 'group-hover:shadow-fuchsia-500/50',
    icon: Sparkles,
    stats: '100+ Projects'
  },
  { 
    title: 'Achieve',
    subtitle: 'Career Success',
    color: 'text-violet-500',
    gradient: 'from-violet-500/20 to-purple-500/20',
    borderGlow: 'group-hover:shadow-violet-500/50',
    icon: Rocket,
    stats: '90% Success Rate'
  }
];

function Homedesgin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      
      setScrollProgress(Math.min(progress, 100));

      if (scrollPosition < 300) {
        setActiveIndex(0);
      } else if (scrollPosition < 600) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentFeature = features[activeIndex];

  return (
    <div className="min-h-[200vh] bg-gray-950">
      {/* Mobile Menu */}
      <div className={`
        lg:hidden fixed top-0 left-0 right-0 z-50
        transform transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="bg-gray-900/95 backdrop-blur-xl p-6 space-y-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full text-left p-4 rounded-xl
                ${index === activeIndex ? feature.color : 'text-gray-400'}
                hover:bg-gray-800/50 transition-colors
              `}
            >
              <div className="flex items-center gap-3">
                <feature.icon size={20} />
                <span className="font-medium">{feature.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="fixed top-0 left-0 right-0 p-4 md:p-6 lg:p-8">
        <div className={`
          max-w-7xl mx-auto 
          bg-gray-900/50
          backdrop-blur-xl
          rounded-3xl 
          p-6 sm:p-8 
          transition-all duration-500 ease-in-out
          border border-gray-800
          shadow-2xl
          relative
          overflow-hidden
        `}>
          {/* Animated Background */}
          <div className={`
            absolute inset-0 
            bg-gradient-to-br ${currentFeature.gradient}
            opacity-20 
            transition-all duration-700
          `} />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute top-6 right-6 z-20 text-white p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Logo Badge */}
              <div className={`
                group
                inline-block p-3 sm:p-4 rounded-2xl 
                bg-gray-900
                border border-gray-800
                hover:border-gray-700
                transition-all duration-300
                ${currentFeature.borderGlow}
                hover:shadow-lg
              `}>
                <div className="flex items-center gap-3">
                  <currentFeature.icon 
                    className={`${currentFeature.color}`} 
                    size={20} 
                  />
                  <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Cybernaut Academy
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Elevate Your Skills with{' '}
                  <span className={`
                    ${currentFeature.color} 
                    transition-colors duration-500
                  `}>
                    {currentFeature.title}
                  </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg">
                  {currentFeature.subtitle} - Join our elite community of learners 
                  and transform your career through immersive education and 
                  hands-on experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`
                    group
                    relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
                    overflow-hidden
                    transition-all duration-300
                    bg-gray-900
                    hover:shadow-lg
                    w-full sm:w-auto
                    ${currentFeature.borderGlow}
                  `}
                >
                  <div className={`
                    absolute inset-0 
                    bg-gradient-to-r ${currentFeature.gradient}
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `} />
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span className="text-white font-medium">Get Started</span>
                    <ArrowRight 
                      className={`
                        ${isHovered ? 'translate-x-1' : 'translate-x-0'}
                        transition-transform duration-300
                      `} 
                      size={18} 
                    />
                  </div>
                </button>

                <button className="
                  px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
                  bg-gray-900
                  text-gray-300
                  border border-gray-800
                  hover:border-gray-700
                  hover:text-white
                  transition-all duration-300
                  w-full sm:w-auto
                  text-center
                ">
                  View Courses
                </button>
              </div>

              {/* Stats */}
              <div className="pt-4">
                <div className={`
                  inline-flex items-center gap-2 
                  ${currentFeature.color}
                  font-medium
                `}>
                  <Play size={16} className="animate-pulse" />
                  {currentFeature.stats}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative aspect-square hidden lg:block">
              <div className={`
                absolute inset-0 
                rounded-3xl
                bg-gray-900
                border border-gray-800
                overflow-hidden
                transition-all duration-500
                group
                hover:border-gray-700
                ${currentFeature.borderGlow}
              `}>
                {/* Feature Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className={`
                      absolute inset-0 
                      blur-3xl opacity-20
                      bg-gradient-to-br ${currentFeature.gradient}
                      transition-all duration-500
                      animate-pulse
                    `} />
                    <currentFeature.icon 
                      className={`
                        ${currentFeature.color} 
                        transition-all duration-500
                        relative z-10
                        animate-float
                      `} 
                      size={160} 
                    />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`
                      font-medium ${currentFeature.color}
                      transition-colors duration-500
                    `}>
                      {currentFeature.title}
                    </span>
                    <span className="text-gray-400">
                      {Math.round(scrollProgress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`
                        h-full transition-all duration-300 
                        rounded-full
                        relative
                        overflow-hidden
                      `}
                      style={{ width: `${scrollProgress}%` }}
                    >
                      <div className={`
                        absolute inset-0
                        bg-gradient-to-r ${currentFeature.gradient}
                        animate-shimmer
                      `} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Feature Icon */}
            <div className="lg:hidden aspect-square max-w-[280px] mx-auto">
              <div className={`
                w-full h-full
                rounded-3xl
                bg-gray-900
                border border-gray-800
                overflow-hidden
                transition-all duration-500
                relative
                ${currentFeature.borderGlow}
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className={`
                      absolute inset-0 
                      blur-3xl opacity-20
                      bg-gradient-to-br ${currentFeature.gradient}
                      transition-all duration-500
                      animate-pulse
                    `} />
                    <currentFeature.icon 
                      className={`
                        ${currentFeature.color} 
                        transition-all duration-500
                        relative z-10
                        animate-float
                      `} 
                      size={100} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homedesgin;