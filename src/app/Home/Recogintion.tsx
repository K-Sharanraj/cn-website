import React from 'react';
import Image from 'next/image';

interface Accreditation {
    logo: string;
    alt: string;
}

const Recognition: React.FC = () => {
    const accreditations: Accreditation[] = [
        {
            logo: 'https://res.cloudinary.com/ddpbtvesl/image/upload/4ebe106e-22ca-45ca-b05a-09a4524b9889.jpg',
            alt: 'Ministry of Corporate Affairs logo'
        },
        {
            logo: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753715158/54a85f39-308d-4485-a9bc-18f0c8eb024a.png',
            alt: 'Department for Promotion of Industry and Internal Trade logo'
        },
        {
            logo: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753715305/9bcbb7d7-220e-482e-b568-cb6ad8f4255a.png',
            alt: 'Startup India logo'
        },
        {
            logo: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753715334/b14d6819-455e-4160-bdb4-8fa3d5e511e9.png',
            alt: 'ISO 9001:2015 Certified logo'
        }
    ];

    return (
        <section className="lg:bg-blue-50 container px-4 mt-10 md:py-10 mx-auto">
            <div className="space-y-12">
                <div className="space-y-6">
                    <h1 className="text-3xl text-center text-[#141515] font-bold mb-4 tracking-wider" style={{ fontFamily: 'Loubag' }}>
                        We are accredited by
                    </h1>
                    <div className="flex flex-wrap gap-8 justify-center lg:py-10">
                        {accreditations.map((accreditation, index) => (
                            <div 
                                key={index} 
                                className="w-60 flex items-center justify-center p-4 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-500"
                            >
                                <Image
                                    src={accreditation.logo}
                                    alt={accreditation.alt}
                                    width={150}
                                    height={100}
                                    className="h-auto w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recognition;
