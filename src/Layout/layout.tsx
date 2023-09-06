import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import HeaderBar from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Auth0ProviderWithNavigate from '../auth/auth0-provider-with-history';
import { useAuth0 } from "@auth0/auth0-react";

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [bodyClass, setBodyClass] = useState('');
    
    const { getAccessTokenSilently } = useAuth0();
    
    useEffect(() => {
        const getToken = async () => {
            try {
                const accessToken = await getAccessTokenSilently();
                console.log('Access Token:', accessToken);
                window.location.replace('/dashboard')
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        };

        getToken();
    }, [getAccessTokenSilently]);

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
        <Auth0ProviderWithNavigate>
            <div className="dashboard-layout">
                <HeaderBar toggleSidebar={toggleSidebar} />
                <div id="layoutSidenav">
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                    <div id="layoutSidenav_content">
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>
            </Auth0ProviderWithNavigate>

    );
};

export default Layout;
