import React, { useEffect, useState } from 'react';
import './siderbarStyles.css';
import { IconType } from 'react-icons';
import { FaAngleDown } from 'react-icons/fa';
import { accountItems, coreItems, customItems, uiToolkitItems } from './Links';
import { Auth } from 'aws-amplify';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import { Rings } from 'react-loader-spinner';

interface MenuItemProps {
  title: string;
  icon: IconType;
  subItems?: {
    title: string;
    icon: IconType;
    link: string;
  }[];
}

const SidebarItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <div>
      <a
        className={`nav-link ${props.subItems ? 'collapsed' : 'd-sm-none'}`}
        href="/"
        data-bs-toggle={props.subItems ? 'collapse' : ''}
        data-bs-target={props.subItems ? `#collapse${props.title.replace(' ', '')}` : ''}
        aria-expanded="false"
        aria-controls={props.subItems ? `collapse${props.title.replace(' ', '')}` : ''}
      >
        <div className="nav-link-icon">{React.createElement(props.icon)}</div>
        {props.title}
        {props.subItems && (
          <div className="sidenav-collapse-arrow">
            <FaAngleDown />
          </div>
        )}

      </a>
      {props.subItems && (
        <div
          className="collapse"
          id={`collapse${props.title.replace(' ', '')}`}
          data-bs-parent="#accordionSidenav"
        >
          <nav className="sidenav-menu-nested nav accordion">
            {props.subItems.map((subItem, subIndex) => (
              <a className="nav-link" key={subIndex} href={subItem.link}>
                <span className='me-2'><subItem.icon /></span> {subItem.title}</a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
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
  return (
    <div id="layoutSidenav_nav">
      <nav className="sidenav shadow-right sidenav-light">
        <div className="sidenav-menu">
          <div className="nav accordion" id="accordionSidenav">
            <div className="sidenav-menu-heading d-sm-none">Account</div>
            {accountItems.map((item, index) => (
              <SidebarItem key={index} title={item.title} icon={item.icon} subItems={item.subItems} />
            ))}

            <div className="sidenav-menu-heading">Main</div>
            {coreItems.map((item, index) => (
              <SidebarItem key={index} title={item.title} icon={item.icon} subItems={item.subItems} />
            ))}

            <div className="sidenav-menu-heading">Office</div>
            {customItems.map((item, index) => (
              <SidebarItem key={index} title={item.title} icon={item.icon} subItems={item.subItems} />
            ))}

            <div className="sidenav-menu-heading">Account</div>
            {uiToolkitItems.map((item, index) => (
              <SidebarItem key={index} title={item.title} icon={item.icon} subItems={item.subItems} />
            ))}
          </div>
        </div>
        <div className="sidenav-footer">
          <div className="sidenav-footer-content">
            {isLoading ? (
              <li className="nav-item">
                <Rings color="#000000" height={30} width={30} />
              </li>
            ) : userDetails ? (
              <>
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">{`${getFirstName(userDetails?.getSignInUserSession())} ${getLastName(userDetails?.getSignInUserSession())}`}</div></>
            ) : null}

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
