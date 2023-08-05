import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { DataStore } from '@aws-amplify/datastore';
import { Appointment, AppointmentStatusEnum } from '../../models';
import { FaCircle } from 'react-icons/fa';

const ApptsPieChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [
            {
                label: '# of Appointments',
                data: [0, 0, 0],
                backgroundColor: [
                    'rgba(232, 21, 0, 1.0)',
                    'rgb(81, 255, 0)',
                    'rgba(247, 100, 0, 1.0)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    });

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const appointments = await DataStore.query(Appointment);
                const missedAppointments = appointments.filter(
                    appointment => appointment.status === AppointmentStatusEnum.MISSED
                ).length;
                const doneAppointments = appointments.filter(
                    appointment => appointment.status === AppointmentStatusEnum.DONE
                ).length;
                const pendingAppointments = appointments.filter(
                    appointment => appointment.status === AppointmentStatusEnum.PENDING
                ).length;
                setChartData({

                    datasets: [
                        {
                            label: '# of Appointments',
                            data: [missedAppointments, doneAppointments, pendingAppointments],
                            backgroundColor: [
                                'rgba(232, 21, 0, 1.0)',
                                'rgb(81, 255, 0)',
                                'rgba(247, 100, 0, 1.0)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 2,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);
    const totalAppointments =
        chartData.datasets[0].data.reduce((sum, count) => sum + count, 0);
    const missedPercentage = ((chartData.datasets[0].data[0] / totalAppointments) * 100).toFixed(2);
    const donePercentage = ((chartData.datasets[0].data[1] / totalAppointments) * 100).toFixed(2);
    const pendingPercentage = ((chartData.datasets[0].data[2] / totalAppointments) * 100).toFixed(2);
    return (
        <div className="card h-100">
            <div className="card-header pt-2 pb-4">Traffic Sources</div>
            <div className="card-body">
                <div className="chart-pie mb-4">
                    <Doughnut data={chartData} style={{ margin: "auto" }} />
                </div>
                <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                        <div className="me-3">
                            <FaCircle className="text-green me-2" />
                            Done
                        </div>
                        <div className="fw-500 text-dark">{`${donePercentage}%`}</div>
                    </div>
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                        <div className="me-3">
                            <FaCircle className="text-red me-2" />
                            Missed
                        </div>
                        <div className="fw-500 text-dark">{`${missedPercentage}%`}</div>
                    </div>
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                        <div className="me-3">
                            <FaCircle className="text-orange me-2" />
                            Pending
                        </div>
                        <div className="fw-500 text-dark">{`${pendingPercentage}%`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ApptsPieChart;

