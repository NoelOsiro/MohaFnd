import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FaTasks } from 'react-icons/fa'
import Layout from '../../Layout/layout'

const Tasks = () => {
  return (
    <Layout>
      <main>
            <DashboardHeader title='Tasks' icon={FaTasks} />
            {/* <!-- Main page content--> */}
            <div className="container-xl px-4 mt-n10">
            </div>
        </main>
    </Layout>
    
  )
}

export default Tasks