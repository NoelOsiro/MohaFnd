// HeaderBar.tsx
import React from 'react';
import HeaderNavbar from './HeaderNavbar';
import HeaderSearch from './HeaderSearch';
import HeaderDropdowns from './HeaderDropdown';
import './Header.css';

const HeaderBar: React.FC = () => {
  return (
    <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
      <HeaderNavbar />
      <HeaderSearch />
      <HeaderDropdowns />
    </nav>
  );
};

export default HeaderBar;
