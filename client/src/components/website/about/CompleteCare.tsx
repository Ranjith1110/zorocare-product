import React from 'react';
import { Baby, User, Users, ShieldPlus } from 'lucide-react';

const stages = [
    {
        id: '01',
        title: 'Early Life',
        description: 'Supporting healthy beginnings with care, guidance, and prevention.',
        icon: Baby,
    },
    {
        id: '02',
        title: 'Adulthood',
        description: 'Helping you stay proactive about your health through every busy stage of life.',
        icon: User,
    },
    {
        id: '03',
        title: 'Family Care',
        description: 'Bringing healthcare closer to the people who matter most.',
        icon: Users,
    },
    {
        id: '04',
        title: 'Healthy Aging',
        description: 'Supporting independence, wellbeing, and quality of life as you grow older.',
        icon: ShieldPlus,
    }
];

const CompleteCare: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
            
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase mb-4">
                        Complete Care
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">every stage of life</span>
                    </h3>
                    <p className="text-gray-500 text-lg md:text-xl font-medium">
                        Wherever you are in your journey, ZoroCare is designed to support your health and wellbeing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stages.map((stage, index) => {
                        const Icon = stage.icon;
                        return (
                            <div 
                                key={stage.id}
                                className="group relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-6 text-9xl font-black text-gray-50 opacity-50 group-hover:text-[#5301ab]/5 transition-colors duration-500 pointer-events-none select-none">
                                    {stage.id}
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5301ab] to-[#fd5800] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-[#5301ab]/10 flex items-center justify-center mb-8 group-hover:bg-[#5301ab] transition-colors duration-500">
                                        <Icon className="w-7 h-7 text-[#5301ab] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                    </div>

                                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5301ab] transition-colors duration-300">
                                        {stage.title}
                                    </h4>
                                    
                                    <p className="text-gray-600 text-base leading-relaxed font-medium">
                                        {stage.description}
                                    </p>
                                </div>
                                
                                {index !== stages.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-0"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CompleteCare;