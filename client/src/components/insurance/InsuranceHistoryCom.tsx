import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiCalendar, FiCheckCircle, FiXCircle, FiArrowUpRight, FiClock, FiFilter, FiDownload, FiChevronDown, FiMoreVertical,
    FiActivity, FiMonitor, FiEye, FiPhoneCall, FiBarChart2, FiUser
} from 'react-icons/fi';
import { TbBuildingCommunity, TbDental, TbTruckDelivery } from "react-icons/tb";

import Button from '../common/Button';

interface KPI {
    title: string; value: string; trend: string; trendLabel: string; isPositive: boolean; icon: ReactNode; color: string; bg: string;
}
interface UtilizationRecord {
    id: string; user: { name: string; email: string; phone: string; avatar: string; }; corporate: { name: string; id: string; }; service: { name: string; type: string; typeColor: string; typeBg: string; icon: ReactNode; color: string; bg: string; }; utilizedOn: { date: string; time: string; }; provider: { name: string; role: string; avatar: string; isCompany?: boolean; }; amount: { value: string; type: string; }; status: string;
}
interface ServiceSummary {
    name: string; value: number; percentage: string; color: string; bgClass: string;
}
interface TopCorporate {
    rank: number; name: string; id: string; utilizations: number; trend: string; amountSpent: string;
}
interface Insight {
    title: string; value: string; subValue?: string; trend?: string; icon: ReactNode; color: string; bg: string;
}

