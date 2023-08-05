import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { IAppointment, getAppointments } from '../../Services/DashService';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

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
  const [selectedRow, setSelectedRow] = useState<IAppointment | null>(null);

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
  // Function to handle row click and show the modal
  const handleRowClick = (row: IAppointment) => {
    setSelectedRow(row);
  };
  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  return (
    <div>
      <DataTableExtensions columns={columns} data={appts}>
        <DataTable
          title="Appointments This Week"
          columns={columns}
          data={appts}
          onRowClicked={handleRowClick}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>

      {/* Modal */}
      {selectedRow && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Appointment Details</h2>
            <p>Date: {selectedRow.appointment_date}</p>
            <p>Start Time: {selectedRow.start_time}</p>
            <p>End Time: {selectedRow.end_time}</p>
            <p>Status: {selectedRow.status}</p>
            <p>Assigned To: {selectedRow.assigned_to}</p>
            {/* Add other fields as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApptsTable;

