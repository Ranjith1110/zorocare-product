import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiChevronDown, FiArrowUpRight, FiSearch, FiFilter,
    FiPlus, FiEye, FiEdit2, FiMoreVertical, FiArrowRight,
    FiUsers, FiFileText, FiActivity
} from 'react-icons/fi';
import { TbBuildingCommunity } from "react-icons/tb";

import Button from '../common/Button';

interface TopKPI {
    title: string; value: string; icon: ReactNode; color: string; bg: string;
}
interface OverviewKPI {
    title: string; value: string; trend: string; icon: ReactNode; color: string; bg: string;
}
interface TopPerformer {
    name: string; policies: number; members: string; revenue: string;
}
interface CorporateDirectory {
    id: string; initials: string; name: string; contactName: string; contactRole: string; phone: string; email: string; industry: string; policies: number; members: string; status: 'Active' | 'Pending' | 'Inactive' | 'Expired'; renewal: string; avatarBg: string;
}
interface Insight {
    label: string; value: string; trend?: string; trendLabel?: string; trendColor?: string; icon: ReactNode; color: string; bg: string;
}

const InsuranceCorporateManagementCom: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const topKPIs: TopKPI[] = [
        { title: 'Total Corporates', value: '124', icon: <TbBuildingCommunity className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Active Corporates', value: '78', icon: <FiActivity className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Total Revenue', value: '₹24.8L', icon: <span className="font-bold text-xl">₹</span>, color: 'text-red-500', bg: 'bg-red-50' },
        { title: 'Total Members', value: '12,560', icon: <FiUsers className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const overviewKPIs: OverviewKPI[] = [
        { title: 'New Corporates', value: '8', trend: '14.3%', icon: <TbBuildingCommunity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Active Policies', value: '156', trend: '12.6%', icon: <FiShieldMock />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Total Members', value: '12,560', trend: '15.3%', icon: <FiUsers />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Renewal Rate', value: '87%', trend: '8.1%', icon: <FiUsers />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const topPerformers: TopPerformer[] = [
        { name: 'TechNova Solutions', policies: 24, members: '3,450', revenue: '₹4.25L' },
        { name: 'Global Infotech', policies: 18, members: '2,845', revenue: '₹3.15L' },
        { name: 'HealthPlus Systems', policies: 16, members: '1,950', revenue: '₹2.45L' },
        { name: 'Future Enterprises', policies: 14, members: '1,560', revenue: '₹1.85L' },
        { name: 'BrightMind Pvt Ltd', policies: 12, members: '1,245', revenue: '₹1.35L' },
    ];

    const corporateDirectory: CorporateDirectory[] = [
        { id: '1', initials: 'TN', name: 'TechNova Solutions', contactName: 'Ramesh Kumar', contactRole: 'HR Manager', phone: '+91 98765 43210', email: 'hr@technova.com', industry: 'IT Services', policies: 24, members: '3,450', status: 'Active', renewal: '18 Jun 2026', avatarBg: 'bg-[#5301ab]' },
        { id: '2', initials: 'GI', name: 'Global Infotech', contactName: 'Sunita Sharma', contactRole: 'HR Head', phone: '+91 91234 56789', email: 'hr@globalinfo.com', industry: 'IT Services', policies: 18, members: '2,845', status: 'Active', renewal: '15 Jun 2026', avatarBg: 'bg-blue-500' },
        { id: '3', initials: 'HP', name: 'HealthPlus Systems', contactName: 'Anil Verma', contactRole: 'Admin Manager', phone: '+91 99887 66554', email: 'admin@healthplus.com', industry: 'Healthcare', policies: 16, members: '1,950', status: 'Active', renewal: '10 Jun 2026', avatarBg: 'bg-orange-500' },
        { id: '4', initials: 'FE', name: 'Future Enterprises', contactName: 'Priya Menon', contactRole: 'HR Manager', phone: '+91 97654 32109', email: 'hr@futureent.com', industry: 'Manufacturing', policies: 14, members: '1,560', status: 'Pending', renewal: '05 Jun 2026', avatarBg: 'bg-emerald-500' },
        { id: '5', initials: 'BM', name: 'BrightMind Pvt Ltd', contactName: 'Vikram Singh', contactRole: 'HR Executive', phone: '+91 93456 78901', email: 'hr@brightmind.com', industry: 'Education', policies: 12, members: '1,245', status: 'Active', renewal: '01 Jun 2026', avatarBg: 'bg-[#5301ab]' },
    ];

    const insights: Insight[] = [
        { label: 'Average Members per Corporate', value: '161', trend: '12.5%', trendColor: 'text-emerald-500', icon: <FiUsers />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { label: 'Average Revenue per Corporate', value: '₹0.20L', trend: '8.7%', trendColor: 'text-emerald-500', icon: <span className="font-bold">₹</span>, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'Top Industry by Members', value: 'IT Services', trendLabel: '45%', icon: <TbBuildingCommunity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Policies Expiring Soon', value: '14', trendLabel: 'Next 30 Days', trendColor: 'text-red-500', icon: <FiFileText />, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Corporate Management</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Manage corporate partners, policies, members and performance</p>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {topKPIs.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                            {kpi.icon}
                        </div>
                        <div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                            <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-wider">{kpi.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div className="xl:col-span-5 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[16px]">Corporate Overview</h3>
                        <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-100">
                            This Month <FiChevronDown />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {overviewKPIs.map((kpi, idx) => (
                            <div key={idx} className="bg-gray-50/50 border border-gray-100 p-3 rounded-md flex flex-col items-center text-center">
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center mb-2 ${kpi.bg} ${kpi.color}`}>
                                    {kpi.icon}
                                </div>
                                <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">{kpi.title}</p>
                                <p className="text-[15px] font-bold text-gray-900 leading-none mb-1.5">{kpi.value}</p>
                                <p className="text-[9px] text-emerald-500 font-bold flex items-center"><FiArrowUpRight /> {kpi.trend}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 relative w-full min-h-[160px] mt-auto">
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold h-full pb-6">
                            <span>40K</span><span>30K</span><span>20K</span><span>10K</span><span>0</span>
                        </div>
                        <div className="absolute left-7 right-0 top-0 bottom-0">
                            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="corpGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#5301ab" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,25 Q10,30 20,28 T40,25 T60,10 T80,30 L100,20 L100,40 L0,40 Z" fill="url(#corpGradient)" />
                                <path d="M0,25 Q10,30 20,28 T40,25 T60,10 T80,30 L100,20" fill="none" stroke="#5301ab" strokeWidth="1.5" />
                                <circle cx="0" cy="25" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="20" cy="28" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="40" cy="25" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="60" cy="10" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="80" cy="30" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="100" cy="20" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-semibold text-gray-400">
                                <span>12 May</span><span>13 May</span><span>14 May</span><span>15 May</span><span>16 May</span><span>17 May</span><span>18 May</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-3 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col h-full">
                    <h3 className="font-bold text-gray-900 text-[16px] mb-6">Corporate by Status</h3>
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        <div className="relative w-44 h-44 mb-8">
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                <path className="text-gray-100" strokeWidth="5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-[#5301ab]" strokeDasharray="62.9, 100" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-blue-500" strokeDasharray="21, 100" strokeDashoffset="-62.9" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-orange-500" strokeDasharray="9.7, 100" strokeDashoffset="-83.9" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-red-500" strokeDasharray="6.4, 100" strokeDashoffset="-93.6" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-[26px] font-bold text-gray-900 font-heading leading-none mb-1">124</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Total Corporates</p>
                            </div>
                        </div>

                        <div className="w-full space-y-2.5 px-4">
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#5301ab]"></span><span className="font-bold text-gray-600">Active</span></div><span className="font-bold text-gray-900">78 <span className="text-gray-400 font-medium">(62.9%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span><span className="font-bold text-gray-600">Inactive</span></div><span className="font-bold text-gray-900">26 <span className="text-gray-400 font-medium">(21.0%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span><span className="font-bold text-gray-600">Pending</span></div><span className="font-bold text-gray-900">12 <span className="text-gray-400 font-medium">(9.7%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span><span className="font-bold text-gray-600">Expired</span></div><span className="font-bold text-gray-900">8 <span className="text-gray-400 font-medium">(6.4%)</span></span></div>
                        </div>
                    </div>
                    <div className="mt-6 text-center w-full">
                        <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center justify-center gap-1">View All Corporates <FiArrowRight /></a>
                    </div>
                </div>

                <div className="xl:col-span-4 bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[16px]">Top Performing Corporates</h3>
                        <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-[10px] font-bold text-gray-600 hover:bg-gray-100">
                            This Month <FiChevronDown />
                        </button>
                    </div>
                    <div className="w-full overflow-x-auto flex-1 [&::-webkit-scrollbar]:hidden">
                        <table className="w-full text-left border-collapse min-w-[300px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Corporate Name</th>
                                    <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Policies</th>
                                    <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Members</th>
                                    <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Revenue</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {topPerformers.map((corp, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3.5 whitespace-nowrap text-[12px] font-bold text-gray-800">{corp.name}</td>
                                        <td className="py-3.5 whitespace-nowrap text-[12px] font-bold text-gray-800 text-center">{corp.policies}</td>
                                        <td className="py-3.5 whitespace-nowrap text-[12px] font-bold text-gray-800 text-center">{corp.members}</td>
                                        <td className="py-3.5 whitespace-nowrap text-[12px] font-bold text-gray-800 text-right">{corp.revenue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-center w-full pt-2 border-t border-gray-50">
                        <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center justify-center gap-1">View Full Report <FiArrowRight /></a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div className="xl:col-span-8 bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <h3 className="font-bold text-gray-900 text-[18px]">Corporate Directory</h3>
                        <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !py-2 !text-[12px]" icon={<FiPlus />}>
                            Add Corporate
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                        <div className="lg:col-span-2 flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-md focus-within:border-[#5301ab]/50 transition-colors">
                            <FiSearch className="text-gray-400 w-4 h-4" />
                            <input type="text" placeholder="Search corporate name, contact..." className="bg-transparent border-none outline-none text-[12px] w-full placeholder-gray-400" />
                        </div>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700 appearance-none outline-none focus:border-[#5301ab]/50">
                                <option>All Status</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700 appearance-none outline-none focus:border-[#5301ab]/50">
                                <option>All Plans</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-md justify-center cursor-pointer hover:bg-gray-50 text-[12px] font-bold text-gray-700 transition-colors">
                            <FiFilter className="w-4 h-4" /> Filters
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Corporate Name</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Contact Person</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Contact</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Industry</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Policies</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Members</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Renewal Date</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {corporateDirectory.map((corp) => (
                                    <tr key={corp.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-sm ${corp.avatarBg}`}>
                                                    {corp.initials}
                                                </div>
                                                <span className="text-[13px] font-bold text-gray-900">{corp.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 whitespace-nowrap">
                                            <p className="text-[12px] font-bold text-gray-900">{corp.contactName}</p>
                                            <p className="text-[11px] text-gray-500 font-medium">{corp.contactRole}</p>
                                        </td>
                                        <td className="py-4 whitespace-nowrap">
                                            <p className="text-[12px] font-bold text-gray-900">{corp.phone}</p>
                                            <p className="text-[11px] text-gray-500 font-medium">{corp.email}</p>
                                        </td>
                                        <td className="py-4 whitespace-nowrap text-[12px] font-bold text-gray-600">{corp.industry}</td>
                                        <td className="py-4 whitespace-nowrap text-[12px] font-bold text-gray-900 text-center">{corp.policies}</td>
                                        <td className="py-4 whitespace-nowrap text-[12px] font-bold text-gray-900 text-center">{corp.members}</td>
                                        <td className="py-4 whitespace-nowrap text-center">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${corp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                                                {corp.status}
                                            </span>
                                        </td>
                                        <td className="py-4 whitespace-nowrap text-[12px] font-medium text-gray-600 text-center">{corp.renewal}</td>
                                        <td className="py-4 whitespace-nowrap text-center">
                                            <div className="flex items-center justify-center gap-3 text-gray-400">
                                                <button className="hover:text-[#5301ab] transition-colors"><FiEye className="w-4 h-4" /></button>
                                                <button className="hover:text-[#5301ab] transition-colors"><FiEdit2 className="w-4 h-4" /></button>
                                                <button className="hover:text-[#5301ab] transition-colors"><FiMoreVertical className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                        <p className="text-[12px] font-medium text-gray-500">Showing 1 to 5 of 78 results</p>
                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">&lt;</button>
                            <button className="w-8 h-8 rounded-md bg-[#5301ab] text-white text-[12px] font-bold shadow-sm">1</button>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">2</button>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">3</button>
                            <span className="text-gray-400">...</span>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">16</button>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">&gt;</button>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">Corporate Insights</h3>
                        <div className="space-y-4">
                            {insights.map((insight, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${insight.bg} ${insight.color}`}>
                                            {insight.icon}
                                        </div>
                                        <p className="text-[12px] font-medium text-gray-600 leading-tight">{insight.label}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[14px] font-bold text-gray-900 leading-none mb-1">{insight.value}</p>
                                        {(insight.trend || insight.trendLabel) && (
                                            <p className={`text-[10px] font-bold flex items-center justify-end gap-0.5 ${insight.trendColor || 'text-gray-500'}`}>
                                                {insight.trend && <FiArrowUpRight />} {insight.trend || insight.trendLabel}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#5301ab] to-[#7315e0] rounded-md p-6 shadow-lg shadow-[#5301ab]/20 relative overflow-hidden flex flex-col justify-center min-h-[180px]">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10 w-[60%]">
                            <h3 className="font-bold text-white text-[16px] mb-2 leading-tight">Grow Your Corporate Network</h3>
                            <p className="text-[11px] text-white/80 font-medium mb-5 leading-relaxed">Invite more corporates and expand your business.</p>
                            <Button variant="secondary" className="!bg-white !text-[#5301ab] !border-transparent hover:!bg-gray-50 !py-2 !text-[12px] !px-4 shadow-sm w-fit">
                                Invite Corporates
                            </Button>
                        </div>
                        <div className="absolute -right-4 -bottom-4 w-[50%] pointer-events-none drop-shadow-2xl">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/building-5167664-4322421.png" alt="Building 3D" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FiShieldMock = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
)

export default InsuranceCorporateManagementCom;