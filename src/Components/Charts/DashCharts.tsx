import React, { CSSProperties, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import supabase from '../../auth/supabase';

// Register required Chart.js components
ChartJS.register(Title, Tooltip, Legend);

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
      text: 'Service Requests',
    },
  },
};

const LineChart = () => {
  // State to store ticket data and loading state
  const [ticketData, setTicketData] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('Maintenance_requests')
          .select('request_date');

        if (error) {
          throw error;
        }

        // Calculate the date one week ago from today
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        // Filter data for the last week
        const filteredData = data.filter((entry) => {
          const requestDate = new Date(entry.request_date);
          return requestDate >= oneWeekAgo;
        });

        // Group data by request_date and count occurrences
        const requestCounts = filteredData.reduce((counts:any, entry) => {
          const requestDate = new Date(entry.request_date).toLocaleDateString();
          counts[requestDate] = (counts[requestDate] || 0) + 1;
          return counts;
        }, {});

        // Create an array of counts for the chart data
        const chartData = Object.values(requestCounts).map((count) => Number(count));

        setTicketData(chartData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
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
        label: 'Requests per Day (Last 7 Days)',
        data: ticketData,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return <Bar options={options} data={data} style={ChartStyles} />;
};

export default LineChart;
