import React from 'react';
import DropdownItem, {  DropdownItemProps } from './DropdownItem';
import { FiMail } from 'react-icons/fi';

interface MessagesDropdownProps {
  items: DropdownItemProps[];
}

const MessagesDropdown: React.FC<MessagesDropdownProps> = ({ items }) => {
  return (
    <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
      <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <FiMail />
      </a>
      <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
        <h6 className="dropdown-header dropdown-notifications-header">
          <i className="me-2" data-feather="mail"></i>
          Message Center
        </h6>
        {items.map((item, index) => (
          <DropdownItem key={index} title={item.title} icon={item.icon} link={item.link} content={item.content} details={item.details} />
        ))}
        <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
      </div>
    </li>
  );
};

export default MessagesDropdown;
