import React, { useState } from 'react';

interface TabContentProps {
  ActivitiesTabContent: React.ComponentType;
  OverviewTabContent: React.ComponentType;
}

const TabDashBoard: React.FC<TabContentProps> = ({ ActivitiesTabContent, OverviewTabContent }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'activities', label: 'Activities' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header border-bottom">
            <ul className="nav nav-tabs card-header-tabs" id="dashboardNav" role="tablist">
              {tabs.map((tab) => (
                <li className="nav-item me-1" key={tab.id}>
                  <a
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    id={`${tab.id}-pill`}
                    href={`#${tab.id}`}
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabClick(tab.id)}
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
                  className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-pill`}
                  key={tab.id}
                >
                  {tab.id === 'overview' ? <OverviewTabContent /> : <ActivitiesTabContent />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabDashBoard;
