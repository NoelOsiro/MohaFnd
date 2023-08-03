import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PieChart from '../../Components/Charts/PieChart'
import Illustrate from '../../Components/Illustration/Illustrate'
import MyApptsTable from '../../Components/Tables/ApptsTable'
// import { CreateAppointmentForm } from '../../ui-components'

const ViewAppts = () => {
    return (
        <main>
            <DashboardHeader title='View Appointments' />
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
                        <Illustrate />
                        <div className="row">
                            <div className="col-xl-6 mb-4">
                                <ActivityCard />
                            </div>
                            <PieChart />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ViewAppts