const InsuranceHistoryCom: FC = () => {
    const [activeTab, setActiveTab] = useState('All Utilizations');
    const tabs = ['All Utilizations', 'Sponsored Services', 'Healthcheckups', 'Other Services', 'Consultations', 'Transactions'];

    const topKPIs: KPI[] = [
        { title: 'Total Utilizations', value: '1,248', trend: '16.7%', trendLabel: 'vs last period', isPositive: true, icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Total Amount Spent', value: '₹48.75 Lakhs', trend: '16.4%', trendLabel: 'vs last period', isPositive: true, icon: <span className="font-bold text-xl">₹</span>, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Completed', value: '1,082', trend: '86.7%', trendLabel: 'of total', isPositive: true, icon: <FiCheckCircle className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Upcoming', value: '78', trend: '6.3%', trendLabel: 'of total', isPositive: true, icon: <FiClock className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Cancelled', value: '88', trend: '7.0%', trendLabel: 'of total', isPositive: false, icon: <FiXCircle className="w-6 h-6" />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    const utilizationRecords: UtilizationRecord[] = [
        {
            id: 'REC-01',
            user: { name: 'Priya Nair', email: 'pri***@innova.com', phone: '+91 98765 43210', avatar: 'https://i.pravatar.cc/150?img=5' },
            corporate: { name: 'Innova Technologies', id: 'ITOO125' },
            service: { name: 'Instant Doctor Consultation', type: 'Sponsored', typeColor: 'text-[#5301ab]', typeBg: 'bg-[#5301ab]/10', icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
            utilizedOn: { date: '17 May 2026', time: '10:30 AM' },
            provider: { name: 'Dr. Ramesh Kumar', role: 'General Physician', avatar: 'https://i.pravatar.cc/150?img=11' },
            amount: { value: '₹0', type: 'Sponsored' },
            status: 'Completed'
        },
        {
            id: 'REC-02',
            user: { name: 'Rahul Verma', email: 'ra***@innova.com', phone: '+91 91234 56789', avatar: 'https://i.pravatar.cc/150?img=12' },
            corporate: { name: 'Innova Technologies', id: 'ITOO125' },
            service: { name: 'Ambulance Services', type: 'Sponsored', typeColor: 'text-[#5301ab]', typeBg: 'bg-[#5301ab]/10', icon: <TbTruckDelivery />, color: 'text-red-500', bg: 'bg-red-50' },
            utilizedOn: { date: '16 May 2026', time: '08:15 PM' },
            provider: { name: 'City Life Ambulance', role: 'Emergency Care', avatar: 'https://ui-avatars.com/api/?name=CL&background=0D8ABC&color=fff', isCompany: true },
            amount: { value: '₹0', type: 'Sponsored' },
            status: 'Completed'
        },
        {
            id: 'REC-03',
            user: { name: 'Ananya Iyer', email: 'an***@innova.com', phone: '+91 99876 54321', avatar: 'https://i.pravatar.cc/150?img=9' },
            corporate: { name: 'Innova Technologies', id: 'ITOO125' },
            service: { name: 'Eye Checkup', type: 'Health Checkup', typeColor: 'text-blue-600', typeBg: 'bg-blue-50', icon: <FiEye />, color: 'text-blue-500', bg: 'bg-blue-50' },
            utilizedOn: { date: '14 May 2026', time: '11:00 AM' },
            provider: { name: 'Vision Care Hospital', role: 'Banjara Hills, Hyd.', avatar: 'https://ui-avatars.com/api/?name=VC&background=0ea5e9&color=fff', isCompany: true },
            amount: { value: '₹0', type: 'Sponsored' },
            status: 'Completed'
        },
        {
            id: 'REC-04',
            user: { name: 'Sandeep Reddy', email: 'sa***@innova.com', phone: '+91 90000 11122', avatar: 'https://i.pravatar.cc/150?img=14' },
            corporate: { name: 'Innova Technologies', id: 'ITOO125' },
            service: { name: 'Dental Checkup', type: 'Health Checkup', typeColor: 'text-blue-600', typeBg: 'bg-blue-50', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            utilizedOn: { date: '12 May 2026', time: '09:30 AM' },
            provider: { name: 'Smile Craft Dental', role: 'Jubilee Hills, Hyd.', avatar: 'https://ui-avatars.com/api/?name=SC&background=10b981&color=fff', isCompany: true },
            amount: { value: '₹0', type: 'Sponsored' },
            status: 'Completed'
        },
        {
            id: 'REC-05',
            user: { name: 'Meera Krishnan', email: 'me***@innova.com', phone: '+91 93456 78901', avatar: 'https://i.pravatar.cc/150?img=1' },
            corporate: { name: 'Innova Technologies', id: 'ITOO125' },
            service: { name: 'Speciality Consultation', type: 'Sponsored', typeColor: 'text-[#5301ab]', typeBg: 'bg-[#5301ab]/10', icon: <FiActivity />, color: 'text-orange-500', bg: 'bg-orange-50' },
            utilizedOn: { date: '15 May 2026', time: '04:00 PM' },
            provider: { name: 'Dr. Priya Sharma', role: 'Cardiologist', avatar: 'https://i.pravatar.cc/150?img=5' },
            amount: { value: '₹0', type: 'Sponsored' },
            status: 'Completed'
        },
        {
            id: 'REC-06',
            user: { name: 'Vikram Malhotra', email: 'vi***@innova.com', phone: '+91 87654 32109', avatar: 'https://i.pravatar.cc/150?img=33' },
            corporate: { name: 'Innova Technologies', id: 'ITOO125' },
            service: { name: 'Full Body Health Checkup', type: 'Health Checkup', typeColor: 'text-blue-600', typeBg: 'bg-blue-50', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50' },
            utilizedOn: { date: '10 May 2026', time: '07:30 AM' },
            provider: { name: 'Thyrocare Diagnostics', role: 'Banjara Hills, Hyd.', avatar: 'https://ui-avatars.com/api/?name=TC&background=f43f5e&color=fff', isCompany: true },
            amount: { value: '₹2,499', type: 'Paid' },
            status: 'Completed'
        },
    ];

    const serviceSummary: ServiceSummary[] = [
        { name: 'Instant Doctor Consultation', value: 352, percentage: '28.2%', color: '#5301ab', bgClass: 'bg-[#5301ab]' },
        { name: 'Health Checkups', value: 298, percentage: '23.9%', color: '#3b82f6', bgClass: 'bg-blue-500' },
        { name: 'Speciality Consultation', value: 192, percentage: '15.4%', color: '#f97316', bgClass: 'bg-orange-500' },
        { name: 'Ambulance Services', value: 116, percentage: '9.3%', color: '#10b981', bgClass: 'bg-emerald-500' },
        { name: 'Dental Checkups', value: 102, percentage: '8.2%', color: '#ec4899', bgClass: 'bg-pink-500' },
        { name: 'Eye Checkups', value: 96, percentage: '7.7%', color: '#ef4444', bgClass: 'bg-red-500' },
        { name: 'Other Services', value: 92, percentage: '7.3%', color: '#9ca3af', bgClass: 'bg-gray-400' },
    ];

    const topCorporates: TopCorporate[] = [
        { rank: 1, name: 'Innova Technologies', id: 'ITO0125', utilizations: 612, trend: '18.7%', amountSpent: '₹24.18 Lakhs' },
        { rank: 2, name: 'TechNova Solutions', id: 'TSO0231', utilizations: 324, trend: '14.2%', amountSpent: '₹12.34 Lakhs' },
        { rank: 3, name: 'HealthPlus Pvt Ltd', id: 'HPO0312', utilizations: 198, trend: '16.8%', amountSpent: '₹7.62 Lakhs' },
        { rank: 4, name: 'FutureSoft Systems', id: 'FSO0421', utilizations: 114, trend: '11.3%', amountSpent: '₹3.89 Lakhs' },
    ];

    const quickInsights: Insight[] = [
        { title: 'Avg. Amount / Utilization', value: '₹3,911', trend: '12.6%', icon: <FiBarChart2 className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Most Utilized Service', value: 'Doctor', subValue: 'Consultation', icon: <FiUser className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Peak Utilization Day', value: 'Wednesday', subValue: '24% of total', icon: <FiCalendar className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">History</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Track all corporate utilizations, services and reports in one place.</p>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {topKPIs.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 min-w-[240px] shrink-0 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                            {kpi.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">{kpi.title}</p>
                            <h3 className="font-heading text-xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                            <p className={`text-[9px] font-bold flex items-center gap-0.5 mt-1.5 ${kpi.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                {kpi.isPositive ? <FiArrowUpRight className="w-3 h-3" /> : <FiArrowUpRight className="w-3 h-3 transform rotate-90" />}
                                {kpi.trend} <span className="text-gray-400 font-medium font-sans ml-0.5">{kpi.trendLabel}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div className="xl:col-span-8 bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col">
                    <div className="p-6 md:p-8 pb-4 border-b border-gray-50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 text-[13px] font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === tab ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">
                            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[12px] font-bold text-gray-700 w-full lg:w-auto hover:bg-gray-50 cursor-pointer">
                                <FiCalendar className="w-3.5 h-3.5" /> 12 May 2026 - 18 May 2026 <FiChevronDown className="w-3.5 h-3.5 ml-auto lg:ml-1" />
                            </div>
                            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[12px] font-bold text-gray-700 w-full lg:w-auto hover:bg-gray-50 cursor-pointer">
                                All Corporates <FiChevronDown className="w-3.5 h-3.5 ml-auto lg:ml-1" />
                            </div>
                            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[12px] font-bold text-gray-700 w-full lg:w-auto hover:bg-gray-50 cursor-pointer">
                                All Status <FiChevronDown className="w-3.5 h-3.5 ml-auto lg:ml-1" />
                            </div>
                            <Button variant="secondary" className="!bg-white !border-gray-200 !text-gray-700 hover:!bg-gray-50 !py-1.5 !px-3 w-full lg:w-auto shrink-0" icon={<FiFilter className="w-3.5 h-3.5" />}>
                                Filters
                            </Button>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 pt-4">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-4">Utilization Records</h3>

                        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Employee / User</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Corporate</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Service</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Utilized On</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Provider</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Report</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {utilizationRecords.map((record, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <img src={record.user.avatar} alt={record.user.name} className="w-9 h-9 rounded-full object-cover shadow-sm" />
                                                    <div>
                                                        <p className="text-[13px] font-bold text-gray-900">{record.user.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium">{record.user.email}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium">{record.user.phone}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-start gap-2">
                                                    <TbBuildingCommunity className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                                    <div>
                                                        <p className="text-[12px] font-bold text-gray-900">{record.corporate.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium">{record.corporate.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-start gap-2.5">
                                                    <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${record.service.bg} ${record.service.color}`}>
                                                        {record.service.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-[12px] font-bold text-gray-900 mb-1 leading-tight">{record.service.name}</p>
                                                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wide ${record.service.typeBg} ${record.service.typeColor}`}>
                                                            {record.service.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <p className="text-[12px] font-bold text-gray-900">{record.utilizedOn.date}</p>
                                                <p className="text-[11px] text-gray-500 font-medium">{record.utilizedOn.time}</p>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2.5">
                                                    <img src={record.provider.avatar} alt={record.provider.name} className={`w-8 h-8 object-cover shadow-sm ${record.provider.isCompany ? 'rounded-md' : 'rounded-full'}`} />
                                                    <div>
                                                        <p className="text-[12px] font-bold text-gray-900">{record.provider.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium">{record.provider.role}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <p className="text-[13px] font-bold text-gray-900">{record.amount.value}</p>
                                                <p className="text-[10px] text-gray-500 font-medium">{record.amount.type}</p>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-center">
                                                <div className="inline-flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-md">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    <span className="text-[10px] font-bold text-emerald-600">{record.status}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Button variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5">
                                                        View Report
                                                    </Button>
                                                    <button className="text-gray-400 hover:text-gray-600"><FiMoreVertical className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                            <p className="text-[12px] font-medium text-gray-500">Showing 1 to 8 of 1,248 entries</p>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">&lt;</button>
                                <button className="w-8 h-8 rounded-md bg-[#5301ab] text-white text-[12px] font-bold shadow-sm">1</button>
                                <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">2</button>
                                <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">3</button>
                                <span className="text-gray-400">...</span>
                                <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">125</button>
                                <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">&gt;</button>
                                <div className="relative ml-2">
                                    <select className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-[12px] font-medium text-gray-700 appearance-none outline-none focus:border-[#5301ab]/50 pr-8">
                                        <option>10 / page</option>
                                    </select>
                                    <FiChevronDown className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] relative">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-bold text-gray-900 text-[16px] max-w-[150px] leading-tight">Service Wise Utilization Summary</h3>
                            <Button variant="secondary" className="!bg-white !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/5 !py-1.5 !px-3 !text-[11px]" icon={<FiDownload className="w-3.5 h-3.5" />}>
                                Export History
                            </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row xl:flex-col items-center justify-center gap-8 mb-6">
                            <div className="relative w-48 h-48 shrink-0">
                                <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                    <path className="text-[#5301ab]" strokeDasharray="28.2, 100" strokeDashoffset="0" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-blue-500" strokeDasharray="23.9, 100" strokeDashoffset="-28.2" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-orange-500" strokeDasharray="15.4, 100" strokeDashoffset="-52.1" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-emerald-500" strokeDasharray="9.3, 100" strokeDashoffset="-67.5" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-pink-500" strokeDasharray="8.2, 100" strokeDashoffset="-76.8" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-red-500" strokeDasharray="7.7, 100" strokeDashoffset="-85" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-gray-400" strokeDasharray="7.3, 100" strokeDashoffset="-92.7" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-[26px] font-bold text-gray-900 font-heading leading-none mb-1">1,248</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Total<br />Utilizations</p>
                                </div>
                            </div>

                            <div className="w-full space-y-3">
                                {serviceSummary.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <span className={`w-2.5 h-2.5 rounded-full ${item.bgClass}`}></span>
                                            <span className="text-[11px] font-bold text-gray-700">{item.name}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[12px] font-bold text-gray-900 mr-2">{item.value}</span>
                                            <span className="text-[11px] font-medium text-gray-500">({item.percentage})</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button variant="secondary" className="w-full !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5 transition-colors !py-2.5 text-[12px]" icon={<FiBarChart2 className="w-4 h-4" />}>
                            View Service Wise Detailed Report
                        </Button>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-5">Top Corporates by Utilization</h3>

                        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Corporate</th>
                                        <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Utilizations</th>
                                        <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Amount Spent</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {topCorporates.map((corp) => (
                                        <tr key={corp.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-purple-50 text-[#5301ab] flex items-center justify-center text-[10px] font-bold">
                                                        {corp.rank}
                                                    </div>
                                                    <div>
                                                        <p className="text-[12px] font-bold text-gray-900 group-hover:text-[#5301ab] transition-colors">{corp.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium">{corp.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 whitespace-nowrap text-right">
                                                <p className="text-[13px] font-bold text-gray-900">{corp.utilizations}</p>
                                                <p className="text-[9px] text-emerald-500 font-bold flex items-center justify-end mt-0.5"><FiArrowUpRight /> {corp.trend}</p>
                                            </td>
                                            <td className="py-4 whitespace-nowrap text-[12px] font-bold text-gray-800 text-right">{corp.amountSpent}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-5">Quick Insights</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {quickInsights.map((insight, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-3 bg-gray-50/80 rounded-md border border-gray-100 hover:border-[#5301ab]/30 hover:bg-white transition-all cursor-default">
                                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-3 min-h-[28px] leading-tight">{insight.title}</p>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${insight.bg} ${insight.color}`}>
                                        {insight.icon}
                                    </div>
                                    <p className="text-[14px] font-bold text-gray-900 leading-tight mb-1">{insight.value}</p>
                                    {insight.trend && <p className="text-[10px] font-bold text-emerald-500 flex items-center justify-center"><FiArrowUpRight /> {insight.trend}</p>}
                                    {insight.subValue && <p className="text-[10px] text-gray-500 font-medium leading-tight">{insight.subValue}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 p-6 rounded-md border border-purple-100/50 shadow-sm relative overflow-hidden">
                        <div className="relative z-10 w-[65%]">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-2">Need Help?</h3>
                            <p className="text-[11px] text-gray-600 mb-5 leading-relaxed font-medium">Our support team is available 24x7 to help you.</p>
                            <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] shadow-md shadow-[#5301ab]/20 text-[12px] !py-2.5" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Contact Support
                            </Button>
                        </div>
                        <div className="absolute -right-6 bottom-0 w-40 h-auto opacity-95 drop-shadow-xl z-0 pointer-events-none">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InsuranceHistoryCom;