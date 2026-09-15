import React from 'react';
import { 
    HeartPulse, 
    Moon, 
    Footprints, 
    Thermometer, 
    Sparkles, 
    BatteryCharging, 
    ArrowRight,
    Activity
} from 'lucide-react';

const features = [
    { text: '24/7 heart rate monitoring', icon: HeartPulse },
    { text: 'Sleep tracking and analysis', icon: Moon },
    { text: 'Activity and step tracking', icon: Footprints },
    { text: 'Body temperature monitoring', icon: Thermometer },
    { text: 'Personalized health insights', icon: Sparkles },
    { text: 'Long-lasting battery', icon: BatteryCharging },
];

const SmartRingFeatures: React.FC = () => {
    return (
        <div className="w-full bg-[#faf9fb] overflow-hidden">
            
            {/* --- TOP SECTION: Features & UI Mockup --- */}
            <section className="relative py-20 lg:py-32">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                        
                        {/* LEFT: Text & Features List */}
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-12 h-1 bg-gradient-to-r from-[#5301ab] to-[#fd5800] rounded-full"></div>
                                <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase">
                                    Smart Health Technology
                                </h2>
                            </div>
                            
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
                                Small ring. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                                    Powerful insights.
                                </span>
                            </h3>
                            
                            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">
                                Designed to fit comfortably into your everyday life while continuously helping you understand important health signals.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-[#5301ab] group-hover:shadow-md transition-all duration-300">
                                                <Icon className="w-5 h-5 text-[#5301ab] group-hover:text-[#fd5800] transition-colors duration-300" strokeWidth={2} />
                                            </div>
                                            <span className="text-gray-800 font-semibold text-[15px] pt-2">
                                                {feature.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT: App UI Mockup */}
                        <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#5301ab]/20 to-[#fd5800]/20 rounded-full blur-[80px]"></div>
                            
                            {/* Mobile App Card */}
                            <div className="relative w-full max-w-[400px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white p-6 sm:p-8 hover:-translate-y-2 transition-transform duration-500">
                                
                                <div className="flex justify-between items-center mb-8">
                                    <h4 className="font-bold text-gray-800">Today's Health Score</h4>
                                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">
                                        Excellent
                                    </span>
                                </div>

                                <div className="flex items-end gap-2 mb-8">
                                    <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#8a2be2] leading-none tracking-tighter">
                                        92
                                    </h2>
                                    <div className="w-3 h-3 rounded-full bg-green-500 mb-2 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                </div>

                                {/* Smooth Curve Chart */}
                                <div className="relative w-full h-32 mb-4">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5301ab" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 35 Q 25 10, 50 25 T 100 5 L100 40 L0 40 Z" fill="url(#scoreGradient)" />
                                        <path d="M0 35 Q 25 10, 50 25 T 100 5" fill="none" stroke="#5301ab" strokeWidth="2" strokeLinecap="round" />
                                        <circle cx="100" cy="5" r="2.5" fill="#fd5800" className="animate-pulse" />
                                    </svg>
                                </div>

                                {/* Timeline Labels */}
                                <div className="flex justify-between text-[11px] font-bold text-gray-400 mb-8 border-t border-gray-100 pt-3">
                                    <span>6 AM</span>
                                    <span>12 PM</span>
                                    <span>6 PM</span>
                                    <span className="text-[#5301ab]">Now</span>
                                </div>

                                {/* Bottom Metric Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Footprints className="w-4 h-4 text-[#fd5800]" />
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Activity</span>
                                        </div>
                                        <p className="font-extrabold text-gray-900 text-lg">8,642 <span className="text-xs text-gray-500 font-medium">steps</span></p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Moon className="w-4 h-4 text-[#5301ab]" />
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Sleep</span>
                                        </div>
                                        <p className="font-extrabold text-gray-900 text-lg">8h 12m</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- BOTTOM SECTION: Call To Action Banner --- */}
            <section className="relative w-full py-16 lg:py-20 mt-10">
                <div className="absolute inset-0 bg-[#16002c]"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#5301ab]/20 blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#fd5800]/20 blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                        <Activity className="w-8 h-8 text-[#fd5800]" />
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        Make every day a <br className="hidden sm:block"/> healthier day.
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-10 font-medium">
                        Stay connected to your health with the ZoroCare Smart Ring.
                    </p>
                    
                    <button className="bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-10 py-4 rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity shadow-lg shadow-[#fd5800]/20 flex items-center gap-2 mx-auto">
                        Get Your Smart Ring
                        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default SmartRingFeatures;