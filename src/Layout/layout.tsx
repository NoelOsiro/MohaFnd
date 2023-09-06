import React, { ReactNode, useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import HeaderBar from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { useAuth0 } from "@auth0/auth0-react";
interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [bodyClass, setBodyClass] = useState('');
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    
    useEffect(() => {
        document.body.className = bodyClass;
        return () => {
            document.body.className = '';
        };
    }, [bodyClass]);
  useEffect(() => {
    const storeTokenInLocalStorage = async () => {
      if (isAuthenticated) {
        try {
          // Obtain the Auth0 access token
          const accessToken = await getAccessTokenSilently();
          localStorage.setItem('accessToken', accessToken);
        } catch (error) {
          console.error('Error storing access token:', error);
        }
      }
    };

    // Call the function to store the token when the component mounts
    storeTokenInLocalStorage();
  }, [isAuthenticated, getAccessTokenSilently]);

    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
        setBodyClass((prevClass) => (prevClass === 'nav-fixed' ? 'nav-fixed sidenav-toggled' : 'nav-fixed'));
    };
    return (
            <div className="dashboard-layout">
                <HeaderBar toggleSidebar={toggleSidebar} />
                <div id="layoutSidenav">
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                    <div id="layoutSidenav_content">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>

    );
};

export default Layout;
