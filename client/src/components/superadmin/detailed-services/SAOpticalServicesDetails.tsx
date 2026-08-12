import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiEye, FiTrendingUp, FiSearch,
  FiFilter, FiDownload, FiEdit2, FiMoreVertical,
  FiPlus, FiExternalLink, FiCheckCircle,
  FiUploadCloud, FiClock, FiArrowLeft, FiArrowUpRight, FiCalendar, FiMapPin
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

interface OpticalPartner {
  id: number;
  name: string;
  location: string;
  services: string;
  vendorPrice: string;
  salePrice: string;
  active: boolean;
  img: string;
}

interface OpticalRequest {
  id: string;
  patient: string;
  clinic: string;
  slot: string;
  type: string;
  status: string;
}

interface OpticalHistory {
  id: string;
  date: string;
  patient: string;
  clinic: string;
  treatment: string;
  userType: string;
}

const SAOpticalServicesDetails: FC<Props> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [isAddingPartner, setIsAddingPartner] = useState<boolean>(false);

  const [partnersList, setPartnersList] = useState<OpticalPartner[]>([
    { id: 1, name: 'Lenskart Vision Care', location: 'Bengaluru, KA', services: 'Eye Testing, Spectacles Fitting, Contact Lenses', vendorPrice: '₹800/Avg', salePrice: '₹1,200/Avg', active: true, img: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400' },
    { id: 2, name: 'Titan Eyeplus', location: 'Mumbai, MH', services: 'Computer Glasses, Reading Glasses, Eye Exam', vendorPrice: '₹1,000/Avg', salePrice: '₹1,500/Avg', active: true, img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400' },
    { id: 3, name: 'Vision Express', location: 'Delhi, DL', services: 'Progressive Lenses, Sunglass Fitting', vendorPrice: '₹1,200/Avg', salePrice: '₹1,800/Avg', active: false, img: 'https://images.unsplash.com/photo-1555529733-0e67056058e1?w=400' },
  ]);

  const [requestsList, setRequestsList] = useState<OpticalRequest[]>([
    { id: 'OPT-REQ-001', patient: 'Rahul Sharma', clinic: 'Lenskart Vision Care', slot: 'Today, 05:30 PM', type: 'Spectacles Fitting', status: 'Pending' },
    { id: 'OPT-REQ-002', patient: 'Priya Verma', clinic: 'Titan Eyeplus', slot: 'Tomorrow, 11:00 AM', type: 'Contact Lenses Consult', status: 'Pending' },
    { id: 'OPT-REQ-003', patient: 'Arjun Nair', clinic: 'Lenskart Vision Care', slot: 'Today, 01:15 PM', type: 'Computer Glasses Eval', status: 'Approved' },
  ]);

  const detailKpis: KPI[] = [
    { title: 'Optical Partners', value: partnersList.length.toString(), trend: '+4', icon: <FiMapPin />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Appointments (This Month)', value: '1,420', trend: '+15%', icon: <FiCalendar />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Pending Requests', value: requestsList.filter(r => r.status === 'Pending').length.toString(), trend: '-4%', icon: <FiClock />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Revenue Generated', value: '₹22.5 L', trend: '+10%', icon: <FiTrendingUp />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const tabs: string[] = ['Overview', 'Optical Partner', 'Optical Request', 'History', 'Settings'];

  const handleCreatePartner = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newPartner: OpticalPartner = {
      id: Date.now(),
      name: formData.get('clinicName') as string,
      location: formData.get('location') as string,
      services: formData.get('services') as string,
      vendorPrice: `₹${formData.get('vendorPrice')}/Avg`,
      salePrice: `₹${formData.get('salePrice')}/Avg`,
      active: true,
      img: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400'
    };

    setPartnersList([newPartner, ...partnersList]);
    setIsAddingPartner(false);
  };

  const handleApproveRequest = (id: string) => {
    setRequestsList(requestsList.map(req =>
      req.id === id ? { ...req, status: 'Approved' } : req
    ));
  };

  const RenderOverview: FC = () => (
    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[250px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Appointments Trend</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">Last 6 Months <BiChevronDown /></span>
        </div>
        <div className="flex-1 relative w-full mt-2">
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
            <span>500</span><span>250</span><span>0</span>
          </div>
          <div className="absolute left-6 right-0 top-0 bottom-6">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q15,10 25,18 T50,8 T75,20 T100,5 L100,40 L0,40 Z" fill="url(#purpleGradient)" />
              <path d="M0,35 Q15,10 25,18 T50,8 T75,20 T100,5" fill="none" stroke="#9333ea" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Top Requested Services</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
        </div>
        <div className="flex-1 space-y-4 mt-2">
          {[
            { name: 'Spectacles Fitting', val: 82, count: '610' },
            { name: 'Eye Testing', val: 68, count: '425' },
            { name: 'Contact Lenses Consult', val: 50, count: '310' },
            { name: 'Computer Glasses Eval', val: 35, count: '175' }
          ].map((serv, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-700 w-44 truncate">{serv.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-full" style={{ width: `${serv.val}%` }}></div>
              </div>
              <span className="text-[10px] font-bold text-gray-900 w-12 text-right">{serv.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const RenderPartners: FC = () => {
    if (isAddingPartner) {
      return (
        <div className="p-6 md:p-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-6">
            <Button variant="neutral" className="!p-2" onClick={() => setIsAddingPartner(false)} icon={<FiArrowLeft className="w-4 h-4" />}>
              {null}
            </Button>
            <div>
              <h3 className="font-bold text-gray-900 text-[18px]">Onboard Optical Partner</h3>
              <p className="text-[12px] text-gray-500 font-medium mt-0.5">Add a new optical center, list provided services, and configure pricing margins</p>
            </div>
          </div>

          <form onSubmit={handleCreatePartner} className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Input
                    label="Clinic / Store Name"
                    required
                    name="clinicName"
                    placeholder="e.g., Lenskart Vision Care"
                    theme="purple"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] font-bold text-gray-700">Services Provided (Comma separated) <span className="text-red-500">*</span></label>
                  <textarea required name="services" rows={2} placeholder="e.g., Spectacles Fitting, Eye Testing, Contact Lenses..." className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all placeholder-gray-400 resize-none" />
                </div>
                <Input
                  label="Vendor Price (Average ₹)"
                  required
                  name="vendorPrice"
                  type="number"
                  placeholder="Cost to platform"
                  theme="purple"
                />
                <Input
                  label="Sale Price (Average ₹)"
                  required
                  name="salePrice"
                  type="number"
                  placeholder="Cost to patient"
                  theme="purple"
                />
                <div className="md:col-span-2">
                  <Input
                    label="Clinic Location"
                    required
                    name="location"
                    placeholder="City, State"
                    theme="purple"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-purple-50/50 hover:border-purple-500/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <FiUploadCloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">Upload Partner Image</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-4">High resolution image (16:9 ratio recommended)</p>
              <Button variant="secondary" className="!text-purple-600 !border-purple-200 hover:!bg-purple-50 pointer-events-none">Browse Files</Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="primary"
                className="!bg-purple-600 hover:!bg-purple-700 w-full sm:w-auto"
                icon={<FiCheckCircle />}
              >
                Submit & Add Partner
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
              placeholder="Search optical partners..."
              theme="purple"
            />
          </div>
          <Button
            variant="primary"
            className="!bg-purple-600 hover:!bg-purple-700 w-full sm:w-auto"
            icon={<FiPlus />}
            onClick={() => setIsAddingPartner(true)}
          >
            Add Optical Partner
          </Button>
        </div>
        <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Store Details</th>
                <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Services Provided</th>
                <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pricing Margin</th>
                <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {partnersList.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={p.img} alt={p.name} className="w-10 h-10 rounded-lg object-cover border border-gray-200" />
                      <span className="text-[13px] font-bold text-gray-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[12px] font-medium text-gray-600 flex items-center gap-1.5 mt-2.5"><FiMapPin className="text-gray-400 shrink-0" /> {p.location}</td>
                  <td className="px-5 py-4 text-[12px] font-medium text-gray-600 max-w-xs truncate" title={p.services}>{p.services}</td>
                  <td className="px-5 py-4">
                    <div className="text-[11px] text-gray-500">Vendor: <span className="font-bold text-gray-800">{p.vendorPrice}</span></div>
                    <div className="text-[11px] text-gray-500">Sale: <span className="font-bold text-purple-600">{p.salePrice}</span></div>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <ToggleSwitch defaultChecked={p.active} theme="purple" />
                  </td>
                  <td className="px-5 py-4 text-center">
                    <Button variant="neutral" className="!p-1.5 text-gray-400 hover:text-purple-600 inline-flex" icon={<FiEdit2 className="w-4 h-4" />}>{null}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const RenderRequests: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-5">
        <div className="w-full sm:w-[300px]">
          <Input
            iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
            placeholder="Search requests..."
            theme="purple"
          />
        </div>
        <Button variant="neutral" icon={<FiFilter />}>Filter Live</Button>
      </div>
      <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Req ID</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Patient Name</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Selected Store</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Service Type</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Requested Slot</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase">Status</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {requestsList.map((req, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[12px] font-bold text-purple-600">{req.id}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{req.patient}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-700 flex items-center gap-1.5 mt-0.5"><FiMapPin className="text-gray-400 shrink-0" /> {req.clinic}</td>
                <td className="px-5 py-4 text-[12px] font-bold text-gray-800">{req.type}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{req.slot}</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  {req.status === 'Pending' ? (
                    <Button
                      variant="primary"
                      className="!bg-purple-600 hover:!bg-purple-700 !px-3 !py-1.5 !text-[11px]"
                      onClick={() => handleApproveRequest(req.id)}
                    >
                      Approve
                    </Button>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center justify-center gap-1">
                      <FiCheckCircle /> Confirmed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const mockHistory: OpticalHistory[] = [
    { id: 'CHK-OPT-881', date: '15 May 2024', patient: 'Rahul Gupta', clinic: 'Lenskart Vision Care', treatment: 'Spectacles Fitting', userType: 'Corporate' },
    { id: 'CHK-OPT-882', date: '12 May 2024', patient: 'Priya Sharma', clinic: 'Titan Eyeplus', treatment: 'Contact Lenses', userType: 'Insurance' },
    { id: 'CHK-OPT-883', date: '05 May 2024', patient: 'Amit Patel', clinic: 'Lenskart Vision Care', treatment: 'Computer Glasses', userType: 'Individual' },
  ];

  const RenderHistory: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5 border-b border-gray-50 pb-5">
        <h3 className="font-bold text-gray-900 text-[15px]">Completed Optical Services</h3>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-1.5 bg-white shadow-sm">
            <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-600">From: 01 May 2024</span>
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
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Service ID</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Patient Name</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Store Partner</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Service Type</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">User Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockHistory.map((h, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[12px] font-bold text-gray-700">{h.id}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-500">{h.date}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{h.patient}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600 flex items-center gap-1.5 mt-0.5"><FiMapPin className="text-gray-400 shrink-0" /> {h.clinic}</td>
                <td className="px-5 py-4 text-[12px] font-bold text-gray-800">{h.treatment}</td>
                <td className="px-5 py-4 text-[12px] text-center">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wide ${h.userType === 'Corporate' ? 'bg-purple-50 text-purple-600' : h.userType === 'Insurance' ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                    {h.userType}
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
        <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">System Integrations & Formats</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div>
              <span className="text-[13px] text-gray-800 font-bold block">Enable Nxteye ERP Integration</span>
              <span className="text-[11px] text-gray-500">Sync optical inventory and clinical entries</span>
            </div>
            <ToggleSwitch defaultChecked theme="purple" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div>
              <span className="text-[13px] text-gray-800 font-bold block">Standardize Invoice Formatting</span>
              <span className="text-[11px] text-gray-500">Auto-reset annually on April 1st (e.g., NE-2026-27-0001)</span>
            </div>
            <ToggleSwitch defaultChecked theme="purple" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Operational Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Approve Corporate Requests</span><span className="text-[11px] text-gray-500">Skip manual approval for corporats</span></div>
            <ToggleSwitch defaultChecked theme="purple" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Send Reminder SMS/WhatsApp</span><span className="text-[11px] text-gray-500">24 hours before store visit</span></div>
            <ToggleSwitch defaultChecked theme="purple" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="primary" className="!bg-purple-600 hover:!bg-purple-700" icon={<FiCheckCircle />}>Save Operations Settings</Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="flex gap-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-purple-100 bg-purple-50 text-purple-600`}>
            <FiEye className="w-8 h-8" />
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
          <Button variant="neutral" icon={<FiExternalLink className="w-4 h-4" />}>View Optical Portal</Button>
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
                setIsAddingPartner(false);
              }}
              className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 'Overview' && <RenderOverview />}
        {activeTab === 'Optical Partner' && <RenderPartners />}
        {activeTab === 'Optical Request' && <RenderRequests />}
        {activeTab === 'History' && <RenderHistory />}
        {activeTab === 'Settings' && <RenderSettings />}
      </div>
    </div>
  );
};

export default SAOpticalServicesDetails;