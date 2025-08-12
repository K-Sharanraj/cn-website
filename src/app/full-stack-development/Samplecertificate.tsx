import React from 'react';
import Image from 'next/image';
function Samplecertificate() {
    return (
        <div className=" w-11/12 mx-auto p-8 py-10 ">
            <h1 className="text-3xl font-bold mb-8">Certificate on Completion</h1>

            <div className="lg:flex justify-between  gap-8 ">
                {/* Left side - Certificate */}
                <div className="w-auto h-full lg:h-[25rem] bg-white border object-contain overflow-hidden border-gray-200  rounded-lg shadow-sm">
                    <Image
                        width={500}
                        height={500}
                        src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1754970640/Web_Dev_ariqdi.png"
                        alt="Certificate"
                        className="object-contain w-full h-full"
                    />
                </div>

                {/* Right side - Benefits */}
                <div className="lg:w-1/2  flex flex-col   justify-center lg:py-0 py-10 space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="text-blue-500">▶</div>
                        <p className=" text-sm lg:text-md">Earn a course completion and internship certificate to validate your skills.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="text-blue-500">▶</div>
                        <p className=" text-sm lg:text-md">Build a strong portfolio with 25+ mini projects and 5 major projects.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="text-blue-500">▶</div>
                        <p className=" text-sm lg:text-md">Gain real-world experience through hands-on projects.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="text-blue-500">▶</div>
                        <p className=" text-sm lg:text-md">Develop practical full-stack skills for career success.</p>
                    </div>
                </div>
            </div>

            {/* Shareable section */}
            <div className="mt-8 flex items-center gap-2">
                <h1 className="text-gray-700">Shareable on <span className='text-blue-500 font-bold text-lg font-serif'>LinkedIn</span> </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>
            </div>
        </div>
    );
}

 export default Samplecertificate;;