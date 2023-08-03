import React from 'react'
import DashboardHeader from '../../Components/Header/DashBoardHeader'
import ActivityCard from '../../Components/Cards/ActivityCard'
import PieChart from '../../Components/Charts/PieChart'
import Illustrate from '../../Components/Illustration/Illustrate'
import { SearchField } from '@aws-amplify/ui-react';
// import { CreateAppointmentForm } from '../../ui-components'

const BookAppts = () => {
    const [value, setValue] = React.useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const onClear = () => {
        setValue('');
    };
    return (
        <main>
            <DashboardHeader title='Book Appointment' />
            <div className="container-xl px-4 mt-n10">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="card mb-4">
                            <div className="card-header border-bottom">
                                Select Patient
                            </div>
                            <div className="card-body">
                                <SearchField
                                    label="search patient name"
                                    onChange={onChange}
                                    onClear={onClear}
                                    value={value}
                                />
                            </div>
                        </div >
                        <Illustrate />
                        <div className="row">
                            <div className="col-xl-6 mb-4">
                                <ActivityCard />
                            </div>
                            <PieChart />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default BookAppts