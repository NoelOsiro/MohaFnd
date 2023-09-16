import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/DasCard'
import { AppointmentSummary, fetchAndStoreDashAppointments } from '../../Services/DashService';
import { FiBook, FiLayout, FiPackage } from 'react-icons/fi';

const DashCards = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<AppointmentSummary | null>(null);
    useEffect(() => {
        const storedApiData = localStorage.getItem('apptsSummary');
        if (storedApiData) {
            const parsedData = JSON.parse(storedApiData);
            setData(parsedData.data);
        }
        else {
            fetchAndStoreDashAppointments()
                .catch((error) => {
                    setError(error.message);
                })
            const storedApiData = localStorage.getItem('apptsSummary');
            if (storedApiData) {
                const parsedData = JSON.parse(storedApiData);
                setData(parsedData.data);
            }
        }
        ;
    }, []);
    return (
        data ?
            (
                <>
                    <Card
                        title={'Done'}
                        icon={FiPackage}
                        colorClass={'text-primary'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/browser-stats.svg'}
                        count={data.DoneAppointments} />
                    <Card
                        title={'Missed'}
                        icon={FiBook}
                        colorClass={'text-danger'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/processing.svg'}
                        count={data.MissedAppointments} />
                    <Card
                        title={'Pending'}
                        icon={FiLayout}
                        colorClass={'text-warning'}
                        description={'This week'}
                        imageSrc={'assets/img/illustrations/windows.svg'}
                        count={data.PendingAppointments} />
                </>
            ) :
            null

    )
}

export default DashCards