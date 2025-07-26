

'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Commonbtn from '@/components/ui/Commonbtn';
import Image from 'next/image';

// Define the Blog type
interface Blog {
    title: string;
    description: string;
    url: string;
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]); // State for blogs
    const [error, setError] = useState<string | null>(null); // State for error messages

    useEffect(() => {
        fetch("https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setBlogs(data.slice(0, 3)); // Limit to 3 blogs
                } else {
                    setError("No posts found.");
                }
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
                setError("Failed to load blogs. Please try again later.");
            });
    }, []);

    return (
        <div className="py-5 px-4 md:px-10 mx-auto xl:container">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-xl lg:text-4xl font-bold text-gray-900 my-4 tracking-wider" style={{ fontFamily: 'Loubag' }}>Explore the Blog</h1>

                <p className="lg:text-lg text-sm text-gray-600 max-w-2xl mx-auto my-6 tracking-wide">
                    Discover the latest handpicked blog entries to get started
                </p>
            </div>

            <div className="flex justify-center">
                <Link href="/Blogs">
                    <Commonbtn className='text-white' >
                        Check our Blogs
                    </Commonbtn>
                </Link>
            </div>

            <section className="w-11/12 mx-auto px-4 ">
                {error ? (
                    <p className="text-center text-red-500 text-lg mt-10">{error}</p>
                ) : blogs.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg mt-10">No posts found.</p>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 md:gap-12 mt-10">

                        {blogs.map((blog, index) => (
                            <div key={index} className="rounded-lg overflow-hidden bg-white hover:shadow-md shadow-lg -transition-transform hover:scale-105 duration-300 p-6">
                                <div className="mb-6">
                                    <div className=" w-full h-[15rem] aspect-h-9 relative">
                                        <Image
                                            src={"https://res.cloudinary.com/dn60aovto/image/upload/v1744274935/Cybernaut_Logo_White_Background_Vertical_bzb2w6.png"}
                                            alt={"cybernaut logo"}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-bold text-2xl text-gray-900 mb-3">{blog.title}</h3>
                                <p className="text-gray-600">{blog.description}</p>
                                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2 hover:gap-3 transition-all mt-4 font-semibold">
                                    Read Post <ChevronRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Blogs;


