import React from 'react';
import DropdownItem, {  DropdownItemProps } from './DropdownItem';
import { FiBell } from 'react-icons/fi';

interface AlertsDropdownProps {
  items: DropdownItemProps[];
}

const AlertsDropdown: React.FC<AlertsDropdownProps> = ({ items }) => {
  return (
    <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
      <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <FiBell />
      </a>
      <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
        <h6 className="dropdown-header dropdown-notifications-header">
          <FiBell />
          Alerts Center
        </h6>
        {items.map((item, index) => (
          <DropdownItem key={index} title={item.title} icon={item.icon} link={item.link} content={item.content} details={item.details} />
        ))}
        <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
      </div>
    </li>
  );
};

export default AlertsDropdown;
