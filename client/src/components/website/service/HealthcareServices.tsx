import React from 'react';
import { 
    Stethoscope, 
    ShieldCheck, 
    TestTube, 
    Activity, 
    Apple, 
    Users, 
    HeartHandshake, 
    Ambulance, 
    Smartphone 
} from 'lucide-react';

const servicesData = [
    {
        num: '01',
        title: 'Doctor Consultation',
        description: 'Access medical consultations and professional healthcare guidance for your everyday health needs.',
        tags: ['General health concerns', 'Specialist consultations', 'Follow-ups', 'Second opinions'],
        icon: Stethoscope,
        accent: 'from-[#5301ab] to-[#8a2be2]'
    },
    {
        num: '02',
        title: 'Preventive Health Checkups',
        description: 'Understand your health before problems become bigger concerns. Our preventive programs can include health assessments, laboratory testing and condition-focused screening packages.',
        tags: ['Individuals', 'Families', 'Seniors', 'Corporate employees'],
        icon: ShieldCheck,
        accent: 'from-[#fd5800] to-[#ff8c42]'
    },
    {
        num: '03',
        title: 'Diagnostics & Health Assessments',
        description: 'Make diagnostic healthcare more accessible through coordinated testing and health assessment services. From routine investigations to preventive screening, Zorocare helps simplify the process.',
        tags: [],
        icon: TestTube,
        accent: 'from-[#5301ab] to-[#fd5800]'
    },
    {
        num: '04',
        title: 'Chronic Care Management',
        description: 'Living with a chronic condition requires consistency, not occasional attention. Our care programs can support ongoing health management through structured monitoring, professional guidance and coordinated healthcare support.',
        tags: [],
        icon: Activity,
        accent: 'from-[#fd5800] to-[#ff8c42]'
    },
    {
        num: '05',
        title: 'Wellness Programs',
        description: 'Build healthier habits with structured wellness support. Programs can focus on areas such as:',
        tags: ['Weight management', 'Nutrition', 'Fitness', 'Sleep', 'Stress management', 'Lifestyle improvement', 'Preventive health'],
        icon: Apple,
        accent: 'from-[#5301ab] to-[#8a2be2]'
    },
    {
        num: '06',
        title: 'Family Healthcare',
        description: 'Manage healthcare needs for your family from one connected ecosystem. Coordinate care, appointments, health information and ongoing support for your loved ones.',
        tags: [],
        icon: Users,
        accent: 'from-[#5301ab] to-[#fd5800]'
    },
    {
        num: '07',
        title: 'Senior Care Support',
        description: 'Healthcare support designed around the needs of ageing family members. Services may include preventive monitoring, appointment coordination, healthcare assistance and ongoing family communication.',
        tags: [],
        icon: HeartHandshake,
        accent: 'from-[#fd5800] to-[#ff8c42]'
    },
    {
        num: '08',
        title: 'Emergency & Hospital Assistance',
        description: 'When healthcare becomes urgent, coordination matters. Zorocare can help families navigate hospital visits, healthcare coordination and treatment-related requirements.',
        tags: [],
        icon: Ambulance,
        accent: 'from-[#e11d48] to-[#fd5800]'
    },
    {
        num: '09',
        title: 'Health Monitoring',
        description: 'Turn health data into greater awareness. With connected technologies such as Zorovit Smart Ring, users can monitor selected wellness indicators and understand patterns over time.',
        tags: [],
        icon: Smartphone,
        accent: 'from-[#5301ab] to-[#8a2be2]'
    }
];

const HealthcareServices: React.FC = () => {
    return (
        // REMOVED overflow-hidden here so position: sticky works perfectly
        <section className="relative w-full bg-[#faf9fb] py-16 lg:py-24">
            
            {/* Ambient Background Glows - Wrapped in overflow-hidden to prevent horizontal scroll */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5301ab]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    
                    {/* --- LEFT SIDE: Sticky Image & Header --- */}
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-28 h-auto lg:h-[calc(100vh-8rem)] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group flex flex-col">
                        
                        {/* Sticky Image */}
                        <img 
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="ZoroCare Healthcare Services" 
                            className="w-full h-full object-cover min-h-[400px] lg:min-h-full transition-transform duration-700 group-hover:scale-105 flex-grow"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#16002c] via-[#16002c]/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5301ab]/40 to-[#fd5800]/40 mix-blend-overlay"></div>

                        {/* Sticky Text Content */}
                        <div className="absolute bottom-0 left-0 w-full p-10 lg:p-12">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-1 bg-gradient-to-r from-[#fd5800] to-[#ff8c42] rounded-full"></div>
                                <h2 className="text-sm font-bold tracking-widest text-[#fd5800] uppercase">
                                    Our Services
                                </h2>
                            </div>
                            
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-4">
                                Connected care <br />
                                for every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5800] to-[#ff8c42]">need.</span>
                            </h3>
                            <p className="text-gray-300 font-medium text-lg leading-relaxed">
                                Scroll to explore our complete ecosystem of health and wellness solutions designed around you and your family.
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Scrollable Services List --- */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-6 lg:gap-8 pb-10">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                                >
                                    {/* Hover Top Gradient Line */}
                                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                    {/* Large Background Watermark Number */}
                                    <div className="absolute -top-6 -right-4 text-[120px] font-black text-gray-50 opacity-60 group-hover:text-[#5301ab]/5 transition-colors duration-500 pointer-events-none select-none leading-none">
                                        {service.num}
                                    </div>

                                    <div className="relative z-10">
                                        
                                        {/* Header: Icon & Title */}
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#5301ab]/10 transition-colors duration-300">
                                                <Icon className="w-8 h-8 text-[#5301ab] group-hover:text-[#fd5800] transition-colors duration-300" strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <span className="text-[#fd5800] font-bold text-sm mb-1 block">Service {service.num}</span>
                                                <h4 className="text-2xl font-extrabold text-gray-900 leading-tight">
                                                    {service.title}
                                                </h4>
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium mb-6">
                                            {service.description}
                                        </p>

                                        {/* Tags / Designed For */}
                                        {service.tags.length > 0 && (
                                            <div className="pt-6 border-t border-gray-100">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                                    {service.title === 'Wellness Programs' ? 'Programs focus on:' : 'Designed for:'}
                                                </p>
                                                <div className="flex flex-wrap gap-2.5">
                                                    {service.tags.map((tag, i) => (
                                                        <span 
                                                            key={i} 
                                                            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full hover:border-[#5301ab]/30 hover:bg-[#5301ab]/5 hover:text-[#5301ab] transition-colors cursor-default"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HealthcareServices;