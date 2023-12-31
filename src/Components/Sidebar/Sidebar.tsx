import React from 'react';
import './siderbarStyles.css';
import { IconType } from 'react-icons';
import { FaAngleDown } from 'react-icons/fa';
import { accountItems, coreItems, customItems, uiToolkitItems } from './Links';
import { useAuth0 } from '@auth0/auth0-react';


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
                <span className="me-2">{<subItem.icon />}</span> {subItem.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const { user } = useAuth0();
  return (
    <div id="layoutSidenav_nav">
      <nav className='sidenav shadow-right sidenav-light'>
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
            {user ? (
              <>
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">{user.name}</div>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
