'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Commonbtn from '@/components/ui/Commonbtn';
import Image from 'next/image';

interface Blog {
    title: string;
    description: string;
    url: string;
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            let timeoutId: NodeJS.Timeout;

            try {
                setLoading(true);
                setError(null);

                const controller = new AbortController();
                timeoutId = setTimeout(() => {
                    controller.abort();
                }, 8000);

                const response = await fetch(
                    "https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/",
                    { 
                        signal: controller.signal,
                        headers: { 'Accept': 'application/json' }
                    }
                );

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setBlogs(data.slice(0, 3));
                } else {
                    setBlogs([]); // No blogs found
                }
            } catch (error) {
                if (timeoutId) clearTimeout(timeoutId);

                if (error instanceof Error && error.name !== 'AbortError') {
                    console.warn("Error fetching blogs:", error.message);
                    setError("Failed to load blogs");
                }
                setBlogs([]); // Ensure empty state
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
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
                    <Commonbtn className='text-white'>Check our Blogs</Commonbtn>
                </Link>
            </div>

            <section className="w-11/12 mx-auto px-4 ">
                {loading ? (
                    <div className="flex justify-center items-center mt-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        <p className="ml-4 text-gray-600">Loading blogs...</p>
                    </div>
                ) : blogs.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg mt-10">No posts found.</p>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
                        {blogs.map((blog, index) => (
                            <div key={index} className="rounded-lg overflow-hidden bg-white hover:shadow-md shadow-lg transition-transform hover:scale-105 duration-300 p-6">
                                <div className="mb-6">
                                    <div className="w-full h-[15rem] aspect-h-9 relative">
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
                                <Link href={blog.url} className="text-blue-500 flex items-center gap-2 hover:gap-3 transition-all mt-4 font-semibold">
                                    Read Post <ChevronRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Blogs;
