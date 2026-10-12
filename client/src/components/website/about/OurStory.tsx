import React from 'react';
import {
    Shield,
    Activity,
    HeartHandshake,
    Link2,
    ArrowRight
} from 'lucide-react';

const OurStory: React.FC = () => {
    return (
        <section className="relative w-full bg-[#faf9fb] py-20 lg:py-32 overflow-hidden">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5301ab]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-40 left-0 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Subtle dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* --- LEFT SIDE: Sticky Header --- */}
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-1 bg-gradient-to-r from-[#5301ab] to-[#fd5800] rounded-full"></div>
                            <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase">
                                Our Story
                            </h2>
                        </div>

                        <h3 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-8">
                            Healthcare Is <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                                More Than a <br className="hidden lg:block" /> Doctor's Visit.
                            </span>
                        </h3>

                        <p className="text-xl text-gray-600 font-medium leading-relaxed border-l-4 border-[#5301ab] pl-5">
                            A healthcare journey doesn't begin when you enter a hospital.
                        </p>
                    </div>

                    {/* --- RIGHT SIDE: Timeline Cards --- */}
                    <div className="w-full lg:w-7/12 relative">

                        {/* Timeline Line */}
                        <div className="absolute left-8 lg:left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#5301ab]/20 via-[#fd5800]/20 to-transparent hidden sm:block"></div>

                        <div className="space-y-8 sm:space-y-12">

                            {/* Card 1: Prevention */}
                            <div className="relative pl-0 sm:pl-24 group">
                                <div className="absolute left-4 lg:left-6 top-6 w-8 h-8 rounded-full bg-white border-4 border-[#faf9fb] shadow-[0_0_15px_rgba(83,1,171,0.2)] flex items-center justify-center z-10 hidden sm:flex group-hover:scale-125 transition-transform duration-500">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#5301ab]"></div>
                                </div>

                                <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#5301ab]/5 rounded-bl-[100px] transition-colors duration-500 group-hover:bg-[#5301ab]/10"></div>

                                    <div className="w-14 h-14 rounded-2xl bg-[#5301ab]/10 flex items-center justify-center mb-6">
                                        <Shield className="w-7 h-7 text-[#5301ab]" strokeWidth={1.5} />
                                    </div>

                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                                        It begins with prevention.
                                    </h4>
                                </div>
                            </div>

                            {/* Card 2: Continuous Care */}
                            <div className="relative pl-0 sm:pl-24 group">
                                <div className="absolute left-4 lg:left-6 top-6 w-8 h-8 rounded-full bg-white border-4 border-[#faf9fb] shadow-[0_0_15px_rgba(253,88,0,0.2)] flex items-center justify-center z-10 hidden sm:flex group-hover:scale-125 transition-transform duration-500">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#fd5800]"></div>
                                </div>

                                <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#fd5800]/5 rounded-bl-[100px] transition-colors duration-500 group-hover:bg-[#fd5800]/10"></div>

                                    <div className="w-14 h-14 rounded-2xl bg-[#fd5800]/10 flex items-center justify-center mb-6">
                                        <Activity className="w-7 h-7 text-[#fd5800]" strokeWidth={1.5} />
                                    </div>

                                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                                        It continues through regular health monitoring, diagnostics, consultations, medication, lifestyle management and timely intervention.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Family Care */}
                            <div className="relative pl-0 sm:pl-24 group">
                                <div className="absolute left-4 lg:left-6 top-6 w-8 h-8 rounded-full bg-white border-4 border-[#faf9fb] shadow-[0_0_15px_rgba(83,1,171,0.2)] flex items-center justify-center z-10 hidden sm:flex group-hover:scale-125 transition-transform duration-500">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#5301ab] to-[#fd5800]"></div>
                                </div>

                                <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#5301ab]/5 to-[#fd5800]/5 rounded-bl-[100px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>

                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5301ab]/10 to-[#fd5800]/10 flex items-center justify-center mb-6">
                                        <HeartHandshake className="w-7 h-7 text-[#5301ab]" strokeWidth={1.5} />
                                    </div>

                                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                                        And for families, healthcare also means knowing whether your parents are doing well, helping loved ones access the right care and being there when they need support.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* --- BOTTOM SECTION: The ZoroCare Connection --- */}
                <div className="mt-24 lg:mt-32 relative">
                    <div className="relative w-full rounded-[3rem] bg-[#16002c] overflow-hidden shadow-2xl p-10 md:p-16 lg:p-20 group hover:-translate-y-2 transition-transform duration-700">

                        {/* Dramatic inner glows */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5301ab] via-[#fd5800] to-[#5301ab]"></div>
                        <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#fd5800] rounded-full blur-[130px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#5301ab] rounded-full blur-[130px] opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity duration-700"></div>

                        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

                            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(83,1,171,0.3)]">
                                <Link2 className="w-10 h-10 text-[#fd5800]" strokeWidth={2} />
                            </div>

                            <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
                                Zorocare was created to <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] via-[#a236d2] to-[#fd5800]">
                                    connect these pieces.
                                </span>
                            </h4>

                            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mb-12">
                                We are building a healthtech ecosystem that combines healthcare services, human support and intelligent technology to make everyday healthcare more organised and proactive.
                            </p>

                            <button className="bg-white text-[#16002c] px-10 py-4 rounded-full font-bold text-[16px] hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2">
                                Join the Ecosystem
                                <ArrowRight className="w-5 h-5 text-[#fd5800]" strokeWidth={3} />
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurStory;