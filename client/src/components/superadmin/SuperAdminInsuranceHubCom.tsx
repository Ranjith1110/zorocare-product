import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiBriefcase, FiShield, FiSlash, FiUsers, FiFileText,
  FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiMoreVertical,
  FiChevronLeft, FiChevronRight, FiCheckCircle,
  FiBarChart2, FiFolder, FiPlus, FiArrowUpRight,
  FiXCircle, FiArrowLeft, FiGrid, FiHeart, FiActivity, FiSmile, FiTruck, FiDollarSign
} from 'react-icons/fi';
import Button from '../common/Button';
import Input from '../common/Input';
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

interface Broker {
  id: number;
  name: string;
  email: string;
  contact: string;
  location: string;
  status: string;
  onboarded: string;
  policies: string;
  corporates: string;
  users: string;
  premium: string;
  initial: string;
  color: string;
}

interface OnboardStep {
  id: number;
  label: string;
  active: boolean;
}

const SuperAdminInsuranceHubCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editData, setEditData] = useState<Broker | null>(null);

  const kpiData: KPI[] = [
    { title: 'Total Brokers', value: '24', subtitle: 'All active brokers', icon: <FiBriefcase className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Brokers', value: '20', subtitle: '83% of total brokers', icon: <FiShield className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Blocked Brokers', value: '4', subtitle: '17% of total brokers', icon: <FiSlash className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Policies Sold (This Month)', value: '3,248', subtitle: 'vs last month', trend: '+12%', icon: <FiUsers className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Commission (This Month)', value: '₹28.45 Lakhs', subtitle: 'vs last month', trend: '+15%', icon: <FiFileText className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const brokers: Broker[] = [
    { id: 1, name: 'Safeguard Insurance Brokers', email: 'contact@safeguard.com', contact: '+91 98765 43210', location: 'Mumbai, MH', status: 'Active', onboarded: '12 Apr 2024', policies: '842', corporates: '18', users: '1,250', premium: '₹1.25 Cr', initial: 'S', color: 'bg-purple-600' },
    { id: 2, name: 'SecureLife Advisors', email: 'info@securelife.com', contact: '+91 91234 56789', location: 'Bangalore, KA', status: 'Active', onboarded: '18 Mar 2024', policies: '623', corporates: '12', users: '950', premium: '₹98.5 L', initial: 'S', color: 'bg-emerald-500' },
    { id: 3, name: 'Trust Insurance Partners', email: 'hello@trustinsure.com', contact: '+91 99887 66554', location: 'Delhi, DL', status: 'Active', onboarded: '05 Feb 2024', policies: '512', corporates: '8', users: '620', premium: '₹75.2 L', initial: 'T', color: 'bg-blue-500' },
    { id: 4, name: 'ProInsure Connect', email: 'support@proinsure.com', contact: '+91 93456 78901', location: 'Chennai, TN', status: 'Active', onboarded: '22 Jan 2024', policies: '478', corporates: '6', users: '430', premium: '₹62.8 L', initial: 'P', color: 'bg-orange-500' },
    { id: 5, name: 'Reliable Risk Advisors', email: 'contact@reliablerisk.com', contact: '+91 90009 87654', location: 'Hyderabad, TG', status: 'Blocked', onboarded: '11 Dec 2023', policies: '0', corporates: '0', users: '0', premium: '₹0', initial: 'R', color: 'bg-red-500' },
    { id: 6, name: 'Shield Insurance Hub', email: 'info@shieldhub.com', contact: '+91 87654 32109', location: 'Pune, MH', status: 'Blocked', onboarded: '28 Nov 2023', policies: '0', corporates: '0', users: '0', premium: '₹0', initial: 'S', color: 'bg-slate-700' },
  ];

  const onboardSteps: OnboardStep[] = [
    { id: 1, label: 'Basic Information', active: true },
    { id: 2, label: 'Contact Details', active: false },
    { id: 3, label: 'Business Details', active: false },
    { id: 4, label: 'Documents', active: false },
    { id: 5, label: 'Bank Details', active: false },
    { id: 6, label: 'Review & Submit', active: false }
  ];

  const handleOnboardClick = () => { setEditData(null); setViewMode('create'); };
  const handleEditClick = (broker: Broker) => { setEditData(broker); setViewMode('edit'); };
  const handleCancel = () => { setViewMode('list'); setEditData(null); };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Insurance Management</h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Onboard and manage insurance brokers and control their access</p>
        </div>
        {viewMode === 'list' ? (
          <Button variant="primary" onClick={handleOnboardClick} icon={<FiPlus className="w-4 h-4" />} className="w-full sm:w-auto">
            Onboard New Broker
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
              <h3 className="font-bold text-gray-900 text-lg">Insurance Brokers</h3>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="w-full sm:w-[280px]">
                  <Input
                    iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                    placeholder="Search by broker name..."
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
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Broker Name</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Contact</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Location</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Onboarded On</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Policies Sold</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {brokers.map((broker) => (
                    <tr key={broker.id} className={`hover:bg-gray-50/50 transition-colors ${broker.id === 1 ? 'bg-purple-50/30' : ''}`}>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold ${broker.color}`}>{broker.initial}</div>
                          <span className={`text-[13px] font-bold ${broker.id === 1 ? 'text-[#5301ab]' : 'text-gray-900'}`}>{broker.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{broker.email}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{broker.contact}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{broker.location}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${broker.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                          <span className={`text-[12px] font-bold ${broker.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{broker.status}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{broker.onboarded}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{broker.policies}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2.5">
                          <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" icon={<FiEye className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" onClick={() => handleEditClick(broker)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" className="!p-0 w-7 h-7 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-4 h-4" />}>{null}</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[13px] gap-4">
              <span className="text-gray-500 font-medium">Showing 1 to 6 of 24 results</span>
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
              <h3 className="font-bold text-gray-900 text-[15px]">Broker Details</h3>
              <div className="flex items-center gap-3">
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">Active</span>
                <Button variant="neutral" className="!p-0 w-8 h-8 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                <FiShield className="w-8 h-8 text-[#5301ab]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] leading-tight">{brokers[0].name}</h4>
                <p className="text-[12px] text-gray-500 font-medium mt-1">{brokers[0].email}</p>
                <p className="text-[12px] text-gray-500 font-medium">{brokers[0].contact}</p>
                <p className="text-[12px] text-gray-500 font-medium">{brokers[0].location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-b border-gray-50 py-5 mb-6">
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Onboarded On</p><p className="text-[13px] font-bold text-gray-900">{brokers[0].onboarded}</p></div>
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Policies Sold</p><p className="text-[13px] font-bold text-gray-900">{brokers[0].policies}</p></div>
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Corporates Onboarded</p><p className="text-[13px] font-bold text-gray-900">{brokers[0].corporates}</p></div>
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Users</p><p className="text-[13px] font-bold text-gray-900">{brokers[0].users}</p></div>
              <div className="col-span-2 bg-gray-50 rounded-xl p-3 mt-1 flex items-center justify-between border border-gray-100/50">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Total Premium Generated</p>
                <p className="text-[15px] font-bold text-[#5301ab]">{brokers[0].premium}</p>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="neutral" onClick={() => handleEditClick(brokers[0])} icon={<FiEdit2 className="w-3.5 h-3.5 text-gray-500" />}>Edit Broker</Button>
                <Button variant="danger" icon={<FiXCircle className="w-3.5 h-3.5" />}>Block Broker</Button>
              </div>
              <Button variant="neutral" className="w-full" icon={<FiBarChart2 className="w-3.5 h-3.5 text-gray-500" />}>View Reports</Button>
            </div>
          </div>
        </div>
      )}

      {(viewMode === 'create' || viewMode === 'edit') && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="xl:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4 mb-6">
              {viewMode === 'edit' ? <FiEdit2 className="w-5 h-5 text-[#5301ab]" /> : <FiUsers className="w-5 h-5 text-[#5301ab]" />}
              <h3 className="font-bold text-gray-900 text-[15px]">
                {viewMode === 'edit' ? 'Edit Insurance Broker' : 'Onboard New Insurance Broker'}
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-6 flex-1">
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
                  <Input label="Broker Name" required defaultValue={editData?.name} placeholder="Enter broker name" theme="purple" />
                  <Input label="Email Address" type="email" required defaultValue={editData?.email} placeholder="Enter email address" theme="purple" />
                  <Input
                    label="Contact Number"
                    type="tel"
                    required
                    defaultValue={editData?.contact?.replace('+91 ', '')}
                    prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[13px] font-semibold text-gray-700">+91</span></>}
                    placeholder="Enter contact number"
                    theme="purple"
                  />
                  <Input label="Location" required defaultValue={editData?.location} placeholder="City, State" theme="purple" />
                  <Input label="PAN Number" required placeholder="Enter PAN number" theme="purple" />
                  <Input label="GST Number" placeholder="Enter GST number (optional)" theme="purple" />
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-3 pt-6 mt-auto">
                  <Button variant="neutral" onClick={handleCancel} className="w-full sm:w-auto">Cancel</Button>
                  <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto" icon={viewMode === 'edit' ? undefined : <FiChevronRight className="w-4 h-4" />}>
                    {viewMode === 'edit' ? 'Save Changes' : 'Next Step'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-[15px]">Zorocare Insurance Hub Service Permissions</h3>
                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Enable or disable service permissions for this broker</p>
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
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiBriefcase className="w-4 h-4 text-[#5301ab]" /> Corporate Management</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Create Corporate</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">List Of Corporates</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiUsers className="w-4 h-4 text-[#5301ab]" /> User Management</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Upload User</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">All Users</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiShield className="w-4 h-4 text-[#5301ab]" /> Sponsored Services</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Sponsored Services</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiActivity className="w-4 h-4 text-[#5301ab]" /> Healthcheckups</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Healthcheckups</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiHeart className="w-4 h-4 text-[#5301ab]" /> Wellness Services</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Wellness Services</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiFolder className="w-4 h-4 text-[#5301ab]" /> Care Programs</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Care Programs</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiSmile className="w-4 h-4 text-[#5301ab]" /> Dental</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dental</span><ToggleSwitch theme="purple" defaultChecked /></div>
                </div>
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
              <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto" icon={<FiCheckCircle className="w-4 h-4" />}>
                Save Permissions
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminInsuranceHubCom;