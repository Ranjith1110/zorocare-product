import { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiUsers, FiShield, FiAward, FiUser,
  FiPlus, FiUserPlus, FiClock,
  FiSearch, FiFilter, FiDownload, FiEdit2, FiTrash2,
  FiCheckCircle, FiActivity, FiBriefcase, FiGrid, FiFileText,
  FiArrowLeft, FiShare2, FiCopy, FiCheck, FiKey, FiExternalLink, FiX
} from 'react-icons/fi';

import Button from '../common/Button';
import Input from '../common/Input';
import ToggleSwitch from '../common/ToggleSwitch';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface KPI {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

interface AdminUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: string;
  status: string;
  last_login?: string;
  permissions: { [key: string]: boolean };
}

interface ActivityItem {
  id: number;
  admin_name: string;
  action: string;
  role: string;
  created_at: string;
}

interface CredentialShareModalData {
  name: string;
  email: string;
  password?: string;
  role: string;
  loginUrl: string;
}

const defaultPermissions = {
  viewDashboard: true,
  manageUsers: true,
  onboardUsers: true,
  manageInsurance: true,
  manageCorporate: true,
  manageServices: true,
  createClinic: true,
  clinicDashboard: true,
  clinicBookings: true,
  clinicCheckups: true,
  clinicReports: true,
  clinicSettings: true
};

const SuperAdminAdministrationCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit'>('list');
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [activitiesLoading, setActivitiesLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Share Credentials Modal state
  const [shareData, setShareData] = useState<CredentialShareModalData | null>(null);
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'Admin',
    status: 'Active'
  });
  const [permissions, setPermissions] = useState(defaultPermissions);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    if (viewMode === 'list') {
      fetchAdmins();
      fetchActivities();
    }
  }, [viewMode]);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/superadmin/admins`);
      const data = await res.json();
      if (data.success) {
        setAdminUsers(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch admins:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchActivities = async () => {
    setActivitiesLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/superadmin/admins/activities`);
      const data = await res.json();
      if (data.success) {
        setActivities(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch security activities:', err);
    } finally {
      setActivitiesLoading(false);
    }
  };

  const handleCreateClick = () => {
    setEditId(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'Admin',
      status: 'Active'
    });
    setPermissions(defaultPermissions);
    setError('');
    setViewMode('create');
  };

  const handleEditClick = (user: AdminUser) => {
    setEditId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      password: '',
      confirmPassword: '',
      role: user.role,
      status: user.status
    });
    setPermissions({ ...defaultPermissions, ...(user.permissions || {}) });
    setError('');
    setViewMode('edit');
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this admin user?')) return;
    try {
      const res = await fetch(`${API_URL}/api/superadmin/admins/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchAdmins();
        fetchActivities();
      }
    } catch (err) {
      console.error('Failed to delete admin:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (viewMode === 'create') {
      if (!formData.password) {
        setError('Password is required');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    }

    if (viewMode === 'edit' && formData.password && formData.password !== formData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    setSaving(true);
    try {
      const endpoint = viewMode === 'create'
        ? `${API_URL}/api/superadmin/admins`
        : `${API_URL}/api/superadmin/admins/${editId}`;

      const method = viewMode === 'create' ? 'POST' : 'PUT';

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password || undefined,
        role: formData.role,
        status: formData.status,
        permissions
      };

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        const adminLoginUrl = `${window.location.origin}/admin-login`;

        // If newly created, prompt Super Admin with Credentials modal to easily copy and send
        if (viewMode === 'create') {
          setShareData({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
            loginUrl: adminLoginUrl
          });
        }

        setViewMode('list');
      } else {
        setError(data.message || 'Operation failed');
      }
    } catch (err) {
      setError('Server connection failed');
    } finally {
      setSaving(false);
    }
  };

  const handleShareExisting = (user: AdminUser) => {
    setShareData({
      name: user.name,
      email: user.email,
      role: user.role,
      loginUrl: `${window.location.origin}/admin-login`
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggle = (key: keyof typeof defaultPermissions, value: boolean) => {
    setPermissions((prev) => ({ ...prev, [key]: value }));
  };

  const setAllPermissions = (value: boolean) => {
    const updated: any = {};
    Object.keys(defaultPermissions).forEach((key) => {
      updated[key] = value;
    });
    setPermissions(updated);
  };

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 172800) return 'Yesterday';
    return date.toLocaleDateString();
  };

  const filteredAdmins = adminUsers.filter((a) =>
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const kpiData: KPI[] = [
    { title: 'Total Admins', value: adminUsers.length.toString(), subtitle: 'All admin accounts', icon: <FiUsers className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Admins', value: adminUsers.filter(a => a.status === 'Active').length.toString(), subtitle: 'Active platform access', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Super Admins', value: '2', subtitle: 'Full root access', icon: <FiAward className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Staff Admins', value: adminUsers.filter(a => a.role === 'Staff').length.toString(), subtitle: 'Restricted access', icon: <FiUser className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' }
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Super Admin': return 'bg-purple-100 text-[#5301ab]';
      case 'Admin': return 'bg-orange-100 text-[#fd5800]';
      case 'Staff': return 'bg-blue-100 text-blue-600';
      case 'Viewer': return 'bg-emerald-100 text-emerald-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
      {/* Share Credentials Modal */}
      {shareData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 space-y-6 animate-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setShareData(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#5301ab] flex items-center justify-center shrink-0">
                <FiKey className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Admin Login Credentials</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">Share these details with {shareData.name}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3 font-mono text-[13px]">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Login Portal URL</span>
                <span className="font-bold text-[#5301ab] break-all">{shareData.loginUrl}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Admin Email</span>
                <span className="font-bold text-gray-900">{shareData.email}</span>
              </div>
              {shareData.password ? (
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Temporary Password</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{shareData.password}</span>
                </div>
              ) : (
                <div className="text-[11px] text-gray-400 font-sans italic">
                  Password encrypted. If forgotten, update the password via Edit Admin.
                </div>
              )}
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Assigned Role</span>
                <span className="font-bold text-gray-800 font-sans">{shareData.role}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="primary"
                onClick={() => {
                  const message = `*Zorocare Platform Admin Access*\n\nLogin URL: ${shareData.loginUrl}\nEmail: ${shareData.email}${shareData.password ? `\nPassword: ${shareData.password}` : ''}\nRole: ${shareData.role}\n\nPlease change your password upon initial sign in.`;
                  copyToClipboard(message);
                }}
                className="w-full flex items-center justify-center gap-2 !py-3"
              >
                {copied ? <FiCheck className="w-4 h-4 text-emerald-300" /> : <FiCopy className="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy Credentials Message'}
              </Button>
              <Button
                variant="neutral"
                onClick={() => window.open(shareData.loginUrl, '_blank')}
                className="flex items-center justify-center gap-1.5"
              >
                <FiExternalLink className="w-4 h-4" /> Open Portal
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Admin Management</h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Create and manage admin users, credentials, roles and module permissions</p>
        </div>
        {viewMode === 'list' ? (
          <Button variant="primary" onClick={handleCreateClick} icon={<FiPlus className="w-4 h-4" />}>
            Create Admin
          </Button>
        ) : (
          <Button variant="neutral" onClick={() => setViewMode('list')} icon={<FiArrowLeft className="w-4 h-4" />}>
            Back to List
          </Button>
        )}
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
              {kpi.icon}
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{kpi.title}</p>
              <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
              <p className="text-[11px] font-medium text-gray-500 mt-1.5">{kpi.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* List Mode View */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="xl:col-span-9 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-5 lg:p-6 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Platform Admins</h3>
                <p className="text-[13px] text-gray-500 font-medium">Manage credentials, share portal access and configure permissions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full sm:w-[260px]">
                  <Input
                    iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                    placeholder="Search by name, email or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    theme="purple"
                  />
                </div>
                <Button variant="neutral" className="!py-2.5 shrink-0" icon={<FiFilter className="w-4 h-4" />}>Filter</Button>
                <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
              </div>
            </div>

            <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <table className="w-full text-left border-collapse min-w-[850px]">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Name</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Role</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Last Login</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="text-center py-10 text-gray-500 text-[13px]">
                        Loading registered administrators...
                      </td>
                    </tr>
                  ) : filteredAdmins.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-10 text-gray-500 text-[13px]">
                        No administrators found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredAdmins.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-5 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-100 text-[#5301ab] font-bold flex items-center justify-center text-[12px]">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-[13px] font-bold text-gray-900">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.email}</td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${getRoleBadge(user.role)}`}>{user.role}</span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                            <span className={`text-[12px] font-bold ${user.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{user.status}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">
                          {user.last_login ? new Date(user.last_login).toLocaleDateString() : 'Never'}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              variant="neutral"
                              onClick={() => handleShareExisting(user)}
                              className="!p-0 w-7 h-7 text-gray-500 hover:text-emerald-600"
                              title="Share Credentials & URL"
                              icon={<FiShare2 className="w-3.5 h-3.5" />}
                            >
                              {null}
                            </Button>
                            <Button
                              variant="neutral"
                              onClick={() => handleEditClick(user)}
                              className="!p-0 w-7 h-7 text-gray-500 hover:text-[#5301ab]"
                              title="Edit Admin"
                              icon={<FiEdit2 className="w-3.5 h-3.5" />}
                            >
                              {null}
                            </Button>
                            <Button
                              variant="neutral"
                              onClick={() => handleDelete(user.id)}
                              className="!p-0 w-7 h-7 text-gray-500 hover:text-red-500"
                              title="Delete Admin"
                              icon={<FiTrash2 className="w-3.5 h-3.5" />}
                            >
                              {null}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-[13px]">
              <span className="text-gray-500 font-medium">Showing {filteredAdmins.length} of {adminUsers.length} administrators</span>
            </div>
          </div>

          {/* Live Recent Security Activity Panel */}
          <div className="xl:col-span-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-50 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-[#5301ab]" />
                <h3 className="font-bold text-gray-900">Recent Security Activity</h3>
              </div>
              <button
                onClick={fetchActivities}
                className="text-[11px] font-bold text-[#5301ab] hover:underline"
              >
                Refresh
              </button>
            </div>

            <div className="flex-1 space-y-5">
              {activitiesLoading ? (
                <p className="text-[12px] text-gray-400 text-center py-4">Fetching audit logs...</p>
              ) : activities.length === 0 ? (
                <p className="text-[12px] text-gray-400 text-center py-4">No recent security activities recorded yet.</p>
              ) : (
                activities.map((act) => (
                  <div key={act.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-[#5301ab] font-bold text-[11px] flex items-center justify-center shrink-0">
                      {act.role === 'Super Admin' ? 'SA' : 'AD'}
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-700 leading-tight">
                        <strong className="text-gray-900">{act.admin_name}</strong>: {act.action}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                        {formatRelativeTime(act.created_at)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit Form */}
      {(viewMode === 'create' || viewMode === 'edit') && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="xl:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
              {viewMode === 'edit' ? <FiEdit2 className="w-5 h-5 text-[#5301ab]" /> : <FiUserPlus className="w-5 h-5 text-[#5301ab]" />}
              <h3 className="font-bold text-gray-900 text-[16px]">
                {viewMode === 'edit' ? 'Edit Admin Details' : 'Create New Admin'}
              </h3>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-[12px] font-bold rounded-xl text-center">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter full name"
                theme="purple"
              />
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="admin@zorocare.com"
                theme="purple"
              />
              <Input
                label="Mobile Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[12px] font-semibold text-gray-700">+91</span></>}
                placeholder="Enter contact number"
                theme="purple"
              />

              <Input
                label={viewMode === 'edit' ? 'New Password (leave blank to keep current)' : 'Password'}
                type="password"
                required={viewMode === 'create'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                theme="purple"
              />

              <Input
                label="Confirm Password"
                type="password"
                required={viewMode === 'create' || !!formData.password}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="••••••••"
                theme="purple"
              />

              <div className="space-y-2 pt-2">
                <label className="text-[12px] font-semibold text-gray-700">Role Selection</label>
                <div className="flex flex-wrap gap-4">
                  {['Admin', 'Staff', 'Viewer'].map((role) => (
                    <label key={role} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        checked={formData.role === role}
                        onChange={() => setFormData({ ...formData, role })}
                        className="w-4 h-4 text-[#5301ab] focus:ring-[#5301ab] border-gray-300"
                      />
                      <span className="text-[13px] font-medium text-gray-700">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 mb-2">
                <label className="text-[12px] font-semibold text-gray-700">Account Status</label>
                <div className="flex gap-4">
                  {['Active', 'Inactive'].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        checked={formData.status === status}
                        onChange={() => setFormData({ ...formData, status })}
                        className="w-4 h-4 text-[#5301ab] focus:ring-[#5301ab] border-gray-300"
                      />
                      <span className="text-[13px] font-medium text-gray-700">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-[16px]">Assign Module Permissions</h3>
                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Control which platform services and tabs this administrator can access</p>
              </div>
              <div className="flex items-center gap-3 text-[12px] font-semibold">
                <span className="text-gray-500">Quick Select:</span>
                <Button type="button" variant="secondary" onClick={() => setAllPermissions(true)} className="!px-3 !py-1.5 !text-[12px] !border-none !shadow-none !bg-[#5301ab]/10 hover:!bg-[#5301ab]/20">All</Button>
                <Button type="button" variant="neutral" onClick={() => setAllPermissions(false)} className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">None</Button>
                <Button type="button" variant="neutral" onClick={() => setPermissions(defaultPermissions)} className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">Default</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1">
              {/* Column 1 */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiGrid className="w-4 h-4 text-[#5301ab]" /> Dashboard</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">View Dashboard</span>
                      <ToggleSwitch checked={permissions.viewDashboard} onChange={(c) => handleToggle('viewDashboard', c)} theme="purple" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiUsers className="w-4 h-4 text-[#5301ab]" /> User Management</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Manage Platform Users</span>
                      <ToggleSwitch checked={permissions.manageUsers} onChange={(c) => handleToggle('manageUsers', c)} theme="purple" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">User Onboard & Permissions</span>
                      <ToggleSwitch checked={permissions.onboardUsers} onChange={(c) => handleToggle('onboardUsers', c)} theme="purple" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiShield className="w-4 h-4 text-[#5301ab]" /> Insurance Management</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Manage Insurance Brokers</span>
                      <ToggleSwitch checked={permissions.manageInsurance} onChange={(c) => handleToggle('manageInsurance', c)} theme="purple" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiBriefcase className="w-4 h-4 text-[#fd5800]" /> Corporate Management</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Manage Corporate Entities</span>
                      <ToggleSwitch checked={permissions.manageCorporate} onChange={(c) => handleToggle('manageCorporate', c)} theme="purple" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiFileText className="w-4 h-4 text-[#5301ab]" /> Service Hub</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Manage Services Catalog</span>
                      <ToggleSwitch checked={permissions.manageServices} onChange={(c) => handleToggle('manageServices', c)} theme="purple" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiActivity className="w-4 h-4 text-[#5301ab]" /> Medical Center</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Create a Clinic</span>
                      <ToggleSwitch checked={permissions.createClinic} onChange={(c) => handleToggle('createClinic', c)} theme="purple" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Clinic Dashboard</span>
                      <ToggleSwitch checked={permissions.clinicDashboard} onChange={(c) => handleToggle('clinicDashboard', c)} theme="purple" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Bookings Management</span>
                      <ToggleSwitch checked={permissions.clinicBookings} onChange={(c) => handleToggle('clinicBookings', c)} theme="purple" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Checkups Record</span>
                      <ToggleSwitch checked={permissions.clinicCheckups} onChange={(c) => handleToggle('clinicCheckups', c)} theme="purple" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Reports Access</span>
                      <ToggleSwitch checked={permissions.clinicReports} onChange={(c) => handleToggle('clinicReports', c)} theme="purple" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600 font-medium">Clinic Settings</span>
                      <ToggleSwitch checked={permissions.clinicSettings} onChange={(c) => handleToggle('clinicSettings', c)} theme="purple" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-50">
              <Button type="button" variant="neutral" onClick={() => setViewMode('list')} className="px-6">Cancel</Button>
              <Button type="submit" variant="primary" disabled={saving} icon={saving ? undefined : <FiCheckCircle className="w-4 h-4" />}>
                {saving ? 'Saving...' : viewMode === 'edit' ? 'Save Changes' : 'Create & Share Credentials'}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default SuperAdminAdministrationCom;