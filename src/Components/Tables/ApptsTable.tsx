import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const columns = [
  {
    name: 'Date',
    selector: (row: any) => {
      const datePart = row.startTime.split('T')[0];
      return datePart;
    },
    sortable: true,
  },
  {
    name: 'Start Time',
    selector: (row: any) => {
      const startTime = new Date(row.startTime);
      return startTime.toLocaleTimeString();;
    },
    sortable: true,
  },
  {
    name: 'Duration',
    selector: (row: any) => row.duration,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
    sortable: true,
  },
  {
    name: 'Assigned To',
    selector: (row: any) => row.staff,
    sortable: true,
  },
];

const MyApptsTable = () => {
  const [appts, setAppointments] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = useState<any | null>(null);

  useEffect(() => {
    
  }, [appts]);
  // Function to handle row click and show the modal
  const handleRowClick = (row: any) => {
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
            <p>Date: {selectedRow.startTime.split('T')[0]}</p>
            <p>Start Time: {selectedRow.startTime}</p>
            <p>End Time: {selectedRow.duration}</p>
            <p>Status: {selectedRow.status}</p>
            <p>Assigned To: {selectedRow.staff}</p>
            {/* Add other fields as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApptsTable;

