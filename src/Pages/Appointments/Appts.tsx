import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PieChart from '../../Components/Charts/PieChart'
import Illustrate from '../../Components/Illustration/Illustrate'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import { FiCalendar } from 'react-icons/fi'
// import { CreateAppointmentForm } from '../../ui-components'

const Appts = () => {
    return (
        <Layout>
        <main>
                <DashboardHeader title='Appointments' icon={FiCalendar} />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                    <div className="row">
                        <div className="col-xxl-8">
                            <TabDashBoard />
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
        </Layout>
    )
}

export default Appts
