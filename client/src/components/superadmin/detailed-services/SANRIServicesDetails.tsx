import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiGlobe, FiTrendingUp, FiUsers, FiSearch,
  FiFilter, FiDownload, FiEdit2, FiMoreVertical,
  FiPlus, FiExternalLink, FiCheckCircle, FiActivity,
  FiUploadCloud, FiClock, FiArrowLeft, FiArrowUpRight, FiCalendar, FiPackage
} from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

import Button from '../../common/Button';
import Input from '../../common/Input';
import Select from '../../common/Select';
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

interface NRIPackage {
  id: number;
  name: string;
  category: string;
  price: string;
  enrollments: string;
  services: string;
  smartRing: string;
  img: string;
}

interface NRIRequest {
  id: string;
  sponsor: string;
  relation: string;
  location: string;
  packagePref: string;
  status: string;
}

interface NRIHistory {
  id: string;
  name: string;
  package: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
}

const SANRIServicesDetails: FC<Props> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [isAddingPackage, setIsAddingPackage] = useState<boolean>(false);

  const [packagesList, setPackagesList] = useState<NRIPackage[]>([
    { id: 1, name: 'NRI Elite Care', category: 'Elite', price: '₹14,999/mo', enrollments: '120', services: '24/7 RM, Dedicated Doctor, Weekly Vitals', smartRing: 'Included', img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400' },
    { id: 2, name: 'NRI Premium Plus', category: 'Premium', price: '₹9,999/mo', enrollments: '340', services: 'Bi-Weekly Consults, Priority Med Delivery', smartRing: 'Included', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
    { id: 3, name: 'NRI Basic Connect', category: 'Basic', price: '₹4,999/mo', enrollments: '850', services: 'Monthly Consults, Health Records Management', smartRing: 'Not Included', img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400' },
  ]);

  const detailKpis: KPI[] = [
    { title: 'Active NRI Users', value: '1,310', trend: '+8%', icon: <FiUsers />, color: 'text-teal-600', bg: 'bg-teal-50' },
    { title: 'Pending Requests', value: '45', trend: '-2%', icon: <FiClock />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Active Packages', value: packagesList.length.toString(), trend: '+1', icon: <FiPackage />, color: 'text-teal-600', bg: 'bg-teal-50' },
    { title: 'Monthly Revenue', value: '₹1.1 Cr', trend: '+14%', icon: <FiTrendingUp />, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const tabs: string[] = ['Overview', 'NRI Request', 'NRI Packages', 'History', 'Settings'];

  const handleCreatePackage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newPackage: NRIPackage = {
      id: Date.now(),
      name: formData.get('packageName') as string,
      category: formData.get('category') as string,
      price: `₹${formData.get('price')}/${formData.get('billing') === 'Monthly' ? 'mo' : 'yr'}`,
      enrollments: '0',
      services: formData.get('services') as string,
      smartRing: formData.get('smartRing') === 'yes' ? 'Included' : 'Not Included',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400'
    };

    setPackagesList([newPackage, ...packagesList]);
    setIsAddingPackage(false);
  };

  const RenderOverview: FC = () => (
    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[250px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">NRI Onboarding Trend</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">Last 6 Months <BiChevronDown /></span>
        </div>
        <div className="flex-1 relative w-full mt-2">
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
            <span>500</span><span>250</span><span>0</span>
          </div>
          <div className="absolute left-6 right-0 top-0 bottom-6">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q15,10 25,15 T50,5 T75,20 T100,10 L100,40 L0,40 Z" fill="url(#tealGradient)" />
              <path d="M0,35 Q15,10 25,15 T50,5 T75,20 T100,10" fill="none" stroke="#0d9488" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Package Distribution</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">Overall <BiChevronDown /></span>
        </div>
        <div className="flex-1 space-y-4 mt-2">
          {[
            { name: 'NRI Basic Connect', val: 65, count: '850' },
            { name: 'NRI Premium Plus', val: 26, count: '340' },
            { name: 'NRI Elite Care', val: 9, count: '120' }
          ].map((pkg, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-700 w-32 truncate">{pkg.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: `${pkg.val}%` }}></div>
              </div>
              <span className="text-[10px] font-bold text-gray-900 w-12 text-right">{pkg.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const mockRequests: NRIRequest[] = [
    { id: 'REQ-NRI-101', sponsor: 'Priya Sharma', relation: 'Mother (65)', location: 'London, UK', packagePref: 'Elite Care', status: 'Pending Contact' },
    { id: 'REQ-NRI-102', sponsor: 'Rahul Verma', relation: 'Parents', location: 'Dubai, UAE', packagePref: 'Premium Plus', status: 'In-Progress' },
    { id: 'REQ-NRI-103', sponsor: 'Amit Patel', relation: 'Father (72)', location: 'New York, USA', packagePref: 'Basic Connect', status: 'Documents Awaited' },
  ];

  const RenderRequests: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-5">
        <div className="w-full sm:w-[300px]">
          <Input
            iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
            placeholder="Search requests..."
            theme="teal"
          />
        </div>
        <Button variant="neutral" icon={<FiFilter />}>Filter Live</Button>
      </div>
      <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Req ID</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Sponsor (NRI)</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Beneficiary Relation</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Sponsor Location</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Pref. Package</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Status</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockRequests.map((req, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[12px] font-bold text-teal-600">{req.id}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{req.sponsor}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{req.relation}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{req.location}</td>
                <td className="px-5 py-4 text-[12px] font-bold text-gray-800">{req.packagePref}</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${req.status === 'In-Progress' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  <Button variant="neutral" className="!p-1.5 text-gray-400 hover:text-teal-600 inline-flex" icon={<FiEdit2 className="w-4 h-4" />}>{null}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const RenderPackages: FC = () => {
    if (isAddingPackage) {
      return (
        <div className="p-6 md:p-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-6">
            <Button variant="neutral" className="!p-2" onClick={() => setIsAddingPackage(false)} icon={<FiArrowLeft className="w-4 h-4" />}>
              {null}
            </Button>
            <div>
              <h3 className="font-bold text-gray-900 text-[18px]">Create New NRI Package</h3>
              <p className="text-[12px] text-gray-500 font-medium mt-0.5">Configure details, devices, and pricing tiers</p>
            </div>
          </div>

          <form onSubmit={handleCreatePackage} className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[14px] font-bold text-gray-900 mb-5 border-b border-gray-100 pb-2">Package Configuration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Input
                    label="Package Name"
                    required
                    name="packageName"
                    placeholder="e.g., NRI Elite Care"
                    theme="teal"
                  />
                </div>
                <Select
                  label="Category Tier"
                  required
                  name="category"
                  options={['Basic', 'Premium', 'Elite']}
                  theme="teal"
                />
                <Select
                  label="Include Smart Ring"
                  required
                  name="smartRing"
                  options={[
                    { label: 'Yes, With Smart Ring', value: 'yes' },
                    { label: 'No, Without Smart Ring', value: 'no' }
                  ]}
                  theme="teal"
                />
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] font-bold text-gray-700">Included Services (Comma separated) <span className="text-red-500">*</span></label>
                  <textarea required name="services" rows={2} placeholder="e.g., Dedicated RM, Weekly Vitals, Priority Ambulance..." className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder-gray-400 resize-none" />
                </div>
                <Input
                  label="Price (₹)"
                  required
                  name="price"
                  type="number"
                  placeholder="Enter amount"
                  theme="teal"
                />
                <Select
                  label="Billing Cycle"
                  required
                  name="billing"
                  options={['Monthly', 'Annually']}
                  theme="teal"
                />
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-teal-50/50 hover:border-teal-500/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <FiUploadCloud className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">Upload Package Image</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-4">High resolution image (16:9 ratio recommended)</p>
              <Button variant="secondary" className="!text-teal-600 !border-teal-200 hover:!bg-teal-50 pointer-events-none">Browse Files</Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="primary"
                className="!bg-teal-600 hover:!bg-teal-700 w-full sm:w-auto"
                icon={<FiCheckCircle />}
              >
                Submit & Create Package
              </Button>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="p-6 animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="w-full sm:w-80">
            <Input
              iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
              placeholder="Search packages..."
              theme="teal"
            />
          </div>
          <Button
            variant="primary"
            className="!bg-teal-600 hover:!bg-teal-700 w-full sm:w-auto"
            icon={<FiPlus />}
            onClick={() => setIsAddingPackage(true)}
          >
            Add New NRI Package
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagesList.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-40 bg-gray-200 relative overflow-hidden shrink-0">
                <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="bg-gray-900/80 backdrop-blur text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm border border-gray-700">{pkg.category}</span>
                  <span className="bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-[11px] font-bold text-teal-600 shadow-sm">{pkg.price}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-bold text-gray-900 text-[15px] mb-2 leading-tight">{pkg.name}</h4>
                <div className="space-y-1.5 mb-5 flex-1">
                  <p className="text-[12px] text-gray-500 flex items-start gap-1.5">
                    <FiActivity className="shrink-0 mt-0.5 text-teal-500" />
                    <span className="leading-relaxed">{pkg.services}</span>
                  </p>
                  <p className="text-[12px] text-gray-500 flex items-center gap-1.5">
                    <FiPackage className="shrink-0 text-teal-500" />
                    <span className="font-semibold text-gray-700">Smart Ring: {pkg.smartRing}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <FiUsers className="text-gray-400 w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-600">{pkg.enrollments} Active Users</span>
                  </div>
                  <Button variant="neutral" className="!p-2 text-gray-400 hover:text-teal-600" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const mockHistory: NRIHistory[] = [
    { id: 'USR-881', name: 'Rohan Gupta (Father)', package: 'NRI Elite Care', type: 'Corporate', startDate: '15 Jan 2024', endDate: '14 Jan 2025', status: 'Active' },
    { id: 'USR-882', name: 'Pooja Sharma (Mother)', package: 'NRI Premium Plus', type: 'Insurance', startDate: '10 Feb 2024', endDate: '09 Feb 2025', status: 'Active' },
    { id: 'USR-883', name: 'Amit Singh (Parents)', package: 'NRI Basic Connect', type: 'Individual', startDate: '01 Jan 2023', endDate: '31 Dec 2023', status: 'Expired' },
  ];

  const RenderHistory: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5 border-b border-gray-50 pb-5">
        <h3 className="font-bold text-gray-900 text-[15px]">Enrolled Users History</h3>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-1.5 bg-white shadow-sm">
            <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-600">From: 01 Jan 2024</span>
            <span className="text-gray-300 mx-1">|</span>
            <span className="text-[11px] font-semibold text-gray-600">To: 31 May 2024</span>
          </div>
          <Button variant="neutral" icon={<FiFilter />}>Filter</Button>
          <Button variant="neutral" icon={<FiDownload />}>Export</Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">User ID</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Beneficiary Name</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Subscribed Package</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">User Type</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockHistory.map((h, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[12px] font-bold text-teal-600">{h.id}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{h.name}</td>
                <td className="px-5 py-4 text-[12px] font-bold text-gray-800">{h.package}</td>
                <td className="px-5 py-4 text-[12px] text-center">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${h.type === 'Corporate' ? 'bg-blue-50 text-blue-600' : h.type === 'Insurance' ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                    {h.type}
                  </span>
                </td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{h.startDate}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{h.endDate}</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${h.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
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

  const RenderSettings: FC = () => (
    <div className="p-6 md:p-8 animate-in fade-in duration-300 space-y-8 max-w-4xl">
      <div>
        <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">NRI Operational Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Require KYC/Passport Verification</span><span className="text-[11px] text-gray-500">Mandatory for NRI sponsors</span></div>
            <ToggleSwitch defaultChecked theme="teal" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Enable International Payment Gateway</span><span className="text-[11px] text-gray-500">Accept foreign cards & currencies</span></div>
            <ToggleSwitch defaultChecked theme="teal" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Assign Relationship Manager</span><span className="text-[11px] text-gray-500">Assign RM immediately upon payment</span></div>
            <ToggleSwitch defaultChecked theme="teal" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Bi-Weekly Health Reports to Sponsor</span><span className="text-[11px] text-gray-500">Automatically email updates</span></div>
            <ToggleSwitch defaultChecked theme="teal" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="primary" className="!bg-teal-600 hover:!bg-teal-700" icon={<FiCheckCircle />}>Save Operations Settings</Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="flex gap-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-teal-100 bg-teal-50 text-teal-600`}>
            <FiGlobe className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-heading text-[22px] font-bold text-gray-900">{service.name}</h2>
              <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide">Active</span>
            </div>
            <p className="text-[13px] text-gray-500 font-medium">{service.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="neutral" icon={<FiExternalLink className="w-4 h-4" />}>View NRI Portal</Button>
          <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border-b border-gray-100">
        {detailKpis.map((kpi, idx) => (
          <div key={idx} className="p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
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

      <div className="px-6 md:px-8 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsAddingPackage(false);
              }}
              className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 'Overview' && <RenderOverview />}
        {activeTab === 'NRI Request' && <RenderRequests />}
        {activeTab === 'NRI Packages' && <RenderPackages />}
        {activeTab === 'History' && <RenderHistory />}
        {activeTab === 'Settings' && <RenderSettings />}
      </div>
    </div>
  );
};

export default SANRIServicesDetails;