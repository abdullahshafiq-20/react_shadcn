// components/DashboardLayout.js
import { Outlet } from 'react-router-dom';
import { DashboardSidebar as Sidebar } from '@/components/dashbaord/DashboardSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-background">
        <Sidebar/>
        <main className="flex-1 overflow-auto">
            <Outlet />
        </main>
    </div>

  );
};

export default DashboardLayout;
