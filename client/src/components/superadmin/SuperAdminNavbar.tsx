import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiBell, FiUser, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { MdSubscriptions } from "react-icons/md";

interface NavLink {
    name: string;
    path: string;
}

const SuperAdminNavbar: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks: NavLink[] = [
        { name: 'Dashboard', path: '/super-admin/dashboard' },
        { name: 'Administration', path: '/super-admin/administration' },
        { name: 'Insurance Hub', path: '/super-admin/insurance-hub' },
        { name: 'Corporate Hub', path: '/super-admin/corporate-hub' },
        { name: 'User Hub', path: '/super-admin/user-hub' },
        { name: 'Medical Centers', path: '/super-admin/medical-centers' },
        { name: 'Service Hub', path: '/super-admin/service-hub' },
    ];

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
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <header className="sticky top-0 z-30 flex w-full items-center justify-between px-4 py-3 lg:px-6 bg-white/80 backdrop-blur-xl border-b border-gray-200/80 shrink-0 transition-all shadow-sm gap-4">

                <div className="flex items-center shrink-0">
                    <img
                        src="/logo-stright.png"
                        alt="Zoro Care Logo"
                        className="h-8 md:h-12 w-auto object-contain"
                    />
                </div>

                <div className="flex items-center justify-end gap-3 lg:gap-6 flex-1 overflow-hidden">
                    <div className="hidden lg:flex items-center flex-1 justify-end overflow-hidden">
                        <nav className="flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-full">
                            {navLinks.map((link) => {
                                const isActive = location.pathname.includes(link.path);
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

                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#5301ab] to-[#7315e0] text-white shadow-sm transition-opacity hover:opacity-90 shrink-0">
                            <FiUser className="w-5 h-5" />
                        </button>

                        <button
                            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 text-gray-700 hover:text-[#5301ab] transition-colors shrink-0"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <FiMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white shrink-0">
                    <img
                        src="/logostright.png"
                        alt="Zoro Care"
                        className="h-8 w-auto object-contain"
                    />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                        <FiX className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-1.5 scroll-smooth">
                    {navLinks.map((link) => {
                        const isActive = location.pathname.includes(link.path);
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
                    <button className="flex w-full items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-[14px] font-bold text-gray-700 shadow-sm border border-gray-200 hover:text-[#5301ab] transition-colors">
                        <MdSubscriptions className="w-5 h-5 text-gray-400" />
                        Subscriptions
                    </button>
                    <button className="flex w-full items-center gap-3 rounded-2xl bg-[#fd5800]/10 px-5 py-3.5 text-[14px] font-bold text-[#fd5800] hover:bg-[#fd5800]/20 transition-colors">
                        <FiLogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default SuperAdminNavbar;