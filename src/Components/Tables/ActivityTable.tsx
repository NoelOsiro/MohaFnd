import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { IAppointment, getAppointmentsThisWeek } from '../../Services/DashService';
// @ts-ignore
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const columns = [
  {
    name: 'Date',
    selector: (row:IAppointment) => row.appointment_date,
    sortable: true,
  },
  {
    name: 'Start Time',
    selector: (row:IAppointment) => row.start_time,
    sortable: true,
  },
  {
    name: 'End Time',
    selector: (row:IAppointment) => row.end_time,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row:IAppointment) => row.status,
    sortable: true,
  },
  {
    name: 'Assigned To',
    selector: (row:IAppointment) => row.assigned_to,
    sortable: true,
  },
  
];

const MyDataTable = () => {
  const [appointmentsThisWeek, setAppointmentsThisWeek] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the appointments for this week
    const fetchAppointmentsThisWeek = async () => {
      try {
        const appointments = await getAppointmentsThisWeek(); // Replace this with your actual function to fetch appointments this week
        setAppointmentsThisWeek(appointments);
      } catch (error) {
        console.error('Error fetching appointments this week:', error);
      }
    };

    fetchAppointmentsThisWeek();
  }, []);

  return (
    <DataTableExtensions columns={columns} 
    data={appointmentsThisWeek}>
        <DataTable 
          title="Appointments This Week"
          columns={columns}
          data={appointmentsThisWeek}
          pagination highlightOnHover
          />
    </DataTableExtensions>);
};

export default MyDataTable;
