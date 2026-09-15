import React from 'react';
import { HeartPulse, Moon, Footprints, Thermometer } from 'lucide-react';

const metrics = [
    {
        id: 'heart-rate',
        label: 'Heart Rate',
        value: '72',
        unit: 'BPM',
        status: 'Normal',
        icon: HeartPulse,
        iconColor: 'text-red-500',
        iconBg: 'bg-red-50',
        accent: 'hover:border-red-200'
    },
    {
        id: 'sleep',
        label: 'Sleep',
        value: '8h 12m',
        unit: '',
        status: 'Normal',
        icon: Moon,
        iconColor: 'text-[#5301ab]',
        iconBg: 'bg-[#5301ab]/10',
        accent: 'hover:border-[#5301ab]/30'
    },
    {
        id: 'steps',
        label: 'Steps',
        value: '8,642',
        unit: '',
        status: 'Normal',
        icon: Footprints,
        iconColor: 'text-[#fd5800]',
        iconBg: 'bg-[#fd5800]/10',
        accent: 'hover:border-[#fd5800]/30'
    },
    {
        id: 'temperature',
        label: 'Temperature',
        value: '36.6',
        unit: '°C',
        status: 'Normal',
        icon: Thermometer,
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50',
        accent: 'hover:border-blue-200'
    }
];

const SmartRingDashboard: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
            
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5301ab]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    
                    {/* --- LEFT SIDE: Content --- */}
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-[#5301ab] to-[#fd5800] rounded-full"></div>
                            <h2 className="text-sm font-bold tracking-widest text-[#5301ab] uppercase">
                                Your Health Dashboard
                            </h2>
                        </div>
                        
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
                            Understand your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                                body better.
                            </span>
                        </h3>
                        
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10">
                            Get meaningful insights from your daily health and activity data in one simple dashboard.
                        </p>
                        
                        <button className="bg-white border-2 border-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-[15px] hover:border-[#5301ab] hover:text-[#5301ab] transition-colors shadow-sm flex items-center gap-2 w-max">
                            Explore the App
                        </button>
                    </div>

                    {/* --- RIGHT SIDE: Dashboard Metrics Grid --- */}
                    <div className="relative">
                        {/* Glow behind cards */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5301ab]/10 to-[#fd5800]/10 rounded-[3rem] blur-2xl transform scale-90"></div>
                        
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {metrics.map((metric, index) => {
                                const Icon = metric.icon;
                                // Add a slight vertical offset to the right column for a staggered masonry look
                                const isRightColumn = index % 2 !== 0;
                                
                                return (
                                    <div 
                                        key={metric.id}
                                        className={`bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${metric.accent} ${isRightColumn ? 'sm:mt-8' : ''}`}
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={`w-14 h-14 rounded-2xl ${metric.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                                <Icon className={`w-7 h-7 ${metric.iconColor}`} strokeWidth={2} />
                                            </div>
                                            <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">
                                                {metric.status}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-gray-500 font-semibold text-sm mb-1">
                                                {metric.label}
                                            </p>
                                            <div className="flex items-baseline gap-1">
                                                <h4 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                                                    {metric.value}
                                                </h4>
                                                {metric.unit && (
                                                    <span className="text-gray-500 font-semibold text-sm">
                                                        {metric.unit}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SmartRingDashboard;