import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiShield, FiUsers, FiFileText, FiDollarSign,
  FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiMoreVertical, FiChevronRight, FiPlus, FiArrowUpRight,
  FiXCircle, FiBarChart2, FiUploadCloud, FiClock, FiArrowLeft, FiCheckCircle, FiHeart,
  FiGrid, FiActivity, FiFolder, FiSmile, FiTruck
} from 'react-icons/fi';
import { TbBuildingCommunity } from "react-icons/tb";

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

interface Corporate {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  employees: string;
  broker: string;
  status: string;
  onboarded: string;
  renewal: string;
  premium: string;
  initial: string;
  color: string;
}

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  status: string;
}

interface UploadHistory {
  id: string;
  date: string;
  time: string;
  file: string;
  total: number;
  success: number;
  failed: number;
  user: string;
}

interface OnboardStep {
  id: number;
  label: string;
  active: boolean;
}

const SuperAdminCorporateHubCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'form' | 'employees'>('list');
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
  const [editData, setEditData] = useState<Corporate | null>(null);
  const [employeeTab, setEmployeeTab] = useState<'employees' | 'bulk' | 'history'>('employees');

  const kpiData: KPI[] = [
    { title: 'Total Corporates', value: '156', subtitle: 'All registered corporates', icon: <TbBuildingCommunity className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Corporates', value: '132', subtitle: '84% of total corporates', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Employees Covered', value: '24,560', subtitle: 'vs last month', trend: '+18%', icon: <FiUsers className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Insurance Brokers Assigned', value: '18', subtitle: 'Corporates linked', icon: <FiUsers className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Total Premium (This Month)', value: '₹12.85 Cr', subtitle: 'vs last month', trend: '+16%', icon: <FiFileText className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const corporates: Corporate[] = [
    { id: 1, name: 'Tech Innovators Pvt Ltd', contact: 'Ravi Kumar', phone: '+91 98765 43210', email: 'hr@techinnovators.com', employees: '1,250', broker: 'Safeguard Insurance Brokers', status: 'Active', onboarded: '12 Apr 2024', renewal: '11 Apr 2025', premium: '₹68.75 Lakhs', initial: 'TI', color: 'bg-purple-600' },
    { id: 2, name: 'Global Bytes Solutions', contact: 'Neha Sharma', phone: '+91 91234 56789', email: 'hr@globalbytes.com', employees: '850', broker: 'SecureLife Advisors', status: 'Active', onboarded: '18 Mar 2024', renewal: '17 Mar 2025', premium: '₹42.50 Lakhs', initial: 'GB', color: 'bg-emerald-500' },
    { id: 3, name: 'Mindful Finance Ltd', contact: 'Amit Patel', phone: '+91 99887 66554', email: 'hr@mindfulfinance.com', employees: '620', broker: 'Trust Insurance Partners', status: 'Active', onboarded: '05 Feb 2024', renewal: '04 Feb 2025', premium: '₹31.20 Lakhs', initial: 'MF', color: 'bg-blue-500' },
  ];

  const employeesData: Employee[] = [
    { id: 'TI-EMP-1001', name: 'Arjun Nair', email: 'arjun.nair@techinnovators.com', department: 'Engineering', designation: 'Sr. Developer', status: 'Active' },
    { id: 'TI-EMP-1002', name: 'Sneha Reddy', email: 'sneha.reddy@techinnovators.com', department: 'Marketing', designation: 'Marketing Manager', status: 'Active' },
    { id: 'TI-EMP-1003', name: 'Vikram Singh', email: 'vikram.singh@techinnovators.com', department: 'Finance', designation: 'Finance Executive', status: 'Active' },
  ];

  const uploadHistoryData: UploadHistory[] = [
    { id: 'UPL-001', date: '15 May 2024', time: '10:30 AM', file: 'employees_batch1.csv', total: 50, success: 48, failed: 2, user: 'Admin' },
    { id: 'UPL-002', date: '10 May 2024', time: '02:15 PM', file: 'new_hires_may.xlsx', total: 12, success: 12, failed: 0, user: 'Admin' },
  ];

  const onboardSteps: OnboardStep[] = [
    { id: 1, label: 'Basic Information', active: true },
    { id: 2, label: 'Contact Details', active: false },
    { id: 3, label: 'Address Details', active: false },
    { id: 4, label: 'Insurance & Broker', active: false },
    { id: 5, label: 'Plan Details', active: false },
    { id: 6, label: 'Review & Submit', active: false }
  ];

  const handleOnboardClick = () => { setFormMode('create'); setEditData(null); setViewMode('form'); };
  const handleEditClick = (corp: Corporate) => { setFormMode('edit'); setEditData(corp); setViewMode('form'); };
  const handleManageEmployees = (corp: Corporate) => { setEditData(corp); setEmployeeTab('employees'); setViewMode('employees'); };
  const handleCancel = () => { setViewMode('list'); setEditData(null); };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Corporate Management</h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Onboard and manage corporate clients, assign brokers and manage employees</p>
        </div>
        {viewMode === 'list' ? (
          <Button variant="primary" onClick={handleOnboardClick} className="w-full sm:w-auto" icon={<FiPlus className="w-4 h-4" />}>
            Onboard New Corporate
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
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="xl:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="font-bold text-gray-900 text-lg">Corporate List</h3>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="w-full sm:w-[320px]">
                  <Input
                    iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                    placeholder="Search by corporate name, email or contact..."
                    theme="purple"
                  />
                </div>
                <Button variant="neutral" className="!py-2.5 shrink-0 flex-1 sm:flex-none" icon={<FiFilter className="w-4 h-4" />}>Filter</Button>
                <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
              </div>
            </div>

            <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Corporate Name</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Contact Person</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Employees</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Broker Assigned</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Onboarded On</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {corporates.map((corp) => (
                    <tr key={corp.id} className={`hover:bg-gray-50/50 transition-colors ${corp.id === 1 ? 'bg-purple-50/30' : ''}`}>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold ${corp.color}`}>{corp.initial}</div>
                          <span className={`text-[13px] font-bold ${corp.id === 1 ? 'text-[#5301ab]' : 'text-gray-900'}`}>{corp.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <p className="text-[13px] font-semibold text-gray-900">{corp.contact}</p>
                        <p className="text-[11px] text-gray-500">{corp.phone}</p>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{corp.email}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[13px] font-semibold text-gray-900">{corp.employees}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <span className={`text-[12px] font-medium ${corp.broker === 'Not Assigned' ? 'text-red-500' : 'text-gray-600'}`}>{corp.broker}</span>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${corp.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                          <span className={`text-[12px] font-bold ${corp.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{corp.status}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{corp.onboarded}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2.5">
                          <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" icon={<FiEye className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" onClick={() => handleEditClick(corp)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
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
              <h3 className="font-bold text-gray-900 text-[15px]">Corporate Details</h3>
              <div className="flex items-center gap-3">
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">Active</span>
                <Button variant="neutral" className="!p-0 w-8 h-8 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#5301ab] font-bold text-2xl flex items-center justify-center shrink-0">
                TI
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[16px] leading-tight">{corporates[0].name}</h4>
                <p className="text-[12px] text-gray-500 font-medium mt-1">{corporates[0].email}</p>
                <p className="text-[12px] text-gray-500 font-medium">{corporates[0].phone}</p>
                <p className="text-[12px] text-gray-500 font-medium">Bengaluru, Karnataka</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-b border-gray-50 py-5 mb-6">
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Users (Employees)</p><p className="text-[14px] font-bold text-gray-900">{corporates[0].employees}</p></div>
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Insurance Broker</p><p className="text-[12px] font-bold text-gray-900 truncate">Safeguard Insurance</p></div>
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Onboarded On</p><p className="text-[13px] font-bold text-gray-900">{corporates[0].onboarded}</p></div>
              <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Renewal Date</p><p className="text-[13px] font-bold text-gray-900">{corporates[0].renewal}</p></div>
              <div className="col-span-2 bg-gray-50 rounded-xl p-3 mt-1 flex items-center justify-between border border-gray-100/50">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Total Premium Generated</p>
                <p className="text-[15px] font-bold text-[#5301ab]">{corporates[0].premium}</p>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="neutral" onClick={() => handleEditClick(corporates[0])} icon={<FiEdit2 className="w-3.5 h-3.5 text-gray-500" />}>Edit Corporate</Button>
                <Button variant="secondary" onClick={() => handleManageEmployees(corporates[0])} icon={<FiUsers className="w-3.5 h-3.5 text-[#5301ab]" />}>Manage Employees</Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="neutral" icon={<FiBarChart2 className="w-3.5 h-3.5 text-gray-500" />}>View Reports</Button>
                <Button variant="danger" icon={<FiXCircle className="w-3.5 h-3.5" />}>Deactivate</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(viewMode === 'form') && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="xl:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4 mb-6">
              <TbBuildingCommunity className="w-5 h-5 text-[#5301ab]" />
              <h3 className="font-bold text-gray-900 text-[15px]">
                {formMode === 'edit' ? 'Edit Corporate Details' : 'Onboard New Corporate'}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              <div className="w-full sm:w-[140px] shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0 sm:pr-4 flex flex-row sm:flex-col gap-6 sm:gap-0 sm:space-y-5 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 xl:grid-cols-1 gap-4">
                    <Input label="Corporate Name" required defaultValue={editData?.name} placeholder="Enter corporate name" theme="purple" />
                    <div className="grid grid-cols-2 gap-4">
                      <Select label="Corporate Type" options={['Company']} theme="purple" />
                      <Select label="Industry Type" options={['Technology', 'Finance', 'Healthcare']} placeholder="Select industry" theme="purple" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <Input label="Number of Employees" required type="number" defaultValue={editData?.employees?.replace(',', '')} placeholder="Enter number of employees" theme="purple" />
                    <Input label="Email Address" type="email" required defaultValue={editData?.email} placeholder="Enter email address" theme="purple" />
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <Input label="Website" placeholder="Enter website (optional)" theme="purple" />
                    <Select label="Insurance Broker" required options={['Safeguard Insurance Brokers', 'SecureLife Advisors', 'Trust Insurance Partners', 'Reliable Risk Advisors']} defaultValue={editData?.broker} placeholder="Select insurance broker" theme="purple" />
                    <Input label="Business PAN" required placeholder="Enter PAN number" theme="purple" />
                    <Input label="GST Number (Optional)" placeholder="Enter GST number" theme="purple" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 mt-auto border-t border-gray-50">
                  <Button variant="neutral" onClick={handleCancel} className="w-full sm:w-auto">Cancel</Button>
                  <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto" icon={formMode === 'edit' ? undefined : <FiChevronRight className="w-4 h-4" />}>
                    {formMode === 'edit' ? 'Save Changes' : 'Next Step'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-[15px]">Zorocare Corporate Hub Service Permissions</h3>
                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Enable or disable service permissions for this corporate</p>
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
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiUsers className="w-4 h-4 text-[#5301ab]" /> User Management</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Upload User</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">All Users</span><ToggleSwitch theme="purple" defaultChecked /></div>
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
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiFolder className="w-4 h-4 text-[#5301ab]" /> Care Programs</div>
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

            <div className="flex justify-end pt-6 mt-4 border-t border-gray-50">
              <Button variant="primary" onClick={handleCancel} className="w-full sm:w-auto" icon={<FiCheckCircle className="w-4 h-4" />}>Save Permissions</Button>
            </div>
          </div>
        </div>
      )}

      {viewMode === 'employees' && (
        <div className="w-full bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-500 min-h-[600px]">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 border-b border-gray-50 pb-5">
            <div>
              <h3 className="font-bold text-gray-900 text-[18px]">Employee Management</h3>
              <p className="text-[13px] text-[#5301ab] font-bold mt-1">{editData?.name}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" className="!border-[#5301ab] text-[#5301ab] hover:!bg-[#5301ab]/5" icon={<FiPlus className="w-3.5 h-3.5" />}>Add Single Employee</Button>
              <Button variant="neutral" className="text-[#5301ab]" icon={<FiDownload className="w-3.5 h-3.5" />}>Download CSV Template</Button>
            </div>
          </div>

          <div className="flex items-center gap-6 border-b border-gray-100 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button onClick={() => setEmployeeTab('employees')} className={`flex items-center gap-2 font-bold text-[13px] pb-3 border-b-2 transition-colors whitespace-nowrap ${employeeTab === 'employees' ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}><FiUsers className="w-4 h-4" /> All Employees</button>
            <button onClick={() => setEmployeeTab('bulk')} className={`flex items-center gap-2 font-bold text-[13px] pb-3 border-b-2 transition-colors whitespace-nowrap ${employeeTab === 'bulk' ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}><FiUploadCloud className="w-4 h-4" /> Bulk Upload</button>
            <button onClick={() => setEmployeeTab('history')} className={`flex items-center gap-2 font-bold text-[13px] pb-3 border-b-2 transition-colors whitespace-nowrap ${employeeTab === 'history' ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}><FiClock className="w-4 h-4" /> Upload History</button>
          </div>

          {employeeTab === 'employees' && (
            <div className="flex flex-col flex-1 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <div className="w-full sm:w-[300px]">
                  <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search employee by name, ID or email..." theme="purple" />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button variant="neutral" className="shrink-0 flex-1 sm:flex-none" icon={<FiFilter className="w-4 h-4" />}>Filter</Button>
                </div>
              </div>

              <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Employee ID</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Name</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Department</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Designation</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {employeesData.map((emp, index) => (
                      <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-bold text-[#5301ab]">{emp.id}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[13px] font-bold text-gray-900">{emp.name}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{emp.email}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{emp.department}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{emp.designation}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide">{emp.status}</span>
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <div className="flex items-center justify-center gap-2.5">
                            <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" icon={<FiEye className="w-3.5 h-3.5" />}>{null}</Button>
                            <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab] hover:border-[#5301ab]/30" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                            <Button variant="danger" className="!p-0 w-7 h-7 !bg-transparent !border-transparent hover:!bg-red-50 text-gray-400 hover:text-red-500" icon={<FiXCircle className="w-4 h-4" />}>{null}</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {employeeTab === 'bulk' && (
            <div className="flex flex-col items-center justify-center flex-1 py-10 animate-in fade-in duration-300">
              <div className="w-full max-w-2xl bg-gray-50 border-2 border-dashed border-gray-300 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center hover:bg-purple-50/50 hover:border-[#5301ab]/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform"><FiUploadCloud className="w-8 h-8 text-[#5301ab]" /></div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">Upload Employee Data File</h3>
                <p className="text-[13px] text-gray-500 font-medium max-w-md mx-auto mb-6">Drag and drop your CSV or Excel file here, or click the button below to browse files from your computer. Ensure you use the standard template.</p>
                <Button variant="primary" className="!px-6 !py-3">Browse Files</Button>
              </div>
            </div>
          )}

          {employeeTab === 'history' && (
            <div className="flex flex-col flex-1 animate-in fade-in duration-300">
              <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Upload ID</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Date & Time</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">File Name</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Total Rows</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Success</th>
                      <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Failed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {uploadHistoryData.map((history, index) => (
                      <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-bold text-gray-900">{history.id}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap"><p className="text-[12px] font-semibold text-gray-900">{history.date}</p></td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-semibold text-[#5301ab] underline cursor-pointer">{history.file}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[13px] font-bold text-gray-600 text-center">{history.total}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[13px] font-bold text-emerald-600 text-center">{history.success}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-center">{history.failed > 0 ? <span className="text-[13px] font-bold text-red-500">{history.failed}</span> : <span className="text-[13px] font-bold text-gray-400">0</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SuperAdminCorporateHubCom;