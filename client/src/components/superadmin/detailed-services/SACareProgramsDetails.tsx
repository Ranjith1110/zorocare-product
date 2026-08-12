import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiHeart, FiTrendingUp, FiUsers, FiSearch,
  FiDownload, FiEdit2, FiMoreVertical,
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

const SACareProgramsDetails: FC<Props> = ({ service }) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [isAddingProgram, setIsAddingProgram] = useState<boolean>(false);

  const [programsList, setProgramsList] = useState<Program[]>([
    { id: 1, name: 'Elder Care Program', price: '₹4,999/mo', enrollments: '980', services: 'Doctor Consults, Nursing, Vitals Monitor', img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400' },
    { id: 2, name: 'Chronic Care Program', price: '₹3,499/mo', enrollments: '840', services: 'Specialist Consults, Med Delivery, Diet Plan', img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400' },
    { id: 3, name: 'Heart Care Program', price: '₹5,999/mo', enrollments: '420', services: 'Cardiologist Consults, ECG, Rehab', img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400' },
    { id: 4, name: 'Thyroid Care Program', price: '₹1,999/mo', enrollments: '310', services: 'Endocrinologist, Blood Tests, Diet', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
    { id: 5, name: 'Mother And Toddler Program', price: '₹3,999/mo', enrollments: '650', services: 'Pediatrician, Gynaecologist, Vaccination', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400' },
    { id: 6, name: 'Diabetic Care Program', price: '₹2,499/mo', enrollments: '1,240', services: 'Diabetologist, Foot Care, Sugar Monitor', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400' },
    { id: 7, name: 'At Home Care Program', price: '₹6,499/mo', enrollments: '290', services: '24/7 Nursing, Physiotherapy, Equipment', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400' },
    { id: 8, name: 'Paediatric Care Program', price: '₹2,999/mo', enrollments: '510', services: 'Child Specialist, Nutrition, Growth Tracking', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400' },
    { id: 9, name: 'Asthma Care Program', price: '₹2,199/mo', enrollments: '380', services: 'Pulmonologist, Inhaler Setup, Triggers Plan', img: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?w=400' },
  ]);

  const detailKpis: KPI[] = [
    { title: 'Active Programs', value: programsList.length.toString(), trend: '+4%', icon: <FiList />, color: 'text-pink-600', bg: 'bg-pink-50' },
    { title: 'Enrolled Users', value: '4,210', trend: '+15%', icon: <FiUsers />, color: 'text-pink-600', bg: 'bg-pink-50' },
    { title: 'Completion Rate', value: '88%', trend: '+5%', icon: <FiCheckCircle />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Total Revenue', value: '₹3.4 Cr', trend: '+18%', icon: <FiTrendingUp />, color: 'text-purple-600', bg: 'bg-purple-50' },
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
      img: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=400'
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
            <span>1k</span><span>500</span><span>0</span>
          </div>
          <div className="absolute left-6 right-0 top-0 bottom-6">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q15,20 25,25 T50,15 T75,10 T100,5 L100,40 L0,40 Z" fill="url(#pinkGradient)" />
              <path d="M0,35 Q15,20 25,25 T50,15 T75,10 T100,5" fill="none" stroke="#ec4899" strokeWidth="1.5" />
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
            { name: 'Diabetic Care Program', val: 85, count: '1,240' },
            { name: 'Elder Care Program', val: 70, count: '980' },
            { name: 'Mother And Toddler Program', val: 55, count: '650' },
            { name: 'Heart Care Program', val: 40, count: '420' }
          ].map((prog, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-gray-700 w-40 truncate">{prog.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: `${prog.val}%` }}></div>
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
              <h3 className="font-bold text-gray-900 text-[18px]">Create New Care Program</h3>
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
                    placeholder="e.g., Cancer Care Program"
                    theme="pink"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] font-bold text-gray-700">Included Services (Comma separated) <span className="text-red-500">*</span></label>
                  <textarea required name="services" rows={2} placeholder="e.g., Doctor Consults, Nursing, Medicine Delivery..." className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all placeholder-gray-400 resize-none" />
                </div>

                <Input
                  label="Price (₹)"
                  required
                  name="price"
                  type="number"
                  placeholder="Enter amount"
                  theme="pink"
                />

                <Select
                  label="Billing Cycle"
                  name="billing"
                  options={['Monthly', 'Quarterly', 'Annually']}
                  theme="pink"
                />
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-pink-50/50 hover:border-pink-500/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <FiUploadCloud className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">Upload Program Image</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-4">High resolution image (16:9 ratio recommended)</p>
              <Button variant="secondary" className="!text-pink-600 !border-pink-200 hover:!bg-pink-50 pointer-events-none">Browse Files</Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="primary"
                className="!bg-pink-600 hover:!bg-pink-700 w-full sm:w-auto"
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
              placeholder="Search care programs..."
              theme="pink"
            />
          </div>
          <Button
            variant="primary"
            className="!bg-pink-600 hover:!bg-pink-700 w-full sm:w-auto"
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
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-[11px] font-bold text-pink-600 shadow-sm">{pkg.price}</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-bold text-gray-900 text-[15px] mb-2 leading-tight">{pkg.name}</h4>
                <p className="text-[12px] text-gray-500 flex items-start gap-1.5 mb-5 flex-1">
                  <FiActivity className="shrink-0 mt-0.5 text-pink-400" />
                  <span className="leading-relaxed">{pkg.services}</span>
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <FiUsers className="text-gray-400 w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-600">{pkg.enrollments} Enrolled</span>
                  </div>
                  <Button variant="neutral" className="!p-2 text-gray-400 hover:text-pink-600" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const mockReports: Report[] = [
    { program: 'Diabetic Care Program', active: '1,240', completed: '850', revenue: '₹48.5 L', rating: '4.8' },
    { program: 'Elder Care Program', active: '980', completed: '420', revenue: '₹55.2 L', rating: '4.9' },
    { program: 'Chronic Care Program', active: '840', completed: '310', revenue: '₹38.4 L', rating: '4.7' },
    { program: 'Mother And Toddler', active: '650', completed: '490', revenue: '₹22.1 L', rating: '4.9' },
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
              <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Care Program</th>
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
                <td className="px-5 py-4 text-[13px] font-bold text-pink-600 text-center">{r.active}</td>
                <td className="px-5 py-4 text-[13px] font-bold text-emerald-600 text-center">{r.completed}</td>
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
            <div><span className="text-[13px] text-gray-800 font-bold block">Auto-Renewal of Programs</span><span className="text-[11px] text-gray-500">Enable automatic billing cycle</span></div>
            <ToggleSwitch theme="pink" defaultChecked />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Mandatory Initial Consultation</span><span className="text-[11px] text-gray-500">Require doctor clearance first</span></div>
            <ToggleSwitch theme="pink" defaultChecked />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Send Monthly Progress Reports</span><span className="text-[11px] text-gray-500">Email updates to users automatically</span></div>
            <ToggleSwitch theme="pink" defaultChecked />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><span className="text-[13px] text-gray-800 font-bold block">Allow Plan Pausing</span><span className="text-[11px] text-gray-500">Users can pause plan for 30 days</span></div>
            <ToggleSwitch theme="pink" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="primary" className="!bg-pink-600 hover:!bg-pink-700 w-full sm:w-auto" icon={<FiCheckCircle />}>Save Settings</Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="flex gap-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-pink-100 bg-pink-50 text-pink-600`}>
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
              className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
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

export default SACareProgramsDetails;