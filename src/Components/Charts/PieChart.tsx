import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Missed', 'Done','Pending'],
    datasets: [
      {
        label: '# of Appointments',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

const PieChart = () => {
    return (
        <div className="col-xl-6 mb-4">
            {/* <!-- Pie chart with legend example--> */}
            <div className="card h-100">
                <div className="card-header">Traffic Sources</div>
                <div className="card-body">
                    <div className="chart-pie mb-4">
                        <Doughnut data={data} />;
                        </div>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                            <div className="me-3">
                                <i className="fas fa-circle fa-sm me-1 text-blue"></i>
                                Direct
                            </div>
                            <div className="fw-500 text-dark">55%</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                            <div className="me-3">
                                <i className="fas fa-circle fa-sm me-1 text-purple"></i>
                                Social
                            </div>
                            <div className="fw-500 text-dark">15%</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                            <div className="me-3">
                                <i className="fas fa-circle fa-sm me-1 text-green"></i>
                                Referral
                            </div>
                            <div className="fw-500 text-dark">30%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart







export function App() {
  return 
}
