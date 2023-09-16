import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PeopleCard from '../../Components/Cards/PeopleCard'
import TaskTrackerCard from '../../Components/Cards/TaskTrackerCard'
import { FcHome } from 'react-icons/fc'
import ApptsPieChart from '../../Components/Charts/ApptsPieChart'
import Layout from '../../Layout/layout'
import DashCards from './DashCards'


const Dash = () => {
    return (
        <Layout>
            <main>
                <DashboardHeader title='Home' icon={FcHome} />
                <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <DashCards />
                    </div>
                    <TabDashBoard />
                    <div className="row">
                        <ActivityCard />
                        <ApptsPieChart />
                    </div>
                    <div className="row">
                        <PeopleCard />
                        <TaskTrackerCard />
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Illustrate />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>


    )
}

export default Dash
