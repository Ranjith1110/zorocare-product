import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiShield, FiCalendar, FiFileText, FiTrendingUp,
  FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiMoreVertical, FiPlus, FiArrowUpRight,
  FiXCircle, FiGrid, FiArrowLeft, FiCheckCircle
} from 'react-icons/fi';
import { BsBuilding } from "react-icons/bs";

import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';

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
  status: string;
  checkupStatus: string;
  reportStatus: string;
}

interface OnboardStep {
  id: number;
  label: string;
  active: boolean;
}

const SuperAdminMedicalCentersCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
  const [editData, setEditData] = useState<Clinic | null>(null);

  const kpiData: KPI[] = [
    { title: 'Total Clinics', value: '128', subtitle: 'All active clinics', icon: <BsBuilding className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Clinics', value: '112', subtitle: '87% of total clinics', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Health Checkups (This Month)', value: '8,420', subtitle: 'vs last month', trend: '+14%', icon: <FiCalendar className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Reports Generated', value: '7,254', subtitle: 'vs last month', trend: '+16%', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Checkups Completed', value: '7,895', subtitle: 'vs last month', trend: '+18%', icon: <FiTrendingUp className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const clinics: Clinic[] = [
    { id: 1, name: 'Apollo Diagnostics', type: 'Diagnostic Center', contact: 'Ravi Kumar', phone: '+91 98765 43210', email: 'info@apollo.com', location: 'Bengaluru, KA', username: 'apollo_diag', status: 'Active', checkups: '1,245', reports: '1,102', initial: 'A', logoColor: 'bg-teal-500' },
    { id: 2, name: 'HealthPlus Clinic', type: 'Clinic', contact: 'Neha Sharma', phone: '+91 91234 56789', email: 'hello@healthplus.com', location: 'Mumbai, MH', username: 'healthplus_clinic', status: 'Active', checkups: '932', reports: '812', initial: 'H', logoColor: 'bg-purple-500' },
    { id: 3, name: 'Thyrocare Center', type: 'Diagnostic Center', contact: 'Amit Patel', phone: '+91 99887 66554', email: 'contact@thyrocare.com', location: 'Hyderabad, TG', username: 'thyrocare_hyd', status: 'Active', checkups: '1,104', reports: '985', initial: 'T', logoColor: 'bg-orange-500' },
  ];

  const bookingsData: Booking[] = [
    { id: 'BK-240501-001', patient: 'Arjun Nair', service: 'Full Body Checkup', bookDate: '01 May 2024', apptDate: '05 May 2024', status: 'Completed', checkupStatus: 'Completed', reportStatus: 'Generated' },
    { id: 'BK-240501-002', patient: 'Sneha Reddy', service: 'Thyroid Profile', bookDate: '01 May 2024', apptDate: '06 May 2024', status: 'Completed', checkupStatus: 'Completed', reportStatus: 'Generated' },
  ];

  const onboardSteps: OnboardStep[] = [
    { id: 1, label: 'Basic Information', active: true },
    { id: 2, label: 'Contact Details', active: false },
    { id: 3, label: 'Address Details', active: false },
    { id: 4, label: 'Services & Timings', active: false },
    { id: 5, label: 'Login Credentials', active: false },
    { id: 6, label: 'Review & Submit', active: false }
  ];

  const bookingTabs: string[] = ['Clinic Dashboard', 'Bookings', 'Checkups', 'Reports', 'Employees', 'Services', 'Settings'];
  const bookingSubTabs: string[] = ['All Bookings', 'Upcoming', 'Completed', 'Cancelled'];

  const handleOnboardClick = () => { setFormMode('create'); setEditData(null); setViewMode('form'); };
  const handleEditClick = (clinic: Clinic) => { setFormMode('edit'); setEditData(clinic); setViewMode('form'); };
  const handleCancel = () => { setViewMode('list'); setEditData(null); };

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
      case 'Upcoming': return 'text-[#5301ab] bg-[#5301ab]/10';
      case 'Pending': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Clinic Management</h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Onboard and manage clinics, diagnostic centers and home sample collection services</p>
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
                            <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" icon={<FiEye className="w-4 h-4" />}>{null}</Button>
                            <Button variant="neutral" onClick={() => handleEditClick(clinic)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" icon={<FiEdit2 className="w-4 h-4" />}>{null}</Button>
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
                <h3 className="font-bold text-gray-900 text-[15px]">Clinic Overview</h3>
                <div className="flex items-center gap-3">
                  <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">Active</span>
                  <Button variant="neutral" className="!p-0 w-8 h-8 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
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
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="secondary" className="!px-2 !py-2.5 !border-[#5301ab]/30 !bg-[#5301ab]/5 hover:!bg-[#5301ab]/10 !text-[11px]" icon={<FiGrid className="w-3.5 h-3.5" />}>Dashboard</Button>
                  <Button variant="neutral" onClick={() => handleEditClick(clinics[0])} className="!px-2 !py-2.5 !text-[11px]" icon={<FiEdit2 className="w-3.5 h-3.5 text-gray-500" />}>Edit</Button>
                  <Button variant="danger" className="!px-2 !py-2.5 !text-[11px]" icon={<FiXCircle className="w-3.5 h-3.5" />}>Deactivate</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
            <div className="flex gap-6 px-6 pt-2 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {bookingTabs.map((tab, idx) => (
                <button key={idx} className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${tab === 'Bookings' ? 'border-[#5301ab] text-[#5301ab]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-gray-50">
              <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {bookingSubTabs.map((sub, idx) => (
                  <button key={idx} className={`px-4 py-1.5 rounded-lg text-[12px] font-bold whitespace-nowrap transition-colors ${sub === 'All Bookings' ? 'bg-[#5301ab]/10 text-[#5301ab]' : 'text-gray-500 hover:bg-gray-50'}`}>
                    {sub}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-1.5 bg-white shadow-sm">
                  <span className="text-[12px] font-semibold text-gray-600">01 May 2024 - 31 May 2024</span>
                  <FiCalendar className="w-4 h-4 text-gray-400" />
                </div>
                <Button variant="neutral" className="!py-1.5 shrink-0" icon={<FiFilter className="w-3.5 h-3.5" />}>Filter</Button>
              </div>
            </div>

            <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <table className="w-full text-left border-collapse min-w-[850px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Patient Name</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Booking Date</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {bookingsData.map((booking, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">{booking.id}</td>
                      <td className="px-5 py-4 whitespace-nowrap text-[13px] font-semibold text-gray-900">{booking.patient}</td>
                      <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-600">{booking.service}</td>
                      <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">{booking.bookDate}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${getStatusBadge(booking.status)}`}>{booking.status}</span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" icon={<FiEye className="w-4 h-4" />}>{null}</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default SuperAdminMedicalCentersCom;