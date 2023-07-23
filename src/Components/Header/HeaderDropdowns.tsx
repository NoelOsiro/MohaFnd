// HeaderDropdowns.tsx
import React from 'react';
import { DropdownItemProps, alertsItems, documentationItems, messagesItems } from './MenuItem';
import {FiBell, FiLogOut, FiMail, FiSearch, FiSettings} from 'react-icons/fi';



const DropdownItem: React.FC<DropdownItemProps> = (props:DropdownItemProps) => {
    return (
        <>
            <a className="dropdown-item dropdown-notifications-item" href={props.link}>
                <div className={`dropdown-notifications-item-icon bg-warning`}>
                    <props.icon/>
                </div>
                <div className="dropdown-notifications-item-content">
                    <div className="dropdown-notifications-item-content-details">{props.details}</div>
                    <div className="dropdown-notifications-item-content-text">{props.content}</div>
                </div>
            </a>
        </>
    );
};

const HeaderDropdowns: React.FC = () => {
    return (
        <ul className="navbar-nav align-items-center ms-auto">
            {/* Documentation Dropdown */}
            <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="fw-500">Documentation</div>
                    <i className="fas fa-chevron-right dropdown-arrow"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                    {documentationItems.map((item, index) => (
                        <DropdownItem key={index} title={item.title} icon={item.icon} link={item.link} content={item.content} details={item.details} />
                    ))}
                </div>
            </li>

            {/* Navbar Search Dropdown */}
            <li className="nav-item dropdown no-caret me-3 d-lg-none">
                <button className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FiSearch/>
                </button>
                <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                    <form className="form-inline me-auto w-100">
                        <div className="input-group input-group-joined input-group-solid">
                            <input className="form-control pe-0" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-text">
                                <FiSearch/>
                            </div>
                        </div>
                    </form>
                </div>
            </li>

            {/* Alerts Dropdown */}
            <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FiBell/>
                </a>
                <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                    <h6 className="dropdown-header dropdown-notifications-header">
                        <FiBell/>
                        Alerts Center
                    </h6>
                    {alertsItems.map((item, index) => (
                        <DropdownItem key={index} title={item.title} icon={item.icon} link={item.link} content={item.content} details={item.details} />
                    ))}
                    <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                </div>
            </li>


            {/* Messages Dropdown */}
            <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FiMail/>
                </a>
                <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                    <h6 className="dropdown-header dropdown-notifications-header">
                        <i className="me-2" data-feather="mail"></i>
                        Message Center
                    </h6>
                    {messagesItems.map((item, index) => (
                        <DropdownItem key={index} title={item.title} icon={item.icon} link={item.link} content={item.content} details={item.details} />
                    ))}
                    <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                </div>
            </li>

            {/* User Dropdown */}
            <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img alt=" " className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" />
                </a>
                <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                    <h6 className="dropdown-header d-flex align-items-center">
                        <img alt=" " className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
                        <div className="dropdown-user-details">
                            <div className="dropdown-user-details-name">Noel Osiro</div>
                            <div className="dropdown-user-details-email">vluna@aol.com</div>
                        </div>
                    </h6>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#!">
                        <div className="dropdown-item-icon"><FiSettings/></div>
                        Account
                    </a>
                    <a className="dropdown-item" href="#!">
                        <div className="dropdown-item-icon"><FiLogOut/></div>
                        Logout
                    </a>
                </div>
            </li>
        </ul>
    );
};

export default HeaderDropdowns;
