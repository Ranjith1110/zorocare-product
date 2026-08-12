import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import SuperAdminNavbar from '../components/superadmin/SuperAdminNavbar';

interface SuperAdminLayoutProps {
    children?: ReactNode;
}

const SuperAdminLayout: FC<SuperAdminLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full relative flex flex-col bg-[#eef1f6]">
            <div className="mx-auto w-full max-w-[1600px] relative z-10 flex flex-col min-h-screen">
                
                <SuperAdminNavbar />

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    {children || <Outlet />}
                </main>
                
            </div>
        </div>
    );
};

export default SuperAdminLayout;