import React, { CSSProperties, useEffect, useState } from 'react';
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
  ArcElement,
  BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
  BarElement
);

// CSS style for the chart container
const ChartStyles: CSSProperties = {
  margin: 'auto',
  height: '320px',
};

// Chart options
const options: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Appointments',
    },
  },
};


const LineChart = () => {
  // State to store appointment data
  const [appointmentData, setAppointmentData] = useState<number[]>([]);

  useEffect(() => {
    // Retrieve appointment data from localStorage
    const storedData = localStorage.getItem('appointments');
    if (storedData) {
      try {
        const appointments = JSON.parse(storedData);
        
        if (Array.isArray(appointments.data)) {
          // Create an array of daily counts for 'Done' appointments for the last 7 days
          const dailyCounts = Array(7).fill(0);
          appointments.data.forEach((appointment: any) => {
            const appointmentDate = new Date(appointment.startTime);
            const daysAgo = Math.floor(
              (new Date().getTime() - appointmentDate.getTime()) /
              (24 * 3600 * 1000)
            );
            if (daysAgo >= 0 && daysAgo < 7) {
              dailyCounts[6 - daysAgo]++;
            }
          });
          setAppointmentData(dailyCounts);
        } else {
          // Handle the case where the data is not an array
          console.error('Appointments data in localStorage is not an array.');
        }
      } catch (error) {
        // Handle any JSON parsing errors
        console.error('Error parsing JSON data from localStorage:', error);
      }
    }
  }, []);
  
  // Dynamically generate labels for the last 7 days (e.g., Monday, Tuesday)
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const labels = Array(7)
    .fill(0)
    .map((_, index) => {
      const dayIndex = (currentDate.getDay() + 6 - index) % 7; // Calculate the day index for the label
      return daysOfWeek[dayIndex];
    });
  // Data for the chart
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Done Appointments (Last 7 Days)',
        data: appointmentData,
        borderColor: 'rgb(180, 205, 222)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} style={ChartStyles} />;
};

export default LineChart;
