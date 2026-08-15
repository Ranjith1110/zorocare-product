import type { FC, ReactNode } from 'react';
import {
    FiArrowLeft, FiCalendar, FiCheckCircle,
    FiShield, FiArrowUpRight, FiActivity, FiUser,
    FiFileText, FiPhoneCall, FiGrid, FiMapPin,
    FiCheck, FiSmile, FiTag, FiStar, FiArrowRight, FiEye
} from 'react-icons/fi';

import Button from '../../common/Button';

// --- Interfaces ---
interface Props {
    onBack: () => void;
}

interface KPI {
    title: string;
    value: string;
    trend: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface PackageCard {
    title: string;
    description: string;
    image: string;
    badge: string;
    badgeColor: string;
    icon: ReactNode;
    iconColor: string;
    iconBg: string;
    features: string[];
    price: string;
}

interface ValueProp {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Step {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
}

interface HorizontalStep {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface ReasonProp {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

const IDEyeCheckupsOtherServices: FC<Props> = ({ onBack }) => {

    // --- Mock Data ---
    const topKPIs: KPI[] = [
        { title: 'Total Bookings', value: '412', trend: '18.6%', icon: <FiCalendar className="w-6 h-6" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Checkups Completed', value: '338', trend: '16.4%', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Happy Eyes', value: '1,968', trend: '14.8%', icon: <FiUser className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Amount Spent', value: '₹7.9 Lakhs', trend: '15.3%', icon: <FiFileText className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    const packages: PackageCard[] = [
        {
            title: 'Basic Eye Checkup',
            description: 'Essential eye screening for maintaining healthy vision.',
            image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=250&fit=crop',
            badge: 'Most Popular', badgeColor: 'bg-[#5301ab]',
            icon: <FiEye className="w-5 h-5" />, iconColor: 'text-[#5301ab]', iconBg: 'bg-white',
            features: ['Vision Screening', 'Refraction (Power Check)', 'Eye Pressure Test', 'Doctor Consultation'],
            price: '₹499'
        },
        {
            title: 'Comprehensive Eye Checkup',
            description: 'Complete evaluation for clearer and healthier eyes.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
            badge: 'Value for Money', badgeColor: 'bg-emerald-500',
            icon: <FiEye className="w-5 h-5" />, iconColor: 'text-emerald-500', iconBg: 'bg-white',
            features: ['All Basic Checkup Inclusions', 'Detailed Eye Examination', 'Retinal Screening', 'Digital Report'],
            price: '₹999'
        },
        {
            title: 'Advanced Eye Checkup',
            description: 'In-depth analysis for early detection and prevention.',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=250&fit=crop',
            badge: 'Advanced', badgeColor: 'bg-blue-500',
            icon: <FiEye className="w-5 h-5" />, iconColor: 'text-blue-500', iconBg: 'bg-white',
            features: ['All Comprehensive inclusions', 'OCT Retinal Scan', 'Corneal Topography', 'Dry Eye Evaluation'],
            price: '₹1,699'
        },
        {
            title: 'Kids Eye Checkup',
            description: 'Specialized eye care for children and teenagers.',
            image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?w=400&h=250&fit=crop',
            badge: 'Kids Special', badgeColor: 'bg-orange-500',
            icon: <FiEye className="w-5 h-5" />, iconColor: 'text-orange-500', iconBg: 'bg-white',
            features: ['Vision Screening for Kids', 'Refraction (Power Check)', 'Squint Evaluation', 'Eye Health Guidance'],
            price: '₹599'
        },
        {
            title: 'Premium Eye Checkup',
            description: 'Advanced diagnostics for complete eye health.',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop',
            badge: 'Premium', badgeColor: 'bg-[#5301ab]',
            icon: <FiEye className="w-5 h-5" />, iconColor: 'text-[#5301ab]', iconBg: 'bg-white',
            features: ['All Advanced Inclusions', 'Visual Field Test', 'Endothelial Cell Count', 'Personalized Eye Care Plan'],
            price: '₹2,499'
        }
    ];

    const valueProps: ValueProp[] = [
        { title: 'Expert Ophthalmologists', description: 'Experienced & certified eye care specialists', icon: <FiUser />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Advanced Technology', description: 'State-of-the-art diagnostic equipment', icon: <FiActivity />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Hygienic & Safe', description: 'Sterilized equipment and clean environment', icon: <FiShield />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Affordable Prices', description: 'Quality care at best prices', icon: <FiTag />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Digital Reports', description: 'Quick & easy access to digital reports', icon: <FiFileText />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    const horizontalSteps: HorizontalStep[] = [
        { title: 'Choose Package', description: 'Select the eye checkup package you need.', icon: <FiGrid className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Select Provider', description: 'Pick a verified eye care clinic near you.', icon: <FiMapPin className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Book Appointment', description: 'Choose date & time that suits you.', icon: <FiCalendar className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Visit & Checkup', description: 'Get your eye checkup done by experts.', icon: <FiEye className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Get Report', description: 'Receive your digital eye health report.', icon: <FiFileText className="w-5 h-5" />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    const verticalSteps: Step[] = [
        { id: 1, title: 'Choose Package', description: 'Select the eye checkup package that suits your needs.', icon: <FiGrid className="w-5 h-5" /> },
        { id: 2, title: 'Select Provider', description: 'Choose from our trusted eye care hospitals & clinics.', icon: <FiUser className="w-5 h-5" /> },
        { id: 3, title: 'Choose Date & Time', description: 'Pick a convenient date and time for your appointment.', icon: <FiCalendar className="w-5 h-5" /> },
        { id: 4, title: 'Confirm Booking', description: 'Review your details and confirm booking.', icon: <FiFileText className="w-5 h-5" /> },
        { id: 5, title: 'Get Confirmation', description: 'Receive booking confirmation via SMS & Email.', icon: <FiCheckCircle className="w-5 h-5" /> },
    ];

    const whyRegularProps: ReasonProp[] = [
        { title: 'Early Detection', description: 'Detect eye problems early and prevent vision loss.', icon: <FiEye />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Better Vision', description: 'Keep your vision sharp and reduce eye strain.', icon: <FiActivity />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Preventive Care', description: 'Prevent conditions like glaucoma, cataract & macular degeneration.', icon: <FiShield />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Healthy Lifestyle', description: 'Better eye health improves quality of life and productivity.', icon: <FiSmile />, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 hover:text-[#5301ab] hover:border-[#5301ab]/30 transition-colors shadow-sm shrink-0">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="w-12 h-12 rounded-md bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center shrink-0 hidden md:flex">
                        <FiEye className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Eye Checkups</h2>
                        <p className="text-[13px] text-gray-500 font-medium mt-1">Comprehensive eye care for clear vision and a healthier tomorrow.</p>
                    </div>
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
                            <p className={`text-[9px] font-bold flex items-center gap-0.5 mt-1.5 ${kpi.trend.includes('-') ? 'text-red-500' : 'text-emerald-500'}`}>
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

                    {/* Eye Checkup Packages Row */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[18px]">Eye Checkup Packages</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">Compare All Packages <FiArrowRight className="w-3.5 h-3.5" /></a>
                        </div>

                        <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {packages.map((pkg, idx) => (
                                <div key={idx} className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] flex flex-col min-w-[260px] max-w-[280px] shrink-0 hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="relative h-[140px] w-full overflow-hidden bg-gray-50">
                                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className={`absolute top-3 left-3 text-white text-[9px] font-bold px-2.5 py-1 rounded-md shadow-sm ${pkg.badgeColor}`}>
                                            {pkg.badge}
                                        </span>
                                        <div className={`absolute -bottom-5 left-5 w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white border border-gray-50 z-10 ${pkg.iconColor}`}>
                                            {pkg.icon}
                                        </div>
                                    </div>

                                    <div className="pt-8 p-5 flex flex-col flex-1">
                                        <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-2">{pkg.title}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4">{pkg.description}</p>

                                        <div className="space-y-2.5 mb-5 flex-1">
                                            {pkg.features.map((feat, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-2">
                                                    <FiCheck className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.iconColor}`} />
                                                    <span className="text-[11px] font-medium text-gray-700">{feat}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            <div className="mb-3">
                                                <span className={`font-heading font-bold text-[20px] leading-none ${pkg.iconColor}`}>{pkg.price}</span>
                                            </div>
                                            <Button variant="primary" className="w-full !bg-[#5301ab] hover:!bg-[#43008a] !py-2 !text-[12px] transition-colors">
                                                Book Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Props Row */}
                    <div className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] grid grid-cols-2 md:grid-cols-5 gap-4">
                        {valueProps.map((prop, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${prop.bg} ${prop.color}`}>
                                    {prop.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[11px] text-gray-900 leading-tight mb-0.5">{prop.title}</h4>
                                    <p className="text-[9px] text-gray-500 font-medium leading-tight">{prop.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* How It Works Horizontal */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-8">How It Works</h3>

                        <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-start min-w-[700px] relative">
                                {/* Background Dashed Line */}
                                <div className="absolute top-[20px] left-[60px] right-[60px] h-[1px] border-b border-dashed border-gray-200 z-0"></div>

                                {horizontalSteps.map((step, idx) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center relative z-10 px-2 group">
                                        <div className={`w-10 h-10 rounded-md bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-3 relative z-10 transition-colors group-hover:scale-110 ${step.color} ${step.bg}`}>
                                            {step.icon}
                                        </div>
                                        <div className="text-center px-2">
                                            <h4 className="font-bold text-[12px] text-gray-900 leading-tight mb-1">{step.title}</h4>
                                            <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-[120px] mx-auto">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trusted Partners */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-[16px]">Our Trusted Eye Care Partners</h3>
                            <a href="#" className="text-[12px] font-bold text-[#5301ab] hover:underline flex items-center gap-1">View All Partners <FiArrowRight className="w-3.5 h-3.5" /></a>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            {/* Dummy Partner Brands to match Image vibe */}
                            <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                                <span className="font-heading font-bold text-[16px] text-blue-800 flex items-center gap-1"><FiEye /> Dr. Agarwals</span>
                                <span className="font-heading font-bold text-[16px] text-blue-600 flex items-center gap-1"><FiEye /> LV PRASAD</span>
                                <span className="font-heading font-bold text-[16px] text-orange-600 flex items-center gap-1"><FiActivity /> Sankara</span>
                                <span className="font-heading font-bold text-[16px] text-blue-400">maxivision</span>
                                <span className="font-heading font-bold text-[16px] text-blue-700 flex items-center gap-1"><FiEye /> Centre for Sight</span>
                                <span className="font-heading font-bold text-[16px] text-green-600 flex items-center gap-1"><FiShield /> NARAYANA</span>
                            </div>

                            <div className="flex items-center gap-6 border-l border-gray-100 pl-6">
                                <div className="text-center">
                                    <p className="font-bold text-[18px] text-blue-500 leading-none mb-0.5">100+</p>
                                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Eye Care Partners</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[18px] text-[#5301ab] leading-none mb-0.5">50+</p>
                                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Cities Covered</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[18px] text-orange-500 leading-none mb-0.5 flex items-center justify-center gap-1"><FiStar className="fill-orange-500 w-4 h-4" /> 4.8/5</p>
                                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Customer Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN (Span 4) */}
                <div className="xl:col-span-4 space-y-6">

                    {/* How to Book Sidebar */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] relative">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">How to Book Eye Checkup</h3>

                        <div className="relative">
                            <div className="absolute left-[23px] top-6 bottom-6 w-[1px] bg-gray-100 z-0 border-l border-dashed border-gray-200"></div>

                            <div className="space-y-6 relative z-10">
                                {verticalSteps.map((step, idx) => {
                                    const stepColors = [
                                        { bg: 'bg-[#5301ab]/10', color: 'text-[#5301ab]' },
                                        { bg: 'bg-emerald-50', color: 'text-emerald-500' },
                                        { bg: 'bg-orange-50', color: 'text-orange-500' },
                                        { bg: 'bg-blue-50', color: 'text-blue-500' },
                                        { bg: 'bg-[#5301ab]/10', color: 'text-[#5301ab]' }
                                    ];
                                    const stepStyle = stepColors[idx] || stepColors[0];

                                    return (
                                        <div key={idx} className="flex gap-4 group cursor-default">
                                            <div className="relative shrink-0">
                                                <div className={`w-12 h-12 rounded-md flex items-center justify-center shadow-sm border border-white transition-transform group-hover:scale-105 ${stepStyle.bg} ${stepStyle.color}`}>
                                                    {step.icon}
                                                </div>
                                                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-gray-700">
                                                    {step.id}
                                                </div>
                                            </div>
                                            <div className="pt-1.5">
                                                <h4 className="font-bold text-[13px] text-gray-900 leading-tight mb-1">{step.title}</h4>
                                                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Why Regular Eye Checkups? */}
                    <div className="bg-white p-6 md:p-8 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-6">Why Regular Eye Checkups?</h3>

                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            {whyRegularProps.map((prop, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${prop.bg} ${prop.color}`}>
                                        {prop.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[11px] text-gray-900 leading-tight mb-0.5">{prop.title}</h4>
                                        <p className="text-[9px] text-gray-500 font-medium">{prop.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Need Help Banner */}
                    <div className="bg-gradient-to-br from-[#f8f9ff] to-purple-50 p-6 rounded-md border border-purple-100/50 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[180px]">
                        <div className="relative z-10 w-[65%] text-left">
                            <h3 className="font-bold text-gray-900 text-[16px] mb-2 leading-tight">Need Assistance?</h3>
                            <p className="text-[11px] text-gray-600 font-medium mb-5 leading-relaxed">Our eye care experts are available 24x7 to help you with your appointments and queries.</p>
                            <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a] !py-2.5 !text-[12px] shadow-sm w-fit" icon={<FiPhoneCall className="w-3.5 h-3.5" />}>
                                Contact Support
                            </Button>
                        </div>
                        {/* Decorative Support Illustration */}
                        <div className="absolute -right-4 bottom-0 w-[55%] pointer-events-none drop-shadow-xl">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-girl-5437899-4551717.png" alt="Support Girl 3D" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default IDEyeCheckupsOtherServices;