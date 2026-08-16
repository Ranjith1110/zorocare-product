import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiChevronDown, FiArrowUpRight, FiArrowDownRight, FiSearch, FiFilter,
    FiPlus, FiEye, FiEdit2, FiMoreVertical, FiArrowRight,
    FiUsers, FiUserPlus, FiUserMinus, FiUserX, FiShield,
    FiLock, FiUpload, FiList
} from 'react-icons/fi';

import Button from '../common/Button';

interface KPI {
    title: string; value: string; trend: string; isPositive: boolean; icon: ReactNode; color: string; bg: string;
}
interface UserDirectoryEntry {
    id: string; internalId: string; name: string; avatar: string; role: string; roleColor: string; roleBg: string; department: string; email: string; phone: string; status: 'Active' | 'Inactive' | 'Pending' | 'Blocked'; lastActiveDate: string; lastActiveTime: string; joinedOn: string;
}
interface ActivityEntry {
    label: string; value: string; trend: string; isPositive: boolean; icon: ReactNode; color: string; bg: string;
}
interface QuickAction {
    title: string; desc: string; icon: ReactNode; color: string; bg: string; actionIcon: ReactNode;
}

const CorporateUserManagementCom: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const topKPIs: KPI[] = [
        { title: 'Total Employees', value: '12,560', trend: '15.3%', isPositive: true, icon: <FiUsers className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Active Accounts', value: '9,845', trend: '12.8%', isPositive: true, icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Inactive Accounts', value: '1,245', trend: '4.6%', isPositive: false, icon: <FiUserMinus className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'New This Month', value: '78', trend: '18.2%', isPositive: true, icon: <FiUserPlus className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const overviewKPIs: KPI[] = [
        { title: 'New Employees', value: '78', trend: '18.2%', isPositive: true, icon: <FiUserPlus />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Active Benefits', value: '9,845', trend: '12.8%', isPositive: true, icon: <FiShield />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Deactivated', value: '23', trend: '8.9%', isPositive: false, icon: <FiUserMinus />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Blocked Access', value: '12', trend: '14.3%', isPositive: false, icon: <FiLock />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    const usersDirectory: UserDirectoryEntry[] = [
        { id: '1', internalId: 'EMP-1001', name: 'Ramesh Kumar', avatar: 'https://i.pravatar.cc/150?img=11', role: 'HR Admin', roleColor: 'text-[#5301ab]', roleBg: 'bg-[#5301ab]/10', department: 'Human Resources', email: 'ramesh.k@company.com', phone: '+91 98765 43210', status: 'Active', lastActiveDate: '18 May 2026', lastActiveTime: '10:45 AM', joinedOn: '15 Jan 2026' },
        { id: '2', internalId: 'EMP-1002', name: 'Sunita Sharma', avatar: 'https://i.pravatar.cc/150?img=5', role: 'Employee', roleColor: 'text-blue-600', roleBg: 'bg-blue-50', department: 'Engineering', email: 'sunita.s@company.com', phone: '+91 91234 56789', status: 'Active', lastActiveDate: '18 May 2026', lastActiveTime: '09:30 AM', joinedOn: '20 Jan 2026' },
        { id: '3', internalId: 'EMP-1003', name: 'Anil Verma', avatar: 'https://i.pravatar.cc/150?img=12', role: 'Dept Head', roleColor: 'text-orange-600', roleBg: 'bg-orange-50', department: 'Sales & Marketing', email: 'anil.v@company.com', phone: '+91 99887 66554', status: 'Active', lastActiveDate: '17 May 2026', lastActiveTime: '07:15 PM', joinedOn: '02 Feb 2026' },
        { id: '4', internalId: 'DEP-1004', name: 'Priya Menon', avatar: 'https://i.pravatar.cc/150?img=9', role: 'Dependent', roleColor: 'text-emerald-600', roleBg: 'bg-emerald-50', department: 'Linked to EMP-1002', email: 'priya.menon@gmail.com', phone: '+91 97654 32109', status: 'Inactive', lastActiveDate: '10 May 2026', lastActiveTime: '04:20 PM', joinedOn: '11 Mar 2026' },
        { id: '5', internalId: 'EMP-1005', name: 'Vikram Singh', avatar: 'https://i.pravatar.cc/150?img=14', role: 'Employee', roleColor: 'text-blue-600', roleBg: 'bg-blue-50', department: 'Finance', email: 'vikram.s@company.com', phone: '+91 93456 78901', status: 'Active', lastActiveDate: '18 May 2026', lastActiveTime: '11:05 AM', joinedOn: '05 Apr 2026' },
        { id: '6', internalId: 'DEP-1006', name: 'Meera Patel', avatar: 'https://i.pravatar.cc/150?img=1', role: 'Dependent', roleColor: 'text-emerald-600', roleBg: 'bg-emerald-50', department: 'Linked to EMP-1005', email: 'meera.patel@gmail.com', phone: '+91 90000 11122', status: 'Pending', lastActiveDate: '-', lastActiveTime: '', joinedOn: '18 May 2026' },
    ];

    const userActivities: ActivityEntry[] = [
        { label: 'Portal Logins', value: '2,845', trend: '16.3%', isPositive: true, icon: <FiShield />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Profile Updates', value: '452', trend: '12.8%', isPositive: true, icon: <FiUsers />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { label: 'Dependents Added', value: '128', trend: '6.2%', isPositive: false, icon: <FiUserPlus />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'New Registrations', value: '78', trend: '18.2%', isPositive: true, icon: <FiUserPlus />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { label: 'Accounts Deactivated', value: '23', trend: '8.9%', isPositive: false, icon: <FiUserX />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    const quickActions: QuickAction[] = [
        { title: 'Add Employee', desc: 'Create a new employee profile', icon: <FiUsers />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10', actionIcon: <FiPlus /> },
        { title: 'Import Roster', desc: 'Upload employees via CSV', icon: <FiUpload />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10', actionIcon: <FiUpload /> },
        { title: 'Manage Policies', desc: 'Assign health plans & limits', icon: <FiShield />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10', actionIcon: <FiShield /> },
        { title: 'Activity Logs', desc: 'View all portal usage', icon: <FiList />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10', actionIcon: <FiList /> },
    ];

    // Read the searchQuery state to filter the table dynamically
    const filteredUsers = usersDirectory.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.internalId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Employee & User Management</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Manage employee profiles, dependents, roles, and platform activity.</p>
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
                            <div className="flex items-center gap-2 mt-1">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{kpi.title}</p>
                                <p className={`text-[9px] font-bold flex items-center gap-0.5 ${kpi.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {kpi.isPositive ? <FiArrowUpRight /> : <FiArrowDownRight />}
                                    {kpi.trend} <span className="text-gray-400 font-medium font-sans ml-0.5 hidden xl:inline">vs last month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div className="xl:col-span-6 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[16px]">Users Overview</h3>
                        <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-100">
                            This Month <FiChevronDown />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {overviewKPIs.map((kpi, idx) => (
                            <div key={idx} className="bg-gray-50/50 border border-gray-100 p-3 rounded-md flex flex-col items-start text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${kpi.bg} ${kpi.color}`}>
                                        <span className="text-[12px]">{kpi.icon}</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-gray-500 leading-tight">{kpi.title}</p>
                                </div>
                                <p className="text-[16px] font-bold text-gray-900 leading-none mb-1.5">{kpi.value}</p>
                                <p className={`text-[10px] font-bold flex items-center gap-0.5 ${kpi.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {kpi.isPositive ? <FiArrowUpRight /> : <FiArrowDownRight />} {kpi.trend}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 relative w-full min-h-[160px] mt-auto">
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold h-full pb-6">
                            <span>400</span><span>300</span><span>200</span><span>100</span><span>0</span>
                        </div>
                        <div className="absolute left-7 right-0 top-0 bottom-0">
                            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#5301ab" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,30 C10,32 15,20 25,20 C35,20 40,25 50,22 C60,19 65,10 75,10 C85,10 90,32 100,28 L100,40 L0,40 Z" fill="url(#userGradient)" />
                                <path d="M0,30 C10,32 15,20 25,20 C35,20 40,25 50,22 C60,19 65,10 75,10 C85,10 90,32 100,28" fill="none" stroke="#5301ab" strokeWidth="1.5" />
                                <circle cx="25" cy="20" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="50" cy="22" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="75" cy="10" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="100" cy="28" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-semibold text-gray-400">
                                <span>12 May</span><span>13 May</span><span>14 May</span><span>15 May</span><span>16 May</span><span>17 May</span><span>18 May</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-3 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col h-full">
                    <h3 className="font-bold text-gray-900 text-[16px] mb-4">Users by Role</h3>
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="relative w-40 h-40 mb-6">
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                <path className="text-[#5301ab]" strokeDasharray="19.5, 100" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-blue-500" strokeDasharray="52.8, 100" strokeDashoffset="-19.5" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-orange-500" strokeDasharray="5.8, 100" strokeDashoffset="-72.3" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-emerald-500" strokeDasharray="21.9, 100" strokeDashoffset="-78.1" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-[22px] font-bold text-gray-900 font-heading leading-none mb-1">12,560</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Total Users</p>
                            </div>
                        </div>

                        <div className="w-full space-y-2.5 px-2">
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#5301ab]"></span><span className="font-bold text-gray-600">HR Admin</span></div><span className="font-bold text-gray-900">2,450 <span className="text-gray-400 font-medium">(19.5%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span><span className="font-bold text-gray-600">Employees</span></div><span className="font-bold text-gray-900">6,632 <span className="text-gray-400 font-medium">(52.8%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span><span className="font-bold text-gray-600">Dept Heads</span></div><span className="font-bold text-gray-900">728 <span className="text-gray-400 font-medium">(5.8%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span><span className="font-bold text-gray-600">Dependents</span></div><span className="font-bold text-gray-900">2,750 <span className="text-gray-400 font-medium">(21.9%)</span></span></div>
                        </div>
                    </div>
                    <div className="mt-6 text-center w-full">
                        <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center justify-center gap-1">View Role Report <FiArrowRight /></a>
                    </div>
                </div>

                <div className="xl:col-span-3 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col h-full">
                    <h3 className="font-bold text-gray-900 text-[16px] mb-4">Users by Status</h3>
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        <div className="relative w-40 h-40 mb-6">
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                <path className="text-emerald-500" strokeDasharray="78.4, 100" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-orange-500" strokeDasharray="9.9, 100" strokeDashoffset="-78.4" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-blue-500" strokeDasharray="9.1, 100" strokeDashoffset="-88.3" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-red-500" strokeDasharray="2.6, 100" strokeDashoffset="-97.4" strokeWidth="5" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-[22px] font-bold text-gray-900 font-heading leading-none mb-1">12,560</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Total Users</p>
                            </div>
                        </div>

                        <div className="w-full space-y-2.5 px-2 mt-2">
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span><span className="font-bold text-gray-600">Active</span></div><span className="font-bold text-gray-900">9,845 <span className="text-gray-400 font-medium">(78.4%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span><span className="font-bold text-gray-600">Inactive</span></div><span className="font-bold text-gray-900">1,245 <span className="text-gray-400 font-medium">(9.9%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span><span className="font-bold text-gray-600">Pending</span></div><span className="font-bold text-gray-900">1,148 <span className="text-gray-400 font-medium">(9.1%)</span></span></div>
                            <div className="flex items-center justify-between text-[11px]"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span><span className="font-bold text-gray-600">Blocked</span></div><span className="font-bold text-gray-900">322 <span className="text-gray-400 font-medium">(2.6%)</span></span></div>
                        </div>
                    </div>
                    <div className="mt-6 text-center w-full">
                        <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center justify-center gap-1">View Status Report <FiArrowRight /></a>
                    </div>
                </div>

            </div>

            {/* ================= BOTTOM SECTION ================= */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* Users Directory (Table) */}
                <div className="xl:col-span-8 bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <h3 className="font-bold text-gray-900 text-[18px]">Employee Directory</h3>
                        <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !py-2 !text-[12px]" icon={<FiPlus />}>
                            Add User
                        </Button>
                    </div>

                    {/* Filters Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                        <div className="lg:col-span-2 flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-md focus-within:border-[#5301ab]/50 transition-colors">
                            <FiSearch className="text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search by name, email or ID..."
                                className="bg-transparent border-none outline-none text-[12px] w-full placeholder-gray-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700 appearance-none outline-none focus:border-[#5301ab]/50">
                                <option>All Roles</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700 appearance-none outline-none focus:border-[#5301ab]/50">
                                <option>All Status</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700 appearance-none outline-none focus:border-[#5301ab]/50">
                                <option>All Departments</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className="flex justify-end mb-4">
                        <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md justify-center cursor-pointer hover:bg-gray-50 text-[11px] font-bold text-gray-700 transition-colors">
                            <FiFilter className="w-3.5 h-3.5" /> Filters
                        </div>
                    </div>

                    {/* Table utilizing filteredUsers state */}
                    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">User</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Role</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Department</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email / Phone</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Last Active</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Joined On</th>
                                    <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover shadow-sm" />
                                                    <div>
                                                        <p className="text-[13px] font-bold text-gray-900">{user.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium">{user.internalId}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 whitespace-nowrap">
                                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${user.roleBg} ${user.roleColor}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="py-4 whitespace-nowrap text-[12px] font-bold text-gray-800">{user.department}</td>
                                            <td className="py-4 whitespace-nowrap">
                                                <p className="text-[11px] font-bold text-gray-600">{user.email}</p>
                                                <p className="text-[11px] text-gray-500 font-medium">{user.phone}</p>
                                            </td>
                                            <td className="py-4 whitespace-nowrap text-center">
                                                <div className="flex items-center justify-center gap-1.5">
                                                    <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : user.status === 'Inactive' ? 'bg-orange-500' : user.status === 'Pending' ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                                                    <span className={`text-[11px] font-bold ${user.status === 'Active' ? 'text-emerald-600' : user.status === 'Inactive' ? 'text-orange-600' : user.status === 'Pending' ? 'text-blue-600' : 'text-red-600'}`}>{user.status}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 whitespace-nowrap">
                                                <p className="text-[11px] font-medium text-gray-600">{user.lastActiveDate}</p>
                                                <p className="text-[10px] text-gray-400">{user.lastActiveTime}</p>
                                            </td>
                                            <td className="py-4 whitespace-nowrap text-[11px] font-medium text-gray-600">{user.joinedOn}</td>
                                            <td className="py-4 whitespace-nowrap text-center">
                                                <div className="flex items-center justify-center gap-3 text-gray-400">
                                                    <button className="hover:text-[#5301ab] transition-colors"><FiEye className="w-4 h-4" /></button>
                                                    <button className="hover:text-[#5301ab] transition-colors"><FiEdit2 className="w-4 h-4" /></button>
                                                    <button className="hover:text-[#5301ab] transition-colors"><FiMoreVertical className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={8} className="py-8 text-center text-gray-500 text-[13px] font-medium">
                                            No users found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                        <p className="text-[12px] font-medium text-gray-500">Showing 1 to {filteredUsers.length} of 156 users</p>
                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">&lt;</button>
                            <button className="w-8 h-8 rounded-md bg-[#5301ab] text-white text-[12px] font-bold shadow-sm">1</button>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">2</button>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">3</button>
                            <span className="text-gray-400">...</span>
                            <button className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-[12px] font-bold transition-colors">16</button>
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

                {/* RIGHT COLUMN (Span 4) */}
                <div className="xl:col-span-4 space-y-6">

                    {/* User Activity */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[16px]">Platform Activity</h3>
                            <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-[10px] font-bold text-gray-600 hover:bg-gray-100">
                                This Week <FiChevronDown />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {userActivities.map((act, idx) => (
                                <div key={idx} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${act.bg} ${act.color}`}>
                                            {act.icon}
                                        </div>
                                        <p className="text-[12px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{act.label}</p>
                                    </div>
                                    <div className="text-right flex items-center gap-4">
                                        <p className="text-[14px] font-bold text-gray-900 leading-none">{act.value}</p>
                                        <p className={`text-[10px] font-bold flex items-center justify-end w-12 gap-0.5 ${act.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {act.isPositive ? <FiArrowUpRight className="w-3 h-3" /> : <FiArrowDownRight className="w-3 h-3" />} {act.trend}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-5">Quick Actions</h3>
                        <div className="space-y-3">
                            {quickActions.map((action, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-md border border-gray-100 hover:border-[#5301ab]/30 hover:bg-[#5301ab]/5 transition-all group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${action.bg} ${action.color}`}>
                                            {action.icon}
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-bold text-gray-900 leading-tight group-hover:text-[#5301ab] transition-colors">{action.title}</p>
                                            <p className="text-[11px] text-gray-500 font-medium mt-0.5">{action.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#5301ab] transition-colors">
                                        {action.actionIcon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CorporateUserManagementCom;