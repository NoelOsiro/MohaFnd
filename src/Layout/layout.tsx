// Layout.tsx
import React, { ReactNode } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import HeaderBar from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC = () => {
    return (
        <div className="dashboard-layout">
            <HeaderBar />
            <div id="layoutSidenav">

                <Sidebar />
                <Outlet/>
            </div>

        </div>
    );
};

export default Layout;
