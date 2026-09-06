import React, { useState } from 'react';

const articlesData = [
    {
        id: 'wellness',
        category: 'Wellness',
        title: '10 Daily Habits for a Healthier Lifestyle',
        date: 'May 10, 2024',
        readTime: '5 min read',
        image:
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        id: 'nutrition',
        category: 'Nutrition',
        title: 'Superfoods That Boost Immunity Naturally',
        date: 'May 08, 2024',
        readTime: '4 min read',
        image:
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        ),
    },
    {
        id: 'senior-care',
        category: 'Senior Care',
        title: 'How to Take Care of Your Aging Parents',
        date: 'May 05, 2024',
        readTime: '6 min read',
        image:
            'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },
    {
        id: 'mental-health',
        category: 'Mental Health',
        title: 'Managing Stress in a Fast-Paced World',
        date: 'May 01, 2024',
        readTime: '4 min read',
        image:
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
        ),
    },
];

const HealthTips: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextArticle = () => {
        setActiveIndex((prev) => (prev + 1) % articlesData.length);
    };

    const prevArticle = () => {
        setActiveIndex(
            (prev) => (prev - 1 + articlesData.length) % articlesData.length
        );
    };

    const activeArticle = articlesData[activeIndex];

    return (
        <section className="w-full py-16 lg:py-24 bg-[#faf9fb] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] flex items-center">
                        <div className="absolute left-0 top-8 bottom-8 w-[80%] bg-[#5301ab] rounded-[2rem] sm:rounded-[3rem] shadow-lg" />

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] sm:w-[75%] aspect-[4/3] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden bg-gray-900 border border-white/20 group">
                            <img
                                key={activeIndex}
                                src={activeArticle.image}
                                alt={activeArticle.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 animate-fade-in"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                                <span className="bg-[#5301ab] text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4">
                                    {activeArticle.category}
                                </span>

                                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-3">
                                    {activeArticle.title}
                                </h3>

                                <p className="text-gray-300 text-sm font-medium">
                                    {activeArticle.date} &nbsp;•&nbsp; {activeArticle.readTime}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-8 lg:pt-0">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#110022] leading-[1.1] mb-4">
                            Health Tips <br className="hidden sm:block" /> & Resources
                        </h2>

                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-lg mb-8">
                            Stay updated with the latest health insights, daily habits, and
                            expert advice for you and your loved ones.
                        </p>

                        <button className="bg-[#fd5800] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#e04e00] transition-colors shadow-lg shadow-[#fd5800]/20 w-max mb-16">
                            Read All Articles →
                        </button>

                        {/* Article Categories */}
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {articlesData.map((article, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <div
                                        key={article.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`min-w-[110px] sm:min-w-[130px] p-4 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 border-2 ${isActive
                                                ? 'bg-white border-[#5301ab]/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] -translate-y-1'
                                                : 'bg-transparent border-transparent hover:bg-white/60'
                                            }`}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 ${isActive
                                                    ? 'bg-[#fd5800]/10 text-[#fd5800]'
                                                    : 'bg-gray-100 text-gray-500'
                                                }`}
                                        >
                                            {article.icon}
                                        </div>

                                        <span
                                            className={`text-sm font-bold ${isActive ? 'text-[#5301ab]' : 'text-gray-600'
                                                }`}
                                        >
                                            {article.category}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-4 mt-4 pl-2">
                            <button
                                onClick={prevArticle}
                                aria-label="Previous article"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#5301ab] hover:text-[#5301ab] transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={nextArticle}
                                aria-label="Next article"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#5301ab] hover:text-[#5301ab] transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default HealthTips;