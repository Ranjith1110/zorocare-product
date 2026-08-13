import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiSearch, FiArrowRight, FiShield, FiHeart, FiActivity, FiEye,
    FiTruck, FiMonitor, FiCalendar, FiPhoneCall, FiCheckCircle,
    FiClock, FiFileText, FiGrid, FiTrendingUp, FiUsers
} from 'react-icons/fi';
import { TbDental, TbPill, TbBrain, TbPhysotherapist } from "react-icons/tb";

import Button from '../common/Button';

// --- TypeScript Interfaces to fix the 'any' type errors ---
interface ServiceFeature {
    icon: ReactNode;
    text: string;
}

interface FeaturedService {
    title: string;
    category: string;
    image: string;
    isMostBooked: boolean;
    features: ServiceFeature[];
    price: string;
    sponsored: boolean;
}

const UserServicesCom: FC = () => {
    const [activeCategory, setActiveCategory] = useState('All Services');

    const categories = [
        { name: 'All Services', icon: <FiGrid /> },
        { name: 'Doctor Consultation', icon: <FiMonitor /> },
        { name: 'Health Checkups', icon: <FiActivity /> },
        { name: 'Dental Care', icon: <TbDental /> },
        { name: 'Eye & Vision Care', icon: <FiEye /> },
        { name: 'Ambulance Services', icon: <FiTruck /> },
        { name: 'Wellness Programs', icon: <FiHeart /> },
        { name: 'Care Programs', icon: <FiShield /> },
        { name: 'Diagnostics', icon: <FiFileText /> },
        { name: 'Pharmacy', icon: <TbPill /> },
        { name: 'Mental Wellness', icon: <TbBrain /> },
        { name: 'Physiotherapy', icon: <TbPhysotherapist /> },
    ];

    const exploreCategories = [
        { name: 'Doctor Consultation', desc: 'Online & In-clinic', icon: <FiMonitor className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { name: 'Health Checkups', desc: 'Lab & Full Body', icon: <FiActivity className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { name: 'Dental Care', desc: 'Checkup & Treatment', icon: <TbDental className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { name: 'Eye & Vision Care', desc: 'Screening & Consultation', icon: <FiEye className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { name: 'Ambulance Services', desc: 'Emergency Support', icon: <FiTruck className="w-6 h-6" />, color: 'text-red-500', bg: 'bg-red-50' },
        { name: 'Wellness Programs', desc: 'Mind & Body Wellness', icon: <FiHeart className="w-6 h-6" />, color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    // Applied the strict interface to the array
    const featuredServices: FeaturedService[] = [
        {
            title: 'Instant Doctor Consultation',
            category: 'General Physician',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=250&fit=crop',
            isMostBooked: true,
            features: [{ icon: <FiClock />, text: '24x7 Available' }, { icon: <FiMonitor />, text: 'Online' }],
            price: '₹0',
            sponsored: true
        },
        {
            title: 'Full Body Health Checkup',
            category: '80+ Tests',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            isMostBooked: false,
            features: [{ icon: <FiGrid />, text: 'At Home / Center' }, { icon: <FiFileText />, text: 'Reports in 24hrs' }],
            price: '₹0',
            sponsored: true
        },
        {
            title: 'Dental Checkup',
            category: 'Basic Dental Screening',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop',
            isMostBooked: false,
            features: [{ icon: <FiActivity />, text: 'In-clinic' }, { icon: <FiClock />, text: '15-20 mins' }],
            price: '₹0',
            sponsored: true
        },
        {
            title: 'Comprehensive Eye Checkup',
            category: 'Vision Screening & Consultation',
            image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=250&fit=crop',
            isMostBooked: false,
            features: [{ icon: <FiEye />, text: 'In-clinic' }, { icon: <FiClock />, text: '30-45 mins' }],
            price: '₹0',
            sponsored: true
        }
    ];

    const popularServices = [
        { rank: '1', title: 'Instant Doctor Consultation', bookings: '2,846 Bookings', icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { rank: '2', title: 'Health Checkups', bookings: '1,932 Bookings', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { rank: '3', title: 'Dental Checkup', bookings: '1,210 Bookings', icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { rank: '4', title: 'Eye Checkup', bookings: '982 Bookings', icon: <FiEye />, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    const trustMarkers = [
        { title: 'Cashless & Convenient', desc: 'Hassle-free bookings', icon: <FiShield className="text-emerald-500 w-5 h-5" />, bg: 'bg-emerald-50' },
        { title: 'Trusted Healthcare Network', desc: '5000+ Doctors & Partners', icon: <FiUsers className="text-[#5301ab] w-5 h-5" />, bg: 'bg-[#5301ab]/10' },
        { title: 'Quick Appointments', desc: 'Book in just a few clicks', icon: <FiCalendar className="text-blue-500 w-5 h-5" />, bg: 'bg-blue-50' },
        { title: 'Secure & Reliable', desc: 'Your health data is safe', icon: <FiCheckCircle className="text-orange-500 w-5 h-5" />, bg: 'bg-orange-50' },
    ];

    return (
        <div className="w-full h-full animate-in fade-in duration-500 pb-10">

            {/* Header Section - Clean Super Admin Style */}
            <div className="mb-6">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Services</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Explore and book quality healthcare services tailored to your needs.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* LEFT SIDEBAR: Categories (span 2) */}
                <div className="hidden xl:flex xl:col-span-2 flex-col gap-6 sticky top-24">
                    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-4">
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">Categories</p>
                        <div className="flex flex-col space-y-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setActiveCategory(cat.name)}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-[13px] font-bold transition-all ${activeCategory === cat.name
                                        ? 'bg-[#5301ab]/10 text-[#5301ab]'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <span className="text-lg">{cat.icon}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-[#5301ab]/5 border border-purple-100 rounded-[2rem] p-6 text-center shadow-sm relative overflow-hidden">
                        <h3 className="font-bold text-gray-900 text-[15px] mb-2 relative z-10">Need Help Choosing?</h3>
                        <p className="text-[12px] text-gray-600 font-medium mb-5 relative z-10">Our care team is here to help you 24x7.</p>
                        <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] !text-[12px] relative z-10">
                            Talk to Care Expert
                        </Button>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#5301ab]/10 rounded-full blur-2xl z-0"></div>
                    </div>
                </div>

                {/* MIDDLE CONTENT: Main Area (span 7) */}
                <div className="xl:col-span-7 space-y-6">

                    {/* Search Banner */}
                    <div className="bg-gradient-to-br from-[#f8f9ff] to-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">Find the right care, when you need it</h1>
                            <p className="text-[14px] text-gray-600 font-medium mb-6">Book appointments, check availability and access quality healthcare services.</p>

                            <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-gray-200 focus-within:border-[#5301ab]/50 focus-within:ring-4 focus-within:ring-[#5301ab]/10 transition-all">
                                <div className="flex-1 relative flex items-center pl-3">
                                    <FiSearch className="w-5 h-5 text-gray-400 absolute left-3" />
                                    <input
                                        type="text"
                                        placeholder="Search for services, doctors, specialists..."
                                        className="w-full pl-8 pr-4 py-2 text-[14px] text-gray-900 bg-transparent border-none outline-none placeholder-gray-400 font-medium"
                                    />
                                </div>
                                <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !px-6 !py-3 shrink-0">Search</Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 mt-5">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1">Popular Searches:</span>
                                {['General Physician', 'Full Body Checkup', 'Dental Checkup', 'Eye Checkup'].map((tag, idx) => (
                                    <span key={idx} className="bg-white border border-gray-200 text-gray-600 text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:border-[#5301ab] hover:text-[#5301ab] transition-colors shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Explore by Category */}
                    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Explore by Category</h3>
                            <a href="#" className="text-[13px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All Categories <FiArrowRight /></a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {exploreCategories.map((cat, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer group">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${cat.bg} ${cat.color}`}>
                                        {cat.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-[13px] leading-tight mb-1">{cat.name}</h4>
                                    <p className="text-[10px] font-medium text-gray-500 leading-tight">{cat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Services */}
                    <div>
                        <div className="flex items-center justify-between mb-4 px-2">
                            <h3 className="font-bold text-gray-900 text-[16px]">Featured Services</h3>
                            <a href="#" className="text-[13px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All Services <FiArrowRight className="w-3.5 h-3.5" /></a>
                        </div>
                        <div className="flex overflow-x-auto gap-5 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {featuredServices.map((service, idx) => (
                                <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col min-w-[260px] max-w-[280px] shrink-0 overflow-hidden hover:shadow-md transition-shadow group">
                                    <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        {service.isMostBooked && (
                                            <span className="absolute top-3 right-3 bg-[#5301ab] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                                                Most Booked
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-1">{service.title}</h4>
                                        <p className="text-[12px] text-gray-500 font-medium mb-4">{service.category}</p>

                                        <div className="flex items-center gap-4 mb-5">
                                            {service.features.map((feat: ServiceFeature, fIdx: number) => (
                                                <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600">
                                                    <span className="text-gray-400">{feat.icon}</span>
                                                    {feat.text}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex items-center justify-between gap-4 mb-4 border-t border-gray-50 pt-3">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-[18px] text-gray-900 leading-none">{service.price}</span>
                                                {service.sponsored && <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">• Sponsored</span>}
                                            </div>
                                        </div>

                                        <Button variant="secondary" className="w-full !border-[#5301ab]/20 !text-[#5301ab] hover:!bg-[#5301ab]/5 transition-colors">
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trust Markers */}
                    <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] grid grid-cols-2 md:grid-cols-4 gap-4">
                        {trustMarkers.map((marker, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${marker.bg}`}>
                                    {marker.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[12px] text-gray-900 leading-tight mb-0.5">{marker.title}</h4>
                                    <p className="text-[10px] font-medium text-gray-500 leading-snug">{marker.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="xl:col-span-3 space-y-6">

                    {/* Popular This Month */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
                            <h3 className="font-bold text-gray-900 text-[15px]">Popular This Month</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All <FiArrowRight className="w-3.5 h-3.5" /></a>
                        </div>
                        <div className="space-y-4">
                            {popularServices.map((service, idx) => (
                                <div key={idx} className="flex items-center gap-3 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors">
                                    <span className="text-[14px] font-bold text-gray-300 w-4 text-center">{service.rank}</span>
                                    <div className={`w-10 h-10 rounded-[1rem] flex items-center justify-center shrink-0 ${service.bg} ${service.color}`}>
                                        <div className="w-5 h-5">{service.icon}</div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-bold text-gray-900 truncate leading-tight mb-0.5 group-hover:text-[#5301ab] transition-colors">{service.title}</p>
                                        <p className="text-[11px] font-medium text-gray-500 truncate">{service.bookings}</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#5301ab] group-hover:border-[#5301ab]/30 transition-all">
                                        <FiTrendingUp className="w-3 h-3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Can't Find What You Need */}
                    <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-6 text-center shadow-sm relative overflow-hidden flex flex-col items-start justify-center">
                        <div className="relative z-10 w-[60%] text-left">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-1.5">Can't find what you need?</h3>
                            <p className="text-[11px] text-gray-600 font-medium mb-4 leading-relaxed">Let us help you find the right care.</p>
                            <Button variant="secondary" className="!px-4 !py-2 !text-[12px] !border-[#5301ab]/30 !text-[#5301ab] bg-white hover:!bg-[#5301ab]/5 shadow-sm">
                                Request a Service
                            </Button>
                        </div>
                    </div>

                    {/* Emergency Support Banner */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-[2rem] border border-red-100 shadow-sm relative overflow-hidden text-left">
                        <div className="relative z-10 w-[65%]">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-2">Need Emergency Help?</h3>
                            <p className="text-[11px] text-gray-600 mb-5 leading-relaxed font-medium">We are available 24x7 for you and your family.</p>
                            <div className="space-y-2.5">
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white text-[12px] font-bold py-2.5 rounded-xl shadow-md shadow-red-500/20 transition-colors flex items-center justify-center gap-2">
                                    <FiTruck className="w-4 h-4" /> Call Ambulance
                                </button>
                                <button className="w-full bg-white border border-red-200 text-red-600 hover:bg-red-50 text-[12px] font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    <FiPhoneCall className="w-4 h-4" /> Emergency Support
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserServicesCom;