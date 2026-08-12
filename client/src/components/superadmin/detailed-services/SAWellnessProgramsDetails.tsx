import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiHeart, FiTrendingUp, FiUsers, FiSearch,
  FiFilter, FiDownload, FiEdit2, FiMoreVertical,
  FiPlus, FiExternalLink, FiCheckCircle, FiActivity,
  FiUploadCloud, FiList, FiArrowLeft, FiArrowUpRight
} from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

import Button from '../../common/Button';
import Input from '../../common/Input';
import Select from '../../common/Select';
import ToggleSwitch from '../../common/ToggleSwitch';
import type { ServiceData } from '../SuperAdminManageServiceDetails';

interface Props {
  service: ServiceData;
}

interface KPI {
  title: string;
  value: string;
  trend: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

interface Program {
  id: number;
  name: string;
  price: string;
  enrollments: string;
  services: string;
  img: string;
}

interface Report {
  program: string;
  active: string;
  completed: string;
  revenue: string;
  rating: string;
}

const SAWellnessProgramsDetails: FC<Props> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [isAddingProgram, setIsAddingProgram] = useState<boolean>(false);

  const [programsList, setProgramsList] = useState<Program[]>([
    { id: 1, name: 'Yoga', price: '₹1,499/mo', enrollments: '1,250', services: 'Live Classes, Posture Correction, Meditations', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400' },
    { id: 2, name: 'Zumba', price: '₹1,999/mo', enrollments: '980', services: 'Group Sessions, Cardio, High Energy Routines', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400' },
    { id: 3, name: 'Nutrition', price: '₹2,499/mo', enrollments: '1,420', services: 'Personalized Diet Plans, Weekly Consults, Recipes', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400' },
    { id: 4, name: 'Mental Wellness', price: '₹2,999/mo', enrollments: '810', services: 'Therapist Consults, Mindfulness, Stress Mgmt', img: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8c73?w=400' },
    { id: 5, name: 'Woman Wellness', price: '₹1,999/mo', enrollments: '650', services: 'Hormonal Health, Fitness Routines, Nutrition', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
    { id: 6, name: 'Maternity Guidance / Wellness', price: '₹3,499/mo', enrollments: '440', services: 'Prenatal Yoga, Dieting, Lactation Consults', img: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400' },
    { id: 7, name: 'Senior Wellness', price: '₹1,999/mo', enrollments: '590', services: 'Low Impact Exercises, Joint Care, Diet', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400' },
    { id: 8, name: 'Lifetime Management', price: '₹4,999/mo', enrollments: '310', services: 'Holistic 360 Coaching, Regular Testing, 24/7 Support', img: 'https://images.unsplash.com/photo-1499540633125-484965b60031?w=400' },
  ]);

  const detailKpis: KPI[] = [
    { title: 'Active Programs', value: programsList.length.toString(), trend: '+6%', icon: <FiList />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Enrolled Users', value: '6,450', trend: '+22%', icon: <FiUsers />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Session Attendance', value: '92%', trend: '+4%', icon: <FiCheckCircle />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Total Revenue', value: '₹4.1 Cr', trend: '+19%', icon: <FiTrendingUp />, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const tabs: string[] = ['Overview', 'Programs', 'Reports', 'Settings'];

  const handleCreateProgram = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('programName') as string;
    const services = formData.get('services') as string;
    const price = formData.get('price') as string;
    const billing = formData.get('billing') as string;

    const newProgram: Program = {
      id: Date.now(),
      name: name || '',
      services: services || '',
      price: `₹${price}/${billing === 'Monthly' ? 'mo' : billing === 'Quarterly' ? 'qtr' : 'yr'}`,
      enrollments: '0',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400'
    };

    setProgramsList([newProgram, ...programsList]);
    setIsAddingProgram(false);
  };

  const RenderOverview: FC = () => (
    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/30 animate-in fade-in duration-300">
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[250px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Enrollment Growth</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">Last 6 Months <BiChevronDown /></span>
        </div>
        <div className="flex-1 relative w-full mt-2">
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-semibold">
            <span>2k</span><span>1k</span><span>0</span>
          </div>
          <div className="absolute left-6 right-0 top-0 bottom-6">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q15,20 25,25 T50,15 T75,5 T100,10 L100,40 L0,40 Z" fill="url(#emeraldGradient)" />
              <path d="M0,35 Q15,20 25,25 T50,15 T75,5 T100,10" fill="none" stroke="#10b981" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[13px] font-bold text-gray-900">Top Programs</h4>
          <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">This Month <BiChevronDown /></span>
        </div>
        <div className="flex-1 space-y-4 mt-2">
          {[
            { name: 'Nutrition', val: 90, count: '1,420' },
            { name: 'Yoga', val: 75, count: '1,250' },
            { name: 'Zumba', val: 60, count: '980' },
            { name: 'Mental Wellness', val: 45, count: '810' }
          ].map((prog, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-700 w-40 truncate">{prog.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${prog.val}%` }}></div>
              </div>
              <span className="text-[10px] font-bold text-gray-900 w-12 text-right">{prog.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const RenderPrograms: FC = () => {
    if (isAddingProgram) {
      return (
        <div className="p-6 md:p-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-6">
            <Button variant="neutral" className="!p-2" onClick={() => setIsAddingProgram(false)} icon={<FiArrowLeft className="w-4 h-4" />}>
              {null}
            </Button>
            <div>
              <h3 className="font-bold text-gray-900 text-[18px]">Create New Wellness Program</h3>
              <p className="text-[12px] text-gray-500 font-medium mt-0.5">Configure details, services, and pricing</p>
            </div>
          </div>

          <form onSubmit={handleCreateProgram} className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Input
                    label="Program Name"
                    required
                    name="programName"
                    placeholder="e.g., Mindfulness & Meditation"
                    theme="emerald"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] font-bold text-gray-700">Included Services (Comma separated) <span className="text-red-500">*</span></label>
                  <textarea required name="services" rows={2} placeholder="e.g., Live Sessions, 1-on-1 Consults, Diet Plan..." className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder-gray-400 resize-none" />
                </div>
                <Input
                  label="Price (₹)"
                  required
                  name="price"
                  type="number"
                  placeholder="Enter amount"
                  theme="emerald"
                />
                <Select
                  label="Billing Cycle"
                  name="billing"
                  options={['Monthly', 'Quarterly', 'Annually']}
                  theme="emerald"
                />
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-emerald-50/50 hover:border-emerald-500/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <FiUploadCloud className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">Upload Program Image</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-4">High resolution image (16:9 ratio recommended)</p>
              <Button variant="secondary" className="!text-emerald-600 !border-emerald-200 hover:!bg-emerald-50 pointer-events-none">Browse Files</Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="primary"
                className="!bg-emerald-600 hover:!bg-emerald-700 w-full sm:w-auto"
                icon={<FiCheckCircle />}
              >
                Submit & Create Program
              </Button>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="p-6 animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="w-full sm:w-80">
            <Input
              iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
              placeholder="Search wellness programs..."
              theme="emerald"
            />
          </div>
          <Button
            variant="primary"
            className="!bg-emerald-600 hover:!bg-emerald-700 w-full sm:w-auto"
            icon={<FiPlus />}
            onClick={() => setIsAddingProgram(true)}
          >
            Add Program
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsList.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-40 bg-gray-200 relative overflow-hidden shrink-0">
                <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-600 shadow-sm">{pkg.price}</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-bold text-gray-900 text-[15px] mb-2 leading-tight">{pkg.name}</h4>
                <p className="text-[12px] text-gray-500 flex items-start gap-1.5 mb-5 flex-1">
                  <FiActivity className="shrink-0 mt-0.5 text-emerald-400" />
                  <span className="leading-relaxed">{pkg.services}</span>
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <FiUsers className="text-gray-400 w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-600">{pkg.enrollments} Enrolled</span>
                  </div>
                  <Button variant="neutral" className="!p-2 text-gray-400 hover:text-emerald-600" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const mockReports: Report[] = [
    { program: 'Nutrition', active: '1,420', completed: '1,100', revenue: '₹62.5 L', rating: '4.9' },
    { program: 'Yoga', active: '1,250', completed: '890', revenue: '₹48.2 L', rating: '4.8' },
    { program: 'Zumba', active: '980', completed: '610', revenue: '₹35.4 L', rating: '4.7' },
    { program: 'Mental Wellness', active: '810', completed: '590', revenue: '₹28.1 L', rating: '4.9' },
  ];

  const RenderReports: FC = () => (
    <div className="p-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-gray-900 text-[15px]">Program Performance Report</h3>
        <Button variant="neutral" icon={<FiDownload />}>Export Report</Button>
      </div>
      <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full text-left border-collapse min-w-[750px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Wellness Program</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Active Enrollments</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Successfully Completed</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Revenue Generated</th>
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Avg Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockReports.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4 text-[13px] font-bold text-gray-900">{r.program}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-emerald-600 text-center">{r.active}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-blue-600 text-center">{r.completed}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-gray-800">{r.revenue}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-orange-500 text-center">★ {r.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const RenderSettings: FC = () => (
    <div className="p-6 md:p-8 animate-in fade-in duration-300 space-y-8 max-w-4xl">
      <div>
        <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Program Management Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Require Health Assessment</span><span className="text-[11px] text-gray-500">Mandatory before joining</span></div>
            <ToggleSwitch defaultChecked theme="emerald" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Flexible Session Scheduling</span><span className="text-[11px] text-gray-500">Users can pick their batch</span></div>
            <ToggleSwitch defaultChecked theme="emerald" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Enable Group Classes</span><span className="text-[11px] text-gray-500">Allow up to 50 users per session</span></div>
            <ToggleSwitch defaultChecked theme="emerald" />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Weekly Wellness Reminders</span><span className="text-[11px] text-gray-500">Send push notifications to users</span></div>
            <ToggleSwitch defaultChecked theme="emerald" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="primary" className="!bg-emerald-600 hover:!bg-emerald-700" icon={<FiCheckCircle />}>Save Settings</Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="flex gap-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-emerald-100 bg-emerald-50 text-emerald-600`}>
            <FiHeart className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-heading text-[22px] font-bold text-gray-900">{service.name}</h2>
              <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide">Active</span>
            </div>
            <p className="text-[13px] text-gray-500 font-medium">{service.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="neutral" icon={<FiExternalLink className="w-4 h-4" />}>View Care Portal</Button>
          <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiMoreVertical className="w-5 h-5" />}>{null}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border-b border-gray-100">
        {detailKpis.map((kpi, idx) => (
          <div key={idx} className="p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
              {React.cloneElement(kpi.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-500 mb-0.5">{kpi.title}</p>
              <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
              <p className="text-[11px] font-bold text-emerald-500 flex items-center mt-1">
                <FiArrowUpRight className="w-3 h-3 mr-0.5" /> {kpi.trend} <span className="text-gray-400 font-medium ml-1">vs last month</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-8 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsAddingProgram(false);
              }}
              className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 'Overview' && <RenderOverview />}
        {activeTab === 'Programs' && <RenderPrograms />}
        {activeTab === 'Reports' && <RenderReports />}
        {activeTab === 'Settings' && <RenderSettings />}
      </div>
    </div>
  );
};

export default SAWellnessProgramsDetails;