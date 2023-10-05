import React from 'react';
import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


interface IProps {
    staffData:{
        first_name: string;
        last_name: string;
        email: string;
        username: string;
        phone_number: string;
        role: string;
    }[]
}

const columns = [
    {
        name: 'Username',
        selector: (row: any) => row.username,
        sortable: true,
    },
    {
        name: 'First Name',
        selector: (row: any) => row.first_name,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: (row: any) => row.last_name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: any) => row.email,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: (row: any) => row.phone_number,
        sortable: true,
    },
    {
        name: 'Role',
        selector: (row: any) => row.role,
        sortable: true,
    },
];

const TeamsTable: React.FC<IProps> = (props:IProps) => {
    

    return (
        <DataTableExtensions columns={columns}
            data={props.staffData}>
            <DataTable title="Staff"
                columns={columns}
                data={props.staffData}
                pagination
                highlightOnHover />
        </DataTableExtensions>);
};

export default TeamsTable;
