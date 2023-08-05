import React from 'react';
import { IconType } from 'react-icons';
import { FiActivity } from 'react-icons/fi';

interface Iprops {
  title: string;
  icon: IconType;
}

const DashboardHeader: React.FC<Iprops> = (props:Iprops) => {
  return (
    <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
      <div className="container-xl px-4">
        <div className="page-header-content pt-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mt-4">
              <h1 className="page-header-title">
                <div className="page-header-icon">
                  {<props.icon/>}
                </div>
                {props.title}
              </h1>
              <div className="page-header-subtitle">
                Overview
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
