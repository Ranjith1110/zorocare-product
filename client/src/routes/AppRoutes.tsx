import type { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SuperAdminLayout from '../layouts/SuperAdminLayout';

{/* Super Admin Routes */ }
import SuperAdminDashbaord from '../pages/superadmin/SuperAdminDashbaord';
import SuperAdminAdministration from '../pages/superadmin/SuperAdminAdministration';
import SuperAdminInsuranceHub from '../pages/superadmin/SuperAdminInsuranceHub';
import SuperAdminCorporateHub from '../pages/superadmin/SuperAdminCorporateHub';
import SuperAdminUserHub from '../pages/superadmin/SuperAdminUserHub';
import SuperAdminMedicalCenters from '../pages/superadmin/SuperAdminMedicalCenters';
import SuperAdminServiceHub from '../pages/superadmin/SuperAdminServiceHub';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/super-admin/dashboard" replace />} />

      {/* Super Admin Routes */}
      <Route path="/super-admin" element={<SuperAdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<SuperAdminDashbaord />} />
        <Route path="administration" element={<SuperAdminAdministration />} />
        <Route path="insurance-hub" element={<SuperAdminInsuranceHub />} />
        <Route path="corporate-hub" element={<SuperAdminCorporateHub />} />
        <Route path="user-hub" element={<SuperAdminUserHub />} />
        <Route path="medical-centers" element={<SuperAdminMedicalCenters />} />
        <Route path="service-hub" element={<SuperAdminServiceHub />} />
      </Route>
    </Routes>
  );
};