import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiHeart, FiActivity, FiFileText, FiCalendar, FiUsers,
    FiChevronDown, FiArrowRight, FiDownload, FiEye, FiPhoneCall,
    FiTrendingUp, FiShield, FiFolder,
    FiDroplet, FiWind, FiMoon, FiArrowUpRight, FiChevronRight,
    FiMessageCircle, FiSmile, FiChevronLeft
} from 'react-icons/fi';
import { TbDental } from "react-icons/tb";

import Button from '../common/Button';

// --- Interfaces ---
interface SidebarLink {
    name: string;
    icon: ReactNode;
}

interface HealthParameter {
    label: string;
    status: string;
    statusColor: string;
    value: string;
    unit: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface HealthReport {
    title: string;
    date: string;
    status: string;
    statusColor: string;
    statusBg: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Checkup {
    name: string;
    date: string;
    provider: string;
    result: string;
    resultColor: string;
    resultBg: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Insight {
    title: string;
    desc: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Reminder {
    title: string;
    date: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

const UserMyHealthCom: FC = () => {
    const [activeMenu, setActiveMenu] = useState('Health Overview');

    // --- Data Arrays ---
    const sidebarLinks: SidebarLink[] = [
        { name: 'Health Overview', icon: <FiHeart /> },
        { name: 'Health Reports', icon: <FiFileText /> },
        { name: 'Health Records', icon: <FiFolder /> },
        { name: 'Vitals & Trends', icon: <FiTrendingUp /> },
        { name: 'Checkup History', icon: <FiCalendar /> },
        { name: 'Family Health', icon: <FiUsers /> },
    ];

    const healthParameters: HealthParameter[] = [
        { label: 'Heart Health', status: 'Good', statusColor: 'text-emerald-500', value: '72', unit: 'bpm\nResting', icon: <FiHeart />, color: 'text-red-500', bg: 'bg-red-50' },
        { label: 'Blood Pressure', status: 'Normal', statusColor: 'text-emerald-500', value: '120/80', unit: 'mmHg', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Blood Sugar', status: 'Normal', statusColor: 'text-emerald-500', value: '98', unit: 'mg/dL\nFasting', icon: <FiDroplet />, color: 'text-purple-500', bg: 'bg-purple-50' },
        { label: 'Cholesterol', status: 'Borderline', statusColor: 'text-orange-500', value: '190', unit: 'mg/dL\nTotal', icon: <FiActivity />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'BMI', status: 'Normal', statusColor: 'text-emerald-500', value: '23.4', unit: 'Healthy', icon: <FiUsers />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { label: 'Stress Level', status: 'Low', statusColor: 'text-emerald-500', value: '24', unit: '/100', icon: <FiWind />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    const reports: HealthReport[] = [
        { title: 'Full Body Health Checkup', date: '10 May 2026', status: 'Normal', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Blood Test Report', date: '10 May 2026', status: 'Normal', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiDroplet />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Eye Examination Report', date: '02 May 2026', status: 'Normal', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiEye />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Dental Assessment', date: '28 Apr 2026', status: 'Attention', statusColor: 'text-orange-600', statusBg: 'bg-orange-50', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Vitamin D Test', date: '15 Apr 2026', status: 'Insufficient', statusColor: 'text-red-600', statusBg: 'bg-red-50', icon: <FiFileText />, color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    const checkups: Checkup[] = [
        { name: 'Full Body Health Checkup', date: '10 May 2026', provider: 'MedPlus Diagnostics', result: 'Normal', resultColor: 'text-emerald-600', resultBg: 'bg-emerald-50', icon: <FiActivity />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { name: 'Eye Checkup', date: '02 May 2026', provider: 'Vision Care Hospital', result: 'Normal', resultColor: 'text-emerald-600', resultBg: 'bg-emerald-50', icon: <FiEye />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { name: 'Dental Checkup', date: '28 Apr 2026', provider: 'Smile Craft Dental', result: 'Attention', resultColor: 'text-orange-600', resultBg: 'bg-orange-50', icon: <TbDental />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { name: 'Blood Test', date: '10 Apr 2026', provider: 'Thyrocare', result: 'Normal', resultColor: 'text-emerald-600', resultBg: 'bg-emerald-50', icon: <FiDroplet />, color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    const insights: Insight[] = [
        { title: 'You are physically active', desc: 'Great job! You walked 6,200 steps daily average.', icon: <FiActivity />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Your sleep quality is good', desc: 'Keep maintaining your sleep routine.', icon: <FiMoon />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Reduce stress for better health', desc: 'Try meditation or breathing exercises.', icon: <FiSmile />, color: 'text-red-500', bg: 'bg-red-50' },
        { title: 'Stay hydrated', desc: 'Drink at least 8 glasses of water daily.', icon: <FiDroplet />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const reminders: Reminder[] = [
        { title: 'Annual Health Checkup', date: 'Due on 25 Jun 2026', icon: <FiCalendar />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Eye Checkup', date: 'Due on 15 Jul 2026', icon: <FiEye />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Dental Checkup', date: 'Due on 10 Aug 2026', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Flu Vaccination', date: 'Due on 20 Oct 2026', icon: <FiShield />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Vitamin D Test', date: 'Due on 05 Nov 2026', icon: <FiFileText />, color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    return (
        <div className="w-full h-full animate-in fade-in duration-500 pb-10">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">My Health</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">View your complete health snapshot, reports, and personalized insights.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* ================= LEFT SIDEBAR (span 2) ================= */}
                <div className="hidden xl:flex xl:col-span-2 flex-col gap-6 sticky top-24">
                    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-4">
                        <div className="flex flex-col space-y-1">
                            {sidebarLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => setActiveMenu(link.name)}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-md text-[13px] font-bold transition-all ${activeMenu === link.name
                                        ? 'bg-[#5301ab]/10 text-[#5301ab]'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <span className="text-lg">{link.icon}</span>
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 border border-purple-100/50 rounded-md p-6 text-center shadow-sm relative overflow-hidden flex flex-col items-center">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-2 relative z-10 leading-tight">Track. Improve. Stay Healthy.</h3>
                        <p className="text-[11px] text-gray-600 font-medium mb-5 relative z-10 leading-relaxed">Monitor your health score and get personalized recommendations to live a better life.</p>
                        <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] !text-[12px] relative z-10 !py-2.5">
                            Learn More
                        </Button>
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/fitness-tracker-app-4993433-4161764.png"
                            alt="Fitness 3D"
                            className="w-[120%] max-w-[200px] mt-4 drop-shadow-xl relative z-0 object-contain mix-blend-multiply"
                        />
                    </div>

                    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6">
                        <h3 className="font-bold text-gray-900 text-[15px] mb-1">Need Help?</h3>
                        <p className="text-[12px] text-gray-500 font-medium mb-4">Talk to our health expert for any guidance.</p>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="relative">
                                <img src="https://i.pravatar.cc/150?img=11" alt="Expert" className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-100" />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                            </div>
                            <span className="text-[12px] font-bold text-emerald-600">Online</span>
                        </div>
                        <Button variant="secondary" className="w-full !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/5 !text-[12px]" icon={<FiMessageCircle />}>
                            Chat with Expert
                        </Button>
                    </div>
                </div>

                {/* ================= MIDDLE CONTENT (span 7) ================= */}
                <div className="xl:col-span-7 space-y-6">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                        <div>
                            <h3 className="font-bold text-gray-900 text-[18px]">Health Overview</h3>
                            <p className="text-[13px] text-gray-500 font-medium mt-0.5">Your complete health snapshot</p>
                        </div>
                        <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                            <FiCalendar className="text-gray-500 w-4 h-4" />
                            <span className="text-[13px] font-bold text-gray-700">12 May 2026</span>
                            <FiChevronDown className="text-gray-400 w-4 h-4 ml-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                        <div className="lg:col-span-4 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col items-center text-center h-full">
                            <div className="w-full flex justify-start mb-2">
                                <h4 className="font-bold text-gray-900 text-[15px]">Health Score</h4>
                            </div>
                            <div className="relative w-32 h-32 flex items-center justify-center my-auto">
                                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <svg className="w-[85%] h-[85%] transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                    <path className="text-gray-100" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-emerald-500" strokeDasharray="82, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="absolute text-center mt-1 flex flex-col items-center">
                                    <p className="text-[26px] font-bold text-gray-900 font-heading leading-none">82</p>
                                    <p className="text-[11px] font-bold text-gray-400 mt-0.5">/100</p>
                                </div>
                            </div>
                            <h4 className="text-[15px] font-bold text-emerald-500 mt-4 mb-2">Good</h4>
                            <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-md text-[10px] font-bold flex items-center gap-1 w-full justify-center">
                                <FiArrowUpRight className="w-3.5 h-3.5" /> 6 points <span className="text-emerald-600/70 font-medium">vs last month</span>
                            </div>
                        </div>

                        <div className="lg:col-span-8 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="font-bold text-gray-900 text-[15px]">Health Parameters</h4>
                                <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:underline">See All</a>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 flex-1">
                                {healthParameters.map((param, idx) => (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${param.bg} ${param.color}`}>
                                                {param.icon}
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-gray-900 leading-tight">{param.label}</p>
                                                <p className={`text-[10px] font-bold mt-0.5 ${param.statusColor}`}>{param.status}</p>
                                            </div>
                                        </div>
                                        <div className="pl-[2.6rem]">
                                            <p className="font-heading text-[18px] font-bold text-gray-900 leading-none inline-block mr-1">{param.value}</p>
                                            <span className="text-[10px] text-gray-500 font-medium whitespace-pre-line leading-tight inline-block align-bottom">{param.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-12 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-gray-900 text-[15px]">Health Trend</h4>
                                <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                                    This Month <FiChevronDown className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center gap-1.5"><div className="w-2 h-0.5 bg-red-500 rounded-full"></div><span className="text-[10px] font-bold text-gray-600">Heart Health</span></div>
                                <div className="flex items-center gap-1.5"><div className="w-2 h-0.5 bg-blue-500 rounded-full"></div><span className="text-[10px] font-bold text-gray-600">Blood Pressure</span></div>
                                <div className="flex items-center gap-1.5"><div className="w-2 h-0.5 bg-[#5301ab] rounded-full"></div><span className="text-[10px] font-bold text-gray-600">Blood Sugar</span></div>
                            </div>

                            <div className="flex-1 relative w-full mb-4 h-[160px]">
                                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-semibold h-full pb-6">
                                    <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
                                </div>
                                <div className="absolute left-8 right-0 top-0 bottom-0">
                                    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                        <line x1="0" y1="0" x2="100" y2="0" stroke="#f3f4f6" strokeWidth="0.5" />
                                        <line x1="0" y1="10" x2="100" y2="10" stroke="#f3f4f6" strokeWidth="0.5" />
                                        <line x1="0" y1="20" x2="100" y2="20" stroke="#f3f4f6" strokeWidth="0.5" />
                                        <line x1="0" y1="30" x2="100" y2="30" stroke="#f3f4f6" strokeWidth="0.5" />
                                        <path d="M0,15 L20,15 L40,14 L60,10 L80,12 L100,10" fill="none" stroke="#ef4444" strokeWidth="1" />
                                        <path d="M0,25 L20,25 L40,28 L60,20 L80,20 L100,20" fill="none" stroke="#3b82f6" strokeWidth="1" />
                                        <path d="M0,32 L20,32 L40,33 L60,32 L80,31 L100,34" fill="none" stroke="#5301ab" strokeWidth="1" />
                                        <circle cx="0" cy="15" r="1" fill="#ef4444" /> <circle cx="20" cy="15" r="1" fill="#ef4444" /> <circle cx="40" cy="14" r="1" fill="#ef4444" /> <circle cx="60" cy="10" r="1" fill="#ef4444" /> <circle cx="80" cy="12" r="1" fill="#ef4444" /> <circle cx="100" cy="10" r="1" fill="#ef4444" />
                                        <circle cx="0" cy="25" r="1" fill="#3b82f6" /> <circle cx="20" cy="25" r="1" fill="#3b82f6" /> <circle cx="40" cy="28" r="1" fill="#3b82f6" /> <circle cx="60" cy="20" r="1" fill="#3b82f6" /> <circle cx="80" cy="20" r="1" fill="#3b82f6" /> <circle cx="100" cy="20" r="1" fill="#3b82f6" />
                                        <circle cx="0" cy="32" r="1" fill="#5301ab" /> <circle cx="20" cy="32" r="1" fill="#5301ab" /> <circle cx="40" cy="33" r="1" fill="#5301ab" /> <circle cx="60" cy="32" r="1" fill="#5301ab" /> <circle cx="80" cy="31" r="1" fill="#5301ab" /> <circle cx="100" cy="34" r="1" fill="#5301ab" />
                                    </svg>
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-semibold text-gray-400 mt-2">
                                        <span>6 May</span><span>12 May</span><span>18 May</span><span>24 May</span><span>30 May</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50/80 border border-emerald-100 rounded-md p-3 flex items-center gap-3 mt-4 w-fit">
                                <FiTrendingUp className="text-emerald-500 w-4 h-4 shrink-0" />
                                <p className="text-[12px] text-emerald-700 font-medium leading-relaxed">Your overall health is improving. Keep maintaining your routine!</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <h3 className="font-bold text-gray-900 text-[16px]">Health Reports</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] flex items-center gap-1 hover:underline">View All Reports <FiArrowRight className="w-3.5 h-3.5" /></a>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {reports.map((report, idx) => (
                                <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-5 min-w-[260px] shrink-0 flex flex-col hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${report.bg} ${report.color}`}>
                                            {report.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[13px] text-gray-900 leading-tight mb-1 truncate">{report.title}</h4>
                                            <p className="text-[11px] font-medium text-gray-500">{report.date}</p>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${report.statusBg} ${report.statusColor}`}>
                                            {report.status}
                                        </span>
                                    </div>
                                    <div className="mt-auto flex items-center gap-2">
                                        <Button variant="secondary" className="flex-1 !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/5 !py-2 !text-[12px]">View Report</Button>
                                        <Button variant="secondary" className="!p-2 !border-[#5301ab]/20 text-[#5301ab] hover:!bg-[#5301ab]/5 shrink-0"><FiDownload className="w-4 h-4" /></Button>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-gray-50 border border-gray-200 border-dashed rounded-md min-w-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <FiChevronRight className="w-6 h-6 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-bold text-gray-900 text-[16px]">Recent Checkups</h3>
                                <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline">View All</a>
                            </div>
                            <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Checkup</th>
                                            <th className="py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Provider</th>
                                            <th className="py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Result</th>
                                            <th className="py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {checkups.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-3 whitespace-nowrap">
                                                    <div className="flex items-center gap-2.5">
                                                        <span className={item.color}>{item.icon}</span>
                                                        <span className="text-[12px] font-bold text-gray-900">{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 whitespace-nowrap text-[11px] font-medium text-gray-500">{item.date}</td>
                                                <td className="py-3 whitespace-nowrap text-[11px] font-medium text-gray-600">{item.provider}</td>
                                                <td className="py-3 whitespace-nowrap text-center">
                                                    <span className={`text-[10px] font-bold ${item.resultColor}`}>{item.result}</span>
                                                </td>
                                                <td className="py-3 whitespace-nowrap text-center">
                                                    <button className="text-gray-400 hover:text-[#5301ab] transition-colors"><FiEye className="w-4 h-4 mx-auto" /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-bold text-gray-900 text-[16px]">Health Insights</h3>
                                <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline">View All</a>
                            </div>
                            <div className="space-y-5">
                                {insights.map((insight, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${insight.bg} ${insight.color}`}>
                                            {insight.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[13px] text-gray-900 leading-tight mb-1">{insight.title}</h4>
                                            <p className="text-[11px] font-medium text-gray-500 leading-relaxed">{insight.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT SIDEBAR (span 3) ================= */}
                <div className="xl:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
                            <h3 className="font-bold text-gray-900 text-[15px]">Health Reminders</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline">View All</a>
                        </div>
                        <div className="space-y-4">
                            {reminders.map((rem, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-3 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-md transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${rem.bg} ${rem.color}`}>
                                            {rem.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5 group-hover:text-[#5301ab] transition-colors">{rem.title}</h4>
                                            <p className="text-[11px] font-medium text-gray-500">{rem.date}</p>
                                        </div>
                                    </div>
                                    <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#5301ab]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[15px] mb-5">Quick Actions</h3>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col items-center text-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 rounded-md bg-[#5301ab]/5 text-[#5301ab] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FiCalendar className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600 leading-tight">Book<br />Checkup</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FiFileText className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600 leading-tight">View<br />Reports</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 rounded-md bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FiTrendingUp className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600 leading-tight">Track<br />Vitals</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 rounded-md bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FiActivity className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600 leading-tight">Health<br />Assessment</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-3">
                            <h3 className="font-bold text-gray-900 text-[15px]">Health Tips for You</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All <FiArrowRight className="w-3 h-3" /></a>
                        </div>
                        <div className="bg-emerald-50/50 border border-emerald-100 rounded-md p-5 relative overflow-hidden text-left">
                            <div className="relative z-10 w-[70%]">
                                <h4 className="font-bold text-gray-900 text-[14px] mb-1.5">Stay Active, Stay Healthy!</h4>
                                <p className="text-[11px] text-gray-600 font-medium mb-4 leading-relaxed">Try to walk at least 30 minutes every day.</p>
                                <Button variant="secondary" className="!px-3 !py-1.5 !text-[11px] !border-[#5301ab]/20 !text-[#5301ab] bg-white hover:!bg-[#5301ab]/5 shadow-sm">
                                    Explore Wellness Programs
                                </Button>
                            </div>
                            <div className="absolute -right-2 bottom-0 w-[45%] pointer-events-none">
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-jogging-in-park-5437887-4551705.png" alt="Jogging" className="w-full h-auto drop-shadow-md" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30 transition-all"><FiChevronLeft className="w-4 h-4" /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30 transition-all"><FiChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-md border border-red-100 shadow-sm relative overflow-hidden text-left">
                        <div className="relative z-10 w-[65%]">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-2">Emergency Help</h3>
                            <p className="text-[11px] text-gray-600 mb-5 leading-relaxed font-medium">We are available 24x7 for you and your family.</p>
                            <Button variant="primary" className="!bg-red-600 hover:!bg-red-700 shadow-md shadow-red-500/20 text-[12px] !py-2" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Call Emergency
                            </Button>
                        </div>
                        <div className="absolute -right-12 bottom-1/2 transform translate-y-1/2 w-48 h-auto opacity-95 drop-shadow-xl z-0 pointer-events-none">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ambulance-4493309-3733076.png" alt="Ambulance 3D" className="w-full h-full object-contain scale-x-[-1]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMyHealthCom;