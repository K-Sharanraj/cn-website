'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import Nav from '@/app/Home/nav';
import Footer from '@/app/Home/footer';
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from '@/components/ui/button';
import Contact from '../Home/contact';
import Image from 'next/image';


interface Blog {
    title: string;
    content: string;
    url: string;
    category: string;
    description: string;
}

function App() {
    const [blogs, setBlogs] = useState<Blog[]>([]); // Use the Blog type
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); // Use the Blog type
    const [activeCategory, setActiveCategory] = useState<string>('All'); // Specify the type
    const [searchQuery, setSearchQuery] = useState<string>(''); // Specify the type

    useEffect(() => {
        fetch("https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const categorizedBlogs = data.map((blog: Blog) => ({
                        ...blog,
                        category: categorizeBlog(blog)
                    }));
                    setBlogs(categorizedBlogs);
                    setFilteredBlogs(categorizedBlogs);
                } else {
                    setBlogs([]);
                    setFilteredBlogs([]);
                }
            })
            .catch(() => {
                setBlogs([]);
                setFilteredBlogs([]);
            });
    }, []);


    const categorizeBlog = (blog: { title: string }) => {
        const lowerTitle = blog.title.toLowerCase();
        if (lowerTitle.includes("business") || lowerTitle.includes("entrepreneur")) return "Business";
        if (lowerTitle.includes("tech") || lowerTitle.includes("software") || lowerTitle.includes("ai")) return "Technology";
        if (lowerTitle.includes("marketing") || lowerTitle.includes("advertising")) return "Marketing";
        return "Other";
    };

    const handleFilterChange = (category: string) => {
        setActiveCategory(category);
        filterBlogs(category, searchQuery);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterBlogs(activeCategory, query);
    };

    const filterBlogs = (category: string, query: string) => {
        let filtered = blogs;
        if (category !== 'All') {
            filtered = filtered.filter(blog => blog.category === category);
        }
        if (query) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(query.toLowerCase()) ||
                blog.description.toLowerCase().includes(query.toLowerCase())
            );
        }
        setFilteredBlogs(filtered);
    };


    return (
        <div className="min-h-screen mt-10 bg-white">
            <Nav />
            <section className="container mx-auto px-4 text-center pt-3">
                <div className="mx-auto">
                    <LampContainer>
                        <motion.div
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: -30 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-slate-300 fixed to-slate-500 bg-clip-text text-center space-y-4 text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            <h1 className='uppercase font-extrabold text-white text-2xl md:text-4xl lg:text-5xl'>
                                Blog
                            </h1>

                            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:w-[50rem] w-80 py-3 lg:py-0 mx-auto font-semibold">
                                Our Mission is to make <span className="text-blue-500">Knowledge</span> and{' '}
                                <span className="text-blue-500">News accessible</span> for <span className="text-blue-500">Everyone.</span>
                            </h2>

                            <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                                Stay informed with the latest insights, trends, and updates. Explore expert opinions, industry news, and valuable knowledge—all in one place.
                            </p>
                        </motion.div>
                    </LampContainer>
                </div>
            </section>

            {/* Filter Buttons */}
            {/* <div className="flex lg:justify-center w-full lg:w-11/12 mx-auto lg:ap-4 mt-4">
                {['All', 'Business', 'Technology', 'Marketing', 'Other'].map(category => (
                    <Button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`shadow-none bg-transparent  lg:px-4 lg:py-2 hover:bg-transparent rounded-md ${activeCategory === category ? ' text-blue-500' : ' text-black '}`}
                    >
                        {category}
                    </Button>
                ))}
            </div> */}
            <div className="flex flex-wrap justify-center w-full px-4 py-2 gap-2 lg:gap-4">
                {['All', 'Business', 'Technology', 'Marketing', 'Other'].map(category => (
                    <Button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`shadow-none bg-transparent w-full sm:w-auto px-2 sm:px-4 py-1 sm:py-2 rounded-md text-sm sm:text-base
                                   hover:bg-transparent transition-colors duration-200
                                   ${activeCategory === category ? 'text-blue-500' : 'text-black'}`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Search Bar (Moved Below Categories) */}
            <div className="flex justify-center mt-6 relative w-full px-4">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-gray-400 h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by title or description..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full px-10 py-3 rounded-lg bg-white border border-gray-200 shadow-sm
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 placeholder-gray-400 text-sm sm:text-base transition-all duration-200"
                    />
                </div>
            </div>

            {/* <section className="container mx-auto px-4 md:py-16">
                {filteredBlogs.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg mt-10">No posts found under this topic.</p>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
                        {filteredBlogs.map((blog, index) => (
                            <div
                                key={index}
                                className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
                            >
                                <div className="p-4">
                                    <div className="aspect-w-16 aspect-h-9 relative">
                                        <Image
                                            src="https://res.cloudinary.com/dn60aovto/image/upload/v1744274935/Cybernaut_Logo_White_Background_Vertical_bzb2w6.png"
                                            alt={'cybernaut logo'}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {blog.category}
                                        </span>

                                        <h3 className="mt-2 text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {blog.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                            {blog.description}
                                        </p>

                                        <a
                                            href={blog.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            Read Post <ChevronRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section> */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto">
                    {filteredBlogs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-500 mb-4">No posts found under this topic.</p>
                            <p className="text-gray-400">Please try a different category or search term.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {filteredBlogs.map((blog, index) => (
                                <article
                                    key={index}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                                >
                                    <div className="p-6">
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

                                        <div>
                                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-3">
                                                {blog.category}
                                            </span>

                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h3>

                                            <p className="text-gray-600 text-base line-clamp-3 mb-4">
                                                {blog.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <a
                                                    href={blog.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                                >
                                                    Read More
                                                    <ChevronRight size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <section>
            <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;