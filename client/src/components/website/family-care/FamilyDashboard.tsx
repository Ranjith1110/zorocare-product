import React, { useState } from 'react';
import { 
    Plus, Activity, Calendar, Bell, Pill, 
    HeartPulse, Thermometer, Droplet, ArrowRight, 
    MapPin, CheckCircle2, Clock, AlertTriangle 
} from 'lucide-react';

const FamilyDashboard: React.FC = () => {
    const [trendTab, setTrendTab] = useState<'7days' | '30days'>('7days');

    return (
        <section className="relative w-full min-h-screen bg-[#faf9fb] py-12 lg:py-16">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-[#fd5800] font-bold text-sm tracking-wider uppercase mb-1">
                            Family Care
                        </h2>
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Your family's health at a glance
                        </h1>
                    </div>
                    <button className="text-[#5301ab] font-semibold text-sm hover:underline flex items-center gap-1">
                        View All <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* --- FAMILY MEMBERS ROW --- */}
                <div className="mb-10">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Family Members</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        
                        {/* Add Member Card */}
                        <div className="min-w-[180px] h-[120px] rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:border-[#5301ab] hover:text-[#5301ab] hover:bg-[#5301ab]/5 transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                <Plus className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-sm">Add Member</span>
                        </div>

                        {/* Mom */}
                        <div className="min-w-[220px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center font-bold text-lg">M</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-tight">Mom</h4>
                                        <span className="text-xs text-gray-500">Mother · 68 years</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">Healthy</span>
                                <button className="text-[#5301ab] text-xs font-semibold hover:underline">View Profile</button>
                            </div>
                        </div>

                        {/* Dad */}
                        <div className="min-w-[220px] bg-white rounded-2xl p-4 shadow-sm border-2 border-red-100 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-2 h-full bg-[#fd5800]"></div>
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#fd5800]/10 text-[#fd5800] flex items-center justify-center font-bold text-lg">D</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-tight">Dad</h4>
                                        <span className="text-xs text-gray-500">Father · 72 years</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="px-2.5 py-1 bg-[#fd5800]/10 text-[#fd5800] text-xs font-bold rounded-md">Needs Attention</span>
                                <button className="text-[#5301ab] text-xs font-semibold hover:underline">View Profile</button>
                            </div>
                        </div>

                        {/* Sarah */}
                        <div className="min-w-[220px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center font-bold text-lg">S</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-tight">Sarah</h4>
                                        <span className="text-xs text-gray-500">Sister · 35 years</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">Healthy</span>
                                <button className="text-[#5301ab] text-xs font-semibold hover:underline">View Profile</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- OVERVIEW CARDS --- */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Care Overview</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#5301ab]/10 flex items-center justify-center text-[#5301ab]"><Pill className="w-6 h-6" /></div>
                            <div>
                                <p className="text-gray-500 text-xs font-semibold uppercase">Medicines</p>
                                <h4 className="text-2xl font-bold text-gray-900">4 <span className="text-sm text-gray-400">/ 5</span></h4>
                                <p className="text-green-600 text-xs font-medium">Medicines taken</p>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Calendar className="w-6 h-6" /></div>
                            <div>
                                <p className="text-gray-500 text-xs font-semibold uppercase">Appointments</p>
                                <h4 className="text-2xl font-bold text-gray-900">2</h4>
                                <p className="text-blue-600 text-xs font-medium">Upcoming appointments</p>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Activity className="w-6 h-6" /></div>
                            <div>
                                <p className="text-gray-500 text-xs font-semibold uppercase">Health Status</p>
                                <h4 className="text-2xl font-bold text-gray-900">Stable</h4>
                                <p className="text-green-600 text-xs font-medium">Family health</p>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#fd5800]/20 flex items-center gap-4 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-1 h-full bg-[#fd5800]"></div>
                            <div className="w-12 h-12 rounded-full bg-[#fd5800]/10 flex items-center justify-center text-[#fd5800]"><Bell className="w-6 h-6" /></div>
                            <div>
                                <p className="text-gray-500 text-xs font-semibold uppercase">Alerts</p>
                                <h4 className="text-2xl font-bold text-gray-900">1</h4>
                                <p className="text-[#fd5800] text-xs font-medium">Needs attention</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- MAIN CONTENT SPLIT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* LEFT COLUMN: Monitoring, Charts, Activity */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Health Monitoring Section */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Health Monitoring</h3>
                                    <p className="text-gray-500 text-sm">Recent health information from your family</p>
                                </div>
                                <button className="text-[#5301ab] text-sm font-semibold hover:underline">View Reports</button>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <HeartPulse className="w-4 h-4 text-red-500" />
                                        <span className="text-xs text-gray-500 font-semibold">Blood Pressure</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <h4 className="text-xl font-bold text-gray-900">120/80</h4>
                                        <span className="text-xs text-gray-400">mmHg</span>
                                    </div>
                                    <span className="text-xs text-green-600 font-medium mt-1 block">Normal</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Activity className="w-4 h-4 text-[#5301ab]" />
                                        <span className="text-xs text-gray-500 font-semibold">Heart Rate</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <h4 className="text-xl font-bold text-gray-900">72</h4>
                                        <span className="text-xs text-gray-400">BPM</span>
                                    </div>
                                    <span className="text-xs text-green-600 font-medium mt-1 block">Normal</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Droplet className="w-4 h-4 text-blue-500" />
                                        <span className="text-xs text-gray-500 font-semibold">SpO₂</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <h4 className="text-xl font-bold text-gray-900">98</h4>
                                        <span className="text-xs text-gray-400">%</span>
                                    </div>
                                    <span className="text-xs text-green-600 font-medium mt-1 block">Normal</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Thermometer className="w-4 h-4 text-[#fd5800]" />
                                        <span className="text-xs text-gray-500 font-semibold">Temperature</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <h4 className="text-xl font-bold text-gray-900">98.4</h4>
                                        <span className="text-xs text-gray-400">°F</span>
                                    </div>
                                    <span className="text-xs text-green-600 font-medium mt-1 block">Normal</span>
                                </div>
                            </div>

                            {/* Trend Chart Area */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="font-bold text-gray-800">Health Trend</h4>
                                    <div className="flex bg-gray-100 rounded-lg p-1">
                                        <button 
                                            onClick={() => setTrendTab('7days')}
                                            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${trendTab === '7days' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Last 7 days
                                        </button>
                                        <button 
                                            onClick={() => setTrendTab('30days')}
                                            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${trendTab === '30days' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Last 30 days
                                        </button>
                                    </div>
                                </div>
                                {/* Chart Mockup SVG */}
                                <div className="w-full h-48 bg-gray-50 rounded-xl border border-gray-100 flex items-end px-4 pb-4 pt-8 relative">
                                    {/* Mock Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between py-4 px-4 pointer-events-none">
                                        <div className="border-b border-gray-200 w-full h-0"></div>
                                        <div className="border-b border-gray-200 w-full h-0"></div>
                                        <div className="border-b border-gray-200 w-full h-0"></div>
                                        <div className="border-b border-gray-200 w-full h-0"></div>
                                    </div>
                                    {/* Mock Area Chart */}
                                    <svg className="w-full h-full text-[#5301ab] preserve-3d" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5301ab" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 40 L0 30 Q 10 20, 20 25 T 40 15 T 60 20 T 80 5 T 100 15 L100 40 Z" fill="url(#gradientArea)" />
                                        <path d="M0 30 Q 10 20, 20 25 T 40 15 T 60 20 T 80 5 T 100 15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="80" cy="5" r="1.5" fill="#fd5800" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Family Activity */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Family Activity</h3>
                            <p className="text-gray-500 text-sm mb-6">Recent family updates</p>

                            <div className="relative pl-6 border-l-2 border-gray-100 space-y-8">
                                
                                <div className="relative">
                                    <div className="absolute -left-[33px] w-4 h-4 rounded-full bg-white border-2 border-[#5301ab]"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-gray-800 text-sm">Mom's BP was updated</h4>
                                        <span className="text-xs text-gray-400">10 minutes ago</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Blood pressure: 120/80 mmHg</p>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-[33px] w-4 h-4 rounded-full bg-white border-2 border-green-500"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-gray-800 text-sm">Dad's medication was taken</h4>
                                        <span className="text-xs text-gray-400">1 hour ago</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Telmisartan · 01:00 PM</p>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-[33px] w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-gray-800 text-sm">Appointment added</h4>
                                        <span className="text-xs text-gray-400">Yesterday</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Cardiology · Tomorrow 10:30 AM</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Alerts, Meds, Appointments */}
                    <div className="space-y-6">
                        
                        {/* High Priority Alert */}
                        <div className="bg-[#fd5800]/10 rounded-3xl p-6 border border-[#fd5800]/20">
                            <div className="flex items-center gap-2 mb-2 text-[#fd5800]">
                                <AlertTriangle className="w-5 h-5" />
                                <h3 className="font-bold">Health Alerts</h3>
                            </div>
                            <p className="text-gray-800 text-sm mb-4">Important updates requiring attention</p>
                            
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                                <h4 className="font-bold text-gray-900 mb-1">Dad's medication is overdue</h4>
                                <p className="text-sm text-gray-600 mb-4">Telmisartan was due 30 minutes ago.</p>
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-[#fd5800] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#e04e00] transition-colors">Remind Dad</button>
                                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">Mark as Taken</button>
                                </div>
                            </div>
                        </div>

                        {/* Today's Medicines */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Today's Medicines</h3>
                            <p className="text-gray-500 text-xs mb-6">Keep track of your family's medications</p>
                            
                            <div className="space-y-4">
                                {/* Taken */}
                                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                                    <div className="bg-white w-12 h-12 rounded-lg shadow-sm flex flex-col items-center justify-center font-bold text-[#5301ab]">
                                        <span className="text-xs text-gray-400 font-medium">AM</span>
                                        08
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-sm">Metformin</h4>
                                        <p className="text-xs text-gray-500">Mom · 08:00 AM</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="text-[10px] font-bold text-green-600">Taken</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                                    <div className="bg-white w-12 h-12 rounded-lg shadow-sm flex flex-col items-center justify-center font-bold text-[#5301ab]">
                                        <span className="text-xs text-gray-400 font-medium">PM</span>
                                        01
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-sm">Telmisartan</h4>
                                        <p className="text-xs text-gray-500">Dad · 01:00 PM</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="text-[10px] font-bold text-green-600">Taken</span>
                                    </div>
                                </div>

                                {/* Upcoming */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Upcoming</h4>
                                    
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#5301ab]/5 border border-[#5301ab]/10 mb-3">
                                        <div className="bg-white w-12 h-12 rounded-lg shadow-sm flex flex-col items-center justify-center font-bold text-[#5301ab]">
                                            <span className="text-xs text-gray-400 font-medium">PM</span>
                                            06
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-sm">Vitamin D</h4>
                                            <p className="text-xs text-gray-500">Mom · 06:00 PM</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            <span className="text-[10px] font-bold text-gray-500">Upcoming</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#5301ab]/5 border border-[#5301ab]/10">
                                        <div className="bg-white w-12 h-12 rounded-lg shadow-sm flex flex-col items-center justify-center font-bold text-[#5301ab]">
                                            <span className="text-xs text-gray-400 font-medium">PM</span>
                                            09
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-sm">Thyroid Medicine</h4>
                                            <p className="text-xs text-gray-500">Mom · 09:00 PM</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            <span className="text-[10px] font-bold text-gray-500">Upcoming</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Upcoming Appointment */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Upcoming Appointment</h3>
                            <p className="text-gray-500 text-xs mb-6">Never miss an important appointment</p>

                            <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">Tomorrow</span>
                                <h4 className="text-lg font-bold text-gray-900 leading-tight mb-1">Cardiology Consultation</h4>
                                <p className="text-sm text-gray-600 font-medium mb-4">Dr. Raj Kumar</p>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Clock className="w-4 h-4 text-[#5301ab]" />
                                        <span>10:30 AM</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4 text-[#fd5800]" />
                                        <span>Apollo Hospital</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 bg-[#5301ab] text-white py-2.5 rounded-lg text-sm font-bold hover:bg-[#420188] transition-colors shadow-sm">View Appointment</button>
                                    <button className="w-12 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                        <MapPin className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
            <style>{`
                /* Hide scrollbar for members row */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default FamilyDashboard;