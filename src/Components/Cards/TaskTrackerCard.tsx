import React from 'react';

const progressItems = [
  {
    title: 'Server Setup',
    percentage: 25,
    color: 'bg-danger',
  },
  {
    title: 'Database Migration',
    percentage: 50,
    color: 'bg-warning',
  },
  {
    title: 'Version Release',
    percentage: 75,
    color: 'bg-primary',
  },
  {
    title: 'Product Listings',
    percentage: 100,
    color: 'bg-success',
  },
];

const TaskTrackerCard = () => {
  return (
    <div className="card card-header-actions mb-4">
      <div className="card-header">
        Projects
        <a className="btn btn-sm btn-primary-soft text-primary" href="#!">
          Create New
        </a>
      </div>
      <div className="card-body">
        {progressItems.map((item, index) => (
          <div key={index}>
            <div className="d-flex align-items-center justify-content-between small mb-1">
              <div className="fw-bold">{item.title}</div>
              <div className="small">{`${item.percentage}%`}</div>
            </div>
            <div className="progress mb-3">
              <div
                className={`progress-bar ${item.color}`}
                role="progressbar"
                style={{ width: `${item.percentage}%` }}
                aria-valuenow={item.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTrackerCard;
