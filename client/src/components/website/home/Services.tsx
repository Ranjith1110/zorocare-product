import React, { useState } from 'react';

const servicesData = [
    {
        id: 'doctor',
        title: 'Doctor Consultation',
        description: 'Video/Voice & Clinic Consultation',
        image:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
        ),
    },
    {
        id: 'pharmacy',
        title: 'Pharmacy',
        description: 'Medicines at your doorstep',
        image:
            'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
        ),
    },
    {
        id: 'diagnostics',
        title: 'Diagnostics',
        description: 'Book tests & get reports online',
        image:
            'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        ),
    },
    {
        id: 'homecare',
        title: 'Home Healthcare',
        description: 'Nursing, Doctor Visit, Physiotherapy',
        image:
            'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
        ),
    },
    {
        id: 'eldercare',
        title: 'Elder Care',
        description: 'Specialized care for seniors',
        image:
            'https://images.unsplash.com/photo-1576765974102-b756026ecee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
        ),
    },
    {
        id: 'mental',
        title: 'Mental Wellness',
        description: 'Counselling & Therapy',
        image:
            'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
        ),
    },
    {
        id: 'nutrition',
        title: 'Nutrition & Wellness',
        description: 'Diet, Fitness & Lifestyle',
        image:
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
        ),
    },
    {
        id: 'chronic',
        title: 'Chronic Care',
        description: 'Manage Diabetes, BP, Thyroid & more',
        image:
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
        ),
    },
    {
        id: 'insurance',
        title: 'Insurance Support',
        description: 'Cashless & Claim Assistance',
        image:
            'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
        ),
    },
    {
        id: 'emergency',
        title: 'Emergency Care',
        description: '24/7 Ambulance & Emergency Support',
        image:
            'https://images.unsplash.com/photo-1587559070757-f72a388edbba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
            />
        ),
    },
];

const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const activeService = servicesData[activeIndex];

    return (
        <section className="relative w-full py-20 bg-[#faf9fb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-[#5301ab] font-bold tracking-wide text-sm mb-3 uppercase">
                        Our Healthcare Services
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        All Your Health Needs,{' '}
                        <br className="hidden sm:block" />
                        Under <span className="text-[#fd5800]">One Roof</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">

                    {/* Services List */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-4">
                        {servicesData.map((service, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={service.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 border ${isActive
                                            ? 'bg-[#5301ab] border-[#5301ab] shadow-xl shadow-[#5301ab]/20'
                                            : 'bg-white border-gray-200 hover:border-[#5301ab]/30 hover:shadow-md'
                                        }`}
                                >
                                    {/* Service Header */}
                                    <div className="p-5 md:p-6 flex items-center justify-between">
                                        <div className="flex items-center gap-4 md:gap-6">

                                            <div
                                                className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive
                                                        ? 'bg-[#fd5800] text-white'
                                                        : 'bg-[#5301ab]/10 text-[#5301ab]'
                                                    }`}
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    {service.icon}
                                                </svg>
                                            </div>

                                            <h3
                                                className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-900'
                                                    }`}
                                            >
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Expand Icon */}
                                        <div
                                            className={`shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        >
                                            {isActive ? (
                                                <svg
                                                    className="w-6 h-6 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M20 12H4"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="w-6 h-6 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isActive
                                                ? 'grid-rows-[1fr] opacity-100 pb-6'
                                                : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="pl-[84px] md:pl-[96px] pr-6">

                                                <p className="text-white/90 text-lg mb-6">
                                                    {service.description}
                                                </p>

                                                <button
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-[#fd5800] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-[#fd5800] transition-colors shadow-lg"
                                                >
                                                    Explore Service
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Preview Panel */}
                    <div className="hidden lg:block lg:w-[45%] relative">
                        <div className="sticky top-28 w-full bg-white rounded-[2rem] shadow-2xl p-3 border border-gray-100 h-[600px] flex flex-col transition-all duration-500">

                            {/* Browser Header */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 mb-2">

                                <div className="w-3 h-3 rounded-full bg-gray-200" />
                                <div className="w-3 h-3 rounded-full bg-gray-200" />
                                <div className="w-3 h-3 rounded-full bg-gray-200" />

                                <div className="ml-4 text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                                    zorocare.com/services
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100 group">
                                <img
                                    key={activeIndex}
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover animate-fade-in"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">

                                    <span className="text-[#fd5800] font-bold text-sm tracking-wider uppercase mb-2">
                                        {activeService.title}
                                    </span>

                                    <h4 className="text-white text-3xl font-bold leading-tight">
                                        {activeService.description}
                                    </h4>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Animation */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default Services;