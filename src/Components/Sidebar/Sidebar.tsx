// components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcBusinessman, FcDepartment, FcFilingCabinet, FcSettings } from 'react-icons/fc';
import './siderbarStyles.css'
import { NavbarBrand } from 'react-bootstrap';
import { HomenavigationLinks, OfficenavigationLinks } from './Links';


const Sidebar: React.FC = () => {
  

  return (
    <aside className="sidebar">
        <div className='brand'>
            <NavbarBrand>DentalArt Center</NavbarBrand>
        </div>
        <div className='sidebarTitle'>
            <FcFilingCabinet/>
            <text>Home</text>
            </div>
        <div className='sidebarDivider'></div>
        
      <ul>
        {HomenavigationLinks.map((link) => (
          <li key={link.path}>
            <NavLink  to={link.path} className="active">
              {<link.icon/>}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='sidebarTitle'>
            <FcDepartment/>
            <text>Office</text>
            </div>
        <div className='sidebarDivider'></div>
        <ul>
        {OfficenavigationLinks.map((link) => (
          <li key={link.path}>
            <NavLink  to={link.path} className="active">
              {<link.icon/>}
              <span>{link.label}</span>
            </NavLink>
          </li>
          
        ))}
      </ul>
      <div className='sidebarDivider'></div>
      <div className='d-flex'>
        <div>
            <FcBusinessman/>
        </div>
        <div>
            Username<br/>
            SignOut
        </div>
        <FcSettings/>
      </div>
    </aside>
  );
};

export default Sidebar;
