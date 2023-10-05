import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FiMessageSquare } from 'react-icons/fi'
import Layout from '../../Layout/layout'

const Messages = () => {
  return (
    <Layout>
      <main>
            <DashboardHeader title='Messages' icon={FiMessageSquare} />
            {/* <!-- Main page content--> */}
            <div className="container-xl px-4 mt-n10">
            </div>
        </main>
    </Layout>
    
  )
}

export default Messages