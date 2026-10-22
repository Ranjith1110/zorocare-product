import { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiShield, FiUsers, FiFileText,
  FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiPlus, FiArrowUpRight,
  FiXCircle, FiUploadCloud, FiClock, FiArrowLeft, FiCheckCircle, FiHeart,
  FiGrid, FiActivity, FiFolder, FiSmile, FiKey, FiShare2, FiCopy, FiCheck, FiX, FiTrash2,
  FiMapPin, FiMail, FiPhone, FiSettings
} from 'react-icons/fi';
import { TbBuildingCommunity } from "react-icons/tb";

import Button from '../common/Button';
import Input from '../common/Input';
import ToggleSwitch from '../common/ToggleSwitch';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
  spoc_name: string;
  email: string;
  contact: string;
  location: string;
  employee_count: string;
  broker_assigned: string;
  logo_url?: string;
  status: string;
  premium: string;
  created_at: string;
  permissions: any;
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

interface CredentialShareModalData {
  name: string;
  email: string;
  password?: string;
  loginUrl: string;
}

const defaultPermissions = {
  viewDashboard: true,
  createCorporate: true,
  listCorporates: true,
  uploadUser: true,
  allUsers: true,
  sponsoredServices: true,
  healthcheckups: true,
  wellnessServices: true,
  carePrograms: true,
  dental: true,
  eye: true,
  optical: true,
  ambulance: true,
  subscription: true
};

type CorporateTab = 'dashboard' | 'employees' | 'checkups' | 'reports' | 'settings';

const AdminCorporateHubCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit' | 'workspace'>('list');
  const [corporates, setCorporates] = useState<Corporate[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  
  // Workspace States
  const [selectedCorporate, setSelectedCorporate] = useState<Corporate | null>(null);
  const [activeTab, setActiveTab] = useState<CorporateTab>('dashboard');
  const [employeeTab, setEmployeeTab] = useState<'employees' | 'bulk' | 'history'>('employees');

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Logo Upload State
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  // Validation & Sharing
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const [shareData, setShareData] = useState<CredentialShareModalData | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    spoc_name: '',
    email: '',
    contact: '',
    location: '',
    employee_count: '',
    password: '',
    confirmPassword: '',
    status: 'Active'
  });
  const [permissions, setPermissions] = useState(defaultPermissions);

  useEffect(() => {
    if (viewMode === 'list') {
      fetchCorporates();
    }
  }, [viewMode]);

  const fetchCorporates = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/superadmin/corporates`);
      const data = await res.json();
      if (data.success) {
        setCorporates(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch corporates:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetFormState = () => {
    setFormData({
      name: '', spoc_name: '', email: '', contact: '', location: '',
      employee_count: '', password: '', confirmPassword: '', status: 'Active'
    });
    setPermissions(defaultPermissions);
    setError('');
    setValidationErrors({});
    setLogoBase64(null);
    setLogoPreview(null);
  };

  const handleOnboardClick = () => {
    setEditId(null);
    resetFormState();
    setViewMode('create');
  };

  const handleEditClick = (corp: Corporate) => {
    setEditId(corp.id);
    setFormData({
      name: corp.name,
      spoc_name: corp.spoc_name || '',
      email: corp.email,
      contact: corp.contact || '',
      location: corp.location || '',
      employee_count: corp.employee_count || '',
      password: '',
      confirmPassword: '',
      status: corp.status || 'Active'
    });
    setPermissions({ ...defaultPermissions, ...(corp.permissions || {}) });
    setError('');
    setValidationErrors({});
    setLogoPreview(corp.logo_url || null);
    setLogoBase64(corp.logo_url || null);
    setViewMode('edit');
  };

  const handleWorkspaceClick = (corp: Corporate, defaultTab: CorporateTab = 'dashboard') => {
    setSelectedCorporate(corp);
    setActiveTab(defaultTab);
    setViewMode('workspace');
  };

  const handleCancel = () => {
    setViewMode('list');
    setSelectedCorporate(null);
    resetFormState();
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this corporate?')) return;
    try {
      const res = await fetch(`${API_URL}/api/superadmin/corporates/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Corporate deleted successfully!');
        setTimeout(() => setSuccessMsg(''), 5000);
        fetchCorporates();
      }
    } catch (err) {
      console.error('Failed to delete corporate:', err);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoPreview(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => { setLogoBase64(reader.result as string); };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.name) { errors.name = 'Corporate Name is mandatory'; isValid = false; }
    if (!formData.spoc_name) { errors.spoc_name = 'SPOC Name is mandatory'; isValid = false; }
    if (!formData.email) { errors.email = 'Email Address is mandatory'; isValid = false; }
    if (!formData.contact) { errors.contact = 'Mobile Number is mandatory'; isValid = false; }
    if (!formData.location) { errors.location = 'Location is mandatory'; isValid = false; }
    if (!formData.employee_count) { errors.employee_count = 'Employee count is mandatory'; isValid = false; }

    if (viewMode === 'create' && !formData.password) {
      errors.password = 'Initial Password is required';
      isValid = false;
    }

    if (formData.password && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const clearError = (field: string) => {
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setSaving(true);
    try {
      const endpoint = viewMode === 'create'
        ? `${API_URL}/api/superadmin/corporates`
        : `${API_URL}/api/superadmin/corporates/${editId}`;
      const method = viewMode === 'create' ? 'POST' : 'PUT';

      const payload = {
        name: formData.name,
        spoc_name: formData.spoc_name,
        email: formData.email,
        contact: formData.contact,
        location: formData.location,
        employee_count: formData.employee_count,
        password: formData.password || undefined,
        status: formData.status,
        permissions,
        logo_url: logoBase64
      };

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        setSuccessMsg(viewMode === 'create' ? 'Corporate onboarded successfully!' : 'Corporate updated successfully!');
        setTimeout(() => setSuccessMsg(''), 5000);

        if (viewMode === 'create') {
          setShareData({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            loginUrl: `${window.location.origin}/login`
          });
        }
        setViewMode('list');
      } else {
        setError(data.message || 'Server returned an error');
      }
    } catch (err) {
      setError('Server connection failed. Please try again later.');
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = (key: keyof typeof defaultPermissions, value: boolean) => {
    setPermissions((prev) => ({ ...prev, [key]: value }));
  };

  const setAllPermissions = (value: boolean) => {
    const updated: any = {};
    Object.keys(defaultPermissions).forEach((key) => { updated[key] = value; });
    setPermissions(updated);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareExisting = (corp: Corporate) => {
    setShareData({
      name: corp.name,
      email: corp.email,
      loginUrl: `${window.location.origin}/login`
    });
  };

  const filteredCorporates = corporates.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.contact.includes(searchQuery)
  );

  const kpiData: KPI[] = [
    { title: 'Total Corporates', value: corporates.length.toString(), subtitle: 'All registered corporates', icon: <TbBuildingCommunity className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Corporates', value: corporates.filter(c => c.status === 'Active').length.toString(), subtitle: 'Operating normally', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Employees Covered', value: corporates.reduce((acc, c) => acc + parseInt(c.employee_count || '0'), 0).toString(), subtitle: 'Across all clients', icon: <FiUsers className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Total Premium', value: '₹12.85 Cr', subtitle: 'Platform generated', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' }
  ];

  // Dummy data for employee UI table view
  const employeesData: Employee[] = [
    { id: 'TI-EMP-1001', name: 'Arjun Nair', email: 'arjun.nair@techinnovators.com', department: 'Engineering', designation: 'Sr. Developer', status: 'Active' },
    { id: 'TI-EMP-1002', name: 'Sneha Reddy', email: 'sneha.reddy@techinnovators.com', department: 'Marketing', designation: 'Marketing Manager', status: 'Active' },
    { id: 'TI-EMP-1003', name: 'Vikram Singh', email: 'vikram.singh@techinnovators.com', department: 'Finance', designation: 'Finance Executive', status: 'Active' },
  ];

  const uploadHistoryData: UploadHistory[] = [
    { id: 'UPL-001', date: '15 May 2024', time: '10:30 AM', file: 'employees_batch1.csv', total: 50, success: 48, failed: 2, user: 'Admin' },
    { id: 'UPL-002', date: '10 May 2024', time: '02:15 PM', file: 'new_hires_may.xlsx', total: 12, success: 12, failed: 0, user: 'Admin' },
  ];

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

      {/* Global Success Alert */}
      {successMsg && (
        <div className="bg-emerald-50 text-emerald-700 px-5 py-4 rounded-2xl flex items-center justify-between border border-emerald-100 shadow-sm animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex items-center gap-3">
            <FiCheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-[13px] font-bold">{successMsg}</span>
          </div>
          <button onClick={() => setSuccessMsg('')} className="text-emerald-400 hover:text-emerald-600 transition-colors">
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Share Credentials Modal */}
      {shareData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 space-y-6 animate-in zoom-in-95 duration-200 relative">
            <button onClick={() => setShareData(null)} className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
              <FiX className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#5301ab] flex items-center justify-center shrink-0"><FiKey className="w-6 h-6" /></div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Corporate Login Credentials</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">Share these details with {shareData.name}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3 font-mono text-[13px]">
              <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Login Portal URL</span><span className="font-bold text-[#5301ab] break-all">{shareData.loginUrl}</span></div>
              <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Registered Email</span><span className="font-bold text-gray-900">{shareData.email}</span></div>
              {shareData.password ? (
                <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Temporary Password</span><span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{shareData.password}</span></div>
              ) : (
                <div className="text-[11px] text-gray-400 font-sans italic">Password is encrypted. If forgotten, reset via Edit Corporate.</div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="primary"
                onClick={() => {
                  const message = `*Zorocare Corporate Access*\n\nLogin URL: ${shareData.loginUrl}\nEmail: ${shareData.email}${shareData.password ? `\nPassword: ${shareData.password}` : ''}\n\nPlease log in and update your password.`;
                  copyToClipboard(message);
                }}
                className="w-full flex items-center justify-center gap-2 !py-3"
              >
                {copied ? <FiCheck className="w-4 h-4 text-emerald-300" /> : <FiCopy className="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy Credentials Message'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">
            {viewMode === 'workspace' && selectedCorporate ? `${selectedCorporate.name} Workspace` : 'Corporate Management'}
          </h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">
            {viewMode === 'workspace' ? 'Manage employees, health checkups, reports, and settings for this corporate client.' : 'Onboard and manage corporate clients, assign brokers and manage employees'}
          </p>
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

      {/* KPIs (Only on List View) */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
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
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="xl:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="font-bold text-gray-900 text-lg">Corporate List</h3>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="w-full sm:w-[320px]">
                  <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search corporates..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} theme="purple" />
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
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr><td colSpan={7} className="text-center py-10 text-gray-500 text-[13px]">Loading corporates...</td></tr>
                  ) : filteredCorporates.length === 0 ? (
                    <tr><td colSpan={7} className="text-center py-10 text-gray-500 text-[13px]">No corporates found.</td></tr>
                  ) : filteredCorporates.map((corp) => (
                    <tr key={corp.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {corp.logo_url && corp.logo_url !== '' ? (
                            <img src={corp.logo_url} alt={corp.name} className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-purple-100 text-[#5301ab] font-bold flex items-center justify-center text-[12px] shrink-0">
                              {corp.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <span className="text-[13px] font-bold text-gray-900">{corp.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <p className="text-[13px] font-semibold text-gray-900">{corp.spoc_name}</p>
                        <p className="text-[11px] text-gray-500">{corp.contact}</p>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{corp.email}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap text-[13px] font-semibold text-gray-900">{corp.employee_count}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <span className={`text-[12px] font-medium ${corp.broker_assigned === 'Not Assigned' ? 'text-red-500' : 'text-gray-600'}`}>{corp.broker_assigned}</span>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${corp.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                          <span className={`text-[12px] font-bold ${corp.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{corp.status}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <Button variant="neutral" onClick={() => handleWorkspaceClick(corp, 'dashboard')} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" title="Open Workspace" icon={<FiGrid className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" onClick={() => handleShareExisting(corp)} className="!p-0 w-7 h-7 text-gray-400 hover:text-emerald-600" title="Share Credentials" icon={<FiShare2 className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" onClick={() => handleEditClick(corp)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" title="Edit Corporate" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" onClick={() => handleDelete(corp.id)} className="!p-0 w-7 h-7 text-gray-400 hover:text-red-500" title="Delete Corporate" icon={<FiTrash2 className="w-3.5 h-3.5" />}>{null}</Button>
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
              <h3 className="font-bold text-gray-900 text-[15px]">Corporate Quick View</h3>
            </div>
            {filteredCorporates.length > 0 ? (
              <>
                <div className="flex gap-4 mb-6">
                  {filteredCorporates[0].logo_url && filteredCorporates[0].logo_url !== '' ? (
                    <img src={filteredCorporates[0].logo_url} alt="Logo" className="w-16 h-16 rounded-2xl object-cover border border-gray-200 shrink-0" />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#5301ab] font-bold text-2xl flex items-center justify-center shrink-0">
                      {filteredCorporates[0].name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 text-[16px] leading-tight">{filteredCorporates[0].name}</h4>
                    <p className="text-[12px] text-gray-500 font-medium mt-1">{filteredCorporates[0].email}</p>
                    <p className="text-[12px] text-gray-500 font-medium">{filteredCorporates[0].contact}</p>
                    <p className="text-[12px] text-gray-500 font-medium">{filteredCorporates[0].location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-b border-gray-50 py-5 mb-6">
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Users (Employees)</p><p className="text-[14px] font-bold text-gray-900">{filteredCorporates[0].employee_count}</p></div>
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Insurance Broker</p><p className="text-[12px] font-bold text-gray-900 truncate">{filteredCorporates[0].broker_assigned}</p></div>
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Onboarded On</p><p className="text-[13px] font-bold text-gray-900">{new Date(filteredCorporates[0].created_at).toLocaleDateString()}</p></div>
                  <div className="col-span-2 bg-gray-50 rounded-xl p-3 mt-1 flex items-center justify-between border border-gray-100/50">
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Total Premium Generated</p>
                    <p className="text-[15px] font-bold text-[#5301ab]">{filteredCorporates[0].premium || '₹0'}</p>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="secondary" onClick={() => handleWorkspaceClick(filteredCorporates[0], 'dashboard')} className="!border-[#5301ab]/30 !bg-[#5301ab]/5 hover:!bg-[#5301ab]/10 !text-[12px] !text-[#5301ab]" icon={<FiGrid className="w-4 h-4" />}>Open Workspace</Button>
                    <Button variant="neutral" onClick={() => handleEditClick(filteredCorporates[0])} className="!text-[12px]" icon={<FiEdit2 className="w-3.5 h-3.5 text-gray-500" />}>Edit Profile</Button>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-[13px] text-gray-500 text-center py-10">No corporate selected.</p>
            )}
          </div>
        </div>
      )}

      {/* FORM VIEW (Create/Edit Corporate) */}
      {(viewMode === 'create' || viewMode === 'edit') && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="xl:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4 mb-6">
              <TbBuildingCommunity className="w-5 h-5 text-[#5301ab]" />
              <h3 className="font-bold text-gray-900 text-[15px]">
                {viewMode === 'edit' ? 'Edit Corporate Details' : 'Onboard New Corporate'}
              </h3>
            </div>

            {error && <div className="p-3 mb-4 bg-red-50 text-red-600 text-[12px] font-bold rounded-xl text-center">{error}</div>}

            <div className="flex flex-col gap-6 flex-1">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-y-5">
                  <div>
                    <Input label="Corporate Name" required value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); clearError('name'); }} placeholder="Enter corporate name" theme="purple" className={validationErrors.name ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                    {validationErrors.name && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.name}</p>}
                  </div>
                  <div>
                    <Input label="SPOC Person Name" required value={formData.spoc_name} onChange={(e) => { setFormData({ ...formData, spoc_name: e.target.value }); clearError('spoc_name'); }} placeholder="Manager/SPOC Name" theme="purple" className={validationErrors.spoc_name ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                    {validationErrors.spoc_name && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.spoc_name}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input label="Email Address (Login ID)" type="email" required value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); clearError('email'); }} placeholder="Enter email address" theme="purple" className={validationErrors.email ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                      {validationErrors.email && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.email}</p>}
                    </div>
                    <div>
                      <Input label="Mobile Number" type="tel" required value={formData.contact} onChange={(e) => { setFormData({ ...formData, contact: e.target.value }); clearError('contact'); }} prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[13px] font-semibold text-gray-700">+91</span></>} placeholder="Contact number" theme="purple" className={validationErrors.contact ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                      {validationErrors.contact && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.contact}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input label="Location" required value={formData.location} onChange={(e) => { setFormData({ ...formData, location: e.target.value }); clearError('location'); }} placeholder="City, State" theme="purple" className={validationErrors.location ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                      {validationErrors.location && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.location}</p>}
                    </div>
                    <div>
                      <Input label="Employee Count" type="number" required value={formData.employee_count} onChange={(e) => { setFormData({ ...formData, employee_count: e.target.value }); clearError('employee_count'); }} placeholder="Number of employees" theme="purple" className={validationErrors.employee_count ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                      {validationErrors.employee_count && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.employee_count}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-700">Account Status</label>
                    <div className="flex gap-4">
                      {['Active', 'Blocked'].map((status) => (
                        <label key={status} className="flex items-center gap-2 cursor-pointer mt-2">
                          <input type="radio" name="status" checked={formData.status === status} onChange={() => setFormData({ ...formData, status })} className="w-4 h-4 text-[#5301ab] focus:ring-[#5301ab] border-gray-300" />
                          <span className="text-[13px] font-medium text-gray-700">{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input label={viewMode === 'create' ? 'Initial Password' : 'New Password (Optional)'} type="password" required={viewMode === 'create'} value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }); clearError('password'); }} placeholder="••••••••" theme="purple" className={validationErrors.password ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                      {validationErrors.password && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.password}</p>}
                    </div>
                    <div>
                      <Input label="Confirm Password" type="password" required={viewMode === 'create' || !!formData.password} value={formData.confirmPassword} onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }); clearError('confirmPassword'); }} placeholder="••••••••" theme="purple" className={validationErrors.confirmPassword ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''} />
                      {validationErrors.confirmPassword && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.confirmPassword}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 mt-2 hover:border-[#5301ab]/30 hover:bg-[#5301ab]/5 transition-colors cursor-pointer relative overflow-hidden group"
                onClick={() => document.getElementById('corporateLogoUpload')?.click()}
              >
                <input
                  type="file"
                  id="corporateLogoUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
                {logoPreview ? (
                  <img src={logoPreview} alt="Preview" className="h-16 w-auto object-contain mb-2 group-hover:scale-105 transition-transform" />
                ) : (
                  <FiUploadCloud className="w-6 h-6 text-gray-400 mb-2 group-hover:text-[#5301ab] transition-colors" />
                )}
                <p className="text-[12px] text-gray-500 font-medium group-hover:text-[#5301ab] transition-colors">{logoPreview ? 'Change Logo' : 'Upload Corporate Logo'}</p>
                <p className="text-[10px] text-gray-400 mt-1">(Drag & Drop or Click to browse)</p>
              </div>

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
                <Button type="button" variant="secondary" onClick={() => setAllPermissions(true)} className="!px-3 !py-1.5 !text-[12px] !border-none !shadow-none !bg-[#5301ab]/10 hover:!bg-[#5301ab]/20">All</Button>
                <Button type="button" variant="neutral" onClick={() => setAllPermissions(false)} className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">None</Button>
                <Button type="button" variant="neutral" onClick={() => setPermissions(defaultPermissions)} className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-[#5301ab] hover:text-[#43008a]">Default</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiGrid className="w-4 h-4 text-[#5301ab]" /> Dashboard</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dashboard</span><ToggleSwitch checked={permissions.viewDashboard} onChange={(c) => handleToggle('viewDashboard', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiUsers className="w-4 h-4 text-[#5301ab]" /> User Management</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Upload User</span><ToggleSwitch checked={permissions.uploadUser} onChange={(c) => handleToggle('uploadUser', c)} theme="purple" /></div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">All Users</span><ToggleSwitch checked={permissions.allUsers} onChange={(c) => handleToggle('allUsers', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiShield className="w-4 h-4 text-[#5301ab]" /> Sponsored Services</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Sponsored Services</span><ToggleSwitch checked={permissions.sponsoredServices} onChange={(c) => handleToggle('sponsoredServices', c)} theme="purple" /></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiActivity className="w-4 h-4 text-[#5301ab]" /> Healthcheckups</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Healthcheckups</span><ToggleSwitch checked={permissions.healthcheckups} onChange={(c) => handleToggle('healthcheckups', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiHeart className="w-4 h-4 text-[#5301ab]" /> Wellness Services</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Wellness Services</span><ToggleSwitch checked={permissions.wellnessServices} onChange={(c) => handleToggle('wellnessServices', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiFolder className="w-4 h-4 text-[#5301ab]" /> Care Programs</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Care Programs</span><ToggleSwitch checked={permissions.carePrograms} onChange={(c) => handleToggle('carePrograms', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiSmile className="w-4 h-4 text-[#5301ab]" /> Dental</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dental</span><ToggleSwitch checked={permissions.dental} onChange={(c) => handleToggle('dental', c)} theme="purple" /></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 mt-4 border-t border-gray-50">
              <Button type="button" variant="neutral" onClick={handleCancel} className="w-full sm:w-auto">Cancel</Button>
              <Button type="submit" variant="primary" disabled={saving} className="w-full sm:w-auto" icon={saving ? undefined : <FiCheckCircle className="w-4 h-4" />}>
                {saving ? 'Saving...' : (viewMode === 'edit' ? 'Save Changes' : 'Onboard & Generate Credentials')}
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* WORKSPACE VIEW (Dashboard & Employee Management) */}
      {viewMode === 'workspace' && selectedCorporate && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">

          {/* Left Sidebar: Corporate Profile & Nav */}
          <div className="xl:col-span-3 flex flex-col gap-5">

            {/* Profile Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl bg-purple-500"></div>

              <div className="flex flex-col items-center text-center relative z-10">
                {selectedCorporate.logo_url ? (
                    <img src={selectedCorporate.logo_url} alt="Logo" className="w-20 h-20 rounded-[1.5rem] object-cover shadow-lg border border-gray-100 mb-4 bg-white" />
                ) : (
                    <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-lg bg-purple-500 mb-4">
                        {selectedCorporate.name.charAt(0).toUpperCase()}
                    </div>
                )}
                
                <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight mb-1">{selectedCorporate.name}</h3>
                <p className="text-[12px] font-medium text-[#5301ab] bg-[#5301ab]/5 px-3 py-1 rounded-md mb-4 border border-[#5301ab]/10">Corporate Client</p>

                <div className="w-full space-y-2.5 text-left border-t border-gray-100 pt-4 mt-2">
                  <div className="flex items-center gap-3 text-[12px] text-gray-600">
                    <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiMail className="w-3.5 h-3.5" /></div>
                    <span className="truncate">{selectedCorporate.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] text-gray-600">
                    <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiPhone className="w-3.5 h-3.5" /></div>
                    <span>{selectedCorporate.contact}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] text-gray-600">
                    <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiMapPin className="w-3.5 h-3.5" /></div>
                    <span className="truncate">{selectedCorporate.location || 'Bengaluru, India'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Menu Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-3">
              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'dashboard' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                >
                  <FiGrid className="w-4 h-4" /> Dashboard Overview
                </button>
                <button
                  onClick={() => setActiveTab('employees')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'employees' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                >
                  <FiUsers className="w-4 h-4" /> Employee Management
                </button>
                <button
                  onClick={() => setActiveTab('checkups')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'checkups' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                >
                  <FiActivity className="w-4 h-4" /> Health Checkups
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'reports' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                >
                  <FiFileText className="w-4 h-4" /> Reports & Analytics
                </button>
                <div className="h-px bg-gray-100 my-2 mx-2"></div>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'settings' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                >
                  <FiSettings className="w-4 h-4" /> Corporate Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="xl:col-span-9 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] min-h-[600px] flex flex-col relative overflow-hidden">

            {/* Dynamic Header Based on Tab */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div>
                <h3 className="font-bold text-gray-900 text-[18px]">
                  {activeTab === 'dashboard' && 'Corporate Dashboard'}
                  {activeTab === 'employees' && 'Employee Management'}
                  {activeTab === 'checkups' && 'Health Checkups'}
                  {activeTab === 'reports' && 'Reports & Analytics'}
                  {activeTab === 'settings' && 'Corporate Configuration'}
                </h3>
                <p className="text-[12px] text-gray-500 font-medium mt-0.5">
                  {activeTab === 'dashboard' && 'Overview of employee coverage and utilization.'}
                  {activeTab === 'employees' && 'Add single employees, bulk upload, or view history.'}
                  {activeTab === 'checkups' && 'Track ongoing and completed health checkups.'}
                  {activeTab === 'reports' && 'Access aggregate health data and reports.'}
                  {activeTab === 'settings' && 'Manage operational status and corporate profile.'}
                </p>
              </div>

              {/* Contextual Header Actions */}
              {activeTab === 'employees' && (
                <div className="flex gap-3 hidden sm:flex">
                  <Button variant="secondary" className="!border-[#5301ab] text-[#5301ab] hover:!bg-[#5301ab]/5" icon={<FiPlus className="w-3.5 h-3.5" />}>Add Single Employee</Button>
                  <Button variant="neutral" className="text-[#5301ab]" icon={<FiDownload className="w-3.5 h-3.5" />}>Download Template</Button>
                </div>
              )}
            </div>

            {/* Tab Content Area */}
            <div className="p-6 flex-1 bg-white">

              {/* 1. Dashboard Tab */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6 animate-in fade-in duration-400">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3"><FiUsers className="text-[#5301ab] w-5 h-5" /></div>
                      <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Employees</h4>
                      <p className="text-2xl font-black text-gray-900 mt-1">{selectedCorporate.employee_count}</p>
                    </div>
                    <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3"><FiCheckCircle className="text-emerald-500 w-5 h-5" /></div>
                      <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Checkups Completed</h4>
                      <p className="text-2xl font-black text-gray-900 mt-1">420</p>
                    </div>
                    <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3"><FiFileText className="text-blue-500 w-5 h-5" /></div>
                      <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Policies Active</h4>
                      <p className="text-2xl font-black text-gray-900 mt-1">1,250</p>
                    </div>
                    <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-3"><FiActivity className="text-orange-500 w-5 h-5" /></div>
                      <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pending Claims</h4>
                      <p className="text-2xl font-black text-gray-900 mt-1">12</p>
                    </div>
                  </div>
                  <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <FiClock className="w-4 h-4 text-[#5301ab]" /> Recent Account Activity
                    </h3>
                    <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-gray-900 text-[13px]">Employee Bulk Upload</span>
                            <span className="text-[10px] font-bold text-emerald-500">2 days ago</span>
                          </div>
                          <p className="text-[12px] text-gray-500">Successfully processed 50 new employee records.</p>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-[#5301ab] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-gray-900 text-[13px]">Policy Renewal</span>
                            <span className="text-[10px] font-bold text-[#5301ab]">1 month ago</span>
                          </div>
                          <p className="text-[12px] text-gray-500">Corporate health policy successfully renewed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Employee Management Tab (Contains the internal sub-tabs) */}
              {activeTab === 'employees' && (
                <div className="flex flex-col h-full animate-in fade-in duration-400">
                  <div className="flex items-center gap-6 border-b border-gray-100 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <button onClick={() => setEmployeeTab('employees')} className={`flex items-center gap-2 font-bold text-[13px] pb-3 border-b-2 transition-colors whitespace-nowrap ${employeeTab === 'employees' ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}><FiUsers className="w-4 h-4" /> All Employees</button>
                    <button onClick={() => setEmployeeTab('bulk')} className={`flex items-center gap-2 font-bold text-[13px] pb-3 border-b-2 transition-colors whitespace-nowrap ${employeeTab === 'bulk' ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}><FiUploadCloud className="w-4 h-4" /> Bulk Upload</button>
                    <button onClick={() => setEmployeeTab('history')} className={`flex items-center gap-2 font-bold text-[13px] pb-3 border-b-2 transition-colors whitespace-nowrap ${employeeTab === 'history' ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}><FiClock className="w-4 h-4" /> Upload History</button>
                  </div>

                  {/* Sub-tab: All Employees */}
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

                  {/* Sub-tab: Bulk Upload */}
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

                  {/* Sub-tab: Upload History */}
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
                                <td className="px-5 py-3.5 whitespace-nowrap"><p className="text-[12px] font-semibold text-gray-900">{history.date}</p><p className="text-[11px] text-gray-500 mt-0.5">{history.time}</p></td>
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

              {/* 3. Health Checkups Tab (Placeholder to show capability) */}
              {activeTab === 'checkups' && (
                <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in duration-400">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                    <FiActivity className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">Health Checkups Record</h3>
                  <p className="text-[13px] text-gray-500">Track and manage employee health checkup schedules here.</p>
                </div>
              )}

              {/* 4. Reports Tab (Placeholder to show capability) */}
              {activeTab === 'reports' && (
                <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in duration-400">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <FiFileText className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">Corporate Analytics & Reports</h3>
                  <p className="text-[13px] text-gray-500">Aggregate health data and policy utilization reports appear here.</p>
                </div>
              )}

              {/* 5. Clinic Settings Tab */}
              {activeTab === 'settings' && (
                <div className="flex flex-col animate-in fade-in duration-400 max-w-4xl">
                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Corporate Name" defaultValue={selectedCorporate.name} theme="purple" className="bg-white" />
                      <Input label="Contact Person" defaultValue={selectedCorporate.spoc_name} theme="purple" className="bg-white" />
                      <Input label="Email Address" defaultValue={selectedCorporate.email} theme="purple" className="bg-white" />
                      <Input label="Phone Number" defaultValue={selectedCorporate.contact} theme="purple" className="bg-white" />
                    </div>

                    <div className="border-t border-gray-200 pt-6 mt-2">
                      <h4 className="font-bold text-[14px] text-gray-900 mb-4">Operational Status</h4>
                      <div className="flex items-center justify-between bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                        <div>
                          <p className="font-bold text-[13px] text-gray-900">Active Corporate Account</p>
                          <p className="text-[12px] text-gray-500 mt-0.5">Toggle to deactivate this corporate entity. Employees will lose platform access.</p>
                        </div>
                        <ToggleSwitch theme="purple" defaultChecked={selectedCorporate.status === 'Active'} />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button variant="primary" className="shadow-md shadow-[#5301ab]/20 !px-8" icon={<FiCheckCircle className="w-4 h-4" />}>Save Settings</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCorporateHubCom;