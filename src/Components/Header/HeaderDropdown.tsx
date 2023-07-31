import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser,  CognitoUserSession } from 'amazon-cognito-identity-js';
import {alertsItems, documentationItems, messagesItems } from './MenuItem';
import { Rings } from 'react-loader-spinner';
import DocumentationDropdown from './DocumentationDropdown';
import AlertsDropdown from './AlertsDropdown';
import MessagesDropdown from './MessagesDropdowns';
import { FiSettings, FiLogOut } from 'react-icons/fi';

const HeaderDropdowns: React.FC = () => {
  const [userDetails, setUserDetails] = useState<CognitoUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserDetails(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const getFirstName = (session: CognitoUserSession | null) => {
    return session?.getIdToken()?.payload?.first_name || '';
  };

  const getLastName = (session: CognitoUserSession | null) => {
    return session?.getIdToken()?.payload?.family_name || '';
  };
  const getEmail = (session: CognitoUserSession | null) => {
    return session?.getIdToken()?.payload?.email || '';
  };

  return (
    <ul className="navbar-nav align-items-center ms-auto">
      {/* Documentation Dropdown */}
      <DocumentationDropdown items={documentationItems} />

      {/* Navbar Search Dropdown */}
      {/* ... */}

      {/* Alerts Dropdown */}
      <AlertsDropdown items={alertsItems} />

      {/* Messages Dropdown */}
      <MessagesDropdown items={messagesItems} />

      {/* User Dropdown */}
      {isLoading ? (
        <li className="nav-item">
          <Rings color="#000000" height={30} width={30} />
        </li>
      ) : userDetails ? (
        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="Profile" className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" />
          </a>
          <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
            <h6 className="dropdown-header d-flex align-items-center">
              <img alt="Dropdown" className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name"> {`${getFirstName(userDetails?.getSignInUserSession())} ${getLastName(userDetails?.getSignInUserSession())}`}</div>
                <div className="dropdown-user-details-email">{`${getEmail(userDetails?.getSignInUserSession())}`}</div>
              </div>
            </h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon"><FiSettings /></div>
              Account
            </a>
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon"><FiLogOut /></div>
              Logout
            </a>
          </div>
        </li>
      ) : (
        <li className="nav-item">User details not available.</li>
      )}
    </ul>
  );
};

export default HeaderDropdowns;
