import React from 'react'

const PieChart = () => {
    return (
        <div className="col-xl-6 mb-4">
            {/* <!-- Pie chart with legend example--> */}
            <div className="card h-100">
                <div className="card-header">Traffic Sources</div>
                <div className="card-body">
                    <div className="chart-pie mb-4"><canvas id="myPieChart" width="100%" height="50"></canvas></div>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                            <div className="me-3">
                                <i className="fas fa-circle fa-sm me-1 text-blue"></i>
                                Direct
                            </div>
                            <div className="fw-500 text-dark">55%</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                            <div className="me-3">
                                <i className="fas fa-circle fa-sm me-1 text-purple"></i>
                                Social
                            </div>
                            <div className="fw-500 text-dark">15%</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                            <div className="me-3">
                                <i className="fas fa-circle fa-sm me-1 text-green"></i>
                                Referral
                            </div>
                            <div className="fw-500 text-dark">30%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart