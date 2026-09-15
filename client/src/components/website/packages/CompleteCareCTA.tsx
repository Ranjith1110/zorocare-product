import React from 'react';
import { ShieldCheck, Users, ArrowRight, Sparkles } from 'lucide-react';

const CompleteCareCTA: React.FC = () => {
    return (
        <section className="relative w-full bg-[#16002c] py-20 lg:py-32 overflow-hidden">
            
            {/* Background Ambient Orbs */}
            <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#5301ab]/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#fd5800]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* --- LEFT SIDE: Features --- */}
                    <div className="w-full lg:w-1/2">
                        
                        {/* Section Pill */}
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-white/5 border border-white/10 text-[#fd5800] text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase flex items-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(253,88,0,0.15)]">
                                <Sparkles className="w-3.5 h-3.5" />
                                Complete Care
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] mb-12 tracking-tight">
                            Healthcare support designed around your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] via-[#a236d2] to-[#fd5800]">complete health journey.</span>
                        </h2>

                        <div className="space-y-5">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#5301ab]/20 flex items-center justify-center shrink-0 border border-[#5301ab]/30 group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheck className="w-7 h-7 text-[#a236d2]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Trusted & Secure</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">
                                        A healthcare experience built around trust, privacy, and security.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#fd5800]/20 flex items-center justify-center shrink-0 border border-[#fd5800]/30 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7 text-[#fd5800]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">For Every Stage</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">
                                        Flexible care designed for individuals and families at every stage of life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Call to Action Card --- */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative bg-gradient-to-br from-[#5301ab] to-[#2f0061] rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/10 overflow-hidden text-center lg:text-left group hover:-translate-y-2 transition-transform duration-500">
                            
                            {/* Decorative internal glow */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-[#fd5800] rounded-full blur-[90px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
                                    Ready to take control of your healthcare?
                                </h3>
                                <p className="text-white/80 text-lg font-medium mb-10 leading-relaxed">
                                    Choose a package that works for you and start your ZoroCare journey today.
                                </p>
                                
                                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#5301ab] px-10 py-4 rounded-full font-bold text-[16px] hover:bg-gray-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                                </button>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompleteCareCTA;