import React from 'react';
import { Activity, Cpu, HeartHandshake } from 'lucide-react';

const pillars = [
    {
        id: 'healthcare',
        title: 'Healthcare',
        description: 'Trusted care and health services designed around real patient needs.',
        icon: Activity,
        accentColor: 'from-[#5301ab] to-[#8a2be2]', // Purple gradient
        lightBg: 'bg-[#5301ab]/10',
        textColor: 'text-[#5301ab]'
    },
    {
        id: 'technology',
        title: 'Technology',
        description: 'Smart, secure technology that makes healthcare more convenient and connected.',
        icon: Cpu,
        accentColor: 'from-[#fd5800] to-[#ff8c42]', // Orange gradient
        lightBg: 'bg-[#fd5800]/10',
        textColor: 'text-[#fd5800]'
    },
    {
        id: 'compassion',
        title: 'Compassion',
        description: 'A human-first approach that treats every person with empathy, dignity, and respect.',
        icon: HeartHandshake,
        accentColor: 'from-[#5301ab] to-[#fd5800]', // Mixed brand gradient
        lightBg: 'bg-gradient-to-br from-[#5301ab]/10 to-[#fd5800]/10',
        textColor: 'text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]'
    }
];

const CorePillars: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#5301ab]/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#fd5800]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-sm font-bold tracking-widest text-[#5301ab] uppercase mb-4">
                        What We Bring Together
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Three things. <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                            One complete experience.
                        </span>
                    </h3>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div 
                                key={pillar.id}
                                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Top Gradient Line (Animates on hover) */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${pillar.accentColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Icon Container */}
                                <div className={`w-16 h-16 rounded-2xl ${pillar.lightBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className={`w-8 h-8 ${pillar.id === 'compassion' ? 'text-[#5301ab]' : pillar.textColor}`} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h4 className={`text-2xl font-bold mb-4 ${pillar.id === 'compassion' ? pillar.textColor : 'text-gray-900'}`}>
                                    {pillar.title}
                                </h4>
                                <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-medium">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CorePillars;