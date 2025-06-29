import React from 'react'

const Proccess = () => {
    return (
        <>
            <section>
                <section className="pb-10 lg:py-32">
                    <div className="container mx-auto">
                        <div className="space-y-2">
                            <h1 className="text-center text-3xl font-bold">Process</h1>
                            <p className="mx-auto max-w-3xl text-center text-muted-foreground">
                                We research your audience, develop tailored strategies, and optimize every step for maximum impact.
                            </p>
                        </div>
                    </div>
                    <div className="container relative mx-auto mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 xl:gap-6">
                        <div className="space-y-4">
                            <div className="flex justify-center">
                                <div className="shadow-2xl w-14 h-14 border-2 border-blue-400 relative grid aspect-square size-12 place-items-center rounded-full  border-primary p-2 font-bold text-primary drop-shadow-xl before:absolute before:left-32 before:h-[2px] before:rounded-xl before:bg-primary lg:before:content-[''] xl:before:w-56">
                                    1
                                </div>
                            </div>
                            <div className="space-y-3 text-center">
                                <h4 className="text-xl font-semibold">Talent Pool Access</h4>
                                <p className="mx-auto max-w-xs text-sm text-muted-foreground">
                                    Companies can review and access our pool of skilled students, filtered by
                                    qualifications and project experience.
                                </p>
                            </div>
                        </div>
                        <div className='absolute hidden w-full h-10 top-2 md:flex items-center  justify-evenly'>
                            <div className="w-60 h-1 border-t-2 border-blue-400">

                            </div>
                            <div className="w-60 h-1 border-t-2 border-blue-400">

                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-center">
                                <div className="shadow-xl  w-14 h-14 border-2 border-blue-400 relative grid aspect-square size-12 place-items-center rounded-full  p-2 font-bold text-primary before:absolute before:left-32 before:h-[2px] before:rounded-xl before:bg-primary lg:before:content-[''] xl:before:w-56">
                                    2
                                </div>
                            </div>
                            <div className="space-y-3 text-center">
                                <h4 className="text-xl font-semibold">Student Evaluation</h4>
                                <p className="mx-auto max-w-xs text-sm text-muted-foreground">
                                    Conduct interviews, technical assessments, or live project evaluations to assess
                                    students&apos; readiness and fit for the role.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-center">
                                <div className="shadow-xl  w-14 h-14 border-2 border-blue-400 grid aspect-square size-12 place-items-center rounded-full  p-2 font-bold text-primary">
                                    3
                                </div>
                            </div>
                            <div className="space-y-3 text-center">
                                <h4 className="text-xl font-semibold">Selection & Onboarding</h4>
                                <p className="mx-auto max-w-xs text-sm text-muted-foreground">
                                    Once selected, companies can coordinate directly with Cybernaut for smooth onboarding
                                    and any required post-hiring support or internships.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            </>
    )
}

export default Proccess