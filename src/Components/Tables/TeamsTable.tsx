import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { IStaff, getStaff } from '../../Services/StaffService';
// @ts-ignore
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";



const columns = [
    {
        name: 'Username',
        selector: (row: IStaff) => row.username,
        sortable: true,
    },
    {
        name: 'First Name',
        selector: (row: IStaff) => row.first_name,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: (row: IStaff) => row.last_name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: IStaff) => row.email,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: (row: IStaff) => row.phone_number,
        sortable: true,
    },
    {
        name: 'Role',
        selector: (row: IStaff) => row.role,
        sortable: true,
    },
];

const TeamsTable = () => {
    const [teams, setTeams] = useState<IStaff[]>([]);
    useEffect(() => {
        // Fetch the appointments for this week
        const fetchStaff = async () => {
            try {
                const team = await getStaff();
                setTeams(team);
            } catch (error) {
                console.error('Error fetching appointments this week:', error);
            }
        };

        fetchStaff();
    }, [teams]);

    return (
        <DataTableExtensions columns={columns}
            data={teams}>
            <DataTable title="Staff"
                columns={columns}
                data={teams}
                pagination
                highlightOnHover />
        </DataTableExtensions>);
};

export default TeamsTable;
