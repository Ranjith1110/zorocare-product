import type { FC, ReactNode } from 'react';
import {
    FiCalendar, FiCheckCircle, FiClock, FiShield,
    FiArrowUpRight, FiActivity, FiMapPin,
    FiFileText, FiPhoneCall, FiVideo, FiGrid, FiUser,
    FiShare2, FiEye
} from 'react-icons/fi';
import { TbDental, TbTruckDelivery } from "react-icons/tb";

import Button from '../common/Button';

// --- Interfaces ---
interface KPI {
    title: string;
    value: string;
    trend: string;
    isPositive: boolean;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface ServiceCard {
    title: string;
    description: string;
    image: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface BookingStep {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface ValueProp {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

const CorporateSponsoredServicesCom: FC = () => {

    // --- Mock Data ---
    const topKPIs: KPI[] = [
        { title: 'Total Bookings', value: '1,256', trend: '18.4%', isPositive: true, icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Services Used', value: '856', trend: '16.7%', isPositive: true, icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Total Spend', value: '₹24.8 Lakhs', trend: '14.3%', isPositive: true, icon: <span className="font-bold text-xl">₹</span>, color: 'text-red-500', bg: 'bg-red-50' },
        { title: 'Active Enrollments', value: '56', trend: '12.2%', isPositive: true, icon: <FiUser className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const availableServices: ServiceCard[] = [
        {
            title: 'Instant Doctor Consultation',
            description: 'Consult with general physicians instantly via chat or video call 24x7 from anywhere.',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=250&fit=crop',
            icon: <FiVideo className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10'
        },
        {
            title: 'Ambulance Services',
            description: 'Emergency ambulance services available 24x7 with trained paramedics.',
            image: 'https://images.unsplash.com/photo-1587556930799-8dca6a12157a?w=400&h=250&fit=crop',
            icon: <TbTruckDelivery className="w-5 h-5" />, color: 'text-red-500', bg: 'bg-red-50'
        },
        {
            title: 'Speciality Consultation',
            description: 'Book appointments with specialists across 20+ departments.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            icon: <FiActivity className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50'
        },
        {
            title: 'Dental Checkups',
            description: 'Comprehensive dental checkups and treatments for a healthy smile.',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop',
            icon: <TbDental className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50'
        },
        {
            title: 'Eye Checkups',
            description: 'Complete eye examinations and vision care by expert ophthalmologists.',
            image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=250&fit=crop',
            icon: <FiEye className="w-5 h-5" />, color: 'text-purple-500', bg: 'bg-purple-50'
        }
    ];

    const bookingSteps: BookingStep[] = [
        { id: 1, title: 'Choose a Service', description: 'Select the sponsored service you want to book.', icon: <FiGrid className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { id: 2, title: 'Fill Details', description: 'Enter patient details and preferred booking time.', icon: <FiUser className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { id: 3, title: 'Select Provider', description: 'Choose from available network providers.', icon: <FiMapPin className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { id: 4, title: 'Confirm Booking', description: 'Review and confirm your booking.', icon: <FiFileText className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 5, title: 'Get Confirmation', description: 'Receive confirmation and appointment details.', icon: <FiCheckCircle className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    const valueProps: ValueProp[] = [
        { title: '100% Cashless', description: 'For eligible services at network providers', icon: <FiShield className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Wide Network', description: 'Access 500+ hospitals & clinics across India', icon: <FiShare2 className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Easy Booking', description: 'Book in just a few simple steps', icon: <FiCalendar className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: '24x7 Support', description: 'Our care team is always here to help you', icon: <FiClock className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Sponsored Services</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Explore and manage sponsored healthcare services for your employees and their dependents.</p>
                </div>
            </div>

            {/* ================= TOP KPIs ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {topKPIs.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                            {kpi.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">{kpi.title}</p>
                            <h3 className="font-heading text-xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                            <p className={`text-[9px] font-bold flex items-center gap-0.5 mt-1.5 ${kpi.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                <FiArrowUpRight className="w-3 h-3" /> {kpi.trend} <span className="text-gray-400 font-medium font-sans ml-0.5">vs last month</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= MAIN CONTENT GRID ================= */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

                {/* LEFT COLUMN (Span 8) */}
                <div className="xl:col-span-8 space-y-6">

                    {/* Available Sponsored Services */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Available Sponsored Services</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline">View All Services</a>
                        </div>

                        <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {availableServices.map((service, idx) => (
                                <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] flex flex-col min-w-[260px] max-w-[280px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                                    {/* Image Container with Floating Icon */}
                                    <div className="relative h-[140px] w-full overflow-hidden bg-gray-50">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className={`absolute -bottom-5 left-5 w-12 h-12 rounded-md flex items-center justify-center shadow-md bg-white border border-gray-50 z-10 ${service.color}`}>
                                            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${service.bg}`}>
                                                {service.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-8 p-5 flex flex-col flex-1">
                                        <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-2">{service.title}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-5 flex-1">{service.description}</p>

                                        <Button variant="primary" className="w-full mt-auto !bg-[#5301ab] hover:!bg-[#43008a] !py-2 !text-[12px] transition-colors">
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Props Section */}
                    <div className="bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {valueProps.map((prop, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 ${prop.bg} ${prop.color}`}>
                                        {prop.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[13px] text-gray-900 mb-0.5">{prop.title}</h4>
                                        <p className="text-[10px] text-gray-500 font-medium leading-tight">{prop.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Promotional Banner */}
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50/50 rounded-md border border-purple-100/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm relative overflow-hidden min-h-[160px]">
                        {/* Left App Mockup */}
                        <div className="absolute left-0 bottom-0 w-32 md:w-40 opacity-90 pointer-events-none transform -translate-x-4 translate-y-4">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medical-app-4993427-4161758.png" alt="App Mockup" className="w-full h-auto drop-shadow-xl" />
                        </div>

                        {/* Center Content */}
                        <div className="relative z-10 text-center max-w-sm mx-auto">
                            <h3 className="font-bold text-[18px] text-gray-900 leading-tight mb-2">Quality Care, Anytime, Anywhere</h3>
                            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Access trusted healthcare services for you and your family with our sponsored services.</p>
                        </div>

                        {/* Right Shield Mockup */}
                        <div className="absolute right-0 bottom-0 w-32 md:w-40 opacity-90 pointer-events-none transform translate-x-4 translate-y-4">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/health-insurance-4993426-4161757.png" alt="Shield Mockup" className="w-full h-auto drop-shadow-xl" />
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN (Span 4) */}
                <div className="xl:col-span-4 space-y-6">

                    {/* How to Book Sidebar */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] relative">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">How to Book</h3>

                        <div className="relative">
                            {/* Vertical Connecting Line */}
                            <div className="absolute left-[23px] top-6 bottom-6 w-[1px] bg-gray-100 z-0 border-l border-dashed border-gray-200"></div>

                            <div className="space-y-6 relative z-10">
                                {bookingSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4 group cursor-default">
                                        <div className="relative shrink-0">
                                            <div className={`w-12 h-12 rounded-md flex items-center justify-center shadow-sm border border-white transition-transform group-hover:scale-105 ${step.bg} ${step.color}`}>
                                                {step.icon}
                                            </div>
                                            {/* Step Number Badge */}
                                            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-gray-700">
                                                {step.id}
                                            </div>
                                        </div>
                                        <div className="pt-1.5">
                                            <h4 className="font-bold text-[13px] text-gray-900 leading-tight mb-1">{step.title}</h4>
                                            <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Need Help Banner */}
                    <div className="bg-gradient-to-br from-[#5301ab] to-[#7315e0] rounded-md p-6 shadow-lg shadow-[#5301ab]/20 relative overflow-hidden flex flex-col justify-center min-h-[200px]">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10 w-[60%] text-left">
                            <h3 className="font-bold text-white text-[18px] mb-2 leading-tight">Need Help?</h3>
                            <p className="text-[12px] text-white/80 font-medium mb-5 leading-relaxed">Our care team is available 24x7 to assist you.</p>
                            <Button variant="secondary" className="!bg-white !text-[#5301ab] !border-transparent hover:!bg-gray-50 !py-2 !text-[12px] shadow-sm w-fit" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Contact Support
                            </Button>
                        </div>
                        {/* Decorative Support Illustration */}
                        <div className="absolute -right-4 bottom-0 w-[55%] pointer-events-none drop-shadow-2xl">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CorporateSponsoredServicesCom;