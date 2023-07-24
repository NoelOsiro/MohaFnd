import React from 'react'

const Illustrate = () => {
    return (
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
    )
}

export default Illustrate