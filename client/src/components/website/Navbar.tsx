import React, { useState } from 'react';

const navLinks = ['Home', 'About Us', 'Services', 'Family Care', 'Smart Ring', 'Packages', 'Contact Us'];

const ServicesDropdown: React.FC = () => (
    <div className="relative group cursor-pointer flex items-center hover:text-[#5301ab] transition-colors">
        <span>Services</span>
        <svg
            className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#5301ab] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </div>
);

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full sticky top-0 z-50 px-4 md:px-8 lg:px-12">
            <nav className={`max-w-[1400px] mx-auto bg-white shadow-sm transition-all duration-300 ${isMobileMenuOpen ? 'rounded-b-2xl' : 'rounded-b-[32px]'}`}>
                <div className="px-6 lg:px-10">
                    <div className="flex justify-between items-center h-20">

                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <img
                                src="/logo-stright.png"
                                alt="ZoroCare Logo"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>

                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-[15px] font-medium text-gray-800">
                            {navLinks.map((link) =>
                                link === 'Services' ? (
                                    <ServicesDropdown key={link} />
                                ) : (
                                    <a key={link} href="#" className="hover:text-[#5301ab] transition-colors whitespace-nowrap">
                                        {link}
                                    </a>
                                )
                            )}
                        </div>

                        <div className="hidden lg:flex items-center">
                            <button className="bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-7 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
                                Book Consultation
                            </button>
                        </div>

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

                {isMobileMenuOpen && (
                    <div className="lg:hidden px-6 pb-6 pt-2 border-t border-gray-100 rounded-b-2xl bg-white">
                        <div className="flex flex-col space-y-4 text-[15px] font-medium text-gray-800">
                            {navLinks.map((link) => (
                                <a key={link} href="#" className="hover:text-[#5301ab] transition-colors">
                                    {link}
                                </a>
                            ))}
                            <button className="bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-7 py-3 mt-4 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-sm w-full">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;