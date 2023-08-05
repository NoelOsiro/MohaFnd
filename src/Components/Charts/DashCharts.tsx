import React, { CSSProperties } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ChartStyles: CSSProperties= {
  margin:'auto',
  height: '320px'
}

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Appointments',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Months',
      data: [120,240,360,180,470,235,212,345,22,13,120,45],
      borderColor: 'rgb(180, 205, 222)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const LineChart = ()=> {
  return <Line options={options} data={data} style={ChartStyles} />;
}
export default LineChart
