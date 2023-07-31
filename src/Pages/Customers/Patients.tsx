import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import Illustrate from '../../Components/Illustration/Illustrate'
import PieChart from '../../Components/Charts/PieChart'
import ActivityCard from '../../Components/Cards/ActivityCard'
import { PatientCreateForm } from '../../ui-components'
import Card from '../../Components/Cards/DasCard'
import { FaNewspaper, FaServer } from 'react-icons/fa'
import PatientsTable from '../../Components/Tables/PatientsTable'
import { getNumberOfPatientsThisWeek } from '../../Services/CustomerService'



const Patients = () => {
    return (
        <main>
            <DashboardHeader title='Patients' />
            <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <Card
                        title={'Attended'}
                        icon={FaServer}
                        size={true}
                        statPromise={getNumberOfPatientsThisWeek()}
                        colorClass={'text-primary'}
                        description={'This Week'}
                        imageSrc={'assets/img/illustrations/windows.svg'} />
                    <Card
                        title={'New'}
                        icon={FaNewspaper}
                        size={true}
                        statPromise={getNumberOfPatientsThisWeek()}
                        colorClass={'text-success'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/processing.svg'} />

                </div>
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Patients
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="dashboardNavContent">
                                    <PatientsTable />
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                <div className='row'>
                    <div className="col-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Add New Patients
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="dashboardNavContent">
                                    <PatientCreateForm />
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                <div className="row">
                    <div className="col-xl-6 mb-4">
                        <ActivityCard />
                    </div>
                    <PieChart />
                </div>
                <Illustrate />
            </div>
        </main >
    )
}

export default Patients