import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import supabase from '../../auth/supabase';

interface IService {
  id: number;
  created_at: string;
  description: string;
  property_id: number;
  request_date: string;
  request_status: string;
}

const columns = [
  {
    name: 'Date',
    selector: (row: IService) => {
      const datePart = row.created_at.split('T')[0];
      return datePart;
    },
    sortable: true,
  },
  {
    name: 'House',
    selector: (row: IService) => {
      const property = row.property_id;
      return property;
    },
    sortable: true,
  },
  {
    name: 'Description',
    selector: (row: IService) => row.description,
    sortable: false,
  },
  {
    name: 'Status',
    selector: (row: IService) => row.request_status,
    sortable: true,
  },
  {
    name: 'Resolved Date',
    selector: (row: IService) => row.request_date,
    sortable: true,
  },
];
const MyDataTable = () => {
  const [maintenanceRequests, setMaintenanceRequests] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMaintenanceRequests() {
      try {
        const { data, error } = await supabase
          .from('Maintenance_requests')
          .select('*'); // Fetch all columns

        if (error) {
          throw error;
        }

        setMaintenanceRequests(data);
      } catch (error) {
        console.error('Error fetching maintenance requests:', error);
      }
    }

    fetchMaintenanceRequests();
  }, []);
  return (
    <DataTableExtensions columns={columns} data={maintenanceRequests}>
      <DataTable
        title="Requests This Week"
        columns={columns}
        data={maintenanceRequests}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
  );
};

export default MyDataTable;
