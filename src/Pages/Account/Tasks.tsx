import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import { FaTasks } from 'react-icons/fa'

const Tasks = () => {
  return (
    <main>
            <DashboardHeader title='Tasks' icon={FaTasks} />
            {/* <!-- Main page content--> */}
            <div className="container-xl px-4 mt-n10">
            </div>
        </main>
  )
}

export default Tasks