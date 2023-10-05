import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FaBellSlash } from 'react-icons/fa'
import Layout from '../../Layout/layout'

const Notifs = () => {
  return (
    <Layout>
      <main>
            <DashboardHeader title='Notifications' icon={FaBellSlash} />
            {/* <!-- Main page content--> */}
            <div className="container-xl px-4 mt-n10">
            </div>
        </main>
    </Layout>
    
  )
}

export default Notifs