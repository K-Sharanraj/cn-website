'use client';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Mobileoffers() {
  const [activeTab, setActiveTab] = useState('colleges');

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden">
        {/* Tabs */}

        <div className="flex border-b">
          <button
            className={`py-4 px-6 text-md font-medium flex-1 ${activeTab === 'colleges'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600'
              }`}
            onClick={() => setActiveTab('colleges')}
          >
            For Colleges
          </button>
          <button

            className={`py-4 px-6 text-md font-medium flex-1 ${activeTab === 'companies'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600'
              }`}

            onClick={() => setActiveTab('companies')}
          >
            For Companies
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-gray-50">
          {activeTab === 'colleges' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                What we offers for <span className="text-blue-500">colleges</span>
              </h2>
              <p className="mt-2 text-gray-700">
                Empowering institutions with innovative learning, industry connections, and success.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700 w-64">
                    Cybernaut Edu-Tech connects colleges with industry experts to foster innovation and career growth.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700 w-64">
                    We equip students with essential skills, certifications, and job readiness through VAC and placement training.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700 w-64">
                    Our expert team provides software solutions and tech support to enhance learning experiences.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Link href="/contact">
                  <button className="bg-blue-500 text-white px-2 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors">
                    Contact us
                  </button>
                </Link>

                <Link href="/Program">
                  <button className="text-blue-500 flex items-center gap-1 px-2 py-2 font-medium hover:text-blue-600 transition-colors">
                    Learn more <ChevronRight size={16} />
                  </button>
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Image
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/dn60aovto/image/upload/v1742448505/Outreach_1_lc97mp.jpg"
                  alt="Students in classroom"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <Image
                  width={500}
                  height={500}

                  src="https://res.cloudinary.com/dn60aovto/image/upload/v1742455415/15_ylloii.jpg"
                  alt="Students in auditorium"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === 'companies' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                What we offers for <span className="text-blue-500">companies</span>
              </h2>
              <p className="mt-2 text-gray-700">
                Connecting businesses with top talent and innovative solutions.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700 w-64">
                    Access to a pool of skilled graduates ready for industry challenges.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700 w-64">
                    Customized training programs to bridge skill gaps and enhance workforce capabilities.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700 w-64">
                    Collaborative research opportunities and innovation partnerships with academic institutions.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Link href="/contact">
                  <button className="bg-blue-500 text-white px-2 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors">
                    Partner with us
                  </button>
                </Link>
                <Link href="/Program">
                  <button className="text-blue-500 flex items-center gap-1 px-2 py-2 font-medium hover:text-blue-600 transition-colors">
                    Learn more <ChevronRight size={16} />
                  </button>
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Image
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/dn60aovto/image/upload/v1742450774/forCompanies_kgsikx.jpg"
                  alt="Corporate meeting"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <Image
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/dn60aovto/image/upload/v1742813815/163a62c7-5212-4d08-aa3f-0535b0562dda.png"
                  alt="Business team"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mobileoffers;