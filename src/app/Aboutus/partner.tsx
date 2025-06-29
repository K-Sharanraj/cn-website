import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Users, LayoutGrid, Settings, Shield, Briefcase } from 'lucide-react'

export default function Partner() {
  const features = [
    {
      icon: Wifi,
      title: "Outreach Events and Hands-On Workshops",
      description: "Engage and inspire with practical workshops and outreach events."
    },
    {
      icon: Users,
      title: `Internships & Community Support`,
      description: "Gain experience with internships and benefit from community support."
    },
    {
      icon: LayoutGrid,
      title: "Product & Team Support",
      description: "Optimize with our product solutions and expert team support."
    },
    {
      icon: Settings,
      title: "VAC Courses & FDP",
      description: "Enhance skills with VAC courses and faculty development programs."
    },
    {
      icon: Shield,
      title: "Hackathon Assistance",
      description: "Elevate innovation with our comprehensive hackathon support."
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship and Patent Support",
      description: "Foster innovation with entrepreneurship guidance and patent help."
    }
  ]

  return (
    <section className="py-20 lg:px-4 md:px-6 bg-gradient-to-b from-blue-50/50 to-white mx-auto xl:container">
      <div className="max-w-7xl hidden lg:block mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Partner With us?
          </h2>
          <p className="text-lg py-4 max-w-4xl mx-auto">
            At Cybernaut Edu-Tech, we offer premier educational solutions, including products, services,
            and training programs. Partner with us to enhance your institution&apos;s learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-5 border border-blue-400 hover:bg-gradient-to-br from-[#13a8ff] via-[#55c1ff] to-[#55c1ff] group">
              <CardContent className="p-6 text-center space-y-4 ">
                <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className=" w-9/12 mx-auto font-semibold text-lg group-hover:text-white">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-white">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="w-full  min-h-96 py-5 items-center place-content-center mx-auto lg:hidden">
        <div className="w-11/12 bg-blue-200 rounded-lg lg:h-[30rem]  mx-auto p-5">
          <h1 className="text-xl  font-bold ">Why <span className="text-blue-500">Partner With us?</span> </h1>
          <p className="text-md py-5">At Cybernaut Edu-Tech, we offer premier educational solutions, including products, services, and training programs. Partner with us to enhance your institution&apos;s learning experience.</p>


          <ul className='w-full'>
            <div className='flex gap-2  justify-start '>
              <div className='w-2 h-2 bg-blue-500 relative top-1.5 rounded-full'>
              </div>
              <li className='text-start text-sm'>Outreach Events and Hands-On Workshops</li>
            </div>
            <div className='flex gap-2 py-1 justify-start '>
              <div className='w-2 h-2 bg-blue-500 relative top-1.5 rounded-full'>
              </div>
              <li className='text-start text-sm'>Internships & Community Support</li>
            </div>
            <div className='flex gap-2 py-1 justify-start '>
              <div className='w-2 h-2 bg-blue-500 relative top-1.5 rounded-full'>
              </div>
              <li className='text-start text-sm'>Product & Team Support</li>
            </div>
            <div className='flex gap-2 py-1 justify-start '>
              <div className='w-2 h-2 bg-blue-500 relative top-1.5 rounded-full'>
              </div>
              <li className='text-start text-sm'>VAC Courses & FDP</li>
            </div>
            <div className='flex gap-2 py-1 justify-start '>
              <div className='w-2 h-2 bg-blue-500 relative top-1.5 rounded-full'>
              </div>
              <li className='text-start text-sm'>Hackathon Assistance</li>
            </div>
            <div className='flex gap-2 py-1 justify-start '>
              <div className='w-2 h-2 bg-blue-500 relative top-1.5 rounded-full'>
              </div>
              <li className='text-start text-sm'>Entrepreneurship and Patent Support</li>
            </div>
          </ul>
          <div className="flex  lg:hidden justify-around gap-6  pt-8">
            <button className='w-1/2 h-10 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
              get started
            </button>

            <div className='w-1/2 flex items-center h-10 text-sm  text-sky-500 rounded-sm py-2'>
              learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
