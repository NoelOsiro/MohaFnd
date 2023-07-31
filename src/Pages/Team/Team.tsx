import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PieChart from '../../Components/Charts/PieChart'
import {  StaffCreateForm } from '../../ui-components'
import TeamsTable from '../../Components/Tables/TeamsTable'



const Team = () => {
    return (
            <main>
                <DashboardHeader title='My Team' />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Staff
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="dashboardNavContent">
                                    <TeamsTable />
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                <div className='row'>
                    <div className="col-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Add New Staff
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="dashboardNavContent">
                                    <StaffCreateForm />
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                <div className="row">
                    <div className="col-xl-6 mb-4">
                        <ActivityCard />
                    </div>
                    <PieChart />
                </div>
                <Illustrate />
            </div>
            </main>    
    )
}

export default Team