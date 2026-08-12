import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  FiUsers, FiShield, FiAward, FiUser,
  FiPlus, FiUserPlus, FiClock,
  FiSearch, FiFilter, FiDownload, FiEdit2, FiTrash2, FiMoreVertical,
  FiCheckCircle, FiActivity, FiBriefcase, FiGrid, FiFileText,
  FiArrowLeft
} from 'react-icons/fi';

import Button from '../common/Button';
import Input from '../common/Input';
import ToggleSwitch from '../common/ToggleSwitch';

interface KPI {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

interface RecentActivity {
  id: number;
  name: string;
  action: string;
  time: string;
  avatar?: string;
  initials?: string;
  bg?: string;
}

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
  modules: string;
  status: string;
  login: string;
  avatar: string;
}

const SuperAdminAdministrationCom: FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editData, setEditData] = useState<AdminUser | null>(null);

  const kpiData: KPI[] = [
    { title: 'Total Admins', value: '12', subtitle: 'All admin users', icon: <FiUsers className="w-6 h-6" />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Active Admins', value: '10', subtitle: '83% of total admins', icon: <FiShield className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Super Admins', value: '2', subtitle: 'Full access', icon: <FiAward className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Staff Admins', value: '8', subtitle: 'Limited access', icon: <FiUser className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' }
  ];

  const recentActivities: RecentActivity[] = [
    { id: 1, name: 'John Doe', action: 'created a new admin', time: '10 mins ago', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sarah Wilson', action: 'modified Clinic Management permissions', time: '1 hour ago', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Admin', action: 'disabled Claims access for staff admin', time: '3 hours ago', initials: 'AD', bg: 'bg-[#5301ab] text-white' },
    { id: 4, name: 'Michael Brown', action: 'updated role for Corporate admin', time: '5 hours ago', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: 5, name: 'System', action: 'new admin invited', time: '1 day ago', initials: 'SP', bg: 'bg-[#fd5800] text-white' },
  ];

  const adminUsers: AdminUser[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@zorocare.com', role: 'Super Admin', modules: 'All Modules', status: 'Active', login: 'Today, 09:30 AM', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah.wilson@zorocare.com', role: 'Admin', modules: 'Insurance, Corporate, Reports', status: 'Active', login: 'Today, 08:15 AM', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@zorocare.com', role: 'Staff', modules: 'Clinic, Service, Wellness', status: 'Active', login: 'Yesterday, 06:20 PM', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: 4, name: 'David Smith', email: 'david.smith@zorocare.com', role: 'Viewer', modules: 'Dashboard Only', status: 'Inactive', login: '2 days ago', avatar: 'https://i.pravatar.cc/150?img=12' },
  ];

  const handleCreateClick = () => {
    setEditData(null);
    setViewMode('create');
  };

  const handleEditClick = (user: AdminUser) => {
    setEditData(user);
    setViewMode('edit');
  };

  const handleCancel = () => {
    setViewMode('list');
    setEditData(null);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Super Admin': return 'bg-purple-100 text-[#5301ab]';
      case 'Admin': return 'bg-orange-100 text-[#fd5800]';
      case 'Staff': return 'bg-blue-100 text-blue-600';
      case 'Viewer': return 'bg-emerald-100 text-emerald-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Admin Management</h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Create and manage admin users, roles and module permissions</p>
        </div>
        {viewMode === 'list' ? (
          <Button variant="primary" onClick={handleCreateClick} icon={<FiPlus className="w-4 h-4" />}>
            Create Admin
          </Button>
        ) : (
          <Button variant="neutral" onClick={handleCancel} icon={<FiArrowLeft className="w-4 h-4" />}>
            Back to List
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${kpi.bg} ${kpi.color}`}>
              {kpi.icon}
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{kpi.title}</p>
              <h3 className="font-heading text-[22px] font-bold text-gray-900 leading-none">{kpi.value}</h3>
              <p className="text-[11px] font-medium text-gray-500 mt-1.5">{kpi.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {viewMode === 'list' && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="xl:col-span-9 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-5 lg:p-6 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Admin Users</h3>
                <p className="text-[13px] text-gray-500 font-medium">Manage and monitor all admin users</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full sm:w-[260px]">
                  <Input
                    iconLeft={<FiSearch className="w-4 h-4 text-gray-400" />}
                    placeholder="Search by name, email or role..."
                    theme="purple"
                  />
                </div>
                <Button variant="neutral" className="!py-2.5 shrink-0" icon={<FiFilter className="w-4 h-4" />}>Filter</Button>
                <Button variant="neutral" className="!p-0 w-10 h-10 shrink-0" icon={<FiDownload className="w-4 h-4" />}>{null}</Button>
              </div>
            </div>

            <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <table className="w-full text-left border-collapse min-w-[850px]">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Name</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Role</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Modules Assigned</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Last Login</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {adminUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                          <span className="text-[13px] font-bold text-gray-900">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.email}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${getRoleBadge(user.role)}`}>{user.role}</span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-600">{user.modules}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                          <span className={`text-[12px] font-bold ${user.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>{user.status}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-[12px] font-medium text-gray-500">{user.login}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2.5">
                          <Button variant="neutral" onClick={() => handleEditClick(user)} className="!p-0 w-7 h-7 text-gray-500 hover:text-[#5301ab]" icon={<FiEdit2 className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" className="!p-0 w-7 h-7 text-gray-500 hover:text-red-500" icon={<FiTrash2 className="w-3.5 h-3.5" />}>{null}</Button>
                          <Button variant="neutral" className="!p-0 w-7 h-7 !border-transparent !shadow-none !bg-transparent text-gray-400 hover:text-gray-900" icon={<FiMoreVertical className="w-4 h-4" />}>{null}</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-[13px]">
              <span className="text-gray-500 font-medium">Showing 1 to 4 of 12 results</span>
              <div className="flex items-center gap-1">
                <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-gray-700">&lt;</Button>
                <Button variant="primary" className="!p-0 w-8 h-8">1</Button>
                <Button variant="neutral" className="!p-0 w-8 h-8">2</Button>
                <Button variant="neutral" className="!p-0 w-8 h-8">3</Button>
                <Button variant="neutral" className="!p-0 w-8 h-8 text-gray-400 hover:text-gray-700">&gt;</Button>
              </div>
            </div>
          </div>

          <div className="xl:col-span-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4 mb-5">
              <FiClock className="w-5 h-5 text-[#5301ab]" />
              <h3 className="font-bold text-gray-900">Recent Activities</h3>
            </div>
            <div className="flex-1 space-y-6">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 group">
                  {activity.avatar ? (
                    <img src={activity.avatar} alt={activity.name} className="w-9 h-9 rounded-full object-cover shrink-0 ring-2 ring-transparent group-hover:ring-[#5301ab]/20 transition-all" />
                  ) : (
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-[11px] tracking-wider ${activity.bg}`}>
                      {activity.initials}
                    </div>
                  )}
                  <div>
                    <p className="text-[13px] text-gray-600 leading-tight">
                      <span className="font-bold text-gray-900">{activity.name}</span> {activity.action}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="w-full mt-6 !border-[#5301ab]/10 !bg-[#5301ab]/5 hover:!bg-[#5301ab]/10 !text-[#5301ab] !shadow-none">
              View All Activities
            </Button>
          </div>
        </div>
      )}

      {(viewMode === 'create' || viewMode === 'edit') && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="xl:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
              {viewMode === 'edit' ? <FiEdit2 className="w-5 h-5 text-[#5301ab]" /> : <FiUserPlus className="w-5 h-5 text-[#5301ab]" />}
              <h3 className="font-bold text-gray-900 text-[16px]">
                {viewMode === 'edit' ? 'Edit Admin Details' : 'Create New Admin'}
              </h3>
            </div>

            <form className="space-y-4">
              <Input label="Full Name" defaultValue={editData?.name} placeholder="Enter full name" theme="purple" />
              <Input label="Email Address" type="email" defaultValue={editData?.email} placeholder="Enter email address" theme="purple" />

              {viewMode === 'create' && (
                <>
                  <Input
                    label="Mobile Number"
                    type="tel"
                    prefix={<><span className="text-[13px]">🇮🇳</span><span className="text-[12px] font-semibold text-gray-700">+91</span></>}
                    placeholder="Enter mobile number"
                    theme="purple"
                  />
                  <Input label="Password" type="password" placeholder="Enter password" theme="purple" />
                  <Input label="Confirm Password" type="password" placeholder="Confirm password" theme="purple" />
                </>
              )}

              {viewMode === 'edit' && (
                <Input label="Last Login (System Generated)" defaultValue={editData?.login} disabled className="opacity-70" theme="purple" />
              )}

              <div className="space-y-2.5 pt-2">
                <label className="text-[12px] font-semibold text-gray-700">Role</label>
                <div className="flex flex-wrap gap-4">
                  {['Super Admin', 'Admin', 'Staff', 'Viewer'].map((role) => (
                    <label key={role} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="role" value={role} defaultChecked={editData?.role === role || (!editData && role === 'Super Admin')} className="w-4 h-4 text-[#5301ab] focus:ring-[#5301ab] border-gray-300" />
                      <span className="text-[13px] font-medium text-gray-700">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <label className="text-[12px] font-semibold text-gray-700">Status</label>
                <div className="flex gap-4">
                  {['Active', 'Inactive'].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="status" value={status} defaultChecked={editData?.status === status || (!editData && status === 'Active')} className="w-4 h-4 text-[#5301ab] focus:ring-[#5301ab] border-gray-300" />
                      <span className="text-[13px] font-medium text-gray-700">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                <Button variant="neutral" onClick={handleCancel} className="flex-1">Cancel</Button>
                <Button variant="primary" onClick={handleCancel} className="flex-1">{viewMode === 'edit' ? 'Save Changes' : 'Create Admin'}</Button>
              </div>
            </form>
          </div>

          <div className="xl:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-50 pb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-[16px]">Assign Module Permissions</h3>
                <p className="text-[12px] text-gray-500 font-medium mt-0.5">Enable or disable modules and features for this admin</p>
              </div>
              <div className="flex items-center gap-3 text-[12px] font-semibold">
                <span className="text-gray-500">Quick Select:</span>
                <Button variant="secondary" className="!px-3 !py-1.5 !text-[12px] !border-none !shadow-none !bg-[#5301ab]/10 hover:!bg-[#5301ab]/20">All</Button>
                <Button variant="neutral" className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">None</Button>
                <Button variant="neutral" className="!px-0 !py-0 !border-none !shadow-none !bg-transparent text-gray-600 hover:text-gray-900">Default</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1">
              {/* Column 1 */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiGrid className="w-4 h-4 text-[#5301ab]" /> Dashboard</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">View Dashboard</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiShield className="w-4 h-4 text-[#5301ab]" /> Insurance Management</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Create and manage the Insurance Broker</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiBriefcase className="w-4 h-4 text-[#fd5800]" /> Corporate Management</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Create and manage the Corporate</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiFileText className="w-4 h-4 text-[#5301ab]" /> Service Hub</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">List all the Services with the Functionalities</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-[13px]"><FiActivity className="w-4 h-4 text-[#5301ab]" /> Medical Center</div>
                  <div className="space-y-3 pl-1">
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Create a Clinic</span><ToggleSwitch theme="purple" defaultChecked /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Clinic Dashboard</span><ToggleSwitch theme="purple" defaultChecked /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Bookings</span><ToggleSwitch theme="purple" defaultChecked /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Checkups</span><ToggleSwitch theme="purple" defaultChecked /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Reports</span><ToggleSwitch theme="purple" defaultChecked /></div>
                    <div className="flex items-center justify-between"><span className="text-[12px] text-gray-600 font-medium">Settings</span><ToggleSwitch theme="purple" defaultChecked /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6 mt-6 border-t border-gray-50">
              <Button variant="primary" onClick={handleCancel} icon={<FiCheckCircle className="w-4 h-4" />}>
                Save All Permissions
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminAdministrationCom;