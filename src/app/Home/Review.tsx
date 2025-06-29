import React, { useEffect } from 'react'


const Review = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://featurable.com/assets/bundle.js";
        script.defer = true;
        script.setAttribute("charset", "UTF-8");
        document.body.appendChild(script);

        // Function to refresh the Featurable widget
        const refreshFeaturable = () => {
            const element = document.getElementById('featurable-b7323408-197d-4e2d-90e8-054cd79c232e');
            if (element) {
                element.innerHTML = '';
                const newScript = document.createElement("script");
                newScript.src = "https://featurable.com/assets/bundle.js";
                newScript.defer = true;
                newScript.setAttribute("charset", "UTF-8");
                element.appendChild(newScript);
            }
        };
        // Set refresh interval (every 5 minutes)
        const refreshInterval = setInterval(refreshFeaturable, 5 * 60 * 1000);

        // Clean up on component unmount
        return () => {
            clearInterval(refreshInterval);
        };
    }, []);
  return (
    <div>
          <section className='min-h-80  bg-sky-50 w-full py-5'>
                <div className='w-10/12 min-h-32  mx-auto'>
                    <div className=' text-center leading-relaxed animate-fade-in space-y-2'>
                        <h1 className='font-bold lg:text-3xl text-xl'> Don&#39;t just take our word for it,</h1>
                        <h1 className='lg:text-3xl text-xl text-blue-500 font-bold '>Hear from our students.</h1>
                        <h1 className='lg:text-md text-sm  text-gray-500'>Our students&#39; success stories speak volumes about the quality of our programs and mentorship.</h1>
                    </div>
                </div>
                <div
                    suppressHydrationWarning
                    id="featurable-b7323408-197d-4e2d-90e8-054cd79c232e"
                    data-featurable-async
                    className='min-h-20 w-full'
                ></div>
            </section>
    </div>
  )
}

export default Review