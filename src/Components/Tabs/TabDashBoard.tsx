import React from 'react';
// import { activities } from '../Tables/Activities';
// import MyDataTable from '../Tables/ActivityTable';
// import AreaChart from '../Charts/DashCharts';

const TabDashBoard = () => {
  const tabs = [
    { id: 'overview', label: 'Overview', active: true },
    { id: 'activities', label: 'Activities', active: false },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header border-bottom">
        {/* Dashboard card navigation */}
        
        <ul className="nav nav-tabs card-header-tabs" id="dashboardNav" role="tablist">
          {tabs.map((tab) => (
            <li className="nav-item me-1" key={tab.id}>
              <a
                className={`nav-link ${tab.active ? 'active' : ''}`}
                id={`${tab.id}-pill`}
                href={`#${tab.id}`}
                data-bs-toggle="tab"
                role="tab"
                aria-controls={tab.id}
                aria-selected={tab.active}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content" id="dashboardNavContent">
          {tabs.map((tab) => (
            <div
              className={`tab-pane fade ${tab.active ? 'show active' : ''}`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-pill`}
              key={tab.id}
            >
              {/* {tab.id === 'overview' ? (
                <div className="chart-area mb-4 mb-lg-0" style={{ height: '20rem' }}>
                  <AreaChart/>
                </div>
              ) : (
                <MyDataTable/>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabDashBoard;
