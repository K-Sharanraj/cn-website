import React from 'react';
import { MonitorPlay, LineChart } from 'lucide-react';
import Image from 'next/image'

function App() {
  const projects = [
    {
      title: "Recreate Netflix Landing Page",
      type: "UI Project",
      image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754664663/R4C1T1Ep-netflix-project.webp_d3iddc.png",
      icon: <MonitorPlay className="w-5 h-5" />
    },
    {
      title: "Create your own Crypto Trading Dashboard",
      type: "UI Project",
      image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754664690/R4C1T1Ep-netflix-project.webp_n6mywy.png",
      icon: <MonitorPlay className="w-5 h-5" />
    },
    {
      title: "Heuristics Analysis report for a travel website",
      type: "UI Project",
      image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754664711/R4C1T1Ep-netflix-project.webp_zwqh2v.png",
      icon: <MonitorPlay className="w-5 h-5" />
    },
    {
      title: "Create an E-commerce Website",
      type: "UI Project",
      image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1754664730/R4C1T1Ep-netflix-project.webp_t1eg01.png",
      icon: <LineChart className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl tracking-wider font-bold text-center text-gray-900 mb-6">
        UI/UX You Will Do!
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
        Our Ui/Ux Course is a project-based course. Our syllabus is structured in such a way that in every module, you will be assigned a project.        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-[16/9] w-full">
                <Image 
                  width={1000}
                  height={500}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  {project.icon}
                  <span className="text-blue-400 font-medium">
                    {project.type}
                  </span>
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