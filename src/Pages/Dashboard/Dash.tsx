import React from 'react'
import { FiActivity, FiBook, FiLayout, FiPackage } from 'react-icons/fi'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import Footer from '../../Components/Footer/Footer'
import { cards } from '../../Components/Cards/CardData'
import Card from '../../Components/Cards/DasCard'


const Dash = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <DashboardHeader />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                    <div className="row">
                        {cards.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-xxl-8">
                            {/* <!-- Tabbed dashboard card example--> */}
                            <div className="card mb-4">
                                <div className="card-header border-bottom">
                                    {/* <!-- Dashboard card navigation--> */}
                                    <ul className="nav nav-tabs card-header-tabs" id="dashboardNav" role="tablist">
                                        <li className="nav-item me-1"><a className="nav-link active" id="overview-pill" href="#overview" data-bs-toggle="tab" role="tab" aria-controls="overview" aria-selected="true">Overview</a></li>
                                        <li className="nav-item"><a className="nav-link" id="activities-pill" href="#activities" data-bs-toggle="tab" role="tab" aria-controls="activities" aria-selected="false">Activities</a></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content" id="dashboardNavContent">
                                        {/* <!-- Dashboard Tab Pane 1--> */}
                                        <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-pill">
                                            <div className="chart-area mb-4 mb-lg-0" style={{ height: "20rem" }}><canvas id="myAreaChart" width="100%" height="30"></canvas></div>
                                        </div>
                                        {/* <!-- Dashboard Tab Pane 2--> */}
                                        <div className="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-pill">
                                            <table id="datatablesSimple">
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Event</th>
                                                        <th>Time</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Event</th>
                                                        <th>Time</th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <td>01/13/20</td>
                                                        <td>
                                                            <i className="me-2 text-green" data-feather="zap"></i>
                                                            Server online
                                                        </td>
                                                        <td>1:21 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/13/20</td>
                                                        <td>
                                                            <i className="me-2 text-red" data-feather="zap-off"></i>
                                                            Server restarted
                                                        </td>
                                                        <td>1:00 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/12/20</td>
                                                        <td>
                                                            <i className="me-2 text-purple" data-feather="shopping-cart"></i>
                                                            New order placed! Order #
                                                            <a href="#!">1126550</a>
                                                        </td>
                                                        <td>5:45 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/12/20</td>
                                                        <td>
                                                            <i className="me-2 text-blue" data-feather="user"></i>
                                                            Valerie Luna submitted
                                                            <a href="#!">quarter four report</a>
                                                        </td>
                                                        <td>4:23 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/12/20</td>
                                                        <td>
                                                            <i className="me-2 text-yellow" data-feather="database"></i>
                                                            Database backup created
                                                        </td>
                                                        <td>3:51 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/12/20</td>
                                                        <td>
                                                            <i className="me-2 text-purple" data-feather="shopping-cart"></i>
                                                            New order placed! Order #
                                                            <a href="#!">1126549</a>
                                                        </td>
                                                        <td>1:22 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/11/20</td>
                                                        <td>
                                                            <i className="me-2 text-blue" data-feather="user-plus"></i>
                                                            New user created:
                                                            <a href="#!">Sam Malone</a>
                                                        </td>
                                                        <td>4:18 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/11/20</td>
                                                        <td>
                                                            <i className="me-2 text-purple" data-feather="shopping-cart"></i>
                                                            New order placed! Order #
                                                            <a href="#!">1126548</a>
                                                        </td>
                                                        <td>4:02 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/11/20</td>
                                                        <td>
                                                            <i className="me-2 text-purple" data-feather="shopping-cart"></i>
                                                            New order placed! Order #
                                                            <a href="#!">1126547</a>
                                                        </td>
                                                        <td>3:47 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/11/20</td>
                                                        <td>
                                                            <i className="me-2 text-green" data-feather="zap"></i>
                                                            Server online
                                                        </td>
                                                        <td>1:19 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/11/20</td>
                                                        <td>
                                                            <i className="me-2 text-red" data-feather="zap-off"></i>
                                                            Server restarted
                                                        </td>
                                                        <td>1:00 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/10/20</td>
                                                        <td>
                                                            <i className="me-2 text-purple" data-feather="shopping-cart"></i>
                                                            New order placed! Order #
                                                            <a href="#!">1126547</a>
                                                        </td>
                                                        <td>5:31 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/10/20</td>
                                                        <td>
                                                            <i className="me-2 text-purple" data-feather="shopping-cart"></i>
                                                            New order placed! Order #
                                                            <a href="#!">1126546</a>
                                                        </td>
                                                        <td>12:13 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01/10/20</td>
                                                        <td>
                                                            <i className="me-2 text-blue" data-feather="user"></i>
                                                            Diane Chambers submitted
                                                            <a href="#!">quarter four report</a>
                                                        </td>
                                                        <td>10:56 AM</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Illustration dashboard card example--> */}
                            <div className="card mb-4">
                                <div className="card-body py-5">
                                    <div className="d-flex flex-column justify-content-center">
                                        <img alt='' className="img-fluid mb-4" src="assets/img/illustrations/data-report.svg" style={{ height: "10rem" }} />
                                        <div className="text-center px-0 px-lg-5">
                                            <h5>New reports are here! Generate custom reports now!</h5>
                                            <p className="mb-4">Our new report generation system is now online. You can start creating custom reporting for any documents available on your account.</p>
                                            <a className="btn btn-primary p-3" href="#!">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 mb-4">
                                    {/* <!-- Dashboard activity timeline example--> */}
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
                                </div>
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
                            </div>
                        </div>
                        <div className="col-xxl-4">
                            <div className="row">
                                <div className="col-xl-6 col-xxl-12">
                                    {/* <!-- Team members / people dashboard card example--> */}
                                    <div className="card mb-4">
                                        <div className="card-header">People</div>
                                        <div className="card-body">
                                            {/* <!-- Item 1--> */}
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center flex-shrink-0 me-3">
                                                    <div className="avatar avatar-xl me-3 bg-gray-200"><img alt='' className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                    <div className="d-flex flex-column fw-bold">
                                                        <a className="text-dark line-height-normal mb-1" href="#!">Sid Rooney</a>
                                                        <div className="small text-muted line-height-normal">Position</div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople1">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another action</a>
                                                        <a className="dropdown-item" href="#!">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Item 2--> */}
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center flex-shrink-0 me-3">
                                                    <div className="avatar avatar-xl me-3 bg-gray-200"><img alt='' className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-2.png" /></div>
                                                    <div className="d-flex flex-column fw-bold">
                                                        <a className="text-dark line-height-normal mb-1" href="#!">Keelan Garza</a>
                                                        <div className="small text-muted line-height-normal">Position</div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople2" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople2">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another action</a>
                                                        <a className="dropdown-item" href="#!">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Item 3--> */}
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center flex-shrink-0 me-3">
                                                    <div className="avatar avatar-xl me-3 bg-gray-200"><img alt='' className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-3.png" /></div>
                                                    <div className="d-flex flex-column fw-bold">
                                                        <a className="text-dark line-height-normal mb-1" href="#!">Kaia Smyth</a>
                                                        <div className="small text-muted line-height-normal">Position</div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople3">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another action</a>
                                                        <a className="dropdown-item" href="#!">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Item 4--> */}
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center flex-shrink-0 me-3">
                                                    <div className="avatar avatar-xl me-3 bg-gray-200"><img alt='' className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-4.png" /></div>
                                                    <div className="d-flex flex-column fw-bold">
                                                        <a className="text-dark line-height-normal mb-1" href="#!">Kerri Kearney</a>
                                                        <div className="small text-muted line-height-normal">Position</div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople4" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople4">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another action</a>
                                                        <a className="dropdown-item" href="#!">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Item 5--> */}
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center flex-shrink-0 me-3">
                                                    <div className="avatar avatar-xl me-3 bg-gray-200"><img alt='' className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-5.png" /></div>
                                                    <div className="d-flex flex-column fw-bold">
                                                        <a className="text-dark line-height-normal mb-1" href="#!">Georgina Findlay</a>
                                                        <div className="small text-muted line-height-normal">Position</div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople5" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople5">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another action</a>
                                                        <a className="dropdown-item" href="#!">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Item 6--> */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center flex-shrink-0 me-3">
                                                    <div className="avatar avatar-xl me-3 bg-gray-200"><img alt='' className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-6.png" /></div>
                                                    <div className="d-flex flex-column fw-bold">
                                                        <a className="text-dark line-height-normal mb-1" href="#!">Wilf Ingram</a>
                                                        <div className="small text-muted line-height-normal">Position</div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople6" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople6">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another action</a>
                                                        <a className="dropdown-item" href="#!">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-xxl-12">
                                    {/* <!-- Project tracker card example--> */}
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
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body text-center p-5">
                                    <img alt='' className="img-fluid mb-4" src="assets/img/illustrations/team-spirit.svg" style={{ maxWidth: "16.25rem" }} />
                                    <h5>Team Access</h5>
                                    <p className="mb-4">Upgrade your plan to get access to team collaboration tools.</p>
                                    <a className="btn btn-primary p-3" href="#!">Upgrade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Dash
