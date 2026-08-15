import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiCalendar, FiHeart, FiSearch,
    FiArrowRight, FiMapPin, FiMonitor, FiActivity, FiEye, FiDownload, FiPhoneCall, FiFilter, FiPaperclip
} from 'react-icons/fi';
import { TbDental, TbBuildingCommunity, TbPill } from "react-icons/tb";

import Button from '../common/Button';

// --- Interfaces ---
interface HistoryKPI {
    title: string;
    value: string;
    subtitle: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface TimelineEvent {
    id: string;
    date: string;
    time: string;
    title: string;
    provider: string;
    description: string;
    type: 'consultation' | 'lab' | 'prescription' | 'procedure';
    icon: ReactNode;
    color: string;
    bg: string;
}

interface PastConsultation {
    id: string;
    date: string;
    service: string;
    doctor: string;
    diagnosis: string;
    status: string;
    statusColor: string;
    statusBg: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface MedicalRecord {
    id: string;
    name: string;
    date: string;
    size: string;
    type: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

const UserHistoryCom: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // --- Mock Data ---
    const kpiData: HistoryKPI[] = [
        { title: 'Total Visits', value: '24', subtitle: 'Lifetime consultations', icon: <FiMonitor className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Lab Reports', value: '16', subtitle: 'Tests conducted', icon: <FiActivity className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Prescriptions', value: '32', subtitle: 'Medications prescribed', icon: <TbPill className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Care Programs', value: '3', subtitle: 'Completed programs', icon: <FiHeart className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    const timelineEvents: TimelineEvent[] = [
        {
            id: 'EV-01',
            date: '10 May 2026',
            time: '11:30 AM',
            title: 'Full Body Health Checkup',
            provider: 'MedPlus Diagnostics',
            description: 'Completed annual full body screening including lipid profile, CBC, and thyroid panel. All parameters normal.',
            type: 'lab',
            icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50'
        },
        {
            id: 'EV-02',
            date: '28 Apr 2026',
            time: '02:00 PM',
            title: 'Dental Root Canal - Session 1',
            provider: 'Dr. Karthik Rao • Happy Smiles',
            description: 'First sitting of root canal treatment on lower right molar. Prescribed antibiotics for 5 days.',
            type: 'procedure',
            icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50'
        },
        {
            id: 'EV-03',
            date: '28 Apr 2026',
            time: '03:30 PM',
            title: 'Prescription Issued',
            provider: 'Happy Smiles Pharmacy',
            description: 'Amoxicillin 500mg (Twice daily), Ibuprofen 400mg (As needed for pain).',
            type: 'prescription',
            icon: <TbPill />, color: 'text-orange-500', bg: 'bg-orange-50'
        },
        {
            id: 'EV-04',
            date: '15 Mar 2026',
            time: '10:00 AM',
            title: 'General Consultation',
            provider: 'Dr. Priya Sharma • Apollo',
            description: 'Consultation for mild fever and throat pain. Diagnosed with viral pharyngitis.',
            type: 'consultation',
            icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10'
        }
    ];

    const pastConsultations: PastConsultation[] = [
        { id: 'CON-8821', date: '15 Mar 2026', service: 'General Physician', doctor: 'Dr. Priya Sharma', diagnosis: 'Viral Pharyngitis', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { id: 'CON-8754', date: '10 Jan 2026', service: 'Ophthalmology', doctor: 'Dr. Rajesh Kumar', diagnosis: 'Myopia (-1.5D)', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiEye />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 'CON-8612', date: '12 Nov 2025', service: 'Dental Care', doctor: 'Dr. Karthik Rao', diagnosis: 'Dental Caries', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <TbDental />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { id: 'CON-8540', date: '05 Sep 2025', service: 'Cardiology', doctor: 'Dr. Anil Desai', diagnosis: 'Routine Check', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiHeart />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    const medicalRecords: MedicalRecord[] = [
        { id: 'REC-1', name: 'Comprehensive Blood Report.pdf', date: '10 May 2026', size: '2.4 MB', type: 'Lab Report', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 'REC-2', name: 'Dental_XRay_Lower_Jaw.png', date: '28 Apr 2026', size: '4.1 MB', type: 'Imaging', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { id: 'REC-3', name: 'Prescription_Apollo.pdf', date: '15 Mar 2026', size: '1.1 MB', type: 'Prescription', icon: <TbPill />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { id: 'REC-4', name: 'Vision_Test_Results.pdf', date: '10 Jan 2026', size: '1.8 MB', type: 'Lab Report', icon: <FiEye />, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight mb-1">History</h2>
                    <p className="text-[13px] text-gray-500 font-medium">View your complete medical history, past appointments, and health records.</p>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 bg-white border border-gray-200 p-2 pr-4 rounded-md shadow-sm self-start lg:self-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-[#5301ab]/10 flex items-center justify-center text-[#5301ab] shrink-0">
                            <TbBuildingCommunity className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-tight">Premium Corporate Plan</p>
                            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Innova Technologies</p>
                        </div>
                    </div>

                    <div className="w-[1px] h-10 bg-gray-200 hidden sm:block"></div>

                    <Button variant="secondary" className="!bg-white !border-gray-200 !text-gray-700 hover:!bg-gray-50 !rounded-md !px-5 !py-2 !text-[13px] font-bold shrink-0 hidden sm:flex" icon={<FiDownload className="w-4 h-4" />}>
                        Export All
                    </Button>
                </div>
            </div>

            {/* ================= TOP KPIs ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {kpiData.map((kpi, index) => (
                    <div key={index} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-center hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                                {kpi.icon}
                            </div>
                            <div>
                                <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
                                <p className="text-[12px] font-bold text-gray-700 mt-1 leading-tight">{kpi.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= MAIN CONTENT GRID ================= */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* LEFT COLUMN (Span 8) */}
                <div className="xl:col-span-8 space-y-6">

                    {/* Medical History Timeline */}
                    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[18px]">Medical Timeline</h3>
                                <p className="text-[12px] text-gray-500 font-medium mt-1">Chronological view of your health events.</p>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-1.5 rounded-md">
                                <button className="px-4 py-1.5 rounded-md bg-white text-[#5301ab] text-[12px] font-bold shadow-sm">All</button>
                                <button className="px-4 py-1.5 rounded-md text-gray-500 hover:text-gray-900 text-[12px] font-bold transition-colors">Consultations</button>
                                <button className="px-4 py-1.5 rounded-md text-gray-500 hover:text-gray-900 text-[12px] font-bold transition-colors">Labs</button>
                            </div>
                        </div>

                        <div className="relative pl-4 sm:pl-8 ml-2 sm:ml-4 border-l-2 border-gray-100 space-y-8 pb-4">
                            {timelineEvents.map((event) => (
                                <div key={event.id} className="relative">
                                    {/* Timeline Node */}
                                    <div className={`absolute -left-[35px] sm:-left-[51px] top-0 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-sm z-10 ${event.bg} ${event.color}`}>
                                        <span className="text-[18px]">{event.icon}</span>
                                    </div>

                                    {/* Event Content */}
                                    <div className="bg-gray-50/50 border border-gray-100 rounded-md p-5 hover:bg-white hover:shadow-md transition-all group">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div>
                                                <h4 className="font-bold text-[15px] text-gray-900 leading-tight group-hover:text-[#5301ab] transition-colors">{event.title}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <FiMapPin className="w-3.5 h-3.5 text-gray-400" />
                                                    <span className="text-[12px] font-medium text-gray-600">{event.provider}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-left sm:text-right">
                                                <span className="text-[12px] font-bold text-gray-900 bg-white border border-gray-200 px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1.5"><FiCalendar className="text-[#5301ab] w-3.5 h-3.5" /> {event.date}</span>
                                                <span className="text-[11px] font-medium text-gray-500">{event.time}</span>
                                            </div>
                                        </div>
                                        <p className="text-[13px] text-gray-600 leading-relaxed bg-white p-3 rounded-md border border-gray-100/80">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <Button variant="secondary" className="!bg-white !border-gray-200 !text-gray-700 hover:!bg-gray-50 !py-2 !text-[12px]">Load Older Events</Button>
                        </div>
                    </div>

                    {/* Past Consultations Table */}
                    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
                        <div className="p-6 md:p-8 border-b border-gray-50 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[18px]">Past Consultations</h3>
                                <p className="text-[12px] text-gray-500 font-medium mt-1">History of your doctor visits and diagnoses.</p>
                            </div>
                            <Button variant="neutral" className="!py-1.5 !px-3 !text-[12px]" icon={<FiArrowRight className="w-3.5 h-3.5" />}>View All</Button>
                        </div>

                        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Service & Doctor</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Diagnosis</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {pastConsultations.map((consult) => (
                                        <tr key={consult.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap text-[12px] font-bold text-gray-600">{consult.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${consult.bg} ${consult.color}`}>
                                                        {consult.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-[13px] font-bold text-gray-900 group-hover:text-[#5301ab] transition-colors">{consult.service}</p>
                                                        <p className="text-[11px] text-gray-500 font-medium mt-0.5">{consult.doctor}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[12px] font-medium text-gray-700">{consult.diagnosis}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase ${consult.statusBg} ${consult.statusColor}`}>
                                                    {consult.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <Button variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5">Summary</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (Span 4) */}
                <div className="xl:col-span-4 space-y-6">

                    {/* Search & Filter Widget */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-4">Search History</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-md border border-gray-200 focus-within:border-[#5301ab]/50 focus-within:ring-2 focus-within:ring-[#5301ab]/10 transition-all">
                                <FiSearch className="text-gray-400 w-4 h-4 ml-1" />
                                <input
                                    type="text"
                                    placeholder="Search by doctor, condition..."
                                    className="w-full text-[13px] text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button variant="secondary" className="w-full !bg-white !border-gray-200 !text-gray-700 hover:!bg-gray-50 text-[13px]" icon={<FiFilter className="w-4 h-4" />}>
                                Advanced Filters
                            </Button>
                        </div>
                    </div>

                    {/* My Medical Records */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[16px]">Medical Records</h3>
                                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Your prescriptions & reports</p>
                            </div>
                            <Button variant="neutral" className="!p-2 text-[#5301ab] bg-[#5301ab]/5 hover:bg-[#5301ab]/10"><FiArrowRight className="w-4 h-4" /></Button>
                        </div>

                        <div className="space-y-3">
                            {medicalRecords.map((record) => (
                                <div key={record.id} className="flex items-center justify-between p-3 rounded-md border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${record.bg} ${record.color}`}>
                                            <FiPaperclip className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0 pr-2">
                                            <p className="text-[13px] font-bold text-gray-900 truncate leading-tight group-hover:text-[#5301ab] transition-colors">{record.name}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">{record.type}</span>
                                                <span className="text-[10px] text-gray-500 font-medium">{record.date} • {record.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#5301ab] hover:text-white transition-colors shrink-0">
                                        <FiDownload className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <Button variant="secondary" className="w-full mt-4 !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5 border-dashed">
                            Upload New Record
                        </Button>
                    </div>

                    {/* Support Banner */}
                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 p-6 rounded-md border border-purple-100/50 shadow-sm relative overflow-hidden">
                        <div className="relative z-10 w-[65%]">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-2">Need Missing Records?</h3>
                            <p className="text-[11px] text-gray-600 mb-5 leading-relaxed font-medium">If you can't find a past report, our team can help retrieve it for you.</p>
                            <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] shadow-md shadow-[#5301ab]/20 text-[12px] !py-2.5" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Contact Support
                            </Button>
                        </div>
                        {/* Decorative Support Illustration */}
                        <div className="absolute -right-6 bottom-0 w-36 h-auto opacity-95 drop-shadow-xl z-0 pointer-events-none">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserHistoryCom;