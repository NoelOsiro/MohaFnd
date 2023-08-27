import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { Auth } from 'aws-amplify';
import { Rings } from 'react-loader-spinner';
import { AccountSettings, TextField } from '@aws-amplify/ui-react';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const handleSuccess = () => {
        alert('password is successfully changed!')
    }

    useEffect(() => {
        fetchUserDetails();
    }, [user]);

    const fetchUserDetails = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);
        } catch (error) {
            console.error('Error fetching user details:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <main>
            <DashboardHeader title='Profile' icon={FaUserCircle} />
            <div className="container-xl px-4 mt-n10">
                {isLoading ? (
                    <Rings color="#000000" height={30} width={30} />
                ) : user ? (
                    <div className="row">
                        <div className="col-xxl-8">
                            <div className="card mb-4">
                                <div className="card-header border-bottom">
                                    My Account
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                    <div className='col-6'>
                                            <TextField
                                                value={user.attributes.name}
                                                label="Name"
                                                errorMessage="There is an error"
                                                name="Name"
                                                isReadOnly
                                            />
                                            <TextField
                                                placeholder="Baggins"
                                                value={user.attributes.email}
                                                label="Email"
                                                errorMessage="There is an error"
                                                disabled
                                            />
                                            
                                            <TextField
                                                descriptiveText=""
                                                placeholder="Baggins"
                                                label="Phone"
                                                errorMessage="There is an error"
                                            />
                                            <TextField
                                                descriptiveText="Enter a valid last name"
                                                placeholder="Baggins"
                                                label="Last name"
                                                errorMessage="There is an error"
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <TextField
                                                descriptiveText="Name"
                                                placeholder="Baggins"
                                                label="Name"
                                                errorMessage="There is an error"
                                                isReadOnly
                                            />
                                            <TextField
                                                descriptiveText="Email"
                                                placeholder="Baggins"
                                                label="Email"
                                                errorMessage="There is an error"
                                                disabled
                                            />
                                            <TextField
                                                descriptiveText=""
                                                placeholder="Baggins"
                                                label="Phone"
                                                errorMessage="There is an error"
                                            />
                                            <TextField
                                                descriptiveText="Enter a valid last name"
                                                placeholder="Baggins"
                                                label="Last name"
                                                errorMessage="There is an error"
                                            />
                                        </div>
                                        {user.attributes.name}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : null}
                <div className="row">
                    <div className="col-6">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Change Password
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <AccountSettings.ChangePassword onSuccess={handleSuccess} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Profile