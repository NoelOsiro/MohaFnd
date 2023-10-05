import React from 'react';
import DashboardHeader from '../../Components/Header/DashBoardHeader';
import ActivityCard from '../../Components/Cards/ActivityCard';
import Illustrate from '../../Components/Illustration/Illustrate';
import MyApptsTable from '../../Components/Tables/ApptsTable';
import ApptsPieChart from '../../Components/Charts/ApptsPieChart';
import { FaEyeSlash } from 'react-icons/fa';
// import { CreateAppointmentForm } from '../../ui-components'

const ViewAppts = () => {
    return (
        <Layout>
        <main>
            <DashboardHeader title='View Appointments' icon={FaEyeSlash} />
            <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Appointments
                            </div>
                            <div className="card-body">
                                <MyApptsTable />
                            </div>
                        </div >
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 mb-4">
                        <ActivityCard />
                    </div>
                    <div className="col-xl-6 mb-4">
                        <ApptsPieChart />
                    </div>
                </div>
                <Illustrate />
            </div>
        </main>
            </Layout>
    )
}

export default ViewAppts
