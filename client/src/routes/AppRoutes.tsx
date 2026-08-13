import type { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

// Layouts
import SuperAdminLayout from '../layouts/SuperAdminLayout';
import UserLayout from '../layouts/UserLayout';

// Super Admin Pages
import SuperAdminDashbaord from '../pages/superadmin/SuperAdminDashbaord';
import SuperAdminAdministration from '../pages/superadmin/SuperAdminAdministration';
import SuperAdminInsuranceHub from '../pages/superadmin/SuperAdminInsuranceHub';
import SuperAdminCorporateHub from '../pages/superadmin/SuperAdminCorporateHub';
import SuperAdminUserHub from '../pages/superadmin/SuperAdminUserHub';
import SuperAdminMedicalCenters from '../pages/superadmin/SuperAdminMedicalCenters';
import SuperAdminServiceHub from '../pages/superadmin/SuperAdminServiceHub';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';

// User Pages
import UserDashboard from '../pages/user/UserDashboard';
import UserMyBenefits from '../pages/user/UserMyBenefits';
import UserServices from '../pages/user/UserServices';
import UserMyHealth from '../pages/user/UserMyHealth';
import UserBookings from '../pages/user/UserBookings';
import UserHistory from '../pages/user/UserHistory';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Root Redirect based on authentication status */}
      <Route
        path="/"
        element={
          localStorage.getItem('superadmin_auth') === 'true'
            ? <Navigate to="/super-admin/dashboard" replace />
            : localStorage.getItem('user_auth') === 'true'
              ? <Navigate to="/user/dashboard" replace />
              : <Navigate to="/login" replace />
        }
      />

      {/* Public Login Route */}
      <Route path="/login" element={<SuperAdminLogin />} />

      {/* Protected Super Admin Routes */}
      <Route
        path="/super-admin"
        element={
          <ProtectedRoute authKey="superadmin_auth" redirectTo="/login">
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

      {/* Protected User Routes */}
      <Route
        path="/user"
        element={
          <UserLayout />
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

    </Routes>
  );
};