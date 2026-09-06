import React from 'react';

const GlowVisual: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="bg-black relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#5301ab]/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,1,171,0.3)_0%,transparent_60%)] pointer-events-none" />

        <img
            src={src}
            alt={alt}
            className="relative z-10 w-[80%] max-w-md h-auto object-contain mix-blend-lighten opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
    </div>
);

const EcosystemFeatures: React.FC = () => {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2">
            {/* AI Powered Health Insights */}
            <div className="bg-[#5301ab] text-white p-12 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2 opacity-20">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white rounded-sm" />
                    ))}
                </div>

                <div className="relative z-10 max-w-xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        AI Powered <br /> Health Insights
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 mb-10 font-medium">
                        Get personalized health scores, trends and smart recommendations.
                    </p>

                    <button className="border-2 border-[#fd5800] bg-transparent text-[#fd5800] hover:bg-[#fd5800] hover:text-white rounded-full px-8 py-3.5 font-semibold transition-all duration-300 w-max">
                        Know Your Score
                    </button>
                </div>
            </div>

            <GlowVisual
                src="/home/ecosystem-features/ai-powered.png"
                alt="AI Powered Health Insights"
            />

            {/* Care For Your Loved Ones */}
            <div className="bg-[#faf9fb] relative min-h-[400px] lg:min-h-[600px] order-last lg:order-none overflow-hidden group">
                <img
                    src="/home/ecosystem-features/care-for-loved-ones.png"
                    alt="Care For Your Loved Ones"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            <div className="bg-[#110022] text-white p-12 md:p-16 lg:p-24 flex flex-col justify-center">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Care For Your <br /> Loved Ones
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium">
                        Manage your entire family's health in one secure dashboard.
                    </p>

                    <button className="border-2 border-[#5301ab] bg-transparent text-white hover:bg-[#5301ab] rounded-full px-8 py-3.5 font-semibold transition-all duration-300 w-max shadow-[0_0_15px_rgba(83,1,171,0.4)]">
                        Add Family Member
                    </button>
                </div>
            </div>

            {/* Zoro Smart Ring */}
            <div className="bg-[#fd5800] text-white p-12 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0H100V100" stroke="white" strokeWidth="4" />
                        <path d="M20 0H100V80" stroke="white" strokeWidth="4" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        Zoro Smart Ring
                    </h2>

                    <h3 className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
                        Your Health, On Your Finger
                    </h3>

                    <p className="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed">
                        Advanced health tracking with AI insights that keep you ahead.
                    </p>

                    <button className="bg-[#110022] text-white hover:bg-white hover:text-[#110022] border-2 border-[#110022] rounded-full px-8 py-3.5 font-semibold transition-all duration-300 w-max">
                        Explore Smart Ring
                    </button>
                </div>
            </div>

            <GlowVisual
                src="/home/ecosystem-features/smart-ring.png"
                alt="Zoro Smart Ring"
            />
        </section>
    );
};

export default EcosystemFeatures;