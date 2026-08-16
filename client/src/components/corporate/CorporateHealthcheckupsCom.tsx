import type { FC, ReactNode } from 'react';
import {
    FiCalendar, FiCheckCircle, FiClock, FiFileText,
    FiArrowUpRight, FiArrowRight, FiActivity, FiHeart,
    FiDroplet, FiUsers, FiGift, FiBriefcase,
    FiShield, FiTag
} from 'react-icons/fi';
import { TbStethoscope } from "react-icons/tb";

import Button from '../common/Button';

interface KPI {
    title: string; value: string; trend: string; icon: ReactNode; color: string; bg: string;
}
interface CheckupCard {
    title: string; description: string; image: string; icon: ReactNode; iconColor: string; iconBg: string; parametersCount: number; tests?: string[]; price?: string; buttonText: string; buttonColor: string;
}
interface Step {
    id: string; title: string; description: string; icon: ReactNode;
}
interface ValueProp {
    title: string; icon: ReactNode;
}

const CorporateHealthcheckupsCom: FC = () => {

    const topKPIs: KPI[] = [
        { title: 'Total Bookings', value: '1,256', trend: '18.4%', icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Completed', value: '856', trend: '16.7%', icon: <FiCheckCircle className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Upcoming', value: '312', trend: '12.2%', icon: <FiClock className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Reports Generated', value: '1,102', trend: '15.3%', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const sponsoredCheckups: CheckupCard[] = [
        {
            title: 'Basic Health Checkup',
            description: 'Essential tests to assess overall health and fitness of employees.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            icon: <FiUser className="w-5 h-5" />, iconColor: 'text-[#5301ab]', iconBg: 'bg-[#5301ab]/10',
            parametersCount: 28,
            tests: ['CBC', 'Fasting Blood Sugar', 'Lipid Profile', 'TSH'],
            buttonText: 'Book Now', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Heart Health Checkup',
            description: 'Advanced tests to evaluate cardiovascular health.',
            image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=250&fit=crop',
            icon: <FiHeart className="w-5 h-5" />, iconColor: 'text-red-500', iconBg: 'bg-red-50',
            parametersCount: 35,
            tests: ['ECG', 'Lipid Profile', 'Echo', 'hs-CRP'],
            buttonText: 'Book Now', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Liver Function Checkup',
            description: 'Comprehensive tests to assess liver function and health.',
            image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=250&fit=crop',
            icon: <FiActivity className="w-5 h-5" />, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50',
            parametersCount: 30,
            tests: ['LFT', 'HBsAg', 'Ultrasound', 'GGT'],
            buttonText: 'Book Now', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Diabetes Checkup',
            description: 'Monitor blood sugar and diabetes related parameters.',
            image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=250&fit=crop',
            icon: <FiDroplet className="w-5 h-5" />, iconColor: 'text-orange-500', iconBg: 'bg-orange-50',
            parametersCount: 32,
            tests: ['FBS', 'HbA1c', 'PPBS', 'Microalbumin'],
            buttonText: 'Book Now', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Wellness Full Body Checkup',
            description: 'Complete body checkup for overall employee wellness.',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=250&fit=crop',
            icon: <FiUsers className="w-5 h-5" />, iconColor: 'text-blue-500', iconBg: 'bg-blue-50',
            parametersCount: 60,
            tests: ['CBC', 'LFT', 'KFT', 'Thyroid', 'Vitamin D'],
            buttonText: 'Book Now', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        }
    ];

    const paidCheckups: CheckupCard[] = [
        {
            title: 'Executive Health Checkup',
            description: 'Comprehensive checkup for busy professionals.',
            image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=250&fit=crop',
            icon: <FiUser className="w-5 h-5" />, iconColor: 'text-[#5301ab]', iconBg: 'bg-[#5301ab]/10',
            parametersCount: 70, price: '₹2,499', buttonText: 'Pay & Book Now', buttonColor: '!bg-[#fd5800] hover:!bg-[#e04e00]'
        },
        {
            title: 'Advanced Cardiac Checkup',
            description: 'In-depth evaluation of heart health.',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop',
            icon: <FiHeart className="w-5 h-5" />, iconColor: 'text-red-500', iconBg: 'bg-red-50',
            parametersCount: 80, price: '₹4,499', buttonText: 'Pay & Book Now', buttonColor: '!bg-[#fd5800] hover:!bg-[#e04e00]'
        },
        {
            title: 'Respiratory Health Checkup',
            description: 'Assess lung health and respiratory wellness.',
            image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&h=250&fit=crop',
            icon: <FiActivity className="w-5 h-5" />, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50',
            parametersCount: 55, price: '₹2,199', buttonText: 'Pay & Book Now', buttonColor: '!bg-[#fd5800] hover:!bg-[#e04e00]'
        },
        {
            title: 'Digestive Health Checkup',
            description: 'Evaluate digestive system and related parameters.',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop',
            icon: <TbStethoscope className="w-5 h-5" />, iconColor: 'text-orange-500', iconBg: 'bg-orange-50',
            parametersCount: 50, price: '₹2,299', buttonText: 'Pay & Book Now', buttonColor: '!bg-[#fd5800] hover:!bg-[#e04e00]'
        },
        {
            title: 'Women Health Checkup',
            description: 'Specialized checkup for women\'s health.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            icon: <FiUsers className="w-5 h-5" />, iconColor: 'text-blue-500', iconBg: 'bg-blue-50',
            parametersCount: 60, price: '₹2,799', buttonText: 'Pay & Book Now', buttonColor: '!bg-[#fd5800] hover:!bg-[#e04e00]'
        }
    ];

    const howItWorksSteps: Step[] = [
        { id: '01', title: 'Check eligible checkups', description: 'sponsored for the team.', icon: <FiFileText className="w-4 h-4" /> },
        { id: '02', title: 'Select a date & preferred', description: 'lab/center.', icon: <FiCalendar className="w-4 h-4" /> },
        { id: '03', title: 'Book health checkup', description: 'easily.', icon: <FiCheckCircle className="w-4 h-4" /> },
        { id: '04', title: 'Visit the center and get', description: 'tests done.', icon: <FiActivity className="w-4 h-4" /> },
        { id: '05', title: 'Receive reports', description: 'digitally.', icon: <FiDroplet className="w-4 h-4" /> },
    ];

    const whyChooseProps: ValueProp[] = [
        { title: 'Comprehensive & advanced', icon: <FiActivity className="w-4 h-4" /> },
        { title: 'Shorter wait time & priority appointments', icon: <FiClock className="w-4 h-4" /> },
        { title: 'Home sample collection available', icon: <FiHeart className="w-4 h-4" /> },
        { title: 'Detailed digital reports with expert insights', icon: <FiFileText className="w-4 h-4" /> },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Healthcheckups</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Manage and monitor health checkups for your employees and their dependents.</p>
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
                            <p className="text-[9px] font-bold flex items-center gap-0.5 mt-1.5 text-emerald-500">
                                <FiArrowUpRight className="w-3 h-3" /> {kpi.trend} <span className="text-gray-400 font-medium font-sans ml-0.5">vs last month</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-50 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center shrink-0">
                            <FiGift className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[18px]">Sponsored Health Checkups</h3>
                            <p className="text-[12px] text-gray-500 font-medium mt-0.5">Health checkups sponsored for your employees under the corporate plan.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-2 rounded-md">
                            <FiShield className="text-[#5301ab] w-4 h-4" />
                            <div>
                                <p className="text-[11px] font-bold text-gray-900 leading-tight">100% Cashless</p>
                                <p className="text-[9px] text-gray-500 font-medium">No payment required</p>
                            </div>
                        </div>
                        <Button variant="secondary" className="!text-[#5301ab] !border-[#5301ab]/20 hover:!bg-[#5301ab]/5 !py-2 !px-4" icon={<FiArrowRight className="w-4 h-4" />}>
                            View All
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8">
                    <div className="xl:w-[75%] flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {sponsoredCheckups.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] flex flex-col min-w-[280px] max-w-[300px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="relative h-[150px] w-full overflow-hidden bg-gray-50">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute -bottom-5 left-5 w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white border border-gray-50 z-10 ${card.iconColor}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${card.iconBg}`}>
                                            {card.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 p-5 flex flex-col flex-1">
                                    <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-1.5">{card.title}</h4>
                                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4 min-h-[34px]">{card.description}</p>
                                    <div className="mb-4">
                                        <span className="bg-[#5301ab]/5 text-[#5301ab] px-2.5 py-1 rounded text-[10px] font-bold tracking-wide">
                                            Parameters ({card.parametersCount})
                                        </span>
                                    </div>
                                    {card.tests && (
                                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-5 min-h-[40px]">
                                            {card.tests.map((test, i) => (
                                                <div key={i} className="flex items-center gap-1.5">
                                                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                                    <span className="text-[11px] font-bold text-gray-600">{test}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <Button variant="primary" className={`w-full mt-auto !py-2.5 !text-[13px] ${card.buttonColor}`}>
                                        {card.buttonText}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="xl:w-[25%] bg-gray-50/80 rounded-md border border-gray-100 p-6 flex flex-col relative overflow-hidden">
                        <div className="flex items-start justify-between mb-8 relative z-10">
                            <h3 className="font-bold text-gray-900 text-[16px] leading-tight">How Sponsored<br />Checkups Work?</h3>
                            <div className="w-12 h-12 bg-white rounded-md shadow-sm border border-gray-100 flex items-center justify-center text-[#5301ab]">
                                <FiFileText className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="relative flex-1 z-10 ml-2">
                            <div className="absolute left-[11px] top-4 bottom-8 w-[1px] bg-gray-200 border-l border-dashed border-gray-300"></div>
                            <div className="space-y-6">
                                {howItWorksSteps.map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="relative shrink-0 mt-0.5">
                                            <div className="w-6 h-6 rounded-full bg-white border border-[#5301ab]/30 flex items-center justify-center shadow-sm relative z-10 group-hover:border-[#5301ab] group-hover:bg-[#5301ab]/5 transition-colors">
                                                <span className="text-[9px] font-bold text-[#5301ab]">{step.id}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-bold text-gray-900 leading-tight">{step.title}</p>
                                            <p className="text-[11px] font-medium text-gray-500">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-50 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-orange-50 text-[#fd5800] flex items-center justify-center shrink-0">
                            <FiBriefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[18px]">Paid Health Checkup Booking</h3>
                            <p className="text-[12px] text-gray-500 font-medium mt-0.5">Premium health checkups available for employees with corporate discounts.</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-2 rounded-md">
                        <FiTag className="text-[#fd5800] w-4 h-4" />
                        <div>
                            <p className="text-[11px] font-bold text-gray-900 leading-tight">Affordable Prices</p>
                            <p className="text-[9px] text-gray-500 font-medium">Best value for your health</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8">
                    <div className="xl:w-[75%] flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {paidCheckups.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col min-w-[280px] max-w-[300px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="relative h-[150px] w-full overflow-hidden bg-gray-50">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute -bottom-5 left-5 w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white border border-gray-50 z-10 ${card.iconColor}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${card.iconBg}`}>
                                            {card.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 p-5 flex flex-col flex-1">
                                    <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-1.5">{card.title}</h4>
                                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4 min-h-[34px]">{card.description}</p>
                                    <div className="mb-auto">
                                        <span className="bg-gray-50 border border-gray-100 text-gray-600 px-2.5 py-1 rounded text-[10px] font-bold tracking-wide">
                                            Parameters ({card.parametersCount})
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3 mt-5">
                                        <div className="text-right w-full">
                                            <span className="font-heading text-[22px] font-bold text-[#fd5800] leading-none">{card.price}</span>
                                        </div>
                                        <Button variant="primary" className={`w-full !py-2.5 !text-[13px] ${card.buttonColor}`}>
                                            {card.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="xl:w-[25%] bg-gray-50/80 rounded-md border border-gray-100 p-6 flex flex-col relative overflow-hidden">
                        <h3 className="font-bold text-gray-900 text-[16px] leading-tight mb-6">Why Choose Paid<br />Health Checkups?</h3>
                        <div className="space-y-5 flex-1">
                            {whyChooseProps.map((prop, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-md bg-orange-50 text-[#fd5800] flex items-center justify-center shrink-0">
                                        {prop.icon}
                                    </div>
                                    <p className="text-[12px] font-bold text-gray-700 leading-snug pt-1">{prop.title} health parameters</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-orange-50/50 border border-orange-100 rounded-md p-3 flex items-start gap-3 mt-6">
                            <FiCheckCircle className="text-[#fd5800] w-5 h-5 shrink-0 mt-0.5" />
                            <p className="text-[11px] font-bold text-gray-800 leading-relaxed">All tests are conducted at NABL accredited labs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FiUser = ({ className }: { className?: string }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

export default CorporateHealthcheckupsCom;