import React from 'react';

const trustFeatures = [
    {
        id: 1,
        title: 'One Stop Solution',
        description: 'Everything you need for your health',
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Verified Experts',
        description: 'Trusted doctors & health professionals',
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: '24/7 Support',
        description: 'Care team always by your side',
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Secure & Private',
        description: 'Your data is safe with us',
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Affordable Care',
        description: 'Quality healthcare for everyone',
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
];

const partners = [
    { name: 'Apollo Hospitals', logo: 'Apollo HOSPITALS' },
    { name: 'MAX Healthcare', logo: 'MAX Healthcare' },
    { name: 'Manipal Hospitals', logo: 'manipal hospitals' },
    { name: 'Thyrocare', logo: 'Thyrocare' },
    { name: 'Metropolis', logo: 'metropolis' },
    { name: 'STAR Health', logo: 'STAR Health' },
];

const testimonials = [
    {
        id: 1,
        name: 'Priya S.',
        location: 'Bengaluru',
        review:
            'ZoroCare has made healthcare so easy for my entire family. From consultations to medicines, everything is just a click away!',
        image: 'https://i.pravatar.cc/150?img=5',
    },
    {
        id: 2,
        name: 'Rahul Mehta',
        location: 'Delhi',
        review:
            'The home healthcare service is excellent. The caregivers are trained, polite and very supportive. Highly recommended.',
        image: 'https://i.pravatar.cc/150?img=11',
    },
    {
        id: 3,
        name: 'Anita Verma',
        location: 'Hyderabad',
        review:
            'Zoro Smart Ring helps me track my health 24x7. The AI insights and reports are incredibly accurate and helpful.',
        image: 'https://i.pravatar.cc/150?img=9',
    },
    {
        id: 4,
        name: 'Vikram Singh',
        location: 'Mumbai',
        review:
            'Booking lab tests at home is seamless. The reports were delivered on time right to my app. Great experience!',
        image: 'https://i.pravatar.cc/150?img=12',
    },
];

const TrustAndPartners: React.FC = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-[#faf9fb] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Trusted Partners */}
                <div className="mb-24">
                    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        Our Trusted Partners
                    </h2>

                    <div className="relative flex overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#faf9fb] to-transparent z-10 pointer-events-none" />

                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#faf9fb] to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-marquee hover:pause group w-max">
                            {[...partners, ...partners].map((partner, index) => (
                                <div
                                    key={`partner-${index}`}
                                    className="flex items-center justify-center mx-8 md:mx-12 h-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer min-w-max"
                                >
                                    <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
                                        {partner.logo}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Families Trust ZoroCare */}
                <div className="mb-24">
                    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        Why Families Trust{' '}
                        <span className="text-[#fd5800]">ZoroCare</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {trustFeatures.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="relative mb-6">
                                    <div className="absolute -inset-2 bg-[#5301ab]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />

                                    <div className="relative w-12 h-12 bg-white border-2 border-[#5301ab]/20 rounded-full flex items-center justify-center text-[#5301ab] group-hover:text-[#fd5800] group-hover:border-[#fd5800] transition-colors duration-300 shadow-sm">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-gray-500 font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        What Our Users Say
                    </h2>

                    <div className="relative flex overflow-hidden py-4">
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#faf9fb] to-transparent z-10 pointer-events-none" />

                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#faf9fb] to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-marquee-slow hover:pause group w-max">
                            {[...testimonials, ...testimonials].map(
                                (testimonial, index) => (
                                    <div
                                        key={`testimonial-${index}`}
                                        className="w-[320px] md:w-[400px] mx-4 bg-[#110022] rounded-[2rem] p-8 shadow-xl border border-white/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
                                    >
                                        <div>
                                            <div className="text-[#5301ab] mb-4">
                                                <svg
                                                    className="w-8 h-8"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                            </div>

                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                                                "{testimonial.review}"
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-end pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full border-2 border-[#fd5800] object-cover"
                                                />

                                                <div>
                                                    <h4 className="text-white font-bold text-sm">
                                                        {testimonial.name}
                                                    </h4>

                                                    <span className="text-gray-500 text-xs">
                                                        {testimonial.location}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex gap-1 text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }

        .pause {
          animation-play-state: paused;
        }

        .group:hover .animate-marquee,
        .group:hover .animate-marquee-slow {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default TrustAndPartners;