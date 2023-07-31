// HeaderNavbar.tsx
import React from 'react';
import { FcMenu } from 'react-icons/fc';

const HeaderNavbar: React.FC = () => {
  return (
    <>
      <button title="Menu" className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
        <FcMenu/>
      </button>
      <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">Gulf Implant Center</a>
    </>
  );
};

export default HeaderNavbar;
