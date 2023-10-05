import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

interface IProps {
  data: {}[]
}
const columns = [
  {
    name: 'First Name',
    selector: (row: any) => row.first_name || '', // Use default value '' for null or undefined cases
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row: any) => row.last_name || '', // Use default value '' for null or undefined cases
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row: any) => row.email || '', // Use default value '' for null or undefined cases
    sortable: true,
  },
  {
    name: 'Phone',
    selector: (row: any) => row.phone_number || '', // Use default value '' for null or undefined cases
    sortable: true,
  },
  {
    name: 'Gender',
    selector: (row: any) => row.gender || '', // Use default value '' for null or undefined cases
    sortable: true,
  },
  {
    name: 'D.O.B',
    selector: (row: any) => row.date_of_birth || '', // Use default value '' for null or undefined cases
    sortable: true,
  },
];

const TenantsTable: React.FC< IProps> = (props:IProps) => {

  return (
    <DataTableExtensions columns={columns} data={props.data}>
      <DataTable title="Tenants" columns={columns} data={props.data} pagination highlightOnHover />
    </DataTableExtensions>
  );
};

export default TenantsTable;
