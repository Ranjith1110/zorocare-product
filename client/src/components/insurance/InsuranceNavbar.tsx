import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiBell, FiUser, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { MdSubscriptions } from "react-icons/md";

interface NavLink {
    name: string;
    path: string;
    permissionKeys?: string[]; // Array to allow matching if ANY of the sub-permissions are true
}

const InsuranceNavbar: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    
    const [insuranceName, setInsuranceName] = useState('Insurance Admin');
    const [insuranceEmail, setInsuranceEmail] = useState('admin@zorocare.com');
    const [insuranceLogo, setInsuranceLogo] = useState<string | null>(null);
    const [visibleLinks, setVisibleLinks] = useState<NavLink[]>([]);

    const location = useLocation();
    const navigate = useNavigate();

    // The Master list of all possible Insurance routes mapping directly to SuperAdmin permission keys
    const allNavLinks: NavLink[] = [
        { name: 'Dashboard', path: '/insurance/dashboard', permissionKeys: ['viewDashboard'] },
        { name: 'Corporate Management', path: '/insurance/corporate-management', permissionKeys: ['createCorporate', 'listCorporates'] },
        { name: 'User Management', path: '/insurance/user-management', permissionKeys: ['uploadUser', 'allUsers'] },
        { name: 'Sponsored Services', path: '/insurance/sponsored-services', permissionKeys: ['sponsoredServices'] },
        { name: 'Healthcheckups', path: '/insurance/healthcheckups', permissionKeys: ['healthcheckups'] },
        // Combining Wellness and Care Programs into one overarching tab for cleaner UI as requested
        { name: 'Other Services', path: '/insurance/other-services', permissionKeys: ['wellnessServices', 'carePrograms'] },
        { name: 'History', path: '/insurance/history' }, // History is always visible
    ];

    useEffect(() => {
        const isAuth = localStorage.getItem('insurance_auth') === 'true';

        if (isAuth) {
            // 1. Resolve Profile Data
            const storedUser = localStorage.getItem('insurance_user');
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setInsuranceName(parsedUser.name || 'Insurance Admin');
                    setInsuranceEmail(parsedUser.email || 'admin@zorocare.com');
                    if (parsedUser.logo_url && parsedUser.logo_url.trim() !== '') {
                        setInsuranceLogo(parsedUser.logo_url);
                    }
                } catch (e) {
                    console.error('Error parsing insurance user data', e);
                }
            }

            // 2. Resolve Dynamic Permissions
            let permissions: any = {};
            const storedPerms = localStorage.getItem('insurance_permissions');
            if (storedPerms) {
                try {
                    permissions = JSON.parse(storedPerms);
                } catch (e) {
                    console.error('Error parsing insurance permissions', e);
                }
            }

            // 3. Filter Navigation Links
            const filteredLinks = allNavLinks.filter(link => {
                if (!link.permissionKeys || link.permissionKeys.length === 0) return true; // Show if no restrictions
                
                // If the link has multiple required keys (like User Management needing either Upload or List), 
                // show the tab if ANY of the sub-permissions are true. The actual page will handle inner restrictions.
                return link.permissionKeys.some(key => permissions[key] === true);
            });

            setVisibleLinks(filteredLinks);
        } else {
            setVisibleLinks([]);
        }
    }, [location.pathname]);

    const handleLogout = () => {
        // Clear all session tokens
        localStorage.removeItem('insurance_auth');
        localStorage.removeItem('insurance_token');
        localStorage.removeItem('insurance_user');
        localStorage.removeItem('insurance_permissions');
        navigate('/login');
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsProfileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <header className="sticky top-0 z-30 flex w-full items-center justify-between px-4 py-3 lg:px-6 bg-white/80 backdrop-blur-xl border-b border-gray-200/80 shrink-0 transition-all shadow-sm gap-4">

                {/* Co-Branded Logo Section */}
                <div className="flex items-center shrink-0 gap-3 md:gap-4">
                    {/* Primary Zoro Care Logo */}
                    <img
                        src="/logo-stright.png"
                        alt="Zoro Care Logo"
                        className="h-8 md:h-12 w-auto object-contain"
                    />
                    
                    {/* Vertical Divider */}
                    <div className="h-6 md:h-8 w-[1px] bg-gray-300 rounded-full"></div>
                    
                    {/* Dynamic Insurance Logo fetched from DB */}
                    {insuranceLogo ? (
                        <img
                            src={insuranceLogo}
                            alt="Insurance Partner Logo"
                            className="h-8 md:h-12 w-auto object-contain rounded-md"
                        />
                    ) : (
                        <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5301ab] font-black text-xl">
                            {insuranceName.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-end gap-3 lg:gap-6 flex-1 overflow-hidden">
                    <div className="hidden xl:flex items-center flex-1 justify-end overflow-hidden">
                        <nav className="flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-full">
                            {visibleLinks.map((link) => {
                                const isActive = location.pathname.startsWith(link.path);
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`rounded-full px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-all duration-300 shrink-0 ${isActive
                                            ? 'bg-[#5301ab] text-white shadow-md'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-[#5301ab]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <div className="hidden xl:flex items-center space-x-3">
                            <button className="flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-gray-600 bg-white shadow-sm border border-gray-100 transition-all hover:border-[#5301ab]/30 hover:text-[#5301ab]">
                                <MdSubscriptions className="w-4 h-4" />
                                Subscriptions
                            </button>
                        </div>

                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm border border-gray-100 transition-all hover:border-[#fd5800]/30 hover:text-[#fd5800]">
                            <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-[#fd5800] ring-2 ring-white"></span>
                            <FiBell className="w-5 h-5" />
                        </button>

                        <div className="relative hidden lg:block">
                            <button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#5301ab] to-[#7315e0] text-white shadow-sm transition-opacity hover:opacity-90 shrink-0 font-bold"
                            >
                                {insuranceName.charAt(0).toUpperCase()}
                            </button>

                            {/* Profile Dropdown */}
                            {isProfileMenuOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setIsProfileMenuOpen(false)}
                                    ></div>
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg shadow-[#5301ab]/10 border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="px-4 py-3 border-b border-gray-50 mb-1">
                                            <p className="text-[14px] font-bold text-gray-900 truncate">{insuranceName}</p>
                                            <p className="text-[12px] font-medium text-gray-500 truncate">{insuranceEmail}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2.5 text-[13px] font-bold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                                        >
                                            <FiLogOut className="w-4 h-4" />
                                            Sign Out
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Explicit Desktop Logout Button */}
                        <button
                            onClick={handleLogout}
                            title="Logout"
                            className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 shadow-sm border border-red-100 transition-all hover:bg-red-100 hover:text-red-600 shrink-0"
                        >
                            <FiLogOut className="w-5 h-5" />
                        </button>

                        <button
                            className="xl:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 text-gray-700 hover:text-[#5301ab] transition-colors shrink-0"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <FiMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] xl:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Mobile Menu Header with Co-Branded Logos */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white shrink-0">
                    <div className="flex items-center gap-2 max-w-[75%]">
                        <img
                            src="/logo-stright.png"
                            alt="Zoro Care"
                            className="h-6 w-auto object-contain shrink-0"
                        />
                        <div className="h-4 w-[1px] bg-gray-300 rounded-full shrink-0"></div>
                        {insuranceLogo ? (
                            <img
                                src={insuranceLogo}
                                alt="Partner Logo"
                                className="h-6 w-auto object-contain shrink-0 rounded-sm"
                            />
                        ) : (
                            <span className="text-[12px] font-bold text-[#5301ab] truncate">{insuranceName}</span>
                        )}
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                    >
                        <FiX className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-1.5 scroll-smooth">
                    {visibleLinks.map((link) => {
                        const isActive = location.pathname.startsWith(link.path);
                        return (
                            <Link
                                key={`mobile-${link.name}`}
                                to={link.path}
                                className={`w-full flex rounded-2xl px-5 py-4 text-left text-[15px] font-bold transition-all ${isActive
                                    ? 'bg-[#5301ab] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#5301ab]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-5 border-t border-gray-100 bg-gray-50/80 space-y-3 shrink-0">
                    <div className="mb-4 pl-1">
                        <p className="text-[13px] font-bold text-gray-900 truncate">{insuranceName}</p>
                        <p className="text-[11px] font-medium text-gray-500 truncate">{insuranceEmail}</p>
                    </div>
                    <button className="flex w-full items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-[14px] font-bold text-gray-700 shadow-sm border border-gray-200 hover:text-[#5301ab] transition-colors">
                        <MdSubscriptions className="w-5 h-5 text-gray-400" />
                        Subscriptions
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-2xl bg-[#fd5800]/10 px-5 py-3.5 text-[14px] font-bold text-[#fd5800] hover:bg-[#fd5800]/20 transition-colors"
                    >
                        <FiLogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default InsuranceNavbar;