// HeaderSearch.tsx
import React from 'react';
import { FcSearch } from 'react-icons/fc';

const HeaderSearch: React.FC = () => {
  return (
    <form className="form-inline me-auto d-none d-lg-block me-3">
      <div className="input-group input-group-joined input-group-solid">
        <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-text">
          <FcSearch/>
        </div>
      </div>
    </form>
  );
};

export default HeaderSearch;
