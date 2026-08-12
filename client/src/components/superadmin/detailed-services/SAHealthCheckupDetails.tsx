import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiClipboard, FiTrendingUp, FiSearch, FiDownload, FiMoreVertical,
    FiPlus, FiExternalLink, FiCheckCircle, FiActivity,
    FiMapPin, FiShield
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

interface HealthPackage {
    id: number;
    name: string;
    center: string;
    price: string;
    tests: number;
    image: string;
    status: string;
}

interface SponsoredPackage {
    id: number;
    sponsor: string;
    name: string;
    center: string;
    claims: number;
    image: string;
    status: string;
}

interface ReportData {
    center: string;
    location: string;
    total: number;
    completed: number;
    pending: number;
    revenue: string;
}

const SAHealthCheckupDetails: FC<Props> = ({ service }) => {
    const [activeTab, setActiveTab] = useState<string>('Overview');

    const detailKpis: KPI[] = [
        { title: 'Total Centers Linked', value: '28', trend: '+2', icon: <FiMapPin className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Active Packages', value: '45', trend: '+5', icon: <FiClipboard className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Bookings (This Month)', value: '7,845', trend: '+15%', icon: <FiTrendingUp className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Sponsored Checkups', value: '1,240', trend: '+8%', icon: <FiShield className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const tabs: string[] = ['Overview', 'Health Packages', 'Sponsored Health Checkups', 'Reports', 'Settings'];

    const RenderOverview: FC = () => (
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-gray-900">Bookings Overview</h4>
                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
                </div>
                <div className="flex-1 relative w-full h-40 mt-2">
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
                        <span>2k</span><span>1k</span><span>0</span>
                    </div>
                    <div className="absolute left-6 right-0 top-0 bottom-6">
                        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="hcGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,35 Q15,20 25,25 T50,5 T75,15 T100,10 L100,40 L0,40 Z" fill="url(#hcGradient)" />
                            <path d="M0,35 Q15,20 25,25 T50,5 T75,15 T100,10" fill="none" stroke="#f97316" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-gray-900">Top Medical Centers</h4>
                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
                </div>
                <div className="flex-1 space-y-4 mt-2">
                    {['Apollo Diagnostics', 'Lal PathLabs', 'Thyrocare Center', 'SRL Diagnostics'].map((center, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="text-[11px] font-bold text-gray-700 w-32 truncate">{center}</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${90 - (i * 20)}%` }}></div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-900">{3200 - (i * 600)} Bookings</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const mockPackages: HealthPackage[] = [
        { id: 1, name: 'Comprehensive Full Body Checkup', center: 'Apollo Diagnostics', price: '₹2,499', tests: 64, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=250', status: 'Active' },
        { id: 2, name: 'Advanced Cardiac Profile', center: 'Lal PathLabs', price: '₹1,899', tests: 12, image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400&h=250', status: 'Active' },
        { id: 3, name: 'Basic Wellness Panel', center: 'Thyrocare Center', price: '₹999', tests: 32, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=250', status: 'Active' },
        { id: 4, name: 'Women\'s Health Screening', center: 'Apollo Diagnostics', price: '₹3,299', tests: 48, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400&h=250', status: 'Inactive' },
    ];

    const RenderHealthPackages: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="w-full sm:w-[300px]">
                    <Input
                        iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                        placeholder="Search packages..."
                        theme="orange"
                    />
                </div>
                <Button variant="primary" className="!bg-orange-500 hover:!bg-orange-600 w-full sm:w-auto" icon={<FiPlus className="w-4 h-4" />}>
                    Create Customized Package
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockPackages.map((pkg) => (
                    <div key={pkg.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
                        <div className="relative h-36 overflow-hidden">
                            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-gray-900 shadow-sm flex items-center gap-1">
                                <FiActivity className="w-3 h-3 text-[#5301ab]" /> {pkg.tests} Tests
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-[14px] text-gray-900 leading-tight flex-1 pr-2">{pkg.name}</h4>
                            </div>
                            <p className="text-[11px] text-gray-500 flex items-center gap-1 mb-4">
                                <FiMapPin className="w-3 h-3" /> Fetched from: <strong className="text-gray-700">{pkg.center}</strong>
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                <span className="font-black text-[16px] text-orange-500">{pkg.price}</span>
                                <ToggleSwitch defaultChecked={pkg.status === 'Active'} theme="orange" />
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 flex gap-2 border-t border-gray-100">
                            <Button variant="secondary" className="flex-1 !py-2 !text-[11px]">Edit</Button>
                            <Button variant="neutral" className="!p-2" icon={<FiMoreVertical className="w-4 h-4 text-gray-500" />}>{null}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const mockSponsored: SponsoredPackage[] = [
        { id: 1, sponsor: 'Tech Innovators Pvt Ltd', name: 'Annual Employee Health Check', center: 'Apollo Diagnostics', claims: 450, image: 'https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=400&h=250', status: 'Active' },
        { id: 2, sponsor: 'Safeguard Insurance', name: 'Premium Policyholder Screening', center: 'Lal PathLabs', claims: 820, image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=400&h=250', status: 'Active' },
    ];

    const RenderSponsored: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h3 className="font-bold text-gray-900 text-[16px]">Corporate & Insurance Sponsored Packages</h3>
                    <p className="text-[12px] text-gray-500">Packages fully or partially paid by B2B partners.</p>
                </div>
                <Button variant="primary" className="!bg-orange-500 hover:!bg-orange-600" icon={<FiShield className="w-4 h-4" />}>
                    Create Sponsored Package
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSponsored.map((pkg) => (
                    <div key={pkg.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
                        <div className="relative h-32 overflow-hidden">
                            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider mb-0.5">Sponsor</p>
                                    <h4 className="text-[13px] font-bold text-white leading-tight">{pkg.sponsor}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h4 className="font-bold text-[14px] text-gray-900 leading-tight mb-2">{pkg.name}</h4>
                            <p className="text-[11px] text-gray-500 flex items-center gap-1 mb-4">
                                <FiMapPin className="w-3 h-3" /> Center: <strong className="text-gray-700">{pkg.center}</strong>
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Claims Handled</p>
                                    <span className="font-black text-[14px] text-gray-900">{pkg.claims}</span>
                                </div>
                                <ToggleSwitch defaultChecked={pkg.status === 'Active'} theme="orange" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const mockReports: ReportData[] = [
        { center: 'Apollo Diagnostics', location: 'Bengaluru, KA', total: 3200, completed: 3100, pending: 100, revenue: '₹45,50,000' },
        { center: 'Lal PathLabs', location: 'Delhi, DL', total: 2450, completed: 2390, pending: 60, revenue: '₹38,20,000' },
        { center: 'Thyrocare Center', location: 'Hyderabad, TG', total: 1200, completed: 1150, pending: 50, revenue: '₹15,40,000' },
        { center: 'SRL Diagnostics', location: 'Mumbai, MH', total: 995, completed: 900, pending: 95, revenue: '₹12,80,000' },
    ];

    const RenderReports: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-gray-900 text-[16px]">Medical Center Booking Report</h3>
                <Button variant="neutral" icon={<FiDownload className="w-4 h-4" />}>Export Report</Button>
            </div>
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Medical Center</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Total Bookings</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Completed</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Pending/No-Show</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-right">Revenue Generated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mockReports.map((report, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50">
                                <td className="px-5 py-4">
                                    <p className="text-[13px] font-bold text-gray-900">{report.center}</p>
                                    <p className="text-[11px] text-gray-500">{report.location}</p>
                                </td>
                                <td className="px-5 py-4 text-[13px] font-bold text-gray-700 text-center">{report.total}</td>
                                <td className="px-5 py-4 text-[13px] font-bold text-emerald-600 text-center">{report.completed}</td>
                                <td className="px-5 py-4 text-[13px] font-bold text-orange-500 text-center">{report.pending}</td>
                                <td className="px-5 py-4 text-[13px] font-bold text-[#5301ab] text-right">{report.revenue}</td>
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
                <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Booking Configurations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Require Fasting Confirmation</span><span className="text-[11px] text-gray-500">For blood tests & lipid profiles</span></div>
                        <ToggleSwitch defaultChecked theme="orange" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Assign Nearest Center</span><span className="text-[11px] text-gray-500">Based on user location/pin-code</span></div>
                        <ToggleSwitch defaultChecked theme="orange" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Allow Home Sample Collection</span><span className="text-[11px] text-gray-500">If supported by medical center</span></div>
                        <ToggleSwitch defaultChecked theme="orange" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Digital Reports via WhatsApp</span><span className="text-[11px] text-gray-500">Auto-send reports upon generation</span></div>
                        <ToggleSwitch defaultChecked theme="orange" />
                    </div>
                </div>
            </div>

            <div className="pt-4 flex justify-end">
                <Button variant="primary" className="!bg-orange-500 hover:!bg-orange-600" icon={<FiCheckCircle className="w-4 h-4" />}>Save Settings</Button>
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
                <div className="flex items-center gap-3">
                    <Button variant="neutral" icon={<FiExternalLink className="w-4 h-4" />}>View Public Page</Button>
                    <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border-b border-gray-100">
                {detailKpis.map((kpi, idx) => (
                    <div key={idx} className="p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                            {kpi.icon}
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-500 mb-0.5">{kpi.title}</p>
                            <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-6 md:px-8 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {activeTab === 'Overview' && <RenderOverview />}
                {activeTab === 'Health Packages' && <RenderHealthPackages />}
                {activeTab === 'Sponsored Health Checkups' && <RenderSponsored />}
                {activeTab === 'Reports' && <RenderReports />}
                {activeTab === 'Settings' && <RenderSettings />}
            </div>
        </div>
    );
};

export default SAHealthCheckupDetails;