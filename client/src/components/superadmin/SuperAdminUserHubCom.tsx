import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiUsers, FiShield, FiUserCheck, FiUserPlus, FiFileText,
    FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiMoreVertical,
    FiChevronLeft, FiChevronRight, FiCheckCircle,
    FiPlus, FiArrowUpRight, FiXCircle, FiArrowLeft, FiGrid,
    FiHeart, FiActivity, FiSmile, FiTruck, FiDollarSign, FiSmartphone, FiUploadCloud
} from 'react-icons/fi';
import { TbBuildingCommunity } from 'react-icons/tb';

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

interface UserData {
    id: number;
    name: string;
    email: string;
    phone: string;
    type: string;
    organization: string;
    status: string;
    onboarded: string;
    dependents: number;
    initial: string;
    color: string;
}

interface OnboardStep {
    id: number;
    label: string;
    active: boolean;
}

const SuperAdminUserHubCom: FC = () => {
    const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit'>('list');
    const [creationMethod, setCreationMethod] = useState<'manual' | 'bulk'>('manual');
    const [editData, setEditData] = useState<UserData | null>(null);

    const kpiData: KPI[] = [
        { title: 'Total Users', value: '24,560', subtitle: 'All registered platform users', trend: '+18%', icon: <FiUsers className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Active Users', value: '19,845', subtitle: '81% of total users', trend: '+12%', icon: <FiUserCheck className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Corporate Users', value: '14,200', subtitle: 'Linked to corporates', icon: <TbBuildingCommunity className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Insurance Users', value: '7,400', subtitle: 'Policyholders covered', icon: <FiShield className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Direct Users', value: '2,960', subtitle: 'Individual subscriptions', trend: '+8%', icon: <FiUserPlus className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' }
    ];

    const usersList: UserData[] = [
        { id: 1, name: 'Arjun Nair', email: 'arjun.nair@zorocare.com', phone: '+91 98765 43210', type: 'Corporate', organization: 'Tech Innovators Pvt Ltd', status: 'Active', onboarded: '12 Apr 2024', dependents: 3, initial: 'AN', color: 'bg-purple-600' },
        { id: 2, name: 'Sneha Reddy', email: 'sneha.reddy@zorocare.com', phone: '+91 91234 56789', type: 'Insurance', organization: 'Safeguard Insurance', status: 'Active', onboarded: '18 Mar 2024', dependents: 2, initial: 'SR', color: 'bg-emerald-500' },
        { id: 3, name: 'Vikram Singh', email: 'vikram.singh@zorocare.com', phone: '+91 99887 66554', type: 'Direct', organization: 'Individual', status: 'Active', onboarded: '05 Feb 2024', dependents: 1, initial: 'VS', color: 'bg-blue-500' },
        { id: 4, name: 'Priya Sharma', email: 'priya.sharma@zorocare.com', phone: '+91 93456 78901', type: 'Corporate', organization: 'Global Bytes Solutions', status: 'Inactive', onboarded: '22 Jan 2024', dependents: 0, initial: 'PS', color: 'bg-orange-500' },
    ];

    const onboardSteps: OnboardStep[] = [
        { id: 1, label: 'Basic Information', active: true },
        { id: 2, label: 'Contact Details', active: false },
        { id: 3, label: 'Organization Link', active: false },
        { id: 4, label: 'Dependent Details', active: false },
        { id: 5, label: 'Review & Submit', active: false }
    ];

    const handleCreateClick = () => {
        setEditData(null);
        setCreationMethod('manual');
        setViewMode('create');
    };
    const handleEditClick = (user: UserData) => { setEditData(user); setViewMode('edit'); };
    const handleCancel = () => { setViewMode('list'); setEditData(null); };

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">User Management</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Manage platform users, onboarding, dependents, and service permissions</p>
                </div>
                {viewMode === 'list' ? (
                    <Button variant="primary" onClick={handleCreateClick} icon={<FiPlus className="w-4 h-4" />} className="w-full sm:w-auto">
                        Create New User
                    </Button>
                ) : (
                    <Button variant="neutral" onClick={handleCancel} icon={<FiArrowLeft className="w-4 h-4" />} className="w-full sm:w-auto">
                        Back to List
                    </Button>
                )}
            </div>

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

            {viewMode === 'list' && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="xl:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full">
                        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h3 className="font-bold text-gray-900 text-lg">All Users</h3>
                            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                                <div className="w-full sm:w-[280px]">
                                    <Input
                                        iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                                        placeholder="Search by user name or email..."
                                        theme="purple"
                                    />
                                </div>
                                <Button variant="neutral" className="!py-2.5 shrink-0 flex-1 sm:flex-none" icon={<FiFilter className="w-4 h-4" />}>Filter</Button>
                                <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
                            </div>
                        </div>

                        <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-50/50">
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">User Name</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Phone</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">User Type</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Organization</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Joined Date</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {usersList.map((user) => (
                                        <tr key={user.id} className={`hover:bg-gray-50/50 transition-colors ${user.id === 1 ? 'bg-purple-50/30' : ''}`}>
                                            <td className="px-5 py-3.5 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold ${user.color}`}>{user.initial}</div>
                                                    <span className={`text-[13px] font-bold ${user.id === 1 ? 'text-[#5301ab]' : 'text-gray-900'}`}>{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.email}</td>
                                            <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.phone}</td>
                                            <td className="px-5 py-3.5 whitespace-nowrap">
                                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${user.type === 'Corporate' ? 'bg-purple-100 text-[#5301ab]' : user.type === 'Insurance' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700'}`}>{user.type}</span>
                                            </td>
                                            <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{user.organization}</td>
                                            <td className="px-5 py-3.5 whitespace-nowrap">
                                                <div className="flex items-center gap-1.5">
                                                    <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                                    <span className={`text-[12px] font-bold ${user.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{user.status}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{user.onboarded}</td>
                                            <td className="px-5 py-3.5 whitespace-nowrap">
                                                <div className="flex items-center justify-center gap-2.5">
                                                    <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" icon={<FiEye className="w-3.5 h-3.5" />}>{null}</Button>
                                                    <Button variant="neutral" onClick={() => handleEditClick(user)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                                                    <Button variant="neutral" className="!p-0 w-7 h-7 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-4 h-4" />}>{null}</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[13px] gap-4">
                            <span className="text-gray-500 font-medium">Showing 1 to 4 of 24,560 results</span>
                            <div className="flex items-center gap-1.5">
                                <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-gray-700" icon={<FiChevronLeft className="w-4 h-4" />}>{null}</Button>
                                <Button variant="primary" className="!p-0 w-8 h-8">1</Button>
                                <Button variant="neutral" className="!p-0 w-8 h-8">2</Button>
                                <Button variant="neutral" className="!p-0 w-8 h-8">3</Button>
                                <Button variant="neutral" className="!p-0 w-8 h-8">4</Button>
                                <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-gray-700" icon={<FiChevronRight className="w-4 h-4" />}>{null}</Button>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[15px]">User Details</h3>
                            <div className="flex items-center gap-3">
                                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">Active</span>
                                <Button variant="neutral" className="!p-0 w-8 h-8 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0 font-bold text-[#5301ab] text-xl">
                                AN
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-[15px] leading-tight">{usersList[0].name}</h4>
                                <p className="text-[12px] text-gray-500 font-medium mt-1">{usersList[0].email}</p>
                                <p className="text-[12px] text-gray-500 font-medium">{usersList[0].phone}</p>
                                <p className="text-[12px] text-gray-500 font-medium">{usersList[0].organization}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-b border-gray-50 py-5 mb-6">
                            <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">User Type</p><p className="text-[13px] font-bold text-gray-900">{usersList[0].type}</p></div>
                            <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Dependents</p><p className="text-[13px] font-bold text-gray-900">{usersList[0].dependents}</p></div>
                            <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Joined Date</p><p className="text-[13px] font-bold text-gray-900">{usersList[0].onboarded}</p></div>
                            <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Smart Ring</p><p className="text-[13px] font-bold text-emerald-600">Connected</p></div>
                        </div>

                        <div className="space-y-3 mt-auto">
                            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Button variant="neutral" onClick={() => handleEditClick(usersList[0])} icon={<FiEdit2 className="w-3.5 h-3.5 text-gray-500" />}>Edit User</Button>
                                <Button variant="danger" icon={<FiXCircle className="w-3.5 h-3.5" />}>Deactivate</Button>
                            </div>
                            <Button variant="neutral" className="w-full" icon={<FiFileText className="w-3.5 h-3.5 text-gray-500" />}>View Health Records</Button>
                        </div>
                    </div>
                </div>
            )}

            {(viewMode === 'create' || viewMode === 'edit') && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="xl:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                        <div className="flex items-center justify-between border-b border-gray-50 pb-4 mb-6">
                            <div className="flex items-center gap-2">
                                {viewMode === 'edit' ? <FiEdit2 className="w-5 h-5 text-[#5301ab]" /> : <FiUserPlus className="w-5 h-5 text-[#5301ab]" />}
                                <h3 className="font-bold text-gray-900 text-[15px]">
                                    {viewMode === 'edit' ? 'Edit User Details' : 'Create New User'}
                                </h3>
                            </div>
                            {/* Method Toggles */}
                            {viewMode === 'create' && (
                                <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                                    <button
                                        onClick={() => setCreationMethod('manual')}
                                        className={`px-3 py-1 text-[11px] font-bold rounded-md transition-colors ${creationMethod === 'manual' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Manual
                                    </button>
                                    <button
                                        onClick={() => setCreationMethod('bulk')}
                                        className={`px-3 py-1 text-[11px] font-bold rounded-md transition-colors ${creationMethod === 'bulk' ? 'bg-white shadow-sm text-[#5301ab]' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Bulk Upload
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* MANUAL CREATION FLOW */}
                        {creationMethod === 'manual' && (
                            <div className="flex flex-col md:flex-row gap-6 flex-1 animate-in fade-in duration-300">
                                <div className="w-full md:w-[140px] shrink-0 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4 flex flex-row md:flex-col gap-6 md:gap-0 md:space-y-5 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {onboardSteps.map((step) => (
                                        <div key={step.id} className="flex items-center gap-2.5 shrink-0">
                                            <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${step.active ? 'border-[#5301ab] bg-white ring-2 ring-[#5301ab]/20' : 'border-gray-200 bg-transparent'}`}>
                                                {step.active && <div className="w-1.5 h-1.5 bg-[#5301ab] rounded-full"></div>}
                                            </div>
                                            <span className={`text-[12px] font-bold ${step.active ? 'text-[#5301ab]' : 'text-gray-400'}`}>{step.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <form className="flex-1 space-y-4 flex flex-col">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Input label="Full Name" required defaultValue={editData?.name} placeholder="Enter full name" theme="purple" />
                                        <Input label="Email Address" type="email" required defaultValue={editData?.email} placeholder="Enter email address" theme="purple" />
                                        <Input
                                            label="Contact Number"
                                            type="tel"
                                            required
                                            defaultValue={editData?.phone?.replace('+91 ', '')}
                                            prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[13px] font-semibold text-gray-700">+91</span></>}
                                            placeholder="Enter contact number"
                                            theme="purple"
                                        />
                                        <Select label="User Type" required options={['Corporate', 'Insurance', 'Direct']} defaultValue={editData?.type} theme="purple" />
                                        <Input label="Organization / Partner Name" defaultValue={editData?.organization} placeholder="Enter company or insurer name" theme="purple" />
                                        <Input label="Date of Birth" type="date" theme="purple" />
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-3 pt-6 mt-auto">
                                        <Button variant="neutral" onClick={handleCancel} className="w-full sm:w-auto">Cancel</Button>
                                        <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto" icon={viewMode === 'edit' ? undefined : <FiChevronRight className="w-4 h-4" />}>
                                            {viewMode === 'edit' ? 'Save Changes' : 'Next Step'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* BULK UPLOAD FLOW */}
                        {creationMethod === 'bulk' && viewMode === 'create' && (
                            <div className="flex flex-col flex-1 animate-in fade-in duration-300 space-y-6">
                                <div className="bg-[#5301ab]/5 border border-[#5301ab]/20 rounded-2xl p-5 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center shrink-0">
                                        <FiFileText className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-1">Download Sample Template</h4>
                                        <p className="text-[12px] text-gray-600 mb-3 leading-relaxed">Please download the template file, fill it out with user details following the correct format, and upload it back here.</p>
                                        <div className="flex gap-3">
                                            <Button variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/10" icon={<FiDownload className="w-3 h-3" />}>Template (.xlsx)</Button>
                                            <Button variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/10" icon={<FiDownload className="w-3 h-3" />}>Template (.csv)</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100/50 hover:border-[#5301ab]/30 transition-colors flex flex-col items-center justify-center text-center p-8 group cursor-pointer min-h-[220px]">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                        <FiUploadCloud className="w-8 h-8 text-[#5301ab]" />
                                    </div>
                                    <h3 className="text-[15px] font-bold text-gray-900 mb-2">Drag & Drop File Here</h3>
                                    <p className="text-[12px] text-gray-500 font-medium mb-6">Supports .csv, .xls, .xlsx up to 10MB</p>
                                    <Button variant="neutral" className="bg-white pointer-events-none">Browse Computer</Button>
                                </div>

                                <div className="flex justify-end pt-4 mt-auto">
                                    <Button variant="neutral" onClick={handleCancel} className="mr-3">Cancel</Button>
                                    <Button variant="primary" icon={<FiCheckCircle className="w-4 h-4" />}>Process Upload</Button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="xl:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[15px]">Zorocare Users Service Permissions</h3>
                                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Enable or disable service permissions for this user</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold">
                                <span className="text-gray-500">Quick Select:</span>
                                <Button variant="secondary" className="!px-3 !py-1.5 !text-[12px] !border-none !shadow-none !bg-[#5301ab]/10 hover:!bg-[#5301ab]/20">All</Button>
                                <Button variant="neutral" className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">None</Button>
                                <Button variant="neutral" className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-[#5301ab] hover:text-[#43008a]">Default</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1">
                            {/* Column 1 */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiGrid className="w-4 h-4 text-[#5301ab]" /> Dashboard</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dashboard</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiUsers className="w-4 h-4 text-[#5301ab]" /> Dependent</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dependent</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiSmartphone className="w-4 h-4 text-[#5301ab]" /> Smart Ring</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Smart Ring</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiShield className="w-4 h-4 text-[#5301ab]" /> Sponsored Services</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Sponsored Services</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiActivity className="w-4 h-4 text-[#5301ab]" /> Healthcheckups</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Healthcheckups</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiHeart className="w-4 h-4 text-[#5301ab]" /> Wellness Services</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Wellness Services</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiFileText className="w-4 h-4 text-[#5301ab]" /> Care Programs</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Care Programs</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiSmile className="w-4 h-4 text-[#5301ab]" /> Dental</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dental</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiEye className="w-4 h-4 text-[#5301ab]" /> Eye</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Eye</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiEye className="w-4 h-4 text-[#5301ab]" /> Optical</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Optical</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiTruck className="w-4 h-4 text-[#5301ab]" /> Ambulance</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Ambulance</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiDollarSign className="w-4 h-4 text-[#5301ab]" /> Subscription</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Subscription</span><ToggleSwitch theme="purple" defaultChecked /></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-end pt-6 mt-4 border-t border-gray-50">
                            <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto" icon={<FiCheckCircle className="w-4 h-4" />}>Save Permissions</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuperAdminUserHubCom;