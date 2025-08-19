import React, { useState, useRef, useEffect } from 'react';
import { Clock, Globe, Briefcase, GraduationCap, Star, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image'

const courseList = [
    {
        id: 1,
        title: "tech-trio",
        coursename:'Tech Trio',
        icon: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760318/dc8b4334-3d0e-4aba-b3b9-d62167505ff3.png",
        Duriation: "60+ Hours",
        Language: "Tamil",
        Role: "Internship",
        Enrolled: "15k Enrolled",
        Rating: "4.8/5.0",
        Price: "₹2500/-",
        Discount: "₹5000/-",
        button: "Enroll Now",
        category: "online"
    },
    {
        id: 2,
        title: "meta-zen",
        coursename:'MetaZen',
        icon: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760409/978dd857-95f0-4d01-bca2-0ace606959c0.png",
        Duriation: "60+ Hours",
        Language: "Tamil",
        Role: "Internship",
        Enrolled: "1k Enrolled",
        Rating: "4.9/5.0",
        Price: "₹45000/-",
        Discount: "₹90000/-",
        button: "Enroll Now",
        category: "offline"
    },
    {
        id: 3,
        title: "ui-ux-design",
        coursename:'UI/UX Design',
        icon: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760341/98647341-97d9-47a2-8b3f-ed544fa5ba91.png",
        Duriation: "60+ Hours",
        Language: "Tamil",
        Role: "Internship",
        Enrolled: "9k Enrolled",
        Rating: "4.7/5.0",
        Price: "₹3000/-",
        Discount: "₹5000/-",
        button: "Enroll Now",
        category: "online"
    },
    {
        id: 4,
        title: "full-stack-development",
        coursename:'Full Stack Development',
        icon: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760362/e8099a88-51ca-4e42-8321-2dd6407a98ac.png",
        Duriation: "60+ Hours",
        Language: "Tamil",
        Role: "Internship",
        Enrolled: "10K Enrolled",
        Rating: "4.8/5.0",
        Price: "₹3500/-",
        Discount: "₹5000/-",
        button: "Enroll Now",
        category: "online"
    },
    {
        id: 5,
        title: "data-analytics",
        coursename:'Data Analytics',
        icon: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1753760383/fea80710-ebb8-4ee2-a6a6-9a10fd096bcb.png",
        Duriation: "60+ Hours",
        Language: "Tamil",
        Role: "Internship",
        Enrolled: "10K Enrolled",
        Rating: "4.8/5.0",
        Price: "₹3500/-",
        Discount: "₹5000/-",
        button: "Enroll Now",
        category: "online"
    }
];

interface CourseItem {
    id: number;
    title: string;
    coursename: string;
    icon: string | StaticImageData;
    Duriation: string;
    Language: string;
    Role: string;
    Enrolled: string;
    Rating: string;
    Price: string;
    Discount: string;
    button: string;
    category: string;
}

function Coursecards() {
    const options = ["All Categories", "Online", "Offline", "VAC", "Placement Support"];
    const [selectedOption, setSelectedOption] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const buttonsRef = useRef<HTMLButtonElement[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (buttonsRef.current[selectedOption]) {
            const button = buttonsRef.current[selectedOption];
            setUnderlineStyle({
                left: button.offsetLeft,
                width: button.offsetWidth,
            });
        }
    }, [selectedOption]);

    const handleOptionClick = (index: number) => {
        setSelectedOption(index);
        setIsMenuOpen(false);
        setSearchQuery('');
    };

    const getCategoryFromIndex = (index: number): string => {
        switch (index) {
            case 1: return 'online';
            case 2: return 'offline';
            case 3: return 'vac';
            case 4: return 'placement';
            default: return '';
        }
    };

    const getFilteredCourses = () => {
        let filteredList = courseList;

        // Apply category filter if not "All Categories"
        if (selectedOption !== 0) {
            const category = getCategoryFromIndex(selectedOption);
            filteredList = filteredList.filter(course => course.category === category);
        }

        // Apply search filter if there's a search query
        if (searchQuery) {
            filteredList = filteredList.filter(course =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return [{ title: 'Search Results', courses: filteredList }];
        }

        // Group by category if no search query
        if (selectedOption === 0) {
            return [
                { title: 'Online Courses', courses: courseList.filter(course => course.category === 'online') },
                { title: 'Offline Courses', courses: courseList.filter(course => course.category === 'offline') },
                { title: 'Value Added Courses', courses: courseList.filter(course => course.category === 'vac') },
                { title: 'Placement Support', courses: courseList.filter(course => course.category === 'placement') }
            ];
        }

        // Single category view
        const categoryTitles: { [key: string]: string } = {
            'online': 'Online Courses',
            'offline': 'Offline Courses',
            'vac': 'Value Added Courses',
            'placement': 'Placement Support'
        };
        const category = getCategoryFromIndex(selectedOption);
        return [{
            title: categoryTitles[category],
            courses: filteredList
        }];
    };

    const courseGroups = getFilteredCourses();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Search Bar */}
            <div className="bg-white pt-4 pb-4 border-b border-gray-200">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex mx-auto items-center border w-full max-w-md focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search for Courses"
                            className="w-full h-full pl-4 outline-none text-center placeholder-gray-500 text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={22} height={22} viewBox="0 0 30 30" fill="#6B7280">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="bg-white">
                <div className="max-w-[2000px] mx-auto">
                    {/* Desktop Navigation */}
                    <nav className="relative border-b border-gray-200 hidden md:block px-8">
                        <div className="flex gap-8">
                            {options.map((option, index) => (
                                <button
                                    key={option}
                                    ref={(el) => {
                                        if (el) {
                                            buttonsRef.current[index] = el;
                                        }
                                    }}
                                    onClick={() => handleOptionClick(index)}
                                    className={`px-1 py-4 text-sm font-medium transition-colors relative ${selectedOption === index ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div
                            className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out"
                            style={{
                                left: underlineStyle.left,
                                width: underlineStyle.width,
                            }}
                        />
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-lg font-semibold text-gray-900">
                                {options[selectedOption]}
                            </span>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="px-4 py-2 space-y-1 bg-white border-t border-gray-200">
                                {options.map((option, index) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionClick(index)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${selectedOption === index
                                            ? 'text-blue-500 bg-blue-50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main container with responsive padding */}
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Course groups */}
                <div className="space-y-12">
                    {courseGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                                {group.title}
                                {searchQuery && <span className="text-sm font-normal text-gray-500 ml-2">({group.courses.length} results)</span>}
                            </h3>

                            {group.courses.length === 0 ? (
                                <p className="text-gray-500 text-start py-8">Coming Soon</p>
                            ) : (
                                /* Course container with horizontal scroll on mobile */
                                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                    {/* Horizontal scroll wrapper for mobile */}
                                    <div className="flex md:hidden w-full overflow-x-auto gap-4 pb-4 mx-2 px-4 snap-x snap-mandatory hide-scrollbar">
                                        {group.courses.map((item) => (
                                            <div key={item.id} className="flex-none w-[85%] snap-start">
                                                <CourseCard item={item} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Grid layout for tablet and up */}
                                    <div className="hidden md:contents">
                                        {group.courses.map((item) => (
                                            <div key={item.id} className="flex w-full ">
                                                <CourseCard item={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// CourseCard component
function CourseCard({ item }: { item: CourseItem }) {
    return (
        <div className="group relative flex flex-col min-w-64 lg:w-full bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Gradient border animation */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2E77EF] via-[#55B4FF] to-[#2E77EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="absolute inset-[2px] rounded-xl bg-white z-10"></div>
            
            {/* Card content wrapper */}
            <div className="relative z-20 flex flex-col h-full">
                {/* Image container with aspect ratio */}
                <div className="relative w-full pt-[56%]">
                    <Image
                    width={500}
                    height={500}
                        src={item.icon}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
                    />
                </div>

                {/* Content section with responsive padding */}
                <div className="flex flex-col flex-grow p-4 sm:p-5 gap-4">
                {/* Title with responsive font size */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">
                    {item.coursename}
                </h3>

                {/* Course details with responsive layout */}
                <div className="flex gap-2 items-center justify-start">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-[0.7rem]   text-gray-600">{item.Duriation}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="text-[0.7rem]  text-gray-600">{item.Language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span className="text-[0.7rem]   text-gray-600">{item.Role}</span>
                    </div>
                </div>

                {/* Stats section */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-5 h-5 text-gray-500" />
                        <span className="text-[0.8rem] text-gray-700">{item.Enrolled}</span>

                    </div>
                    <div className="flex items-center gap-1.5">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-[0.8rem] font-medium text-gray-700">{item.Rating}</span>
                    </div>
                </div>

                <div className="h-px bg-gray-200 my-2" />

                {/* Price and CTA section */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                        <span className="lg:text-lg text-md font-bold text-blue-600">{item.Price}</span>
                        <span className="lg:text-sm text-[0.7rem] text-gray-400 line-through">{item.Discount}</span>
                    </div>
                    <div className="flex">
                        <Link href={`/${item.title.replace(/ /g, '')}`} className="lg:px-4 px-2 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors whitespace-nowrap">
                            {item.button}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Coursecards;