// Layout.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import HeaderBar from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [bodyClass, setBodyClass] = useState('');

    useEffect(() => {
        document.body.className = bodyClass;
        return () => {
          document.body.className = '';
        };
      }, [bodyClass]);

    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
        setBodyClass((prevClass) => (prevClass === 'nav-fixed' ? 'nav-fixed sidenav-toggled' : 'nav-fixed'));
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
