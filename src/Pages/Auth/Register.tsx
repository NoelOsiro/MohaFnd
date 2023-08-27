import React, { useState } from 'react';
import './login.css';
import { useRegister } from '../../Context/RegisterContext';



const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [sex, setSex] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const { register } = useRegister();
    const handleRegister = async () => {
        try {
            setErrorMessage('');
            setSuccessMessage('');
            await register(firstName, lastName, email, password, username, phone, address, sex, role);
            setSuccessMessage('User registered. Verify email.');
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            {successMessage && <p className='text-success'>{successMessage}</p>}
            {errorMessage && <p className='text-danger'>{errorMessage}</p>}
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row">
                                <img src="https://i.imgur.com/CXQmsmF.png" className="logo" alt='logo' />
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row mb-4 px-3">
                                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                <div className="facebook text-center mr-3"><div className="fa fa-facebook"></div></div>
                                <div className="twitter text-center mr-3"><div className="fa fa-twitter"></div></div>
                                <div className="linkedin text-center mr-3"><div className="fa fa-linkedin"></div></div>
                            </div>
                            <div className="row px-3 mb-4">
                                <div className="line"></div>
                                <small className="or text-center">Or</small>
                                <div className="line"></div>
                            </div>
                            <div className="row px-3">
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">First Name</h6></label>
                                    <input className="mb-4" type="text" name="firstName" placeholder="First Name" value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Last Name</h6></label>
                                    <input className="mb-4" type="text" name="lastName" placeholder="Last Name" value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="row px-3">
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                                    <input className="mb-4" type="email" name="email" placeholder="Enter a valid email address" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Phone</h6></label>
                                    <input className="mb-4" type="phone" name="phone" placeholder="Enter a valid phone" value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="row px-3">
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                                    <input className="mb-4" type="password" name="password" placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Confirm Password</h6></label>
                                    <input className="mb-4" type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className='row px-3'>
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Username</h6></label>
                                    <input type="text" name="username" placeholder="Username" value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Address</h6></label>
                                    <input type="text" name="address" placeholder="Enter Address" value={address}
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>

                            </div>
                            <div className="row px-3">
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Gender</h6></label>
                                    <input className="mb-4" type="text" name="sex" placeholder="Gender" value={sex}
                                        onChange={(e) => setSex(e.target.value)} />
                                </div>
                                <div className='col-6'>
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Role</h6></label>
                                    <input className="mb-4" type="text" name="role" placeholder="Role" value={role}
                                        onChange={(e) => setRole(e.target.value)} />
                                </div>

                            </div>
                            <div className="row px-3 mb-4">
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                    <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label>
                                </div>
                                <a href="/forgot-password" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                            </div>
                            <div className="row mb-3 px-3">
                                <button type="submit" className="btn btn-blue text-center" onClick={handleRegister}>Sign Up</button>
                            </div>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold">Don't have an account? <a className="text-danger " href='/register'>Register</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue py-4">
                    <div className="row px-3">
                        <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        <div className="social-contact ml-4 ml-sm-auto">
                            <span className="fa fa-facebook mr-4 text-sm"></span>
                            <span className="fa fa-google-plus mr-4 text-sm"></span>
                            <span className="fa fa-linkedin mr-4 text-sm"></span>
                            <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

