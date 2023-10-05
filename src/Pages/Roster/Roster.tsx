import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import Footer from '../../Components/Footer/Footer'
import { FcClock } from 'react-icons/fc'



const Roster = () => {
    return (
        <Layout>
            <main>
                <DashboardHeader title='Team Schedule' icon={FcClock} />
                {/* <!-- Main page content--> */}
                <div className="container-xl px-4 mt-n10">
                </div>
            </main>  
        </Layout>
              
    )
}

export default Roster;
