import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  data: {}[];
}

const PieChart: React.FC<IProps> = (props: IProps) => {
  // Calculate counts for each gender category from props.data
  const maleCount = props.data.filter((item: any) => item.gender === 'Male').length;
  const femaleCount = props.data.filter((item: any) => item.gender === 'Female').length;
  const otherCount = props.data.filter((item: any) => item.gender === 'Other').length;

  // Calculate total count
  const totalCount = maleCount + femaleCount + otherCount;

  // Calculate percentages
  const malePercentage = ((maleCount / totalCount) * 100).toFixed(2);
  const femalePercentage = ((femaleCount / totalCount) * 100).toFixed(2);
  const otherPercentage = ((otherCount / totalCount) * 100).toFixed(2);

  // Define the data object with the calculated counts
  const data = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Tenants by gender',
        data: [maleCount, femaleCount, otherCount],
        backgroundColor: [
          'rgba(0, 97, 242)',
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

  return (
    <div className="col-xl-6 mb-4">
      <div className="card h-100">
        <div className="card-header">Tenants: Gender</div>
        <div className="card-body">
          <div className="chart-pie mb-4">
            <Doughnut data={data} />;
          </div>
          <div className="list-group list-group-flush">
            <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
              <div className="me-3">
                <i className="fas fa-circle fa-sm me-1 text-blue"></i>
                Male
              </div>
              <div className="fw-500 text-dark">{`${malePercentage}%`}</div>
            </div>
            <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
              <div className="me-3">
                <i className="fas fa-circle fa-sm me-1 text-purple"></i>
                Female
              </div>
              <div className="fw-500 text-dark">{`${femalePercentage}%`}</div>
            </div>
            <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
              <div className="me-3">
                <i className="fas fa-circle fa-sm me-1 text-green"></i>
                Other
              </div>
              <div className="fw-500 text-dark">{`${otherPercentage}%`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
