import React from 'react';
import DataTable from 'react-data-table-component';
import { activities } from './Activities';

interface Activity {
  date: string;
  event: JSX.Element;
  time: string;
}

const columns = [
  {
    name: 'Date',
    selector: (row: Activity) => row.date,
    sortable: true,
  },
  {
    name: 'Event',
    cell: (row: Activity) => <div>{row.event}</div>,
    sortable: false,
  },
  {
    name: 'Time',
    selector: (row: Activity) => row.time,
    sortable: true,
  },
];

const MyDataTable = () => {
  return <DataTable title="Activity" columns={columns} data={activities} pagination highlightOnHover/>;
};

export default MyDataTable;
