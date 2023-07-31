import React from 'react';
import DropdownItem, {  DropdownItemProps } from './DropdownItem';

interface DocumentationDropdownProps {
  items: DropdownItemProps[];
}

const DocumentationDropdown: React.FC<DocumentationDropdownProps> = ({ items }) => {
  return (
    <li className="nav-item dropdown no-caret d-none d-md-block me-3">
      <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="fw-500">Documentation</div>
        <i className="fas fa-chevron-right dropdown-arrow"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
        {items.map((item, index) => (
          <DropdownItem key={index} title={item.title} icon={item.icon} link={item.link} content={item.content} details={item.details} />
        ))}
      </div>
    </li>
  );
};

export default DocumentationDropdown;
