import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
    return (
        <section className="relative w-full bg-[#faf9fb] py-20 lg:py-32 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    
                    <div className="bg-white rounded-[2rem] p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#5301ab] to-[#a236d2] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#5301ab]/5 rounded-full blur-3xl group-hover:bg-[#5301ab]/10 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-[#5301ab]/10 flex items-center justify-center mb-8 group-hover:bg-[#5301ab] transition-colors duration-500">
                                <Eye className="w-8 h-8 text-[#5301ab] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase mb-4">
                                Our Vision
                            </h2>
                            
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Healthcare, <br /> made more human.
                            </h3>
                            
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                To build a future where healthcare is proactive rather than reactive, personalized rather than one-size-fits-all, and accessible to everyone.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#fd5800] to-[#ff8c42] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#fd5800]/5 rounded-full blur-3xl group-hover:bg-[#fd5800]/10 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-[#fd5800]/10 flex items-center justify-center mb-8 group-hover:bg-[#fd5800] transition-colors duration-500">
                                <Target className="w-8 h-8 text-[#fd5800] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-sm font-bold tracking-widest text-[#5301ab] uppercase mb-4">
                                Our Mission
                            </h2>
                            
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Empowering smarter <br /> health decisions.
                            </h3>
                            
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                To leverage technology, data, innovation, and human expertise to create a connected healthcare ecosystem that enables people to make smarter health decisions every day.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;