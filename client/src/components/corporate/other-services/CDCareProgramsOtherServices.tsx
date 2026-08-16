import type { FC, ReactNode } from 'react';
import {
    FiArrowLeft, FiCalendar, FiCheckCircle,
    FiShield, FiArrowUpRight, FiActivity, FiUser,
    FiFileText, FiPhoneCall, FiGrid, FiHeart,
    FiLock, FiAward, FiMapPin, FiUsers,
    FiArrowRight
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

interface CareProgram {
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

const CDCareProgramsOtherServices: FC<Props> = ({ onBack }) => {

    const topKPIs: KPI[] = [
        { title: 'Total Bookings', value: '362', trend: '18.6%', icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Active Enrollments', value: '218', trend: '16.2%', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Lives Impacted', value: '1,845', trend: '14.8%', icon: <FiUsers className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Amount Spent', value: '₹9.8 Lakhs', trend: '15.3%', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const explorePrograms: CareProgram[] = [
        {
            title: 'Elder Care Program',
            description: 'Comprehensive care for seniors including health monitoring, assistance & companionship.',
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=250&fit=crop',
            icon: <FiUsers className="w-5 h-5" />,
            color: 'text-emerald-600', bg: 'bg-emerald-50',
            tags: [
                { label: 'Senior Support', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Daily Assistance', color: 'text-emerald-600', bg: 'bg-emerald-50' }
            ]
        },
        {
            title: 'Mother & Child Care',
            description: 'Complete care for mothers and children from prenatal to postnatal & beyond.',
            image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=250&fit=crop',
            icon: <FiHeart className="w-5 h-5" />,
            color: 'text-pink-500', bg: 'bg-pink-50',
            tags: [
                { label: 'Prenatal Care', color: 'text-pink-600', bg: 'bg-pink-50' },
                { label: 'Postnatal Care', color: 'text-pink-600', bg: 'bg-pink-50' }
            ]
        },
        {
            title: 'Chronic Care Management',
            description: 'Personalized support for managing chronic conditions and improving quality of life.',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop',
            icon: <FiActivity className="w-5 h-5" />,
            color: 'text-blue-500', bg: 'bg-blue-50',
            tags: [
                { label: 'Chronic Support', color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Health Monitoring', color: 'text-blue-600', bg: 'bg-blue-50' }
            ]
        },
        {
            title: 'Post Hospitalization Care',
            description: 'Recovery support at home with nursing care, physiotherapy and medication management.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            icon: <FiUser className="w-5 h-5" />,
            color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10',
            tags: [
                { label: 'Recovery', color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
                { label: 'Home Care', color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' }
            ]
        },
        {
            title: 'Mental Wellness Program',
            description: 'Counseling, therapy and stress management for a healthier mind and happier life.',
            image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=250&fit=crop',
            icon: <TbBrain className="w-5 h-5" />,
            color: 'text-orange-500', bg: 'bg-orange-50',
            tags: [
                { label: 'Counseling', color: 'text-orange-600', bg: 'bg-orange-50' },
                { label: 'Stress Relief', color: 'text-orange-600', bg: 'bg-orange-50' }
            ]
        }
    ];

    const featuredPrograms: FeaturedProgram[] = [
        {
            title: 'Senior Wellness Program',
            description: 'Health checkups, nutrition, fitness and daily wellness activities.',
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=250&fit=crop',
            badge: 'Popular', badgeColor: 'bg-[#5301ab]',
            duration: '12 Weeks', mode: 'At Home', price: '₹7,999'
        },
        {
            title: 'Prenatal Care Program',
            description: 'Specialized care for a healthy pregnancy and safe delivery.',
            image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=250&fit=crop',
            badge: 'Best for Mothers', badgeColor: 'bg-emerald-500',
            duration: '24 Weeks', mode: 'At Home / Center', price: '₹9,499'
        },
        {
            title: 'Diabetes Care Program',
            description: 'Blood sugar monitoring, diet plan, exercise and expert guidance.',
            image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=250&fit=crop',
            badge: 'Most Loved', badgeColor: 'bg-orange-500',
            duration: '12 Weeks', mode: 'At Home', price: '₹6,499'
        },
        {
            title: 'Rehabilitation Program',
            description: 'Physiotherapy, mobility training and recovery management.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            badge: 'Effective Recovery', badgeColor: 'bg-blue-500',
            duration: '6 Weeks', mode: 'At Home', price: '₹5,999'
        },
        {
            title: 'Stress & Mind Care Program',
            description: 'Therapy, mindfulness and relaxation techniques for stress relief.',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
            badge: 'Mental Wellness', badgeColor: 'bg-purple-500',
            duration: '8 Weeks', mode: 'Online', price: '₹4,499'
        }
    ];

    const bookingSteps: Step[] = [
        { id: 1, title: 'Choose Program', description: 'Select the care program that suits your needs.', icon: <FiGrid className="w-5 h-5" /> },
        { id: 2, title: 'Fill Details', description: 'Provide your details and care requirements.', icon: <FiUser className="w-5 h-5" /> },
        { id: 3, title: 'Select Date & Time', description: 'Choose a convenient date and time.', icon: <FiCalendar className="w-5 h-5" /> },
        { id: 4, title: 'Review & Confirm', description: 'Review program details and confirm booking.', icon: <FiFileText className="w-5 h-5" /> },
        { id: 5, title: 'Get Confirmation', description: 'Receive confirmation and program guidelines.', icon: <FiCheckCircle className="w-5 h-5" /> },
    ];

    const whyChooseProps: ValueProp[] = [
        { title: 'Personalized Care', description: 'Programs tailored to individual needs', icon: <FiUsers />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Flexible Options', description: 'At home or at center as per convenience', icon: <FiCalendar />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Verified Care Experts', description: 'Trained & experienced professionals', icon: <FiAward />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Continuous Support', description: 'Regular follow-ups & progress tracking', icon: <FiShield />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Holistic Approach', description: 'Physical, mental & emotional well-being', icon: <FiActivity />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Trusted & Secure', description: 'Your data and privacy are always protected', icon: <FiLock />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 hover:text-[#5301ab] hover:border-[#5301ab]/30 transition-colors shadow-sm shrink-0">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="w-12 h-12 rounded-md bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center shrink-0 hidden md:flex">
                        <FiHeart className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Care Programs</h2>
                        <p className="text-[13px] text-gray-500 font-medium mt-1">Personalized care programs designed to support your health at every stage of life.</p>
                    </div>
                </div>
            </div>

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

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div className="xl:col-span-8 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Explore Care Programs</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All Programs <FiArrowRight className="w-3.5 h-3.5" /></a>
                        </div>

                        <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {explorePrograms.map((program, idx) => (
                                <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] flex flex-col min-w-[260px] max-w-[280px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="relative h-[140px] w-full overflow-hidden bg-gray-50">
                                        <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className={`absolute -bottom-5 left-5 w-12 h-12 rounded-md flex items-center justify-center shadow-md bg-white border border-gray-50 z-10 ${program.color}`}>
                                            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${program.bg}`}>
                                                {program.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 p-5 flex flex-col flex-1">
                                        <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-2">{program.title}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4 flex-1">{program.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-5 min-h-[24px]">
                                            {program.tags.map((tag, tIdx) => (
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

                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Featured Care Programs</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All <FiArrowRight className="w-3.5 h-3.5" /></a>
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

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3 text-[10px] font-bold text-gray-600">
                                                <span className="flex items-center gap-1"><FiCalendar className="w-3.5 h-3.5 text-gray-400" /> {program.duration}</span>
                                                <span className="flex items-center gap-1"><FiMapPin className="w-3.5 h-3.5 text-gray-400" /> {program.mode}</span>
                                            </div>
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

                <div className="xl:col-span-4 space-y-6">

                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] relative">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">How to Book a Care Program</h3>
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

                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">Why Choose Our Care Programs?</h3>
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

                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 p-6 rounded-md border border-purple-100/50 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[180px]">
                        <div className="relative z-10 w-[65%] text-left">
                            <h3 className="font-bold text-gray-900 text-[16px] mb-2 leading-tight">Need Help?</h3>
                            <p className="text-[11px] text-gray-600 font-medium mb-5 leading-relaxed">Our care team is available 24x7 to assist you with bookings and program related queries.</p>
                            <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !py-2.5 !text-[12px] shadow-sm w-fit" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Contact Support
                            </Button>
                        </div>
                        <div className="absolute -right-4 bottom-0 w-[55%] pointer-events-none drop-shadow-xl">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CDCareProgramsOtherServices;