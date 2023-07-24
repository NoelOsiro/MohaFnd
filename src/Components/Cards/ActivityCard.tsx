import React from 'react'

const ActivityCard = () => {
    return (
        <div className="card card-header-actions h-100">
            <div className="card-header">
                Recent Activity
                <div className="dropdown no-caret">
                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="text-gray-500" data-feather="more-vertical"></i></button>
                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownMenuButton">
                        <h6 className="dropdown-header">Filter Activity:</h6>
                        <a className="dropdown-item" href="#!"><span className="badge bg-green-soft text-green my-1">Commerce</span></a>
                        <a className="dropdown-item" href="#!"><span className="badge bg-blue-soft text-blue my-1">Reporting</span></a>
                        <a className="dropdown-item" href="#!"><span className="badge bg-yellow-soft text-yellow my-1">Server</span></a>
                        <a className="dropdown-item" href="#!"><span className="badge bg-purple-soft text-purple my-1">Users</span></a>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="timeline timeline-xs">
                    {/* <!-- Timeline Item 1--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">27 min</div>
                            <div className="timeline-item-marker-indicator bg-green"></div>
                        </div>
                        <div className="timeline-item-content">
                            New order placed!
                            <a className="fw-bold text-dark" href="#!">Order #2912</a>
                            has been successfully placed.
                        </div>
                    </div>
                    {/* <!-- Timeline Item 2--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">58 min</div>
                            <div className="timeline-item-marker-indicator bg-blue"></div>
                        </div>
                        <div className="timeline-item-content">
                            Your
                            <a className="fw-bold text-dark" href="#!">weekly report</a>
                            has been generated and is ready to view.
                        </div>
                    </div>
                    {/* <!-- Timeline Item 3--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">2 hrs</div>
                            <div className="timeline-item-marker-indicator bg-purple"></div>
                        </div>
                        <div className="timeline-item-content">
                            New user
                            <a className="fw-bold text-dark" href="#!">Valerie Luna</a>
                            has registered
                        </div>
                    </div>
                    {/* <!-- Timeline Item 4--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">1 day</div>
                            <div className="timeline-item-marker-indicator bg-yellow"></div>
                        </div>
                        <div className="timeline-item-content">Server activity monitor alert</div>
                    </div>
                    {/* <!-- Timeline Item 5--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">1 day</div>
                            <div className="timeline-item-marker-indicator bg-green"></div>
                        </div>
                        <div className="timeline-item-content">
                            New order placed!
                            <a className="fw-bold text-dark" href="#!">Order #2911</a>
                            has been successfully placed.
                        </div>
                    </div>
                    {/* <!-- Timeline Item 6--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">1 day</div>
                            <div className="timeline-item-marker-indicator bg-purple"></div>
                        </div>
                        <div className="timeline-item-content">
                            Details for
                            <a className="fw-bold text-dark" href="#!">Marketing and Planning Meeting</a>
                            have been updated.
                        </div>
                    </div>
                    {/* <!-- Timeline Item 7--> */}
                    <div className="timeline-item">
                        <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">2 days</div>
                            <div className="timeline-item-marker-indicator bg-green"></div>
                        </div>
                        <div className="timeline-item-content">
                            New order placed!
                            <a className="fw-bold text-dark" href="#!">Order #2910</a>
                            has been successfully placed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard