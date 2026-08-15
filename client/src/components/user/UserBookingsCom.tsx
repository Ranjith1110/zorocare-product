import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiCalendar, FiCheckCircle, FiClock, FiXCircle, FiRefreshCcw,
    FiHeart, FiArrowRight, FiMapPin,
    FiMonitor, FiActivity, FiEye, FiFileText, FiDownload,
    FiMessageCircle, FiPhoneCall, FiChevronDown,
    FiTruck
} from 'react-icons/fi';
import { TbDental, TbBuildingCommunity } from "react-icons/tb";

import Button from '../common/Button';

// --- Interfaces ---
interface BookingKPI {
    title: string;
    value: string;
    subtitle: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Doctor {
    name: string;
    specialty: string;
    image: string;
}

interface UpcomingBooking {
    id: string;
    serviceTitle: string;
    serviceCategory: string;
    date: string;
    time: string;
    location: string;
    hospital: string;
    doctor: Doctor;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface RecentBooking {
    id: string;
    date: string;
    service: string;
    provider: string;
    location: string;
    amount: string;
    status: string;
    statusColor: string;
    statusBg: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface QuickAction {
    label: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface StatusGuide {
    status: string;
    desc: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

const UserBookingsCom: FC = () => {
    const [activeTab, setActiveTab] = useState('Upcoming');

    // --- Mock Data ---
    const kpiData: BookingKPI[] = [
        { title: 'Total Bookings', value: '12', subtitle: 'Across all services', icon: <FiCalendar className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Completed', value: '8', subtitle: "You're doing great!", icon: <FiCheckCircle className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Upcoming', value: '2', subtitle: '2 scheduled', icon: <FiClock className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Cancelled', value: '1', subtitle: '1 rescheduled', icon: <FiXCircle className="w-5 h-5" />, color: 'text-red-500', bg: 'bg-red-50' },
        { title: 'Rescheduled', value: '1', subtitle: '1 changed', icon: <FiRefreshCcw className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    const upcomingBookings: UpcomingBooking[] = [
        {
            id: 'ZC-12892',
            serviceTitle: 'Doctor Consultation',
            serviceCategory: 'General Physician',
            date: 'Sat, 12 May 2026',
            time: '10:30 AM – 11:00 AM',
            location: 'Hyderabad',
            hospital: 'Apollo Hospitals',
            doctor: { name: 'Dr. Priya Sharma', specialty: 'MBBS, FCD • Cardiologist', image: 'https://i.pravatar.cc/150?img=5' },
            icon: <FiMonitor />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10'
        },
        {
            id: 'ZC-12945',
            serviceTitle: 'Dental Checkup',
            serviceCategory: 'Routine Checkup',
            date: 'Thu, 24 May 2026',
            time: '02:00 PM – 03:00 PM',
            location: 'Gachibowli, Hyderabad',
            hospital: 'Happy Smiles Dental Clinic',
            doctor: { name: 'Dr. Karthik Rao', specialty: 'BDS, MDS • Dental Surgeon', image: 'https://i.pravatar.cc/150?img=11' },
            icon: <TbDental />, color: 'text-emerald-500', bg: 'bg-emerald-50'
        }
    ];

    const recentBookings: RecentBooking[] = [
        { id: 'ZC-11820', date: '10 Apr 2026', service: 'Full Body Health Checkup', provider: 'MedPlus Diagnostics', location: 'Hyderabad', amount: '₹0', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiActivity />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { id: 'ZC-11765', date: '02 Apr 2026', service: 'Vision Care', provider: 'Vision Care Hospital', location: 'Banjara Hills', amount: '₹0', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiEye />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 'ZC-11642', date: '28 Mar 2026', service: 'Dental Checkup', provider: 'Happy Smiles Dental', location: 'Gachibowli', amount: '₹0', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <TbDental />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { id: 'ZC-11498', date: '15 Mar 2026', service: 'Eye Vaccination', provider: 'Vision Care Hospital', location: 'Banjara Hills', amount: '₹0', status: 'Rescheduled', statusColor: 'text-blue-600', statusBg: 'bg-blue-50', icon: <FiEye />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 'ZC-11320', date: '03 Mar 2026', service: 'Wellness Program', provider: 'ZoroCare Wellness', location: 'Online', amount: '₹0', status: 'Completed', statusColor: 'text-emerald-600', statusBg: 'bg-emerald-50', icon: <FiHeart />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { id: 'ZC-10912', date: '18 Jan 2026', service: 'Health Checkup', provider: 'Innova Technologies', location: 'Corporate Camp', amount: '₹0', status: 'Cancelled', statusColor: 'text-red-600', statusBg: 'bg-red-50', icon: <FiActivity />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    const quickActions: QuickAction[] = [
        { label: 'Book\nAppointment', icon: <FiCalendar />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { label: 'Health\nReports', icon: <FiFileText />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Upload\nPrescription', icon: <FiDownload className="rotate-180" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'Emergency\nSupport', icon: <FiTruck />, color: 'text-red-500', bg: 'bg-red-50' },
        { label: 'Track\nBooking', icon: <FiMapPin />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { label: 'Talk to\nCare Team', icon: <FiMessageCircle />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const statusGuides: StatusGuide[] = [
        { status: 'Upcoming', desc: 'Service is scheduled and confirmed with provider.', icon: <FiCalendar />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { status: 'Rescheduled', desc: 'Your booking has been rescheduled to a new date and time.', icon: <FiClock />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { status: 'Completed', desc: 'Service visit is completed and report is available.', icon: <FiCheckCircle />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { status: 'Cancelled', desc: 'Booking has been cancelled. You can book again anytime.', icon: <FiXCircle />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* ================= HEADER SECTION (Insurance Style) ================= */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-5">
                <div className="flex items-center gap-5">
                    <img src="https://i.pravatar.cc/300?img=11" alt="Arjun Kumar" className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-white" />
                    <div>
                        <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight mb-1">Good to see you, Arjun! 👋</h2>
                        <p className="text-[13px] text-gray-500 font-medium">Here's a complete list of your upcoming and past healthcare bookings.</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 bg-white border border-gray-200 p-2 pr-4 rounded-md shadow-sm self-start lg:self-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-[#5301ab]/10 flex items-center justify-center text-[#5301ab] shrink-0">
                            <TbBuildingCommunity className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-tight">Premium Corporate Plan</p>
                            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Innova Technologies</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= TOP KPIs GRID ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {kpiData.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                            {kpi.icon}
                        </div>
                        <div>
                            <h3 className="font-heading text-[20px] font-bold text-gray-900 leading-none mb-1">{kpi.value}</h3>
                            <p className="text-[11px] font-bold text-gray-600 leading-tight">{kpi.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= MAIN CONTENT GRID ================= */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* LEFT COLUMN (Span 8) */}
                <div className="xl:col-span-8 space-y-6">

                    {/* Tabs & Filters */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200">
                        <div className="flex items-center gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {['Upcoming', 'Completed', 'Cancelled', 'Rescheduled'].map((tab) => {
                                const count = tab === 'Upcoming' ? 2 : tab === 'Completed' ? 8 : 1;
                                const isActive = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-3 text-[13px] font-bold transition-all border-b-2 whitespace-nowrap ${isActive ? 'text-[#5301ab] border-[#5301ab]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                                    >
                                        {tab} <span className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-[#5301ab]/10 text-[#5301ab]' : 'bg-gray-100 text-gray-500'}`}>({count})</span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-3 pb-3">
                            <button className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[12px] font-bold text-gray-700 hover:bg-gray-50">
                                <FiCalendar className="w-3.5 h-3.5" /> May 2026 <FiChevronDown className="w-3.5 h-3.5 ml-1" />
                            </button>
                            <button className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[12px] font-bold text-gray-700 hover:bg-gray-50">
                                All Services <FiChevronDown className="w-3.5 h-3.5 ml-1" />
                            </button>
                        </div>
                    </div>

                    {/* Upcoming Bookings List */}
                    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-gray-900 text-[18px]">Upcoming Bookings</h3>
                                <span className="bg-[#5301ab]/10 text-[#5301ab] px-2 py-0.5 rounded-full text-[11px] font-bold">2</span>
                            </div>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] flex items-center gap-1 hover:underline">View Calendar <FiArrowRight /></a>
                        </div>

                        <p className="text-[12px] text-gray-500 font-medium mb-5 -mt-4">Your scheduled appointments</p>

                        <div className="space-y-4">
                            {upcomingBookings.map((booking, idx) => (
                                <div key={idx} className="flex flex-col lg:flex-row gap-5 p-5 border border-gray-100 rounded-md hover:bg-gray-50/50 transition-colors">

                                    {/* Service Info */}
                                    <div className="flex items-start gap-4 lg:w-[25%]">
                                        <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${booking.bg} ${booking.color}`}>
                                            <span className="text-xl">{booking.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[14px] text-gray-900 leading-tight mb-1">{booking.serviceTitle}</h4>
                                            <p className="text-[11px] text-gray-500 font-medium mb-3">{booking.serviceCategory}</p>
                                            <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase">Upcoming</span>
                                        </div>
                                    </div>

                                    {/* Date & Location */}
                                    <div className="flex flex-col sm:flex-row gap-4 lg:w-[35%] border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-5">
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-start gap-2.5">
                                                <FiCalendar className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-[12px] font-bold text-gray-900 leading-tight">{booking.date}</p>
                                                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">{booking.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2.5">
                                                <FiMapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-[12px] font-bold text-gray-900 leading-tight">{booking.hospital}</p>
                                                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">{booking.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="flex items-center gap-3 lg:w-[22%] border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-5">
                                        <img src={booking.doctor.image} alt={booking.doctor.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">{booking.doctor.name}</p>
                                            {booking.doctor.specialty.split('•').map((part, i) => (
                                                <p key={i} className={`text-[10px] font-medium leading-tight ${i === 1 ? 'text-blue-600 font-bold mt-0.5' : 'text-gray-500'}`}>{part.trim()}</p>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-row lg:flex-col justify-center gap-2 lg:w-[18%] border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-5">
                                        <div className="hidden lg:block mb-2 text-center lg:text-left">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Booking ID</p>
                                            <p className="text-[12px] font-bold text-[#5301ab]">{booking.id}</p>
                                        </div>
                                        <Button variant="secondary" className="flex-1 lg:flex-none !py-1.5 !text-[11px] !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5">View Details</Button>
                                        <Button variant="neutral" className="flex-1 lg:flex-none !py-1.5 !text-[11px] !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5">Reschedule</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Bookings Table */}
                    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
                        <div className="p-6 md:p-8 border-b border-gray-50">
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-gray-900 text-[18px]">Recent Bookings</h3>
                                    <span className="bg-[#5301ab]/10 text-[#5301ab] px-2 py-0.5 rounded-full text-[11px] font-bold">6</span>
                                </div>
                                <a href="#" className="text-[12px] font-bold text-[#5301ab] flex items-center gap-1 hover:underline">View All <FiArrowRight /></a>
                            </div>
                            <p className="text-[12px] text-gray-500 font-medium">View your past bookings and service usage</p>
                        </div>

                        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Service</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Provider / Location</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Amount</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Report</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {recentBookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">{booking.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${booking.bg} ${booking.color}`}>
                                                        {booking.icon}
                                                    </div>
                                                    <span className="text-[13px] font-bold text-gray-900">{booking.service}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-start gap-2">
                                                    <FiMapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5" />
                                                    <div>
                                                        <p className="text-[12px] font-bold text-gray-700 leading-tight mb-0.5">{booking.provider}</p>
                                                        <p className="text-[11px] text-gray-500">{booking.location}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[12px] font-medium text-gray-600">{booking.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-[13px] font-bold text-gray-900">{booking.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase ${booking.statusBg} ${booking.statusColor}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                {booking.status === 'Completed' ? (
                                                    <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gray-600 hover:text-[#5301ab]">
                                                        <FiDownload className="w-3.5 h-3.5" /> View
                                                    </button>
                                                ) : (
                                                    <span className="text-[11px] font-bold text-gray-300">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <Button variant="secondary" className="!py-1.5 !px-3 !text-[11px] !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5">View Details</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (Span 4) */}
                <div className="xl:col-span-4 space-y-6">

                    {/* Quick Actions Grid */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-5">Quick Actions</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {quickActions.map((action, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-2 cursor-pointer group bg-gray-50/50 p-3 rounded-md border border-gray-100 hover:bg-white hover:border-[#5301ab]/20 transition-all shadow-sm hover:shadow-md">
                                    <div className={`w-12 h-12 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform ${action.bg} ${action.color}`}>
                                        <span className="text-xl">{action.icon}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-700 leading-tight whitespace-pre-line">{action.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Support Banner */}
                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 p-6 rounded-md border border-purple-100/50 shadow-sm relative overflow-hidden">
                        <div className="relative z-10 w-[65%]">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-2">Need Help with Your Booking?</h3>
                            <p className="text-[11px] text-gray-600 mb-5 leading-relaxed font-medium">Our care support team is here to help you with any changes, questions or special requests.</p>
                            <div className="space-y-2.5">
                                <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] shadow-md shadow-[#5301ab]/20 text-[12px] !py-2.5" icon={<FiMessageCircle className="w-3.5 h-3.5" />}>
                                    Chat with Support
                                </Button>
                                <Button variant="secondary" className="w-full !bg-white !border-[#5301ab]/30 !text-[#5301ab] hover:!bg-[#5301ab]/5 text-[12px] !py-2.5" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                    Call Support
                                </Button>
                            </div>
                        </div>
                        {/* Decorative Support Illustration */}
                        <div className="absolute -right-6 bottom-0 w-36 h-auto opacity-95 drop-shadow-xl z-0 pointer-events-none">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Booking Status Guide */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-5">Booking Status Guide</h3>
                        <div className="space-y-4">
                            {statusGuides.map((guide, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-2 -mx-2 hover:bg-gray-50 rounded-md transition-colors">
                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${guide.bg} ${guide.color}`}>
                                        {guide.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wide uppercase ${guide.bg} ${guide.color}`}>
                                                {guide.status}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{guide.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Promotional Banner */}
                    <div className="bg-gradient-to-br from-[#f0f4ff] to-[#f8f9ff] border border-blue-100 rounded-md p-6 shadow-sm relative overflow-hidden flex flex-col items-start justify-center min-h-[140px]">
                        <div className="relative z-10 w-[60%] text-left">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-1">Take charge<br />of your health</h3>
                            <p className="text-[12px] text-gray-600 font-medium mb-4 leading-relaxed">Book. Track. Stay healthy.</p>
                            <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !px-4 !py-2 !text-[11px] shadow-sm" icon={<FiArrowRight className="w-3.5 h-3.5" />}>
                                Explore Services
                            </Button>
                        </div>
                        <div className="absolute -right-4 -bottom-4 w-[50%] pointer-events-none drop-shadow-xl">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medical-app-4993427-4161758.png" alt="App Promo" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserBookingsCom;