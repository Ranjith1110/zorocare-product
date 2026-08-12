import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiGrid, FiShield, FiUsers, FiCalendar, FiTrendingUp,
  FiSearch, FiList, FiActivity, FiShoppingBag, FiClipboard, FiHeart, FiTruck, FiGlobe,
  FiSmile, FiEye, FiChevronRight, FiArrowUpRight, FiArrowRight, FiArrowLeft
} from 'react-icons/fi';

import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';

import SuperAdminManageServiceDetails from './SuperAdminManageServiceDetails';

interface KPI {
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

interface CatalogService {
  id: number;
  name: string;
  desc: string;
  status: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

interface RecentService {
  name: string;
  date: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

const SuperAdminServiceHubCom: FC = () => {
  const [viewMode, setViewMode] = useState<'catalog' | 'manage'>('catalog');
  const [viewStyle, setViewStyle] = useState<'grid' | 'list'>('grid');
  const [activeService, setActiveService] = useState<CatalogService | null>(null);

  const topKpis: KPI[] = [
    { title: 'Total Services', value: '13', subtitle: 'All configured services', icon: <FiGrid className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Services', value: '11', subtitle: '85% of total services', icon: <FiShield className="w-5 h-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Partners Onboarded', value: '282', subtitle: 'Across all services', icon: <FiUsers className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Total Transactions (This Month)', value: '26,070', subtitle: 'vs last month', trend: '+16%', icon: <FiCalendar className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Total Revenue (This Month)', value: '₹2.10 Cr', subtitle: 'vs last month', trend: '+14%', icon: <FiTrendingUp className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const catalogServices: CatalogService[] = [
    { id: 1, name: 'Instant Doctor Consultation', desc: 'Connect with qualified doctors instantly via chat, voice or video.', status: 'Active', stat1Label: 'Doctors', stat1Value: '48', stat2Label: 'Consultations', stat2Value: '3,285', icon: <FiActivity className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 2, name: 'Order Medicine', desc: 'Order medicines online and get them delivered to your doorstep.', status: 'Active', stat1Label: 'Medical Stores', stat1Value: '65', stat2Label: 'Orders', stat2Value: '5,842', icon: <FiShoppingBag className="w-6 h-6" />, color: 'text-pink-500', bg: 'bg-pink-50' },
    { id: 3, name: 'Health Checkup Booking', desc: 'Book lab tests and health checkup packages easily.', status: 'Active', stat1Label: 'Lab Partners', stat1Value: '28', stat2Label: 'Bookings', stat2Value: '7,845', icon: <FiClipboard className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 4, name: 'Care Programs', desc: 'Chronic care management programs for better health outcomes.', status: 'Active', stat1Label: 'Active Programs', stat1Value: '28', stat2Label: 'Enrolled Users', stat2Value: '4,210', icon: <FiHeart className="w-6 h-6" />, color: 'text-pink-500', bg: 'bg-pink-50' },
    { id: 5, name: 'Wellness Programs', desc: 'Yoga, nutrition, fitness and mental wellness programs.', status: 'Active', stat1Label: 'Active Programs', stat1Value: '18', stat2Label: 'Enrolled Users', stat2Value: '5,612', icon: <FiHeart className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { id: 6, name: 'Ambulance Services', desc: '24x7 emergency ambulance services at your fingertips.', status: 'Active', stat1Label: 'Ambulance Partners', stat1Value: '36', stat2Label: 'Requests', stat2Value: '1,245', icon: <FiTruck className="w-6 h-6" />, color: 'text-red-500', bg: 'bg-red-50' },
    { id: 7, name: 'NRI Services', desc: 'Specialized services for NRIs and their families.', status: 'Active', stat1Label: 'Active Partners', stat1Value: '12', stat2Label: 'Users', stat2Value: '842', icon: <FiGlobe className="w-6 h-6" />, color: 'text-teal-500', bg: 'bg-teal-50' },
    { id: 8, name: 'Dental Services', desc: 'Dental consultations, treatments and oral care.', status: 'Active', stat1Label: 'Dental Partners', stat1Value: '24', stat2Label: 'Appointments', stat2Value: '1,532', icon: <FiSmile className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 9, name: 'Eye Care Services', desc: 'Eye checkups, consultations and treatments.', status: 'Active', stat1Label: 'Eye Care Partners', stat1Value: '22', stat2Label: 'Appointments', stat2Value: '1,285', icon: <FiEye className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 10, name: 'Optical Services', desc: 'Spectacles, contact lenses, and comprehensive vision care products.', status: 'Active', stat1Label: 'Optical Stores', stat1Value: '34', stat2Label: 'Orders', stat2Value: '1,420', icon: <FiEye className="w-6 h-6" />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const recentServices: RecentService[] = [
    { name: 'Optical Services', date: '15 May 2024', icon: <FiEye className="w-5 h-5" />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { name: 'Instant Doctor Consultation', date: '12 May 2024', icon: <FiActivity className="w-5 h-5" />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Order Medicine', date: '10 May 2024', icon: <FiShoppingBag className="w-5 h-5" />, color: 'text-pink-500', bg: 'bg-pink-50' },
    { name: 'Health Checkup Booking', date: '08 May 2024', icon: <FiClipboard className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  const handleManageClick = (service: CatalogService) => {
    setActiveService(service);
    setViewMode('manage');
  };

  const handleCancel = () => {
    setViewMode('catalog');
    setActiveService(null);
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Service Management</h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Manage all platform services, partners, configurations and operations</p>
        </div>
        {viewMode !== 'catalog' && (
          <Button variant="neutral" onClick={handleCancel} className="w-full sm:w-auto shrink-0" icon={<FiArrowLeft className="w-4 h-4" />}>
            Back to Catalog
          </Button>
        )}
      </div>

      {viewMode === 'catalog' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 animate-in fade-in slide-in-from-top-4 duration-500">
          {topKpis.map((kpi, idx) => (
            <div key={idx} className="bg-white p-4 xl:p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-center hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
                  {kpi.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 mb-0.5">{kpi.title}</p>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
                  <div className="flex items-center gap-1 mt-1.5">
                    {kpi.trend && (
                      <span className="text-[10px] font-bold text-emerald-500 flex items-center">
                        <FiArrowUpRight className="w-3 h-3 mr-0.5" /> {kpi.trend}
                      </span>
                    )}
                    <p className="text-[10px] font-medium text-gray-400">{kpi.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'catalog' && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="xl:col-span-9 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-[16px]">Service Catalog</h3>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="w-full sm:w-[240px]">
                  <Input
                    iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                    placeholder="Search service..."
                    theme="purple"
                  />
                </div>
                <div className="w-full sm:w-[140px]">
                  <Select
                    options={['All Status', 'Active', 'Inactive']}
                    theme="purple"
                  />
                </div>
                <div className="w-full sm:w-[140px]">
                  <Select
                    options={['Sort By', 'Newest', 'Popular', 'Name A-Z']}
                    theme="purple"
                  />
                </div>

                <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden shrink-0 h-[42px]">
                  <Button
                    onClick={() => setViewStyle('grid')}
                    variant="neutral"
                    className={`!rounded-none !border-y-0 !border-l-0 border-r !border-gray-200 !shadow-none !h-full !px-3 ${viewStyle === 'grid' ? '!bg-gray-50 text-gray-800' : '!bg-transparent text-gray-400 hover:!bg-gray-50'}`}
                    icon={<FiGrid className="w-4 h-4" />}
                  >{null}</Button>
                  <Button
                    onClick={() => setViewStyle('list')}
                    variant="neutral"
                    className={`!rounded-none !border-none !shadow-none !h-full !px-3 ${viewStyle === 'list' ? '!bg-gray-50 text-gray-800' : '!bg-transparent text-gray-400 hover:!bg-gray-50'}`}
                    icon={<FiList className="w-4 h-4" />}
                  >{null}</Button>
                </div>
              </div>
            </div>

            <div className={viewStyle === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" : "space-y-4"}>
              {catalogServices.map((service) => (
                viewStyle === 'grid' ? (
                  <div key={service.id} className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-5 flex flex-col h-full hover:shadow-md transition-shadow group">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${service.bg} ${service.color}`}>{service.icon}</div>
                      <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide">{service.status}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-[15px] leading-tight mb-1.5">{service.name}</h4>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed mb-5 flex-1">{service.desc}</p>
                    <Button variant="secondary" onClick={() => handleManageClick(service)} className="w-full !border-gray-100 hover:!border-[#5301ab]/30 !bg-transparent hover:!bg-[#5301ab]/5 !shadow-none">
                      Manage Service <FiChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div key={service.id} className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-4 flex flex-col md:flex-row md:items-center gap-5 hover:shadow-md transition-shadow group">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${service.bg} ${service.color}`}>{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-gray-900 text-[15px]">{service.name}</h4>
                        <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[9px] font-bold tracking-wide">{service.status}</span>
                      </div>
                      <p className="text-[12px] text-gray-500 font-medium">{service.desc}</p>
                    </div>
                    <div className="flex items-center gap-6 md:border-l md:border-gray-100 md:pl-6 w-full md:w-auto">
                      <div className="flex-1 md:flex-none md:w-24">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 truncate">{service.stat1Label}</p>
                        <p className="font-bold text-gray-900 text-[14px]">{service.stat1Value}</p>
                      </div>
                      <div className="flex-1 md:flex-none md:w-36">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 truncate">{service.stat2Label}</p>
                        <p className="font-bold text-gray-900 text-[14px]">{service.stat2Value}</p>
                      </div>
                    </div>
                    <Button variant="secondary" onClick={() => handleManageClick(service)} className="w-full md:w-auto shrink-0 !border-gray-100 hover:!border-[#5301ab]/30 !bg-transparent hover:!bg-[#5301ab]/5 !shadow-none">
                      Manage <FiChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="xl:col-span-3 space-y-5">
            <h3 className="font-bold text-gray-900 text-[16px] mb-4">Recently Updated Services</h3>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-5 flex flex-col h-full">
              <div className="space-y-6 flex-1">
                {recentServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 group cursor-pointer">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${service.bg} ${service.color}`}>{service.icon}</div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex justify-between items-start">
                        <p className="text-[13px] font-bold text-gray-900 truncate group-hover:text-[#5301ab] transition-colors">{service.name}</p>
                      </div>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">Updated on {service.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="w-full mt-6 !border-gray-100 !bg-transparent hover:!bg-[#5301ab]/5 !shadow-none">
                View All Services <FiArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {viewMode === 'manage' && activeService && (
        <SuperAdminManageServiceDetails service={activeService} />
      )}

    </div>
  );
};

export default SuperAdminServiceHubCom;