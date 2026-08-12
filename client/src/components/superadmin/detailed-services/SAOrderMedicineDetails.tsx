import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiShoppingBag, FiTrendingUp, FiHeart, FiSearch,
    FiFilter, FiDownload, FiEdit2, FiMoreVertical,
    FiPlus, FiExternalLink, FiCheckCircle,
    FiMapPin, FiPackage
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

interface MedicalStore {
    id: string;
    name: string;
    location: string;
    license: string;
    orders: string;
    rating: string;
    active: boolean;
}

interface LiveOrder {
    id: string;
    patient: string;
    corporate: string;
    broker: string;
    store: string;
    status: string;
}

interface HistoryOrder {
    id: string;
    date: string;
    patient: string;
    store: string;
    amount: string;
    status: string;
}

interface MedicineSold {
    name: string;
    qty: number;
    rate: string;
    total: string;
}

const SAOrderMedicineDetails: FC<Props> = ({ service }) => {
    const [activeTab, setActiveTab] = useState<string>('Overview');

    const detailKpis: KPI[] = [
        { title: 'Total Medical Stores', value: '65', trend: '+5%', icon: <FiMapPin className="w-5 h-5" />, color: 'text-pink-500', bg: 'bg-pink-50' },
        { title: 'Orders (This Month)', value: '5,842', trend: '+22%', icon: <FiShoppingBag className="w-5 h-5" />, color: 'text-pink-500', bg: 'bg-pink-50' },
        { title: 'Revenue (This Month)', value: '₹42.5 L', trend: '+15%', icon: <FiTrendingUp className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Active Users', value: '4,120', trend: '+10%', icon: <FiHeart className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    ];

    const tabs: string[] = ['Overview', 'Medicals', 'Medicine Ordered', 'History', 'Reports', 'Settings'];

    const RenderOverview: FC = () => (
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-gray-900">Orders Overview</h4>
                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
                </div>
                <div className="flex-1 relative w-full h-40 mt-2">
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
                        <span>1k</span><span>500</span><span>0</span>
                    </div>
                    <div className="absolute left-6 right-0 top-0 bottom-6">
                        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="medGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,35 Q15,5 25,25 T50,10 T75,20 T100,5 L100,40 L0,40 Z" fill="url(#medGradient)" />
                            <path d="M0,35 Q15,5 25,25 T50,10 T75,20 T100,5" fill="none" stroke="#ec4899" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-gray-900">Top Performing Stores</h4>
                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
                </div>
                <div className="flex-1 space-y-4 mt-2">
                    {['Apollo Pharmacy', 'MedPlus', 'Wellness Forever', 'Netmeds'].map((store, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="text-[11px] font-bold text-gray-700 w-32 truncate">{store}</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-pink-500 rounded-full" style={{ width: `${85 - (i * 15)}%` }}></div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-900">{850 - (i * 150)} Orders</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const mockMedicals: MedicalStore[] = [
        { id: 'MED-01', name: 'Apollo Pharmacy', location: 'Bengaluru, KA', license: 'DL-KA-091', orders: '1,240', rating: '4.8', active: true },
        { id: 'MED-02', name: 'MedPlus', location: 'Mumbai, MH', license: 'DL-MH-224', orders: '950', rating: '4.7', active: true },
        { id: 'MED-03', name: 'Wellness Forever', location: 'Delhi, DL', license: 'DL-DL-512', orders: '780', rating: '4.9', active: false },
    ];

    const RenderMedicals: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="w-full sm:w-[300px]">
                    <Input
                        iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                        placeholder="Search medical stores..."
                        theme="pink"
                    />
                </div>
                <Button variant="primary" icon={<FiPlus className="w-4 h-4" />}>Onboard Medical Store</Button>
            </div>
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Store Name</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Location</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">License No.</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Total Orders</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Status</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mockMedicals.map(med => (
                            <tr key={med.id} className="hover:bg-gray-50/50">
                                <td className="px-5 py-3.5 text-[13px] font-bold text-gray-900">{med.name}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-600">{med.location}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-500">{med.license}</td>
                                <td className="px-5 py-3.5 text-[12px] font-bold text-gray-900">{med.orders}</td>
                                <td className="px-5 py-3.5"><ToggleSwitch defaultChecked={med.active} theme="pink" /></td>
                                <td className="px-5 py-3.5 text-center">
                                    <Button variant="neutral" className="!p-1 text-gray-400 hover:text-[#5301ab] inline-flex" icon={<FiEdit2 className="w-4 h-4" />}>{null}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const mockLiveOrders: LiveOrder[] = [
        { id: 'ORD-991', patient: 'Arjun Nair', corporate: 'Tech Innovators Pvt Ltd', broker: 'Safeguard Insurance', store: 'Apollo Pharmacy', status: 'Processing' },
        { id: 'ORD-992', patient: 'Sneha Reddy', corporate: 'Global Bytes Solutions', broker: 'SecureLife Advisors', store: 'MedPlus', status: 'Dispatched' },
        { id: 'ORD-993', patient: 'Vikram Singh', corporate: 'Mindful Finance Ltd', broker: 'Trust Insurance', store: 'Wellness Forever', status: 'Pending Rx' },
    ];

    const RenderMedicineOrdered: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="w-full sm:w-[300px]">
                    <Input
                        iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                        placeholder="Search live orders..."
                        theme="pink"
                    />
                </div>
                <Button variant="neutral" icon={<FiFilter className="w-4 h-4" />}>Filter Orders</Button>
            </div>
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Order ID</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">User Details</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Corporate Link</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Assigned Store</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mockLiveOrders.map(o => (
                            <tr key={o.id} className="hover:bg-gray-50/50">
                                <td className="px-4 py-3.5 text-[12px] font-bold text-pink-600">{o.id}</td>
                                <td className="px-4 py-3.5 text-[13px] font-bold text-gray-900">{o.patient}</td>
                                <td className="px-4 py-3.5">
                                    <p className="text-[12px] font-bold text-gray-700">{o.corporate}</p>
                                    <p className="text-[10px] text-gray-400">Broker: {o.broker}</p>
                                </td>
                                <td className="px-4 py-3.5 text-[12px] font-medium text-gray-700 flex items-center gap-2 mt-1.5"><FiMapPin className="text-gray-400" /> {o.store}</td>
                                <td className="px-4 py-3.5">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${o.status === 'Dispatched' ? 'bg-blue-50 text-blue-600' : o.status === 'Processing' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'}`}>
                                        {o.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const mockHistory: HistoryOrder[] = [
        { id: 'ORD-881', date: '15 May 2024', patient: 'Ravi Kumar', store: 'MedPlus', amount: '₹1,250', status: 'Delivered' },
        { id: 'ORD-882', date: '14 May 2024', patient: 'Priya Patel', store: 'Apollo Pharmacy', amount: '₹840', status: 'Delivered' },
        { id: 'ORD-883', date: '12 May 2024', patient: 'Amit Singh', store: 'Apollo Pharmacy', amount: '₹2,100', status: 'Cancelled' },
    ];

    const RenderHistory: FC = () => (
        <div className="p-6 animate-in fade-in duration-300">
            <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Order ID</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Date</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Patient Name</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Store</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Amount</th>
                            <th className="px-5 py-3 text-[11px] font-bold text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mockHistory.map(h => (
                            <tr key={h.id} className="hover:bg-gray-50/50">
                                <td className="px-5 py-3.5 text-[12px] font-bold text-gray-700">{h.id}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-500">{h.date}</td>
                                <td className="px-5 py-3.5 text-[13px] font-bold text-gray-900">{h.patient}</td>
                                <td className="px-5 py-3.5 text-[12px] font-medium text-gray-600">{h.store}</td>
                                <td className="px-5 py-3.5 text-[13px] font-bold text-gray-900">{h.amount}</td>
                                <td className="px-5 py-3.5">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${h.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                        {h.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const [selectedStore, setSelectedStore] = useState<MedicalStore>(mockMedicals[0]);
    const mockMedicinesSold: MedicineSold[] = [
        { name: 'Paracetamol 500mg', qty: 120, rate: '₹45', total: '₹5,400' },
        { name: 'Vitamin C Complex', qty: 85, rate: '₹120', total: '₹10,200' },
        { name: 'Azithromycin 250mg', qty: 45, rate: '₹85', total: '₹3,825' },
    ];

    const RenderReports: FC = () => (
        <div className="p-6 animate-in fade-in duration-300 flex flex-col md:flex-row gap-6 items-start h-[500px]">
            <div className="w-full md:w-1/3 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="p-4 border-b border-gray-100 bg-gray-50 font-bold text-[13px] text-gray-800">Select Medical Store</div>
                <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                    {mockMedicals.map(med => (
                        <div
                            key={med.id}
                            onClick={() => setSelectedStore(med)}
                            className={`p-4 cursor-pointer transition-colors ${selectedStore.id === med.id ? 'bg-pink-50 border-l-4 border-pink-500' : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                        >
                            <h4 className="font-bold text-[13px] text-gray-900">{med.name}</h4>
                            <p className="text-[11px] text-gray-500 mt-1">{med.location}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-2/3 bg-white border border-gray-200 rounded-2xl shadow-sm h-full flex flex-col">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-[16px] text-gray-900">{selectedStore.name} - Sales Report</h3>
                        <p className="text-[12px] text-gray-500">Medicines sold this month</p>
                    </div>
                    <Button variant="neutral" className="!p-2" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
                </div>
                <div className="flex-1 overflow-y-auto p-5">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Medicine Name</th>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Qty Sold</th>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Rate</th>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Total Revenue</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockMedicinesSold.map((med, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 text-[13px] font-bold text-gray-800 flex items-center gap-2"><FiPackage className="text-gray-400" /> {med.name}</td>
                                    <td className="px-4 py-3 text-[12px] font-bold text-gray-600 text-center">{med.qty}</td>
                                    <td className="px-4 py-3 text-[12px] font-medium text-gray-500">{med.rate}</td>
                                    <td className="px-4 py-3 text-[13px] font-bold text-emerald-600">{med.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const RenderSettings: FC = () => (
        <div className="p-6 md:p-8 animate-in fade-in duration-300 space-y-8 max-w-4xl">
            <div>
                <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Order Routing & Verification</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Require Valid Prescription</span><span className="text-[11px] text-gray-500">Mandatory for scheduled drugs</span></div>
                        <ToggleSwitch defaultChecked theme="pink" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Route to Nearest Store</span><span className="text-[11px] text-gray-500">Based on user pin-code</span></div>
                        <ToggleSwitch defaultChecked theme="pink" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div><span className="text-[13px] text-gray-800 font-bold block">Allow Alternate Brands</span><span className="text-[11px] text-gray-500">If prescribed medicine is out of stock</span></div>
                        <ToggleSwitch theme="pink" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Delivery & Fees</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Base Delivery Fee (₹)"
                        type="number"
                        defaultValue="40"
                        theme="pink"
                    />
                    <Input
                        label="Max Delivery Radius (KM)"
                        type="number"
                        defaultValue="15"
                        theme="pink"
                    />
                </div>
            </div>
            <div className="pt-4 flex justify-end"><Button variant="primary" icon={<FiCheckCircle className="w-4 h-4" />}>Save Settings</Button></div>
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
                            className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {activeTab === 'Overview' && <RenderOverview />}
                {activeTab === 'Medicals' && <RenderMedicals />}
                {activeTab === 'Medicine Ordered' && <RenderMedicineOrdered />}
                {activeTab === 'History' && <RenderHistory />}
                {activeTab === 'Reports' && <RenderReports />}
                {activeTab === 'Settings' && <RenderSettings />}
            </div>
        </div>
    );
};

export default SAOrderMedicineDetails;