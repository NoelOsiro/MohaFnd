import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { IAppointment } from '../../Services/ApptsService';
import { fetchAndStoreAppointments } from '../../Services/ApptsService'; // Import the function to fetch appointments

const columns = [
  {
    name: 'Date',
    selector: (row: IAppointment) => {
      const datePart = row.startTime.split('T')[0];
      return datePart;
    },
    sortable: true,
  },
  {
    name: 'Start Time',
    selector: (row: IAppointment) => {
      const startTime = new Date(row.startTime);
      return startTime.toLocaleTimeString();;
    },
    sortable: true,
  },
  {
    name: 'Duration',
    selector: (row: IAppointment) => row.duration,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row: IAppointment) => row.status,
    sortable: true,
  },
  {
    name: 'Assigned To',
    selector: (row: IAppointment) => row.staff,
    sortable: true,
  },
];
const MyDataTable = () => {
  const [appointmentsThisWeek, setAppointmentsThisWeek] = useState<IAppointment[]>([]);
  useEffect(() => {
    // Retrieve appointment data from localStorage
    const storedData = localStorage.getItem('appointments');
    if (storedData) {
      try {
        const appointments = JSON.parse(storedData);
        if (Array.isArray(appointments.data)) {
          setAppointmentsThisWeek(appointments.data);
        }
      } catch (error) {
        // Handle any JSON parsing errors
        console.error('Error parsing JSON data from localStorage:', error);
      }
    }
    fetchAndStoreAppointments()
      .then(() => {
        const storedData = localStorage.getItem('appointments');
        if (storedData) {
          const appointments: IAppointment[] = JSON.parse(storedData);
          const thisWeek = appointments.filter((appointment) => {
            const appointmentDate = new Date(appointment.startTime);
            const currentDate = new Date();
            const sevenDaysAgo = new Date(currentDate);
            sevenDaysAgo.setDate(currentDate.getDate() - 7);
            return appointmentDate >= sevenDaysAgo && appointmentDate <= currentDate;
          });
          setAppointmentsThisWeek(thisWeek);
        }
      })
      .catch((error) => {
        console.error('Error fetching and storing appointments:', error);
      });
  }, [appointmentsThisWeek]);

  return (
    <DataTableExtensions columns={columns} data={appointmentsThisWeek}>
      <DataTable
        title="Appointments This Week"
        columns={columns}
        data={appointmentsThisWeek}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
  );
};

export default MyDataTable;
