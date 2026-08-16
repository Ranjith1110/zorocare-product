import type { FC, ReactNode } from 'react';
import {
    FiArrowLeft, FiCalendar, FiCheckCircle,
    FiShield, FiArrowUpRight, FiActivity, FiUser,
    FiFileText, FiPhoneCall, FiGrid, FiHeart, FiMoon, FiAward
} from 'react-icons/fi';
import { TbBrain } from "react-icons/tb";

import Button from '../../common/Button';

// --- Interfaces ---
interface Props {
    onBack: () => void;
}

interface KPI {
    title: string; value: string; trend: string; icon: ReactNode; color: string; bg: string;
}

interface WellnessService {
    title: string; description: string; image: string; icon: ReactNode; tags: { label: string; color: string; bg: string }[]; color: string; bg: string;
}

interface FeaturedProgram {
    title: string; description: string; image: string; badge: string; badgeColor: string; duration: string; mode: string; price: string;
}

interface Step {
    id: number; title: string; description: string; icon: ReactNode;
}

interface ValueProp {
    title: string; description: string; icon: ReactNode; color: string; bg: string;
}

const CDWellnessServicesOtherServices: FC<Props> = ({ onBack }) => {

    const topKPIs: KPI[] = [
        { title: 'Total Bookings', value: '426', trend: '18.6%', icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Active Programs', value: '128', trend: '16.2%', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Happy Members', value: '2,845', trend: '14.8%', icon: <FiUser className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Amount Spent', value: '₹12.6 Lakhs', trend: '15.3%', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const wellnessServices: WellnessService[] = [
        {
            title: 'Yoga & Fitness',
            description: 'Personalized yoga and fitness sessions for a stronger, healthier you.',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
            icon: <FiActivity className="w-5 h-5" />,
            color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10',
            tags: [
                { label: 'Stress Relief', color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
                { label: 'Flexibility', color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' }
            ]
        },
        {
            title: 'Nutrition & Diet Plans',
            description: 'Expert nutrition guidance and custom diet plans for better health.',
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
            icon: <FiHeart className="w-5 h-5" />,
            color: 'text-emerald-500', bg: 'bg-emerald-50',
            tags: [
                { label: 'Weight Management', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Healthy Living', color: 'text-emerald-600', bg: 'bg-emerald-50' }
            ]
        },
        {
            title: 'Mental Wellness',
            description: 'Counseling and therapy sessions to reduce stress and improve mental well-being.',
            image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=250&fit=crop',
            icon: <TbBrain className="w-5 h-5" />,
            color: 'text-blue-500', bg: 'bg-blue-50',
            tags: [
                { label: 'Stress Management', color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Mindfulness', color: 'text-blue-600', bg: 'bg-blue-50' }
            ]
        },
        {
            title: 'Preventive Health Programs',
            description: 'Preventive care programs designed to keep you healthy and disease-free.',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop',
            icon: <FiShield className="w-5 h-5" />,
            color: 'text-red-500', bg: 'bg-red-50',
            tags: [
                { label: 'Health Screening', color: 'text-red-600', bg: 'bg-red-50' },
                { label: 'Early Detection', color: 'text-red-600', bg: 'bg-red-50' }
            ]
        },
        {
            title: 'Sleep & Lifestyle Coaching',
            description: 'Better sleep, better life. Personalized coaching for improved sleep and lifestyle.',
            image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?w=400&h=250&fit=crop',
            icon: <FiMoon className="w-5 h-5" />,
            color: 'text-indigo-500', bg: 'bg-indigo-50',
            tags: [
                { label: 'Better Sleep', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Lifestyle Balance', color: 'text-indigo-600', bg: 'bg-indigo-50' }
            ]
        }
    ];

    const featuredPrograms: FeaturedProgram[] = [
        {
            title: 'Weight Management Program',
            description: '12-week program to achieve your ideal weight with expert guidance.',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5adee9f50?w=400&h=250&fit=crop',
            badge: 'Popular', badgeColor: 'bg-[#5301ab]',
            duration: '12 Weeks', mode: 'Online + Offline', price: '₹4,999'
        },
        {
            title: 'Stress Relief & Mindfulness',
            description: 'Reduce stress and improve mental clarity with mindfulness techniques.',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
            badge: 'Best for Stress', badgeColor: 'bg-emerald-500',
            duration: '8 Weeks', mode: 'Online', price: '₹3,499'
        },
        {
            title: 'Diabetes Reversal Program',
            description: 'Clinical nutrition and lifestyle program to manage and reverse diabetes.',
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
            badge: 'Most Loved', badgeColor: 'bg-orange-500',
            duration: '16 Weeks', mode: 'Online + Offline', price: '₹6,999'
        },
        {
            title: 'Better Sleep Program',
            description: 'Improve sleep quality and wake up refreshed every day.',
            image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?w=400&h=250&fit=crop',
            badge: 'New Launch', badgeColor: 'bg-blue-500',
            duration: '6 Weeks', mode: 'Online', price: '₹2,999'
        }
    ];

    const bookingSteps: Step[] = [
        { id: 1, title: 'Choose a Service', description: 'Select the wellness service you want to book.', icon: <FiGrid className="w-5 h-5" /> },
        { id: 2, title: 'Select Provider', description: 'Choose from verified wellness experts.', icon: <FiUser className="w-5 h-5" /> },
        { id: 3, title: 'Choose Date & Time', description: 'Pick a convenient date and time.', icon: <FiCalendar className="w-5 h-5" /> },
        { id: 4, title: 'Confirm Booking', description: 'Review and confirm your booking.', icon: <FiFileText className="w-5 h-5" /> },
        { id: 5, title: 'Get Confirmation', description: 'Receive booking confirmation and details.', icon: <FiCheckCircle className="w-5 h-5" /> },
    ];

    const whyChooseProps: ValueProp[] = [
        { title: 'Expert Guidance', description: 'Certified wellness experts', icon: <FiAward />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Proven Results', description: 'Trusted by thousands', icon: <FiShield />, color: 'text-red-500', bg: 'bg-red-50' },
        { title: 'Personalized Plans', description: 'Tailored to your needs', icon: <FiActivity />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Flexible Options', description: 'Online & offline sessions', icon: <FiCalendar />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Holistic Approach', description: 'Mind, body & lifestyle', icon: <FiHeart />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Ongoing Support', description: 'Continuous care & support', icon: <FiCheckCircle />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 hover:text-[#5301ab] hover:border-[#5301ab]/30 transition-colors shadow-sm shrink-0">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="w-12 h-12 rounded-md bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center shrink-0 hidden md:flex">
                        <FiHeart className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Wellness Services</h2>
                        <p className="text-[13px] text-gray-500 font-medium mt-1">Holistic wellness programs to help employees achieve a healthier mind, body and lifestyle.</p>
                    </div>
                </div>
            </div>

            {/* ================= TOP KPIs ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {topKPIs.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                            {kpi.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">{kpi.title}</p>
                            <h3 className="font-heading text-xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                            <p className={`text-[9px] font-bold flex items-center gap-0.5 mt-1.5 ${kpi.trend.includes('-') ? 'text-red-500' : 'text-emerald-500'}`}>
                                <FiArrowUpRight className="w-3 h-3" /> {kpi.trend} <span className="text-gray-400 font-medium font-sans ml-0.5">vs last month</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= MAIN CONTENT GRID ================= */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* LEFT COLUMN (Span 8) */}
                <div className="xl:col-span-8 space-y-6">

                    {/* Wellness Services Row */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Wellness Services</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All Services <FiArrowUpRight className="w-3.5 h-3.5" /></a>
                        </div>

                        <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {wellnessServices.map((service, idx) => (
                                <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] flex flex-col min-w-[260px] max-w-[280px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="relative h-[140px] w-full overflow-hidden bg-gray-50">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className={`absolute -bottom-5 left-5 w-12 h-12 rounded-md flex items-center justify-center shadow-md bg-white border border-gray-50 z-10 ${service.color}`}>
                                            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${service.bg}`}>
                                                {service.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 p-5 flex flex-col flex-1">
                                        <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-2">{service.title}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4 flex-1">{service.description}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-5 min-h-[24px]">
                                            {service.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className={`px-2 py-1 rounded-md text-[9px] font-bold tracking-wide ${tag.bg} ${tag.color}`}>
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>

                                        <Button variant="primary" className="w-full mt-auto !bg-[#5301ab] hover:!bg-[#43008a] !py-2 !text-[12px] transition-colors">
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Wellness Programs */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Featured Wellness Programs</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All Programs</a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">
                            {featuredPrograms.map((program, idx) => (
                                <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="relative h-[130px] w-full overflow-hidden bg-gray-100">
                                        <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className={`absolute top-3 left-3 text-white text-[9px] font-bold px-2.5 py-1 rounded-md shadow-sm ${program.badgeColor}`}>
                                            {program.badge}
                                        </span>
                                    </div>

                                    <div className="p-4 flex flex-col flex-1">
                                        <h4 className="font-bold text-[14px] text-gray-900 leading-tight mb-1 truncate" title={program.title}>{program.title}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium mb-3 min-h-[32px]">{program.description}</p>

                                        <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-gray-600">
                                            <span className="flex items-center gap-1"><FiCalendar className="w-3.5 h-3.5 text-gray-400" /> {program.duration}</span>
                                            <span className="flex items-center gap-1"><FiActivity className="w-3.5 h-3.5 text-gray-400" /> {program.mode}</span>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3 mb-3">
                                            <span className="font-heading font-bold text-[18px] text-[#5301ab] leading-none">{program.price}</span>
                                        </div>

                                        <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] !py-2 !text-[12px] transition-colors">
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN (Span 4) */}
                <div className="xl:col-span-4 space-y-6">

                    {/* How to Book Sidebar */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] relative">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">How to Book Wellness Services</h3>

                        <div className="relative">
                            <div className="absolute left-[23px] top-6 bottom-6 w-[1px] bg-gray-100 z-0 border-l border-dashed border-gray-200"></div>

                            <div className="space-y-6 relative z-10">
                                {bookingSteps.map((step, idx) => {
                                    const stepColors = [
                                        { bg: 'bg-[#5301ab]/10', color: 'text-[#5301ab]' },
                                        { bg: 'bg-emerald-50', color: 'text-emerald-500' },
                                        { bg: 'bg-orange-50', color: 'text-orange-500' },
                                        { bg: 'bg-blue-50', color: 'text-blue-500' },
                                        { bg: 'bg-[#5301ab]/10', color: 'text-[#5301ab]' }
                                    ];
                                    const stepStyle = stepColors[idx] || stepColors[0];

                                    return (
                                        <div key={idx} className="flex gap-4 group cursor-default">
                                            <div className="relative shrink-0">
                                                <div className={`w-12 h-12 rounded-md flex items-center justify-center shadow-sm border border-white transition-transform group-hover:scale-105 ${stepStyle.bg} ${stepStyle.color}`}>
                                                    {step.icon}
                                                </div>
                                                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-gray-700">
                                                    {step.id}
                                                </div>
                                            </div>
                                            <div className="pt-1.5">
                                                <h4 className="font-bold text-[13px] text-gray-900 leading-tight mb-1">{step.title}</h4>
                                                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Our Wellness Services? */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">Why Choose Our Wellness Services?</h3>

                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            {whyChooseProps.map((prop, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${prop.bg} ${prop.color}`}>
                                        {prop.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[11px] text-gray-900 leading-tight mb-0.5">{prop.title}</h4>
                                        <p className="text-[9px] text-gray-500 font-medium">{prop.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Need Help Banner */}
                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 p-6 rounded-md border border-purple-100/50 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[180px]">
                        <div className="relative z-10 w-[65%] text-left">
                            <h3 className="font-bold text-gray-900 text-[16px] mb-2 leading-tight">Need Help?</h3>
                            <p className="text-[11px] text-gray-600 font-medium mb-5 leading-relaxed">Our wellness team is available 24x7 to assist you with bookings and program related queries.</p>
                            <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !py-2.5 !text-[12px] shadow-sm w-fit" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Contact Support
                            </Button>
                        </div>
                        {/* Decorative Support Illustration */}
                        <div className="absolute -right-4 bottom-0 w-[55%] pointer-events-none drop-shadow-xl">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CDWellnessServicesOtherServices;