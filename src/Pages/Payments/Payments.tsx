import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FaPeopleCarry } from 'react-icons/fa'

const Payments = () => {
    return (
        <Layout>
            <main>
            <DashboardHeader title='My Team' icon={FaPeopleCarry} />
            {/* <!-- Main page content--> */}
            <div className="container-xl px-4 mt-n10">
            </div>
        </main>
        </Layout>
        
    )
}

export default Payments
