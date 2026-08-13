import type { FC } from 'react';
import {
    FiShield, FiClock, FiCheckCircle, FiDollarSign,
    FiMonitor, FiActivity, FiEye, FiTruck, FiHeart,
    FiFileText, FiArrowRight, FiChevronDown, FiHeadphones,
    FiCalendar, FiAlertCircle
} from 'react-icons/fi';
import { TbBuildingCommunity, TbDental } from "react-icons/tb";

import Button from '../common/Button';

const UserMyBenefitsCom: FC = () => {

    const kpiData = [
        { title: 'Total Services', value: '12', subtitle: 'Covered in your plan', icon: <FiShield className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Used Services', value: '8', subtitle: 'This plan year', icon: <FiCheckCircle className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Available Services', value: '4', subtitle: 'Ready to use', icon: <FiClock className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Expiring Soon', value: '1', subtitle: 'Within 30 days', icon: <FiAlertCircle className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Total Benefit Value', value: '₹2,25,000', subtitle: 'Per member / Year', icon: <FiDollarSign className="w-6 h-6" />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    const benefitsAtGlance = [
        { service: 'Doctor Consultation', used: '8', available: 'Unlimited', limit: 'Unlimited', status: 'Unlimited', icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10', statusClass: 'bg-emerald-50 text-emerald-600' },
        { service: 'Health Checkups', used: '1', available: '1', limit: '2 / Year', status: 'Good', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50', statusClass: 'bg-emerald-50 text-emerald-600' },
        { service: 'Dental Checkup', used: '0', available: '1', limit: '1 / Year', status: 'Available', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50', statusClass: 'bg-blue-50 text-blue-600' },
        { service: 'Eye Checkup', used: '0', available: '1', limit: '1 / Year', status: 'Available', icon: <FiEye />, color: 'text-orange-500', bg: 'bg-orange-50', statusClass: 'bg-blue-50 text-blue-600' },
        { service: 'Ambulance Services', used: '0', available: '2', limit: '2 / Year', status: 'Available', icon: <FiTruck />, color: 'text-red-500', bg: 'bg-red-50', statusClass: 'bg-blue-50 text-blue-600' },
        { service: 'Wellness Programs', used: '0', available: 'Unlimited', limit: 'Unlimited', status: 'Unlimited', icon: <FiHeart />, color: 'text-purple-500', bg: 'bg-purple-50', statusClass: 'bg-emerald-50 text-emerald-600' },
        { service: 'Care Programs', used: '1', available: '1', limit: '2 / Year', status: 'Good', icon: <FiShield />, color: 'text-teal-500', bg: 'bg-teal-50', statusClass: 'bg-emerald-50 text-emerald-600' },
        { service: 'Diagnostics', used: '1', available: '1', limit: '2 / Year', status: 'Good', icon: <FiFileText />, color: 'text-yellow-500', bg: 'bg-yellow-50', statusClass: 'bg-emerald-50 text-emerald-600' },
    ];

    const coveredServices = [
        { title: 'Doctor Consultation', desc: 'General Physician, Specialists Online & In-person', limit: 'Unlimited', icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10', limitClass: 'text-[#5301ab] bg-[#5301ab]/10' },
        { title: 'Health Checkups', desc: 'Basic, Advanced & Full Body Checkups', limit: '2 / Year', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50', limitClass: 'text-blue-600 bg-blue-50' },
        { title: 'Dental Checkup', desc: 'Basic Dental Screening & Consultation', limit: '1 / Year', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50', limitClass: 'text-emerald-600 bg-emerald-50' },
        { title: 'Eye Checkup', desc: 'Vision Screening & Consultation', limit: '1 / Year', icon: <FiEye />, color: 'text-orange-500', bg: 'bg-orange-50', limitClass: 'text-orange-600 bg-orange-50' },
        { title: 'Ambulance Services', desc: 'Emergency Ambulance Across Pan India', limit: '2 / Year', icon: <FiTruck />, color: 'text-red-500', bg: 'bg-red-50', limitClass: 'text-red-600 bg-red-50' },
        { title: 'Wellness Programs', desc: 'Yoga, Fitness, Mental Wellness Programs', limit: 'Unlimited', icon: <FiHeart />, color: 'text-purple-500', bg: 'bg-purple-50', limitClass: 'text-[#5301ab] bg-[#5301ab]/10' },
        { title: 'Care Programs', desc: 'Elder Care, Mother & Child Care and more', limit: '2 / Year', icon: <FiShield />, color: 'text-teal-500', bg: 'bg-teal-50', limitClass: 'text-teal-600 bg-teal-50' },
        { title: 'Diagnostics', desc: 'Lab Tests & Home Collection Services', limit: '2 / Year', icon: <FiFileText />, color: 'text-yellow-500', bg: 'bg-yellow-50', limitClass: 'text-yellow-600 bg-yellow-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* Header Section - Updated to match SuperAdmin style */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">My Benefits</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Explore your corporate health benefits and the services covered under your plan.</p>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 bg-white border border-gray-100 p-2.5 sm:p-3 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] self-start lg:self-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#5301ab]/10 flex items-center justify-center text-[#5301ab] shrink-0">
                            <TbBuildingCommunity className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-tight">Premium Corporate Plan</p>
                            <p className="text-[11px] text-gray-500 font-medium">Innova Technologies</p>
                        </div>
                    </div>
                    <div className="w-[1px] h-10 bg-gray-100 hidden sm:block"></div>
                    <div className="hidden sm:block">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Valid Till</p>
                        <p className="text-[13px] font-bold text-[#5301ab]">31 Mar 2027</p>
                    </div>
                    <Button variant="secondary" className="!bg-white !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/5 shrink-0 hidden sm:flex">
                        Plan Details
                    </Button>
                </div>
            </div>

            {/* Top KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
                {kpiData.map((kpi, index) => (
                    <div key={index} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-center hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                                {kpi.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{kpi.title}</p>
                                <h3 className="font-heading text-xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                                <p className="text-[11px] font-medium text-gray-500 mt-1">{kpi.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle Section: Benefits Glance & Expiring / Trends */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">

                {/* Your Benefits at a Glance (span 8) */}
                <div className="xl:col-span-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                    <h3 className="font-bold text-gray-900 text-[16px] mb-6">Your Benefits at a Glance</h3>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                        {/* Donut Chart */}
                        <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                {/* Background Ring */}
                                <path className="text-gray-100" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                {/* Progress Ring */}
                                <path className="text-[#5301ab]" strokeDasharray="66.7, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute text-center flex flex-col items-center">
                                <p className="text-3xl font-black text-gray-900 leading-none">8<span className="text-[16px] text-gray-400 font-bold">/12</span></p>
                                <p className="text-[11px] font-bold text-gray-900 uppercase mt-1 tracking-wider">Services Used</p>
                                <p className="text-[12px] font-bold text-[#5301ab] mt-0.5">66.7%</p>
                            </div>
                        </div>

                        {/* List/Table */}
                        <div className="flex-1 w-full">
                            <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                    <thead>
                                        <tr>
                                            <th className="px-2 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">Service Category</th>
                                            <th className="px-2 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 text-center">Used</th>
                                            <th className="px-2 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 text-center">Available</th>
                                            <th className="px-2 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 text-center">Limit</th>
                                            <th className="px-2 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {benefitsAtGlance.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="px-2 py-3 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}>
                                                            {item.icon}
                                                        </div>
                                                        <span className="text-[13px] font-bold text-gray-700">{item.service}</span>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-3 whitespace-nowrap text-[13px] font-bold text-gray-900 text-center">{item.used}</td>
                                                <td className="px-2 py-3 whitespace-nowrap text-[13px] font-bold text-gray-900 text-center">{item.available}</td>
                                                <td className="px-2 py-3 whitespace-nowrap text-[12px] font-medium text-gray-500 text-center">{item.limit}</td>
                                                <td className="px-2 py-3 whitespace-nowrap text-center">
                                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${item.statusClass}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 pt-2">
                                <Button variant="secondary" className="!bg-white !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/5 w-fit" icon={<FiArrowRight className="w-4 h-4" />}>
                                    View All Benefits Details
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side (span 4) */}
                <div className="xl:col-span-4 space-y-5 flex flex-col">

                    {/* Benefits Expiring Soon */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
                            <h3 className="font-bold text-gray-900 text-[15px]">Benefits Expiring Soon</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline">View All</a>
                        </div>

                        <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-2xl flex items-start gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center shrink-0">
                                <FiCalendar className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-gray-900 leading-tight">1 Benefit Expiring Soon</h4>
                                <p className="text-[11px] text-gray-600 mt-1">These benefits will reset after 31 Mar 2027</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-2xl border border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-orange-500 shadow-sm">
                                    <FiCalendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold text-gray-900 leading-tight">Health Checkup</h4>
                                    <p className="text-[11px] text-gray-500 mt-0.5">Expires on 31 Mar 2027</p>
                                </div>
                            </div>
                            <span className="text-[12px] font-bold text-gray-700">1 / 2 Used</span>
                        </div>
                    </div>

                    {/* Usage Trend */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[15px]">Usage Trend</h3>
                            <button className="flex items-center gap-1.5 text-[11px] font-bold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100 hover:bg-gray-100 transition-colors">
                                Yearly <FiChevronDown className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-4 justify-end">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-1 bg-[#5301ab] rounded-full"></div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Used Services</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-1 bg-gray-300 rounded-full border border-dashed border-gray-400"></div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Available Services</span>
                            </div>
                        </div>

                        {/* CSS/SVG Mock Line Chart */}
                        <div className="flex-1 relative min-h-[140px] w-full mt-2">
                            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-semibold h-full pb-6">
                                <span>15</span><span>10</span><span>5</span><span>0</span>
                            </div>
                            <div className="absolute left-6 right-0 top-0 bottom-0">
                                <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#5301ab" stopOpacity="0.15" />
                                            <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* Available line (dashed) */}
                                    <path d="M0,35 L10,32 L20,30 L30,28 L40,26 L50,23 L60,20 L70,18 L80,15 L90,12 L100,10" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2 2" />
                                    {/* Used Line Fill */}
                                    <path d="M0,35 Q10,25 20,22 T40,20 T60,15 T80,10 L80,40 L0,40 Z" fill="url(#trendGradient)" />
                                    {/* Used Line Stroke */}
                                    <path d="M0,35 Q10,25 20,22 T40,20 T60,15 T80,10" fill="none" stroke="#5301ab" strokeWidth="1.5" />

                                    {/* Data Points */}
                                    <circle cx="10" cy="28.5" r="1.5" fill="#5301ab" />
                                    <circle cx="25" cy="21" r="1.5" fill="#5301ab" />
                                    <circle cx="45" cy="19" r="1.5" fill="#5301ab" />
                                    <circle cx="65" cy="12.5" r="1.5" fill="#5301ab" />

                                    {/* Tooltip labels */}
                                    <text x="10" y="25" fontSize="4" fill="#5301ab" fontWeight="bold" textAnchor="middle">2</text>
                                    <text x="25" y="18" fontSize="4" fill="#5301ab" fontWeight="bold" textAnchor="middle">4</text>
                                    <text x="45" y="16" fontSize="4" fill="#5301ab" fontWeight="bold" textAnchor="middle">5</text>
                                    <text x="65" y="9.5" fontSize="4" fill="#5301ab" fontWeight="bold" textAnchor="middle">8</text>
                                </svg>

                                {/* X-Axis Labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-semibold text-gray-400 px-2">
                                    <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Grid: What's Covered */}
            <div>
                <h3 className="font-bold text-gray-900 text-[18px] mb-4 px-2">What's Covered in Your Plan?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {coveredServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-md transition-shadow group">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>
                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${service.limitClass}`}>
                                    {service.limit}
                                </span>
                            </div>
                            <h4 className="font-bold text-[14px] text-gray-900 mb-1">{service.title}</h4>
                            <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support Banner */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#5301ab]/5 rounded-full blur-3xl z-0"></div>
                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 bg-white text-[#5301ab] rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-purple-100">
                        <FiHeadphones className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[16px] text-gray-900 leading-tight mb-1">Need help understanding your benefits?</h3>
                        <p className="text-[13px] text-gray-600 font-medium">Our care team is available 24x7 to help you.</p>
                    </div>
                </div>
                <div className="relative z-10 w-full md:w-auto">
                    <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] w-full sm:w-auto shadow-md shadow-[#5301ab]/20" icon={<FiHeadphones className="w-4 h-4" />}>
                        Contact Care Team
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default UserMyBenefitsCom;