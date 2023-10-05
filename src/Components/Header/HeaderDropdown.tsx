import React from 'react';
import { Auth } from 'aws-amplify';
import {alertsItems, documentationItems, messagesItems } from './MenuItem';
import DocumentationDropdown from './DocumentationDropdown';
import AlertsDropdown from './AlertsDropdown';
import MessagesDropdown from './MessagesDropdowns';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { FcCancel } from 'react-icons/fc';
import { useAuth } from '../../Pages/Auth/useAuth';
import supabase from '../../auth/supabase';


const HeaderDropdowns: React.FC = () => {
  const { user } = useAuth();
  const handleLogout = async () => {
    try {
      const {error} = await supabase.auth.signOut(); 
      if (error) {
        throw error;
      }
    } catch (error) {
      window.alert('Error signing out:'+ error);
    }
  };
  return (
    <ul className="navbar-nav align-items-center ms-auto">
      <DocumentationDropdown items={documentationItems} />
      <AlertsDropdown items={alertsItems} />
      <MessagesDropdown items={messagesItems} />
      {user ? (
        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="Profile" className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" />
          </a>
          <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
            <h6 className="dropdown-header d-flex align-items-center">
              <img alt="Dropdown" className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name"> {user.user_metadata?.first_name}</div>
                <div className="dropdown-user-details-email">{user.email}</div>
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
