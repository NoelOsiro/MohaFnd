import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { IPatient, getPatients } from '../../Services/CustomerService';
// @ts-ignore
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


const columns = [
  {
    name: 'First Name',
    selector: (row:IPatient) => row.first_name,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row:IPatient) => row.last_name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row:IPatient) => row.email,
    sortable: true,
  },
  {
    name: 'Phone',
    selector: (row:IPatient) => row.phone_number,
    sortable: true,
  },
  {
    name: 'Gender',
    selector: (row:IPatient) => row.gender,
    sortable: true,
  },
  {
    name: 'D.O.B',
    selector: (row:IPatient) => row.date_of_birth,
    sortable: true,
  },
  
];

const PatientsTable = () => {
  const [pats, setPats] = useState<IPatient[]>([]);
  useEffect(() => {
    // Fetch the appointments for this week
    const fetchPatients = async () => {
      try {
        const patients = await getPatients();
        setPats(patients);
      } catch (error) {
        console.error('Error fetching appointments this week:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <DataTableExtensions columns={columns} 
    data={pats}>
    <DataTable title="Patients" 
  columns={columns} 
  data={pats} 
  pagination 
  highlightOnHover />
  </DataTableExtensions>);
};

export default PatientsTable;
