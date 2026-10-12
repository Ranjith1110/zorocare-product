import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiShield, FiCalendar, FiFileText, FiTrendingUp,
    FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiMoreVertical, FiPlus, FiArrowUpRight,
    FiXCircle, FiGrid, FiArrowLeft, FiCheckCircle, FiActivity, FiSettings, FiUploadCloud,
    FiClock, FiUser, FiMapPin, FiMail, FiPhone
} from 'react-icons/fi';
import { BsBuilding } from "react-icons/bs";

import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import ToggleSwitch from '../common/ToggleSwitch';

interface KPI {
    title: string;
    value: string;
    subtitle: string;
    trend?: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Clinic {
    id: number;
    name: string;
    type: string;
    contact: string;
    phone: string;
    email: string;
    location: string;
    username: string;
    status: string;
    checkups: string;
    reports: string;
    initial: string;
    logoColor: string;
}

interface Booking {
    id: string;
    patient: string;
    service: string;
    bookDate: string;
    apptDate: string;
    time: string;
    status: 'Upcoming' | 'Completed' | 'Cancelled';
}

interface CheckupRecord {
    id: string;
    patient: string;
    service: string;
    date: string;
    technician: string;
    status: 'Pending' | 'In Progress' | 'Completed';
}

interface ReportRecord {
    id: string;
    patient: string;
    testName: string;
    date: string;
    status: 'Generated' | 'Pending Approval' | 'Processing';
}

interface OnboardStep {
    id: number;
    label: string;
    active: boolean;
}

type ClinicTab = 'dashboard' | 'bookings' | 'checkups' | 'reports' | 'settings';

const AdminMedicalCentersCom: FC = () => {
    // Main View Navigation
    const [viewMode, setViewMode] = useState<'list' | 'form' | 'workspace'>('list');
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    
    // Selection States
    const [editData, setEditData] = useState<Clinic | null>(null);
    const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
    const [activeTab, setActiveTab] = useState<ClinicTab>('dashboard');

    // Dummy Data
    const kpiData: KPI[] = [
        { title: 'Total Clinics', value: '128', subtitle: 'All active clinics', icon: <BsBuilding className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Active Clinics', value: '112', subtitle: '87% of total clinics', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Health Checkups', value: '8,420', subtitle: 'This month vs last', trend: '+14%', icon: <FiActivity className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Reports Generated', value: '7,254', subtitle: 'This month vs last', trend: '+16%', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Bookings Completed', value: '7,895', subtitle: 'This month vs last', trend: '+18%', icon: <FiTrendingUp className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' }
    ];

    const clinics: Clinic[] = [
        { id: 1, name: 'Apollo Diagnostics', type: 'Diagnostic Center', contact: 'Ravi Kumar', phone: '+91 98765 43210', email: 'info@apollo.com', location: 'Bengaluru, KA', username: 'apollo_diag', status: 'Active', checkups: '1,245', reports: '1,102', initial: 'A', logoColor: 'bg-teal-500' },
        { id: 2, name: 'HealthPlus Clinic', type: 'Clinic', contact: 'Neha Sharma', phone: '+91 91234 56789', email: 'hello@healthplus.com', location: 'Mumbai, MH', username: 'healthplus_clinic', status: 'Active', checkups: '932', reports: '812', initial: 'H', logoColor: 'bg-purple-500' },
        { id: 3, name: 'Thyrocare Center', type: 'Diagnostic Center', contact: 'Amit Patel', phone: '+91 99887 66554', email: 'contact@thyrocare.com', location: 'Hyderabad, TG', username: 'thyrocare_hyd', status: 'Active', checkups: '1,104', reports: '985', initial: 'T', logoColor: 'bg-orange-500' },
    ];

    const dummyBookings: Booking[] = [
        { id: 'BK-240501-001', patient: 'Arjun Nair', service: 'Full Body Checkup', bookDate: '01 May 2024', apptDate: '05 May 2024', time: '10:00 AM', status: 'Upcoming' },
        { id: 'BK-240501-002', patient: 'Sneha Reddy', service: 'Thyroid Profile', bookDate: '01 May 2024', apptDate: '03 May 2024', time: '11:30 AM', status: 'Completed' },
        { id: 'BK-240501-003', patient: 'Vikram Singh', service: 'Cardiac Care Package', bookDate: '02 May 2024', apptDate: '06 May 2024', time: '09:00 AM', status: 'Cancelled' },
    ];

    const dummyCheckups: CheckupRecord[] = [
        { id: 'CHK-1001', patient: 'Arjun Nair', service: 'Full Body Checkup', date: '05 May 2024', technician: 'Dr. Ramesh', status: 'Pending' },
        { id: 'CHK-1002', patient: 'Sneha Reddy', service: 'Thyroid Profile', date: '03 May 2024', technician: 'Tech. Anita', status: 'Completed' },
        { id: 'CHK-1003', patient: 'Priya Sharma', service: 'HbA1C Test', date: '04 May 2024', technician: 'Tech. Anita', status: 'In Progress' },
    ];

    const dummyReports: ReportRecord[] = [
        { id: 'RPT-8091', patient: 'Sneha Reddy', testName: 'Thyroid Profile', date: '03 May 2024', status: 'Generated' },
        { id: 'RPT-8092', patient: 'Priya Sharma', testName: 'HbA1C Test', date: '04 May 2024', status: 'Processing' },
        { id: 'RPT-8093', patient: 'Karan Patel', testName: 'Lipid Profile', date: '02 May 2024', status: 'Pending Approval' },
    ];

    const onboardSteps: OnboardStep[] = [
        { id: 1, label: 'Basic Information', active: true },
        { id: 2, label: 'Contact Details', active: false },
        { id: 3, label: 'Address Details', active: false },
        { id: 4, label: 'Services & Timings', active: false },
        { id: 5, label: 'Login Credentials', active: false },
        { id: 6, label: 'Review & Submit', active: false }
    ];

    // Handlers
    const handleOnboardClick = () => { setFormMode('create'); setEditData(null); setViewMode('form'); };
    const handleEditClick = (clinic: Clinic) => { setFormMode('edit'); setEditData(clinic); setViewMode('form'); };
    const handleWorkspaceClick = (clinic: Clinic) => { setSelectedClinic(clinic); setActiveTab('dashboard'); setViewMode('workspace'); };
    const handleCancel = () => { setViewMode('list'); setEditData(null); setSelectedClinic(null); };

    // Badges
    const getTypeBadge = (type: string) => {
        switch (type) {
            case 'Diagnostic Center': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'Clinic': return 'bg-sky-50 text-sky-600 border-sky-100';
            case 'Home Collection': return 'bg-purple-50 text-purple-600 border-purple-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Completed':
            case 'Generated': return 'text-emerald-600 bg-emerald-50';
            case 'Upcoming':
            case 'In Progress': return 'text-[#5301ab] bg-[#5301ab]/10';
            case 'Pending':
            case 'Pending Approval':
            case 'Processing': return 'text-orange-600 bg-orange-50';
            case 'Cancelled': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">
                        {viewMode === 'workspace' && selectedClinic ? `Clinic Workspace` : 'Medical Centers'}
                    </h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">
                        {viewMode === 'workspace' ? `Currently managing operations for ${selectedClinic?.name}` : 'Onboard and manage clinics, diagnostic centers and home sample collection services'}
                    </p>
                </div>
                {viewMode === 'list' ? (
                    <Button variant="primary" onClick={handleOnboardClick} className="w-full sm:w-auto" icon={<FiPlus className="w-4 h-4" />}>
                        Onboard New Clinic
                    </Button>
                ) : (
                    <Button variant="neutral" onClick={handleCancel} className="w-full sm:w-auto" icon={<FiArrowLeft className="w-4 h-4" />}>
                        Back to List
                    </Button>
                )}
            </div>

            {/* KPI Cards (Only on List View) */}
            {viewMode === 'list' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                    {kpiData.map((kpi, idx) => (
                        <div key={idx} className="bg-white p-4 xl:p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-center hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                                    {kpi.icon}
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-gray-500 mb-0.5">{kpi.title}</p>
                                    <h3 className="font-heading text-2xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                                    <div className="flex items-center gap-1 mt-1.5">
                                        {kpi.trend && (
                                            <span className="text-[10px] font-bold text-emerald-500 flex items-center">
                                                <FiArrowUpRight className="w-3 h-3 mr-0.5" /> {kpi.trend}
                                            </span>
                                        )}
                                        <p className="text-[10px] font-medium text-gray-400">{kpi.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* LIST VIEW */}
            {viewMode === 'list' && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
                        <div className="xl:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full">
                            <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h3 className="font-bold text-gray-900 text-[16px]">Clinics List</h3>
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                                    <div className="w-full sm:w-[320px]">
                                        <Input
                                            iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                                            placeholder="Search by clinic name, type, city..."
                                            theme="purple"
                                        />
                                    </div>
                                    <Button variant="neutral" className="!py-2.5 shrink-0 flex-1 sm:flex-none" icon={<FiFilter className="w-3.5 h-3.5" />}>Filter</Button>
                                    <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
                                </div>
                            </div>

                            <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <table className="w-full text-left border-collapse min-w-[950px]">
                                    <thead>
                                        <tr className="bg-gray-50/50">
                                            <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Clinic Name</th>
                                            <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Type</th>
                                            <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Contact Person</th>
                                            <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Location</th>
                                            <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                                            <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {clinics.map((clinic) => (
                                            <tr key={clinic.id} className={`hover:bg-gray-50/50 transition-colors ${clinic.id === 1 ? 'bg-purple-50/30' : ''}`}>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold shadow-sm ${clinic.logoColor}`}>{clinic.initial}</div>
                                                        <span className={`text-[12px] font-bold ${clinic.id === 1 ? 'text-[#5301ab]' : 'text-gray-900'}`}>{clinic.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide border ${getTypeBadge(clinic.type)}`}>{clinic.type}</span>
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <p className="text-[12px] font-semibold text-gray-900 leading-tight">{clinic.contact}</p>
                                                    <p className="text-[10px] text-gray-500 mt-0.5">{clinic.phone}</p>
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{clinic.location}</td>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${clinic.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                                        <span className={`text-[11px] font-bold ${clinic.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{clinic.status}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <div className="flex items-center justify-center gap-2.5">
                                                        <Button variant="neutral" onClick={() => handleWorkspaceClick(clinic)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" title="Clinic Workspace" icon={<FiGrid className="w-4 h-4" />}>{null}</Button>
                                                        <Button variant="neutral" onClick={() => handleEditClick(clinic)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" title="Edit" icon={<FiEdit2 className="w-4 h-4" />}>{null}</Button>
                                                        <Button variant="neutral" className="!p-0 w-7 h-7 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-4 h-4" />}>{null}</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="xl:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-900 text-[15px]">Clinic Quick View</h3>
                                <div className="flex items-center gap-3">
                                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">Active</span>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white font-bold text-3xl flex items-center justify-center shrink-0 shadow-inner">A</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-[16px] leading-tight">{clinics[0].name}</h4>
                                    <p className="text-[12px] text-gray-500 font-medium mt-1">{clinics[0].email}</p>
                                    <p className="text-[12px] text-gray-500 font-medium">{clinics[0].phone}</p>
                                </div>
                            </div>
                            <div className="space-y-3 mt-auto">
                                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="secondary" onClick={() => handleWorkspaceClick(clinics[0])} className="!border-[#5301ab]/30 !bg-[#5301ab]/5 hover:!bg-[#5301ab]/10 !text-[12px] !text-[#5301ab]" icon={<FiGrid className="w-4 h-4" />}>Open Workspace</Button>
                                    <Button variant="neutral" onClick={() => handleEditClick(clinics[0])} className="!text-[12px]" icon={<FiEdit2 className="w-4 h-4 text-gray-500" />}>Edit Profile</Button>
                                </div>
                                <Button variant="danger" className="w-full !text-[12px]" icon={<FiXCircle className="w-4 h-4" />}>Deactivate Center</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* FORM VIEW (Create/Edit Clinic) */}
            {viewMode === 'form' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="lg:col-span-8 lg:col-start-3 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] h-full flex flex-col">
                        <div className="flex items-center gap-3 border-b border-gray-50 pb-5 mb-8">
                            <div className="w-10 h-10 bg-[#5301ab]/10 text-[#5301ab] rounded-xl flex items-center justify-center">
                                {formMode === 'edit' ? <FiEdit2 className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-[18px]">
                                    {formMode === 'edit' ? 'Edit Clinic Details' : 'Onboard New Clinic'}
                                </h3>
                                <p className="text-[12px] font-medium text-gray-500 mt-0.5">Please provide the necessary information below</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 flex-1">
                            <div className="w-full md:w-[180px] shrink-0 border-b md:border-b-0 md:border-r border-gray-100 pb-5 md:pb-0 md:pr-6 flex flex-row md:flex-col gap-6 md:gap-0 md:space-y-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {onboardSteps.map((step) => (
                                    <div key={step.id} className="flex items-center gap-3 shrink-0">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${step.active ? 'border-[#5301ab] bg-white ring-4 ring-[#5301ab]/10' : 'border-gray-200 bg-transparent'}`}>
                                            {step.active && <div className="w-2.5 h-2.5 bg-[#5301ab] rounded-full"></div>}
                                        </div>
                                        <span className={`text-[13px] font-bold transition-colors ${step.active ? 'text-[#5301ab]' : 'text-gray-400'}`}>{step.label}</span>
                                    </div>
                                ))}
                            </div>

                            <form className="flex-1 space-y-8 flex flex-col">
                                <div>
                                    <h4 className="text-[14px] font-bold text-gray-900 border-b border-gray-100 pb-2 mb-5">Basic Information</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Input label="Clinic Name" required defaultValue={editData?.name} placeholder="Enter clinic name" theme="purple" />
                                        <Select label="Clinic Type" required options={['Diagnostic Center', 'Clinic', 'Home Collection']} defaultValue={editData?.type} placeholder="Select clinic type" theme="purple" />
                                        <Input label="Contact Person" required defaultValue={editData?.contact} placeholder="Enter contact person" theme="purple" />
                                        <Input label="Email Address" type="email" required defaultValue={editData?.email} placeholder="Enter email address" theme="purple" />
                                        <Input
                                            label="Phone Number"
                                            type="tel"
                                            required
                                            defaultValue={editData?.phone?.replace('+91 ', '')}
                                            prefix={<><span className="text-[14px]">🇮🇳</span><span className="text-[12px] font-semibold text-gray-700">+91</span></>}
                                            placeholder="Enter phone number"
                                            theme="purple"
                                        />
                                        <Input label="Registration Number" placeholder="Enter registration number" theme="purple" />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[14px] font-bold text-gray-900 border-b border-gray-100 pb-2 mb-5">Login Credentials</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Input label="Username" required defaultValue={editData?.username} placeholder="Enter username" theme="purple" />
                                        <div className="hidden sm:block"></div>
                                        <Input label="Password" type="password" required placeholder="Enter password" theme="purple" />
                                        <Input label="Confirm Password" type="password" required placeholder="Confirm password" theme="purple" />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-4 pt-8 mt-auto border-t border-gray-100">
                                    <Button variant="neutral" onClick={handleCancel} className="w-full sm:w-auto px-6 py-3">Cancel & Go Back</Button>
                                    <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto px-8 py-3" icon={formMode === 'edit' ? <FiCheckCircle className="w-4 h-4" /> : <FiArrowUpRight className="w-4 h-4" />}>
                                        {formMode === 'edit' ? 'Save Changes' : 'Next Step'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* VERTICAL PORTAL WORKSPACE VIEW */}
            {viewMode === 'workspace' && selectedClinic && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
                    
                    {/* Left Sidebar: Clinic Profile & Nav */}
                    <div className="xl:col-span-3 flex flex-col gap-5">
                        
                        {/* Profile Card */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 relative overflow-hidden">
                            {/* Decorative background flair */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl ${selectedClinic.logoColor}`}></div>
                            
                            <div className="flex flex-col items-center text-center relative z-10">
                                <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-lg ${selectedClinic.logoColor} mb-4`}>
                                    {selectedClinic.initial}
                                </div>
                                <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight mb-1">{selectedClinic.name}</h3>
                                <p className="text-[12px] font-medium text-[#5301ab] bg-[#5301ab]/5 px-3 py-1 rounded-md mb-4">{selectedClinic.type}</p>
                                
                                <div className="w-full space-y-2.5 text-left border-t border-gray-100 pt-4 mt-2">
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiMail className="w-3.5 h-3.5" /></div>
                                        <span className="truncate">{selectedClinic.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiPhone className="w-3.5 h-3.5" /></div>
                                        <span>{selectedClinic.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiMapPin className="w-3.5 h-3.5" /></div>
                                        <span className="truncate">{selectedClinic.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Menu Card */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-3">
                            <nav className="flex flex-col gap-1">
                                <button 
                                    onClick={() => setActiveTab('dashboard')} 
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'dashboard' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiGrid className="w-4 h-4" /> Dashboard Overview
                                </button>
                                <button 
                                    onClick={() => setActiveTab('bookings')} 
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'bookings' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiCalendar className="w-4 h-4" /> Bookings Management
                                </button>
                                <button 
                                    onClick={() => setActiveTab('checkups')} 
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'checkups' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiActivity className="w-4 h-4" /> Checkups Record
                                </button>
                                <button 
                                    onClick={() => setActiveTab('reports')} 
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'reports' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiFileText className="w-4 h-4" /> Reports Access
                                </button>
                                <div className="h-px bg-gray-100 my-2 mx-2"></div>
                                <button 
                                    onClick={() => setActiveTab('settings')} 
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'settings' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiSettings className="w-4 h-4" /> Clinic Settings
                                </button>
                            </nav>
                        </div>

                    </div>

                    {/* Right Main Content Area */}
                    <div className="xl:col-span-9 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] min-h-[600px] flex flex-col relative overflow-hidden">
                        
                        {/* Dynamic Header Based on Tab */}
                        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[18px]">
                                    {activeTab === 'dashboard' && 'Operations Dashboard'}
                                    {activeTab === 'bookings' && 'Bookings Management'}
                                    {activeTab === 'checkups' && 'Health Checkup Records'}
                                    {activeTab === 'reports' && 'Reports Access & Uploads'}
                                    {activeTab === 'settings' && 'Clinic Configuration'}
                                </h3>
                                <p className="text-[12px] text-gray-500 font-medium mt-0.5">
                                    {activeTab === 'dashboard' && 'Overview of todays activities and operations.'}
                                    {activeTab === 'bookings' && 'Manage upcoming and past patient bookings.'}
                                    {activeTab === 'checkups' && 'Track progress of diagnostic checkups.'}
                                    {activeTab === 'reports' && 'View, download, and upload patient reports.'}
                                    {activeTab === 'settings' && 'Manage operational status and clinic profile.'}
                                </p>
                            </div>
                        </div>

                        {/* Tab Content Area */}
                        <div className="p-6 flex-1 bg-white">
                            
                            {/* 1. Dashboard Tab */}
                            {activeTab === 'dashboard' && (
                                <div className="space-y-6 animate-in fade-in duration-400">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3"><FiCalendar className="text-[#5301ab] w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Today's Bookings</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">42</p>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-3"><FiActivity className="text-orange-500 w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pending Checkups</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">18</p>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3"><FiFileText className="text-blue-500 w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Reports Uploaded</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">1,102</p>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3"><FiUser className="text-emerald-500 w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Active Staff</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">14</p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                                            <FiClock className="w-4 h-4 text-[#5301ab]"/> Recent Activity Log
                                        </h3>
                                        <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-gray-900 text-[13px]">Report Generated</span>
                                                        <span className="text-[10px] font-bold text-emerald-500">10 mins ago</span>
                                                    </div>
                                                    <p className="text-[12px] text-gray-500">Test results uploaded successfully for patient <strong className="text-gray-700">Arjun Nair</strong>.</p>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-[#5301ab] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-gray-900 text-[13px]">New Booking</span>
                                                        <span className="text-[10px] font-bold text-[#5301ab]">1 hour ago</span>
                                                    </div>
                                                    <p className="text-[12px] text-gray-500">New diagnostic booking received from Corporate <strong className="text-gray-700">Tech Innovators</strong>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 2. Bookings Management Tab */}
                            {activeTab === 'bookings' && (
                                <div className="flex flex-col h-full animate-in fade-in duration-400 space-y-5">
                                    <div className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                                        <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            <Button variant="secondary" className="!bg-[#5301ab] !text-white !border-none !py-1.5 !px-4 !text-[12px] shadow-md">All</Button>
                                            <Button variant="neutral" className="!border-none !py-1.5 !px-4 !text-[12px] text-gray-500 hover:text-gray-900">Upcoming</Button>
                                            <Button variant="neutral" className="!border-none !py-1.5 !px-4 !text-[12px] text-gray-500 hover:text-gray-900">Completed</Button>
                                        </div>
                                        <div className="flex gap-3">
                                            <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search bookings..." theme="purple" className="bg-white" />
                                            <Button variant="neutral" className="bg-white" icon={<FiFilter className="w-4 h-4"/>}>Filter</Button>
                                        </div>
                                    </div>
                                    <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Booking ID</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Patient Name</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Service</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Date & Time</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {dummyBookings.map((b) => (
                                                    <tr key={b.id} className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="px-5 py-4 text-[12px] font-bold text-[#5301ab]">{b.id}</td>
                                                        <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{b.patient}</td>
                                                        <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{b.service}</td>
                                                        <td className="px-5 py-4">
                                                            <p className="text-[12px] font-bold text-gray-800">{b.apptDate}</p>
                                                            <p className="text-[11px] text-gray-500">{b.time}</p>
                                                        </td>
                                                        <td className="px-5 py-4"><span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold tracking-wide ${getStatusBadge(b.status)}`}>{b.status}</span></td>
                                                        <td className="px-5 py-4 text-center">
                                                            <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-[#5301ab] bg-white shadow-sm" icon={<FiEye className="w-4 h-4"/>}>{null}</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* 3. Checkups Record Tab */}
                            {activeTab === 'checkups' && (
                                <div className="flex flex-col h-full animate-in fade-in duration-400 space-y-5">
                                    <div className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                                        <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            <Button variant="secondary" className="!bg-[#5301ab] !text-white !border-none !py-1.5 !px-4 !text-[12px] shadow-md">Active/Pending</Button>
                                            <Button variant="neutral" className="!border-none !py-1.5 !px-4 !text-[12px] text-gray-500 hover:text-gray-900">Completed</Button>
                                        </div>
                                        <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search checkups..." theme="purple" className="bg-white" />
                                    </div>
                                    <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Checkup ID</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Patient Name</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Service/Test</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Assigned Tech</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {dummyCheckups.map((chk) => (
                                                    <tr key={chk.id} className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="px-5 py-4 text-[12px] font-bold text-[#5301ab]">{chk.id}</td>
                                                        <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{chk.patient}</td>
                                                        <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{chk.service}</td>
                                                        <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{chk.technician}</td>
                                                        <td className="px-5 py-4"><span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold tracking-wide ${getStatusBadge(chk.status)}`}>{chk.status}</span></td>
                                                        <td className="px-5 py-4 text-center"><Button variant="neutral" className="!py-1.5 !px-3 !text-[11px] bg-white shadow-sm" icon={<FiEdit2 className="w-3 h-3 text-gray-400" />}>Update</Button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* 4. Reports Access Tab */}
                            {activeTab === 'reports' && (
                                <div className="flex flex-col h-full animate-in fade-in duration-400 space-y-5">
                                    <div className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                                        <div className="w-full sm:w-[320px]">
                                            <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search reports..." theme="purple" className="bg-white" />
                                        </div>
                                        <Button variant="primary" className="shadow-md shadow-[#5301ab]/20" icon={<FiUploadCloud className="w-4 h-4" />}>Upload New Report</Button>
                                    </div>
                                    <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Report ID</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Patient Name</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Test Name</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Date</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {dummyReports.map((rpt) => (
                                                    <tr key={rpt.id} className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="px-5 py-4 text-[12px] font-bold text-gray-500">{rpt.id}</td>
                                                        <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{rpt.patient}</td>
                                                        <td className="px-5 py-4 text-[12px] font-medium text-[#5301ab]">{rpt.testName}</td>
                                                        <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{rpt.date}</td>
                                                        <td className="px-5 py-4"><span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold tracking-wide ${getStatusBadge(rpt.status)}`}>{rpt.status}</span></td>
                                                        <td className="px-5 py-4 text-center">
                                                            {rpt.status === 'Generated' ? (
                                                                <Button variant="neutral" className="!py-1.5 !px-3 !text-[11px] bg-white shadow-sm border-blue-100 text-blue-600 hover:bg-blue-50" title="Download PDF" icon={<FiDownload className="w-3.5 h-3.5"/>}>Download</Button>
                                                            ) : (
                                                                <Button variant="neutral" className="!py-1.5 !px-3 !text-[11px] bg-white shadow-sm" icon={<FiUploadCloud className="w-3.5 h-3.5 text-gray-400" />}>Upload PDF</Button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* 5. Clinic Settings Tab */}
                            {activeTab === 'settings' && (
                                <div className="flex flex-col animate-in fade-in duration-400 max-w-4xl">
                                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <Input label="Clinic / Center Name" defaultValue={selectedClinic.name} theme="purple" className="bg-white" />
                                            <Input label="Contact Person" defaultValue={selectedClinic.contact} theme="purple" className="bg-white" />
                                            <Input label="Email Address" defaultValue={selectedClinic.email} theme="purple" className="bg-white" />
                                            <Input label="Phone Number" defaultValue={selectedClinic.phone} theme="purple" className="bg-white" />
                                        </div>
                                        
                                        <div className="border-t border-gray-200 pt-6 mt-2">
                                            <h4 className="font-bold text-[14px] text-gray-900 mb-4">Operational Status</h4>
                                            <div className="flex items-center justify-between bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                                                <div>
                                                    <p className="font-bold text-[13px] text-gray-900">Accepting New Bookings</p>
                                                    <p className="text-[12px] text-gray-500 mt-0.5">Toggle to temporarily pause new incoming bookings from the Zorocare platform.</p>
                                                </div>
                                                <ToggleSwitch theme="purple" defaultChecked />
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-4">
                                            <Button variant="primary" className="shadow-md shadow-[#5301ab]/20 !px-8" icon={<FiCheckCircle className="w-4 h-4" />}>Save Settings</Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminMedicalCentersCom;