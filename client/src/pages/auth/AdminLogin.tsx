import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn, FiShield, FiLoader, FiAlertTriangle, FiLogOut } from 'react-icons/fi';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const AdminLogin: FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    
    // State to detect if another portal is currently active in this browser
    const [existingSession, setExistingSession] = useState<string | null>(null);

    useEffect(() => {
        // Check for conflicting portal sessions on mount
        if (localStorage.getItem('superadmin_auth') === 'true' || sessionStorage.getItem('superadmin_auth') === 'true') {
            setExistingSession('Super Admin');
        } else if (localStorage.getItem('corporate_auth') === 'true' || sessionStorage.getItem('corporate_auth') === 'true') {
            setExistingSession('Corporate Partner');
        } else if (localStorage.getItem('insurance_auth') === 'true' || sessionStorage.getItem('insurance_auth') === 'true') {
            setExistingSession('Insurance Broker');
        } else if (localStorage.getItem('user_auth') === 'true' || sessionStorage.getItem('user_auth') === 'true') {
            setExistingSession('User');
        }
    }, []);

    const handleForceLogout = () => {
        // Scrub the entire browser storage to ensure a clean slate
        localStorage.clear();
        sessionStorage.clear();
        setExistingSession(null);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Double check scrub before submission to prevent token overlap
        localStorage.clear();
        sessionStorage.clear();

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const response = await fetch(`${API_URL}/api/admin/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Invalid email or password.');
            }

            // Save authentication details to SESSION storage
            sessionStorage.setItem('admin_auth', 'true');
            sessionStorage.setItem('admin_token', data.token);

            // Save to localStorage so your existing ProtectedRoutes allow access to the dashboard
            localStorage.setItem('admin_auth', 'true');
            localStorage.setItem('admin_token', data.token);

            if (data.user) {
                const userString = JSON.stringify(data.user);
                sessionStorage.setItem('admin_user', userString);
                localStorage.setItem('admin_user', userString);
                
                // Store module permissions so the AdminLayout/Sidebar can read them
                if (data.user.permissions) {
                    const permString = JSON.stringify(data.user.permissions);
                    sessionStorage.setItem('admin_permissions', permString);
                    localStorage.setItem('admin_permissions', permString);
                }
            }

            navigate('/admin/dashboard');
        } catch (err: any) {
            setError(err.message || 'Login failed. Please check server connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50/50 p-4 sm:p-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#5301ab]/10 via-[#9333ea]/5 to-transparent -translate-y-20 transform skew-y-3 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#fd5800]/5 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3"></div>

            <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* Logo / Branding Area */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7315e0] to-[#5301ab] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5301ab]/20 mb-4">
                        <FiShield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                        Zorocare <span className="text-[#5301ab]">Portal</span>
                    </h1>
                    <p className="text-[13px] font-medium text-gray-500 mt-1.5 uppercase tracking-widest">
                        Admin Access
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
                    {/* Top border highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5301ab] to-[#fd5800]"></div>

                    {existingSession ? (
                        /* CONFLICT STATE UI: Show if another portal is already logged in */
                        <div className="text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-orange-100">
                                <FiAlertTriangle className="w-8 h-8 text-orange-500" />
                            </div>
                            <div>
                                <h2 className="text-[18px] font-bold text-gray-900 leading-tight">Session Conflict</h2>
                                <p className="text-[13px] text-gray-500 font-medium mt-2 leading-relaxed">
                                    You are currently logged in to a <strong className="text-gray-900">{existingSession}</strong> account. For security purposes, you can only have one portal session active at a time.
                                </p>
                            </div>
                            <div className="pt-2">
                                <Button
                                    onClick={handleForceLogout}
                                    variant="primary"
                                    className="w-full !py-3.5 !text-[14px] !bg-orange-500 hover:!bg-orange-600 shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
                                    icon={<FiLogOut className="w-4 h-4" />}
                                >
                                    Log out of current session
                                </Button>
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="text-[12px] font-bold text-gray-400 hover:text-gray-700 transition-colors"
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* NORMAL STATE UI: Standard Login Form */
                        <>
                            <div className="mb-8 text-center">
                                <h2 className="text-[20px] font-bold text-gray-900 leading-tight">Welcome Back</h2>
                                <p className="text-[13px] text-gray-500 font-medium mt-1.5">Enter your credentials to access the admin dashboard</p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-5 animate-in fade-in duration-300">
                                <Input
                                    label="Email Address"
                                    type="email"
                                    required
                                    placeholder="admin@zorocare.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    iconLeft={<FiMail className="w-4 h-4 text-gray-400" />}
                                    theme="purple"
                                />

                                <div className="space-y-1">
                                    <Input
                                        label="Password"
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        iconLeft={<FiLock className="w-4 h-4 text-gray-400" />}
                                        theme="purple"
                                    />
                                    <div className="flex justify-end pt-1">
                                        <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:text-[#43008a] transition-colors">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 text-red-500 p-3 rounded-lg text-[12px] font-semibold text-center animate-in fade-in">
                                        {error}
                                    </div>
                                )}

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={loading}
                                        className="w-full !py-3.5 !text-[14px] !bg-[#5301ab] hover:!bg-[#43008a] shadow-md shadow-[#5301ab]/20 flex items-center justify-center gap-2"
                                        icon={loading ? <FiLoader className="w-4 h-4 animate-spin" /> : <FiLogIn className="w-4 h-4" />}
                                    >
                                        {loading ? 'Signing In...' : 'Sign In'}
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                </div>

                <div className="flex flex-col items-center gap-2 mt-8">
                    <p className="text-center text-[11px] font-medium text-gray-400">
                        Secure Portal • © {new Date().getFullYear()} Zorocare Platform
                    </p>
                    <button
                        onClick={() => navigate('/login')}
                        className="text-[10px] font-bold text-gray-400 hover:text-[#5301ab] transition-colors"
                    >
                        Back to User/Partner Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;