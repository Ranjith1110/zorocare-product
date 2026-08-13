import type { FC, ReactNode } from 'react';
import {
  FiShield, FiHeart, FiActivity, FiEye, FiTruck,
  FiMonitor, FiFileText, FiArrowUpRight,
  FiChevronDown, FiMaximize2,
  FiPlay, FiPause, FiCheck, FiCheckCircle, FiPhoneCall
} from 'react-icons/fi';
import { TbDental } from "react-icons/tb";

interface TopMetric {
  label: string;
  value: string;
  color: string;
}

interface KPI {
  title: string;
  value: string;
  trend: string;
  color: 'purple' | 'orange';
  icon: ReactNode;
}

interface WeeklyProgress {
  day: string;
  hrs: number;
  active?: boolean;
}

interface ScheduleEvent {
  id: number;
  title: string;
  time: string;
  type: string;
  desc?: string;
  images?: string[];
}

interface OnboardingTask {
  id: number;
  title: string;
  time: string;
  done: boolean;
}

const UserDashboardCom: FC = () => {
  const topMetrics: TopMetric[] = [
    { label: 'Doctor Consult', value: '66%', color: 'bg-[#5301ab]' },
    { label: 'Health Checkup', value: '100%', color: 'bg-[#fd5800]' },
    { label: 'Dental Care', value: '50%', color: 'bg-[#5301ab]' },
    { label: 'Eye Care', value: '25%', color: 'bg-gray-200' }
  ];

  const kpiData: KPI[] = [
    { title: 'Doctor Consult', value: 'Available', trend: '24/7', color: 'purple', icon: <FiMonitor className="w-6 h-6" /> },
    { title: 'Health Checkup', value: 'Book Now', trend: 'Covered', color: 'orange', icon: <FiActivity className="w-6 h-6" /> },
    { title: 'Dental Care', value: 'Book Now', trend: 'Covered', color: 'purple', icon: <TbDental className="w-6 h-6" /> },
    { title: 'Eye Care', value: 'Book Now', trend: 'Covered', color: 'orange', icon: <FiEye className="w-6 h-6" /> },
    { title: 'Ambulance', value: 'Get Help', trend: 'Emergency', color: 'purple', icon: <FiTruck className="w-6 h-6" /> },
    { title: 'Wellness', value: 'Explore', trend: 'Unlimited', color: 'orange', icon: <FiHeart className="w-6 h-6" /> },
    { title: 'Care Programs', value: 'Explore', trend: '2 Active', color: 'purple', icon: <FiShield className="w-6 h-6" /> },
    { title: 'Health Records', value: 'View All', trend: 'Updated', color: 'orange', icon: <FiFileText className="w-6 h-6" /> }
  ];

  const weeklyProgress: WeeklyProgress[] = [
    { day: 'S', hrs: 30 }, { day: 'M', hrs: 75 }, { day: 'T', hrs: 50 },
    { day: 'W', hrs: 40 }, { day: 'T', hrs: 90, active: true },
    { day: 'F', hrs: 65 }, { day: 'S', hrs: 20 }
  ];

  const scheduleEvents: ScheduleEvent[] = [
    { 
      id: 1, 
      title: 'Speciality Consultation', 
      time: '10:30 am', 
      type: 'team',
      desc: 'Dr. Priya Sharma • Cardiologist',
      images: ['https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100'] 
    },
    { 
      id: 2, 
      title: 'Dental Checkup', 
      time: 'Completed', 
      type: 'session',
      desc: 'Smile Craft Dental',
    }
  ];

  const onboardingTasks: OnboardingTask[] = [
    { id: 1, title: 'Call Ambulance', time: '24x7 Support', done: true },
    { id: 2, title: 'Emergency Contact', time: 'Reach out to support', done: true },
    { id: 3, title: 'Find Nearest Hospital', time: 'Location based routing', done: true },
    { id: 4, title: 'SOS Alert to Family', time: 'Set up required', done: false },
    { id: 5, title: 'View Medical ID', time: 'Profile settings', done: false }
  ];

  return (
    <div className="w-full space-y-6 pb-10">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[32px] font-semibold tracking-tight text-gray-900 leading-none">
            Good Morning, Arjun 👋
          </h2>
        </div>

        <div className="flex items-center gap-6 lg:gap-10 self-end md:self-auto">
          <div className="text-center flex items-baseline gap-2">
            <FiShield className="w-5 h-5 text-gray-400 hidden sm:block" />
            <p className="text-2xl lg:text-[28px] font-bold text-gray-900 font-heading">12</p>
            <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Covered</p>
          </div>
          <div className="text-center flex items-baseline gap-2">
            <FiCheckCircle className="w-5 h-5 text-gray-400 hidden sm:block" />
            <p className="text-2xl lg:text-[28px] font-bold text-gray-900 font-heading">8</p>
            <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Used</p>
          </div>
          <div className="text-center flex items-baseline gap-2">
            <FiHeart className="w-5 h-5 text-emerald-500 hidden sm:block" />
            <p className="text-2xl lg:text-[28px] font-bold text-emerald-500 font-heading">82</p>
            <p className="text-[11px] font-medium text-emerald-600 uppercase tracking-wider">Score</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 items-center bg-white p-4 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
        {topMetrics.map((metric, idx) => (
          <div key={idx} className="flex items-center justify-between w-full px-2">
            <span className="text-[13px] font-semibold text-gray-500 w-28">{metric.label}</span>
            <div className="flex-1 mx-4 bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className={`${metric.color} h-full rounded-full transition-all duration-1000`} style={{ width: metric.value }}></div>
            </div>
            <span className="text-[13px] font-bold text-gray-900 w-10 text-right">{metric.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${kpi.color === 'purple' ? 'bg-[#5301ab]/10 text-[#5301ab]' : 'bg-[#fd5800]/10 text-[#fd5800]'}`}>
                {kpi.icon}
              </div>
              <div className="space-y-1">
                <p className="text-[12px] font-semibold text-gray-500 leading-tight">{kpi.title}</p>
                <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
                <p className="text-[10px] font-semibold text-[#10b981] flex items-center gap-1">
                  <FiArrowUpRight className="w-3 h-3" />
                  {kpi.trend}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

        <div className="lg:col-span-3 space-y-5">
          <div className="bg-gradient-to-br from-[#7315e0] to-[#5301ab] p-5 rounded-[2rem] border border-[#5301ab]/40 shadow-lg relative overflow-hidden flex flex-col h-[230px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex-1 flex items-end justify-center pb-2">
              <img src="https://i.pravatar.cc/300?img=11" alt="Arjun Kumar" className="w-32 h-32 object-cover rounded-t-[2.5rem] rounded-b-xl border-2 border-white/20 drop-shadow-2xl z-10" />
            </div>
            <div className="relative z-20 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-[16px] font-bold text-white leading-tight">Arjun Kumar</h3>
                <p className="text-[11px] text-white/70 font-medium">Innova Technologies</p>
              </div>
              <div className="bg-[#fd5800] px-4 py-1.5 rounded-full text-[12px] font-bold text-white shadow-sm">
                Premium Plan
              </div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] space-y-1">
            <button className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 text-left transition-colors">
              <span className="text-[13px] font-semibold text-gray-700">Sponsored Services</span>
              <FiChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <span className="text-[13px] font-semibold text-gray-800">Available to You (₹0)</span>
                <FiChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex items-center justify-between bg-[#fd5800]/5 p-2.5 rounded-xl border border-[#fd5800]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fd5800] flex items-center justify-center text-white shadow-md">
                    <FiMonitor className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 leading-tight">Doctor Consult</p>
                    <p className="text-[10px] text-gray-500 font-medium">General Physician</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-[#fd5800] transition-colors px-2">
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[210px] relative">
              <button className="absolute top-5 right-5 text-gray-300 hover:text-gray-500 transition-colors">
                <FiMaximize2 className="w-4 h-4" />
              </button>
              <div>
                <h4 className="text-[15px] font-bold text-gray-900">Health Activity</h4>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-heading text-[28px] font-bold text-gray-900 leading-none">4 Days</span>
                  <p className="text-[10px] text-gray-400 font-medium leading-tight w-12">Active this week</p>
                </div>
              </div>
              <div className="flex items-end justify-between h-20 pt-2 px-1 relative">
                {weeklyProgress.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 relative">
                    {item.active && (
                      <div className="absolute -top-8 bg-[#5301ab] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap z-10">
                        10,245 steps
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#5301ab] rotate-45"></div>
                      </div>
                    )}
                    <div className="w-1.5 h-[55px] flex items-end">
                      <div className={`w-full rounded-full transition-all duration-500 ${item.active ? 'bg-[#5301ab] shadow-sm' : 'bg-gray-200'}`} style={{ height: `${item.hrs}%` }}></div>
                    </div>
                    <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-[#fd5800]' : 'bg-transparent'}`}></div>
                    <span className={`text-[10px] font-bold ${item.active ? 'text-gray-900' : 'text-gray-400'}`}>{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[210px] relative">
              <button className="absolute top-5 right-5 text-gray-300 hover:text-gray-500 transition-colors">
                <FiMaximize2 className="w-4 h-4" />
              </button>
              <h4 className="text-[15px] font-bold text-gray-900">My Health Score</h4>
              <div className="flex items-center justify-center flex-1 mt-2">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-gray-100" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <svg className="w-[85%] h-[85%] transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                    <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-[#5301ab]" strokeDasharray="82, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute text-center mt-1">
                    <p className="text-[19px] font-bold text-gray-900 font-heading leading-tight">82/100</p>
                    <p className="text-[9px] font-semibold text-gray-400 mt-0.5">Health Score</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-1">
                <button className="text-gray-400 hover:text-[#5301ab] transition-colors"><FiPlay className="w-4 h-4" /></button>
                <button className="text-gray-400 hover:text-[#5301ab] transition-colors"><FiPause className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] space-y-6 min-h-[220px]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">August</span>
              <span className="text-[14px] font-bold text-gray-900">September 2026</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">October</span>
            </div>

            <div className="flex justify-between items-center text-center px-4">
              {['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21'].map((day, idx) => (
                <div key={idx} className={`flex flex-col items-center justify-center w-12 h-14 rounded-2xl ${idx === 2 ? 'bg-[#5301ab] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 cursor-pointer'}`}>
                  <p className={`text-[10px] font-semibold ${idx === 2 ? 'text-white/80' : 'text-gray-400'}`}>{day.split(' ')[0]}</p>
                  <p className="text-[14px] font-bold font-heading leading-tight mt-1">{day.split(' ')[1]}</p>
                </div>
              ))}
            </div>

            <div className="relative pl-16 py-2">
              <div className="absolute left-[3.5rem] top-0 bottom-0 w-[1.5px] bg-gray-100"></div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-[11px] font-semibold text-gray-400">
                <span>9:00 am</span><span>10:00 am</span><span>11:00 am</span><span>12:00 pm</span>
              </div>

              <div className="relative z-10 space-y-4">
                {scheduleEvents.map((event) => (
                  <div 
                    key={event.id}
                    className={`relative ${event.type === 'session' ? 'bg-[#fd5800] rounded-[1.25rem] p-3.5 flex justify-between items-center shadow-md w-full text-white' : 'flex items-center gap-4 group'}`}
                  >
                    {event.type === 'team' && (
                       <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-200"></div>
                    )}
                    
                    <div className={event.type === 'team' ? "flex-1 flex justify-between items-center pr-4" : ""}>
                      <div>
                        <p className={`text-[13px] font-bold ${event.type === 'team' ? 'text-gray-900 group-hover:text-[#5301ab] transition-colors' : ''}`}>{event.title}</p>
                        <p className={`text-[11px] font-medium mt-0.5 ${event.type === 'team' ? 'text-gray-400' : 'text-white/80'}`}>{event.desc}</p>
                      </div>
                      {event.images && (
                        <div className="flex -space-x-2">
                          {event.images.map((img, idx) => (
                            <img key={idx} className={`w-7 h-7 rounded-full ring-2 ${event.type === 'team' ? 'ring-white' : 'ring-[#fd5800]'}`} src={img} alt="" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-5">

          <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] space-y-4 h-[120px] flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <h4 className="text-[15px] font-bold text-gray-900">Benefits Usage</h4>
              <span className="font-heading text-[18px] font-bold text-gray-900">66%</span>
            </div>
            <div className="flex gap-1.5 h-6 rounded-lg overflow-hidden">
              <div className="bg-[#5301ab] h-full" style={{ width: '66%' }}></div>
              <div className="bg-gray-100 h-full flex-1"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-gray-400">
              <div className="w-[66%] text-left pl-1">Used (8)</div>
              <div className="flex-1 text-right pr-1">Available (4)</div>
            </div>
          </div>

          <div className="bg-[#1c2333] text-white p-6 rounded-[2rem] shadow-xl space-y-6">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <h4 className="text-[15px] font-bold text-white">Emergency Help</h4>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">24x7 immediate assistance</p>
              </div>
              <span className="font-heading text-2xl font-bold text-[#fd5800] leading-none mt-1"><FiPhoneCall /></span>
            </div>

            <div className="space-y-5">
              {onboardingTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-4 cursor-pointer group">
                  <div className={`w-[20px] h-[20px] mt-0.5 shrink-0 rounded-md flex items-center justify-center transition-all ${task.done ? 'bg-[#fd5800]' : 'border-2 border-slate-600 bg-transparent'}`}>
                    {task.done && <FiCheck className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-[13px] font-semibold truncate ${task.done ? 'text-slate-400 line-through' : 'text-slate-100'}`}>{task.title}</p>
                      {task.done && <FiCheckCircle className="w-4 h-4 text-[#fd5800] shrink-0 ml-2" />}
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboardCom;