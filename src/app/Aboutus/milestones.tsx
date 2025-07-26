'use client';
import { LightbulbIcon, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Marquee from 'react-fast-marquee'


interface MilestoneCardProps {
    type: "idea" | "check"
    number: string
    label: string
    className?: string
}

function MilestoneCard({ type, number, label, className }: MilestoneCardProps) {
    return (
        <Card className={`bg-white shadow-sm  hover:shadow-md transition-shadow ${className}`}>
            <CardContent className="p-6 flex flex-col  ">
                {type === "idea" ? (
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                        <LightbulbIcon className="w-6 h-6 text-sky-400" />
                    </div>
                ) : (
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-sky-400" />
                    </div>
                )}
                <h3 className="text-6xl font-bold text-gray-800 mt-10 mb-2">{number}</h3>
                <p className="text-gray-600 text-lg">{label}</p>
            </CardContent>
        </Card>
    )
}

export default function Page() {
    const milestones = [
        { type: "idea", number: "10+", label: "Colleges Supported" },
        { type: "idea", number: "20+", label: "MOUs Signed" },
        { type: "check", number: "5k+", label: "Students Trained" }
    ] as const
    const milestones1 = [
        { type: "idea", number: "10+", label: "Colleges Supported" },
        { type: "idea", number: "20+", label: "MOUs Signed" },
        { type: "check", number: "5k+", label: "Students Trained" }
    ] as const

    return (
        <section className="w-full pt-10  overflow-hidden md:px-6  bg-sky-50 mx-auto relative ">
            <div className="container mx-auto relative hidden lg:flex items-center justify-center h-[40rem] ">
                <div className='relative h-full w-full'>
                    <div className="relative left-0 z-20 w-96 bg-sky-50 p-5 h-80">
                        <h2 style={{ fontFamily: 'Loubag' }} className="text-5xl font-bold text-gray-900 tracking-wider">
                            OUR
                            <br />
                            MILESTONES
                        </h2>

                    </div>
                    <div className='w-full  h-[10rem] absolute  top-0'>
                        <div className="absolute top-0">
                            <Marquee
                                gradient={false}
                                pauseOnHover={true}
                                direction="right"
                                className="bg-gradient-to-l overflow-hidden   from-sky-50 via-transparent to-sky-50 min-h-[10rem] overflow-x-hidden"
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 py-4 mx-6 my-2">
                                        {milestones.map((milestone, index) => (
                                            <MilestoneCard
                                                key={index}
                                                type={milestone.type}
                                                number={milestone.number}
                                                label={milestone.label}
                                                className="w-[350px] h-[250px]"
                                            />
                                        ))}
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                        <div className="absolute  top-80">
                            <Marquee
                                gradient={false}
                                pauseOnHover={true}
                                direction="left"
                                className="bg-gradient-to-l overflow-hidden   from-sky-50 via-transparent to-sky-20 min-h-[10rem] overflow-x-hidden"
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 py-4 mx-6 my-2">
                                        {milestones1.map((milestone, index) => (
                                            <MilestoneCard
                                                key={index}
                                                type={milestone.type}
                                                number={milestone.number}
                                                label={milestone.label}
                                                className="w-[350px] h-[250px]"
                                            />
                                        ))}
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>

                <div className='w-full h-80  absolute left-96 top-0 flex gap-4 justify-center z-20 bg-gradient-to-r from-sky-50 via-transparent to-sky-50  overflow-x-hidden'>
                </div>
                <div className='w-full h-80  absolute left-0 right-0 top-80 flex gap-4 justify-center z-20 bg-gradient-to-r from-sky-50 via-transparent to-sky-50  overflow-x-hidden'>
                </div>

            </div>


            <div className='block lg:hidden w-full min-h-60'>
                <div
                    className="fitCard flex min-h-[24em] mx-auto w-80 flex-col items-center justify-center gap-[0.5rem] rounded-[1.5em] bg-[#2563EB]/20 p-[0.5rem] font-monts"
                >
                    <div
                        className="flex h-[4em] w-full items-center justify-center rounded-[1.5em] bg-[#FFF] p-[0.5rem]"
                    >
                        <p className="text-[1.25rem] text-center font-semibold">10+ Colleges Supported</p>
                    </div>
                    <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
                        <div
                            className="group relative flex h-[10em] w-[10em] items-center justify-center rounded-[1.5em] bg-[#FFF] px-[0.5rem] pt-[1rem]"
                        >
                            <svg
                                className="absolute left-1/2 top-[calc(50%+8px)] h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2"
                                viewBox="0 0 160 160"
                                fill="none"
                                height="160"
                                width="160"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M130.912 130.912a71.997 71.997 0 0 0-10.911-110.778A71.999 71.999 0 0 0 9.383 94.046a72.004 72.004 0 0 0 19.705 36.866"
                                    stroke-width="16"
                                    stroke-linecap="round"
                                    stroke="#abddff"
                                ></path>
                                <path
                                    d="M146.65 52.764A72.004 72.004 0 0 0 69.647 8.748a71.998 71.998 0 0 0-40.559 122.164"
                                    className="duration-[1s] [stroke-dasharray:100] [stroke-dashoffset:0]"
                                    pathLength="100"
                                    stroke-width="16"
                                    stroke-linecap="round"
                                    stroke="#09b9ff"
                                ></path>
                            </svg>
                            <p className="text-[0.75rem] text-center font-semibold">5K+ Students <br /> Trained</p>
                        </div>
                        <div
                            className="flex h-[10em] flex-1 flex-col items-center justify-center gap-[0.5rem]"
                        >
                            <div
                                className="flex w-full flex-1 items-center justify-center rounded-[1.5rem] bg-[#FFF] group relative overflow-hidden"
                            >
                                <p
                                    className="h-fit w-full text-center text-[1rem] font-bold duration-300 "
                                >
                                    5 Years of Impact
                                </p>
                            </div>
                            <div
                                className="flex w-full flex-1 items-center justify-center rounded-[1.5rem] bg-[#FFF] group relative overflow-hidden"
                            >
                                <p
                                    className="text-center text-[1rem] font-bold"
                                >
                                    20+ MOUs Signed
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex h-[4.5rem] w-full flex-row items-center justify-center gap-[0.5rem]"
                    >
                        <div
                            className="flex h-full w-[10rem] items-center justify-center rounded-[1.5rem] bg-[#FFF] group relative overflow-hidden"
                        >
                            <p
                                className="text-[1rem] text-center font-bold"
                            >
                                1,000+ MAANG Alumni
                            </p>
                        </div>
                        <div
                            className="flex h-full w-[6.5rem] items-center justify-center rounded-[1.5rem] bg-[#FFF] relative group overflow-hidden"
                        >
                            <p
                                className="text-[0.8rem] text-center font-bold"
                            >
                                1500+ Project Intern
                            </p>
                        </div>
                    </div>
                    <div
                        className="group relative flex h-[5em] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#FFF]"
                    >
                        <p
                            className="text-center text-[1rem] font-bold"
                        >
                            150+ Outreach Programs
                        </p>    
                    </div>
                </div>

            </div>


        </section>
    )
}
