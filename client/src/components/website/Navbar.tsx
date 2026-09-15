import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Family Care', path: '/family-care' },
    { name: 'Smart Ring', path: '/smart-ring' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact Us', path: '/contact' }
];

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Active state styling for navigation links
    const activeStyle = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-[#5301ab] font-bold whitespace-nowrap transition-colors" : "hover:text-[#5301ab] whitespace-nowrap transition-colors";

    return (
        <div className="w-full sticky top-0 z-50 px-4 md:px-8 lg:px-12">
            <nav className={`max-w-[1400px] mx-auto bg-white shadow-sm transition-all duration-300 ${isMobileMenuOpen ? 'rounded-b-2xl' : 'rounded-b-[32px]'}`}>
                <div className="px-6 lg:px-10">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo -> Routes to Home */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <Link to="/">
                                <img
                                    src="/logo-stright.png"
                                    alt="ZoroCare Logo"
                                    className="h-10 md:h-12 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-[15px] font-medium text-gray-800">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} to={link.path} className={activeStyle}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Login / Dashboard Button */}
                        <div className="hidden lg:flex items-center">
                            <Link to="/login">
                                <button className="bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-7 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
                                    Book Consultation
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-600 hover:text-[#5301ab] focus:outline-none p-2"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden px-6 pb-6 pt-2 border-t border-gray-100 rounded-b-2xl bg-white">
                        <div className="flex flex-col space-y-4 text-[15px] font-medium text-gray-800">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                    className={({ isActive }) => isActive ? "text-[#5301ab] font-bold" : "hover:text-[#5301ab]"}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-7 py-3 mt-4 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-sm w-full">
                                    Book Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;