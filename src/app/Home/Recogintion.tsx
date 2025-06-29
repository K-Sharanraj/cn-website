import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

interface Accreditation {
    logo: string;
    alt: string;
}

const Recognition: React.FC = () => {
    const accreditations: Accreditation[] = [
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447782/MCA_pcbwgr.svg',
            alt: 'Ministry of Corporate Affairs logo'
        },
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447819/DPIIT_tpe47d.png',
            alt: 'Department for Promotion of Industry and Internal Trade logo'
        },
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447840/stqrtupindia_hagbxo.png',
            alt: 'Startup India logo'
        },
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447858/ISO_p9sebu.png',
            alt: 'ISO 9001:2015 Certified logo'
        }
    ];

    return (
        <section className="lg:bg-blue-50 container px-4 mt-10 md:py-10 mx-auto">
            <div className="container mx-auto">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-3xl text-center text-[#141515] font-bold mb-4">We are accredited by</h1>
                        <div className="flex flex-wrap gap-5 justify-center lg:py-10">
                            {accreditations.map((accreditation, index) => (
                                <Card 
                                    key={index}
                                    className="bg-transparent border-none shadow-none"
                                >
                                    <CardContent className="p-0">
                                        <Image
                                            src={accreditation.logo}
                                            alt={accreditation.alt}
                                            className="h-auto w-60 hover:scale-110 transition-transform duration-500 object-contain"
                                            width={150}
                                            height={100}
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recognition;