import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import {alertsItems, documentationItems, messagesItems } from './MenuItem';
import { Rings, Watch } from 'react-loader-spinner';
import DocumentationDropdown from './DocumentationDropdown';
import AlertsDropdown from './AlertsDropdown';
import MessagesDropdown from './MessagesDropdowns';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { FaCross, FaCrosshairs } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc';

const HeaderDropdowns: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setUser(null); 
    } catch (error) {
      window.alert('Error signing out:'+ error);
    }
  };

  return (
    <ul className="navbar-nav align-items-center ms-auto">
      <DocumentationDropdown items={documentationItems} />
      <AlertsDropdown items={alertsItems} />
      <MessagesDropdown items={messagesItems} />
      {isLoading ? (
        <li className="nav-item">
          <Watch color="#000000" height={30} width={30} radius={10} />
        </li>
      ) : user ? (
        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="Profile" className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" />
          </a>
          <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
            <h6 className="dropdown-header d-flex align-items-center">
              <img alt="Dropdown" className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name"> {user.attributes.name}</div>
                <div className="dropdown-user-details-email">{user.attributes.email}</div>
              </div>
            </h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon"><FiSettings /></div>
              Account
            </a>
            <button className="dropdown-item" onClick={handleLogout}>
              <div className="dropdown-item-icon"><FiLogOut /></div>
              Logout
            </button>
          </div>
        </li>
      ) : (
        <FcCancel size={20} className='me-2'/>
      )}
    </ul>
  );
};

export default HeaderDropdowns;
