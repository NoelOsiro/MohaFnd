import React from "react";
import { SignupButton } from "../../Components/Buttons/Register";
import { LoginButton } from "../../Components/Buttons/Login";
import {Auth0ProviderWithNavigate}  from "../../auth/auth0-provider-with-history";
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated){
        window.location.assign('/dashboard')
    }
    return (
            <Auth0ProviderWithNavigate>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Densit</h1>
                            <p className="lead">Dental Clinic Management System</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <LoginButton />
                                <SignupButton />
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src="/assets/img/demo/login.png" alt="" width="720" />
                        </div>
                    </div>
                </div>
            </Auth0ProviderWithNavigate>
        );
};

export default LandingPage;
