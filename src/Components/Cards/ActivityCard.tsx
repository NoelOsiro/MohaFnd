import React from 'react';

const timelineItems = [
  {
    time: '27 min',
    indicatorColor: 'bg-green',
    content: (
      <>
        New order placed!
        <a className="fw-bold text-dark" href="#!">
          Order #2912
        </a>
        has been successfully placed.
      </>
    ),
  },
  {
    time: '58 min',
    indicatorColor: 'bg-blue',
    content: (
      <>
        Your
        <a className="fw-bold text-dark" href="#!">
          weekly report
        </a>
        has been generated and is ready to view.
      </>
    ),
  },
  {
    time: '2 hrs',
    indicatorColor: 'bg-purple',
    content: (
      <>
        New user
        <a className="fw-bold text-dark" href="#!">
          Valerie Luna
        </a>
        has registered.
      </>
    ),
  },
  {
    time: '1 day',
    indicatorColor: 'bg-yellow',
    content: 'Server activity monitor alert',
  },
  {
    time: '1 day',
    indicatorColor: 'bg-green',
    content: (
      <>
        New order placed!
        <a className="fw-bold text-dark" href="#!">
          Order #2911
        </a>
        has been successfully placed.
      </>
    ),
  },
  {
    time: '1 day',
    indicatorColor: 'bg-purple',
    content: (
      <>
        Details for
        <a className="fw-bold text-dark" href="#!">
          Marketing and Planning Meeting
        </a>
        have been updated.
      </>
    ),
  },
  {
    time: '2 days',
    indicatorColor: 'bg-green',
    content: (
      <>
        New order placed!
        <a className="fw-bold text-dark" href="#!">
          Order #2910
        </a>
        has been successfully placed.
      </>
    ),
  },
];

const ActivityCard = () => {
  return (
    <div className="col-lg-6 col-md-12 mb-4">
      <div className="card card-header-actions h-100">
        <div className="card-header">
          Recent Activity
          <div className="dropdown no-caret">
            <button
              className="btn btn-transparent-dark btn-icon dropdown-toggle"
              id="dropdownMenuButton"
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              title="More options"
            >
              <i className="text-gray-500" data-feather="more-vertical"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownMenuButton">
              <h6 className="dropdown-header">Filter Activity:</h6>
              <a className="dropdown-item" href="#!">
                <span className="badge bg-green-soft text-green my-1">Appointments</span>
              </a>
              <a className="dropdown-item" href="#!">
                <span className="badge bg-blue-soft text-blue my-1">Tasks</span>
              </a>
              <a className="dropdown-item" href="#!">
                <span className="badge bg-yellow-soft text-yellow my-1">Insurance</span>
              </a>
              <a className="dropdown-item" href="#!">
                <span className="badge bg-purple-soft text-purple my-1">Office Errands</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="timeline timeline-xs">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-item-marker">
                  <div className="timeline-item-marker-text">{item.time}</div>
                  <div className={`timeline-item-marker-indicator ${item.indicatorColor}`}></div>
                </div>
                <div className="timeline-item-content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ActivityCard;
