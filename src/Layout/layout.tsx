// Layout.tsx
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import HeaderBar from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
    };
    return (
        <div className="dashboard-layout">
            <HeaderBar toggleSidebar={toggleSidebar}/>
            <div id="layoutSidenav">
                <Sidebar isSidebarOpen={isSidebarOpen}/>
                <div id="layoutSidenav_content">
                    <Outlet />
                    <Footer />
                </div>
            </div>


        </div>
    );
};

export default Layout;
