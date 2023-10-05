import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from 'react-icons/fa';
import {Chart, ArcElement, CategoryScale, LinearScale, BarElement} from 'chart.js'
Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement);

interface Iprops {
    propertyStats: {
      total:number;
      vacant:number;
      occupied:number;
    }
  }

const ApptsPieChart: React.FC<Iprops> = (props:Iprops) => {
    const vacantPercent = ((props.propertyStats.vacant / props.propertyStats.total) * 100).toFixed(2);
    const occupiedPercent = ((props.propertyStats.occupied  / props.propertyStats.total) * 100).toFixed(2);
    const chartData = {
        datasets: [
            {
                label: '# of Properties',
                data: [props.propertyStats.vacant, props.propertyStats.occupied],
                backgroundColor: [
                    'rgba(232, 21, 0, 1.0)',
                    'rgb(81, 255, 0)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 3,
            },
        ],
    };
    return (
        <div className="col-lg-6 col-md-12 mb-4">
            <div className="card h-100">
            <div className="card-header pt-2 pb-4">Property Occupation</div>
            <div className="card-body">
                <div className="chart-pie mb-4">
                    <Doughnut data={chartData} style={{ margin: "auto" }} />
                </div>
                <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                        <div className="me-3">
                            <FaCircle className="text-green me-2" />
                            Occupied
                        </div>
                        <div className="fw-500 text-dark">{`${occupiedPercent}%`}</div>
                    </div>
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                        <div className="me-3">
                            <FaCircle className="text-red me-2" />
                            Vacant
                        </div>
                        <div className="fw-500 text-dark">{`${vacantPercent}%`}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};


export default ApptsPieChart;

