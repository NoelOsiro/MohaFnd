import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import Footer from '../../Components/Footer/Footer'
import { cards } from '../../Components/Cards/CardData'
import Card from '../../Components/Cards/DasCard'
import TabDashBoard from '../../Components/Tabs/TabDashBoard'
import Illustrate from '../../Components/Illustration/Illustrate'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PieChart from '../../Components/Charts/PieChart'
import PeopleCard from '../../Components/Cards/PeopleCard'
import TaskTrackerCard from '../../Components/Cards/TaskTrackerCard'


const Dash = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <DashboardHeader title='Home' />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                    <div className="row">
                        {cards.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
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
                        <div className="col-xxl-4">
                            <div className="row">
                                <div className="col-xl-6 col-xxl-12">
                                    {/* <!-- Team members / people dashboard card example--> */}
                                    <PeopleCard/>
                                </div>
                                <div className="col-xl-6 col-xxl-12">
                                    {/* <!-- Project tracker card example--> */}
                                    <TaskTrackerCard/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Dash
