// Layout.tsx
import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import HeaderBar from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Layout: React.FC = () => {
    return (
        <div className="dashboard-layout">
            <HeaderBar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
