import React from 'react'

const TaskTrackerCard = () => {
    return (
        <div className="card card-header-actions mb-4">
            <div className="card-header">
                Projects
                <a className="btn btn-sm btn-primary-soft text-primary" href="#!">Create New</a>
            </div>
            <div className="card-body">
                {/* <!-- Progress item 1--> */}
                <div className="d-flex align-items-center justify-content-between small mb-1">
                    <div className="fw-bold">Server Setup</div>
                    <div className="small">25%</div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div></div>
                {/* <!-- Progress item 2--> */}
                <div className="d-flex align-items-center justify-content-between small mb-1">
                    <div className="fw-bold">Database Migration</div>
                    <div className="small">50%</div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div></div>
                {/* <!-- Progress item 3--> */}
                <div className="d-flex align-items-center justify-content-between small mb-1">
                    <div className="fw-bold">Version Release</div>
                    <div className="small">75%</div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div></div>
                {/* <!-- Progress item 4--> */}
                <div className="d-flex align-items-center justify-content-between small mb-1">
                    <div className="fw-bold">Product Listings</div>
                    <div className="small">100%</div>
                </div>
                <div className="progress"><div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div></div>
            </div>
        </div>
    )
}

export default TaskTrackerCard