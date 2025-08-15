'use client';
import { LightbulbIcon, CheckCircle, Users, BookOpen, Award, Target, TrendingUp, Briefcase } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Marquee from 'react-fast-marquee'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'


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

// Modern Mobile Milestones Component
function MobileMilestonesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const milestoneData = [
        { 
            icon: BookOpen, 
            number: 10, 
            suffix: "+", 
            label: "Colleges Supported",
            color: "from-[#61bdfa] to-[#2563eb]",
            bgColor: "bg-sky-50",
            delay: 0
        },
        { 
            icon: Users, 
            number: 5000, 
            suffix: "+", 
            label: "Students Trained",
            color: "from-[#61bdfa] to-[#2563eb]",
            bgColor: "bg-blue-50",
            delay: 0.1
        },
        { 
            icon: Award, 
            number: 20, 
            suffix: "+", 
            label: "MOUs Signed",
            color: "from-[#61bdfa] to-[#2563eb]",
            bgColor: "bg-sky-50",
            delay: 0.2
        },
        { 
            icon: Target, 
            number: 1000, 
            suffix: "+", 
            label: "MAANG Alumni",
            color: "from-[#61bdfa] to-[#2563eb]",
            bgColor: "bg-blue-50",
            delay: 0.3
        },
        { 
            icon: Briefcase, 
            number: 1500, 
            suffix: "+", 
            label: "Project Interns",
            color: "from-[#61bdfa] to-[#2563eb]",
            bgColor: "bg-sky-50",
            delay: 0.4
        },
        { 
            icon: TrendingUp, 
            number: 150, 
            suffix: "+", 
            label: "Outreach Programs",
            color: "from-[#61bdfa] to-[#2563eb]",
            bgColor: "bg-blue-50",
            delay: 0.5
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    }

    return (
        <div className='block lg:hidden w-full px-4 py-8' ref={ref}>
            {/* Header */}
            <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <TextGenerateEffect 
                    words="OUR MILESTONES" 
                    className="text-3xl font-bold bg-gradient-to-r from-[#61bdfa] to-[#2563eb] bg-clip-text text-transparent mb-2"
                />
                <motion.p 
                    className="text-slate-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    Celebrating our journey of impact and growth
                </motion.p>
            </motion.div>

            {/* Milestone Cards Grid */}
            <motion.div 
                className="grid grid-cols-2 gap-4 max-w-sm mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {milestoneData.map((milestone, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="relative group"
                        whileHover={{ 
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className={`
                            relative overflow-hidden rounded-2xl p-4 h-32
                            bg-white shadow-lg border border-gray-100
                            group-hover:shadow-xl transition-all duration-300
                            ${milestone.bgColor}
                        `}>
                            {/* Background Gradient Overlay */}
                            <div className={`
                                absolute inset-0 bg-gradient-to-br ${milestone.color} 
                                opacity-0 group-hover:opacity-10 transition-opacity duration-300
                            `} />
                            
                            {/* Icon */}
                            <div className={`
                                w-8 h-8 rounded-lg bg-gradient-to-br ${milestone.color} 
                                flex items-center justify-center mb-2
                                group-hover:scale-110 transition-transform duration-300
                            `}>
                                <milestone.icon className="w-4 h-4 text-white" />
                            </div>

                            {/* Number with Animation */}
                            <div className="flex items-baseline mb-1">
                                <NumberTicker
                                    value={milestone.number}
                                    className={`
                                        text-2xl font-bold bg-gradient-to-r ${milestone.color} 
                                        bg-clip-text text-transparent
                                    `}
                                    delay={milestone.delay}
                                />
                                <span className={`
                                    text-xl font-bold bg-gradient-to-r ${milestone.color} 
                                    bg-clip-text text-transparent ml-0.5
                                `}>
                                    {milestone.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <p className="text-xs font-medium text-slate-600 leading-tight">
                                {milestone.label}
                            </p>

                            {/* Animated Border */}
                            <div className={`
                                absolute inset-0 rounded-2xl border-2 border-transparent
                                bg-gradient-to-br ${milestone.color} bg-clip-border
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]
                                [mask-composite:subtract]
                            `} />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Accent */}
            <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <div className="w-16 h-1 bg-gradient-to-r from-[#61bdfa] to-[#2563eb] rounded-full mx-auto" />
                <p className="text-xs text-slate-500 mt-2">
                    5 Years of Excellence
                </p>
            </motion.div>
        </div>
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


            <MobileMilestonesSection />


        </section>
    )
}