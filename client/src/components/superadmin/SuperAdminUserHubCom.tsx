import { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiUsers, FiShield, FiUserCheck, FiUserPlus, FiFileText,
    FiSearch, FiDownload, FiEye, FiEdit2, FiCheckCircle, FiX, FiKey, FiShare2, FiCopy, FiCheck,
    FiPlus, FiXCircle, FiArrowLeft, FiGrid, FiTrash2,
    FiHeart, FiActivity, FiSmile, FiTruck, FiDollarSign, FiSmartphone, FiUploadCloud,
    FiClock, FiMail, FiPhone, FiMapPin, FiSettings,
} from 'react-icons/fi';
import { TbBuildingCommunity } from 'react-icons/tb';

import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
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

interface UserData {
    id: number;
    name: string;
    employee_id?: string;
    email: string;
    phone: string;
    dependent_type: string;
    location: string;
    pincode: string;
    type: string;
    organization: string;
    status: string;
    created_at: string;
    dependents: number;
    permissions: any;
}

interface CredentialShareModalData {
    name: string;
    email: string;
    password?: string;
    loginUrl: string;
}

type UserTab = 'dashboard' | 'dependents' | 'health_records' | 'smart_ring' | 'settings';

const defaultPermissions = {
    viewDashboard: true,
    dependent: true,
    smartRing: true,
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

const SuperAdminUserHubCom: FC = () => {
    const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit' | 'workspace'>('list');
    const [creationMethod, setCreationMethod] = useState<'manual' | 'bulk'>('manual');
    const [usersList, setUsersList] = useState<UserData[]>([]);
    const [editData, setEditData] = useState<UserData | null>(null);

    // Workspace State
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
    const [activeTab, setActiveTab] = useState<UserTab>('dashboard');

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
    const [shareData, setShareData] = useState<CredentialShareModalData | null>(null);
    const [copied, setCopied] = useState(false);
    const [bulkFile, setBulkFile] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        employee_id: '',
        email: '',
        phone: '',
        dependent_type: 'Self',
        location: '',
        pincode: '',
        password: '',
        confirmPassword: '',
        status: 'Active'
    });
    const [permissions, setPermissions] = useState(defaultPermissions);
    const [editId, setEditId] = useState<number | null>(null);

    useEffect(() => {
        if (viewMode === 'list') {
            fetchUsers();
        }
    }, [viewMode]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/superadmin/users`);
            const data = await res.json();
            if (data.success) {
                setUsersList(data.data);
            }
        } catch (err) {
            console.error('Failed to fetch users:', err);
        } finally {
            setLoading(false);
        }
    };

    const resetFormState = () => {
        setFormData({
            name: '', employee_id: '', email: '', phone: '', dependent_type: 'Self',
            location: '', pincode: '', password: '', confirmPassword: '', status: 'Active'
        });
        setPermissions(defaultPermissions);
        setError('');
        setValidationErrors({});
        setBulkFile(null);
    };

    const handleCreateClick = () => {
        setEditId(null);
        setCreationMethod('manual');
        resetFormState();
        setViewMode('create');
    };

    const handleEditClick = (user: UserData) => {
        setEditId(user.id);
        setFormData({
            name: user.name,
            employee_id: user.employee_id || '',
            email: user.email,
            phone: user.phone,
            dependent_type: user.dependent_type || 'Self',
            location: user.location || '',
            pincode: user.pincode || '',
            password: '',
            confirmPassword: '',
            status: user.status || 'Active'
        });
        setPermissions({ ...defaultPermissions, ...(user.permissions || {}) });
        setError('');
        setValidationErrors({});
        setViewMode('edit');
    };

    const handleWorkspaceClick = (user: UserData, defaultTab: UserTab = 'dashboard') => {
        setSelectedUser(user);
        setActiveTab(defaultTab);
        setViewMode('workspace');
    };

    const handleCancel = () => {
        setViewMode('list');
        setEditData(null);
        setSelectedUser(null);
        resetFormState();
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            const res = await fetch(`${API_URL}/api/superadmin/users/${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) {
                setSuccessMsg('User deleted successfully!');
                setTimeout(() => setSuccessMsg(''), 5000);
                fetchUsers();
            }
        } catch (err) {
            console.error('Failed to delete user:', err);
        }
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        let isValid = true;

        if (!formData.name) { errors.name = 'Name is mandatory'; isValid = false; }
        if (!formData.email) { errors.email = 'Email Address is mandatory'; isValid = false; }
        if (!formData.phone) { errors.phone = 'Mobile Number is mandatory'; isValid = false; }
        if (!formData.location) { errors.location = 'Location is mandatory'; isValid = false; }
        if (!formData.pincode) { errors.pincode = 'Pincode is mandatory'; isValid = false; }

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

        if (viewMode === 'create' && creationMethod === 'bulk') {
            if (!bulkFile) {
                setError('Please upload a file first.');
                return;
            }
            setSaving(true);
            setTimeout(() => {
                setSaving(false);
                setSuccessMsg('Bulk upload processed successfully!');
                setTimeout(() => setSuccessMsg(''), 5000);
                setViewMode('list');
            }, 1500);
            return;
        }

        if (!validateForm()) return;

        setSaving(true);
        try {
            const endpoint = viewMode === 'create'
                ? `${API_URL}/api/superadmin/users`
                : `${API_URL}/api/superadmin/users/${editId}`;
            const method = viewMode === 'create' ? 'POST' : 'PUT';

            const payload = { ...formData, permissions };

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();

            if (data.success) {
                setSuccessMsg(viewMode === 'create' ? 'User created successfully!' : 'User updated successfully!');
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setBulkFile(e.target.files[0]);
        }
    };

    const handleDownloadTemplate = () => {
        const headers = ['Name', 'Employee ID', 'Mobile Number', 'Email ID', 'Dependent Type', 'Location', 'Pincode'];
        const sampleRow1 = ['Arjun Nair', 'EMP1001', '9876543210', 'arjun.nair@example.com', 'Self', 'Bengaluru', '560001'];
        const sampleRow2 = ['Sneha Reddy', 'EMP1002', '9123456789', 'sneha.reddy@example.com', 'Mom', 'Hyderabad', '500081'];

        const csvContent = [headers.join(','), sampleRow1.join(','), sampleRow2.join(',')].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'zorocare_user_onboarding_template.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

    const handleShareExisting = (user: UserData) => {
        setShareData({
            name: user.name,
            email: user.email,
            loginUrl: `${window.location.origin}/login`
        });
    };

    const filteredUsers = usersList.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const kpiData: KPI[] = [
        { title: 'Total Users', value: usersList.length.toString(), subtitle: 'All registered platform users', icon: <FiUsers className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Active Users', value: usersList.filter(u => u.status === 'Active').length.toString(), subtitle: 'Operating normally', icon: <FiUserCheck className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Corporate Users', value: usersList.filter(u => u.type === 'Corporate').length.toString(), subtitle: 'Linked to corporates', icon: <TbBuildingCommunity className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Direct Users', value: usersList.filter(u => u.type === 'Direct').length.toString(), subtitle: 'Individual subscriptions', icon: <FiUserPlus className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' }
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* Success Alert */}
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
                                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">User Login Credentials</h3>
                                <p className="text-[12px] text-gray-500 mt-0.5">Share these details with {shareData.name}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3 font-mono text-[13px]">
                            <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Login Portal URL</span><span className="font-bold text-[#5301ab] break-all">{shareData.loginUrl}</span></div>
                            <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Registered Email</span><span className="font-bold text-gray-900">{shareData.email}</span></div>
                            {shareData.password ? (
                                <div><span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider font-sans">Temporary Password</span><span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{shareData.password}</span></div>
                            ) : (
                                <div className="text-[11px] text-gray-400 font-sans italic">Password is encrypted. If forgotten, reset via Edit User.</div>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                variant="primary"
                                onClick={() => {
                                    const message = `*Zorocare Platform Access*\n\nLogin URL: ${shareData.loginUrl}\nEmail: ${shareData.email}${shareData.password ? `\nPassword: ${shareData.password}` : ''}\n\nPlease log in and update your password.`;
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

            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">
                        {viewMode === 'workspace' && selectedUser ? `${selectedUser.name}'s Profile` : 'User Management'}
                    </h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">
                        {viewMode === 'workspace' ? 'Manage health records, dependents, devices, and settings for this user.' : 'Manage platform users, onboarding, dependents, and service permissions'}
                    </p>
                </div>
                {viewMode === 'list' ? (
                    <Button variant="primary" onClick={handleCreateClick} icon={<FiPlus className="w-4 h-4" />} className="w-full sm:w-auto">
                        Create New User
                    </Button>
                ) : (
                    <Button variant="neutral" onClick={handleCancel} icon={<FiArrowLeft className="w-4 h-4" />} className="w-full sm:w-auto">
                        Back to List
                    </Button>
                )}
            </div>

            {/* KPIs */}
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
                                    <p className="text-[10px] font-medium text-gray-400 mt-1">{kpi.subtitle}</p>
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
                            <h3 className="font-bold text-gray-900 text-lg">All Users</h3>
                            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                                <div className="w-full sm:w-[280px]">
                                    <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search by user name or email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} theme="purple" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full overflow-x-auto flex-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-50/50">
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">User Name</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Phone</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Joined Date</th>
                                        <th className="px-5 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {loading ? (
                                        <tr><td colSpan={6} className="text-center py-10 text-gray-500 text-[13px]">Loading users...</td></tr>
                                    ) : filteredUsers.length === 0 ? (
                                        <tr><td colSpan={6} className="text-center py-10 text-gray-500 text-[13px]">No users found.</td></tr>
                                    ) : (
                                        filteredUsers.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-purple-100 text-[#5301ab] text-[11px] font-bold">
                                                            {user.name.charAt(0).toUpperCase()}
                                                        </div>
                                                        <span className="text-[13px] font-bold text-gray-900">{user.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.email}</td>
                                                <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.phone}</td>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                                        <span className={`text-[12px] font-bold ${user.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{user.status}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap text-[12px] font-medium text-gray-600">
                                                    {new Date(user.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="px-5 py-3.5 whitespace-nowrap">
                                                    <div className="flex items-center justify-center gap-2.5">
                                                        <Button variant="neutral" onClick={() => handleWorkspaceClick(user, 'dashboard')} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" title="Open Workspace" icon={<FiGrid className="w-3.5 h-3.5" />}>{null}</Button>
                                                        <Button variant="neutral" onClick={() => handleShareExisting(user)} className="!p-0 w-7 h-7 text-gray-400 hover:text-emerald-600" title="Share Credentials" icon={<FiShare2 className="w-3.5 h-3.5" />}>{null}</Button>
                                                        <Button variant="neutral" onClick={() => handleEditClick(user)} className="!p-0 w-7 h-7 text-gray-400 hover:text-[#5301ab]" title="Edit User" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                                                        <Button variant="neutral" onClick={() => handleDelete(user.id)} className="!p-0 w-7 h-7 text-gray-400 hover:text-red-500" title="Delete User" icon={<FiTrash2 className="w-3.5 h-3.5" />}>{null}</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="xl:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[15px]">User Quick View</h3>
                        </div>

                        {filteredUsers.length > 0 ? (
                            <>
                                <div className="flex gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0 font-bold text-[#5301ab] text-xl">
                                        {filteredUsers[0].name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-[15px] leading-tight">{filteredUsers[0].name}</h4>
                                        <p className="text-[12px] text-gray-500 font-medium mt-1">{filteredUsers[0].email}</p>
                                        <p className="text-[12px] text-gray-500 font-medium">{filteredUsers[0].phone}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-b border-gray-50 py-5 mb-6">
                                    <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">User Type</p><p className="text-[13px] font-bold text-gray-900">{filteredUsers[0].type}</p></div>
                                    <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Dependents</p><p className="text-[13px] font-bold text-gray-900">{filteredUsers[0].dependents || 0}</p></div>
                                    <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Joined Date</p><p className="text-[13px] font-bold text-gray-900">{new Date(filteredUsers[0].created_at).toLocaleDateString()}</p></div>
                                    <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Smart Ring</p><p className="text-[13px] font-bold text-emerald-600">Connected</p></div>
                                </div>

                                <div className="space-y-3 mt-auto">
                                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Actions</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button variant="secondary" onClick={() => handleWorkspaceClick(filteredUsers[0], 'dashboard')} className="!border-[#5301ab]/30 !bg-[#5301ab]/5 hover:!bg-[#5301ab]/10 !text-[12px] !text-[#5301ab]" icon={<FiGrid className="w-4 h-4" />}>Open Workspace</Button>
                                        <Button variant="neutral" onClick={() => handleEditClick(filteredUsers[0])} className="!text-[12px]" icon={<FiEdit2 className="w-4 h-4 text-gray-500" />}>Edit Profile</Button>
                                    </div>
                                    <Button variant="danger" className="w-full !text-[12px]" icon={<FiXCircle className="w-3.5 h-3.5" />}>Deactivate User</Button>
                                </div>
                            </>
                        ) : (
                            <p className="text-[13px] text-gray-500 text-center py-10">No users found.</p>
                        )}
                    </div>
                </div>
            )}

            {/* FORM VIEW (Create / Edit) */}
            {(viewMode === 'create' || viewMode === 'edit') && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="xl:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-50 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-2">
                                {viewMode === 'edit' ? <FiEdit2 className="w-5 h-5 text-[#5301ab]" /> : <FiUserPlus className="w-5 h-5 text-[#5301ab]" />}
                                <h3 className="font-bold text-gray-900 text-[15px]">
                                    {viewMode === 'edit' ? 'Edit User Details' : 'Create New User'}
                                </h3>
                            </div>
                            {/* Method Toggles */}
                            {viewMode === 'create' && (
                                <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => { setCreationMethod('manual'); setError(''); }}
                                        className={`px-3 py-1 text-[11px] font-bold rounded-md transition-colors ${creationMethod === 'manual' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Manual
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setCreationMethod('bulk'); setError(''); }}
                                        className={`px-3 py-1 text-[11px] font-bold rounded-md transition-colors ${creationMethod === 'bulk' ? 'bg-white shadow-sm text-[#5301ab]' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Bulk Upload
                                    </button>
                                </div>
                            )}
                        </div>

                        {error && <div className="p-3 mb-4 bg-red-50 text-red-600 text-[12px] font-bold rounded-xl text-center">{error}</div>}

                        {/* MANUAL CREATION FLOW */}
                        {creationMethod === 'manual' && (
                            <form id="userForm" onSubmit={handleSubmit} className="flex-1 space-y-4 flex flex-col">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                    <div>
                                        <Input label="Full Name" required value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); clearError('name'); }} placeholder="Enter full name" theme="purple" className={validationErrors.name ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.name && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.name}</p>}
                                    </div>
                                    <div>
                                        <Input label="Employee ID (Optional)" value={formData.employee_id} onChange={(e) => setFormData({ ...formData, employee_id: e.target.value })} placeholder="Enter Employee ID" theme="purple" />
                                    </div>
                                    <div>
                                        <Input label="Mobile Number" type="tel" required value={formData.phone} onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); clearError('phone'); }} prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[13px] font-semibold text-gray-700">+91</span></>} placeholder="Contact number" theme="purple" className={validationErrors.phone ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.phone && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.phone}</p>}
                                    </div>
                                    <div>
                                        <Input label="Email Address" type="email" required value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); clearError('email'); }} placeholder="Enter email address" theme="purple" className={validationErrors.email ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.email && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.email}</p>}
                                    </div>
                                    <div>
                                        <Select label="Dependent Type" required value={formData.dependent_type} onChange={(e) => setFormData({ ...formData, dependent_type: e.target.value })} options={['Self', 'Mom', 'Dad', 'Spouse', 'Child', 'Other']} theme="purple" />
                                    </div>
                                    <div>
                                        <Input label="Location" required value={formData.location} onChange={(e) => { setFormData({ ...formData, location: e.target.value }); clearError('location'); }} placeholder="City, State" theme="purple" className={validationErrors.location ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.location && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.location}</p>}
                                    </div>
                                    <div>
                                        <Input label="Pincode" required value={formData.pincode} onChange={(e) => { setFormData({ ...formData, pincode: e.target.value }); clearError('pincode'); }} placeholder="Zip/Pincode" theme="purple" className={validationErrors.pincode ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.pincode && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.pincode}</p>}
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
                                        <Input label={viewMode === 'create' ? 'Initial Password' : 'New Password (Optional)'} type="password" required={viewMode === 'create'} value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }); clearError('password'); }} placeholder="••••••••" theme="purple" className={validationErrors.password ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.password && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.password}</p>}
                                    </div>
                                    <div>
                                        <Input label="Confirm Password" type="password" required={viewMode === 'create' || !!formData.password} value={formData.confirmPassword} onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }); clearError('confirmPassword'); }} placeholder="••••••••" theme="purple" className={validationErrors.confirmPassword ? '!border-red-500 bg-red-50' : ''} />
                                        {validationErrors.confirmPassword && <p className="text-red-500 text-[10px] mt-1.5 font-bold pl-1">{validationErrors.confirmPassword}</p>}
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* BULK UPLOAD FLOW */}
                        {creationMethod === 'bulk' && viewMode === 'create' && (
                            <form id="userForm" onSubmit={handleSubmit} className="flex flex-col flex-1 animate-in fade-in duration-300 space-y-6">
                                <div className="bg-[#5301ab]/5 border border-[#5301ab]/20 rounded-2xl p-5 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center shrink-0">
                                        <FiFileText className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-1">Download Sample Template</h4>
                                        <p className="text-[12px] text-gray-600 mb-3 leading-relaxed">Please download the template file, fill it out with user details following the correct format, and upload it back here.</p>
                                        <div className="flex gap-3">
                                            {/* We dynamically generate the .csv file for both buttons to maintain native compatibility */}
                                            <Button type="button" onClick={handleDownloadTemplate} variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/10" icon={<FiDownload className="w-3 h-3" />}>Template (.xlsx)</Button>
                                            <Button type="button" onClick={handleDownloadTemplate} variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/10" icon={<FiDownload className="w-3 h-3" />}>Template (.csv)</Button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="flex-1 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100/50 hover:border-[#5301ab]/30 transition-colors flex flex-col items-center justify-center text-center p-8 group cursor-pointer min-h-[220px] relative overflow-hidden"
                                    onClick={() => document.getElementById('bulkUserUpload')?.click()}
                                >
                                    <input
                                        type="file"
                                        id="bulkUserUpload"
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform ${bulkFile ? 'text-emerald-500 border border-emerald-100' : 'text-[#5301ab]'}`}>
                                        {bulkFile ? <FiCheckCircle className="w-8 h-8" /> : <FiUploadCloud className="w-8 h-8" />}
                                    </div>
                                    <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                                        {bulkFile ? bulkFile.name : 'Drag & Drop File Here'}
                                    </h3>
                                    <p className="text-[12px] text-gray-500 font-medium mb-6">
                                        {bulkFile ? 'File ready to process' : 'Supports .csv, .xls, .xlsx up to 10MB'}
                                    </p>
                                    <Button type="button" variant="neutral" className="bg-white pointer-events-none">
                                        {bulkFile ? 'Change File' : 'Browse Computer'}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="xl:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
                            <div>
                                <h3 className="font-bold text-gray-900 text-[15px]">Zorocare Users Service Permissions</h3>
                                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Enable or disable service permissions for this user</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold">
                                <span className="text-gray-500">Quick Select:</span>
                                <Button type="button" variant="secondary" onClick={() => setAllPermissions(true)} className="!px-3 !py-1.5 !text-[12px] !border-none !shadow-none !bg-[#5301ab]/10 hover:!bg-[#5301ab]/20">All</Button>
                                <Button type="button" variant="neutral" onClick={() => setAllPermissions(false)} className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">None</Button>
                                <Button type="button" variant="neutral" onClick={() => setPermissions(defaultPermissions)} className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-[#5301ab] hover:text-[#43008a]">Default</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 flex-1">
                            {/* Column 1: Core Access */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiGrid className="w-4 h-4 text-[#5301ab]" /> Dashboard</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Dashboard Access</span><ToggleSwitch checked={permissions.viewDashboard} onChange={(c) => handleToggle('viewDashboard', c)} theme="purple" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiUsers className="w-4 h-4 text-[#5301ab]" /> Dependent</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Add Dependents</span><ToggleSwitch checked={permissions.dependent} onChange={(c) => handleToggle('dependent', c)} theme="purple" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiSmartphone className="w-4 h-4 text-[#5301ab]" /> Smart Ring</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Smart Ring Access</span><ToggleSwitch checked={permissions.smartRing} onChange={(c) => handleToggle('smartRing', c)} theme="purple" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[13px] mb-2"><FiDollarSign className="w-4 h-4 text-[#5301ab]" /> Subscription</div>
                                    <div className="flex items-center justify-between pl-1"><span className="text-[12px] text-gray-600 font-medium">Subscription Access</span><ToggleSwitch checked={permissions.subscription} onChange={(c) => handleToggle('subscription', c)} theme="purple" /></div>
                                </div>
                            </div>

                            {/* Column 2 & 3: Sponsored Services */}
                            <div className="lg:col-span-2 bg-gray-50/50 p-5 rounded-2xl border border-gray-100 h-fit">
                                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-5">
                                    <div className="flex items-center gap-2 font-bold text-gray-900 text-[14px]">
                                        <FiShield className="w-5 h-5 text-[#5301ab]" /> Sponsored Services
                                    </div>
                                    <ToggleSwitch checked={permissions.sponsoredServices} onChange={(c) => handleToggle('sponsoredServices', c)} theme="purple" />
                                </div>

                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 transition-opacity duration-300 ${!permissions.sponsoredServices ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiActivity className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Healthcheckups</span></div>
                                        <ToggleSwitch checked={permissions.healthcheckups} onChange={(c) => handleToggle('healthcheckups', c)} theme="purple" />
                                    </div>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiHeart className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Wellness Services</span></div>
                                        <ToggleSwitch checked={permissions.wellnessServices} onChange={(c) => handleToggle('wellnessServices', c)} theme="purple" />
                                    </div>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiFileText className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Care Programs</span></div>
                                        <ToggleSwitch checked={permissions.carePrograms} onChange={(c) => handleToggle('carePrograms', c)} theme="purple" />
                                    </div>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiSmile className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Dental</span></div>
                                        <ToggleSwitch checked={permissions.dental} onChange={(c) => handleToggle('dental', c)} theme="purple" />
                                    </div>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiEye className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Eye</span></div>
                                        <ToggleSwitch checked={permissions.eye} onChange={(c) => handleToggle('eye', c)} theme="purple" />
                                    </div>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiEye className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Optical</span></div>
                                        <ToggleSwitch checked={permissions.optical} onChange={(c) => handleToggle('optical', c)} theme="purple" />
                                    </div>
                                    <div className="flex items-center justify-between pl-1">
                                        <div className="flex items-center gap-2"><FiTruck className="w-4 h-4 text-gray-500" /><span className="text-[12px] text-gray-700 font-medium">Ambulance</span></div>
                                        <ToggleSwitch checked={permissions.ambulance} onChange={(c) => handleToggle('ambulance', c)} theme="purple" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-end pt-6 mt-4 border-t border-gray-50">
                            <Button type="button" variant="neutral" onClick={handleCancel} className="w-full sm:w-auto mr-3">Cancel</Button>
                            <Button type="submit" form="userForm" variant="primary" disabled={saving} className="w-full sm:w-auto" icon={saving ? undefined : <FiCheckCircle className="w-4 h-4" />}>
                                {saving ? 'Processing...' : (creationMethod === 'bulk' ? 'Process Upload' : viewMode === 'edit' ? 'Save Changes' : 'Create User & Share Credentials')}
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* VERTICAL PORTAL WORKSPACE VIEW */}
            {viewMode === 'workspace' && selectedUser && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">

                    {/* Left Sidebar: User Profile & Nav */}
                    <div className="xl:col-span-3 flex flex-col gap-5">

                        {/* Profile Card */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl bg-purple-600"></div>

                            <div className="flex flex-col items-center text-center relative z-10">
                                <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-lg bg-purple-600 mb-4">
                                    {selectedUser.name.charAt(0).toUpperCase()}
                                </div>
                                <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight mb-1">{selectedUser.name}</h3>
                                <p className="text-[12px] font-medium text-[#5301ab] bg-[#5301ab]/5 px-3 py-1 rounded-md mb-4 border border-[#5301ab]/10">{selectedUser.type} User</p>

                                <div className="w-full space-y-2.5 text-left border-t border-gray-100 pt-4 mt-2">
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiMail className="w-3.5 h-3.5" /></div>
                                        <span className="truncate">{selectedUser.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiPhone className="w-3.5 h-3.5" /></div>
                                        <span>{selectedUser.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><FiMapPin className="w-3.5 h-3.5" /></div>
                                        <span className="truncate">{selectedUser.location || 'Bengaluru, India'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[12px] text-gray-600 pt-1">
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0"><TbBuildingCommunity className="w-3.5 h-3.5" /></div>
                                        <span className="truncate font-semibold">{selectedUser.organization}</span>
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
                                    onClick={() => setActiveTab('dependents')}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'dependents' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiUsers className="w-4 h-4" /> Dependents
                                </button>
                                <button
                                    onClick={() => setActiveTab('health_records')}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'health_records' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiFileText className="w-4 h-4" /> Health Records
                                </button>
                                <button
                                    onClick={() => setActiveTab('smart_ring')}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'smart_ring' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiSmartphone className="w-4 h-4" /> Smart Ring Data
                                </button>
                                <div className="h-px bg-gray-100 my-2 mx-2"></div>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${activeTab === 'settings' ? 'bg-[#5301ab] text-white shadow-md shadow-[#5301ab]/20' : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'}`}
                                >
                                    <FiSettings className="w-4 h-4" /> Account Settings
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
                                    {activeTab === 'dashboard' && 'User Dashboard'}
                                    {activeTab === 'dependents' && 'Dependents Management'}
                                    {activeTab === 'health_records' && 'Health Records & Checkups'}
                                    {activeTab === 'smart_ring' && 'Smart Ring Analytics'}
                                    {activeTab === 'settings' && 'Account Configuration'}
                                </h3>
                                <p className="text-[12px] text-gray-500 font-medium mt-0.5">
                                    {activeTab === 'dashboard' && 'Quick overview of health stats and platform activity.'}
                                    {activeTab === 'dependents' && 'View and manage family members linked to this account.'}
                                    {activeTab === 'health_records' && 'Access past checkups, test results, and medical history.'}
                                    {activeTab === 'smart_ring' && 'Real-time vitals and historical data tracked by the device.'}
                                    {activeTab === 'settings' && 'Manage profile details and access status.'}
                                </p>
                            </div>
                        </div>

                        {/* Tab Content Area */}
                        <div className="p-6 flex-1 bg-white">

                            {/* 1. Dashboard Tab */}
                            {activeTab === 'dashboard' && (
                                <div className="space-y-6 animate-in fade-in duration-400">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3"><FiUsers className="text-blue-500 w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Dependents</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">{selectedUser.dependents || 0}</p>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3"><FiActivity className="text-emerald-500 w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Checkups Done</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">4</p>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3"><FiSmartphone className="text-[#5301ab] w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Smart Ring</h4>
                                            <p className="text-[15px] font-black text-gray-900 mt-2 text-emerald-500">Connected</p>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-3"><FiHeart className="text-orange-500 w-5 h-5" /></div>
                                            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Health Score</h4>
                                            <p className="text-2xl font-black text-gray-900 mt-1">88<span className="text-[12px] text-gray-500">/100</span></p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                                            <FiClock className="w-4 h-4 text-[#5301ab]" /> Recent Platform Activity
                                        </h3>
                                        <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-gray-900 text-[13px]">Checkup Completed</span>
                                                        <span className="text-[10px] font-bold text-emerald-500">2 days ago</span>
                                                    </div>
                                                    <p className="text-[12px] text-gray-500">Annual Full Body Checkup completed at Apollo Diagnostics.</p>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-[#5301ab] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-gray-900 text-[13px]">Smart Ring Synced</span>
                                                        <span className="text-[10px] font-bold text-[#5301ab]">Today, 8:00 AM</span>
                                                    </div>
                                                    <p className="text-[12px] text-gray-500">Vitals data successfully synced with the Zorocare app.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 2. Dependents Tab */}
                            {activeTab === 'dependents' && (
                                <div className="flex flex-col h-full animate-in fade-in duration-400 space-y-5">
                                    <div className="flex justify-between items-center bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                                        <div className="w-full sm:w-[320px]">
                                            <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search dependents..." theme="purple" className="bg-white" />
                                        </div>
                                    </div>
                                    <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Dependent Name</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Relationship</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Age / DOB</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                <tr className="hover:bg-gray-50/80 transition-colors">
                                                    <td className="px-5 py-4 text-[13px] font-bold text-gray-900">Vani Nair</td>
                                                    <td className="px-5 py-4 text-[12px] font-medium text-gray-600">Mother</td>
                                                    <td className="px-5 py-4 text-[12px] font-medium text-gray-600">58 Years</td>
                                                    <td className="px-5 py-4 text-center">
                                                        <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-[#5301ab] bg-white shadow-sm" icon={<FiEye className="w-4 h-4" />}>{null}</Button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50/80 transition-colors">
                                                    <td className="px-5 py-4 text-[13px] font-bold text-gray-900">Suresh Nair</td>
                                                    <td className="px-5 py-4 text-[12px] font-medium text-gray-600">Father</td>
                                                    <td className="px-5 py-4 text-[12px] font-medium text-gray-600">62 Years</td>
                                                    <td className="px-5 py-4 text-center">
                                                        <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-[#5301ab] bg-white shadow-sm" icon={<FiEye className="w-4 h-4" />}>{null}</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* 3. Health Records Tab */}
                            {activeTab === 'health_records' && (
                                <div className="flex flex-col h-full animate-in fade-in duration-400 space-y-5">
                                    <div className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                                        <div className="flex gap-2 w-full sm:w-[300px]">
                                            <Input iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />} placeholder="Search records..." theme="purple" className="bg-white" />
                                        </div>
                                    </div>
                                    <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Record ID</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Service / Test</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Date</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Center</th>
                                                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                <tr className="hover:bg-gray-50/80 transition-colors">
                                                    <td className="px-5 py-4 text-[12px] font-bold text-gray-500">REC-2024-001</td>
                                                    <td className="px-5 py-4 text-[13px] font-bold text-[#5301ab]">Annual Health Checkup</td>
                                                    <td className="px-5 py-4 text-[12px] font-medium text-gray-600">12 May 2024</td>
                                                    <td className="px-5 py-4 text-[12px] font-medium text-gray-600">Apollo Diagnostics</td>
                                                    <td className="px-5 py-4 text-center">
                                                        <Button variant="neutral" className="!py-1.5 !px-3 !text-[11px] bg-white shadow-sm border-blue-100 text-blue-600 hover:bg-blue-50" icon={<FiDownload className="w-3.5 h-3.5" />}>Download</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* 4. Smart Ring Tab */}
                            {activeTab === 'smart_ring' && (
                                <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in duration-400">
                                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                                        <FiSmartphone className="w-8 h-8 text-[#5301ab]" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-[16px] mb-1">Smart Ring Analytics</h3>
                                    <p className="text-[13px] text-gray-500 max-w-md">Detailed biometric data including heart rate, sleep quality, and blood oxygen levels will be visualized here.</p>
                                </div>
                            )}

                            {/* 5. Settings Tab */}
                            {activeTab === 'settings' && (
                                <div className="flex flex-col animate-in fade-in duration-400 max-w-4xl">
                                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <Input label="Full Name" defaultValue={selectedUser.name} theme="purple" className="bg-white" />
                                            <Input label="Email Address" defaultValue={selectedUser.email} theme="purple" className="bg-white" />
                                            <Input label="Phone Number" defaultValue={selectedUser.phone} theme="purple" className="bg-white" />
                                            <Select label="Account Type" defaultValue={selectedUser.type} options={['Direct', 'Corporate', 'Insurance']} theme="purple" className="bg-white" />
                                        </div>

                                        <div className="border-t border-gray-200 pt-6 mt-2">
                                            <h4 className="font-bold text-[14px] text-gray-900 mb-4">Platform Access Status</h4>
                                            <div className="flex items-center justify-between bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                                                <div>
                                                    <p className="font-bold text-[13px] text-gray-900">Active User Account</p>
                                                    <p className="text-[12px] text-gray-500 mt-0.5">Toggle to suspend this user's access to the Zorocare mobile and web apps.</p>
                                                </div>
                                                <ToggleSwitch theme="purple" defaultChecked={selectedUser.status === 'Active'} />
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

export default SuperAdminUserHubCom;