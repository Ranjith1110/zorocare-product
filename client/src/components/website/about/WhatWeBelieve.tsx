import React from 'react';
import {
    Activity,
    Heart,
    Users,
    Sparkles,
    ShieldCheck
} from 'lucide-react';

const WhatWeBelieve: React.FC = () => {
    return (
        <section className="relative w-full bg-[#16002c] py-24 lg:py-32 overflow-hidden">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#5301ab]/20 blur-[130px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#fd5800]/10 blur-[130px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#fd5800]"></span>
                        <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase">
                            What We Believe
                        </h2>
                        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#fd5800]"></span>
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.15]">
                        The principles that <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] via-[#a236d2] to-[#fd5800]">
                            guide our care.
                        </span>
                    </h3>
                </div>

                {/* --- BENTO GRID LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Prevention Over Reaction (Wide) */}
                    <div className="lg:col-span-2 group relative bg-white/5 rounded-[2rem] p-8 lg:p-10 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(83,1,171,0.3)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5301ab] rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10 h-full flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
                            <div className="w-16 h-16 rounded-2xl bg-[#5301ab]/20 border border-[#5301ab]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                <Activity className="w-8 h-8 text-[#a236d2]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-3">Prevention Over Reaction</h4>
                                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
                                    Early awareness can create opportunities for timely action. We believe in staying ahead of health issues before they become emergencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: People Over Technology */}
                    <div className="lg:col-span-1 group relative bg-white/5 rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(253,88,0,0.2)]">
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#fd5800] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#fd5800]/10 border border-[#fd5800]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Heart className="w-7 h-7 text-[#fd5800]" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">People Over Technology</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Technology should make care better — not make healthcare feel impersonal.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Family Matters */}
                    <div className="lg:col-span-1 group relative bg-white/5 rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(83,1,171,0.2)]">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#5301ab] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#5301ab]/20 border border-[#5301ab]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Users className="w-7 h-7 text-[#a236d2]" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Family Matters</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Healthcare becomes more meaningful when it includes the people we care about.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Simplicity */}
                    <div className="lg:col-span-1 group relative bg-white/5 rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(253,88,0,0.2)]">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#fd5800] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#fd5800]/10 border border-[#fd5800]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Sparkles className="w-7 h-7 text-[#fd5800]" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Simplicity Creates Better Experiences</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Healthcare should not feel unnecessarily complicated.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Trust Is Everything */}
                    <div className="lg:col-span-1 group relative bg-white/5 rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(83,1,171,0.2)]">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#5301ab] to-[#fd5800] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5301ab]/20 to-[#fd5800]/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck className="w-7 h-7 text-white" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Trust Is Everything</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Health is personal. Every interaction should be built around responsibility, transparency and respect.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeBelieve;