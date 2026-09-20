import type { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

// Layouts
import SuperAdminLayout from '../layouts/SuperAdminLayout';
import AdminLayout from '../layouts/AdminLayout';
import UserLayout from '../layouts/UserLayout';
import InsuranceLayout from '../layouts/InsuranceLayout';
import CorporateLayout from '../layouts/CorporateLayout';

// Auth Pages
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import AdminLogin from '../pages/auth/AdminLogin';
import CommonLogin from '../pages/auth/CommonLogin';

// Super Admin Pages
import SuperAdminDashbaord from '../pages/superadmin/SuperAdminDashbaord';
import SuperAdminAdministration from '../pages/superadmin/SuperAdminAdministration';
import SuperAdminInsuranceHub from '../pages/superadmin/SuperAdminInsuranceHub';
import SuperAdminCorporateHub from '../pages/superadmin/SuperAdminCorporateHub';
import SuperAdminUserHub from '../pages/superadmin/SuperAdminUserHub';
import SuperAdminMedicalCenters from '../pages/superadmin/SuperAdminMedicalCenters';
import SuperAdminServiceHub from '../pages/superadmin/SuperAdminServiceHub';

// Admin Pages
import AdminDashbaord from '../pages/admin/AdminDashbaord';
import AdminInsuranceHub from '../pages/admin/AdminInsuranceHub';
import AdminCorporateHub from '../pages/admin/AdminCorporateHub';
import AdminUserHub from '../pages/admin/AdminUserHub';
import AdminMedicalCenters from '../pages/admin/AdminMedicalCenters';
import AdminServiceHub from '../pages/admin/AdminServiceHub';

// User Pages
import UserDashboard from '../pages/user/UserDashboard';
import UserMyBenefits from '../pages/user/UserMyBenefits';
import UserServices from '../pages/user/UserServices';
import UserMyHealth from '../pages/user/UserMyHealth';
import UserBookings from '../pages/user/UserBookings';
import UserHistory from '../pages/user/UserHistory';

// Insurance Pages
import InsuranceDasboard from '../pages/insurance/InsuranceDasboard';
import InsuranceCorporateManagement from '../pages/insurance/InsuranceCorporateManagement';
import InsuranceUserManagement from '../pages/insurance/InsuranceUserManagement';
import InsuranceSponsoredServices from '../pages/insurance/InsuranceSponsoredServices';
import InsuranceHealthcheckups from '../pages/insurance/InsuranceHealthcheckups';
import InsuranceOtherServices from '../pages/insurance/InsuranceOtherServices';
import InsuranceHistory from '../pages/insurance/InsuranceHistory';

// Corporate Pages
import CorporateDashboard from '../pages/corporate/CorporateDashboard';
import CorporateUserManagement from '../pages/corporate/CorporateUserManagement';
import CorporateSponsoredServices from '../pages/corporate/CorporateSponsoredServices';
import CorporateHealthcheckups from '../pages/corporate/CorporateHealthcheckups';
import CorporateOtherServices from '../pages/corporate/CorporateOtherServices';
import CorporateHistory from '../pages/corporate/CorporateHistory';

// Website Pages
import Index from '../pages/website/Index';
import About from '../pages/website/About';
import FamilyCare from '../pages/website/FamilyCare';
import SmartRing from '../pages/website/SmartRing';
import Packages from '../pages/website/Package';
import Contact from '../pages/website/Contact';
import Service from '../pages/website/Service';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Public Website Route */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/family-care" element={<FamilyCare />} />
      <Route path="/smart-ring" element={<SmartRing />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/contact" element={<Contact />} />

      {/* Smart Dashboard Redirector based on authentication status across all roles */}
      <Route
        path="/dashboard"
        element={
          localStorage.getItem('superadmin_auth') === 'true' ? <Navigate to="/super-admin/dashboard" replace /> :
            localStorage.getItem('admin_auth') === 'true' ? <Navigate to="/admin/dashboard" replace /> :
              localStorage.getItem('insurance_auth') === 'true' ? <Navigate to="/insurance/dashboard" replace /> :
                localStorage.getItem('corporate_auth') === 'true' ? <Navigate to="/corporate/dashboard" replace /> :
                  localStorage.getItem('user_auth') === 'true' ? <Navigate to="/user/dashboard" replace /> :
                    <Navigate to="/login" replace />
        }
      />

      {/* Public Login Routes */}
      <Route path="/login" element={<CommonLogin />} />
      <Route path="/super-admin-login" element={<SuperAdminLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Protected Super Admin Routes */}
      <Route
        path="/super-admin"
        element={
          <ProtectedRoute authKey="superadmin_auth" redirectTo="/super-admin-login">
            <SuperAdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SuperAdminDashbaord />} />
        <Route path="administration" element={<SuperAdminAdministration />} />
        <Route path="insurance-hub" element={<SuperAdminInsuranceHub />} />
        <Route path="corporate-hub" element={<SuperAdminCorporateHub />} />
        <Route path="user-hub" element={<SuperAdminUserHub />} />
        <Route path="medical-centers" element={<SuperAdminMedicalCenters />} />
        <Route path="service-hub" element={<SuperAdminServiceHub />} />
      </Route>

      {/* Protected Admin Routes (No Administration Tab) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute authKey="admin_auth" redirectTo="/admin-login">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashbaord />} />
        <Route path="insurance-hub" element={<AdminInsuranceHub />} />
        <Route path="corporate-hub" element={<AdminCorporateHub />} />
        <Route path="user-hub" element={<AdminUserHub />} />
        <Route path="medical-centers" element={<AdminMedicalCenters />} />
        <Route path="service-hub" element={<AdminServiceHub />} />
      </Route>

      {/* Protected User Routes */}
      <Route
        path="/user"
        element={
          <ProtectedRoute authKey="user_auth" redirectTo="/login">
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="benefits" element={<UserMyBenefits />} />
        <Route path="services" element={<UserServices />} />
        <Route path="health" element={<UserMyHealth />} />
        <Route path="bookings" element={<UserBookings />} />
        <Route path="history" element={<UserHistory />} />
      </Route>

      {/* Protected Insurance Broker Routes */}
      <Route
        path="/insurance"
        element={
          <ProtectedRoute authKey="insurance_auth" redirectTo="/login">
            <InsuranceLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<InsuranceDasboard />} />
        <Route path="corporate-management" element={<InsuranceCorporateManagement />} />
        <Route path="user-management" element={<InsuranceUserManagement />} />
        <Route path="sponsored-services" element={<InsuranceSponsoredServices />} />
        <Route path="healthcheckups" element={<InsuranceHealthcheckups />} />
        <Route path="other-services" element={<InsuranceOtherServices />} />
        <Route path="history" element={<InsuranceHistory />} />
      </Route>

      {/* Protected Corporate Dashboard Routes */}
      <Route
        path="/corporate"
        element={
          <ProtectedRoute authKey="corporate_auth" redirectTo="/login">
            <CorporateLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<CorporateDashboard />} />
        <Route path="user-management" element={<CorporateUserManagement />} />
        <Route path="sponsored-services" element={<CorporateSponsoredServices />} />
        <Route path="healthcheckups" element={<CorporateHealthcheckups />} />
        <Route path="other-services" element={<CorporateOtherServices />} />
        <Route path="history" element={<CorporateHistory />} />
      </Route>

    </Routes>
  );
};