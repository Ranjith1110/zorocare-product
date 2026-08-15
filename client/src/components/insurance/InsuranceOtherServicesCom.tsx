import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
    FiCalendar, FiCheckCircle, FiClock, FiShield,
    FiArrowUpRight, FiActivity, FiMapPin,
    FiFileText, FiPhoneCall, FiGrid,
    FiCreditCard, FiGlobe, FiHeadphones, FiHeart, FiEye
} from 'react-icons/fi';
import { TbDental, TbTruckDelivery } from "react-icons/tb";

import Button from '../common/Button';

// Detailed Components
import IDWellnessServicesOtherServices from './other-services/IDWellnessServicesOtherServices';
import IDCareProgramsOtherServices from './other-services/IDCareProgramsOtherServices';
import IDDetalCheckupOtherServices from './other-services/IDDetalCheckupOtherServices';
import IDEyeCheckupsOtherServices from './other-services/IDEyeCheckupsOtherServices';
import IDAmbulanceServicesOtherServices from './other-services/IDAmbulanceServicesOtherServices';

// --- Interfaces ---
interface KPI {
    title: string; value: string; trend: string; isPositive: boolean; icon: ReactNode; color: string; bg: string;
}
export interface ServiceCard {
    title: string; description: string; image: string; icon: ReactNode; color: string; bg: string; buttonText: string; buttonColor: string;
}
interface ValueProp {
    title: string; description: string; icon: ReactNode;
}
interface Step {
    id: number; title: string; description: string; icon: ReactNode;
}

const InsuranceOtherServicesCom: FC = () => {
    const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

    const topKPIs: KPI[] = [
        { title: 'Total Bookings', value: '1,856', trend: '18.4%', isPositive: true, icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Services Availed', value: '1,245', trend: '16.7%', isPositive: true, icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Active Bookings', value: '321', trend: '12.2%', isPositive: true, icon: <FiClock className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Total Spend', value: '₹18.6 Lakhs', trend: '14.3%', isPositive: true, icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const availableServices: ServiceCard[] = [
        {
            title: 'Wellness Services',
            description: 'Yoga, fitness, nutrition, mental wellness and lifestyle coaching for a healthier you.',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
            icon: <FiActivity className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10',
            buttonText: 'Explore Services', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Care Programs',
            description: 'Elder care, chronic care management, postpartum care and personalized care programs.',
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=250&fit=crop',
            icon: <FiHeart className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50',
            buttonText: 'Explore Services', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Dental Services',
            description: 'Dental checkups, cleaning, fillings, orthodontics and specialized dental treatments.',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop',
            icon: <TbDental className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50',
            buttonText: 'Explore Services', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Eye & Optical Services',
            description: 'Comprehensive eye checkups, vision care, treatments and optical products.',
            image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=250&fit=crop',
            icon: <FiEye className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10',
            buttonText: 'Explore Services', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        },
        {
            title: 'Ambulance Services',
            description: '24x7 emergency ambulance support with trained medical professionals.',
            image: 'https://images.unsplash.com/photo-1587556930799-8dca6a12157a?w=400&h=250&fit=crop',
            icon: <TbTruckDelivery className="w-5 h-5" />, color: 'text-red-500', bg: 'bg-red-50',
            buttonText: 'Explore Services', buttonColor: '!bg-[#5301ab] hover:!bg-[#43008a]'
        }
    ];

    const valueProps: ValueProp[] = [
        { title: 'Wide Network', description: '500+ trusted service partners across India', icon: <FiGlobe className="w-6 h-6 text-[#5301ab]" /> },
        { title: 'Cashless Options', description: 'Cashless & insured services available', icon: <FiCreditCard className="w-6 h-6 text-[#5301ab]" /> },
        { title: 'Easy Booking', description: 'Quick & hassle-free booking process', icon: <FiCalendar className="w-6 h-6 text-[#5301ab]" /> },
        { title: '24x7 Support', description: 'We\'re here to help you anytime', icon: <FiHeadphones className="w-6 h-6 text-[#5301ab]" /> },
        { title: 'Secure & Reliable', description: 'Verified providers & quality assured', icon: <FiShield className="w-6 h-6 text-[#5301ab]" /> },
    ];

    const bookingSteps: Step[] = [
        { id: 1, title: 'Choose a Service', description: 'Select the service category you need.', icon: <FiGrid className="w-5 h-5 text-[#5301ab]" /> },
        { id: 2, title: 'Select Provider', description: 'Pick a nearby provider or service partner.', icon: <FiMapPin className="w-5 h-5 text-[#5301ab]" /> },
        { id: 3, title: 'Book & Confirm', description: 'Choose date, time and confirm your booking.', icon: <FiCalendar className="w-5 h-5 text-[#5301ab]" /> },
        { id: 4, title: 'Avail Service', description: 'Receive the service and make payment if applicable.', icon: <FiCreditCard className="w-5 h-5 text-[#5301ab]" /> },
    ];

    // Handle Conditional Rendering
    if (selectedService) {
        switch (selectedService.title) {
            case 'Wellness Services':
                return <IDWellnessServicesOtherServices onBack={() => setSelectedService(null)} />;
            case 'Care Programs':
                return <IDCareProgramsOtherServices onBack={() => setSelectedService(null)} />;
            case 'Dental Services':
                return <IDDetalCheckupOtherServices onBack={() => setSelectedService(null)} />;
            case 'Eye & Optical Services':
                return <IDEyeCheckupsOtherServices onBack={() => setSelectedService(null)} />;
            case 'Ambulance Services':
                return <IDAmbulanceServicesOtherServices onBack={() => setSelectedService(null)} />;
            default:
                return (
                    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
                        <div className="bg-white p-10 rounded-md border border-gray-100 shadow-sm text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedService.title}</h3>
                            <p className="text-gray-500 mb-6">Detailed management module for this service is currently under construction.</p>
                            <Button variant="primary" onClick={() => setSelectedService(null)}>Go Back to Services</Button>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Other Services</h2>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">Access a range of essential healthcare and support services for you and your family.</p>
                </div>
            </div>

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

            <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {availableServices.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col min-w-[280px] max-w-[300px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="relative h-[150px] w-full overflow-hidden bg-gray-50">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className={`absolute -bottom-5 left-5 w-12 h-12 rounded-md flex items-center justify-center shadow-md bg-white border border-gray-50 z-10`}>
                                <div className={`w-10 h-10 rounded-md flex items-center justify-center ${service.bg} ${service.color}`}>
                                    {service.icon}
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 p-5 flex flex-col flex-1">
                            <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-2">{service.title}</h4>
                            <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-6 flex-1 min-h-[40px]">{service.description}</p>
                            <Button
                                variant="primary"
                                className={`w-full mt-auto !py-2.5 !text-[13px] ${service.buttonColor}`}
                                onClick={() => setSelectedService(service)}
                            >
                                {service.buttonText}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-gray-50/80 rounded-md border border-gray-100 p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {valueProps.map((prop, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#5301ab]/10 flex items-center justify-center shrink-0">
                                {prop.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-[13px] text-gray-900 mb-0.5 leading-tight">{prop.title}</h4>
                                <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{prop.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
                <div className="xl:col-span-8 flex flex-col gap-6">
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-8">How It Works</h3>
                        <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-start min-w-[700px] relative">
                                <div className="absolute top-[28px] left-[40px] right-[40px] h-[1px] border-b border-dashed border-gray-300 z-0"></div>
                                {bookingSteps.map((step, idx) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center relative z-10 px-2 group">
                                        <div className="relative mb-4">
                                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#5301ab] text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-white z-20">
                                                {step.id}
                                            </div>
                                            <div className="w-14 h-14 rounded-md bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#5301ab]/30 group-hover:bg-[#5301ab]/5 transition-colors relative z-10">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div className="text-center px-2">
                                            <h4 className="font-bold text-[13px] text-gray-900 leading-tight mb-1">{step.title}</h4>
                                            <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-[140px] mx-auto">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50/50 rounded-md border border-purple-100/60 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm relative overflow-hidden flex-1">
                        <div className="w-16 h-16 rounded-md bg-[#5301ab] text-white flex items-center justify-center shadow-lg shadow-[#5301ab]/30 shrink-0 relative z-10">
                            <FiCheckCircle className="w-8 h-8" />
                        </div>
                        <div className="relative z-10 flex-1">
                            <h3 className="font-bold text-[18px] text-[#5301ab] leading-tight mb-1.5">Your Health, Our Priority</h3>
                            <p className="text-[12px] text-gray-600 font-medium leading-relaxed max-w-md">We bring trusted services closer to you for a healthier and happier life. Book with confidence!</p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-[40%] opacity-90 pointer-events-none transform translate-y-2">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/health-insurance-4993426-4161757.png" alt="Health Shield" className="w-full h-auto drop-shadow-xl" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 bg-gray-50/80 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col relative overflow-hidden h-full min-h-[400px]">
                    <div className="relative z-10">
                        <h3 className="font-bold text-gray-900 text-[18px] mb-2 leading-tight">Need Help?</h3>
                        <p className="text-[12px] text-gray-600 font-medium leading-relaxed mb-6 max-w-[200px]">Our support team is available 24x7 to assist you with bookings and service related queries.</p>
                        <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !py-2.5 !text-[12px] shadow-md shadow-[#5301ab]/20 w-fit" icon={<FiPhoneCall className="w-4 h-4" />}>
                            Contact Support
                        </Button>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-[85%] sm:w-[60%] xl:w-[90%] pointer-events-none drop-shadow-2xl">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Agent 3D" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsuranceOtherServicesCom;