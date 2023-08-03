import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { IAppointment, getAppointments} from '../../Services/DashService';
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

const MyApptsTable = () => {
  const [appts, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the appointments for this week
    const fetchAppointments = async () => {
      try {
        const appointments = await getAppointments(); // Replace this with your actual function to fetch appointments this week
        setAppointments(appointments);
      } catch (error) {
        console.error('Error fetching appointments this week:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <DataTableExtensions columns={columns} 
    data={appts}>
        <DataTable 
          title="Appointments This Week"
          columns={columns}
          data={appts}
          pagination highlightOnHover />
    </DataTableExtensions>);
};

export default MyApptsTable;
