// HeaderBar.tsx
import React from 'react';
import HeaderNavbar from './HeaderNavbar';
import HeaderSearch from './HeaderSearch';
import HeaderDropdowns from './HeaderDropdown';
import './Header.css';

interface HeaderNavbarProps {
  toggleSidebar: () => void;
}

const HeaderBar: React.FC<HeaderNavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
      <HeaderNavbar toggleSidebar={toggleSidebar} />
      <HeaderSearch />
      <HeaderDropdowns />
    </nav>
  );
};

export default HeaderBar;
