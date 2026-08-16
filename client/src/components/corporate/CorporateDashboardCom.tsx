import type { FC, ReactNode } from 'react';
import { 
    FiArrowUpRight, FiArrowDownRight, FiShield, FiUsers, 
    FiActivity, FiFileText, FiChevronDown, FiMoreVertical, FiHeart, FiEye 
} from 'react-icons/fi';
import { TbBuildingCommunity, TbDental } from "react-icons/tb";

interface KPI {
    title: string;
    value: string;
    trend: string;
    isPositive: boolean;
    icon: ReactNode;
    color: string;
    bg: string;
}

interface Activity {
    action: string;
    subject: string;
    time: string;
    icon: ReactNode;
    color: string;
    bg: string;
}

const CorporateDashboardCom: FC = () => {

    const topKPIs: KPI[] = [
        { title: 'Total Spend', value: '₹14.8 Lakhs', trend: '18.4%', isPositive: true, icon: <span className="font-bold text-xl">₹</span>, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { title: 'Active Employees', value: '2,560', trend: '12.6%', isPositive: true, icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { title: 'Dependents Covered', value: '3,945', trend: '15.3%', isPositive: true, icon: <FiUsers className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { title: 'Healthcheckups', value: '1,245', trend: '20.1%', isPositive: true, icon: <FiActivity className="w-6 h-6" />, color: 'text-[#e11d48]', bg: 'bg-rose-50' },
        { title: 'Services Availed', value: '856', trend: '14.7%', isPositive: true, icon: <FiFileText className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { title: 'Pending Queries', value: '12', trend: '8.2%', isPositive: false, icon: <FiActivity className="w-6 h-6" />, color: 'text-red-500', bg: 'bg-red-50' },
    ];

    const progressGoals = [
        { title: 'Employee Enrollment', percent: 85, color: 'bg-[#5301ab]' },
        { title: 'Dependents Addition', percent: 68, color: 'bg-[#fd5800]' },
        { title: 'Healthcheckups Goal', percent: 72, color: 'bg-[#5301ab]' },
        { title: 'Services Utilization', percent: 45, color: 'bg-[#fd5800]' },
        { title: 'Budget Allocation', percent: 58, color: 'bg-[#5301ab]' },
    ];

    const activities: Activity[] = [
        { action: 'Health checkup booked for', subject: 'Engineering Dept', time: '2 mins ago', icon: <FiActivity />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { action: 'New dependent added by', subject: 'Ramesh Kumar', time: '15 mins ago', icon: <FiUsers />, color: 'text-rose-500', bg: 'bg-rose-50' },
        { action: 'Dental claim approved for', subject: 'Sunita Sharma', time: '1 hour ago', icon: <FiFileText />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { action: 'Corporate package renewed', subject: 'Annual Health Plan', time: '2 hours ago', icon: <TbBuildingCommunity />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
        { action: 'New employee registered', subject: 'Amit Verma', time: '3 hours ago', icon: <FiUsers />, color: 'text-[#5301ab]', bg: 'bg-[#5301ab]/10' },
    ];

    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

            {/* Header Area */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-5">
                <div>
                    <h2 className="font-heading text-3xl lg:text-[32px] font-bold text-gray-900 leading-tight mb-1.5">Welcome back, Admin! 👋</h2>
                    <p className="text-[14px] text-gray-500 font-medium">Here's what's happening with your corporate health benefits today.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-8 self-start lg:self-auto">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-md border border-gray-100 shadow-sm lg:border-none lg:shadow-none lg:bg-transparent lg:p-0">
                        <TbBuildingCommunity className="w-6 h-6 text-[#5301ab] lg:text-gray-400" />
                        <div>
                            <p className="text-[18px] sm:text-[20px] font-bold text-gray-900 font-heading leading-none">12</p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Departments</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-md border border-gray-100 shadow-sm lg:border-none lg:shadow-none lg:bg-transparent lg:p-0">
                        <FiUsers className="w-6 h-6 text-blue-500 lg:text-gray-400" />
                        <div>
                            <p className="text-[18px] sm:text-[20px] font-bold text-gray-900 font-heading leading-none">2,560</p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Employees</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-md border border-gray-100 shadow-sm lg:border-none lg:shadow-none lg:bg-transparent lg:p-0">
                        <FiShield className="w-6 h-6 text-emerald-500 lg:text-gray-400" />
                        <div>
                            <p className="text-[18px] sm:text-[20px] font-bold text-gray-900 font-heading leading-none">3</p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Active Plans</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {topKPIs.map((kpi, index) => (
                    <div key={index} className="bg-white p-5 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                                {kpi.icon}
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-tight">{kpi.title}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none mb-1.5">{kpi.value}</h3>
                            <p className={`text-[10px] font-bold flex items-center gap-1 ${kpi.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                {kpi.isPositive ? <FiArrowUpRight className="w-3 h-3" /> : <FiArrowDownRight className="w-3 h-3" />}
                                {kpi.trend} <span className="text-gray-400 font-medium font-sans ml-0.5">vs last month</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Bars Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 py-2 px-2">
                {progressGoals.map((goal, idx) => (
                    <div key={idx} className="flex-1 min-w-[140px] sm:min-w-[150px]">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-gray-600">{goal.title}</span>
                            <span className="text-[11px] font-bold text-gray-900">{goal.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div className={`${goal.color} h-full rounded-full`} style={{ width: `${goal.percent}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Grid Row 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Business Overview Chart */}
                <div className="xl:col-span-5 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[16px]">Health Benefits Overview</h3>
                        <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-100">
                            This Month <FiChevronDown />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50/50 rounded-md border border-gray-100">
                            <FiFileText className="w-5 h-5 mx-auto text-[#5301ab] mb-2" />
                            <p className="text-[10px] text-gray-500 font-bold mb-0.5">New Members</p>
                            <p className="text-[14px] font-bold text-gray-900">345</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center justify-center mt-1"><FiArrowUpRight /> 14.6%</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50/50 rounded-md border border-gray-100">
                            <FiActivity className="w-5 h-5 mx-auto text-emerald-500 mb-2" />
                            <p className="text-[10px] text-gray-500 font-bold mb-0.5">Utilizations</p>
                            <p className="text-[14px] font-bold text-gray-900">1,654</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center justify-center mt-1"><FiArrowUpRight /> 11.2%</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50/50 rounded-md border border-gray-100">
                            <FiActivity className="w-5 h-5 mx-auto text-orange-500 mb-2" />
                            <p className="text-[10px] text-gray-500 font-bold mb-0.5">Adoption Rate</p>
                            <p className="text-[14px] font-bold text-gray-900">68.4%</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center justify-center mt-1"><FiArrowUpRight /> 8.1%</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50/50 rounded-md border border-gray-100">
                            <FiShield className="w-5 h-5 mx-auto text-blue-500 mb-2" />
                            <p className="text-[10px] text-gray-500 font-bold mb-0.5">Avg. Spend</p>
                            <p className="text-[14px] font-bold text-gray-900">₹8,560</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center justify-center mt-1"><FiArrowUpRight /> 10.3%</p>
                        </div>
                    </div>

                    <div className="flex-1 relative min-h-[160px] w-full">
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold h-full pb-6">
                            <span>40K</span><span>30K</span><span>20K</span><span>10K</span><span>0</span>
                        </div>
                        <div className="absolute left-6 right-0 top-0 bottom-0">
                            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#5301ab" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#5301ab" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,35 Q10,32 20,25 T40,15 T60,30 T80,10 L100,5 L100,40 L0,40 Z" fill="url(#purpleGradient)" />
                                <path d="M0,35 Q10,32 20,25 T40,15 T60,30 T80,10 L100,5" fill="none" stroke="#5301ab" strokeWidth="1.5" />
                                <circle cx="20" cy="25" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="40" cy="15" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="60" cy="30" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                                <circle cx="80" cy="10" r="1.5" fill="#5301ab" stroke="white" strokeWidth="0.5" />
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-semibold text-gray-400">
                                <span>12 May</span><span>13 May</span><span>14 May</span><span>15 May</span><span>16 May</span><span>17 May</span><span>18 May</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services by Category Donut */}
                <div className="xl:col-span-3 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center relative">
                    <div className="w-full flex justify-start mb-2 lg:absolute lg:top-6 lg:left-6">
                        <h3 className="font-bold text-gray-900 text-[16px]">Services by Category</h3>
                    </div>

                    <div className="relative w-44 h-44 mt-4 lg:mt-8 mb-6">
                        <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                            <path className="text-gray-100" strokeWidth="6" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-[#5301ab]" strokeDasharray="45, 100" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-blue-500" strokeDasharray="25, 100" strokeDashoffset="-45" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-orange-500" strokeDasharray="15, 100" strokeDashoffset="-70" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-emerald-500" strokeDasharray="8, 100" strokeDashoffset="-85" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-gray-400" strokeDasharray="7, 100" strokeDashoffset="-93" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-gray-900 font-heading leading-none mb-1">12,560</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Total Services</p>
                        </div>
                    </div>

                    <div className="w-full space-y-2 px-2">
                        <div className="flex items-center justify-between text-[11px] font-bold"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#5301ab]"></span><span className="text-gray-600">Health Checkups</span></div><span className="text-gray-900">45%</span></div>
                        <div className="flex items-center justify-between text-[11px] font-bold"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span><span className="text-gray-600">Doctor Consultations</span></div><span className="text-gray-900">25%</span></div>
                        <div className="flex items-center justify-between text-[11px] font-bold"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span><span className="text-gray-600">Dental Services</span></div><span className="text-gray-900">15%</span></div>
                        <div className="flex items-center justify-between text-[11px] font-bold"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span><span className="text-gray-600">Wellness Programs</span></div><span className="text-gray-900">8%</span></div>
                        <div className="flex items-center justify-between text-[11px] font-bold"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span><span className="text-gray-600">Others</span></div><span className="text-gray-900">7%</span></div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="xl:col-span-4 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[16px]">Recent Activities</h3>
                        <button className="text-gray-400 hover:text-gray-600"><FiMoreVertical /></button>
                    </div>
                    <div className="space-y-5">
                        {activities.map((act, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${act.bg} ${act.color}`}>
                                    {act.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[12px] font-medium text-gray-500 leading-tight mb-0.5">{act.action}</p>
                                    <h4 className="font-bold text-[13px] text-gray-900 truncate">{act.subject}</h4>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 shrink-0">{act.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Row 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Sponsored Services Overview */}
                <div className="xl:col-span-4 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[15px]">Sponsored Services Overview</h3>
                        <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:underline">View All</a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center text-center bg-gray-50/50 p-3 rounded-md border border-gray-100">
                            <div className="w-10 h-10 rounded-md bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center mb-2"><TbBuildingCommunity className="w-5 h-5" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Corporate<br />Tie-ups</p>
                            <p className="text-[16px] font-bold text-gray-900">56</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center mt-1"><FiArrowUpRight /> 12%</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 p-3 rounded-md border border-gray-100">
                            <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2"><FiShield className="w-5 h-5" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Sponsored<br />Policies</p>
                            <p className="text-[16px] font-bold text-gray-900">3,245</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center mt-1"><FiArrowUpRight /> 18%</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 p-3 rounded-md border border-gray-100">
                            <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center mb-2"><FiUsers className="w-5 h-5" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Total<br />Sponsors</p>
                            <p className="text-[16px] font-bold text-gray-900">28</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center mt-1"><FiArrowUpRight /> 8%</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 p-3 rounded-md border border-gray-100">
                            <div className="w-10 h-10 rounded-md bg-orange-50 text-orange-500 flex items-center justify-center mb-2"><span className="font-bold text-lg">₹</span></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Revenue<br />(Sponsored)</p>
                            <p className="text-[16px] font-bold text-gray-900">₹8.45L</p>
                            <p className="text-[9px] text-emerald-500 font-bold flex items-center mt-1"><FiArrowUpRight /> 16%</p>
                        </div>
                    </div>
                </div>

                {/* Other Services Overview */}
                <div className="xl:col-span-5 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-[15px]">Other Services Overview</h3>
                        <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:underline">View All</a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        <div className="flex flex-col items-center text-center bg-gray-50/50 border border-gray-100 rounded-md p-3">
                            <div className="w-8 h-8 rounded-md bg-green-50 text-green-500 flex items-center justify-center mb-2"><FiActivity className="w-4 h-4" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Wellness<br />Services</p>
                            <p className="text-[14px] font-bold text-gray-900">1,245</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 border border-gray-100 rounded-md p-3">
                            <div className="w-8 h-8 rounded-md bg-rose-50 text-rose-500 flex items-center justify-center mb-2"><FiHeart className="w-4 h-4" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Care<br />Programs</p>
                            <p className="text-[14px] font-bold text-gray-900">856</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 border border-gray-100 rounded-md p-3">
                            <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center mb-2"><TbDental className="w-4 h-4" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Dental<br />Services</p>
                            <p className="text-[14px] font-bold text-gray-900">642</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 border border-gray-100 rounded-md p-3">
                            <div className="w-8 h-8 rounded-md bg-[#5301ab]/10 text-[#5301ab] flex items-center justify-center mb-2"><FiEye className="w-4 h-4" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Eye & Optical<br />Services</p>
                            <p className="text-[14px] font-bold text-gray-900">1,024</p>
                        </div>
                        <div className="flex flex-col items-center text-center bg-gray-50/50 border border-gray-100 rounded-md p-3 sm:col-span-1 md:col-span-1 col-span-2">
                            <div className="w-8 h-8 rounded-md bg-red-50 text-red-500 flex items-center justify-center mb-2"><FiActivity className="w-4 h-4" /></div>
                            <p className="text-[9px] font-bold text-gray-500 leading-tight mb-1">Ambulance<br />Services</p>
                            <p className="text-[14px] font-bold text-gray-900">312</p>
                        </div>
                    </div>
                </div>

                {/* Healthcheckups Summary */}
                <div className="xl:col-span-3 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-[15px]">Healthcheckups Summary</h3>
                        <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:underline">View All</a>
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-4">
                        <div className="relative w-20 h-20">
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                <path className="text-gray-100" strokeWidth="6" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-emerald-500" strokeDasharray="75, 100" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-blue-500" strokeDasharray="20, 100" strokeDashoffset="-75" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-red-500" strokeDasharray="5, 100" strokeDashoffset="-95" strokeWidth="6" strokeLinecap="butt" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-[13px] font-bold text-gray-900 font-heading leading-none">3,245</p>
                                <p className="text-[7px] font-bold text-gray-400 uppercase mt-0.5">Total</p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span><span className="text-gray-600">Completed</span></div><span className="text-gray-900">2,450 <span className="text-gray-400 font-medium">(75%)</span></span></div>
                            <div className="flex justify-between items-center text-[10px] font-bold"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span><span className="text-gray-600">Scheduled</span></div><span className="text-gray-900">645 <span className="text-gray-400 font-medium">(20%)</span></span></div>
                            <div className="flex justify-between items-center text-[10px] font-bold"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="text-gray-600">Cancelled</span></div><span className="text-gray-900">150 <span className="text-gray-400 font-medium">(5%)</span></span></div>
                        </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-600 text-[10px] font-bold text-center py-1.5 rounded-md mt-2 flex items-center justify-center gap-1">
                        <FiArrowUpRight /> 20.1% more than last month
                    </div>
                </div>

            </div>

            {/* Grid Row 3 (Bottom Tables & Chart) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Top Departments */}
                <div className="xl:col-span-4 bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 text-[15px]">Top Departments</h3>
                        <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:underline">View All</a>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Department Name</th>
                                <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Employees</th>
                                <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Utilizations</th>
                                <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Spend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            <tr className="hover:bg-gray-50/50">
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800">Engineering</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-center">450</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-center">360</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-right">₹4.25L</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800">Sales & Marketing</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-center">210</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-center">180</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-right">₹2.10L</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800">Human Resources</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-center">85</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-center">72</td>
                                <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800 text-right">₹0.85L</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Recent Enrollments */}
                <div className="xl:col-span-5 bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 text-[15px]">Recent Enrollments</h3>
                        <a href="#" className="text-[11px] font-bold text-[#5301ab] hover:underline">View All</a>
                    </div>
                    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Employee ID</th>
                                    <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Employee Name</th>
                                    <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-5 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3].map((_, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50">
                                        <td className="px-5 py-3.5 text-[11px] font-bold text-gray-500">EMP-2026-{1250+i}</td>
                                        <td className="px-5 py-3.5 text-[11px] font-bold text-gray-800">Ramesh Kumar</td>
                                        <td className="px-5 py-3.5 text-[11px] font-bold text-gray-700">Engineering</td>
                                        <td className="px-5 py-3.5 text-[11px] font-medium text-gray-500">18 May 2026</td>
                                        <td className="px-5 py-3.5 text-center">
                                            <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded text-[9px] font-bold uppercase">Active</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Spend Overview (Bar Chart Mock) */}
                <div className="xl:col-span-3 bg-white p-6 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900 text-[15px]">Spend Overview</h3>
                        <button className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-[10px] font-bold text-gray-600">
                            This Month <FiChevronDown />
                        </button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-heading text-[22px] font-bold text-gray-900 leading-none">₹14.8 Lakhs</h2>
                        <p className="text-[10px] text-emerald-500 font-bold flex items-center mt-1"><FiArrowUpRight /> 18.4% <span className="text-gray-400 font-medium ml-1">vs last month</span></p>
                    </div>

                    <div className="flex-1 relative min-h-[100px] w-full flex items-end justify-between px-2 gap-2 mt-2">
                        {/* Fake bars */}
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '40%' }}></div>
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '70%' }}></div>
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '50%' }}></div>
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '90%' }}></div>
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '60%' }}></div>
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '80%' }}></div>
                        <div className="w-full bg-[#5301ab] rounded-t-sm" style={{ height: '100%' }}></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CorporateDashboardCom;