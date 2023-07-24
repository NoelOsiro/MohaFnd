import React from 'react'

const PeopleCard = () => {
    return (
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
    )
}

export default PeopleCard