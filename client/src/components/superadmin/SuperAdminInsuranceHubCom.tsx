import { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiBriefcase, FiShield, FiUsers,
  FiSearch, FiFilter, FiDownload, FiEdit2, FiCheckCircle, FiPlus,
  FiXCircle, FiArrowLeft, FiGrid, FiHeart, FiActivity, FiFolder,
  FiKey, FiShare2, FiCopy, FiCheck, FiX, FiUploadCloud, FiTrash2
} from 'react-icons/fi';
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

interface Broker {
  id: number;
  name: string;
  spoc_name: string;
  email: string;
  contact: string;
  location: string;
  pincode: string;
  irdia_number: string;
  logo_url?: string;
  status: string;
  policies_sold: number;
  corporates_count: number;
  total_users: number;
  total_premium: string;
  created_at: string;
  permissions: any;
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
  carePrograms: true
};

const SuperAdminInsuranceHubCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit'>('list');
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(''); // Server errors
  const [successMsg, setSuccessMsg] = useState(''); // Success alert
  const [searchQuery, setSearchQuery] = useState('');

  // Logo Upload State
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  // Granular Validation State
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  // Share Credentials Modal state
  const [shareData, setShareData] = useState<CredentialShareModalData | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    spoc_name: '',
    email: '',
    contact: '',
    location: '',
    pincode: '',
    irdia_number: '',
    password: '',
    confirmPassword: '',
    status: 'Active'
  });

  const [permissions, setPermissions] = useState(defaultPermissions);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    if (viewMode === 'list') {
      fetchBrokers();
    }
  }, [viewMode]);

  const fetchBrokers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/superadmin/insurance-brokers`);
      const data = await res.json();
      if (data.success) {
        setBrokers(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch brokers:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetFormState = () => {
    setFormData({
      name: '', spoc_name: '', email: '', contact: '', location: '',
      pincode: '', irdia_number: '', password: '', confirmPassword: '', status: 'Active'
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

  const handleEditClick = (broker: Broker) => {
    setEditId(broker.id);
    setFormData({
      name: broker.name,
      spoc_name: broker.spoc_name || '',
      email: broker.email,
      contact: broker.contact || '',
      location: broker.location || '',
      pincode: broker.pincode || '',
      irdia_number: broker.irdia_number || '',
      password: '',
      confirmPassword: '',
      status: broker.status || 'Active'
    });
    setPermissions({ ...defaultPermissions, ...(broker.permissions || {}) });
    setError('');
    setValidationErrors({});
    setLogoPreview(broker.logo_url || null);
    setLogoBase64(broker.logo_url || null);
    setViewMode('edit');
  };

  const handleCancel = () => {
    setViewMode('list');
    setEditId(null);
    resetFormState();
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this broker?')) return;
    try {
      const res = await fetch(`${API_URL}/api/superadmin/insurance-brokers/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Broker deleted successfully!');
        setTimeout(() => setSuccessMsg(''), 5000);
        fetchBrokers();
      }
    } catch (err) {
      console.error('Failed to delete broker:', err);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoPreview(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.name) { errors.name = 'Broker Name is mandatory'; isValid = false; }
    if (!formData.spoc_name) { errors.spoc_name = 'SPOC Name is mandatory'; isValid = false; }
    if (!formData.email) { errors.email = 'Email Address is mandatory'; isValid = false; }
    if (!formData.contact) { errors.contact = 'Contact Number is mandatory'; isValid = false; }
    if (!formData.location) { errors.location = 'Location is mandatory'; isValid = false; }
    if (!formData.pincode) { errors.pincode = 'Pincode is mandatory'; isValid = false; }
    if (!formData.irdia_number) { errors.irdia_number = 'IRDIA Number is mandatory'; isValid = false; }

    if (viewMode === 'create' && !formData.password) {
      errors.password = 'Initial Password is required to create the account';
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
        ? `${API_URL}/api/superadmin/insurance-brokers`
        : `${API_URL}/api/superadmin/insurance-brokers/${editId}`;
      const method = viewMode === 'create' ? 'POST' : 'PUT';

      const payload = {
        name: formData.name,
        spoc_name: formData.spoc_name,
        email: formData.email,
        contact: formData.contact,
        location: formData.location,
        pincode: formData.pincode,
        irdia_number: formData.irdia_number,
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
        setSuccessMsg(viewMode === 'create' ? 'Insurance Broker onboarded successfully!' : 'Insurance Broker updated successfully!');
        setTimeout(() => setSuccessMsg(''), 5000); // Auto dismiss after 5 seconds

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

  const handleShareExisting = (broker: Broker) => {
    setShareData({
      name: broker.name,
      email: broker.email,
      loginUrl: `${window.location.origin}/login`
    });
  };

  const filteredBrokers = brokers.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const kpiData: KPI[] = [
    { title: 'Total Brokers', value: brokers.length.toString(), subtitle: 'All active brokers', icon: <FiBriefcase className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Brokers', value: brokers.filter(b => b.status === 'Active').length.toString(), subtitle: 'Operating normally', icon: <FiShield className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Blocked Brokers', value: brokers.filter(b => b.status === 'Blocked').length.toString(), subtitle: 'Access suspended', icon: <FiXCircle className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Total Policies', value: brokers.reduce((acc, b) => acc + (b.policies_sold || 0), 0).toString(), subtitle: 'Across all brokers', icon: <FiUsers className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
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
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Broker Login Credentials</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">Share these details with {shareData.name}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3 font-mono text-[13px]">
              <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Login Portal URL</span><span className="font-bold text-[#5301ab] break-all">{shareData.loginUrl}</span></div>
              <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Registered Email</span><span className="font-bold text-gray-900">{shareData.email}</span></div>
              {shareData.password ? (
                <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Temporary Password</span><span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{shareData.password}</span></div>
              ) : (
                <div className="text-[11px] text-gray-400 font-sans italic">Password is encrypted. If forgotten, reset via Edit Broker.</div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="primary"
                onClick={() => {
                  const message = `*Zorocare Partner Access*\n\nLogin URL: ${shareData.loginUrl}\nEmail: ${shareData.email}${shareData.password ? `\nPassword: ${shareData.password}` : ''}\n\nPlease log in and update your password.`;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white p-4 xl:p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-center hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>{kpi.icon}</div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 mb-0.5">{kpi.title}</p>
                <h3 className="font-heading text-2xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                <p className="text-[10px] font-medium text-gray-400 mt-1">{kpi.subtitle}</p>
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
                  <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search brokers..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} theme="purple" />
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
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Location</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Policies Sold</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr><td colSpan={6} className="text-center py-10 text-gray-500 text-[13px]">Loading brokers...</td></tr>
                  ) : filteredBrokers.length === 0 ? (
                    <tr><td colSpan={6} className="text-center py-10 text-gray-500 text-[13px]">No Brokers found.</td></tr>
                  ) : (
                    filteredBrokers.map((broker) => (
                      <tr key={broker.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            {broker.logo_url && broker.logo_url !== '' ? (
                              <img src={broker.logo_url} alt={broker.name} className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0" />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-purple-100 text-[#5301ab] font-bold flex items-center justify-center text-[12px] shrink-0">
                                {broker.name.charAt(0).toUpperCase()}
                              </div>
                            )}
                            <span className="text-[13px] font-bold text-gray-900">{broker.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{broker.email}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{broker.location}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${broker.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                            <span className={`text-[12px] font-bold ${broker.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{broker.status}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">{broker.policies_sold}</td>
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <div className="flex items-center justify-center gap-2">
                            <Button variant="neutral" onClick={() => handleShareExisting(broker)} className="!p-0 w-7 h-7 text-gray-400 hover:text-emerald-600" title="Share Credentials" icon={<FiShare2 className="w-3.5 h-3.5" />}>{null}</Button>
                            <Button variant="neutral" onClick={() => handleEditClick(broker)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" title="Edit Broker" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                            <Button variant="neutral" onClick={() => handleDelete(broker.id)} className="!p-0 w-7 h-7 text-gray-400 hover:text-red-500" title="Delete Broker" icon={<FiTrash2 className="w-3.5 h-3.5" />}>{null}</Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Details Panel */}
          <div className="xl:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-[15px]">Broker Overview</h3>
            </div>
            {filteredBrokers.length > 0 ? (
              <>
                <div className="flex gap-4 mb-6">
                  {/* Rendering the Broker Logo in the Side Panel */}
                  {filteredBrokers[0].logo_url && filteredBrokers[0].logo_url !== '' ? (
                    <img src={filteredBrokers[0].logo_url} alt="Logo" className="w-16 h-16 rounded-2xl object-cover border border-gray-200 shrink-0" />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                      <FiShield className="w-8 h-8 text-[#5301ab]" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px] leading-tight">{filteredBrokers[0].name}</h4>
                    <p className="text-[12px] text-gray-500 font-medium mt-1">{filteredBrokers[0].email}</p>
                    <p className="text-[12px] text-gray-500 font-medium">{filteredBrokers[0].contact}</p>
                    <p className="text-[12px] text-gray-500 font-medium">IRDIA: {filteredBrokers[0].irdia_number || 'N/A'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-b border-gray-50 py-5 mb-6">
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Onboarded On</p><p className="text-[13px] font-bold text-gray-900">{new Date(filteredBrokers[0].created_at).toLocaleDateString()}</p></div>
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Policies Sold</p><p className="text-[13px] font-bold text-gray-900">{filteredBrokers[0].policies_sold}</p></div>
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Corporates</p><p className="text-[13px] font-bold text-gray-900">{filteredBrokers[0].corporates_count}</p></div>
                  <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Users</p><p className="text-[13px] font-bold text-gray-900">{filteredBrokers[0].total_users}</p></div>
                  <div className="col-span-2 bg-gray-50 rounded-xl p-3 mt-1 flex items-center justify-between border border-gray-100/50">
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Total Premium Generated</p>
                    <p className="text-[15px] font-bold text-[#5301ab]">{filteredBrokers[0].total_premium}</p>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="neutral" onClick={() => handleEditClick(filteredBrokers[0])} icon={<FiEdit2 className="w-3.5 h-3.5 text-gray-500" />}>Edit Broker</Button>
                    <Button variant="danger" icon={<FiXCircle className="w-3.5 h-3.5" />}>Suspend Broker</Button>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-[13px] text-gray-500 text-center py-10">No broker selected.</p>
            )}
          </div>
        </div>
      )}

      {/* FORM VIEW (Create/Edit Broker) */}
      {(viewMode === 'create' || viewMode === 'edit') && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="xl:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4 mb-6">
              {viewMode === 'edit' ? <FiEdit2 className="w-5 h-5 text-[#5301ab]" /> : <FiUsers className="w-5 h-5 text-[#5301ab]" />}
              <h3 className="font-bold text-gray-900 text-[15px]">
                {viewMode === 'edit' ? 'Edit Insurance Broker' : 'Onboard New Insurance Broker'}
              </h3>
            </div>

            {error && <div className="p-3 mb-4 bg-red-50 text-red-600 text-[12px] font-bold rounded-xl text-center">{error}</div>}

            <div className="flex flex-col gap-6 flex-1">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                  <div>
                    <Input
                      label="Broker Company Name"
                      value={formData.name}
                      onChange={(e) => { setFormData({ ...formData, name: e.target.value }); clearError('name'); }}
                      placeholder="Enter broker name"
                      theme="purple"
                      className={validationErrors.name ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.name && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.name}</p>}
                  </div>

                  <div>
                    <Input
                      label="SPOC Person Name"
                      value={formData.spoc_name}
                      onChange={(e) => { setFormData({ ...formData, spoc_name: e.target.value }); clearError('spoc_name'); }}
                      placeholder="Manager/SPOC Name"
                      theme="purple"
                      className={validationErrors.spoc_name ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.spoc_name && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.spoc_name}</p>}
                  </div>

                  <div>
                    <Input
                      label="Email Address (Login ID)"
                      type="email"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); clearError('email'); }}
                      placeholder="Enter email address"
                      theme="purple"
                      className={validationErrors.email ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.email && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.email}</p>}
                  </div>

                  <div>
                    <Input
                      label="Mobile Number"
                      type="tel"
                      value={formData.contact}
                      onChange={(e) => { setFormData({ ...formData, contact: e.target.value }); clearError('contact'); }}
                      prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[13px] font-semibold text-gray-700">+91</span></>}
                      placeholder="Contact number"
                      theme="purple"
                      className={validationErrors.contact ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.contact && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.contact}</p>}
                  </div>

                  <div>
                    <Input
                      label="Location"
                      value={formData.location}
                      onChange={(e) => { setFormData({ ...formData, location: e.target.value }); clearError('location'); }}
                      placeholder="City, State"
                      theme="purple"
                      className={validationErrors.location ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.location && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.location}</p>}
                  </div>

                  <div>
                    <Input
                      label="Pincode"
                      value={formData.pincode}
                      onChange={(e) => { setFormData({ ...formData, pincode: e.target.value }); clearError('pincode'); }}
                      placeholder="Zip/Pincode"
                      theme="purple"
                      className={validationErrors.pincode ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.pincode && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.pincode}</p>}
                  </div>

                  <div>
                    <Input
                      label="IRDIA Number"
                      value={formData.irdia_number}
                      onChange={(e) => { setFormData({ ...formData, irdia_number: e.target.value }); clearError('irdia_number'); }}
                      placeholder="Enter IRDIA number"
                      theme="purple"
                      className={validationErrors.irdia_number ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.irdia_number && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.irdia_number}</p>}
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

                  <div>
                    <Input
                      label={viewMode === 'create' ? 'Initial Password' : 'New Password (Optional)'}
                      type="password"
                      value={formData.password}
                      onChange={(e) => { setFormData({ ...formData, password: e.target.value }); clearError('password'); }}
                      placeholder="••••••••"
                      theme="purple"
                      className={validationErrors.password ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.password && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.password}</p>}
                  </div>

                  <div>
                    <Input
                      label="Confirm Password"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }); clearError('confirmPassword'); }}
                      placeholder="••••••••"
                      theme="purple"
                      className={validationErrors.confirmPassword ? '!border-red-500 bg-red-50 focus:!border-red-500 focus:!ring-red-500/20' : ''}
                    />
                    {validationErrors.confirmPassword && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1 tracking-wide">{validationErrors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 mt-2 hover:border-[#5301ab]/30 hover:bg-[#5301ab]/5 transition-colors cursor-pointer relative overflow-hidden group"
                onClick={() => document.getElementById('brokerLogoUpload')?.click()}
              >
                <input
                  type="file"
                  id="brokerLogoUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
                {logoPreview ? (
                  <img src={logoPreview} alt="Preview" className="h-16 w-auto object-contain mb-2 group-hover:scale-105 transition-transform" />
                ) : (
                  <FiUploadCloud className="w-6 h-6 text-gray-400 mb-2 group-hover:text-[#5301ab] transition-colors" />
                )}
                <p className="text-[12px] text-gray-500 font-medium group-hover:text-[#5301ab] transition-colors">{logoPreview ? 'Change Logo' : 'Upload Broker Logo'}</p>
                <p className="text-[10px] text-gray-400 mt-1">(Drag & Drop or Click to browse)</p>
              </div>

            </div>
          </div>

          <div className="xl:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-[15px]">Zorocare Insurance Hub Service Permissions</h3>
                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Enable or disable service modules for this broker</p>
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
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dashboard Access</span><ToggleSwitch checked={permissions.viewDashboard} onChange={(c) => handleToggle('viewDashboard', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiBriefcase className="w-4 h-4 text-[#5301ab]" /> Corporate Management</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Create Corporate</span><ToggleSwitch checked={permissions.createCorporate} onChange={(c) => handleToggle('createCorporate', c)} theme="purple" /></div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">List Of Corporates</span><ToggleSwitch checked={permissions.listCorporates} onChange={(c) => handleToggle('listCorporates', c)} theme="purple" /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiUsers className="w-4 h-4 text-[#5301ab]" /> User Management</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Upload User</span><ToggleSwitch checked={permissions.uploadUser} onChange={(c) => handleToggle('uploadUser', c)} theme="purple" /></div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">All Users</span><ToggleSwitch checked={permissions.allUsers} onChange={(c) => handleToggle('allUsers', c)} theme="purple" /></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiShield className="w-4 h-4 text-[#5301ab]" /> Sponsored Services</div>
                  <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Sponsored Services</span><ToggleSwitch checked={permissions.sponsoredServices} onChange={(c) => handleToggle('sponsoredServices', c)} theme="purple" /></div>
                </div>
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
    </div>
  );
};

export default SuperAdminInsuranceHubCom;