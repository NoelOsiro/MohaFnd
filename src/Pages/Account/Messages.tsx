import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FiMessageSquare } from 'react-icons/fi'

const Messages = () => {
  return (
    <main>
            <DashboardHeader title='Messages' icon={FiMessageSquare} />
            {/* <!-- Main page content--> */}
            <div className="container-xl px-4 mt-n10">
            </div>
        </main>
  )
}

export default Messages