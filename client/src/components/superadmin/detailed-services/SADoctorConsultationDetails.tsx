import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiUsers, FiActivity, FiTrendingUp, FiHeart, FiSearch,
    FiFilter, FiDownload, FiEdit2, FiMoreVertical,
    FiPlus, FiExternalLink, FiCheckCircle, FiArrowUpRight
} from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

import Button from '../../common/Button';
import Input from '../../common/Input';
import ToggleSwitch from '../../common/ToggleSwitch';
import type { ServiceData } from '../SuperAdminManageServiceDetails';

interface Props {
    service: ServiceData;
}

interface KPI {
    title: string;
    value: string;
    trend: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface MockDoctor {
    id: number;
    name: string;
    spec: string;
    exp: string;
    consults: string;
    rating: string;
    active: boolean;
}

interface MockConsultation {
    id: string;
    patient: string;
    doctor: string;
    corporate: string;
    broker: string;
    time: string;
    status: string;
}

const SADoctorConsultationDetails: FC<Props> = ({ service }) => {
    const [activeTab, setActiveTab] = useState<string>('Overview');

    const detailKpis: KPI[] = [
        { title: 'Total Doctors', value: '48', trend: '+12%', icon: <FiUsers className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Consultations (This Month)', value: '3,285', trend: '+18%', icon: <FiActivity className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Prescriptions (This Month)', value: '2,970', trend: '+16%', icon: <FiTrendingUp className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Active Users (This Month)', value: '2,100', trend: '+14%', icon: <FiHeart className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    ];

    const tabs: string[] = ['Overview', 'Doctors', 'Consultations', 'Prescription Templates', 'Prescription History', 'Settings'];

    const RenderOverview: FC = () => (
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-gray-900">Usage Overview</h4>
                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
                </div>
                <div className="flex-1 relative w-full h-40 mt-2">
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
                        <span>500</span><span>300</span><span>100</span><span>0</span>
                    </div>
                    <div className="absolute left-6 right-0 top-0 bottom-6">
                        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#5301ab" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,35 Q15,10 25,20 T50,5 T75,25 T100,15 L100,40 L0,40 Z" fill="url(#areaGradient)" />
                            <path d="M0,35 Q15,10 25,20 T50,5 T75,25 T100,15" fill="none" stroke="#5301ab" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-gray-900">User Demographics</h4>
                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
                </div>
                <div className="flex-1 flex items-center gap-6">
                    <div className="relative w-24 h-24 shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#fd5800" strokeWidth="4.2" strokeDasharray="20 100" strokeDashoffset="0" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3b82f6" strokeWidth="4.2" strokeDasharray="30 100" strokeDashoffset="-20" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#5301ab" strokeWidth="4.2" strokeDasharray="50 100" strokeDashoffset="-50" />
                        </svg>
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#5301ab]"></div><span className="text-[11px] font-bold text-gray-600">Individual</span></div><span className="text-[11px] font-bold text-gray-900">45%</span></div>
                        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[11px] font-bold text-gray-600">Corporate</span></div><span className="text-[11px] font-bold text-gray-900">34%</span></div>
                        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#fd5800]"></div><span className="text-[11px] font-bold text-gray-600">Insurance</span></div><span className="text-[11px] font-bold text-gray-900">21%</span></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const mockDoctors: MockDoctor[] = [
        { id: 1, name: 'Dr. Sarah Wilson', spec: 'General Physician', exp: '8 Years', consults: '1,245', rating: '4.8', active: true },
        { id: 2, name: 'Dr. Rahul Kumar', spec: 'Dermatologist', exp: '12 Years', consults: '890', rating: '4.9', active: true },
        { id: 3, name: 'Dr. Priya Patel', spec: 'Pediatrician', exp: '5 Years', consults: '430', rating: '4.6', active: false },
    ];

    const RenderDoctors: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="w-full sm:w-[300px]">
                    <Input
                        iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                        placeholder="Search doctor by name or specialty..."
                        theme="purple"
                    />
                </div>
                <Button variant="primary" icon={<FiPlus className="w-4 h-4" />}>Onboard Doctor</Button>
            </div>
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Doctor Name</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Specialty</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Experience</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Consultations</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Status</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mockDoctors.map(doc => (
                            <tr key={doc.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-5 py-3.5 text-[13px] font-bold text-gray-900">{doc.name}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-600">{doc.spec}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-500">{doc.exp}</td>
                                <td className="px-5 py-3.5 text-[12px] font-bold text-gray-900">{doc.consults}</td>
                                <td className="px-5 py-3.5">
                                    <ToggleSwitch defaultChecked={doc.active} theme="purple" />
                                </td>
                                <td className="px-5 py-3.5 text-center">
                                    <Button variant="neutral" className="!p-1.5 text-gray-400 hover:text-[#5301ab] inline-flex" icon={<FiEdit2 className="w-4 h-4" />}>{null}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const mockConsultations: MockConsultation[] = [
        { id: 'CNS-001', patient: 'Arjun Nair', doctor: 'Dr. Sarah Wilson', corporate: 'Tech Innovators Pvt Ltd', broker: 'Safeguard Insurance', time: 'Today, 10:30 AM', status: 'Completed' },
        { id: 'CNS-002', patient: 'Sneha Reddy', doctor: 'Dr. Rahul Kumar', corporate: 'Global Bytes Solutions', broker: 'SecureLife Advisors', time: 'Today, 11:15 AM', status: 'Active' },
        { id: 'CNS-003', patient: 'Vikram Singh', doctor: 'Dr. Priya Patel', corporate: 'Mindful Finance Ltd', broker: 'Trust Insurance', time: 'Today, 02:00 PM', status: 'Scheduled' },
    ];

    const RenderConsultations: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="w-full sm:w-[300px]">
                    <Input
                        iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                        placeholder="Search consultations..."
                        theme="purple"
                    />
                </div>
                <Button variant="neutral" icon={<FiFilter className="w-4 h-4" />}>Filter</Button>
            </div>
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Consult ID</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Patient / Doctor</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Corporate Link</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Schedule</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mockConsultations.map(c => (
                            <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-3.5 text-[12px] font-bold text-[#5301ab]">{c.id}</td>
                                <td className="px-4 py-3.5">
                                    <p className="text-[13px] font-bold text-gray-900">{c.patient}</p>
                                    <p className="text-[11px] text-gray-500 mt-0.5">with {c.doctor}</p>
                                </td>
                                <td className="px-4 py-3.5">
                                    <p className="text-[12px] font-bold text-gray-700">{c.corporate}</p>
                                    <p className="text-[10px] text-gray-400 mt-0.5">Broker: {c.broker}</p>
                                </td>
                                <td className="px-4 py-3.5 text-[12px] font-medium text-gray-600">{c.time}</td>
                                <td className="px-4 py-3.5">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${c.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : c.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                                        {c.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const RenderRxTemplate: FC = () => (
        <div className="p-6 md:p-8 bg-gray-50/50 animate-in fade-in duration-300 flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-80 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6 shrink-0">
                <h3 className="font-bold text-gray-900 text-[15px] border-b border-gray-100 pb-3">Template Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between"><span className="text-[12px] font-bold text-gray-700">Include Clinic Logo</span><ToggleSwitch defaultChecked theme="purple" /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] font-bold text-gray-700">Show Doctor Signature</span><ToggleSwitch defaultChecked theme="purple" /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] font-bold text-gray-700">Include Patient Vitals</span><ToggleSwitch defaultChecked theme="purple" /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] font-bold text-gray-700">Show Follow-up Date</span><ToggleSwitch defaultChecked theme="purple" /></div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                    <Button variant="primary" className="w-full" icon={<FiCheckCircle className="w-4 h-4" />}>Save Template</Button>
                </div>
            </div>

            <div className="flex-1 w-full bg-white rounded-md border border-gray-200 shadow-lg p-6 sm:p-10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#5301ab]"></div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 border-b-2 border-gray-100 pb-6 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100"><FiActivity className="w-6 h-6 text-[#5301ab]" /></div>
                        <div>
                            <h2 className="text-[20px] font-black text-gray-900 tracking-tight">Zoro Care E-Clinic</h2>
                            <p className="text-[11px] text-gray-500 font-medium">Digital Healthcare Solutions</p>
                        </div>
                    </div>
                    <div className="sm:text-right">
                        <h3 className="text-[16px] font-bold text-gray-900">Dr. Sarah Wilson</h3>
                        <p className="text-[11px] text-gray-500">MBBS, MD (General Medicine)</p>
                        <p className="text-[11px] text-gray-500">Reg No: MED-847294</p>
                    </div>
                </div>

                <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Patient Name</p>
                        <p className="text-[13px] font-bold text-gray-900">Mr. Arjun Nair (32/M)</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Date</p>
                        <p className="text-[13px] font-bold text-gray-900">16 Jun 2026</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Consult ID</p>
                        <p className="text-[13px] font-bold text-gray-900">CNS-001</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-8 text-[12px] font-medium text-gray-700">
                    <span className="flex gap-1.5"><strong className="text-gray-900">BP:</strong> 120/80 mmHg</span>
                    <span className="flex gap-1.5"><strong className="text-gray-900">Temp:</strong> 98.6 °F</span>
                    <span className="flex gap-1.5"><strong className="text-gray-900">Weight:</strong> 72 kg</span>
                </div>

                <div className="flex-1 min-h-[200px]">
                    <h1 className="text-4xl font-black text-gray-300 italic mb-6">Rx</h1>
                    <ul className="space-y-4 text-[13px]">
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-50 pb-2">
                            <div>
                                <strong className="text-gray-900">1. Paracetamol 500mg</strong>
                                <p className="text-[11px] text-gray-500">Take after meals</p>
                            </div>
                            <span className="font-bold text-gray-700">1-0-1 (5 Days)</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-50 pb-2">
                            <div>
                                <strong className="text-gray-900">2. Vitamin C Supplement</strong>
                                <p className="text-[11px] text-gray-500">Take in the morning</p>
                            </div>
                            <span className="font-bold text-gray-700">1-0-0 (10 Days)</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                    <div className="text-center">
                        <div className="w-32 h-10 border-b border-dashed border-gray-300 mb-2 flex items-end justify-center"><span className="font-signature text-[#5301ab] text-xl">S. Wilson</span></div>
                        <p className="text-[11px] font-bold text-gray-900">Digital Signature</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const RenderRxHistory: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Rx ID</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Patient Name</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Doctor</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Date</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Diagnosis</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {[1, 2, 3].map(i => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-5 py-3.5 text-[12px] font-bold text-[#5301ab]">RX-982{i}</td>
                                <td className="px-5 py-3.5 text-[13px] font-bold text-gray-900">John Doe {i}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-600">Dr. Sarah Wilson</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-500">1{i} May 2024</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-600">Viral Fever</td>
                                <td className="px-5 py-3.5 text-center">
                                    <Button variant="neutral" className="!p-1.5 text-[#5301ab] inline-flex" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const RenderSettings: FC = () => (
        <div className="p-6 md:p-8 animate-in fade-in duration-300 space-y-8 max-w-4xl">
            <div>
                <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Operational Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Assign Doctors</span><span className="text-[11px] text-gray-500">Route patients to first available</span></div>
                        <ToggleSwitch defaultChecked theme="purple" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Require Patient Vitals</span><span className="text-[11px] text-gray-500">Mandatory before joining call</span></div>
                        <ToggleSwitch defaultChecked theme="purple" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Enable HD Video Calls</span><span className="text-[11px] text-gray-500">Uses more bandwidth</span></div>
                        <ToggleSwitch defaultChecked theme="purple" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Pricing & Limits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Base Consultation Fee (₹)"
                        type="number"
                        defaultValue="499"
                        theme="purple"
                    />
                    <Input
                        label="Max Consultation Time (Mins)"
                        type="number"
                        defaultValue="20"
                        theme="purple"
                    />
                </div>
            </div>
            <div className="pt-4 flex justify-end">
                <Button variant="primary" icon={<FiCheckCircle className="w-4 h-4" />}>Save Settings</Button>
            </div>
        </div>
    );

    return (
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex gap-5">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100 ${service.bg} ${service.color}`}>
                        {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="font-heading text-[22px] font-bold text-gray-900">{service.name}</h2>
                            <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide">{service.status}</span>
                        </div>
                        <p className="text-[13px] text-gray-500 font-medium">{service.desc}</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Button variant="neutral" icon={<FiExternalLink className="w-4 h-4" />}>View Public Page</Button>
                    <Button variant="primary" icon={<FiPlus className="w-4 h-4" />}>Add Configuration</Button>
                    <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border-b border-gray-100">
                {detailKpis.map((kpi, idx) => (
                    <div key={idx} className="p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.bg} ${service.color}`}>
                            {React.cloneElement(kpi.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-500 mb-0.5">{kpi.title}</p>
                            <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
                            <p className="text-[11px] font-bold text-emerald-500 flex items-center mt-1">
                                <FiArrowUpRight className="w-3 h-3 mr-0.5" /> {kpi.trend} <span className="text-gray-400 font-medium ml-1">vs last month</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-6 md:px-8 border-b border-gray-100 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-[#5301ab] text-[#5301ab]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white">
                {activeTab === 'Overview' && <RenderOverview />}
                {activeTab === 'Doctors' && <RenderDoctors />}
                {activeTab === 'Consultations' && <RenderConsultations />}
                {activeTab === 'Prescription Templates' && <RenderRxTemplate />}
                {activeTab === 'Prescription History' && <RenderRxHistory />}
                {activeTab === 'Settings' && <RenderSettings />}
            </div>
        </div>
    );
};

export default SADoctorConsultationDetails;