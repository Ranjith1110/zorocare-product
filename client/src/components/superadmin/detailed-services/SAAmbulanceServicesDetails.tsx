import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiTruck, FiTrendingUp, FiUsers, FiSearch,
  FiFilter, FiDownload, FiEdit2, FiMoreVertical,
  FiPlus, FiExternalLink, FiCheckCircle, FiActivity,
  FiUploadCloud, FiMapPin, FiClock, FiArrowLeft, FiArrowUpRight, FiDollarSign
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

interface Partner {
  id: number;
  vendorName: string;
  ambulances: number;
  locations: string;
  timings: string;
  baseFare: string;
  perKm: string;
  status: string;
  img: string;
}

interface LiveRequest {
  id: string;
  patient: string;
  phone: string;
  location: string;
  destination: string;
  partner: string;
  status: string;
}

interface HistoryRequest {
  id: string;
  date: string;
  patient: string;
  partner: string;
  distance: string;
  fare: string;
  status: string;
}

const SAAmbulanceServicesDetails: FC<Props> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [isAddingPartner, setIsAddingPartner] = useState<boolean>(false);

  const [partnersList, setPartnersList] = useState<Partner[]>([
    { id: 1, vendorName: 'City Lifeline Ambulances', ambulances: 12, locations: 'Mumbai, Pune', timings: '24/7', baseFare: '₹999', perKm: '₹25/km', status: 'Active', img: 'https://images.unsplash.com/photo-1587556628543-9ce291c95be2?w=400' },
    { id: 2, vendorName: 'QuickRescue Services', ambulances: 8, locations: 'Delhi NCR', timings: 'Day Shift (8 AM - 8 PM)', baseFare: '₹799', perKm: '₹20/km', status: 'Active', img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400' },
    { id: 3, vendorName: 'Apollo Emergency Response', ambulances: 25, locations: 'Bengaluru, Chennai, Hyderabad', timings: '24/7', baseFare: '₹1499', perKm: '₹30/km', status: 'Active', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
  ]);

  const detailKpis: KPI[] = [
    { title: 'Ambulance Partners', value: partnersList.length.toString(), trend: '+2%', icon: <FiUsers />, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Available Ambulances', value: '45', trend: '+10%', icon: <FiTruck />, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Requests (This Month)', value: '1,245', trend: '+15%', icon: <FiActivity />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Avg Response Time', value: '12 Mins', trend: '-2 Mins', icon: <FiClock />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  const tabs: string[] = ['Overview', 'Ambulance Partner', 'Ambulance Request', 'History', 'Settings'];

  const handleCreatePartner = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newPartner: Partner = {
      id: Date.now(),
      vendorName: formData.get('vendorName') as string,
      ambulances: Number(formData.get('ambulances')),
      locations: formData.get('locations') as string,
      timings: formData.get('timings') as string,
      baseFare: `₹${formData.get('baseFare')}`,
      perKm: `₹${formData.get('perKm')}/km`,
      status: 'Active',
      img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400'
    };

    setPartnersList([newPartner, ...partnersList]);
    setIsAddingPartner(false);
  };

  const RenderOverview: FC = () => (
    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[250px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Emergency Requests Trend</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">Last 6 Months <BiChevronDown /></span>
        </div>
        <div className="flex-1 relative w-full mt-2">
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
            <span>500</span><span>250</span><span>0</span>
          </div>
          <div className="absolute left-6 right-0 top-0 bottom-6">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q15,10 25,25 T50,5 T75,20 T100,10 L100,40 L0,40 Z" fill="url(#redGradient)" />
              <path d="M0,35 Q15,10 25,25 T50,5 T75,20 T100,10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Top Locations by Requests</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
        </div>
        <div className="flex-1 space-y-4 mt-2">
          {[
            { name: 'Mumbai', val: 85, count: '450' },
            { name: 'Bengaluru', val: 70, count: '320' },
            { name: 'Delhi NCR', val: 55, count: '210' },
            { name: 'Pune', val: 40, count: '150' }
          ].map((loc, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-700 w-24 truncate">{loc.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: `${loc.val}%` }}></div>
              </div>
              <span className="text-[10px] font-bold text-gray-900 w-12 text-right">{loc.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const RenderPartners: FC = () => {
    if (isAddingPartner) {
      return (
        <div className="p-6 md:p-8 animate-in fade-in duration-300 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-6">
            <Button variant="neutral" className="!p-2" onClick={() => setIsAddingPartner(false)} icon={<FiArrowLeft className="w-4 h-4" />}>
              {null}
            </Button>
            <div>
              <h3 className="font-bold text-gray-900 text-[18px]">Onboard Ambulance Partner</h3>
              <p className="text-[12px] text-gray-500 font-medium mt-0.5">Register a new vendor, set fleet size, operational timings, and pricing scales.</p>
            </div>
          </div>

          <form onSubmit={handleCreatePartner} className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[14px] font-bold text-gray-900 mb-5 border-b border-gray-100 pb-2">Vendor Details & Fleet</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Input label="Vendor / Partner Name" required name="vendorName" placeholder="e.g., City Lifeline Ambulances" theme="red" />
                </div>
                <Input label="Total Available Ambulances" required name="ambulances" type="number" placeholder="Enter fleet count" theme="red" />
                <Select
                  label="Operational Timings"
                  name="timings"
                  options={['24/7 (Round the clock)', 'Day Shift (8 AM - 8 PM)', 'Night Shift (8 PM - 8 AM)']}
                  theme="red"
                />
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] font-bold text-gray-700">Service Locations (Comma separated) <span className="text-red-500">*</span></label>
                  <textarea required name="locations" rows={2} placeholder="e.g., Mumbai, Pune, Thane..." className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all placeholder-gray-400 resize-none" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[14px] font-bold text-gray-900 mb-5 border-b border-gray-100 pb-2">Payment Details & Price Scaling</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label="Base Fare (₹)"
                  required
                  name="baseFare"
                  type="number"
                  iconLeft={<FiDollarSign className="w-4 h-4 text-gray-400" />}
                  placeholder="Base charge for booking"
                  theme="red"
                />
                <Input
                  label="Per Kilometer Rate (₹)"
                  required
                  name="perKm"
                  type="number"
                  iconLeft={<FiTrendingUp className="w-4 h-4 text-gray-400" />}
                  placeholder="Charge per additional KM"
                  theme="red"
                />
                <div className="md:col-span-2">
                  <Input label="Bank Account / UPI Details" required placeholder="Enter Account No / UPI ID for payouts" theme="red" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-red-50/50 hover:border-red-500/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <FiUploadCloud className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">Upload Partner/Vehicle Image</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-4">High resolution image (16:9 ratio recommended)</p>
              <Button variant="secondary" className="!text-red-600 !border-red-200 hover:!bg-red-50 pointer-events-none">Browse Files</Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="primary"
                className="!bg-red-600 hover:!bg-red-700 w-full sm:w-auto"
                icon={<FiCheckCircle />}
              >
                Submit & Onboard Partner
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
              placeholder="Search ambulance partners..."
              theme="red"
            />
          </div>
          <Button
            variant="primary"
            className="!bg-red-600 hover:!bg-red-700 w-full sm:w-auto"
            icon={<FiPlus />}
            onClick={() => setIsAddingPartner(true)}
          >
            Add Ambulance Partner
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersList.map(partner => (
            <div key={partner.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-40 bg-gray-200 relative overflow-hidden shrink-0">
                <img src={partner.img} alt={partner.vendorName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-[11px] font-bold text-red-600 shadow-sm">{partner.baseFare} Base</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-bold text-gray-900 text-[15px] mb-2 leading-tight">{partner.vendorName}</h4>
                <div className="space-y-1.5 mb-5 flex-1">
                  <p className="text-[12px] text-gray-500 flex items-start gap-1.5">
                    <FiMapPin className="shrink-0 mt-0.5 text-red-400" /> <span className="leading-relaxed">{partner.locations}</span>
                  </p>
                  <p className="text-[12px] text-gray-500 flex items-center gap-1.5">
                    <FiClock className="shrink-0 text-red-400" /> <span>{partner.timings}</span>
                  </p>
                  <p className="text-[12px] text-gray-500 flex items-center gap-1.5">
                    <FiDollarSign className="shrink-0 text-red-400" /> <span>{partner.perKm}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <FiTruck className="text-gray-400 w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-600">{partner.ambulances} Ambulances</span>
                  </div>
                  <Button variant="neutral" className="!p-2 text-gray-400 hover:text-red-600" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const mockLiveRequests: LiveRequest[] = [
    { id: 'AMB-REQ-101', patient: 'Rahul Verma', phone: '+91 9876543210', location: 'Andheri West, Mumbai', destination: 'Lilavati Hospital', partner: 'City Lifeline Ambulances', status: 'In-Transit' },
    { id: 'AMB-REQ-102', patient: 'Sneha Kapoor', phone: '+91 9123456780', location: 'Koramangala, Bengaluru', destination: 'Apollo Hospitals', partner: 'Apollo Emergency Response', status: 'Dispatched' },
    { id: 'AMB-REQ-103', patient: 'Vikram Singh', phone: '+91 9988776655', location: 'Connaught Place, Delhi', destination: 'AIIMS Delhi', partner: 'Pending Assignment', status: 'Pending' },
  ];

  const RenderRequests: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5">
        <h3 className="font-bold text-gray-900 text-[15px]">Live Ambulance Requests</h3>
        <div className="flex items-center gap-3">
          <div className="w-full sm:w-[250px]">
            <Input
              iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
              placeholder="Search requests..."
              theme="red"
            />
          </div>
          <Button variant="neutral" icon={<FiFilter />}>Filter</Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full text-left border-collapse min-w-[950px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Req ID</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Patient Details</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pickup Location</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Drop Destination</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Assigned Partner</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockLiveRequests.map((req, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[12px] font-bold text-red-600">{req.id}</td>
                <td className="px-5 py-4">
                  <p className="text-[13px] font-bold text-gray-900">{req.patient}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{req.phone}</p>
                </td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-700 flex items-center gap-1.5 mt-2.5"><FiMapPin className="text-red-400 shrink-0" /> <span className="truncate w-40">{req.location}</span></td>
                <td className="px-5 py-4 text-[12px] font-bold text-gray-800">{req.destination}</td>
                <td className={`px-5 py-4 text-[12px] font-semibold ${req.partner.includes('Pending') ? 'text-orange-500 italic' : 'text-gray-700'}`}>{req.partner}</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${req.status === 'In-Transit' ? 'bg-blue-50 text-blue-600' : req.status === 'Dispatched' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const mockHistory: HistoryRequest[] = [
    { id: 'AMB-REQ-089', date: '15 May 2024', patient: 'Amit Patel', partner: 'City Lifeline Ambulances', distance: '12 KM', fare: '₹1,299', status: 'Completed' },
    { id: 'AMB-REQ-088', date: '14 May 2024', patient: 'Pooja Sharma', partner: 'Apollo Emergency Response', distance: '8 KM', fare: '₹1,499', status: 'Completed' },
    { id: 'AMB-REQ-087', date: '12 May 2024', patient: 'Rohan Gupta', partner: 'QuickRescue Services', distance: '0 KM', fare: '₹0', status: 'Cancelled' },
  ];

  const RenderHistory: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-gray-900 text-[15px]">Completed & Past Requests</h3>
        <Button variant="neutral" icon={<FiDownload />}>Export History</Button>
      </div>
      <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full text-left border-collapse min-w-[850px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Req ID</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Patient Name</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Partner Vendor</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Distance</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Fare</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockHistory.map((h, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[12px] font-bold text-gray-700">{h.id}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-500">{h.date}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{h.patient}</td>
                <td className="px-5 py-4 text-[12px] font-medium text-gray-600">{h.partner}</td>
                <td className="px-5 py-4 text-[12px] font-bold text-gray-600 text-center">{h.distance}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{h.fare}</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${h.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
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
        <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Ambulance Dispatch Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Dispatch Nearest Partner</span><span className="text-[11px] text-gray-500">Automatically assign based on geolocation</span></div>
            <ToggleSwitch theme="red" defaultChecked />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Require Upfront Base Fare</span><span className="text-[11px] text-gray-500">Mandatory payment before dispatch</span></div>
            <ToggleSwitch theme="red" defaultChecked />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Enable Live GPS Tracking</span><span className="text-[11px] text-gray-500">Share live tracking link with patient</span></div>
            <ToggleSwitch theme="red" defaultChecked />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Allow Partner Cancellation</span><span className="text-[11px] text-gray-500">Vendors can decline requests</span></div>
            <ToggleSwitch theme="red" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="primary" className="!bg-red-600 hover:!bg-red-700" icon={<FiCheckCircle />}>Save Operations Settings</Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="flex gap-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-red-100 bg-red-50 text-red-600`}>
            <FiTruck className="w-8 h-8" />
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
          <Button variant="neutral" icon={<FiExternalLink className="w-4 h-4" />}>View Ambulance Portal</Button>
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
              className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 'Overview' && <RenderOverview />}
        {activeTab === 'Ambulance Partner' && <RenderPartners />}
        {activeTab === 'Ambulance Request' && <RenderRequests />}
        {activeTab === 'History' && <RenderHistory />}
        {activeTab === 'Settings' && <RenderSettings />}
      </div>
    </div>
  );
};

export default SAAmbulanceServicesDetails;