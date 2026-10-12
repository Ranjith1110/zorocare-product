import React from 'react';
import { Eye, Target, CheckCircle2 } from 'lucide-react';

const missionPoints = [
    'Connecting people with healthcare services',
    'Encouraging preventive health management',
    'Supporting families across distances',
    'Enabling smarter health monitoring',
    'Simplifying healthcare coordination',
    'Building technology around real human needs'
];

const VisionMission: React.FC = () => {
    return (
        <section className="relative w-full bg-[#faf9fb] py-20 lg:py-32 overflow-hidden">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5301ab]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* --- LEFT: VISION (Dark Premium Card) --- */}
                    <div className="lg:col-span-5 relative group">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5301ab] to-[#fd5800] rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative h-full bg-[#16002c] rounded-[2.5rem] p-10 lg:p-12 overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-center">

                            {/* Internal Ambient Orbs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5301ab] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fd5800] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500">
                                    <Eye className="w-8 h-8 text-white" strokeWidth={1.5} />
                                </div>

                                <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase mb-4 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-[#fd5800] rounded-full"></span>
                                    Our Vision
                                </h2>

                                <h3 className="text-3xl lg:text-[32px] font-extrabold text-white mb-6 leading-tight tracking-tight">
                                    A World Where Healthcare Is Connected, Proactive and Personal.
                                </h3>

                                <div className="space-y-4 text-gray-300 text-lg leading-relaxed font-medium">
                                    <p>
                                        We envision a future where individuals don't have to navigate healthcare alone and families don't have to wait for a health crisis before taking action.
                                    </p>
                                    <p>
                                        Our goal is to make preventive health, family care and intelligent health management a natural part of everyday life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: MISSION (Bright Structural Card) --- */}
                    <div className="lg:col-span-7 relative group">
                        <div className="h-full bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col justify-center">

                            {/* Decorative Background Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#fd5800]/5 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#fd5800]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Target className="w-8 h-8 text-[#fd5800]" strokeWidth={1.5} />
                                </div>

                                <h2 className="text-sm font-bold tracking-widest text-[#5301ab] uppercase mb-4 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-[#5301ab] rounded-full"></span>
                                    Our Mission
                                </h2>

                                <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                                    To Make Better Healthcare Easier to Access, Understand and Manage.
                                </h3>

                                <p className="text-gray-600 text-xl leading-relaxed font-semibold mb-8">
                                    We work towards this by:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {missionPoints.map((point, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#5301ab]/20 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="mt-0.5 shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-[#fd5800]" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-gray-700 font-medium leading-snug">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;