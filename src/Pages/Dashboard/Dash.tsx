import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { cards } from '../../Components/Cards/CardData'
import Card from '../../Components/Cards/DasCard'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PeopleCard from '../../Components/Cards/PeopleCard'
import TaskTrackerCard from '../../Components/Cards/TaskTrackerCard'
import { FcHome } from 'react-icons/fc'
import ApptsPieChart from '../../Components/Charts/ApptsPieChart'


const Dash = () => {
    return (
        <main>
            <DashboardHeader title='Home' icon={FcHome} />
            <div className="container-xl px-4 mt-n10">
                <div className="row">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <TabDashBoard />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <ActivityCard />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <ApptsPieChart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <PeopleCard />
                    </div>
                    <div className="col-lg-4 col-md-12 ">
                        <TaskTrackerCard />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Illustrate />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Dash
