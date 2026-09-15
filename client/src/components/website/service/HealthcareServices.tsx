import React from 'react';
import { 
    Stethoscope, 
    Pill, 
    TestTube, 
    Home, 
    Brain, 
    Apple, 
    Activity, 
    ShieldPlus, 
    Ambulance 
} from 'lucide-react';

const services = [
    {
        id: 'doctor-consultation',
        title: 'Doctor Consultation',
        description: 'Expert medical advice from certified doctors, available anytime, anywhere.',
        icon: Stethoscope,
        accent: 'from-[#5301ab] to-[#8a2be2]'
    },
    {
        id: 'pharmacy',
        title: 'Pharmacy',
        description: 'Get your prescribed medicines delivered quickly and safely right to your doorstep.',
        icon: Pill,
        accent: 'from-[#fd5800] to-[#ff8c42]'
    },
    {
        id: 'diagnostics',
        title: 'Diagnostics',
        description: 'Accurate and timely lab tests with the convenience of home sample collection.',
        icon: TestTube,
        accent: 'from-[#5301ab] to-[#fd5800]'
    },
    {
        id: 'home-healthcare',
        title: 'Home Healthcare',
        description: 'Professional nursing and supportive medical care in the comfort of your home.',
        icon: Home,
        accent: 'from-[#fd5800] to-[#ff8c42]'
    },
    {
        id: 'mental-wellness',
        title: 'Mental Wellness',
        description: 'Compassionate counseling and therapy dedicated to your mental well-being.',
        icon: Brain,
        accent: 'from-[#5301ab] to-[#8a2be2]'
    },
    {
        id: 'nutrition-wellness',
        title: 'Nutrition & Wellness',
        description: 'Personalized diet plans and wellness coaching to help you build a healthier lifestyle.',
        icon: Apple,
        accent: 'from-[#5301ab] to-[#fd5800]'
    },
    {
        id: 'chronic-care',
        title: 'Chronic Care',
        description: 'Continuous monitoring and personalized management for long-term health conditions.',
        icon: Activity,
        accent: 'from-[#5301ab] to-[#8a2be2]'
    },
    {
        id: 'insurance-support',
        title: 'Insurance Support',
        description: 'Hassle-free claims guidance and dedicated assistance for your health insurance needs.',
        icon: ShieldPlus,
        accent: 'from-[#fd5800] to-[#ff8c42]'
    },
    {
        id: 'emergency-care',
        title: 'Emergency Care',
        description: '24/7 rapid response and critical care support when you need it the most.',
        icon: Ambulance,
        accent: 'from-[#e11d48] to-[#fd5800]' // A slightly red-tinted gradient for emergency
    }
];

const HealthcareServices: React.FC = () => {
    return (
        <section className="relative w-full bg-[#faf9fb] py-20 lg:py-32 overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5301ab]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-[#5301ab] uppercase mb-4">
                        Our Offerings
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Comprehensive <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                            Healthcare Services
                        </span>
                    </h3>
                    <p className="text-gray-500 text-lg font-medium">
                        Explore our complete ecosystem of health and wellness solutions designed to give you and your family the best care possible.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={service.id}
                                className="group relative bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                {/* Hover Gradient Line at the top */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#5301ab]/5 transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-[#5301ab] group-hover:text-[#fd5800] transition-colors duration-300" strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#5301ab] transition-colors duration-300 leading-tight">
                                            {service.title}
                                        </h4>
                                    </div>
                                    
                                    <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                                
                                {/* Bottom right subtle accent circle */}
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#fd5800]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default HealthcareServices;